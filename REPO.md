# 📚 Veterinary Pathology Studio — GitHub Repository Guide

Welcome to the **Veterinary Pathology Studio** GitHub Repository repository package. This folder contains all the core source code, content files, stylesheets, scripts, tools, and configuration needed to publish and run the web application.

---

## 🗂️ Complete Directory & File Manifest

```text
repo/
├── REPO.md                     ← THIS FILE: Complete GitHub Repository & Content Guide
├── .gitignore                  ← Tells Git to ignore temporary system files
├── index.html                  ← Single-page application UI shell
├── manifest.json               ← Progressive Web App (PWA) manifest
├── service-worker.js           ← Offline caching service worker (bump CACHE_VERSION on release)
├── README.md                   ← Student & non-coder content editor guide
├── CLAUDE-CONTEXT.md           ← Complete context & architecture overview
│
├── data/                       ← ALL SYLLABUS & QUESTION CONTENT LIVES HERE
│   ├── data-syllabus.JS        ← Master index of all 6 Units, topic IDs & exam papers
│   ├── data-theory-unit1.JS    ← General Pathology: Introduction, Cell Injury, Inflammation (21 topics)
│   ├── data-theory-unit2.JS    ← General Pathology: Hemodynamic Disorders, Growth Disturbances (12 topics)
│   ├── data-theory-unit3.JS    ← Neoplasia & Oncology (20 topics)
│   ├── data-theory-unit4.JS    ← Systemic Pathology (37 topics)
│   ├── data-theory-unit5.JS    ← Pathology of Infectious & Parasitic Diseases (21 topics)
│   ├── data-theory-unit6.JS    ← Avian Pathology (9 topics)
│   ├── data-practical.JS       ← Practical Pathology syllabus (25 topics across 6 units)
│   ├── data-why.JS             ← Mechanism-first WHY entries & diagnostic reasoning
│   ├── data-qa.JS              ← Written Q&A bank (short notes, long answers, differences, definitions, spotters)
│   └── data-quiz.JS            ← Quiz bank (MCQs, True/False, Fill-in-the-blanks)
│
├── js/                         ← APPLICATION LOGIC & STATE ENGINE
│   ├── app.js                  ← Single-page router, navigation, rendering & views
│   ├── store.js                ← LocalStorage persistence layer (all keys prefixed with 'vpath-')
│   ├── quiz.js                 ← Quiz engine (window.quizApp) with timed Exam Mode & SRS Leitner Box logic
│   └── dashboard.js            ← Progress analytics, streak calculator & 12-week activity heatmap
│
├── assets/
│   └── css/                    ← MODULAR STYLESHEETS
│       ├── tokens.css          ← Color palettes (crimson accent), typography & design tokens
│       ├── main.css            ← CSS reset, main app layout, sidebar & navigation
│       └── sections.css        ← Section-specific styles (Theory, Quiz, WHY, Q&A, Dashboard)
│
├── images/                     ← LESSON & DIAGNOSTIC IMAGES
│   ├── README.txt              ← Instructions for placing images
│   ├── theory/                 ← Gross & histopathology images for theory lessons
│   ├── practical/              ← Spotting & histopathology slide images
│   ├── why/                    ← Flowcharts & mechanism diagrams
│   └── qa/                     ← Question-related diagrams & illustrations
│
└── tools/                      ← CONVENIENCE UTILITIES FOR FAZAL
    ├── start-server.bat        ← Double-click to launch local server at http://localhost:5177
    ├── make-data-files.bat     ← Double-click helper script to scaffold new data files
    └── make-data-files.py      ← Python scaffolding script
```

---

## 🚀 How to Publish to GitHub using GitHub Desktop

Follow these simple steps to publish this repository to GitHub:

### Step 1: Open GitHub Desktop
1. Launch **GitHub Desktop** on your PC.
2. Click **File** in the top menu bar, then click **Add Local Repository...** (or press `Ctrl + O`).

### Step 2: Choose the `repo` Folder
1. Click **Choose...** and browse to:
   `D:\PATHOLOGY APPLICATION\repo`
2. Click **Select Folder**.
3. If GitHub Desktop says *"This directory does not appear to be a Git repository"*, click **create a repository** (or **Initialize Git**).
4. Fill in:
   - **Name:** `veterinary-pathology-studio` (or `pathology-app`)
   - **Description:** Veterinary Pathology study app for B.V.Sc & A.H. students (IVRI / VCI Syllabus)
   - **Local Path:** `D:\PATHOLOGY APPLICATION\repo`
5. Click **Create Repository**.

### Step 3: Commit and Publish
1. At the bottom left of GitHub Desktop, type a Summary: `Initial commit - Complete Pathology Studio files`.
2. Click **Commit to main**.
3. Click the **Publish repository** button at the top bar.
4. Uncheck *"Keep this code private"* if you want it to be a public website on GitHub Pages / Cloudflare Pages.
5. Click **Publish Repository**.

---

## ⚡ Live Hosting setup (Cloudflare Pages or GitHub Pages)

- **Cloudflare Pages:** Connect your GitHub account, select `veterinary-pathology-studio`, set build output directory to `/` (root), and click Deploy.
- **Service Worker Notice:** Whenever you push content updates to GitHub, update `CACHE_VERSION` inside `service-worker.js` (e.g., from `'vpath-v1'` to `'vpath-v2'`) so mobile browser caches update automatically!
