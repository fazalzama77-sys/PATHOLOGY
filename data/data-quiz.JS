/* ============================================================
   data-quiz.JS  —  THE MCQ / TRUE-FALSE / FILL-BLANK BANK
   ------------------------------------------------------------
   Structure:  quizBank[unitId][format] = [ ...questions... ]

   FORMATS
     mcq : { q, o: [4 options], a: index of correct option (0-3), e: explanation }
     tf  : { q, a: true|false, e: explanation }
     fib : { q, a: [accepted answers], e: explanation }

   Optional extras on any question:
     topicId : "u1-t09"   links the question to a lesson
     diff    : 1 | 2 | 3  easy / moderate / hard
     img     : "images/quiz/xyz.webp"

   The quiz engine builds these modes automatically from this bank:
     - Unit-wise test        (one unit)
     - Paper-wise test       (Paper I = units 1,2,3 | Paper II = 4,5,6)
     - Combined / Grand test (all six units)
     - Practical test        (prac-unit-*)
     - Smart Review          (spaced repetition on your wrong answers)
     - Exam Mode             (timed, no feedback until submit)

   You do NOT need to fill every unit before the quiz works —
   the engine skips empty banks and tells the student what is ready.
   ============================================================ */

var quizBank = {

  "unit-1": {

    /* ---- TEMPLATE EXAMPLES — copy the shape, then delete these ---- */
    mcq: [
      {
        q: "",                       // the question text
        o: ["", "", "", ""],         // exactly four options
        a: 0,                        // index of the correct option
        e: "",                       // why that answer is right
        topicId: "u1-t09",
        diff: 1
      }
    ],

    tf: [
      {
        q: "",
        a: true,
        e: "",
        topicId: "u1-t10",
        diff: 1
      }
    ],

    fib: [
      {
        q: "",                       // use ______ to mark the blank
        a: ["", ""],                 // all spellings you will accept
        e: "",
        topicId: "u1-t09",
        diff: 2
      }
    ]
  },

  "unit-2": { mcq: [], tf: [], fib: [] },
  "unit-3": { mcq: [], tf: [], fib: [] },
  "unit-4": { mcq: [], tf: [], fib: [] },
  "unit-5": { mcq: [], tf: [], fib: [] },
  "unit-6": { mcq: [], tf: [], fib: [] },

  "prac-unit-1": { mcq: [], tf: [], fib: [] },
  "prac-unit-2": { mcq: [], tf: [], fib: [] },
  "prac-unit-3": { mcq: [], tf: [], fib: [] },
  "prac-unit-4": { mcq: [], tf: [], fib: [] },
  "prac-unit-5": { mcq: [], tf: [], fib: [] },
  "prac-unit-6": { mcq: [], tf: [], fib: [] }

};
