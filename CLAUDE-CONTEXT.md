# CLAUDE CONTEXT — Veterinary Pathology Studio

Read this whole file before doing anything else. It tells you who I am, what we are
building, the codebase layout, my conventions, and how I prefer to work. After reading,
say "Got it — what do you want to work on?" and wait for my actual task.

**Last updated:** 2026-09-04 (shared IVRI theme adopted)

---

## 👤 ABOUT ME

- **Name:** Fazal Zama
- **Role:** B.V.Sc & A.H. UG student at IVRI Bareilly (Roll No. B0-350-2025)
- **Background:** Veterinary science — **NOT a coder.** Explain in plain English with
  concrete file paths and simple steps.
- **Tools I use:** Windows PC, GitHub Desktop (not command-line git), File Explorer.
  I do NOT use a terminal. Give me GUI instructions or one-click `.bat` scripts.

---

## 🎯 WHAT WE ARE BUILDING

**Veterinary Pathology Studio** — a free study website for **B.V.Sc second-year
Veterinary Pathology**, aligned with the VCI syllabus (Credit hours 4+2=6) as published
in the Gazette of India.

**Working folder:** `D:/PATHOLOGY APPLICATION/`
**Sister project:** `F:/IVRI ANATOMY 11 JUKY/` — the anatomy site, live at
`https://veterinaryanatomy.com/`. **Never edit the anatomy folder from this project.**

This project follows the same conventions and navigation philosophy as the anatomy site,
and **uses the same shared visual theme** — see "The shared IVRI theme" below.

### Sections
1. **Theory** — Units 1–6 of the VCI theory syllabus, 120 topics.
2. **Practical** — Units 1–6 of the practical syllabus, 25 topics.
3. **WHY** — Mechanism-first explanations.
4. **Question & Answer** — Written-exam practice: short notes, long answers,
   differentiate-between tables, definitions, practical spotting.
5. **Quiz** — MCQ / True-False / Fill-blank, with unit-wise, paper-wise, grand test,
   practical, Exam Mode (timed) and Smart Review (spaced repetition).
6. **Dashboard** — Coverage by unit, accuracy, streak, 12-week heatmap, Leitner boxes.
7. **Library** — Bookmarks · Notes · Highlights.
8. **Settings** — Theme, backup/restore, about.

### Exam structure (drives the quiz modes — do not change without asking)
| Paper | Units | Theory | Practical | Weightage |
|---|---|---|---|---|
| Paper I | 1, 2, 3 | 100 | 60 | 20 |
| Paper II | 4, 5, 6 | 100 | 60 | 20 |

---

## 🎨 THE SHARED IVRI THEME — READ THIS BEFORE TOUCHING ANY COLOUR

I am building a **series** of subject sites: Anatomy (live), Pathology (this one),
then Microbiology, Biochemistry and others. A different colour scheme per site was
creating clutter and killing my productivity, so on **2026-09-04 we standardised on one
theme for every subject site.**

**The theme is the "Academic" light theme lifted from the anatomy site** — institutional
medical blue on a soft blue-grey ground, Inter + JetBrains Mono. The old neon dark theme
(`Luminous`) is **not** used, and the crimson palette this site started with is gone.

### The rules

1. **`assets/css/tokens.css` is the single source of truth.** Every colour, font size and
   spacing value in the whole app comes from it.
2. **Copy `tokens.css` unchanged into each new subject site.** Do not re-theme per subject.
3. **Never hard-code a hex value** anywhere else. If a colour is needed, add or use a token.
4. **Light is the default and canonical theme.** Dark exists only as a night-reading
   option the student must select; it uses the same hues, lifted for a dark ground.
5. Only the **brand mark letters** and the **site title** change between subjects.

### The palette (token names)

| Token | Value (light) | Used for |
|---|---|---|
| `--ivri-blue` | `#1565c0` | **Primary.** Theory, Dashboard, links, brand mark |
| `--ivri-teal` | `#00897b` | Practical / lab |
| `--ivri-purple` | `#6a48b5` | WHY / concepts |
| `--ivri-amber` | `#b25e00` | Quiz / assessment (darkened for contrast) |
| `--ivri-coral` | `#d84315` | Warning / important |
| `--ivri-sage` | `#2e7d32` | Success / healthy |
| `--bg` | `#f0f4f8` | Page ground (soft blue-grey, never stark white) |
| `--surface` | `#ffffff` | Cards |
| `--border` | `rgba(21,101,192,.15)` | Subtle **blue** borders, not grey |
| `--text` | `#263238` | Dark blue-grey body text |
| `--text-muted` | `#546e7a` | Secondary text |

