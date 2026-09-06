/* ============================================================
   revision.js  —  RAPID REVISION section  (window.revisionApp)
   ------------------------------------------------------------
   Routes (dispatched from app.js):
     #/revision              hub — the six unit cards
     #/revision/<unitId>     one sheet, rendered interactively

   Content comes from data/data-revision.JS, which is GENERATED
   from the printable A4 sheets in revision/unit-*.html by
   tools/build-revision-data.py. Never edit the data file by hand.

   Interactive features
     · tick each card off, with a live progress bar
     · filter to Tables / Flowcharts / Traps / Drill only
     · "Hide answers" turns the drill into flashcards
     · "Blur" self-test mode fogs table answers and callouts
     · a 30-minute revision countdown with a ring
     · one- or two-column reading layout
     · Print A4 opens the printable sheet

   IMPORTANT: the countdown uses an interval. app.route() calls
   revisionApp.teardown() on every navigation so it can never
   leak between screens.
   ============================================================ */

var revisionApp = (function () {

  var view = null;
  var current = null;          // the unit object being shown
  var timer = { id: null, left: 0, total: 30 * 60, running: false };
  var FILTERS = [
    { id: "all",   label: "All" },
    { id: "table", label: "Tables" },
    { id: "flow",  label: "Flow" },
    { id: "trap",  label: "Traps" },
    { id: "drill", label: "Drill" }
  ];
  var filter = "all";

  var UNIT_ICON = {
    "unit-1": "cell", "unit-2": "pulse", "unit-3": "microscope",
    "unit-4": "virus", "unit-5": "feather", "unit-6": "dna"
  };
  var UNIT_BLURB = {
    "unit-1": "Cell injury and adaptation, haemodynamics, thrombosis to infarction, necrosis and apoptosis, pigments, calcification, inflammation, healing and immunopathology.",
    "unit-2": "All twelve systems, reduced to the named lesion the examiner actually asks for.",
    "unit-3": "Neoplasia and carcinogenesis, animal tumours, anticoagulants and haematology, urinalysis, necropsy and veterolegal wounds.",
    "unit-4": "The biggest unit — viral, bacterial, fungal, mycotoxic and parasitic disease, plus nutritional, metabolic, toxic and plant poisoning.",
    "unit-5": "Why birds differ, the viral and bacterial diseases, Marek's versus leukosis, coccidiosis and blackhead, deficiencies and the miscellaneous syndromes.",
    "unit-6": "Rats, mice and guinea pigs, rabbits, and the viral, bacterial, parasitic and nutritional disease of wildlife."
  };

  /* ---------- tiny helpers ---------- */
  function el(sel, root) { return (root || document).querySelector(sel); }
  function els(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }
  function icon(n) { return app.icon(n); }
  function esc(s) { return app.esc(s); }
  function units() { return window.revisionUnits || []; }
  function unitById(id) { return (window.revisionData || {})[id] || null; }

  function boxStats(u) {
    var done = store.getRevBoxes();
    var n = 0;
    u.boxes.forEach(function (b) { if (done[b.id]) n++; });
    return { done: n, total: u.boxes.length, pct: u.boxes.length ? Math.round(n / u.boxes.length * 100) : 0 };
  }

  function drillStats(u) {
    var g = store.getRevDrill();
    var right = 0, wrong = 0;
    u.drill.forEach(function (d) {
      if (g[d.id] === 1) right++;
      else if (g[d.id] === -1) wrong++;
    });
    return { right: right, wrong: wrong, total: u.drill.length, seen: right + wrong };
  }

  /* ============================================================
     HUB
     ============================================================ */
  function renderHub() {
    var all = units();
    if (!all.length) {
      view.innerHTML = '<div class="empty"><div class="empty__icon">' + icon("flame") + '</div>' +
        '<h3>Revision sheets did not load</h3>' +
        '<p><b>data/data-revision.JS</b> is missing or failed to parse. Double-click ' +
        '<b>tools/rebuild-revision.bat</b> to regenerate it from the sheets in <b>revision/</b>, then reload.</p></div>';
      return;
    }

    var totBoxes = 0, totDone = 0, totDrill = 0, totPages = 0, unitsDone = 0;
    all.forEach(function (u) {
      var s = boxStats(u);
      totBoxes += s.total; totDone += s.done;
      totDrill += u.drill.length; totPages += u.pages;
      if (store.isRevUnitDone(u.id)) unitsDone++;
    });
    var overall = totBoxes ? Math.round(totDone / totBoxes * 100) : 0;

    var hero =
      '<div class="rev-hero">' +
        '<div class="rev-hero__grid">' +
          '<div>' +
            '<span class="eyebrow">Last pass before the paper</span>' +
            '<h1>' + icon("flame") + ' Rapid Revision</h1>' +
            '<p>One dense sheet per unit, written the way the examiner asks: comparison tables, ' +
            'flow chains, named lesions and stain answers, <b>TRAP</b> cards for the true/false ' +
            'confusions, and a blank-fill drill at the end. Tick each card as it goes in — ' +
            'the bar shows what is still cold.</p>' +
          '</div>' +
          '<div class="rev-hero__stats">' +
            '<div class="rev-stat"><b>' + all.length + '</b><span>Units</span></div>' +
            '<div class="rev-stat"><b>' + totPages + '</b><span>A4 pages</span></div>' +
            '<div class="rev-stat"><b>' + totBoxes + '</b><span>Cards</span></div>' +
            '<div class="rev-stat"><b>' + totDrill + '</b><span>Blanks</span></div>' +
            '<div class="rev-stat"><b>' + overall + '%</b><span>Revised</span></div>' +
          '</div>' +
        '</div>' +
      '</div>';

    var cards = all.map(function (u) {
      var s = boxStats(u);
      var d = drillStats(u);
      var done = store.isRevUnitDone(u.id);
      return '<a class="rev-card ' + (u.paper === "paper-1" ? "p1" : "p2") + '" href="#/revision/' + u.id + '">' +
        '<div class="rev-card__top">' +
          '<span class="rev-card__badge">' + icon(UNIT_ICON[u.id] || "book") + '</span>' +
          '<div>' +
            '<h3>' + esc(u.title) + '</h3>' +
            '<span class="rev-card__meta">UNIT ' + u.no + ' · ' +
              (u.paper === "paper-1" ? "PAPER I" : "PAPER II") + ' · ' +
              u.pages + ' PAGES · ' + u.boxes.length + ' CARDS · ' + u.drill.length + ' BLANKS</span>' +
          '</div>' +
        '</div>' +
        '<p class="rev-card__blurb">' + esc(UNIT_BLURB[u.id] || "") + '</p>' +
        '<div class="rev-card__bar"><i style="width:' + s.pct + '%"></i></div>' +
        '<div class="rev-card__foot">' +
          '<span>' + s.done + ' of ' + s.total + ' cards revised' +
            (d.seen ? ' · drill ' + d.right + '/' + d.seen : '') + '</span>' +
          (done ? '<span class="rev-card__done">' + icon("checkCircle") + ' Done</span>'
                : '<span>' + s.pct + '%</span>') +
        '</div>' +
      '</a>';
    }).join("");

    var howto =
      '<div class="card mt-5">' +
        '<h3 class="card__title">' + icon("clock") + ' How to use a sheet in 30 minutes</h3>' +
        '<ol class="rev-howto">' +
          '<li><b>0–5 min — headings only.</b> Scroll past every coloured card title. This rebuilds the map of the unit before any detail goes in.</li>' +
          '<li><b>5–20 min — tables and flow chains.</b> Turn on <b>Self-test</b> so the answer columns fog over, then uncover each one only after you have recalled it.</li>' +
          '<li><b>20–26 min — the TRAP, MEMORY and FACT cards only.</b> Use the <b>Traps</b> filter. These carry the facts most often lost between reading and the exam hall.</li>' +
          '<li><b>26–30 min — the drill.</b> Turn on <b>Hide answers</b>, work down the blanks, and mark each one right or wrong. Anything you get wrong, jump back to its card and read it once more.</li>' +
        '</ol>' +
        '<p class="small faint mt-3">' + icon("download") +
          ' Every unit also prints as a real A4 sheet — open a unit and press <b>Print A4</b>. ' +
          'Set margins to <b>None</b> and tick <b>Background graphics</b>, or the colour coding is lost.</p>' +
      '</div>';

    view.innerHTML =
      hero +
      '<div class="rev-grid">' + cards + '</div>' +
      howto;
  }

  /* ============================================================
     SHEET
     ============================================================ */
  function renderSheet(unitId) {
    var u = unitById(unitId);
    if (!u) { app.go("#/revision"); return; }
    current = u;
    filter = "all";

    var prefs = store.getRevPrefs();
    var s = boxStats(u);

    var head =
      '<div class="pagehead">' +
        '<span class="eyebrow">Rapid revision · ' + (u.paper === "paper-1" ? "Paper I" : "Paper II") + '</span>' +
        '<h1>' + icon(UNIT_ICON[u.id] || "book") + ' Unit ' + u.no + ' — ' + esc(u.title) + '</h1>' +
        '<p class="lede">' + u.boxes.length + ' cards across ' + u.pages +
        ' printed pages, and ' + u.drill.length + ' blanks to fill.</p>' +
      '</div>';

    var chips = FILTERS.map(function (f) {
      var n = f.id === "all" ? u.boxes.length
        : u.boxes.filter(function (b) { return hasKind(b, f.id); }).length;
      return '<button class="rev-chip' + (f.id === "all" ? " is-on" : "") +
        '" data-filter="' + f.id + '">' + f.label + '<b>' + n + '</b></button>';
    }).join("");

    var bar =
      '<div class="rev-bar">' +
        '<a class="rev-btn rev-btn--ghost" href="#/revision">' + icon("back") + ' All units</a>' +
        '<span class="rev-bar__sep"></span>' +
        '<div class="rev-filters">' + chips + '</div>' +
        '<span class="rev-bar__spacer"></span>' +
        '<button class="rev-btn" data-act="blur"' + (prefs.blur ? ' data-on="1"' : '') + '>' +
          icon("eyeOff") + ' Self-test</button>' +
        '<button class="rev-btn" data-act="hide"' + (prefs.hideAnswers ? ' data-on="1"' : '') + '>' +
          icon("eye") + ' Hide answers</button>' +
        '<button class="rev-btn" data-act="cols"' + (prefs.cols ? ' data-on="1"' : '') + '>' +
          icon("filter") + ' Two columns</button>' +
        '<span class="rev-bar__sep"></span>' +
        timerHtml() +
        '<span class="rev-bar__sep"></span>' +
        '<button class="rev-btn" data-act="print">' + icon("download") + ' Print A4</button>' +
        '<button class="rev-btn" data-act="unitdone"' +
          (store.isRevUnitDone(u.id) ? ' data-on="1"' : '') + '>' +
          icon("checkCircle") + ' Revised</button>' +
      '</div>';

    var prog =
      '<div class="rev-progress">' +
        '<span>Cards revised</span>' +
        '<div class="rev-progress__bar"><i id="revbar" style="width:' + s.pct + '%"></i></div>' +
        '<span id="revcount"><b>' + s.done + '</b> / ' + s.total + '</span>' +
        '<button class="rev-btn rev-btn--ghost" data-act="resetboxes">' + icon("repeat") + ' Reset</button>' +
      '</div>';

    var body = "";
    var lastPage = 0;
    u.boxes.forEach(function (b) {
      if (b.page !== lastPage) {
        if (lastPage) body += '</div>';
        lastPage = b.page;
        body += '<div class="rev-pagemark">Page ' + b.page + ' of ' + u.pages + ' · ' +
          esc(u.pageTitles[b.page - 1] || "") + '</div>' +
          '<div class="rev-boxes' + (prefs.cols ? ' cols2' : '') + '">';
      }
      body += boxHtml(u, b);
    });
    if (lastPage) body += '</div>';

    view.innerHTML = head + bar + prog +
      '<div class="rev' +
        (prefs.blur ? ' is-blurred' : '') +
        (prefs.hideAnswers ? ' is-hidden-answers' : '') +
      '" id="revroot">' + body + '</div>';

    bind();
    paintTimer();
  }

  function hasKind(b, k) {
    return (b.kinds || []).indexOf(k) !== -1 ||
      (k === "trap" && ((b.kinds || []).indexOf("mem") !== -1 || (b.kinds || []).indexOf("fact") !== -1));
  }

  function boxHtml(u, b) {
    var done = store.isRevBoxDone(b.id);
    var inner = b.drill ? drillHtml(u) : wrapTables(b.html);
    return '<section class="rev-box ' + b.tone + (done ? ' is-done' : '') +
        '" id="' + b.id + '" data-kinds="' + (b.kinds || []).join(" ") + '">' +
      '<header class="rev-box__head" data-act="toggle">' +
        '<span class="rev-box__n">' + b.n + '</span>' +
        '<span class="rev-box__title">' + esc(b.title) + '</span>' +
        (b.stars ? '<span class="rev-box__stars">' + new Array(b.stars + 1).join("★") + '</span>' : '') +
        '<button class="rev-box__tick" data-act="tick" title="Mark this card revised" ' +
          'aria-label="Mark this card revised">' + icon("check") + '</button>' +
        '<span class="rev-box__caret">' + icon("chevron") + '</span>' +
      '</header>' +
      '<div class="rev-box__body">' + inner + '</div>' +
    '</section>';
  }

  /* wide tables need their own horizontal scroller on a phone */
  function wrapTables(html) {
    return String(html || "").replace(/<table/g, '<div class="rev-tablewrap"><table')
                             .replace(/<\/table>/g, '</table></div>');
  }

  /* ---------- drill ---------- */
  function drillHtml(u) {
    var g = store.getRevDrill();
    var d = drillStats(u);

    var rows = u.drill.map(function (item, i) {
      var v = g[item.id] || 0;
      var cls = v === 1 ? " ok" : (v === -1 ? " bad" : "");
      // <u>answer</u> in the sheet becomes a click-to-reveal token
      var q = item.html.replace(/<u>/g, '<span class="rev-a">').replace(/<\/u>/g, '</span>');
      return '<div class="rev-drill__row' + cls + '" data-drill="' + item.id + '">' +
        '<span class="rev-drill__n">' + (i + 1) + '</span>' +
        '<span class="rev-drill__q">' + q + '</span>' +
        '<span class="rev-drill__acts">' +
          '<button class="yes" data-grade="1" title="I got it right" aria-label="Right">' + icon("check") + '</button>' +
          '<button class="no" data-grade="-1" title="I got it wrong" aria-label="Wrong">' + icon("close") + '</button>' +
        '</span>' +
      '</div>';
    }).join("");

    return scoreHtml(d) + '<div class="rev-drill">' + rows + '</div>';
  }

  function scoreHtml(d) {
    var okPct = d.total ? (d.right / d.total * 100) : 0;
    var badPct = d.total ? (d.wrong / d.total * 100) : 0;
    return '<div class="rev-drill__score" id="revscore">' +
      '<span>' + icon("target") + ' <b>' + d.right + '</b> right · <b>' + d.wrong + '</b> wrong · ' +
      (d.total - d.seen) + ' left</span>' +
      '<span class="bar"><i class="ok" style="width:' + okPct + '%"></i>' +
      '<i class="bad" style="width:' + badPct + '%"></i></span>' +
      '<button class="rev-btn rev-btn--ghost" data-act="resetdrill">' + icon("repeat") + ' Reset</button>' +
    '</div>';
  }

  /* ============================================================
     TIMER
     ============================================================ */
  function timerHtml() {
    return '<span class="rev-timer" id="revtimer">' +
      '<svg class="rev-timer__ring" viewBox="0 0 36 36">' +
        '<circle class="bg" cx="18" cy="18" r="15.5"></circle>' +
        '<circle class="fg" cx="18" cy="18" r="15.5" stroke-dasharray="97.4" stroke-dashoffset="0"></circle>' +
      '</svg>' +
      '<span class="rev-timer__t" id="revtime">30:00<small>30 min pass</small></span>' +
      '<button class="rev-btn rev-btn--ghost" data-act="timer" id="revtimerbtn">' +
        icon("clock") + ' Start</button>' +
    '</span>';
  }

  function paintTimer() {
    var t = el("#revtime"), ring = el("#revtimer .fg"), btn = el("#revtimerbtn"), wrap = el("#revtimer");
    if (!t || !ring) return;
    var left = timer.running || timer.left ? timer.left : timer.total;
    var m = Math.floor(Math.abs(left) / 60), sec = Math.abs(left) % 60;
    t.innerHTML = (left < 0 ? "+" : "") + m + ":" + (sec < 10 ? "0" : "") + sec +
      '<small>' + (timer.running ? "running" : (timer.left && timer.left !== timer.total ? "paused" : "30 min pass")) + '</small>';
    var frac = Math.max(0, Math.min(1, left / timer.total));
    ring.setAttribute("stroke-dashoffset", String(97.4 * (1 - frac)));
    if (wrap) wrap.classList.toggle("is-over", left <= 0);
    if (btn) btn.innerHTML = icon("clock") + " " + (timer.running ? "Pause" : (timer.left && timer.left !== timer.total ? "Resume" : "Start"));
  }

  function toggleTimer() {
    if (timer.running) { stopTick(); timer.running = false; paintTimer(); return; }
    if (!timer.left) timer.left = timer.total;
    timer.running = true;
    timer.id = setInterval(function () {
      timer.left--;
      paintTimer();
      if (timer.left === 0) {
        app.toast("30-minute pass complete — finish the drill and move on.");
        if (app.burstConfetti) app.burstConfetti();
      }
      if (timer.left <= -600) { stopTick(); timer.running = false; paintTimer(); }
    }, 1000);
    paintTimer();
  }

  function stopTick() {
    if (timer.id) { clearInterval(timer.id); timer.id = null; }
  }

  /* Called by app.route() on EVERY navigation. Never let the interval leak. */
  function teardown() {
    stopTick();
    timer.running = false;
    timer.left = 0;
    current = null;
  }

  /* ============================================================
     EVENTS — one delegated listener for the whole sheet
     ============================================================ */
  function bind() {
    var root = view;

    root.addEventListener("click", function (e) {
      var u = current;
      if (!u) return;

      /* --- filter chips --- */
      var chip = e.target.closest(".rev-chip");
      if (chip) {
        filter = chip.getAttribute("data-filter");
        els(".rev-chip", root).forEach(function (c) {
          c.classList.toggle("is-on", c === chip);
        });
        applyFilter();
        return;
      }

      /* --- reveal a hidden drill answer --- */
      var ans = e.target.closest(".rev-a");
      if (ans) { ans.classList.toggle("is-shown"); return; }

      /* --- reveal one fogged cell in self-test mode --- */
      if (el("#revroot") && el("#revroot").classList.contains("is-blurred")) {
        var cell = e.target.closest(".rev-box__body td, .rev-box__body .trap, .rev-box__body .mem, .rev-box__body .fact");
        if (cell) { cell.classList.toggle("is-revealed"); return; }
      }

      /* --- drill grading --- */
      var grade = e.target.closest("[data-grade]");
      if (grade) {
        var row = grade.closest("[data-drill]");
        var v = store.gradeRevDrill(row.getAttribute("data-drill"), grade.getAttribute("data-grade") === "1");
        row.classList.toggle("ok", v === 1);
        row.classList.toggle("bad", v === -1);
        refreshScore();
        return;
      }

      /* --- tick a card off --- */
      var tick = e.target.closest('[data-act="tick"]');
      if (tick) {
        e.stopPropagation();
        var box = tick.closest(".rev-box");
        box.classList.toggle("is-done", store.toggleRevBox(box.id));
        refreshProgress();
        return;
      }

      /* --- collapse / expand a card --- */
      var headEl = e.target.closest('[data-act="toggle"]');
      if (headEl) { headEl.closest(".rev-box").classList.toggle("is-collapsed"); return; }

      /* --- toolbar --- */
      var btn = e.target.closest("[data-act]");
      if (!btn) return;
      var act = btn.getAttribute("data-act");

      if (act === "blur" || act === "hide" || act === "cols") {
        var key = act === "blur" ? "blur" : (act === "hide" ? "hideAnswers" : "cols");
        var on = !btn.hasAttribute("data-on");
        if (on) btn.setAttribute("data-on", "1"); else btn.removeAttribute("data-on");
        btn.classList.toggle("is-on", on);
        store.setRevPref(key, on);
        var rootEl = el("#revroot");
        if (act === "blur") rootEl.classList.toggle("is-blurred", on);
        if (act === "hide") {
          rootEl.classList.toggle("is-hidden-answers", on);
          els(".rev-a.is-shown", rootEl).forEach(function (a) { a.classList.remove("is-shown"); });
        }
        if (act === "cols") els(".rev-boxes", rootEl).forEach(function (g) { g.classList.toggle("cols2", on); });
        return;
      }

      if (act === "timer") { toggleTimer(); return; }

      if (act === "print") {
        window.open(u.sheet, "_blank", "noopener");
        app.toast("Printable sheet opened — set margins to None and tick Background graphics.");
        return;
      }

      if (act === "unitdone") {
        var nowDone = store.toggleRevUnit(u.id);
        btn.classList.toggle("is-on", nowDone);
        if (nowDone) { btn.setAttribute("data-on", "1"); } else { btn.removeAttribute("data-on"); }
        app.toast(nowDone ? "Unit " + u.no + " marked revised." : "Unit " + u.no + " unmarked.");
        if (nowDone && app.burstConfetti) app.burstConfetti();
        return;
      }

      if (act === "resetboxes") {
        store.setRevBoxes(u.boxes.map(function (b) { return b.id; }), false);
        els(".rev-box", root).forEach(function (b) { b.classList.remove("is-done"); });
        refreshProgress();
        app.toast("Card ticks cleared for this unit.");
        return;
      }

      if (act === "resetdrill") {
        store.clearRevDrill(u.drill.map(function (d) { return d.id; }));
        els(".rev-drill__row", root).forEach(function (r) { r.classList.remove("ok", "bad"); });
        refreshScore();
        app.toast("Drill scores cleared for this unit.");
        return;
      }
    });

    /* reflect saved toggle state on the buttons */
    els(".rev-btn[data-on]", root).forEach(function (b) { b.classList.add("is-on"); });
  }

  function applyFilter() {
    els(".rev-box", view).forEach(function (b) {
      var show = filter === "all" ||
        hasKind({ kinds: (b.getAttribute("data-kinds") || "").split(" ") }, filter);
      b.hidden = !show;
    });
    /* hide a page heading whose cards are all filtered out */
    els(".rev-boxes", view).forEach(function (g) {
      var anyVisible = els(".rev-box", g).some(function (b) { return !b.hidden; });
      g.hidden = !anyVisible;
      var mark = g.previousElementSibling;
      if (mark && mark.classList.contains("rev-pagemark")) mark.hidden = !anyVisible;
    });
  }

  function refreshProgress() {
    if (!current) return;
    var s = boxStats(current);
    var bar = el("#revbar"), c = el("#revcount");
    if (bar) bar.style.width = s.pct + "%";
    if (c) c.innerHTML = "<b>" + s.done + "</b> / " + s.total;
  }

  function refreshScore() {
    if (!current) return;
    var host = el("#revscore");
    if (!host) return;
    var tmp = document.createElement("div");
    tmp.innerHTML = scoreHtml(drillStats(current));
    host.replaceWith(tmp.firstChild);
  }

  /* ============================================================
     ENTRY POINT — called by app.js render dispatch
     ============================================================ */
  function render(v, params) {
    view = v;
    stopTick();
    timer.running = false;
    if (params && params.a) renderSheet(params.a);
    else { current = null; renderHub(); }
  }

  return {
    render: render,
    teardown: teardown
  };
})();

window.revisionApp = revisionApp;
