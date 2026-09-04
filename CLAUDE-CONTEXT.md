# CLAUDE CONTEXT — Veterinary Pathology Studio

Read this whole file before doing anything else. It tells you who I am, what we are
building, the codebase layout, my conventions, and how I prefer to work. After reading,
say "Got it — what do you want to work on?" and wait for my actual task.

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

This project is a **fresh design**, not a copy of the anatomy site. It follows the same
conventions and the same navigation philosophy, but it has its own visual identity
(crimson/clinical rather than neon cyan/gold).

### Sections
1. **Theory** — Units 1–6 of the VCI theory syllabus, 120 topics.
2. **Practical** — Units 1–6 of the practical syllabus, 25 topics.
3. **WHY** — Mechanism-first explanations. Why a lesion looks the way it does.
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
│   ├── data-theory-unit1.JS     Lesson content, Unit 1  (21 topics)
│   ├── data-theory-unit2.JS     Unit 2  (12 topics)
│   ├── data-theory-unit3.JS     Unit 3  (20 topics)
│   ├── data-theory-unit4.JS     Unit 4  (37 topics — the big one)
│   ├── data-theory-unit5.JS     Unit 5  (21 topics)
│   ├── data-theory-unit6.JS     Unit 6  (9 topics)
│   ├── data-practical.JS        All 6 practical units (25 topics)
│   ├── data-why.JS              WHY entries
│   ├── data-qa.JS               Q&A bank, grouped by unit id
│   └── data-quiz.JS             quizBank[unitId][mcq|tf|fib]
│
├── js/
│   ├── store.js             localStorage layer. ALL keys prefixed "vpath-"
│   ├── app.js               Router + shell + section renderers
│   ├── quiz.js              Quiz engine (window.quizApp)
│   └── dashboard.js         Analytics (window.dashboardApp)
│
├── assets/css/
│   ├── tokens.css           Colours, type, spacing, light+dark themes
│   ├── main.css             Reset, layout, shared components
│   └── sections.css         Per-screen styles
│
├── images/                  theory/ practical/ why/ qa/ + app icons
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
    desc:      "",   // Standard view — HTML allowed (<b> <i> <br> <ul><li>)
    eliteDesc: "",   // Deep view — falls back to desc if empty
    keyPoints: [],   // rendered as a "Key points" callout
    clinical:  "",   // rendered as a "Clinical relevance" callout
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

## ⚙️ KEY ARCHITECTURE FACTS

- **Hash routing.** `#/theory`, `#/unit/unit-1`, `#/topic/u1-t09`, `#/quiz/paper/paper-1`.
  Works from `file://` and from any host with no server config. `app.route()` is the
  single entry point; `state.params.a` and `.b` are the two path segments after the name.
- **`syllabus` is the backbone.** `data-syllabus.JS` builds `syllabus.unitById` and
  `syllabus.topicById` lookups at load time, and stamps `stream`, `unitId`, `unitNo`
  and `index` onto every topic. Everything else reads from those.
- **Content and structure are separate.** Topic *titles* live in `data-syllabus.JS`;
  topic *text* lives in the unit files, matched by `id`. Adding a topic in one place and
  not the other is the most likely source of a blank page.
- **Empty template rows must never be counted.** Every data file ships with a template
  block whose `q` / `question` / `title` is `""`. `app.questionCount()`, `app.qaCount()`
  and the WHY renderer all filter these out. **If you add a new counter anywhere, filter
  empty rows the same way** — otherwise the UI promises questions the quiz cannot find.
  (This exact bug was caught and fixed on 2026-09-04.)
- **localStorage keys:** `vpath-theme`, `vpath-detail`, `vpath-read`, `vpath-bookmarks`,
  `vpath-notes`, `vpath-highlights`, `vpath-quiz`, `vpath-srs`, `vpath-activity`,
  `vpath-visits`, `vpath-onboarded`, `vpath-last-topic`, `vpath-qa-done`.
  **Add any new key to `store.backupKeys()`** or Backup/Restore will silently miss it.
- **SRS is a 5-box Leitner system.** Right → box up, review in 1/2/4/8/16 days.
  Wrong → straight back to box 1, review tomorrow. Lives in `store.gradeSrs()`.
- **Quiz state must always be reset.** `quizApp.resetRun()` is called on hub render,
  setup render and after `finish()`. The `exam` flag and the `timer` interval are the two
  things that leak if a path is missed — the anatomy project was burned twice by exactly
  this. Always clear the interval before dropping the run.
- **Theme is applied before first paint** by an inline script in `<head>`, so there is no
  white flash on a dark-mode phone. Three states: `system` (default), `light`, `dark`.
- **Section accents** are set by `document.body[data-section]` in `app.route()`.
  Theory=crimson, Practical=teal, Quiz=amber, WHY=violet, Dashboard=blue.

