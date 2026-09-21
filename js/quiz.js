/* ============================================================
   quiz.js  —  The Veterinary Pathology Quiz Engine
   ------------------------------------------------------------
   Features:
     - 1,080 Curriculum-standard Questions across Units 1 to 6
     - Strict 2 : 1 : 1 Ratio (90 MCQ : 45 TF : 45 FIB per unit)
     - 32 Thematic Sub-sections with dedicated module testing
     - Sequence Mode (Curriculum order) vs. Shuffle Mode (Randomized)
     - EdTech UI with live feedback, keyboard shortcuts & streak awards
     - Spaced Repetition (SRS) integration & Exam Simulation
   ============================================================ */

var quizApp = (function () {

  var host;                 // container element
  var run = null;           // active run state

  /* Sub-section metadata for Units 1 to 6 */
  var subSectionsByUnit = {
    "unit-1": [
      { id: "u1-s1", icon: "🔬", title: "Cell Injury, Adaptations & Degenerations", desc: "Aetiology, cellular adaptations, cloudy swelling, fatty change & amyloidosis" },
      { id: "u1-s2", icon: "⚰️", title: "Necrosis, Apoptosis, Gangrene & Calcification", desc: "Coagulative, liquefactive, caseous, gangrene, apoptosis & dystrophic calcification" },
      { id: "u1-s3", icon: "🩸", title: "Hemodynamic & Circulatory Disorders", desc: "Hyperemia, congestion, edema, hemorrhage, thrombosis, embolism & shock" },
      { id: "u1-s4", icon: "🔥", title: "Acute & Chronic Inflammation & Repair", desc: "Vascular/cellular events, mediators, chemical signals, exudates & wound healing" },
      { id: "u1-s5", icon: "🛡️", title: "Pigments, Growth Disturbances & Immunity", desc: "Endogenous/exogenous pigments, photosensitization, hypoplasia & hypersensitivity" }
    ],
    "unit-2": [
      { id: "u2-s1", icon: "🍽️", title: "Digestive & Hepatobiliary Pathology", desc: "Stomatitis, rumenitis, enteritis, button ulcers, nutmeg liver, cirrhosis & jaundice" },
      { id: "u2-s2", icon: "🫁", title: "Respiratory & Cardiovascular Pathology", desc: "Rhinitis, roaring, shipping fever, pneumonia, pericarditis & endocarditis" },
      { id: "u2-s3", icon: "💧", title: "Urinary & Reproductive System Pathology", desc: "Glomerulonephritis, nephrosis, pyelonephritis, urolithiasis, metritis & pyometra" },
      { id: "u2-s4", icon: "🧠", title: "Nervous, Musculoskeletal & Endocrine", desc: "Polioencephalomalacia, rabies, BSE, swayback, myositis, rickets & goitre" },
      { id: "u2-s5", icon: "🩸", title: "Hematopoietic, Integumentary & Senses", desc: "Anemia types, sago spleen, diamond skin, greasy pig disease & keratitis" }
    ],
    "unit-3": [
      { id: "u3-s1", icon: "🧬", title: "General Oncology & Carcinogenesis", desc: "Benign vs malignant, metastasis, viral/chemical carcinogenesis & tumor biology" },
      { id: "u3-s2", icon: "🔬", title: "Tumor Classification, Diagnosis & Staging", desc: "Epithelial, mesenchymal, round cell tumors, grading & immunohistochemistry" },
      { id: "u3-s3", icon: "🩸", title: "Clinical Hematology & Anemia Profiles", desc: "Erythron, PCV, regenerative/non-regenerative anemias, leukogram & bone marrow" },
      { id: "u3-s4", icon: "🧪", title: "Diagnostic Cytology & Body Fluid Analysis", desc: "FNAC, transudate vs exudate, urinalysis, sediment & clinical chemistry" },
      { id: "u3-s5", icon: "⚖️", title: "Necropsy Protocols, Forensics & Preservation", desc: "PM protocol, rigor mortis, forensic necropsy & 10% NBF tissue preservation" }
    ],
    "unit-4": [
      { id: "u4-s1", icon: "🐄", title: "Viral Diseases of Ruminants", desc: "FMD, rinderpest, MCF, bluetongue, PPR, rotavirus & sheep pox" },
      { id: "u4-s2", icon: "🐕", title: "Viral Diseases of Equines, Swine & Carnivores", desc: "EIA, CSF, rabies, canine distemper, parvovirus & infectious canine hepatitis" },
      { id: "u4-s3", icon: "🦠", title: "Major Bacterial Diseases (Anthrax, TB & Clostridia)", desc: "Anthrax, blackquarter, enterotoxemia, tetanus, bovine TB & Johne's disease" },
      { id: "u4-s4", icon: "🧫", title: "Other Bacterial & Mycoplasmal Diseases", desc: "Hemorrhagic septicemia (HS), glanders, strangles, listeriosis, brucellosis & CBPP" },
      { id: "u4-s5", icon: "🍄", title: "Fungal Diseases, Mycotoxicoses & Prions", desc: "Ringworm, aspergillosis, rhinosporidiosis, aflatoxicosis, degnala & BSE/scrapie" },
      { id: "u4-s6", icon: "🪱", title: "Parasitic Pathology (Protozoa & Helminths)", desc: "Babesiosis, theileriosis, surra, fasciolosis, haemonchosis & cestodes" },
      { id: "u4-s7", icon: "🩺", title: "Nutritional & Metabolic Disorders", desc: "Milk fever, ketosis, pregnancy toxemia, swayback, rickets & pica" },
      { id: "u4-s8", icon: "☣️", title: "Toxicological Pathology (Metals, Plants & Chemicals)", desc: "Copper, arsenic, lead, nitrate/nitrite, HCN, bracken fern & lantana" }
    ],
    "unit-5": [
      { id: "u5-s1", icon: "🐓", title: "Avian Viral Respiratory & Systemic Diseases", desc: "Ranikhet (ND), infectious bronchitis (IB), ILT, avian influenza & fowl pox" },
      { id: "u5-s2", icon: "🧬", title: "Avian Neoplastic & Immunosuppressive Diseases", desc: "Gumboro (IBD), chicken infectious anemia (CIA), Marek's disease & leukosis" },
      { id: "u5-s3", icon: "🧫", title: "Avian Bacterial & Mycoplasmal Diseases", desc: "Colibacillosis, fowl cholera, pullorum, fowl typhoid, coryza & CRD" },
      { id: "u5-s4", icon: "🍄", title: "Avian Mycoses, Mycotoxicoses & Parasites", desc: "Aspergillosis, aflatoxicosis, ochratoxicosis, coccidiosis & histomoniasis" },
      { id: "u5-s5", icon: "🥚", title: "Nutritional, Metabolic Disorders & Vices", desc: "Visceral/articular gout, ascites, perosis, crazy chick disease & rickets" }
    ],
    "unit-6": [
      { id: "u6-s1", icon: "🐭", title: "Pathology of Laboratory Rodents", desc: "Mice, rats, hamsters: Tyzzer's disease, ectromelia, SDAV, Sendai & pinworms" },
      { id: "u6-s2", icon: "🐰", title: "Pathology of Rabbits & Guinea Pigs", desc: "RHD, myxomatosis, snuffles, hepatic coccidiosis, scurvy & malocclusion" },
      { id: "u6-s3", icon: "🦁", title: "Infectious Diseases of Zoo & Wild Animals", desc: "Wildlife rabies, CDV in wild felids, anthrax, bovine TB, KFD & EEHV" },
      { id: "u6-s4", icon: "🦌", title: "Parasitic, Nutritional & Capture Pathology", desc: "Capture myopathy, surra, theileriosis, diclofenac vulture gout & lead toxicity" }
    ]
  };

  function getSubSectionMeta(unitId, subId) {
    if (!subId || subId === "all") return null;
    var list = subSectionsByUnit[unitId] || [];
    for (var i = 0; i < list.length; i++) {
      if (list[i].id === subId) return list[i];
    }
    return null;
  }

  function resetRun() {
    if (run && run.timer) clearInterval(run.timer);
    detachKeys();
    run = null;
  }

  /* ============================================================
     BUILDING A QUESTION SET
     ============================================================ */
  function bankFor(unitIds, formats, subSectionId) {
    var out = [];
    unitIds.forEach(function (uid) {
      var b = (window.quizBank || {})[uid];
      if (!b) return;
      formats.forEach(function (f) {
        (b[f] || []).forEach(function (q, i) {
          if (!q.q || !String(q.q).trim()) return;   // skip empty template rows
          if (subSectionId && subSectionId !== "all" && q.subSection !== subSectionId) return;
          var opts = q.o;
          var ans = q.a;
          if (f === "mcq" && Array.isArray(opts) && typeof ans === "number") {
            var mixed = shuffleOptions(opts, ans);
            opts = mixed.o;
            ans = mixed.a;
          }
          out.push({
            key: uid + ":" + f + ":" + i,
            format: f,
            unitId: uid,
            subSection: q.subSection || null,
            q: q.q,
            o: opts,
            a: ans,
            a_display: q.a_display || (Array.isArray(q.a) ? q.a[0] : q.a),
            e: q.e,
            topicId: q.topicId || null,
            diff: q.diff || 1
          });
        });
      });
    });
    return out;
  }

  /* Most MCQs were authored with the correct choice written first. Shuffle the
     options (and move the answer index with them) so the right answer is not
     almost always option A. */
  function shuffleOptions(options, answerIdx) {
    var order = [];
    for (var k = 0; k < options.length; k++) order.push(k);
    for (var i = order.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = order[i]; order[i] = order[j]; order[j] = t;
    }
    return {
      o: order.map(function (idx) { return options[idx]; }),
      a: order.indexOf(answerIdx)
    };
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
    var copy = a.slice(0);
    for (var i = copy.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = copy[i]; copy[i] = copy[j]; copy[j] = t;
    }
    return copy;
  }

  function countAvailable(unitIds, subSectionId) {
    return bankFor(unitIds, ["mcq", "tf", "fib"], subSectionId).length;
  }

  /* ============================================================
     ROUTER ENTRY POINT
     ============================================================ */
  function render(container, params) {
    host = container;
    var kind = params.a;

    // A quiz already in progress is never thrown away silently, and never
    // hijacks the screen either — you choose to resume it or drop it.
    if (run && run.active) { renderResume(); return; }

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
      var subList = subSectionsByUnit[u.id] || [];
      return '<a class="tlist__row' + (n ? '' : ' is-empty') + '" href="' +
        (n ? '#/quiz/unit/' + u.id : '#/quiz') + '">' +
        '<span class="tlist__no">U' + u.no + '</span>' +
        '<span class="tlist__body"><span class="tlist__title">' + app.esc(u.short) + '</span>' +
        '<span class="tlist__sub">' +
          (n ? '<b>' + n + ' questions</b> (' + subList.length + ' modular sub-sections • 2:1:1 ratio)' : 'No questions added yet') +
        '</span></span>' +
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
      '<div class="pagehead quiz-hub-head">' +
        '<div class="row row--wrap items-center gap-2 mb-2">' +
          '<span class="chip chip--accent font-mono">🌟 ' + totalAll + ' Questions Bank</span>' +
          '<span class="chip chip--ok">Exact 2:1:1 Ratio (90 MCQ • 45 T/F • 45 FIB)</span>' +
          '<span class="chip">32 Sub-sections</span>' +
        '</div>' +
        '<h1>' + app.icon("quiz") + ' Veterinary Pathology Examination Suite</h1>' +
        '<p class="lede">Test individual sub-sections, full units, paper-wise or grand exams. ' +
        'Choose between <b>Sequence Mode</b> (curriculum order) or <b>Shuffle Mode</b> (randomized), with instant feedback and Spaced Repetition queue.</p>' +
      '</div>' +

      (totalAll === 0
        ? '<div class="empty"><div class="empty__icon">' + app.icon("quiz") + '</div><h3>The question bank is empty</h3>' +
          '<p>Add questions in <b>data/data-quiz.JS</b>.</p></div>'
        : '') +

      '<h2 class="mt-8 flex items-center gap-2"><span>🎯</span> Comprehensive Mock Tests</h2>' +
      '<div class="grid grid--3 mt-4">' +
        modeCard("Paper I", "General, Systemic & Infectious (Units 1, 2, 3)", countAvailable(scopeUnits("paper", "paper-1")), "#/quiz/paper/paper-1", false, "theory") +
        modeCard("Paper II", "Necropsy, Avian & Wild/Lab (Units 4, 5, 6)", countAvailable(scopeUnits("paper", "paper-2")), "#/quiz/paper/paper-2", false, "theory") +
        modeCard("Grand test", "All six theory units (1,080 questions)", countAvailable(theoryIds), "#/quiz/grand", false, "trophy") +
        modeCard("Practical", "All practical units", countAvailable(pracIds), "#/quiz/practical", false, "practical") +
        modeCard("Smart Review", due + " question" + (due === 1 ? "" : "s") + " due today", due, "#/quiz/review", true, "repeat") +
      '</div>' +

      '<h2 class="mt-12 flex items-center gap-2"><span>📚</span> Theory Units with Modular Sub-sections</h2>' +
      '<p class="small muted">Click any unit below to practice specific sub-sections or the full unit in Sequence or Shuffle mode.</p>' +
      '<div class="tlist mt-4">' + unitRows + '</div>' +

      '<h2 class="mt-12 flex items-center gap-2"><span>🔬</span> Practical Diagnostic Units</h2>' +
      '<div class="tlist mt-4">' + pracRows + '</div>';
  }

  function modeCard(title, sub, n, href, isReview, ico) {
    var disabled = !n;
    var iconHtml = ico ? app.icon(ico) : (isReview ? app.icon("repeat") : app.icon("quiz"));
    return '<a class="card card--link modecard' + (disabled ? ' is-disabled' : '') + '" href="' +
      (disabled ? '#/quiz' : href) + '">' +
      '<div class="row"><span class="card__title" style="display:flex;align-items:center;gap:6px;">' + iconHtml + ' ' + title + '</span>' +
      '<span class="chip push' + (n ? ' chip--accent' : '') + '">' + n + '</span></div>' +
      '<p class="card__desc">' + sub + '</p>' +
      (disabled ? '<p class="small faint mt-2">' +
        (isReview ? 'Nothing due — answer some questions first.' : 'No questions added yet.') + '</p>' : '') +
      '</a>';
  }

  /* ============================================================
     SETUP SCREEN WITH SUB-SECTION PICKER & SEQUENCE/SHUFFLE TOGGLE
     ============================================================ */
  function renderSetup(kind, id) {
    resetRun();
    var unitIds = scopeUnits(kind, id);
    var subSections = (kind === "unit" && subSectionsByUnit[id]) ? subSectionsByUnit[id] : [];

    var label = kind === "unit"
      ? "Unit " + (syllabus.unitById[id] || {}).no + " — " + (syllabus.unitById[id] || {}).short
      : kind === "paper"
        ? (id === "paper-1" ? "Paper I — Units 1, 2, 3" : "Paper II — Units 4, 5, 6")
        : kind === "grand" ? "Grand Test — All Theory Units" : "Practical Units";

    var state = {
      subSectionId: "all",
      orderMode: "sequence", // 'sequence' or 'shuffle'
      formats: ["mcq", "tf", "fib"],
      count: 20,
      exam: false,
      minutes: 20
    };

    function updateView() {
      var pool = bankFor(unitIds, state.formats, state.subSectionId);
      var allPool = bankFor(unitIds, ["mcq", "tf", "fib"], state.subSectionId);

      var counts = { mcq: 0, tf: 0, fib: 0 };
      allPool.forEach(function (q) { counts[q.format]++; });
      var maxN = pool.length;

      var presets = [10, 20, 30, 45, 90, maxN].filter(function (n, idx, arr) {
        return n <= maxN && arr.indexOf(n) === idx;
      });
      if (!presets.length) presets = [maxN];
      if (state.count > maxN || presets.indexOf(state.count) === -1) {
        state.count = presets[Math.min(1, presets.length - 1)] || maxN;
      }

      var subSecHtml = "";
      if (subSections.length > 0) {
        var allCount = bankFor(unitIds, ["mcq", "tf", "fib"], "all").length;
        subSecHtml =
          '<div class="setup__row subsec-selector-row">' +
            '<div>' +
              '<b class="flex items-center gap-2"><span>📂</span> Choose Sub-section / Module</b>' +
              '<p class="small muted">Target a specific topic or practice all sub-sections in the unit.</p>' +
            '</div>' +
            '<div class="subsec-grid mt-3">' +
              '<button type="button" class="subsec-card' + (state.subSectionId === 'all' ? ' is-active' : '') + '" data-sub="all">' +
                '<div class="subsec-card__head">' +
                  '<span class="subsec-card__icon">🌟</span>' +
                  '<span class="subsec-card__title">All Sub-sections (Full Unit)</span>' +
                  '<span class="chip chip--accent subsec-card__badge">' + allCount + ' Qs</span>' +
                '</div>' +
                '<p class="subsec-card__desc">Complete unit test covering all topics in rigorous 2:1:1 exam ratio.</p>' +
              '</button>' +
              subSections.map(function (sub) {
                var c = bankFor(unitIds, ["mcq", "tf", "fib"], sub.id).length;
                var active = state.subSectionId === sub.id ? ' is-active' : '';
                return '<button type="button" class="subsec-card' + active + '" data-sub="' + sub.id + '">' +
                  '<div class="subsec-card__head">' +
                    '<span class="subsec-card__icon">' + sub.icon + '</span>' +
                    '<span class="subsec-card__title">' + app.esc(sub.title) + '</span>' +
                    '<span class="chip subsec-card__badge">' + c + ' Qs</span>' +
                  '</div>' +
                  '<p class="subsec-card__desc">' + app.esc(sub.desc) + '</p>' +
                '</button>';
              }).join("") +
            '</div>' +
          '</div>';
      }

      var currentSubMeta = getSubSectionMeta(id, state.subSectionId);
      var subHeadingBadge = currentSubMeta
        ? '<span class="chip chip--accent">' + currentSubMeta.icon + ' ' + app.esc(currentSubMeta.title) + '</span>'
        : '<span class="chip chip--accent">🌟 All ' + (subSections.length || '') + ' Sub-sections</span>';

      host.innerHTML =
        '<div class="pagehead">' +
          '<div class="row row--wrap items-center gap-2 mb-2">' +
            '<a class="btn btn--sm btn--ghost" href="#/quiz">← Quiz Hub</a>' +
            subHeadingBadge +
            '<span class="chip font-mono">' + maxN + ' Available Questions</span>' +
          '</div>' +
          '<h1>' + app.esc(label) + '</h1>' +
          '<p class="lede">Configure your test parameters below. Pick question count, format filters, and test mode.</p>' +
        '</div>' +

        '<div class="card setup quiz-setup-card">' +
          subSecHtml +

          /* Order Mode Toggle (Sequence vs Shuffle) */
          '<div class="setup__row">' +
            '<div>' +
              '<b class="flex items-center gap-2"><span>🔄</span> Question Order Mode</b>' +
              '<p class="small muted">Attempt questions sequentially according to syllabus or shuffle them randomly.</p>' +
            '</div>' +
            '<div class="quiz-mode-toggle" id="ordermodetoggle">' +
              '<button type="button" class="toggle-pill' + (state.orderMode === 'sequence' ? ' is-selected' : '') + '" data-mode="sequence">' +
                '<span class="pill-icon">📋</span>' +
                '<span class="pill-label">Sequence Mode</span>' +
                '<span class="pill-sub">Curriculum order</span>' +
              '</button>' +
              '<button type="button" class="toggle-pill' + (state.orderMode === 'shuffle' ? ' is-selected' : '') + '" data-mode="shuffle">' +
                '<span class="pill-icon">🔀</span>' +
                '<span class="pill-label">Shuffle Mode</span>' +
                '<span class="pill-sub">Randomized order</span>' +
              '</button>' +
            '</div>' +
          '</div>' +

          /* Format selection */
          '<div class="setup__row">' +
            '<div>' +
              '<b>Question Formats (2 : 1 : 1 Ratio)</b>' +
              '<p class="small muted">Select any combination of question types.</p>' +
            '</div>' +
            '<div class="row row--wrap gap-3" id="fmtbox">' +
              ['mcq', 'tf', 'fib'].map(function (f) {
                var lbl = { mcq: "Multiple Choice", tf: "True / False", fib: "Fill in the Blanks" }[f];
                var icon = { mcq: "🔘", tf: "⚖️", fib: "✍️" }[f];
                var count = counts[f];
                var checked = state.formats.indexOf(f) !== -1;
                return '<label class="check-pill' + (checked ? ' is-checked' : '') + (count === 0 ? ' is-disabled' : '') + '">' +
                  '<input type="checkbox" data-fmt="' + f + '"' + (checked ? ' checked' : '') + (count === 0 ? ' disabled' : '') + '> ' +
                  '<span class="check-pill__icon">' + icon + '</span>' +
                  '<span class="check-pill__label">' + lbl + '</span>' +
                  '<span class="chip chip--sm ml-1">' + count + '</span>' +
                '</label>';
              }).join("") +
            '</div>' +
          '</div>' +

          /* Question count */
          '<div class="setup__row">' +
            '<div>' +
              '<b>Number of Questions</b>' +
              '<p class="small muted">Choose your practice length.</p>' +
            '</div>' +
            '<div class="seg" id="segcount">' +
              presets.map(function (n) {
                var isSelected = state.count === n;
                return '<button type="button" class="seg__btn' + (isSelected ? ' is-on' : '') + '" data-count="' + n + '">' +
                  (n === maxN ? 'All (' + n + ')' : n) +
                '</button>';
              }).join("") +
            '</div>' +
          '</div>' +

          /* Exam Mode Toggle */
          '<div class="setup__row">' +
            '<div>' +
              '<b>⏱️ Exam Mode (Timed)</b>' +
              '<p class="small muted">Timed exam with no answer reveals until final submission — mirrors annual university exam.</p>' +
            '</div>' +
            '<label class="switch"><input type="checkbox" id="exammode"' + (state.exam ? ' checked' : '') + '><span></span></label>' +
          '</div>' +

          /* Time Limit selector */
          '<div class="setup__row" id="timerow"' + (state.exam ? '' : ' hidden') + '>' +
            '<div>' +
              '<b>Time Limit</b>' +
              '<p class="small muted">Automatic submission when clock reaches zero.</p>' +
            '</div>' +
            '<div class="seg" id="segtime">' +
              [10, 20, 30, 45, 60].map(function (m) {
                return '<button type="button" class="seg__btn' + (state.minutes === m ? ' is-on' : '') + '" data-min="' + m + '">' + m + ' min</button>';
              }).join("") +
            '</div>' +
          '</div>' +

          /* Action Bar */
          '<div class="row mt-8 items-center">' +
            '<a class="btn btn--ghost" href="#/quiz">Cancel</a>' +
            '<div class="push"></div>' +
            '<button class="btn btn--primary btn--lg" id="startbtn">' +
              '🚀 Start Quiz (' + Math.min(state.count, maxN) + ' Questions)' +
            '</button>' +
          '</div>' +
        '</div>';

      attachEvents();
    }

    function attachEvents() {
      // Sub-section cards
      document.querySelectorAll(".subsec-card").forEach(function (card) {
        card.addEventListener("click", function () {
          var sId = card.getAttribute("data-sub");
          state.subSectionId = sId;
          updateView();
        });
      });

      // Order Mode Toggle
      document.querySelectorAll("#ordermodetoggle .toggle-pill").forEach(function (btn) {
        btn.addEventListener("click", function () {
          state.orderMode = btn.getAttribute("data-mode");
          updateView();
        });
      });

      // Formats Checkboxes
      document.querySelectorAll("[data-fmt]").forEach(function (chk) {
        chk.addEventListener("change", function () {
          var checkedFmts = Array.prototype.slice.call(document.querySelectorAll("[data-fmt]"))
            .filter(function (c) { return c.checked; })
            .map(function (c) { return c.getAttribute("data-fmt"); });
          if (!checkedFmts.length) {
            app.toast("Select at least one question format");
            chk.checked = true;
            return;
          }
          state.formats = checkedFmts;
          updateView();
        });
      });

      // Question count seg
      document.querySelectorAll("#segcount .seg__btn").forEach(function (btn) {
        btn.addEventListener("click", function () {
          state.count = parseInt(btn.getAttribute("data-count"), 10);
          document.querySelectorAll("#segcount .seg__btn").forEach(function (b) { b.classList.remove("is-on"); });
          btn.classList.add("is-on");
          var startBtn = document.getElementById("startbtn");
          if (startBtn) startBtn.textContent = '🚀 Start Quiz (' + state.count + ' Questions)';
        });
      });

      // Exam Mode
      var examChk = document.getElementById("exammode");
      if (examChk) {
        examChk.addEventListener("change", function (e) {
          state.exam = e.target.checked;
          var tRow = document.getElementById("timerow");
          if (tRow) tRow.hidden = !e.target.checked;
        });
      }

      // Time seg
      document.querySelectorAll("#segtime .seg__btn").forEach(function (btn) {
        btn.addEventListener("click", function () {
          state.minutes = parseInt(btn.getAttribute("data-min"), 10);
          document.querySelectorAll("#segtime .seg__btn").forEach(function (b) { b.classList.remove("is-on"); });
          btn.classList.add("is-on");
        });
      });

      // Start Button
      var startBtn = document.getElementById("startbtn");
      if (startBtn) {
        startBtn.addEventListener("click", function () {
          var rawPool = bankFor(unitIds, state.formats, state.subSectionId);
          if (!rawPool.length) {
            app.toast("No questions available for this selection");
            return;
          }

          var finalQuestions;
          if (state.orderMode === "shuffle") {
            finalQuestions = shuffle(rawPool).slice(0, state.count);
          } else {
            // Sequence mode: exact curriculum sequence
            finalQuestions = rawPool.slice(0, state.count);
          }

          var runLabel = label;
          var subMeta = getSubSectionMeta(id, state.subSectionId);
          if (subMeta) {
            runLabel = subMeta.icon + " " + subMeta.title;
          }

          start(
            finalQuestions,
            kind + (id ? ":" + id : "") + (state.subSectionId !== "all" ? ":" + state.subSectionId : ""),
            runLabel,
            state.exam,
            state.minutes,
            state.orderMode,
            state.subSectionId,
            id
          );
        });
      }
    }

    updateView();
  }

  function renderResume() {
    var answered = run.answers.filter(hasAnswer).length;
    host.innerHTML =
      '<div class="pagehead"><span class="eyebrow">Quiz in progress</span>' +
        '<h1>' + app.esc(run.label) + '</h1></div>' +
      '<div class="card p-5 mt-4">' +
        '<p>You are on question <b>' + (run.i + 1) + ' of ' + run.qs.length + '</b> \u00b7 ' +
          answered + ' answered' + (run.exam ? ' \u00b7 timed exam' : '') + '.</p>' +
        '<div class="row row--wrap gap-3 mt-4">' +
          '<button class="btn btn--primary btn--lg" id="resumebtn">Resume quiz</button>' +
          '<button class="btn btn--lg" id="discardbtn">Discard &amp; start a new one</button>' +
        '</div>' +
      '</div>';

    var r = document.getElementById("resumebtn");
    if (r) r.addEventListener("click", function () {
      run.shownAt = Date.now();
      attachKeys();
      paintRun();
    });

    var d = document.getElementById("discardbtn");
    if (d) d.addEventListener("click", function () {
      if (!confirm("Discard the quiz in progress? Its answers will not be saved.")) return;
      var back = location.hash;
      stopRun();
      // Re-enter the same route now that no run is active
      location.hash = "#/quiz";
      setTimeout(function () { location.hash = back; }, 0);
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

    start(shuffle(pool), "review", "Smart Review", false, 0, "shuffle", "all", null);
  }

  /* ============================================================
     RUNNING A QUIZ
     ============================================================ */
  function start(questions, scope, label, exam, minutes, orderMode, subSectionId, unitId) {
    detachKeys();
    run = {
      active: true,
      qs: questions,
      i: 0,
      // One slot per question. Everything about a question lives at its own
      // index, so moving back and forth never disturbs an earlier answer.
      answers: new Array(questions.length).fill(null),
      revealed: new Array(questions.length).fill(false),
      graded: new Array(questions.length).fill(false),
      spent: new Array(questions.length).fill(0),
      scope: scope,
      label: label,
      orderMode: orderMode || "sequence",
      subSectionId: subSectionId || "all",
      unitId: unitId || (questions[0] ? questions[0].unitId : null),
      exam: !!exam,
      endsAt: exam ? Date.now() + minutes * 60000 : 0,
      startedAt: Date.now(),
      shownAt: Date.now(),
      timer: null,
      streak: 0,
      bestStreak: 0
    };

    if (run.exam) {
      var tick = setInterval(function () {
        if (!run || !run.active) { clearInterval(tick); return; }
        if (Date.now() >= run.endsAt) { finish(true); return; }
        var t = document.getElementById("qtimer");
        if (t) t.textContent = fmtTime(run.endsAt - Date.now());
      }, 1000);
      run.timer = tick;
    }
    attachKeys();
    paintRun();
  }

  function fmtTime(ms) {
    var s = Math.max(0, Math.floor(ms / 1000));
    return String(Math.floor(s / 60)).padStart(2, "0") + ":" + String(s % 60).padStart(2, "0");
  }

  function hasAnswer(v) {
    return !(v === null || v === undefined || v === "");
  }

  /* Time spent on the question on screen is banked before we move away. */
  function bankTime() {
    if (!run) return;
    var ms = Date.now() - (run.shownAt || Date.now());
    if (ms > 0 && ms < 30 * 60000) run.spent[run.i] = (run.spent[run.i] || 0) + ms;
    run.shownAt = Date.now();
  }

  function goTo(idx) {
    if (!run || idx < 0 || idx >= run.qs.length || idx === run.i) return;
    bankTime();
    run.i = idx;
    run.shownAt = Date.now();
    paintRun();
  }

  /* A single tap on an option is the answer — no separate confirm step.
     In practice mode it locks in and reveals the explanation straight away;
     in exam mode it only marks the choice, which stays changeable until the
     paper is submitted. */
  function commitAnswer(value) {
    if (!run) return;
    var idx = run.i;
    var q = run.qs[idx];
    if (!run.exam && run.revealed[idx]) return;   // already locked in

    run.answers[idx] = value;

    if (run.exam) { paintRun(); return; }

    bankTime();
    run.revealed[idx] = true;

    var ok = isCorrect(q, value);
    if (!run.graded[idx]) {
      run.graded[idx] = true;
      store.gradeSrs(q.key, ok);
      if (ok) {
        run.streak = (run.streak || 0) + 1;
        if (run.streak > run.bestStreak) run.bestStreak = run.streak;
        if (run.streak === 3 && app.popMilestone) app.popMilestone("\ud83d\udd25 3 in a row!");
        else if (run.streak === 5 && app.popMilestone) app.popMilestone("\ud83d\ude80 5 streak \u2014 unstoppable!");
        else if (run.streak === 7 && app.popMilestone) app.popMilestone("\u26a1 7 straight \u2014 pure genius!");
        else if (run.streak === 10 && app.popMilestone) app.popMilestone("\ud83d\udc51 10 streak \u2014 Master Pathologist!");
      } else {
        run.streak = 0;
      }
    }
    paintRun();
    if (ok && app.burstConfetti) {
      var mark = document.querySelector(".opt.is-right") || document.querySelector(".quizcard");
      if (mark) app.burstConfetti(mark);
    }
  }

  function paletteHtml() {
    return '<div class="qpalette mt-6">' +
      '<div class="qpalette__head">Question map \u00b7 tap any number to jump</div>' +
      '<div class="qpalette__grid">' +
        run.qs.map(function (q, i) {
          var cls = "qp";
          if (i === run.i) cls += " is-current";
          if (hasAnswer(run.answers[i])) {
            if (!run.exam && run.revealed[i]) {
              cls += isCorrect(q, run.answers[i]) ? " is-right" : " is-wrong";
            } else {
              cls += " is-done";
            }
          }
          return '<button type="button" class="' + cls + '" data-jump="' + i + '" ' +
            'aria-label="Question ' + (i + 1) + '">' + (i + 1) + '</button>';
        }).join("") +
      '</div>' +
    '</div>';
  }

  function paintRun() {
    if (!run || !run.active || !host) return;
    if (run.i < 0) run.i = 0;
    if (run.i > run.qs.length - 1) run.i = run.qs.length - 1;

    var q = run.qs[run.i];
    var given = run.answers[run.i];
    var showFeedback = !run.exam && run.revealed[run.i];
    var locked = showFeedback;

    var body;
    if (q.format === "mcq") {
      body = '<div class="opts">' + (q.o || []).map(function (opt, i) {
        var cls = "opt";
        if (given === i) cls += " is-picked";
        if (showFeedback) {
          if (i === q.a) cls += " is-right";
          else if (given === i) cls += " is-wrong";
          else cls += " is-muted";
        }
        return '<button type="button" class="' + cls + '" data-pick="' + i + '"' + (locked ? ' disabled' : '') + '>' +
          '<span class="opt__key">' + "ABCD".charAt(i) + '</span>' +
          '<span class="opt__text">' + app.esc(opt) + '</span>' +
          (showFeedback && i === q.a ? '<span class="opt__state">\u2713</span>' : '') +
          (showFeedback && given === i && i !== q.a ? '<span class="opt__state">\u2717</span>' : '') +
        '</button>';
      }).join("") + '</div>';

    } else if (q.format === "tf") {
      body = '<div class="opts opts--2">' + [true, false].map(function (v) {
        var cls = "opt opt--tf";
        if (given === v) cls += " is-picked";
        if (showFeedback) {
          if (v === q.a) cls += " is-right";
          else if (given === v) cls += " is-wrong";
          else cls += " is-muted";
        }
        return '<button type="button" class="' + cls + '" data-pick="' + v + '"' + (locked ? ' disabled' : '') + '>' +
          '<span class="opt__key">' + (v ? "T" : "F") + '</span>' +
          '<span class="opt__text">' + (v ? "True" : "False") + '</span>' +
          (showFeedback && v === q.a ? '<span class="opt__state">\u2713</span>' : '') +
          (showFeedback && given === v && v !== q.a ? '<span class="opt__state">\u2717</span>' : '') +
        '</button>';
      }).join("") + '</div>';

    } else {
      // Fill in the blanks
      body = '<div class="fib-card">' +
        '<div class="fib-input-wrap">' +
          '<input type="text" id="fibinput" class="fib-input" placeholder="Type your answer here..." autocomplete="off" autocorrect="off" spellcheck="false" ' +
          'value="' + app.esc(hasAnswer(given) ? String(given) : "") + '"' + (locked ? ' disabled' : '') + '>' +
          (!locked
            ? '<button type="button" class="btn btn--primary" id="fibsubmit">' + (run.exam ? 'Save' : 'Submit') + '</button>'
            : '') +
        '</div>' +
        (showFeedback
          ? '<div class="fib-accepted-callout ' + (isCorrect(q, given) ? 'is-ok' : 'is-error') + '">' +
              '<span class="badge">' + (isCorrect(q, given) ? '\u2713 Correct' : '\u2717 Incorrect') + '</span>' +
              '<span class="label"><b>Standard Answer:</b> ' + app.esc(q.a_display || (Array.isArray(q.a) ? q.a[0] : q.a)) + '</span>' +
            '</div>'
          : '') +
        '</div>';
    }

    var answered = run.answers.filter(hasAnswer).length;
    var progressPct = Math.round((answered / run.qs.length) * 100);

    // Sub-section badge metadata
    var subMeta = getSubSectionMeta(q.unitId, q.subSection);
    var subBadge = subMeta
      ? '<span class="chip chip--accent"><span class="qicon">' + subMeta.icon + '</span> ' + app.esc(subMeta.title) + '</span>'
      : '';

    var diffBadge = q.diff === 1
      ? '<span class="chip chip--subtle">\u2b50 Foundational</span>'
      : q.diff === 2
        ? '<span class="chip chip--subtle">\u2b50\u2b50 Core UG</span>'
        : '<span class="chip chip--warn">\u2b50\u2b50\u2b50 Rank 1 Classic</span>';

    var orderBadge = run.orderMode === "sequence"
      ? '<span class="chip chip--subtle">\ud83d\udccb Sequence Mode</span>'
      : '<span class="chip chip--subtle">\ud83d\udd00 Shuffle Mode</span>';

    var isLast = run.i === run.qs.length - 1;
    var primaryBtn = isLast
      ? '<button class="btn btn--primary btn--lg" id="finishbtn">Finish &amp; See Results \ud83c\udfc6</button>'
      : '<button class="btn btn--primary btn--lg" id="nextbtn">Next Question \u2192</button>';

    var hint = run.exam
      ? 'Tap an option to mark it \u2014 you can change it any time before you submit.'
      : (showFeedback ? 'Answer locked in and saved.' : 'Tap an option to answer.');

    host.innerHTML =
      '<div class="quizrun animate-fade-in" id="quizrunroot">' +
        '<div class="quizrun__bar">' +
          '<button class="btn btn--sm btn--ghost" id="quitbtn">Quit</button>' +
          '<span class="chip font-medium">' + app.esc(run.label) + '</span>' +
          orderBadge +
          '<div class="push"></div>' +
          (run.streak >= 2 ? '<span class="chip chip--accent streak-badge">\ud83d\udd25 Streak ' + run.streak + '</span>' : '') +
          (run.exam ? '<span class="chip chip--warn" id="qtimer">' + fmtTime(run.endsAt - Date.now()) + '</span>' : '') +
          '<span class="chip font-mono">' + (run.i + 1) + ' / ' + run.qs.length + '</span>' +
        '</div>' +

        '<div class="bar bar--lg mt-3"><div class="bar__fill" style="width:' + progressPct + '%"></div></div>' +

        '<div class="card quizcard mt-5">' +
          '<div class="quizcard__meta">' +
            '<span class="chip chip--accent font-bold">' +
              { mcq: "Multiple Choice", tf: "True / False", fib: "Fill in the Blank" }[q.format] +
            '</span>' +
            '<span class="chip">' + app.esc((syllabus.unitById[q.unitId] || {}).short || q.unitId) + '</span>' +
            subBadge +
            diffBadge +
          '</div>' +

          '<h2 class="quizcard__q mt-4">' + app.esc(q.q) + '</h2>' +

          body +

          '<p class="small faint mt-3">' + hint + '</p>' +

          (showFeedback && q.e
            ? '<div class="quiz-explanation-box mt-6 animate-scale-up ' + (isCorrect(q, given) ? 'is-correct' : 'is-wrong') + '">' +
                '<div class="quiz-explanation-box__head">' +
                  '<span>' + (isCorrect(q, given) ? '\ud83c\udf89 Excellent! Correct Answer' : '\ud83d\udca1 Explanation & High-Yield Key Note') + '</span>' +
                '</div>' +
                '<p class="quiz-explanation-box__body">' + q.e + '</p>' +
                (q.topicId && syllabus.topicById[q.topicId]
                  ? '<a class="btn btn--sm btn--ghost mt-2" href="#/topic/' + q.topicId + '" target="_blank">\ud83d\udcd6 Read Full Lesson on ' + app.esc(syllabus.topicById[q.topicId].title) + ' \u2192</a>'
                  : '') +
              '</div>'
            : '') +
        '</div>' +

        '<div class="row mt-6 items-center">' +
          '<button class="btn" id="prevbtn"' + (run.i === 0 ? ' disabled' : '') + '>\u2190 Previous</button>' +
          '<div class="push"></div>' +
          '<span class="small faint mr-3">' + answered + ' of ' + run.qs.length + ' answered</span>' +
          primaryBtn +
        '</div>' +

        paletteHtml() +

        (run.exam
          ? '<div class="row mt-4"><button class="btn btn--primary btn--block btn--lg" id="submitbtn">Submit Paper Now</button></div>'
          : '') +
      '</div>';

    wireRun(q);
  }

  function isCorrect(q, given) {
    if (given === null || given === undefined || given === "") return false;
    if (q.format === "mcq") return given === q.a;
    if (q.format === "tf") return given === q.a;
    // FIB checking: compare against all acceptable answers
    var norm = String(given).trim().toLowerCase();
    return (q.a || []).some(function (acc) {
      return String(acc).trim().toLowerCase() === norm;
    });
  }

  function wireRun(q) {
    // A single tap on an option answers the question.
    document.querySelectorAll("[data-pick]").forEach(function (b) {
      b.addEventListener("click", function () {
        var raw = b.getAttribute("data-pick");
        commitAnswer(q.format === "tf" ? (raw === "true") : parseInt(raw, 10));
      });
    });

    // Question map
    document.querySelectorAll("[data-jump]").forEach(function (b) {
      b.addEventListener("click", function () {
        goTo(parseInt(b.getAttribute("data-jump"), 10));
      });
    });

    // FIB input — typed answers still need Submit (or Enter) to commit
    var fib = document.getElementById("fibinput");
    if (fib) {
      if (!run.revealed[run.i]) {
        setTimeout(function () { fib.focus(); }, 50);
      }
      fib.addEventListener("input", function () {
        run.answers[run.i] = fib.value;   // keep the draft so it survives navigation
      });
      fib.addEventListener("keydown", function (e) {
        if (e.key === "Enter") {
          e.preventDefault();
          if (fib.value.trim()) commitAnswer(fib.value);
          else app.toast("Type your answer first");
        }
      });
    }

    var fibSubmit = document.getElementById("fibsubmit");
    if (fibSubmit) {
      fibSubmit.addEventListener("click", function () {
        var val = fib ? fib.value : "";
        if (!String(val).trim()) { app.toast("Type your answer first"); return; }
        commitAnswer(val);
      });
    }

    // Navigation
    var next = document.getElementById("nextbtn");
    if (next) next.addEventListener("click", function () { goTo(run.i + 1); });

    var prev = document.getElementById("prevbtn");
    if (prev) prev.addEventListener("click", function () { goTo(run.i - 1); });

    var fin = document.getElementById("finishbtn");
    if (fin) fin.addEventListener("click", function () { confirmFinish(); });

    var sub = document.getElementById("submitbtn");
    if (sub) sub.addEventListener("click", function () { confirmFinish(); });

    var quit = document.getElementById("quitbtn");
    if (quit) quit.addEventListener("click", function () {
      if (confirm("Quit this quiz? Your answers for this attempt will not be saved.")) {
        stopRun();
        location.hash = "#/quiz";
      }
    });
  }

  function confirmFinish() {
    var left = run.answers.filter(function (a) { return !hasAnswer(a); }).length;
    if (left && !confirm(left + " question" + (left === 1 ? " is" : "s are") + " still unanswered. Finish anyway?")) return;
    finish(false);
  }

  /* ---------- keyboard shortcuts (bound once per run) ---------- */
  var keyHandler = null;

  function attachKeys() {
    detachKeys();
    keyHandler = function (e) {
      // Only while the quiz screen is the one on display
      if (!run || !run.active) return;
      if (!document.getElementById("quizrunroot")) return;
      if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA") return;

      var q = run.qs[run.i];
      var locked = !run.exam && run.revealed[run.i];

      if (!locked && q.format === "mcq") {
        var map = { "1": 0, "2": 1, "3": 2, "4": 3, "a": 0, "b": 1, "c": 2, "d": 3 };
        var pick = map[String(e.key).toLowerCase()];
        if (pick !== undefined && pick < (q.o || []).length) {
          e.preventDefault();
          commitAnswer(pick);
          return;
        }
      } else if (!locked && q.format === "tf") {
        var k = String(e.key).toLowerCase();
        if (k === "t" || k === "1") { e.preventDefault(); commitAnswer(true); return; }
        if (k === "f" || k === "2") { e.preventDefault(); commitAnswer(false); return; }
      }

      if (e.key === "ArrowLeft") { e.preventDefault(); goTo(run.i - 1); return; }
      if (e.key === "ArrowRight") { e.preventDefault(); goTo(run.i + 1); return; }
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        var btn = document.getElementById("nextbtn") || document.getElementById("finishbtn");
        if (btn) btn.click();
      }
    };
    window.addEventListener("keydown", keyHandler);
  }

  function detachKeys() {
    if (keyHandler) window.removeEventListener("keydown", keyHandler);
    keyHandler = null;
  }

  function stopRun() {
    if (run && run.timer) clearInterval(run.timer);
    detachKeys();
    resetRun();
  }

  /* ============================================================
     RESULTS & ANALYTICS
     ============================================================ */
  function finish(timedOut) {
    if (!run || !run.active) return;
    if (run.timer) clearInterval(run.timer);
    detachKeys();
    bankTime();
    run.active = false;

    var correct = 0;
    var skipped = 0;
    var wrongList = [];
    var wrongKeys = [];
    var formatStats = {
      mcq: { total: 0, right: 0 },
      tf: { total: 0, right: 0 },
      fib: { total: 0, right: 0 }
    };
    var perUnit = {};
    var perSection = {};

    run.qs.forEach(function (q, i) {
      var given = run.answers[i];
      var ok = isCorrect(q, given);
      formatStats[q.format].total++;

      var uKey = "unit:" + q.unitId;
      if (!perUnit[uKey]) perUnit[uKey] = { total: 0, correct: 0 };
      perUnit[uKey].total++;

      var sKey = q.subSection ? (q.unitId + ":" + q.subSection) : null;
      if (sKey) {
        if (!perSection[sKey]) perSection[sKey] = { total: 0, correct: 0 };
        perSection[sKey].total++;
      }

      if (ok) {
        correct++;
        formatStats[q.format].right++;
        perUnit[uKey].correct++;
        if (sKey) perSection[sKey].correct++;
      } else {
        wrongList.push({ q: q, given: given });
        wrongKeys.push(q.key);
        if (!hasAnswer(given)) skipped++;
      }

      // Spaced repetition: only questions actually attempted, and only once.
      if (hasAnswer(given) && !run.graded[i]) {
        run.graded[i] = true;
        store.gradeSrs(q.key, ok);
      }
    });

    var total = run.qs.length;
    var percent = app.pct(correct, total);
    var elapsedMs = Date.now() - run.startedAt;
    var mins = Math.round(elapsedMs / 60000) || 1;
    var avgSec = total ? Math.round(elapsedMs / 1000 / total) : 0;

    store.saveAttempt({
      at: Date.now(),
      scope: run.scope,
      label: run.label,
      unitId: run.unitId,
      subSectionId: run.subSectionId,
      total: total,
      correct: correct,
      skipped: skipped,
      exam: run.exam,
      timedOut: !!timedOut,
      orderMode: run.orderMode,
      minutes: mins,
      seconds: Math.round(elapsedMs / 1000),
      avgSec: avgSec,
      bestStreak: run.bestStreak || 0,
      formats: formatStats,
      perUnit: perUnit,
      perSection: perSection,
      wrongKeys: wrongKeys.slice(0, 60)
    });

    var verdict = percent >= 85 ? "Rank 1 Distinction" : percent >= 70 ? "Strong First Class" : percent >= 50 ? "Passing Grade" : "Needs Revision";
    var chipCls = percent >= 85 ? "chip--ok" : percent >= 70 ? "chip--accent" : percent >= 50 ? "chip--warn" : "chip--danger";

    host.innerHTML =
      '<div class="result animate-scale-up">' +
        (timedOut ? '<div class="callout mb-6"><div class="callout__title">Time Expired</div>' +
          'Your examination paper was submitted automatically when the countdown reached zero.</div>' : '') +

        '<div class="result__ring">' + app.ringHtml(percent, 150) + '</div>' +
        '<h1 class="mt-6">' + correct + ' out of ' + total + ' Correct</h1>' +

        '<div class="row row--wrap center mt-3 gap-2" style="justify-content:center">' +
          '<span class="chip ' + chipCls + ' font-bold">' + verdict + '</span>' +
          '<span class="chip">' + app.esc(run.label) + '</span>' +
          (run.orderMode === "sequence" ? '<span class="chip">📋 Sequence</span>' : '<span class="chip">🔀 Shuffle</span>') +
          (run.exam ? '<span class="chip">⏱️ Exam Mode · ' + mins + ' min</span>' : '') +
          '<span class="chip">⏳ ' + avgSec + 's per question</span>' +
          (skipped ? '<span class="chip chip--warn">⚠️ ' + skipped + ' unanswered</span>' : '') +
          (run.bestStreak >= 3 ? '<span class="chip chip--ok">🔥 Best streak ' + run.bestStreak + '</span>' : '') +
        '</div>' +

        /* Format Breakdown Metrics */
        '<div class="grid grid--3 mt-6 text-left">' +
          '<div class="card stat-card">' +
            '<div class="stat-card__icon">🔘</div>' +
            '<div>' +
              '<div class="small muted">Multiple Choice</div>' +
              '<b>' + formatStats.mcq.right + ' / ' + formatStats.mcq.total + '</b>' +
              '<div class="small faint">' + (formatStats.mcq.total ? Math.round(formatStats.mcq.right / formatStats.mcq.total * 100) : 0) + '% accuracy</div>' +
            '</div>' +
          '</div>' +
          '<div class="card stat-card">' +
            '<div class="stat-card__icon">⚖️</div>' +
            '<div>' +
              '<div class="small muted">True / False</div>' +
              '<b>' + formatStats.tf.right + ' / ' + formatStats.tf.total + '</b>' +
              '<div class="small faint">' + (formatStats.tf.total ? Math.round(formatStats.tf.right / formatStats.tf.total * 100) : 0) + '% accuracy</div>' +
            '</div>' +
          '</div>' +
          '<div class="card stat-card">' +
            '<div class="stat-card__icon">✍️</div>' +
            '<div>' +
              '<div class="small muted">Fill in Blanks</div>' +
              '<b>' + formatStats.fib.right + ' / ' + formatStats.fib.total + '</b>' +
              '<div class="small faint">' + (formatStats.fib.total ? Math.round(formatStats.fib.right / formatStats.fib.total * 100) : 0) + '% accuracy</div>' +
            '</div>' +
          '</div>' +
        '</div>' +

        /* Missed questions review */
        (wrongList.length
          ? '<h2 class="mt-12 mb-4 text-left flex items-center gap-2"><span>🔍</span> Detailed Review of Missed Questions (' + wrongList.length + ')</h2>' +
            '<div class="stack text-left">' + wrongList.map(function (w, idx) {
              var q = w.q;
              var right = q.format === "mcq" ? (q.o || [])[q.a]
                : q.format === "tf" ? (q.a ? "True" : "False")
                : (q.a_display || (Array.isArray(q.a) ? q.a[0] : q.a));
              var mine = w.given === null || w.given === "" ? "Not answered"
                : q.format === "mcq" ? (q.o || [])[w.given]
                : q.format === "tf" ? (w.given ? "True" : "False")
                : w.given;
              return '<div class="card mb-3">' +
                '<div class="row row--wrap items-center gap-2 mb-2">' +
                  '<span class="chip chip--accent">#' + (idx + 1) + '</span>' +
                  '<span class="chip font-mono">' + q.format.toUpperCase() + '</span>' +
                  '<span class="chip">' + app.esc((syllabus.unitById[q.unitId] || {}).short || q.unitId) + '</span>' +
                '</div>' +
                '<p><b>' + app.esc(q.q) + '</b></p>' +
                '<div class="row row--wrap gap-4 mt-3">' +
                  '<p class="small"><span class="chip chip--danger">Your answer:</span> <b>' + app.esc(String(mine)) + '</b></p>' +
                  '<p class="small"><span class="chip chip--ok">Correct answer:</span> <b>' + app.esc(String(right)) + '</b></p>' +
                '</div>' +
                (q.e ? '<div class="callout mt-3"><div class="callout__title">High-Yield Explanation</div>' + q.e + '</div>' : '') +
                (q.topicId && syllabus.topicById[q.topicId]
                  ? '<a class="btn btn--sm mt-3" href="#/topic/' + q.topicId + '">📖 Read Lesson on ' + app.esc(syllabus.topicById[q.topicId].title) + '</a>' : '') +
              '</div>';
            }).join("") + '</div>'
          : '<div class="callout mt-8"><div class="callout__title">🏆 Clean Sweep! 100% Score!</div>' +
            'Exceptional performance! Every single question was answered correctly with academic precision.</div>') +

        '<div class="row row--wrap mt-12 gap-3" style="justify-content:center">' +
          '<a class="btn btn--primary btn--lg" href="#/quiz">Back to Quiz Hub</a>' +
          '<a class="btn btn--lg" href="#/dashboard">View My Dashboard</a>' +
          (wrongList.length ? '<a class="btn btn--lg" href="#/quiz/review">Review in Smart SRS Queue</a>' : '') +
        '</div>' +
      '</div>';

    if (percent >= 75 && app.burstConfetti) {
      setTimeout(function () {
        var ring = document.querySelector('.result__ring');
        if (ring) app.burstConfetti(ring);
        if (app.popMilestone) app.popMilestone("🏆 " + verdict + ": " + percent + "%!");
      }, 250);
    }

    stopRun();
  }

  return { render: render, reset: stopRun, subSections: subSectionsByUnit };
})();
