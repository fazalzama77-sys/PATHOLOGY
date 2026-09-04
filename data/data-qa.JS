/* ============================================================
   data-qa.JS  —  QUESTION & ANSWER BANK
   ------------------------------------------------------------
   Written-exam practice. This is separate from the MCQ quiz bank
   (data-quiz.JS) because these are the questions you WRITE, not
   the ones you click.

   TYPES — these drive the filter chips and the expected length:
     "short"  — Short note / 5 marks
     "long"   — Long answer / 10-15 marks
     "diff"   — Differentiate between X and Y (table answer)
     "define" — One-line definition / 2 marks
     "spot"   — Practical spotting / specimen identification

   Group them under the unit id used in data-syllabus.JS.
   ============================================================ */

var qaBank = {

  "unit-1": [

    /* ---- TEMPLATE EXAMPLE — copy, edit, then delete this one ---- */
    {
      id: "u1-qa-01",
      type: "short",           // short | long | diff | define | spot
      marks: 5,
      question: "",            // e.g. "Write a short note on caseous necrosis."
      topicId: "u1-t09",       // links back to the lesson in data-theory-unit1.JS
      answer: "",              // model answer — HTML allowed (<b> <br> <ul><li>)
      keyPoints: [],           // the marks-scoring points, in order
      diagram: "",             // e.g. "images/qa/caseous-necrosis.webp"
      table: null,             // for "diff" type: { headers: [], rows: [[]] }
      pyq: []                  // previous-year appearances, e.g. ["IVRI 2023", "2021"]
    }

  ],

  "unit-2": [],
  "unit-3": [],
  "unit-4": [],
  "unit-5": [],
  "unit-6": [],

  /* Practical vivas and spotting questions */
  "prac-unit-1": [],
  "prac-unit-2": [],
  "prac-unit-3": [],
  "prac-unit-4": [],
  "prac-unit-5": [],
  "prac-unit-6": []

};
