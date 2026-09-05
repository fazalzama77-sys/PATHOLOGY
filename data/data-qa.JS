/* ============================================================
   data-qa.JS  —  QUESTION & ANSWER BANK
   ------------------------------------------------------------
   Written-exam practice. Separate from the MCQ quiz bank
   (data-quiz.JS) because these are the questions you WRITE, not
   the ones you click.

   TYPES:
     "define" — One/two-line definition / 2 marks
     "short"  — Short note / 5 marks
     "diff"   — Differentiate between X and Y (table answer) / 5 marks
     "long"   — Long answer / 12 marks
     "spot"   — Practical spotting / specimen identification

   B.V.Sc & A.H. Second Year (VCI Syllabus)
   150 High-Yield Exam Questions across Theory Units 1 to 6:
   Each Unit contains:
     - 12 Two-mark Definition Questions (24 marks)
     - 8 Five-mark Short-Answer Questions (40 marks)
     - 5 Twelve-mark Long-Answer Questions (60 marks)
   ============================================================ */

var qaBank = {
  "unit-1": [
    {
      "id": "u1-qa-01",
      "type": "define",
      "marks": 2,
      "question": "Define Pathology and Pathogenesis.",
      "topicId": "u1-t01",
      "answer": "<p><b>Pathology</b> (Greek: <i>pathos</i> = suffering, <i>logos</i> = study) is the scientific study of the structural, biochemical, and functional changes in cells, tissues, and organs that underlie disease.</p><p><b>Pathogenesis</b> is the step-by-step sequence of cellular and biochemical events that take place from the initial contact with the etiological agent to the ultimate development and expression of the disease lesion.</p>",
      "keyPoints": [
        "Pathology: Study of structural, functional, and biochemical changes in disease.",
        "Pathogenesis: Step-by-step mechanism from etiology to final lesion."
      ],
      "table": null,
      "pyq": [
        "IVRI 2022",
        "GADVASU 2020",
        "TANUVAS 2019"
      ]
    },
    {
      "id": "u1-qa-02",
      "type": "define",
      "marks": 2,
      "question": "Define Hyperaemia and Congestion. Give one key difference.",
      "topicId": "u1-t03",
      "answer": "<p><b>Hyperaemia</b> is an <b>active</b> arteriolar engorgement leading to increased arterial blood inflow into a vascular bed, regulated by neurogenic mechanisms or vasoactive catabolites (tissue appears bright red, warm, and swollen; e.g., working skeletal muscle, acute inflammation).</p><p><b>Congestion</b> is a <b>passive</b> venous engorgement resulting from impaired venous outflow from an organ or tissue (tissue appears dark red-blue/cyanotic, cool, and swollen; e.g., chronic passive congestion of liver in congestive heart failure).</p>",
      "keyPoints": [
        "Hyperaemia: Active, arteriolar dilatation, oxygenated bright red blood, warm.",
        "Congestion: Passive, impaired venous drainage, deoxygenated cyanotic blood, cool."
      ],
      "table": null,
      "pyq": [
        "RAJUVAS 2023",
        "WBUAFS 2021",
        "KVAFSU 2019"
      ]
    },
    {
      "id": "u1-qa-03",
      "type": "define",
      "marks": 2,
      "question": "Define Thrombosis and state Virchow's Triad.",
      "topicId": "u1-t05",
      "answer": "<p><b>Thrombosis</b> is the pathological formation of an intravascular, solid or semi-solid aggregate of blood elements (platelets, fibrin, and trapped RBCs/WBCs) within the cardiovascular lumen during life.</p><p><b>Virchow's Triad</b> encompasses the three primary predisposing factors:</p><ul><li><b>Endothelial injury:</b> Denudation of collagen and release of tissue factor.</li><li><b>Abnormal blood flow:</b> Stasis (venous) or turbulence (arterial).</li><li><b>Hypercoagulability:</b> Alteration in pro- and anti-coagulant cascades.</li></ul>",
      "keyPoints": [
        "Thrombosis: Intravascular solid clot formed inside lumen during life.",
        "Virchow's Triad: 1. Endothelial damage, 2. Altered blood flow (stasis/turbulence), 3. Hypercoagulability."
      ],
      "table": null,
      "pyq": [
        "IVRI 2023",
        "TANUVAS 2021",
        "LUVAS 2020"
      ]
    },
    {
      "id": "u1-qa-04",
      "type": "define",
      "marks": 2,
      "question": "Define Embolism and name two types of emboli.",
      "topicId": "u1-t05",
      "answer": "<p><b>Embolism</b> is the occlusion of a blood vessel by an intravascular detached physical mass (solid, liquid, or gas) carried by the circulating bloodstream from its point of origin to a distant anatomical site.</p><p><b>Types of Emboli:</b></p><ul><li><b>Thromboemboli:</b> Fragments dislodged from a thrombus (e.g., aortic thromboembolism in cats).</li><li><b>Parasitic emboli:</b> Fragments of helminths (e.g., <i>Strongylus vulgaris</i> larvae in equine mesenteric arteries).</li><li><i>Other types:</i> Fat, air, bacterial, and neoplastic emboli.</li></ul>",
      "keyPoints": [
        "Embolism: Detached intravascular mass carried by circulation to distant site of arrest.",
        "Types: Thromboemboli, parasitic, fat, air, bacterial emboli."
      ],
      "table": null,
      "pyq": [
        "GADVASU 2022",
        "MAFSU 2021"
      ]
    },
    {
      "id": "u1-qa-05",
      "type": "define",
      "marks": 2,
      "question": "Define Infarction and distinguish Red from White infarcts.",
      "topicId": "u1-t05",
      "answer": "<p><b>Infarction</b> is an area of localized ischemic coagulative necrosis in a tissue or organ resulting from sudden occlusion of either its arterial blood supply or its venous drainage.</p><p><b>Distinction:</b></p><ul><li><b>Red (Haemorrhagic) Infarct:</b> Occurs in loose, spongy tissues with dual or collateral blood supply (lungs, intestine) where blood enters the necrotic zone from collaterals or anastomoses.</li><li><b>White (Pale) Infarct:</b> Occurs in solid parenchymal organs with end-arterial circulation (kidney, spleen, heart) where high tissue turgor squeezes blood out of the dead tissue.</li></ul>",
      "keyPoints": [
        "Infarction: Localized ischemic coagulative necrosis due to vascular occlusion.",
        "Red infarct: Loose tissues, dual/collateral circulation (lung, gut).",
        "White infarct: Dense organs, end-arterial supply (kidney, heart, spleen)."
      ],
      "table": null,
      "pyq": [
        "IVRI 2021",
        "TANUVAS 2020",
        "RAJUVAS 2018"
      ]
    },
    {
      "id": "u1-qa-06",
      "type": "define",
      "marks": 2,
      "question": "Define Amyloidosis and state its diagnostic staining property.",
      "topicId": "u1-t07",
      "answer": "<p><b>Amyloidosis</b> is a pathological condition characterized by the abnormal extracellular deposition of insoluble, misfolded, non-branching fibrillar protein aggregates (arranged in a <b>beta-pleated sheet conformation</b>) within various organs, causing tissue pressure atrophy and functional failure.</p><p><b>Diagnostic Staining Property:</b> Stains light pink/salmon with <b>Congo Red</b> stain under ordinary light, and exhibits pathognomonic <b>apple-green birefringence</b> under polarized light microscopy.</p>",
      "keyPoints": [
        "Amyloidosis: Extracellular deposition of insoluble beta-pleated fibrillar proteins.",
        "Staining: Congo Red produces bright apple-green birefringence under polarized light."
      ],
      "table": null,
      "pyq": [
        "GADVASU 2023",
        "WBUAFS 2022",
        "IVRI 2019"
      ]
    },
    {
      "id": "u1-qa-07",
      "type": "define",
      "marks": 2,
      "question": "Define Necrosis and name the three cardinal nuclear changes.",
      "topicId": "u1-t09",
      "answer": "<p><b>Necrosis</b> is the morphological and biochemical expression of irreversible cell death occurring in a living tissue or organism, characterized by cellular swelling, protein denaturation, enzyme digestion, and loss of membrane integrity with an inflammatory response.</p><p><b>Three Cardinal Nuclear Changes:</b></p><ol><li><b>Pyknosis:</b> Nuclear condensation and progressive shrinkage into a dense, dark, basophilic mass.</li><li><b>Karyorrhexis:</b> Fragmentation of the pyknotic nucleus into small basophilic pieces.</li><li><b>Karyolysis:</b> Complete dissolution and fading of the chromatin by hydrolytic endonucleases.</li></ol>",
      "keyPoints": [
        "Necrosis: Morphological expression of cell death in living tissue accompanied by inflammation.",
        "Nuclear changes: Pyknosis (shrinkage), Karyorrhexis (fragmentation), Karyolysis (dissolution)."
      ],
      "table": null,
      "pyq": [
        "TANUVAS 2023",
        "IVRI 2020",
        "KVAFSU 2018"
      ]
    },
    {
      "id": "u1-qa-08",
      "type": "define",
      "marks": 2,
      "question": "Define Apoptosis and give two key differences from Necrosis.",
      "topicId": "u1-t10",
      "answer": "<p><b>Apoptosis</b> (programmed cell death) is an energy-dependent (ATP-requiring), genetically programmed physiological or pathological cellular self-destruction process executed by <b>caspases</b> without cell lysis or an inflammatory response.</p><p><b>Key Differences from Necrosis:</b></p><ul><li><b>Cell volume:</b> In apoptosis, cell shrinkage and budding into apoptotic bodies occur; in necrosis, cell swelling (oncosis) and membrane rupture occur.</li><li><b>Inflammation:</b> Apoptosis triggers <b>no inflammatory response</b> (intact apoptotic bodies are phagocytosed); necrosis triggers a <b>prominent acute inflammatory reaction</b>.</li></ul>",
      "keyPoints": [
        "Apoptosis: Energy-dependent, caspase-mediated programmed cell death.",
        "Differences: Cell shrinkage vs swelling; no inflammation vs marked inflammation."
      ],
      "table": null,
      "pyq": [
        "RAJUVAS 2022",
        "GADVASU 2021"
      ]
    },
    {
      "id": "u1-qa-09",
      "type": "define",
      "marks": 2,
      "question": "Define Gangrene and name its three principal types.",
      "topicId": "u1-t11",
      "answer": "<p><b>Gangrene</b> is ischemic coagulative necrosis of a tissue or organ with superadded bacterial putrefaction or saprophytic invasion, leading to tissue blackened discoloration, liquefaction, or gas production.</p><p><b>Three Principal Types:</b></p><ol><li><b>Dry Gangrene:</b> Ischemic mummification without fluid or bacterial liquefaction (e.g., ergot poisoning affecting tail/ears).</li><li><b>Moist (Wet) Gangrene:</b> Ischemia with aggressive saprophytic bacterial invasion in warm, moist tissues (e.g., gangrenous mastitis, aspiration pneumonia).</li><li><b>Gas Gangrene:</b> Infection by gas-forming clostridia (<i>Clostridium chauvoei</i>, <i>C. perfringens</i>) with crepitant tissue emphysema.</li></ol>",
      "keyPoints": [
        "Gangrene: Ischemic necrosis + superadded saprophytic putrefaction.",
        "Three types: Dry gangrene, Moist (wet) gangrene, Gas gangrene."
      ],
      "table": null,
      "pyq": [
        "IVRI 2022",
        "TANUVAS 2021",
        "MAFSU 2019"
      ]
    },
    {
      "id": "u1-qa-10",
      "type": "define",
      "marks": 2,
      "question": "Define Pathological Calcification. Distinguish Dystrophic from Metastatic Calcification.",
      "topicId": "u1-t13",
      "answer": "<p><b>Pathological Calcification</b> is the abnormal tissue deposition of calcium salts (principally calcium phosphate and carbonate) together with smaller amounts of iron and magnesium in tissues other than normal bone and teeth.</p><p><b>Distinction:</b></p><ul><li><b>Dystrophic Calcification:</b> Calcium deposits in <b>necrotic, dying, or degenerate tissues</b> with <b>normal serum calcium levels</b> (e.g., tuberculous caseous lymph nodes, atheromas).</li><li><b>Metastatic Calcification:</b> Calcium deposits in <b>previously normal, viable tissues</b> as a result of persistent <b>hypercalcaemia</b> (e.g., hyperparathyroidism, Vitamin D toxicity, calcinogenic plants).</li></ul>",
      "keyPoints": [
        "Pathological Calcification: Abnormal calcium salt deposition in soft tissues.",
        "Dystrophic: Necrotic tissue, normal serum calcium.",
        "Metastatic: Viable tissue, elevated serum calcium (hypercalcaemia)."
      ],
      "table": null,
      "pyq": [
        "GADVASU 2023",
        "IVRI 2021",
        "LUVAS 2019"
      ]
    },
    {
      "id": "u1-qa-11",
      "type": "define",
      "marks": 2,
      "question": "Define Metaplasia and Dysplasia with an example of each.",
      "topicId": "u1-t15",
      "answer": "<p><b>Metaplasia</b> is a reversible phenotypic alteration in which one fully differentiated adult cell type (epithelial or mesenchymal) is replaced by another adult cell type better suited to withstand chronic mechanical or chemical irritation.</p><ul><li><i>Example:</i> Squamous metaplasia of pseudostratified ciliated columnar tracheal epithelium to stratified squamous epithelium in chronic Vitamin A deficiency or chronic bronchitis.</li></ul><p><b>Dysplasia</b> is an abnormal, disorderly pattern of cellular proliferation characterised by loss of architectural orientation, cellular pleomorphism, nuclear hyperchromatism, and increased mitotic activity (atypical hyperplasia), often representing a pre-neoplastic change.</p><ul><li><i>Example:</i> Squamous dysplasia of canine respiratory epithelium or cervical mucosa.</li></ul>",
      "keyPoints": [
        "Metaplasia: Reversible substitution of one mature adult cell type by another.",
        "Dysplasia: Disordered cellular growth with loss of polarity and pleomorphism (pre-neoplastic)."
      ],
      "table": null,
      "pyq": [
        "TANUVAS 2022",
        "WBUAFS 2020"
      ]
    },
    {
      "id": "u1-qa-12",
      "type": "define",
      "marks": 2,
      "question": "Define Granuloma and name two characteristic cell types found in it.",
      "topicId": "u1-t17",
      "answer": "<p><b>Granuloma</b> is a distinctive, localized nodular focus of <b>chronic granulomatous inflammation</b> composed of a central core of persistent antigen or necrosis surrounded by an organized aggregation of activated, transformed macrophages, surrounded by a cuff of lymphocytes, plasma cells, and fibrous tissue.</p><p><b>Two Characteristic Cell Types:</b></p><ol><li><b>Epithelioid Macrophages:</b> Activated macrophages with abundant pale pink cytoplasm, oval slipper-shaped vesicular nuclei, resembling squamous epithelial cells.</li><li><b>Multinucleated Giant Cells:</b> Formed by the fusion of macrophages (e.g., <b>Langhans giant cells</b> with horseshoe-shaped peripheral nuclei in tuberculosis, or <b>Foreign body giant cells</b> with haphazardly scattered nuclei).</li></ol>",
      "keyPoints": [
        "Granuloma: Focal organized aggregation of activated macrophages (epithelioid cells).",
        "Key cells: Epithelioid macrophages and Multinucleated giant cells (Langhans/Foreign body)."
      ],
      "table": null,
      "pyq": [
        "IVRI 2023",
        "GADVASU 2022",
        "KVAFSU 2020"
      ]
    },
    {
      "id": "u1-qa-13",
      "type": "short",
      "marks": 5,
      "question": "Describe the cardinal signs of acute inflammation and the vascular events (Triple Response of Lewis).",
      "topicId": "u1-t16",
      "answer": "<p><b>Cardinal Signs of Acute Inflammation:</b></p><ul><li><b>Rubor (Redness):</b> Arteriolar dilatation causing increased local blood flow (active hyperaemia).</li><li><b>Calor (Heat):</b> Increased warm arterial blood perfusion to the peripheral tissue.</li><li><b>Tumor (Swelling):</b> Accumulation of protein-rich fluid exudate in the interstitial space (inflammatory oedema).</li><li><b>Dolor (Pain):</b> Pressure on nerve endings and direct stimulation by bradykinin, PGE2, and histamine.</li><li><b>Functio laesa (Loss of function):</b> Added by Rudolf Virchow; caused by tissue damage, swelling, and pain.</li></ul><p><b>Vascular Events (Triple Response of Lewis):</b></p><ol><li><b>Transient vasoconstriction:</b> Neurogenic arteriolar spasm lasting a few seconds to minutes.</li><li><b>Vasodilatation (Red Line):</b> Relaxation of precapillary sphincters mediated by histamine and nitric oxide (NO).</li><li><b>Flare:</b> Arteriolar dilatation and spreading flush around the injury mediated by axon reflexes.</li><li><b>Wheal:</b> Increased endothelial permeability with escape of plasma proteins, forming localized inflammatory oedema.</li></ol>",
      "keyPoints": [
        "5 Cardinal signs: Rubor (redness), Calor (heat), Tumor (swelling), Dolor (pain), Functio laesa (loss of function).",
        "Triple Response of Lewis: Red line (local capillary dilatation), Flare (arteriolar flush), Wheal (exudation / swelling).",
        "Vasomotor changes: Transient vasoconstriction followed by persistent active vasodilatation and slowing of blood flow (stasis)."
      ],
      "table": null,
      "pyq": [
        "IVRI 2022",
        "TANUVAS 2021",
        "GADVASU 2020"
      ]
    },
    {
      "id": "u1-qa-14",
      "type": "short",
      "marks": 5,
      "question": "Discuss the cellular events of acute inflammation: Margination, pavementing, diapedesis, chemotaxis, and phagocytosis.",
      "topicId": "u1-t17",
      "answer": "<p>The cellular phase of acute inflammation ensures the rapid delivery of leukocytes (principally neutrophils in carnivores, heterophils in birds) to the site of tissue injury:</p><ol><li><b>Margination & Rolling:</b> As blood flow slows (stasis), leukocytes leave the central axial stream and line up along the vascular endothelium. Weak rolling interactions are mediated by <b>selectins</b> (L-selectin on WBCs, P- and E-selectin on endothelial cells).</li><li><b>Adhesion (Pavementing):</b> Leukocytes adhere firmly to endothelial surfaces via high-affinity <b>integrins</b> (LFA-1, Mac-1 on leukocytes binding to ICAM-1 on activated endothelial cells).</li><li><b>Diapedesis (Transmigration):</b> Leukocytes crawl through endothelial intercellular junctions facilitated by <b>PECAM-1 (CD31)</b> and digest the basement membrane via collagenases.</li><li><b>Chemotaxis:</b> Unidirectional migration of leukocytes along a chemical concentration gradient toward the injury locus, guided by <b>chemotactic factors</b> (C5a, LTB4, bacterial peptides like fMLP, IL-8).</li><li><b>Phagocytosis:</b> Three discrete sequential steps:<ul><li><i>Recognition & Attachment:</i> Facilitated by opsonins (IgG, C3b).</li><li><i>Engulfment:</i> Pseudopod formation enclosing the particle into a <b>phagosome</b>, which fuses with lysosomes into a <b>phagolysosome</b>.</li><li><i>Killing & Degradation:</i> Oxygen-dependent killing via <b>NADPH oxidase (respiratory burst)</b> generating superoxide, hydrogen peroxide, and hypochlorous acid (HOCl via myeloperoxidase).</li></ul></li></ol>",
      "keyPoints": [
        "Rolling & Margination mediated by Selectins (L, E, P-selectin).",
        "Firm adhesion (pavementing) mediated by Integrins and ICAM-1.",
        "Transmigration (diapedesis) via PECAM-1 (CD31).",
        "Chemotaxis driven by C5a, LTB4, IL-8, and bacterial formyl peptides.",
        "Phagocytosis: Opsonization, phagolysosome formation, oxidative burst (MPO system)."
      ],
      "table": null,
      "pyq": [
        "GADVASU 2023",
        "IVRI 2021",
        "RAJUVAS 2020"
      ]
    },
    {
      "id": "u1-qa-15",
      "type": "short",
      "marks": 5,
      "question": "Give an account of the chemical mediators of inflammation, categorized by origin and function.",
      "topicId": "u1-t18",
      "answer": "<p>Chemical mediators of inflammation are soluble biochemical messengers that coordinate the vascular and cellular phenomena of acute inflammation:</p><p><b>1. Cell-Derived Mediators:</b></p><ul><li><b>Vasoactive Amines (Histamine & Serotonin):</b> Released preformed from mast cells, basophils, and platelets; cause immediate arteriolar dilatation and venular endothelial contraction (pore formation).</li><li><b>Arachidonic Acid Metabolites (Eicosanoids):</b><ul><li><i>Cyclooxygenase (COX) pathway:</i> Generates <b>Prostaglandins</b> (PGI2 causes vasodilation, PGE2 causes pain and fever, TXA2 causes vasoconstriction/platelet aggregation).</li><li><i>Lipoxygenase (LOX) pathway:</i> Generates <b>Leukotrienes</b> (LTB4 is a potent chemotactic agent; LTC4, LTD4, LTE4 induce severe bronchoconstriction and vascular permeability).</li></ul></li><li><b>Cytokines:</b> TNF-alpha and IL-1 activate endothelia, induce fever, acute phase proteins, and cachexia.</li><li><b>Nitric Oxide (NO):</b> Induces vascular smooth muscle relaxation and microbicidal killing.</li></ul><p><b>2. Plasma-Derived Mediators (Circulate as Inactive Precursors):</b></p><ul><li><b>Complement System:</b> C3a and C5a (anaphylatoxins trigger mast cell histamine release); C5a stimulates chemotaxis; C3b acts as opsonin; C5b-9 (MAC) lyses microbes.</li><li><b>Kinin System:</b> Bradykinin causes potent arteriolar dilatation, vascular permeability, and pain.</li><li><b>Coagulation & Fibrinolytic System:</b> Thrombin promotes leukocyte adhesion; fibrinopeptides increase vascular permeability.</li></ul>",
      "keyPoints": [
        "Cell-derived: Histamine, serotonin (vasoactive amines), Eicosanoids (prostaglandins, leukotrienes), TNF-alpha, IL-1, NO.",
        "Plasma-derived: Complement fragments (C3a, C5a, C3b, MAC), Kinin system (bradykinin), Clotting/fibrinolytic cascade.",
        "Key actions: Vasodilation (histamine, PGI2, NO), Permeability (histamine, bradykinin, LTC4/D4), Chemotaxis (C5a, LTB4), Pain (bradykinin, PGE2)."
      ],
      "table": null,
      "pyq": [
        "TANUVAS 2022",
        "KVAFSU 2021",
        "IVRI 2019"
      ]
    },
    {
      "id": "u1-qa-16",
      "type": "diff",
      "marks": 5,
      "question": "Differentiate between Transudate and Exudate.",
      "topicId": "u1-t04",
      "answer": "<p>Both transudate and exudate represent pathological fluid accumulation in interstitial spaces or body cavities (effusions), but arise from fundamentally different pathogenic mechanisms:</p>",
      "keyPoints": [
        "Transudate: Non-inflammatory, low protein (<3 g/dL), low specific gravity (<1.015), clear, Rivalta negative.",
        "Exudate: Inflammatory, high protein (>3 g/dL), high specific gravity (>1.018), turbid, Rivalta positive.",
        "Transudate caused by altered hydrostatic/oncotic pressures; exudate caused by increased endothelial permeability."
      ],
      "table": {
        "title": "Comparison between Transudate and Exudate",
        "headers": [
          "Criterion",
          "Transudate",
          "Exudate"
        ],
        "rows": [
          [
            "Nature of process",
            "Non-inflammatory disturbance of hemodynamics",
            "Active inflammatory process"
          ],
          [
            "Pathogenesis",
            "Increased hydrostatic pressure OR decreased plasma oncotic pressure",
            "Increased microvascular endothelial permeability due to inflammation"
          ],
          [
            "Appearance",
            "Clear, transparent, watery, straw-coloured",
            "Turbid, cloudy, purulent, fibrinous, or serosanguinous"
          ],
          [
            "Specific gravity",
            "Low (< 1.015)",
            "High (> 1.018)"
          ],
          [
            "Protein content",
            "Low (< 2.5 to 3.0 g/dL), mainly albumin",
            "High (> 3.0 to 4.0 g/dL), rich in globulins and fibrinogen"
          ],
          [
            "Fibrin / Clotting",
            "Absent; does not clot spontaneously on standing",
            "Present; clots readily due to fibrinogen content"
          ],
          [
            "Cell count & type",
            "Low (< 1,000 cells/uL); mostly shed mesothelial cells, few lymphocytes",
            "High (> 5,000 cells/uL); abundant neutrophils, macrophages, cellular debris"
          ],
          [
            "Rivalta test",
            "Negative (no cloudiness with dilute acetic acid)",
            "Positive (forms heavy precipitation precipitate)"
          ],
          [
            "Examples",
            "Ascites in hepatic cirrhosis, brisket oedema in TRP / heart failure",
            "Peritoneal fluid in FIP, pleural fluid in pleuropneumonia, purulent exudate in abscess"
          ]
        ]
      },
      "pyq": [
        "IVRI 2023",
        "GADVASU 2022",
        "WBUAFS 2021",
        "TANUVAS 2020"
      ]
    },
    {
      "id": "u1-qa-17",
      "type": "short",
      "marks": 5,
      "question": "Classify Necrosis with microscopic features and veterinary disease examples.",
      "topicId": "u1-t09",
      "answer": "<p><b>Morphological Classification of Necrosis:</b></p><ol><li><b>Coagulative Necrosis:</b><ul><li><i>Mechanism:</i> Severe ischemia or toxins causing simultaneous denaturation of structural and enzymatic proteins, halting proteolysis.</li><li><i>Microscopic:</i> Basic cell architecture and tissue outlines are preserved as ghost cells; loss of nuclei (pyknosis, karyolysis), cytoplasm stains intensely eosinophilic.</li><li><i>Example:</i> Renal infarcts, myocardial infarction.</li></ul></li><li><b>Liquefactive Necrosis:</b><ul><li><i>Mechanism:</i> Rapid enzymatic digestion and dissolution of necrotic tissue into a liquid viscous mass by hydrolytic enzymes.</li><li><i>Microscopic:</i> Complete disappearance of original tissue architecture replaced by a cavity filled with liquid proteinaceous debris and dead neutrophils (pus).</li><li><i>Example:</i> Hypoxic necrosis in the CNS (malacia) due to high lipid/water content; bacterial pyogenic abscesses.</li></ul></li><li><b>Caseous Necrosis:</b><ul><li><i>Mechanism:</i> Combination of coagulative and liquefactive necrosis caused by organisms with waxy, lipid-rich walls resist enzymatic breakdown.</li><li><i>Gross/Micro:</i> Grossly resembles dry friable crumbly cheese; microscopically appears as structureless, granular, eosinophilic amorphous debris lacking ghost outlines, surrounded by a granulomatous rim.</li><li><i>Example:</i> Bovine tuberculosis (*M. bovis*), Caseous Lymphadenitis in sheep (*C. pseudotuberculosis*).</li></ul></li><li><b>Fat Necrosis:</b><ul><li><i>Mechanism:</i> Lipase release splitting triglycerides into free fatty acids, which combine with calcium to form insoluble soaps (saponification).</li><li><i>Micro/Gross:</i> Chalky white, opaque firm deposits; necrotic adipocytes with smudgy shadowy outlines and basophilic calcium deposits.</li><li><i>Example:</i> Acute necrotizing pancreatitis in dogs, traumatic subcutaneous fat necrosis.</li></ul></li><li><b>Zenker's (Hyaline) Necrosis:</b> Special coagulative necrosis of striated skeletal muscle (e.g., White Muscle Disease in calves, sheep).</li></ol>",
      "keyPoints": [
        "Coagulative: Protein denaturation dominates; ghost cell outlines preserved (infarcts).",
        "Liquefactive: Enzymatic digestion dominates; liquid cavity/pus formed (CNS malacia, abscesses).",
        "Caseous: Cheesy, amorphous granular debris without architecture (Tuberculosis).",
        "Fat necrosis: Pancreatic lipase saponification forming chalky white calcium soaps.",
        "Zenker's necrosis: Waxy hyalinization of striated muscle in Vit E/Se deficiency."
      ],
      "table": null,
      "pyq": [
        "TANUVAS 2023",
        "IVRI 2021",
        "MAFSU 2020"
      ]
    },
    {
      "id": "u1-qa-18",
      "type": "short",
      "marks": 5,
      "question": "Classify Photosensitization into Type I, Type II, and Type III with pathogenesis and examples.",
      "topicId": "u1-t14",
      "answer": "<p><b>Photosensitization</b> is a severe cutaneous inflammatory reaction that develops when light-absorbing chemicals (photodynamic agents) circulate in dermal capillaries and absorb ultraviolet (UV) sunlight, releasing reactive oxygen species that damage cell membranes in unpigmented skin.</p><p><b>1. Type I (Primary Photosensitization):</b></p><ul><li><b>Mechanism:</b> Preformed photodynamic pigments present in ingested plants are directly absorbed intact from the gut into the circulation without requiring hepatic processing.</li><li><b>Examples:</b> Ingestion of <i>Hypericum perforatum</i> (Saint John's wort contains <b>hypericin</b>), <i>Fagopyrum esculentum</i> (Buckwheat contains <b>fagopyrin</b>), or administration of phenothiazine.</li></ul><p><b>2. Type II (Aberrant Pigment Synthesis):</b></p><ul><li><b>Mechanism:</b> Inherited inborn errors of porphyrin metabolism resulting in excessive endogenous accumulation of photodynamic uroporphyrin and coproporphyrin.</li><li><b>Examples:</b> Congenital bovine erythropoietic protoporphyria (pink tooth in calves), feline porphyria.</li></ul><p><b>3. Type III (Hepatogenous / Secondary Photosensitization):</b></p><ul><li><b>Mechanism:</b> Most common and severe form in livestock. Ruminant chlorophyll digestion generates <b>phylloerythrin</b>, which is normally excreted by the liver in bile. In severe hepatopathy or biliary obstruction, phylloerythrin accumulates in the blood and deposits in cutaneous capillaries.</li><li><b>Examples:</b> Ingestion of <i>Lantana camara</i> (lantadene toxicity causing intrahepatic cholestasis), <i>Pithomyces chartarum</i> sporidesmin (facial eczema in sheep), pyrrolizidine alkaloids.</li></ul>",
      "keyPoints": [
        "Pathogenesis: Photodynamic agent in skin capillaries activated by solar UV light causing free radical tissue necrosis in non-pigmented skin.",
        "Type I (Primary): Ingestion of preformed exogenous pigments (Hypericin, Fagopyrin).",
        "Type II (Inborn): Defect in heme synthesis (Congenital porphyria / Pink Tooth).",
        "Type III (Hepatogenous): Hepatic biliary damage prevents phylloerythrin excretion (Lantana, Sporidesmin)."
      ],
      "table": null,
      "pyq": [
        "IVRI 2022",
        "RAJUVAS 2021",
        "GADVASU 2019"
      ]
    },
    {
      "id": "u1-qa-19",
      "type": "short",
      "marks": 5,
      "question": "Write a short note on Pathological Endogenous Pigments: Hemosiderin, Bilirubin, Melanin, and Lipofuscin.",
      "topicId": "u1-t12",
      "answer": "<p>Endogenous pigments are synthesized within the body from normal or altered metabolic pathways:</p><ol><li><b>Hemosiderin:</b><ul><li><i>Source:</i> Golden-yellow to brown, granular iron-storage complex derived from hemoglobin breakdown inside reticuloendothelial macrophages.</li><li><i>Significance:</i> Abundant in areas of chronic hemorrhage and in alveolar macrophages ('heart failure cells') in chronic pulmonary congestion.</li><li><i>Diagnostic Stain:</i> <b>Perls' Prussian Blue</b> reaction stains ferric iron deep vivid blue.</li></ul></li><li><b>Bilirubin:</b><ul><li><i>Source:</i> Yellow-green bile pigment formed by heme degradation; contains no iron.</li><li><i>Significance:</i> Accumulates in blood and tissues when bilirubin exceeds 2 mg/dL, causing yellow discoloration of tissues (jaundice/icterus: pre-hepatic, hepatic, or post-hepatic).</li><li><i>Diagnostic Stain:</i> <b>Fouchet's stain</b> turns bilirubin green.</li></ul></li><li><b>Melanin:</b><ul><li><i>Source:</i> Endogenous brown-black, non-hemoglobin polymer produced by melanocytes via tyrosinase oxidation of tyrosine.</li><li><i>Significance:</i> Normal in skin, hair, and eye; pathological accumulation in melanocytic tumours (melanomas) and melanosis (harmless congenital ectopic melanin in lungs/meninges of sheep/calves).</li><li><i>Diagnostic Stain:</i> <b>Fontana-Masson silver stain</b> stains melanin black.</li></ul></li><li><b>Lipofuscin ('Wear-and-Tear' / Age Pigment):</b><ul><li><i>Source:</i> Insoluble golden-brown, finely granular pigment composed of peroxidized lipid-protein polymers formed by free radical autoxidation of membrane lipids.</li><li><i>Significance:</i> Hallmarks aging and chronic atrophy ('brown atrophy' of heart and liver in aged animals); autofluorescent and acid-fast positive.</li></ul></li></ol>",
      "keyPoints": [
        "Hemosiderin: Golden-brown iron pigment from RBC breakdown; stains blue with Perls' Prussian Blue.",
        "Bilirubin: Yellow-orange non-iron bile pigment; causes jaundice/icterus; stains green with Fouchet's.",
        "Melanin: Brown-black pigment from tyrosine; stains black with Fontana-Masson; melanosis vs melanoma.",
        "Lipofuscin: Yellow-brown 'wear-and-tear' pigment of aging and lipid peroxidation; brown atrophy."
      ],
      "table": null,
      "pyq": [
        "IVRI 2023",
        "TANUVAS 2020",
        "KVAFSU 2019"
      ]
    },
    {
      "id": "u1-qa-20",
      "type": "diff",
      "marks": 5,
      "question": "Differentiate wound healing by First Intention (Primary Union) and Second Intention (Secondary Union).",
      "topicId": "u1-t20",
      "answer": "<p>Wound healing follows two distinct clinical and pathological patterns based on the degree of tissue loss and clean apposition of wound margins:</p>",
      "keyPoints": [
        "First intention: Clean, closely apposed surgical incised wounds, minimal tissue deficit, minimal scarring.",
        "Second intention: Extensive tissue defect, open gaping margins, abundant granulation tissue, wound contraction, prominent scar.",
        "Myofibroblasts play a critical role in second intention wound contraction."
      ],
      "table": {
        "title": "Comparison between Healing by First and Second Intention",
        "headers": [
          "Criterion",
          "First Intention (Primary Union)",
          "Second Intention (Secondary Union)"
        ],
        "rows": [
          [
            "Wound type",
            "Clean, uninfected, linear surgical incision (scalpel cut)",
            "Traumatic wound, laceration, ulcer, infected or avulsed tissue"
          ],
          [
            "Edge apposition",
            "Margins closely apposed by sutures, staples, or adhesive",
            "Edges separated, gaping; extensive physical tissue defect"
          ],
          [
            "Tissue loss",
            "Minimal tissue loss",
            "Extensive loss of parenchymal and stromal tissue"
          ],
          [
            "Necrotic debris & clot",
            "Minimal clot; narrow fibrin band fills gap",
            "Large voluminous blood clot, abundant necrotic tissue and exudate"
          ],
          [
            "Inflammatory response",
            "Mild, transient acute inflammation",
            "Intense, prolonged acute and chronic inflammation"
          ],
          [
            "Granulation tissue",
            "Small amount, confined to narrow incision plane",
            "Profuse, exuberant granulation tissue fills bottom-up"
          ],
          [
            "Wound contraction",
            "Negligible or absent",
            "Marked (myofibroblasts reduce wound surface area by 70–80%)"
          ],
          [
            "Healing time",
            "Rapid (sutures removed in 7–10 days)",
            "Slow, prolonged (weeks to months)"
          ],
          [
            "Scarring & deformity",
            "Hairline, minimal, neat scar with minimal cosmetic defect",
            "Large, irregular, puckered scar; risk of contracture or Proud Flesh (horses)"
          ]
        ]
      },
      "pyq": [
        "GADVASU 2023",
        "TANUVAS 2021",
        "IVRI 2020"
      ]
    },
    {
      "id": "u1-qa-21",
      "type": "long",
      "marks": 12,
      "question": "Describe in detail the phenomenon of Acute Inflammation: Vascular changes, cellular events, chemical mediators, and outcomes/termination.",
      "topicId": "u1-t16",
      "answer": "<p><b>Definition:</b> Acute inflammation is the immediate, non-specific, stereotyped defense reaction of vascularized living tissue to local injury, designed to deliver leukocytes and plasma proteins to the site of injury to eliminate the offending agent and initiate repair.</p>\n\n<h3>1. Vascular Changes</h3>\n<p>The vascular response consists of alterations in vessel caliber, blood flow velocity, and microvascular permeability:</p>\n<ul>\n  <li><b>Initial transient vasoconstriction:</b> Arteriolar spasm lasting seconds, mediated by neurogenic reflexes and endothelin.</li>\n  <li><b>Persistent arteriolar vasodilatation:</b> Mediated by histamine, NO, and prostaglandins. This increases blood flow, engorging the capillary bed (<b>active hyperaemia</b>), generating warmth (<i>calor</i>) and redness (<i>rubor</i>).</li>\n  <li><b>Slowing of circulation (Stasis):</b> Increased microvascular permeability allows fluid escape, concentrating erythrocytes (haemoconcentration) and drastically increasing blood viscosity.</li>\n  <li><b>Increased Microvascular Permeability:</b> The hallmark of acute inflammation. Mechanisms include:\n    <ul>\n      <li><i>Endothelial cell contraction:</i> Immediate transient response (15–30 min) in venules mediated by histamine, bradykinin, and leukotrienes creating intercellular gaps.</li>\n      <li><i>Direct endothelial injury:</i> Immediate sustained response seen in burns or severe infections affecting arterioles, capillaries, and venules with endothelial necrosis.</li>\n      <li><i>Leukocyte-mediated vascular injury:</i> Neutrophils release reactive oxygen species (ROS) and proteases that detach endothelial cells.</li>\n    </ul>\n  </li>\n</ul>\n\n<h3>2. Cellular Events (Leukocyte Extravasation)</h3>\n<p>The cellular sequence is divided into five distinct stages:</p>\n<ol>\n  <li><b>Margination:</b> Slowing of flow causes white cells to leave the central axial stream and line up along endothelial surfaces.</li>\n  <li><b>Rolling:</b> Leukocytes loosely bind and detach from endothelial selectins (L-selectin on WBCs; E- and P-selectin on endothelia).</li>\n  <li><b>Adhesion:</b> High-affinity firm binding of leukocyte <b>integrins (LFA-1, Mac-1)</b> to endothelial <b>ICAM-1 and VCAM-1</b>, stimulated by chemokines.</li>\n  <li><b>Transmigration (Diapedesis):</b> Leukocytes crawl through inter-endothelial junctions mediated by <b>PECAM-1 (CD31)</b> and traverse the basement membrane via secretion of matrix metalloproteinases.</li>\n  <li><b>Chemotaxis:</b> Directional migration of leukocytes along a concentration gradient of chemoattractants (C5a, LTB4, bacterial formyl peptides, IL-8).</li>\n  <li><b>Phagocytosis & Killing:</b>\n    <ul>\n      <li><i>Recognition:</i> Opsonins (IgG, C3b) bind to leukocyte Fc and CR1 receptors.</li>\n      <li><i>Engulfment:</i> Pseudopods form a phagosome, which fuses with primary and secondary lysosomes to form a <b>phagolysosome</b>.</li>\n      <li><i>Intracellular Destruction:</i> Oxygen-dependent killing via activation of membrane-bound <b>NADPH oxidase</b> (respiratory burst), producing superoxide radical ($O_2^{\\bullet-}$), hydrogen peroxide ($H_2O_2$), and hypochlorous acid ($HOCl$) via the myeloperoxidase (MPO) enzyme system.</li>\n    </ul>\n  </li>\n</ol>\n\n<h3>3. Chemical Mediators of Acute Inflammation</h3>\n<ul>\n  <li><b>Vasoactive Amines:</b> Histamine (mast cells) and serotonin (platelets) trigger immediate vasodilation and increased venular permeability.</li>\n  <li><b>Arachidonic Acid Metabolites:</b>\n    <ul>\n      <li><i>COX pathway:</i> $PGE_2$ (fever, pain, vasodilation), $PGI_2$ (vasodilation, inhibits platelet aggregation), $TXA_2$ (vasoconstriction, promotes platelet aggregation).</li>\n      <li><i>LOX pathway:</i> $LTB_4$ (potent chemotaxis), $LTC_4, LTD_4, LTE_4$ (vasoconstriction, bronchospasm, permeability).</li>\n    </ul>\n  </li>\n  <li><b>Complement Fragments:</b> $C3a$ and $C5a$ (anaphylatoxins), $C5a$ (chemotaxis), $C3b$ (opsonization), $C5b-9$ (membrane attack complex).</li>\n  <li><b>Kinins:</b> Bradykinin causes marked arteriolar dilatation, vascular permeability, and pain.</li>\n  <li><b>Cytokines:</b> $TNF-\\alpha$ and $IL-1$ induce systemic acute-phase reactions (fever, leukocytosis, cachexia).</li>\n</ul>\n\n<h3>4. Outcomes / Fate of Acute Inflammation</h3>\n<ol>\n  <li><b>Complete Resolution:</b> Restoration of normal tissue structure and function when injury is short-lived with minimal tissue destruction and regenerative parenchymal cells.</li>\n  <li><b>Healing by Fibrosis / Organization:</b> Occurs after substantial tissue destruction, in tissues that cannot regenerate, or when fibrinous exudate cannot be cleared; granulation tissue matures into a fibrous scar.</li>\n  <li><b>Abscess Formation:</b> Walled-off collection of purulent exudate (pus) surrounded by fibrous capsule in infections with pyogenic bacteria (<i>Staphylococcus</i>, <i>Streptococcus</i>).</li>\n  <li><b>Progression to Chronic Inflammation:</b> Persistence of the injurious agent or failure to resolve the acute process.</li>\n</ol>",
      "keyPoints": [
        "Definition: Immediate stereotyped defense reaction delivering leukocytes and antibodies to injured tissue.",
        "Vascular events: Transient vasoconstriction -> Active vasodilation (hyperaemia) -> Stasis -> Increased permeability (endothelial gaps).",
        "Cellular events: Margination -> Rolling (Selectins) -> Adhesion (Integrins/ICAM-1) -> Diapedesis (PECAM-1) -> Chemotaxis (C5a, LTB4) -> Phagocytosis (MPO-H2O2 system).",
        "Chemical mediators: Histamine, eicosanoids (prostaglandins/leukotrienes), complement (C3a, C5a, C3b), bradykinin, TNF-alpha, IL-1.",
        "Outcomes: Complete resolution, healing by scar/fibrosis, abscess formation, or transition to chronic inflammation."
      ],
      "table": null,
      "pyq": [
        "IVRI 2023",
        "TANUVAS 2022",
        "GADVASU 2021",
        "RAJUVAS 2020"
      ]
    },
    {
      "id": "u1-qa-22",
      "type": "long",
      "marks": 12,
      "question": "Discuss the pathogenesis, classification, Starling forces disruption, gross and microscopic features of Oedema in domestic animals.",
      "topicId": "u1-t04",
      "answer": "<p><b>Definition:</b> Oedema is the abnormal, excessive accumulation of fluid in the interstitial tissue spaces or serous cavities of the body. When present in serous body cavities, it is designated as <i>ascites</i> (peritoneal cavity), <i>hydrothorax</i> (pleural cavity), or <i>hydropericardium</i> (pericardial sac). Generalized, massive subcutaneous oedema is termed <b>anasarca</b>.</p>\n\n<h3>1. Starling's Hypothesis and Hemodynamic Pathogenesis</h3>\n<p>Normally, fluid movement across capillary membranes is governed by Starling forces in equilibrium:</p>\n<p style=\"text-align:center;\">$$\\text{Net Filtration Pressure} = [(P_c - P_i) - (\\pi_c - \\pi_i)]$$</p>\n<p>Where $P_c$ is capillary hydrostatic pressure, $P_i$ is interstitial hydrostatic pressure, $\\pi_c$ is capillary oncotic pressure, and $\\pi_i$ is interstitial oncotic pressure. Fluid escaping at the arterial end is balanced by venous reabsorption and lymphatic drainage. Oedema results from disruption of these forces:</p>\n\n<ol>\n  <li><b>Increased Capillary Hydrostatic Pressure ($P_c$):</b>\n    <ul>\n      <li><i>Localized:</i> Impaired venous outflow due to thrombosis, external mass compression, or tourniquets.</li>\n      <li><i>Generalized:</i> Congestive heart failure (CHF). In right-sided heart failure, systemic venous hypertension causes fluid extravasation into dependent tissue (brisket oedema and bottle jaw in cattle; ascites in dogs).</li>\n    </ul>\n  </li>\n  <li><b>Decreased Plasma Colloidal Oncotic Pressure ($\\pi_c$):</b>\n    <ul>\n      <li>Results from severe hypoproteinaemia (albumin < 1.5 to 2.0 g/dL). Albumin accounts for 80% of plasma oncotic pull.</li>\n      <li><i>Causes:</i> Protein-losing nephropathy (glomerulonephritis, amyloidosis), severe protein-losing enteropathy (Johne's disease, severe helminthiasis like haemonchosis), reduced hepatic albumin synthesis (cirrhosis), and starvation/malnutrition.</li>\n    </ul>\n  </li>\n  <li><b>Increased Microvascular Permeability:</b>\n    <ul>\n      <li>Direct endothelial injury or contraction of endothelial cells during inflammation, chemical burns, endotoxaemia, and anaphylaxis, permitting proteins to enter the interstitium (Exudative oedema).</li>\n    </ul>\n  </li>\n  <li><b>Lymphatic Obstruction (Lymphedema):</b>\n    <ul>\n      <li>Impaired lymphatic drainage caused by neoplastic cell emboli, surgical lymphadenectomy, or chronic granulomatous lymphadenitis, preventing return of interstitial fluid and macromolecules.</li>\n    </ul>\n  </li>\n  <li><b>Sodium and Water Retention:</b>\n    <ul>\n      <li>Renal hypoperfusion activates the <b>Renin-Angiotensin-Aldosterone System (RAAS)</b>, stimulating tubular sodium and water retention, expanding plasma volume and elevating $P_c$.</li>\n    </ul>\n  </li>\n</ol>\n\n<h3>2. Pathological Classification of Oedema</h3>\n<ul>\n  <li><b>Transudative Oedema:</b> Low protein (<2.5 g/dL), low specific gravity (<1.015), non-inflammatory, caused by altered Starling pressures.</li>\n  <li><b>Exudative Oedema:</b> High protein (>3.0 g/dL), high specific gravity (>1.018), inflammatory, caused by endothelial barrier breakdown.</li>\n  <li><b>Dependent / Gravitational Oedema:</b> Pools in low anatomical points (ventral abdomen, limbs, submandibular space).</li>\n</ul>\n\n<h3>3. Gross Pathology</h3>\n<ul>\n  <li><b>Subcutaneous tissue:</b> Swollen, doughy, cool to touch, retains indentation when pressed with a finger (<b>pitting oedema</b>). On incising, fluid pours out; subcutis appears gelatinous and glistening.</li>\n  <li><b>Pulmonary Oedema:</b> Lungs are heavy, wet, subcrepitant, fail to collapse on opening the thorax. On section, abundant foamy, blood-tinged fluid oozes from parenchyma and fills bronchi and trachea. Interlobular septa are widened and gelatinous (prominent in cattle and pigs).</li>\n  <li><b>Brain Oedema:</b> Gyri are flattened, sulci narrowed, brain is swollen and pale. Herniation of the cerebellar vermis through the foramen magnum forms a 'coning' deformity.</li>\n</ul>\n\n<h3>4. Histopathology</h3>\n<ul>\n  <li>Intercellular spaces are widened by pale pink, amorphous, homogenous, proteinaceous fluid (H&E).</li>\n  <li>Collagen fibres and bundles are separated and unravelled.</li>\n  <li>Lymphatic vessels and venules are prominently dilated and cleared of erythrocytes.</li>\n  <li>In the lung, alveoli are filled with pink, homogenous fluid, often containing scattered foamy macrophages.</li>\n</ul>",
      "keyPoints": [
        "Definition: Excessive accumulation of fluid in interstitium or serous body cavities (ascites, hydrothorax, hydropericardium, anasarca).",
        "Pathogenic mechanisms: 1. Increased hydrostatic pressure (CHF), 2. Decreased oncotic pressure (hypoalbuminemia/haemonchosis), 3. Increased permeability (inflammation), 4. Lymphatic obstruction, 5. Sodium retention (RAAS).",
        "Gross features: Pitting oedema of subcutis; heavy wet uncollapsed lungs with frothy tracheal fluid; flattened cerebral gyri with cerebellar coning.",
        "Microscopic features: Pale eosinophilic amorphous fluid separating collagen fibers and filling pulmonary alveoli; dilated lymphatic vessels."
      ],
      "table": null,
      "pyq": [
        "IVRI 2022",
        "TANUVAS 2021",
        "GADVASU 2020",
        "WBUAFS 2019"
      ]
    },
    {
      "id": "u1-qa-23",
      "type": "long",
      "marks": 12,
      "question": "Describe Disturbances of Circulation: Thrombosis, Embolism, and Infarction — Etiology, pathogenesis, lines of Zahn, types, and systemic consequences.",
      "topicId": "u1-t05",
      "answer": "<p>Circulatory disturbances encompass a continuum of intravascular solid clot formation (thrombosis), dislodgement and transport (embolism), and resulting downstream ischemic tissue death (infarction).</p>\n\n<h3>1. Thrombosis</h3>\n<p><b>Definition:</b> In-vivo formation of an intravascular solid or semi-solid aggregate of blood constituents within the heart or vascular lumen during life.</p>\n<p><b>Etiopathogenesis (Virchow's Triad):</b></p>\n<ol>\n  <li><b>Endothelial Injury:</b> Most important determinant in heart and arteries. Loss of endothelium exposes subendothelial collagen and von Willebrand factor (vWF), triggering platelet adherence, tissue factor release, and loss of natural anti-thrombotics ($PGI_2$, antithrombin III, thrombomodulin). Causes: vasculitis, septicemia, needle trauma, parasite migration (<i>Strongylus vulgaris</i> in equine mesenteric arteries).</li>\n  <li><b>Altered Blood Flow:</b>\n    <ul>\n      <li><i>Stasis:</i> Major factor in veins. Allows platelets to contact endothelium, prevents dilution and hepatic clearance of activated clotting factors.</li>\n      <li><i>Turbulence:</i> Major factor in arterial aneurysms or heart valves, causing countercurrents and focal endothelial injury.</li>\n    </ul>\n  </li>\n  <li><b>Hypercoagulability:</b> Increased procoagulants or decreased anticoagulants. Seen in nephrotic syndrome (loss of antithrombin III in urine), dehydration, endotoxaemia, and neoplasia.</li>\n</ol>\n<p><b>Morphology & Lines of Zahn:</b> Thrombi formed in flowing blood exhibit gross and microscopic alternating pale laminations of platelets and fibrin interspersed with darker layers rich in red blood cells. These alternating bands are known as the <b>Lines of Zahn</b> (distinguishes ante-mortem thrombi from post-mortem clots).</p>\n<p><b>Types of Thrombi:</b></p>\n<ul>\n  <li><i>Arterial (White) Thrombi:</i> Formed in high-flow systems; firm, dry, friable, grey-white, non-occlusive initially, composed mostly of platelets and fibrin.</li>\n  <li><i>Venous (Red / Phlebothrombi):</i> Formed in slow-flow veins; soft, dark red, occlusive, long trailing cast composed of red blood cells trapped in fibrin meshes.</li>\n  <li><i>Mural Thrombi:</i> Attached to the cavity wall of the heart or aorta without completely occluding the lumen.</li>\n  <li><i>Occlusive Thrombi:</i> Completely blocking the vascular lumen.</li>\n  <li><i>Vegetative Thrombi:</i> Cauliflower-like nodular thrombi on heart valves in bacterial endocarditis.</li>\n</ul>\n<p><b>Fate of Thrombus:</b> Propagation (growing), Embolization (breaking off), Dissolution (fibrinolysis by plasmin), or Organization and Recanalization (ingrowth of fibroblasts and capillaries re-establishing a new lumen).</p>\n\n<h3>2. Embolism</h3>\n<p><b>Definition:</b> The carriage of an intravascular detached solid, liquid, or gaseous physical mass by the blood to a site distant from its origin, where it lodges and obstructs blood flow.</p>\n<p><b>Types of Emboli:</b></p>\n<ul>\n  <li><b>Thromboemboli:</b> Most common; detached fragments of a thrombus (e.g., feline aortic 'saddle' thromboembolism lodged at the iliac trifurcation in hypertrophic cardiomyopathy).</li>\n  <li><b>Parasitic Emboli:</b> Migrating larvae (<i>Strongylus vulgaris</i>, <i>Dirofilaria immitis</i>) causing verminous arteritis and thrombosis.</li>\n  <li><b>Fat Emboli:</b> Globules of marrow fat released following long bone fractures.</li>\n  <li><b>Air/Gas Emboli:</b> Air accidentally introduced via IV catheters or decompression sickness.</li>\n  <li><b>Bacterial / Septic Emboli:</b> Fragments of vegetative endocarditis scattering micro-abscesses to kidneys, lungs, and spleen.</li>\n</ul>\n\n<h3>3. Infarction</h3>\n<p><b>Definition:</b> An area of ischemic coagulative necrosis in an organ or tissue resulting from acute arterial occlusion or severe venous outflow obstruction.</p>\n<p><b>Types of Infarction:</b></p>\n<ul>\n  <li><b>White (Pale) Infarctions:</b> Occur with arterial occlusions in solid parenchymal organs with end-arterial supply (kidney, heart, spleen). Tissue turgor prevents collateral hemorrhage; grossly wedge-shaped with apex pointing toward the occluded vessel, base at organ capsule, sharply demarcated by a hyperaemic ring. Microscopically shows coagulative ghost cells.</li>\n  <li><b>Red (Haemorrhagic) Infarctions:</b> Occur in loose, vascular tissues with dual or collateral supply (lungs, intestines) or after venous occlusion (intestinal volvulus/strangulation). Blood seeps into the necrotic bed from collaterals; organ appears swollen, dark purplish-black, oozing blood.</li>\n</ul>\n<p><b>Systemic Consequences:</b> Severe pain, loss of organ function, release of cardiac enzymes (troponins, CK-MB), gangrene in strangulated intestine, septic shock, and death.</p>",
      "keyPoints": [
        "Thrombosis: Solid clot formed during life inside lumen; Virchow's Triad (endothelial injury, altered flow, hypercoagulability).",
        "Lines of Zahn: Alternating layers of pale platelets/fibrin and dark RBCs; hallmark of ante-mortem arterial/cardiac thrombus.",
        "Fate of thrombus: Propagation, embolization, dissolution (plasmin), organization & recanalization.",
        "Embolism: Detached intravascular mass carried to distant vessel; thromboemboli (feline saddle thrombus), parasitic, fat, bacterial.",
        "Infarction: Ischemic coagulative necrosis; White (pale/anemic) in solid organs (kidney, heart); Red (hemorrhagic) in loose/dual-circulation organs (lung, gut)."
      ],
      "table": null,
      "pyq": [
        "IVRI 2023",
        "GADVASU 2022",
        "TANUVAS 2021",
        "KVAFSU 2020"
      ]
    },
    {
      "id": "u1-qa-24",
      "type": "long",
      "marks": 12,
      "question": "Describe the mechanisms of Cell Injury: Reversible vs Irreversible injury, hypoxic/ischemic cascade, free radical injury, and morphology of cellular degeneration and necrosis.",
      "topicId": "u1-t08",
      "answer": "<p>Cell injury occurs when environmental stresses exceed the adaptive capacity of the cell, disrupting normal cellular homeostasis.</p>\n\n<h3>1. Pathogenesis of Hypoxic and Ischemic Cell Injury</h3>\n<p>Hypoxia (deficiency of oxygen) and ischemia (loss of arterial blood supply) are the most common causes of cell injury:</p>\n<ol>\n  <li><b>Mitochondrial Failure & ATP Depletion:</b> Oxygen lack halts oxidative phosphorylation in inner mitochondrial membranes. ATP levels plummet.</li>\n  <li><b>Failure of Plasma Membrane $Na^+/K^+$ ATPase Pump:</b> Inability to pump $Na^+$ out leads to intracellular accumulation of sodium and passive osmotic influx of water, producing acute <b>cellular swelling (hydropic degeneration / cloudy swelling)</b> and dilatation of the endoplasmic reticulum.</li>\n  <li><b>Shift to Anaerobic Glycolysis:</b> Decreased ATP stimulates phosphofructokinase, accelerating glycolysis. Glycogen stores are rapidly exhausted, accumulating lactic acid and inorganic phosphates. Intracellular pH drops (acidosis), causing chromatin clumping and enzyme inactivation.</li>\n  <li><b>Detachment of Ribosomes:</b> Structural swelling of the rough endoplasmic reticulum causes ribosomal detachment, resulting in failure of protein synthesis.</li>\n  <li><b>Point of No Return (Transition to Irreversible Injury):</b>\n    <ul>\n      <li><i>Irreversible mitochondrial damage:</i> Opening of the high-conductance <b>mitochondrial permeability transition pore (MPTP)</b>, collapsing mitochondrial membrane potential and releasing pro-apoptotic cytochrome c.</li>\n      <li><i>Massive Intracellular Calcium Influx:</i> Failure of $Ca^{2+}$-ATPase pumps allows extracellular calcium to flood the cytosol. High cytosolic $Ca^{2+}$ activates destructive intracellular enzymes: <b>phospholipases</b> (destroy cell membranes), <b>proteases</b> (disassemble cytoskeletal architecture), <b>ATPases</b> (accelerate ATP destruction), and <b>endonucleases</b> (chromatin fragmenting).</li>\n      <li><i>Plasma membrane rupture:</i> Cell contents leak into extracellular space, inciting an inflammatory reaction.</li>\n    </ul>\n  </li>\n</ol>\n\n<h3>2. Free Radical-Mediated Injury (Oxidative Stress)</h3>\n<p>Reactive Oxygen Species (ROS) such as superoxide ($O_2^{\\bullet-}$), hydrogen peroxide ($H_2O_2$), and hydroxyl radical ($OH^\\bullet$) cause cellular pathology through three primary reactions:</p>\n<ul>\n  <li><b>Lipid Peroxidation of Membranes:</b> Free radicals attack double bonds of polyunsaturated fatty acids (PUFAs) in membranes, generating self-propagating peroxides that rupture membranes (e.g., Mulberry Heart Disease in pigs, carbon tetrachloride toxicity).</li>\n  <li><b>Oxidative Modification of Proteins:</b> Oxidation of sulfhydryl groups damages active enzymatic sites and structural proteins.</li>\n  <li><b>DNA Damage:</b> Free radicals react with thymine, causing single- and double-strand breaks, leading to mutations or apoptosis.</li>\n  <li><i>Antioxidant defense systems:</i> Superoxide dismutase (SOD), catalase, glutathione peroxidase (selenium-dependent), Vitamin E (alpha-tocopherol), and Vitamin C.</li>\n</ul>\n\n<h3>3. Morphology of Reversible Cell Injury (Degenerations)</h3>\n<ul>\n  <li><b>Cloudy Swelling / Hydropic Degeneration:</b>\n    <ul>\n      <li><i>Gross:</i> Organ is enlarged, swollen, pale, rounded edges, dull on cut surface.</li>\n      <li><i>Microscopic:</i> Cells are enlarged, pale, cytoplasm is filled with fine granules or clear vacuoles (distended ER/mitochondria); nucleus is central and intact.</li>\n    </ul>\n  </li>\n  <li><b>Fatty Change (Steatosis):</b>\n    <ul>\n      <li>Abnormal accumulation of triglycerides within parenchymal cells (liver, heart).</li>\n      <li><i>Gross:</i> Liver is enlarged, soft, friable, greasy, yellow-orange with rounded edges; floats in water or formalin in severe cases.</li>\n      <li><i>Microscopic:</i> Clear round lipid vacuoles in cytoplasm displacing the nucleus to the periphery; positive with <b>Oil Red O</b> or <b>Sudan III</b> on frozen sections.</li>\n    </ul>\n  </li>\n</ul>\n\n<h3>4. Morphology of Irreversible Injury (Necrosis)</h3>\n<ul>\n  <li><b>Cytoplasmic Changes:</b> Increased eosinophilia (binding of eosin to denatured proteins), glassy homogenous appearance, and calcification.</li>\n  <li><b>Nuclear Changes:</b> Pathognomonic triad:\n    <ol>\n      <li><b>Pyknosis:</b> Nuclear condensation into a small, dense, shrunken, hyperchromatic black sphere.</li>\n      <li><b>Karyorrhexis:</b> Fragmentation and rupture of the pyknotic nucleus into basophilic dust.</li>\n      <li><b>Karyolysis:</b> Complete enzymatic dissolution of the chromatin by DNase, leaving only a ghost outline.</li>\n    </ol>\n  </li>\n</ul>",
      "keyPoints": [
        "Hypoxic cascade: Lack of O2 -> Mitochondrial ATP depletion -> Na+/K+ pump failure -> Influx of water & Ca2+ -> Cellular swelling.",
        "Point of no return: Opening of MPTP pore, massive Ca2+ influx activating phospholipases/proteases/endonucleases, membrane rupture.",
        "Free radical injury: Lipid peroxidation of PUFAs, protein cross-linking, DNA strand breaks; quenched by SOD, catalase, glutathione peroxidase.",
        "Reversible morphology: Hydropic swelling (cloudy swelling), fatty change (steatosis, Oil Red O positive).",
        "Irreversible morphology: Increased eosinophilia, membrane lysis, nuclear triad (Pyknosis, Karyorrhexis, Karyolysis)."
      ],
      "table": null,
      "pyq": [
        "IVRI 2023",
        "GADVASU 2022",
        "TANUVAS 2020",
        "RAJUVAS 2019"
      ]
    },
    {
      "id": "u1-qa-25",
      "type": "long",
      "marks": 12,
      "question": "Classify Hypersensitivity Reactions according to Coombs and Gell (Types I, II, III, and IV) with detailed immunological mechanisms, veterinary examples, and lesions.",
      "topicId": "u1-t21",
      "answer": "<p><b>Definition:</b> Hypersensitivity describes an exaggerated, inappropriate, or harmful immune reaction mounted by a previously sensitized host against an antigen (allergen), resulting in tissue damage, inflammation, or death rather than protection.</p>\n\n<p>P.G.H. Gell and R.R.A. Coombs classified hypersensitivity reactions into four classical types:</p>\n\n<h3>1. Type I Hypersensitivity (Immediate / Anaphylactic)</h3>\n<ul>\n  <li><b>Immunological Mechanism:</b>\n    <ul>\n      <li>Antigen binds to antigen-presenting cells, activating $Th_2$ helper cells that secrete $IL-4$ and $IL-13$, driving B-cells to produce <b>IgE antibodies</b>.</li>\n      <li>IgE binds with high affinity to $Fc\\epsilon RI$ receptors on the surface of tissue mast cells and circulating basophils (sensitization).</li>\n      <li>Re-exposure cross-links membrane-bound IgE, triggering rapid <b>degranulation</b>:\n        <ul>\n          <li><i>Immediate response (minutes):</i> Release of preformed histamine, serotonin, and heparin (vasodilation, venular permeability, smooth muscle contraction).</li>\n          <li><i>Late-phase response (2–8 hours):</i> Synthesis of eicosanoids ($LTC_4, LTD_4$, $PGD_2$) and cytokines attracting eosinophils and neutrophils.</li>\n        </ul>\n      </li>\n    </ul>\n  </li>\n  <li><b>Veterinary Disease Examples:</b> Systemic anaphylactic shock following penicillin injection or vaccination in calves; Atopic dermatitis and flea allergy dermatitis in dogs; Feline asthma (acute bronchospasm); Urticaria / Hives in horses.</li>\n</ul>\n\n<h3>2. Type II Hypersensitivity (Cytotoxic / Antibody-Mediated)</h3>\n<ul>\n  <li><b>Immunological Mechanism:</b> Mediated by <b>IgG or IgM antibodies</b> directed against target antigens present on cell surfaces or in the extracellular matrix. Damage occurs via three pathways:\n    <ol>\n      <li><i>Complement-mediated lysis:</i> Classical complement pathway activation leads to Membrane Attack Complex ($C5b-9$) formation and direct cell lysis.</li>\n      <li><i>Opsonization and phagocytosis:</i> $C3b$ and Fc fragments opsonize RBCs for clearance by splenic macrophages.</li>\n      <li><i>Antibody-Dependent Cellular Cytotoxicity (ADCC):</i> NK cells and macrophages bind antibody Fc regions and release perforins/granzymes.</li>\n    </ol>\n  </li>\n  <li><b>Veterinary Disease Examples:</b> Neonatal Isoerythrolysis (NI) in foals and piglets (maternal colostral antibodies destroying foal RBCs); Canine Immune-Mediated Hemolytic Anemia (IMHA); Incompatible blood transfusion reactions; Pemphigus vulgaris (antibodies against desmoglein-3).</li>\n</ul>\n\n<h3>3. Type III Hypersensitivity (Immune Complex-Mediated)</h3>\n<ul>\n  <li><b>Immunological Mechanism:</b>\n    <ul>\n      <li>Soluble antigen reacts with circulating antibodies (IgG or IgM) in slight antigen excess, forming circulating <b>antigen-antibody immune complexes</b>.</li>\n      <li>Intermediate-sized immune complexes escape reticuloendothelial clearance and deposit in vascular basement membranes of high-filtration beds (renal glomeruli, synovia, dermal vessels).</li>\n      <li>Deposited complexes fix complement, generating $C5a$ and $C3a$, which recruit neutrophils. Neutrophils release lysosomal proteases and reactive oxygen species, inducing <b>acute necrotizing vasculitis and fibrinoid necrosis</b>.</li>\n    </ul>\n  </li>\n  <li><b>Veterinary Disease Examples:</b>\n    <ul>\n      <li>'Blue eye' (corneal oedema and anterior uveitis) in dogs infected with Canine Adenovirus-1 (ICH).</li>\n      <li>Glomerulonephritis associated with Dirofilaria immitis or Feline Leukemia Virus.</li>\n      <li>Wet form of Feline Infectious Peritonitis (FIP) (immune-complex vasculitis and effusion).</li>\n      <li>Systemic Lupus Erythematosus (SLE) and purpura haemorrhagica in horses following Strangles.</li>\n    </ul>\n  </li>\n</ul>\n\n<h3>4. Type IV Hypersensitivity (Delayed-Type / Cell-Mediated)</h3>\n<ul>\n  <li><b>Immunological Mechanism:</b> Antibody-independent; mediated exclusively by <b>sensitized T-lymphocytes ($CD4^+ Th_1$ and $CD8^+$ cytotoxic T-cells)</b>. Takes 24 to 72 hours to manifest:\n    <ul>\n      <li>Antigen presented by dendritic cells activates $Th_1$ cells, which secrete <b>Interferon-gamma (IFN-gamma)</b>, IL-2, and TNF-alpha.</li>\n      <li>IFN-gamma potently activates macrophages, transforming them into aggressive phagocytic cells that fuse into epithelioid cells and multinucleated giant cells, forming a <b>chronic granuloma</b>.</li>\n      <li>$CD8^+$ cytotoxic T-lymphocytes directly kill antigen-bearing cells via perforin and granzymes.</li>\n    </ul>\n  </li>\n  <li><b>Veterinary Disease Examples:</b>\n    <ul>\n      <li><b>Tuberculin intradermal reaction:</b> Diagnostic test for bovine tuberculosis (swelling read at 72 hours).</li>\n      <li><b>Mallein test:</b> Intra-palpebral test for Glanders in equines.</li>\n      <li>Granulomatous lesions in Bovine Tuberculosis, Johne's Disease, and Deep Mycoses.</li>\n      <li>Allergic contact dermatitis (flea collar dermatitis, poison ivy).</li>\n    </ul>\n  </li>\n</ul>",
      "keyPoints": [
        "Type I (Immediate): IgE-mast cell degranulation; histamine/leukotriene release; anaphylaxis, atopy, flea allergy, feline asthma.",
        "Type II (Cytotoxic): IgG/IgM against cell surfaces; complement lysis and ADCC; Neonatal Isoerythrolysis (foals), IMHA, Pemphigus.",
        "Type III (Immune Complex): Circulating Ag-Ab complexes deposited in vessel walls; complement activation, neutrophil influx, fibrinoid necrotizing vasculitis; Blue eye (ICH), Glomerulonephritis, FIP effusions.",
        "Type IV (Delayed / Cell-mediated): Sensitized Th1/CD8+ T-cells secrete IFN-gamma; macrophage activation and granuloma formation; Tuberculin and Mallein diagnostic tests, Johne's disease."
      ],
      "table": null,
      "pyq": [
        "IVRI 2023",
        "TANUVAS 2022",
        "GADVASU 2021",
        "MAFSU 2020"
      ]
    }
  ],
  "unit-2": [
    {
      "id": "u2-qa-01",
      "type": "define",
      "marks": 2,
      "question": "Define Traumatic Reticuloperitonitis (TRP) and name its principal thoracic complication.",
      "topicId": "u2-t01",
      "answer": "<p><b>Traumatic Reticuloperitonitis (TRP)</b>, or 'Hardware Disease', is a clinical and pathological condition in ruminants caused by the ingestion of sharp metallic foreign bodies (nails, wire) that settle in the honeycomb reticulum and penetrate the reticular wall into the peritoneal cavity.</p><p><b>Principal Thoracic Complication:</b> <b>Traumatic Pericarditis</b> (foreign body pierces through the diaphragm and pericardial sac, causing severe fibrino-purulent pericarditis and cardiac tamponade).</p>",
      "keyPoints": [
        "TRP: Penetration of reticular wall by swallowed sharp metallic foreign bodies.",
        "Principal complication: Septic fibrinous/purulent traumatic pericarditis."
      ],
      "table": null,
      "pyq": [
        "IVRI 2023",
        "TANUVAS 2021",
        "GADVASU 2020"
      ]
    },
    {
      "id": "u2-qa-02",
      "type": "define",
      "marks": 2,
      "question": "Define Ruminal Bloat (Tympany) and distinguish Frothy from Free-gas bloat.",
      "topicId": "u2-t01",
      "answer": "<p><b>Ruminal Bloat (Tympany)</b> is the abnormal, excessive distension of the rumen and reticulum with gases of microbial fermentation, which cannot be expelled by normal eructation.</p><p><b>Distinction:</b></p><ul><li><b>Frothy Bloat (Primary Tympany):</b> Gas is entrapped in small stable foam bubbles mixed with ruminal digesta due to plant soluble leaf proteins (legumes/alfalfa) or grain mucopolysaccharides; cannot be relieved by stomach tube alone.</li><li><b>Free-Gas Bloat (Secondary Tympany):</b> Free gas layer accumulates above ruminal contents due to physical or functional esophageal obstruction (choke, vagal indigestion, tetanus); easily relieved by stomach tube or trochar.</li></ul>",
      "keyPoints": [
        "Bloat: Excessive distension of rumen-reticulum with trapped fermentation gas.",
        "Frothy bloat: Gas trapped as persistent foam (legumes, lush clover); surface-tension issue.",
        "Free-gas bloat: Free gas pocket due to physical esophageal choke or motor failure."
      ],
      "table": null,
      "pyq": [
        "RAJUVAS 2023",
        "IVRI 2022",
        "LUVAS 2019"
      ]
    },
    {
      "id": "u2-qa-03",
      "type": "define",
      "marks": 2,
      "question": "Define Atelectasis and distinguish Congenital from Acquired atelectasis.",
      "topicId": "u2-t02",
      "answer": "<p><b>Atelectasis</b> is the incomplete expansion or collapse of pulmonary parenchyma, resulting in reduced or absent air content in the alveoli.</p><p><b>Distinction:</b></p><ul><li><b>Congenital (Neonatal) Atelectasis:</b> Failure of the fetal alveoli to expand at birth, commonly due to surfactant deficiency (hyaline membrane disease), prematurity, or aspiration of amniotic fluid.</li><li><b>Acquired Atelectasis:</b> Collapse of previously inflated adult lung tissue due to <i>compression</i> (hydrothorax, pneumothorax, neoplasia) or <i>airway obstruction</i> (mucus plug, foreign body) with alveolar gas resorption.</li></ul>",
      "keyPoints": [
        "Atelectasis: Failure of alveolar inflation or collapse of lung tissue.",
        "Congenital: Primary failure of initial expansion in neonates (surfactant deficiency).",
        "Acquired: Collapse of previously expanded lung due to external compression or airway obstruction."
      ],
      "table": null,
      "pyq": [
        "GADVASU 2022",
        "WBUAFS 2020"
      ]
    },
    {
      "id": "u2-qa-04",
      "type": "define",
      "marks": 2,
      "question": "Define Zenker's Necrosis and name its classic etiology in young ruminants.",
      "topicId": "u2-t03",
      "answer": "<p><b>Zenker's (Hyaline) Necrosis</b> is a specialized form of coagulative necrosis affecting striated skeletal and cardiac muscle fibres, characterized microscopically by loss of cross-striations, sarcoplasmic swelling, and transformation into opaque, glassy, eosinophilic hyaline cylinders with subsequent calcification.</p><p><b>Classic Etiology:</b> Nutritional muscular dystrophy (<b>White Muscle Disease</b>) in calves and lambs caused by <b>Vitamin E and/or Selenium deficiency</b>.</p>",
      "keyPoints": [
        "Zenker's necrosis: Waxy hyaline coagulative necrosis of striated skeletal and cardiac muscle.",
        "Classic etiology: Vitamin E and Selenium deficiency (White Muscle Disease)."
      ],
      "table": null,
      "pyq": [
        "TANUVAS 2023",
        "IVRI 2021",
        "KVAFSU 2018"
      ]
    },
    {
      "id": "u2-qa-05",
      "type": "define",
      "marks": 2,
      "question": "Define Arteriosclerosis and Atherosclerosis.",
      "topicId": "u2-t04",
      "answer": "<p><b>Arteriosclerosis</b> ('hardening of the arteries') is a generic chronic arterial disorder characterized by fibrous thickening, loss of elasticity, and hyaline degeneration of the arterial tunica intima and media, common in older domestic animals.</p><p><b>Atherosclerosis</b> is a specific subtype characterized by the intimal deposition of lipid plaques (atheromas) consisting of cholesterol esters, foam cells, and fibrous caps. It is rare in domestic animals but occurs in hypothyroid dogs, pigs on atherogenic diets, and parrots.</p>",
      "keyPoints": [
        "Arteriosclerosis: Chronic fibrous thickening and hardening of arterial wall with loss of elasticity.",
        "Atherosclerosis: Specific intimal lipid-rich fibro-fatty atheromatous plaques (rare in animals, occurs in hypothyroid dogs)."
      ],
      "table": null,
      "pyq": [
        "IVRI 2022",
        "MAFSU 2021"
      ]
    },
    {
      "id": "u2-qa-06",
      "type": "define",
      "marks": 2,
      "question": "Define Nephrotic Syndrome and name its four classical features.",
      "topicId": "u2-t07",
      "answer": "<p><b>Nephrotic Syndrome</b> is a clinical and pathological complex resulting from severe, persistent glomerular basement membrane damage that causes excessive capillary permeability to plasma proteins.</p><p><b>Four Classical Features:</b></p><ol><li><b>Heavy Proteinuria:</b> Massive urinary albumin loss exceeding 3.5 g/day.</li><li><b>Hypoalbuminaemia:</b> Serum albumin drops below 1.5–2.0 g/dL.</li><li><b>Generalized Oedema (Ascites / Anasarca):</b> Caused by loss of plasma colloidal oncotic pressure.</li><li><b>Hypercholesterolaemia / Hyperlipidaemia:</b> Compensatory hepatic lipoprotein synthesis stimulated by low oncotic pressure.</li></ol>",
      "keyPoints": [
        "Nephrotic Syndrome: Glomerular complex resulting from severe persistent protein leakage.",
        "4 Cardinal features: Heavy proteinuria, Hypoalbuminaemia, Generalized oedema/ascites, Hyperlipidaemia."
      ],
      "table": null,
      "pyq": [
        "GADVASU 2023",
        "IVRI 2020",
        "TANUVAS 2019"
      ]
    },
    {
      "id": "u2-qa-07",
      "type": "define",
      "marks": 2,
      "question": "Define Urolithiasis and name the most common site of urethral obstruction in a bull vs a ram.",
      "topicId": "u2-t07",
      "answer": "<p><b>Urolithiasis</b> is the formation of macroscopic mineral precipitates (calculi or 'stones') anywhere within the urinary collection system (renal pelvis, ureter, bladder, or urethra).</p><p><b>Common Obstruction Sites:</b></p><ul><li><b>Bull / Steer:</b> At the <b>ischial arch</b> or the distal loop of the <b>sigmoid flexure</b> of the penis.</li><li><b>Ram / Buck:</b> At the tortuous <b>vermiform urethral process</b> ('filiform appendage') at the tip of the penis.</li></ul>",
      "keyPoints": [
        "Urolithiasis: Formation of macroscopic mineral stones in the urinary tract.",
        "Bull site: Distal bend of the sigmoid flexure.",
        "Ram site: Vermiform urethral process (filiform appendage)."
      ],
      "table": null,
      "pyq": [
        "IVRI 2021",
        "RAJUVAS 2020",
        "TANUVAS 2018"
      ]
    },
    {
      "id": "u2-qa-08",
      "type": "define",
      "marks": 2,
      "question": "Define Pyometra and distinguish Open from Closed cervix pyometra.",
      "topicId": "u2-t08",
      "answer": "<p><b>Pyometra</b> is an acute or chronic, life-threatening suppurative inflammation of the uterus characterized by the accumulation of copious purulent or mucopurulent exudate within the uterine lumen, usually accompanied by <b>cystic endometrial hyperplasia (CEH)</b>.</p><p><b>Distinction:</b></p><ul><li><b>Open Pyometra:</b> The cervical canal remains patent, permitting continuous or intermittent foul-smelling, purulent or hemorrhagic vaginal discharge; less severe systemic toxemia.</li><li><b>Closed Pyometra:</b> The cervix is tightly closed, trapping toxic pus inside; leads to progressive uterine distension, severe endotoxaemia, renal failure, septic shock, or fatal uterine rupture.</li></ul>",
      "keyPoints": [
        "Pyometra: Accumulation of purulent exudate within the uterine lumen (frequently following CEH in diestrus).",
        "Open: Patent cervix, visible vaginal discharge, milder toxemia.",
        "Closed: Closed cervix, trapped pus, massive distension, severe life-threatening endotoxaemia."
      ],
      "table": null,
      "pyq": [
        "TANUVAS 2023",
        "GADVASU 2021",
        "LUVAS 2020"
      ]
    },
    {
      "id": "u2-qa-09",
      "type": "define",
      "marks": 2,
      "question": "Define Cirrhosis of the liver and state its triad of pathological features.",
      "topicId": "u2-t01",
      "answer": "<p><b>Cirrhosis</b> is the irreversible, end-stage chronic hepatic disorder characterized by widespread architectural distortion of the entire liver parenchyma.</p><p><b>Triad of Pathological Features:</b></p><ol><li><b>Diffuse bridging fibrosis:</b> Broad fibrous septa encircling regenerative areas.</li><li><b>Regenerative parenchymal nodules:</b> Proliferating hepatocytes forming disorganized, hyperplastic nodules lacking central veins.</li><li><b>Disruption of hepatic vascular architecture:</b> Formation of abnormal portosystemic shunts leading to portal hypertension.</li></ol>",
      "keyPoints": [
        "Cirrhosis: End-stage diffuse hepatic disease with total architectural disruption.",
        "Triad: 1. Bridging fibrosis, 2. Nodular parenchymal regeneration, 3. Vascular reorganization / portal hypertension."
      ],
      "table": null,
      "pyq": [
        "IVRI 2023",
        "WBUAFS 2022",
        "KVAFSU 2019"
      ]
    },
    {
      "id": "u2-qa-10",
      "type": "define",
      "marks": 2,
      "question": "Define Encephalomalacia and name two causes in domestic animals.",
      "topicId": "u2-t09",
      "answer": "<p><b>Encephalomalacia</b> is the macroscopic and microscopic softening, liquefaction, and necrosis of the brain parenchyma resulting from ischemic, toxic, or nutritional insult (termed <i>polioencephalomalacia</i> when affecting gray matter and <i>leukoencephalomalacia</i> when affecting white matter).</p><p><b>Two Causes:</b></p><ol><li><b>Polioencephalomalacia (PEM / Cerebrocortical Necrosis) in ruminants:</b> Caused by <b>Thiamine (Vitamin B1) deficiency</b> or high dietary sulphate/sulfide toxicity.</li><li><b>Equine Leukoencephalomalacia (ELEM / Moldy Corn Poisoning):</b> Caused by ingestion of <b>Fumonisin B1</b> mycotoxin from <i>Fusarium verticillioides</i>-contaminated corn.</li></ol>",
      "keyPoints": [
        "Encephalomalacia: Softening and liquefactive necrosis of brain tissue.",
        "Causes: Thiamine deficiency / sulfur toxicity (ruminant PEM); Fumonisin B1 mycotoxin (equine ELEM)."
      ],
      "table": null,
      "pyq": [
        "IVRI 2022",
        "GADVASU 2020"
      ]
    },
    {
      "id": "u2-qa-11",
      "type": "define",
      "marks": 2,
      "question": "Define Goitre and name its two morphological types.",
      "topicId": "u2-t10",
      "answer": "<p><b>Goitre</b> is a non-neoplastic, non-inflammatory enlargement of the thyroid gland resulting from compensatory follicular epithelial hyperplasia induced by elevated circulating levels of <b>Thyroid Stimulating Hormone (TSH)</b>.</p><p><b>Two Morphological Types:</b></p><ol><li><b>Hyperplastic (Parenchymatous) Goitre:</b> Characterized by diffuse follicular cell hyperplasia and hypertrophy with little or no colloid store; seen in neonates due to maternal iodine deficiency or ingestion of goitrogens (brassica plants).</li><li><b>Colloid Goitre:</b> The involutionary stage characterized by hugely distended follicles lined by flattened epithelium and filled with abundant, dense, eosinophilic colloid.</li></ol>",
      "keyPoints": [
        "Goitre: Non-neoplastic, non-inflammatory enlargement of thyroid gland driven by elevated TSH.",
        "Morphological types: 1. Hyperplastic goitre (cell-rich, minimal colloid), 2. Colloid goitre (macrofollicles filled with dense colloid)."
      ],
      "table": null,
      "pyq": [
        "TANUVAS 2022",
        "MAFSU 2019"
      ]
    },
    {
      "id": "u2-qa-12",
      "type": "define",
      "marks": 2,
      "question": "Define Parakeratosis and Hyperkeratosis.",
      "topicId": "u2-t11",
      "answer": "<p><b>Hyperkeratosis</b> is the excessive thickening of the outermost cornified layer (stratum corneum) of the epidermis composed of fully keratinized, anucleate squamous cells (seen in chronic friction, canine distemper 'hard pad', Vitamin A deficiency).</p><p><b>Parakeratosis</b> is the retention of pyknotic nuclei within the keratinized squames of the stratum corneum, indicating incomplete, disordered keratinization and accelerated epidermal turnover (seen classically in <b>Zinc deficiency</b> in pigs and calves, and in superficial necrolytic dermatitis).</p>",
      "keyPoints": [
        "Hyperkeratosis: Thickened stratum corneum without nuclei (Distemper hard pad, Vit A deficiency).",
        "Parakeratosis: Retention of pyknotic nuclei in stratum corneum squames (Zinc deficiency in swine)."
      ],
      "table": null,
      "pyq": [
        "IVRI 2021",
        "GADVASU 2021",
        "RAJUVAS 2018"
      ]
    },
    {
      "id": "u2-qa-13",
      "type": "short",
      "marks": 5,
      "question": "Describe the pathogenesis, gross lesions, and sequelae of Traumatic Reticuloperitonitis (TRP) and Traumatic Pericarditis in cattle.",
      "topicId": "u2-t01",
      "answer": "<p><b>Etiopathogenesis:</b> Cattle have indiscriminate feeding habits; sharp foreign objects (nails, baling wire > 5 cm) sink into the reticulum due to high specific gravity. Contractions of the reticulum push the sharp object through the reticular wall, inoculating mixed bacteria into the peritoneal cavity (<b>Traumatic Reticuloperitonitis</b>).</p>\n<p>If the object penetrates cranial-dorsally through the diaphragm, it enters the pericardial cavity (<b>Traumatic Reticulopericarditis</b>).</p>\n<p><b>Gross Lesions:</b></p>\n<ul>\n  <li><b>Reticulum:</b> Thickened fibrotic reticular wall firmly anchored by dense adhesions to the diaphragm, spleen, and abdominal wall. A fistulous tract containing foul pus and wire fragments is observed.</li>\n  <li><b>Pericardial Sac:</b> Hugely distended with up to 5–10 litres of foul-smelling, yellow-grey, putrid, purulent fluid mixed with thick shaggy mats of fibrin covering visceral and parietal pericardium (<b>'Bread and Butter' appearance</b>).</li>\n  <li><b>Myocardium:</b> Covered by a thick fibrous peel (constrictive pericarditis); epicardium is compressed and flabby.</li>\n</ul>\n<p><b>Sequelae & Systemic Effects:</b></p>\n<ul>\n  <li><i>Cardiac tamponade:</i> High intrapericardial pressure prevents ventricular diastolic filling.</li>\n  <li><i>Congestive Heart Failure (Right-sided):</i> Marked bilateral jugular venous distension, positive jugular pulse, cold brisket oedema, and submandibular oedema ('bottle jaw').</li>\n  <li>Vagal indigestion due to inflammation around the ventral branch of the vagus nerve.</li>\n</ul>",
      "keyPoints": [
        "Pathogenesis: Indiscriminate ingestion -> foreign body penetrates reticulum -> crosses diaphragm into pericardium.",
        "Gross: Massive fibrino-purulent exudate in pericardium with 'Bread and Butter' shaggy fibrin mats.",
        "Cardiac consequences: Cardiac tamponade, constrictive pericarditis, right-sided heart failure.",
        "Clinical signs: Jugular pulse, brisket oedema, bottle jaw, abducted elbows, positive grunt test."
      ],
      "table": null,
      "pyq": [
        "IVRI 2023",
        "TANUVAS 2022",
        "GADVASU 2021",
        "RAJUVAS 2019"
      ]
    },
    {
      "id": "u2-qa-14",
      "type": "short",
      "marks": 5,
      "question": "Classify Pneumonia based on exudate and anatomical distribution (Bronchopneumonia, Lobar, Interstitial, Granulomatous).",
      "topicId": "u2-t02",
      "answer": "<p>Pneumonia is inflammation of the pulmonary parenchyma. Classification is based on the portal of entry, anatomical distribution, and character of exudate:</p>\n<ol>\n  <li><b>Bronchopneumonia (Lobular Pneumonia):</b>\n    <ul>\n      <li><i>Route:</i> Aerogenous (inhalation of airborne bacteria, aspiration).</li>\n      <li><i>Distribution:</i> Cranioventral (antero-ventral lobes: apical, cardiac) because gravity and high airflow favour particle deposition.</li>\n      <li><i>Lesions:</i> Patchy, firm, depressed consolidation centered on terminal bronchioles; lumen filled with suppurative or mucopurulent exudate.</li>\n      <li><i>Examples:</i> <i>Pasteurella multocida</i> in cattle, <i>Bordetella bronchiseptica</i> in dogs.</li>\n    </ul>\n  </li>\n  <li><b>Lobar Pneumonia:</b>\n    <ul>\n      <li><i>Route:</i> Aerogenous, but virulent toxigenic bacteria release leukotoxins spreading rapidly through Pores of Kohn.</li>\n      <li><i>Distribution:</i> Entire lobes (usually right cranioventral) uniformly consolidated, heavy, liver-like.</li>\n      <li><i>Examples:</i> <i>Mannheimia haemolytica</i> (bovine pneumonic pasteurellosis / shipping fever).</li>\n    </ul>\n  </li>\n  <li><b>Interstitial Pneumonia (Pneumonitis):</b>\n    <ul>\n      <li><i>Route:</i> Hematogenous (septicemia, endotoxaemia) or inhalation of toxic gases/aerosolized viruses.</li>\n      <li><i>Distribution:</i> Diffuse, bilateral across all lobes (dorsocaudal predilection).</li>\n      <li><i>Lesions:</i> Lungs fail to collapse, feel rubbery or elastic, rib impressions on pleura; exudate is in the alveolar septa (Type II pneumocyte hyperplasia, septal macrophage infiltration).</li>\n      <li><i>Examples:</i> Acute Bovine Pulmonary Emphysema (ABPEO), Maedi in sheep, Canine Distemper.</li>\n    </ul>\n  </li>\n  <li><b>Granulomatous Pneumonia:</b>\n    <ul>\n      <li><i>Route:</i> Aerogenous or hematogenous chronic persistent pathogens.</li>\n      <li><i>Lesions:</i> Multifocal, well-demarcated nodular caseous or calcified masses surrounded by epithelioid cells and giant cells.</li>\n      <li><i>Examples:</i> Tuberculosis (<i>M. bovis</i>), Deep mycoses (<i>Blastomyces</i>, <i>Aspergillus</i>).</li>\n    </ul>\n  </li>\n</ol>",
      "keyPoints": [
        "Bronchopneumonia: Aerogenous, cranioventral, centered on bronchioles, suppurative exudate (Pasteurella).",
        "Lobar pneumonia: Whole lobe consolidated, fibrinous exudate, severe toxemia (Mannheimia haemolytica).",
        "Interstitial pneumonia: Hematogenous/toxic, diffuse, rubbery, thickened alveolar septa (ABPEO, viral).",
        "Granulomatous: Multifocal nodular chronic granulomas with giant cells (Tuberculosis, fungal)."
      ],
      "table": null,
      "pyq": [
        "TANUVAS 2023",
        "IVRI 2021",
        "KVAFSU 2020"
      ]
    },
    {
      "id": "u2-qa-15",
      "type": "short",
      "marks": 5,
      "question": "Discuss the pathogenesis and lesions of Acute Bovine Pulmonary Emphysema and Oedema (ABPEO / Fog Fever).",
      "topicId": "u2-t02",
      "answer": "<p><b>Etiopathogenesis:</b> Occurs in adult cattle abruptly moved from dry, poor pasture to lush, green, rapidly growing legume or grass pasture (hence 'fog fever'):</p>\n<ol>\n  <li>Lush pasture contains high levels of the amino acid <b>L-tryptophan</b>.</li>\n  <li>In the rumen, microbial lactobacilli decarboxylate L-tryptophan into indoleacetic acid, which is converted to <b>3-methylindole (3-MI)</b>.</li>\n  <li>3-MI is absorbed into the blood and carried to the lungs.</li>\n  <li>In the lung, Clara cells (club cells) and <b>Type I pneumocytes</b> metabolize 3-MI via <b>cytochrome P450 monooxygenases</b> into a highly reactive, toxic intermediate (free radical electrophile).</li>\n  <li>The toxic metabolite causes selective necrosis of Type I pneumocytes and capillary endothelial damage, triggering massive fluid transudation into alveoli and interlobular septa.</li>\n  <li>Surviving alveolar cells respond by marked, diffuse proliferation of cuboidal <b>Type II pneumocytes ('fetalization' or epithelialization of alveoli)</b>.</li>\n</ol>\n<p><b>Gross Lesions:</b></p>\n<ul>\n  <li>Lungs are voluminous, heavy, rubbery, failure to collapse, with prominent rib impressions.</li>\n  <li>Marked <b>interstitial emphysema</b>: interlobular septa are massively widened by large gas blebs resembling bubble wrap. Bullous emphysema on the dorsal diaphragmatic lobes with subpleural blebs that can rupture into mediastinum.</li>\n  <li>On cut surface, copious frothy oedema fluid exudes from airways.</li>\n</ul>\n<p><b>Histopathology:</b> Severe alveolar oedema, hyaline membranes lining alveolar walls, marked Type II pneumocyte proliferation (cuboidal epithelial lining), and eosinophilic/mononuclear septal infiltration.</p>",
      "keyPoints": [
        "Etiology: Abrupt change to lush green pasture rich in L-tryptophan.",
        "Pathogenesis: Rumen microbes convert L-tryptophan -> 3-Methylindole (3-MI) -> Cytochrome P450 activation in lungs -> Necrosis of Type I pneumocytes.",
        "Gross: Failure of collapse, heavy rubbery lungs, massive interstitial emphysema widening interlobular septa.",
        "Microscopic: Alveolar epithelialization (Type II pneumocyte hyperplasia), hyaline membranes, intra-alveolar oedema."
      ],
      "table": null,
      "pyq": [
        "IVRI 2023",
        "GADVASU 2022",
        "RAJUVAS 2020"
      ]
    },
    {
      "id": "u2-qa-16",
      "type": "short",
      "marks": 5,
      "question": "Describe Vegetative Valvular Endocarditis: Predilection valves, etiology, gross appearance, and systemic thromboembolic sequelae.",
      "topicId": "u2-t04",
      "answer": "<p><b>Definition:</b> Vegetative endocarditis is an acute or subacute, destructive bacterial infection of the endocardium lining heart valves, characterized by the formation of bulky, friable, polypoid thrombotic masses ('vegetations').</p>\n<p><b>Etiology:</b> Sustained or recurrent bacteremia arising from chronic distant foci (foot rot, metritis, mastitis, navel ill). Common organisms: <i>Trueperella pyogenes</i> (cattle), <i>Erysipelothrix rhusiopathiae</i> (pigs), <i>Streptococcus equi</i> (horses), <i>Staphylococcus aureus</i> (dogs).</p>\n<p><b>Predilection Valves:</b></p>\n<ul>\n  <li><b>Cattle:</b> Right AV (Tricuspid) valve is most frequently affected (~50%), followed by Mitral valve.</li>\n  <li><b>Other species (Dog, Horse, Pig):</b> Left AV (Mitral / Bicuspid) valve and Aortic valve predominate.</li>\n</ul>\n<p><b>Gross Appearance:</b></p>\n<ul>\n  <li>Large, irregular, nodular, cauliflower-like friable vegetations attached to the atrial surface of AV valves or ventricular surface of semilunar valves.</li>\n  <li>Grey-yellow to tan-pink, dry, crumbly; easily detaches, ulcerating the underlying valve leaflet.</li>\n</ul>\n<p><b>Histopathology:</b> Dense layers of fibrin and platelet aggregates containing dense basophilic colonies of bacteria, surrounded by necrotic debris and a basal rim of granulation tissue with neutrophils.</p>\n<p><b>Systemic Thromboembolic Sequelae:</b></p>\n<ul>\n  <li><i>Tricuspid vegetations (Right heart):</i> Dislodged fragments travel to the lungs, producing septic pulmonary thromboembolism, pulmonary infarction, and multiple pulmonary abscesses.</li>\n  <li><i>Mitral/Aortic vegetations (Left heart):</i> Emboli shower systemic arterial circulation, producing septic infarcts and abscesses in the <b>kidneys</b> (wedge-shaped renal infarcts), <b>spleen</b>, <b>myocardium</b>, and <b>brain</b>.</li>\n</ul>",
      "keyPoints": [
        "Etiology: Sustained bacteremia from chronic septic focus (Trueperella, Erysipelothrix, Streptococci).",
        "Valves: Tricuspid valve most common in cattle; Mitral and Aortic valves most common in dog, horse, pig.",
        "Gross: Cauliflower-like, friable, nodular vegetations of fibrin, platelets, and bacterial colonies.",
        "Sequelae: Right heart -> pulmonary abscesses/infarction; Left heart -> renal, splenic, and myocardial septic infarcts."
      ],
      "table": null,
      "pyq": [
        "TANUVAS 2023",
        "IVRI 2021",
        "WBUAFS 2020"
      ]
    },
    {
      "id": "u2-qa-17",
      "type": "diff",
      "marks": 5,
      "question": "Differentiate Glomerulonephritis from Interstitial Nephritis.",
      "topicId": "u2-t07",
      "answer": "<p>Glomerulonephritis and interstitial nephritis represent the two major histological categories of inflammatory renal disease in domestic animals:</p>",
      "keyPoints": [
        "Glomerulonephritis: Centered on glomeruli, immune-complex mediated, produces heavy proteinuria and nephrotic syndrome.",
        "Interstitial nephritis: Centered on interstitium/tubules, hematogenous/ascending infection (Leptospira), produces azotemia and isosthenuria.",
        "Grossly, glomerulonephritis shows swollen pale cortex with prominent red/pale dots; interstitial nephritis shows diffuse pale streaks or white cortical nodules."
      ],
      "table": {
        "title": "Comparison between Glomerulonephritis and Interstitial Nephritis",
        "headers": [
          "Criterion",
          "Glomerulonephritis",
          "Interstitial Nephritis"
        ],
        "rows": [
          [
            "Primary anatomical target",
            "Glomerular capillary tuft and Bowman's capsule",
            "Renal interstitial stroma and intervening tubules"
          ],
          [
            "Pathogenesis / Cause",
            "Type III hypersensitivity (deposition of circulating antigen-antibody immune complexes) or anti-GBM antibodies",
            "Infectious agents via hematogenous spread (<i>Leptospira</i>, Canine Adenovirus-1, E. coli) or ascending pyelonephritis"
          ],
          [
            "Gross appearance",
            "Kidneys bilaterally enlarged, swollen, pale tan; glomeruli stand out as prominent pinpoint red or pale glistening dots on cut cortex",
            "Kidneys enlarged, pale, mottled; multiple grey-white streaks or focal nodules radiating through cortex and medulla"
          ],
          [
            "Histopathology",
            "Hypercellular glomeruli (endothelial/mesangial proliferation), thickened GBM, crescent formation in Bowman's space; tubules initially spared",
            "Diffuse or multifocal interstitial infiltration of lymphocytes, plasma cells, and macrophages; tubular atrophy, degeneration, and interstitial fibrosis"
          ],
          [
            "Major clinical sign",
            "Heavy proteinuria (albuminuria), hypoalbuminaemia, nephrotic syndrome, ascites",
            "Polyuria, polydipsia, isosthenuria, elevated BUN and creatinine, mild non-selective proteinuria"
          ],
          [
            "Urinalysis findings",
            "Abundant protein (3+ to 4+), hyaline and cellular casts, few RBCs",
            "Leukocyturia, granular/waxy casts, low urine specific gravity (1.008–1.012)"
          ],
          [
            "Classic examples",
            "Dirofilariasis, FeLV, Lyme disease, autoimmune glomerulopathy",
            "Leptospirosis in dogs (*L. canicola*), 'White-spotted kidney' in calves (*E. coli*), Porcine encephalomyocarditis"
          ]
        ]
      },
      "pyq": [
        "IVRI 2022",
        "GADVASU 2021",
        "MAFSU 2019"
      ]
    },
    {
      "id": "u2-qa-18",
      "type": "short",
      "marks": 5,
      "question": "Describe Cystic Ovarian Disease in cattle: Pathogenesis, types (Follicular cysts vs Luteal cysts), and clinical/pathological sequelae.",
      "topicId": "u2-t08",
      "answer": "<p><b>Definition:</b> Cystic Ovarian Disease (COD) is an endocrine disorder of high-producing dairy cattle characterized by the persistence of one or more anovulatory fluid-filled structures ($ge 2.5\\text{ cm}$ in diameter) on one or both ovaries for more than 10 days in the absence of a corpus luteum.</p>\n<p><b>Pathogenesis:</b> Failure of the pre-ovulatory surge of <b>Luteinizing Hormone (LH)</b> from the anterior pituitary gland, resulting from stress, high milk production, or negative energy balance impairing hypothalamic GnRH release.</p>\n<p><b>Morphological Types:</b></p>\n<ul>\n  <li><b>Follicular Cysts:</b>\n    <ul>\n      <li><i>Morphology:</i> Thin-walled (<3 mm), single or multiple, translucent, fluid-filled cysts lined by partially degenerate granulosa cells.</li>\n      <li><i>Hormone & Behavior:</i> Secrete variable amounts of <b>estrogen</b>; leads to continuous or irregular estrus behavior (<b>Nymphomania</b>), persistent bellowing, mounting, and relaxed pelvic ligaments ('buller cow').</li>\n    </ul>\n  </li>\n  <li><b>Luteal Cysts:</b>\n    <ul>\n      <li><i>Morphology:</i> Thick-walled (>3 mm), usually single cyst lined by a prominent inner layer of luteinized theca/granulosa tissue; golden-yellow inner lining.</li>\n      <li><i>Hormone & Behavior:</i> Secrete <b>progesterone</b>; leads to prolonged <b>anestrus</b> due to negative feedback on LH and FSH.</li>\n    </ul>\n  </li>\n</ul>\n<p><b>Pathological Sequelae on Reproductive Tract:</b></p>\n<ul>\n  <li>Prolonged estrogen from follicular cysts induces <b>Cystic Endometrial Hyperplasia (CEH)</b>: thickened, 'Swiss-cheese' endometrium with dilated uterine glands.</li>\n  <li>Hydrometra or mucometra (clear sterile fluid distending uterine horns).</li>\n  <li>Predisposes to ascending uterine bacterial infection and <b>Pyometra</b>.</li>\n</ul>",
      "keyPoints": [
        "Definition: Anovulatory ovarian structures >= 2.5 cm persisting for > 10 days in dairy cows.",
        "Pathogenesis: Failure of LH pre-ovulatory surge due to hypothalamic-pituitary-ovarian axis dysregulation.",
        "Follicular cyst: Thin-walled, estrogen-secreting, causes nymphomania and pelvic ligament relaxation.",
        "Luteal cyst: Thick-walled with luteinized tissue, progesterone-secreting, causes permanent anestrus.",
        "Sequelae: Cystic endometrial hyperplasia (Swiss-cheese pattern), mucometra, and pyometra."
      ],
      "table": null,
      "pyq": [
        "TANUVAS 2023",
        "IVRI 2021",
        "GADVASU 2020"
      ]
    },
    {
      "id": "u2-qa-19",
      "type": "short",
      "marks": 5,
      "question": "Describe Hepatic Cirrhosis: Classification (Micronodular vs Macronodular, Biliary, Cardiac 'nutmeg' liver), pathogenesis, and systemic consequences.",
      "topicId": "u2-t01",
      "answer": "<p><b>Definition:</b> Hepatic cirrhosis is a chronic, diffuse, progressive, end-stage liver disease characterized by bridging fibrous septa, nodular parenchymal regeneration, and destruction of the normal lobular architecture.</p>\n<p><b>Pathogenesis:</b> Sustained chronic hepatocellular necrosis triggers activation of <b>hepatic stellate cells (Ito cells)</b> residing in the Space of Disse. Stellate cells transform into proliferating myofibroblasts under the influence of $TGF-\\beta$, depositing dense Type I and III collagen fibril bundles in the sinusoids. Proliferating viable hepatocytes form regenerative nodules without central veins.</p>\n<p><b>Classification:</b></p>\n<ul>\n  <li><b>Micronodular Cirrhosis:</b> Regenerative nodules are small and uniform (<3 mm in diameter), bounded by thin fibrous bands; typical of chronic toxic insults (e.g., pyrrolizidine alkaloids, aflatoxins).</li>\n  <li><b>Macronodular Cirrhosis:</b> Regenerative nodules are large and variable in size (>3 mm up to several centimeters); typical following acute massive submassive hepatic necrosis.</li>\n  <li><b>Biliary Cirrhosis:</b> Initiated by chronic cholangitis or biliary obstruction (e.g., chronic fasciolosis in cattle/sheep); dense fibrosis encircles bile ducts and portal tracts.</li>\n  <li><b>Cardiac Cirrhosis ('Nutmeg' Liver progression):</b> Initiated by long-standing chronic passive congestion (right heart failure). Centrilobular sinusoids undergo congestion and atrophy, progressing to centrilobular bridging fibrosis ('reversed lobular pattern').</li>\n</ul>\n<p><b>Systemic Consequences:</b></p>\n<ul>\n  <li><b>Portal Hypertension:</b> Compression of intrahepatic portal venules by fibrous tissue leads to <b>ascites</b> and acquired portosystemic collateral shunts.</li>\n  <li><b>Hepatic Encephalopathy:</b> Failure to convert ammonia to urea causes hyperammonemia, resulting in astrocyte swelling (Alzheimer Type II glia) and neurological signs (head-pressing, blindness).</li>\n  <li><b>Hypoalbuminaemia & Jaundice:</b> Decreased protein synthesis and impaired biliary clearance.</li>\n</ul>",
      "keyPoints": [
        "Pathogenesis: Chronic injury activates Ito (stellate) cells via TGF-beta -> collagen synthesis -> bridging fibrosis and nodular regeneration.",
        "Micronodular (<3 mm nodules, toxic injury); Macronodular (>3 mm nodules, post-necrotic).",
        "Biliary cirrhosis (chronic fasciolosis); Cardiac cirrhosis (chronic passive congestion, nutmeg liver).",
        "Consequences: Portal hypertension (ascites, acquired shunts), hepatic encephalopathy (ammonia toxicity), jaundice."
      ],
      "table": null,
      "pyq": [
        "IVRI 2022",
        "RAJUVAS 2021",
        "KVAFSU 2019"
      ]
    },
    {
      "id": "u2-qa-20",
      "type": "short",
      "marks": 5,
      "question": "Discuss Bovine Spongiform Encephalopathy (BSE) vs Scrapie: Prion pathogenesis, clinical signs, and neurohistopathology.",
      "topicId": "u2-t09",
      "answer": "<p><b>Prion Pathogenesis:</b> Both BSE ('Mad Cow Disease') and Scrapie (in sheep/goats) are Transmissible Spongiform Encephalopathies (TSEs) caused by an infectious, misfolded, proteinase-resistant isoform of the host cellular prion protein ($PrP^C \\rightarrow PrP^{Sc}$).</p>\n<p>$PrP^{Sc}$ has a high <b>beta-sheet content</b>, which acts as a template to refold normal alpha-helical $PrP^C$. The accumulation of insoluble $PrP^{Sc}$ aggregates causes neurodegeneration without triggering any inflammatory or immune response.</p>\n\n<p><b>Key Distinctions between BSE and Scrapie:</b></p>\n<ul>\n  <li><b>Transmission:</b>\n    <ul>\n      <li><i>BSE:</i> Ingestion of meat and bone meal (MBM) prepared from scrapie- or BSE-infected ruminant carcasses. Does not spread horizontally between live cattle.</li>\n      <li><i>Scrapie:</i> Transmitted laterally through ingestion of infected placenta, fetal fluids, and pasture contamination; also maternal vertical transmission.</li>\n    </ul>\n  </li>\n  <li><b>Zoonotic Potential:</b> BSE is <b>zoonotic</b> (causes variant Creutzfeldt-Jakob Disease - vCJD in humans); Scrapie has <b>no zoonotic risk</b> to humans.</li>\n  <li><b>Clinical Signs:</b>\n    <ul>\n      <li><i>BSE:</i> Apprehension, extreme hyperesthesia to touch and sound, nervousness, aggressive kicking during milking, kicking, and hindlimb ataxia.</li>\n      <li><i>Scrapie:</i> Intense pruritus causing sheep to rub against fences ('scraping' off wool), nibbling reflex when back is scratched, tremor, and wasting.</li>\n    </ul>\n  </li>\n  <li><b>Neurohistopathology:</b>\n    <ul>\n      <li>Both show pathognomonic <b>bilateral symmetrical spongiform vacuolation</b> in the neuronal perikarya and grey matter neuropil.</li>\n      <li>BSE predilects the <b>nucleus of the solitary tract</b> and the <b>spinal tract nucleus of the trigeminal nerve</b> in the obex of the medulla oblongata.</li>\n      <li>Neuronal loss, severe astrogliosis, and amyloid prion plaques without perivascular cuffing.</li>\n    </ul>\n  </li>\n</ul>",
      "keyPoints": [
        "Prion concept: Post-translational misfolding of host PrPC into beta-sheet rich, protease-resistant PrPSc.",
        "BSE: Transmitted via meat-and-bone meal (MBM); zoonotic (causes vCJD in humans); signs: hyperesthesia, aggression, ataxia.",
        "Scrapie: Transmitted via placenta/lateral contact; non-zoonotic; signs: intense pruritus (wool scraping), nibble reflex, emaciation.",
        "Histopathology: Symmetrical spongiform vacuolation of neurons and neuropil in medulla (obex), astrocytic gliosis, zero inflammation."
      ],
      "table": null,
      "pyq": [
        "IVRI 2023",
        "GADVASU 2022",
        "TANUVAS 2020",
        "LUVAS 2019"
      ]
    },
    {
      "id": "u2-qa-21",
      "type": "long",
      "marks": 12,
      "question": "Describe in detail the Pathology of Pneumonia: Etiological classification, stages of Lobar Pneumonia (Congestion, Red Hepatization, Grey Hepatization, Resolution), gross and histopathological features, and sequelae.",
      "topicId": "u2-t02",
      "answer": "<p><b>Definition:</b> Pneumonia is defined as inflammation of the pulmonary parenchyma (alveoli, alveolar ducts, respiratory bronchioles, and supporting interstitial tissue), usually accompanied by inflammation of the bronchioles (bronchopneumonia) or pleura (pleuropneumonia).</p>\n\n<h3>1. Etiological & Morphological Classification</h3>\n<ul>\n  <li><b>Bacterial Pneumonia:</b> Usually produces suppurative bronchopneumonia or fibrinous lobar pneumonia (e.g., <i>Mannheimia haemolytica</i>, <i>Pasteurella multocida</i>, <i>Actinobacillus pleuropneumoniae</i>, <i>Streptococcus equi</i>).</li>\n  <li><b>Viral Pneumonia:</b> Usually produces bronchointerstitial or interstitial pneumonia with necrotizing bronchitis and epithelial syncytia/inclusions (e.g., Bovine Respiratory Syncytial Virus, Canine Distemper, Equine Influenza).</li>\n  <li><b>Mycotic Pneumonia:</b> Granulomatous or necrotizing angioinvasive pneumonia (e.g., <i>Aspergillus fumigatus</i>, <i>Blastomyces dermatitidis</i>).</li>\n  <li><b>Parasitic Pneumonia (Verminous Bronchitis):</b> Caused by lungworms (<i>Dictyocaulus viviparus</i> in cattle, <i>D. arnfieldi</i> in donkeys) causing chronic catarrhal/eosinophilic bronchitis in dorsocaudal lobes.</li>\n  <li><b>Chemical / Aspiration Pneumonia:</b> Aspiration of milk, ruminal contents, or medicines ('drenching pneumonia') producing peracute gangrenous liquefaction.</li>\n</ul>\n\n<h3>2. The Four Classical Stages of Acute Lobar (Fibrinous) Pneumonia</h3>\n<p>Classical lobar pneumonia, best exemplified by <i>Mannheimia haemolytica</i> in cattle ('Shipping Fever'), progresses through four well-defined chronological stages:</p>\n\n<ol>\n  <li><b>Stage 1: Congestion (Initial 24–48 Hours)</b>\n    <ul>\n      <li><i>Pathogenesis:</i> Bacterial proliferation and endotoxin release cause intense active arteriolar hyperaemia and increased capillary permeability.</li>\n      <li><i>Gross Appearance:</i> Affected lobes are heavy, dark red, swollen, boggy, and subcrepitant; on section, blood-stained proteinaceous fluid oozes from cut surfaces.</li>\n      <li><i>Microscopic Appearance:</i> Alveolar capillaries are massively engorged with RBCs; alveoli contain serous fluid, few neutrophils, and scattered bacteria.</li>\n    </ul>\n  </li>\n  <li><b>Stage 2: Red Hepatization (Days 2 to 4)</b>\n    <ul>\n      <li><i>Pathogenesis:</i> Massive vascular permeability permits extravasation of abundant fibrinogen and erythrocytes into alveolar spaces, forming a solid cast.</li>\n      <li><i>Gross Appearance:</i> The affected lobe is completely consolidated, airless, firm, and heavy, having the consistency and dark red color of fresh mammalian liver (hence <b>hepatization</b>). It sinks immediately in water. Visceral pleura is covered by a delicate dull fibrin film.</li>\n      <li><i>Microscopic Appearance:</i> Alveoli are packed with a dense network of fibrin threads, extravasated intact red blood cells, and neutrophils. Capillaries remain engorged.</li>\n    </ul>\n  </li>\n  <li><b>Stage 3: Grey Hepatization (Days 4 to 8)</b>\n    <ul>\n      <li><i>Pathogenesis:</i> Progressive disintegration of red blood cells, continuous influx of neutrophils and macrophages, and compression of alveolar capillaries by dense fibrinous alveolar casts (reducing capillary perfusion).</li>\n      <li><i>Gross Appearance:</i> The liver-like firmness is retained, but the color shifts from dark red to dry, granular, grey-brown or grey-pink. Visceral pleura is coated with thick, yellow-white shaggy fibrinous exudate (pleuropneumonia). Interlobular septa are prominently distended by gelatinous fibrin (marbled appearance in cattle).</li>\n      <li><i>Microscopic Appearance:</i> Alveoli are completely distended with dense, contracted fibrin plugs and densely packed degenerating neutrophils and macrophages. Erythrocytes are lysed and dehemoglobinized. Capillaries are compressed and empty.</li>\n    </ul>\n  </li>\n  <li><b>Stage 4: Resolution (Day 8 onwards)</b>\n    <ul>\n      <li><i>Pathogenesis:</i> Neutrophil and macrophage proteolytic enzymes (collagenases, elastases, plasmin) digest and liquefy the fibrinous exudate.</li>\n      <li><i>Gross Appearance:</i> The lung gradually softens, becomes spongy, and pinkish-red air-containing areas reappear. Fluid exudate is cleared by coughing or lymphatic drainage.</li>\n      <li><i>Microscopic Appearance:</i> Granular debris in alveoli is ingested by alveolar macrophages; debris cleared, alveolar epithelium regenerates from Type II cells, restoring normal airspaces.</li>\n    </ul>\n  </li>\n</ol>\n\n<h3>3. Sequelae and Complications</h3>\n<ul>\n  <li><b>Carnification (Organization of Exudate):</b> If fibrinous exudate is not digested, fibroblasts and capillary buds grow into the alveolar fibrinous casts, converting the lung into fleshy, non-functional fibrous tissue.</li>\n  <li><b>Pulmonary Abscessation:</b> Pyogenic bacteria (<i>Trueperella pyogenes</i>) cause focal liquefactive destruction.</li>\n  <li><b>Gangrene of the Lung:</b> Superadded saprophytic infection (aspiration) turns the lung into a foul-smelling, greenish-black, necrotic mush.</li>\n  <li><b>Pleural Adhesions:</b> Organization of pleural fibrinous exudate forms permanent fibrous bands between parietal and visceral pleura.</li>\n  <li><b>Death:</b> Hypoxemia, hypercapnia, toxemia, and acute cor pulmonale (right heart failure).</li>\n</ul>",
      "keyPoints": [
        "Definition: Inflammation of lung parenchyma and associated airways.",
        "Classification: Bronchopneumonia (cranioventral, aerogenous); Lobar (uniform lobe consolidation); Interstitial (diffuse, hematogenous/toxic); Granulomatous (nodular).",
        "Stage 1 Congestion: Hyperaemia, heavy boggy lung, serous alveolar fluid.",
        "Stage 2 Red Hepatization: Liver-like firm red consolidation, alveoli packed with fibrin, RBCs, and neutrophils; sinks in water.",
        "Stage 3 Grey Hepatization: Grey-pink dry firm liver consistency, capillary compression, RBC lysis, dense neutrophil-macrophage plug, thick pleurisy, marbling.",
        "Stage 4 Resolution: Enzymatic liquefaction of fibrin, macrophage clearance, re-aeration.",
        "Complications: Carnification (fibrous organization), abscessation, gangrene, pleural adhesions, toxemic death."
      ],
      "table": null,
      "pyq": [
        "IVRI 2023",
        "TANUVAS 2022",
        "GADVASU 2021",
        "RAJUVAS 2020"
      ]
    },
    {
      "id": "u2-qa-22",
      "type": "long",
      "marks": 12,
      "question": "Describe the Pathology of the Digestive System: Acute and Chronic Ruminal Acidosis (Grain Overload) — Etiology, pathogenesis, chemical cascade, rumenitis, liver abscesses, and laminitis.",
      "topicId": "u2-t01",
      "answer": "<p><b>Definition:</b> Acute Ruminal Acidosis ('Grain Overload', 'Lactic Acidosis', 'Rumen Impaction') is a metabolic and digestive disorder of ruminants caused by the sudden, unadapted ingestion of excessive quantities of rapidly fermentable carbohydrate-rich feeds (wheat, corn, barley, molasses, bread).</p>\n\n<h3>1. Pathogenesis and Chemical Cascade</h3>\n<ol>\n  <li><b>Carbohydrate Influx:</b> Ingestion of large amounts of starch or sugars floods the rumen with fermentable substrate.</li>\n  <li><b>Proliferation of <i>Streptococcus bovis</i>:</b> <i>S. bovis</i> rapidly multiplies, fermenting carbohydrates into large quantities of <b>L-lactic acid</b>.</li>\n  <li><b>Rumen pH Drop:</b> As lactic acid accumulates, ruminal pH plunges from normal (6.0–6.8) to <b>below 5.0</b>.</li>\n  <li><b>Death of Normal Microflora:</b> The severe acidic environment destroys the normal cellulolytic Gram-negative flora (bacteroides, protozoa) and ciliate protozoa (rumen motility ceases).</li>\n  <li><b>Proliferation of <i>Lactobacillus</i> species:</b> Acid-tolerant <i>Lactobacillus</i> species take over at pH < 4.8, producing both <b>L- and D-lactic acid</b>. D-lactic acid cannot be efficiently metabolized by ruminant tissues.</li>\n  <li><b>Hyperosmotic Fluid Shift:</b> Concentrated lactic acid drastically increases the osmotic pressure of ruminal fluid. Massive volumes of water are drawn from the systemic circulation into the rumen lumen:\n    <ul>\n      <li>Causes severe, life-threatening <b>systemic dehydration</b> and <b>hypovolaemic shock</b>.</li>\n      <li>Produces marked ruminal distension with sloshing, splashy fluid contents.</li>\n    </ul>\n  </li>\n  <li><b>Systemic Metabolic Acidosis:</b> Absorption of D- and L-lactic acid into the portal bloodstream overwhelms bicarbonate buffering capacity, plunging blood pH (<7.2) and causing fatal metabolic acidosis.</li>\n</ol>\n\n<h3>2. Pathology of Chemical and Mycotic Rumenitis</h3>\n<ul>\n  <li><b>Chemical Rumenitis:</b> Severe lactic acid corrosion causes hydropic degeneration of the stratified squamous epithelium lining the ruminal papillae, progressing to intraepithelial vesicle formation, mucosal erosion, and extensive ulceration.</li>\n  <li><b>Secondary Mycotic Rumenitis:</b> Denuded ruminal ulcers permit invasion of opportunistic fungi (<i>Zygomycetes</i>: <i>Rhizopus</i>, <i>Absidia</i>, <i>Mucor</i>). Fungal hyphae are angioinvasive, penetrating ruminal submucosal arteries and veins, causing thrombosis, circular hemorrhagic infarctions, and transmural ruminal necrosis.</li>\n  <li><b>Secondary Bacterial Rumenitis:</b> <i>Fusobacterium necrophorum</i> and <i>Trueperella pyogenes</i> invade damaged mucosa, producing foul diphtheritic pseudomembranes.</li>\n</ul>\n\n<h3>3. Pathogenesis of Hepatic Abscesses</h3>\n<p>Bacteria (primarily <i>Fusobacterium necrophorum</i> and <i>Trueperella pyogenes</i>) colonize the ulcerative ruminal lesions and enter the submucosal ruminal veins. The organisms travel via the portal vein directly into the liver parenchyma (<b>embolic dissemination</b>), where they lodge in hepatic sinusoids, producing multifocal coagulative necrosis that matures into encapsulated, foul-smelling, greenish-yellow <b>hepatic abscesses</b>.</p>\n\n<h3>4. Pathogenesis of Laminitis (Founder)</h3>\n<p>Lysis of Gram-negative microflora in the acidic rumen releases massive amounts of <b>endotoxins (lipopolysaccharides - LPS)</b>. Concurrently, bacterial decarboxylation of amino acids generates vasoactive amines (<b>histamine, tryptamine</b>). Absorption of these toxins into the systemic circulation causes intense peripheral digital arteriolar constriction followed by venular dilatation in the equine and bovine hoof. The resulting microvascular thrombosis and ischemic necrosis of the sensitive digital laminae causes separation of the laminar dermis and rotation of the pedal bone (<b>acute laminitis</b>).</p>\n\n<h3>5. Gross and Microscopic Lesions</h3>\n<ul>\n  <li><b>Rumen:</b> Filled with watery, sour-smelling, gray-brown porridge-like fluid; mucosa is hyperemic, easily sloughed, with large patchy ulcers covered by brownish crusts.</li>\n  <li><b>Liver:</b> Multiple discrete abscesses surrounded by fibrous capsules.</li>\n  <li><b>Kidneys:</b> Acute tubular necrosis (nephrosis) due to severe hypovolemic shock and hemoglobinuria/myoglobinuria.</li>\n  <li><b>Blood:</b> Thick, dark, hemoconcentrated blood (PCV elevated to 50–60%).</li>\n</ul>",
      "keyPoints": [
        "Etiology: Excessive ingestion of rapidly fermentable carbohydrates (grain overload).",
        "Chemical cascade: Streptococcus bovis -> L-lactic acid -> pH < 5.0 -> Lactobacillus -> D-lactic acid -> death of protozoa/cellulolytics.",
        "Fluid shift: Rumen becomes hyperosmotic; draws systemic water -> severe dehydration, splashy rumen, hypovolemic shock, metabolic acidosis.",
        "Rumenitis: Chemical erosion -> Secondary mycotic rumenitis (Mucor/Absidia angioinvasive thrombosis) and necrobacillosis.",
        "Liver abscesses: Ruminal ulceration -> portal embolic transport of Fusobacterium necrophorum -> multiple liver abscesses.",
        "Laminitis: Release of bacterial endotoxins (LPS) and histamine -> digital laminar microvascular ischemia."
      ],
      "table": null,
      "pyq": [
        "IVRI 2023",
        "GADVASU 2022",
        "TANUVAS 2021",
        "RAJUVAS 2019"
      ]
    },
    {
      "id": "u2-qa-23",
      "type": "long",
      "marks": 12,
      "question": "Describe the Pathology of the Urinary System: Renal Failure (Acute vs Chronic) — Etiology, pathogenesis, functional derangements, uremic toxins, and extra-renal lesions of uremia.",
      "topicId": "u2-t07",
      "answer": "<p><b>Definition:</b> Renal failure is the clinical and pathological syndrome resulting from the inability of the kidneys to excrete metabolic waste products, maintain fluid and electrolyte homeostasis, and perform endocrine functions.</p>\n\n<h3>1. Acute vs Chronic Renal Failure</h3>\n<ul>\n  <li><b>Acute Renal Failure (ARF):</b> Abrupt cessation of renal function (hours to days), typically manifesting as <b>oliguria</b> or <b>anuria</b>. Caused by acute tubular necrosis (ischemia from shock, nephrotoxins like heavy metals, gentamycin, oxalates) or acute urinary obstruction. Kidneys are bilaterally enlarged, swollen, tense, and pale.</li>\n  <li><b>Chronic Renal Failure (CRF):</b> Progressive, irreversible destruction of nephrons over months to years. Typically manifests as <b>polyuria, polydipsia, and isosthenuria</b> (fixed specific gravity 1.008–1.012). Caused by chronic glomerulonephritis, amyloidosis, chronic interstitial nephritis. Kidneys are shrunken, fibrotic, firm, pitted, and pale with adherent capsules ('end-stage kidney').</li>\n</ul>\n\n<h3>2. Uremia and Uremic Toxins</h3>\n<p><b>Uremia</b> is the polysystemic toxic syndrome resulting from the retention of urinary constituents in the blood combined with failure of endocrine and metabolic renal functions. Key toxins include: urea, creatinine, guanidines, phenolic acids, middle-molecular-weight peptides, and parathyroid hormone (PTH).</p>\n\n<h3>3. Extra-Renal Lesions of Uremia</h3>\n<p>Because uremic toxins circulate throughout the body and urea is cleaved by bacterial ureases into caustic <b>ammonia</b>, uremia produces characteristic systemic lesions in non-renal organs:</p>\n\n<ol>\n  <li><b>Alimentary System:</b>\n    <ul>\n      <li><i>Uremic Stomatitis & Glossitis:</i> Salivary urea is converted to ammonia by oral bacteria, causing caustic chemical ulceration of the buccal mucosa and margins of the tongue (<b>ulcerative glossitis</b>) with a foul uremic breath odour. In severe cases, the anterior tip of the tongue undergoes bilateral ischemic necrosis and sloughs off.</li>\n      <li><i>Uremic Gastritis / Enterocolitis:</i> Caustic ammonia damage combined with uremic arteriolar fibrinoid necrosis produces acute hemorrhagic, ulcerative gastritis (dogs/cats) or ulcerative typhlocolitis (horses). The gastric mucosa appears thickened, congested, brownish-black, with mineral deposits in the lamina propria.</li>\n    </ul>\n  </li>\n  <li><b>Cardiovascular System:</b>\n    <ul>\n      <li><i>Uremic Fibrinous Pericarditis:</i> Accumulation of uremic toxins damages endothelial membranes, causing rich fibrinous exudation into the pericardial sac (bread-and-butter pericarditis).</li>\n      <li><i>Uremic Arteritis / Fibrinoid Necrosis:</i> Endothelial injury causes widespread arteriolar degeneration and calcification, particularly in the left atrial subendocardium and gastric arterioles.</li>\n    </ul>\n  </li>\n  <li><b>Respiratory System:</b>\n    <ul>\n      <li><i>Uremic Pneumonitis:</i> Increased alveolar capillary permeability produces pulmonary oedema and distinctive calcification of alveolar basement membranes and smooth muscle (gritty lung on cut section).</li>\n    </ul>\n  </li>\n  <li><b>Skeletal System:</b>\n    <ul>\n      <li><i>Renal Secondary Hyperparathyroidism ('Rubber Jaw'):</i> Failing kidneys cannot excrete phosphate (causing <b>hyperphosphatemia</b>) and cannot convert 25-(OH) Vitamin D to active <b>1,25-(OH)2 Vitamin D3 (calcitriol)</b>. Hypocalcaemia potently stimulates parathyroid glands to secrete excessive <b>Parathyroid Hormone (PTH)</b>.</li>\n      <li>PTH activates osteoclasts, which resorb bone throughout the skeleton. Normal bone is replaced by proliferating fibrous tissue (<b>Fibrous Osteodystrophy</b>). Bones become soft, pliable, and rubbery, most prominently affecting the mandible and maxilla ('rubber jaw' in dogs).</li>\n    </ul>\n  </li>\n  <li><b>Hematopoietic System:</b>\n    <ul>\n      <li><i>Non-regenerative Normocytic Normochromic Anemia:</i> Loss of peritubular interstitial cells leads to complete deficiency of <b>Erythropoietin (EPO)</b> synthesis, combined with shortened RBC survival and toxic marrow suppression.</li>\n    </ul>\n  </li>\n</ol>",
      "keyPoints": [
        "Acute vs Chronic: ARF is sudden, oliguric, swollen pale kidneys; CRF is insidious, polyuric (isosthenuria), shrunken pitted fibrotic 'end-stage' kidneys.",
        "Uremia: Systemic toxic state from retained metabolites (urea, guanidines, PTH).",
        "Alimentary lesions: Ulcerative stomatitis/glossitis (ammonia necrosis of tongue margins), ulcerative hemorrhagic gastritis.",
        "Cardiovascular: Uremic fibrinous pericarditis, fibrinoid arteriolar necrosis.",
        "Respiratory: Uremic pneumonitis with alveolar membrane calcification.",
        "Skeletal: Renal secondary hyperparathyroidism -> fibrous osteodystrophy ('rubber jaw') from hyperphosphatemia and calcitriol deficiency.",
        "Hematopoietic: Non-regenerative normocytic normochromic anemia due to loss of erythropoietin (EPO)."
      ],
      "table": null,
      "pyq": [
        "IVRI 2023",
        "GADVASU 2022",
        "TANUVAS 2021",
        "KVAFSU 2020"
      ]
    },
    {
      "id": "u2-qa-24",
      "type": "long",
      "marks": 12,
      "question": "Describe the Pathology of the Cardiovascular System: Congestive Heart Failure (CHF) — Left-sided vs Right-sided heart failure, compensatory cardiac mechanisms, systemic venous congestion, and organ pathology.",
      "topicId": "u2-t04",
      "answer": "<p><b>Definition:</b> Congestive Heart Failure (CHF) is the clinical and pathological syndrome in which the heart is unable to pump an adequate volume of blood to meet the metabolic requirements of metabolizing tissues, or can do so only from an elevated ventricular filling pressure.</p>\n\n<h3>1. Cardiac Compensatory Mechanisms</h3>\n<p>When cardiac workload increases or myocardial contractility declines, the cardiovascular system deploys three main homeostatic adaptations:</p>\n<ul>\n  <li><b>Frank-Starling Mechanism:</b> Increased ventricular end-diastolic volume stretches myocardial fibres, increasing force of contraction.</li>\n  <li><b>Myocardial Hypertrophy:</b>\n    <ul>\n      <li><i>Concentric Hypertrophy:</i> Occurs in response to <b>pressure overload</b> (e.g., aortic/pulmonary stenosis, systemic hypertension). Sarcomeres are added in parallel, causing thick ventricular walls with a small, constricted ventricular chamber.</li>\n      <li><i>Eccentric Hypertrophy:</i> Occurs in response to <b>volume overload</b> (e.g., valvular insufficiency, septal defects). Sarcomeres are added in series, causing marked chamber dilatation with normal or slightly thinned ventricular walls.</li>\n    </ul>\n  </li>\n  <li><b>Neurohormonal Activation:</b> Decreased cardiac output activates the sympathetic nervous system (tachycardia, vasoconstriction) and the <b>Renin-Angiotensin-Aldosterone System (RAAS)</b>, promoting sodium and water retention to expand plasma volume.</li>\n</ul>\n\n<h3>2. Left-Sided Heart Failure (LHF)</h3>\n<p><b>Etiology:</b> Myxomatous mitral valve disease, aortic stenosis, dilated or hypertrophic cardiomyopathy, myocardial infarction.</p>\n<p><b>Pathogenesis & Organ Pathology:</b></p>\n<ul>\n  <li>Inability of the left ventricle to empty increases pressure in the left atrium and pulmonary veins, causing <b>pulmonary venous congestion</b> and pulmonary hypertension.</li>\n  <li><b>Lungs:</b> Heavy, wet, dark red, failure to collapse. On cut surface, blood-stained, frothy fluid exudes from airways (<b>acute pulmonary oedema</b>). In chronic LHF, red blood cells diapedese into alveoli and are phagocytosed by alveolar macrophages. Macrophages accumulate golden-brown hemosiderin pigment, becoming pathognomonic <b>'Heart Failure Cells'</b>. Interstitial fibrosis and pulmonary arterial sclerosis develop over time.</li>\n  <li><b>Kidneys:</b> Renal hypoperfusion leads to prerenal azotemia and tubular degeneration.</li>\n</ul>\n\n<h3>3. Right-Sided Heart Failure (RHF)</h3>\n<p><b>Etiology:</b> Pulmonary hypertension (Cor Pulmonale due to chronic lung disease, high altitude disease 'brisket disease'), tricuspid valvular endocarditis, pulmonic stenosis, dilated cardiomyopathy, traumatic reticulopericarditis.</p>\n<p><b>Pathogenesis & Organ Pathology:</b></p>\n<ul>\n  <li>Failure of the right ventricle increases systemic venous pressure in the cranial and caudal venae cavae, producing systemic venous congestion and dependent transudation:</li>\n  <li><b>Liver (Chronic Passive Congestion / 'Nutmeg Liver'):</b>\n    <ul>\n      <li>Venous blood backs up via the hepatic veins into the centrilobular central veins and sinusoids.</li>\n      <li>Centrilobular hepatocytes undergo severe hypoxic atrophy and coagulative necrosis, appearing dark red.</li>\n      <li>Midzonal and periportal hepatocytes (receiving fresher portal blood) undergo sublethal fatty degeneration, appearing pale yellow.</li>\n      <li>The contrasting zones of dark red centrilobular congestion and yellow-tan periportal fatty change produce the classic reticulated <b>'Nutmeg Liver'</b> pattern. In chronic cases, centrilobular bridging fibrosis leads to 'cardiac cirrhosis'.</li>\n    </ul>\n  </li>\n  <li><b>Spleen (Cyanotic Induration):</b> Chronically congested, enlarged, firm, dark bluish-purple with thick capsule and rounded edges; on cut section, blood oozes freely.</li>\n  <li><b>Peripheral Oedema & Effusions:</b>\n    <ul>\n      <li><i>Dogs & Cats:</i> High portal sinusoidal permeability causes fluid transudation directly into the peritoneal cavity (<b>Ascites</b>).</li>\n      <li><i>Cattle:</i> High gravity dependency produces massive subcutaneous pitting oedema in the pectoral area (<b>Brisket Oedema</b>) and intermandibular space (<b>Bottle Jaw</b>).</li>\n    </ul>\n  </li>\n</ul>",
      "keyPoints": [
        "Definition: Inability of the heart to maintain adequate tissue perfusion.",
        "Compensations: Frank-Starling law, concentric hypertrophy (pressure overload), eccentric hypertrophy (volume overload), RAAS activation.",
        "Left-sided HF: Left ventricle failure -> pulmonary venous congestion -> pulmonary oedema and 'heart failure cells' (hemosiderin-laden alveolar macrophages).",
        "Right-sided HF: Right ventricle failure -> systemic venous congestion -> 'Nutmeg Liver' (centrilobular congestion + periportal fatty change), cyanotic induration of spleen.",
        "Species manifestations: Dogs develop ascites; cattle develop brisket oedema and bottle jaw."
      ],
      "table": null,
      "pyq": [
        "IVRI 2023",
        "TANUVAS 2022",
        "GADVASU 2021",
        "RAJUVAS 2020"
      ]
    },
    {
      "id": "u2-qa-25",
      "type": "long",
      "marks": 12,
      "question": "Describe the Pathology of the Female Reproductive System: Metritis, Pyometra, and major infectious causes of abortion in cattle and sheep (Brucellosis, Toxoplasmosis, Campylobacteriosis, Mycotic abortion) — Pathogenesis and placental lesions.",
      "topicId": "u2-t08",
      "answer": "<p>Pathology of the female reproductive system centers on uterine inflammatory conditions and infectious reproductive failures (abortions).</p>\n\n<h3>1. Metritis and Pyometra</h3>\n<ul>\n  <li><b>Metritis:</b> Acute, severe inflammation affecting all layers of the uterine wall (endometrium, myometrium, perimetrium). Commonly occurs postpartum in dairy cattle following dystocia, retained fetal membranes, or contaminated calving. Uterus is enlarged, atonic, flaccid, containing foul-smelling reddish-black watery lochial fluid; high risk of systemic puerperal toxemia and peritonitis.</li>\n  <li><b>Pyometra:</b> Chronic, suppurative accumulation of purulent or mucopurulent exudate within the uterine lumen:\n    <ul>\n      <li><i>In the Bitch:</i> Occurs during <b>diestrus</b> under prolonged <b>progesterone stimulation</b>. Progesterone induces <b>Cystic Endometrial Hyperplasia (CEH)</b> and inhibits myometrial contractions while suppressing local uterine leukocyte phagocytosis. Opportunistic <i>Escherichia coli</i> ascends from the vagina, establishing severe suppurative endometritis with massive uterine distension.</li>\n      <li><i>In Cattle:</i> Usually follows post-insemination infection (<i>Tritrichomonas foetus</i>) or retained corpus luteum trapping post-partum puerperal infection (<i>Trueperella pyogenes</i>); animal exhibits pseudopregnancy with uterine horns distended with thick creamy pus.</li>\n    </ul>\n  </li>\n</ul>\n\n<h3>2. Infectious Causes of Ruminant Abortion & Placental Pathology</h3>\n<p>The placenta is the primary interface between dam and fetus; specific pathogens target distinctive anatomical regions of the ruminant syndesmochorial placentome (cotyledons vs intercotyledonary chorioallantois):</p>\n\n<ol>\n  <li><b>Bovine Brucellosis (<i>Brucella abortus</i> - 'Bang's Disease'):</b>\n    <ul>\n      <li><i>Pathogenesis:</i> <i>B. abortus</i> possesses marked tropism for <b>erythritol</b> (a four-carbon polyol sugar concentrated in ruminant chorionic trophoblast cells). Ingested organisms spread hematogenously, invading fetal trophoblasts in the placentomes.</li>\n      <li><i>Placental Lesions:</i> Severe, diffuse necrotizing placentitis. The <b>cotyledons</b> are enlarged, necrotic, dull yellow-gray, and covered with brown-yellow exudate. Uniquely, the <b>intercotyledonary placenta</b> is severely affected: leathery, thickened, opaque, wrinkled, resembling cooked Moroccan leather (edematous and gelatinous).</li>\n      <li><i>Fetus:</i> Aborted during the 7th–9th month of gestation; exhibits serosanguinous subcutaneous oedema, fibrinous pleuritis, and bronchopneumonia (stomach contains cloudy mucus).</li>\n    </ul>\n  </li>\n  <li><b>Ovine Toxoplasmosis (<i>Toxoplasma gondii</i>):</b>\n    <ul>\n      <li><i>Pathogenesis:</i> Ingestion of sporulated oocysts shed by cats. Tachyzoites specifically invade and multiply inside dividing trophoblast cells of the fetal cotyledons.</li>\n      <li><i>Placental Lesions:</i> Pathognomonic appearance: <b>cotyledons are bright red and peppered with multiple discrete, 1–2 mm chalky-white calcified necrotic foci ('white speckling / frosted cotyledons')</b>. Crucially, the <b>intercotyledonary placenta remains completely normal and transparent</b> (differentiates from Brucella and Campylobacter).</li>\n      <li><i>Fetus:</i> Mummification or late-term abortion; focal encephalitis with microglial nodules.</li>\n    </ul>\n  </li>\n  <li><b>Campylobacteriosis (<i>Campylobacter fetus</i> subsp. <i>fetus</i> & <i>venerealis</i>):</b>\n    <ul>\n      <li><i>Placental Lesions:</i> Severe hemorrhagic necrotizing cotyledonitis with thickened, brownish intercotyledonary placenta.</li>\n      <li><i>Fetal Lesions:</i> Pathognomonic target: <b>fetal liver exhibits multifocal, circumscribed, pale yellow-tan necrotic foci with central depression ('target lesions' / bull's-eye lesions)</b> in 25–40% of aborted sheep fetuses.</li>\n    </ul>\n  </li>\n  <li><b>Mycotic Abortion (<i>Aspergillus fumigatus</i>, <i>Zygomycetes</i>):</b>\n    <ul>\n      <li><i>Pathogenesis:</i> Hematogenous spread from maternal respiratory tract or gut following ingestion of moldy hay or silage, establishing fungal placentitis.</li>\n      <li><i>Placental Lesions:</i> Heavy, necrotic, leathery placentitis. Cotyledons are severely swollen, necrotic, brownish-red, firmly adherent to maternal caruncles (retained placenta). Intercotyledonary tissue is thickened like cardboard with raised yellow-gray plaques.</li>\n      <li><i>Fetal Lesions:</i> In 25% of aborted calves, fetus exhibits circumscribed, elevated, gray-white, ringworm-like mycotic plaques on the skin (especially around head, eyes, and shoulders).</li>\n    </ul>\n  </li>\n</ol>",
      "keyPoints": [
        "Metritis vs Pyometra: Metritis is acute full-thickness uterine wall inflammation (postpartum); Pyometra is suppurative pus accumulation within the lumen (CEH-diestrus complex in bitch; Trueperella in cow).",
        "Brucella abortus: Tropism for erythritol in ruminant trophoblasts; diffuse necrotizing placentitis; thick leathery 'Moroccan leather' intercotyledonary placenta.",
        "Toxoplasma gondii: Discrete chalky-white necrotic flecks on bright red cotyledons ('speckled cotyledons'); intercotyledonary placenta remains normal and clear.",
        "Campylobacter: Severe hemorrhagic placentitis; pathognomonic multifocal circumscribed 'target lesions' in fetal liver.",
        "Mycotic abortion: Aspergillus fumigatus; leathery cardboard-like intercotyledonary placenta; fetal cutaneous ringworm-like plaques."
      ],
      "table": null,
      "pyq": [
        "IVRI 2023",
        "TANUVAS 2022",
        "GADVASU 2021",
        "MAFSU 2020"
      ]
    }
  ],
  "unit-3": [
    {
      "id": "u3-qa-01",
      "type": "define",
      "marks": 2,
      "question": "Define Neoplasia and Anaplasia.",
      "topicId": "u3-t01",
      "answer": "<p><b>Neoplasia</b> (Willis' definition) is an abnormal mass of tissue, the growth of which exceeds and is uncoordinated with that of normal tissues, and persists in the same excessive manner after the cessation of the stimuli which evoked the change.</p><p><b>Anaplasia</b> is the lack of differentiation and backward dedifferentiation of cells, characterized by cellular pleomorphism, nuclear hyperchromatism, high nuclear-to-cytoplasmic ratio, prominent nucleoli, and atypical bizarre mitotic figures (the hallmark of malignancy).</p>",
      "keyPoints": [
        "Neoplasia: Autonomous, uncoordinated, irreversible abnormal tissue growth exceeding normal tissue.",
        "Anaplasia: Lack of differentiation, dedifferentiation, and cellular/nuclear atypia (hallmark of malignant tumours)."
      ],
      "table": null,
      "pyq": [
        "IVRI 2023",
        "TANUVAS 2021",
        "GADVASU 2020"
      ]
    },
    {
      "id": "u3-qa-02",
      "type": "define",
      "marks": 2,
      "question": "Define Carcinoma and Sarcoma with an example of each.",
      "topicId": "u3-t01",
      "answer": "<p><b>Carcinoma:</b> A malignant neoplasm arising from <b>epithelial tissues</b> (ectoderm, endoderm, or mesothelium/urothelium); typically spreads preferentially via <b>lymphatics</b> to regional lymph nodes.</p><ul><li><i>Example:</i> Squamous cell carcinoma (bovine cancer eye), Mammary adenocarcinoma in bitches.</li></ul><p><b>Sarcoma:</b> A malignant neoplasm arising from <b>mesenchymal tissues</b> (connective tissue, bone, cartilage, muscle, blood vessels); typically spreads preferentially via the <b>bloodstream (hematogenous route)</b> to lungs.</p><ul><li><i>Example:</i> Osteosarcoma in large breed dogs, Fibrosarcoma, Hemangiosarcoma.</li></ul>",
      "keyPoints": [
        "Carcinoma: Malignant epithelial tumour; lymphatic spread (Squamous cell carcinoma).",
        "Sarcoma: Malignant mesenchymal tumour; hematogenous spread (Osteosarcoma, Fibrosarcoma)."
      ],
      "table": null,
      "pyq": [
        "GADVASU 2022",
        "RAJUVAS 2021",
        "IVRI 2019"
      ]
    },
    {
      "id": "u3-qa-03",
      "type": "define",
      "marks": 2,
      "question": "Define Teratoma and Hamartoma.",
      "topicId": "u3-t01",
      "answer": "<p><b>Teratoma:</b> A true neoplasm derived from totipotential germ cells (most commonly in ovaries or testes) containing disorganized tissues representative of <b>more than one germ layer</b> (ectoderm, mesoderm, endoderm; e.g., equine testicular teratoma containing hair, teeth, bone, and neural tissue).</p><p><b>Hamartoma:</b> A non-neoplastic, developmental malformation characterized by a disorganized, circumscribed mass composed of indigenous mature cellular elements normally present in that anatomical organ (e.g., vascular hamartoma in liver, cutaneous collagenous hamartoma in dogs).</p>",
      "keyPoints": [
        "Teratoma: True germ cell neoplasm containing tissues from multiple germ layers (hair, teeth, bone).",
        "Hamartoma: Non-neoplastic disorganized overgrowth of tissues mature and indigenous to the organ."
      ],
      "table": null,
      "pyq": [
        "TANUVAS 2022",
        "WBUAFS 2020"
      ]
    },
    {
      "id": "u3-qa-04",
      "type": "define",
      "marks": 2,
      "question": "Define Metastasis and state its three principal routes of dissemination.",
      "topicId": "u3-t04",
      "answer": "<p><b>Metastasis</b> is the transfer of malignant neoplastic cells from the primary tumour site to a non-contiguous distant anatomical site, where they establish secondary neoplastic colonies (the unequivocal hallmark of malignancy).</p><p><b>Three Principal Routes:</b></p><ol><li><b>Lymphatic spread:</b> Typical of carcinomas, travelling to regional draining lymph nodes.</li><li><b>Hematogenous (vascular) spread:</b> Typical of sarcomas, invading venules and travelling via blood to lungs and liver.</li><li><b>Transcoelomic spread (seeding of body cavities):</b> Neoplastic cells break through serosal surfaces into peritoneal, pleural, or pericardial cavities (e.g., ovarian carcinoma, mesothelioma).</li></ol>",
      "keyPoints": [
        "Metastasis: Spread of malignant cells to non-contiguous distant sites (unequivocal sign of malignancy).",
        "Three routes: 1. Lymphatic (carcinomas), 2. Hematogenous (sarcomas), 3. Transcoelomic (seeding of serosal cavities)."
      ],
      "table": null,
      "pyq": [
        "IVRI 2022",
        "GADVASU 2021",
        "KVAFSU 2019"
      ]
    },
    {
      "id": "u3-qa-05",
      "type": "define",
      "marks": 2,
      "question": "Define Paraneoplastic Syndrome and give two veterinary examples.",
      "topicId": "u3-t05",
      "answer": "<p><b>Paraneoplastic Syndrome</b> refers to systemic signs and symptoms that occur at sites distant from the primary tumour or its metastases, caused by tumour secretion of functional hormones, growth factors, or cytokines, rather than by direct physical mass effect or invasion.</p><p><b>Veterinary Examples:</b></p><ol><li><b>Humoral Hypercalcaemia of Malignancy (HHM):</b> Secretion of Parathyroid Hormone-related Protein (PTHrP) by <b>apocrine gland anal sac adenocarcinoma (AGASACA)</b> or <b>T-cell lymphoma</b> in dogs.</li><li><b>Hypoglycaemia:</b> Secretion of insulin by pancreatic beta-cell tumours (<b>Insulinoma</b>) in ferrets and dogs.</li></ol>",
      "keyPoints": [
        "Paraneoplastic syndrome: Non-metastatic systemic effects caused by tumour-secreted humoral factors.",
        "Examples: Hypercalcaemia of malignancy via PTHrP (Anal sac adenocarcinoma, Lymphoma); Hypoglycaemia (Insulinoma)."
      ],
      "table": null,
      "pyq": [
        "TANUVAS 2023",
        "IVRI 2020",
        "MAFSU 2018"
      ]
    },
    {
      "id": "u3-qa-06",
      "type": "define",
      "marks": 2,
      "question": "Define Packed Cell Volume (PCV) and state its clinical significance.",
      "topicId": "u3-t10",
      "answer": "<p><b>Packed Cell Volume (PCV)</b>, or Hematocrit (Hct), is the percentage of whole blood volume that is occupied by packed erythrocytes following maximal centrifugal packing in a microhematocrit tube (centrifuged at 12,000 rpm for 5 minutes).</p><p><b>Clinical Significance:</b></p><ul><li><b>Decreased PCV:</b> Direct diagnostic indicator of <b>anemia</b> (blood loss, hemolysis, or bone marrow depression).</li><li><b>Increased PCV:</b> Indicates <b>polycythemia</b>: relative (dehydration, hemoconcentration, splenic contraction) or absolute (chronic hypoxemia, erythropoietin-secreting renal tumours).</li><li>Allows concurrent visual assessment of the buffy coat (leukocytes/platelets) and plasma color (icterus, hemolysis, lipemia).</li></ul>",
      "keyPoints": [
        "PCV: Percentage of whole blood volume occupied by packed RBCs after centrifugation.",
        "Clinical utility: Primary test for anemia (low PCV) and dehydration/polycythemia (elevated PCV); reveals plasma color."
      ],
      "table": null,
      "pyq": [
        "IVRI 2023",
        "GADVASU 2021",
        "RAJUVAS 2019"
      ]
    },
    {
      "id": "u3-qa-07",
      "type": "define",
      "marks": 2,
      "question": "Define Erythrocytic Indices: MCV, MCH, and MCHC with their formula.",
      "topicId": "u3-t10",
      "answer": "<p><b>Erythrocytic (Wintrobe) Indices</b> are quantitative mathematical values that describe the average physical size and hemoglobin concentration of circulating red blood cells:</p><ol><li><b>Mean Corpuscular Volume (MCV):</b> Measures the average volume (size) of an individual RBC in femtolitres (fL):<br>$$\\text{MCV (fL)} = \\frac{\\text{PCV (\\%)} \\times 10}{\\text{TEC (millions/}\\mu\\text{L)}}$$</li><li><b>Mean Corpuscular Hemoglobin (MCH):</b> Measures the average absolute weight of hemoglobin inside an individual RBC in picograms (pg):<br>$$\\text{MCH (pg)} = \\frac{\\text{Hb (g/dL)} \\times 10}{\\text{TEC (millions/}\\mu\\text{L)}}$$</li><li><b>Mean Corpuscular Hemoglobin Concentration (MCHC):</b> Measures the average concentration of hemoglobin in a given volume of packed RBCs in g/dL (%):<br>$$\\text{MCHC (g/dL)} = \\frac{\\text{Hb (g/dL)} \\times 100}{\\text{PCV (\\%)}}$$</li></ol>",
      "keyPoints": [
        "MCV: Average RBC size in femtolitres (fL); classifies anemia as microcytic, normocytic, or macrocytic.",
        "MCH: Average hemoglobin weight per RBC in picograms (pg).",
        "MCHC: Hemoglobin concentration in packed RBCs (g/dL); classifies anemia as normochromic or hypochromic."
      ],
      "table": null,
      "pyq": [
        "TANUVAS 2023",
        "IVRI 2022",
        "KVAFSU 2020"
      ]
    },
    {
      "id": "u3-qa-08",
      "type": "define",
      "marks": 2,
      "question": "Define 'Shift to the Left' and distinguish Regenerative from Degenerative left shift.",
      "topicId": "u3-t11",
      "answer": "<p><b>Shift to the Left</b> is the abnormal presence of increased numbers of immature, non-segmented neutrophils (principally <b>band neutrophils</b>, and occasionally metamyelocytes) in peripheral blood, reflecting increased bone marrow granulopoiesis and accelerated release in response to inflammatory demand.</p><p><b>Distinction:</b></p><ul><li><b>Regenerative Left Shift:</b> High total leukocyte count (leukocytosis) with mature segmented neutrophils outnumbering immature band neutrophils; indicates adequate, functional bone marrow response to infection (favourable prognosis).</li><li><b>Degenerative Left Shift:</b> Normal or low total leukocyte count (neutropenia/leukopenia) with immature band neutrophils outnumbering mature segmented cells; indicates overwhelming tissue demand that has exhausted bone marrow reserves (guarded/grave prognosis).</li></ul>",
      "keyPoints": [
        "Shift to the left: Increased circulating immature band neutrophils in peripheral blood.",
        "Regenerative: Leukocytosis, mature neutrophils > band neutrophils (adequate marrow reserve).",
        "Degenerative: Leukopenia/normal TLC, band neutrophils > mature neutrophils (overwhelming infection, exhausted marrow)."
      ],
      "table": null,
      "pyq": [
        "IVRI 2021",
        "GADVASU 2020",
        "LUVAS 2019"
      ]
    },
    {
      "id": "u3-qa-09",
      "type": "define",
      "marks": 2,
      "question": "Define Exfoliative Cytology and Fine Needle Aspiration Cytology (FNAC).",
      "topicId": "u3-t14",
      "answer": "<p><b>Exfoliative Cytology:</b> The microscopic study of cells naturally shed (exfoliated) from mucosal surfaces or lining membranes, collected via swabs, scrapings, impressions, or aspiration of body cavity effusions (e.g., vaginal cytology in bitches for estrus cycle staging, peritoneal fluid analysis).</p><p><b>Fine Needle Aspiration Cytology (FNAC):</b> A rapid, minimally invasive diagnostic technique where a fine-gauge needle (21G–25G) attached to a syringe is inserted into a palpable mass or lymph node to aspirate cellular material for immediate smear preparation and cytological staining (e.g., distinguishing lipoma from mast cell tumour).</p>",
      "keyPoints": [
        "Exfoliative cytology: Examination of spontaneously shed or scraped surface cells (vaginal cytology, effusion fluid).",
        "FNAC: Aspiration of internal cellular material from solid masses using a fine 21-25G needle for diagnostic cytology."
      ],
      "table": null,
      "pyq": [
        "TANUVAS 2022",
        "IVRI 2019"
      ]
    },
    {
      "id": "u3-qa-10",
      "type": "define",
      "marks": 2,
      "question": "Define Rigor Mortis, Algor Mortis, and Livor Mortis.",
      "topicId": "u3-t17",
      "answer": "<p>The three classical post-mortem physical changes:</p><ol><li><b>Rigor Mortis:</b> Post-mortem muscular stiffening occurring 1–6 hours after death due to complete depletion of glycogen and <b>ATP</b>, preventing the detachment of actin-myosin cross-bridges (commences in head/neck, extends to limbs, and passes off after 24–48 hours as autolysis breaks down proteins).</li><li><b>Algor Mortis:</b> The progressive cooling of the dead body after cessation of metabolic heat production until it reaches ambient environmental temperature.</li><li><b>Livor Mortis (Post-mortem Hypostasis):</b> Gravitational pooling and settling of blood in the down-side (dependent) capillaries and venules of the recumbent carcass, producing dark red-purple skin and organ discoloration.</li></ol>",
      "keyPoints": [
        "Rigor mortis: Muscle stiffening due to loss of ATP preventing actin-myosin detachment.",
        "Algor mortis: Post-mortem body cooling to environmental temperature.",
        "Livor mortis: Gravitational settling of blood in dependent tissues (hypostatic congestion)."
      ],
      "table": null,
      "pyq": [
        "IVRI 2022",
        "GADVASU 2021",
        "WBUAFS 2019"
      ]
    },
    {
      "id": "u3-qa-11",
      "type": "define",
      "marks": 2,
      "question": "Define Veterolegal (Forensic) Necropsy and state the importance of Chain of Custody.",
      "topicId": "u3-t20",
      "answer": "<p><b>Veterolegal Necropsy:</b> A specialised post-mortem examination of an animal carcass conducted on official requisition from police, forest, or judicial authorities to ascertain the precise cause, mechanism, and manner of death for use as expert legal evidence in a court of law.</p><p><b>Importance of Chain of Custody:</b> The meticulous, unbroken chronological documentation, sealing, labelling, and signature trail recording every individual who collected, transported, received, and analyzed the forensic evidence/carcass, ensuring that specimens were never tampered with, altered, or substituted, thereby maintaining admissibility in court.</p>",
      "keyPoints": [
        "Veterolegal necropsy: Forensic post-mortem conducted on legal requisition to determine legal cause of death.",
        "Chain of custody: Unbroken written record of evidence handling ensuring court integrity and non-tampering."
      ],
      "table": null,
      "pyq": [
        "IVRI 2023",
        "TANUVAS 2021",
        "KVAFSU 2018"
      ]
    },
    {
      "id": "u3-qa-12",
      "type": "define",
      "marks": 2,
      "question": "Define Incised Wound vs Lacerated Wound in veterolegal medicine.",
      "topicId": "u3-t20",
      "answer": "<p><b>Incised Wound (Slash/Cut):</b> A clean wound inflicted by a sharp-edged weapon (scalpel, knife, razor), characterized by <b>clean-cut, regular, straight margins</b>, lack of tissue bridges, length greater than depth, and free bleeding without surrounding contusion.</p><p><b>Lacerated Wound (Tear):</b> A ragged wound inflicted by blunt force trauma (clubs, vehicular collision, animal bites), characterized by <b>irregular, torn, jagged margins</b>, presence of intact <b>tissue bridges</b> across the depth (nerves, vessels spanning the gap), and surrounding tissue contusion/bruising.</p>",
      "keyPoints": [
        "Incised wound: Sharp cutting edge; smooth clean margins, no tissue bridges, minimal bruising.",
        "Lacerated wound: Blunt trauma; ragged jagged margins, intact tissue bridges across the wound, prominent surrounding contusion."
      ],
      "table": null,
      "pyq": [
        "GADVASU 2023",
        "RAJUVAS 2020"
      ]
    },
    {
      "id": "u3-qa-13",
      "type": "diff",
      "marks": 5,
      "question": "Differentiate between Benign and Malignant Tumours.",
      "topicId": "u3-t02",
      "answer": "<p>The distinction between benign and malignant neoplasms is the fundamental decision in animal surgical oncology and pathology:</p>",
      "keyPoints": [
        "Benign tumours: Well-differentiated, slow expansion, fibrous capsule, non-invasive, no metastasis, amenable to local excision.",
        "Malignant tumours: Anaplastic/pleomorphic, rapid growth, infiltrative invasion, metastasize to distant organs, fatal if untreated.",
        "Metastasis and invasive destruction are the definitive criteria of malignancy."
      ],
      "table": {
        "title": "Comparison between Benign and Malignant Neoplasms",
        "headers": [
          "Feature / Criterion",
          "Benign Neoplasm",
          "Malignant Neoplasm"
        ],
        "rows": [
          [
            "Degree of differentiation",
            "Well-differentiated; cells closely resemble normal parent tissue",
            "Poorly differentiated to anaplastic; dedifferentiated cells (anaplasia)"
          ],
          [
            "Rate of growth",
            "Slow, progressive growth; may reach a plateau or regress",
            "Rapid, erratic growth; autonomous and aggressive"
          ],
          [
            "Mitotic activity",
            "Rare mitoses; normal bipolar mitotic figures",
            "Frequent, abundant mitoses; atypical, bizarre tripolar/quadripolar figures"
          ],
          [
            "Mode of growth & boundary",
            "Expansile, pushing margins; does not invade surrounding stroma",
            "Infiltrative, permeating, destructive; invades surrounding normal tissue"
          ],
          [
            "Fibrous capsule",
            "Usually present; well-formed pseudo-capsule or true capsule",
            "Absent or poorly formed; tumour cells penetrate and breach any capsule"
          ],
          [
            "Metastasis",
            "Never metastasizes (absent)",
            "Capable of metastasis (definitive hallmark of malignancy)"
          ],
          [
            "Nuclear morphology",
            "Normal nuclear size and shape; normal nuclear-to-cytoplasmic (N:C) ratio (1:4 to 1:6)",
            "Pleomorphic, enlarged hyperchromatic nuclei; high N:C ratio (1:1 to 1:2); prominent multiple nucleoli"
          ],
          [
            "Secondary changes",
            "Rarely undergoes necrosis or ulceration",
            "Frequent central ischemic necrosis, hemorrhage, ulceration, and infarction"
          ],
          [
            "Clinical prognosis & effect",
            "Favourable; amenable to complete surgical cure; causes harm only by local pressure",
            "Guarded to poor; destructive local invasion, systemic cachexia, recurrence and fatal metastasis"
          ]
        ]
      },
      "pyq": [
        "IVRI 2023",
        "TANUVAS 2022",
        "GADVASU 2021",
        "MAFSU 2019"
      ]
    },
    {
      "id": "u3-qa-14",
      "type": "short",
      "marks": 5,
      "question": "Discuss Oncogenic Viruses in domestic animals: Retroviruses, Papillomaviruses, and Herpesviruses.",
      "topicId": "u3-t03",
      "answer": "<p>Oncogenic viruses insert viral oncogenes (v-oncs) or activate cellular proto-oncogenes (c-oncs) to drive autonomous cellular proliferation:</p>\n<ol>\n  <li><b>Retroviruses (Oncornaviruses - Retroviridae):</b>\n    <ul>\n      <li><i>Mechanism:</i> Reverse transcriptase integrates viral DNA (provirus) into host chromosomal genome. Acutely transforming retroviruses carry captured viral oncogenes (v-src, v-myc, v-abl); slowly transforming retroviruses cause insertional mutagenesis next to cellular proto-oncogenes.</li>\n      <li><i>Examples:</i>\n        <ul>\n          <li><b>Bovine Leukemia Virus (BLV):</b> Enzootic Bovine Leukosis (B-cell lymphosarcoma affecting abomasum, heart right atrium, uterus, and lymph nodes).</li>\n          <li><b>Feline Leukemia Virus (FeLV) & Feline Sarcoma Virus (FeSV):</b> Lymphoma, fibrosarcoma, and myeloproliferative disorders in cats.</li>\n          <li><b>Ovine Pulmonary Adenocarcinoma Virus (Jaagsiekte retrovirus):</b> Bronchioloalveolar carcinoma in sheep.</li>\n          <li><b>Avian Leukosis Virus (ALV):</b> Lymphoid leukosis of chickens.</li>\n        </ul>\n      </li>\n    </ul>\n  </li>\n  <li><b>Papillomaviruses (Papillomaviridae):</b>\n    <ul>\n      <li><i>Mechanism:</i> Viral oncoproteins <b>E6</b> (binds and degrades tumour suppressor protein <b>p53</b>) and <b>E7</b> (binds and inactivates retinoblastoma protein <b>pRb</b>), driving the cell uncontrollably through the cell cycle.</li>\n      <li><i>Examples:</i> Bovine Papillomavirus (BPV-1 and BPV-2 causes cutaneous warts and, synergizing with bracken fern ptaquiloside, induces bladder carcinomas; BPV-1/2 also causes <b>equine sarcoids</b>); Canine Papillomavirus-1 (oral papillomatosis in young dogs).</li>\n    </ul>\n  </li>\n  <li><b>Herpesviruses (Herpesviridae):</b>\n    <ul>\n      <li><i>Mechanism:</i> Transforms host cells into continuous neoplastic lines.</li>\n      <li><i>Example:</i> <b>Marek's Disease Virus (Gallid Herpesvirus-2):</b> Alphaherpesvirus with <i>meq</i> oncogene that transforms CD4+ T-lymphocytes into neoplastic clonal lymphomas infiltrating peripheral nerve trunks (sciatic nerve) and visceral organs.</li>\n    </ul>\n  </li>\n</ol>",
      "keyPoints": [
        "Retroviruses: Insertional mutagenesis or viral oncogenes; BLV (B-cell lymphoma), FeLV, Jaagsiekte (pulmonary adenocarcinoma).",
        "Papillomaviruses: E6 degrades p53; E7 inactivates pRb; BPV-1/2 (cutaneous papillomas, bladder cancer with bracken fern, equine sarcoids).",
        "Herpesviruses: Gallid Alphaherpesvirus 2 (Marek's Disease Virus) carrying 'meq' oncogene transforms T-lymphocytes causing neurolymphomatosis."
      ],
      "table": null,
      "pyq": [
        "IVRI 2022",
        "GADVASU 2021",
        "TANUVAS 2020"
      ]
    },
    {
      "id": "u3-qa-15",
      "type": "short",
      "marks": 5,
      "question": "Describe Canine Transmissible Venereal Tumour (CTVT): Transmission, unusual karyotype (59 chromosomes), cytology, and spontaneous regression.",
      "topicId": "u3-t08",
      "answer": "<p><b>Definition & Transmission:</b> Canine Transmissible Venereal Tumour (CTVT, Sticker's Sarcoma) is a unique, naturally occurring, contagious transmissible round cell neoplasm of dogs transmitted during coitus, licking, or sniffing through the physical transplantation of viable neoplastic allograft cells onto traumatized mucosal surfaces (genitalia, oral cavity, nasal cavity).</p>\n<p><b>Unusual Cytogenetics:</b></p>\n<ul>\n  <li>Normal canine somatic cells have a diploid chromosome number of <b>2n = 78</b> (all acrocentric except X and Y).</li>\n  <li>CTVT tumour cells consistently exhibit an altered karyotype with only <b>57 to 59 chromosomes</b> (containing multiple large metacentric and submetacentric chromosomes resulting from Robertsonian centric fusions), confirming that CTVT cells are not host cells but clonal descendants of an ancient ancestral allograft clone.</li>\n</ul>\n<p><b>Gross & Cytological Features:</b></p>\n<ul>\n  <li><i>Gross:</i> Cauliflower-like, friable, multi-lobulated, hemorrhagic fleshy masses on the penis/prepuce of male dogs or vulva/vagina of bitches; bleeds freely on touch.</li>\n  <li><i>Cytology (FNAC / Impression):</i> Exceedingly cellular smears dominated by individual, non-cohesive, uniform round cells with distinct cell borders. Diagnostic hallmark: <b>pale basophilic cytoplasm containing multiple, prominent, clear, sharply punched-out lipid vacuoles</b> arranged like a string of pearls around the nucleus. Nuclei are large, round, with coarse chromatin and 1–2 prominent nucleoli.</li>\n</ul>\n<p><b>Spontaneous Regression & Treatment:</b> Tumours initially undergo rapid growth (P phase), followed by stable plateau and spontaneous regression (R phase) mediated by host <b>tumour-infiltrating lymphocytes (CD8+ T-cells and NK cells)</b> secreting $IL-6$ and $IFN-\\gamma$. Highly curative with <b>Vincristine sulfate</b> (0.025 mg/kg IV weekly for 4–6 weeks).</p>",
      "keyPoints": [
        "Transmission: Cellular allograft transplanted directly during mating or sniffing/licking mucosal surfaces.",
        "Karyotype: 57–59 chromosomes with metacentric fusions (vs normal dog 78 acrocentric chromosomes).",
        "Cytology: Non-cohesive round cells with multiple, clear, punched-out cytoplasmic vacuoles ('string of pearls').",
        "Behavior: Spontaneous regression mediated by host CD8+ T-lymphocytes; highly sensitive to Vincristine chemotherapy."
      ],
      "table": null,
      "pyq": [
        "IVRI 2023",
        "TANUVAS 2021",
        "GADVASU 2020",
        "RAJUVAS 2019"
      ]
    },
    {
      "id": "u3-qa-16",
      "type": "short",
      "marks": 5,
      "question": "Describe Bovine Ocular Squamous Cell Carcinoma ('Cancer Eye'): Predisposition, stages of development, and histopathology.",
      "topicId": "u3-t06",
      "answer": "<p><b>Definition:</b> Bovine Ocular Squamous Cell Carcinoma (BOSCC), popularly termed 'Cancer Eye', is the most economically damaging and prevalent malignant neoplasm of cattle worldwide.</p>\n<p><b>Predisposing Factors:</b></p>\n<ul>\n  <li><b>Breed Predisposition:</b> <b>Hereford</b> cattle are exceptionally susceptible due to inherited lack of circumocular and corneoscleral melanin pigmentation (amelanosis). Zebu cattle with dark periocular rings are highly resistant.</li>\n  <li><b>Environmental Factors:</b> High solar ultraviolet (UV) radiation (especially high altitude and sunny climates).</li>\n  <li><b>Age:</b> Peaks in adult cattle between 5 and 10 years of age.</li>\n</ul>\n<p><b>Predilection Sites & Stages of Development:</b></p>\n<ul>\n  <li><i>Predilection Sites:</i> Corneoscleral limbus (75%), third eyelid (nictitating membrane), and upper/lower eyelid margins.</li>\n  <li><i>Stages of Progression:</i>\n    <ol>\n      <li><b>Plaque (Epidermal Hyperplasia):</b> Small, elevated, white, opaque, circular circumscribed plaque on the limbus.</li>\n      <li><b>Papilloma:</b> Benign warty, elevated, hyperkeratotic nodule.</li>\n      <li><b>Non-invasive Carcinoma in Situ:</b> Dysplastic cells traversing the full thickness of epithelium without basement membrane breach.</li>\n      <li><b>Invasive Squamous Cell Carcinoma:</b> Large, ulcerated, necrotic, foul-smelling, cauliflower-like vegetative fungating mass invading the cornea, anterior chamber, retrobulbar orbital fat, and adjacent skull bones.</li>\n    </ol>\n  </li>\n</ul>\n<p><b>Histopathology:</b> Infiltrative, branching nests, cords, and islands of atypical polyhedral squamous epithelial cells invading the underlying dermis/stroma. Hallmark microscopic feature: <b>Keratin Pearls (Epithelial Pearls)</b>—concentric, laminated, whorled layers of bright pink, eosinophilic compact keratin surrounded by dysplastic cells with prominent intercellular bridges (prickles).</p>",
      "keyPoints": [
        "Predisposition: Hereford breed (circumocular amelanosis) + intense solar UV radiation.",
        "Predilection site: Corneoscleral limbus (75%) and third eyelid.",
        "Stages: Benign plaque -> Papilloma -> Carcinoma in situ -> Malignant invasive cauliflower mass.",
        "Histopathology: Infiltrating malignant epithelial islands showing concentric laminated Keratin Pearls and intercellular bridges."
      ],
      "table": null,
      "pyq": [
        "IVRI 2022",
        "GADVASU 2021",
        "RAJUVAS 2020"
      ]
    },
    {
      "id": "u3-qa-17",
      "type": "short",
      "marks": 5,
      "question": "Classify Anemia: Morphological (MCV/MCHC) and Etiological (Regenerative vs Non-regenerative) with diagnostic criteria.",
      "topicId": "u3-t10",
      "answer": "<p><b>Definition:</b> Anemia is a decrease in the total circulating red blood cell mass, manifested as reduced packed cell volume (PCV), total erythrocyte count (TEC), or hemoglobin (Hb) concentration below reference limits.</p>\n\n<p><b>1. Etiological Classification: Regenerative vs Non-Regenerative:</b></p>\n<ul>\n  <li><b>Regenerative Anemia:</b> Bone marrow is functionally active and responding to decreased RBC mass by accelerating erythropoiesis and releasing immature RBCs into circulation:\n    <ul>\n      <li><i>Causes:</i> <b>Hemorrhage</b> (external/internal trauma, parasites like <i>Haemonchus</i>, hookworms) or <b>Hemolysis</b> (haemoprotozoa like <i>Babesia</i>, toxins, copper toxicity).</li>\n      <li><i>Peripheral Blood Signs:</i> Prominent <b>polychromasia</b> (diffusely basophilic young RBCs), <b>reticulocytosis</b> (reticulocytes stained with New Methylene Blue, except horses which do not release reticulocytes), anisocytosis, nucleated RBCs (metarubricytes), and Howell-Jolly bodies.</li>\n    </ul>\n  </li>\n  <li><b>Non-Regenerative Anemia:</b> Bone marrow is defective, suppressed, or starved of essential precursors and fails to mount an erythroid response:\n    <ul>\n      <li><i>Causes:</i> Chronic renal disease (lack of <b>erythropoietin - EPO</b>), bone marrow hypoplasia/aplasia (bracken fern poisoning, estrogen toxicity), chronic inflammatory/neoplastic disease (anemia of chronic disease with iron sequestration), nutritional deficiencies (iron, copper, cobalt/B12).</li>\n      <li><i>Peripheral Blood Signs:</i> Complete absence of polychromasia or reticulocytosis; RBCs appear uniform and mature despite severe anemia.</li>\n    </ul>\n  </li>\n</ul>\n\n<p><b>2. Morphological Classification (Based on Wintrobe Indices):</b></p>\n<ul>\n  <li><b>Macrocytic Hypochromic (High MCV, Low MCHC):</b> Classic hallmark of marked <b>regenerative anemia</b> with vigorous reticulocyte influx (reticulocytes are larger and contain less hemoglobin than mature RBCs).</li>\n  <li><b>Microcytic Hypochromic (Low MCV, Low MCHC):</b> Classic hallmark of chronic <b>iron deficiency anemia</b> (extra cell divisions occur waiting for hemoglobin threshold) or copper deficiency.</li>\n  <li><b>Normocytic Normochromic (Normal MCV, Normal MCHC):</b> Classic hallmark of <b>non-regenerative anemia</b> (anemia of chronic renal failure, acute hemorrhage prior to regenerative response).</li>\n</ul>",
      "keyPoints": [
        "Regenerative anemia: Bone marrow active; caused by hemolysis or blood loss; signs: polychromasia, reticulocytosis, Howell-Jolly bodies.",
        "Non-regenerative anemia: Bone marrow suppressed; caused by renal failure (lack of EPO), chronic disease, aplastic anemia; zero reticulocytes.",
        "Macrocytic Hypochromic (High MCV, Low MCHC): Hallmark of regenerative response.",
        "Microcytic Hypochromic (Low MCV, Low MCHC): Hallmark of chronic iron deficiency.",
        "Normocytic Normochromic (Normal MCV/MCHC): Hallmark of non-regenerative renal/chronic disease."
      ],
      "table": null,
      "pyq": [
        "IVRI 2023",
        "TANUVAS 2022",
        "GADVASU 2020"
      ]
    },
    {
      "id": "u3-qa-18",
      "type": "short",
      "marks": 5,
      "question": "Discuss Routine Urinalysis: Chemical tests for Protein, Glucose, Ketone bodies, Bilirubin, and Blood with clinical interpretation.",
      "topicId": "u3-t13",
      "answer": "<p>Chemical examination of urine provides vital diagnostic insight into renal and systemic metabolic pathology:</p>\n<ol>\n  <li><b>Protein (Proteinuria):</b>\n    <ul>\n      <li><i>Tests:</i> Sulphosalicylic acid (SSA) precipitation test (turbidity indicates protein) or diagnostic dipstick (tetrabromphenol blue).</li>\n      <li><i>Significance:</i> Heavy proteinuria (>3+) without active sediment indicates <b>glomerular disease</b> (glomerulonephritis, amyloidosis). Proteinuria with pyuria indicates lower urinary tract inflammation (cystitis).</li>\n    </ul>\n  </li>\n  <li><b>Glucose (Glucosuria):</b>\n    <ul>\n      <li><i>Tests:</i> Benedict's qualitative reduction test (green/yellow/brick-red precipitate) or dipstick glucose oxidase.</li>\n      <li><i>Significance:</i> Glucosuria <i>with hyperglycaemia</i> indicates <b>Diabetes Mellitus</b> (blood glucose exceeds renal threshold: 180 mg/dL in dogs, 100 mg/dL in cows). Glucosuria <i>without hyperglycaemia</i> indicates primary proximal renal tubular dysfunction (Fanconi syndrome, enterotoxaemia in sheep).</li>\n    </ul>\n  </li>\n  <li><b>Ketone Bodies (Ketonuria):</b>\n    <ul>\n      <li><i>Test:</i> <b>Rothera's nitroprusside test</b> (formation of a distinct purple/permanganate ring at the interface). Detects acetoacetic acid and acetone.</li>\n      <li><i>Significance:</i> Hallmarks negative energy balance and accelerated lipid catabolism: <b>Bovine Ketosis (Acetonemia)</b> in high-yielding dairy cows, <b>Pregnancy Toxaemia</b> in ewes, and Diabetic Ketoacidosis (DKA) in dogs.</li>\n    </ul>\n  </li>\n  <li><b>Bilirubin (Bilirubinuria):</b>\n    <ul>\n      <li><i>Test:</i> <b>Fouchet's test</b> or Gmelin's nitrous acid test (green oxidation ring).</li>\n      <li><i>Significance:</i> Only conjugated (water-soluble) bilirubin passes the glomerular filter. Marked bilirubinuria indicates <b>hepatic cholestasis</b>, bile duct obstruction, or severe hemolytic crisis (dogs have a low renal threshold for bilirubin, so mild bilirubinuria in concentrated male dog urine is normal).</li>\n    </ul>\n  </li>\n  <li><b>Blood (Hematuria vs Hemoglobinuria):</b>\n    <ul>\n      <li><i>Test:</i> Benzidine or Guaiac test / Dipstick pseudoperoxidase reaction.</li>\n      <li><i>Differentiation:</i> Centrifuge the urine: in <b>Hematuria</b> (intact RBCs from trauma, cystitis, urolithiasis), RBCs form a red pellet at the bottom and supernatant turns clear; in <b>Hemoglobinuria</b> (intravascular hemolysis: Babesiosis, copper poisoning), the supernatant remains uniformly dark red/brown.</li>\n    </ul>\n  </li>\n</ol>",
      "keyPoints": [
        "Protein: SSA precipitation test; indicates glomerulonephritis (amyloidosis) or cystitis.",
        "Glucose: Benedict's test / dipstick; Diabetes Mellitus (hyperglycaemic) vs Clostridial pulpy kidney / tubular defect.",
        "Ketones: Rothera's test (purple ring); indicates bovine ketosis, ovine pregnancy toxaemia, DKA.",
        "Bilirubin: Fouchet's test (green color); indicates obstructive jaundice or hepatic disease.",
        "Blood: Hematuria (RBCs centrifuge into red button, clear supernatant) vs Hemoglobinuria (RBCs lysed, supernatant remains dark red in Babesiosis)."
      ],
      "table": null,
      "pyq": [
        "IVRI 2023",
        "GADVASU 2022",
        "TANUVAS 2021",
        "KVAFSU 2019"
      ]
    },
    {
      "id": "u3-qa-19",
      "type": "diff",
      "marks": 5,
      "question": "Differentiate Ante-mortem Thrombus from Post-mortem Blood Clot.",
      "topicId": "u3-t17",
      "answer": "<p>Distinguishing an ante-mortem intravascular thrombus from a post-mortem cadaveric blood clot is one of the most critical diagnostic determinations made during a necropsy:</p>",
      "keyPoints": [
        "Ante-mortem thrombus: Formed during life, dry, friable, granular, firmly attached to damaged endothelial wall, exhibits Lines of Zahn.",
        "Post-mortem clot: Formed after death, moist, shiny, elastic, unattached to smooth vessel wall, forms 'currant-jelly' or 'chicken-fat' casts.",
        "Equine high ESR produces physiological yellow 'chicken-fat' clots in the heart."
      ],
      "table": {
        "title": "Comparison between Ante-mortem Thrombus and Post-mortem Clot",
        "headers": [
          "Criterion",
          "Ante-mortem Thrombus",
          "Post-mortem Blood Clot"
        ],
        "rows": [
          [
            "Time of formation",
            "Formed inside the vascular or cardiac lumen during life",
            "Formed inside blood vessels or heart chambers after death"
          ],
          [
            "Vascular wall attachment",
            "Firmly adherent to the underlying damaged, rough, ulcerated endothelial wall; tearing leaves a rough vascular scar",
            "Completely unattached, loose, floating free within the lumen; easily pulled out as a clean intact cast"
          ],
          [
            "Surface appearance & texture",
            "Dry, dull, granular, rough, opaque, and friable (crumbles easily when handled between fingers)",
            "Moist, smooth, glistening, shiny, soft, and rubbery/elastic (stretches and rebounds without crumbling)"
          ],
          [
            "Internal architecture & color",
            "Laminated with alternating pale bands of platelets/fibrin and dark red RBC bands (<b>Lines of Zahn</b>)",
            "Homogenous, non-laminated; separates into dependent dark red <b>'Currant-jelly'</b> clot and upper pale yellow <b>'Chicken-fat'</b> clot (common in horses)"
          ],
          [
            "Shape & mold",
            "Irregular, corrugated, mural or occlusive; does not take the exact form of the vascular tree",
            "Forms an exact, branched, smooth rubbery cast of the vascular lumens and cardiac chambers"
          ],
          [
            "Microscopic structure",
            "Dense platelet trabeculae, fibrin meshwork with trapped degenerate leukocytes and red blood cells; shows endothelial proliferation and organization at base",
            "Loose, disorganized network of fibrin strands holding randomly distributed, intact, non-degenerate red and white blood cells; no cellular adhesion or fibroblast ingrowth"
          ]
        ]
      },
      "pyq": [
        "IVRI 2023",
        "TANUVAS 2021",
        "GADVASU 2020",
        "RAJUVAS 2018"
      ]
    },
    {
      "id": "u3-qa-20",
      "type": "short",
      "marks": 5,
      "question": "Discuss the Collection, Preservation, and Dispatch of Morbid Materials for Histopathology, Microbiology, and Chemical/Toxicological Analysis.",
      "topicId": "u3-t18",
      "answer": "<p>Proper specimen selection, preservation, and dispatch are critical to obtain meaningful laboratory diagnosis from a necropsy:</p>\n<ol>\n  <li><b>For Histopathology:</b>\n    <ul>\n      <li><i>Selection:</i> Collect small representative slices (<0.5 cm to 1 cm thickness) including the junction of healthy and diseased tissue.</li>\n      <li><i>Fixative:</i> <b>10% Neutral Buffered Formalin (NBF)</b>. Fixative-to-tissue ratio must be at least <b>10:1 by volume</b>. Brain requires 10% formalin for 2–3 weeks to firm up before slicing. Never freeze specimens meant for histopathology (causes ice-crystal artifacts).</li>\n    </ul>\n  </li>\n  <li><b>For Microbiology (Bacteriology / Mycology / Virology):</b>\n    <ul>\n      <li><i>Collection:</i> Collect under strict aseptic precautions before opening the digestive tract. Sear organ capsule with a hot spatula, incise with sterile scalpel, and insert sterile swab or aspirate with sterile syringe.</li>\n      <li><i>Preservation:</i> Ship on <b>wet ice or frozen gel packs (4°C)</b> for immediate culture within 24–48 hours. For viral isolation, use <b>50% Phosphate Buffered Glycerine-saline</b> or transport medium and ship on dry ice (-70°C). Do not add chemical preservatives (formalin kills organisms).</li>\n    </ul>\n  </li>\n  <li><b>For Chemical and Toxicological Analysis (Forensic Cases):</b>\n    <ul>\n      <li><i>Specimens:</i> Whole stomach/rumen contents (1–2 kg), liver (500 g), both kidneys, urine, mesenteric fat, and brain.</li>\n      <li><i>Preservation:</i> Send in clean, wide-mouthed glass jars without metal lids. <b>Refrigerate or send on ice</b>; if chemical preservative is mandatory, use <b>saturated sodium chloride (salt) brine solution</b> or rectified spirit (never use formalin or denatured alcohol). Always send an identical blank sample of the preservative in a separate bottle.</li>\n    </ul>\n  </li>\n  <li><b>Packaging & Dispatch:</b>\n    <ul>\n      <li>Use leak-proof, sealed primary containers, wrapped in absorbent cotton, placed in an outer wooden/metal box. Affix label with full case history, necropsy findings, tentative diagnosis, list of specimens, preservative used, and official signature.</li>\n    </ul>\n  </li>\n</ol>",
      "keyPoints": [
        "Histopathology: 10% Neutral Buffered Formalin (NBF) in 10:1 volume ratio; slices <0.5-1 cm thick containing lesion-normal junction; never freeze.",
        "Microbiology: Sterile collection; ship on wet ice (4°C); 50% buffered glycerol-saline for viruses; no formalin.",
        "Toxicology: Liver, kidney, stomach contents; preserve in saturated brine or rectified spirit (never formalin); include blank preservative bottle.",
        "Dispatch: Leak-proof primary container, absorbent layer, sturdy outer box, complete necropsy history and specimen inventory."
      ],
      "table": null,
      "pyq": [
        "IVRI 2023",
        "TANUVAS 2022",
        "GADVASU 2021",
        "KVAFSU 2019"
      ]
    },
    {
      "id": "u3-qa-21",
      "type": "long",
      "marks": 12,
      "question": "Describe in detail Animal Oncology: Hallmarks of cancer, molecular basis of carcinogenesis (oncogenes, tumour suppressor genes), mechanisms of invasion and metastasis, and tumour grading vs clinical staging (TNM system).",
      "topicId": "u3-t01",
      "answer": "<p><b>Definition:</b> Neoplasia is an autonomous, uncoordinated, irreversible abnormal tissue growth that persists in the same excessive manner after cessation of the provoking stimulus.</p>\n\n<h3>1. Hallmarks of Cancer (Hanahan & Weinberg)</h3>\n<p>Malignant transformation involves acquiring distinctive biological capabilities:</p>\n<ul>\n  <li><b>Self-sufficiency in growth signals:</b> Autonomous proliferation via mutant receptors (e.g., c-kit mutations in canine mast cell tumours).</li>\n  <li><b>Insensitivity to anti-growth signals:</b> Inactivation of tumour suppressor checkpoints (loss of p53, pRb).</li>\n  <li><b>Evading programmed cell death (apoptosis):</b> Upregulation of anti-apoptotic Bcl-2 or loss of pro-apoptotic Bax.</li>\n  <li><b>Limitless replicative potential:</b> Reactivation of <b>telomerase</b>, preventing telomere shortening and replicative senescence.</li>\n  <li><b>Sustained Angiogenesis:</b> Secretion of <b>Vascular Endothelial Growth Factor (VEGF)</b> and basic FGF to sprout new tumor capillary beds.</li>\n  <li><b>Tissue Invasion and Metastasis:</b> Detachment from primary mass and colonization of distant organs.</li>\n  <li><b>Reprogramming Energy Metabolism:</b> Switching to aerobic glycolysis (the <b>Warburg effect</b>).</li>\n  <li><b>Evading Immune Destruction:</b> Downregulating MHC Class I or secreting immunosuppressive factors (TGF-beta, PD-L1).</li>\n</ul>\n\n<h3>2. Molecular Basis of Carcinogenesis</h3>\n<ol>\n  <li><b>Proto-Oncogenes to Oncogenes:</b>\n    <ul>\n      <li>Proto-oncogenes are normal cellular genes promoting physiological cell growth. Mutation, amplification, or retroviral insertion converts them into constitutively active <b>oncogenes</b> (dominant effect; one mutant allele suffices).</li>\n      <li><i>Examples:</i> <b>Ras</b> family GTPases (point mutations locking them in GTP-active state); <b>c-myc</b> transcription factors; <b>c-kit</b> receptor tyrosine kinase (activating mutations in 30–50% of canine high-grade mast cell tumours).</li>\n    </ul>\n  </li>\n  <li><b>Tumour Suppressor Genes (Anti-Oncogenes):</b>\n    <ul>\n      <li>Act as molecular brakes preventing unchecked cell proliferation. Loss-of-function requires inactivation of both alleles (Knudson's two-hit hypothesis):</li>\n      <li><b>TP53 ('Guardian of the Genome'):</b> In response to DNA damage, p53 arrests the cell cycle in G1 (via p21) to permit DNA repair, or triggers apoptosis if damage is irreparable. Inactivated in >50% of canine and feline malignancies.</li>\n      <li><b>RB (Retinoblastoma gene):</b> Hypophosphorylated pRb binds E2F transcription factor, arresting cells in G1. Phosphorylation by cyclin D/CDK4 releases E2F, driving S-phase entry. Inactivated by Papillomavirus E7 oncoprotein.</li>\n    </ul>\n  </li>\n</ol>\n\n<h3>3. Cellular Mechanisms of Invasion and Metastasis</h3>\n<p>The metastatic cascade is a multi-step sequence requiring survival against severe hemodynamic stress:</p>\n<ol>\n  <li><b>Detachment of Tumour Cells:</b> Downregulation of homotypic intercellular adhesion molecules (<b>E-cadherin</b> and catenins) allows tumor cells to loosen from one another.</li>\n  <li><b>Degradation of Extracellular Matrix (ECM):</b> Tumour cells secrete <b>Matrix Metalloproteinases (MMPs, especially MMP-2 and MMP-9)</b> and cathepsins that digest Type IV collagen in the basement membrane.</li>\n  <li><b>Migration & Intravasation:</b> Tumour cells extend pseudopods, attach to laminin/fibronectin, and crawl through degraded basement membranes, squeezing between endothelial gaps into capillary or lymphatic lumens.</li>\n  <li><b>Circulation & Thromboembolus Formation:</b> Circulating tumour cells aggregate with host platelets and fibrin, forming micro-thromboemboli that shield them from shear stress and Natural Killer (NK) cell destruction.</li>\n  <li><b>Extravasation & Colonization:</b> Emboli arrest in downstream capillary beds, adhere to endothelia, extravasate across vascular walls into distant parenchyma, secrete VEGF, and establish metastatic colonies.</li>\n</ol>\n\n<h3>4. Tumour Grading vs Clinical Staging (TNM System)</h3>\n<ul>\n  <li><b>Tumour Grading (Histopathological Assessment):</b>\n    <ul>\n      <li>Evaluated by the pathologist under the microscope based on the degree of anaplasia and malignancy:</li>\n      <li><i>Criteria:</i> Mitotic index (mitoses per 10 HPFs), nuclear pleomorphism, percentage of necrosis, degree of cellular differentiation, and invasiveness.</li>\n      <li><i>Example:</i> <b>Patnaik / Kiupel grading</b> for canine cutaneous mast cell tumours (Low-grade vs High-grade; Grade I, II, III).</li>\n    </ul>\n  </li>\n  <li><b>Clinical Staging (TNM System):</b>\n    <ul>\n      <li>Evaluated by the clinician based on clinical, radiographic, and surgical findings to determine the anatomical extent of disease throughout the patient:</li>\n      <li><b>T (Primary Tumour Size & Extent):</b> $T_0$ (no tumour), $T_1, T_2, T_3, T_4$ (increasing size and deep invasion).</li>\n      <li><b>N (Regional Lymph Node Involvement):</b> $N_0$ (no lymph node metastasis), $N_1$ (ipsilateral movable node involved), $N_2$ (contralateral or fixed nodes).</li>\n      <li><b>M (Distant Metastasis):</b> $M_0$ (no distant metastasis), $M_1$ (distant metastasis confirmed, e.g., in lungs, liver).</li>\n    </ul>\n  </li>\n</ul>",
      "keyPoints": [
        "Hallmarks: Autonomous growth, evasion of apoptosis, limitless replication (telomerase), sustained angiogenesis (VEGF), metastasis, Warburg effect.",
        "Molecular genetics: Oncogenes (c-kit, Ras, myc) require one mutant allele; Tumour suppressors (p53 guardian of genome, Rb brake on E2F) require two-hit inactivation.",
        "Metastatic cascade: Loss of E-cadherin -> MMP-2/9 degradation of ECM -> intravasation -> platelet-tumour embolus -> extravasation -> colonization.",
        "Grading: Pathological assessment of cellular anaplasia, mitoses, necrosis (Patnaik mast cell grades).",
        "Staging: Clinical evaluation of total body anatomical tumor burden via TNM (Tumour size, Node involvement, distant Metastasis)."
      ],
      "table": null,
      "pyq": [
        "IVRI 2023",
        "TANUVAS 2022",
        "GADVASU 2021",
        "RAJUVAS 2020"
      ]
    },
    {
      "id": "u3-qa-22",
      "type": "long",
      "marks": 12,
      "question": "Describe Diagnostic Veterinary Hematology: Complete Hemogram — Collection techniques, choice of anticoagulants, manual vs automated counting, evaluation of leukogram patterns (Stress, Inflammatory, Excitement), and classification of leukemias.",
      "topicId": "u3-t09",
      "answer": "<p><b>Definition:</b> A Complete Hemogram (Complete Blood Count - CBC) is the comprehensive quantitative and qualitative laboratory evaluation of circulating blood cells (erythrocytes, leukocytes, and thrombocytes).</p>\n\n<h3>1. Blood Collection and Choice of Anticoagulants</h3>\n<ul>\n  <li><b>Sites of Venipuncture:</b> Jugular vein (horses, cattle, sheep, dogs, cats); Cephalic or lateral saphenous vein (dogs); Medial saphenous vein (cats); Marginal ear vein (pigs, rabbits); Wing vein / Brachial vein (poultry).</li>\n  <li><b>Choice of Anticoagulants:</b>\n    <ul>\n      <li><b>$K_2$EDTA (Dipotassium Ethylenediaminetetraacetic Acid) (Lavender Top):</b> Anticoagulant of choice for routine hematology and blood smears (1–2 mg/mL blood). Chelate divalent calcium ($Ca^{2+}$), halting the coagulation cascade. Preserves leukocyte and erythrocyte morphology and staining properties without causing cellular swelling or platelet clumping.</li>\n      <li><b>Sodium Citrate (Light Blue Top):</b> 3.2% or 3.8% buffered citrate in a 1:9 ratio with blood. Anticoagulant of choice for coagulation profiling (Prothrombin Time - PT, Activated Partial Thromboplastin Time - aPTT).</li>\n      <li><b>Lithium Heparin (Green Top):</b> Inhibits thrombin; preferred for clinical chemistry and plasma analysis, and for avian and reptile hematology (EDTA lyses turtle and bird RBCs).</li>\n      <li><b>Sodium Fluoride (Grey Top):</b> Glycolytic inhibitor; preserves blood glucose for accurate estimation.</li>\n    </ul>\n  </li>\n</ul>\n\n<h3>2. Diagnostic Interpretation of Leukogram Patterns</h3>\n<p>The differential leukocyte count (DLC) and absolute leukocyte count reveal distinctive systemic reaction patterns:</p>\n\n<ol>\n  <li><b>Stress (Corticosteroid) Leukogram:</b>\n    <ul>\n      <li><i>Mechanism:</i> Induced by endogenous cortisol release (Cushing's disease, severe chronic illness, pain) or exogenous corticosteroid therapy.</li>\n      <li><i>Hallmark Quartet:</i>\n        <ol>\n          <li><b>Mature Neutrophilia:</b> Mobilization of the marginal neutrophil pool into the circulating pool and delayed extravasation into tissues (no left shift).</li>\n          <li><b>Lymphopenia:</b> Corticosteroid-induced redistribution of T-lymphocytes into lymphoid tissue and lymphoid lysis.</li>\n          <li><b>Monocytosis:</b> Prominent in dogs; demargination of monocytes.</li>\n          <li><b>Eosinopenia:</b> Marrow sequestration and intravascular destruction.</li>\n        </ol>\n      </li>\n    </ul>\n  </li>\n  <li><b>Inflammatory Leukogram:</b>\n    <ul>\n      <li><i>Mechanism:</i> Tissue injury or bacterial infection triggers release of cytokines ($IL-1, TNF-\\alpha, G-CSF$), stimulating accelerated bone marrow granulopoiesis and release.</li>\n      <li><i>Hallmarks:</i> <b>Neutrophilia with a Left Shift</b> (presence of band neutrophils and metamyelocytes).\n        <ul>\n          <li><i>Regenerative:</i> Leukocytosis with mature neutrophils > band cells (good bone marrow reserve).</li>\n          <li><i>Degenerative:</i> Normal TLC or leukopenia with band cells > mature neutrophils (overwhelming tissue demand, typical of peracute bovine coliform mastitis).</li>\n          <li><b>Toxic changes in neutrophils:</b> Döhle bodies, cytoplasmic basophilia, foamy cytoplasmic vacuolation, and toxic granulation.</li>\n        </ul>\n      </li>\n    </ul>\n  </li>\n  <li><b>Physiological (Excitement / Epinephrine) Leukogram:</b>\n    <ul>\n      <li><i>Mechanism:</i> Acute fight-or-flight response mediated by <b>epinephrine</b> (common in young cats, excited horses, puppies).</li>\n      <li><i>Hallmarks:</i> Transient <b>mature neutrophilia and lymphocytosis</b> without a left shift, lasting 20–30 minutes, caused by sudden hemodynamic flushing of the marginal leukocyte pool into the circulating pool.</li>\n    </ul>\n  </li>\n</ol>\n\n<h3>3. Classification of Leukemias</h3>\n<p><b>Leukemia</b> is a malignant clonal neoplasm arising from hematopoietic stem cells in the bone marrow, characterized by proliferation of neoplastic leukocytes in bone marrow and their circulation in peripheral blood:</p>\n<ul>\n  <li><b>Based on Duration & Cell Maturity:</b>\n    <ul>\n      <li><i>Acute Leukemia:</i> Characterized by proliferation of poorly differentiated, immature 'blast' cells (lymphoblasts, myeloblasts). Rapid onset, aggressive clinical course, marked cytopenias (severe anemia, thrombocytopenia), and poor prognosis.</li>\n      <li><i>Chronic Leukemia:</i> Characterized by proliferation of well-differentiated, mature-appearing cells (e.g., small lymphocytes, mature neutrophils). Insidious onset, prolonged clinical course, marked leukocytosis (>100,000 cells/$mu$L).</li>\n    </ul>\n  </li>\n  <li><b>Based on Cell Lineage:</b>\n    <ul>\n      <li><b>Lymphoid Leukemia:</b> Arising from lymphoid precursors: <i>Acute Lymphoblastic Leukemia (ALL)</i> vs <i>Chronic Lymphocytic Leukemia (CLL)</i>.</li>\n      <li><b>Myeloid (Non-Lymphoid) Leukemia:</b> Arising from myeloid precursors in bone marrow: <i>Acute Myeloid Leukemia (AML)</i>, <i>Chronic Myelogenous Leukemia (CML)</i>, Erythroleukemia, and Monocytic Leukemia.</li>\n    </ul>\n  </li>\n  <li><b>Aleukemic Leukemia:</b> Malignant proliferation confined to bone marrow with severe cytopenias, but neoplastic blast cells are absent in peripheral blood smears.</li>\n</ul>",
      "keyPoints": [
        "Anticoagulant choice: K2-EDTA for routine CBC and blood smear cytology; Sodium Citrate (1:9) for coagulation profile; Heparin for avian/reptile blood and biochemistry.",
        "Stress leukogram: Corticosteroid-induced quartet: Mature neutrophilia, Lymphopenia, Monocytosis, Eosinopenia (SMILE).",
        "Inflammatory leukogram: Neutrophilia with left shift (band cells) and toxic changes (Döhle bodies, basophilic cytoplasm).",
        "Excitement leukogram: Epinephrine-induced transient mature neutrophilia and lymphocytosis.",
        "Leukemia classification: Acute (immature blast cells, aggressive, cytopenias) vs Chronic (mature differentiated cells, high counts); Lymphoid (ALL, CLL) vs Myeloid (AML, CML)."
      ],
      "table": null,
      "pyq": [
        "IVRI 2023",
        "TANUVAS 2022",
        "GADVASU 2021",
        "KVAFSU 2020"
      ]
    },
    {
      "id": "u3-qa-23",
      "type": "long",
      "marks": 12,
      "question": "Describe in detail Veterinary Urinalysis and Kidney Function Testing: Physical characteristics, chemical examination, microscopic evaluation of sediment, and serum biomarkers of renal disease.",
      "topicId": "u3-t13",
      "answer": "<p>Urinalysis is a fundamental, non-invasive diagnostic profile evaluating physical properties, chemical constituents, and microscopic sediment of urine to assess renal and systemic metabolic health.</p>\n\n<h3>1. Physical Characteristics</h3>\n<ul>\n  <li><b>Collection Method:</b> Free catch (midstream voiding), catheterization, or <b>cystocentesis</b> (preferred for bacteriological culture and sterile sediment evaluation).</li>\n  <li><b>Color & Transparency:</b> Normal urine is pale amber to clear yellow.\n    <ul>\n      <li><i>Dark red/brown:</i> Hematuria, hemoglobinuria, myoglobinuria.</li>\n      <li><i>Yellow-green:</i> High bilirubin (icterus).</li>\n      <li><i>Turbid/Cloudy:</i> Pyuria, crystal precipitation, mucus. Note: <b>Equine urine is normally thick and turbid</b> due to high concentrations of calcium carbonate crystals and secreted mucus.</li>\n    </ul>\n  </li>\n  <li><b>Specific Gravity (USG):</b> Measured using a temperature-compensated clinical <b>refractometer</b>:\n    <ul>\n      <li><b>Isosthenuria (1.008–1.012):</b> Urine concentration matches protein-free glomerular filtrate, indicating that the renal tubules are doing no active concentration or dilution. Persistent isosthenuria in a dehydrated animal confirms <b>loss of >66% of functional nephrons</b>.</li>\n      <li><b>Hyposthenuria (<1.008):</b> Actively diluted urine (Diabetes Insipidus, psychogenic polydipsia).</li>\n      <li><b>Hypersthenuria:</b> Concentrated urine (>1.030 in dogs, >1.035 in cats, >1.025 in cattle).</li>\n    </ul>\n  </li>\n</ul>\n\n<h3>2. Chemical Examination</h3>\n<ul>\n  <li><b>pH:</b> Normally acidic (5.5–7.0) in carnivores on meat diets; alkaline (7.5–8.5) in herbivores on plant diets.</li>\n  <li><b>Protein:</b> Sulphosalicylic acid (SSA) test and dipstick. Persistent proteinuria with inactive sediment confirms <b>glomerular disease</b> (glomerulonephritis, amyloidosis).</li>\n  <li><b>Glucose:</b> Glucosuria occurs when blood glucose exceeds tubular absorptive threshold (>180 mg/dL in dogs, >100 mg/dL in ruminants) in <b>Diabetes Mellitus</b>, or in acute tubular necrosis.</li>\n  <li><b>Ketones:</b> Rothera's test (purple ring) detects acetoacetic acid and acetone in <b>bovine ketosis</b>, ovine pregnancy toxaemia, and diabetic ketoacidosis.</li>\n  <li><b>Bilirubin:</b> Conjugated bilirubinuria indicates hepatic disease, bile duct obstruction, or severe hemolysis.</li>\n  <li><b>Blood / Hemoglobin:</b> Dipstick pseudoperoxidase reaction. Distinguish hematuria (intact RBCs centrifuge into red pellet) from hemoglobinuria (supernatant remains red).</li>\n</ul>\n\n<h3>3. Microscopic Examination of Urinary Sediment</h3>\n<p>Centrifuge 5 mL of fresh urine at 1,500 rpm for 5 minutes, decant supernatant, and examine 1 drop of resuspended sediment under low and high dry power:</p>\n<ol>\n  <li><b>Casts (Cylindruria):</b> Cylindrical proteinaceous molds formed in the lumen of distal convoluted tubules and collecting ducts, composed of <b>Tamm-Horsfall mucoprotein</b>:\n    <ul>\n      <li><i>Hyaline Casts:</i> Pure protein molds; few are normal, high numbers indicate glomerular protein leakage.</li>\n      <li><i>Granular Casts:</i> Disintegrated tubular epithelial cells; indicate <b>acute tubular necrosis / active nephrosis</b>.</li>\n      <li><i>Cellular Casts:</i> Epithelial casts (acute tubular damage), Leukocyte/WBC casts (pathognomonic for <b>pyelonephritis</b>), Erythrocyte/RBC casts (renal hemorrhage).</li>\n      <li><i>Waxy Casts:</i> Smooth, highly refractile, squared-off ends; indicate chronic, prolonged intra-tubular stasis and end-stage nephron destruction.</li>\n    </ul>\n  </li>\n  <li><b>Crystals (Crystalluria):</b>\n    <ul>\n      <li><i>Struvite (Magnesium Ammonium Phosphate):</i> 'Coffin-lid' prisms; common in alkaline urine and canine bacterial cystitis.</li>\n      <li><i>Calcium Oxalate Dihydrate:</i> 'Envelope' shaped; acidic to neutral urine.</li>\n      <li><i>Calcium Oxalate Monohydrate:</i> 'Picket-fence' or dumbbell-shaped; pathognomonic for <b>Ethylene Glycol (antifreeze) toxicity</b>.</li>\n      <li><i>Ammonium Urate / Biurate:</i> Brownish, thorny spheres ('thorn-apples'); pathognomonic for portosystemic shunts (PSS) or Dalmatians.</li>\n      <li><i>Calcium Carbonate:</i> Large radial discs or spheres; normally abundant in healthy horse and rabbit urine.</li>\n    </ul>\n  </li>\n  <li><b>Cells:</b> Transitional epithelial cells (from bladder/ureter), squamous cells (from distal urethra), and leukocytes (>5 WBC/HPF indicates pyuria/urinary tract infection).</li>\n</ol>\n\n<h3>4. Serum Biomarkers of Renal Disease</h3>\n<ul>\n  <li><b>Blood Urea Nitrogen (BUN):</b> Synthesized in liver from ammonia; excreted by glomerular filtration. Increases with renal failure, but influenced by dietary protein, GI bleeding, and dehydration.</li>\n  <li><b>Serum Creatinine:</b> Non-protein nitrogenous byproduct of muscle phosphocreatine breakdown; excreted solely by glomerular filtration without tubular reabsorption. A reliable index of Glomerular Filtration Rate (GFR); elevations (<b>azotemia</b>) manifest only after <b>>75% of functional nephrons are lost</b>.</li>\n  <li><b>Symmetric Dimethylarginine (SDMA):</b> Methylated arginine excreted solely by kidneys. Rises early in renal disease, detecting <b>40% loss of renal function</b> (far earlier than creatinine).</li>\n</ul>",
      "keyPoints": [
        "Specific gravity: Refractometer; Isosthenuria (1.008–1.012) confirms loss of >66% functional nephrons in dehydrated animals.",
        "Chemical tests: Protein (glomerular leakage), Glucose (Diabetes Mellitus), Ketones (Rothera test in ketosis/pregnancy toxaemia), Bilirubin (cholestasis).",
        "Casts: Tamm-Horsfall protein molds; Granular casts (acute tubular necrosis), WBC casts (pyelonephritis), Waxy casts (chronic end-stage stasis).",
        "Crystals: Struvite (coffin-lid in alkaline urine), Calcium oxalate monohydrate (picket-fence in ethylene glycol toxicity), Ammonium biurate (thorn-apples in PSS/Dalmatians).",
        "Biomarkers: Creatinine rises after 75% nephron loss; SDMA detects early 40% loss."
      ],
      "table": null,
      "pyq": [
        "IVRI 2023",
        "TANUVAS 2022",
        "GADVASU 2021",
        "RAJUVAS 2020"
      ]
    },
    {
      "id": "u3-qa-24",
      "type": "long",
      "marks": 12,
      "question": "Describe the Necropsy Technique in Large Ruminants (Cattle/Buffalo): Biosafety, step-by-step external inspection, skinning, systematic opening of body cavities, organ removal protocol, distinguishing post-mortem changes from ante-mortem lesions, and drafting the Post-Mortem Report.",
      "topicId": "u3-t15",
      "answer": "<p>A post-mortem examination (necropsy) is the systematic, methodical anatomical dissection of an animal carcass to identify pathological lesions and establish the cause of death.</p>\n\n<h3>1. Pre-Necropsy Precautions & Biosafety</h3>\n<ul>\n  <li><b>Exclusion of Anthrax:</b> Before opening any ruminant carcass showing sudden peracute death, bleeding from natural orifices, or bloat, collect a drop of peripheral blood (ear vein) and prepare a blood smear stained with <b>Polychrome Methylene Blue (McFadyean's reaction)</b>. If positive for capsule-bearing <i>Bacillus anthracis</i>, <b>DO NOT OPEN THE CARCASS</b>; incinerate or bury 6 feet deep with lime to prevent spore formation.</li>\n  <li><b>Personal Protective Equipment (PPE):</b> Protective overalls, gumboots, thick rubber gloves, waterproof apron, and face mask/goggles (zoonotic protection against tuberculosis, brucellosis, rabies).</li>\n</ul>\n\n<h3>2. Step-by-Step Necropsy Protocol</h3>\n<ol>\n  <li><b>Positioning:</b> Large ruminants (cattle and buffalo) are traditionally placed in <b>left lateral recumbency</b> (so the huge rumen lies on the down side, exposing the intestines, liver, and right kidney when opening the right flank).</li>\n  <li><b>External Examination:</b> Body condition score, rigor mortis, evidence of trauma, wounds, discharge from natural orifices (eyes, ears, nostrils, mouth, anus, vulva), hydration status, ectoparasites, and superficial lymph nodes (prescapular, precrural).</li>\n  <li><b>Skinning:</b> Make a midline skin incision from the mandibular symphysis, continuing caudally along the ventral neck, sternum, and linea alba to the perineum. Reflect the skin dorsally and ventrally. Abduct and reflect the upper (right) forelimb and hindlimb by cutting the axillary and medial thigh musculature, disarticulating the coxofemoral joint.</li>\n  <li><b>Opening the Abdominal Cavity:</b> Incise the abdominal muscles along the right costal arch and flank, puncturing the peritoneum carefully. Note presence, volume, odor, and character of peritoneal fluid (ascites, peritonitis, blood). Inspect position of viscera before manipulation.</li>\n  <li><b>Opening the Thoracic Cavity:</b> Puncture the diaphragm to check for negative thoracic pressure (audible inrush of air). Using an axe, rib shears, or saw, cut through the right ribs along the costochondral junctions ventrally and near the vertebral column dorsally. Remove the entire right rib cage to expose heart, lungs, and mediastinum.</li>\n  <li><b>Systematic Organ Removal (The 'Pluck'):</b>\n    <ul>\n      <li><i>Thoracic pluck:</i> Dissect tongue from between mandibular rami, transect hyoid bones, reflect tongue, pharynx, larynx, trachea, and esophagus caudally into the thoracic inlet; remove heart, lungs, and esophagus intact as a single block.</li>\n      <li><i>Spleen:</i> Detach from the left ruminal wall.</li>\n      <li><i>Gastrointestinal tract:</i> Double-ligate duodenum, ileum, and rectum. Remove intestines and mesenteric lymph nodes. Detach the forestomachs (rumen, reticulum, omasum) and abomasum.</li>\n      <li><i>Liver:</i> Remove intact with gall bladder.</li>\n      <li><i>Urogenital organs:</i> Incise sublumbar peritoneum, strip kidneys, trace ureters to bladder, and remove bladder and reproductive tract intact.</li>\n    </ul>\n  </li>\n  <li><b>Opening and Inspecting Organs:</b> Open heart along blood flow path; open trachea, major bronchi, and pulmonary parenchyma; open forestomachs and abomasum; slit intestines along mesenteric border; strip renal capsule and bisect kidneys.</li>\n</ol>\n\n<h3>3. Distinguishing Post-Mortem Artefacts from Ante-Mortem Lesions</h3>\n<ul>\n  <li><b>Pseudomelanosis:</b> Post-mortem greenish-black discoloration of abdominal viscera (intestine, liver) caused by bacterial hydrogen sulfide ($H_2S$) reacting with hemoglobin to form iron sulfide ($FeS$). Unlike melanosis, it wipes off or fades.</li>\n  <li><b>Bile Imbibition:</b> Post-mortem yellow-green staining of liver, diaphragm, and intestines in contact with the permeable gallbladder.</li>\n  <li><b>Hemoglobin Imbibition:</b> Post-mortem red-pink staining of endocardium and vascular walls due to RBC lysis.</li>\n  <li><b>Bloat Line in Esophagus:</b> Crucial distinction for bloat: ante-mortem ruminal bloat creates high intrathoracic pressure, blanching the cervical esophagus (pale) and engorging the cranial thoracic esophagus (sharp <b>'bloat line'</b>). Post-mortem tympany produces diffuse uniform pale esophageal mucosa.</li>\n</ul>\n\n<h3>4. Drafting the Necropsy Report</h3>\n<p>The post-mortem report must follow an objective, descriptive format: 1. General Identification (tag no, breed, age, sex, owner), 2. Clinical History, 3. External Findings, 4. Detailed Organ-by-Organ Gross Descriptions (Size, Shape, Color, Consistency, Cut surface), 5. Morbid Anatomical Diagnosis, and 6. Final Opinion on Cause of Death, signed and dated by the examining veterinary pathologist.</p>",
      "keyPoints": [
        "Biosafety Step 0: Rule out Anthrax via peripheral blood smear (McFadyean's polychrome methylene blue) before opening carcass.",
        "Positioning: Left lateral recumbency for ruminants (places rumen underneath, exposes viscera).",
        "Thoracic pluck: Tongue, larynx, trachea, esophagus, lungs, and heart removed intact as a single block.",
        "Post-mortem artefacts: Pseudomelanosis (FeS blackening), bile imbibition, hemoglobin staining, bloat line (esophageal blanching).",
        "Report components: Identification, clinical history, organ-by-organ gross lesion descriptions, anatomical diagnosis, and cause of death opinion."
      ],
      "table": null,
      "pyq": [
        "IVRI 2023",
        "TANUVAS 2022",
        "GADVASU 2021",
        "KVAFSU 2020"
      ]
    },
    {
      "id": "u3-qa-25",
      "type": "long",
      "marks": 12,
      "question": "Describe in detail Veterolegal Pathology: Objectives, forensic post-mortem protocol, classification and forensic identification of traumatic wounds (Incised, Lacerated, Contusions, Gunshot wounds), signs of drowning, electrocution, malicious poisoning, and preparation of the legal court evidence certificate.",
      "topicId": "u3-t20",
      "answer": "<p><b>Definition:</b> Veterolegal (Forensic) Pathology is the application of veterinary pathological knowledge and techniques to the investigation of injury, death, and animal cruelty for legal proceedings in a court of law.</p>\n\n<h3>1. Objectives and Legal Protocols</h3>\n<ul>\n  <li><b>Legal Requisition:</b> A veterolegal necropsy must never be undertaken without a formal written requisition from an authorized authority (Police officer $ge$ Sub-Inspector rank, Forest Ranger, Judicial Magistrate, or Insurance Officer).</li>\n  <li><b>Chain of Custody:</b> Unbroken, legally documented custody log recording every individual who received, handled, sealed, or analyzed the carcass or evidentiary viscera.</li>\n  <li><b>Identification:</b> Unambiguous record of animal identity (species, breed, sex, age, color, markings, ear tag number, brand, microchip number).</li>\n</ul>\n\n<h3>2. Classification and Forensic Identification of Traumatic Wounds</h3>\n<ol>\n  <li><b>Incised Wounds (Slash / Cuts):</b>\n    <ul>\n      <li><i>Weapon:</i> Sharp-edged cutting weapon (knife, scalpel, razor, glass).</li>\n      <li><i>Characteristics:</i> Margins are clean-cut, sharp, everted, and non-bruised; no tissue bridging across the base; length is greater than depth; profuse ante-mortem hemorrhage.</li>\n    </ul>\n  </li>\n  <li><b>Lacerated Wounds (Tears):</b>\n    <ul>\n      <li><i>Weapon:</i> Blunt force impact (clubs, vehicular collision, animal horn gore, bite wounds).</li>\n      <li><i>Characteristics:</i> Margins are irregular, ragged, torn, and undermined; surrounded by prominent <b>contusion (bruising)</b>; presence of intact <b>tissue bridges</b> (nerves, fibrous bands, blood vessels spanning the gap).</li>\n    </ul>\n  </li>\n  <li><b>Contusions (Bruises):</b>\n    <ul>\n      <li><i>Mechanism:</i> Extravasation of blood into subcutaneous tissue without rupture of overlying skin, caused by blunt impact.</li>\n      <li><i>Age estimation:</i> Color transitions over time: Red-blue (fresh hemoglobin) $\rightarrow$ Dark blue/purple (24–48 hours) $\rightarrow$ Greenish (biliverdin, 4–5 days) $\rightarrow$ Yellow-brown (hemosiderin/bilirubin, 7–10 days).</li>\n    </ul>\n  </li>\n  <li><b>Gunshot Wounds:</b>\n    <ul>\n      <li><b>Wound of Entry (Inlet):</b> Inverted margins, circular/oval defect; surrounded by an <b>abrasion collar</b> (ring of denuded epidermis) and <b>contusion ring</b>. If fired at close range: <i>scorching/singeing</i> of hair (flame), <i>blackening</i> (smoke deposition), and <i>tattooing/stippling</i> (unburnt gunpowder grains embedded in skin).</li>\n      <li><b>Wound of Exit (Outlet):</b> Everted, torn, stellate or irregular margins, larger than entry wound; lacks scorching, tattooing, or abrasion collar.</li>\n    </ul>\n  </li>\n</ol>\n\n<h3>3. Specific Forensic Lesions</h3>\n<ul>\n  <li><b>Antemortem Drowning:</b>\n    <ul>\n      <li>Presence of persistent, fine, white or blood-tinged, tenacious foam at nostrils and mouth (<b>emphysema aquosum</b>).</li>\n      <li>Lungs are massively ballooned, heavy, pale, waterlogged, filling the thoracic cavity and indenting over ribs; water and froth fill trachea and bronchi.</li>\n      <li>Water and silt/diatoms present in stomach and duodenum.</li>\n    </ul>\n  </li>\n  <li><b>Electrocution / Lightning Strike:</b>\n    <ul>\n      <li>Singed or scorched linear or branching tree-like burn marks on skin ('arborescent / Lichtenberg figures' or 'ferning patterns').</li>\n      <li>Unclotted, dark blood; rapid onset and disappearance of rigor mortis; sudden death with unchewed grass in mouth.</li>\n    </ul>\n  </li>\n  <li><b>Malicious Poisoning:</b>\n    <ul>\n      <li><i>Organophosphates / Carbamates:</i> Severe pulmonary oedema with copious tracheal froth, pinpoint constricted pupils (miosis), blue/pink granules in stomach contents (Furadan).</li>\n      <li><i>Zinc Phosphide:</i> Intense garlic/acetylene odor in opened stomach, corrosive hemorrhagic gastritis, pulmonary congestion.</li>\n      <li><i>Strychnine:</i> Violent extensor rigidity, rapid onset of rigor mortis, cyanosis, empty stomach.</li>\n      <li><i>Cyanide (HCN):</i> Bright cherry-red blood and viscera, bitter almond odor on opening rumen/stomach.</li>\n      <li><i>Nitrate / Nitrite:</i> Distinctive dark <b>chocolate-brown blood</b> (methemoglobinemia).</li>\n    </ul>\n  </li>\n</ul>\n\n<h3>4. Preparation of the Veterolegal Certificate</h3>\n<p>The post-mortem certificate must be issued in duplicate on official stationery. It contains: 1. Authority requisition details, 2. Place, date, time, and lighting of necropsy, 3. Carcass identification and witnesses, 4. External examination and detailed wound measurements (length, width, depth, margins), 5. Internal examination findings, 6. Inventory of preserved viscera with seal impression, and 7. Definite, unambiguous <b>final scientific opinion on the cause and time since death</b>.</p>",
      "keyPoints": [
        "Legal requirements: Official written requisition (Police/Forest/Judicial), strict chain of custody, exact animal identification.",
        "Incised vs Lacerated: Incised has smooth margins and no tissue bridging; Lacerated has ragged torn margins, tissue bridges, and surrounding contusion.",
        "Gunshot wounds: Entry wound has inverted margins, abrasion collar, tattooing, and blackening; Exit wound is larger, everted, and torn.",
        "Drowning: Persistent fine white tracheal foam (emphysema aquosum), ballooned heavy waterlogged lungs, diatoms in stomach.",
        "Poisoning hallmarks: Organophosphates (pulmonary froth, miosis), Cyanide (cherry-red blood), Nitrite (chocolate-brown blood), Zinc phosphide (garlic odor).",
        "Legal report: Detailed wound dimensions, evidence sealing, definitive opinion on cause and manner of death."
      ],
      "table": null,
      "pyq": [
        "IVRI 2023",
        "TANUVAS 2022",
        "GADVASU 2021",
        "RAJUVAS 2020"
      ]
    }
  ],
  "unit-4": [
    {
      "id": "u4-qa-01",
      "type": "define",
      "marks": 2,
      "question": "Define Foot and Mouth Disease (FMD) and name the seven major immunological serotypes.",
      "topicId": "u4-t01",
      "answer": "<p><b>Foot and Mouth Disease (FMD / Aphthous Fever)</b> is an extremely contagious, acute viral vesicular disease of cloven-hoofed domestic and wild ruminants and pigs caused by an <b>Aphthovirus</b> of the family <i>Picornaviridae</i>, characterized by vesicular eruptions on the oral mucosa, dental pad, tongue, teats, and interdigital cleft of the hooves.</p><p><b>Seven Immunological Serotypes:</b> <b>O, A, C, SAT-1, SAT-2, SAT-3, and Asia-1</b> (in India, serotypes O, A, and Asia-1 are prevalent, with O causing >80% of outbreaks; no cross-immunity exists between serotypes).</p>",
      "keyPoints": [
        "FMD: Highly contagious picornavirus disease forming vesicles on mouth, feet, and teats in cloven-hoofed animals.",
        "7 Serotypes: O, A, C, SAT-1, SAT-2, SAT-3, Asia-1 (O is most prevalent in India)."
      ],
      "table": null,
      "pyq": [
        "IVRI 2023",
        "TANUVAS 2022",
        "GADVASU 2021"
      ]
    },
    {
      "id": "u4-qa-02",
      "type": "define",
      "marks": 2,
      "question": "Define 'Tiger Heart' (Tigroid Heart) in calves and state its etiology.",
      "topicId": "u4-t01",
      "answer": "<p><b>Tiger Heart (Tigroid Heart)</b> is the characteristic pathognomonic gross myocardial lesion seen in young suckling calves, lambs, and piglets that die acutely from <b>Foot and Mouth Disease (FMD)</b>.</p><p><b>Pathology:</b> Characterized by severe acute non-suppurative myocarditis with Zenker's degeneration and necrosis of ventricular myofibres, appearing grossly as alternating, irregular, grayish-white or yellowish-tan necrotic streaks and bands against the red, congested myocardium, resembling the stripes of a tiger's pelt.</p>",
      "keyPoints": [
        "Tiger heart: Severe acute necrotizing myocarditis in calves/lambs during FMD.",
        "Appearance: Alternating grey-white necrotic streaks against congested red myocardium."
      ],
      "table": null,
      "pyq": [
        "IVRI 2022",
        "RAJUVAS 2021",
        "KVAFSU 2019"
      ]
    },
    {
      "id": "u4-qa-03",
      "type": "define",
      "marks": 2,
      "question": "Define Negri Bodies and state their diagnostic anatomical location in dogs vs herbivores.",
      "topicId": "u4-t05",
      "answer": "<p><b>Negri Bodies</b> are pathognomonic, sharply defined, round to oval, eosinophilic, intracytoplasmic viral inclusion bodies (2–10 $\\mu$m) containing inner basophilic granules, found in neurons infected with <b>Rabies Lyssavirus</b>.</p><p><b>Diagnostic Predilection Locations:</b></p><ul><li><b>Carnivores (Dog, Cat):</b> Hippocampus (Ammon's horn / <i>cornu ammonis</i>).</li><li><b>Herbivores (Cattle, Sheep, Horse):</b> <b>Purkinje cells of the cerebellum</b>.</li></ul>",
      "keyPoints": [
        "Negri bodies: Eosinophilic intracytoplasmic inclusion bodies with basophilic inner granules in rabies.",
        "Locations: Hippocampus in dogs/cats; Purkinje cells of cerebellum in herbivores."
      ],
      "table": null,
      "pyq": [
        "TANUVAS 2023",
        "IVRI 2021",
        "GADVASU 2020"
      ]
    },
    {
      "id": "u4-qa-04",
      "type": "define",
      "marks": 2,
      "question": "Define Blue Tongue and explain why the disease is called 'Blue Tongue'.",
      "topicId": "u4-t02",
      "answer": "<p><b>Blue Tongue</b> is an infectious, non-contagious, vector-borne viral disease of domestic and wild ruminants (primarily sheep) caused by an <b>Orbivirus</b> of the family <i>Reoviridae</i>, transmitted by biting midges (<i>Culicoides</i> species).</p><p><b>Origin of the Name:</b> Viral replication in vascular endothelia causes severe microvascular damage, thrombosis, and ischemic congestion of the head and tongue; severe hypoxemia and cyanosis turn the swollen, edematous tongue a deep purplish-blue color ('blue tongue').</p>",
      "keyPoints": [
        "Blue Tongue: Culicoides-transmitted orbivirus causing microvascular damage in sheep.",
        "Name reason: Endothelial damage leads to severe venous congestion and cyanosis of the tongue, making it appear swollen and blue."
      ],
      "table": null,
      "pyq": [
        "IVRI 2022",
        "WBUAFS 2020"
      ]
    },
    {
      "id": "u4-qa-05",
      "type": "define",
      "marks": 2,
      "question": "Define Peste des Petits Ruminants (PPR) and name the virus genus.",
      "topicId": "u4-t02",
      "answer": "<p><b>Peste des Petits Ruminants (PPR / Goat Plague)</b> is an acute, highly contagious, statutory notifiable viral disease of goats and sheep characterized by high fever, necrotic stomatitis, catarrhal ocular/nasal discharge, severe enteritis (diarrhea), and bronchopneumonia.</p><p><b>Virus Genus:</b> Genus <b>Morbillivirus</b>, Family <i>Paramyxoviridae</i> (closely related antigenically to Rinderpest virus).</p>",
      "keyPoints": [
        "PPR: Highly contagious viral stomatitis-enteritis-pneumonia complex in sheep and goats.",
        "Virus genus: Morbillivirus (Family Paramyxoviridae)."
      ],
      "table": null,
      "pyq": [
        "GADVASU 2023",
        "TANUVAS 2021",
        "MAFSU 2019"
      ]
    },
    {
      "id": "u4-qa-06",
      "type": "define",
      "marks": 2,
      "question": "Define Ascoli's Thermoprecipitation Test in Anthrax diagnosis.",
      "topicId": "u4-t14",
      "answer": "<p><b>Ascoli's Thermoprecipitation Test</b> is a rapid serological ring precipitation test used to diagnose <b>Anthrax</b> in putrefied carcasses or processed animal products (hides, skins, wool, bone meal) where live bacilli have died or cannot be cultured.</p><p><b>Principle:</b> Heat-stable polysaccharide antigen extracted from boiled, filtered tissues is layered over high-titer anthrax hyperimmune antiserum in a narrow capillary tube; formation of a distinct white precipitate ring at the interface within 1–5 minutes confirms anthrax.</p>",
      "keyPoints": [
        "Ascoli test: Serological ring-precipitation test for anthrax in decomposed tissues or hides.",
        "Principle: Heat-stable antigen extracted by boiling reacts with specific antiserum forming a white interfacial precipitation ring."
      ],
      "table": null,
      "pyq": [
        "IVRI 2023",
        "RAJUVAS 2022",
        "LUVAS 2018"
      ]
    },
    {
      "id": "u4-qa-07",
      "type": "define",
      "marks": 2,
      "question": "Define Blackleg (Black Quarter - BQ) and name its causative organism.",
      "topicId": "u4-t15",
      "answer": "<p><b>Blackleg (Black Quarter / Symptomatic Anthrax)</b> is an acute, fatal, non-contagious infectious endogenous disease of young cattle (6 months to 2 years) characterized by acute gaseous crepitant necrotizing myositis of large heavy skeletal muscle masses (thigh, rump, shoulder) with profound toxemia.</p><p><b>Causative Organism:</b> <b>Clostridium chauvoei</b> (a Gram-positive, anaerobic, endospore-forming rod).</p>",
      "keyPoints": [
        "Blackleg: Acute endogenous clostridial infection causing crepitant gaseous necrotizing myositis in large muscles.",
        "Organism: Clostridium chauvoei."
      ],
      "table": null,
      "pyq": [
        "TANUVAS 2023",
        "IVRI 2021",
        "KVAFSU 2019"
      ]
    },
    {
      "id": "u4-qa-08",
      "type": "define",
      "marks": 2,
      "question": "Define Lumpy Jaw and state its causative agent and characteristic macroscopic granules.",
      "topicId": "u4-t13",
      "answer": "<p><b>Lumpy Jaw</b> is a chronic, progressive, pyogranulomatous osteomyelitis of the mandible and maxilla in cattle, characterized by profound rarefaction, osteolysis, and exuberant periosteal new bone formation resulting in large, hard, honeycomb-like facial swellings.</p><p><b>Causative Agent:</b> <b>Actinomyces bovis</b> (Gram-positive, non-acid-fast, filamentous branching bacterium). Pus contains pathognomonic macroscopic 1–2 mm yellowish-white gritty mineralized bacterial colonies called <b>'Sulfur Granules'</b>.</p>",
      "keyPoints": [
        "Lumpy jaw: Chronic pyogranulomatous osteomyelitis of mandible/maxilla with bony expansion.",
        "Agent: Actinomyces bovis; macroscopic hallmark: gritty yellow 'Sulfur Granules' in pus."
      ],
      "table": null,
      "pyq": [
        "IVRI 2022",
        "GADVASU 2020"
      ]
    },
    {
      "id": "u4-qa-09",
      "type": "define",
      "marks": 2,
      "question": "Define Wooden Tongue and state its causative agent.",
      "topicId": "u4-t13",
      "answer": "<p><b>Wooden Tongue</b> is a chronic, progressive granulomatous and pyogranulomatous inflammation strictly affecting the soft tissues of the head, primarily the <b>tongue</b>, of cattle, resulting in severe fibrous induration, swelling, loss of mobility, and inability to prehend food (tongue becomes hard and protrudes like a block of wood).</p><p><b>Causative Agent:</b> <b>Actinobacillus lignieresii</b> (Gram-negative, non-motile, pleomorphic rod).</p>",
      "keyPoints": [
        "Wooden tongue: Chronic pyogranulomatous induration of the tongue soft tissue in cattle.",
        "Agent: Actinobacillus lignieresii (Gram-negative bacterium)."
      ],
      "table": null,
      "pyq": [
        "TANUVAS 2022",
        "WBUAFS 2021"
      ]
    },
    {
      "id": "u4-qa-10",
      "type": "define",
      "marks": 2,
      "question": "Define Ghon's Complex (Primary Complex) in Tuberculosis.",
      "topicId": "u4-t12",
      "answer": "<p><b>Ghon's Complex (Primary Complex)</b> is the initial pathognomonic pathological unit of primary <b>Tuberculosis</b> in cattle, comprising two anatomically linked components:</p><ol><li>The <b>Primary Focus (Ghon's focus):</b> A focal, subpleural caseous or caseo-calcareous tuberculous granuloma at the initial site of bacterial entry in the lung.</li><li>The <b>Regional Lymph Node Lesion:</b> Severe caseous and calcareous enlargement of the draining regional lymph node (tracheobronchial or mediastinal lymph nodes), connected by inflamed lymphatic vessels.</li></ol>",
      "keyPoints": [
        "Ghon's Complex: Pathognomonic lesion of primary tuberculosis.",
        "Components: Subpleural parenchymal Ghon focus + enlarged caseous draining regional lymph node."
      ],
      "table": null,
      "pyq": [
        "IVRI 2023",
        "GADVASU 2021",
        "MAFSU 2018"
      ]
    },
    {
      "id": "u4-qa-11",
      "type": "define",
      "marks": 2,
      "question": "Define the Straus Reaction in Glanders diagnosis.",
      "topicId": "u4-t17",
      "answer": "<p><b>Straus Reaction</b> is a diagnostic laboratory biological test for <b>Glanders</b> (caused by <i>Burkholderia mallei</i>):</p><p><b>Procedure & Finding:</b> Inoculation of infected nasal exudate or pus intraperitoneally into a mature male guinea pig; development of severe, acute purulent periorchitis, scrotal swelling, and ulceration of the tunica vaginalis within 2 to 4 days, with creamy pus yielding pure cultures of <i>B. mallei</i>, constitutes a positive Straus reaction.</p>",
      "keyPoints": [
        "Straus reaction: Diagnostic animal inoculation test for Glanders (Burkholderia mallei).",
        "Finding: Severe purulent periorchitis and scrotal swelling in male guinea pigs within 2-4 days."
      ],
      "table": null,
      "pyq": [
        "TANUVAS 2021",
        "IVRI 2020"
      ]
    },
    {
      "id": "u4-qa-12",
      "type": "define",
      "marks": 2,
      "question": "Define Surra and state its vector and causative protozoan.",
      "topicId": "u4-t26",
      "answer": "<p><b>Surra</b> is an acute, subacute, or chronic infectious hemoprotozoan disease of horses, camels, cattle, and dogs characterized by recurrent fever, progressive emaciation, dependent subcutaneous oedema, severe anemia, and nervous signs (hindlimb weakness / paralysis).</p><p><b>Causative Protozoan:</b> <b>Trypanosoma evansi</b> (extracellular monomorphic flagellate in blood plasma).</p><p><b>Vector:</b> Mechanically transmitted by blood-sucking horse flies (<b>Tabanus</b> species) and stable flies (<i>Stomoxys calcitrans</i>).</p>",
      "keyPoints": [
        "Surra: Vector-borne trypanosomosis causing intermittent fever, emaciation, oedema, and paralysis.",
        "Agent: Trypanosoma evansi; Vector: Tabanus biting flies."
      ],
      "table": null,
      "pyq": [
        "IVRI 2022",
        "RAJUVAS 2020",
        "KVAFSU 2019"
      ]
    },
    {
      "id": "u4-qa-13",
      "type": "short",
      "marks": 5,
      "question": "Describe Foot and Mouth Disease (FMD): Pathogenesis, gross lesions in adult cattle vs suckling calves (Tiger heart), and species differences.",
      "topicId": "u4-t01",
      "answer": "<p><b>Pathogenesis:</b> Aphthovirus enters via inhalation or ingestion, binds to integrin receptors ($\\alpha_v\\beta_6$) on pharyngeal and soft palate epithelium. Primary viral replication causes local ballooning degeneration of the stratum spinosum. Virus enters lymph and blood (viraemia), disseminating to sites of mechanical friction (tongue, dental pad, coronet, teats).</p>\n<p>Intercellular edema forms microvesicles that coalesce into large, fluid-filled, thin-walled <b>vesicles (aphthae)</b>. Vesicles rupture in 24 hours, leaving raw, painful, red erosions.</p>\n<p><b>Lesions in Adult Cattle:</b></p>\n<ul>\n  <li><b>Oral Cavity:</b> Large vesicles and denuded ragged ulcers on the dorsum of the tongue, dental pad, and gums; strings of ropy, viscous saliva hang from mouth with smacking of lips.</li>\n  <li><b>Feet:</b> Vesicles at the coronary band and interdigital cleft; ruptures produce severe lameness; in pigs and sheep, may cause complete sloughing of the hoof claw ('exungulation').</li>\n  <li><b>Teats:</b> Vesicles on teat skin predisposing to severe secondary mastitis.</li>\n</ul>\n<p><b>Lesions in Young Calves / Lambs (Tiger Heart):</b> Suckling neonates often die peracutely without any oral or foot vesicles due to fatal viral <b>myocarditis</b>. Necropsy reveals grayish-white or yellow streaks of Zenker's degeneration across the ventricular myocardium, producing the pathognomonic <b>'Tiger Heart'</b>.</p>\n<p><b>Species Differences:</b> Cattle are indicator hosts (severe mouth lesions); Pigs are <b>amplifier hosts</b> (excrete 3,000x more aerosolized virus than cows); Sheep/Goats are <b>maintenance hosts</b> (mild, unapparent lesions that easily evade detection).</p>",
      "keyPoints": [
        "Pathogenesis: Aphthovirus -> Pharyngeal entry -> Viraemia -> Ballooning degeneration of stratum spinosum -> Vesicles (aphthae) -> Ulcerative erosions.",
        "Adult cattle: Oral drooling, tongue vesicles, coronary band erosions, teat blisters.",
        "Young animals: Fatal acute myocarditis without vesicles ('Tiger Heart' with white ventricular streaks).",
        "Host roles: Cattle (indicators), Pigs (amplifiers emitting massive virus), Sheep (maintenance/silent spreaders)."
      ],
      "table": null,
      "pyq": [
        "IVRI 2023",
        "TANUVAS 2022",
        "GADVASU 2021",
        "RAJUVAS 2020"
      ]
    },
    {
      "id": "u4-qa-14",
      "type": "short",
      "marks": 5,
      "question": "Describe Rabies: Centripetal neurotropic migration, clinical forms (Furious vs Dumb), and histopathology (Negri bodies, Babes nodules).",
      "topicId": "u4-t05",
      "answer": "<p><b>Etiopathogenesis:</b> Rabies Lyssavirus is inoculated via the bite of a rabid carnivore. The virus replicates locally in striated muscle myocytes before binding to <b>nicotinic acetylcholine receptors (nAChR)</b> at neuromuscular motor end-plates.</p>\n<p>It undergoes <b>centripetal axoplasmic transport</b> along peripheral sensory/motor nerves at 50–100 mm/day until reaching the spinal cord and ascending into the brain. Inside neurons, rapid replication triggers acute, non-suppurative, fatal encephalomyelitis. It then migrates <b>centrifugally</b> along autonomic nerves into the salivary glands (shedding in saliva) and cornea.</p>\n<p><b>Clinical Forms:</b></p>\n<ul>\n  <li><b>Furious Rabies:</b> Predominates in dogs, cats, and horses; hyperesthesia, aggression, biting inanimate objects, jaw snapping ('fly biting'), lack of fear, drooling saliva, terminal paralysis.</li>\n  <li><b>Dumb (Paralytic) Rabies:</b> Common in cattle; depression, dropped lower jaw (mandibular paralysis), inability to swallow (mimicking choke), continuous bellowing, tenesmus, ascending hindlimb paralysis, and coma.</li>\n</ul>\n<p><b>Histopathology:</b></p>\n<ul>\n  <li><b>Negri Bodies:</b> Pathognomonic round/oval, eosinophilic intracytoplasmic inclusions with internal basophilic granules in <b>hippocampal pyramidal neurons (dogs)</b> and <b>cerebellar Purkinje cells (cattle)</b>.</li>\n  <li>Perivascular lymphocytic cuffing, neuronal degeneration, and neuronophagia.</li>\n  <li><b>Babes Nodules:</b> Focal microglial cell clusters surrounding necrotic, dead neurons.</li>\n</ul>",
      "keyPoints": [
        "Pathogenesis: Bite inoculation -> myocyte replication -> nAChR binding -> centripetal axoplasmic flow to CNS -> centrifugal spread to salivary glands.",
        "Furious form: Aggression, agitation, hyperesthesia, biting; Dumb form: Paralysis, dropped jaw, bellowing, recumbency.",
        "Histopathology: Negri bodies (intracytoplasmic inclusions in hippocampus/Purkinje cells), Babes nodules (microglial clusters), perivascular cuffs."
      ],
      "table": null,
      "pyq": [
        "IVRI 2023",
        "TANUVAS 2022",
        "GADVASU 2020"
      ]
    },
    {
      "id": "u4-qa-15",
      "type": "short",
      "marks": 5,
      "question": "Describe Classical Swine Fever (Hog Cholera): Pathogenesis, splenic marginal infarcts, turkey-egg kidney, and button ulcers in colon.",
      "topicId": "u4-t04",
      "answer": "<p><b>Etiology:</b> Classical Swine Fever (CSF) is caused by a <b>Pestivirus</b> (Family <i>Flaviviridae</i>), highly contagious and statutory notifiable.</p>\n<p><b>Pathogenesis:</b> Pestivirus possesses strict tropism for <b>vascular endothelial cells</b> and <b>reticuloendothelial mononuclear phagocytes</b>. Endothelial destruction triggers widespread microvascular thrombosis, increased vascular permeability, consumptive coagulopathy (DIC), and profound leukopenia and thrombocytopenia.</p>\n<p><b>Three Classical Pathognomonic Lesions:</b></p>\n<ol>\n  <li><b>Turkey-Egg Kidney:</b> Widespread, pinpoint to petechial hemorrhages densely scattered across the pale cortical surface of both kidneys, resembling the speckled shell of a turkey's egg.</li>\n  <li><b>Splenic Marginal Infarctions:</b> Multiple, distinct, elevated, wedge-shaped, dark blackish-purple ischemic hemorrhagic infarctions along the outer sharp margins of the spleen (almost pathognomonic for CSF in pigs).</li>\n  <li><b>Button Ulcers in the Large Intestine:</b> In chronic CSF, ischemic necrosis of solitary lymphoid follicles in the cecum and spiral colon followed by secondary bacterial invasion (<i>Salmonella</i>) produces raised, circular, concentric, laminated, yellowish-brown necrotic eschars resembling round coat buttons.</li>\n</ol>\n<p><b>Other Lesions:</b> 'Purple ears' and cutaneous cyanosis on snout, belly, and inner thighs; hemorrhages in lymph nodes producing 'strawberry lymph nodes'.</p>",
      "keyPoints": [
        "Etiology: Pestivirus with strict endothelial and lymphoid tropism causing DIC and thrombosis.",
        "Turkey-egg kidney: Diffuse cortical petechiae giving a speckled egg appearance.",
        "Splenic marginal infarcts: Raised, wedge-shaped hemorrhagic infarcts along splenic borders.",
        "Button ulcers: Concentric, raised necrotic ulcers in colon/cecum in chronic swine fever.",
        "Other signs: Strawberry lymph nodes, cyanotic purple skin on ears and abdomen."
      ],
      "table": null,
      "pyq": [
        "IVRI 2022",
        "GADVASU 2021",
        "MAFSU 2020"
      ]
    },
    {
      "id": "u4-qa-16",
      "type": "short",
      "marks": 5,
      "question": "Describe Black Quarter (BQ / Blackleg): Pathogenesis of latent spore activation, gaseous crepitant myositis, gross and microscopic features.",
      "topicId": "u4-t15",
      "answer": "<p><b>Etiopathogenesis:</b> Caused by <b>Clostridium chauvoei</b>. Cattle ingest spores from contaminated pasture, which are absorbed from the gut and circulate in blood (bacteremia) without causing disease. Spores are engulfed by macrophages and lie <b>dormant / latent</b> in normal skeletal muscles and liver for months.</p>\n<p>When blunt trauma (fighting, transport, rough handling) creates local muscle bruising, hematoma, and tissue hypoxia (low redox potential $Eh$), the latent spores germinate into vegetative bacilli. Multiplying bacilli release necrotizing and lethal exotoxins (<b>alpha toxin</b>: necrotizing, hemolytic, lethal; <b>beta toxin</b>: DNase; <b>hyaluronidase</b>), causing rapid extensive myofibre necrosis, gas production, and toxemic shock.</p>\n<p><b>Gross Lesions:</b></p>\n<ul>\n  <li>Large skeletal muscles of shoulder, thigh, rump, or neck are swollen, hot, and painful initially, becoming cool and painless with marked <b>subcutaneous crepitation</b> (crackling sound on palpation due to gas bubbles).</li>\n  <li>On incision, muscle is <b>dark reddish-black</b>, dry, porous, sponge-like, and friable, filled with gas bubbles and blood-stained frothy exudate.</li>\n  <li>Emits a distinctive, sweet, rancid, <b>sour butter odor</b> (due to butyric acid fermentation).</li>\n</ul>\n<p><b>Histopathology:</b> Extensive Zenker's coagulative necrosis of myofibres with loss of striations; myofibres are separated by clear gaseous spaces and serosanguinous edema; Gram-positive rods with subterminal spores visible between necrotic fibres.</p>",
      "keyPoints": [
        "Pathogenesis: Ingested spores lie latent in muscle -> blunt trauma causes hypoxia -> spore germination -> exotoxin production (alpha toxin).",
        "Gross: Swollen muscle with crepitus on palpation; cut surface is dry, porous, sponge-like, dark blackish-red with gas bubbles.",
        "Odor: Characteristic sweet, rancid 'sour butter' odor (butyric acid).",
        "Microscopic: Zenker's myonecrosis, gas vacuoles separating fibres, edema, Gram-positive spore-forming rods."
      ],
      "table": null,
      "pyq": [
        "IVRI 2023",
        "TANUVAS 2022",
        "RAJUVAS 2021",
        "GADVASU 2019"
      ]
    },
    {
      "id": "u4-qa-17",
      "type": "short",
      "marks": 5,
      "question": "Describe Anthrax: Pathogenesis (Capsule and tripartite exotoxin), cardinal necropsy lesions, biosafety contraindications, and McFadyean's reaction.",
      "topicId": "u4-t14",
      "answer": "<p><b>Etiology:</b> <i>Bacillus anthracis</i>, a large, Gram-positive, non-motile, spore-forming, capsulated rod.</p>\n<p><b>Pathogenesis & Virulence Factors:</b></p>\n<ul>\n  <li><b>Poly-D-glutamic Acid Capsule:</b> Encoded by plasmid <b>pXO2</b>; resists phagocytosis and prevents antibody binding.</li>\n  <li><b>Tripartite Exotoxin Complex:</b> Encoded by plasmid <b>pXO1</b>:\n    <ol>\n      <li><b>Protective Antigen (PA):</b> Binds host cell receptors and translocates EF and LF into cytosol.</li>\n      <li><b>Oedema Factor (EF):</b> Calmodulin-dependent adenylate cyclase; skyrockets intracellular cAMP, producing massive vascular permeability and gelatinous edema.</li>\n      <li><b>Lethal Factor (LF):</b> Zinc metalloprotease; cleaves MAP-kinase kinases (MAPKK), causing macrophage lysis, massive cytokine storm, and endothelial necrosis.</li>\n    </ol>\n  </li>\n</ul>\n<p><b>Cardinal Post-Mortem Signs:</b></p>\n<ul>\n  <li>Failure of blood to clot (blood remains dark, tarry, and fluid).</li>\n  <li><b>Complete absence or rapid disappearance of rigor mortis</b>.</li>\n  <li>Bloody exudate exuding from all natural orifices (nostrils, mouth, anus, vulva).</li>\n  <li>Rapid, immense carcass bloating and putrefaction.</li>\n  <li><b>Enormous Splenomegaly ('Blackberry Jam Spleen'):</b> Spleen enlarged 5–10 times; pulp is soft, liquefied, semi-fluid, oozing dark tarry mush on section.</li>\n</ul>\n<p><b>Strict Biosafety Rule:</b> <b>NEVER OPEN AN ANTHRAX SUSPECT CARCASS!</b> Exposure to atmospheric oxygen induces vegetative bacilli to form indestructible dormant endospores that contaminate soil for decades. Carcass must be incinerated whole or buried 6 feet deep with quicklime.</p>\n<p><b>McFadyean's Staining Reaction:</b> Peripheral blood smear stained with polychrome methylene blue; bacilli appear as dark blue truncated rods surrounded by a distinct, amorphous, pink-purple / reddish capsule halo.</p>",
      "keyPoints": [
        "Virulence factors: Poly-D-glutamic acid capsule (pXO2) + Tripartite toxin (PA, EF, LF on pXO1).",
        "Necropsy hallmarks: Unclotted tarry black blood, absent rigor mortis, bleeding from orifices, immense splenomegaly ('blackberry jam spleen').",
        "Biosafety: Never open the carcass; oxygen induces spore formation; dispose by deep burial in lime or incineration.",
        "McFadyean's reaction: Polychrome methylene blue stain showing blue rods in pink-purple capsule halos."
      ],
      "table": null,
      "pyq": [
        "IVRI 2023",
        "TANUVAS 2021",
        "GADVASU 2020",
        "KVAFSU 2019"
      ]
    },
    {
      "id": "u4-qa-18",
      "type": "short",
      "marks": 5,
      "question": "Describe Bovine Tuberculosis: Pathogenesis, formation of the tuberculous granuloma (tubercle), caseous necrosis, Langhans giant cells, and Pearl Disease.",
      "topicId": "u4-t12",
      "answer": "<p><b>Etiology:</b> <i>Mycobacterium bovis</i>, an acid-fast, slow-growing, aerobic rod with a waxy, lipid-rich (mycolic acid) cell wall.</p>\n<p><b>Pathogenesis & Tubercle Formation:</b></p>\n<ol>\n  <li>Inhaled bacilli enter alveoli and are engulfed by alveolar macrophages. Mycolic acids prevent phagolysosome fusion; bacilli replicate intracellularly, lysing macrophages.</li>\n  <li>Dendritic cells present antigens to $CD4^+ Th_1$ lymphocytes, which secrete <b>Interferon-gamma (IFN-gamma)</b>.</li>\n  <li>IFN-gamma activates blood monocytes into large, secretory <b>Epithelioid Macrophages</b> that surround the bacterial focus.</li>\n  <li>Epithelioid cells fuse to form <b>Langhans Multinucleated Giant Cells</b> (with nuclei arranged in a horseshoe ring along the periphery).</li>\n  <li>The center undergoes <b>Caseous Necrosis</b> (dry, crumbly, cheesy debris) due to delayed hypersensitivity (Type IV) and ischemic necrosis, which rapidly calcifies in cattle.</li>\n  <li>Outer zone is surrounded by a cuff of lymphocytes, plasma cells, and proliferating fibroblasts (fibrous capsule), forming a classical <b>Tubercle</b>.</li>\n</ol>\n<p><b>Pearl Disease (Perlsucht):</b> Chronic tuberculous serositis. Multiple, firm, rounded, glistening, pearly-white or yellow calcified nodules studded across the parietal and visceral pleura or peritoneum, resembling strings of pearls.</p>",
      "keyPoints": [
        "Pathogenesis: Inhalation -> macrophage uptake -> Th1 activation -> IFN-gamma release -> Epithelioid cells and Langhans giant cells.",
        "Tubercle structure: Central caseous necrosis with dystrophic calcification -> rim of epithelioid/Langhans cells -> outer rim of lymphocytes and fibrous capsule.",
        "Langhans giant cell: Characteristic horseshoe arrangement of peripheral nuclei.",
        "Pearl Disease: Nodular pearl-like tuberculous granulomas studded across pleural and peritoneal serosa."
      ],
      "table": null,
      "pyq": [
        "IVRI 2022",
        "GADVASU 2021",
        "TANUVAS 2020",
        "RAJUVAS 2019"
      ]
    },
    {
      "id": "u4-qa-19",
      "type": "diff",
      "marks": 5,
      "question": "Differentiate Babesiosis (*Babesia bigemina*) from Theileriosis (*Theileria annulata*).",
      "topicId": "u4-t26",
      "answer": "<p>Bovine Babesiosis (Redwater) and Tropical Theileriosis are the two major tick-borne hemoprotozoan diseases of cattle in India, but feature distinct pathogenic mechanisms and pathological lesions:</p>",
      "keyPoints": [
        "Babesiosis: Direct intraerythrocytic replication causing intravascular RBC lysis, severe hemoglobinuria ('redwater'), and pip-shaped paired piroplasms.",
        "Theileriosis: Lymphoproliferative phase with Koch's blue bodies in lymphocytes followed by extravascular RBC destruction; clear yellow urine (no hemoglobinuria) and exophthalmos.",
        "Vector difference: Rhipicephalus microplus transmits Babesia; Hyalomma anatolicum transmits Theileria."
      ],
      "table": {
        "title": "Comparison between Bovine Babesiosis and Tropical Theileriosis",
        "headers": [
          "Criterion",
          "Babesiosis (*Babesia bigemina*)",
          "Theileriosis (*Theileria annulata*)"
        ],
        "rows": [
          [
            "Causative organism",
            "<i>Babesia bigemina</i> (large piroplasm) or <i>B. bovis</i> (small)",
            "<i>Theileria annulata</i> (piroplasm in RBC, schizont in WBC)"
          ],
          [
            "Tick vector",
            "<i>Rhipicephalus (Boophilus) microplus</i>",
            "<i>Hyalomma anatolicum</i>"
          ],
          [
            "Target cell for primary replication",
            "Erythrocytes (RBCs) exclusively",
            "B-lymphocytes and macrophages (macroschizonts), then RBCs (piroplasms)"
          ],
          [
            "Type of RBC destruction",
            "<b>Intravascular hemolysis</b> (merozoites actively rupture RBCs)",
            "<b>Extravascular hemolysis</b> (RBCs phagocytosed by splenic/hepatic macrophages)"
          ],
          [
            "Urine appearance & color",
            "<b>Dark red to reddish-brown (Hemoglobinuria - 'Redwater')</b>",
            "<b>Clear yellow to normal</b> (absence of hemoglobinuria)"
          ],
          [
            "Lymph nodes",
            "Mildly reactive; not markedly enlarged",
            "<b>Massive enlargement of superficial lymph nodes</b> (prescapular, precrural)"
          ],
          [
            "Diagnostic microscopic hallmark",
            "Paired, pear-shaped (pyriform) merozoites joined at an acute angle inside RBCs (Giemsa)",
            "<b>Koch's Blue Bodies (macroschizonts)</b> inside lymphocytes on lymph node biopsy smears"
          ],
          [
            "Abomasal lesions",
            "Mild congestion",
            "Multiple, discrete, punched-out <b>button-like ulcerative erosions</b> on abomasal folds"
          ],
          [
            "Eye lesions",
            "Subconjunctival petechiae",
            "Prominent <b>exophthalmos (protruding eyeballs)</b> and third eyelid petechiae"
          ]
        ]
      },
      "pyq": [
        "IVRI 2023",
        "TANUVAS 2022",
        "GADVASU 2021",
        "WBUAFS 2020"
      ]
    },
    {
      "id": "u4-qa-20",
      "type": "short",
      "marks": 5,
      "question": "Describe Bovine Enzootic Hematuria: Etiology (Bracken fern ptaquiloside + BPV-2), pathogenesis, and urinary bladder lesions.",
      "topicId": "u4-t37",
      "answer": "<p><b>Definition:</b> Bovine Enzootic Hematuria (BEH) is a chronic, non-infectious, debilitating disease of adult cattle and buffalo grazing in hilly/mountainous terrains, characterized by persistent or intermittent painless hematuria, progressive anemia, and development of multiple epithelial and vascular neoplasms in the urinary bladder.</p>\n<p><b>Etiology & Synergism:</b></p>\n<ul>\n  <li>Chronic ingestion of <b>Bracken Fern (<i>Pteridium aquilinum</i>)</b> containing the radiomimetic norsesquiterpene glucoside carcinogen <b>Ptaquiloside</b>.</li>\n  <li>Synergistic co-infection with <b>Bovine Papillomavirus Type 2 (BPV-2)</b> in urothelial cells.</li>\n</ul>\n<p><b>Pathogenesis:</b> Ptaquiloside is absorbed from the rumen, passes through the liver, and is excreted concentrated in urine. In the acidic environment of the bladder, ptaquiloside converts into an active dienone intermediate that alkylates DNA at adenine bases, producing severe chromosomal aberrations. Co-expression of BPV-2 oncoproteins (E5, E7) inactivates host tumour suppressors, driving multi-focal transformation of both urothelium and suburothelial microvessels (field cancerization).</p>\n<p><b>Pathological Lesions in the Urinary Bladder:</b></p>\n<ul>\n  <li>Bladder wall is thickened, edematous, corrugated, with patchy hemorrhagic mucosal petechiae and ecchymoses.</li>\n  <li><b>Vascular Neoplasms:</b> Hemangiomas (cavernous/capillary) and <b>Hemangiosarcomas</b>—bluish-red, fragile, spongy, blood-filled vascular nodules projecting into the lumen that rupture easily, causing profuse hematuria.</li>\n  <li><b>Epithelial Neoplasms:</b> Papillomas, Transitional Cell Carcinomas (TCC), and Squamous Cell Carcinomas—cauliflower-like, ulcerated, necrotic mucosal masses.</li>\n</ul>",
      "keyPoints": [
        "Etiology: Chronic ingestion of Bracken fern (Ptaquiloside) synergizing with Bovine Papillomavirus-2 (BPV-2).",
        "Pathogenesis: Urinary excretion of ptaquiloside dienone causing DNA alkylation and urothelial/endothelial neoplastic transformation.",
        "Bladder lesions: Hemangiomas, hemangiosarcomas, and transitional cell carcinomas projecting into lumen.",
        "Clinical signs: Intermittent painless hematuria, progressive anemia, emaciation in hilly tracts."
      ],
      "table": null,
      "pyq": [
        "IVRI 2023",
        "GADVASU 2022",
        "KVAFSU 2020"
      ]
    },
    {
      "id": "u4-qa-21",
      "type": "long",
      "marks": 12,
      "question": "Describe in detail Tuberculosis and Paratuberculosis (Johne's Disease): Comparative etiology, transmission, pathogenesis, gross and histopathological differences, and diagnostic methods.",
      "topicId": "u4-t12",
      "answer": "<p>Both Tuberculosis and Johne's disease are chronic, debilitating mycobacterial infections of domestic ruminants, but exhibit starkly contrasting organ tropisms and histological reactions.</p>\n\n<h3>1. Comparative Etiology and Transmission</h3>\n<ul>\n  <li><b>Bovine Tuberculosis:</b> Caused by <b>Mycobacterium bovis</b> (acid-fast, slow-growing bacillus). Transmitted primarily via <b>aerosol inhalation</b> of respiratory droplets (80–90% in housed cattle) or ingestion of unpasteurized infected milk in calves. Zoonotic pathogen.</li>\n  <li><b>Johne's Disease (Paratuberculosis):</b> Caused by <b>Mycobacterium avium subsp. paratuberculosis (MAP)</b> (extremely slow-growing, requires mycobactin for culture). Transmitted via the <b>fecal-oral route</b> through ingestion of feed or pasture contaminated with infected feces, or colostrum/milk. Neonates and young calves are highly susceptible; prolonged subclinical incubation period of 2 to 5 years.</li>\n</ul>\n\n<h3>2. Pathogenesis and Tissue Tropism</h3>\n<ul>\n  <li><b>Tuberculosis Pathogenesis:</b> Inhaled bacilli enter alveoli, engulfed by alveolar macrophages. Bacilli multiply intracellularly. $CD4^+ Th_1$ response releases $IFN-\\gamma$, activating macrophages into epithelioid cells and multinucleated giant cells. Intense cell-mediated delayed-type hypersensitivity (Type IV) leads to central <b>Caseous Necrosis</b> and mineralizing dystrophic calcification, forming classical circumscribed <b>Tubercles</b>.</li>\n  <li><b>Johne's Disease Pathogenesis:</b> Ingested MAP organisms cross the ileal mucosal epithelium via <b>M-cells (microfold cells)</b> of Peyer's patches. Bacilli are engulfed by subepithelial macrophages. MAP cell wall lipids inhibit phagolysosome maturation, allowing bacilli to replicate uninhibited inside macrophages. The host mounts a diffuse, non-caseating infiltration of macrophages throughout the lamina propria and submucosa of the <b>terminal ileum, cecum, and colon</b>, causing profound malabsorption and protein-losing enteropathy without ulceration or caseation.</li>\n</ul>\n\n<h3>3. Gross Pathology Comparison</h3>\n<ul>\n  <li><b>Tuberculosis Gross Lesions:</b>\n    <ul>\n      <li><i>Lungs & Thoracic Lymph Nodes:</i> Multifocal, well-demarcated nodular tubercles (Ghon's complex). On section, tubercles have dry, crumbly, yellowish-white, cheesy caseous centers with gritty calcification, surrounded by a thick fibrous capsule.</li>\n      <li><i>Serous Membranes (Pearl Disease):</i> Multiple, glistening, firm, pearly nodules studded over pleura and peritoneum.</li>\n    </ul>\n  </li>\n  <li><b>Johne's Disease Gross Lesions:</b>\n    <ul>\n      <li><i>Terminal Ileum, Ileo-cecal Valve, & Colon:</i> Intestinal wall is massively thickened (3–4 times normal), soft, and pliable. Mucosa is thrown into prominent, rigid, undulating, transverse and longitudinal folds resembling the <b>convolutions of the cerebral cortex ('Brain-like Corrugations')</b>. These corrugations <b>do not disappear when the intestine is stretched</b>. Crucially, <b>caseation, ulceration, and calcification are completely ABSENT</b>.</li>\n      <li><i>Mesenteric Lymph Nodes:</i> Enlarged, soft, succulent, edematous, pale on cut section; no caseation. Lymphatic vessels on intestinal serosa are prominent, thickened, and corded (lymphangitis).</li>\n    </ul>\n  </li>\n</ul>\n\n<h3>4. Histopathology Comparison</h3>\n<ul>\n  <li><b>Tuberculosis Histology:</b> Classical <b>Caseating Granuloma</b>: central structureless, eosinophilic amorphous caseous debris with basophilic calcium crystals; middle rim of pale pink <b>epithelioid macrophages</b> and <b>Langhans giant cells</b> (horseshoe-arranged nuclei); outer rim of lymphocytes, plasma cells, and dense fibrous connective tissue capsule. Bacilli are sparse (paucibacillary).</li>\n  <li><b>Johne's Disease Histology:</b> Diffuse <b>Non-Caseating Granulomatous Enteritis</b>: lamina propria and submucosa are densely packed with sheets of large, foamy, pale epithelioid macrophages and occasional multinucleated giant cells. Villi are blunted and fused. Central caseous necrosis, calcification, and fibrous capsules are <b>absent</b>. <b>Ziehl-Neelsen (ZN) stain</b> reveals massive intracellular clumps of bright red, acid-fast bacilli inside macrophages ('clumps of cigars').</li>\n</ul>\n\n<h3>5. Diagnostic Methods</h3>\n<ul>\n  <li><b>Tuberculosis:</b> Single Intradermal Tuberculin Test (SID) or <b>Comparative Intradermal Tuberculin Test (CITT)</b> using Bovine and Avian PPD (reading skin thickness at 72 hours); gamma-interferon assay; ZN staining of caseous lymph node smears; culture on Lowenstein-Jensen medium.</li>\n  <li><b>Johne's Disease:</b> Fecal smear ZN staining (characteristic clumps of acid-fast bacilli); Johnin intradermal test; Serum ELISA (anti-MAP antibodies); fecal PCR (IS900 gene detection); culture on Herrold's egg yolk medium with mycobactin J (takes 8–16 weeks).</li>\n</ul>",
      "keyPoints": [
        "Etiology: M. bovis (aerosol, zoonotic) vs MAP (fecal-oral, 2-5 yr incubation, young calf susceptibility).",
        "Pathology TB: Caseating, calcifying nodular tubercles (Ghon complex, Pearl disease) in lungs, lymph nodes, and serosa.",
        "Pathology JD: Diffuse non-caseating enteritis in terminal ileum; pathognomonic permanent brain-like mucosal corrugations; zero caseation or calcification.",
        "Microscopy TB: Central caseous necrosis, Langhans giant cells (horseshoe nuclei), outer fibrous capsule.",
        "Microscopy JD: Diffuse sheets of foamy epithelioid macrophages packed with red acid-fast bacilli on ZN stain; villous atrophy.",
        "Diagnosis: Tuberculin test (CITT at 72h) for TB; ZN fecal smear clumps, Johnin test, and IS900 PCR for Johne's."
      ],
      "table": null,
      "pyq": [
        "IVRI 2023",
        "TANUVAS 2022",
        "GADVASU 2021",
        "RAJUVAS 2020"
      ]
    },
    {
      "id": "u4-qa-22",
      "type": "long",
      "marks": 12,
      "question": "Describe Clostridial Diseases of Ruminants: Detailed comparative pathology of Blackleg (*C. chauvoei*), Enterotoxaemia (*C. perfringens* Type D), Tetanus (*C. tetani*), and Botulism (*C. botulinum*) — Toxins, pathogenesis, and lesions.",
      "topicId": "u4-t15",
      "answer": "<p>Clostridial diseases are acute, fatal intoxications or toxico-infections of ruminants caused by anaerobic, Gram-positive, spore-forming bacteria of the genus <i>Clostridium</i>.</p>\n\n<h3>1. Blackleg (Black Quarter) — <i>Clostridium chauvoei</i></h3>\n<ul>\n  <li><b>Pathogenesis:</b> Ingested spores circulate and lodge dormant in large skeletal muscles. Blunt trauma induces local hypoxia ($Eh$ drop), triggering spore germination. Multiplying vegetative cells release <b>alpha toxin</b> (necrotizing, hemolytic, lethal) and hyaluronidase.</li>\n  <li><b>Gross Pathology:</b> Acute gaseous necrotizing myositis in heavy muscle masses (thigh, shoulder). Muscles are swollen, hot, crepitant, becoming cold; on section, muscle is dark red-black, dry, porous, sponge-like, filled with gas bubbles and sweet rancid butter odor (butyric acid). Sero-fibrinous pericarditis.</li>\n  <li><b>Clinical Signs:</b> Acute lameness, high fever, subcutaneous crepitation, prostration, death within 12–24 hours.</li>\n</ul>\n\n<h3>2. Enterotoxaemia (Pulpy Kidney Disease) — <i>Clostridium perfringens</i> Type D</h3>\n<ul>\n  <li><b>Pathogenesis:</b> Normal commensal in gut. Sudden consumption of rich grain or lush pasture pushes unfermented starch into the ileum. <i>C. perfringens</i> Type D proliferates explosively, secreting inactive <b>epsilon protoxin</b>. Host intestinal <b>trypsin</b> cleaves the protoxin into deadly <b>epsilon toxin</b>.</li>\n  <li><b>Mechanism of Toxin:</b> Epsilon toxin binds vascular endothelial cells, opening tight junctions and causing severe microvascular permeability and endothelial lysis throughout the body, particularly brain and kidneys.</li>\n  <li><b>Gross Pathology:</b>\n    <ul>\n      <li><b>Accelerated Post-Mortem Renal Autolysis ('Pulpy Kidney'):</b> Kidneys soften rapidly within 1–2 hours after death into a soft, semi-fluid, jelly-like mush.</li>\n      <li><b>Hydropericardium:</b> Pericardial sac distended with straw-colored fluid containing large, gelatinous fibrin clots.</li>\n      <li><b>Focal Symmetrical Encephalomalacia (FSE):</b> Bilateral symmetrical liquefactive necrosis in internal capsules, basal ganglia, and thalamus.</li>\n      <li><b>Glycosuria:</b> Heavy glucose in urine without hyperglycemia (due to proximal tubular necrosis).</li>\n    </ul>\n  </li>\n</ul>\n\n<h3>3. Tetanus ('Lockjaw') — <i>Clostridium tetani</i></h3>\n<ul>\n  <li><b>Pathogenesis:</b> Spores enter deep, anaerobic puncture wounds (castration, shearing cuts, umbilical infection). Spores germinate locally; bacteria remain strictly confined to the wound (non-invasive) but secrete <b>Tetanospasmin</b> (neurotoxic AB-toxin).</li>\n  <li><b>Mechanism of Toxin:</b> Tetanospasmin travels retrogradely along motor axon terminals into the spinal cord and brainstem. It enters inhibitory interneurons (Renshaw cells) and cleaves <b>synaptobrevin (VAMP)</b>, permanently blocking exocytosis of inhibitory neurotransmitters: <b>GABA (gamma-aminobutyric acid) and Glycine</b>.</li>\n  <li><b>Consequence:</b> Unchecked, continuous, simultaneous motor neuron firing produces <b>generalized spastic tetanic paralysis</b> of all voluntary muscles.</li>\n  <li><b>Gross Pathology:</b> Carcass shows minimal gross lesions: wound containing foreign body, rigid 'sawhorse' stance, prolapse of third eyelid (nictitating membrane), trismus ('lockjaw'), erect ears, flared nostrils, and terminal hyperthermia.</li>\n</ul>\n\n<h3>4. Botulism ('Loin Disease' / 'Lamziekte') — <i>Clostridium botulinum</i></h3>\n<ul>\n  <li><b>Pathogenesis:</b> Ingestion of preformed <b>Botulinum Neurotoxin (BoNT Types C and D)</b> from decomposing carcasses, rotting vegetation, or bones chewed by phosphorus-deficient cattle (osteophagia / pica).</li>\n  <li><b>Mechanism of Toxin:</b> Absorbed from gut into blood; binds presynaptic cholinergic motor end-plates and autonomic cholinergic terminals. Cleaves SNARE proteins, completely blocking the release of <b>Acetylcholine (ACh)</b> at neuromuscular junctions.</li>\n  <li><b>Consequence:</b> <b>Generalized progressive flaccid paralysis</b> (opposite of Tetanus!).</li>\n  <li><b>Gross Pathology:</b> No characteristic gross anatomical lesions. Clinical hallmarks include flaccid paralysis of tongue (tongue hangs out and cannot be retracted), dysphagia, recumbency, paralysis of respiratory muscles, and death from asphyxiation.</li>\n</ul>",
      "keyPoints": [
        "Blackleg (C. chauvoei): Latent muscle spores -> trauma/hypoxia -> alpha toxin -> dry, black, crepitant porous myonecrosis with rancid butter odor.",
        "Pulpy Kidney (C. perfringens Type D): Grain overload -> trypsin activates epsilon toxin -> vascular leakage -> soft pulpy kidneys, gelatinous pericardial fibrin, glycosuria.",
        "Tetanus (C. tetani): Wound germination -> Tetanospasmin blocks GABA and Glycine release in spinal cord -> spastic tetanic paralysis (sawhorse stance, lockjaw).",
        "Botulism (C. botulinum): Ingestion of preformed toxin from carrion (osteophagia/pica) -> blocks Acetylcholine release -> generalized flaccid paralysis (tongue hanging out)."
      ],
      "table": null,
      "pyq": [
        "IVRI 2023",
        "TANUVAS 2022",
        "GADVASU 2021",
        "KVAFSU 2020"
      ]
    },
    {
      "id": "u4-qa-23",
      "type": "long",
      "marks": 12,
      "question": "Describe Major Viral Diseases of Bovines: Pathogenesis, clinical signs, gross and microscopic pathology, and diagnosis of Foot and Mouth Disease (FMD), Rinderpest, and Malignant Catarrhal Fever (MCF).",
      "topicId": "u4-t01",
      "answer": "<p>Viral diseases of ruminants represent major catastrophic threats to cattle health, productivity, and international trade.</p>\n\n<h3>1. Foot and Mouth Disease (FMD) — <i>Aphthovirus</i> (Picornaviridae)</h3>\n<ul>\n  <li><b>Pathogenesis:</b> Inhaled virus enters pharyngeal epithelium, produces primary viremia, and localizes in stratified squamous epithelium of the oral cavity and coronary bands subject to mechanical stress. Viral replication causes ballooning degeneration and acantholysis in the stratum spinosum, forming intraepithelial <b>vesicles (aphthae)</b> that rupture into painful erosions. In young calves, it invades myocardium causing acute necrotizing myocarditis.</li>\n  <li><b>Lesions:</b>\n    <ul>\n      <li><i>Adults:</i> Ruptured vesicles and ragged ulcerative erosions on tongue, dental pad, coronet, interdigital cleft, and teats; ropy salivation, lameness.</li>\n      <li><i>Calves:</i> <b>'Tiger Heart'</b>—pale grayish-white necrotic streaks on ventricular myocardium; death from acute heart failure.</li>\n    </ul>\n  </li>\n  <li><b>Diagnosis:</b> Antigen-detection ELISA, RT-PCR, LPB-ELISA, and virus isolation on primary lamb/bovine thyroid cells.</li>\n</ul>\n\n<h3>2. Rinderpest ('Cattle Plague') — <i>Morbillivirus</i> (Paramyxoviridae)</h3>\n<p><i>(Globally eradicated in 2011, but remains of paramount historical and comparative pathology importance)</i></p>\n<ul>\n  <li><b>Pathogenesis:</b> Inhaled virus binds CD150 (SLAM) receptors on lymphoid cells in the tonsils and regional lymph nodes. Severe primary replication causes massive <b>lymphocytolysis</b> throughout all lymphoid organs, resulting in profound immunosuppression. Secondary viremia targets mucosal epithelial cells of the digestive and respiratory systems.</li>\n  <li><b>Lesions:</b>\n    <ul>\n      <li><b>The 4 Ds:</b> Depression, Discharge (serous to purulent oculonasal), Diarrhea (projectile, bloody, foul-smelling), and Death.</li>\n      <li><i>Oral Cavity:</i> Pinpoint necrotic foci coalesce into irregular erosions covered by gray-yellow necrotic bran-like crusts (<b>'Bran-like' erosions</b>) on gums, dental pad, and cheeks.</li>\n      <li><i>Gastrointestinal Tract:</i> Pathognomonic <b>'Zebra Striping'</b> in the cecum, colon, and rectum: longitudinal dark red-black congested and hemorrhagic bands along the crests of mucosal folds. Peyer's patches are necrotic, swollen, and sloughed.</li>\n    </ul>\n  </li>\n</ul>\n\n<h3>3. Malignant Catarrhal Fever (MCF) — <i>Alcelaphine Herpesvirus-1</i> / <i>Ovine Herpesvirus-2</i></h3>\n<ul>\n  <li><b>Pathogenesis:</b> Cattle contract the virus from natural, asymptomatic reservoir hosts: wildebeest (African form: AlHV-1) or domestic sheep (European/worldwide form: OvHV-2). MCF virus induces dysregulated, antigen-independent proliferation of <b>cytotoxic $CD8^+$ T-lymphocytes</b>. These transformed T-cells infiltrate and attack vascular endothelia and adventitia throughout the body.</li>\n  <li><b>Lesions:</b>\n    <ul>\n      <li><b>Systemic Necrotizing Vasculitis:</b> Marked fibrinoid necrosis of medium and small muscular arteries, with intense lymphohistiocytic pan-arteritis.</li>\n      <li><b>Head and Eye Form:</b> Profuse, ropy mucopurulent nasal discharge; crusted ulcerated nostrils; <b>severe bilateral centripetal corneal opacity (corneal edema starts at limbus and spreads inward)</b>, panophthalmitis, hypopyon, and blindness.</li>\n      <li><b>Lymph Nodes:</b> Enormous generalized enlargement of all lymph nodes (3–10 times normal); succulent, mottled white and red on section.</li>\n      <li><b>Viscera:</b> Multiple white raised nodular perivascular lymphocytic infiltrates in renal cortex ('white-spotted kidney') and portal triads of the liver.</li>\n    </ul>\n  </li>\n  <li><b>Diagnosis:</b> Nested PCR detecting OvHV-2 DNA in blood or lymph node tissue; pathognomonic histopathology (fibrinoid necrotizing vasculitis and perivascular lymphocytic cuffing).</li>\n</ul>",
      "keyPoints": [
        "FMD: Picornavirus; ballooning degeneration forming vesicles on tongue/feet; fatal 'Tiger Heart' myocarditis in suckling calves.",
        "Rinderpest: Morbillivirus; massive lymphocytolysis -> immunosuppression; 'bran-like' oral erosions and pathognomonic 'Zebra striping' in colon/rectum.",
        "MCF: Ovine Herpesvirus-2; dysregulated CD8+ T-cell attack causing systemic fibrinoid necrotizing vasculitis, bilateral centripetal corneal opacity, and massive lymphadenopathy.",
        "Comparison: FMD is vesicular; Rinderpest is erosive-diarrheal with zebra stripes; MCF is necrotizing vasculitic with corneal blindness."
      ],
      "table": null,
      "pyq": [
        "IVRI 2023",
        "TANUVAS 2022",
        "GADVASU 2021",
        "MAFSU 2020"
      ]
    },
    {
      "id": "u4-qa-24",
      "type": "long",
      "marks": 12,
      "question": "Describe Canine Distemper (CD) and Infectious Canine Hepatitis (ICH): Comparative viral tropisms, pathogenesis, inclusion bodies, gross and microscopic pathology, and diagnostic confirmation.",
      "topicId": "u4-t05",
      "answer": "<p>Canine Distemper and Infectious Canine Hepatitis are two of the most severe systemic viral infections of canids, featuring contrasting tissue tropisms and cellular inclusion morphologies.</p>\n\n<h3>1. Canine Distemper (CD) — <i>Morbillivirus</i> (Paramyxoviridae)</h3>\n<ul>\n  <li><b>Viral Tropism:</b> Pantropic virus: exhibits marked affinity for <b>lymphoid tissue</b>, <b>epithelial cells</b> (respiratory, GI, cutaneous), and the <b>Central Nervous System (CNS)</b>.</li>\n  <li><b>Pathogenesis:</b> Inhaled aerosolized virus infects alveolar macrophages and spreads to regional bronchial lymph nodes. Primary viremia causes severe lymphoid depletion (lymphocytolysis in spleen, thymus, nodes). Secondary viremia infects respiratory and GI epithelia, followed by neuroinvasion. In the brain, virus causes acute demyelination (direct oligodendroglial lysis) and chronic immune-mediated demyelination.</li>\n  <li><b>Gross Pathology:</b>\n    <ul>\n      <li><i>Respiratory & Alimentary:</i> Catarrhal/purulent oculonasal discharge, cranioventral bronchointerstitial pneumonia, catarrhal enteritis.</li>\n      <li><i>Skin:</i> <b>Hyperkeratosis of footpads and nasal planum ('Hard Pad Disease')</b>; pustular dermatitis on ventral abdomen.</li>\n      <li><i>Teeth:</i> <b>Enamel hypoplasia</b> (permanent pitted, brown, malformed teeth in dogs infected before eruption of permanent dentition, due to ameloblast necrosis).</li>\n    </ul>\n  </li>\n  <li><b>Microscopic Hallmark & Inclusion Bodies:</b>\n    <ul>\n      <li>Pathognomonic: <b>Both Intracytoplasmic AND Intranuclear Inclusion Bodies</b> (eosinophilic, round to oval) in epithelial cells (urinary bladder, bronchioles, stomach) and neurons/astrocytes.</li>\n      <li>Multifocal demyelination of cerebellar peduncles and spinal cord white matter.</li>\n    </ul>\n  </li>\n</ul>\n\n<h3>2. Infectious Canine Hepatitis (ICH) — <i>Canine Adenovirus-1 (CAdV-1)</i></h3>\n<ul>\n  <li><b>Viral Tropism:</b> Strict affinity for <b>vascular endothelial cells</b> and <b>hepatic parenchymal cells (hepatocytes)</b>.</li>\n  <li><b>Pathogenesis:</b> Ingested virus infects tonsils and Peyer's patches, producing viremia that targets vascular endothelia throughout the body (causing widespread hemorrhages, DIC, and shock) and hepatocytes (causing acute centrilobular coagulative necrosis).</li>\n  <li><b>Gross Pathology:</b>\n    <ul>\n      <li><i>Liver:</i> Enlarged, dark red, mottled, friable; covered by a delicate, glistening fibrinous film.</li>\n      <li><i>Gallbladder:</i> Pathognomonic: <b>massively edematous, thickened gallbladder wall</b> with serosal hemorrhage.</li>\n      <li><i>Hemorrhages:</i> Widespread petechiae and ecchymoses on serosa; blood-tinged fluid in abdominal and pleural cavities.</li>\n    </ul>\n  </li>\n  <li><b>Microscopic Hallmark & Inclusion Bodies:</b>\n    <ul>\n      <li><b>Large, basophilic or amphophilic, Cowdry Type A INTRANUCLEAR Inclusion Bodies ONLY</b> inside hepatocytes and endothelial cells, surrounded by a clear halo and chromatin margination. (Never intracytoplasmic!).</li>\n      <li>Centrilobular coagulative hepatocellular necrosis.</li>\n    </ul>\n  </li>\n  <li><b>Ocular Consequence ('Blue Eye'):</b> During recovery (1–3 weeks post-infection), Type III hypersensitivity immune complexes deposit in corneal endothelial cells and ciliary body, triggering severe corneal edema and anterior uveitis, rendering the cornea uniformly cloudy blue (resolves spontaneously).</li>\n</ul>\n\n<h3>3. Comparison Table</h3>\n<p><b>Inclusion Bodies:</b> CDV produces both <i>intracytoplasmic and intranuclear</i> inclusions; CAdV-1 produces <i>intranuclear only</i> inclusions.</p>\n<p><b>Target Organs:</b> CDV targets lungs, brain (demyelination), and skin (hard pad); CAdV-1 targets liver (necrosis) and gallbladder (edema).</p>",
      "keyPoints": [
        "Canine Distemper: Morbillivirus, pantropic; lymphoid depletion, bronchointerstitial pneumonia, hard pad, enamel hypoplasia, demyelinating encephalitis.",
        "CDV Inclusions: Pathognomonic presence of BOTH intracytoplasmic and intranuclear eosinophilic inclusions in epithelia and neurons.",
        "ICH: Canine Adenovirus-1; endothelial and hepatocellular tropism; severe hemorrhagic centrilobular liver necrosis, massively edematous gallbladder wall.",
        "ICH Inclusions: Prominent INTRANUCLEAR-ONLY basophilic Cowdry Type A inclusion bodies in hepatocytes and endothelia.",
        "ICH 'Blue Eye': Type III immune complex-mediated corneal edema and anterior uveitis."
      ],
      "table": null,
      "pyq": [
        "IVRI 2023",
        "TANUVAS 2022",
        "GADVASU 2021",
        "RAJUVAS 2020"
      ]
    },
    {
      "id": "u4-qa-25",
      "type": "long",
      "marks": 12,
      "question": "Describe Toxicology and Plant Poisoning in Farm Animals: Pathogenesis, post-mortem lesions, and diagnostic confirmation of Nitrate/Nitrite poisoning, Cyanide (HCN) poisoning, Bracken fern toxicity, and Lantana poisoning.",
      "topicId": "u4-t35",
      "answer": "<p>Toxic plant ingestions and chemical poisonings are major causes of peracute death, organ failure, and economic loss in farm livestock.</p>\n\n<h3>1. Nitrate and Nitrite Poisoning</h3>\n<ul>\n  <li><b>Etiology:</b> Ingestion of drought-stressed plants accumulating excess nitrate (oats, sorghum, maize, pigweed) or nitrate fertilizers.</li>\n  <li><b>Pathogenesis:</b> In the rumen, microflora reduce non-toxic nitrate ($NO_3^-$) to <b>nitrite ($NO_2^-$)</b>. Nitrite is absorbed into red blood cells, where it oxidizes the ferrous iron ($Fe^{2+}$) of hemoglobin to ferric iron ($Fe^{3+}$), forming <b>Methemoglobin</b>. Methemoglobin cannot bind or transport oxygen, producing cellular anoxia, respiratory distress, and death by chemical asphyxiation.</li>\n  <li><b>Gross Pathology:</b> Pathognomonic: <b>chocolate-brown to dark coffee-colored blood</b> that does not turn bright red upon exposure to air; brown discoloration of all parenchymal viscera; subendocardial hemorrhages.</li>\n  <li><b>Diagnostic Test:</b> Diphenlyamine blue test on serum, ocular humor, or plant forage (instant intense deep blue color confirms nitrate).</li>\n  <li><b>Antidote:</b> Methylene blue (1–2 mg/kg IV as a 1% solution); acts as an electron donor to reduce methemoglobin back to functional hemoglobin.</li>\n</ul>\n\n<h3>2. Hydrocyanic Acid (HCN / Cyanide) Poisoning</h3>\n<ul>\n  <li><b>Etiology:</b> Ingestion of cyanogenic glycosides (dhurrin, amygdalin) in wilted, stunted, or young sorghum (<i>Sorghum vulgare</i> / Jowar), linseed, or wild cherry. Rumen enzymes cleave glycosides, liberating free <b>HCN</b> gas.</li>\n  <li><b>Pathogenesis:</b> HCN binds and irreversibly inhibits <b>Cytochrome c oxidase (Complex IV)</b> in the mitochondrial electron transport chain. Cellular oxidative phosphorylation is completely blocked. Although arterial blood is fully saturated with oxygen, tissues cannot extract or utilize it (<b>histotoxic anoxia</b>).</li>\n  <li><b>Gross Pathology:</b> Pathognomonic: <b>bright cherry-red blood</b> and intensely pink tissues (because venous blood remains fully oxygenated); opened rumen emits a distinct <b>bitter almond odor</b>; rapid rigor mortis.</li>\n  <li><b>Diagnostic Test:</b> Picric acid test / Cyantesmo paper (yellow paper turns brick red).</li>\n  <li><b>Antidote:</b> Sodium nitrite IV (converts Hb to methemoglobin, which binds cyanide to form non-toxic cyanmethemoglobin) followed immediately by Sodium thiosulfate IV (rhodanese converts it to excretable thiocyanate).</li>\n</ul>\n\n<h3>3. Bracken Fern (<i>Pteridium aquilinum</i>) Poisoning</h3>\n<ul>\n  <li><b>Monogastrics (Equines):</b> Contains <b>Thiaminase Type I</b>, which hydrolyzes Vitamin B1 (thiamine). Produces <b>Thiamine deficiency</b>: cardiac hypertrophy, bradycardia, muscle tremors, incoordination, and opisthotonus. Responds to IV thiamine.</li>\n  <li><b>Ruminants:</b> Rumen microbes synthesize thiamine, making them resistant to thiaminase. Instead, cattle and sheep suffer from two distinct syndromes:\n    <ol>\n      <li><b>Acute Hemorrhagic Syndrome (Bone Marrow Aplasia):</b> Caused by toxic alkylating glycosides destroying hematopoietic stem cells; severe panmyelophthisis, profound thrombocytopenia, and generalized massive hemorrhages (bleeding from nostrils, bladder, and rectum).</li>\n      <li><b>Bovine Enzootic Hematuria (BEH):</b> Caused by <b>Ptaquiloside</b> acting synergistically with BPV-2, inducing hemangiomas, hemangiosarcomas, and carcinomas of the urinary bladder.</li>\n      <li><b>Bright Blindness in Sheep:</b> Ptaquiloside causes progressive, irreversible tapetal hyperreflectivity and retinal neuroepithelial atrophy.</li>\n    </ol>\n  </li>\n</ul>\n\n<h3>4. Lantana Poisoning (<i>Lantana camara</i>)</h3>\n<ul>\n  <li><b>Pathogenesis:</b> Grazing the ornamental shrub <i>Lantana camara</i>. Leaves contain triterpenoid hepatotoxins: <b>Lantadene A and Lantadene B</b>. Lantadenes cause acute swelling and necrosis of biliary canalicular membranes, producing intrahepatic cholestasis and complete failure of bile secretion.</li>\n  <li><b>Consequence:</b> Ruminant chlorophyll digestion produces <b>phylloerythrin</b>, which is normally excreted in bile. With cholestasis, phylloerythrin enters systemic circulation, depositing in cutaneous capillaries. Sunlight UV radiation excites phylloerythrin, causing <b>Type III (Hepatogenous) Photosensitization</b> with massive necrosis of unpigmented skin.</li>\n  <li><b>Gross Pathology:</b> Liver is enlarged, yellowish-orange to ochre-brown, swollen with rounded borders; <b>gallbladder is massively distended</b> with dark, viscous, watery bile; severe generalized icterus; cutaneous necrosis, erythema, and leathery sloughing of unpigmented skin (face, ears, back).</li>\n</ul>",
      "keyPoints": [
        "Nitrate/Nitrite: Rumen converts nitrate -> nitrite -> oxidizes Hb to Methemoglobin (Fe3+) -> chocolate-brown blood; antidote: Methylene blue.",
        "Cyanide (HCN): Inhibits Cytochrome c oxidase -> histotoxic anoxia; bright cherry-red blood, bitter almond odor; antidote: Sodium nitrite + Sodium thiosulfate.",
        "Bracken fern: Thiaminase in horses (thiamine deficiency); Ptaquiloside in cattle (bone marrow aplasia and bladder tumours/BEH); Bright blindness in sheep.",
        "Lantana camara: Lantadene A/B causes intrahepatic cholestasis -> accumulation of phylloerythrin -> Type III hepatogenous photosensitization and massively distended gallbladder."
      ],
      "table": null,
      "pyq": [
        "IVRI 2023",
        "TANUVAS 2022",
        "GADVASU 2021",
        "RAJUVAS 2020"
      ]
    }
  ],
  "unit-5": [
    {
      "id": "u5-qa-01",
      "type": "define",
      "marks": 2,
      "question": "Define Avian Heterophils and explain why avian inflammatory pus is dry and caseous.",
      "topicId": "u5-t01",
      "answer": "<p><b>Avian Heterophils</b> are the primary circulating polymorphonuclear phagocytes in avian blood (analogous to mammalian neutrophils), characterized by bilobed nuclei and abundant fusiform (rod-shaped) eosinophilic cytoplasmic granules.</p><p><b>Why Avian Pus is Dry & Caseous:</b> Avian heterophils <b>completely lack the enzyme myeloperoxidase</b> and have low concentrations of neutral proteases. Consequently, they cannot liquefy dead tissue and cellular debris into liquid, creamy pus; instead, dead heterophils accumulate as a dry, firm, laminated, crumbly, cheese-like <b>caseous exudate</b>.</p>",
      "keyPoints": [
        "Heterophils: Avian equivalent of neutrophils; contain rod-shaped eosinophilic granules.",
        "Dry pus mechanism: Heterophils lack myeloperoxidase and proteases, preventing enzymatic liquefaction."
      ],
      "table": null,
      "pyq": [
        "IVRI 2023",
        "TANUVAS 2022",
        "GADVASU 2021"
      ]
    },
    {
      "id": "u5-qa-02",
      "type": "define",
      "marks": 2,
      "question": "Define Bollinger Bodies and Borrel Bodies in Fowl Pox.",
      "topicId": "u5-t05",
      "answer": "<p><b>Bollinger Bodies</b> are large, distinct, round to oval, lipid-rich, eosinophilic <b>intracytoplasmic inclusion bodies</b> found within hyperplastic epithelial cells of the skin and mucous membranes infected with Avipoxvirus (Fowl Pox).</p><p><b>Borrel Bodies:</b> Minute, elementary viral particles (virions, ~0.25 $\\mu$m) contained in thousands inside each Bollinger body; when a Bollinger body is crushed and stained with Giemsa or silver stains, the released individual viral particles are termed <b>Borrel bodies</b>.</p>",
      "keyPoints": [
        "Bollinger bodies: Large eosinophilic intracytoplasmic inclusions inside infected epithelial cells in Fowl Pox.",
        "Borrel bodies: Minute individual viral elementary particles packed inside Bollinger bodies."
      ],
      "table": null,
      "pyq": [
        "TANUVAS 2023",
        "IVRI 2021",
        "KVAFSU 2019"
      ]
    },
    {
      "id": "u5-qa-03",
      "type": "define",
      "marks": 2,
      "question": "Define Hydropericardium Syndrome (HPS / 'Leechi Disease') and state its viral etiology.",
      "topicId": "u5-t09",
      "answer": "<p><b>Hydropericardium Syndrome (HPS / Leechi Disease)</b> is an acute, high-mortality disease of 3- to 5-week-old broiler chickens characterized by severe transudation of clear, straw-colored fluid into the pericardial sac (up to 10–15 mL), enclosing the conical heart so it resembles a peeled leechi fruit, accompanied by an enlarged, swollen, friable liver with petechial hemorrhages.</p><p><b>Viral Etiology:</b> <b>Fowl Adenovirus Serotype 4 (FAdV-4)</b> of the genus <i>Aviadenovirus</i> (Family <i>Adenoviridae</i>).</p>",
      "keyPoints": [
        "HPS: Acute broiler disease with massive pericardial effusion floating a conical heart ('peeled leechi').",
        "Etiology: Fowl Adenovirus Serotype 4 (FAdV-4)."
      ],
      "table": null,
      "pyq": [
        "IVRI 2023",
        "GADVASU 2022",
        "RAJUVAS 2020"
      ]
    },
    {
      "id": "u5-qa-04",
      "type": "define",
      "marks": 2,
      "question": "Define 'Range Paralysis' in Marek's Disease and state its anatomical basis.",
      "topicId": "u5-t06",
      "answer": "<p><b>Range Paralysis</b> is the classic pathognomonic neurological posture displayed by growing chickens (2–5 months old) suffering from the Classical (Neural) form of <b>Marek's Disease</b>.</p><p><b>Anatomical Basis:</b> The bird lies prostrate with <b>one leg stretched forward and the other leg stretched backward</b>, with drooped wings, caused by unilateral neoplastic lymphomatous infiltration, edema, and loss of cross-striations of the <b>sciatic nerve</b> and <b>brachial plexus</b>.</p>",
      "keyPoints": [
        "Range paralysis: Classic posture in Marek's Disease: one leg forward, one leg backward.",
        "Anatomical basis: Unilateral neoplastic lymphocytic infiltration of the sciatic nerve trunk."
      ],
      "table": null,
      "pyq": [
        "TANUVAS 2022",
        "IVRI 2020",
        "WBUAFS 2019"
      ]
    },
    {
      "id": "u5-qa-05",
      "type": "define",
      "marks": 2,
      "question": "Define Gumboro Disease (Infectious Bursal Disease) and name its target cell.",
      "topicId": "u5-t03",
      "answer": "<p><b>Gumboro Disease (Infectious Bursal Disease - IBD)</b> is an acute, highly contagious viral disease of young domestic chicks (primarily 3 to 6 weeks of age) caused by an <b>Avibirnavirus</b> (Family <i>Birnaviridae</i>), characterized by severe destruction of the Bursa of Fabricius, vent pecking, soiled cloaca, and profound lifelong humoral immunosuppression.</p><p><b>Target Cell:</b> Actively dividing, immature <b>IgM-bearing B-lymphocytes</b> undergoing differentiation in the lymphoid follicles of the Bursa of Fabricius.</p>",
      "keyPoints": [
        "IBD (Gumboro): Highly contagious birnavirus infection causing severe bursal necrosis and immunosuppression.",
        "Target cell: Actively dividing immature IgM-bearing B-lymphocytes in the Bursa of Fabricius."
      ],
      "table": null,
      "pyq": [
        "IVRI 2022",
        "GADVASU 2021",
        "MAFSU 2018"
      ]
    },
    {
      "id": "u5-qa-06",
      "type": "define",
      "marks": 2,
      "question": "Define 'Penguin Sitting Posture' in laying hens and state two pathological causes.",
      "topicId": "u5-t21",
      "answer": "<p><b>Penguin Sitting Posture</b> is an abnormal clinical posture adopted by adult laying hens where the bird stands or rests upright on its hocks with an erect trunk, resembling a sitting penguin, in an attempt to alleviate extreme abdominal pain and intra-coelomic pressure.</p><p><b>Two Pathological Causes:</b></p><ol><li><b>Egg Peritonitis:</b> Rupture of an ectopic yolk into the peritoneal cavity causing acute diffuse fibrinous peritonitis.</li><li><b>Egg Bound Syndrome / Impacted Oviduct:</b> Inability to lay a fully formed egg lodged in the distal uterus or cloaca.</li></ol>",
      "keyPoints": [
        "Penguin posture: Upright standing on hocks to relieve abdominal pressure and pain in hens.",
        "Causes: 1. Fibrinous egg yolk peritonitis, 2. Egg binding / oviduct impaction."
      ],
      "table": null,
      "pyq": [
        "TANUVAS 2023",
        "IVRI 2019"
      ]
    },
    {
      "id": "u5-qa-07",
      "type": "define",
      "marks": 2,
      "question": "Define Curled Toe Paralysis and name the deficient nutrient.",
      "topicId": "u5-t20",
      "answer": "<p><b>Curled Toe Paralysis</b> is a characteristic nutritional neuro-degenerative disorder of young growing chicks (1 to 4 weeks old) characterized by inward curling and flexion of the digital toes of both feet, forcing the bird to walk on its hocks with complete loss of digit extension.</p><p><b>Deficient Nutrient:</b> <b>Riboflavin (Vitamin $B_2$)</b> deficiency (causing acute myelin sheath degeneration and Schwann cell swelling in the sciatic nerve trunks).</p>",
      "keyPoints": [
        "Curled toe paralysis: Inward curling and digital flexion forcing chicks to walk on hocks.",
        "Deficient nutrient: Riboflavin (Vitamin B2) causing sciatic nerve demyelination."
      ],
      "table": null,
      "pyq": [
        "GADVASU 2023",
        "IVRI 2022",
        "RAJUVAS 2021"
      ]
    },
    {
      "id": "u5-qa-08",
      "type": "define",
      "marks": 2,
      "question": "Define Crazy Chick Disease (Nutritional Encephalomalacia) and state its etiology.",
      "topicId": "u5-t20",
      "answer": "<p><b>Crazy Chick Disease (Nutritional Encephalomalacia)</b> is a nutritional neuropathology of young growing broiler chicks (2 to 4 weeks old) characterized by violent neurological signs: head retraction, ataxia, backward somersaulting, violent wing flapping, and extensor spasms.</p><p><b>Etiology:</b> Deficiency of <b>Vitamin E (alpha-tocopherol)</b>, often exacerbated by feeding diets high in rancid polyunsaturated fatty acids (PUFAs), causing unchecked free-radical peroxidation of cerebellar capillary membranes with ischemic coagulative necrosis (malacia) of the cerebellum.</p>",
      "keyPoints": [
        "Crazy chick disease: Severe cerebellar malacia causing ataxia, tremors, and somersaulting.",
        "Etiology: Vitamin E deficiency exacerbated by dietary rancid fats (lipid peroxidation of cerebellar vessels)."
      ],
      "table": null,
      "pyq": [
        "IVRI 2021",
        "TANUVAS 2020",
        "KVAFSU 2018"
      ]
    },
    {
      "id": "u5-qa-09",
      "type": "define",
      "marks": 2,
      "question": "Define Perosis (Slipped Tendon) in growing chicks and name the deficient trace mineral.",
      "topicId": "u5-t20",
      "answer": "<p><b>Perosis ('Slipped Tendon')</b> is a nutritional skeletal deformity of young growing broilers, turkeys, and ducklings characterized by enlargement and flattening of the tibiotarsal-tarsometatarsal (hock) joint, followed by lateral displacement and slippage of the <b>Gastrocnemius tendon</b> out of its longitudinal condylar groove, rendering the leg permanently twisted laterally.</p><p><b>Deficient Trace Mineral:</b> <b>Manganese ($Mn$)</b> deficiency (often interacting with deficiencies of <b>Choline</b>, Biotin, or Folic acid).</p>",
      "keyPoints": [
        "Perosis: Flattening of hock joint with lateral slippage of the gastrocnemius tendon.",
        "Deficient nutrient: Manganese (Mn) deficiency (along with Choline)."
      ],
      "table": null,
      "pyq": [
        "TANUVAS 2022",
        "WBUAFS 2021"
      ]
    },
    {
      "id": "u5-qa-10",
      "type": "define",
      "marks": 2,
      "question": "Define Cage Layer Fatigue and describe its skeletal lesion.",
      "topicId": "u5-t20",
      "answer": "<p><b>Cage Layer Fatigue</b> is a metabolic bone disorder occurring almost exclusively in high-producing laying hens housed in individual battery wire cages at the peak of egg production, characterized by acute motor paralysis, recumbency, and fragile bones.</p><p><b>Skeletal Lesion:</b> Severe <b>Osteoporosis</b>: extreme depletion and resorption of structural cortical and medullary bone to meet the massive calcium demands of eggshell calcification (2 g Ca/egg), rendering long bones and ribs brittle, soft, paper-thin, easily snapped between fingers, with spontaneous fractures of the keel bone, ribs, and 4th/5th thoracic vertebrae causing spinal cord compression.</p>",
      "keyPoints": [
        "Cage Layer Fatigue: Osteoporosis and paralysis in high-yielding caged layers at peak production.",
        "Skeletal lesion: Paper-thin cortical bone, collapsed ribs/keel, spontaneous vertebral fractures."
      ],
      "table": null,
      "pyq": [
        "IVRI 2023",
        "GADVASU 2021",
        "RAJUVAS 2019"
      ]
    },
    {
      "id": "u5-qa-11",
      "type": "define",
      "marks": 2,
      "question": "Define Broiler Ascites Syndrome (Water Belly) and state its primary hemodynamic cause.",
      "topicId": "u5-t21",
      "answer": "<p><b>Broiler Ascites Syndrome ('Water Belly')</b> is a metabolic, cardiovascular disorder of fast-growing commercial meat-type chickens characterized by the massive accumulation of amber, gelatinous transudate fluid in the peritoneal abdominal cavity, accompanied by right ventricular hypertrophy and flabby cardiac dilatation.</p><p><b>Primary Hemodynamic Cause:</b> <b>Pulmonary Arterial Hypertension (PAH)</b>: the high metabolic oxygen demand of rapid pectoral muscle accretion forces increased cardiac output through rigid, non-distensible avian pulmonary capillaries, generating severe hypertension that overloads the thin-walled right ventricle.</p>",
      "keyPoints": [
        "Broiler ascites: Accumulation of gelatinous transudate in abdominal cavity ('water belly').",
        "Hemodynamic cause: Pulmonary arterial hypertension (PAH) causing right ventricular failure."
      ],
      "table": null,
      "pyq": [
        "TANUVAS 2023",
        "IVRI 2022",
        "LUVAS 2020"
      ]
    },
    {
      "id": "u5-qa-12",
      "type": "define",
      "marks": 2,
      "question": "Define Brooder Pneumonia (Aspergillosis) and name the causative fungus.",
      "topicId": "u5-t15",
      "answer": "<p><b>Brooder Pneumonia</b> is an acute, high-mortality mycotic respiratory infection of newly hatched chicks and poults (1 to 14 days old) in hatchery brooders, characterized by gasping, dyspnea, cyanosis, and the development of multiple, circumscribed, yellow-white caseous nodules in the lungs and air sacs.</p><p><b>Causative Fungus:</b> <b>Aspergillus fumigatus</b> (inhalation of conidia from moldy sawdust/straw litter or contaminated incubator trays).</p>",
      "keyPoints": [
        "Brooder pneumonia: Acute respiratory mycosis of newly hatched chicks with caseous lung nodules.",
        "Causative fungus: Aspergillus fumigatus (inhalation from moldy litter/incubator)."
      ],
      "table": null,
      "pyq": [
        "IVRI 2021",
        "GADVASU 2020",
        "MAFSU 2019"
      ]
    },
    {
      "id": "u5-qa-13",
      "type": "short",
      "marks": 5,
      "question": "Describe Ranikhet Disease (Newcastle Disease): Pathotype classification (Doyle, Beach, Beaudette, Hitchner) and pathognomonic proventricular lesions.",
      "topicId": "u5-t02",
      "answer": "<p><b>Etiology:</b> Avian Paramyxovirus Serotype 1 (APMV-1), genus <i>Orthoavulavirus</i>, Family <i>Paramyxoviridae</i>.</p>\n<p><b>Pathotype Classification (Virulence Forms):</b></p>\n<ol>\n  <li><b>Velogenic Viscerotropic (Doyle's Form):</b> Acute, lethal form with severe hemorrhagic lesions throughout the digestive tract (proventriculus, intestine) and up to 100% mortality.</li>\n  <li><b>Velogenic Neurotropic (Beach's Form):</b> Acute, lethal form characterized by predominant severe nervous signs (torticollis, leg paralysis, tremors) following respiratory distress, with high mortality.</li>\n  <li><b>Mesogenic (Beaudette's Form):</b> Moderately virulent; causes acute respiratory and mild nervous signs with low mortality (<10%); used as intermediate vaccines (e.g., Mukteswar / $R_2B$ strain).</li>\n  <li><b>Lentogenic (Hitchner's Form):</b> Mild or subclinical respiratory infection; used as safe primary live vaccines in day-old chicks (e.g., Hitchner $B_1$, LaSota strains).</li>\n  <li><b>Asymptomatic Enteric:</b> Apathogenic gut infection.</li>\n</ol>\n<p><b>Pathognomonic Proventricular & Intestinal Lesions:</b></p>\n<ul>\n  <li><b>Proventricular Papillae Petechiae:</b> Virulent velogenic virus utilizes host cellular furin to cleave its fusion (F) glycoprotein. Secretory gland papillae of the proventriculus have high furin concentrations and dense microvascular networks; viral replication causes severe endothelial necrosis, producing <b>pinpoint petechial hemorrhages concentrated precisely at the elevated tips of proventricular gland papillae</b>.</li>\n  <li><b>Intestinal Lesions:</b> Button-like, necrotic, hemorrhagic ulcers centered on the <b>cecal tonsils</b> and solitary lymphoid follicles of the intestine.</li>\n</ul>",
      "keyPoints": [
        "Pathotypes: Velogenic viscerotropic (Doyle - gut hemorrhages), Velogenic neurotropic (Beach - nervous signs), Mesogenic (Beaudette/R2B vaccine), Lentogenic (Hitchner B1/LaSota vaccine).",
        "Proventriculus hallmark: Pinpoint petechial hemorrhages precisely on the tips of elevated gland papillae.",
        "Intestinal hallmark: Hemorrhagic necrotizing cecal tonsillitis and ulcers over mucosal lymphoid patches.",
        "Molecular determinant: Cleavage site sequence of the viral fusion (F) glycoprotein."
      ],
      "table": null,
      "pyq": [
        "IVRI 2023",
        "TANUVAS 2022",
        "GADVASU 2021",
        "RAJUVAS 2020"
      ]
    },
    {
      "id": "u5-qa-14",
      "type": "short",
      "marks": 5,
      "question": "Describe Infectious Bursal Disease (IBD / Gumboro): Pathogenesis in bursal follicles, chronological gross bursal changes, and immunosuppression.",
      "topicId": "u5-t03",
      "answer": "<p><b>Etiology:</b> Infectious Bursal Disease Virus (IBDV), a double-stranded bi-segmented RNA virus of the genus <i>Avibirnavirus</i>.</p>\n<p><b>Pathogenesis & Chronological Bursal Changes:</b></p>\n<ol>\n  <li><b>Target:</b> Virus has obligate tropism for dividing, immature <b>IgM-bearing B-lymphocytes</b> in the medullary follicles of the Bursa of Fabricius, peak at <b>3 to 6 weeks of age</b>.</li>\n  <li><b>Day 3 Post-Infection:</b> The bursa begins to enlarge and becomes edematous.</li>\n  <li><b>Day 4 Post-Infection (Peak):</b> Pathognomonic: The bursa is <b>enlarged to double its normal size and weight</b>, edematous, hyperemic, and covered by a conspicuous <b>gelatinous, yellowish transudate</b> on its serosal surface; on opening, mucosal folds are thickened with petechial hemorrhages. In very virulent (vvIBDV) strains, the bursa turns completely blackish-red ('hemorrhagic strawberry bursa').</li>\n  <li><b>Day 5 Post-Infection:</b> The bursa returns to normal weight but loses its gelatinous coating.</li>\n  <li><b>Day 8 Post-Infection Onwards:</b> Severe, irreversible <b>Atrophy of the Bursa</b>: the bursa shrinks progressively to less than one-third or one-eighth its normal size, becoming a tiny, gray, wrinkled, fibrotic pea-like sac.</li>\n</ol>\n<p><b>Immunosuppression & Secondary Consequences:</b></p>\n<ul>\n  <li>Destruction of >90% of developing B-lymphocytes causes permanent humoral immunodeficiency.</li>\n  <li>Chicks fail to respond to subsequent routine vaccines (Ranikhet, Fowl Pox, Fowl Cholera).</li>\n  <li>Leads to catastrophic secondary bacterial infections (severe Colibacillosis, Gangrenous Dermatitis, Inclusion Body Hepatitis).</li>\n</ul>",
      "keyPoints": [
        "Target: Dividing immature IgM+ B-lymphocytes in the Bursa of Fabricius (3–6 weeks of age).",
        "Day 4 Peak: Bursa doubles in size, covered by a distinct gelatinous yellowish transudate with mucosal hemorrhages.",
        "Day 8+ Atrophy: Irreversible progressive atrophy, shrinking into a tiny wrinkled fibrotic pea-sized sac.",
        "Immunosuppression: Total humoral failure, vaccine breakdowns, secondary colisepticemia and gangrenous dermatitis."
      ],
      "table": null,
      "pyq": [
        "IVRI 2023",
        "TANUVAS 2021",
        "GADVASU 2020",
        "KVAFSU 2019"
      ]
    },
    {
      "id": "u5-qa-15",
      "type": "diff",
      "marks": 5,
      "question": "Differentiate Marek's Disease from Lymphoid Leukosis.",
      "topicId": "u5-t06",
      "answer": "<p>Marek's Disease (MD) and Lymphoid Leukosis (LL) are the two major oncogenic viral diseases causing lymphoma in poultry, but arise from completely different viral families and target different cells:</p>",
      "keyPoints": [
        "Marek's: Alphaherpesvirus, T-cell lymphoma, affects young birds (2–5 months), causes asymmetric sciatic nerve thickening and skin/eye lesions.",
        "Lymphoid Leukosis: Retrovirus, B-cell lymphoma, affects adult birds (>4 months), strictly visceral with nodular bursal tumours; nerves are NEVER affected.",
        "Bursa: Atrophied or interfollicularly infiltrated in MD; discrete intrafollicular nodular tumors in LL."
      ],
      "table": {
        "title": "Comparison between Marek's Disease and Lymphoid Leukosis",
        "headers": [
          "Criterion",
          "Marek's Disease (MD)",
          "Lymphoid Leukosis (LL)"
        ],
        "rows": [
          [
            "Causative virus",
            "<b>Gallid Alphaherpesvirus 2</b> (Cell-associated Herpesvirus)",
            "<b>Avian Leukosis Virus (ALV)</b> (Alpharetrovirus)"
          ],
          [
            "Age of susceptibility",
            "Young birds (commonly <b>2 to 5 months</b>; can occur from 3 weeks)",
            "Sexually mature adult birds (rarely before <b>16 weeks / 4 months</b>)"
          ],
          [
            "Neoplastic cell type",
            "<b>T-lymphocytes</b> (heterogeneous, pleomorphic: small, medium, large lymphocytes and blast cells)",
            "<b>B-lymphocytes</b> (uniform, monomorphic, lymphoblastic cells)"
          ],
          [
            "Peripheral nerve enlargement",
            "<b>Characteristic & Prominent</b> (asymmetric swelling of sciatic, brachial, and vagus nerves with loss of cross-striations)",
            "<b>Completely ABSENT</b> (nerves are never involved)"
          ],
          [
            "Bursa of Fabricius",
            "Usually atrophied, shrunken; diffuse interfollicular infiltration",
            "<b>Nodular, tumourous enlargement</b> with discrete focal intrafollicular tumours"
          ],
          [
            "Eye involvement",
            "Frequent; 'Gray Eye' / Pearl Eye (iris discoloration, pupillary irregularity)",
            "Absent; eyes are never affected"
          ],
          [
            "Skin involvement",
            "Frequent; nodular lymphomatous tumors around feather follicles",
            "Absent; skin is not affected"
          ],
          [
            "Transmission",
            "Inhalation of infected feather follicle dander/dust (horizontal only)",
            "Both <b>Vertical (transovarian via egg)</b> and Horizontal (fecal/saliva)"
          ],
          [
            "Mortality & Course",
            "Can reach 60–80% in unvaccinated flocks; rapid onset",
            "Usually low to moderate (1–2% per month); insidious onset"
          ]
        ]
      },
      "pyq": [
        "IVRI 2023",
        "TANUVAS 2022",
        "GADVASU 2021",
        "WBUAFS 2020"
      ]
    },
    {
      "id": "u5-qa-16",
      "type": "short",
      "marks": 5,
      "question": "Differentiate Infectious Laryngotracheitis (ILT) from Diphtheritic Fowl Pox.",
      "topicId": "u5-t04",
      "answer": "<p>Both ILT and the wet (diphtheritic) form of Fowl Pox produce severe respiratory dyspnea and asphyxiation due to obstructive tracheal exudates, but have distinct pathological signatures:</p>\n<ul>\n  <li><b>Infectious Laryngotracheitis (ILT):</b>\n    <ul>\n      <li><i>Etiology:</i> Gallid Alphaherpesvirus-1.</li>\n      <li><i>Lesions:</i> Acute hemorrhagic, necrotizing tracheitis. The tracheal lumen is obstructed by a <b>bloody, hemorrhagic cast or fibrino-hemorrhagic plug</b>; coughing birds spit blood on walls and cage bars ('pump-handle breathing').</li>\n      <li><i>Histopathology:</i> Epithelial syncytia (multinucleated giant cells) containing prominent <b>eosinophilic Cowdry Type A INTRANUCLEAR Inclusion Bodies</b>. (Intranuclear = Herpesvirus).</li>\n    </ul>\n  </li>\n  <li><b>Diphtheritic (Wet) Fowl Pox:</b>\n    <ul>\n      <li><i>Etiology:</i> Avipoxvirus (Poxviridae).</li>\n      <li><i>Lesions:</i> Forms adherent, raised, yellowish-white <b>diphtheritic patches / pseudomembranes</b> on the tongue, pharynx, larynx, and upper trachea (canker). Removal of the membrane reveals a raw, bleeding ulcerated base; absence of free hemorrhagic tracheal clots.</li>\n      <li><i>Histopathology:</i> Marked ballooning epithelial hyperplasia with characteristic large, eosinophilic <b>INTRACYTOPLASMIC Bollinger Inclusion Bodies</b>. (Intracytoplasmic = Poxvirus).</li>\n    </ul>\n  </li>\n</ul>",
      "keyPoints": [
        "ILT (Herpesvirus): Hemorrhagic necrotizing tracheitis with bloody luminal plugs (birds spit blood); syncytia with INTRANUCLEAR inclusion bodies.",
        "Diphtheritic Pox (Avipoxvirus): Dry yellowish diphtheritic pseudomembranes on oral/laryngeal mucosa (canker); epithelial hyperplasia with INTRACYTOPLASMIC Bollinger bodies.",
        "Diagnostic rule: Intranuclear inclusions = ILT; Intracytoplasmic inclusions = Fowl Pox."
      ],
      "table": null,
      "pyq": [
        "IVRI 2022",
        "GADVASU 2021",
        "TANUVAS 2020",
        "RAJUVAS 2018"
      ]
    },
    {
      "id": "u5-qa-17",
      "type": "short",
      "marks": 5,
      "question": "Describe Avian Coccidiosis: Caecal coccidiosis (*Eimeria tenella*) vs intestinal coccidiosis (*E. necatrix*, *E. acervulina*) — Pathogenesis, lesions, and diagnosis.",
      "topicId": "u5-t18",
      "answer": "<p>Avian coccidiosis is the most ubiquitous and economically damaging protozoan disease of domestic poultry, caused by host-specific species of <i>Eimeria</i> invading intestinal enterocytes.</p>\n<ol>\n  <li><b>Caecal Coccidiosis (<i>Eimeria tenella</i>):</b>\n    <ul>\n      <li><i>Target:</i> Strictly confined to the two <b>Caeca</b>; primarily affects 3- to 6-week-old chicks.</li>\n      <li><i>Pathogenesis:</i> Large second-generation schizonts develop deep in the lamina propria and submucosa, destroying subepithelial capillary beds.</li>\n      <li><i>Gross Lesions:</i> Both caeca are massively enlarged, swollen, dark purple-red, and distended with pure, uncoagulated or clotted blood (<b>severe hemorrhagic typhlitis</b>). In later stages, blood solidifies into a dry, cheesy, firm <b>cecal core</b> consisting of clotted blood, necrotic mucosa, and millions of oocysts.</li>\n    </ul>\n  </li>\n  <li><b>Intestinal Coccidiosis:</b>\n    <ul>\n      <li><b><i>Eimeria necatrix</i> (Mid-gut):</b> Highly pathogenic; attacks the jejunum and ileum. The mid-gut is ballooned, thickened, and congested; serosa shows pathognomonic <b>white spots (large schizont colonies) interspersed with pinpoint petechial hemorrhages ('salt-and-pepper' appearance)</b>; lumen contains bloody fluid.</li>\n      <li><b><i>Eimeria acervulina</i> (Upper-gut):</b> Moderately pathogenic; attacks duodenum and upper jejunum. Characterized by multiple <b>transverse, white, ladder-like streaks or bands</b> visible through the serosal and mucosal surface without frank hemorrhage.</li>\n    </ul>\n  </li>\n</ol>\n<p><b>Diagnosis:</b> Scrapings from affected intestinal mucosa examined directly under wet-mount light microscopy reveal characteristic oval oocysts and schizonts; flotation in saturated salt solution.</p>",
      "keyPoints": [
        "Eimeria tenella: Caeca exclusively; massive hemorrhagic typhlitis distended with fresh blood, followed by firm necrotic cecal cores.",
        "Eimeria necatrix: Mid-gut (jejunum); ballooned intestine with 'salt-and-pepper' white schizont foci and petechiae.",
        "Eimeria acervulina: Duodenum; white ladder-like transverse mucosal bands.",
        "Diagnosis: Microscopic demonstration of oocysts and schizonts in mucosal scrapings."
      ],
      "table": null,
      "pyq": [
        "IVRI 2023",
        "TANUVAS 2022",
        "GADVASU 2021",
        "KVAFSU 2020"
      ]
    },
    {
      "id": "u5-qa-18",
      "type": "short",
      "marks": 5,
      "question": "Describe Hydropericardium Syndrome (HPS / Leechi Disease): FAdV-4 etiology, pericardial effusion volume, liver lesions with basophilic intranuclear inclusions, and prevention.",
      "topicId": "u5-t09",
      "answer": "<p><b>Definition & Etiology:</b> Hydropericardium Syndrome (HPS / Angara Disease / Leechi Disease) is an acute disease of 3- to 5-week-old commercial broiler birds caused by <b>Fowl Adenovirus Serotype 4 (FAdV-4)</b> of the family <i>Adenoviridae</i>.</p>\n<p><b>Pathogenesis & Lesions:</b></p>\n<ul>\n  <li>Fast-growing meat broilers have an exceptionally high metabolic rate and pulmonary vascular pressure. FAdV-4 has direct affinity for hepatocytes and myocardial capillary endothelia.</li>\n  <li><b>Hydropericardium:</b> Severe capillary endothelial leakage produces massive accumulation of <b>5 to 15 mL of clear, straw-colored, amber or light-green serous transudate</b> inside the transparent pericardial sac. The heart floats inside like a conical <b>'peeled leechi fruit'</b>, resulting in fatal cardiac tamponade and death.</li>\n  <li><b>Liver Lesions:</b> Liver is markedly enlarged, swollen, pale yellow-brown, soft, and friable, with rounded borders and prominent ecchymotic hemorrhages.</li>\n  <li><b>Microscopic Hallmark:</b> Massive centrilobular and multifocal hepatocellular coagulative necrosis containing large, round, dense, basophilic <b>INTRANUCLEAR Inclusion Bodies</b> inside degenerate hepatocytes.</li>\n  <li><b>Kidneys:</b> Swollen, pale, and congested, with tubules packed with urate crystals.</li>\n</ul>\n<p><b>Prevention & Control:</b> Formalin-inactivated autogenous liver-organ vaccines or FAdV-4 cell-culture vaccines administered at 10–14 days of age; strict biosecurity and water sanitation.</p>",
      "keyPoints": [
        "Etiology: Fowl Adenovirus Serotype 4 (FAdV-4) in 3–5 week-old broilers.",
        "Pericardial lesion: 5–15 mL straw-colored effusion causing cardiac tamponade ('peeled leechi heart').",
        "Hepatic lesions: Enlarged friable liver with basophilic INTRANUCLEAR inclusion bodies inside necrotic hepatocytes.",
        "Prevention: Formalin-inactivated liver emulsion vaccine or recombinant fiber-protein vaccine."
      ],
      "table": null,
      "pyq": [
        "IVRI 2023",
        "GADVASU 2022",
        "RAJUVAS 2021"
      ]
    },
    {
      "id": "u5-qa-19",
      "type": "short",
      "marks": 5,
      "question": "Describe Avian Vitamin Deficiencies: Nutritional Encephalomalacia, Exudative Diathesis, Curled Toe Paralysis, and Polyneuritis (Star-gazing).",
      "topicId": "u5-t20",
      "answer": "<p>Nutritional deficiencies rapidly manifest in poultry due to high growth rates and rapid gastrointestinal transit:</p>\n<ol>\n  <li><b>Nutritional Encephalomalacia ('Crazy Chick Disease'):</b>\n    <ul>\n      <li><i>Deficiency:</i> <b>Vitamin E</b> deficiency in 2–4 week-old chicks fed oxidized, rancid fats.</li>\n      <li><i>Pathology:</i> Lipid peroxidation of capillary membranes causes ischemic liquefactive necrosis of the <b>cerebellum</b> (petechiae, swelling, and greenish-brown softening of cerebellar folia).</li>\n      <li><i>Signs:</i> Ataxia, head retraction, falling backward, tremors, and violent somersaulting.</li>\n    </ul>\n  </li>\n  <li><b>Exudative Diathesis:</b>\n    <ul>\n      <li><i>Deficiency:</i> Combined deficiency of <b>Vitamin E and Selenium</b>.</li>\n      <li><i>Pathology:</i> Capillary permeability allows massive transudation of blood plasma into subcutaneous tissue of the breast, abdomen, and wings, appearing as a <b>gelatinous, blue-green subcutaneous edema</b> (stained green by hemoglobin breakdown products).</li>\n    </ul>\n  </li>\n  <li><b>Curled Toe Paralysis:</b>\n    <ul>\n      <li><i>Deficiency:</i> <b>Riboflavin (Vitamin $B_2$)</b> deficiency in growing chicks (1–4 weeks).</li>\n      <li><i>Pathology:</i> Myelin sheath degeneration and Schwann cell proliferation in the <b>sciatic nerve</b>.</li>\n      <li><i>Signs:</i> Toes curl inward; chicks walk on their hocks with paralyzed extended digits.</li>\n    </ul>\n  </li>\n  <li><b>Polyneuritis ('Star-Gazing'):</b>\n    <ul>\n      <li><i>Deficiency:</i> <b>Thiamine (Vitamin $B_1$)</b> deficiency.</li>\n      <li><i>Pathology:</i> Impaired carbohydrate metabolism in the brain and peripheral nerve axonopathy.</li>\n      <li><i>Signs:</i> Severe cervical muscular spasms causing extreme dorsal head retraction (<b>opisthotonus / 'star-gazing' posture</b>); birds sit on their hocks and cannot stand.</li>\n    </ul>\n  </li>\n</ol>",
      "keyPoints": [
        "Encephalomalacia (Crazy Chick): Vitamin E; cerebellar liquefaction; ataxia and backward somersaulting.",
        "Exudative diathesis: Vit E + Selenium; blue-green gelatinous subcutaneous fluid over breast/abdomen.",
        "Curled toe paralysis: Riboflavin (Vit B2); sciatic nerve demyelination; toes curled inward walking on hocks.",
        "Polyneuritis (Star-gazing): Thiamine (Vit B1); extreme dorsal head retraction (opisthotonus)."
      ],
      "table": null,
      "pyq": [
        "IVRI 2023",
        "TANUVAS 2021",
        "GADVASU 2020",
        "KVAFSU 2019"
      ]
    },
    {
      "id": "u5-qa-20",
      "type": "short",
      "marks": 5,
      "question": "Describe Avian Colibacillosis (*Escherichia coli*): Pathogenesis of colisepticemia, fibrinous pericarditis, perihepatitis, airsacculitis, and salpingitis.",
      "topicId": "u5-t11",
      "answer": "<p><b>Etiology:</b> Avian Pathogenic <i>Escherichia coli</i> (APEC), primarily serogroups O1, O2, and O78.</p>\n<p><b>Pathogenesis:</b> <i>E. coli</i> is a normal intestinal commensal. Disease is triggered by primary immunosuppressive viruses (IBD, CIA) or respiratory damage (Infectious Bronchitis, high house ammonia levels). Inhalation of dust contaminated with poultry litter introduces APEC into the air sacs. Bacteria colonize damaged respiratory mucosa, penetrate into blood vessels, and establish <b>Colisepticemia</b>.</p>\n<p><b>Cardinal Pathological Lesions:</b></p>\n<ol>\n  <li><b>Fibrinous Airsacculitis:</b> Air sacs (thoracic and abdominal) lose their normal thin, transparent appearance; become thickened, cloudy, opaque, and coated with yellow, caseous, fibrino-purulent exudate.</li>\n  <li><b>Fibrinous Pericarditis:</b> The pericardial sac is thickened and distended with copious yellow, fibrinous exudate that adheres to the epicardium, casing the heart in a thick fibrous shell.</li>\n  <li><b>Fibrinous Perihepatitis:</b> The liver is covered by an extensive, thick, glistening, yellow-white or grey-white <b>sheet-like fibrinous capsule (fibrinous peel)</b>; underlying liver is congested, dark, and swollen.</li>\n  <li><b>Coligranuloma (Hjarre's Disease):</b> Chronic form; characterized by multiple, nodular, yellow-white granulomatous masses along the intestinal wall, mesentery, and liver, mimicking tuberculosis (differentiated by lack of acid-fast bacilli).</li>\n  <li><b>Salpingitis & Egg Peritonitis:</b> Ascending infection from the cloaca into the oviduct; oviduct becomes massively distended and packed with foul, concentric, dry caseous curd-like exudate (salpingitis), leading to fatal yolk rupture into the peritoneum.</li>\n</ol>",
      "keyPoints": [
        "Pathogenesis: Immunosuppression/ammonia -> respiratory entry into air sacs -> Colisepticemia.",
        "The Fibrinous Triad: 1. Fibrinous Airsacculitis, 2. Fibrinous Pericarditis, 3. Fibrinous Perihepatitis (yellow fibrous peel over liver).",
        "Hjarre's Coligranuloma: Tuberculoid granulomas in intestinal wall and liver (ZN negative).",
        "Salpingitis: Oviduct distended with concentric caseous plugs; egg peritonitis."
      ],
      "table": null,
      "pyq": [
        "IVRI 2023",
        "TANUVAS 2022",
        "GADVASU 2021",
        "MAFSU 2020"
      ]
    },
    {
      "id": "u5-qa-21",
      "type": "long",
      "marks": 12,
      "question": "Describe in detail Marek's Disease: Etiology, viral oncogene, four pathomorphological forms (Classical / Neural, Acute / Visceral, Ocular / Gray eye, Cutaneous), gross lesions in nerves and viscera, microscopic pathology, and vaccination.",
      "topicId": "u5-t06",
      "answer": "<p><b>Definition:</b> Marek's Disease (MD) is an economically devastating, highly contagious, oncogenic herpesviral disease of domestic chickens characterized by T-cell lymphomas infiltrating peripheral nerves and visceral organs.</p>\n\n<h3>1. Etiology and Viral Oncogenesis</h3>\n<ul>\n  <li><b>Virus:</b> <b>Gallid Alphaherpesvirus 2 (MDV-1)</b>, Family <i>Herpesviridae</i>. Cell-associated virus.</li>\n  <li><b>Viral Oncogene:</b> MDV encodes the <b>meq (Marek's EcoRI-Q-encoded protein)</b> oncogene, a basic leucine zipper (bZIP) transcription factor that heterodimerizes with c-Jun, transcriptionally driving malignant transformation of <b>$CD4^+$ T-lymphocytes</b>.</li>\n  <li><b>Transmission:</b> Fully infectious, cell-free virions are produced and enveloped exclusively in the <b>feather follicle epithelium</b> of the skin. Virions shed in feather dander and poultry dust; transmitted strictly via <b>inhalation</b>. (Vertical transmission via egg does not occur).</li>\n</ul>\n\n<h3>2. The Four Clinical-Pathomorphological Forms</h3>\n<ol>\n  <li><b>Classical (Neural) Form ('Fowl Paralysis' / 'Range Paralysis'):</b>\n    <ul>\n      <li><i>Target:</i> Peripheral nerve trunks (sciatic, brachial, vagus, intercostal, celiac nerves).</li>\n      <li><i>Signs:</i> Unilateral or bilateral paralysis of wings, legs, or neck. Classic <b>'range paralysis'</b> posture: one leg stretched forward and the other backward; drooped wing touching the ground; crop dilation (vagus paralysis).</li>\n    </ul>\n  </li>\n  <li><b>Acute (Visceral) Form:</b>\n    <ul>\n      <li><i>Target:</i> Visceral parenchymatous organs.</li>\n      <li><i>Signs:</i> Rapid onset, severe depression, anorexia, cachexia, and massive flock mortality (up to 60–80%). Tumourous infiltration of liver, spleen, kidneys, heart, proventriculus, gonads, and lungs.</li>\n    </ul>\n  </li>\n  <li><b>Ocular Form ('Gray Eye' / 'Pearl Eye'):</b>\n    <ul>\n      <li><i>Target:</i> Iris and ciliary body.</li>\n      <li><i>Signs:</i> Loss of normal yellow-orange iris pigmentation, turning a dull <b>grayish-white or slate-gray ('pearl eye')</b>; pupil becomes irregular, eccentric, constricted, or pinpoint, with complete blindness.</li>\n    </ul>\n  </li>\n  <li><b>Cutaneous Form ('Skin Leukosis'):</b>\n    <ul>\n      <li><i>Target:</i> Feather follicles.</li>\n      <li><i>Signs:</i> Raised, firm, white nodular neoplastic aggregates around feather follicles; causes carcass downgrading at slaughter.</li>\n    </ul>\n  </li>\n</ol>\n\n<h3>3. Gross Pathology</h3>\n<ul>\n  <li><b>Peripheral Nerves:</b> Pathognomonic: <b>Asymmetrical enlargement of affected nerve trunks (2 to 3 times normal thickness)</b>. The normal delicate cross-striations (glistening white rings) are completely lost; nerves appear swollen, uniform, yellowish-grey, and edematous. (Always compare left and right sciatic nerves during necropsy!).</li>\n  <li><b>Visceral Organs:</b>\n    <ul>\n      <li><i>Gonads:</i> <b>Ovary</b> is massively enlarged, multi-lobulated, resembling a cluster of grapes (cauliflower appearance); testes are swollen and firm.</li>\n      <li><i>Liver & Spleen:</i> Markedly enlarged (hepatosplenomegaly), mottled with diffuse pale white neoplastic infiltration or discrete, nodular, grayish-white lymphoid tumors.</li>\n      <li><i>Proventriculus:</i> Wall is thickened, firm, with obliterated lumen.</li>\n      <li><i>Bursa of Fabricius:</i> Diffusely atrophied or interfollicularly infiltrated (no discrete intrafollicular nodules, unlike Lymphoid Leukosis).</li>\n    </ul>\n  </li>\n</ul>\n\n<h3>4. Histopathology</h3>\n<ul>\n  <li><b>Type A Lesions (Active Neoplastic Infiltration):</b> Nerves are densely infiltrated by a <b>heterogeneous, pleomorphic population</b> of small, medium, and large transformed T-lymphoblasts, reticulum cells, and 'Marek's disease cells' (anaplastic lymphoblasts with mitotic figures), producing myelin breakdown, Schwann cell proliferation, and axonal degeneration.</li>\n  <li><b>Type B Lesions (Inflammatory):</b> Intercellular edema, light lymphocytic infiltration, and Schwann cell hyperplasia.</li>\n  <li><b>Type C Lesions (Mild):</b> Resting cuffing of lymphocytes.</li>\n</ul>\n\n<h3>5. Vaccination and Control</h3>\n<p>MD is controlled by vaccination administered <i>in ovo</i> at 18 days of incubation or subcutaneously at day-old hatching:</p>\n<ul>\n  <li><b>HVT (Herpesvirus of Turkeys - Meleagrid Alphaherpesvirus 1 / Serotype 3):</b> Naturally non-pathogenic for chickens, highly protective.</li>\n  <li><b>SB-1 (Serotype 2) and CVI-988 (Rispens strain - Serotype 1 attenuated):</b> Gold standard vaccine preventing tumour formation and paralysis (though vaccinated birds can still shed virulent field virus).</li>\n</ul>",
      "keyPoints": [
        "Etiology: Gallid Alphaherpesvirus 2 (MDV-1); 'meq' oncogene transforms CD4+ T-lymphocytes.",
        "Transmission: Inhaled feather follicle dander (no egg transmission).",
        "Four forms: Neural (range paralysis), Visceral (lymphomas in ovary, liver, spleen), Ocular (gray eye/blindness), Cutaneous (feather follicle tumors).",
        "Nerve lesions: Asymmetrical nerve swelling with loss of glistening cross-striations (sciatic, brachial, vagal).",
        "Histology: Pleomorphic, heterogeneous T-lymphocyte population infiltrating nerve fibres (Type A lesion).",
        "Vaccination: In-ovo (day 18) or day-old with HVT or Rispens (CVI-988) vaccine."
      ],
      "table": null,
      "pyq": [
        "IVRI 2023",
        "TANUVAS 2022",
        "GADVASU 2021",
        "RAJUVAS 2020"
      ]
    },
    {
      "id": "u5-qa-22",
      "type": "long",
      "marks": 12,
      "question": "Describe in detail Ranikhet Disease (Newcastle Disease): Etiology, molecular determinants of virulence, clinical signs, gross and histopathological lesions in velogenic viscerotropic vs neurotropic forms, and laboratory confirmation.",
      "topicId": "u5-t02",
      "answer": "<p><b>Definition:</b> Ranikhet Disease (Newcastle Disease - ND) is an acute, highly contagious, rapidly spreading, statutory notifiable viral infection of domestic poultry and other avian species, characterized by severe respiratory distress, nervous signs, and high mortality.</p>\n\n<h3>1. Etiology and Molecular Determinants of Virulence</h3>\n<ul>\n  <li><b>Virus:</b> <b>Avian Paramyxovirus Serotype 1 (APMV-1)</b>, genus <i>Orthoavulavirus</i>, Family <i>Paramyxoviridae</i> (enveloped, single-stranded negative-sense RNA virus).</li>\n  <li><b>Molecular Determinant of Virulence:</b> Virulence depends strictly on the amino acid sequence of the <b>Fusion (F) Glycoprotein Cleavage Site</b>:\n    <ul>\n      <li><i>Velogenic & Mesogenic Strains:</i> Possess multiple basic amino acids ($^{112}R-R-Q-K/R-R-F^{117}$) with phenylalanine at residue 117. This motif can be cleaved by ubiquitous, intracellular host <b>furin-like proteases</b> present in all body tissues, allowing systemic, multi-organ replication.</li>\n      <li><i>Lentogenic Strains:</i> Possess only single basic amino acids ($^{112}G/E-K/R-Q-G-R-L^{117}$) with leucine at 117. Cleavage requires extracellular <b>trypsin-like enzymes</b> found only in respiratory and digestive tracts, restricting infection to mucosal surfaces.</li>\n    </ul>\n  </li>\n</ul>\n\n<h3>2. Clinical Signs</h3>\n<ul>\n  <li><b>Respiratory:</b> Gasping, open-mouth breathing, coughing, sneezing, gurgling tracheal rales.</li>\n  <li><b>Digestive:</b> Bright greenish-yellow, watery, foul-smelling diarrhea with cloacal soiling.</li>\n  <li><b>Nervous (Neurotropic form):</b> <b>Torticollis (twisting of the head and neck)</b>, opisthotonus, walking in circles, star-gazing, clonic spasms, and complete leg/wing paralysis.</li>\n  <li><b>Reproductive:</b> Sudden, precipitous drop in egg production (approaching zero); soft-shelled, deformed eggs.</li>\n</ul>\n\n<h3>3. Gross Pathology</h3>\n<ol>\n  <li><b>Velogenic Viscerotropic Form (Doyle's Disease):</b>\n    <ul>\n      <li><b>Proventriculus:</b> Hallmark pathognomonic lesion: <b>Petechial and ecchymotic hemorrhages concentrated at the elevated tips of the proventricular gland papillae</b>.</li>\n      <li><b>Intestines:</b> Severe hemorrhagic enteritis with button-like necrotic, ulcerative eschars covered by green-yellow diptheritic membranes over Peyer's patches and <b>cecal tonsils</b>.</li>\n      <li><b>Respiratory Tract:</b> Severe catarrhal or hemorrhagic tracheitis with mucus plugs; congested lungs.</li>\n      <li><b>Spleen:</b> Mottled, necrotic, with pinpoint white foci; thymus and bursa are hemorrhagic and depleted.</li>\n    </ul>\n  </li>\n  <li><b>Velogenic Neurotropic Form (Beach's Disease):</b> Minimal digestive lesions; lungs congested with mild airsacculitis. Nervous lesions dominate histologically.</li>\n</ol>\n\n<h3>4. Histopathology</h3>\n<ul>\n  <li><b>Digestive Tract:</b> Severe microvascular endothelial necrosis, fibrinoid thrombi, mucosal sloughing, and massive mononuclear infiltration.</li>\n  <li><b>Central Nervous System:</b> Acute, non-suppurative encephalomyelitis: <b>perivascular lymphocytic cuffing</b>, neuronal degeneration, chromatolysis, microglial proliferation (gliosis), and endothelial hypertrophy.</li>\n</ul>\n\n<h3>5. Laboratory Confirmation</h3>\n<ul>\n  <li><b>Virus Isolation:</b> Inoculation of allantoic cavity of 9- to 11-day-old embryonated chicken eggs; causes embryo death in 48–72 hours with cutaneous hemorrhages.</li>\n  <li><b>Hemagglutination (HA) & Hemagglutination Inhibition (HI) Test:</b> Virus agglutinates chicken erythrocytes (HA positive); inhibited specifically by NDV antiserum (HI positive).</li>\n  <li><b>Intracerebral Pathogenicity Index (ICPI):</b> Inoculation into day-old chicks: Velogenic strains score 1.5–2.0; Lentogenic strains score near 0.0.</li>\n  <li><b>Molecular:</b> Reverse-Transcription PCR (RT-PCR) and real-time RT-PCR targeting the F-gene cleavage site.</li>\n</ul>",
      "keyPoints": [
        "Etiology: Avian Paramyxovirus-1 (APMV-1).",
        "Virulence mechanism: F-glycoprotein cleavage site sequence determines whether systemic furin (velogenic) or mucosal trypsin (lentogenic) cleaves the virus.",
        "Clinical signs: Gasping, green diarrhea, torticollis (twisted neck), drop in egg production.",
        "Proventriculus hallmark: Petechiae on the tips of gland papillae; hemorrhagic cecal tonsillitis.",
        "Histopathology: Non-suppurative encephalitis with perivascular lymphocytic cuffs.",
        "Diagnosis: Allantoic egg inoculation, HA/HI tests, ICPI index (1.5–2.0 for velogenic), RT-PCR."
      ],
      "table": null,
      "pyq": [
        "IVRI 2023",
        "TANUVAS 2022",
        "GADVASU 2021",
        "RAJUVAS 2020"
      ]
    },
    {
      "id": "u5-qa-23",
      "type": "long",
      "marks": 12,
      "question": "Describe the Avian Respiratory Complex: Comparative pathology, gross lesions, and differential diagnosis of Infectious Bronchitis (IB), Infectious Laryngotracheitis (ILT), Chronic Respiratory Disease (CRD / *M. gallisepticum*), and Infectious Coryza (*Avibacterium paragallinarum*).",
      "topicId": "u5-t04",
      "answer": "<p>Respiratory diseases of poultry frequently present with overlapping signs of rales, coughing, facial swelling, and conjunctivitis, requiring precise clinicopathological differentiation.</p>\n\n<h3>1. Infectious Bronchitis (IB) — <i>Avian Coronavirus</i></h3>\n<ul>\n  <li><b>Pathogenesis:</b> Highly contagious; inhaled coronavirus infects ciliated respiratory epithelium, causing loss of cilia and catarrhal exudation. Certain <b>nephropathogenic strains</b> (e.g., QX, Australian T-strain) disseminate to kidneys.</li>\n  <li><b>Lesions:</b>\n    <ul>\n      <li><i>Respiratory:</i> Serous to catarrhal tracheitis; distinctive <b>yellow caseous plugs at the bifurcation of the trachea (syringitis)</b> causing suffocating death in chicks.</li>\n      <li><i>Reproductive:</i> Infection of pullets causes permanent damage to the middle third of the oviduct; mature hens lay <b>misshapen, rough-shelled, corrugated, bleached, watery-albumen eggs</b>. Cystic oviducts ('false layers').</li>\n      <li><i>Renal (Nephropathogenic IB):</i> Kidneys are massively swollen, pale, mottled, with tubules and ureters distended with chalky white <b>urate crystals</b> (tubulointerstitial nephritis).</li>\n    </ul>\n  </li>\n</ul>\n\n<h3>2. Infectious Laryngotracheitis (ILT) — <i>Gallid Alphaherpesvirus-1</i></h3>\n<ul>\n  <li><b>Pathogenesis:</b> Herpesvirus induces syncytial giant cell formation and extensive necrosis of the laryngeal and tracheal mucosa.</li>\n  <li><b>Lesions:</b> Hallmark: <b>Hemorrhagic necrotizing laryngotracheitis</b>. The entire tracheal lumen is blocked by a dark red, blood-stained fibrinous cast or liquid bloody exudate. Birds extend their necks upward to breathe ('pump-handle respiration') and forcefully cough up blood, staining walls and cages.</li>\n  <li><b>Microscopy:</b> Multinucleated epithelial syncytia containing <b>eosinophilic Cowdry Type A INTRANUCLEAR Inclusion Bodies</b>.</li>\n</ul>\n\n<h3>3. Chronic Respiratory Disease (CRD) — <i>Mycoplasma gallisepticum (MG)</i></h3>\n<ul>\n  <li><b>Pathogenesis:</b> <i>Mycoplasma gallisepticum</i> attaches via terminal tip organelle to ciliated tracheal epithelium. Infection is chronic and insidious; synergizes with <i>E. coli</i> to produce severe <b>'Complicated CRD' (CCRD)</b>.</li>\n  <li><b>Lesions:</b>\n    <ul>\n      <li><i>Airsacculitis:</i> Air sacs become heavily thickened, opaque, coated with yellow, cheese-like, frothy or caseous exudate.</li>\n      <li><i>Tracheitis:</i> Catarrhal tracheitis with mucosal thickening.</li>\n      <li><i>Complicated CRD:</i> Classic fibrinous triad: <b>fibrinous airsacculitis, fibrinous pericarditis, and fibrinous perihepatitis</b>.</li>\n    </ul>\n  </li>\n  <li><b>Diagnosis:</b> Serum Plate Agglutination (SPA) test, culture on Frey's medium (fried-egg colonies), and PCR.</li>\n</ul>\n\n<h3>4. Infectious Coryza — <i>Avibacterium paragallinarum</i></h3>\n<ul>\n  <li><b>Pathogenesis:</b> Acute bacterial infection strictly localized to the upper respiratory tract.</li>\n  <li><b>Lesions:</b> Hallmark: <b>Acute swelling and edema of the infraorbital sinuses and face ('Owl Head' appearance)</b> with profuse, foul-smelling, catarrhal nasal discharge, conjunctivitis, and adhered eyelids. Trachea and lower lungs are rarely involved; no caseous airsacculitis or hemorrhages.</li>\n</ul>\n\n<h3>5. Differential Diagnostic Summary</h3>\n<p><b>Diagnostic Keys:</b> Bloody tracheal plug + intranuclear inclusions = <b>ILT</b>; Misshapen eggs + caseous plugs at syrinx + swollen urate kidneys = <b>IB</b>; Caseous airsacculitis + pericarditis/perihepatitis = <b>CRD / CCRD</b>; Facial infraorbital edema ('owl head') without lung lesions = <b>Infectious Coryza</b>.</p>",
      "keyPoints": [
        "Infectious Bronchitis (Coronavirus): Caseous plugs at syrinx, corrugated thin-shelled watery eggs, swollen pale urate kidneys (nephropathogenic strains).",
        "ILT (Herpesvirus): Severe hemorrhagic tracheitis with bloody casts (birds cough blood); syncytia with Cowdry A INTRANUCLEAR inclusion bodies.",
        "CRD (Mycoplasma gallisepticum): Chronic caseous airsacculitis; complicated CRD causes pericarditis and perihepatitis.",
        "Infectious Coryza (Avibacterium): Marked infraorbital sinus edema ('owl head' appearance) with foul-smelling nasal discharge; spares lower airways."
      ],
      "table": null,
      "pyq": [
        "IVRI 2023",
        "TANUVAS 2022",
        "GADVASU 2021",
        "KVAFSU 2020"
      ]
    },
    {
      "id": "u5-qa-24",
      "type": "long",
      "marks": 12,
      "question": "Describe Avian Oncology: Comprehensive comparison of Marek's Disease, Avian Leukosis/Sarcoma group, and Reticuloendotheliosis — Virus family, target cells, age of onset, gross lesions in nerves, bursa of Fabricius, and visceral organs, and differential diagnosis.",
      "topicId": "u5-t07",
      "answer": "<p>Avian oncogenic viral diseases are responsible for significant commercial mortality and carcass condemnation through the induction of malignant neoplastic lymphomas.</p>\n\n<h3>1. Etiology and Target Cell Comparison</h3>\n<ul>\n  <li><b>Marek's Disease (MD):</b>\n    <ul>\n      <li><i>Virus:</i> <b>Gallid Alphaherpesvirus 2 (MDV)</b>, Family <i>Herpesviridae</i>.</li>\n      <li><i>Target Cell:</i> <b>$CD4^+$ T-lymphocytes</b>; transformed cells express the Meq oncoprotein.</li>\n      <li><i>Epidemiology:</i> Transmitted horizontally via inhaled feather follicle dander. (No egg transmission). Affects chicks from <b>2 to 5 months of age</b> (can occur as early as 3 weeks).</li>\n    </ul>\n  </li>\n  <li><b>Avian Leukosis / Sarcoma Group (ALV / Lymphoid Leukosis):</b>\n    <ul>\n      <li><i>Virus:</i> <b>Avian Leukosis Virus (ALV Subgroups A, B, C, D, J)</b>, Family <i>Retroviridae</i>.</li>\n      <li><i>Target Cell:</i> <b>$IgM^+$ B-lymphocytes</b>; viral integration next to c-myc drives clonal proliferation.</li>\n      <li><i>Epidemiology:</i> Transmitted <b>vertically via egg (transovarian)</b> and horizontally. Does not manifest clinically until sexual maturity (rarely seen before <b>16 to 24 weeks of age</b>).</li>\n    </ul>\n  </li>\n  <li><b>Reticuloendotheliosis (REV):</b>\n    <ul>\n      <li><i>Virus:</i> <b>Reticuloendotheliosis Virus (REV)</b>, Family <i>Retroviridae</i> (carries v-rel oncogene).</li>\n      <li><i>Target Cell:</i> Primitive <b>reticular / histiocytic cells, B-cells, and T-cells</b>.</li>\n      <li><i>Epidemiology:</i> Transmitted horizontally and vertically; can affect turkeys, chickens, ducks, and geese at various ages; induces acute runting syndrome or chronic lymphomas.</li>\n    </ul>\n  </li>\n</ul>\n\n<h3>2. Pathological Comparison of Organs</h3>\n<ol>\n  <li><b>Peripheral Nerves (The Ultimate Differentiating Organ):</b>\n    <ul>\n      <li><i>Marek's Disease:</i> <b>Pathognomonic asymmetrical enlargement</b> of sciatic, brachial, and vagus nerves (2–3x normal), loss of cross-striations, yellowish edema.</li>\n      <li><i>Lymphoid Leukosis:</i> <b>Nerves are NEVER affected</b>. (Normal appearance).</li>\n      <li><i>Reticuloendotheliosis:</i> Occasional mild peripheral nerve enlargement.</li>\n    </ul>\n  </li>\n  <li><b>Bursa of Fabricius:</b>\n    <ul>\n      <li><i>Marek's Disease:</i> Usually <b>atrophied</b> and shrunken; diffuse interfollicular lymphomatous infiltration; no discrete tumors.</li>\n      <li><i>Lymphoid Leukosis:</i> <b>Nodular, tumorous enlargement</b>: solitary or multiple, discrete, rounded intrafollicular tumor nodules within the bursal folds.</li>\n      <li><i>Reticuloendotheliosis:</i> Atrophied or diffuse bursal enlargement.</li>\n    </ul>\n  </li>\n  <li><b>Ocular and Cutaneous Involvement:</b>\n    <ul>\n      <li><i>Marek's Disease:</i> <b>Common</b>: Gray eye / pearl eye (iris lymphomatosis and blindness) and feather follicle tumors (skin leukosis).</li>\n      <li><i>Lymphoid Leukosis:</i> <b>Absent</b>: Eyes and skin are never involved.</li>\n    </ul>\n  </li>\n  <li><b>Visceral Organs:</b>\n    <ul>\n      <li><i>Marek's:</i> Massive cauliflower-like ovary, enlarged liver and spleen, proventricular thickening.</li>\n      <li><i>Leukosis:</i> Enormous, friable, 'big liver disease' with multiple smooth nodular lymphomas; massive splenomegaly.</li>\n    </ul>\n  </li>\n</ol>\n\n<h3>3. Cytological and Histopathological Differentiation</h3>\n<ul>\n  <li><b>Marek's Disease Cytology:</b> <b>Pleomorphic / Heterogeneous</b> cellular infiltrate composed of small, medium, and large lymphocytes, lymphoblasts, plasma cells, and anaplastic 'Marek's disease cells' with frequent mitoses.</li>\n  <li><b>Lymphoid Leukosis Cytology:</b> <b>Monomorphic / Homogeneous</b> cellular sheet composed entirely of uniform, immature lymphoblasts with round nuclei, prominent vesicular nucleoli, and basophilic cytoplasm.</li>\n</ul>\n\n<h3>4. Diagnostic Summary</h3>\n<p>Nerve paralysis + young age (<16 weeks) + pleomorphic T-cells + iris/skin tumors = <b>Marek's Disease</b>. Sexually mature birds (>16 weeks) + nodular bursa + monomorphic B-cells + nerves spared = <b>Lymphoid Leukosis</b>.</p>",
      "keyPoints": [
        "Etiology: MD is Herpesvirus (T-cell); LL is Retrovirus (B-cell); REV is Retrovirus (reticular cells).",
        "Age of onset: MD strikes young birds (2–5 months); LL strikes adult birds (>16 weeks / sexual maturity).",
        "Nerves: MD shows prominent asymmetrical sciatic/brachial nerve enlargement; LL NEVER affects nerves.",
        "Bursa: MD shows atrophic/interfollicular bursa; LL shows discrete nodular intrafollicular tumors.",
        "Histology: MD is pleomorphic (mixed T-cells); LL is monomorphic (uniform sheets of lymphoblasts)."
      ],
      "table": null,
      "pyq": [
        "IVRI 2023",
        "TANUVAS 2022",
        "GADVASU 2021",
        "RAJUVAS 2020"
      ]
    },
    {
      "id": "u5-qa-25",
      "type": "long",
      "marks": 12,
      "question": "Describe the Metabolic and Nutritional Pathology of Modern Broilers and Layers: Broiler Ascites Syndrome (Water Belly), Sudden Death Syndrome (Flip-over), Deep Pectoral Myopathy (Green Muscle Disease), Cage Layer Fatigue, and Fatty Liver Hemorrhagic Syndrome (FLHS).",
      "topicId": "u5-t21",
      "answer": "<p>Intensive genetic selection for rapid meat accretion in broilers and astronomical egg production in layers has produced severe metabolic and cardiovascular pathology.</p>\n\n<h3>1. Broiler Ascites Syndrome (Pulmonary Hypertension Syndrome - PHS)</h3>\n<ul>\n  <li><b>Pathogenesis:</b> Fast growth and cold exposure create massive metabolic oxygen demand. The broiler's cardiovascular output increases, but the rigid, non-distensible avian lung capillaries cannot accommodate increased blood flow. This creates <b>Pulmonary Arterial Hypertension (PAH)</b>.</li>\n  <li>The thin-walled right ventricle undergoes severe compensatory <b>hypertrophy and dilatation</b>, leading to right ventricular failure. Venous pressure spikes in the caudal vena cava, and fluid transudates across the hepatic capsule into the coelom.</li>\n  <li><b>Gross Lesions:</b> Abdomen is hugely distended with up to 300–500 mL of clear, amber, gelatinous transudate with fibrin clots (<b>Water Belly</b>). Liver is shrunken, firm, capsulated by a thick white fibrous peel; right ventricle is dilated and flabby; hydropericardium.</li>\n</ul>\n\n<h3>2. Sudden Death Syndrome (SDS / 'Flip-Over' Disease)</h3>\n<ul>\n  <li><b>Pathogenesis:</b> Affects the fastest-growing, healthiest male broilers (2–5 weeks). Believed to be an acute cardiac metabolic dysrhythmia (ventricular fibrillation) triggered by high carbohydrate diets and acute lactic acid accumulation.</li>\n  <li><b>Signs & Necropsy:</b> Birds suddenly jump into the air, emit a squawk, violently flutter their wings, flip onto their backs, and die within seconds.</li>\n  <li><i>Lesions:</i> Well-nourished carcass lying on its back; crop and gizzard full of feed; lungs congested and edematous; heart shows contracted left ventricle and dilated, blood-engorged right ventricle. No inflammatory lesions.</li>\n</ul>\n\n<h3>3. Deep Pectoral Myopathy (DPM / 'Green Muscle Disease')</h3>\n<ul>\n  <li><b>Pathogenesis:</b> Affects heavy meat-type broilers and turkeys. The <b>Supracoracoideus (deep pectoral / tender)</b> muscle is enclosed within a rigid, inelastic osteofascial compartment formed by the sternum and tough pectoral fascia.</li>\n  <li>Sudden wing flapping causes the muscle to swell by 20% due to increased blood flow. Because the compartment cannot expand, internal pressure skyrockets, collapsing intramuscular veins and arteries, producing <b>ischemic compartment syndrome</b> and total necrosis.</li>\n  <li><b>Gross Lesions:</b> Discovered at processing; the middle third of the deep pectoral muscle is swollen, pale, and dry, turning a distinct <b>grass-green to yellowish-green necrotic color</b> (due to hemoglobin breakdown to biliverdin).</li>\n</ul>\n\n<h3>4. Cage Layer Fatigue (Osteoporosis in Layers)</h3>\n<ul>\n  <li><b>Pathogenesis:</b> High-yielding caged layer hens transfer ~2 grams of calcium into each eggshell per day. Calcium deficiency, Vitamin D deficiency, or high phosphorus forces osteoclasts to continually strip medullary and cortical bone.</li>\n  <li><b>Lesions:</b> Extreme <b>Osteoporosis</b>: bones become brittle, soft, and flexible; ribs are beaded and paper-thin; spontaneous fractures of ribs, keel bone, and thoracic vertebrae cause spinal cord compression and permanent recumbency.</li>\n</ul>\n\n<h3>5. Fatty Liver Hemorrhagic Syndrome (FLHS)</h3>\n<ul>\n  <li><b>Pathogenesis:</b> High-producing caged laying hens fed high-energy, low-protein diets combined with lack of exercise. Estrogen stimulates excessive hepatic lipogenesis exceeding the liver's capacity to package and export VLDLs.</li>\n  <li><b>Lesions:</b> Liver is enormously enlarged, friable, pale yellow-orange, and greasy (severe hepatic steatosis). The friable liver capsule ruptures spontaneously, causing <b>massive fatal internal hemorrhage</b> with large blood clots filling the abdominal cavity.</li>\n</ul>",
      "keyPoints": [
        "Broiler ascites: High oxygen demand -> pulmonary hypertension -> right ventricular failure -> amber fluid transudate in abdomen (water belly).",
        "Flip-over (SDS): Ventricular fibrillation in healthy fast-growing broilers; bird flips on back and dies with full crop.",
        "Green muscle disease (DPM): Compartment syndrome of supracoracoideus muscle; ischemic necrosis turns muscle grass-green (biliverdin).",
        "Cage layer fatigue: Severe osteoporosis and vertebral fractures from daily 2g eggshell calcium depletion in caged hens.",
        "FLHS: High-energy diet in caged layers -> extreme steatosis -> liver capsule rupture and fatal intra-abdominal hemorrhage."
      ],
      "table": null,
      "pyq": [
        "IVRI 2023",
        "TANUVAS 2022",
        "GADVASU 2021",
        "KVAFSU 2020"
      ]
    }
  ],
  "unit-6": [
    {
      "id": "u6-qa-01",
      "type": "define",
      "marks": 2,
      "question": "Define Tyzzer's Disease and name its causative organism.",
      "topicId": "u6-t01",
      "answer": "<p><b>Tyzzer's Disease</b> is an acute, highly fatal, stress-induced entero-hepatic bacterial disease of laboratory rodents (mice, rats, gerbils), rabbits, foals, and wild animals characterized by watery diarrhea, severe depression, and multifocal coagulative hepatic necrosis.</p><p><b>Causative Organism:</b> <b>Clostridium piliforme</b> (formerly <i>Bacillus piliformis</i>), an obligate intracellular, Gram-negative, spore-forming, highly motile filamentous bacterium.</p>",
      "keyPoints": [
        "Tyzzer's disease: Acute fatal enterohepatic disease with multifocal coagulative liver necrosis.",
        "Organism: Clostridium piliforme (obligate intracellular filamentous bacterium)."
      ],
      "table": null,
      "pyq": [
        "IVRI 2023",
        "TANUVAS 2022",
        "GADVASU 2021"
      ]
    },
    {
      "id": "u6-qa-02",
      "type": "define",
      "marks": 2,
      "question": "State the diagnostic special staining property of *Clostridium piliforme* in Tyzzer's disease.",
      "topicId": "u6-t01",
      "answer": "<p><b>Diagnostic Staining Property:</b> <i>Clostridium piliforme</i> is <b>invisible on routine H&E staining</b> because its thin, lipid-poor cell wall is masked by the eosinophilic cytoplasm of necrotic hepatocytes.</p><p>Diagnosis requires silver impregnation stains—<b>Warthin-Starry silver stain</b> or <b>Levaditi / Giemsa stain</b>—which stain the organisms deep black or dark blue, revealing characteristic criss-crossing bundles resembling <b>'sheaves of wheat' or 'Chinese letters'</b> packed inside the cytoplasm of viable hepatocytes at the margins of necrotic foci.</p>",
      "keyPoints": [
        "Staining: Invisible on routine H&E; stained by Warthin-Starry silver or Giemsa stain.",
        "Appearance: Deep black criss-crossing bundles resembling 'sheaves of wheat' inside viable border hepatocytes."
      ],
      "table": null,
      "pyq": [
        "IVRI 2022",
        "RAJUVAS 2021",
        "KVAFSU 2019"
      ]
    },
    {
      "id": "u6-qa-03",
      "type": "define",
      "marks": 2,
      "question": "Define Infectious Ectromelia (Mousepox) and explain the etymological meaning of 'ectromelia'.",
      "topicId": "u6-t02",
      "answer": "<p><b>Infectious Ectromelia (Mousepox)</b> is an acute or chronic contagious viral disease of laboratory mice caused by <b>Ectromelia virus</b> (genus <i>Orthopoxvirus</i>, Family <i>Poxviridae</i>), characterized by severe visceral necrosis or generalized cutaneous ulceration and gangrene.</p><p><b>Meaning of 'Ectromelia':</b> Derived from Greek (<i>ektroma</i> = miscarriage/abortion, <i>melos</i> = limb), meaning <b>congenital absence or amputation of a limb</b>, referring to the pathognomonic ischemic dry gangrene and spontaneous sloughing (amputation) of the feet, digits, and tail.</p>",
      "keyPoints": [
        "Infectious Ectromelia: Orthopoxvirus disease of mice causing visceral necrosis and cutaneous gangrene.",
        "Meaning: 'Ectromelia' means missing/amputated limb, describing the sloughing of feet and tail due to ischemia."
      ],
      "table": null,
      "pyq": [
        "TANUVAS 2023",
        "IVRI 2021",
        "GADVASU 2020"
      ]
    },
    {
      "id": "u6-qa-04",
      "type": "define",
      "marks": 2,
      "question": "Define Marchal Bodies in Mousepox.",
      "topicId": "u6-t02",
      "answer": "<p><b>Marchal Bodies</b> are pathognomonic, large, round to oval, eosinophilic, homogeneous <b>intracytoplasmic inclusion bodies</b> (Type A inclusion bodies) found in epidermal cells, conjunctival epithelium, and pancreatic acinar cells of mice infected with <b>Ectromelia virus (Mousepox)</b>.</p><p>They consist of dense proteinaceous matrices containing enveloped virions; diagnostic confirmation is achieved by demonstrating Marchal bodies in skin scrapings or H&E histological sections.</p>",
      "keyPoints": [
        "Marchal bodies: Eosinophilic intracytoplasmic (Type A) inclusion bodies in epithelial cells of mice infected with Mousepox.",
        "Diagnostic significance: Confirmatory diagnostic feature of Ectromelia virus infection."
      ],
      "table": null,
      "pyq": [
        "IVRI 2022",
        "WBUAFS 2020"
      ]
    },
    {
      "id": "u6-qa-05",
      "type": "define",
      "marks": 2,
      "question": "Define Scurvy in Guinea Pigs and state the precise biochemical enzyme defect.",
      "topicId": "u6-t03",
      "answer": "<p><b>Scurvy</b> is a nutritional deficiency disease of laboratory guinea pigs characterized by generalized subcutaneous and periarticular hemorrhages, swollen painful joints, loose teeth, and spontaneous bone fractures.</p><p><b>Biochemical Enzyme Defect:</b> Guinea pigs (like humans, non-human primates, and fruit bats) lack the functional liver enzyme <b>L-gulonolactone oxidase</b>, which is obligatory for converting glucose into <b>Ascorbic Acid (Vitamin C)</b>, making them completely dependent on dietary Vitamin C.</p>",
      "keyPoints": [
        "Scurvy: Nutritional deficiency of Vitamin C in guinea pigs causing hemorrhages and bone/cartilage weakness.",
        "Enzymatic defect: Lack of L-gulonolactone oxidase required for ascorbic acid synthesis."
      ],
      "table": null,
      "pyq": [
        "IVRI 2023",
        "TANUVAS 2022",
        "GADVASU 2021"
      ]
    },
    {
      "id": "u6-qa-06",
      "type": "define",
      "marks": 2,
      "question": "Define Antibiotic-Induced Enterotoxaemia (Dysbiosis) in Guinea Pigs.",
      "topicId": "u6-t03",
      "answer": "<p><b>Antibiotic-Induced Dysbiosis (Enterotoxaemia)</b> is a lethal digestive disorder in guinea pigs triggered by the administration of narrow-spectrum Gram-positive antibiotics (penicillin, ampicillin, erythromycin, lincomycin, clindamycin).</p><p><b>Pathology:</b> Guinea pigs possess a delicate, obligate Gram-positive cecal microflora; antibiotics obliterate this normal protective flora, permitting rapid, uninhibited overgrowth of <b>Clostridium difficile</b> and <b>Clostridium perfringens</b>, which produce lethal enterotoxins causing massive hemorrhagic cecitis, watery diarrhea, and death within 3 to 7 days.</p>",
      "keyPoints": [
        "Antibiotic enterotoxaemia: Lethal clostridial overgrowth in guinea pigs following Gram-positive antibiotics (penicillin).",
        "Pathology: Obliteration of Gram-positive flora -> Clostridium difficile overgrowth -> massive hemorrhagic cecitis."
      ],
      "table": null,
      "pyq": [
        "GADVASU 2023",
        "IVRI 2021",
        "MAFSU 2019"
      ]
    },
    {
      "id": "u6-qa-07",
      "type": "define",
      "marks": 2,
      "question": "Define 'Snuffles' in laboratory rabbits and name the causative agent.",
      "topicId": "u6-t04",
      "answer": "<p><b>Snuffles</b> is a chronic, highly contagious, upper respiratory tract syndrome of domestic and laboratory rabbits characterized by persistent serous to thick mucopurulent nasal discharge, snuffling respiratory sounds, sneezing, and matted fur on the medial surfaces of the front paws (from wiping the nose).</p><p><b>Causative Agent:</b> <b>Pasteurella multocida</b> (principally Capsular Type A, somatic serotypes 3 and 12).</p>",
      "keyPoints": [
        "Snuffles: Chronic contagious upper respiratory pasteurellosis in rabbits with mucopurulent nasal discharge.",
        "Agent: Pasteurella multocida; clinical sign: matted front paws from rubbing nasal discharge."
      ],
      "table": null,
      "pyq": [
        "TANUVAS 2023",
        "IVRI 2022",
        "RAJUVAS 2020"
      ]
    },
    {
      "id": "u6-qa-08",
      "type": "define",
      "marks": 2,
      "question": "Define Hepatic Coccidiosis in rabbits and name the causative protozoan parasite.",
      "topicId": "u6-t05",
      "answer": "<p><b>Hepatic Coccidiosis</b> is a high-mortality parasitic disease of growing commercial and laboratory rabbits characterized by biliary epithelial hyperplasia, marked hepatomegaly, pendulous abdomen ('pot-belly'), severe emaciation, and jaundice.</p><p><b>Causative Protozoan:</b> <b>Eimeria stiedae</b> (an apicomplexan coccidian whose sporozoites selectively target and invade the <b>epithelial lining of intrahepatic bile ducts</b> via the portal venules).</p>",
      "keyPoints": [
        "Hepatic coccidiosis: Severe biliary epithelial hyperplasia producing white branching cords on rabbit liver.",
        "Parasite: Eimeria stiedae (specifically invades intrahepatic bile duct epithelium)."
      ],
      "table": null,
      "pyq": [
        "IVRI 2023",
        "GADVASU 2022",
        "KVAFSU 2019"
      ]
    },
    {
      "id": "u6-qa-09",
      "type": "define",
      "marks": 2,
      "question": "Define Myxomatosis in rabbits and name its poxviral agent.",
      "topicId": "u6-t05",
      "answer": "<p><b>Myxomatosis</b> is a severe, acute, highly fatal viral disease of European domestic and wild rabbits (<i>Oryctolagus cuniculus</i>) characterized by gelatinous subcutaneous mucinous tumors (myxomas) around the face, eyelids, and anogenital region, accompanied by severe blepharoconjunctivitis ('lion head' appearance).</p><p><b>Viral Agent:</b> <b>Myxoma virus</b> (genus <i>Leporipoxvirus</i>, Family <i>Poxviridae</i>), mechanically transmitted by mosquitoes (<i>Aedes</i>, <i>Anopheles</i>) and rabbit fleas (<i>Spilopsyllus cuniculi</i>).</p>",
      "keyPoints": [
        "Myxomatosis: Fatal leporipoxvirus disease with gelatinous subcutaneous myxoid swellings ('lion head').",
        "Agent: Myxoma virus (Leporipoxvirus); vector: mosquitoes and fleas."
      ],
      "table": null,
      "pyq": [
        "TANUVAS 2022",
        "IVRI 2020"
      ]
    },
    {
      "id": "u6-qa-10",
      "type": "define",
      "marks": 2,
      "question": "Define Capture Myopathy (Exertional Rhabdomyolysis) in wild ungulates.",
      "topicId": "u6-t09",
      "answer": "<p><b>Capture Myopathy (Exertional Rhabdomyolysis / Cramp / Stress Syndrome)</b> is an acute to peracute, non-infectious metabolic myopathy occurring in wild ungulates (blackbuck, spotted deer, nilgai), wild birds, and marine mammals following capture, chemical immobilization, intense pursuit, restraint, or translocation.</p><p><b>Pathology:</b> Extreme exertion and terror trigger an intense catecholamine surge and anaerobic muscle metabolism, accumulating massive amounts of <b>lactic acid</b>, inducing acute metabolic acidosis, severe hyperthermia, widespread <b>Zenker's coagulative necrosis of skeletal and cardiac muscle</b>, and fatal <b>myoglobinuric acute tubular nephrosis</b>.</p>",
      "keyPoints": [
        "Capture myopathy: Non-infectious metabolic myonecrosis following pursuit/restraint in wild ungulates.",
        "Pathology: Lactic acidosis and catecholamines -> Zenker's rhabdomyolysis -> Myoglobinuric nephrosis."
      ],
      "table": null,
      "pyq": [
        "IVRI 2023",
        "RAJUVAS 2022",
        "GADVASU 2021"
      ]
    },
    {
      "id": "u6-qa-11",
      "type": "define",
      "marks": 2,
      "question": "Define Kyasanur Forest Disease (KFD / 'Monkey Fever') and its vector.",
      "topicId": "u6-t06",
      "answer": "<p><b>Kyasanur Forest Disease (KFD / Monkey Fever)</b> is an acute, fatal, tick-borne zoonotic arboviral hemorrhagic fever of non-human primates (black-faced langurs and bonnet macaques) and humans, first discovered in the Kyasanur forest of Shimoga district, Karnataka, India.</p><p><b>Etiology & Vector:</b> Caused by <b>Kyasanur Forest Disease Virus (KFDV)</b> (genus <i>Flavivirus</i>, Family <i>Flaviviridae</i>), transmitted by hard forest ticks, primarily <b>Haemaphysalis spinigera</b>.</p>",
      "keyPoints": [
        "KFD (Monkey Fever): Fatal tick-borne flaviviral hemorrhagic fever of langurs, macaques, and humans in India.",
        "Vector: Haemaphysalis spinigera hard tick."
      ],
      "table": null,
      "pyq": [
        "IVRI 2023",
        "TANUVAS 2021",
        "KVAFSU 2020"
      ]
    },
    {
      "id": "u6-qa-12",
      "type": "define",
      "marks": 2,
      "question": "Define Porphyrinuria in laboratory rabbits and distinguish it from Hematuria.",
      "topicId": "u6-t04",
      "answer": "<p><b>Porphyrinuria</b> is a harmless, physiological condition in domestic rabbits where the urine turns a striking deep orange, bright red, or brownish color due to the renal excretion of endogenous plant-derived pigments: <b>porphyrins and plant metabolites (pyrocatechol derivatives)</b>.</p><p><b>Distinction from Hematuria:</b> Porphyrinuric rabbit urine fluoresces vivid coral-red under ultraviolet (<b>Wood's lamp</b>) light and tests <b>negative for occult blood / hemoglobin on dipstick</b>, with zero red blood cells on microscopic sediment examination; True hematuria contains intact erythrocytes and tests strongly positive for occult blood.</p>",
      "keyPoints": [
        "Porphyrinuria: Harmless physiological red-orange rabbit urine from plant pigments and porphyrins.",
        "Distinction: Fluoresces under Wood's lamp, negative on dipstick for blood, no RBCs on sediment."
      ],
      "table": null,
      "pyq": [
        "GADVASU 2023",
        "IVRI 2022",
        "WBUAFS 2019"
      ]
    },
    {
      "id": "u6-qa-13",
      "type": "short",
      "marks": 5,
      "question": "Describe Tyzzer's Disease (*Clostridium piliforme*): Host range, predisposing stressors, hepatic gross lesions, and histopathology.",
      "topicId": "u6-t01",
      "answer": "<p><b>Etiology & Host Range:</b> Caused by <i>Clostridium piliforme</i>, an obligate intracellular, spore-forming, filamentous bacterium. Affects laboratory mice, rats, gerbils, hamsters, guinea pigs, rabbits, and foals.</p>\n<p><b>Predisposing Stressors:</b> Disease is almost exclusively triggered by environmental stress (overcrowding, sudden weaning, transport, high temperature) or chemical immunosuppression (corticosteroids, experimental irradiation).</p>\n<p><b>Gross Pathology:</b></p>\n<ul>\n  <li><b>Liver (Primary Target):</b> Hallmark pathognomonic lesion: <b>Multifocal, circumscribed, pinpoint to 2 mm, grayish-white or pale yellow necrotic foci</b> scattered evenly throughout the liver parenchyma, resembling miliary necrotic spots. Liver is swollen, congested, with rounded borders.</li>\n  <li><b>Intestine (Cecum & Colon):</b> Severe hemorrhagic, necrotizing typhlitis and colitis; cecal wall is thickened, edematous, filled with watery, dark foul-smelling diarrhea.</li>\n  <li><b>Heart (Myocardium):</b> Pale grayish streaks of coagulative myonecrosis (in gerbils and mice).</li>\n</ul>\n<p><b>Histopathology:</b></p>\n<ul>\n  <li>Centrilobular or focal coagulative hepatocellular necrosis surrounded by a mild rim of neutrophils and mononuclear cells.</li>\n  <li>Bacteria are invisible on routine H&E!</li>\n  <li><b>Warthin-Starry silver stain</b> or <b>Giemsa stain</b> reveals diagnostic <b>deeply argyrophilic (black) slender filamentous bacilli arranged in criss-crossing bundles resembling 'sheaves of wheat'</b> within the cytoplasm of viable hepatocytes at the margins of necrotic foci.</li>\n</ul>",
      "keyPoints": [
        "Etiology: Clostridium piliforme (obligate intracellular); triggered by stress and immunosuppression.",
        "Gross liver: Multiple circumscribed pinpoint to 2 mm grayish-white necrotic foci across all lobes.",
        "Intestine: Acute hemorrhagic necrotizing typhlocolitis with watery diarrhea.",
        "Histopathology: Warthin-Starry silver stain demonstrates black 'sheaves of wheat' bacilli in viable hepatocytes bordering necrosis."
      ],
      "table": null,
      "pyq": [
        "IVRI 2023",
        "TANUVAS 2022",
        "GADVASU 2021",
        "RAJUVAS 2020"
      ]
    },
    {
      "id": "u6-qa-14",
      "type": "short",
      "marks": 5,
      "question": "Describe Infectious Ectromelia (Mousepox): Cutaneous vs visceral forms, arteriolar thrombosis leading to gangrenous amputation, and inclusion bodies.",
      "topicId": "u6-t02",
      "answer": "<p><b>Etiology:</b> Ectromelia virus (an <i>Orthopoxvirus</i>), causing acute epizootics or chronic enzootics in mouse colonies.</p>\n<p><b>Pathogenesis & Two Clinical Forms:</b></p>\n<ol>\n  <li><b>Visceral (Peracute / Acute) Form:</b>\n    <ul>\n      <li>Seen in susceptible mouse strains (e.g., BALB/c, C3H). Virus enters through skin abrasion, multiplies in local lymph nodes, produces primary viremia, and replicates massively in liver and spleen.</li>\n      <li>Mice die abruptly within hours with no outward skin lesions.</li>\n      <li><i>Necropsy:</i> <b>Extensive multifocal necrosis of the liver and spleen</b>; spleen is enlarged, mottled, completely studded with white necrotic foci ('mottled spleen'); liver exhibits pinpoint coagulative necrosis.</li>\n    </ul>\n  </li>\n  <li><b>Cutaneous (Chronic) Form:</b>\n    <ul>\n      <li>Seen in moderately resistant strains. Secondary viremia delivers virus to vascular endothelia of peripheral skin extremities (feet, tail, snout).</li>\n      <li><b>Arteriolar Thrombosis & Gangrene:</b> Virus destroys arteriolar endothelial cells, triggering acute vasculitis and extensive microvascular thrombosis in digital and caudal arterioles.</li>\n      <li>Complete cessation of blood supply causes <b>ischemic coagulative necrosis and dry mummified gangrene</b>: the feet, digits, or entire tail undergo necrosis, shrivel, and spontaneously slough off ('ectromelia' = missing limb).</li>\n    </ul>\n  </li>\n</ol>\n<p><b>Inclusion Bodies:</b></p>\n<ul>\n  <li><b>Marchal Bodies (Type A Inclusions):</b> Large, round/oval, brightly eosinophilic intracytoplasmic inclusions found in hyperplastic epidermal cells and conjunctiva.</li>\n  <li>Type B (Guarnieri-like) basophilic inclusions containing viral replication complexes.</li>\n</ul>",
      "keyPoints": [
        "Visceral form: Peracute death without skin lesions; massive necrosis of liver and mottled necrotic spleen.",
        "Cutaneous form: Endothelial damage -> digital arteriolar thrombosis -> dry gangrenous amputation of digits/tail ('ectromelia').",
        "Inclusion bodies: Pathognomonic eosinophilic intracytoplasmic Marchal bodies in skin epithelial cells.",
        "Colony management: Depopulation, incineration of carcasses, and chemical sterilization of caging."
      ],
      "table": null,
      "pyq": [
        "IVRI 2022",
        "GADVASU 2021",
        "TANUVAS 2020"
      ]
    },
    {
      "id": "u6-qa-15",
      "type": "short",
      "marks": 5,
      "question": "Describe the Pathology of Guinea Pig Diseases: Scurvy (Vitamin C deficiency) and Cervical Lymphadenitis ('Lumps').",
      "topicId": "u6-t03",
      "answer": "<p>Two major classical pathological conditions affect laboratory guinea pigs (<i>Cavia porcellus</i>):</p>\n<ol>\n  <li><b>Scurvy (Hypovitaminosis C):</b>\n    <ul>\n      <li><i>Pathogenesis:</i> Genetic lack of <b>L-gulonolactone oxidase</b> prevents synthesis of ascorbic acid. Ascorbic acid is the essential cofactor for prolyl and lysyl hydroxylases required for collagen cross-linking and capillary basement membrane integrity.</li>\n      <li><i>Lesions:</i> Defective collagen produces widespread <b>microvascular hemorrhage</b>: massive subcutaneous hemorrhages over the thighs and abdomen; periarticular hemorrhages around stifle and elbow joints; subperiosteal hemorrhages of the skull and long bones; loose incisor teeth (defective periodontal ligament) with gingival bleeding; costochondral junctions are enlarged and beaded (scorbutic rosary).</li>\n      <li><i>Signs:</i> Reluctance to move, screaming in pain when handled, vocalization, hopping gait ('scurvy gait'), weight loss.</li>\n    </ul>\n  </li>\n  <li><b>Cervical Lymphadenitis ('Lumps'):</b>\n    <ul>\n      <li><i>Etiology:</i> <b>Streptococcus equi subsp. zooepidemicus</b> (Lancefield Group C, beta-hemolytic).</li>\n      <li><i>Pathogenesis:</i> Coarse hay or rough feed causes small abrasions in the oral mucosa or pharynx. Commensal streptococci penetrate mucosal abrasions, invade regional draining lymphatics, and colonize the <b>cervical lymph nodes</b>.</li>\n      <li><i>Lesions:</i> Massive, unilateral or bilateral abscessation of ventral cervical lymph nodes. Swellings are fluctuant, non-painful, reaching 2–5 cm in diameter ('lumps'), filled with thick, creamy, non-odorous white pus encapsulated by thick fibrous walls. May rupture externally through fistulous tracts.</li>\n    </ul>\n  </li>\n</ol>",
      "keyPoints": [
        "Scurvy pathogenesis: Lack of L-gulonolactone oxidase -> defective collagen cross-linking -> capillary fragility.",
        "Scurvy lesions: Subcutaneous and periarticular hemorrhages (stifle), scorbutic rosary, loose incisors, vocalization on touch.",
        "Cervical lymphadenitis ('Lumps'): Streptococcus equi subsp. zooepidemicus enters via oral mucosal abrasions from rough feed.",
        "Lumps lesions: Enormous encapsulated abscesses of cervical lymph nodes filled with thick white pus."
      ],
      "table": null,
      "pyq": [
        "IVRI 2023",
        "TANUVAS 2022",
        "GADVASU 2020",
        "MAFSU 2019"
      ]
    },
    {
      "id": "u6-qa-16",
      "type": "short",
      "marks": 5,
      "question": "Describe the Pathology of Rabbit Pasteurellosis (*Pasteurella multocida*): The 'Snuffles' complex, otitis media (wry neck), fibrinous pleuropneumonia, and genital infections.",
      "topicId": "u6-t04",
      "answer": "<p><b>Etiology:</b> <i>Pasteurella multocida</i> (Capsular Type A and D), the single most prevalent and economically destructive bacterial pathogen in domestic and laboratory rabbits.</p>\n<p><b>The Four Clinical-Pathological Manifestations:</b></p>\n<ol>\n  <li><b>Rhinitis ('Snuffles'):</b>\n    <ul>\n      <li>Initial chronic catarrhal, progressing to thick, white-yellow mucopurulent nasal discharge.</li>\n      <li>Rabbits sneeze, snuffle, and repeatedly wipe their nostrils with their front paws; pathognomonic: <b>matted, crusty fur on the medial aspect of the forepaws</b>. Atrophy of nasal turbinates occurs in chronic cases.</li>\n    </ul>\n  </li>\n  <li><b>Otitis Media and Interna ('Wry Neck' / Torticollis):</b>\n    <ul>\n      <li>Bacteria migrate from the nasopharynx up the <b>Eustachian tube</b> into the middle ear (tympanic bulla).</li>\n      <li>Tympanic bulla is filled with thick, creamy, yellow-white caseous pus (suppurative otitis media). Extension into the inner ear (vestibular apparatus) and brainstem causes loss of equilibrium: severe <b>Torticollis ('Wry Neck')</b>, where the rabbit's head is rotated 90°–180° to one side, with circular rolling.</li>\n    </ul>\n  </li>\n  <li><b>Fibrinous Pleuropneumonia:</b>\n    <ul>\n      <li>Hematogenous or aerogenous spread causing acute fibrino-purulent consolidation of cranioventral lung lobes, coated with thick shaggy fibrinous pleural exudate and pericarditis; high acute mortality.</li>\n    </ul>\n  </li>\n  <li><b>Genital Infections (Pyometra & Orchitis):</b>\n    <ul>\n      <li>Venereal transmission during mating causes severe suppurative endometritis with uterine horns massively distended with white-yellow pus (pyometra) in does, or testicular abscessation (orchitis) in bucks.</li>\n    </ul>\n  </li>\n</ol>",
      "keyPoints": [
        "Etiology: Pasteurella multocida (Capsular Type A).",
        "Snuffles: Mucopurulent rhinitis with matted fur on medial surfaces of forepaws.",
        "Wry neck (torticollis): Eustachian tube migration -> suppurative otitis media in tympanic bulla -> vestibular damage causing head tilt and rolling.",
        "Pleuropneumonia: Severe acute fibrinous pleuropneumonia and pericarditis.",
        "Genital: Venereal transmission causing massive pyometra in does and orchitis in bucks."
      ],
      "table": null,
      "pyq": [
        "IVRI 2023",
        "TANUVAS 2021",
        "GADVASU 2020",
        "KVAFSU 2018"
      ]
    },
    {
      "id": "u6-qa-17",
      "type": "short",
      "marks": 5,
      "question": "Describe Hepatic Coccidiosis (*Eimeria stiedae*) in Rabbits: Life cycle, biliary ductal tropism, gross white branching cord lesions on liver, and histopathology.",
      "topicId": "u6-t05",
      "answer": "<p><b>Etiology:</b> <i>Eimeria stiedae</i>, an apicomplexan protozoan with exclusive, strict tropism for the <b>intrahepatic biliary epithelium</b> of rabbits.</p>\n<p><b>Life Cycle & Pathogenesis:</b></p>\n<ol>\n  <li>Rabbit ingests sporulated oocysts in contaminated feed or water.</li>\n  <li>Sporozoites excyst in the duodenum, penetrate the intestinal mucosa, enter mesenteric venules and lymphatics, and travel via the <b>portal vein</b> directly into the liver.</li>\n  <li>Sporozoites selectively invade the <b>epithelial cells lining the intrahepatic bile ducts</b> (not hepatocytes!).</li>\n  <li>Repeated rounds of schizogony cause massive, unregulated hypertrophy and papillary hyperplasia of the biliary epithelium, producing severe cystic dilatation and thickening of the entire intrahepatic biliary tree.</li>\n</ol>\n<p><b>Gross Pathology:</b></p>\n<ul>\n  <li>Liver is enormously enlarged, pale, heavy (can exceed 20% of body weight), with rounded borders.</li>\n  <li>Hallmark: <b>Prominent, elevated, yellowish-white, branching cords and nodules</b> traversing the surface and deep parenchyma, mapping the exact anatomical course of the intrahepatic bile ducts.</li>\n  <li>On incision, these branching cords are dilated bile ducts containing thick, creamy, yellow-green bile packed with millions of oocysts. Gallbladder is distended with thick bile.</li>\n</ul>\n<p><b>Histopathology:</b> Extreme papillary and adenomatous hyperplasia of the bile duct epithelium, with extensive arborizing, branched epithelial folds projecting into the ductal lumen. Epithelial cells are packed with various developmental stages: <b>schizonts, microgametocytes, and ovoid unsporulated oocysts</b>; periductal fibrosis and portal mononuclear infiltration.</p>",
      "keyPoints": [
        "Tropism: Eimeria stiedae sporozoites travel via portal blood to selectively invade intrahepatic bile duct epithelium.",
        "Gross: Massive hepatomegaly; pathognomonic raised yellowish-white branching cords mapping the biliary tree.",
        "Cut section: Dilated bile ducts exuding creamy yellow bile packed with oocysts.",
        "Microscopy: Dramatic papillary biliary hyperplasia with epithelial cells packed with coccidian stages (schizonts, oocysts)."
      ],
      "table": null,
      "pyq": [
        "IVRI 2023",
        "GADVASU 2022",
        "TANUVAS 2021",
        "RAJUVAS 2019"
      ]
    },
    {
      "id": "u6-qa-18",
      "type": "short",
      "marks": 5,
      "question": "Describe Capture Myopathy in Wild Ungulates: Pathogenesis of excessive lactic acidosis, catecholamine surge, Zenker's degeneration, and myoglobinuric nephrosis.",
      "topicId": "u6-t09",
      "answer": "<p><b>Definition:</b> Capture Myopathy is a devastating metabolic myopathy of captured, pursued, or chemically immobilized wild ungulates (blackbuck, deer, nilgai), wild birds, and marsupials.</p>\n<p><b>Pathogenesis & Metabolic Cascade:</b></p>\n<ol>\n  <li><b>Terror & Catecholamine Surge:</b> Fear and extreme physical pursuit trigger massive sympathetic activation and astronomical adrenaline/noradrenaline release.</li>\n  <li><b>Anaerobic Muscle Glycolysis:</b> Violent muscular exertion quickly exhausts muscle glycogen and oxygen stores, switching to rapid anaerobic glycolysis.</li>\n  <li><b>Severe Lactic Acidosis:</b> Massive accumulation of <b>lactic acid</b> drops muscle and blood pH (<6.8), inducing systemic metabolic acidosis.</li>\n  <li><b>Malignant Hyperthermia:</b> Uncoupled mitochondrial respiration elevates core body temperature to 42°C–44°C, denaturing myofibrillar proteins.</li>\n  <li><b>Zenker's Rhabdomyolysis:</b> Massive calcium influx triggers widespread <b>Zenker's coagulative necrosis of skeletal and cardiac muscle fibres</b>.</li>\n  <li><b>Myoglobinuria & Renal Failure:</b> Lysis of skeletal muscle releases massive amounts of <b>myoglobin</b> into the bloodstream (myoglobinemia). In the acidic urine, myoglobin precipitates into dense, obstructive casts in renal tubules, producing acute tubular necrosis (<b>myoglobinuric nephrosis</b>) and fatal uremic renal failure.</li>\n</ol>\n<p><b>Gross Lesions:</b> Skeletal muscles of hindlimbs and lumbar back are swollen, pale, friable, dry, resembling cooked chicken meat (white muscle streaks); subendocardial hemorrhages; kidneys are enlarged, dark brown-black, with dark coffee-colored urine in the bladder.</p>",
      "keyPoints": [
        "Trigger: Terror, violent physical pursuit, restraint, chemical immobilization in wild ungulates.",
        "Metabolic cascade: Catecholamine surge -> extreme anaerobic glycolysis -> severe lactic acidosis (pH < 6.8) -> hyperthermia.",
        "Muscle pathology: Zenker's coagulative necrosis; pale, dry, cooked chicken meat appearance.",
        "Renal pathology: Muscle myoglobin floods blood and precipitates in renal tubules -> myoglobinuric nephrosis (dark coffee-colored urine)."
      ],
      "table": null,
      "pyq": [
        "IVRI 2023",
        "RAJUVAS 2022",
        "GADVASU 2021",
        "KVAFSU 2020"
      ]
    },
    {
      "id": "u6-qa-19",
      "type": "short",
      "marks": 5,
      "question": "Describe Kyasanur Forest Disease (KFD) in Non-Human Primates: Flavivirus transmission, hemorrhagic pathology in langurs/macaques, and sentinel role of domestic cattle.",
      "topicId": "u6-t06",
      "answer": "<p><b>Etiology:</b> Kyasanur Forest Disease Virus (KFDV), an enveloped single-stranded RNA virus of the genus <i>Flavivirus</i> (Family <i>Flaviviridae</i>), endemic to the Western Ghats of India (Karnataka, Kerala, Goa, Maharashtra).</p>\n<p><b>Transmission & Sylvatic Cycle:</b> Transmitted by the bite of hard forest ticks, primarily <b>Haemaphysalis spinigera</b>. Forest rodents (shrews, white-tailed rats) serve as maintenance reservoir hosts.</p>\n<p><b>Pathology in Non-Human Primates:</b></p>\n<ul>\n  <li><b>Susceptible Species:</b> Black-faced langurs (<i>Semnopithecus entellus</i>) and bonnet macaques (<i>Macaca radiata</i>) are exceptionally susceptible hosts.</li>\n  <li><b>Pathogenesis:</b> KFDV has marked affinity for vascular endothelia and reticuloendothelial cells, inducing acute endothelial damage, severe thrombocytopenia, massive cytokine release, and consumptive coagulopathy (DIC).</li>\n  <li><b>Gross Lesions:</b> Severe <b>Hemorrhagic Fever</b>: widespread petechiae and ecchymoses on serosal and mucosal surfaces; massive epistaxis and gastrointestinal hemorrhage (stomach and intestines filled with blood-stained fluid); enlarged, congested liver and spleen with focal coagulative necrosis; marked pulmonary edema and alveolar hemorrhage. Monkeys die within 5 to 10 days of infection.</li>\n</ul>\n<p><b>Sentinel Role of Domestic Cattle:</b> Cattle grazing in forest fringes are bitten by <i>Haemaphysalis</i> ticks; cattle become infected and develop high neutralizing antibody titers, but <b>remain completely clinically immune without disease or lesions</b>. Finding dead monkeys on the forest floor is a statutory warning signal (sentinel event) alerting public health authorities to an imminent human KFD outbreak.</p>",
      "keyPoints": [
        "Etiology: KFD Flavivirus transmitted by Haemaphysalis spinigera forest ticks in Western Ghats, India.",
        "Primate susceptibility: Black-faced langurs and bonnet macaques suffer fatal hemorrhagic fever with multi-organ hemorrhages and DIC.",
        "Necropsy in monkeys: Gastrointestinal hemorrhage, epistaxis, pulmonary edema, focal hepatic/splenic necrosis.",
        "Sentinel hosts: Cattle seroconvert without disease; dead monkeys in the forest signal imminent human outbreaks."
      ],
      "table": null,
      "pyq": [
        "IVRI 2023",
        "TANUVAS 2021",
        "KVAFSU 2020",
        "GADVASU 2019"
      ]
    },
    {
      "id": "u6-qa-20",
      "type": "short",
      "marks": 5,
      "question": "Describe Malicious Poisoning of Wild Carnivores (Tigers and Leopards): Use of agricultural carbamates (Carbofuran), cholinergic crisis, frothy lungs, and blue granules in stomach contents.",
      "topicId": "u6-t07",
      "answer": "<p><b>Forensic Context:</b> Retaliatory or poaching mortality of free-ranging tigers (<i>Panthera tigris</i>) and leopards (<i>Panthera pardus</i>) in India frequently involves illegal baiting of livestock kill carcasses with agricultural pesticides, predominantly <b>Carbofuran (Furadan)</b>.</p>\n<p><b>Mechanism of Toxicity:</b> Carbofuran is an ultra-potent, reversible <b>carbamate inhibitor of acetylcholinesterase (AChE)</b>. Ingestion causes immediate, massive accumulation of acetylcholine (ACh) at muscarinic, nicotinic, and central nervous synapses:</p>\n<ul>\n  <li><i>Muscarinic Hyperstimulation (SLUDGE):</i> Salivation, Lacrimation, Urination, Defecation, Gastric hypermotility, and <b>Bronchoconstriction with massive alveolar fluid hypersecretion</b>.</li>\n  <li><i>Nicotinic Effects:</i> Muscle tremors, tetanic spasms, and motor paralysis.</li>\n  <li>Death occurs within <b>15 to 30 minutes</b> from acute chemical asphyxiation ('drowning in pulmonary secretions') and respiratory center failure.</li>\n</ul>\n<p><b>Cardinal Forensic Post-Mortem Lesions:</b></p>\n<ul>\n  <li><b>Undigested Meat with Blue/Pink Granules:</b> Commercial Carbofuran formulation consists of small, uniform, spherical, bright blue, purple, or pink-dyed microgranules. Necropsy reveals intact, undigested meat in the stomach lumen coated with distinct <b>bright blue granules</b> (confirms death occurred before gastric digestion could begin).</li>\n  <li><b>Massive Pulmonary Edema & Froth:</b> Lungs are dark, heavy, waterlogged; trachea and bronchi are completely filled with persistent white or blood-stained foam oozing from nostrils and mouth.</li>\n  <li>Severe subepicardial and subendocardial ecchymotic hemorrhages.</li>\n  <li>Pinpoint constricted pupils (miosis); severe congestion of meningeal vessels.</li>\n</ul>",
      "keyPoints": [
        "Context: Poaching or retaliation against tigers/leopards using baited carcasses laced with Carbofuran (Furadan).",
        "Mechanism: Potent acetylcholinesterase (AChE) inhibition causing violent cholinergic crisis and respiratory failure in <30 min.",
        "Forensic hallmark: Undigested meat in stomach containing bright blue or pink microgranules.",
        "Necropsy lesions: Massive pulmonary edema with copious tracheal foam, miosis, subendocardial hemorrhages."
      ],
      "table": null,
      "pyq": [
        "IVRI 2023",
        "GADVASU 2022",
        "KVAFSU 2021",
        "RAJUVAS 2020"
      ]
    },
    {
      "id": "u6-qa-21",
      "type": "long",
      "marks": 12,
      "question": "Describe in detail the Pathology of Common Viral and Bacterial Diseases of Laboratory Mice and Rats: Tyzzer's disease, Mousepox, Murine Coronavirus (MHV), Lymphocytic Choriomeningitis (LCM), and *Mycoplasma pulmonis* respiratory disease.",
      "topicId": "u6-t01",
      "answer": "<p>Maintaining health status in laboratory rodent colonies is essential for valid biomedical research; specific pathogens produce distinctive lesions across rodent systems.</p>\n\n<h3>1. Tyzzer's Disease — <i>Clostridium piliforme</i></h3>\n<ul>\n  <li><b>Pathogenesis:</b> Stress or immunosuppression triggers spore germination. Bacteria cross intestinal enterocytes into mesenteric venules, colonizing the liver via the portal vein.</li>\n  <li><b>Gross Pathology:</b> Hallmark: <b>Multifocal, circumscribed, pinpoint to 2 mm grayish-white necrotic foci</b> scattered evenly across all liver lobes; acute hemorrhagic typhlitis (watery diarrhea); pale streaks of myocardial necrosis.</li>\n  <li><b>Histopathology:</b> Centrilobular coagulative hepatic necrosis. <b>Warthin-Starry silver stain</b> reveals dark black intracellular filamentous bacilli arranged in criss-crossing bundles resembling <b>'sheaves of wheat'</b> within viable hepatocytes at the margins of necrotic foci.</li>\n</ul>\n\n<h3>2. Infectious Ectromelia (Mousepox) — <i>Orthopoxvirus</i></h3>\n<ul>\n  <li><b>Pathogenesis:</b> Inoculation via skin scratches; viraemic dissemination to liver, spleen, and skin.</li>\n  <li><b>Visceral Form:</b> Acute death without skin lesions; liver and spleen show extensive coagulative necrosis ('mottled necrotic spleen').</li>\n  <li><b>Cutaneous Form:</b> Endothelial replication triggers digital arteriolar microvascular thrombosis, causing ischemic coagulative necrosis and dry mummified gangrene, leading to spontaneous <b>amputation of feet, digits, and tail ('ectromelia')</b>.</li>\n  <li><b>Inclusions:</b> Pathognomonic <b>eosinophilic intracytoplasmic Marchal bodies</b> in hyperplastic epidermal cells.</li>\n</ul>\n\n<h3>3. Mouse Hepatitis Virus (MHV) — <i>Murine Coronavirus</i></h3>\n<ul>\n  <li><b>Pathogenesis:</b> Highly contagious; transmitted via aerosols or fecal-oral route. Viral spike protein binds CEACAM1 receptors on enterocytes, hepatocytes, and vascular endothelia.</li>\n  <li><b>Lesions:</b>\n    <ul>\n      <li><i>Enteric Strains:</i> Severe ballooning of the intestine with translucent, fluid-filled gut wall in infant mice (infantile diarrhea).</li>\n      <li><i>Respiratory / Hepatic Strains:</i> Liver is pale, swollen, mottled with multifocal pale necrotic foci.</li>\n    </ul>\n  </li>\n  <li><b>Histopathology Hallmark:</b> Formation of diagnostic <b>multinucleated syncytial giant cells</b> derived from fused hepatocytes, endothelial cells, or enterocytes, with multifocal coagulative hepatocellular necrosis.</li>\n</ul>\n\n<h3>4. Lymphocytic Choriomeningitis (LCM) — <i>Arenavirus</i></h3>\n<ul>\n  <li><b>Pathogenesis:</b> Natural host is the wild house mouse (<i>Mus musculus</i>); important <b>zoonotic pathogen</b>. In mice, clinical outcome depends strictly on immunocompetence:\n    <ul>\n      <li><i>In-utero / Neonatal infection:</i> Immune tolerance develops; mice remain asymptomatic lifelong carriers, continually shedding virus in saliva and urine.</li>\n      <li><i>Adult infection:</i> Robust $CD8^+$ cytotoxic T-cell response attacks viral antigens in the choroid plexus and meninges.</li>\n    </ul>\n  </li>\n  <li><b>Histopathology:</b> Severe lymphocytic choriomeningitis: dense, wide <b>perivascular and leptomeningeal lymphocytic infiltration</b> of the choroid plexus, cerebral meninges, and ependyma.</li>\n</ul>\n\n<h3>5. Murine Respiratory Mycoplasmosis (MRM) — <i>Mycoplasma pulmonis</i></h3>\n<ul>\n  <li><b>Pathogenesis:</b> Chronic, progressive upper and lower respiratory disease of rats and mice. <i>M. pulmonis</i> attaches via adhesins to cilia of respiratory epithelium, halting ciliary motility.</li>\n  <li><b>Gross Pathology:</b>\n    <ul>\n      <li>Red-brown 'porphyrin tears' around eyes and nostrils (chromodacryorrhea from Harderian glands).</li>\n      <li>Lungs show mottled, dark red consolidation, cobblestone-like raised surface, and <b>extensive bronchiectasis</b> (bronchi are massively dilated, thickened, and filled with thick caseous pus).</li>\n    </ul>\n  </li>\n  <li><b>Histopathology:</b> Striking, massive <b>peribronchial and perivascular lymphocytic cuffing</b>; dense lymphoid aggregates collar the bronchioles, compressing airways.</li>\n</ul>",
      "keyPoints": [
        "Tyzzer's (C. piliforme): Multifocal white hepatic necrotic foci; Warthin-Starry silver stain shows 'sheaves of wheat' bacilli in border hepatocytes.",
        "Mousepox (Ectromelia): Endothelial thrombosis causing dry gangrenous amputation of digits/tail; Marchal bodies (intracytoplasmic inclusions).",
        "MHV (Coronavirus): Infantile diarrhea; multifocal hepatic necrosis with pathognomonic multinucleated syncytial giant cells.",
        "LCM (Arenavirus): Zoonotic; immune-mediated choriomeningitis with dense lymphocytic infiltration of meninges and choroid plexus.",
        "M. pulmonis: Chromodacryorrhea (red porphyrin tears), cobblestone lungs, bronchiectasis, and massive peribronchial lymphocytic cuffing."
      ],
      "table": null,
      "pyq": [
        "IVRI 2023",
        "TANUVAS 2022",
        "GADVASU 2021",
        "RAJUVAS 2020"
      ]
    },
    {
      "id": "u6-qa-22",
      "type": "long",
      "marks": 12,
      "question": "Describe in detail the Pathology of Laboratory Rabbits: Pasteurellosis (*P. multocida*), Myxomatosis (Leporipoxvirus), Rabbit Viral Hemorrhagic Disease (Calicivirus), Enterotoxaemia (*Clostridium spiroforme*), and Hepatic Coccidiosis (*E. stiedae*).",
      "topicId": "u6-t04",
      "answer": "<p>Laboratory and domestic rabbits (<i>Oryctolagus cuniculus</i>) possess unique anatomical and physiological features (hindgut cecal fermentation, lack of emetic center) making them vulnerable to specific devastating pathologies.</p>\n\n<h3>1. Pasteurellosis (*Pasteurella multocida*)</h3>\n<ul>\n  <li><b>The 'Snuffles' Syndrome:</b> Chronic mucopurulent rhinitis with sneezing and <b>matted fur on medial forepaws</b> from rubbing nasal exudate.</li>\n  <li><b>Otitis Media & Interna ('Wry Neck'):</b> Ascending Eustachian tube infection fills tympanic bullae with thick caseous pus, causing vestibular damage with severe <b>torticollis</b> (head tilted 90°–180°, continuous rolling).</li>\n  <li><b>Fibrinous Pleuropneumonia & Pyometra:</b> Acute fibrinous pleuritis, pericarditis, lung consolidation, and massive purulent uterine distension in does.</li>\n</ul>\n\n<h3>2. Myxomatosis — <i>Myxoma virus</i> (Leporipoxvirus)</h3>\n<ul>\n  <li><b>Transmission:</b> Mechanically transmitted by biting mosquitoes (<i>Aedes</i>) and fleas.</li>\n  <li><b>Pathogenesis:</b> Virus targets mesenchymal connective tissue cells, inducing proliferation of undifferentiated stellate mesenchymal cells that secrete abundant acid mucopolysaccharides.</li>\n  <li><b>Gross Lesions:</b> Pathognomonic: <b>Gelatinous, edematous, mucinous subcutaneous tumors ('Myxomas')</b> around the eyelids, base of ears, snout, and anogenital region. Severe blepharoconjunctivitis seals eyelids shut with thick purulent exudate; drooping swollen ears and swollen muzzle give the classic <b>'Lion Head' appearance</b>.</li>\n</ul>\n\n<h3>3. Rabbit Viral Hemorrhagic Disease (RHD / VHD) — <i>Lagovirus</i> (Calicivirus)</h3>\n<ul>\n  <li><b>Pathogenesis:</b> Extremely contagious calicivirus (RHDV-1 and RHDV-2). Strict tropism for hepatocytes and vascular endothelia. Severe viral replication triggers acute, massive, diffuse hepatocellular necrosis and widespread systemic disseminated intravascular coagulation (DIC).</li>\n  <li><b>Gross Pathology:</b>\n    <ul>\n      <li>Sudden peracute death; bloody, foamy, serosanguinous discharge from nostrils.</li>\n      <li><b>Liver:</b> Pale, yellowish-tan or grey-brown, swollen, extremely friable, with prominent reticulated lobular architecture.</li>\n      <li><b>Lungs:</b> Heavy, wet, dark red, with massive alveolar hemorrhage and frothy fluid in trachea.</li>\n      <li><b>Spleen:</b> Enormously enlarged (2–3 times normal), congested, dark purple with rounded edges.</li>\n      <li>Widespread petechial and ecchymotic hemorrhages across all serosal surfaces.</li>\n    </ul>\n  </li>\n</ul>\n\n<h3>4. Enterotoxaemia — <i>Clostridium spiroforme</i></h3>\n<ul>\n  <li><b>Pathogenesis:</b> Triggered by administration of inappropriate antibiotics (penicillin, lincomycin, ampicillin) or sudden dietary weaning stress (low fiber, high starch). Normal Gram-positive flora is suppressed, allowing explosive proliferation of <b>Clostridium spiroforme</b>.</li>\n  <li><b>Toxin:</b> Produces a potent binary <b>iota-like enterotoxin</b> that destroys cecal enterocytes.</li>\n  <li><b>Gross Lesions:</b> <b>Acute Hemorrhagic Typhlitis</b>: cecum is massively dilated, filled with watery, dark brown, foul-smelling fluid and gas; cecal serosa shows intense paint-brush hemorrhages; mucosa is denuded and ulcerated. Death occurs from hypovolemic shock and toxemia.</li>\n</ul>\n\n<h3>5. Hepatic Coccidiosis — <i>Eimeria stiedae</i></h3>\n<ul>\n  <li><b>Pathogenesis:</b> Ingested oocysts excyst in gut; sporozoites travel via portal venules to invade <b>intrahepatic bile duct epithelial cells</b>.</li>\n  <li><b>Gross Lesions:</b> Tremendous hepatomegaly; liver surface and cut section display pathognomonic <b>raised, yellowish-white, branching cords and nodular cysts</b> following the exact anatomical distribution of intrahepatic bile ducts, filled with creamy bile packed with oocysts.</li>\n  <li><b>Microscopy:</b> Dramatic papillary epithelial hyperplasia with epithelial cells packed with developing schizonts and oocysts.</li>\n</ul>",
      "keyPoints": [
        "Pasteurellosis: Snuffles (matted paws), Wry Neck / Torticollis (tympanic bulla pus), pleuropneumonia, pyometra.",
        "Myxomatosis: Leporipoxvirus; gelatinous subcutaneous mucinous swellings on face/eyelids ('Lion Head').",
        "RHD (Calicivirus): Peracute death with bloody nostrils; massive hepatocellular necrosis, huge congested spleen, hemorrhagic lungs (DIC).",
        "Enterotoxaemia (C. spiroforme): Triggered by antibiotics/low fiber; iota toxin causes massive hemorrhagic typhlitis in cecum.",
        "Hepatic coccidiosis (E. stiedae): Biliary ductal invasion; pathognomonic raised yellowish-white branching cords on liver."
      ],
      "table": null,
      "pyq": [
        "IVRI 2023",
        "TANUVAS 2022",
        "GADVASU 2021",
        "KVAFSU 2020"
      ]
    },
    {
      "id": "u6-qa-23",
      "type": "long",
      "marks": 12,
      "question": "Describe Capture Myopathy and Stress-Related Pathologies in Captive and Free-Ranging Wild Animals: Etiology, four clinical syndromes, physiological cascade, macroscopic and microscopic muscle/renal lesions, and prevention.",
      "topicId": "u6-t09",
      "answer": "<p><b>Definition:</b> Capture Myopathy (Exertional Rhabdomyolysis) is a non-infectious metabolic and degenerative disease of wild animals (ungulates, birds, marine mammals) precipitated by intense muscular exertion, psychological fear, and stress during capture, chemical immobilization, restraint, or transport.</p>\n\n<h3>1. Etiology and Predisposing Factors</h3>\n<ul>\n  <li>Prolonged pursuit using vehicles, nets, bomas, or darting.</li>\n  <li>Immobilization with opioid neuroleptics without adequate reversal.</li>\n  <li>High ambient temperature and humidity (heat stress accelerates mortality).</li>\n  <li>Repeated struggling in transport crates; transportation without proper ventilation.</li>\n  <li>Nutritional deficiency of Vitamin E or Selenium (depletes antioxidant reserves).</li>\n</ul>\n\n<h3>2. The Physiological-Pathological Cascade</h3>\n<ol>\n  <li><b>Psychological Terror & Catecholamine Storm:</b> Extreme sympathetic storm releases massive adrenaline and noradrenaline, inducing intense peripheral vasoconstriction and tachycardia.</li>\n  <li><b>Severe Anaerobic Glycolysis:</b> Heavy physical struggling exhausts cellular glycogen; muscle switches to anaerobic metabolism, generating massive amounts of <b>lactic acid</b>.</li>\n  <li><b>Systemic Metabolic Acidosis:</b> Lactic acid floods circulation; blood pH drops precipitously (<6.8), suppressing myocardial contractility and causing peripheral vasodilation (hypotensive shock).</li>\n  <li><b>Malignant Hyperthermia:</b> Uncoupled mitochondrial phosphorylation spikes core temperature to 42°C–44°C, causing denaturation of cytoplasmic and structural myofibrillar proteins.</li>\n  <li><b>Zenker's Rhabdomyolysis:</b> Intracellular calcium overload activates endogenous phospholipases and calpain proteases, producing extensive <b>Zenker's coagulative necrosis of skeletal and cardiac myofibres</b>.</li>\n  <li><b>Myoglobinuria & Renal Failure:</b> Damaged myofibres release myoglobin into blood. Free myoglobin is filtered by glomeruli into acidic tubular fluid, where it precipitates into obstructing cast formations, inducing acute tubular necrosis (<b>myoglobinuric nephrosis</b>).</li>\n</ol>\n\n<h3>3. The Four Clinical-Pathological Syndromes</h3>\n<ul>\n  <li><b>1. Capture Shock Syndrome:</b> Acute death within 1 to 6 hours during or immediately following pursuit; animal collapses with hyperthermia (>42°C), tachycardia, hypotension, ventricular fibrillation, and metabolic acidosis.</li>\n  <li><b>2. Ataxic Myoglobinuric Syndrome:</b> Develops 1 to 3 days post-capture; animal exhibits stiff, stilted gait, muscle tremors, recumbency, and excretion of <b>dark reddish-brown to black urine (myoglobinuria)</b>; death occurs from acute uremic renal failure.</li>\n  <li><b>3. Ruptured Muscle Syndrome:</b> Occurs 2 to 4 days post-capture; severe necrosis of large muscle bellies (especially the <b>gastrocnemius muscle</b>) results in complete physical rupture of the muscle belly or tendon, leading to dropped hock and inability to stand.</li>\n  <li><b>4. Delayed-Peracute Syndrome:</b> Occurs several days to weeks post-capture; animal appears clinically stable, but sudden re-exertion or stress triggers sudden cardiac collapse and death due to extensive myocardial necrosis.</li>\n</ul>\n\n<h3>4. Gross and Microscopic Lesions</h3>\n<ul>\n  <li><b>Skeletal Muscle:</b> Thigh, gluteal, and lumbar muscles are swollen, dry, friable, and pale, with grayish-white streaks and chalky patches resembling <b>'cooked fish or chicken breast'</b>; intermuscular hemorrhage and edema.</li>\n  <li><b>Heart:</b> Severe subendocardial and subepicardial ecchymotic hemorrhages; pale necrotic bands across papillary muscles and left ventricular myocardium.</li>\n  <li><b>Kidneys:</b> Markedly enlarged, swollen, dark reddish-brown or black; bladder contains dark coffee-colored or blackish urine.</li>\n  <li><b>Histopathology:</b> Severe Zenker's degeneration: myofibres are fragmented, swollen, hyalinized, lacking striations, with calcium salt deposition; renal proximal convoluted tubules show coagulative necrosis and dense reddish-orange myoglobin casts.</li>\n</ul>\n\n<h3>5. Prevention Protocol</h3>\n<ul>\n  <li>Minimize pursuit time to <b>less than 10–15 minutes</b> (never pursue animals to exhaustion).</li>\n  <li>Capture during cool early morning hours; shade and actively cool captured animals with cold water.</li>\n  <li>Administer fast-acting neuroleptics (azaperone) and immediate chemical reversals (naltrexone / atipamezole).</li>\n  <li>Prophylactic administration of <b>Vitamin E/Selenium</b>, sodium bicarbonate (IV for acidosis), and anti-inflammatory fluids.</li>\n</ul>",
      "keyPoints": [
        "Etiology: Intense physical pursuit, capture, restraint, and terror in wild ungulates.",
        "Cascade: Sympathetic surge -> anaerobic glycolysis -> lactic acidosis (pH < 6.8) -> hyperthermia -> Zenker's necrosis -> myoglobinuric renal failure.",
        "Four syndromes: 1. Capture shock (peracute collapse), 2. Ataxic myoglobinuric (dark brown urine, renal failure), 3. Ruptured muscle (gastrocnemius tear), 4. Delayed-peracute (sudden myocardial death).",
        "Gross: Skeletal muscle resembles 'cooked chicken meat'; kidneys swollen black with coffee-colored urine.",
        "Prevention: Pursuit <10-15 min, cool morning hours, water dousing, sodium bicarbonate IV, Vitamin E/Selenium."
      ],
      "table": null,
      "pyq": [
        "IVRI 2023",
        "RAJUVAS 2022",
        "GADVASU 2021",
        "KVAFSU 2020"
      ]
    },
    {
      "id": "u6-qa-24",
      "type": "long",
      "marks": 12,
      "question": "Describe Forensic Wildlife Pathology and Malicious Poisoning: Protocol for investigating wildlife mortality, forensic necropsy of wild carnivores (tigers/leopards), characteristic lesions of pesticide/chemical toxicities (Carbamates, Organophosphates, Zinc phosphide, Strychnine), gunshot and snare injuries, and chain of custody.",
      "topicId": "u6-t07",
      "answer": "<p><b>Definition:</b> Forensic Wildlife Pathology is the application of veterinary pathology to legal investigations involving protected wildlife mortality, poaching, retaliatory poisoning, and illegal trade under the <b>Wildlife Protection Act (1972)</b>.</p>\n\n<h3>1. Investigation Protocol & Chain of Custody</h3>\n<ul>\n  <li><b>Crime Scene Investigation:</b> Secure the scene; record GPS coordinates; photograph carcass <i>in situ</i> from multiple angles with a scale bar before touching; inspect surrounding ground for footprints, snare wires, bait carcasses, pesticide containers, and dead insects/birds.</li>\n  <li><b>Chain of Custody:</b> Strict, unbroken chronological documentary log tracking every individual handling the carcass and specimens. All evidence jars must be sealed with official brass seals in the presence of designated forest officials and police.</li>\n</ul>\n\n<h3>2. Forensic Necropsy of Wild Carnivores (Tigers / Leopards)</h3>\n<ul>\n  <li><b>External Examination:</b> Measure total body length, tail length, shoulder height, canine length, and tooth wear; check for presence of all claws, canines, and whiskers (rule out poaching for body parts); scan full carcass with a metal detector for lead pellets or snare wires.</li>\n  <li><b>Traumatic Injuries:</b>\n    <ul>\n      <li><i>Wire Snare Injury:</i> Deep, circumferential, linear laceration around the waist, neck, or paw with underlying tissue necrosis, gangrene, and fractured bones.</li>\n      <li><i>Gunshot Injury:</i> Circular entry wound with inverted margins, abrasion collar, and singeing (if close-range); exit wound larger with everted margins; retrieve lead pellets/bullets for ballistic matching (never use metal forceps directly on lead bullets to preserve rifling marks!).</li>\n    </ul>\n  </li>\n</ul>\n\n<h3>3. Characteristic Lesions of Common Wildlife Poisons</h3>\n<ol>\n  <li><b>Carbamates (Carbofuran / Furadan):</b>\n    <ul>\n      <li><i>Usage:</i> Agricultural pesticide commonly used by poachers/villagers on baited cattle carcasses.</li>\n      <li><i>Mechanism:</i> Reversible inhibition of acetylcholinesterase (AChE) causing peracute cholinergic storm.</li>\n      <li><i>Lesions:</i> Undigested meat in stomach containing diagnostic <b>bright blue, purple, or pink microgranules</b>; copious, white/blood-stained froth filling trachea and nostrils (massive pulmonary edema); pinpoint miosis; subendocardial hemorrhages. Death occurs within minutes.</li>\n    </ul>\n  </li>\n  <li><b>Organophosphates (Phorate, Monocrotophos):</b>\n    <ul>\n      <li><i>Mechanism:</i> Irreversible inhibition of AChE.</li>\n      <li><i>Lesions:</i> Extreme pulmonary edema and tracheal froth, intense congestion of meningeal vessels, cyanosis, garlic-like chemical odor in opened stomach.</li>\n    </ul>\n  </li>\n  <li><b>Zinc Phosphide (Rodenticide):</b>\n    <ul>\n      <li><i>Mechanism:</i> In gastric acid, zinc phosphide releases toxic <b>Phosphine ($PH_3$) gas</b>, which blocks cytochrome oxidase and generates intense reactive oxygen species.</li>\n      <li><i>Hallmark:</i> Pungent, unmistakable <b>garlic / decaying fish / acetylene odor</b> when the stomach is opened; severe, dark hemorrhagic corrosive gastritis with mucosal sloughing; dark, tarry unclotted blood and pulmonary edema.</li>\n    </ul>\n  </li>\n  <li><b>Strychnine (Dog/Carnivore Poisoning):</b>\n    <ul>\n      <li><i>Mechanism:</i> Competitive antagonist of glycine at inhibitory interneurons in spinal cord.</li>\n      <li><i>Lesions:</i> Extreme extensor muscle rigidity, rigid 'sawhorse' posture; rapid onset of rigor mortis; stomach is typically empty; severe venous congestion and cyanosis.</li>\n    </ul>\n  </li>\n</ol>\n\n<h3>4. Collection of Viscera for Forensic Chemical Analysis</h3>\n<ul>\n  <li>Collect whole stomach and contents, 500 g liver, both kidneys, heart, brain, and mesenteric fat.</li>\n  <li>Place in clean glass jars; <b>preserve in saturated sodium chloride brine solution</b> (never use formalin!).</li>\n  <li>Include a sealed control jar containing the brine solution alone; dispatch to Government Forensic Science Laboratory (FSL) under official seal.</li>\n</ul>",
      "keyPoints": [
        "Crime scene & custody: In-situ photography with scale, GPS, metal detector scan, unbroken chain of custody with official brass seal.",
        "Snare & gunshot: Circumferential wire groove with gangrene; ballistic recovery without scratching lead pellets.",
        "Carbofuran: Bright blue/pink microgranules in undigested stomach meat; pulmonary edema froth; pinpoint miosis.",
        "Zinc phosphide: Intense garlic/acetylene odor on opening stomach; severe corrosive hemorrhagic gastritis.",
        "Strychnine: Glycine inhibition; extreme extensor rigidity and rapid rigor mortis.",
        "Viscera dispatch: Saturated brine solution in glass jars (no formalin); send to FSL with blank preservative control."
      ],
      "table": null,
      "pyq": [
        "IVRI 2023",
        "RAJUVAS 2022",
        "GADVASU 2021",
        "KVAFSU 2020"
      ]
    },
    {
      "id": "u6-qa-25",
      "type": "long",
      "marks": 12,
      "question": "Describe Zoonotic and Emerging Infectious Diseases of Wildlife in India: Kyasanur Forest Disease (KFD), Wildlife Anthrax in elephants and rhinos, Bovine Tuberculosis in free-ranging and captive wildlife, and Rabies in wild canids — Epidemiology, transmission, pathology, and public health significance.",
      "topicId": "u6-t06",
      "answer": "<p>The interface between free-ranging wildlife, domestic livestock, and human populations creates hot spots for transmission of lethal zoonotic and transmissible pathogens.</p>\n\n<h3>1. Kyasanur Forest Disease (KFD / 'Monkey Fever') — <i>Flavivirus</i></h3>\n<ul>\n  <li><b>Epidemiology:</b> Endemic to the Western Ghats (Karnataka, Kerala, Tamil Nadu, Goa, Maharashtra). Vector is the hard tick <b>Haemaphysalis spinigera</b>. Shrews and forest rodents serve as reservoir hosts.</li>\n  <li><b>Pathology in Monkeys:</b> Black-faced langurs and bonnet macaques suffer severe fatal hemorrhagic fever: extensive internal hemorrhages in gut, lungs, and liver, profound thrombocytopenia, and DIC.</li>\n  <li><b>Public Health Significance:</b> Zoonotic transmission to forest workers, woodcutters, and tribal populations via tick bites; causes acute bi-phasic hemorrhagic fever in humans (fever, prostration, multi-organ bleeding, and neurological signs) with 5–10% case fatality. Monkey deaths serve as statutory sentinels.</li>\n</ul>\n\n<h3>2. Wildlife Anthrax — <i>Bacillus anthracis</i></h3>\n<ul>\n  <li><b>Epidemiology:</b> Strikes Asian elephants (<i>Elephas maximus</i>), Indian one-horned rhinoceroses (<i>Rhinoceros unicornis</i>), and wild ungulates in national parks (Kaziranga, Mudumalai, Bandipur). Spores persist in soil wallows.</li>\n  <li><b>Pathology in Elephants & Rhinos:</b> Peracute apoplexy and death within hours:\n    <ul>\n      <li><i>Elephants:</i> Massive gelatinous dependent subcutaneous edema of the throat, trunk base, and brisket (Oedema Factor); dark tarry unclotted blood oozing from trunk and anus; <b>complete absence of rigor mortis</b>; severe hemorrhagic enteritis.</li>\n      <li><i>Rhinos:</i> Acute pulmonary edema, hemorrhagic tracheitis, and enormous splenomegaly.</li>\n    </ul>\n  </li>\n  <li><b>Public Health Significance:</b> Highly dangerous zoonosis (cutaneous, pulmonary, and intestinal anthrax in tribal communities and poachers handling carcasses); carcass must never be opened; dispose by whole incineration on site.</li>\n</ul>\n\n<h3>3. Tuberculosis in Wildlife — <i>Mycobacterium bovis</i> and <i>M. tuberculosis</i></h3>\n<ul>\n  <li><b>Epidemiology:</b> Affects captive and free-ranging wild ungulates (spotted deer, sambar, blackbuck), captive elephants, and captive wild felids (tigers, leopards, lions in zoological parks) through spillover from infected domestic cattle or human attendants.</li>\n  <li><b>Gross Pathology:</b>\n    <ul>\n      <li><i>Wild Ungulates (Deer):</i> Massive, multifocal, yellow caseating and calcifying granulomatous nodules (tubercles) in lungs, retropharyngeal, and mediastinal lymph nodes; pleural pearl disease.</li>\n      <li><i>Captive Big Cats (Tigers/Lions):</i> Contracted from feeding infected beef; primary lesions are in the <b>digestive tract and mesenteric lymph nodes</b> (massive caseous mesenteric lymphadenitis, intestinal ulcers, and disseminated miliary tubercles in lungs/liver).</li>\n      <li><i>Elephants:</i> Chronic pulmonary tuberculosis (*M. tuberculosis*) causing extensive lung cavitation, coughing, and weight loss.</li>\n    </ul>\n  </li>\n  <li><b>Public Health Significance:</b> Major zoonotic risk to zoo handlers, mahouts, and veterinarians; diagnosis confirmed by trunk wash PCR, gamma-interferon assay, and post-mortem ZN staining.</li>\n</ul>\n\n<h3>4. Wildlife Rabies — <i>Rabies Lyssavirus</i></h3>\n<ul>\n  <li><b>Epidemiology:</b> Maintained in wild canid vectors in India: jackals (<i>Canis aureus</i>), wolves (<i>Canis lupus</i>), and foxes (<i>Vulpes bengalensis</i>). Acts as a permanent sylvatic reservoir spilling over to domestic livestock and rural humans.</li>\n  <li><b>Pathology:</b> Non-suppurative encephalomyelitis with perivascular lymphocytic cuffing, neuronophagia, and <b>Negri bodies</b> in hippocampal neurons and Purkinje cells.</li>\n  <li><b>Public Health Significance:</b> Rabid jackals and wolves show loss of fear, entering tribal villages and aggressively biting multiple humans and cattle; 100% fatal encephalitis without prompt post-exposure prophylaxis (PEP).</li>\n</ul>",
      "keyPoints": [
        "KFD: Tick-borne flavivirus (Haemaphysalis); fatal hemorrhagic fever in langurs/macaques; zoonotic to forest workers (biphasic hemorrhagic fever).",
        "Wildlife Anthrax: Elephants/rhinos in Kaziranga/Bandipur; unclotted tarry blood, massive throat/brisket edema, absent rigor mortis; dangerous zoonosis.",
        "Wildlife TB: M. bovis spillover from cattle to deer and captive tigers (alimentary form from raw beef) and elephants (pulmonary cavitation).",
        "Wildlife Rabies: Jackals, wolves, and foxes maintain sylvatic cycle in India; aggressive attacks on humans; Negri bodies in brain."
      ],
      "table": null,
      "pyq": [
        "IVRI 2023",
        "TANUVAS 2022",
        "GADVASU 2021",
        "KVAFSU 2020"
      ]
    }
  ],
  "prac-unit-1": [],
  "prac-unit-2": [],
  "prac-unit-3": [],
  "prac-unit-4": [],
  "prac-unit-5": [],
  "prac-unit-6": []
};