`--bg-image` adds the faint blue dot-grid and gradient behind the app, as on the anatomy
site. Shadows are blue-tinted, not black. `--ivri-amber-fill` (`#ffa726`) and
`--ivri-purple-fill` exist for **fills and gradients only** — the darker `--ivri-amber`
and `--ivri-purple` are the readable text/accent versions.

---

## 📋 CURRENT STATE (2026-09-04)

### Content written

| Unit | Topics | Status | Key points | Tables |
|---|---|---|---|---|
| Theory Unit 1 — General Pathology | 21 | ✅ **COMPLETE** | 287 | 51 |
| Theory Unit 2 — Systemic Pathology | 12 | ✅ **COMPLETE** | 183 | 30 |
| Theory Unit 3 — Oncology · Clinical Path · Necropsy | 20 | ✅ **COMPLETE** | 330 | 54 |
| Theory Unit 4 — Infectious & Non-infectious Diseases | 37 | ⏳ **EMPTY** | — | — |
| Theory Unit 5 — Avian Pathology | 21 | ⏳ **EMPTY** | — | — |
| Theory Unit 6 — Lab & Wild Animals | 9 | ⏳ **EMPTY** | — | — |
| Practical Units 1–6 | 25 | ⏳ **EMPTY** | — | — |

**Total so far: 53 of 145 topics, ~555,000 characters (~370 printed pages),
800 key points, 135 tables. Every written topic has a clinical note.**

### Also still empty
- `data-why.JS` — WHY entries (template block only)
- `data-qa.JS` — Q&A bank (template block only)
- `data-quiz.JS` — quiz bank (template blocks only)
- App icons: `images/icon-192.png`, `-512.png`, `-maskable-512.png`
- Not yet in a git repository; not yet deployed

### Working features
✅ All routes render with zero console errors
✅ Lesson page: topic rail + content blocks + Standard/Deep toggle + read-aloud
✅ **Multi-colour highlighter** (6 colours, persists, renders inline in the lesson)
✅ Mark read · Save · Note · Share · progress ring · prev/next pager
✅ Quiz engine tested end-to-end (setup → run → feedback → results → SRS grading)
✅ Dashboard, heatmap, streak, Library, backup/restore
✅ Shared IVRI Academic theme (light default, optional dark)
✅ Mobile bottom nav with Quiz FAB; PWA service worker

---

## 🗂️ FILE STRUCTURE

```
D:/PATHOLOGY APPLICATION/
├── index.html               Single-page app shell. All sections live here.
├── manifest.json            PWA manifest
├── service-worker.js        Offline cache — BUMP CACHE_VERSION ON EVERY RELEASE
├── README.md                Non-coder guide to adding content
├── CLAUDE-CONTEXT.md        THIS FILE
│
├── data/                    ← ALL CONTENT LIVES HERE
│   ├── data-syllabus.JS         Master index: units, topic titles, exam papers
│   ├── data-theory-unit1.JS     ✅ Unit 1 — 21 topics COMPLETE
│   ├── data-theory-unit2.JS     ✅ Unit 2 — 12 topics COMPLETE
│   ├── data-theory-unit3.JS     ✅ Unit 3 — 20 topics COMPLETE
│   ├── data-theory-unit4.JS     ⏳ Unit 4 — 37 topics EMPTY
│   ├── data-theory-unit5.JS     ⏳ Unit 5 — 21 topics EMPTY
│   ├── data-theory-unit6.JS     ⏳ Unit 6 — 9 topics EMPTY
│   ├── data-practical.JS        ⏳ All 6 practical units — 25 topics EMPTY
│   ├── data-why.JS              ⏳ WHY entries — template only
│   ├── data-qa.JS               ⏳ Q&A bank — template only
│   └── data-quiz.JS             ⏳ quizBank[unitId][mcq|tf|fib] — template only
│
├── js/
│   ├── store.js             localStorage layer. ALL keys prefixed "vpath-"
│   ├── app.js               Router + shell + section renderers + highlighter
│   ├── quiz.js              Quiz engine (window.quizApp)
│   └── dashboard.js         Analytics (window.dashboardApp)
│
├── assets/css/
│   ├── tokens.css           ★ SHARED IVRI THEME — copy verbatim to new subject sites
│   ├── main.css             Reset, layout, shared components
│   └── sections.css         Per-screen styles (lesson page, quiz, dashboard, etc.)
│
├── images/                  theory/ practical/ why/ qa/ + app icons (icons MISSING)
└── tools/
    ├── start-server.bat     Double-click → http://localhost:5177
    ├── make-data-files.bat  Double-click → scaffolds new topic blocks
    └── make-data-files.py
```

