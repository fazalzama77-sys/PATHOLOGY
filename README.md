# Veterinary Pathology Studio

A study website for **B.V.Sc & A.H. second-year Veterinary Pathology**, following the VCI
syllabus (Credit hours 4+2=6). Built as plain HTML + CSS + JavaScript — no build step,
no npm, no frameworks. Works offline once loaded.

---

## How to open it

**On your PC:** start a tiny local server, because service workers and some browsers block
`file://`. Double-click **`tools/start-server.bat`**, then open `http://localhost:5177`
in your browser. Press `Ctrl+C` in the black window to stop it.

You *can* also just double-click `index.html` — everything works except offline mode.

---

## What is where

```
D:\PATHOLOGY APPLICATION\
│
├── index.html              ← The whole app shell. Rarely needs editing.
├── manifest.json           ← App name and icons for "install to home screen"
├── service-worker.js       ← Offline caching  (see "Publishing" below)
│
├── data\                   ← ★ THIS IS WHERE YOU ADD CONTENT ★
│   ├── data-syllabus.JS        The master index — units and topic titles
│   ├── data-theory-unit1.JS    Lesson text for Unit 1
│   ├── data-theory-unit2.JS    ... Unit 2
│   ├── data-theory-unit3.JS
│   ├── data-theory-unit4.JS
│   ├── data-theory-unit5.JS
│   ├── data-theory-unit6.JS
│   ├── data-practical.JS       All six practical units
│   ├── data-why.JS             The WHY section
│   ├── data-qa.JS              Written-exam question & answer bank
│   └── data-quiz.JS            MCQ / True-False / Fill-blank bank
│
├── js\                     ← The engine. You should not need to touch these.
│   ├── store.js                Saves progress in the browser
│   ├── app.js                  Navigation and page rendering
│   ├── quiz.js                 The quiz engine
│   └── dashboard.js            Progress analytics
│
├── assets\css\
│   ├── tokens.css              All colours, fonts and spacing live here
│   ├── main.css                Layout and shared components
│   └── sections.css            Styles for individual screens
│
├── images\                 ← Put pictures here (see below)
└── tools\                  ← Helper scripts
```

**Rule of thumb:** to add *content*, you only ever open a file in `data\`.

---

## Current state

| | Built | Filled in |
|---|---|---|
| Theory units | 6 | — |
| Theory topics | 120 | 0 |
| Practical units | 6 | — |
| Practical topics | 25 | 0 |
| WHY entries | structure ready | 0 |
| Q&A questions | structure ready | 0 |
| Quiz questions | structure ready | 0 |

Every topic already has an empty slot waiting. Open a lesson in the site and it tells you
exactly which file and which id to edit.

---

## Adding a lesson

1. Open the site, go to the topic, and read the grey box. It says something like:
   *"Add it in **data/data-theory-unit1.JS** under the id **u1-t09**."*
2. Open that file in Notepad (or VS Code).
3. Find `"u1-t09":` and fill in the empty quotes.

```js
"u1-t09": {
  /* Irreversible Cell Injury — Necrosis and Its Types */
  summary:   "Necrosis is the death of cells in a living animal, always followed by inflammation.",
  desc:      "<b>Definition.</b> Necrosis is ...<br><br>The nuclear changes are pyknosis, karyorrhexis and karyolysis.",
  eliteDesc: "Longer, more detailed version shown when the student switches to <b>Deep</b>.",
  keyPoints: [
    "Coagulative necrosis — kidney, heart, spleen",
    "Liquefactive necrosis — brain",
    "Caseous necrosis — tuberculosis"
  ],
  clinical:  "On the post-mortem table, a pale wedge in the kidney is an infarct showing coagulative necrosis.",
  tables:    [],
  img:       "images/theory/unit-1/coagulative-necrosis.webp",
  tags:      ["necrosis", "cell injury"]
}
```

### The fields

| Field | What it is |
|---|---|
| `summary` | One line, shown in large type at the top |
| `desc` | The **Standard** lesson. HTML allowed: `<b>` `<i>` `<br>` `<ul><li>` |
| `eliteDesc` | The **Deep** lesson. If empty, Deep just shows `desc` |
| `keyPoints` | A list. Rendered as a highlighted "Key points" box |
| `clinical` | Rendered as a "Clinical relevance" box |
| `tables` | `[{ title: "...", headers: ["A","B"], rows: [["1","2"]] }]` |
| `img` | Path to a picture, or leave empty |
| `tags` | Words for searching |

**Watch out for two things:**
- Keep every `"` and `,` exactly where they are. A missing comma stops the whole file.
- If your text contains a double quote, write it as `\"` or use single quotes inside.

