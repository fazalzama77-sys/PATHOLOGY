/* ============================================================
   dashboard.js  —  Progress, analytics and the review queue
   ------------------------------------------------------------
   Reads only from store.js. Adds nothing to storage itself.
   ============================================================ */

var dashboardApp = (function () {

  function render(host) {
    var readMap   = store.getRead();
    var quiz      = store.getQuiz();
    var streak    = store.computeStreak();
    var activity  = store.getActivity();
    var due       = store.dueSrs().length;
    var srs       = store.getSrs();

    var allTopics = syllabus.allUnits.reduce(function (n, u) { return n + u.topics.length; }, 0);
    var readN     = Object.keys(readMap).length;

    var totalQ = 0, totalCorrect = 0;
    quiz.attempts.forEach(function (a) { totalQ += a.total; totalCorrect += a.correct; });
    var accuracy = app.pct(totalCorrect, totalQ);

    host.innerHTML =
      '<div class="pagehead">' +
        '<span class="eyebrow">Where you actually are</span>' +
        '<h1>Dashboard</h1>' +
        '<p class="lede">Syllabus coverage, quiz accuracy and the questions your memory is about to lose.</p>' +
      '</div>' +

      '<div class="grid grid--4">' +
        app.statCard("Syllabus read", app.pct(readN, allTopics) + "%", readN + " of " + allTopics + " topics", "check") +
        app.statCard("Quiz accuracy", totalQ ? accuracy + "%" : "—", quiz.attempts.length + " attempts", "target") +
        app.statCard("Current streak", streak.current + " d", "Best " + streak.longest + " d", "flame") +
        app.statCard("Due for review", due, due ? "Waiting in Smart Review" : "Queue is clear", "clock") +
      '</div>' +

      (due ? '<a class="card card--link mt-6 reviewbanner" href="#/quiz/review">' +
        '<div><b>' + due + ' question' + (due === 1 ? ' is' : 's are') + ' due for review</b>' +
        '<p class="small muted mt-1">Spaced repetition works best when you clear the queue the day it appears.</p></div>' +
        '<span class="btn btn--primary push">Start review</span></a>' : '') +

      '<h2 class="mt-12">Coverage by unit</h2>' +
      '<p class="muted mt-2">Reading progress, question bank size and your best quiz score, side by side.</p>' +
      unitTable() +

      '<h2 class="mt-12">Study activity</h2>' +
      '<p class="muted mt-2">The last 12 weeks. Each square is a day you opened a lesson, wrote a note or took a quiz.</p>' +
      heatmap(activity) +

      '<div class="grid grid--2 mt-12">' +
        recentAttempts(quiz) +
        memoryBoxes(srs) +
      '</div>';
  }

  /* ---------- unit coverage table ---------- */
  function unitTable() {
    var quiz = store.getQuiz();

    function rowsFor(units, tag) {
      return units.map(function (u) {
        var pr = app.unitProgress(u);
        var qn = app.questionCount(u.id);
        var rec = quiz.byUnit["unit:" + u.id];
        return '<tr>' +
          '<td><a href="#/unit/' + u.id + '"><b>' + tag + u.no + '</b> ' + app.esc(u.short) + '</a></td>' +
          '<td style="min-width:150px">' +
            '<div class="bar"><div class="bar__fill" style="width:' + pr.pct + '%"></div></div>' +
            '<span class="small faint">' + pr.done + ' / ' + pr.total + '</span>' +
          '</td>' +
          '<td class="mono">' + qn + '</td>' +
          '<td>' + (rec ? '<span class="chip ' +
            (rec.best >= 70 ? 'chip--ok' : rec.best >= 45 ? 'chip--warn' : 'chip--danger') +
            '">' + rec.best + '%</span>' : '<span class="faint">—</span>') + '</td>' +
          '<td>' + (qn ? '<a class="btn btn--sm" href="#/quiz/unit/' + u.id + '">Test</a>' :
            '<span class="faint small">no questions</span>') + '</td>' +
        '</tr>';
      }).join("");
    }

    return '<div class="tablewrap mt-4"><table class="tbl">' +
      '<thead><tr><th>Unit</th><th>Read</th><th>Questions</th><th>Best score</th><th></th></tr></thead>' +
      '<tbody>' +
        rowsFor(syllabus.theory, "U") +
        '<tr><td colspan="5" class="faint small" style="background:var(--surface-2)"><b>PRACTICAL</b></td></tr>' +
        rowsFor(syllabus.practical, "P") +
      '</tbody></table></div>';
  }

  /* ---------- activity heatmap ---------- */
  function heatmap(activity) {
    var cells = [];
    var d = new Date();
    d.setHours(0, 0, 0, 0);
    // Walk back 83 days so today sits at the end.
    d.setDate(d.getDate() - 83);

    for (var i = 0; i < 84; i++) {
      var key = d.getFullYear() + "-" +
        String(d.getMonth() + 1).padStart(2, "0") + "-" +
        String(d.getDate()).padStart(2, "0");
      var n = activity[key] || 0;
      var lvl = n === 0 ? 0 : n < 3 ? 1 : n < 6 ? 2 : n < 12 ? 3 : 4;
      cells.push('<div class="hm__cell" data-lvl="' + lvl + '" title="' + key + ' — ' +
        (n ? n + ' actions' : 'no activity') + '"></div>');
      d.setDate(d.getDate() + 1);
    }

    return '<div class="hm mt-4">' + cells.join("") + '</div>' +
      '<div class="row mt-3 small faint"><span>Less</span>' +
      [0, 1, 2, 3, 4].map(function (l) { return '<div class="hm__cell" data-lvl="' + l + '"></div>'; }).join("") +
      '<span>More</span></div>';
  }

  /* ---------- recent attempts ---------- */
  function recentAttempts(quiz) {
    var list = quiz.attempts.slice(-8).reverse();
    if (!list.length) {
      return '<div class="card"><h3>Recent attempts</h3>' +
        '<p class="muted mt-2">Nothing yet. Your last eight quizzes will be listed here with the score and the date.</p>' +
        '<a class="btn btn--sm mt-4" href="#/quiz">Take your first quiz</a></div>';
    }
    return '<div class="card"><h3>Recent attempts</h3><div class="tlist mt-4" style="border:none">' +
      list.map(function (a) {
        var p = app.pct(a.correct, a.total);
        return '<div class="tlist__row">' +
          '<span class="tlist__body"><span class="tlist__title">' + app.esc(a.label) + '</span>' +
          '<span class="tlist__sub">' + new Date(a.at).toLocaleDateString() +
          (a.exam ? ' · exam mode' : '') + '</span></span>' +
          '<span class="tlist__right"><span class="chip ' +
            (p >= 70 ? 'chip--ok' : p >= 45 ? 'chip--warn' : 'chip--danger') + '">' +
            a.correct + '/' + a.total + '</span></span></div>';
      }).join("") + '</div></div>';
  }

  /* ---------- Leitner box distribution ---------- */
  function memoryBoxes(srs) {
    var boxes = [0, 0, 0, 0, 0];
    var keys = Object.keys(srs);
    keys.forEach(function (k) { boxes[(srs[k].box || 1) - 1]++; });
    var max = Math.max.apply(null, boxes.concat([1]));

    if (!keys.length) {
      return '<div class="card"><h3>Memory strength</h3>' +
        '<p class="muted mt-2">Every question you answer enters a five-box review system. ' +
        'Get it right and it moves up a box and comes back later; get it wrong and it drops to box 1 ' +
        'and returns tomorrow.</p></div>';
    }

    var labels = ["Box 1 · daily", "Box 2 · 2 days", "Box 3 · 4 days", "Box 4 · 8 days", "Box 5 · 16 days"];
    return '<div class="card"><h3>Memory strength</h3>' +
      '<p class="muted mt-2">' + keys.length + ' questions are being tracked. ' +
      'Questions climb towards box 5 as you keep getting them right.</p>' +
      '<div class="stack-sm mt-4">' + boxes.map(function (n, i) {
        return '<div class="row small">' +
          '<span style="width:120px;flex:none" class="faint">' + labels[i] + '</span>' +
          '<div class="bar" style="flex:1"><div class="bar__fill" style="width:' +
            (n / max * 100) + '%"></div></div>' +
          '<span class="mono" style="width:32px;text-align:right">' + n + '</span></div>';
      }).join("") + '</div></div>';
  }

  return { render: render };
})();