### Data shapes

**Lesson content** (`data-theory-unit*.JS`, `data-practical.JS`):
```js
theoryData["unit-1"] = {
  "u1-t09": {
    summary:   "",   // one line, large type at the top
    desc:      "",   // STANDARD view — the complete UG exam answer
    eliteDesc: "",   // DEEP view — mechanism depth; falls back to desc if empty
    keyPoints: [],   // marks-scoring lines, rendered as a highlighted block
    clinical:  "",   // rendered as a green "Clinical note" block at the bottom
    tables:    [],   // [{ title, headers: [], rows: [[]] }]
    img:       "",
    tags:      []
  }
};
```

**Quiz bank** (`data-quiz.JS`):
```js
quizBank["unit-1"] = {
  mcq: [ { q, o: [4 options], a: correctIndex, e: explanation, topicId, diff } ],
  tf:  [ { q, a: true|false, e, topicId, diff } ],
  fib: [ { q, a: [accepted spellings], e, topicId, diff } ]
};
```

**Q&A bank** (`data-qa.JS`):
```js
qaBank["unit-1"] = [
  { id, type: "short|long|diff|define|spot", marks, question,
    topicId, answer, keyPoints: [], diagram, table, pyq: [] }
];
```

**WHY** (`data-why.JS`):
```js
whyData = [
  { id, title, category: "mechanism|lesion|species|diagnostic|clinical",
    unit, comparison, why, mechanism: [], clinical, analogy, img,
    quiz: { question, options: [], correctIndex, explanation } }
];
```

---

## ✍️ CONTENT WRITING STANDARD (agreed with me — follow it exactly)

**Target: enough for rank 1 and 10 CGPA at UG level. No PhD detail unless it genuinely
explains something. Complete UG coverage, but nothing irrelevant.**

- **`desc` (Standard view) = the complete exam answer.** Well organised, scannable,
  everything needed to write a full-marks answer. This is what I actually revise from.
- **`eliteDesc` (Deep view) = mechanism depth for toppers.** Put the extra here so it
  never clutters the answer I would write. Only include it where it explains *why*.
- **`keyPoints` = marks-scoring lines**, written so they can be lifted straight into an
  answer. Aim for 10–18 per topic.
- **`tables` = comparisons that get asked directly** (X vs Y). Aim for 2–3 per topic.
- **`clinical` = a clinical note at the bottom of EVERY topic.** Written for Indian
  practice: name the diseases I will actually meet, and say what to do.
- Use ALL-CAPS bold for section headers inside `desc`, and `<ul><li>` for lists.
- HTML allowed in content fields: `<b> <i> <br> <ul> <li> <ol> <p> <sup>`.

### Indian-practice bias (deliberate — keep it)
Lantana photosensitization, babesiosis/theileriosis, haemonchosis and bottle jaw,
ketosis in crossbred cows, blackleg vaccination, aflatoxin in groundnut cake,
foot and mouth disease as a notifiable emergency, anthrax necropsy rule, failure of
passive transfer, heat-accelerated autolysis, poultry post-mortem.

---

## ⚙️ KEY ARCHITECTURE FACTS

- **Hash routing.** `#/theory`, `#/unit/unit-1`, `#/topic/u1-t09`, `#/quiz/paper/paper-1`.
  Works from `file://` and any host with no server config. `app.route()` is the single
  entry point; `state.params.a` and `.b` are the two path segments after the name.
- **`syllabus` is the backbone.** `data-syllabus.JS` builds `syllabus.unitById` and
  `syllabus.topicById` lookups at load, and stamps `stream`, `unitId`, `unitNo` and
  `index` onto every topic. Everything else reads from those.
- **Content and structure are separate.** Topic *titles* live in `data-syllabus.JS`;
  topic *text* lives in the unit files, matched by `id`. Adding a topic in one place and
  not the other is the most likely cause of a blank page.
- **Empty template rows must never be counted.** Every data file ships with a template
  block whose `q` / `question` / `title` is `""`. `app.questionCount()`, `app.qaCount()`
  and the WHY renderer all filter these out. **If you add a new counter anywhere, filter
  empty rows the same way** — otherwise the UI promises questions the quiz cannot find.
  (This exact bug was caught and fixed on 2026-09-04.)
- **localStorage keys:** `vpath-theme`, `vpath-detail`, `vpath-read`, `vpath-bookmarks`,
  `vpath-notes`, `vpath-highlights`, `vpath-hl-color`, `vpath-quiz`, `vpath-srs`,
  `vpath-activity`, `vpath-visits`, `vpath-onboarded`, `vpath-last-topic`, `vpath-qa-done`.
  **Add any new key to `store.KEYS`** — `backupKeys()` derives from it automatically, so
  a key added there is covered by Backup/Restore.