### Navigation model (same 3-layer philosophy as the anatomy site)

| Layer | Purpose | Where |
|---|---|---|
| **L1 — Primary** | Desktop: full sidebar. Mobile: 5-slot bottom bar — Theory · Practical · **Quiz (FAB)** · Q&A · Progress | `.sidebar` and `.bottomnav` in `index.html` |
| **L2 — Contextual** | Per-screen actions (Mark read, Save, Note, Standard/Deep) | `.toolbar` inside the topic page |
| **L3 — Settings & meta** | Theme, backup, reset, about, search | Settings route (`#/me`) + `Ctrl+K` palette |

**Do not add a 6th bottom-nav slot.** Five is the proven limit. Nest new things into
Library or Settings instead. Contextual actions go in the screen's L2 toolbar, never the
bottom nav. Bottom nav auto-hides on scroll-down and returns on scroll-up — intentional.

---

## 🎨 STYLE / CODE CONVENTIONS

- **Vanilla JS only.** No frameworks, no npm, no bundlers, no build step. Static files.
- **Don't add features I didn't ask for.** Bound your work to exactly what I requested.
- **Scope CSS changes carefully.** If I say "fix the quiz result screen", do not touch
  the topic page styles.
- **Use `.innerHTML` for any field that may contain `<b>` / `<br>` / `<i>`** — that is
  every content field. Use `app.esc()` for titles and user-typed text.
- **GPU-friendly animations only** — `transform` and `opacity`. No `box-shadow` or
  `filter` inside `@keyframes` (causes jank on Android).
- **Always reset state flags in cleanup paths.**
- **Data files use the mixed-case `.JS` extension**, matching the anatomy project.
  Engine files in `js/` use lowercase `.js`.
- **All colour, spacing and type values come from `tokens.css`.** Never hard-code a hex
  value in `main.css` or `sections.css`.
- **Touch targets ≥ 44×44 px.** Three taps maximum to any feature.

### Mandatory content boundaries (same as the anatomy project)

- **No Darwinian theory, evolutionary-origin explanations, ancestry narratives, or
  phylogenetic speculation.** Do not say a structure "evolved from" an ancestral species.
  Keep explanations on established embryological development, present anatomy and
  pathology, mechanism, current function, species comparison and clinical relevance.
  The descriptive term "vestigial" is acceptable without an ancestral narrative.
- **Religious and mythological neutrality.** No deities, worship stories, or
  mythology-based explanations, and no decorative images of idols or worship figures.
  Where a conventional term has a mythological origin, explain the pathology itself
  without repeating the mythology.
- **Analogy boundary.** Do not use alcohol, intoxication or alcoholic drinks as
  analogies, mnemonics or examples. Use direct pathological, mechanistic or clinical
  explanations instead.
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

## 🛠️ MY WORKFLOW

1. Edit files in `D:/PATHOLOGY APPLICATION/`.
2. Double-click `tools/start-server.bat`, open `http://localhost:5177`, check the change.
3. GitHub Desktop → review changes → commit message → Commit → Push origin.
4. Cloudflare Pages rebuilds within about a minute.

**Before every push:** bump `CACHE_VERSION` in `service-worker.js` (`vpath-v1` →
`vpath-v2`). Otherwise returning students keep the cached old version.

---

## 📋 CURRENT STATE (snapshot — will go stale, that's OK)

- ✅ Full site structure built and tested — all 20 routes render with zero console errors
- ✅ 145 empty topic slots scaffolded (120 theory + 25 practical) from the VCI syllabus
- ✅ Quiz engine tested end-to-end: setup → run → feedback → results → SRS grading
- ✅ Progress, bookmarks, notes, library, dashboard, heatmap, streak all working
- ✅ Light + dark theme, mobile bottom nav, offline service worker, backup/restore
- ⏳ **All content is empty.** Lessons, WHY, Q&A and quiz questions still to be written
- ⏳ App icons not yet created (`images/icon-192.png`, `-512`, `-maskable-512`)
- ⏳ Not yet in a git repository or deployed

---

## 🚀 HOW TO WORK WITH ME EFFICIENTLY

1. **Read this whole file first.** Don't ask "what's the project?"
2. **Be specific** — list file paths and exact changes.
3. **Don't over-explore.** I'll tell you what's wrong; go straight to the file.
4. **If unsure between two approaches**, ask ONE short question. Don't write code both ways.
5. **For big features**, give me a 5-line plan first and wait for "yes go".
6. **End with a "what to test" checklist** so I can verify quickly.

---

## 💡 LIKELY NEXT TASKS

- "Write the content for Unit 1 topic X"
- "Add 30 MCQs for Unit 4"
- "Add Q&A for [topic]"
- "Add a WHY entry explaining [mechanism]"
- "Help me put this on GitHub" — GitHub Desktop instructions
- "Make the app icons"
- "Add a spotting/practical image quiz mode"
