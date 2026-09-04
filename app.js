/* ============================================================
   app.js  —  Shell, router and section renderers
   ------------------------------------------------------------
   Vanilla JS. No framework, no build step.

   ROUTES (hash based, so it works from file:// and any host)
     #/                     Home
     #/theory               Theory — the six units
     #/practical            Practical — the six units
     #/unit/<unitId>        One unit, its topic list
     #/topic/<topicId>      One lesson
     #/why                  WHY section
     #/qa                   Question & Answer bank
     #/qa/<unitId>          Q&A for one unit
     #/quiz                 Quiz hub  (rendered by quiz.js)
     #/dashboard            Dashboard (rendered by dashboard.js)
     #/library              Bookmarks · Notes · Highlights
     #/me                   Settings, backup, about
   ============================================================ */

var app = (function () {

  var view;              // the <main> container we render into
  var state = { route: "", section: "home", params: {} };

  /* ============================================================
     ICONS — inline SVG, no icon font, no network request
     ============================================================ */
  var ICONS = {
    home:      '<path d="M3 10.5 12 3l9 7.5"/><path d="M5 9.5V21h14V9.5"/>',
    theory:    '<path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H20v18H6.5A2.5 2.5 0 0 0 4 22z"/><path d="M9 7h7M9 11h7"/>',
    practical: '<path d="M9 3v6.5L4.5 18A2 2 0 0 0 6.3 21h11.4a2 2 0 0 0 1.8-3L15 9.5V3"/><path d="M8 3h8M7.5 14h9"/>',
    why:       '<circle cx="12" cy="12" r="9"/><path d="M9.2 9a3 3 0 1 1 4 2.8c-.8.4-1.2 1-1.2 1.9v.3"/><path d="M12 17.5h.01"/>',
    qa:        '<path d="M21 12a8 8 0 1 1-3.1-6.3"/><path d="M21 4v5h-5"/><path d="M9.5 9.5a2.5 2.5 0 1 1 3.2 2.4c-.7.3-1.2.9-1.2 1.7"/><path d="M11.5 16.5h.01"/>',
    quiz:      '<path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H18a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6.5A2.5 2.5 0 0 1 4 18.5z"/><path d="m9 11 2 2 4-4"/>',
    dashboard: '<rect x="3" y="3" width="7.5" height="8" rx="1.5"/><rect x="13.5" y="3" width="7.5" height="5" rx="1.5"/><rect x="3" y="14" width="7.5" height="7" rx="1.5"/><rect x="13.5" y="11" width="7.5" height="10" rx="1.5"/>',
    library:   '<path d="M5 4h4v16H5zM11 4h3v16h-3z"/><path d="m17.2 4.7 3 15.1"/>',
    me:        '<circle cx="12" cy="8" r="3.6"/><path d="M4.5 20.5a7.5 7.5 0 0 1 15 0"/>',
    search:    '<circle cx="11" cy="11" r="7"/><path d="m20 20-3.6-3.6"/>',
    sun:       '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.5 1.5M17.6 17.6l1.5 1.5M2 12h2M20 12h2M4.9 19.1l1.5-1.5M17.6 6.4l1.5-1.5"/>',
    moon:      '<path d="M20 14.5A8.5 8.5 0 1 1 9.5 4a7 7 0 0 0 10.5 10.5"/>',
    menu:      '<path d="M4 7h16M4 12h16M4 17h16"/>',
    close:     '<path d="M6 6l12 12M18 6L6 18"/>',
    check:     '<path d="m4 12.5 5 5L20 6.5"/>',
    star:      '<path d="m12 3.5 2.6 5.4 5.9.8-4.3 4.1 1 5.9-5.2-2.8-5.2 2.8 1-5.9L3.5 9.7l5.9-.8z"/>',
    note:      '<path d="M5 3.5h14v13l-4.5 4.5H5z"/><path d="M19 16.5h-4.5V21"/><path d="M9 9h6M9 12.5h4"/>',
    chevron:   '<path d="m9 5 7 7-7 7"/>',
    back:      '<path d="M15 5 8 12l7 7"/>',
    flame:     '<path d="M12 22c4 0 6.5-2.6 6.5-6 0-4.5-4.5-6-4.5-10 0 0-2.5 1.5-2.5 4.5 0 1.6-1 2.5-2 2.5s-1.5-.8-1.5-2C6.4 12.6 5.5 14.3 5.5 16c0 3.4 2.5 6 6.5 6z"/>',
    target:    '<circle cx="12" cy="12" r="8.5"/><circle cx="12" cy="12" r="4.5"/><circle cx="12" cy="12" r="1"/>',
    clock:     '<circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3 2"/>',
    download:  '<path d="M12 3v11"/><path d="m7.5 10 4.5 4.5L16.5 10"/><path d="M4.5 20h15"/>',
    upload:    '<path d="M12 15V4"/><path d="m7.5 8.5 4.5-4.5 4.5 4.5"/><path d="M4.5 20h15"/>',
    trash:     '<path d="M4.5 6.5h15"/><path d="M9 6.5V4.5h6v2"/><path d="M6.5 6.5 7.5 21h9l1-14.5"/>',
    book:      '<path d="M4 5a2 2 0 0 1 2-2h6v18H6a2 2 0 0 1-2-2z"/><path d="M20 5a2 2 0 0 0-2-2h-6v18h6a2 2 0 0 0 2-2z"/>',
    lab:       '<path d="M9 3v6.5L4.5 18A2 2 0 0 0 6.3 21h11.4a2 2 0 0 0 1.8-3L15 9.5V3"/><path d="M8 3h8"/>',
    speaker:   '<path d="M11 5 6.5 9H3v6h3.5L11 19z"/><path d="M15 9.5a3.5 3.5 0 0 1 0 5"/><path d="M17.5 7a7 7 0 0 1 0 10"/>',
    stop:      '<rect x="6" y="6" width="12" height="12" rx="2"/>',
    pen:       '<path d="M4 20h4L19.5 8.5a2.1 2.1 0 0 0-3-3L5 17z"/><path d="M14.5 6.5l3 3"/>',
    share:     '<circle cx="18" cy="5.5" r="2.5"/><circle cx="6" cy="12" r="2.5"/><circle cx="18" cy="18.5" r="2.5"/><path d="m8.2 10.8 7.6-4M8.2 13.2l7.6 4"/>'
  };

  function icon(name, cls) {
    var d = ICONS[name] || ICONS.book;
    return '<svg class="ico ' + (cls || '') + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' +
      'stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + d + '</svg>';
  }

  /* ============================================================
     SMALL HELPERS
     ============================================================ */
  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;")
      .replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }

  function el(sel) { return document.querySelector(sel); }
  function els(sel) { return Array.prototype.slice.call(document.querySelectorAll(sel)); }

  function pct(done, total) { return total ? Math.round(done / total * 100) : 0; }

  /* How many topics in a unit are marked read */
  function unitProgress(unit) {
    var readMap = store.getRead();
    var done = unit.topics.filter(function (t) { return readMap[t.id]; }).length;
    return { done: done, total: unit.topics.length, pct: pct(done, unit.topics.length) };
  }

  /* Does this unit have any lesson content written yet? */
  function topicContent(topicId) {
    var t = syllabus.topicById[topicId];
    if (!t) return null;
    var bank = (t.stream === "theory")
      ? (window.theoryData || {})
      : (window.practicalData || {});
    var unitBucket = bank[t.unitId] || {};
    return unitBucket[topicId] || null;
  }

  function hasContent(topicId) {
    var c = topicContent(topicId);
    if (!c) return false;
    return !!((c.desc && c.desc.trim()) ||
              (c.eliteDesc && c.eliteDesc.trim()) ||
              (c.keyPoints && c.keyPoints.length));
  }

  function unitContentCount(unit) {
    return unit.topics.filter(function (t) { return hasContent(t.id); }).length;
  }

  /* Count only questions that have actually been written.
     The data files ship with empty template rows; those must never
     be counted, or the unit card promises questions the quiz cannot find. */
  function questionCount(unitId) {
    var b = (window.quizBank || {})[unitId];
    if (!b) return 0;
    return ["mcq", "tf", "fib"].reduce(function (n, f) {
      return n + (b[f] || []).filter(function (q) {
        return q && q.q && String(q.q).trim();
      }).length;
    }, 0);
  }

  function qaCount(unitId) {
    return ((window.qaBank || {})[unitId] || []).filter(function (q) {
      return q && q.question && String(q.question).trim();
    }).length;
  }

  function ringHtml(percent, size, label) {
    size = size || 78;
    var r = (size / 2) - 6;
    var c = 2 * Math.PI * r;
    var dash = (percent / 100) * c;
    return '<div class="ring" style="--ring-size:' + size + 'px">' +
      '<svg viewBox="0 0 ' + size + ' ' + size + '">' +
      '<circle class="ring__track" cx="' + size / 2 + '" cy="' + size / 2 + '" r="' + r + '" fill="none" stroke-width="5"/>' +
      '<circle class="ring__val" cx="' + size / 2 + '" cy="' + size / 2 + '" r="' + r + '" fill="none" stroke-width="5" ' +
      'stroke-dasharray="' + dash.toFixed(1) + ' ' + c.toFixed(1) + '"/>' +
      '</svg><div class="ring__label">' + (label != null ? label : percent + "%") + '</div></div>';
  }

  /* ============================================================
     ROUTER
     ============================================================ */
  function parseHash() {
    var h = (location.hash || "#/").replace(/^#/, "");
    var parts = h.split("/").filter(Boolean);
    return parts;
  }

  function route() {
    var p = parseHash();
    var name = p[0] || "home";

    state.route = location.hash || "#/";
    state.params = { a: p[1] || null, b: p[2] || null };

    stopSpeech();   // never let a lesson keep reading after you leave it

    var map = {
      home: "home", theory: "theory", practical: "practical",
      unit: "unit", topic: "topic", why: "why", qa: "qa",
      quiz: "quiz", dashboard: "dashboard", library: "library", me: "me"
    };
    state.section = map[name] || "home";

    // Section accent colour
    var accentFor = {
      theory: "theory", unit: "theory", topic: "theory",
      practical: "practical", quiz: "quiz", why: "why",
      dashboard: "dashboard", qa: "theory"
    };
    var sec = accentFor[state.section] || "";
    if (sec) document.body.setAttribute("data-section", sec);
    else document.body.removeAttribute("data-section");

    // Practical pages should use the teal accent even when routed via unit/topic
    if ((state.section === "unit" || state.section === "topic") && state.params.a) {
      var isPrac = (state.section === "unit")
        ? state.params.a.indexOf("prac-") === 0
        : (syllabus.topicById[state.params.a] || {}).stream === "practical";
      if (isPrac) document.body.setAttribute("data-section", "practical");
    }

    render();
    refreshNav();
    closeNav();
    window.scrollTo(0, 0);
    var c = el(".content");
    if (c) c.scrollTop = 0;
  }

  function go(hash) { location.hash = hash; }

  /* ============================================================
     RENDER DISPATCH
     ============================================================ */
  function render() {
    var fn = {
      home: renderHome,
      theory: function () { renderStream("theory"); },
      practical: function () { renderStream("practical"); },
      unit: renderUnit,
      topic: renderTopic,
      why: renderWhy,
      qa: renderQa,
      library: renderLibrary,
      me: renderMe,
      quiz: function () {
        if (window.quizApp && quizApp.render) quizApp.render(view, state.params);
        else view.innerHTML = notReady("Quiz");
      },
      dashboard: function () {
        if (window.dashboardApp && dashboardApp.render) dashboardApp.render(view);
        else view.innerHTML = notReady("Dashboard");
      }
    }[state.section] || renderHome;

    fn();
    setCrumbs();
  }

  function notReady(what) {
    return '<div class="empty"><h3>' + esc(what) + ' is loading</h3>' +
      '<p>If you keep seeing this, the script file for this section did not load. Check that all files in <code>js/</code> are present.</p></div>';
  }

  /* ============================================================
     BREADCRUMBS
     ============================================================ */
  function setCrumbs() {
    var c = el("#crumbs");
    if (!c) return;
    var parts = ['<a href="#/">Home</a>'];

    function push(label, href) {
      parts.push('<span class="sep">/</span>');
      parts.push(href ? '<a href="' + href + '">' + esc(label) + '</a>'
                      : '<span class="cur">' + esc(label) + '</span>');
    }

    if (state.section === "theory") push("Theory");
    else if (state.section === "practical") push("Practical");
    else if (state.section === "why") push("WHY");
    else if (state.section === "qa") push("Q & A");
    else if (state.section === "quiz") push("Quiz");
    else if (state.section === "dashboard") push("Dashboard");
    else if (state.section === "library") push("Library");
    else if (state.section === "me") push("Settings");
    else if (state.section === "unit") {
      var u = syllabus.unitById[state.params.a];
      if (u) {
        push(u.stream === "theory" ? "Theory" : "Practical", "#/" + u.stream);
        push("Unit " + u.no);
      }
    } else if (state.section === "topic") {
      var t = syllabus.topicById[state.params.a];
      if (t) {
        var u2 = syllabus.unitById[t.unitId];
        push(t.stream === "theory" ? "Theory" : "Practical", "#/" + t.stream);
        push("Unit " + u2.no, "#/unit/" + u2.id);
        push(t.title);
      }
    }
    c.innerHTML = parts.join(" ");
  }

  /* ============================================================
     HOME
     ============================================================ */
  function renderHome() {
    var readMap = store.getRead();
    var allTopics = syllabus.allUnits.reduce(function (n, u) { return n + u.topics.length; }, 0);
    var readCount = Object.keys(readMap).length;
    var streak = store.computeStreak();
    var q = store.getQuiz();
    var last = store.getLastTopic();
    var lastT = last ? syllabus.topicById[last] : null;

    var totalQ = Object.keys(window.quizBank || {}).reduce(function (n, k) { return n + questionCount(k); }, 0);
    var totalQa = Object.keys(window.qaBank || {}).reduce(function (n, k) { return n + qaCount(k); }, 0);
    var totalWhy = (window.whyData || []).filter(function (w) { return w.title; }).length;

    var accuracy = 0;
    if (q.attempts.length) {
      var tot = 0, cor = 0;
      q.attempts.forEach(function (a) { tot += a.total; cor += a.correct; });
      accuracy = pct(cor, tot);
    }

    view.innerHTML =
      '<section class="hero">' +
        '<div class="hero__inner">' +
          '<span class="eyebrow">B.V.Sc &amp; A.H. · Second Year · VCI Syllabus</span>' +
          '<h1 class="hero__title">Veterinary Pathology<br><span class="hero__title-accent">Studio</span></h1>' +
          '<p class="lede hero__lede">Six theory units, six practical units, a question bank and a quiz engine — ' +
          'built for students at ICAR-IVRI, Izatnagar. Works offline once loaded.</p>' +
          '<div class="hero__cta">' +
            (lastT
              ? '<a class="btn btn--primary btn--lg" href="#/topic/' + lastT.id + '">Resume: ' + esc(shorten(lastT.title, 34)) + '</a>'
              : '<a class="btn btn--primary btn--lg" href="#/theory">Start with Unit 1</a>') +
            '<a class="btn btn--lg" href="#/quiz">Take a quiz</a>' +
          '</div>' +
        '</div>' +
      '</section>' +

      '<div class="grid grid--4 mt-8">' +
        statCard("Topics read", readCount + " / " + allTopics, pct(readCount, allTopics) + "% of the syllabus", "check") +
        statCard("Day streak", streak.current, streak.longest + " day best", "flame") +
        statCard("Quiz accuracy", q.attempts.length ? accuracy + "%" : "—", q.attempts.length + " attempts", "target") +
        statCard("Questions ready", totalQ, totalQa + " written Q&A", "quiz") +
      '</div>' +

      '<h2 class="mt-12">Study areas</h2>' +
      '<div class="grid grid--3 mt-4">' +
        areaCard("theory", "Theory", "Six units, " + countTopics("theory") + " topics", "The complete VCI theory syllabus from general pathology to wildlife disease.", "#/theory") +
        areaCard("practical", "Practical", "Six units, " + countTopics("practical") + " topics", "Gross specimens, histopathology technique, haematology and necropsy.", "#/practical") +
        areaCard("quiz", "Quiz", totalQ + " questions", "Unit-wise, paper-wise, grand test, timed exam mode and smart review.", "#/quiz") +
        areaCard("qa", "Question &amp; Answer", totalQa + " questions", "Short notes, long answers and differentiate-between tables for the written exam.", "#/qa") +
        areaCard("why", "WHY", totalWhy + " explanations", "Mechanism first. Why the lesion looks the way it does, not just what it is.", "#/why") +
        areaCard("dashboard", "Dashboard", "Progress &amp; analytics", "Unit heatmap, accuracy trend, weak areas and your spaced-repetition queue.", "#/dashboard") +
      '</div>' +

      '<h2 class="mt-12">Exam structure</h2>' +
      '<p class="muted mt-2">Your annual examination splits the six units across two papers.</p>' +
      '<div class="grid grid--2 mt-4">' +
        paperCard(syllabus.meta.papers[0]) +
        paperCard(syllabus.meta.papers[1]) +
      '</div>';
  }

  function shorten(s, n) { return s.length > n ? s.slice(0, n - 1) + "…" : s; }

  function countTopics(stream) {
    return syllabus[stream].reduce(function (n, u) { return n + u.topics.length; }, 0);
  }

  function statCard(label, value, hint, ic) {
    return '<div class="card stat-card">' +
      '<div class="stat-card__icon">' + icon(ic) + '</div>' +
      '<div class="stat">' +
        '<span class="stat__label">' + label + '</span>' +
        '<span class="stat__value">' + value + '</span>' +
        '<span class="stat__hint">' + hint + '</span>' +
      '</div></div>';
  }

  function areaCard(sec, title, meta, desc, href) {
    return '<a class="card card--link areacard" data-section="' + sec + '" href="' + href + '">' +
      '<div class="areacard__icon">' + icon(sec) + '</div>' +
      '<div class="card__title mt-4">' + title + '</div>' +
      '<div class="chip chip--accent mt-2">' + meta + '</div>' +
      '<p class="card__desc">' + desc + '</p>' +
      '</a>';
  }

  function paperCard(p) {
    var units = p.units.map(function (n) {
      var u = syllabus.theory[n - 1];
      return '<li>Unit ' + n + ' — ' + esc(u.short) + '</li>';
    }).join("");
    return '<div class="card">' +
      '<div class="row"><h3>' + p.name + '</h3>' +
      '<span class="chip push">Weightage ' + p.weightage + '</span></div>' +
      '<ul class="mt-3 muted">' + units + '</ul>' +
      '<div class="card__foot"><span>Theory ' + p.theoryMarks + ' marks</span>' +
      '<span>Practical ' + p.practicalMarks + ' marks</span>' +
      '<a class="push" href="#/quiz/paper/' + p.id + '">Practise this paper →</a></div>' +
      '</div>';
  }

  /* ============================================================
     THEORY / PRACTICAL — unit lists
     ============================================================ */
  function renderStream(stream) {
    var units = syllabus[stream];
    var isTheory = stream === "theory";

    var totalTopics = countTopics(stream);
    var readMap = store.getRead();
    var readN = units.reduce(function (n, u) {
      return n + u.topics.filter(function (t) { return readMap[t.id]; }).length;
    }, 0);

    var cards = units.map(function (u) {
      var pr = unitProgress(u);
      var written = unitContentCount(u);
      return '<a class="card card--link unitcard" href="#/unit/' + u.id + '">' +
        '<div class="row row--wrap">' +
          '<span class="unitcard__no">Unit ' + u.no + '</span>' +
          '<span class="chip push">' + (u.paper === "paper-1" ? "Paper I" : "Paper II") + '</span>' +
        '</div>' +
        '<div class="card__title mt-2">' + esc(u.title) + '</div>' +
        '<p class="card__desc">' + esc(u.blurb) + '</p>' +
        '<div class="bar mt-4"><div class="bar__fill" style="width:' + pr.pct + '%"></div></div>' +
        '<div class="unitcard__meta">' +
          '<span>' + u.topics.length + ' topics</span>' +
          '<span>' + pr.done + ' read</span>' +
          '<span>' + written + ' written</span>' +
          '<span>' + questionCount(u.id) + ' questions</span>' +
        '</div>' +
      '</a>';
    }).join("");

    view.innerHTML =
      '<div class="pagehead">' +
        '<span class="eyebrow">' + (isTheory ? "4 credit hours" : "2 credit hours") + '</span>' +
        '<h1>' + (isTheory ? "Theory" : "Practical") + '</h1>' +
        '<p class="lede">' + (isTheory
          ? "The six theory units of the VCI Veterinary Pathology syllabus. Units 1–3 form Paper I; Units 4–6 form Paper II."
          : "The six practical units. Gross specimens, histopathology technique, clinical pathology and necropsy.") + '</p>' +
        '<div class="row row--wrap mt-4">' +
          '<span class="chip chip--accent">' + readN + ' / ' + totalTopics + ' topics read</span>' +
          '<span class="chip">' + units.length + ' units</span>' +
        '</div>' +
      '</div>' +
      '<div class="grid grid--2">' + cards + '</div>';
  }

  /* ============================================================
     ONE UNIT — topic list
     ============================================================ */
  function renderUnit() {
    var u = syllabus.unitById[state.params.a];
    if (!u) { view.innerHTML = missing("unit"); return; }

    var pr = unitProgress(u);
    var readMap = store.getRead();
    var bm = store.getBookmarks();

    var rows = u.topics.map(function (t) {
      var isRead = !!readMap[t.id];
      var written = hasContent(t.id);
      return '<a class="tlist__row" href="#/topic/' + t.id + '">' +
        '<span class="tlist__no">' + String(t.index).padStart(2, "0") + '</span>' +
        '<span class="tlist__body">' +
          '<span class="tlist__title">' + esc(t.title) + '</span>' +
          (written ? '' : '<span class="tlist__sub">Content not added yet</span>') +
        '</span>' +
        '<span class="tlist__right">' +
          (bm.indexOf(t.id) !== -1 ? '<span class="chip chip--warn">Saved</span>' : '') +
          (isRead ? '<span class="chip chip--ok chip--dot">Read</span>' : '') +
          icon("chevron", "faint") +
        '</span>' +
      '</a>';
    }).join("");

    view.innerHTML =
      '<div class="pagehead">' +
        '<div class="pagehead__top">' +
          '<div style="min-width:0">' +
            '<span class="eyebrow">' + (u.stream === "theory" ? "Theory" : "Practical") +
              ' · Unit ' + u.no + ' · ' + (u.paper === "paper-1" ? "Paper I" : "Paper II") + '</span>' +
            '<h1>' + esc(u.title) + '</h1>' +
            '<p class="lede">' + esc(u.blurb) + '</p>' +
          '</div>' +
          '<div class="pagehead__actions">' + ringHtml(pr.pct, 78) + '</div>' +
        '</div>' +
        '<div class="row row--wrap mt-6">' +
          '<a class="btn btn--soft" href="#/quiz/unit/' + u.id + '">' + icon("quiz") + 'Quiz this unit</a>' +
          '<a class="btn" href="#/qa/' + u.id + '">' + icon("qa") + 'Q &amp; A (' + qaCount(u.id) + ')</a>' +
          '<span class="chip">' + pr.done + ' of ' + pr.total + ' read</span>' +
        '</div>' +
      '</div>' +
      '<div class="tlist">' + rows + '</div>';
  }

  function missing(what) {
    return '<div class="empty"><div class="empty__icon">🔍</div>' +
      '<h3>That ' + what + ' does not exist</h3>' +
      '<p>The link may be out of date. Go back to the syllabus and pick again.</p>' +
      '<a class="btn btn--primary mt-4" href="#/theory">Back to Theory</a></div>';
  }

  /* ============================================================
     ONE TOPIC — the lesson page
     ============================================================ */
  function renderTopic() {
    var t = syllabus.topicById[state.params.a];
    if (!t) { view.innerHTML = missing("topic"); return; }

    store.setLastTopic(t.id);
    var u = syllabus.unitById[t.unitId];
    var c = topicContent(t.id) || {};
    var detail = store.getDetail();
    var isRead = store.isRead(t.id);
    var isBm = store.isBookmarked(t.id);
    var note = store.getNote(t.id);

    // Previous / next within the unit
    var i = u.topics.indexOf(t);
    var prev = i > 0 ? u.topics[i - 1] : null;
    var next = i < u.topics.length - 1 ? u.topics[i + 1] : null;

    var pr = unitProgress(u);
    var readMap = store.getRead();
    var hasDeep = !!(c.eliteDesc && c.eliteDesc.trim());
    var showDeep = (detail === "deep" && hasDeep);

    /* ---- left rail: every topic in this unit ---- */
    var rail = u.topics.map(function (x) {
      return '<a class="rail__item' +
          (x.id === t.id ? " is-current" : "") +
          (readMap[x.id] ? " is-read" : "") + '" href="#/topic/' + x.id + '">' +
        '<span class="rail__no">' + String(x.index).padStart(2, "0") + '</span>' +
        '<span class="rail__t">' + esc(x.title) + '</span>' +
        (readMap[x.id] ? '<span class="rail__tick">' + icon("check") + '</span>' : '') +
      '</a>';
    }).join("");

    /* ---- content blocks ---- */
    function block(label, html, mod) {
      return '<section class="block' + (mod ? " block--" + mod : "") + '">' +
        '<span class="block__label">' + label + '</span>' +
        '<div class="block__body">' + html + '</div></section>';
    }

    var body;
    if (hasContent(t.id)) {
      var main = showDeep ? c.eliteDesc : c.desc;
      body =
        (main ? block(showDeep ? "Deep description" : "Standard description", main) : "") +
        (c.keyPoints && c.keyPoints.length
          ? block("Key points — what earns marks",
              '<ul class="keylist">' + c.keyPoints.map(function (k) {
                return '<li>' + k + '</li>';
              }).join("") + '</ul>', "key")
          : "") +
        (c.tables || []).map(function (tb) {
          return block(tb.title || "Table", renderTable(tb, true), "table");
        }).join("") +
        (c.img ? '<figure class="lesson__fig"><img src="' + esc(c.img) + '" alt="' + esc(t.title) + '" loading="lazy"></figure>' : "") +
        (c.clinical ? block("Clinical note", c.clinical, "clinical") : "");
    } else {
      body =
        '<div class="slot">' +
          '<span class="slot__tag">Content slot — empty</span>' +
          'This lesson has no text yet. Add it in <b>data/' +
          (t.stream === "theory" ? "data-theory-unit" + u.no + ".JS" : "data-practical.JS") +
          '</b> under the id <b class="mono">' + t.id + '</b>.<br>' +
          'Fill in <span class="mono">summary</span>, <span class="mono">desc</span>, ' +
          '<span class="mono">eliteDesc</span>, <span class="mono">keyPoints</span> and ' +
          '<span class="mono">clinical</span> — the page renders them automatically.' +
        '</div>';
    }

    view.innerHTML =
      '<div class="lesson">' +

        /* ============ LEFT RAIL ============ */
        '<aside class="lesson__rail">' +
          '<a class="rail__back" href="#/unit/' + u.id + '">' + icon("back") +
            '<span>Unit ' + u.no + ' · ' + esc(u.short) + '</span></a>' +
          '<div class="rail__prog">' +
            '<div class="row small"><span class="mono">' + pr.done + '/' + pr.total + ' read</span>' +
            '<span class="push mono faint">' + pr.pct + '%</span></div>' +
            '<div class="bar mt-2"><div class="bar__fill" style="width:' + pr.pct + '%"></div></div>' +
          '</div>' +
          '<nav class="rail__list">' + rail + '</nav>' +
        '</aside>' +

        /* ============ MAIN CARD ============ */
        '<article class="lesson__main">' +
          '<div class="lesson__card">' +

            '<header class="lesson__head">' +
              '<div class="lesson__kicker mono">' +
                '/// ' + (t.stream === "theory" ? "THEORY" : "PRACTICAL") +
                ' // UNIT ' + u.no + ' // TOPIC ' + String(t.index).padStart(2, "0") + '</div>' +
              '<h1 class="lesson__title">' + esc(t.title) +
                '<button class="speakbtn" id="speakbtn" aria-label="Read aloud" title="Read this topic aloud">' +
                icon("speaker") + '</button></h1>' +
              (c.summary ? '<p class="lesson__summary">' + c.summary + '</p>' : '') +
            '</header>' +

            '<div class="toolbar">' +
              '<button class="toolbtn' + (isRead ? ' is-on' : '') + '" data-act="read">' + icon("check") +
                '<span>' + (isRead ? "Read" : "Mark read") + '</span></button>' +
              '<button class="toolbtn' + (isBm ? ' is-on' : '') + '" data-act="bookmark">' + icon("star") +
                '<span>' + (isBm ? "Saved" : "Save") + '</span></button>' +
              '<button class="toolbtn" data-act="highlight">' + icon("pen") + '<span>Highlight</span></button>' +
              '<button class="toolbtn' + (note ? ' is-on' : '') + '" data-act="note">' + icon("note") +
                '<span>Note</span></button>' +
              '<button class="toolbtn" data-act="share">' + icon("share") + '<span>Share</span></button>' +
              '<div class="push"></div>' +
              '<div class="seg" role="group" aria-label="Detail level">' +
                '<button class="seg__btn' + (detail === "standard" ? " is-on" : "") + '" data-detail="standard">Standard</button>' +
                '<button class="seg__btn' + (showDeep ? " is-on" : "") + '"' +
                  (hasDeep ? '' : ' disabled title="No deep version written for this topic yet"') +
                  ' data-detail="deep">Deep view</button>' +
              '</div>' +
            '</div>' +

            '<div id="notebox" class="notebox" ' + (note ? '' : 'hidden') + '>' +
              '<label class="stat__label" for="noteinput">My note</label>' +
              '<textarea id="noteinput" rows="4" placeholder="Write anything you want to remember about this topic…">' + esc(note) + '</textarea>' +
              '<div class="row mt-2"><button class="btn btn--sm btn--primary" data-act="note-save">Save note</button>' +
              '<span class="small faint" id="notestatus"></span></div>' +
            '</div>' +

            renderHighlights(t.id) +

            body +

            '<nav class="pager">' +
              (prev ? '<a class="pager__link" href="#/topic/' + prev.id + '">' + icon("back") +
                '<span><small>Previous</small>' + esc(shorten(prev.title, 38)) + '</span></a>' : '<span></span>') +
              (next ? '<a class="pager__link pager__link--next" href="#/topic/' + next.id + '">' +
                '<span><small>Next</small>' + esc(shorten(next.title, 38)) + '</span>' + icon("chevron") + '</a>' : '<span></span>') +
            '</nav>' +

          '</div>' +
        '</article>' +
      '</div>';

    wireTopicActions(t);
    var cur = el(".rail__item.is-current");
    if (cur) cur.scrollIntoView({ block: "nearest" });
  }

  /* bare = true when the caller already shows the title (lesson blocks) */
  function renderTable(tb, bare) {
    if (!tb || !tb.headers) return "";
    return '<div class="' + (bare ? "" : "mt-8") + '">' +
      (tb.title && !bare ? '<h3 class="mb-4">' + esc(tb.title) + '</h3>' : '') +
      '<div class="tablewrap"><table class="tbl"><thead><tr>' +
      tb.headers.map(function (h) { return '<th>' + h + '</th>'; }).join("") +
      '</tr></thead><tbody>' +
      (tb.rows || []).map(function (r) {
        return '<tr>' + r.map(function (cell) { return '<td>' + cell + '</td>'; }).join("") + '</tr>';
      }).join("") +
      '</tbody></table></div></div>';
  }

  /* Saved highlights for this topic, shown above the lesson body */
  function renderHighlights(topicId) {
    var list = store.getHighlights()[topicId] || [];
    if (!list.length) return "";
    return '<section class="block block--hl"><span class="block__label">My highlights</span>' +
      '<div class="block__body"><ul class="hllist">' +
      list.map(function (h) {
        return '<li><span>' + esc(h) + '</span>' +
          '<button class="hllist__x" data-unhl="' + esc(h) + '" aria-label="Remove highlight">&times;</button></li>';
      }).join("") + '</ul></div></section>';
  }

  /* Strip tags so the text-to-speech engine reads words, not markup */
  function plain(html) {
    var d = document.createElement("div");
    d.innerHTML = html || "";
    return (d.textContent || "").replace(/\s+/g, " ").trim();
  }

  var speaking = false;
  function stopSpeech() {
    if (window.speechSynthesis) window.speechSynthesis.cancel();
    speaking = false;
    var b = el("#speakbtn");
    if (b) { b.classList.remove("is-on"); b.innerHTML = icon("speaker"); }
  }

  function speakTopic(t, c) {
    if (!window.speechSynthesis) { toast("Your browser cannot read text aloud"); return; }
    if (speaking) { stopSpeech(); return; }

    var detail = store.getDetail();
    var main = (detail === "deep" && c.eliteDesc && c.eliteDesc.trim()) ? c.eliteDesc : c.desc;
    var text = [
      t.title,
      plain(c.summary),
      plain(main),
      (c.keyPoints && c.keyPoints.length) ? "Key points. " + c.keyPoints.map(plain).join(". ") : "",
      plain(c.clinical) ? "Clinical note. " + plain(c.clinical) : ""
    ].filter(Boolean).join(". ");

    if (!text.trim()) { toast("Nothing to read yet"); return; }

    // Long text is split into sentences; some browsers cut off a single long utterance.
    var chunks = text.match(/[^.!?]+[.!?]*/g) || [text];
    speechSynthesis.cancel();
    chunks.forEach(function (ch, i) {
      var utt = new SpeechSynthesisUtterance(ch.trim());
      utt.rate = 0.95;
      utt.lang = "en-IN";
      if (i === chunks.length - 1) utt.onend = stopSpeech;
      speechSynthesis.speak(utt);
    });

    speaking = true;
    var b = el("#speakbtn");
    if (b) { b.classList.add("is-on"); b.innerHTML = icon("stop"); }
  }

  function wireTopicActions(t) {
    var c = topicContent(t.id) || {};

    var sb = el("#speakbtn");
    if (sb) sb.addEventListener("click", function () { speakTopic(t, c); });

    els("[data-unhl]").forEach(function (b) {
      b.addEventListener("click", function () {
        store.removeHighlight(t.id, b.getAttribute("data-unhl"));
        renderTopic();
      });
    });

    els(".toolbtn").forEach(function (b) {
      b.addEventListener("click", function () {
        var act = b.getAttribute("data-act");

        if (act === "highlight") {
          var sel = (window.getSelection() || "").toString().trim();
          if (!sel) { toast("Select some text in the lesson first, then tap Highlight"); return; }
          if (sel.length > 400) { toast("That selection is too long — choose a shorter passage"); return; }
          store.addHighlight(t.id, sel);
          window.getSelection().removeAllRanges();
          toast("Highlighted — saved to your Library");
          renderTopic();
          return;
        }

        if (act === "share") {
          var url = location.href;
          if (navigator.share) {
            navigator.share({ title: t.title, url: url }).catch(function () {});
          } else if (navigator.clipboard) {
            navigator.clipboard.writeText(url).then(function () { toast("Link copied"); });
          } else {
            toast(url);
          }
          return;
        }

        if (act === "read") {
          var on = store.toggleRead(t.id);
          b.classList.toggle("is-on", on);
          b.querySelector("span").textContent = on ? "Read" : "Mark read";
          toast(on ? "Marked as read" : "Unmarked");
        } else if (act === "bookmark") {
          var on2 = store.toggleBookmark(t.id);
          b.classList.toggle("is-on", on2);
          b.querySelector("span").textContent = on2 ? "Saved" : "Save";
          toast(on2 ? "Saved to Library" : "Removed from Library");
        } else if (act === "note") {
          var box = el("#notebox");
          box.hidden = !box.hidden;
          if (!box.hidden) el("#noteinput").focus();
        }
      });
    });

    var saveBtn = el('[data-act="note-save"]');
    if (saveBtn) saveBtn.addEventListener("click", function () {
      store.setNote(t.id, el("#noteinput").value);
      el("#notestatus").textContent = "Saved";
      setTimeout(function () { var n = el("#notestatus"); if (n) n.textContent = ""; }, 1800);
    });

    els(".seg__btn").forEach(function (b) {
      b.addEventListener("click", function () {
        store.setDetail(b.getAttribute("data-detail"));
        renderTopic();
      });
    });
  }

  /* ============================================================
     WHY
     ============================================================ */
  function renderWhy() {
    var data = (window.whyData || []).filter(function (w) { return w.title; });

    var head =
      '<div class="pagehead">' +
        '<span class="eyebrow">Mechanism first</span>' +
        '<h1>WHY</h1>' +
        '<p class="lede">Pathology is only memorisable once it stops being a list. ' +
        'Each card here explains why a lesion had to turn out the way it did.</p>' +
      '</div>';

    if (!data.length) {
      view.innerHTML = head +
        '<div class="empty"><div class="empty__icon">💡</div>' +
        '<h3>No WHY entries yet</h3>' +
        '<p>Add them in <b>data/data-why.JS</b>. Copy the template block that is already in the file, ' +
        'fill in <span class="mono">title</span>, <span class="mono">why</span> and ' +
        '<span class="mono">clinical</span>, and they will appear here automatically.</p></div>';
      return;
    }

    var cats = ["all", "mechanism", "lesion", "species", "diagnostic", "clinical"];
    var chips = cats.map(function (c) {
      return '<button class="tab' + (c === "all" ? " is-active" : "") + '" data-cat="' + c + '">' +
        (c === "all" ? "All" : c.charAt(0).toUpperCase() + c.slice(1)) + '</button>';
    }).join("");

    view.innerHTML = head + '<div class="tabs">' + chips + '</div><div id="whygrid" class="grid grid--auto"></div>';

    function paint(cat) {
      el("#whygrid").innerHTML = data
        .filter(function (w) { return cat === "all" || w.category === cat; })
        .map(function (w) {
          return '<article class="card whycard">' +
            '<div class="row row--wrap">' +
              '<span class="chip chip--accent">' + esc(w.category || "mechanism") + '</span>' +
              (w.comparison ? '<span class="chip">' + esc(w.comparison) + '</span>' : '') +
            '</div>' +
            '<h3 class="card__title mt-3">' + esc(w.title) + '</h3>' +
            '<div class="card__desc">' + (w.why || "") + '</div>' +
            (w.mechanism && w.mechanism.length
              ? '<ol class="chain mt-4">' + w.mechanism.map(function (s) { return '<li>' + s + '</li>'; }).join("") + '</ol>'
              : '') +
            (w.clinical ? '<div class="callout mt-4"><div class="callout__title">At the clinic</div>' + w.clinical + '</div>' : '') +
          '</article>';
        }).join("") || '<div class="empty"><p>Nothing in this category yet.</p></div>';
    }

    paint("all");
    els("[data-cat]").forEach(function (b) {
      b.addEventListener("click", function () {
        els("[data-cat]").forEach(function (x) { x.classList.remove("is-active"); });
        b.classList.add("is-active");
        paint(b.getAttribute("data-cat"));
      });
    });
  }

  /* ============================================================
     Q & A
     ============================================================ */
  function renderQa() {
    var unitId = state.params.a;

    if (!unitId) {
      var cards = syllabus.allUnits.map(function (u) {
        var n = qaCount(u.id);
        return '<a class="card card--link" href="#/qa/' + u.id + '">' +
          '<div class="row"><span class="unitcard__no">' +
          (u.stream === "theory" ? "Theory" : "Practical") + ' · Unit ' + u.no + '</span>' +
          '<span class="chip push">' + n + '</span></div>' +
          '<div class="card__title mt-2">' + esc(u.short) + '</div>' +
          '</a>';
      }).join("");

      view.innerHTML =
        '<div class="pagehead">' +
          '<span class="eyebrow">Written exam practice</span>' +
          '<h1>Question &amp; Answer</h1>' +
          '<p class="lede">Short notes, long answers, definitions and differentiate-between tables — ' +
          'the questions you have to write, not click.</p>' +
        '</div>' +
        '<div class="grid grid--3">' + cards + '</div>';
      return;
    }

    var u2 = syllabus.unitById[unitId];
    if (!u2) { view.innerHTML = missing("unit"); return; }
    var list = (window.qaBank || {})[unitId] || [];
    var real = list.filter(function (q) { return q.question; });
    var done = store.getQaDone();

    var head =
      '<div class="pagehead">' +
        '<span class="eyebrow">Unit ' + u2.no + ' · ' + esc(u2.short) + '</span>' +
        '<h1>Question &amp; Answer</h1>' +
        '<div class="row row--wrap mt-4">' +
          '<a class="btn btn--sm" href="#/qa">All units</a>' +
          '<a class="btn btn--sm" href="#/unit/' + u2.id + '">Unit lessons</a>' +
          '<span class="chip">' + real.length + ' questions</span>' +
        '</div>' +
      '</div>';

    if (!real.length) {
      view.innerHTML = head +
        '<div class="empty"><div class="empty__icon">✍️</div>' +
        '<h3>No questions written for this unit yet</h3>' +
        '<p>Add them in <b>data/data-qa.JS</b> under <span class="mono">"' + esc(unitId) + '"</span>. ' +
        'The template block in that file shows every field.</p></div>';
      return;
    }

    var typeLabel = { short: "Short note", long: "Long answer", diff: "Differentiate", define: "Define", spot: "Spotting" };

    view.innerHTML = head + '<div class="stack">' + real.map(function (q, i) {
      var isDone = done.indexOf(q.id) !== -1;
      return '<details class="qa' + (isDone ? ' is-done' : '') + '">' +
        '<summary>' +
          '<span class="qa__no">Q' + (i + 1) + '</span>' +
          '<span class="qa__q">' + esc(q.question) + '</span>' +
          '<span class="qa__meta">' +
            '<span class="chip">' + (typeLabel[q.type] || q.type) + '</span>' +
            (q.marks ? '<span class="chip">' + q.marks + ' marks</span>' : '') +
          '</span>' +
        '</summary>' +
        '<div class="qa__body">' +
          (q.answer ? '<div class="prose">' + q.answer + '</div>' : '<p class="faint">Model answer not written yet.</p>') +
          (q.keyPoints && q.keyPoints.length
            ? '<div class="callout mt-4"><div class="callout__title">Marks-scoring points</div><ul>' +
              q.keyPoints.map(function (k) { return '<li>' + k + '</li>'; }).join("") + '</ul></div>' : '') +
          (q.table ? renderTable(q.table) : '') +
          (q.pyq && q.pyq.length ? '<p class="small faint mt-4">Previously asked: ' + q.pyq.join(", ") + '</p>' : '') +
          '<button class="btn btn--sm mt-4" data-qa="' + esc(q.id) + '">' +
            (isDone ? "Mark as not done" : "Mark as revised") + '</button>' +
        '</div>' +
      '</details>';
    }).join("") + '</div>';

    els("[data-qa]").forEach(function (b) {
      b.addEventListener("click", function () {
        var on = store.toggleQaDone(b.getAttribute("data-qa"));
        b.textContent = on ? "Mark as not done" : "Mark as revised";
        b.closest(".qa").classList.toggle("is-done", on);
      });
    });
  }

  /* ============================================================
     LIBRARY — bookmarks · notes · highlights
     ============================================================ */
  function renderLibrary() {
    var tab = state.params.a || "bookmarks";

    view.innerHTML =
      '<div class="pagehead">' +
        '<span class="eyebrow">Everything you saved</span>' +
        '<h1>Library</h1>' +
      '</div>' +
      '<div class="tabs">' +
        ['bookmarks', 'notes', 'highlights'].map(function (t) {
          return '<a class="tab' + (t === tab ? " is-active" : "") + '" href="#/library/' + t + '">' +
            t.charAt(0).toUpperCase() + t.slice(1) + '</a>';
        }).join("") +
      '</div>' +
      '<div id="libbody"></div>';

    var body = el("#libbody");

    if (tab === "bookmarks") {
      var bm = store.getBookmarks();
      body.innerHTML = bm.length
        ? '<div class="tlist">' + bm.map(function (id) {
            var t = syllabus.topicById[id];
            if (!t) return "";
            var u = syllabus.unitById[t.unitId];
            return '<a class="tlist__row" href="#/topic/' + id + '">' +
              '<span class="tlist__body"><span class="tlist__title">' + esc(t.title) + '</span>' +
              '<span class="tlist__sub">' + (t.stream === "theory" ? "Theory" : "Practical") +
              ' · Unit ' + u.no + '</span></span>' +
              '<span class="tlist__right">' + icon("chevron", "faint") + '</span></a>';
          }).join("") + '</div>'
        : emptyState("⭐", "No saved topics", "Open any lesson and tap Save. It will appear here for quick revision.");
    }

    else if (tab === "notes") {
      var notes = store.getNotes();
      var keys = Object.keys(notes);
      body.innerHTML = keys.length
        ? '<div class="grid grid--2">' + keys.map(function (id) {
            var t = syllabus.topicById[id];
            return '<a class="card card--link" href="#/topic/' + id + '">' +
              '<div class="stat__label">' + (t ? esc(t.title) : id) + '</div>' +
              '<p class="mt-2">' + esc(notes[id]) + '</p></a>';
          }).join("") + '</div>'
        : emptyState("📝", "No notes yet", "Open a lesson, tap the Note button, and write anything you want to remember.");
    }

    else {
      var hl = store.getHighlights();
      var hkeys = Object.keys(hl);
      body.innerHTML = hkeys.length
        ? hkeys.map(function (id) {
            var t = syllabus.topicById[id];
            return '<div class="card mb-4"><div class="stat__label">' + (t ? esc(t.title) : id) + '</div><ul class="mt-2">' +
              hl[id].map(function (h) { return '<li>' + esc(h) + '</li>'; }).join("") + '</ul></div>';
          }).join("")
        : emptyState("🖍️", "No highlights yet", "Select any text inside a lesson and choose Highlight to keep it here.");
    }
  }

  function emptyState(ic, title, msg) {
    return '<div class="empty"><div class="empty__icon">' + ic + '</div><h3>' + title + '</h3><p>' + msg + '</p></div>';
  }

  /* ============================================================
     ME — settings, backup, about
     ============================================================ */
  function renderMe() {
    var theme = store.getTheme();
    var s = store.computeStreak();
    var readN = Object.keys(store.getRead()).length;
    var allTopics = syllabus.allUnits.reduce(function (n, u) { return n + u.topics.length; }, 0);

    view.innerHTML =
      '<div class="pagehead"><span class="eyebrow">Your account lives only on this device</span><h1>Settings</h1></div>' +

      '<div class="grid grid--3 mb-8">' +
        statCard("Topics read", readN + " / " + allTopics, pct(readN, allTopics) + "% complete", "check") +
        statCard("Current streak", s.current + " d", s.totalDays + " active days", "flame") +
        statCard("Bookmarks", store.getBookmarks().length, Object.keys(store.getNotes()).length + " notes", "star") +
      '</div>' +

      '<div class="card mb-4">' +
        '<h3>Appearance</h3>' +
        '<p class="muted mt-2">Dark is easier at night; Light reads better in a bright lab.</p>' +
        '<div class="seg mt-4" role="group">' +
          ['system', 'light', 'dark'].map(function (t) {
            return '<button class="seg__btn' + (theme === t ? " is-on" : "") + '" data-theme="' + t + '">' +
              t.charAt(0).toUpperCase() + t.slice(1) + '</button>';
          }).join("") +
        '</div>' +
      '</div>' +

      '<div class="card mb-4">' +
        '<h3>Backup and restore</h3>' +
        '<p class="muted mt-2">Your progress, notes, bookmarks and quiz history are stored in this browser only. ' +
        'Clearing browser data will erase them. Export a backup file before you reinstall or switch phone.</p>' +
        '<div class="row row--wrap mt-4">' +
          '<button class="btn" data-act="export">' + icon("download") + 'Export backup</button>' +
          '<label class="btn">' + icon("upload") + 'Restore from file' +
            '<input type="file" accept="application/json" id="restorefile" hidden></label>' +
          '<button class="btn" data-act="reset">' + icon("trash") + 'Erase all my data</button>' +
        '</div>' +
        '<p class="small faint mt-3" id="backupstatus"></p>' +
      '</div>' +

      '<div class="card">' +
        '<h3>About</h3>' +
        '<p class="muted mt-2">' + esc(syllabus.meta.subject) + ' · ' + esc(syllabus.meta.course) +
        ' · Credit hours ' + esc(syllabus.meta.credits) + '.</p>' +
        '<p class="muted mt-2">Built for students of ' + esc(syllabus.meta.institute) + '. ' +
        'Content follows the Veterinary Council of India syllabus as published in the Gazette of India.</p>' +
        '<p class="small faint mt-4">This is a study aid. Always confirm against your prescribed textbooks ' +
        'and your department\'s teaching before an examination or a clinical decision.</p>' +
      '</div>';

    els("[data-theme]").forEach(function (b) {
      b.addEventListener("click", function () {
        store.setTheme(b.getAttribute("data-theme"));
        renderMe();
        refreshThemeButton();
      });
    });

    var ex = el('[data-act="export"]');
    if (ex) ex.addEventListener("click", function () {
      store.exportBackup();
      el("#backupstatus").textContent = "Backup file downloaded.";
    });

    var rf = el("#restorefile");
    if (rf) rf.addEventListener("change", function () {
      if (!rf.files || !rf.files[0]) return;
      store.importBackup(rf.files[0], function (ok, msg) {
        el("#backupstatus").textContent = msg;
        if (ok) setTimeout(function () { location.reload(); }, 900);
      });
    });

    var rs = el('[data-act="reset"]');
    if (rs) rs.addEventListener("click", function () {
      if (confirm("Erase all progress, notes, bookmarks and quiz history on this device?\n\nThis cannot be undone. Export a backup first if you are not sure.")) {
        store.resetAll();
        location.reload();
      }
    });
  }

  /* ============================================================
     NAVIGATION STATE
     ============================================================ */
  function refreshNav() {
    var sec = state.section;
    var slotFor = {
      home: "home", theory: "theory", unit: "theory", topic: "theory",
      practical: "practical", why: "why", qa: "qa", quiz: "quiz",
      dashboard: "dashboard", library: "library", me: "me"
    };
    // A topic/unit in the practical stream should light the Practical slot
    if ((sec === "unit" || sec === "topic") && state.params.a) {
      var isPrac = (sec === "unit")
        ? state.params.a.indexOf("prac-") === 0
        : (syllabus.topicById[state.params.a] || {}).stream === "practical";
      if (isPrac) slotFor[sec] = "practical";
    }
    var active = slotFor[sec] || "home";

    els("[data-nav]").forEach(function (a) {
      a.classList.toggle("is-active", a.getAttribute("data-nav") === active);
    });
  }

  function openNav() { document.body.classList.add("nav-open"); }
  function closeNav() { document.body.classList.remove("nav-open"); }

  function refreshThemeButton() {
    var b = el("#themebtn");
    if (!b) return;
    var isDark = document.documentElement.getAttribute("data-theme") === "dark" ||
      (store.getTheme() === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches);
    b.innerHTML = icon(isDark ? "sun" : "moon");
    b.setAttribute("aria-label", isDark ? "Switch to light theme" : "Switch to dark theme");
  }

  /* ============================================================
     TOAST
     ============================================================ */
  var toastTimer;
  function toast(msg) {
    var t = el("#toast");
    if (!t) return;
    t.textContent = msg;
    t.classList.add("is-on");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { t.classList.remove("is-on"); }, 2000);
  }

  /* ============================================================
     SEARCH PALETTE
     ============================================================ */
  var searchIndex = null;

  function buildSearchIndex() {
    if (searchIndex) return searchIndex;
    searchIndex = [];

    syllabus.allUnits.forEach(function (u) {
      searchIndex.push({
        title: "Unit " + u.no + " — " + u.title,
        sub: u.stream === "theory" ? "Theory unit" : "Practical unit",
        kind: "Unit", href: "#/unit/" + u.id
      });
      u.topics.forEach(function (t) {
        searchIndex.push({
          title: t.title,
          sub: (t.stream === "theory" ? "Theory" : "Practical") + " · Unit " + u.no,
          kind: "Topic", href: "#/topic/" + t.id
        });
      });
    });

    (window.whyData || []).forEach(function (w) {
      if (w.title) searchIndex.push({ title: w.title, sub: "WHY · " + (w.category || ""), kind: "Why", href: "#/why" });
    });

    Object.keys(window.qaBank || {}).forEach(function (uid) {
      (qaBank[uid] || []).forEach(function (q) {
        if (q.question) searchIndex.push({ title: q.question, sub: "Q&A · " + uid, kind: "Q&A", href: "#/qa/" + uid });
      });
    });

    [["Dashboard", "#/dashboard"], ["Quiz", "#/quiz"], ["Library", "#/library"], ["Settings", "#/me"]]
      .forEach(function (p) { searchIndex.push({ title: p[0], sub: "Go to section", kind: "Page", href: p[1] }); });

    return searchIndex;
  }

  var selIndex = 0, matches = [];

  function openSearch() {
    el("#searchmodal").hidden = false;
    var i = el("#searchinput");
    i.value = "";
    i.focus();
    runSearch("");
    document.body.style.overflow = "hidden";
  }

  function closeSearch() {
    el("#searchmodal").hidden = true;
    document.body.style.overflow = "";
  }

  function runSearch(q) {
    var idx = buildSearchIndex();
    q = q.trim().toLowerCase();

    matches = q
      ? idx.filter(function (r) { return r.title.toLowerCase().indexOf(q) !== -1; }).slice(0, 40)
      : idx.filter(function (r) { return r.kind === "Unit" || r.kind === "Page"; }).slice(0, 20);

    selIndex = 0;
    var box = el("#searchresults");
    box.innerHTML = matches.length
      ? matches.map(function (r, i) {
          return '<a class="palette__item' + (i === 0 ? " is-sel" : "") + '" href="' + r.href + '" data-i="' + i + '">' +
            '<span><span class="t">' + esc(r.title) + '</span><br><span class="s">' + esc(r.sub) + '</span></span>' +
            '<span class="palette__kind">' + r.kind + '</span></a>';
        }).join("")
      : '<div class="palette__item"><span class="s">Nothing matched “' + esc(q) + '”.</span></div>';

    els("#searchresults .palette__item").forEach(function (a) {
      a.addEventListener("click", function () { setTimeout(closeSearch, 10); });
    });
  }

  function moveSel(d) {
    var items = els("#searchresults .palette__item[data-i]");
    if (!items.length) return;
    items[selIndex] && items[selIndex].classList.remove("is-sel");
    selIndex = (selIndex + d + items.length) % items.length;
    items[selIndex].classList.add("is-sel");
    items[selIndex].scrollIntoView({ block: "nearest" });
  }

  /* ============================================================
     BOOT
     ============================================================ */
  function init() {
    view = el("#view");
    store.bumpVisits();
    store.applyTheme();
    refreshThemeButton();

    window.addEventListener("hashchange", route);

    el("#menubtn").addEventListener("click", function () {
      document.body.classList.contains("nav-open") ? closeNav() : openNav();
    });

    document.addEventListener("click", function (e) {
      if (document.body.classList.contains("nav-open") &&
          !e.target.closest(".sidebar") && !e.target.closest("#menubtn")) closeNav();
    });

    el("#themebtn").addEventListener("click", function () {
      var cur = store.getTheme();
      var isDark = document.documentElement.getAttribute("data-theme") === "dark" ||
        (cur === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches);
      store.setTheme(isDark ? "light" : "dark");
      refreshThemeButton();
      if (state.section === "me") renderMe();
    });

    el("#searchbtn").addEventListener("click", openSearch);
    el("#searchscrim").addEventListener("click", closeSearch);
    el("#searchinput").addEventListener("input", function (e) { runSearch(e.target.value); });

    el("#searchinput").addEventListener("keydown", function (e) {
      if (e.key === "ArrowDown") { e.preventDefault(); moveSel(1); }
      else if (e.key === "ArrowUp") { e.preventDefault(); moveSel(-1); }
      else if (e.key === "Enter") {
        var items = els("#searchresults .palette__item[data-i]");
        if (items[selIndex]) { location.hash = matches[selIndex].href; closeSearch(); }
      } else if (e.key === "Escape") closeSearch();
    });

    document.addEventListener("keydown", function (e) {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") { e.preventDefault(); openSearch(); }
      else if (e.key === "Escape" && !el("#searchmodal").hidden) closeSearch();
      else if (e.key === "/" && document.activeElement.tagName !== "INPUT" &&
               document.activeElement.tagName !== "TEXTAREA") { e.preventDefault(); openSearch(); }
    });

    window.matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", refreshThemeButton);

    route();
  }

  /* ---------- public ---------- */
  return {
    init: init, go: go, icon: icon, esc: esc, toast: toast,
    ringHtml: ringHtml, statCard: statCard, renderTable: renderTable,
    unitProgress: unitProgress, questionCount: questionCount,
    hasContent: hasContent, topicContent: topicContent, pct: pct,
    emptyState: emptyState, state: state
  };
})();

document.addEventListener("DOMContentLoaded", app.init);