- **Highlights are objects, not strings.** `{ text, color }`, colour being one of
  `yellow green blue pink orange purple` (`store.VALID_HL_COLORS`). `store.addHighlight()`
  still accepts legacy plain strings and upgrades them, so old backups keep working.
  Inline rendering wraps matches in `<mark data-hl-color data-hl-text>`.
- **SRS is a 5-box Leitner system.** Right → box up, review in 1/2/4/8/16 days.
  Wrong → straight back to box 1, review tomorrow. Lives in `store.gradeSrs()`.
- **Quiz state must always be reset.** `quizApp.resetRun()` is called on hub render,
  setup render and after `finish()`. The `exam` flag and the `timer` interval are the two
  things that leak if a path is missed — the anatomy project was burned twice by exactly
  this. Always clear the interval before dropping the run.
- **Theme is applied before first paint** by an inline script in `<head>`, so there is no
  white flash. Two states only: **`light` (default)** and `dark`. There is no `system`
  option and no `prefers-color-scheme` switching — the app is deliberately light unless
  the student chooses dark in Settings.
- **Section accents** are set by `document.body[data-section]` in `app.route()`, and all
  come from the same Academic set: Theory=blue, Practical=teal, Quiz=amber, WHY=purple,
  Dashboard=blue. **Do not add a sixth accent or invent a new hue.**

### The lesson page (redesigned 2026-09-04)

Two-pane layout, modelled on the anatomy Atlas detail view but rebuilt:

| Region | Contents |
|---|---|
| **Left rail** (`.lesson__rail`) | Back-to-unit link, progress bar, all topics in the unit with read-ticks; current topic highlighted. Collapses to a horizontal strip of numbered chips below 1100px. |
| **Card header** | Mono kicker (`/// THEORY // UNIT 1 // TOPIC 09`), title, read-aloud button, summary line |
| **Toolbar** | Mark read · Save · **Highlight (with colour picker)** · Note · Share · Standard/Deep toggle |
| **Content blocks** (`.block`) | Standard/Deep description → Key points (accent tint) → Tables → Figure → **Clinical note (green)** |
| **Pager** | Previous / Next topic within the unit |

Read-aloud uses the browser `speechSynthesis` API — free, offline, no API key. It is
stopped in `app.route()` so a lesson never keeps talking after you navigate away.

### Navigation model (same 3-layer philosophy as the anatomy site)

| Layer | Purpose | Where |
|---|---|---|
| **L1 — Primary** | Desktop: full sidebar. Mobile: 5-slot bottom bar — Theory · Practical · **Quiz (FAB)** · Q&A · Progress | `.sidebar` and `.bottomnav` in `index.html` |
| **L2 — Contextual** | Per-screen actions (Mark read, Save, Highlight, Note, Standard/Deep) | `.toolbar` inside the lesson card |
| **L3 — Settings & meta** | Theme, backup, reset, about, search | Settings route (`#/me`) + `Ctrl+K` palette |

**Do not add a 6th bottom-nav slot.** Five is the proven limit. Nest new things into
Library or Settings instead. Contextual actions go in the screen's L2 toolbar, never the
bottom nav. Bottom nav auto-hides on scroll-down and returns on scroll-up — intentional.

---

## 🎨 STYLE / CODE CONVENTIONS

- **Vanilla JS only.** No frameworks, no npm, no bundlers, no build step. Static files.
- **Don't add features I didn't ask for.** Bound your work to exactly what I requested.
- **Scope CSS changes carefully.** If I say "fix the quiz result screen", do not touch
  the lesson page styles.
- **Use `.innerHTML` for any field that may contain `<b>` / `<br>` / `<i>`** — that is
  every content field. Use `app.esc()` for titles and user-typed text.
- **GPU-friendly animations only** — `transform` and `opacity`. No `box-shadow` or
  `filter` inside `@keyframes` (causes jank on Android).
- **Always reset state flags in cleanup paths.**
- **Data files use the mixed-case `.JS` extension**, matching the anatomy project.
  Engine files in `js/` use lowercase `.js`.
- **All colour, spacing and type values come from `tokens.css`.** Never hard-code a hex
  value in `main.css` or `sections.css`. `tokens.css` is the SHARED theme used by every
  IVRI subject site — changing it changes all of them, so change it deliberately.
- **Touch targets ≥ 44×44 px.** Three taps maximum to any feature.

### Mandatory content boundaries (same as the anatomy project)

