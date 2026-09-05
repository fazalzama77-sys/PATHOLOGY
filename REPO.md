# 📚 Veterinary Pathology Studio — GitHub Repository Guide

Welcome to the **Veterinary Pathology Studio** GitHub Repository folder. This folder contains all the core source code, content files, stylesheets, scripts, tools, and configuration needed to publish and run the web application.

---

## 🗂️ Sequential Directory & File Layout

All project files are sequentially organized into dedicated folders:

`	ext
repo/ (or PATHOLOGY APPLICATION/)
│
├── assets/                     ← STYLESHEETS & DESIGN TOKENS
│   └── css/
│       ├── tokens.css          ← Color palettes, typography & design tokens
│       ├── main.css            ← CSS reset, main layout, collapsible sidebar & navigation
│       ├── sections.css        ← Section-specific styles (Theory, Quiz, WHY, Q&A, Dashboard, Hero)
│       ├── deep-guide.css      ← Comprehensive topic guides & reading styles
│       ├── events.css          ← Academic events & milestone timeline styles
│       └── animations.css      ← Smooth transitions & micro-interactions
│
├── data/                       ← ALL SYLLABUS, THEORY & QUESTION DATA
│   ├── data-syllabus.JS        ← Master index of all 6 Units, topic IDs & exam papers
│   ├── data-theory-unit1.JS    ← General Pathology: Introduction, Cell Injury, Inflammation
│   ├── data-theory-unit2.JS    ← General Pathology: Hemodynamics & Growth Disturbances
│   ├── data-theory-unit3.JS    ← Neoplasia & Oncology
│   ├── data-theory-unit4.JS    ← Systemic Pathology (Cardiovascular, Respiratory, Digestive, etc.)
│   ├── data-theory-unit5.JS    ← Pathology of Infectious & Parasitic Diseases
│   ├── data-theory-unit6.JS    ← Avian Pathology
│   ├── data-practical.JS       ← Practical Pathology syllabus across all 6 units
│   ├── data-why.JS             ← Mechanism-first WHY clinical reasoning entries
│   ├── data-qa.JS              ← Written question bank (short notes, long answers, differences)
│   ├── data-quiz.JS            ← Quiz bank (MCQs, True/False, Fill-in-the-blanks)
│   └── events-data.js          ← Academic schedule & events data
│
├── images/                     ← LESSON & DIAGNOSTIC IMAGES
│   ├── theory/                 ← Gross & histopathology images for theory lessons
│   ├── practical/              ← Spotting & histopathology slide images
│   ├── why/                    ← Flowcharts & mechanism diagrams
│   ├── qa/                     ← Question-related diagrams & illustrations
│   └── README.txt              ← Instructions for placing image files
│
├── js/                         ← APPLICATION LOGIC & INTERACTION ENGINE
│   ├── app.js                  ← Single-page router, navigation, rendering & views
│   ├── store.js                ← LocalStorage persistence layer
│   ├── quiz.js                 ← Quiz engine with exam mode & SRS Leitner logic
│   ├── dashboard.js            ← Progress analytics, streak calculator & heatmap
│   ├── glossary.js             ← 316-term Veterinary Pathology dictionary & speech engine
│   ├── search.js               ← Full-text deep search across theory, practical, quiz & glossary
│   ├── deep-guide.js           ← Interactive study guide reader
│   └── events.js               ← Academic calendar & events viewer
│
├── tools/                      ← HELPER TOOLS & SHORTCUTS
│   ├── start-server.bat        ← Double-click to launch local server at http://localhost:5177
│   ├── make-data-files.bat     ← Helper script to scaffold new data files
│   ├── make-data-files.py      ← Scaffolding Python script
│   └── sync-repo.bat           ← Double-click to refresh the repo folder
│
├── .gitignore                  ← Git ignore rules (ignores temp/cache files)
├── CLAUDE-CONTEXT.md           ← Complete context & architecture document for AI assistants
├── index.html                  ← Main single-page application entry point
├── manifest.json               ← Progressive Web App (PWA) manifest
├── README.md                   ← Student guide & study companion overview
├── REPO.md                     ← This repository layout guide
├── service-worker.js           ← Offline caching engine (PWA)
└── vet pathology OUTLINE.pdf   ← Reference syllabus outline document
`

---

## 🚀 3 Easy Ways to Update GitHub (No Coding Required!)

### 🌟 Option 1: The 1-Click Uploader (EASIEST)
Whenever you, ChatGPT, Claude, or Gemini make any changes to your files:
1. In your D:\PATHOLOGY APPLICATION folder, find the file named:
   **1-CLICK-PUSH-TO-GITHUB.bat**
2. **Double-click it!**
3. It will automatically:
   - Synchronize all files into the epo folder.
   - Package all modified files.
   - Upload them directly to your GitHub repository (https://github.com/fazalzama77-sys/PATHOLOGY).
4. You will see a green **[SUCCESS]** message. Press any key to close. Done!

---

### 💻 Option 2: Using GitHub Desktop GUI
1. Open **GitHub Desktop** on your computer.
2. Ensure your repository is selected (PATHOLOGY).
3. In the bottom-left corner:
   - Summary: type Update content
   - Click the blue **Commit to main** button.
4. Click the **Push origin** button at the top bar.

---

### 🌐 Option 3: Manual Upload via Web Browser
If you ever want to upload files directly through the GitHub website:
1. Double-click **SYNC-TO-REPO.bat** so the epo folder has the latest files.
2. Open your GitHub repository in your browser:
   https://github.com/fazalzama77-sys/PATHOLOGY
3. Click **Add file** -> **Upload files**.
4. Drag and drop the files/folders from D:\PATHOLOGY APPLICATION\repo into the browser.
5. Click **Commit changes**.
