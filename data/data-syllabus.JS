/* ============================================================
   data-syllabus.JS  —  THE MASTER INDEX
   ------------------------------------------------------------
   This file defines the SHAPE of the whole site: which units
   exist, what they are called, and which topics sit inside them.

   The actual lesson text does NOT live here. It lives in:
     data/data-theory-unit1.JS  ...  data-theory-unit6.JS
     data/data-practical.JS

   Topics are matched between the two by their `id`.
   If you add a topic here, add a matching block in the unit file.

   VCI syllabus: Veterinary Pathology, Credit Hours 4+2 = 6
   Exam papers:  Paper-I = Units 1,2,3   |   Paper-II = Units 4,5,6
   ============================================================ */

var syllabus = {

  meta: {
    subject:  "Veterinary Pathology",
    course:   "B.V.Sc & A.H. — Second Year",
    credits:  "4 + 2 = 6",
    institute:"ICAR — Indian Veterinary Research Institute, Izatnagar, Bareilly",
    papers: [
      { id: "paper-1", name: "Paper I",  units: [1, 2, 3], theoryMarks: 100, practicalMarks: 60, weightage: 20 },
      { id: "paper-2", name: "Paper II", units: [4, 5, 6], theoryMarks: 100, practicalMarks: 60, weightage: 20 }
    ]
  },

  /* ---------------------------------------------------------
     THEORY — 6 UNITS
     --------------------------------------------------------- */
  theory: [
    {
      no: 1,
      id: "unit-1",
      title: "General Veterinary Pathology",
      short: "General Pathology",
      blurb: "The grammar of disease — cell injury, haemodynamics, inflammation and healing. Everything in Units 2–6 is built on this.",
      icon: "cell",
      paper: "paper-1",
      topics: [
        { id: "u1-t01", title: "Introduction and Scope of Veterinary Pathology" },
        { id: "u1-t02", title: "Causes of Disease — Intrinsic and Extrinsic" },
        { id: "u1-t03", title: "Haemodynamic Disorders I — Hyperaemia, Congestion, Haemorrhage" },
        { id: "u1-t04", title: "Haemodynamic Disorders II — Oedema" },
        { id: "u1-t05", title: "Haemodynamic Disorders III — Thrombosis, Embolism, Infarction" },
        { id: "u1-t06", title: "Intracellular Accumulations — Glycogen Overload and Fatty Change" },
        { id: "u1-t07", title: "Amyloidosis" },
        { id: "u1-t08", title: "Reversible Cell Injury — Degenerations" },
        { id: "u1-t09", title: "Irreversible Cell Injury — Necrosis and Its Types" },
        { id: "u1-t10", title: "Apoptosis, and Necrosis vs Post-mortem Autolysis" },
        { id: "u1-t11", title: "Gangrene and Its Types" },
        { id: "u1-t12", title: "Pigments — Exogenous and Endogenous" },
        { id: "u1-t13", title: "Pathological Calcification — Dystrophic and Metastatic" },
        { id: "u1-t14", title: "Photosensitization" },
        { id: "u1-t15", title: "Disturbances in Growth — Aplasia to Dysplasia" },
        { id: "u1-t16", title: "Inflammation I — Definition, Classification, Cardinal Signs" },
        { id: "u1-t17", title: "Inflammation II — Cell Types and Their Functions" },
        { id: "u1-t18", title: "Inflammation III — Chemical Mediators" },
        { id: "u1-t19", title: "Inflammation IV — Systemic Effects" },
        { id: "u1-t20", title: "Wound Healing and Repair — Primary and Secondary Intention" },
        { id: "u1-t21", title: "Immunopathology — Immunodeficiency, Hypersensitivity, Autoimmunity" }
      ]
    },

    {
      no: 2,
      id: "unit-2",
      title: "Systemic Veterinary Pathology",
      short: "Systemic Pathology",
      blurb: "Organ system by organ system — how the general processes of Unit 1 actually present in tissue.",
      icon: "organs",
      paper: "paper-1",
      topics: [
        { id: "u2-t01", title: "Digestive System" },
        { id: "u2-t02", title: "Respiratory System" },
        { id: "u2-t03", title: "Musculoskeletal System" },
        { id: "u2-t04", title: "Cardiovascular System" },
        { id: "u2-t05", title: "Haematopoietic System" },
        { id: "u2-t06", title: "Lymphoid System" },
        { id: "u2-t07", title: "Urinary System" },
        { id: "u2-t08", title: "Reproductive System" },
        { id: "u2-t09", title: "Nervous System" },
        { id: "u2-t10", title: "Endocrine System" },
        { id: "u2-t11", title: "Skin and Appendages" },
        { id: "u2-t12", title: "Ear and Eye" }
      ]
    },

    {
      no: 3,
      id: "unit-3",
      title: "Animal Oncology, Veterinary Clinical Pathology and Necropsy",
      short: "Oncology · Clinical Path · Necropsy",
      blurb: "Tumours, the diagnostic laboratory, and the post-mortem table — the three practical pillars of the pathologist's day.",
      icon: "microscope",
      paper: "paper-1",
      topics: [
        { id: "u3-t01", title: "Neoplasia — Definitions, General Characteristics, Classification" },
        { id: "u3-t02", title: "Benign vs Malignant Tumours" },
        { id: "u3-t03", title: "Aetiology of Neoplasia and Carcinogenesis" },
        { id: "u3-t04", title: "Spread of Neoplasms and Tumour Immunity" },
        { id: "u3-t05", title: "Effects, Diagnosis, Staging and Grading of Tumours" },
        { id: "u3-t06", title: "Epithelial Tumours of Domestic Animals" },
        { id: "u3-t07", title: "Connective Tissue Tumours of Domestic Animals" },
        { id: "u3-t08", title: "Haematopoietic and Other Tumours" },
        { id: "u3-t09", title: "Clinical Pathology — Introduction and Anticoagulants" },
        { id: "u3-t10", title: "Haematology — Hb, PCV, TEC and Erythrocytic Indices" },
        { id: "u3-t11", title: "Haematology — ESR, TLC and Differential/Absolute Counts" },
        { id: "u3-t12", title: "Blood Smear Examination and Interpretation" },
        { id: "u3-t13", title: "Urinalysis — Physical, Chemical and Microscopic" },
        { id: "u3-t14", title: "Biopsy and Cytology, Including Exfoliative Cytology" },
        { id: "u3-t15", title: "Necropsy — Introduction, Objectives, Pre-necropsy Guidelines" },
        { id: "u3-t16", title: "Post-mortem Procedure in Different Species" },
        { id: "u3-t17", title: "Post-mortem Changes" },
        { id: "u3-t18", title: "Collection, Preservation and Dispatch of Morbid Material" },
        { id: "u3-t19", title: "Writing the Post-mortem Report" },
        { id: "u3-t20", title: "Veterolegal Necropsy and Veterolegal Wounds" }
      ]
    },

    {
      no: 4,
      id: "unit-4",
      title: "Pathology of Infectious and Non-infectious Diseases of Domestic Animals",
      short: "Infectious & Non-infectious Diseases",
      blurb: "The largest unit. Viral, bacterial, mycotic, parasitic, nutritional and toxic disease of large and small animals.",
      icon: "virus",
      paper: "paper-2",
      topics: [
        { id: "u4-t01", title: "Viral Diseases of Cattle and Buffalo — FMD, Rinderpest, MCF" },
        { id: "u4-t02", title: "Viral Diseases of Ruminants — Blue Tongue, IBR, BVD, PPR" },
        { id: "u4-t03", title: "Viral Diseases of Equines — EIA, Equine Influenza, EVA, Rhinopneumonitis" },
        { id: "u4-t04", title: "Viral Diseases of Swine — Classical Swine Fever, Swine Influenza" },
        { id: "u4-t05", title: "Viral Diseases of Dogs — Rabies, Distemper, ICH, Parvovirus" },
        { id: "u4-t06", title: "Viral Diseases of Cats — Feline Panleukopenia" },
        { id: "u4-t07", title: "Retroviral Lung Diseases of Sheep — Maedi and Jaagziekte" },
        { id: "u4-t08", title: "Pox Virus Diseases in Different Animals" },
        { id: "u4-t09", title: "Vesicular Stomatitis, Vesicular Exanthema, Equine Encephalomyelitis" },
        { id: "u4-t10", title: "Rota and Corona Virus Diseases" },
        { id: "u4-t11", title: "Prion Diseases — Scrapie, BSE, FSE" },
        { id: "u4-t12", title: "Tuberculosis and Johne's Disease" },
        { id: "u4-t13", title: "Actinomycosis and Actinobacillosis" },
        { id: "u4-t14", title: "Anthrax" },
        { id: "u4-t15", title: "Clostridial Diseases — BQ, Black Disease, Enterotoxaemia, Braxy, Botulism, Tetanus" },
        { id: "u4-t16", title: "Streptococcosis Including Strangles, and Staphylococcosis" },
        { id: "u4-t17", title: "Glanders, Pasteurellosis and Leptospirosis" },
        { id: "u4-t18", title: "Listeriosis, Swine Erysipelas and Brucellosis" },
        { id: "u4-t19", title: "Corynebacterium Infections — Caseous Lymphadenitis, Pseudotuberculosis" },
        { id: "u4-t20", title: "Campylobacteriosis, Salmonellosis, Colibacillosis and Necrobacillosis" },
        { id: "u4-t21", title: "Mycoplasma Infections — CBPP, CCPP, Porcine Enzootic Pneumonia" },
        { id: "u4-t22", title: "Chlamydial Diseases, Q-fever, Anaplasmosis and Ehrlichiosis" },
        { id: "u4-t23", title: "Superficial Mycoses — Ringworm (Dermatophytosis)" },
        { id: "u4-t24", title: "Deep Mycoses — Aspergillosis, Zygomycosis, Histoplasmosis, Cryptococcosis, Rhinosporidiosis, Candidiasis" },
        { id: "u4-t25", title: "Mycotoxicoses — Aflatoxicosis, Ochratoxicosis, Trichothecosis, Degnala, Ergotism" },
        { id: "u4-t26", title: "Haemoprotozoan Diseases — Babesiosis, Theileriosis, Trypanosomosis" },
        { id: "u4-t27", title: "Fasciolosis and Amphistomiasis" },
        { id: "u4-t28", title: "Nematode Infections — Ascariasis, Strongylosis, Haemonchosis, Spirocercosis, Filariasis, Hookworm" },
        { id: "u4-t29", title: "Cestode Infections" },
        { id: "u4-t30", title: "Coccidiosis, Toxoplasmosis and Cryptosporidiosis" },
        { id: "u4-t31", title: "Nutritional Imbalances — Carbohydrates, Proteins, Fats" },
        { id: "u4-t32", title: "Nutritional Imbalances — Minerals and Vitamins" },
        { id: "u4-t33", title: "Metabolic Diseases — Pregnancy Toxaemia, PPH, Hypomagnesaemic Tetany, Azoturia, Sway Back, Pica" },
        { id: "u4-t34", title: "Heavy Metal Toxicity — Arsenic, Copper, Lead, Mercury, Cadmium" },
        { id: "u4-t35", title: "Chemical Toxicity — Strychnine, Nitrate/Nitrite, HCN, Fluoride, Selenium, Oxalates" },
        { id: "u4-t36", title: "Insecticide and Pesticide Poisoning" },
        { id: "u4-t37", title: "Plant Poisoning — Bracken Fern, Gossypol, Ratti, Lantana" }
      ]
    },

    {
      no: 5,
      id: "unit-5",
      title: "Avian Pathology",
      short: "Avian Pathology",
      blurb: "Poultry disease — high-yield for both the exam and field practice in India.",
      icon: "bird",
      paper: "paper-2",
      topics: [
        { id: "u5-t01", title: "Avian Inflammation — How Birds Differ from Mammals" },
        { id: "u5-t02", title: "Ranikhet Disease (Newcastle Disease)" },
        { id: "u5-t03", title: "Infectious Bursal Disease and Chicken Infectious Anaemia" },
        { id: "u5-t04", title: "Infectious Bronchitis and Infectious Laryngotracheitis" },
        { id: "u5-t05", title: "Fowl Pox and Avian Influenza" },
        { id: "u5-t06", title: "Marek's Disease" },
        { id: "u5-t07", title: "Leukosis/Sarcoma Group and Reticuloendotheliosis" },
        { id: "u5-t08", title: "Avian Encephalomyelitis and Avian Nephritis" },
        { id: "u5-t09", title: "Inclusion Body Hepatitis and Hydropericardium Syndrome" },
        { id: "u5-t10", title: "Egg Drop Syndrome and Reovirus Infections" },
        { id: "u5-t11", title: "Avian Colibacillosis and Infectious Coryza" },
        { id: "u5-t12", title: "Avian Clostridial Diseases and Salmonella Infections" },
        { id: "u5-t13", title: "Fowl Cholera, Avian Tuberculosis and Spirochaetosis" },
        { id: "u5-t14", title: "Avian Mycoplasmosis and Chlamydiosis" },
        { id: "u5-t15", title: "Avian Mycoses — Aspergillosis, Thrush, Favus" },
        { id: "u5-t16", title: "Avian Mycotoxicoses — Aflatoxicosis, Ochratoxicosis, Trichothecosis" },
        { id: "u5-t17", title: "Avian Helminthic Diseases — Flukes, Cestodes, Nematodes" },
        { id: "u5-t18", title: "Avian Coccidiosis and Histomoniasis" },
        { id: "u5-t19", title: "Ectoparasites of Poultry" },
        { id: "u5-t20", title: "Avian Nutritional Deficiencies" },
        { id: "u5-t21", title: "Miscellaneous Conditions and Common Vices" }
      ]
    },

    {
      no: 6,
      id: "unit-6",
      title: "Pathology of Diseases of Laboratory and Wild Animals",
      short: "Lab & Wild Animals",
      blurb: "Rodents, rabbits and free-ranging wildlife — small unit, frequently examined.",
      icon: "paw",
      paper: "paper-2",
      topics: [
        { id: "u6-t01", title: "Diseases of Rats and Mice — Tyzzer's, Pseudotuberculosis, Salmonellosis" },
        { id: "u6-t02", title: "Diseases of Rats and Mice — Infectious Ectromelia, Infantile Diarrhoea, MHV, LCM" },
        { id: "u6-t03", title: "Diseases of Guinea Pigs" },
        { id: "u6-t04", title: "Diseases of Rabbits — Pasteurellosis, Blue Breasts, Treponematosis, Enterotoxaemia" },
        { id: "u6-t05", title: "Diseases of Rabbits — Rabbit Pox, Myxomatosis, Papillomatosis, Coccidiosis, Mite Infestation" },
        { id: "u6-t06", title: "Viral Diseases of Wild Animals — West Nile Fever, Rabies, FMD, Pox, KFD, Infectious Hepatitis" },
        { id: "u6-t07", title: "Bacterial Diseases of Wild Animals — Anthrax, Tuberculosis, Colibacillosis, Clostridial Infections" },
        { id: "u6-t08", title: "Parasitic Diseases of Wild Animals — Trypanosomosis, Babesiosis, Theileriosis" },
        { id: "u6-t09", title: "Nutritional Deficiency Diseases of Wild Animals" }
      ]
    }
  ],

  /* ---------------------------------------------------------
     PRACTICAL — 6 UNITS
     --------------------------------------------------------- */
  practical: [
    {
      no: 1,
      id: "prac-unit-1",
      title: "General Veterinary Pathology",
      short: "General Pathology (Practical)",
      blurb: "Gross specimens, the histopathology laboratory, and reading your first slides.",
      icon: "flask",
      paper: "paper-1",
      topics: [
        { id: "p1-t01", title: "Study of Gross Pathological Specimens" },
        { id: "p1-t02", title: "Recognition of Pathological Lesions" },
        { id: "p1-t03", title: "Tissue Processing for Paraffin Embedding" },
        { id: "p1-t04", title: "Section Cutting — Microtomy" },
        { id: "p1-t05", title: "Staining Techniques — Routine H&E" },
        { id: "p1-t06", title: "Examination of Slides Showing General Pathological Alterations" }
      ]
    },
    {
      no: 2,
      id: "prac-unit-2",
      title: "Systemic Veterinary Pathology",
      short: "Systemic Pathology (Practical)",
      blurb: "Gross specimens and slides, organ system by organ system.",
      icon: "flask",
      paper: "paper-1",
      topics: [
        { id: "p2-t01", title: "Gross Specimens — Systemic Pathology" },
        { id: "p2-t02", title: "Histopathology Slides — Systemic Pathology" }
      ]
    },
    {
      no: 3,
      id: "prac-unit-3",
      title: "Oncology, Clinical Pathology and Necropsy",
      short: "Oncology · Clinical Path · Necropsy (Practical)",
      blurb: "Tumour specimens, the haematology bench, urinalysis, and the post-mortem hall.",
      icon: "flask",
      paper: "paper-1",
      topics: [
        { id: "p3-t01", title: "Macroscopic and Microscopic Examination of Benign and Malignant Tumours" },
        { id: "p3-t02", title: "Routine Haematological Tests in Domestic Animals" },
        { id: "p3-t03", title: "Routine Haematological Tests in Poultry" },
        { id: "p3-t04", title: "Physical, Chemical and Microscopic Examination of Urine" },
        { id: "p3-t05", title: "Post-mortem Examination of Different Species" }
      ]
    },
    {
      no: 4,
      id: "prac-unit-4",
      title: "Infectious and Non-infectious Diseases",
      short: "Infectious Diseases (Practical)",
      blurb: "Post-mortem interpretation, special stains, and rapid diagnostic tests.",
      icon: "flask",
      paper: "paper-2",
      topics: [
        { id: "p4-t01", title: "Post-mortem Examination and Its Interpretation" },
        { id: "p4-t02", title: "Gross Specimens — Infectious and Non-infectious Diseases" },
        { id: "p4-t03", title: "Histopathology Slides — Infectious and Non-infectious Diseases" },
        { id: "p4-t04", title: "Demonstration of Causative Agents by Special Staining" },
        { id: "p4-t05", title: "Rapid Diagnostic Tests" }
      ]
    },
    {
      no: 5,
      id: "prac-unit-5",
      title: "Avian Pathology",
      short: "Avian Pathology (Practical)",
      blurb: "Poultry post-mortem technique, report writing, and specimen dispatch.",
      icon: "flask",
      paper: "paper-2",
      topics: [
        { id: "p5-t01", title: "Post-mortem Examination of Poultry" },
        { id: "p5-t02", title: "Writing the Poultry Post-mortem Report" },
        { id: "p5-t03", title: "Collection, Preservation and Dispatch of Poultry Morbid Material" },
        { id: "p5-t04", title: "Gross Specimens and Slides — Poultry Diseases" }
      ]
    },
    {
      no: 6,
      id: "prac-unit-6",
      title: "Laboratory and Wild Animal Pathology",
      short: "Lab & Wild Animals (Practical)",
      blurb: "Necropsy and specimen study in rodents, rabbits and wildlife.",
      icon: "flask",
      paper: "paper-2",
      topics: [
        { id: "p6-t01", title: "Post-mortem Examination of Laboratory Animals" },
        { id: "p6-t02", title: "Post-mortem Examination of Wild Animals" },
        { id: "p6-t03", title: "Gross Specimens and Slides — Laboratory and Wild Animal Diseases" }
      ]
    }
  ]
};

/* Convenience lookups built once at load. Do not edit below. */
syllabus.allUnits = syllabus.theory.concat(syllabus.practical);
syllabus.unitById = {};
syllabus.topicById = {};
syllabus.allUnits.forEach(function (u) {
  syllabus.unitById[u.id] = u;
  u.stream = (u.id.indexOf("prac-") === 0) ? "practical" : "theory";
  u.topics.forEach(function (t, i) {
    t.unitId = u.id;
    t.unitNo = u.no;
    t.stream = u.stream;
    t.index = i + 1;
    syllabus.topicById[t.id] = t;
  });
});
