/* ============================================================
   quiz.js  —  The quiz engine
   ------------------------------------------------------------
   Modes, all built automatically from data/data-quiz.JS:

     #/quiz                    hub — pick a mode
     #/quiz/unit/<unitId>      one unit
     #/quiz/paper/<paperId>    Paper I (units 1-3) or Paper II (4-6)
     #/quiz/grand              all six theory units
     #/quiz/practical          all practical units
     #/quiz/review             Smart Review — only what you got wrong

   Exam Mode is a switch on any of the above: timed, no feedback
   until you submit.
   ============================================================ */

var quizApp = (function () {

  var host;                 // container element
  var run = null;           // active run state

  /* Reset every flag here. A leftover flag is the classic bug. */
  function resetRun() {
    run = null;
  }

  /* ============================================================
     BUILDING A QUESTION SET
     ============================================================ */
  function bankFor(unitIds, formats) {
    var out = [];
    unitIds.forEach(function (uid) {
      var b = (window.quizBank || {})[uid];
      if (!b) return;
      formats.forEach(function (f) {
        (b[f] || []).forEach(function (q, i) {
          if (!q.q || !String(q.q).trim()) return;   // skip empty template rows
          out.push({
            key: uid + ":" + f + ":" + i,
            format: f,
            unitId: uid,
            q: q.q, o: q.o, a: q.a, e: q.e,
            topicId: q.topicId || null,
            diff: q.diff || 1
          });
        });
      });
    });
    return out;
  }

  function scopeUnits(kind, id) {
    if (kind === "unit") return [id];
    if (kind === "paper") {
      var p = syllabus.meta.papers.filter(function (x) { return x.id === id; })[0];
      return p ? p.units.map(function (n) { return "unit-" + n; }) : [];
    }
    if (kind === "grand") return syllabus.theory.map(function (u) { return u.id; });
    if (kind === "practical") return syllabus.practical.map(function (u) { return u.id; });
    return [];
  }

  function shuffle(a) {
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }

  function countAvailable(unitIds) {
    return bankFor(unitIds, ["mcq", "tf", "fib"]).length;
  }

  /* ============================================================
     RENDER — router entry point
     ============================================================ */
  function render(container, params) {
    host = container;
    var kind = params.a;

    if (run && run.active) { paintRun(); return; }

    if (!kind) { renderHub(); return; }
    if (kind === "unit")      { renderSetup("unit", params.b); return; }
    if (kind === "paper")     { renderSetup("paper", params.b); return; }
    if (kind === "grand")     { renderSetup("grand", null); return; }
    if (kind === "practical") { renderSetup("practical", null); return; }
    if (kind === "review")    { renderReview(); return; }
    renderHub();
  }

  /* ============================================================
     HUB
     ============================================================ */
  function renderHub() {
    resetRun();

    var theoryIds = syllabus.theory.map(function (u) { return u.id; });
    var pracIds = syllabus.practical.map(function (u) { return u.id; });
    var totalAll = countAvailable(theoryIds.concat(pracIds));
    var due = store.dueSrs().length;
    var q = store.getQuiz();

    var unitRows = syllabus.theory.map(function (u) {
      var n = countAvailable([u.id]);
      var rec = q.byUnit["unit:" + u.id];
      return '<a class="tlist__row' + (n ? '' : ' is-empty') + '" href="' +
        (n ? '#/quiz/unit/' + u.id : '#/quiz') + '">' +
        '<span class="tlist__no">U' + u.no + '</span>' +
        '<span class="tlist__body"><span class="tlist__title">' + app.esc(u.short) + '</span>' +
        '<span class="tlist__sub">' + (n ? n + ' questions' : 'No questions added yet') + '</span></span>' +
        '<span class="tlist__right">' +
          (rec ? '<span class="chip chip--ok">Best ' + rec.best + '%</span>' : '') +
          (n ? app.icon("chevron", "faint") : '') +
        '</span></a>';
    }).join("");

    var pracRows = syllabus.practical.map(function (u) {
      var n = countAvailable([u.id]);
      return '<a class="tlist__row' + (n ? '' : ' is-empty') + '" href="' +
        (n ? '#/quiz/unit/' + u.id : '#/quiz') + '">' +
        '<span class="tlist__no">P' + u.no + '</span>' +
        '<span class="tlist__body"><span class="tlist__title">' + app.esc(u.short) + '</span>' +
        '<span class="tlist__sub">' + (n ? n + ' questions' : 'No questions added yet') + '</span></span>' +
        '<span class="tlist__right">' + (n ? app.icon("chevron", "faint") : '') + '</span></a>';
    }).join("");

    host.innerHTML =
      '<div class="pagehead">' +
        '<span class="eyebrow">' + totalAll + ' questions in the bank</span>' +
        '<h1>Quiz</h1>' +
        '<p class="lede">Test one unit, a whole paper, or the entire syllabus. ' +
        'Every wrong answer is queued for spaced repetition automatically.</p>' +
      '</div>' +

      (totalAll === 0
        ? '<div class="empty"><div class="empty__icon">🧪</div><h3>The question bank is empty</h3>' +
          '<p>Add questions in <b>data/data-quiz.JS</b>. The file already contains a template for each ' +
          'format — MCQ, True/False and Fill-in-the-blank. As soon as you add one, this page lights up.</p></div>'
        : '') +

      '<h2 class="mt-8">Full tests</h2>' +
      '<div class="grid grid--3 mt-4">' +
        modeCard("Paper I", "Units 1, 2 and 3", countAvailable(scopeUnits("paper", "paper-1")), "#/quiz/paper/paper-1") +
        modeCard("Paper II", "Units 4, 5 and 6", countAvailable(scopeUnits("paper", "paper-2")), "#/quiz/paper/paper-2") +
        modeCard("Grand test", "All six theory units", countAvailable(theoryIds), "#/quiz/grand") +
        modeCard("Practical", "All practical units", countAvailable(pracIds), "#/quiz/practical") +
        modeCard("Smart Review", due + " question" + (due === 1 ? "" : "s") + " due today", due, "#/quiz/review", true) +
      '</div>' +

      '<h2 class="mt-12">Theory units</h2>' +
      '<div class="tlist mt-4">' + unitRows + '</div>' +

      '<h2 class="mt-12">Practical units</h2>' +
      '<div class="tlist mt-4">' + pracRows + '</div>';
  }

  function modeCard(title, sub, n, href, isReview) {
    var disabled = !n;
    return '<a class="card card--link modecard' + (disabled ? ' is-disabled' : '') + '" href="' +
      (disabled ? '#/quiz' : href) + '">' +
      '<div class="row"><span class="card__title">' + title + '</span>' +
      '<span class="chip push' + (n ? ' chip--accent' : '') + '">' + n + '</span></div>' +
      '<p class="card__desc">' + sub + '</p>' +
      (disabled ? '<p class="small faint mt-2">' +
        (isReview ? 'Nothing due — answer some questions first.' : 'No questions added yet.') + '</p>' : '') +
      '</a>';
  }

  /* ============================================================
     SETUP SCREEN
     ============================================================ */
  function renderSetup(kind, id) {
    resetRun();
    var unitIds = scopeUnits(kind, id);
    var pool = bankFor(unitIds, ["mcq", "tf", "fib"]);

    var label = kind === "unit"
      ? "Unit " + (syllabus.unitById[id] || {}).no + " — " + (syllabus.unitById[id] || {}).short
      : kind === "paper"
        ? (id === "paper-1" ? "Paper I — Units 1, 2, 3" : "Paper II — Units 4, 5, 6")
        : kind === "grand" ? "Grand test — all theory units" : "Practical — all practical units";

    if (!pool.length) {
      host.innerHTML =
        '<div class="pagehead"><h1>' + app.esc(label) + '</h1></div>' +
        '<div class="empty"><div class="empty__icon">🧪</div><h3>No questions here yet</h3>' +
        '<p>Add questions for this scope in <b>data/data-quiz.JS</b>, then come back.</p>' +
        '<a class="btn btn--primary mt-4" href="#/quiz">Back to quiz hub</a></div>';
      return;
    }

    var counts = { mcq: 0, tf: 0, fib: 0 };
    pool.forEach(function (q) { counts[q.format]++; });
    var maxN = pool.length;
    var presets = [10, 20, 30, 50].filter(function (n) { return n <= maxN; });
    if (!presets.length || presets[presets.length - 1] !== maxN) presets.push(maxN);

    host.innerHTML =
      '<div class="pagehead">' +
        '<span class="eyebrow">Quiz setup</span>' +
        '<h1>' + app.esc(label) + '</h1>' +
        '<p class="lede">' + maxN + ' questions available — ' +
        counts.mcq + ' MCQ, ' + counts.tf + ' true/false, ' + counts.fib + ' fill-in-the-blank.</p>' +
      '</div>' +

      '<div class="card setup">' +
        '<div class="setup__row">' +
          '<div><b>How many questions?</b><p class="small muted">Pick a length you will actually finish.</p></div>' +
          '<div class="seg" id="segcount">' +
            presets.map(function (n, i) {
              return '<button class="seg__btn' + (i === 0 ? ' is-on' : '') + '" data-count="' + n + '">' + n + '</button>';
            }).join("") +
          '</div>' +
        '</div>' +

        '<div class="setup__row">' +
          '<div><b>Question formats</b><p class="small muted">Deselect any format you do not want.</p></div>' +
          '<div class="row row--wrap" id="fmtbox">' +
            ['mcq', 'tf', 'fib'].map(function (f) {
              var lbl = { mcq: "MCQ", tf: "True / False", fib: "Fill blank" }[f];
              var on = counts[f] > 0;
              return '<label class="check' + (on ? '' : ' is-disabled') + '">' +
                '<input type="checkbox" data-fmt="' + f + '"' + (on ? ' checked' : ' disabled') + '> ' +
                lbl + ' <span class="faint">(' + counts[f] + ')</span></label>';
            }).join("") +
          '</div>' +
        '</div>' +

        '<div class="setup__row">' +
          '<div><b>Exam mode</b><p class="small muted">Timed, and no feedback until you submit — like the real paper.</p></div>' +
          '<label class="switch"><input type="checkbox" id="exammode"><span></span></label>' +
        '</div>' +

        '<div class="setup__row" id="timerow" hidden>' +
          '<div><b>Time limit</b><p class="small muted">The paper submits itself when the clock runs out.</p></div>' +
          '<div class="seg" id="segtime">' +
            [10, 20, 30, 45].map(function (m, i) {
              return '<button class="seg__btn' + (i === 1 ? ' is-on' : '') + '" data-min="' + m + '">' + m + ' min</button>';
            }).join("") +
          '</div>' +
        '</div>' +

        '<div class="row mt-6">' +
          '<a class="btn" href="#/quiz">Cancel</a>' +
          '<button class="btn btn--primary push" id="startbtn">Start quiz</button>' +
        '</div>' +
      '</div>';

    var chosen = { count: presets[0], formats: ["mcq", "tf", "fib"], exam: false, minutes: 20 };

    document.querySelectorAll("#segcount .seg__btn").forEach(function (b) {
      b.addEventListener("click", function () {
        document.querySelectorAll("#segcount .seg__btn").forEach(function (x) { x.classList.remove("is-on"); });
        b.classList.add("is-on");
        chosen.count = parseInt(b.getAttribute("data-count"), 10);
      });
    });

    document.querySelectorAll("#segtime .seg__btn").forEach(function (b) {
      b.addEventListener("click", function () {
        document.querySelectorAll("#segtime .seg__btn").forEach(function (x) { x.classList.remove("is-on"); });
        b.classList.add("is-on");
        chosen.minutes = parseInt(b.getAttribute("data-min"), 10);
      });
    });

    document.getElementById("exammode").addEventListener("change", function (e) {
      chosen.exam = e.target.checked;
      document.getElementById("timerow").hidden = !e.target.checked;
    });

    document.getElementById("startbtn").addEventListener("click", function () {
      chosen.formats = Array.prototype.slice
        .call(document.querySelectorAll("[data-fmt]"))
        .filter(function (c) { return c.checked; })
        .map(function (c) { return c.getAttribute("data-fmt"); });

      if (!chosen.formats.length) { app.toast("Choose at least one format"); return; }

      var qs = shuffle(bankFor(unitIds, chosen.formats)).slice(0, chosen.count);
      if (!qs.length) { app.toast("No questions match those formats"); return; }
      start(qs, kind + (id ? ":" + id : ""), label, chosen.exam, chosen.minutes);
    });
  }

  /* ============================================================
     SMART REVIEW
     ============================================================ */
  function renderReview() {
    resetRun();
    var dueKeys = store.dueSrs();
    var all = bankFor(
      syllabus.allUnits.map(function (u) { return u.id; }),
      ["mcq", "tf", "fib"]
    );
    var pool = all.filter(function (q) { return dueKeys.indexOf(q.key) !== -1; });

    if (!pool.length) {
      host.innerHTML =
        '<div class="pagehead"><span class="eyebrow">Spaced repetition</span><h1>Smart Review</h1></div>' +
        '<div class="empty"><div class="empty__icon">✅</div><h3>Nothing due right now</h3>' +
        '<p>Questions you answer wrongly come back tomorrow, then after 2, 4, 8 and 16 days ' +
        'as you keep getting them right. Take a quiz first and this queue will fill itself.</p>' +
        '<a class="btn btn--primary mt-4" href="#/quiz">Go to the quiz hub</a></div>';
      return;
    }

    start(shuffle(pool), "review", "Smart Review", false, 0);
  }

  /* ============================================================
     RUNNING A QUIZ
     ============================================================ */
  function start(questions, scope, label, exam, minutes) {
    run = {
      active: true,
      qs: questions,
      i: 0,
      answers: new Array(questions.length).fill(null),
      scope: scope,
      label: label,
      exam: !!exam,
      endsAt: exam ? Date.now() + minutes * 60000 : 0,
      startedAt: Date.now(),
      revealed: false,
      timer: null
    };

    if (run.exam) {
      run.timer = setInterval(function () {
        if (!run || !run.active) { clearInterval(run && run.timer); return; }
        if (Date.now() >= run.endsAt) { finish(true); return; }
        var t = document.getElementById("qtimer");
        if (t) t.textContent = fmtTime(run.endsAt - Date.now());
      }, 1000);
    }
    paintRun();
  }

  function fmtTime(ms) {
    var s = Math.max(0, Math.floor(ms / 1000));
    return String(Math.floor(s / 60)).padStart(2, "0") + ":" + String(s % 60).padStart(2, "0");
  }

  function paintRun() {
    var q = run.qs[run.i];
    var given = run.answers[run.i];
    var showFeedback = !run.exam && run.revealed;

    var body;
    if (q.format === "mcq") {
      body = '<div class="opts">' + (q.o || []).map(function (opt, i) {
        var cls = "opt";
        if (given === i) cls += " is-picked";
        if (showFeedback) {
          if (i === q.a) cls += " is-right";
          else if (given === i) cls += " is-wrong";
        }
        return '<button class="' + cls + '" data-pick="' + i + '"' + (showFeedback ? ' disabled' : '') + '>' +
          '<span class="opt__key">' + "ABCD".charAt(i) + '</span>' +
          '<span class="opt__text">' + app.esc(opt) + '</span></button>';
      }).join("") + '</div>';

    } else if (q.format === "tf") {
      body = '<div class="opts opts--2">' + [true, false].map(function (v, i) {
        var cls = "opt";
        if (given === v) cls += " is-picked";
        if (showFeedback) {
          if (v === q.a) cls += " is-right";
          else if (given === v) cls += " is-wrong";
        }
        return '<button class="' + cls + '" data-pick="' + v + '"' + (showFeedback ? ' disabled' : '') + '>' +
          '<span class="opt__text">' + (v ? "True" : "False") + '</span></button>';
      }).join("") + '</div>';

    } else {
      body = '<div class="fib">' +
        '<input type="text" id="fibinput" placeholder="Type your answer" autocomplete="off" ' +
        'value="' + app.esc(given || "") + '"' + (showFeedback ? ' disabled' : '') + '>' +
        (showFeedback
          ? '<p class="mt-3"><b>Accepted:</b> ' + app.esc((q.a || []).join(", ")) + '</p>'
          : '') +
        '</div>';
    }

    var answered = run.answers.filter(function (a) { return a !== null; }).length;

    host.innerHTML =
      '<div class="quizrun">' +
        '<div class="quizrun__bar">' +
          '<button class="btn btn--sm btn--ghost" id="quitbtn">Quit</button>' +
          '<span class="chip">' + app.esc(run.label) + '</span>' +
          '<div class="push"></div>' +
          (run.exam ? '<span class="chip chip--warn" id="qtimer">' + fmtTime(run.endsAt - Date.now()) + '</span>' : '') +
          '<span class="chip">' + (run.i + 1) + ' / ' + run.qs.length + '</span>' +
        '</div>' +

        '<div class="bar bar--lg mt-4"><div class="bar__fill" style="width:' +
          ((run.i) / run.qs.length * 100) + '%"></div></div>' +

        '<div class="card quizcard mt-6">' +
          '<div class="row row--wrap mb-4">' +
            '<span class="chip chip--accent">' +
              { mcq: "Multiple choice", tf: "True / False", fib: "Fill in the blank" }[q.format] + '</span>' +
            '<span class="chip">' + app.esc((syllabus.unitById[q.unitId] || {}).short || q.unitId) + '</span>' +
          '</div>' +
          '<h2 class="quizcard__q">' + app.esc(q.q) + '</h2>' +
          body +
          (showFeedback && q.e
            ? '<div class="callout mt-6"><div class="callout__title">' +
              (isCorrect(q, given) ? "Correct" : "Not quite") + '</div>' + q.e + '</div>'
            : '') +
        '</div>' +

        '<div class="row mt-6">' +
          '<button class="btn" id="prevbtn"' + (run.i === 0 ? ' disabled' : '') + '>Previous</button>' +
          '<div class="push"></div>' +
          '<span class="small faint" style="margin-right:12px">' + answered + ' answered</span>' +
          (!run.exam && !run.revealed
            ? '<button class="btn btn--primary" id="checkbtn">Check answer</button>'
            : (run.i === run.qs.length - 1
              ? '<button class="btn btn--primary" id="finishbtn">Finish &amp; see score</button>'
              : '<button class="btn btn--primary" id="nextbtn">Next question</button>')) +
        '</div>' +

        (run.exam && run.i === run.qs.length - 1
          ? '<div class="row mt-4"><button class="btn btn--primary btn--block" id="submitbtn">Submit paper</button></div>'
          : '') +
      '</div>';

    wireRun(q);
  }

  function isCorrect(q, given) {
    if (given === null || given === undefined) return false;
    if (q.format === "mcq") return given === q.a;
    if (q.format === "tf") return given === q.a;
    var norm = String(given).trim().toLowerCase();
    return (q.a || []).some(function (acc) { return String(acc).trim().toLowerCase() === norm; });
  }

  function wireRun(q) {
    document.querySelectorAll("[data-pick]").forEach(function (b) {
      b.addEventListener("click", function () {
        var raw = b.getAttribute("data-pick");
        run.answers[run.i] = (q.format === "tf") ? (raw === "true") : parseInt(raw, 10);
        paintRun();
      });
    });

    var fib = document.getElementById("fibinput");
    if (fib) {
      fib.addEventListener("input", function () { run.answers[run.i] = fib.value; });
      fib.addEventListener("keydown", function (e) {
        if (e.key === "Enter") {
          var cb = document.getElementById("checkbtn") || document.getElementById("nextbtn") ||
                   document.getElementById("finishbtn");
          if (cb) cb.click();
        }
      });
    }

    var check = document.getElementById("checkbtn");
    if (check) check.addEventListener("click", function () {
      if (run.answers[run.i] === null || run.answers[run.i] === "") { app.toast("Choose an answer first"); return; }
      run.revealed = true;
      store.gradeSrs(q.key, isCorrect(q, run.answers[run.i]));
      paintRun();
    });

    var next = document.getElementById("nextbtn");
    if (next) next.addEventListener("click", function () { run.i++; run.revealed = false; paintRun(); });

    var prev = document.getElementById("prevbtn");
    if (prev) prev.addEventListener("click", function () { run.i--; run.revealed = false; paintRun(); });

    var fin = document.getElementById("finishbtn");
    if (fin) fin.addEventListener("click", function () { finish(false); });

    var sub = document.getElementById("submitbtn");
    if (sub) sub.addEventListener("click", function () {
      if (confirm("Submit the paper now?")) finish(false);
    });

    var quit = document.getElementById("quitbtn");
    if (quit) quit.addEventListener("click", function () {
      if (confirm("Quit this quiz? Your answers will not be saved.")) {
        if (run && run.timer) clearInterval(run.timer);
        resetRun();
        location.hash = "#/quiz";
      }
    });
  }

  /* ============================================================
     RESULTS
     ============================================================ */
  function finish(timedOut) {
    if (run && run.timer) clearInterval(run.timer);

    var correct = 0;
    var wrongList = [];
    run.qs.forEach(function (q, i) {
      var ok = isCorrect(q, run.answers[i]);
      if (ok) correct++; else wrongList.push({ q: q, given: run.answers[i] });
      // In exam mode grading happens only now
      if (run.exam) store.gradeSrs(q.key, ok);
    });

    var total = run.qs.length;
    var percent = app.pct(correct, total);
    var mins = Math.round((Date.now() - run.startedAt) / 60000);

    store.saveAttempt({
      at: Date.now(),
      scope: run.scope,
      label: run.label,
      total: total,
      correct: correct,
      exam: run.exam,
      minutes: mins
    });

    var verdict = percent >= 80 ? "Strong" : percent >= 60 ? "Passing" : percent >= 40 ? "Shaky" : "Needs work";
    var chipCls = percent >= 80 ? "chip--ok" : percent >= 50 ? "chip--warn" : "chip--danger";

    host.innerHTML =
      '<div class="result">' +
        (timedOut ? '<div class="callout mb-6"><div class="callout__title">Time up</div>' +
          'The paper was submitted automatically when the clock ran out.</div>' : '') +
        '<div class="result__ring">' + app.ringHtml(percent, 150) + '</div>' +
        '<h1 class="mt-6">' + correct + ' out of ' + total + '</h1>' +
        '<div class="row row--wrap center mt-3" style="justify-content:center">' +
          '<span class="chip ' + chipCls + '">' + verdict + '</span>' +
          '<span class="chip">' + app.esc(run.label) + '</span>' +
          (run.exam ? '<span class="chip">Exam mode · ' + mins + ' min</span>' : '') +
        '</div>' +

        (wrongList.length
          ? '<h2 class="mt-12 mb-4">Review the ' + wrongList.length + ' you missed</h2>' +
            '<div class="stack">' + wrongList.map(function (w) {
              var q = w.q;
              var right = q.format === "mcq" ? (q.o || [])[q.a]
                : q.format === "tf" ? (q.a ? "True" : "False")
                : (q.a || []).join(" / ");
              var mine = w.given === null || w.given === "" ? "Not answered"
                : q.format === "mcq" ? (q.o || [])[w.given]
                : q.format === "tf" ? (w.given ? "True" : "False")
                : w.given;
              return '<div class="card">' +
                '<p><b>' + app.esc(q.q) + '</b></p>' +
                '<p class="mt-2 small"><span class="chip chip--danger">You said</span> ' + app.esc(String(mine)) + '</p>' +
                '<p class="mt-2 small"><span class="chip chip--ok">Answer</span> ' + app.esc(String(right)) + '</p>' +
                (q.e ? '<div class="callout mt-3">' + q.e + '</div>' : '') +
                (q.topicId && syllabus.topicById[q.topicId]
                  ? '<a class="btn btn--sm mt-3" href="#/topic/' + q.topicId + '">Read the lesson</a>' : '') +
                '</div>';
            }).join("") + '</div>'
          : '<div class="callout mt-8"><div class="callout__title">Clean sweep</div>' +
            'Every answer correct. These questions move further down your review queue.</div>') +

        '<div class="row row--wrap mt-12" style="justify-content:center">' +
          '<a class="btn btn--primary" href="#/quiz">Back to quiz hub</a>' +
          '<a class="btn" href="#/dashboard">See my dashboard</a>' +
          (wrongList.length ? '<a class="btn" href="#/quiz/review">Review these later</a>' : '') +
        '</div>' +
      '</div>';

    resetRun();
  }

  return { render: render, reset: resetRun };
})();
