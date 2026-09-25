/* ============================================================
   store.js  —  Everything that must survive a page refresh.
   ------------------------------------------------------------
   All keys are prefixed "vpath-" so this site can never collide
   with the anatomy site if both are ever served from one domain.

   IMPORTANT: if you add a NEW key, also add it to store.backupKeys()
   or the Backup/Restore file will silently miss it.
   ============================================================ */

var store = (function () {

  var PREFIX = "vpath-";

  var KEYS = {
    theme:      PREFIX + "theme",       // "light" (default) | "dark"
    detail:     PREFIX + "detail",      // "standard" | "deep"
    read:       PREFIX + "read",        // { topicId: timestamp }
    bookmarks:  PREFIX + "bookmarks",   // [ "topicId", ... ]
    notes:      PREFIX + "notes",       // { topicId: "note text" }
    highlights: PREFIX + "highlights",  // { topicId: [ {text, color}, ... ] }
    hlColor:    PREFIX + "hl-color",    // "yellow" | "green" | "blue" | "pink" | "orange" | "purple"
    quiz:       PREFIX + "quiz",        // { attempts: [], byUnit: {} }
    reports:    PREFIX + "reports",     // [ { id, at, rows: [] } ] detailed quiz reports
    quizDays:   PREFIX + "quizdays",    // { "2026-09-22": { q, c, s } } questions per day
    goals:      PREFIX + "goals",       // { daily: 20, examDate: "2027-04-15" }
    dashTab:    PREFIX + "dashtab",     // last dashboard tab
    srs:        PREFIX + "srs",         // { questionKey: {box, due, wrong} }
    activity:   PREFIX + "activity",    // { "YYYY-MM-DD": actionCount }
    visits:     PREFIX + "visits",      // number
    onboarded:  PREFIX + "onboarded",   // "1"
    lastTopic:  PREFIX + "last-topic",  // topicId — powers "Resume studying"
    qaDone:     PREFIX + "qa-done",     // [ "qaId", ... ]
    notifySrs:  PREFIX + "notify-srs",  // boolean: whether daily SRS notification is enabled
    notifyTime: PREFIX + "notify-time", // preferred reminder time "HH:MM"
    navPos:     PREFIX + "nav-pos",     // "bottom" | "top" | "left" | "right"
    deepGuideSeen: PREFIX + "deep-guide-seen",
    topicGuideSeen: PREFIX + "topic-guide-seen",
    eventSeen:  PREFIX + "event-announcements-seen",
    installDismissed: PREFIX + "install-dismissed",
    sidebarCollapsed: PREFIX + "sidebar-collapsed",
    revBoxes:   PREFIX + "rev-boxes",   // { boxId: 1 }        — revision box ticked off
    revDrill:   PREFIX + "rev-drill",   // { drillId: 1 | -1 } — 1 right, -1 wrong
    revUnits:   PREFIX + "rev-units",   // { unitId: timestamp } — unit marked revised
    revPrefs:   PREFIX + "rev-prefs"    // { hideAnswers, blur, cols }
  };

  /* ---------- low level ---------- */
  function read(key, fallback) {
    try {
      var raw = localStorage.getItem(key);
      if (raw === null) return fallback;
      return JSON.parse(raw);
    } catch (e) {
      return fallback;
    }
  }

  function write(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch (e) {
      // Quota exceeded or private mode — fail quietly, never break the page.
      console.warn("[store] could not save", key, e);
      return false;
    }
  }

  /* ---------- theme ---------- */
  function getTheme() { return read(KEYS.theme, "light"); }
  function setTheme(v) {
    write(KEYS.theme, v);
    applyTheme();
  }
  function applyTheme() {
    // Light is the canonical Study Studio theme and the default.
    // Dark is a night-reading option the student must choose.
    var t = getTheme();
    document.documentElement.setAttribute("data-theme", t === "dark" ? "dark" : "light");
  }

  /* ---------- detail level (Standard vs Deep) ---------- */
  function getDetail() { return read(KEYS.detail, "standard"); }
  function setDetail(v) { write(KEYS.detail, v); }

  /* ---------- read / progress ---------- */
  function getRead() { return read(KEYS.read, {}); }
  function isRead(id) { return !!getRead()[id]; }
  function toggleRead(id) {
    var m = getRead();
    if (m[id]) delete m[id]; else m[id] = Date.now();
    write(KEYS.read, m);
    logActivity();
    return !!m[id];
  }

  /* ---------- bookmarks ---------- */
  function getBookmarks() { return read(KEYS.bookmarks, []); }
  function isBookmarked(id) { return getBookmarks().indexOf(id) !== -1; }
  function toggleBookmark(id) {
    var a = getBookmarks();
    var i = a.indexOf(id);
    if (i === -1) a.push(id); else a.splice(i, 1);
    write(KEYS.bookmarks, a);
    return i === -1;
  }

  /* ---------- notes ---------- */
  function getNotes() { return read(KEYS.notes, {}); }
  function getNote(id) { return getNotes()[id] || ""; }
  function setNote(id, text) {
    var m = getNotes();
    if (text && text.trim()) m[id] = text; else delete m[id];
    write(KEYS.notes, m);
    logActivity();
  }

  /* ---------- highlights ---------- */
  var VALID_HL_COLORS = ["yellow", "green", "blue", "pink", "orange", "purple"];
  function getHighlightColor() {
    var c = read(KEYS.hlColor, "yellow");
    return VALID_HL_COLORS.indexOf(c) !== -1 ? c : "yellow";
  }
  function setHighlightColor(color) {
    if (VALID_HL_COLORS.indexOf(color) === -1) color = "yellow";
    write(KEYS.hlColor, color);
    return color;
  }
  function getHighlights() { return read(KEYS.highlights, {}); }
  /* A highlight is identified by its text AND where it sits: `occ` is which
     occurrence of that text in the lesson was selected (0 = first), and
     `view` is the detail level ("standard" | "deep") it was made in.
     Legacy highlights have neither and behave as the first occurrence. */
  function sameHl(item, text, occ, view) {
    var itemText = typeof item === "string" ? item : (item ? item.text : "");
    if (itemText !== text) return false;
    var itemOcc = (item && typeof item === "object" && typeof item.occ === "number") ? item.occ : 0;
    var itemView = (item && typeof item === "object" && item.view) ? item.view : "";
    return itemOcc === (occ || 0) && itemView === (view || "");
  }

  function addHighlight(id, text, color, occ, view) {
    color = (color && VALID_HL_COLORS.indexOf(color) !== -1) ? color : getHighlightColor();
    var m = getHighlights();
    if (!m[id]) m[id] = [];
    var entry = { text: text, color: color };
    if (typeof occ === "number" && occ >= 0) entry.occ = occ;
    if (view) entry.view = view;
    var found = false;
    for (var i = 0; i < m[id].length; i++) {
      if (sameHl(m[id][i], text, entry.occ, entry.view)) {
        m[id][i] = entry;
        found = true;
        break;
      }
    }
    if (!found) {
      m[id].push(entry);
    }
    write(KEYS.highlights, m);
    logActivity();
  }
  /* With no `occ`, every highlight of that text is removed (legacy behaviour). */
  function removeHighlight(id, text, occ, view) {
    var m = getHighlights();
    if (!m[id]) return;
    var exact = typeof occ === "number";
    m[id] = m[id].filter(function (t) {
      if (exact) return !sameHl(t, text, occ, view);
      var itemText = typeof t === "string" ? t : (t ? t.text : "");
      return itemText !== text;
    });
    if (!m[id].length) delete m[id];
    write(KEYS.highlights, m);
  }

  /* ---------- quiz results ---------- */
  function getQuiz() {
    var q = read(KEYS.quiz, { attempts: [], byUnit: {}, bySection: {}, byFormat: {} });
    if (!q.attempts) q.attempts = [];
    if (!q.byUnit) q.byUnit = {};
    if (!q.bySection) q.bySection = {};
    if (!q.byFormat) q.byFormat = {};
    if (!q.byDiff) q.byDiff = {};
    return q;
  }

  /* Roll one slice of a result (total/correct) into a running record. */
  function rollUp(bucket, key, total, correct, at) {
    var rec = bucket[key] || { runs: 0, best: 0, totalQ: 0, totalCorrect: 0 };
    rec.runs += 1;
    rec.totalQ += total;
    rec.totalCorrect += correct;
    var pct = total ? Math.round(correct / total * 100) : 0;
    if (pct > rec.best) rec.best = pct;
    rec.last = pct;
    rec.lastAt = at;
    rec.accuracy = rec.totalQ ? Math.round(rec.totalCorrect / rec.totalQ * 100) : 0;
    bucket[key] = rec;
  }

  function saveAttempt(attempt) {
    var q = getQuiz();
    attempt.pct = attempt.total ? Math.round(attempt.correct / attempt.total * 100) : 0;
    q.attempts.push(attempt);
    if (q.attempts.length > 200) q.attempts = q.attempts.slice(-200);

    /* Unit mastery. perUnit comes from the questions actually asked, so a
       sub-section test, a paper test or a grand test all credit the right
       unit(s) instead of only an exactly matching scope string. */
    var perUnit = attempt.perUnit;
    if (perUnit && Object.keys(perUnit).length) {
      Object.keys(perUnit).forEach(function (k) {
        rollUp(q.byUnit, k, perUnit[k].total, perUnit[k].correct, attempt.at);
      });
    } else {
      rollUp(q.byUnit, attempt.scope, attempt.total, attempt.correct, attempt.at);
    }

    // Sub-section mastery
    var perSection = attempt.perSection || {};
    Object.keys(perSection).forEach(function (k) {
      rollUp(q.bySection, k, perSection[k].total, perSection[k].correct, attempt.at);
    });

    // Lifetime accuracy per question format
    var fmts = attempt.formats || {};
    Object.keys(fmts).forEach(function (f) {
      if (!fmts[f] || !fmts[f].total) return;
      var rec = q.byFormat[f] || { total: 0, right: 0 };
      rec.total += fmts[f].total;
      rec.right += fmts[f].right;
      q.byFormat[f] = rec;
    });

    // Lifetime accuracy per difficulty tier (1 foundational \u2192 3 hardest)
    if (!q.byDiff) q.byDiff = {};
    var diffs = attempt.diffs || {};
    Object.keys(diffs).forEach(function (d) {
      if (!diffs[d] || !diffs[d].total) return;
      var rec = q.byDiff[d] || { total: 0, right: 0 };
      rec.total += diffs[d].total;
      rec.right += diffs[d].right;
      q.byDiff[d] = rec;
    });

    write(KEYS.quiz, q);
    logQuizDay(attempt.total || 0, attempt.correct || 0, attempt.seconds || 0);
    logActivity();
  }

  /* ---------- daily study ledger, goals and exam countdown ---------- */
  function getQuizDays() { return read(KEYS.quizDays, {}) || {}; }

  function logQuizDay(total, correct, seconds) {
    var m = getQuizDays();
    var t = today();
    var d = m[t] || { q: 0, c: 0, s: 0 };
    d.q += total;
    d.c += correct;
    d.s += seconds;
    m[t] = d;

    // Keep roughly a year of history, nothing more.
    var keys = Object.keys(m).sort();
    if (keys.length > 400) {
      keys.slice(0, keys.length - 400).forEach(function (k) { delete m[k]; });
    }
    write(KEYS.quizDays, m);
  }

  /* Totals for the last n days (n = 7 gives this week vs last week). */
  function quizDaysRange(fromDaysAgo, toDaysAgo) {
    var m = getQuizDays();
    var out = { q: 0, c: 0, s: 0, days: 0 };
    for (var i = fromDaysAgo; i > toDaysAgo; i--) {
      var d = new Date();
      d.setDate(d.getDate() - (i - 1));
      var key = d.getFullYear() + "-" +
        String(d.getMonth() + 1).padStart(2, "0") + "-" +
        String(d.getDate()).padStart(2, "0");
      var rec = m[key];
      if (rec) {
        out.q += rec.q; out.c += rec.c; out.s += rec.s;
        if (rec.q) out.days++;
      }
    }
    return out;
  }

  function todayQuiz() {
    return getQuizDays()[today()] || { q: 0, c: 0, s: 0 };
  }

  function getGoals() {
    var g = read(KEYS.goals, {}) || {};
    if (!g.daily) g.daily = 20;
    return g;
  }
  function setDailyGoal(n) {
    var g = getGoals();
    g.daily = Math.max(5, Math.min(200, parseInt(n, 10) || 20));
    write(KEYS.goals, g);
    return g.daily;
  }
  function setExamDate(iso) {
    var g = getGoals();
    if (iso) g.examDate = iso; else delete g.examDate;
    write(KEYS.goals, g);
    return g.examDate || null;
  }
  function daysToExam() {
    var g = getGoals();
    if (!g.examDate) return null;
    var exam = new Date(g.examDate + "T00:00:00");
    if (isNaN(exam.getTime())) return null;
    var now = new Date();
    now.setHours(0, 0, 0, 0);
    return Math.round((exam - now) / 86400000);
  }

  function getDashTab() { return read(KEYS.dashTab, "overview") || "overview"; }
  function setDashTab(t) { write(KEYS.dashTab, t); }

  /* ---------- detailed quiz reports ----------
     One report per finished quiz, kept small on purpose: each row stores the
     question key, what you answered and how long you took, so the full
     question, options and explanation are looked up from the bank when the
     report is opened again. */
  var MAX_REPORTS = 15;

  function getReports() {
    var list = read(KEYS.reports, []);
    return Array.isArray(list) ? list : [];
  }

  function saveReport(report) {
    var list = getReports();
    report.id = report.id || ("r" + report.at + "-" + Math.floor(Math.random() * 1000));
    list.push(report);
    if (list.length > MAX_REPORTS) list = list.slice(-MAX_REPORTS);
    write(KEYS.reports, list);
    return report.id;
  }

  function getReport(id) {
    var list = getReports();
    for (var i = list.length - 1; i >= 0; i--) {
      if (list[i].id === id) return list[i];
    }
    return null;
  }

  function latestReport() {
    var list = getReports();
    return list.length ? list[list.length - 1] : null;
  }

  function clearReports() { write(KEYS.reports, []); }

  /* ---------- spaced repetition (Leitner boxes 1-5) ---------- */
  function getSrs() { return read(KEYS.srs, {}); }
  function gradeSrs(key, correct) {
    var m = getSrs();
    var item = m[key] || { box: 1, due: 0, wrong: 0, seen: 0 };
    item.seen += 1;
    if (correct) {
      item.box = Math.min(5, item.box + 1);
    } else {
      item.box = 1;
      item.wrong += 1;
    }
    // Box 1..5 → review in 1, 2, 4, 8, 16 days
    var days = Math.pow(2, item.box - 1);
    item.due = Date.now() + days * 86400000;
    m[key] = item;
    write(KEYS.srs, m);
  }
  function dueSrs() {
    var m = getSrs(), now = Date.now(), out = [];
    for (var k in m) if (m[k].due <= now) out.push(k);
    return out;
  }

  /* ---------- activity / streak ---------- */
  function today() {
    var d = new Date();
    return d.getFullYear() + "-" +
      String(d.getMonth() + 1).padStart(2, "0") + "-" +
      String(d.getDate()).padStart(2, "0");
  }
  function getActivity() { return read(KEYS.activity, {}); }
  function logActivity() {
    var m = getActivity();
    var t = today();
    m[t] = (m[t] || 0) + 1;
    write(KEYS.activity, m);
  }
  function computeStreak() {
    var m = getActivity();
    var cur = 0, longest = 0, run = 0;
    var d = new Date();

    // Grace: if nothing logged today yet, start counting from yesterday.
    if (!m[today()]) d.setDate(d.getDate() - 1);

    for (var i = 0; i < 400; i++) {
      var key = d.getFullYear() + "-" +
        String(d.getMonth() + 1).padStart(2, "0") + "-" +
        String(d.getDate()).padStart(2, "0");
      if (m[key]) { cur++; d.setDate(d.getDate() - 1); }
      else break;
    }
    var days = Object.keys(m).sort();
    for (var j = 0; j < days.length; j++) {
      if (j > 0) {
        var prev = new Date(days[j - 1]), now2 = new Date(days[j]);
        run = ((now2 - prev) / 86400000 === 1) ? run + 1 : 1;
      } else run = 1;
      if (run > longest) longest = run;
    }
    return { current: cur, longest: Math.max(longest, cur), totalDays: days.length };
  }

  /* ---------- misc ---------- */
  function bumpVisits() {
    var n = (read(KEYS.visits, 0) || 0) + 1;
    write(KEYS.visits, n);
    return n;
  }
  function getVisits() { return read(KEYS.visits, 0) || 0; }
  function getLastTopic() { return read(KEYS.lastTopic, null); }
  function setLastTopic(id) { write(KEYS.lastTopic, id); }

  /* ---------- rapid revision (#/revision) ---------- */
  function getRevBoxes() { return read(KEYS.revBoxes, {}); }
  function isRevBoxDone(id) { return !!getRevBoxes()[id]; }
  function toggleRevBox(id) {
    var m = getRevBoxes();
    if (m[id]) delete m[id]; else m[id] = Date.now();
    write(KEYS.revBoxes, m);
    logActivity();
    return !!m[id];
  }
  function setRevBoxes(ids, on) {
    var m = getRevBoxes();
    (ids || []).forEach(function (id) { if (on) m[id] = Date.now(); else delete m[id]; });
    write(KEYS.revBoxes, m);
    logActivity();
  }

  function getRevDrill() { return read(KEYS.revDrill, {}); }
  function gradeRevDrill(id, right) {
    var m = getRevDrill();
    var v = right ? 1 : -1;
    if (m[id] === v) delete m[id]; else m[id] = v;   // tapping the same button clears it
    write(KEYS.revDrill, m);
    logActivity();
    return m[id] || 0;
  }
  function clearRevDrill(ids) {
    var m = getRevDrill();
    (ids || []).forEach(function (id) { delete m[id]; });
    write(KEYS.revDrill, m);
  }

  function getRevUnits() { return read(KEYS.revUnits, {}); }
  function isRevUnitDone(id) { return !!getRevUnits()[id]; }
  function toggleRevUnit(id) {
    var m = getRevUnits();
    if (m[id]) delete m[id]; else m[id] = Date.now();
    write(KEYS.revUnits, m);
    logActivity();
    return !!m[id];
  }

  function getRevPrefs() {
    var d = { hideAnswers: false, blur: false, cols: true };
    var p = read(KEYS.revPrefs, d) || d;
    return {
      hideAnswers: !!p.hideAnswers,
      blur: !!p.blur,
      cols: p.cols !== false
    };
  }
  function setRevPref(k, v) {
    var p = getRevPrefs();
    p[k] = v;
    write(KEYS.revPrefs, p);
    return p;
  }

  /* ---------- onboarding ---------- */
  function isOnboarded() { return !!read(KEYS.onboarded, false); }
  function setOnboarded() { write(KEYS.onboarded, 1); }
  function resetOnboarding() {
    try { localStorage.removeItem(KEYS.onboarded); } catch (e) {}
  }

  function getQaDone() { return read(KEYS.qaDone, []); }
  function toggleQaDone(id) {
    var a = getQaDone(), i = a.indexOf(id);
    if (i === -1) a.push(id); else a.splice(i, 1);
    write(KEYS.qaDone, a);
    logActivity();
    return i === -1;
  }

  /* ---------- nav position (Desktop) ---------- */
  function getNavPos() { return read(KEYS.navPos, "left"); }
  function setNavPos(pos) {
    write(KEYS.navPos, pos);
    applyNavPos();
  }
  function applyNavPos() {
    var pos = getNavPos();
    document.documentElement.setAttribute("data-nav-pos", pos);
  }

  /* ---------- sidebar collapsed state (Desktop) ---------- */
  function isSidebarCollapsed() { return !!read(KEYS.sidebarCollapsed, false); }
  function setSidebarCollapsed(val) {
    write(KEYS.sidebarCollapsed, !!val);
    applySidebarState();
  }
  function toggleSidebarCollapsed() {
    var next = !isSidebarCollapsed();
    setSidebarCollapsed(next);
    return next;
  }
  function applySidebarState() {
    try {
      if (document.body) {
        if (isSidebarCollapsed()) document.body.classList.add("sidebar-collapsed");
        else document.body.classList.remove("sidebar-collapsed");
      }
    } catch (e) {}
  }

  /* ---------- daily SRS notifications ---------- */
  function getSrsNotify() { return read(KEYS.notifySrs, false); }
  function setSrsNotify(bool) { write(KEYS.notifySrs, !!bool); }
  function getSrsNotifyTime() { return read(KEYS.notifyTime, "19:00"); }
  function setSrsNotifyTime(t) { write(KEYS.notifyTime, t || "19:00"); }

  /* ---------- backup / restore ---------- */
  function backupKeys() {
    var out = [];
    for (var k in KEYS) out.push(KEYS[k]);
    return out;
  }

  function exportBackup() {
    var payload = { _app: "vet-pathology-studio", _version: 1, _at: new Date().toISOString(), data: {} };
    backupKeys().forEach(function (k) {
      var v = localStorage.getItem(k);
      if (v !== null) payload.data[k] = v;
    });
    var blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
    var a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "vet-pathology-backup-" + today() + ".json";
    document.body.appendChild(a);
    a.click();
    setTimeout(function () { URL.revokeObjectURL(a.href); a.remove(); }, 500);
  }

  function importBackup(file, onDone) {
    var r = new FileReader();
    r.onload = function () {
      try {
        var p = JSON.parse(r.result);
        if (!p || p._app !== "vet-pathology-studio" || !p.data) {
          onDone(false, "That does not look like a Vet Pathology backup file.");
          return;
        }
        for (var k in p.data) localStorage.setItem(k, p.data[k]);
        onDone(true, "Restored. Reloading...");
      } catch (e) {
        onDone(false, "The file could not be read.");
      }
    };
    r.readAsText(file);
  }

  function resetAll() {
    backupKeys().forEach(function (k) { localStorage.removeItem(k); });
  }

  /* ---------- public API ---------- */
  return {
    KEYS: KEYS,
    getTheme: getTheme, setTheme: setTheme, applyTheme: applyTheme,
    getDetail: getDetail, setDetail: setDetail,
    getRead: getRead, isRead: isRead, toggleRead: toggleRead,
    getBookmarks: getBookmarks, isBookmarked: isBookmarked, toggleBookmark: toggleBookmark,
    getNotes: getNotes, getNote: getNote, setNote: setNote,
    getHighlights: getHighlights, addHighlight: addHighlight, removeHighlight: removeHighlight,
    getHighlightColor: getHighlightColor, setHighlightColor: setHighlightColor, VALID_HL_COLORS: VALID_HL_COLORS,
    getQuiz: getQuiz, saveAttempt: saveAttempt,
    getQuizDays: getQuizDays, quizDaysRange: quizDaysRange, todayQuiz: todayQuiz,
    getGoals: getGoals, setDailyGoal: setDailyGoal, setExamDate: setExamDate, daysToExam: daysToExam,
    getDashTab: getDashTab, setDashTab: setDashTab,
    getReports: getReports, saveReport: saveReport, getReport: getReport,
    latestReport: latestReport, clearReports: clearReports,
    getSrs: getSrs, gradeSrs: gradeSrs, dueSrs: dueSrs,
    getActivity: getActivity, logActivity: logActivity, computeStreak: computeStreak,
    bumpVisits: bumpVisits, getVisits: getVisits,
    getLastTopic: getLastTopic, setLastTopic: setLastTopic,
    isOnboarded: isOnboarded, setOnboarded: setOnboarded, resetOnboarding: resetOnboarding,
    getQaDone: getQaDone, toggleQaDone: toggleQaDone,
    getRevBoxes: getRevBoxes, isRevBoxDone: isRevBoxDone,
    toggleRevBox: toggleRevBox, setRevBoxes: setRevBoxes,
    getRevDrill: getRevDrill, gradeRevDrill: gradeRevDrill, clearRevDrill: clearRevDrill,
    getRevUnits: getRevUnits, isRevUnitDone: isRevUnitDone, toggleRevUnit: toggleRevUnit,
    getRevPrefs: getRevPrefs, setRevPref: setRevPref,
    getNavPos: getNavPos, setNavPos: setNavPos, applyNavPos: applyNavPos,
    isSidebarCollapsed: isSidebarCollapsed, setSidebarCollapsed: setSidebarCollapsed,
    toggleSidebarCollapsed: toggleSidebarCollapsed, applySidebarState: applySidebarState,
    getSrsNotify: getSrsNotify, setSrsNotify: setSrsNotify,
    getSrsNotifyTime: getSrsNotifyTime, setSrsNotifyTime: setSrsNotifyTime,
    backupKeys: backupKeys, exportBackup: exportBackup, importBackup: importBackup,
    resetAll: resetAll,
    today: today
  };
})();

/* Apply the saved theme, navigation dock position, and sidebar visibility immediately. */
store.applyTheme();
store.applyNavPos();
store.applySidebarState();