---

## Adding quiz questions

Open `data/data-quiz.JS`.

```js
"unit-1": {
  mcq: [
    {
      q: "Coagulative necrosis is characteristically seen in which organ?",
      o: ["Brain", "Kidney", "Lung", "Salivary gland"],
      a: 1,                       // 0=first option, 1=second, 2=third, 3=fourth
      e: "The kidney shows classic coagulative necrosis after infarction.",
      topicId: "u1-t09",          // optional — links to the lesson
      diff: 1                     // 1 easy, 2 moderate, 3 hard
    }
  ],
  tf: [
    { q: "Apoptosis provokes an inflammatory response.", a: false,
      e: "Apoptosis is non-inflammatory; the cell fragments are phagocytosed." }
  ],
  fib: [
    { q: "Dry gangrene typically affects the ______.",
      a: ["extremities", "extremity"],   // every spelling you will accept
      e: "Dry gangrene affects extremities such as the ear tip and tail." }
  ]
}
```

As soon as you add one question, the unit lights up in the Quiz section. The engine builds
Paper I, Paper II, the grand test and Smart Review automatically — you never configure those.

---

## Adding Q&A and WHY entries

Both files (`data-qa.JS`, `data-why.JS`) already contain one **template block** with every
field spelled out. Copy it, fill it in, and delete the original empty template when you have
real entries.

---

## Adding a new topic to the syllabus

1. Open `data/data-syllabus.JS` and add a line to that unit's `topics` list:
   ```js
   { id: "u1-t22", title: "Your New Topic" },
   ```
2. Double-click **`tools/make-data-files.bat`**. It creates the matching empty content block
   for you in the right file. It never overwrites anything you have already written.

---

## Pictures

Put them in `images\` using this pattern:

```
images/theory/unit-1/coagulative-necrosis.webp
images/practical/unit-3/blood-smear.webp
images/why/amyloid-spleen.webp
images/qa/necrosis-types.webp
```

Then reference the path in the `img:` field. Use **WebP** and keep each file around
300 KB — the same workflow as your anatomy site.

**App icons:** `manifest.json` expects three files that do not exist yet. Add them when you
are ready to publish as an installable app:
- `images/icon-192.png` (192×192)
- `images/icon-512.png` (512×512)
- `images/icon-maskable-512.png` (512×512, with padding around the logo)

Until then, everything works; only "install to home screen" will use a default icon.

---

## Publishing

Same workflow as the anatomy site: GitHub Desktop → Commit → Push → Cloudflare Pages rebuilds.

**One extra step that matters.** After you change any file, open `service-worker.js` and
bump the version at the top:

```js
var CACHE_VERSION = "vpath-v1";   →   var CACHE_VERSION = "vpath-v2";
```

If you skip this, students who already opened the site keep seeing the **old** version,
because the service worker serves its cached copy first. Bumping the number forces a refresh.

---

## Where student data lives

Everything a student does — progress, notes, bookmarks, quiz history, review queue — is
stored **in their own browser only**. Nothing is sent anywhere. There are no accounts and
no server.

That means clearing browser data erases it. **Settings → Export backup** writes a single
JSON file they can restore later or move to another device.

Storage keys are all prefixed `vpath-`, so this site can never collide with the anatomy site.

---

## Changing colours

Everything lives in `assets/css/tokens.css`. The section accents are:

| Section | Colour |
|---|---|
| Theory | Crimson |
| Practical | Teal |
| Quiz | Amber |
| WHY | Violet |
| Dashboard | Blue |

Change the value once at the top of the file and it updates everywhere, in both light and
dark mode.
