/* ============================================================
   data-why.JS  —  THE "WHY" SECTION
   ------------------------------------------------------------
   Mechanism-first explanations. Not "what the lesion looks like"
   but "why the tissue had no other choice".

   Each entry answers one question and, ideally, ends with a
   single-question self-check card.

   CATEGORIES (used by the filter chips):
     "mechanism"  — why a process happens the way it does
     "lesion"     — why a lesion looks the way it does
     "species"    — why species differ in their response
     "diagnostic" — why we use a particular test or stain
     "clinical"   — why the animal shows the signs it does

   Add as many entries as you like. Order does not matter;
   the app sorts and filters them.
   ============================================================ */

var whyData = [

  /* ---- TEMPLATE EXAMPLE — copy this block, then edit ----
     Delete this entry once you have written real ones. It exists
     only to show you exactly which fields the app expects.       */
  {
    id: 1,
    title: "",                 // e.g. "Why does the spleen enlarge in anthrax?"
    category: "mechanism",     // mechanism | lesion | species | diagnostic | clinical
    unit: "unit-1",            // which unit this belongs to (for filtering)
    comparison: "",            // optional, e.g. "Ox vs Horse"
    why: "",                   // the core explanation — HTML allowed (<b> <br> <i>)
    mechanism: [],             // optional ordered chain: ["Step 1", "Step 2", ...]
    clinical: "",              // why it matters at the clinic / PM table
    analogy: "",               // optional plain-language analogy
    img: "",                   // e.g. "images/why/unit-1/spleen.webp"
    quiz: {
      question: "",
      options: ["", "", "", ""],
      correctIndex: 0,
      explanation: ""
    }
  }

];