- **No Darwinian theory, evolutionary-origin explanations, ancestry narratives, or
  phylogenetic speculation.** Do not say a structure "evolved from" an ancestral species.
  Keep explanations on established embryological development, present anatomy and
  pathology, mechanism, current function, species comparison and clinical relevance.
  The descriptive term "vestigial" is acceptable without an ancestral narrative.
- **Religious and mythological neutrality.** No deities, worship stories, or
  mythology-based explanations, and no decorative images of idols or worship figures.
- **Analogy boundary.** Do not use alcohol, intoxication or alcoholic drinks as
  analogies, mnemonics or examples. (Note: ethanol as a *fixative* or as a chemical
  agent in pathology is fine — the boundary is about analogies and examples.)
  For fatty change, use ketosis, pregnancy toxaemia and feline hepatic lipidosis rather
  than the usual human alcoholic-liver example.
- These apply to all new text, quizzes, Q&A answers, WHY entries, analogies, captions and
  image prompts. **Never weaken accurate pathology, mechanism or clinical content to
  satisfy the wording boundary** — rewrite only the unnecessary origin narrative,
  mythology or analogy.

### Preserving content depth

- **Never replace a complete `desc`, `eliteDesc`, `clinical` or `answer` field with a
  shorter audit summary.** An accuracy audit corrects the inaccurate sentence and
  preserves every unrelated teaching detail.
- **Never add a runtime whole-field replacement layer** (`Object.assign(item, fields)`
  or similar). Make targeted edits to the original field.
- Before completing any content audit, compare every pre-existing field before and after.
  Investigate every unexpected drop in length.

---

## 🔧 HOW TO ADD CONTENT EFFICIENTLY (lesson learned 2026-09-04)

When filling a whole empty unit, **write the entire data file with the `Write` tool**
rather than patching each empty template block with `Edit`. Patching duplicates the
template text in both `old_string` and `new_string` and is roughly twice as slow.

For a large unit, write it in two or three passes:
1. `Write` the file with the declaration and the first batch of topics, ending `};`
2. `Edit` — match the last topic's closing `tags: [...]` line plus `\n  }\n\n};` and
   replace with `tags: [...]`, `},` + the next batch + `};`

**Always verify after each pass:**
```bash
node --check <copy of file renamed .js>
```
then eval it and count filled topics. A syntax error in one data file blanks the site.

---

## 🛠️ MY WORKFLOW

1. Edit files in `D:/PATHOLOGY APPLICATION/`.
2. Double-click `tools/start-server.bat`, open `http://localhost:5177`, check the change.
3. GitHub Desktop → review changes → commit message → Commit → Push origin.
4. Cloudflare Pages rebuilds within about a minute.

**Before every push:** bump `CACHE_VERSION` in `service-worker.js`
(currently **`vpath-v2`** → next release `vpath-v3`). Otherwise returning students keep
the cached old version.

---

## 🐛 KNOWN PITFALLS (don't reintroduce)

- **Counting empty template rows** as real questions/topics — filter on non-empty text.
- **Service worker serving stale files** during development — unregister it and clear
  caches in DevTools, or bump `CACHE_VERSION`.
- **A syntax error in any `data-*.JS` blanks the whole site**, because the shell cannot
  boot. Always `node --check` after a bulk edit.
- **Quiz `exam` flag and `timer` interval leaking** between runs.
- **Unbuffered formalin / wrong anticoagulant** — content accuracy points I have already
  written; keep them consistent if you touch clinical pathology topics.

---

## 🚀 HOW TO WORK WITH ME EFFICIENTLY

1. **Read this whole file first.** Don't ask "what's the project?"
2. **Be specific** — list file paths and exact changes.
3. **Don't over-explore.** I'll tell you what's wrong; go straight to the file.
4. **If unsure between two approaches**, ask ONE short question. Don't write code both ways.
5. **For big features**, give me a 5-line plan first and wait for "yes go".
6. **End with a "what to test" checklist** so I can verify quickly.
7. **Tell me honestly how much is left.** Don't thin the content to make it fit.

---

## 💡 NEXT TASKS (in my preferred order)

1. **Theory Unit 4** — 37 topics (Infectious & Non-infectious Diseases). The biggest unit.
2. **Theory Unit 5** — 21 topics (Avian Pathology). High-yield for Indian practice.
3. **Theory Unit 6** — 9 topics (Lab & Wild Animals). Small.
4. **Practical Units 1–6** — 25 topics.
5. **Quiz bank** — MCQs for all units.
6. **Q&A bank** — written-exam questions.
7. **WHY entries.**
8. **App icons** and first deployment.
