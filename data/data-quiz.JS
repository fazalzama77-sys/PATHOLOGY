/* ============================================================
   data-quiz.JS  —  THE MASTER QUESTION BANK (1,080 QUESTIONS)
   ------------------------------------------------------------
   Units 1 to 6: Exactly 180 questions per unit
   Ratio: 2 : 1 : 1 (90 MCQs, 45 True/False, 45 Fill in the Blanks)
   Total: 540 MCQs + 270 True/False + 270 Fill in Blanks = 1,080 Questions
   Categorized by thematic sub-sections for targeted modular revision.
   ============================================================ */

var quizBank = {
  "unit-1": {
    "mcq": [
      {
        "q": "Who is universally regarded as the Father of Modern Cellular Pathology?",
        "o": [
          "Rudolf Virchow",
          "Robert Koch",
          "Louis Pasteur",
          "William Osler"
        ],
        "a": 0,
        "e": "Rudolf Virchow published 'Cellular Pathology' in 1858 establishing 'Omnis cellula e cellula'.",
        "topicId": "u1-t01",
        "subSection": "u1-s1",
        "diff": 1
      },
      {
        "q": "The primary ultrastructural site of ATP generation during aerobic respiration affected early in cell injury is:",
        "o": [
          "Mitochondria",
          "Endoplasmic reticulum",
          "Golgi apparatus",
          "Lysosome"
        ],
        "a": 0,
        "e": "Mitochondrial damage leads to rapid ATP depletion, loss of Na+/K+ ATPase activity, and cellular swelling.",
        "topicId": "u1-t08",
        "subSection": "u1-s1",
        "diff": 1
      },
      {
        "q": "Which of the following is an example of an intrinsic cause of disease in animals?",
        "o": [
          "Chromosomal defect",
          "Ionizing radiation",
          "Clostridium perfringens",
          "Lead ingestion"
        ],
        "a": 0,
        "e": "Genetic and chromosomal abnormalities are intrinsic causes originating from within the genome.",
        "topicId": "u1-t02",
        "subSection": "u1-s1",
        "diff": 1
      },
      {
        "q": "Hydropic degeneration is primarily characterized microscopically by:",
        "o": [
          "Pale, vacuolated cytoplasm filled with water due to Na+/K+ pump failure",
          "Intracytoplasmic lipid droplets displacing the nucleus",
          "Eosinophilic hyaline droplets in renal tubules",
          "Dense pyknotic nucleus with ruptured cell membrane"
        ],
        "a": 0,
        "e": "Hydropic swelling occurs when energy failure disables membrane sodium pumps, retaining water inside the cytosol.",
        "topicId": "u1-t08",
        "subSection": "u1-s1",
        "diff": 1
      },
      {
        "q": "Which special histochemical stain is diagnostic for demonstrating neutral fat/lipids in frozen tissue sections?",
        "o": [
          "Oil Red O",
          "Periodic Acid-Schiff",
          "Prussian Blue",
          "Congo Red"
        ],
        "a": 0,
        "e": "Oil Red O and Sudan III/IV stain neutral lipids bright orange-red; routine paraffin processing dissolves fat.",
        "topicId": "u1-t06",
        "subSection": "u1-s1",
        "diff": 1
      },
      {
        "q": "The pathognomonic gross appearance of severe hepatic lipidosis (fatty liver) in high-yielding dairy cows is:",
        "o": [
          "Enlarged, pale yellowish organ with rounded borders that floats in water",
          "Small, shrunken, dark reddish organ with sharp borders",
          "Nutmeg liver with dark red central vein congestion",
          "Firm, gritty organ with nodular regeneration"
        ],
        "a": 0,
        "e": "Fatty liver is enlarged, pale yellow, greasy on touch, has rounded borders, and fragments float in water.",
        "topicId": "u1-t06",
        "subSection": "u1-s1",
        "diff": 2
      },
      {
        "q": "Glycogen accumulation in hepatocytes is classically demonstrated by which histochemical reaction?",
        "o": [
          "PAS positive, diastase-sensitive",
          "Oil Red O positive",
          "Alcian blue positive at pH 2.5",
          "Von Kossa positive"
        ],
        "a": 0,
        "e": "Glycogen stains magenta with PAS and is digested by diastase/amylase, distinguishing it from mucin.",
        "topicId": "u1-t06",
        "subSection": "u1-s1",
        "diff": 2
      },
      {
        "q": "Under polarization microscopy, amyloid stained with Congo Red exhibits pathognomonic:",
        "o": [
          "Apple-green birefringence",
          "Golden-yellow fluorescence",
          "Bright red luminescence",
          "Silvery-white refringence"
        ],
        "a": 0,
        "e": "The beta-pleated sheet conformation of amyloid produces diagnostic apple-green birefringence under crossed polars.",
        "topicId": "u1-t07",
        "subSection": "u1-s1",
        "diff": 2
      },
      {
        "q": "Amyloid associated with chronic prolonged inflammation in domestic animals (Secondary Amyloidosis) is composed of:",
        "o": [
          "AA protein",
          "AL protein",
          "Beta-amyloid peptide",
          "Transthyretin"
        ],
        "a": 0,
        "e": "Secondary reactive amyloidosis consists of AA (amyloid A) protein derived from serum amyloid A (SAA) synthesized by hepatocytes.",
        "topicId": "u1-t07",
        "subSection": "u1-s1",
        "diff": 2
      },
      {
        "q": "Hyaline droplets in the proximal convoluted renal tubular epithelium represent:",
        "o": [
          "Excessive reabsorption of filtered plasma proteins",
          "Intracellular viral inclusion bodies",
          "Amyloid fibrils",
          "Lipofuscin pigments"
        ],
        "a": 0,
        "e": "Proteinuria causes renal proximal tubular epithelial cells to pinocytose excess albumin, forming pink hyaline droplets.",
        "topicId": "u1-t08",
        "subSection": "u1-s1",
        "diff": 2
      },
      {
        "q": "Fatty change (steatosis) in the liver most frequently results from impaired synthesis of which essential carrier?",
        "o": [
          "Apoproteins",
          "Albumin",
          "Ferritin",
          "Transferrin"
        ],
        "a": 0,
        "e": "Triglycerides must complex with apoproteins to form VLDL for export; protein deficiency traps fat in hepatocytes.",
        "topicId": "u1-t06",
        "subSection": "u1-s1",
        "diff": 2
      },
      {
        "q": "The term 'etiology' in pathology strictly refers to:",
        "o": [
          "The primary causal agent or cause of a disease",
          "The sequence of events from contact to lesion",
          "The functional consequences of a lesion",
          "The structural changes seen at necropsy"
        ],
        "a": 0,
        "e": "Etiology is the cause, while pathogenesis is the mechanism of development.",
        "topicId": "u1-t01",
        "subSection": "u1-s1",
        "diff": 1
      },
      {
        "q": "Which organ is the most frequent and clinically significant site of secondary amyloid deposition in dogs?",
        "o": [
          "Kidney (glomeruli)",
          "Spleen",
          "Adrenal cortex",
          "Myocardium"
        ],
        "a": 0,
        "e": "Renal glomerular amyloidosis causes severe proteinuria, nephrotic syndrome, and renal failure in dogs.",
        "topicId": "u1-t07",
        "subSection": "u1-s1",
        "diff": 2
      },
      {
        "q": "Which physical agent produces cell injury primarily via free radical generation from water radiolysis?",
        "o": [
          "Ionizing radiation",
          "Ultraviolet light",
          "Low temperature",
          "High hydrostatic pressure"
        ],
        "a": 0,
        "e": "Ionizing radiation splits H2O into hydroxyl (OH•) and hydrogen free radicals, damaging DNA and membranes.",
        "topicId": "u1-t02",
        "subSection": "u1-s1",
        "diff": 2
      },
      {
        "q": "Sago spleen in animals refers to amyloid deposition predominantly in:",
        "o": [
          "Splenic Malpighian corpuscles (white pulp)",
          "Splenic red pulp sinusoids",
          "Splenic capsule and trabeculae",
          "Subcapsular sinuses"
        ],
        "a": 0,
        "e": "Amyloid restricted to the lymphoid follicles of the spleen resembles boiled sago grains grossly.",
        "topicId": "u1-t07",
        "subSection": "u1-s1",
        "diff": 2
      },
      {
        "q": "Lardaceous spleen occurs when amyloid is deposited diffusely in:",
        "o": [
          "Red pulp cords and sinusoids",
          "White pulp follicles only",
          "Trabecular muscular walls",
          "Splenic arterioles only"
        ],
        "a": 0,
        "e": "Lardaceous spleen involves extensive red pulp deposition giving a large, waxy, map-like cut surface.",
        "topicId": "u1-t07",
        "subSection": "u1-s1",
        "diff": 2
      },
      {
        "q": "Fatty infiltration (adiposity) differs from fatty degeneration (steatosis) in that infiltration is:",
        "o": [
          "Accumulation of mature lipocytes in stroma/interstitial tissue",
          "Accumulation of triglycerides inside parenchymal cells",
          "Intracellular cholesterol clefting",
          "Lipofuscin wear-and-tear pigment deposition"
        ],
        "a": 0,
        "e": "Fatty infiltration is stromal ingrowth of adult adipocytes into tissues like heart or pancreas without parenchymal cell injury.",
        "topicId": "u1-t06",
        "subSection": "u1-s1",
        "diff": 3
      },
      {
        "q": "Zenker's degeneration is a specific hyaline degeneration affecting which tissue in sheep with white muscle disease?",
        "o": [
          "Striated skeletal and cardiac muscle",
          "Smooth muscle of the gut",
          "Renal tubular epithelium",
          "Vascular endothelium"
        ],
        "a": 0,
        "e": "Zenker's degeneration produces shiny, swollen, pale, hyaline necrosis of skeletal muscle fibers.",
        "topicId": "u1-t08",
        "subSection": "u1-s1",
        "diff": 2
      },
      {
        "q": "Which nuclear alteration represents irreversible chromatin condensation and shrinkage in necrotic cells?",
        "o": [
          "Pyknosis",
          "Karyorrhexis",
          "Karyolysis",
          "Chromatolysis"
        ],
        "a": 0,
        "e": "Pyknosis is nuclear shrinkage and increased basophilia; karyorrhexis is fragmentation, karyolysis is fading.",
        "topicId": "u1-t09",
        "subSection": "u1-s2",
        "diff": 1
      },
      {
        "q": "The hallmark histopathological feature of coagulative necrosis is:",
        "o": [
          "Preservation of the basic architectural tissue outline with loss of cellular details",
          "Complete enzymatic dissolution of tissue into liquid pus",
          "Cheesy, structureless granular debris with loss of outline",
          "Saponification of peripancreatic fat"
        ],
        "a": 0,
        "e": "Acid denaturation of structural and enzymatic proteins preserves the shadowy 'tombstone' tissue architecture.",
        "topicId": "u1-t09",
        "subSection": "u1-s2",
        "diff": 1
      },
      {
        "q": "Liquefactive necrosis is typically observed in ischemic injury to which organ?",
        "o": [
          "Brain and spinal cord (CNS)",
          "Kidney",
          "Myocardium",
          "Spleen"
        ],
        "a": 0,
        "e": "The CNS has high lipid/water content and little fibrous stroma, leading to rapid softening and liquefaction (malacia).",
        "topicId": "u1-t09",
        "subSection": "u1-s2",
        "diff": 1
      },
      {
        "q": "Caseous necrosis in domestic animals is classic for which chronic infectious granuloma?",
        "o": [
          "Tuberculosis",
          "Anthrax",
          "Blackleg",
          "Colibacillosis"
        ],
        "a": 0,
        "e": "Mycobacterium bovis creates a cheesy, pasty, yellowish-white amorphous necrotic mass with mineralization.",
        "topicId": "u1-t09",
        "subSection": "u1-s2",
        "diff": 1
      },
      {
        "q": "Fat necrosis with chalky white soap formation (saponification) typically accompanies:",
        "o": [
          "Acute necrotizing pancreatitis",
          "Congestive heart failure",
          "Chronic glomerulonephritis",
          "Pulmonary atelectasis"
        ],
        "a": 0,
        "e": "Pancreatic lipases split triglycerides into fatty acids, which combine with calcium to form insoluble chalky soaps.",
        "topicId": "u1-t09",
        "subSection": "u1-s2",
        "diff": 2
      },
      {
        "q": "Wet gangrene differs from dry gangrene primarily because wet gangrene involves:",
        "o": [
          "Invasion by putrefactive and gas-producing bacteria on moist tissue with venous stasis",
          "Arterial occlusion in dry extremities with mummification and no bacterial infection",
          "Pure chemical burning without microbial contamination",
          "Intracellular apoptosis triggered by granzyme B"
        ],
        "a": 0,
        "e": "Wet gangrene develops in moist internal organs (lungs, intestines) with bacterial saprophytic putrefaction and foul odor.",
        "topicId": "u1-t11",
        "subSection": "u1-s2",
        "diff": 2
      },
      {
        "q": "Gas gangrene (Blackleg) in cattle is etiologically caused by:",
        "o": [
          "Clostridium chauvoei",
          "Clostridium tetani",
          "Bacillus anthracis",
          "Corynebacterium pseudotuberculosis"
        ],
        "a": 0,
        "e": "Clostridium chauvoei spores germinate in bruised muscle producing necrotizing and gas-forming toxins.",
        "topicId": "u1-t11",
        "subSection": "u1-s2",
        "diff": 1
      },
      {
        "q": "Apoptosis is distinguished from necrosis by all of the following features EXCEPT:",
        "o": [
          "Elicitation of intense inflammatory response with neutrophilic infiltration",
          "Energy-dependent, programmed cell deletion",
          "Integrity of cell membrane maintained with apoptotic bodies",
          "Internucleosomal DNA fragmentation by endonucleases"
        ],
        "a": 0,
        "e": "Apoptosis does NOT elicit an inflammatory response because apoptotic bodies are rapidly cleared by macrophages.",
        "topicId": "u1-t10",
        "subSection": "u1-s2",
        "diff": 2
      },
      {
        "q": "The executioner caspases responsible for cleaving cellular substrates during apoptosis are:",
        "o": [
          "Caspases 3 and 7",
          "Caspases 8 and 9",
          "Caspases 1 and 4",
          "Caspase 12 only"
        ],
        "a": 0,
        "e": "Caspases 8/9 are initiators; caspases 3, 6, and 7 are executioners that dismantle the cell.",
        "topicId": "u1-t10",
        "subSection": "u1-s2",
        "diff": 3
      },
      {
        "q": "Dystrophic calcification occurs in:",
        "o": [
          "Dead, degenerate, or necrotic tissue with normal serum calcium levels",
          "Normal living tissues associated with elevated serum calcium",
          "Bones of animals receiving excessive vitamin D",
          "Tissues following severe hyperparathyroidism"
        ],
        "a": 0,
        "e": "Dystrophic calcification is local deposition in dead/necrotic tissue despite normal blood calcium and phosphorus.",
        "topicId": "u1-t13",
        "subSection": "u1-s2",
        "diff": 2
      },
      {
        "q": "Metastatic calcification in cattle is classically induced by grazing which toxic plant?",
        "o": [
          "Solanum malacoxylon (Cestrum diurnum)",
          "Lantana camara",
          "Pteridium aquilinum",
          "Gossypium hirsutum"
        ],
        "a": 0,
        "e": "Solanum malacoxylon contains 1,25-dihydroxycholecalciferol glycosides causing hypercalcaemia and metastatic calcification (Enzootic calcinosis).",
        "topicId": "u1-t13",
        "subSection": "u1-s2",
        "diff": 3
      },
      {
        "q": "Which special histological stain reveals calcium mineral deposits as deep brownish-black granules?",
        "o": [
          "Von Kossa",
          "Prussian Blue",
          "Congo Red",
          "Gram stain"
        ],
        "a": 0,
        "e": "Von Kossa silver reduction reacts with calcium phosphates/carbonates, depositing metallic silver (black).",
        "topicId": "u1-t13",
        "subSection": "u1-s2",
        "diff": 2
      },
      {
        "q": "Post-mortem rigor mortis is caused by:",
        "o": [
          "Depletion of ATP preventing actin-myosin detachment in muscle fibers",
          "Excessive release of acetylcholine at motor end-plates",
          "Rapid proliferation of putrefactive bacteria",
          "Accumulation of lactic acid alone"
        ],
        "a": 0,
        "e": "Without ATP, the myosin cross-bridges remain locked to actin filaments, producing generalized rigidity.",
        "topicId": "u1-t10",
        "subSection": "u1-s2",
        "diff": 2
      },
      {
        "q": "Post-mortem hypostatic congestion (livor mortis) is distinguished from antemortem congestion because livor mortis:",
        "o": [
          "Shifts with changes in gravitational position of the cadaver during early hours",
          "Has an accompanying line of demarcation and inflammatory cellular exudate",
          "Results in severe tissue infarction with thrombus formation",
          "Never disappears upon washing or pressure"
        ],
        "a": 0,
        "e": "Livor mortis is passive gravitational pooling in down-side vessels with no vascular or cellular inflammatory reaction.",
        "topicId": "u1-t10",
        "subSection": "u1-s2",
        "diff": 2
      },
      {
        "q": "Pseudomelanosis observed on the abdominal organs during necropsy is due to:",
        "o": [
          "Combination of hydrogen sulphide from bacteria with iron from lysed RBCs forming FeS",
          "Excessive melanin synthesis by post-mortem melanocytes",
          "Bile imbibition from the gall bladder",
          "Intracellular hemosiderin deposition"
        ],
        "a": 0,
        "e": "H2S produced by intestinal bacteria combines with haemoglobin iron to form black iron sulphide (FeS).",
        "topicId": "u1-t10",
        "subSection": "u1-s2",
        "diff": 2
      },
      {
        "q": "Post-mortem clot in a cardiac chamber is distinguished from an antemortem thrombus because the post-mortem clot:",
        "o": [
          "Is moist, shiny, elastic, unattached, and takes the shape of the vessel ('currant jelly' / 'chicken fat')",
          "Is dry, friable, granular, and firmly anchored to the endothelial wall",
          "Displays distinct laminations called the Lines of Zahn",
          "Produces infarction in the supplied tissue"
        ],
        "a": 0,
        "e": "Post-mortem clots are unattached, glistening, elastic, and easily pulled free without tearing endothelium.",
        "topicId": "u1-t10",
        "subSection": "u1-s2",
        "diff": 2
      },
      {
        "q": "Fibrinoid necrosis is classically seen in which pathological condition?",
        "o": [
          "Immune-mediated vasculitis and malignant hypertension",
          "Pulmonary tuberculosis",
          "Pancreatic fat saponification",
          "Cerebral infarction (stroke)"
        ],
        "a": 0,
        "e": "Fibrinoid necrosis occurs when antigen-antibody complexes and leaking fibrin insudate into arteriolar walls.",
        "topicId": "u1-t09",
        "subSection": "u1-s2",
        "diff": 3
      },
      {
        "q": "Which enzyme is released from injured cells into serum and serves as a sensitive biomarker for hepatocellular necrosis in dogs?",
        "o": [
          "Alanine Aminotransferase (ALT)",
          "Amylase",
          "Lipase",
          "Creatine Kinase (CK)"
        ],
        "a": 0,
        "e": "ALT is concentrated in canine/feline hepatocyte cytoplasm and leaks rapidly into circulation upon necrosis.",
        "topicId": "u1-t09",
        "subSection": "u1-s2",
        "diff": 2
      },
      {
        "q": "Active hyperaemia is mediated primarily by:",
        "o": [
          "Arteriolar dilatation driven by vasoactive catabolites or neurogenic stimuli",
          "Obstruction to venous outflow from an organ",
          "Endothelial detachment and platelet aggregation",
          "Hypoalbuminaemia reducing plasma oncotic pressure"
        ],
        "a": 0,
        "e": "Hyperaemia is an active arteriolar process flooding the capillary bed with oxygenated, bright red blood.",
        "topicId": "u1-t03",
        "subSection": "u1-s3",
        "diff": 1
      },
      {
        "q": "Chronic Passive Congestion (CPC) of the liver classically produces which pathognomonic gross appearance?",
        "o": [
          "Nutmeg liver",
          "Sago liver",
          "Tigroid liver",
          "Morocco leather liver"
        ],
        "a": 0,
        "e": "Nutmeg liver is alternating dark red (congested centrilobular zones) and yellow/tan (fatty periportal zones).",
        "topicId": "u1-t03",
        "subSection": "u1-s3",
        "diff": 1
      },
      {
        "q": "'Heart failure cells' found in the pulmonary alveoli during chronic pulmonary congestion are:",
        "o": [
          "Alveolar macrophages laden with golden-brown hemosiderin pigment",
          "Hypertrophied type II pneumocytes",
          "Extravasated viable neutrophils",
          "Desquamated endothelial cells"
        ],
        "a": 0,
        "e": "Alveolar macrophages phagocytose diapedesed RBCs from congested capillaries, storing iron as hemosiderin.",
        "topicId": "u1-t03",
        "subSection": "u1-s3",
        "diff": 2
      },
      {
        "q": "Which primary Starling force alteration is the leading cause of generalized subcutaneous oedema (anasarca) in parasitic bottle-jaw?",
        "o": [
          "Decreased plasma colloid osmotic (oncotic) pressure",
          "Increased capillary hydrostatic pressure",
          "Lymphatic obstruction",
          "Sodium retention by adrenal adenoma"
        ],
        "a": 0,
        "e": "Blood-sucking parasites (Haemonchus) cause severe hypoalbuminaemia, lowering intravascular oncotic pressure.",
        "topicId": "u1-t04",
        "subSection": "u1-s3",
        "diff": 1
      },
      {
        "q": "Transudate is clearly differentiated from exudate by which characteristic?",
        "o": [
          "Low protein content (< 2.5 g/dL) and specific gravity < 1.015",
          "High protein content (> 3.0 g/dL) and specific gravity > 1.020",
          "Large numbers of degenerate neutrophils",
          "Spontaneous clotting on exposure to air"
        ],
        "a": 0,
        "e": "Transudate is a non-inflammatory filtrate with low protein and low cellularity.",
        "topicId": "u1-t04",
        "subSection": "u1-s3",
        "diff": 1
      },
      {
        "q": "Which three factors constitute Virchow's Triad in the pathogenesis of thrombosis?",
        "o": [
          "Endothelial injury, abnormal blood flow, and hypercoagulability",
          "Hypoxia, acidosis, and cellular swelling",
          "Hyperaemia, congestion, and oedema",
          "Vasodilatation, stasis, and emigration"
        ],
        "a": 0,
        "e": "Virchow's Triad: 1. Endothelial damage, 2. Stasis/turbulence, 3. Hypercoagulability.",
        "topicId": "u1-t05",
        "subSection": "u1-s3",
        "diff": 1
      },
      {
        "q": "Lines of Zahn observed in thrombi microscopically consist of alternating layers of:",
        "o": [
          "Pale platelets/fibrin and dark red blood cells",
          "Neutrophils and necrotic debris",
          "Calcium salts and collagen fibers",
          "Amyloid fibrils and proteoglycans"
        ],
        "a": 0,
        "e": "Lines of Zahn represent flowing blood laminations of pale platelet-fibrin layers and red cell layers.",
        "topicId": "u1-t05",
        "subSection": "u1-s3",
        "diff": 2
      },
      {
        "q": "An arterial thrombus typically differs from a venous thrombus in that an arterial thrombus is:",
        "o": [
          "Pale, dry, friable, and forms in high-flow turbulence",
          "Red, gelatinous, soft, and forms in low-flow stasis",
          "Always detached and floating free in the lumen",
          "Lacking fibrin meshwork entirely"
        ],
        "a": 0,
        "e": "Arterial thrombi are platelet-rich (white/pale thrombi) created by endothelial injury and rapid turbulent flow.",
        "topicId": "u1-t05",
        "subSection": "u1-s3",
        "diff": 2
      },
      {
        "q": "The most frequent site of verminous thrombosis in horses causing spasmodic colic is:",
        "o": [
          "Cranial mesenteric artery (due to Strongylus vulgaris larvae)",
          "Pulmonary artery",
          "Renal artery",
          "Portal vein"
        ],
        "a": 0,
        "e": "Strongylus vulgaris L4 larvae migrate under cranial mesenteric arterial intima, inducing arteritis and thrombosis.",
        "topicId": "u1-t05",
        "subSection": "u1-s3",
        "diff": 2
      },
      {
        "q": "An embolus is defined as:",
        "o": [
          "A detached intravascular solid, liquid, or gaseous mass carried by blood to a distant site",
          "A stationary clot attached to the endothelial wall",
          "A localized area of ischemic necrosis",
          "Extravasation of erythrocytes into interstitial spaces"
        ],
        "a": 0,
        "e": "An embolus travels downstream in the vascular tree until it lodges in a vessel too small to pass.",
        "topicId": "u1-t05",
        "subSection": "u1-s3",
        "diff": 1
      },
      {
        "q": "Pale (white/anemic) infarcts characteristically occur following arterial occlusion in solid organs with:",
        "o": [
          "End-arterial circulation and compact parenchyma (e.g., kidney, spleen, heart)",
          "Dual blood supply (e.g., lung, liver)",
          "Extensive anastomotic collaterals (e.g., small intestine)",
          "Loose spongy connective tissue"
        ],
        "a": 0,
        "e": "In dense solid organs with single end-arterial supply, blood cannot enter the ischemic area, leaving a wedge-shaped pale infarct.",
        "topicId": "u1-t05",
        "subSection": "u1-s3",
        "diff": 2
      },
      {
        "q": "Red (haemorrhagic) infarcts are typically seen in organs with:",
        "o": [
          "Dual blood supply or extensive anastomoses (e.g., lung, intestine)",
          "Dense solid parenchyma like renal cortex",
          "Only a single functional end-artery",
          "Strictly avascular cartilage"
        ],
        "a": 0,
        "e": "Lungs (pulmonary + bronchial arteries) and intestines allow blood to seep into the necrotic zone, rendering it dark red.",
        "topicId": "u1-t05",
        "subSection": "u1-s3",
        "diff": 2
      },
      {
        "q": "Petechiae are defined as pinpoint haemorrhages measuring:",
        "o": [
          "1 to 2 mm in diameter",
          "3 to 5 mm in diameter",
          "1 to 2 cm in diameter",
          "Large pooling haematomas"
        ],
        "a": 0,
        "e": "Petechiae: 1-2 mm; Purpura: 3-5 mm; Ecchymoses: > 1-2 cm.",
        "topicId": "u1-t03",
        "subSection": "u1-s3",
        "diff": 1
      },
      {
        "q": "Haemorrhage by rhexis means extravasation of blood resulting from:",
        "o": [
          "Mechanical tear, rupture, or transection of the vascular wall",
          "Diapedesis of red cells through intact widened endothelial junctions",
          "Depletion of plasma clotting factors alone",
          "Congenital absence of platelets"
        ],
        "a": 0,
        "e": "Per rhexin = physical tear/rupture of vessel wall; Per diapedesin = passage of RBCs through intact microvessels.",
        "topicId": "u1-t03",
        "subSection": "u1-s3",
        "diff": 2
      },
      {
        "q": "The accumulation of non-inflammatory serous fluid in the peritoneal cavity is termed:",
        "o": [
          "Ascites (hydroperitoneum)",
          "Hydrothorax",
          "Hydropericardium",
          "Anasarca"
        ],
        "a": 0,
        "e": "Ascites is fluid accumulation within the peritoneal sac.",
        "topicId": "u1-t04",
        "subSection": "u1-s3",
        "diff": 1
      },
      {
        "q": "Which type of shock is caused by widespread systemic vasodilatation and endothelial injury induced by bacterial LPS endotoxin?",
        "o": [
          "Septic shock",
          "Hypovolaemic shock",
          "Cardiogenic shock",
          "Neurogenic shock"
        ],
        "a": 0,
        "e": "Gram-negative endotoxemia releases TNF-alpha and IL-1, generating excessive nitric oxide (NO) and septic shock.",
        "topicId": "u1-t03",
        "subSection": "u1-s3",
        "diff": 2
      },
      {
        "q": "Disseminated Intravascular Coagulation (DIC) is characterized pathophysiologically by:",
        "o": [
          "Widespread microthrombosis followed by consumptive coagulopathy and secondary haemorrhage",
          "Primary failure of cardiac contraction",
          "Massive localized arterial thrombosis without coagulopathy",
          "Isolated deficiency of Factor VIII"
        ],
        "a": 0,
        "e": "Systemic activation of clotting exhausts platelets and fibrinogen, paradoxically resulting in severe bleeding.",
        "topicId": "u1-t05",
        "subSection": "u1-s3",
        "diff": 3
      },
      {
        "q": "In the kidney, renal cortical infarcts typically assume which gross geometrical shape?",
        "o": [
          "Wedge-shaped with the apex towards the medulla and base at the capsule",
          "Circular with a depressed center",
          "Linear branching cords",
          "Concentric target-like rings"
        ],
        "a": 0,
        "e": "Occlusion of an interlobular or arcuate artery produces a wedge-shaped territory corresponding to the fan of its branching.",
        "topicId": "u1-t05",
        "subSection": "u1-s3",
        "diff": 2
      },
      {
        "q": "The five classical cardinal signs of acute inflammation were originally formulated by Celsus, with the fifth added by:",
        "o": [
          "Rudolf Virchow (Functio laesa)",
          "Galen",
          "John Hunter",
          "Julius Cohnheim"
        ],
        "a": 0,
        "e": "Celsus described Rubor, Calor, Tumor, Dolor; Rudolf Virchow added Functio laesa (loss of function).",
        "topicId": "u1-t16",
        "subSection": "u1-s4",
        "diff": 1
      },
      {
        "q": "The first transient vascular response following acute microvascular injury is:",
        "o": [
          "Transient arteriolar vasoconstriction (lasting seconds)",
          "Immediate persistent vasodilatation",
          "Endothelial retraction and stasis",
          "Emigration of lymphocytes"
        ],
        "a": 0,
        "e": "Neurogenic reflex induces brief arteriolar vasoconstriction for a few seconds before robust vasodilatation begins.",
        "topicId": "u1-t16",
        "subSection": "u1-s4",
        "diff": 2
      },
      {
        "q": "Which leukocyte is the first and predominant cell to emigrate into tissue during acute bacterial inflammation in mammals?",
        "o": [
          "Neutrophil",
          "Macrophage",
          "Eosinophil",
          "Plasma cell"
        ],
        "a": 0,
        "e": "Neutrophils respond first (6-24 hrs) because of high blood concentration and rapid response to chemokines.",
        "topicId": "u1-t17",
        "subSection": "u1-s4",
        "diff": 1
      },
      {
        "q": "In birds, which cell is the functional homologue of the mammalian neutrophil?",
        "o": [
          "Heterophil",
          "Eosinophil",
          "Basophil",
          "Thrombocyte"
        ],
        "a": 0,
        "e": "Avian heterophils have eosinophilic spindle-shaped cytoplasmic granules and lack myeloperoxidase.",
        "topicId": "u1-t17",
        "subSection": "u1-s4",
        "diff": 1
      },
      {
        "q": "The rolling phase of leukocyte adhesion to endothelial walls is mediated by which adhesion molecules?",
        "o": [
          "Selectins (E-, P-, and L-selectin)",
          "Integrins (LFA-1, Mac-1)",
          "Immunoglobulin superfamily (ICAM-1, VCAM-1)",
          "Cadherins"
        ],
        "a": 0,
        "e": "Selectins mediate low-affinity rolling; integrins and ICAM-1 mediate firm, high-affinity arrest.",
        "topicId": "u1-t17",
        "subSection": "u1-s4",
        "diff": 2
      },
      {
        "q": "The primary chemical mediator released pre-formed from mast cell granules that causes immediate arteriolar vasodilatation and endothelial gap formation is:",
        "o": [
          "Histamine",
          "Leukotriene B4",
          "Interleukin-6",
          "Platelet Activating Factor"
        ],
        "a": 0,
        "e": "Histamine is stored in mast cell granules and causes rapid H1-receptor-mediated vasodilatation and venular leakage.",
        "topicId": "u1-t18",
        "subSection": "u1-s4",
        "diff": 1
      },
      {
        "q": "Which arachidonic acid metabolite generated via the 5-lipoxygenase pathway is a potent chemoattractant for neutrophils?",
        "o": [
          "Leukotriene B4 (LTB4)",
          "Prostaglandin E2 (PGE2)",
          "Thromboxane A2",
          "Prostacyclin (PGI2)"
        ],
        "a": 0,
        "e": "LTB4 is a powerful neutrophil activator and chemotactic agent.",
        "topicId": "u1-t18",
        "subSection": "u1-s4",
        "diff": 2
      },
      {
        "q": "Pus in a suppurative or purulent inflammatory exudate is primarily composed of:",
        "o": [
          "Dead and dying neutrophils, liquefactive necrotic tissue, and protein-rich fluid",
          "Pure fibrin strands and erythrocytes",
          "Eosinophils and Charcot-Leyden crystals",
          "Caseous cheese-like lipid debris"
        ],
        "a": 0,
        "e": "Suppuration is liquefactive necrosis generated by neutrophil lysosomal enzymes (proteases and elastases).",
        "topicId": "u1-t16",
        "subSection": "u1-s4",
        "diff": 1
      },
      {
        "q": "A localized accumulation of pus within a newly formed cavity surrounded by a fibrous capsule is called a/an:",
        "o": [
          "Abscess",
          "Phlegmon (cellulitis)",
          "Ulcer",
          "Sinus"
        ],
        "a": 0,
        "e": "An abscess is a focal circumscribed collection of purulent exudate; phlegmon is diffuse spreading purulent inflammation.",
        "topicId": "u1-t16",
        "subSection": "u1-s4",
        "diff": 1
      },
      {
        "q": "Fibrinous inflammation is typically encountered on which anatomical surfaces in cattle with shipping fever (Pasteurellosis)?",
        "o": [
          "Serous membranes (pleura, pericardium, peritoneum)",
          "Cutaneous epidermis",
          "Skeletal muscle stroma",
          "Cerebral grey matter"
        ],
        "a": 0,
        "e": "Severe endothelial injury lets large fibrinogen molecules escape and polymerize into a yellow-grey fibrin mesh over serosal surfaces.",
        "topicId": "u1-t16",
        "subSection": "u1-s4",
        "diff": 2
      },
      {
        "q": "Pseudomembranous (diphtheritic) inflammation is characterized by:",
        "o": [
          "Formation of a false membrane of necrotic epithelium and fibrin that leaves an ulcer when peeled off",
          "Accumulation of clear watery serous fluid inside mucosal blisters",
          "Complete restoration of normal architecture without necrosis",
          "Diffusely spreading phlegmonous infiltration"
        ],
        "a": 0,
        "e": "Diphtheritic membranes (e.g. swine swine dysentery, necrotic enteritis) are firmly adherent; stripping tears the submucosa.",
        "topicId": "u1-t16",
        "subSection": "u1-s4",
        "diff": 2
      },
      {
        "q": "Which cell is the diagnostic hallmark of chronic granulomatous inflammation?",
        "o": [
          "Epithelioid macrophage and multinucleated giant cell",
          "Eosinophil",
          "Neutrophil",
          "Mast cell"
        ],
        "a": 0,
        "e": "Granulomas consist of modified macrophages (epithelioid cells) surrounded by lymphocytes and fibroblasts.",
        "topicId": "u1-t17",
        "subSection": "u1-s4",
        "diff": 1
      },
      {
        "q": "Langhans giant cells, characteristic of tuberculosis, are identified by nuclei arranged in:",
        "o": [
          "A horseshoe or circular perimeter at the cell periphery",
          "A central haphazard clump",
          "A straight central row like a caterpillar",
          "Scattered paired owl-eye patterns"
        ],
        "a": 0,
        "e": "Langhans cells have peripheral, horseshoe-arranged nuclei, whereas foreign body giant cells have haphazard central nuclei.",
        "topicId": "u1-t17",
        "subSection": "u1-s4",
        "diff": 2
      },
      {
        "q": "Granulation tissue, the essential morphological hallmark of tissue repair, consists histologically of:",
        "o": [
          "Proliferating capillary buds (angiogenesis), plump fibroblasts, and loose extracellular matrix",
          "Dense avascular fibrous scar with acellular collagen",
          "Liquefactive necrotic debris mixed with degenerate neutrophils",
          "Mononuclear inflammatory cells without any blood vessels"
        ],
        "a": 0,
        "e": "Granulation tissue is pink, soft, granular tissue made of new proliferating delicate capillaries and fibroblasts.",
        "topicId": "u1-t20",
        "subSection": "u1-s4",
        "diff": 2
      },
      {
        "q": "Healing by first intention (primary union) occurs typically in wounds that are:",
        "o": [
          "Clean, uninfected, surgically incised, with closely opposed margins",
          "Large, open, infected, with extensive tissue loss",
          "Contaminated by foreign bodies and left unsutured",
          "Deep puncture wounds with extensive fat necrosis"
        ],
        "a": 0,
        "e": "First intention occurs when clean wound edges are directly apposed with minimal granulation and minimal scar.",
        "topicId": "u1-t20",
        "subSection": "u1-s4",
        "diff": 1
      },
      {
        "q": "Excessive formation of exuberant granulation tissue extending above the skin surface in horses is colloquially called:",
        "o": [
          "Proud flesh",
          "Keloid",
          "Hamartoma",
          "Choristoma"
        ],
        "a": 0,
        "e": "Proud flesh is exuberant granulation tissue on distal equine limbs that prevents re-epithelialization.",
        "topicId": "u1-t20",
        "subSection": "u1-s4",
        "diff": 2
      },
      {
        "q": "Which cytokine is recognized as the master profibrogenic growth factor driving collagen synthesis by fibroblasts?",
        "o": [
          "Transforming Growth Factor-beta (TGF-beta)",
          "Interleukin-1",
          "Tumour Necrosis Factor-alpha",
          "Histamine"
        ],
        "a": 0,
        "e": "TGF-beta stimulates fibroblast migration, proliferation, and heavy collagen synthesis while inhibiting collagen degradation.",
        "topicId": "u1-t20",
        "subSection": "u1-s4",
        "diff": 3
      },
      {
        "q": "Eosinophilic inflammation is most commonly provoked by:",
        "o": [
          "Parasitic infections (helminths) and allergic/IgE-mediated hypersensitivity reactions",
          "Acute pyogenic bacterial infections",
          "Viral inclusions",
          "Ischemic infarction"
        ],
        "a": 0,
        "e": "IL-5 and eotaxin mobilize eosinophils to target helminth parasites and allergic reactions.",
        "topicId": "u1-t17",
        "subSection": "u1-s4",
        "diff": 1
      },
      {
        "q": "Which endogenous, wear-and-tear pigment accumulates in non-dividing aging cells as a result of lipid peroxidation?",
        "o": [
          "Lipofuscin (brown atrophy pigment)",
          "Hemosiderin",
          "Melanin",
          "Bilirubin"
        ],
        "a": 0,
        "e": "Lipofuscin is an insoluble, golden-brown intracellular pigment composed of oxidized lipids and proteins.",
        "topicId": "u1-t12",
        "subSection": "u1-s5",
        "diff": 1
      },
      {
        "q": "Hemosiderin pigment is histochemically stained bright blue by which reaction?",
        "o": [
          "Perls' Prussian Blue",
          "Masson's Trichrome",
          "Periodic Acid-Schiff",
          "Alizarin Red S"
        ],
        "a": 0,
        "e": "Perls' reaction uses potassium ferrocyanide and dilute HCl to form blue ferric ferrocyanide (Prussian blue).",
        "topicId": "u1-t12",
        "subSection": "u1-s5",
        "diff": 1
      },
      {
        "q": "Anthracosis is an exogenous pigmentation caused by the inhalation and alveolar macrophage storage of:",
        "o": [
          "Carbon / coal particles",
          "Silica dust",
          "Asbestos fibers",
          "Iron oxide dust"
        ],
        "a": 0,
        "e": "Carbon particles are inert black pigments phagocytosed by alveolar macrophages and drained to bronchial lymph nodes.",
        "topicId": "u1-t12",
        "subSection": "u1-s5",
        "diff": 1
      },
      {
        "q": "Secondary (hepatogenous) photosensitization in ruminants is caused by the accumulation of which photodynamic phylloerythrin derivative?",
        "o": [
          "Phylloerythrin derived from chlorophyll digestion",
          "Hypericin",
          "Fagopyrin",
          "Protoporphyrin IX"
        ],
        "a": 0,
        "e": "Liver damage impairs excretion of phylloerythrin into bile, causing it to enter the skin and activate upon UV exposure.",
        "topicId": "u1-t14",
        "subSection": "u1-s5",
        "diff": 2
      },
      {
        "q": "Hypertrophy is strictly defined as an increase in the size of an organ or tissue resulting from an increase in the:",
        "o": [
          "Size of its individual parenchymal cells",
          "Number of its parenchymal cells",
          "Amount of extracellular matrix alone",
          "Water content of the cytoplasm"
        ],
        "a": 0,
        "e": "Hypertrophy is increased cell volume (common in non-dividing tissues like cardiac muscle); hyperplasia is increased cell number.",
        "topicId": "u1-t15",
        "subSection": "u1-s5",
        "diff": 1
      },
      {
        "q": "The reversible transformation of one adult differentiated cell type into another adult cell type is termed:",
        "o": [
          "Metaplasia",
          "Dysplasia",
          "Anaplasia",
          "Aplasia"
        ],
        "a": 0,
        "e": "Metaplasia is a phenotypic change (e.g. ciliated columnar respiratory epithelium turning into stratified squamous epithelium under smoke irritation).",
        "topicId": "u1-t15",
        "subSection": "u1-s5",
        "diff": 1
      },
      {
        "q": "Complete congenital absence of an organ along with its primitive embryological anlage/primordium is called:",
        "o": [
          "Agenesis",
          "Aplasia",
          "Hypoplasia",
          "Atrophy"
        ],
        "a": 0,
        "e": "Agenesis is complete failure of an organ and its primordium to form; aplasia has a rudimentary vestige.",
        "topicId": "u1-t15",
        "subSection": "u1-s5",
        "diff": 2
      },
      {
        "q": "Hypoplasia is defined as:",
        "o": [
          "Failure of an organ or tissue to develop to its full normal adult size",
          "Shrinkage of a previously fully developed normal organ",
          "Enlargement of an organ due to functional demand",
          "Disordered, atypical cellular proliferation"
        ],
        "a": 0,
        "e": "Hypoplasia is incomplete development (e.g. cerebellar hypoplasia in feline panleukopenia virus infection).",
        "topicId": "u1-t15",
        "subSection": "u1-s5",
        "diff": 1
      },
      {
        "q": "Cerebellar hypoplasia in kittens is classical for intrauterine infection by:",
        "o": [
          "Feline Panleukopenia Virus (Parvovirus)",
          "Feline Coronavirus",
          "Feline Herpesvirus-1",
          "Feline Calicivirus"
        ],
        "a": 0,
        "e": "Feline panleukopenia virus destroys rapidly dividing external germinal layer neurons of the fetal cerebellum.",
        "topicId": "u1-t15",
        "subSection": "u1-s5",
        "diff": 2
      },
      {
        "q": "Dysplasia in cellular pathology refers to:",
        "o": [
          "Disordered cellular growth and maturation with loss of architectural orientation and nuclear atypia",
          "A normal physiological expansion of cell number",
          "Programmed cell death by caspase activation",
          "Replacement of one normal tissue by another normal tissue"
        ],
        "a": 0,
        "e": "Dysplasia is premalignant atypia characterized by pleomorphism, hyperchromasia, and loss of polarity.",
        "topicId": "u1-t15",
        "subSection": "u1-s5",
        "diff": 2
      },
      {
        "q": "Type I Hypersensitivity (Immediate/Anaphylactic) is mediated primarily by which antibody isotype?",
        "o": [
          "IgE",
          "IgG",
          "IgM",
          "IgA"
        ],
        "a": 0,
        "e": "IgE binds to Fc-epsilon-RI on mast cells and basophils; antigen cross-linking triggers degranulation.",
        "topicId": "u1-t21",
        "subSection": "u1-s5",
        "diff": 1
      },
      {
        "q": "Which of the following is a classic example of Type II (Antibody-mediated cytotoxic) Hypersensitivity in animals?",
        "o": [
          "Neonatal Isoerythrolysis in foals",
          "Serum sickness",
          "Tuberculin skin test",
          "Anaphylaxis to penicillin"
        ],
        "a": 0,
        "e": "Neonatal isoerythrolysis involves maternal alloantibodies binding to foal RBC surface antigens causing complement lysis.",
        "topicId": "u1-t21",
        "subSection": "u1-s5",
        "diff": 2
      },
      {
        "q": "Type III Hypersensitivity is pathologically mediated by the deposition of:",
        "o": [
          "Circulating antigen-antibody immune complexes in vascular walls",
          "IgE on tissue mast cells",
          "CD8+ cytotoxic T lymphocytes killing infected cells",
          "Secretory IgA dimers on mucosal surfaces"
        ],
        "a": 0,
        "e": "Immune complexes deposit in microvasculature (e.g., glomerulonephritis, Arthus reaction), fixing complement and recruiting neutrophils.",
        "topicId": "u1-t21",
        "subSection": "u1-s5",
        "diff": 2
      },
      {
        "q": "The delayed-type hypersensitivity reaction (Type IV) utilized in the single intradermal tuberculin test is mediated by:",
        "o": [
          "Sensitized CD4+ Th1 lymphocytes and activated macrophages",
          "Circulating IgG antibodies",
          "Mast cell degranulation via IgE",
          "Membrane attack complex (C5b-9)"
        ],
        "a": 0,
        "e": "Type IV is cell-mediated; Th1 memory cells release IFN-gamma recruiting and activating macrophages over 48-72 hours.",
        "topicId": "u1-t21",
        "subSection": "u1-s5",
        "diff": 2
      },
      {
        "q": "Combined Immunodeficiency (CID) in Arabian foals is genetically caused by a defect in:",
        "o": [
          "DNA-dependent protein kinase (DNA-PKcs) affecting V(D)J recombination",
          "Bruton tyrosine kinase",
          "Complement component C3",
          "Integrin beta-2 subunit (LAD)"
        ],
        "a": 0,
        "e": "Equine CID foals cannot produce functional T or B cells due to a mutation in DNA-PK catalytic subunit.",
        "topicId": "u1-t21",
        "subSection": "u1-s5",
        "diff": 3
      },
      {
        "q": "Bovine Leukocyte Adhesion Deficiency (BLAD) in Holstein cattle is caused by a congenital deficiency of:",
        "o": [
          "CD18 (beta-2 integrin)",
          "Selectin P",
          "Intercellular adhesion molecule-1",
          "Interleukin-8 receptor"
        ],
        "a": 0,
        "e": "Lack of CD18 prevents firm adhesion and extravasation of neutrophils into infected tissues.",
        "topicId": "u1-t21",
        "subSection": "u1-s5",
        "diff": 3
      },
      {
        "q": "Primary photosensitization in animals occurs following ingestion of plants containing pre-formed photodynamic agents, such as:",
        "o": [
          "Hypericum perforatum (St. John's wort)",
          "Lantana camara",
          "Senecio jacobaea",
          "Microcystis aeruginosa"
        ],
        "a": 0,
        "e": "Hypericin from Hypericum is absorbed intact into blood and sensitizes unpigmented skin without liver injury.",
        "topicId": "u1-t14",
        "subSection": "u1-s5",
        "diff": 2
      },
      {
        "q": "Congenital porphyria (pink tooth) in cattle is an inborn error of metabolism leading to accumulation of:",
        "o": [
          "Uroporphyrin I and coproporphyrin I in bones and dentin",
          "Hemosiderin in splenic macrophages",
          "Bilirubin in elastic fibers of the aorta",
          "Lipofuscin in myocardium"
        ],
        "a": 0,
        "e": "Enzyme deficiency in heme synthesis causes porphyrins to deposit in bones and teeth, fluorescing bright red under UV light.",
        "topicId": "u1-t12",
        "subSection": "u1-s5",
        "diff": 2
      }
    ],
    "tf": [
      {
        "q": "General pathology investigates the basic structural and functional reactions of cells and tissues to abnormal stimuli.",
        "a": true,
        "e": "General pathology covers systemic reactions like injury, degenerations, inflammation, and healing.",
        "topicId": "u1-t01",
        "subSection": "u1-s1",
        "diff": 1
      },
      {
        "q": "Hypoxia and ischemia are interchangeable terms denoting identical physiological states.",
        "a": false,
        "e": "Hypoxia is oxygen deficiency; ischemia is loss of arterial perfusion, depriving tissues of both oxygen and metabolic substrates.",
        "topicId": "u1-t08",
        "subSection": "u1-s1",
        "diff": 1
      },
      {
        "q": "Hydropic degeneration is a completely reversible cellular alteration if the underlying injurious stimulus is removed in time.",
        "a": true,
        "e": "Restoration of ATP and oxygen allows Na+/K+ ATPase to pump out water and electrolytes, restoring cell volume.",
        "topicId": "u1-t08",
        "subSection": "u1-s1",
        "diff": 1
      },
      {
        "q": "Paraffin embedding procedures readily preserve neutral lipids for routine Haematoxylin and Eosin staining.",
        "a": false,
        "e": "Organic clearing solvents (xylene, alcohol) dissolve neutral lipids, leaving empty round vacuoles in H&E sections.",
        "topicId": "u1-t06",
        "subSection": "u1-s1",
        "diff": 1
      },
      {
        "q": "Amyloid is an amorphous, proteinaceous substance with a non-branching beta-pleated fibrillar structure.",
        "a": true,
        "e": "The cross-beta-sheet configuration gives amyloid its resistance to proteolysis and its Congo Red staining properties.",
        "topicId": "u1-t07",
        "subSection": "u1-s1",
        "diff": 1
      },
      {
        "q": "Primary amyloidosis in domestic animals is far more common than secondary reactive amyloidosis.",
        "a": false,
        "e": "Secondary (reactive AA) amyloidosis from chronic suppurative/inflammatory diseases is by far the most frequent form in animals.",
        "topicId": "u1-t07",
        "subSection": "u1-s1",
        "diff": 2
      },
      {
        "q": "Fatty liver in starved animals is caused by massive mobilization of non-esterified fatty acids (NEFA) from adipose reserves.",
        "a": true,
        "e": "Peripheral lipolysis floods the liver with NEFA exceeding its oxidation and VLDL secretion capacities.",
        "topicId": "u1-t06",
        "subSection": "u1-s1",
        "diff": 2
      },
      {
        "q": "Hyaline change represents a single specific chemical compound found exclusively in dead cells.",
        "a": false,
        "e": "Hyaline is a descriptive histological term for any glassy, homogeneous, eosinophilic appearance, not a single chemical entity.",
        "topicId": "u1-t08",
        "subSection": "u1-s1",
        "diff": 2
      },
      {
        "q": "Diastase pretreatment of histological sections digests glycogen, leaving PAS-negative clear spaces.",
        "a": true,
        "e": "Diastase (amylase) hydrolyzes glycogen; this enzyme digestion confirms glycogen identity against mucins.",
        "topicId": "u1-t06",
        "subSection": "u1-s1",
        "diff": 2
      },
      {
        "q": "Karyolysis refers to progressive enzymatic dissolution of nuclear chromatin by DNases in necrotic cells.",
        "a": true,
        "e": "Loss of basophilia due to enzymatic hydrolysis leaves an empty or faintly stained nuclear ghost.",
        "topicId": "u1-t09",
        "subSection": "u1-s2",
        "diff": 1
      },
      {
        "q": "Coagulative necrosis is the characteristic form of cell death observed in cerebral infarcts in domestic animals.",
        "a": false,
        "e": "Cerebral infarctions produce liquefactive necrosis (encephalomalacia) due to lack of fibrous stroma and high lipid content.",
        "topicId": "u1-t09",
        "subSection": "u1-s2",
        "diff": 1
      },
      {
        "q": "Caseous necrosis grossly resembles cottage cheese and is classically caused by Mycobacterium bovis.",
        "a": true,
        "e": "Lipid-rich mycobacterial cell walls inhibit complete enzymatic liquefaction, leaving pasty caseous debris.",
        "topicId": "u1-t09",
        "subSection": "u1-s2",
        "diff": 1
      },
      {
        "q": "Apoptosis is accompanied by cell membrane rupture and the spillage of cellular enzymes into surrounding tissue.",
        "a": false,
        "e": "Apoptotic cells form membrane-bound apoptotic bodies without leakage, avoiding an inflammatory reaction.",
        "topicId": "u1-t10",
        "subSection": "u1-s2",
        "diff": 1
      },
      {
        "q": "Dystrophic calcification is consistently accompanied by elevated serum levels of ionic calcium (hypercalcaemia).",
        "a": false,
        "e": "Dystrophic calcification occurs with normal serum calcium and phosphorus; hypercalcaemia causes metastatic calcification.",
        "topicId": "u1-t13",
        "subSection": "u1-s2",
        "diff": 1
      },
      {
        "q": "Blackleg in cattle caused by Clostridium chauvoei is an example of gas gangrene.",
        "a": true,
        "e": "C. chauvoei produces extensive necrotizing myositis with gas crepitation and dry rancid-butter odor.",
        "topicId": "u1-t11",
        "subSection": "u1-s2",
        "diff": 1
      },
      {
        "q": "Post-mortem autolysis involves tissue self-digestion driven by endogenous lysosomal enzymes without vital reaction.",
        "a": true,
        "e": "Autolysis lacks vascular and leukocytic responses, distinguishing it from antemortem necrosis.",
        "topicId": "u1-t10",
        "subSection": "u1-s2",
        "diff": 2
      },
      {
        "q": "Livor mortis is an active inflammatory reaction seen on the skin of an animal prior to death.",
        "a": false,
        "e": "Livor mortis is passive post-mortem gravitational settling of blood in dependent venules.",
        "topicId": "u1-t10",
        "subSection": "u1-s2",
        "diff": 1
      },
      {
        "q": "Zenker's degeneration refers to hyaline degeneration of striated skeletal muscle in selenium/vitamin E deficiency.",
        "a": true,
        "e": "Deficiency of glutathione peroxidase allows lipid peroxidation, producing waxy, pale muscle necrosis in calves and lambs.",
        "topicId": "u1-t08",
        "subSection": "u1-s2",
        "diff": 2
      },
      {
        "q": "Congestion is an active physiological process resulting in bright red, warm, and swollen tissue.",
        "a": false,
        "e": "Congestion is passive venous engorgement resulting in dark cyanotic, cool tissue; hyperaemia is active and warm.",
        "topicId": "u1-t03",
        "subSection": "u1-s3",
        "diff": 1
      },
      {
        "q": "Heart failure cells are alveolar macrophages that contain ingested hemosiderin pigment.",
        "a": true,
        "e": "Elevated pulmonary venous pressure forces RBCs into alveoli, where macrophages phagocytose them and store iron.",
        "topicId": "u1-t03",
        "subSection": "u1-s3",
        "diff": 1
      },
      {
        "q": "An exudate is an inflammatory extravascular fluid with high protein content and high specific gravity.",
        "a": true,
        "e": "Increased endothelial permeability allows large plasma proteins and leukocytes to escape into the inflamed tissue.",
        "topicId": "u1-t04",
        "subSection": "u1-s3",
        "diff": 1
      },
      {
        "q": "Infarctions in the spleen and kidneys of domestic animals are classically red and haemorrhagic.",
        "a": false,
        "e": "Kidney and spleen have solid parenchyma and end-arterial circulation, producing pale (anemic/white) infarcts.",
        "topicId": "u1-t05",
        "subSection": "u1-s3",
        "diff": 2
      },
      {
        "q": "Venous thrombi are predominantly composed of aggregated platelets with virtually no trapped erythrocytes.",
        "a": false,
        "e": "Venous thrombi form in sluggish flow and consist of long fibrin meshworks trapping large numbers of RBCs (red thrombi).",
        "topicId": "u1-t05",
        "subSection": "u1-s3",
        "diff": 2
      },
      {
        "q": "Strongylus vulgaris fourth-stage larvae frequently induce verminous thrombosis in the cranial mesenteric artery of horses.",
        "a": true,
        "e": "Larval migration damages the arterial intima, causing aneurysm, thrombosis, and thromboembolic colic.",
        "topicId": "u1-t05",
        "subSection": "u1-s3",
        "diff": 1
      },
      {
        "q": "Ecchymoses are pinpoint haemorrhages measuring 1 to 2 mm in diameter.",
        "a": false,
        "e": "Pinpoint 1-2 mm haemorrhages are petechiae; ecchymoses are larger blotchy haemorrhages (1-2 cm).",
        "topicId": "u1-t03",
        "subSection": "u1-s3",
        "diff": 1
      },
      {
        "q": "Septic shock is primarily initiated by the release of bacterial endotoxin (lipopolysaccharide).",
        "a": true,
        "e": "LPS triggers massive cytokine release (TNF-alpha, IL-1), widespread endothelial activation, and systemic vasodilation.",
        "topicId": "u1-t03",
        "subSection": "u1-s3",
        "diff": 2
      },
      {
        "q": "Ascites refers specifically to an accumulation of fluid within the pericardial cavity.",
        "a": false,
        "e": "Fluid in the pericardial sac is hydropericardium; ascites (hydroperitoneum) is fluid in the peritoneal cavity.",
        "topicId": "u1-t04",
        "subSection": "u1-s3",
        "diff": 1
      },
      {
        "q": "Acute inflammation is typically characterized by the predominance of lymphocytes and plasma cells.",
        "a": false,
        "e": "Neutrophils dominate acute inflammation; lymphocytes and plasma cells dominate chronic inflammation.",
        "topicId": "u1-t16",
        "subSection": "u1-s4",
        "diff": 1
      },
      {
        "q": "Endothelial gap formation in post-capillary venules is the most common mechanism of vascular leakage in acute inflammation.",
        "a": true,
        "e": "Chemical mediators like histamine and leukotrienes bind receptors on venular endothelium, causing rapid contraction and gap opening.",
        "topicId": "u1-t16",
        "subSection": "u1-s4",
        "diff": 2
      },
      {
        "q": "Avian heterophils contain abundant myeloperoxidase enzyme, which easily liquefies exudates into watery pus.",
        "a": false,
        "e": "Avian heterophils lack myeloperoxidase; as a result, avian purulent exudates are solid, caseous, and non-liquefied.",
        "topicId": "u1-t17",
        "subSection": "u1-s4",
        "diff": 2
      },
      {
        "q": "Granulomatous inflammation is a distinctive pattern of chronic inflammation characterized by epithelioid macrophages.",
        "a": true,
        "e": "Granulomas isolate persistent indigestible pathogens (Mycobacteria, fungi) via activated macrophages and giant cells.",
        "topicId": "u1-t17",
        "subSection": "u1-s4",
        "diff": 1
      },
      {
        "q": "An abscess is a diffuse, non-circumscribed spreading purulent inflammation along fascial planes.",
        "a": false,
        "e": "A focal collection of pus with a capsule is an abscess; a diffuse unconfined purulent spread is a phlegmon (cellulitis).",
        "topicId": "u1-t16",
        "subSection": "u1-s4",
        "diff": 1
      },
      {
        "q": "Healing by second intention involves extensive granulation tissue formation and significant wound contraction.",
        "a": true,
        "e": "Open wounds with significant defect cannot be apposed; myofibroblasts contract the heavy granulation tissue to close the gap.",
        "topicId": "u1-t20",
        "subSection": "u1-s4",
        "diff": 1
      },
      {
        "q": "Proud flesh in equine limb wounds represents excessive, exuberant granulation tissue that protrudes above the skin margin.",
        "a": true,
        "e": "Exuberant granulation tissue on horses' lower legs blocks epithelial migration and requires surgical trimming.",
        "topicId": "u1-t20",
        "subSection": "u1-s4",
        "diff": 1
      },
      {
        "q": "Fibrinous inflammation resolves without consequences even when large amounts of fibrin are deposited on serosal surfaces.",
        "a": false,
        "e": "Unresolved fibrinous exudate undergoes organization (fibrous ingrowth), resulting in permanent fibrous adhesions.",
        "topicId": "u1-t16",
        "subSection": "u1-s4",
        "diff": 2
      },
      {
        "q": "Histamine is synthesized de novo by macrophages hours after inflammatory onset.",
        "a": false,
        "e": "Histamine is pre-formed and stored inside mast cell and basophil granules for immediate, explosive exocytosis.",
        "topicId": "u1-t18",
        "subSection": "u1-s4",
        "diff": 2
      },
      {
        "q": "Lipofuscin is known as the wear-and-tear or aging pigment resulting from free radical peroxidation of membrane lipids.",
        "a": true,
        "e": "Lipofuscin accumulates inside lysosomes of long-lived post-mitotic cells (neurons, cardiac myocytes).",
        "topicId": "u1-t12",
        "subSection": "u1-s5",
        "diff": 1
      },
      {
        "q": "Hemosiderin is an iron-free derivative of haemoglobin that stains negative with Perls' Prussian blue.",
        "a": false,
        "e": "Hemosiderin is an iron storage complex of ferric hydroxide; it stains brilliant blue with Perls' Prussian blue reagent.",
        "topicId": "u1-t12",
        "subSection": "u1-s5",
        "diff": 1
      },
      {
        "q": "In secondary photosensitization, liver failure impairs excretion of the chlorophyll metabolite phylloerythrin.",
        "a": true,
        "e": "Phylloerythrin accumulates in blood, circulates to skin, and causes light-induced oxidative necrosis in non-pigmented areas.",
        "topicId": "u1-t14",
        "subSection": "u1-s5",
        "diff": 2
      },
      {
        "q": "Metaplasia is an irreversible, malignant transformation of epithelial cells.",
        "a": false,
        "e": "Metaplasia is a fully reversible adaptive substitution of one mature cell type by another; it reverts if the irritant is removed.",
        "topicId": "u1-t15",
        "subSection": "u1-s5",
        "diff": 1
      },
      {
        "q": "Hyperplasia can only occur in tissues capable of mitotic cellular division.",
        "a": true,
        "e": "Hyperplasia is an increase in cell number; non-dividing tissues like myocardium can only undergo hypertrophy.",
        "topicId": "u1-t15",
        "subSection": "u1-s5",
        "diff": 1
      },
      {
        "q": "Type I hypersensitivity reactions are primarily mediated by immunoglobulin G (IgG) antibodies.",
        "a": false,
        "e": "Type I hypersensitivity is mediated exclusively by IgE antibodies bound to mast cells.",
        "topicId": "u1-t21",
        "subSection": "u1-s5",
        "diff": 1
      },
      {
        "q": "The tuberculin skin test in cattle is an in vivo diagnostic manifestation of Type IV delayed-type hypersensitivity.",
        "a": true,
        "e": "Intradermal injection of PPD tuberculin recruits sensitized memory Th1 cells, producing induration at 48-72 hours.",
        "topicId": "u1-t21",
        "subSection": "u1-s5",
        "diff": 1
      },
      {
        "q": "Bovine Leukocyte Adhesion Deficiency (BLAD) is an acquired immunodeficiency caused by viral destruction of CD4 T cells.",
        "a": false,
        "e": "BLAD is an inherited autosomal recessive genetic defect in CD18 integrin in Holstein calves.",
        "topicId": "u1-t21",
        "subSection": "u1-s5",
        "diff": 2
      },
      {
        "q": "Aplasia indicates that an organ developed completely to adult size but later underwent marked pathological shrinkage.",
        "a": false,
        "e": "Acquired shrinkage of a developed organ is atrophy; aplasia is failure of an organ to develop beyond a rudimentary mass.",
        "topicId": "u1-t15",
        "subSection": "u1-s5",
        "diff": 1
      }
    ],
    "fib": [
      {
        "q": "The scientific study of the structural, biochemical, and functional changes in cells and tissues that underlie disease is known as ______.",
        "a": [
          "pathology"
        ],
        "e": "Pathology is the foundation discipline bridging basic sciences with clinical veterinary medicine.",
        "topicId": "u1-t01",
        "subSection": "u1-s1",
        "diff": 1,
        "a_display": "pathology"
      },
      {
        "q": "The step-by-step sequence of events in the development of a disease from its initial etiology to structural lesion is called ______.",
        "a": [
          "pathogenesis"
        ],
        "e": "Pathogenesis explains how the etiological agent triggers cellular cascades culminating in clinical lesions.",
        "topicId": "u1-t01",
        "subSection": "u1-s1",
        "diff": 1,
        "a_display": "pathogenesis"
      },
      {
        "q": "Cellular swelling in reversible cell injury occurs primarily due to failure of the ATP-dependent ______ pump in the plasma membrane.",
        "a": [
          "sodium potassium",
          "na k atpase",
          "na+ k+ atpase",
          "sodium-potassium",
          "na/k atpase"
        ],
        "a_display": "Na+/K+ ATPase",
        "e": "Loss of ATP halts Na+/K+ pump, allowing sodium and water to flood the intracellular compartment.",
        "topicId": "u1-t08",
        "subSection": "u1-s1",
        "diff": 1
      },
      {
        "q": "Under polarization microscopy, Congo Red stained amyloid fibrils exhibit a pathognomonic ______ birefringence.",
        "a": [
          "apple green",
          "apple-green",
          "green"
        ],
        "a_display": "apple-green",
        "e": "The cross-beta-pleated configuration of amyloid yields diagnostic apple-green birefringence under polarizing filters.",
        "topicId": "u1-t07",
        "subSection": "u1-s1",
        "diff": 2
      },
      {
        "q": "The special histochemical stain widely utilized on frozen sections to demonstrate neutral lipids and confirm fatty change is ______.",
        "a": [
          "oil red o",
          "sudan iii",
          "sudan iv",
          "sudan black"
        ],
        "a_display": "Oil Red O",
        "e": "Oil Red O stains neutral triglycerides brilliant red-orange in un-cleared frozen tissue sections.",
        "topicId": "u1-t06",
        "subSection": "u1-s1",
        "diff": 1
      },
      {
        "q": "Intracellular glycogen accumulations in tissues are demonstrated by magenta staining with the ______ reaction, which is abolished by diastase digestion.",
        "a": [
          "periodic acid schiff",
          "pas",
          "periodic acid-schiff"
        ],
        "a_display": "Periodic Acid-Schiff (PAS)",
        "e": "PAS stains glycogen magenta; diastase sensitivity distinguishes it from glycoproteins and mucins.",
        "topicId": "u1-t06",
        "subSection": "u1-s1",
        "diff": 2
      },
      {
        "q": "Secondary reactive amyloidosis developing during chronic inflammation in domestic animals is composed of ______ protein.",
        "a": [
          "aa",
          "amyloid a"
        ],
        "a_display": "AA (Amyloid A)",
        "e": "AA protein is derived from circulating serum amyloid A (SAA) synthesized by hepatocytes during chronic inflammation.",
        "topicId": "u1-t07",
        "subSection": "u1-s1",
        "diff": 2
      },
      {
        "q": "In the spleen, localized amyloid deposition confined to the Malpighian corpuscles is referred to as ______ spleen.",
        "a": [
          "sago"
        ],
        "a_display": "sago",
        "e": "Sago spleen displays gross tapioca-like nodules restricted to lymphoid follicles.",
        "topicId": "u1-t07",
        "subSection": "u1-s1",
        "diff": 2
      },
      {
        "q": "The hyaline degeneration of skeletal muscle in calves with nutritional muscular dystrophy is historically known as ______ degeneration.",
        "a": [
          "zenker's",
          "zenkers",
          "zenker"
        ],
        "a_display": "Zenker's",
        "e": "Zenker's degeneration causes waxy, swollen, Zenker's necrosis of skeletal muscle fibers.",
        "topicId": "u1-t08",
        "subSection": "u1-s1",
        "diff": 2
      },
      {
        "q": "Nuclear shrinkage and increased basophilia resulting in a dense, dark mass during necrosis is called ______.",
        "a": [
          "pyknosis",
          "pycnosis"
        ],
        "a_display": "pyknosis",
        "e": "Pyknosis represents progressive chromatin condensation before fragmentation (karyorrhexis).",
        "topicId": "u1-t09",
        "subSection": "u1-s2",
        "diff": 1
      },
      {
        "q": "Fragmentation of a pyknotic nucleus into multiple chromatin granules during cell death is termed ______.",
        "a": [
          "karyorrhexis"
        ],
        "a_display": "karyorrhexis",
        "e": "Karyorrhexis is nuclear rupture and fragmentation prior to complete dissolution (karyolysis).",
        "topicId": "u1-t09",
        "subSection": "u1-s2",
        "diff": 1
      },
      {
        "q": "The pattern of necrosis in which dead tissue architecture is preserved in outline for days due to protein denaturation is ______ necrosis.",
        "a": [
          "coagulative"
        ],
        "a_display": "coagulative",
        "e": "Coagulative necrosis is typical of infarcts in solid organs like kidney, heart, and spleen.",
        "topicId": "u1-t09",
        "subSection": "u1-s2",
        "diff": 1
      },
      {
        "q": "In acute necrotizing pancreatitis, chalky white deposits in peripancreatic fat result from the process of ______.",
        "a": [
          "saponification",
          "fat saponification",
          "dystrophic calcification"
        ],
        "a_display": "saponification",
        "e": "Pancreatic lipases release fatty acids that combine with calcium ions to form insoluble calcium soaps.",
        "topicId": "u1-t09",
        "subSection": "u1-s2",
        "diff": 2
      },
      {
        "q": "The etiological bacterial agent responsible for Blackleg and gas gangrene in cattle is Clostridium ______.",
        "a": [
          "chauvoei"
        ],
        "a_display": "chauvoei",
        "e": "Clostridium chauvoei produces severe emphysematous necrotizing myositis in cattle.",
        "topicId": "u1-t11",
        "subSection": "u1-s2",
        "diff": 1
      },
      {
        "q": "The pathological calcification that occurs in necrotic tissues in the presence of normal blood calcium levels is called ______ calcification.",
        "a": [
          "dystrophic"
        ],
        "a_display": "dystrophic",
        "e": "Dystrophic calcification deposits calcium phosphate in damaged tissues despite normal serum calcium.",
        "topicId": "u1-t13",
        "subSection": "u1-s2",
        "diff": 1
      },
      {
        "q": "Tissue calcium mineral deposits are demonstrated histologically as black precipitates using the ______ special stain.",
        "a": [
          "von kossa",
          "kossa"
        ],
        "a_display": "Von Kossa",
        "e": "Von Kossa silver reduction stains insoluble calcium phosphates and carbonates deep brownish-black.",
        "topicId": "u1-t13",
        "subSection": "u1-s2",
        "diff": 2
      },
      {
        "q": "The post-mortem stiffening of skeletal muscles caused by complete depletion of ATP is termed ______.",
        "a": [
          "rigor mortis"
        ],
        "a_display": "rigor mortis",
        "e": "Depletion of ATP leaves actin and myosin permanently cross-linked in a rigid state.",
        "topicId": "u1-t10",
        "subSection": "u1-s2",
        "diff": 1
      },
      {
        "q": "The dark greenish-black post-mortem discoloration of abdominal organs caused by iron sulphide formation is called ______.",
        "a": [
          "pseudomelanosis"
        ],
        "a_display": "pseudomelanosis",
        "e": "H2S produced by putrefactive gut bacteria reacts with RBC iron, creating black FeS deposits.",
        "topicId": "u1-t10",
        "subSection": "u1-s2",
        "diff": 2
      },
      {
        "q": "The classical mottled macroscopic appearance of the liver in chronic passive congestion is colloquially termed ______ liver.",
        "a": [
          "nutmeg"
        ],
        "a_display": "nutmeg",
        "e": "Nutmeg liver exhibits red centrilobular congestion alternating with tan/yellow fatty periportal zones.",
        "topicId": "u1-t03",
        "subSection": "u1-s3",
        "diff": 1
      },
      {
        "q": "Hemosiderin-laden alveolar macrophages in the lungs of animals with chronic congestive heart failure are termed ______ cells.",
        "a": [
          "heart failure",
          "heart-failure"
        ],
        "a_display": "heart failure",
        "e": "Heart failure cells result from macrophage phagocytosis of red cells extravasated under high capillary pressure.",
        "topicId": "u1-t03",
        "subSection": "u1-s3",
        "diff": 1
      },
      {
        "q": "Severe, generalized, massive subcutaneous oedema throughout the body is termed ______.",
        "a": [
          "anasarca"
        ],
        "a_display": "anasarca",
        "e": "Anasarca is diffuse, profound subcutaneous fluid accumulation.",
        "topicId": "u1-t04",
        "subSection": "u1-s3",
        "diff": 1
      },
      {
        "q": "The microscopic laminations seen in thrombi composed of alternating pale platelet-fibrin layers and red cell layers are called the Lines of ______.",
        "a": [
          "zahn"
        ],
        "a_display": "Zahn",
        "e": "Lines of Zahn prove that a thrombus formed inside actively flowing blood before death.",
        "topicId": "u1-t05",
        "subSection": "u1-s3",
        "diff": 2
      },
      {
        "q": "Verminous arteritis and thrombosis of the cranial mesenteric artery in equines is caused by the migrating larvae of Strongylus ______.",
        "a": [
          "vulgaris"
        ],
        "a_display": "vulgaris",
        "e": "Strongylus vulgaris L4 larvae migrate into mesenteric arteries, leading to ischemic colic.",
        "topicId": "u1-t05",
        "subSection": "u1-s3",
        "diff": 1
      },
      {
        "q": "A detached intravascular mass (solid, liquid, or gas) carried by the blood to a distant site from its point of origin is an ______.",
        "a": [
          "embolus",
          "embolism"
        ],
        "a_display": "embolus",
        "e": "Emboli lodge in narrow vascular beds, causing downstream ischemia and infarction.",
        "topicId": "u1-t05",
        "subSection": "u1-s3",
        "diff": 1
      },
      {
        "q": "Pinpoint haemorrhages measuring 1 to 2 mm in diameter on skin or mucosal surfaces are termed ______.",
        "a": [
          "petechiae",
          "petechia"
        ],
        "a_display": "petechiae",
        "e": "Petechiae reflect capillary fragility or severe thrombocytopenia.",
        "topicId": "u1-t03",
        "subSection": "u1-s3",
        "diff": 1
      },
      {
        "q": "The non-inflammatory extravascular fluid filtrate characterized by low protein (< 2.5 g/dL) and specific gravity < 1.015 is a ______.",
        "a": [
          "transudate"
        ],
        "a_display": "transudate",
        "e": "Transudates form due to elevated hydrostatic pressure or reduced oncotic pressure without vascular injury.",
        "topicId": "u1-t04",
        "subSection": "u1-s3",
        "diff": 1
      },
      {
        "q": "An area of ischemic coagulative or liquefactive necrosis caused by occlusion of either the arterial supply or venous drainage is an ______.",
        "a": [
          "infarct",
          "infarction"
        ],
        "a_display": "infarct",
        "e": "Infarcts result from acute vascular occlusion, most commonly from thrombosis or thromboembolism.",
        "topicId": "u1-t05",
        "subSection": "u1-s3",
        "diff": 1
      },
      {
        "q": "The Latin phrase added by Rudolf Virchow to denote loss of function as the fifth cardinal sign of inflammation is ______.",
        "a": [
          "functio laesa"
        ],
        "a_display": "functio laesa",
        "e": "Functio laesa completes Celsus' four original signs: rubor, calor, tumor, and dolor.",
        "topicId": "u1-t16",
        "subSection": "u1-s4",
        "diff": 1
      },
      {
        "q": "The principal circulating phagocytic leukocyte that responds first and dominates the acute inflammatory response in mammals is the ______.",
        "a": [
          "neutrophil",
          "polymorphonuclear leukocyte",
          "pmn"
        ],
        "a_display": "neutrophil",
        "e": "Neutrophils arrive rapidly (within hours) to phagocytose pyogenic bacteria.",
        "topicId": "u1-t17",
        "subSection": "u1-s4",
        "diff": 1
      },
      {
        "q": "In avian blood, the polymorphonuclear leukocyte homologous to the mammalian neutrophil is the ______.",
        "a": [
          "heterophil"
        ],
        "a_display": "heterophil",
        "e": "Heterophils contain distinct rod-shaped eosinophilic granules and lack myeloperoxidase.",
        "topicId": "u1-t17",
        "subSection": "u1-s4",
        "diff": 1
      },
      {
        "q": "The primary pre-formed vasoactive amine released immediately from mast cell granules upon stimulation is ______.",
        "a": [
          "histamine"
        ],
        "a_display": "histamine",
        "e": "Histamine acts on H1 receptors of post-capillary venules to trigger endothelial gap formation.",
        "topicId": "u1-t18",
        "subSection": "u1-s4",
        "diff": 1
      },
      {
        "q": "A localized collection of purulent exudate (pus) confined within a newly formed cavity surrounded by a fibrous wall is an ______.",
        "a": [
          "abscess"
        ],
        "a_display": "abscess",
        "e": "Abscesses form from localized pyogenic liquefactive necrosis surrounded by a pyogenic membrane.",
        "topicId": "u1-t16",
        "subSection": "u1-s4",
        "diff": 1
      },
      {
        "q": "The giant cells characteristic of tuberculosis, exhibiting nuclei arranged in a peripheral horseshoe shape, are called ______ giant cells.",
        "a": [
          "langhans",
          "langhans'"
        ],
        "a_display": "Langhans",
        "e": "Langhans giant cells form by the fusion of activated epithelioid macrophages in tuberculoid granulomas.",
        "topicId": "u1-t17",
        "subSection": "u1-s4",
        "diff": 2
      },
      {
        "q": "The vascularized, fibroblastic provisional tissue that fills a healing wound defect during repair is known as ______ tissue.",
        "a": [
          "granulation"
        ],
        "a_display": "granulation",
        "e": "Granulation tissue contains newly sprouted leaky capillary loops, fibroblasts, and loose proteoglycan matrix.",
        "topicId": "u1-t20",
        "subSection": "u1-s4",
        "diff": 1
      },
      {
        "q": "Exuberant, protruding granulation tissue that overgrows wound margins on the lower extremities of horses is known as ______.",
        "a": [
          "proud flesh"
        ],
        "a_display": "proud flesh",
        "e": "Proud flesh is excessive granulation tissue in horses requiring debridement to allow skin closure.",
        "topicId": "u1-t20",
        "subSection": "u1-s4",
        "diff": 1
      },
      {
        "q": "The major profibrogenic cytokine synthesized by macrophages that stimulates heavy collagen synthesis during fibrosis is ______.",
        "a": [
          "tgf-beta",
          "tgf beta",
          "transforming growth factor beta",
          "transforming growth factor-beta"
        ],
        "a_display": "TGF-beta",
        "e": "TGF-beta is the master regulator of connective tissue deposition, scar maturation, and myofibroblast differentiation.",
        "topicId": "u1-t20",
        "subSection": "u1-s4",
        "diff": 2
      },
      {
        "q": "The golden-yellow, insoluble intracellular 'wear-and-tear' pigment that accumulates in aging myocardium and brain is ______.",
        "a": [
          "lipofuscin"
        ],
        "a_display": "lipofuscin",
        "e": "Lipofuscin is composed of cross-linked polymers of peroxidized lipids and proteins in tertiary lysosomes.",
        "topicId": "u1-t12",
        "subSection": "u1-s5",
        "diff": 1
      },
      {
        "q": "The golden-brown, iron-containing endogenous pigment stored inside macrophages following erythrocyte breakdown is ______.",
        "a": [
          "hemosiderin",
          "haemosiderin"
        ],
        "a_display": "hemosiderin",
        "e": "Hemosiderin represents aggregates of ferritin micelles containing stored ferric iron.",
        "topicId": "u1-t12",
        "subSection": "u1-s5",
        "diff": 1
      },
      {
        "q": "Hemosiderin iron is stained an intense bright blue color by the Perls' ______ reaction.",
        "a": [
          "prussian blue",
          "prussian-blue"
        ],
        "a_display": "Prussian blue",
        "e": "Perls' reaction combines ionic iron with potassium ferrocyanide to precipitate insoluble Prussian blue.",
        "topicId": "u1-t12",
        "subSection": "u1-s5",
        "diff": 1
      },
      {
        "q": "In secondary (hepatogenous) photosensitization of ruminants, the photodynamic agent that accumulates due to biliary failure is ______.",
        "a": [
          "phylloerythrin"
        ],
        "a_display": "phylloerythrin",
        "e": "Phylloerythrin is a microbial breakdown product of dietary chlorophyll normally excreted in bile.",
        "topicId": "u1-t14",
        "subSection": "u1-s5",
        "diff": 2
      },
      {
        "q": "An increase in the total mass and volume of an organ caused purely by an increase in the size of individual cells is ______.",
        "a": [
          "hypertrophy"
        ],
        "a_display": "hypertrophy",
        "e": "Hypertrophy occurs without cell division, typified by ventricular enlargement in aortic stenosis.",
        "topicId": "u1-t15",
        "subSection": "u1-s5",
        "diff": 1
      },
      {
        "q": "The reversible adaptive replacement of one adult differentiated cell type by another adult cell type is ______.",
        "a": [
          "metaplasia"
        ],
        "a_display": "metaplasia",
        "e": "Metaplasia is an adaptive reprogramming of stem cells to withstand chronic environmental irritation.",
        "topicId": "u1-t15",
        "subSection": "u1-s5",
        "diff": 1
      },
      {
        "q": "Incomplete or subnormal development of an organ so that it fails to attain normal adult functional size is termed ______.",
        "a": [
          "hypoplasia"
        ],
        "a_display": "hypoplasia",
        "e": "Hypoplasia is congenital underdevelopment (e.g. cerebellar hypoplasia from in utero parvovirus).",
        "topicId": "u1-t15",
        "subSection": "u1-s5",
        "diff": 1
      },
      {
        "q": "Type I (anaphylactic) immediate hypersensitivity reactions are mediated by the binding of antigen to specific ______ antibodies fixed on mast cells.",
        "a": [
          "ige"
        ],
        "a_display": "IgE",
        "e": "IgE antibodies arm mast cells and basophils, releasing histamine upon allergen challenge.",
        "topicId": "u1-t21",
        "subSection": "u1-s5",
        "diff": 1
      },
      {
        "q": "The delayed-type hypersensitivity reaction used in the comparative intradermal tuberculin test in cattle is an example of Type ______ hypersensitivity.",
        "a": [
          "iv",
          "4"
        ],
        "a_display": "Type IV",
        "e": "Type IV hypersensitivity is cell-mediated by sensitized CD4+ Th1 cells and activated macrophages.",
        "topicId": "u1-t21",
        "subSection": "u1-s5",
        "diff": 1
      }
    ]
  },
  "unit-2": {
    "mcq": [
      {
        "q": "Vesicular stomatitis in livestock is characterized pathologically by:",
        "o": [
          "Epithelial vesicles and erosions on tongue, lips, and oral mucosa",
          "Diphtheritic pseudomembrane over the larynx",
          "Necrotizing caseous granulomas in tonsils",
          "Papillomatous warts on the gingiva"
        ],
        "a": 0,
        "e": "Vesicular stomatitis induces intercellular edema (spongiosis) and intraepithelial vesicles that rupture into erosions.",
        "topicId": "u2-t01",
        "subSection": "u2-s1",
        "diff": 1
      },
      {
        "q": "Wooden tongue in cattle is etiologically caused by which bacterium?",
        "o": [
          "Actinobacillus lignieresii",
          "Actinomyces bovis",
          "Fusobacterium necrophorum",
          "Corynebacterium diphtheriae"
        ],
        "a": 0,
        "e": "Actinobacillus lignieresii causes pyogranulomatous glossitis with sulfur granules (Wooden tongue).",
        "topicId": "u2-t01",
        "subSection": "u2-s1",
        "diff": 1
      },
      {
        "q": "Lumpy jaw in cattle, causing chronic rarefying osteomyelitis of the mandible, is caused by:",
        "o": [
          "Actinomyces bovis",
          "Actinobacillus lignieresii",
          "Trueperella pyogenes",
          "Staphylococcus aureus"
        ],
        "a": 0,
        "e": "Actinomyces bovis produces chronic osteomyelitis with bone expansion and fistula tracts discharging sulfur granules.",
        "topicId": "u2-t01",
        "subSection": "u2-s1",
        "diff": 1
      },
      {
        "q": "Rumenitis in feedlot cattle is most commonly initiated by:",
        "o": [
          "Lactic acidosis resulting from rapid ingestion of high-grain carbohydrates",
          "Traumatic perforation by metal wires",
          "Viral infection with rotavirus",
          "Excessive intake of roughages"
        ],
        "a": 0,
        "e": "Grain overload increases Streptococcus bovis and lactic acid production, lowering rumen pH and ulcerating rumen epithelium.",
        "topicId": "u2-t01",
        "subSection": "u2-s1",
        "diff": 1
      },
      {
        "q": "Mycotic rumenitis with circular, target-like infarctive lesions in cattle is typically caused by secondary invasion of:",
        "o": [
          "Aspergillus and Zygomycetes (Mucor, Rhizopus)",
          "Candida albicans",
          "Microsporum canis",
          "Histoplasma capsulatum"
        ],
        "a": 0,
        "e": "Acid-induced rumen wall damage allows angioinvasive Zygomycetes to penetrate, causing thrombosis and infarction.",
        "topicId": "u2-t01",
        "subSection": "u2-s1",
        "diff": 2
      },
      {
        "q": "Traumatic reticuloperitonitis (hardware disease) in cattle develops when a swallowed metallic foreign body penetrates the:",
        "o": [
          "Reticulum, diaphragm, and pericardial sac",
          "Rumen dorsal sac and spleen",
          "Omasum and liver parenchyma",
          "Abomasum and duodenum"
        ],
        "a": 0,
        "e": "Foreign bodies lodge in the honeycomb reticulum; contractions drive wire through diaphragm into the pericardium.",
        "topicId": "u2-t01",
        "subSection": "u2-s1",
        "diff": 1
      },
      {
        "q": "Intussusception in the domestic animal intestine is defined as:",
        "o": [
          "Telescoping of an invaginated intestinal segment (intussuscipiens) into an adjacent segment",
          "Twisting of the bowel loop on its mesenteric axis (volvulus)",
          "Complete rotation of the intestine along its longitudinal axis (torsion)",
          "Protrusion of bowel loops through an abdominal ring"
        ],
        "a": 0,
        "e": "Intussusception is invagination of proximal bowel (intussusceptum) into distal lumen (intussuscipiens).",
        "topicId": "u2-t01",
        "subSection": "u2-s1",
        "diff": 1
      },
      {
        "q": "Johne's disease in ruminants (Mycobacterium avium subsp. paratuberculosis) produces which characteristic intestinal lesion?",
        "o": [
          "Transverse corrugated mucosal ridges with 'cerebriform' folding that cannot be smoothed out",
          "Sharply punched-out button ulcers in the cecum",
          "Pseudomembranous croupous casting of the colon",
          "Volvulus with gangrenous strangulation"
        ],
        "a": 0,
        "e": "Granulomatous infiltration of the lamina propria and submucosa causes permanent transverse corrugations (cerebriform mucosa).",
        "topicId": "u2-t01",
        "subSection": "u2-s1",
        "diff": 2
      },
      {
        "q": "Button ulcers observed in the cecum and colon of swine are pathognomonic for:",
        "o": [
          "Chronic Classical Swine Fever (Hog Cholera)",
          "Swine Erysipelas",
          "Porcine Parvovirus",
          "Atrophic Rhinitis"
        ],
        "a": 0,
        "e": "Ischemic infarction of lymphoid follicles followed by secondary infection with Salmonella produces concentric button ulcers.",
        "topicId": "u2-t01",
        "subSection": "u2-s1",
        "diff": 2
      },
      {
        "q": "Post-necrotic cirrhosis of the liver is characterized histologically by:",
        "o": [
          "Broad irregular fibrous bands separating large, pleomorphic regenerative nodules",
          "Delicate diffuse pericellular fibrosis without nodules",
          "Biliary ductular proliferation without fibrous bridging",
          "Uniform micronodular pseudolobules of identical size"
        ],
        "a": 0,
        "e": "Massive collapse following extensive necrosis produces coarse, irregular fibrous scars and large hyperplastic nodules.",
        "topicId": "u2-t01",
        "subSection": "u2-s1",
        "diff": 2
      },
      {
        "q": "In pre-hepatic (hemolytic) jaundice, the predominant pigment elevated in serum is:",
        "o": [
          "Unconjugated (indirect-reacting) bilirubin",
          "Conjugated (direct-reacting) bilirubin",
          "Bile salts and biliverdin",
          "Hemosiderin iron"
        ],
        "a": 0,
        "e": "Massive erythrocyte destruction floods the liver with unconjugated lipophilic bilirubin, exceeding conjugating capacity.",
        "topicId": "u2-t01",
        "subSection": "u2-s1",
        "diff": 2
      },
      {
        "q": "Obstructive (post-hepatic) jaundice in animals is typically accompanied by:",
        "o": [
          "Clay-colored (acholic) pale feces due to absence of stercobilin",
          "Dark brown urine packed with hemoglobin casts",
          "Profound reticulocytosis and regenerative anemia",
          "Marked decrease in serum alkaline phosphatase"
        ],
        "a": 0,
        "e": "Biliary outflow blockage prevents bile from reaching the intestine, resulting in unpigmented pale acholic stools.",
        "topicId": "u2-t01",
        "subSection": "u2-s1",
        "diff": 2
      },
      {
        "q": "Centrilobular necrosis of the liver is the most common pattern in toxic and hypoxic injury because hepatocytes around the central vein:",
        "o": [
          "Receive the lowest oxygen tension and possess highest cytochrome P450 monooxygenase activity",
          "Are closest to the incoming portal blood supply",
          "Possess the lowest concentration of metabolic enzymes",
          "Contain dense fibrous connective tissue rings"
        ],
        "a": 0,
        "e": "Zone 3 (pericentral) receives deoxygenated blood and has maximum cytochrome P450, converting xenobiotics into toxic radicals.",
        "topicId": "u2-t01",
        "subSection": "u2-s1",
        "diff": 2
      },
      {
        "q": "The pathognomonic liver lesion of Rift Valley Fever in sheep and goats is:",
        "o": [
          "Massive multifocal hepatic necrosis with eosinophilic intranuclear inclusion bodies",
          "Severe biliary cirrhosis with pipestem bile ducts",
          "Nutmeg congestion with central vein thrombosis",
          "Suppurative abscessation caused by Trueperella"
        ],
        "a": 0,
        "e": "Rift Valley fever virus causes rapid pin-point necrotic foci and intranuclear eosinophilic inclusions in lamb hepatocytes.",
        "topicId": "u2-t01",
        "subSection": "u2-s1",
        "diff": 3
      },
      {
        "q": "Canine infectious hepatitis (Canine Adenovirus-1) produces which diagnostic cellular feature?",
        "o": [
          "Large basophilic or amphophilic intranuclear inclusion bodies in hepatocytes and Kupffer cells",
          "Eosinophilic intracytoplasmic Negri bodies",
          "Nuclear pyknosis with viral capsid crystalline arrays in lysosomes",
          "Granulomatous Langhans multinucleated giant cells"
        ],
        "a": 0,
        "e": "CAV-1 produces diagnostic large Cowdry type A amphophilic intranuclear inclusions with surrounding halos.",
        "topicId": "u2-t01",
        "subSection": "u2-s1",
        "diff": 2
      },
      {
        "q": "Torsion of the abomasum in dairy cattle typically occurs following:",
        "o": [
          "Right-sided abomasal displacement with gas distension",
          "Chronic copper toxicity",
          "Gastric ulceration by Ostertagia",
          "Foreign body perforation of the ruminal pillar"
        ],
        "a": 0,
        "e": "Abomasal atony causes right-side displacement (RDA), which twists around its mesenteric axis into full torsion/volvulus.",
        "topicId": "u2-t01",
        "subSection": "u2-s1",
        "diff": 2
      },
      {
        "q": "Acute hemorrhagic pancreatitis in dogs is pathogenetically initiated by:",
        "o": [
          "Intra-acinar premature activation of trypsinogen and digestive proenzymes",
          "Bacterial infection ascending through the portal vein",
          "Primary thrombosis of the splenic artery",
          "Autoimmune destruction of islet beta cells"
        ],
        "a": 0,
        "e": "Inappropriate intra-acinar activation of trypsin catalyzes elastase and phospholipase A2, digesting parenchymal tissue and blood vessels.",
        "topicId": "u2-t01",
        "subSection": "u2-s1",
        "diff": 2
      },
      {
        "q": "'Pipestem liver' in sheep and cattle is the chronic pathological outcome of:",
        "o": [
          "Chronic Fasciola hepatica infection with bile duct fibrosis and calcification",
          "Echinococcus granulosus hydatid cysts",
          "Hepatic lipidosis in pregnancy toxaemia",
          "Aflatoxin B1 ingestion"
        ],
        "a": 0,
        "e": "Adult flukes in bile ducts provoke chronic mechanical irritation, dense periductal fibrosis, and calcification (pipestem ducts).",
        "topicId": "u2-t01",
        "subSection": "u2-s1",
        "diff": 1
      },
      {
        "q": "The histological hallmark of fibrinous bronchopneumonia (shipping fever) in cattle is:",
        "o": [
          "Alveolar spaces filled with fibrin, neutrophils, and streaming 'oat-shaped' degenerate leukocytes",
          "Pure serous transudate with no cellular infiltration",
          "Necrotic caseous tubercles with Langhans giant cells",
          "Diffuse alveolar septal thickening by type II pneumocyte hyperplasia"
        ],
        "a": 0,
        "e": "Mannheimia haemolytica leukotoxin destroys bovine leukocytes, forming elongated 'oat cells' within dense fibrin mesh.",
        "topicId": "u2-t02",
        "subSection": "u2-s2",
        "diff": 2
      },
      {
        "q": "Suppurative bronchopneumonia has which characteristic gross anatomical distribution in the lungs?",
        "o": [
          "Cranioventral consolidation of apical, cardiac, and accessory lobes",
          "Diffusely distributed interstitial rubbery elasticity throughout all lobes",
          "Caudodorsal wedge-shaped hemorrhagic infarction",
          "Miliary nodules scattered uniformly through pleura"
        ],
        "a": 0,
        "e": "Inhaled airborne exudates and bacteria settle by gravity and ventilation currents into cranioventral lung lobes.",
        "topicId": "u2-t02",
        "subSection": "u2-s2",
        "diff": 1
      },
      {
        "q": "Interstitial pneumonia (atypical pneumonia) is predominantly characterized microscopically by:",
        "o": [
          "Thickening of alveolar septa by edema, mononuclear cells, and type II pneumocyte hyperplasia",
          "Alveoli packed with dense plugs of degenerate neutrophils and pus",
          "Massive caseous necrosis with dystrophic calcification",
          "Obstruction of major bronchi by mucus casts"
        ],
        "a": 0,
        "e": "Injury to type I alveolar pneumocytes or capillary endothelium provokes septal infiltration and type II pneumocyte lining.",
        "topicId": "u2-t02",
        "subSection": "u2-s2",
        "diff": 2
      },
      {
        "q": "Pulmonary atelectasis strictly refers to:",
        "o": [
          "Incomplete expansion or collapse of previously aerated lung parenchyma",
          "Permanent abnormal dilatation of alveoli with alveolar wall destruction",
          "Inflammation of pulmonary bronchioles",
          "Intra-alveolar accumulation of protein-rich fluid"
        ],
        "a": 0,
        "e": "Atelectasis is alveolar collapse (congenital due to lack of surfactant, or acquired due to airway obstruction or compression).",
        "topicId": "u2-t02",
        "subSection": "u2-s2",
        "diff": 1
      },
      {
        "q": "Alveolar pulmonary emphysema is morphologically characterized by:",
        "o": [
          "Permanent enlargement of airspaces distal to terminal bronchioles with destruction of alveolar walls",
          "Fluid filling the alveolar spaces with air bronchograms",
          "Accumulation of air within interlobular septa and subpleural tissue",
          "Fibrous organization of alveolar exudates"
        ],
        "a": 0,
        "e": "Alveolar emphysema involves disruption of alveolar septa, creating enlarged, bullous, hyperexpanded airspaces.",
        "topicId": "u2-t02",
        "subSection": "u2-s2",
        "diff": 2
      },
      {
        "q": "Interlobular emphysema occurs with high frequency in cattle because bovine lungs possess:",
        "o": [
          "Complete, thick interlobular connective tissue septa and no collateral ventilation",
          "Very thin, delicate, porous pleura",
          "Extensive inter-alveolar pores of Kohn",
          "Double pulmonary arterial blood supplies"
        ],
        "a": 0,
        "e": "Cattle have wide interlobular septa with distinct lobulation and poor collateral ventilation; ruptured air tracks into septa.",
        "topicId": "u2-t02",
        "subSection": "u2-s2",
        "diff": 2
      },
      {
        "q": "Hydropericardium is defined as an abnormal accumulation of:",
        "o": [
          "Non-inflammatory transudate in the pericardial sac",
          "Purulent suppurative exudate in the pericardial space",
          "Coagulated whole blood causing cardiac tamponade",
          "Fibrinous strands gluing epicardium to parietal pericardium"
        ],
        "a": 0,
        "e": "Hydropericardium is clear/pale yellow serous transudate within the pericardial cavity.",
        "topicId": "u2-t04",
        "subSection": "u2-s2",
        "diff": 1
      },
      {
        "q": "Traumatic pericarditis in cattle results in which classic gross pathological appearance of the pericardial sac?",
        "o": [
          "'Bread and butter' fibrinous and purulent exudate with thickened, foul-smelling pericardium",
          "Smooth, shiny, transparent serosa with minimal clear fluid",
          "Dry parchment-like mummification of the myocardium",
          "Multiple small white calcified buttons on epicardium"
        ],
        "a": 0,
        "e": "Penetrating wires introduce Trueperella pyogenes and anaerobes, creating massive shaggy fibrin ('bread and butter') and pus.",
        "topicId": "u2-t04",
        "subSection": "u2-s2",
        "diff": 1
      },
      {
        "q": "Endocardiosis (chronic degenerative valvular disease) in geriatric dogs most commonly affects which cardiac valve?",
        "o": [
          "Left atrioventricular (mitral) valve",
          "Right atrioventricular (tricuspid) valve",
          "Aortic semilunar valve",
          "Pulmonic valve"
        ],
        "a": 0,
        "e": "Myxomatous degeneration of the mitral valve produces nodular thickening, chordae tendineae rupture, and mitral regurgitation.",
        "topicId": "u2-t04",
        "subSection": "u2-s2",
        "diff": 2
      },
      {
        "q": "Vegetative valvular endocarditis in swine is classically caused by infection with:",
        "o": [
          "Erysipelothrix rhusiopathiae",
          "Pasteurella multocida",
          "Staphylococcus hyicus",
          "Clostridium perfringens"
        ],
        "a": 0,
        "e": "Erysipelothrix forms large, friable, cauliflower-like vegetative bacterial-fibrin thrombi on the mitral and aortic valves.",
        "topicId": "u2-t04",
        "subSection": "u2-s2",
        "diff": 2
      },
      {
        "q": "'Mulberry heart disease' in rapidly growing swine is a nutritional cardiomyopathy caused by deficiency of:",
        "o": [
          "Vitamin E and Selenium",
          "Thiamine (Vitamin B1)",
          "Copper",
          "Iron"
        ],
        "a": 0,
        "e": "Vitamin E/Selenium deficiency produces extensive myocardial necrosis, microvascular thrombosis, and ecchymotic haemorrhages.",
        "topicId": "u2-t04",
        "subSection": "u2-s2",
        "diff": 2
      },
      {
        "q": "Left ventricular eccentric hypertrophy in domestic animals is typically stimulated by:",
        "o": [
          "Chronic volume (preload) overload (e.g. valvular regurgitation, patent ductus arteriosus)",
          "Chronic pressure (afterload) overload (e.g. aortic stenosis, systemic hypertension)",
          "Severe myocardial fibrosis without dilation",
          "Nutritional protein starvation"
        ],
        "a": 0,
        "e": "Volume overload stimulates addition of sarcomeres in series, leading to ventricular dilation with increased lumen diameter.",
        "topicId": "u2-t04",
        "subSection": "u2-s2",
        "diff": 3
      },
      {
        "q": "Concentric cardiac hypertrophy is characterized by:",
        "o": [
          "Thickening of the ventricular wall with reduced or normal ventricular lumen diameter",
          "Thin, stretched ventricular wall with markedly dilated lumen",
          "Fatty infiltration of the right ventricular free wall",
          "Extensive replacement of myocardium by amyloid"
        ],
        "a": 0,
        "e": "Pressure overload stimulates addition of sarcomeres in parallel, thickening the wall toward the lumen (reduced cavity size).",
        "topicId": "u2-t04",
        "subSection": "u2-s2",
        "diff": 2
      },
      {
        "q": "Bovine enzootic pneumonia is primarily an infectious complex initiated by:",
        "o": [
          "Mycoplasma bovis and Parainfluenza-3 virus with secondary Pasteurella",
          "Mycobacterium bovis alone",
          "Aspergillus fumigatus",
          "Dictyocaulus viviparus"
        ],
        "a": 0,
        "e": "Viral/mycoplasmal agents damage mucociliary defenses, allowing opportunistic Pasteurella/Mannheimia invasion.",
        "topicId": "u2-t02",
        "subSection": "u2-s2",
        "diff": 2
      },
      {
        "q": "Which parasite resides in the pulmonary arteries and right ventricle of dogs, causing proliferative endarteritis and pulmonary hypertension?",
        "o": [
          "Dirofilaria immitis",
          "Angiostrongylus vasorum",
          "Aelurostrongylus abstrusus",
          "Dictyocaulus arnfieldi"
        ],
        "a": 0,
        "e": "Heartworm (Dirofilaria immitis) adults cause chronic mechanical trauma, intimal villous proliferation, and pulmonary hypertension.",
        "topicId": "u2-t04",
        "subSection": "u2-s2",
        "diff": 1
      },
      {
        "q": "Pleuritis with accumulation of cloudy, foul-smelling purulent exudate in the pleural cavity is called:",
        "o": [
          "Pyothorax (empyema)",
          "Hydrothorax",
          "Hemothorax",
          "Pneumothorax"
        ],
        "a": 0,
        "e": "Pyothorax is the presence of pus in the pleural space, commonly resulting from bite wounds or migrating plant awns.",
        "topicId": "u2-t02",
        "subSection": "u2-s2",
        "diff": 1
      },
      {
        "q": "A true aneurysm is pathologically defined as a localized dilatation of a blood vessel resulting from:",
        "o": [
          "Weakening of the vascular wall with all three tunics (intima, media, adventitia) intact",
          "A rupture of the intima and media with blood contained only by adventitia",
          "An inflammatory clot occluding the arterial lumen",
          "Dissection of blood between media layers"
        ],
        "a": 0,
        "e": "A true aneurysm involves bulging of the intact attenuated vessel wall (all 3 layers).",
        "topicId": "u2-t04",
        "subSection": "u2-s2",
        "diff": 2
      },
      {
        "q": "Atrophic rhinitis in swine is caused by the synergistic action of Bordetella bronchiseptica and dermonecrotic toxin of:",
        "o": [
          "Pasteurella multocida (Type D)",
          "Haemophilus parasuis",
          "Actinobacillus pleuropneumoniae",
          "Streptococcus suis"
        ],
        "a": 0,
        "e": "Toxigenic P. multocida osteolytic dermonecrotic toxin inhibits osteoblasts, resorbing nasal turbinate bones.",
        "topicId": "u2-t02",
        "subSection": "u2-s2",
        "diff": 2
      },
      {
        "q": "Glomerulonephritis in domestic animals is most frequently initiated pathogenetically by:",
        "o": [
          "Deposition of circulating soluble antigen-antibody immune complexes in glomerular basement membranes",
          "Direct ascending bacterial infection from the urinary bladder",
          "Mechanical obstruction of collecting ducts by calcium oxalate crystals",
          "Severe hypovolaemic shock"
        ],
        "a": 0,
        "e": "Immune complex glomerulonephritis (Type III hypersensitivity) is the dominant form in dogs and cats with chronic antigenemia.",
        "topicId": "u2-t07",
        "subSection": "u2-s3",
        "diff": 2
      },
      {
        "q": "The hallmark clinical consequence of severe glomerular injury resulting in heavy loss of albumin in urine is:",
        "o": [
          "Nephrotic syndrome (proteinuria, hypoalbuminaemia, generalized oedema, and hypercholesterolaemia)",
          "Anuric renal failure with acute hydronephrosis",
          "Severe glycosuria without ketosis",
          "Renal tubular acidosis with metabolic alkalosis"
        ],
        "a": 0,
        "e": "Loss of glomerular charge/size selectivity allows albuminuria, lowering plasma oncotic pressure and causing anasarca.",
        "topicId": "u2-t07",
        "subSection": "u2-s3",
        "diff": 2
      },
      {
        "q": "Nephrosis (acute tubular necrosis/injury) is predominantly characterized morphologically by:",
        "o": [
          "Degeneration and necrosis of renal proximal tubular epithelial cells with basement membrane intact or disrupted",
          "Intense neutrophilic inflammation within Bowman's capsule space",
          "Fibrous replacement of collecting ducts",
          "Formation of multiple epithelial cysts in renal cortex"
        ],
        "a": 0,
        "e": "Ischemia or nephrotoxins (heavy metals, aminoglycosides) selectively target metabolically active proximal tubular epithelium.",
        "topicId": "u2-t07",
        "subSection": "u2-s3",
        "diff": 2
      },
      {
        "q": "The definitive histological distinction between toxic nephrosis and ischemic nephrosis is that toxic nephrosis:",
        "o": [
          "Leaves the tubular basement membrane largely intact (tubulonecrosis without tubulorrhexis)",
          "Completely disrupts the tubular basement membrane (tubulorrhexis)",
          "Never affects the proximal convoluted tubules",
          "Affects only collecting ducts in the medulla"
        ],
        "a": 0,
        "e": "Toxic necrosis spares the basement membrane, permitting regeneration; ischemic necrosis disrupts the basement membrane (tubulorrhexis).",
        "topicId": "u2-t07",
        "subSection": "u2-s3",
        "diff": 3
      },
      {
        "q": "Pyelonephritis in cattle is typically an ascending suppurative infection caused by:",
        "o": [
          "Corynebacterium renale",
          "Mycobacterium bovis",
          "Brucella abortus",
          "Leptospira hardjo"
        ],
        "a": 0,
        "e": "Corynebacterium renale possesses pili that attach to urothelium, ascending from bladder to renal pelvis and medulla.",
        "topicId": "u2-t07",
        "subSection": "u2-s3",
        "diff": 1
      },
      {
        "q": "Hydronephrosis is defined pathologically as:",
        "o": [
          "Dilation of the renal pelvis and calyces accompanied by progressive atrophy of renal parenchyma due to urinary outflow obstruction",
          "Congenital accumulation of serous fluid under the renal capsule",
          "Accumulation of pus within the renal pelvis",
          "Infiltration of renal cortex by amyloid fibrils"
        ],
        "a": 0,
        "e": "Urinary tract obstruction causes increased back-pressure, compressing parenchyma and causing ischemic medullary and cortical atrophy.",
        "topicId": "u2-t07",
        "subSection": "u2-s3",
        "diff": 1
      },
      {
        "q": "Urolithiasis in feedlot steers and wethers receiving high-concentrate grain diets most commonly forms stones composed of:",
        "o": [
          "Struvite (magnesium ammonium phosphate)",
          "Uric acid",
          "Cystine",
          "Calcium oxalate"
        ],
        "a": 0,
        "e": "High grain diets provide high phosphorus and magnesium, promoting struvite calculus precipitation in alkaline urine.",
        "topicId": "u2-t07",
        "subSection": "u2-s3",
        "diff": 2
      },
      {
        "q": "The most frequent anatomical site of urolith obstruction in rams and wethers is the:",
        "o": [
          "Urethral process (vermiform appendage)",
          "Ischial arch of the urethra",
          "Sigmoid flexure of the penis",
          "Neck of the urinary bladder"
        ],
        "a": 0,
        "e": "The filiform urethral process is extremely narrow in rams; stones easily lodge at its tip, causing bladder rupture.",
        "topicId": "u2-t07",
        "subSection": "u2-s3",
        "diff": 1
      },
      {
        "q": "In bullocks, the most common site of urethral calculus obstruction is the:",
        "o": [
          "Sigmoid flexure of the penis",
          "Urethral process",
          "Pelvic urethra near prostate",
          "Glans penis"
        ],
        "a": 0,
        "e": "The distal curve of the S-shaped sigmoid flexure is the primary site of urolith lodgement in male cattle.",
        "topicId": "u2-t07",
        "subSection": "u2-s3",
        "diff": 1
      },
      {
        "q": "White spotted kidney in calves is a subclinical multifocal interstitial nephritis caused by:",
        "o": [
          "Escherichia coli bacteremia",
          "Corynebacterium renale",
          "Leptospira interrogans",
          "Salmonella Dublin"
        ],
        "a": 0,
        "e": "Transient coliform bacteremia in neonatal calves leaves discrete white non-suppurative lymphoplasmacytic interstitial cortical spots.",
        "topicId": "u2-t07",
        "subSection": "u2-s3",
        "diff": 2
      },
      {
        "q": "Cystic endometrial hyperplasia (CEH) - pyometra complex in intact bitches is primed by which hormone?",
        "o": [
          "Progesterone (during prolonged luteal phase / diestrus)",
          "Estrogen alone",
          "Prolactin",
          "Oxytocin"
        ],
        "a": 0,
        "e": "Repeated diestrual progesterone causes endometrial gland proliferation and secretions, allowing secondary E. coli invasion.",
        "topicId": "u2-t08",
        "subSection": "u2-s3",
        "diff": 2
      },
      {
        "q": "In bovine brucellosis (Brucella abortus), the characteristic gross lesion on the fetal placenta is:",
        "o": [
          "Necrotizing placentitis with leathery, thickened intercotyledonary areas and necrotic yellowish cotyledons",
          "Smooth, shiny, transparent chorioallantois with no exudate",
          "Generalized hydropic villous edema without necrosis",
          "Pure cystic glandular hyperplasia"
        ],
        "a": 0,
        "e": "Brucella abortus targets erythritol in trophoblasts, causing severe necrotizing placentitis and leathery intercotyledonary thickening.",
        "topicId": "u2-t08",
        "subSection": "u2-s3",
        "diff": 2
      },
      {
        "q": "Campylobacter fetus subsp. venerealis in cattle causes infertility and abortion characterized by:",
        "o": [
          "Subacute endometritis and salpingitis preventing conception",
          "Massive fetal mummification at 8 months of gestation",
          "Extensive hepatic necrosis with target lesions in the cow",
          "Severe fibrotic orchitis in bulls"
        ],
        "a": 0,
        "e": "Venereal transmission produces mild endometritis causing early embryonic death, repeat breeding, and irregular heat cycles.",
        "topicId": "u2-t08",
        "subSection": "u2-s3",
        "diff": 2
      },
      {
        "q": "Granulomatous orchitis with extensive testicular destruction and 'sperm granuloma' formation results from:",
        "o": [
          "Autoimmune inflammatory reaction against extravasated spermatozoa following ductal rupture",
          "Ascending viral infection with Canine Distemper",
          "Nutritional vitamin A deficiency",
          "Direct mechanical pressure from cryptorchidism"
        ],
        "a": 0,
        "e": "Spermatozoa are immunologically foreign; disruption of the blood-testis barrier incites an intense granulomatous foreign-body reaction.",
        "topicId": "u2-t08",
        "subSection": "u2-s3",
        "diff": 3
      },
      {
        "q": "The most common form of mastitis in dairy cattle, causing chronic fibrosis and progressive loss of functional secretory tissue, is caused by:",
        "o": [
          "Streptococcus agalactiae and Staphylococcus aureus",
          "Escherichia coli",
          "Klebsiella pneumoniae",
          "Trueperella pyogenes alone"
        ],
        "a": 0,
        "e": "Staph aureus and Strep agalactiae produce chronic contagious mastitis with microabscesses, ductal fibrosis, and agalactia.",
        "topicId": "u2-t08",
        "subSection": "u2-s3",
        "diff": 1
      },
      {
        "q": "Coliform mastitis in dairy cows is characterized clinically and pathologically by:",
        "o": [
          "Severe acute endotoxemia, vascular thrombosis, and marked serous/hemorrhagic gland edema",
          "Slow insidious induration with milk stones",
          "Caseous granulomas with Langhans giant cells",
          "Pure purulent galactophoritis without systemic signs"
        ],
        "a": 0,
        "e": "LPS endotoxin released by E. coli causes microvascular damage, gland necrosis, profound leukopenia, and systemic septic shock.",
        "topicId": "u2-t08",
        "subSection": "u2-s3",
        "diff": 2
      },
      {
        "q": "'Summer mastitis' in non-lactating heifers and dry cows is caused by Trueperella pyogenes transmitted by the fly:",
        "o": [
          "Hydrotaea irritans",
          "Stomoxys calcitrans",
          "Tabanus bovinus",
          "Musca domestica"
        ],
        "a": 0,
        "e": "Hydrotaea irritans (the sheep headfly) bites teat orifices in summer, inoculating Trueperella pyogenes and Peptococcus.",
        "topicId": "u2-t08",
        "subSection": "u2-s3",
        "diff": 2
      },
      {
        "q": "Freemartinism in cattle is an intersex condition developing in a female twin due to:",
        "o": [
          "Placental vascular anastomoses with a male co-twin sharing anti-Müllerian hormone and testosterone",
          "Single X chromosome monosomy (XO)",
          "Somatic mutation in the SRY gene of the female",
          "Excessive maternal progesterone therapy"
        ],
        "a": 0,
        "e": "Chorionic vascular fusion lets male anti-Müllerian hormone suppress female paramesonephric (Müllerian) duct development.",
        "topicId": "u2-t08",
        "subSection": "u2-s3",
        "diff": 2
      },
      {
        "q": "Polioencephalomalacia (cerebrocortical necrosis) in ruminants is etiologically linked to:",
        "o": [
          "Thiamine (Vitamin B1) deficiency or high dietary sulfur intake",
          "Copper deficiency",
          "Toxoplasma gondii infection",
          "Vitamin A deficiency"
        ],
        "a": 0,
        "e": "Thiamine pyrophosphate depletion impairs cerebral neuronal energy, causing laminar cortical necrosis that fluoresces under Wood's lamp.",
        "topicId": "u2-t09",
        "subSection": "u2-s4",
        "diff": 2
      },
      {
        "q": "The pathognomonic diagnostic lesion of Rabies in the central nervous system is the presence of:",
        "o": [
          "Intracytoplasmic Negri bodies in pyramidal neurons of hippocampus and Purkinje cells of cerebellum",
          "Intranuclear Cowdry type A inclusion bodies in astrocytes",
          "Microabscesses in the brainstem medulla",
          "Extensive myelin sheath vacuolation (status spongiosus)"
        ],
        "a": 0,
        "e": "Negri bodies are round/oval eosinophilic intracytoplasmic inclusions containing rabies viral ribonucleoprotein complexes.",
        "topicId": "u2-t09",
        "subSection": "u2-s4",
        "diff": 1
      },
      {
        "q": "Bovine Spongiform Encephalopathy (BSE) and scrapie are neuropathologically characterized by:",
        "o": [
          "Neuronal vacuolation and status spongiosus in the brainstem without any inflammatory infiltrate",
          "Massive suppurative infiltration of the meninges by neutrophils",
          "Intranuclear inclusion bodies in ependymal cells",
          "Severe thrombosis of cerebral cortical arteries"
        ],
        "a": 0,
        "e": "Prion conversion (PrP-Sc) induces neurodegeneration, intracytoplasmic neuronal vacuoles, and astrogliosis with zero inflammation.",
        "topicId": "u2-t09",
        "subSection": "u2-s4",
        "diff": 2
      },
      {
        "q": "Listeriosis (circling disease) in ruminants produces which pathognomonic lesion in the brainstem medulla and pons?",
        "o": [
          "Microabscesses with perivascular mononuclear cuffing",
          "Large cavitation cysts (malacia)",
          "Extensive amyloid plaque deposition",
          "Eosinophilic meningeal infiltration"
        ],
        "a": 0,
        "e": "Listeria monocytogenes ascends cranial nerves (trigeminal), creating focal microabscesses and mononuclear perivascular cuffs.",
        "topicId": "u2-t09",
        "subSection": "u2-s4",
        "diff": 2
      },
      {
        "q": "Equine Encephalomyelitis (Eastern, Western, Venezuelan) causes lesions predominantly localized to:",
        "o": [
          "Cerebral cortex and thalamic grey matter with neuronal necrosis and neutrophilic-to-mononuclear cuffs",
          "Cerebellar Purkinje cells only",
          "Lumbosacral spinal cord white matter only",
          "Peripheral motor nerves"
        ],
        "a": 0,
        "e": "Arboviral alphaviruses destroy cortical neurons, inciting perivascular cuffing, microgliosis, and neuronophagia.",
        "topicId": "u2-t09",
        "subSection": "u2-s4",
        "diff": 3
      },
      {
        "q": "Wallerian degeneration occurs in a peripheral nerve fiber following:",
        "o": [
          "Transection or crush injury of the axon, leading to anterograde axonal and myelin breakdown distal to injury",
          "Retrograde loss of the cell body only",
          "Congenital failure of Schwann cell migration",
          "Selective destruction of the perineurium"
        ],
        "a": 0,
        "e": "Wallerian degeneration is the anterograde breakdown of the axon and myelin sheath distal to axonal transection.",
        "topicId": "u2-t09",
        "subSection": "u2-s4",
        "diff": 2
      },
      {
        "q": "Rickets in young growing animals is characterized pathogenetically by:",
        "o": [
          "Failure of mineralization of osteoid and cartilaginous matrix at the growth plates (epiphyses)",
          "Excessive osteoclastic bone resorption with fibrous replacement",
          "Failure of osteoclasts to resorb bone (dense heavy bones)",
          "Pure loss of bone mass with normal mineral-to-matrix ratio"
        ],
        "a": 0,
        "e": "Vitamin D or phosphorus deficiency impairs calcification of provisional cartilage, leading to widened, irregular growth plates.",
        "topicId": "u2-t03",
        "subSection": "u2-s4",
        "diff": 1
      },
      {
        "q": "Osteomalacia differs from rickets in that osteomalacia occurs in:",
        "o": [
          "Adult mature animals with closed growth plates, causing soft, unmineralized cortical osteoid",
          "Young growing animals with open growth plates",
          "Animals with primary bone marrow aplasia",
          "Fetuses in utero"
        ],
        "a": 0,
        "e": "Osteomalacia is defective mineralization of remodeled osteoid in adults, predisposing to pathological fractures and deformities.",
        "topicId": "u2-t03",
        "subSection": "u2-s4",
        "diff": 1
      },
      {
        "q": "Fibrous osteodystrophy (osteodystrophia fibrosa / rubber jaw) develops as a consequence of:",
        "o": [
          "Prolonged hyperparathyroidism (primary, secondary nutritional, or secondary renal)",
          "Vitamin C deficiency (scurvy)",
          "Fluorosis with osteosclerosis",
          "Hypovitaminosis A"
        ],
        "a": 0,
        "e": "Excess parathyroid hormone stimulates osteoclastic bone resorption; the lost bone is replaced by fibrous connective tissue.",
        "topicId": "u2-t03",
        "subSection": "u2-s4",
        "diff": 2
      },
      {
        "q": "'Big head' in horses is a form of nutritional fibrous osteodystrophy caused by diets:",
        "o": [
          "High in phosphorus and low in calcium (e.g. excessive wheat bran)",
          "High in calcium and low in phosphorus",
          "Deficient in vitamin D and high in protein",
          "Toxic in fluoride compounds"
        ],
        "a": 0,
        "e": "High phosphorus diet complexes calcium in gut, inducing hypocalcaemia, secondary hyperparathyroidism, and facial bone swelling.",
        "topicId": "u2-t03",
        "subSection": "u2-s4",
        "diff": 2
      },
      {
        "q": "Osteopetrosis (marble bone disease) is an inherited metabolic bone disease characterized by:",
        "o": [
          "Defect in osteoclasts causing failure of bone resorption and solid, dense, fragile bones lacking marrow cavity",
          "Accelerated bone resorption with soft bones",
          "Malignant transformation of osteoblasts",
          "Bacterial osteomyelitis"
        ],
        "a": 0,
        "e": "Defective osteoclasts fail to remodel primary spongiosa; the medullary cavity remains filled with calcified cartilage.",
        "topicId": "u2-t03",
        "subSection": "u2-s4",
        "diff": 2
      },
      {
        "q": "White muscle disease in calves and lambs is etiologically caused by nutritional deficiency of:",
        "o": [
          "Vitamin E and/or Selenium",
          "Copper and/or Molybdenum",
          "Calcium and/or Phosphorus",
          "Vitamin D3"
        ],
        "a": 0,
        "e": "Glutathione peroxidase (Se) and alpha-tocopherol (Vit E) neutralize peroxides; deficiency produces Zenker's myocardial/skeletal myonecrosis.",
        "topicId": "u2-t03",
        "subSection": "u2-s4",
        "diff": 1
      },
      {
        "q": "Capture myopathy in wild ungulates and birds is a severe metabolic muscle disorder triggered by:",
        "o": [
          "Extreme exertion, fear, and struggle during capture, resulting in massive lactic acidosis and rhabdomyolysis",
          "Inhalation of toxic anesthetic gases",
          "Congenital glycogen storage disease",
          "Bacterial infection with Clostridium septicum"
        ],
        "a": 0,
        "e": "Sympathetic hyperstimulation causes intense anaerobic glycolysis, hyperthermia, metabolic acidosis, myoglobinuria, and acute renal failure.",
        "topicId": "u2-t03",
        "subSection": "u2-s4",
        "diff": 2
      },
      {
        "q": "Goitre is pathologically defined as:",
        "o": [
          "Non-neoplastic, non-inflammatory enlargement of the thyroid gland",
          "Malignant adenocarcinoma of thyroid follicular cells",
          "Severe atrophy and fibrosis of the thyroid lobes",
          "Metastatic calcification of the thyroid capsule"
        ],
        "a": 0,
        "e": "Goitre is thyroid hypertrophy and hyperplasia driven by compensatory TSH secretion, usually from dietary iodine deficiency.",
        "topicId": "u2-t10",
        "subSection": "u2-s4",
        "diff": 1
      },
      {
        "q": "Primary hyperparathyroidism in dogs is most commonly caused by a functional:",
        "o": [
          "Parathyroid adenoma",
          "Chronic renal failure with hyperphosphatemia",
          "Dietary calcium deficiency",
          "Thyroid C-cell carcinoma"
        ],
        "a": 0,
        "e": "Autonomous secretion of PTH by a solitary parathyroid adenoma causes hypercalcaemia, hypophosphatemia, and bone resorption.",
        "topicId": "u2-t10",
        "subSection": "u2-s4",
        "diff": 2
      },
      {
        "q": "Cushing's disease (pituitary-dependent hyperadrenocorticism) in dogs is characterized by:",
        "o": [
          "Pituitary ACTH-secreting adenoma leading to bilateral adrenal cortical hyperplasia",
          "Primary adrenal cortical atrophy (Addison's)",
          "Complete aplasia of the adrenal medulla",
          "Destruction of the hypothalamus by trauma"
        ],
        "a": 0,
        "e": "Excess ACTH from a pituitary corticotrope tumor drives bilateral adrenal hyperplasia and hypercortisolemia.",
        "topicId": "u2-t10",
        "subSection": "u2-s4",
        "diff": 2
      },
      {
        "q": "Diabetes mellitus in dogs is primarily characterized by:",
        "o": [
          "Hypoinsulinaemia due to autoimmune or pancreatitis-induced destruction of pancreatic beta cells",
          "Absolute insulin resistance with normal beta cell mass",
          "Excessive secretion of glucagon by an alpha-cell tumor",
          "Overproduction of cortisol by the thyroid"
        ],
        "a": 0,
        "e": "Canine diabetes resembles human Type 1 diabetes, featuring irreversible loss of pancreatic beta cells and lifelong insulin requirement.",
        "topicId": "u2-t10",
        "subSection": "u2-s4",
        "diff": 1
      },
      {
        "q": "Equine Pituitary Pars Intermedia Dysfunction (PPID) in aged horses is clinically characterized by:",
        "o": [
          "Hirsutism (hypertrichosis), polyuria/polydipsia, and laminitis due to loss of dopaminergic inhibition",
          "Severe hypoglycemia and acute collapse",
          "Congenital dwarfism with thyroid aplasia",
          "Hypocalcaemia and muscle tetany"
        ],
        "a": 0,
        "e": "Dopaminergic neurodegeneration disinhibits pars intermedia melanotropes, overproducing ACTH, CLIP, and alpha-MSH.",
        "topicId": "u2-t10",
        "subSection": "u2-s4",
        "diff": 2
      },
      {
        "q": "Regenerative anaemia is clearly distinguished from non-regenerative anaemia on a blood smear by the presence of:",
        "o": [
          "Reticulocytes, polychromasia, and nucleated red blood cells",
          "Strictly normocytic, normochromic erythrocytes with zero reticulocytes",
          "Hypoplasia of erythroid precursors in bone marrow",
          "Total absence of Howell-Jolly bodies"
        ],
        "a": 0,
        "e": "In regenerative anemia, marrow responds actively by releasing immature polychromatophilic reticulocytes into peripheral circulation.",
        "topicId": "u2-t05",
        "subSection": "u2-s5",
        "diff": 1
      },
      {
        "q": "Aplastic anaemia is characterized pathologically by:",
        "o": [
          "Pancytopenia in peripheral blood with marked replacement of hematopoietic marrow by adipocytes",
          "Massive expansion of erythroid precursors in the spleen",
          "Severe hemolysis with elevated serum unconjugated bilirubin",
          "Profound reticulocytosis with polychromasia"
        ],
        "a": 0,
        "e": "Bone marrow failure causes pancytopenia (erythroid, myeloid, megakaryocytic depletion) with fatty replacement.",
        "topicId": "u2-t05",
        "subSection": "u2-s5",
        "diff": 2
      },
      {
        "q": "Which infectious agent causes severe non-regenerative anaemia in domestic cats by attacking marrow stem cells?",
        "o": [
          "Feline Leukemia Virus (FeLV)",
          "Feline Parvovirus",
          "Feline Calicivirus",
          "Toxoplasma gondii"
        ],
        "a": 0,
        "e": "FeLV subgroup C selectively infects and destroys erythroid progenitor cells, producing pure red cell aplasia.",
        "topicId": "u2-t05",
        "subSection": "u2-s5",
        "diff": 2
      },
      {
        "q": "Hyperkeratosis of the skin is histologically defined as:",
        "o": [
          "Hypertrophy and thickening of the stratum corneum",
          "Intercellular edema within the epidermis (spongiosis)",
          "Separation of the dermal-epidermal junction",
          "Accumulation of fluid in the stratum spinosum"
        ],
        "a": 0,
        "e": "Hyperkeratosis is increased thickness of the cornified layer, subdivided into orthokeratotic (anuclear) and parakeratotic (nucleated).",
        "topicId": "u2-t11",
        "subSection": "u2-s5",
        "diff": 1
      },
      {
        "q": "Parakeratosis, characterized by retention of pyknotic nuclei in the stratum corneum, is classically caused in swine by:",
        "o": [
          "Dietary zinc deficiency (often exacerbated by excess calcium)",
          "Vitamin C deficiency",
          "Copper toxicity",
          "Selenium poisoning"
        ],
        "a": 0,
        "e": "Zinc deficiency in growing pigs impairs keratinocyte maturation, producing crusty, fissured, parakeratotic skin plaques.",
        "topicId": "u2-t11",
        "subSection": "u2-s5",
        "diff": 1
      },
      {
        "q": "Spongiosis in dermatopathology is defined as:",
        "o": [
          "Intercellular edema of the epidermis widening the intercellular spaces between keratinocytes",
          "Intracellular ballooning of individual keratinocytes",
          "Thickening of the stratum granulosum",
          "Formation of subcorneal pustules"
        ],
        "a": 0,
        "e": "Spongiosis is intercellular fluid accumulation, giving the epidermis a sponge-like appearance on histology.",
        "topicId": "u2-t11",
        "subSection": "u2-s5",
        "diff": 2
      },
      {
        "q": "Acantholysis, the loss of cohesion between keratinocytes with intraepidermal clefting, is the hallmark of:",
        "o": [
          "Pemphigus vulgaris and Pemphigus foliaceus",
          "Dermatophytosis (ringworm)",
          "Bovine papillomatosis",
          "Sarcoptic mange"
        ],
        "a": 0,
        "e": "Autoantibodies against desmosomal cadherins (desmogleins) dissolve desmosomes, freeing rounded acantholytic cells into blister fluid.",
        "topicId": "u2-t11",
        "subSection": "u2-s5",
        "diff": 2
      },
      {
        "q": "'Diamond skin disease' characterized by square or rhomboid cutaneous inflective plaques in swine is pathognomonic for:",
        "o": [
          "Erysipelothrix rhusiopathiae",
          "Staphylococcus hyicus",
          "Streptococcus suis",
          "Actinobacillus pleuropneumoniae"
        ],
        "a": 0,
        "e": "Bacterial neuraminidase damages endothelial cells in dermal arterioles, inducing thrombosis and rhomboid/diamond-shaped cutaneous infarcts.",
        "topicId": "u2-t11",
        "subSection": "u2-s5",
        "diff": 1
      },
      {
        "q": "Greasy pig disease (exudative epidermitis) in suckling and weaned piglets is etiologically caused by:",
        "o": [
          "Staphylococcus hyicus",
          "Erysipelothrix rhusiopathiae",
          "Pasteurella multocida",
          "Treponema hyodysenteriae"
        ],
        "a": 0,
        "e": "Staphylococcus hyicus produces exfoliative toxins that cleave desmoglein-1, causing widespread subcorneal pustular exudative dermatitis.",
        "topicId": "u2-t11",
        "subSection": "u2-s5",
        "diff": 1
      },
      {
        "q": "Ringworm (dermatophytosis) in calves is most commonly caused by which fungal pathogen?",
        "o": [
          "Trichophyton verrucosum",
          "Microsporum canis",
          "Aspergillus fumigatus",
          "Candida albicans"
        ],
        "a": 0,
        "e": "Trichophyton verrucosum invades hair shafts and stratum corneum in calves, producing circular, crusty, alopecic lesions.",
        "topicId": "u2-t11",
        "subSection": "u2-s5",
        "diff": 1
      },
      {
        "q": "Sarcoptic mange in dogs and pigs is characterized microscopically by:",
        "o": [
          "Burrows in the stratum corneum containing mites, ova, and feces with intense pruritic dermatitis",
          "Mites strictly inside hair follicles and sebaceous glands",
          "Superficial non-pruritic scale without inflammation",
          "Subcutaneous granulomas around dead larvae"
        ],
        "a": 0,
        "e": "Sarcoptes scabiei females tunnel in the stratum corneum, inciting Type I and Type IV allergic hypersensitivity.",
        "topicId": "u2-t11",
        "subSection": "u2-s5",
        "diff": 1
      },
      {
        "q": "Demodectic mange (Demodex canis) in dogs differs from sarcoptic mange in that Demodex mites:",
        "o": [
          "Reside inside hair follicles and sebaceous glands and are generally non-pruritic in early stages",
          "Tunnel in the stratum corneum causing violent itching",
          "Are highly contagious to humans",
          "Are transmitted venereally only"
        ],
        "a": 0,
        "e": "Demodex mites are normal commensals in hair follicles; overgrowth occurs when T-cell immunity is suppressed.",
        "topicId": "u2-t11",
        "subSection": "u2-s5",
        "diff": 2
      },
      {
        "q": "Cataract is defined pathologically as:",
        "o": [
          "Any opacity or loss of transparency of the crystalline lens",
          "Increased intraocular pressure damaging the optic nerve",
          "Inflammation of the cornea with vascular ingrowth",
          "Prolapse of the third eyelid gland"
        ],
        "a": 0,
        "e": "Cataract involves denaturation and aggregation of lens crystallin proteins, causing clouding and blindness.",
        "topicId": "u2-t12",
        "subSection": "u2-s5",
        "diff": 1
      },
      {
        "q": "Glaucoma in domestic animals is defined as a pathological state characterized by:",
        "o": [
          "Sustained elevation of intraocular pressure incompatible with normal retinal and optic nerve health",
          "Opacity of the anterior lens capsule only",
          "Infection of the ciliary body by Pseudomonas",
          "Ulceration of the corneal epithelium"
        ],
        "a": 0,
        "e": "Impaired drainage of aqueous humor through the iridocorneal angle increases IOP, producing buphthalmos and retinal atrophy.",
        "topicId": "u2-t12",
        "subSection": "u2-s5",
        "diff": 1
      },
      {
        "q": "Infectious Bovine Keratoconjunctivitis (pink eye) in cattle is primarily caused by:",
        "o": [
          "Moraxella bovis",
          "Chlamydia pecorum",
          "Thelazia rhodesii",
          "Mycoplasma conjunctivae"
        ],
        "a": 0,
        "e": "Moraxella bovis uses type IV fimbriae and RTX hemotoxin (Mbx) to attach to and lyse corneal epithelial cells, causing central ulceration.",
        "topicId": "u2-t12",
        "subSection": "u2-s5",
        "diff": 1
      },
      {
        "q": "Otitis externa in dogs is most frequently complicated by secondary proliferation of which opportunistic yeast?",
        "o": [
          "Malassezia pachydermatis",
          "Candida albicans",
          "Cryptococcus neoformans",
          "Blastomyces dermatitidis"
        ],
        "a": 0,
        "e": "Malassezia pachydermatis is a peanut-shaped lipophilic yeast that proliferates in inflamed canine ear canals.",
        "topicId": "u2-t12",
        "subSection": "u2-s5",
        "diff": 1
      },
      {
        "q": "The pathological condition in cattle known as 'cancer eye' is most commonly a:",
        "o": [
          "Squamous cell carcinoma arising from the conjunctiva or cornea",
          "Malignant melanoma of the choroid",
          "Retinoblastoma",
          "Lymphosarcoma of the retrobulbar fat"
        ],
        "a": 0,
        "e": "Bovine ocular SCC develops on unpigmented eyelids and conjunctiva exposed to chronic solar ultraviolet radiation.",
        "topicId": "u2-t12",
        "subSection": "u2-s5",
        "diff": 1
      },
      {
        "q": "Hypersplenism is characterized clinically and pathologically by:",
        "o": [
          "Splenomegaly with premature and excessive destruction of one or more peripheral blood cell lines",
          "Complete atrophy of the splenic red pulp",
          "Congenital aplasia of the spleen",
          "Pure deposition of amyloid in lymphoid follicles without cell destruction"
        ],
        "a": 0,
        "e": "Splenic enlargement increases phagocytic sequestration, causing hemolytic anemia, leukopenia, or thrombocytopenia.",
        "topicId": "u2-t06",
        "subSection": "u2-s5",
        "diff": 2
      }
    ],
    "tf": [
      {
        "q": "Actinomycosis (lumpy jaw) predominantly affects soft tissues like the tongue, sparing the mandible.",
        "a": false,
        "e": "Actinomyces bovis targets bones (mandible, maxilla); Actinobacillus lignieresii targets soft tissues (tongue).",
        "topicId": "u2-t01",
        "subSection": "u2-s1",
        "diff": 1
      },
      {
        "q": "Grain overload rumenitis leads to chemical burn of the mucosal epithelium, allowing fungal and bacterial invasion into the portal system.",
        "a": true,
        "e": "Lactic acidosis destroys the mucosal barrier, leading to secondary mycotic rumenitis and hepatic necrobacillary abscesses.",
        "topicId": "u2-t01",
        "subSection": "u2-s1",
        "diff": 1
      },
      {
        "q": "In intussusception, the inner entering segment of intestine is termed the intussuscipiens.",
        "a": false,
        "e": "The inner invaginating segment is the intussusceptum; the outer receiving segment is the intussuscipiens.",
        "topicId": "u2-t01",
        "subSection": "u2-s1",
        "diff": 2
      },
      {
        "q": "Johne's disease produces thick, corrugated mucosal folds in the ileum that do not disappear when the intestine is stretched.",
        "a": true,
        "e": "Massive infiltration of the lamina propria and submucosa by epithelioid macrophages creates permanent cerebriform corrugations.",
        "topicId": "u2-t01",
        "subSection": "u2-s1",
        "diff": 1
      },
      {
        "q": "In pre-hepatic (hemolytic) jaundice, bile pigments are absent from urine because unconjugated bilirubin is bound to albumin and cannot cross the glomerulus.",
        "a": true,
        "e": "Unconjugated bilirubin is lipophilic and tightly bound to albumin, so it cannot be filtered into urine.",
        "topicId": "u2-t01",
        "subSection": "u2-s1",
        "diff": 2
      },
      {
        "q": "Clay-colored (acholic) feces are characteristically seen in hemolytic jaundice.",
        "a": false,
        "e": "Acholic feces occur in obstructive (post-hepatic) jaundice because bile flow into the duodenum is blocked.",
        "topicId": "u2-t01",
        "subSection": "u2-s1",
        "diff": 1
      },
      {
        "q": "Canine adenovirus-1 produces diagnostic intranuclear inclusion bodies in both hepatocytes and vascular endothelial cells.",
        "a": true,
        "e": "CAV-1 has a tropism for hepatocytes and endothelium, producing Cowdry A intranuclear inclusions and hemorrhage.",
        "topicId": "u2-t01",
        "subSection": "u2-s1",
        "diff": 2
      },
      {
        "q": "Acute hemorrhagic pancreatitis in dogs is pathogenetically triggered by intra-acinar activation of digestive proenzymes.",
        "a": true,
        "e": "Trypsinogen activates prematurely to trypsin, which activates elastase and phospholipases, causing auto-digestion.",
        "topicId": "u2-t01",
        "subSection": "u2-s1",
        "diff": 1
      },
      {
        "q": "Button ulcers in the swine cecum are pathognomonic lesions of chronic hog cholera (Classical Swine Fever).",
        "a": true,
        "e": "Ischemic infarction of gut-associated lymphoid tissue followed by secondary bacterial necrosis creates concentric button ulcers.",
        "topicId": "u2-t01",
        "subSection": "u2-s1",
        "diff": 1
      },
      {
        "q": "Fibrinous bronchopneumonia in cattle (shipping fever) is classically associated with infection by Mannheimia haemolytica.",
        "a": true,
        "e": "Mannheimia haemolytica leukotoxin destroys bovine neutrophils, forming streaming 'oat cells' within dense fibrinous exudate.",
        "topicId": "u2-t02",
        "subSection": "u2-s2",
        "diff": 1
      },
      {
        "q": "Suppurative bronchopneumonia typically involves the caudodorsal lung lobes due to preferential aeration.",
        "a": false,
        "e": "Suppurative bronchopneumonia involves cranioventral lobes (apical, cardiac) due to gravitational settling of inhaled pathogens.",
        "topicId": "u2-t02",
        "subSection": "u2-s2",
        "diff": 1
      },
      {
        "q": "Interstitial pneumonia is primarily characterized by exudation of neutrophils filling the alveolar spaces.",
        "a": false,
        "e": "Interstitial pneumonia involves thickening of alveolar septa by edema, mononuclear cells, and type II pneumocyte proliferation.",
        "topicId": "u2-t02",
        "subSection": "u2-s2",
        "diff": 1
      },
      {
        "q": "Atelectasis is defined as the permanent, irreversible overexpansion of alveoli with destruction of alveolar walls.",
        "a": false,
        "e": "Overexpansion with wall destruction is emphysema; atelectasis is incomplete expansion or collapse of lung tissue.",
        "topicId": "u2-t02",
        "subSection": "u2-s2",
        "diff": 1
      },
      {
        "q": "Cattle are exceptionally prone to interlobular emphysema because bovine lungs lack collateral ventilation and have thick connective tissue septa.",
        "a": true,
        "e": "Air forced out of ruptured alveoli enters wide interlobular septa, causing prominent bead-like distension of the interlobular spaces.",
        "topicId": "u2-t02",
        "subSection": "u2-s2",
        "diff": 2
      },
      {
        "q": "Traumatic reticulopericarditis in cattle gives rise to a 'bread and butter' fibrinous pericarditis.",
        "a": true,
        "e": "Thick, shaggy deposits of yellow-white fibrin gluing the visceral and parietal pericardium resemble buttered slices of bread pulled apart.",
        "topicId": "u2-t04",
        "subSection": "u2-s2",
        "diff": 1
      },
      {
        "q": "Endocardiosis in old dogs is a chronic bacterial infection affecting the aortic semilunar valves.",
        "a": false,
        "e": "Endocardiosis is non-infectious, degenerative myxomatous thickening primarily affecting the atrioventricular (mitral) valve.",
        "topicId": "u2-t04",
        "subSection": "u2-s2",
        "diff": 1
      },
      {
        "q": "Erysipelothrix rhusiopathiae infection in swine commonly produces large, friable, cauliflower-like vegetative lesions on heart valves.",
        "a": true,
        "e": "Valvular endocarditis with thrombotic vegetations is a hallmark chronic manifestation of swine erysipelas.",
        "topicId": "u2-t04",
        "subSection": "u2-s2",
        "diff": 1
      },
      {
        "q": "Mulberry heart disease in pigs is a nutritional cardiomyopathy caused by excessive dietary iron supplementation.",
        "a": false,
        "e": "Mulberry heart disease is caused by deficiency of Vitamin E and/or Selenium.",
        "topicId": "u2-t04",
        "subSection": "u2-s2",
        "diff": 1
      },
      {
        "q": "Glomerulonephritis in domestic animals is most commonly an immune-complex mediated disease (Type III hypersensitivity).",
        "a": true,
        "e": "Circulating antigen-antibody complexes become trapped in glomerular capillary walls, inciting complement activation and inflammation.",
        "topicId": "u2-t07",
        "subSection": "u2-s3",
        "diff": 1
      },
      {
        "q": "Nephrotic syndrome is characterized by heavy proteinuria, hypoalbuminaemia, generalized edema, and hypercholesterolaemia.",
        "a": true,
        "e": "Glomerular proteinuria depletes circulating albumin, lowering oncotic pressure to cause edema and stimulating hepatic lipoprotein synthesis.",
        "topicId": "u2-t07",
        "subSection": "u2-s3",
        "diff": 1
      },
      {
        "q": "Toxic nephrosis characteristically preserves the renal tubular basement membrane, allowing epithelial regeneration if the animal survives.",
        "a": true,
        "e": "Unlike ischemic tubulorrhexis, nephrotoxins leave the basement membrane scaffold intact for re-epithelialization.",
        "topicId": "u2-t07",
        "subSection": "u2-s3",
        "diff": 2
      },
      {
        "q": "Ascending pyelonephritis in cattle is most frequently caused by Corynebacterium renale.",
        "a": true,
        "e": "Corynebacterium renale produces urease and possesses fimbriae that mediate attachment and ascent along the urinary tract.",
        "topicId": "u2-t07",
        "subSection": "u2-s3",
        "diff": 1
      },
      {
        "q": "The urethral process (vermiform appendage) is the most frequent site of urolith obstruction in steers and bulls.",
        "a": false,
        "e": "The sigmoid flexure is the site in steers/bulls; the urethral process is the primary obstruction site in rams and wethers.",
        "topicId": "u2-t07",
        "subSection": "u2-s3",
        "diff": 1
      },
      {
        "q": "Pyometra in the bitch is initiated by progesterone stimulation during diestrus followed by secondary bacterial invasion.",
        "a": true,
        "e": "Progesterone induces cystic endometrial hyperplasia and suppresses myometrial contractions, favoring E. coli colonization.",
        "topicId": "u2-t08",
        "subSection": "u2-s3",
        "diff": 1
      },
      {
        "q": "Bovine brucellosis causes necrotizing placentitis characterized by a thick, leathery intercotyledonary chorioallantois.",
        "a": true,
        "e": "Brucella abortus replicates within trophoblasts, causing extensive placental necrosis and intercotyledonary leathery thickening.",
        "topicId": "u2-t08",
        "subSection": "u2-s3",
        "diff": 1
      },
      {
        "q": "Coliform mastitis in dairy cattle is primarily caused by Gram-positive spore-forming bacilli.",
        "a": false,
        "e": "Coliform mastitis is caused by Gram-negative enteric bacilli (Escherichia coli, Klebsiella pneumoniae).",
        "topicId": "u2-t08",
        "subSection": "u2-s3",
        "diff": 1
      },
      {
        "q": "A freemartin is a sterile female calf born co-twin to a male calf due to placental vascular anastomoses in utero.",
        "a": true,
        "e": "Chorionic vascular fusion allows anti-Müllerian hormone and testosterone from the male fetus to masculinize the female twin.",
        "topicId": "u2-t08",
        "subSection": "u2-s3",
        "diff": 1
      },
      {
        "q": "Polioencephalomalacia in cattle and sheep produces laminar necrosis of the cerebral cortex that fluoresces under ultraviolet light.",
        "a": true,
        "e": "Degenerating cerebral cortical tissue accumulates lipopigments that emit autofluorescence under UV (Wood's lamp).",
        "topicId": "u2-t09",
        "subSection": "u2-s4",
        "diff": 1
      },
      {
        "q": "Negri bodies in rabies are pathognomonic intranuclear viral inclusion bodies found in microglial cells.",
        "a": false,
        "e": "Negri bodies are intracytoplasmic (not intranuclear) eosinophilic inclusions found in neurons (hippocampus and Purkinje cells).",
        "topicId": "u2-t09",
        "subSection": "u2-s4",
        "diff": 1
      },
      {
        "q": "Prion diseases like BSE and Scrapie elicit an intense neutrophilic meningitis and marked perivascular cuffing.",
        "a": false,
        "e": "Prion diseases are characterized by spongiform change and neuronal vacuolation with a complete absence of inflammatory infiltrate.",
        "topicId": "u2-t09",
        "subSection": "u2-s4",
        "diff": 1
      },
      {
        "q": "Listeriosis in ruminants causes microabscesses localized primarily in the brainstem (pons and medulla oblongata).",
        "a": true,
        "e": "Listeria monocytogenes ascends sensory branches of the trigeminal nerve, settling in the brainstem to form microabscesses.",
        "topicId": "u2-t09",
        "subSection": "u2-s4",
        "diff": 1
      },
      {
        "q": "Rickets is characterized by defective mineralization of osteoid in adult animals after the growth plates have fused.",
        "a": false,
        "e": "Defective mineralization in adults with closed physes is osteomalacia; rickets occurs in young animals with open physes.",
        "topicId": "u2-t03",
        "subSection": "u2-s4",
        "diff": 1
      },
      {
        "q": "Fibrous osteodystrophy ('rubber jaw') is caused by prolonged hyperparathyroidism stimulating excessive osteoclastic bone resorption.",
        "a": true,
        "e": "Continuous PTH stimulation resorbs mineralized bone, which is replaced by proliferating fibrovascular tissue.",
        "topicId": "u2-t03",
        "subSection": "u2-s4",
        "diff": 1
      },
      {
        "q": "Capture myopathy in wild animals is an exertional rhabdomyolysis triggered by severe anaerobic lactic acidosis.",
        "a": true,
        "e": "Intense fear, struggle, and running cause catastrophic glycogen depletion, lactic acidosis, myonecrosis, and myoglobinuria.",
        "topicId": "u2-t03",
        "subSection": "u2-s4",
        "diff": 1
      },
      {
        "q": "Goitre is a malignant adenocarcinoma of the thyroid gland follicular epithelium.",
        "a": false,
        "e": "Goitre is non-neoplastic, non-inflammatory enlargement of the thyroid gland resulting from compensatory hyperplasia.",
        "topicId": "u2-t10",
        "subSection": "u2-s4",
        "diff": 1
      },
      {
        "q": "Canine diabetes mellitus is most commonly caused by autoimmune or pancreatitis-induced destruction of pancreatic beta cells.",
        "a": true,
        "e": "Most diabetic dogs suffer absolute insulin deficiency (Type 1-like) due to irreversible loss of pancreatic islets.",
        "topicId": "u2-t10",
        "subSection": "u2-s4",
        "diff": 1
      },
      {
        "q": "Reticulocytosis and polychromasia on a blood smear are hallmarks of non-regenerative anaemia.",
        "a": false,
        "e": "Reticulocytes and polychromasia indicate active marrow response and are hallmarks of regenerative anaemia.",
        "topicId": "u2-t05",
        "subSection": "u2-s5",
        "diff": 1
      },
      {
        "q": "Parakeratosis is characterized by the abnormal retention of pyknotic nuclei in the stratum corneum of the epidermis.",
        "a": true,
        "e": "Incomplete keratinization (as in swine zinc deficiency) leaves shrunken nuclei in the keratin scales.",
        "topicId": "u2-t11",
        "subSection": "u2-s5",
        "diff": 1
      },
      {
        "q": "Acantholysis is the loss of intercellular desmosomal bridges between keratinocytes, leading to intraepidermal blister formation.",
        "a": true,
        "e": "Acantholysis is the diagnostic hallmark of autoimmune blistering diseases of the Pemphigus group.",
        "topicId": "u2-t11",
        "subSection": "u2-s5",
        "diff": 1
      },
      {
        "q": "Diamond skin disease in pigs is caused by microvascular thrombosis induced by Erysipelothrix rhusiopathiae.",
        "a": true,
        "e": "Endothelial swelling and thrombosis in dermal arterioles create pathognomonic rhomboid/diamond-shaped cutaneous infarcts.",
        "topicId": "u2-t11",
        "subSection": "u2-s5",
        "diff": 1
      },
      {
        "q": "Exudative epidermitis (greasy pig disease) is an acute non-infectious allergic reaction to zinc supplementation.",
        "a": false,
        "e": "Greasy pig disease is a severe bacterial exfoliative epidermitis caused by Staphylococcus hyicus.",
        "topicId": "u2-t11",
        "subSection": "u2-s5",
        "diff": 1
      },
      {
        "q": "Demodectic mange in dogs is primarily localized within the hair follicles and sebaceous glands.",
        "a": true,
        "e": "Demodex canis lives inside follicular canals; hair loss and folliculitis occur when mites overmultiply.",
        "topicId": "u2-t11",
        "subSection": "u2-s5",
        "diff": 1
      },
      {
        "q": "Glaucoma is defined as an abnormal reduction in intraocular pressure causing collapse of the eyeball.",
        "a": false,
        "e": "Glaucoma is sustained elevation of intraocular pressure; reduction in pressure is hypotony (phthisis bulbi).",
        "topicId": "u2-t12",
        "subSection": "u2-s5",
        "diff": 1
      },
      {
        "q": "Moraxella bovis possesses pili and RTX hemotoxins that mediate attachment and ulceration of the bovine cornea.",
        "a": true,
        "e": "Moraxella bovis binds corneal epithelium and releases toxin Mbx, causing infectious bovine keratoconjunctivitis (pink eye).",
        "topicId": "u2-t12",
        "subSection": "u2-s5",
        "diff": 1
      },
      {
        "q": "Malassezia pachydermatis is an opportunistic lipophilic yeast that frequently proliferates in canine otitis externa.",
        "a": true,
        "e": "Malassezia is a common secondary pathogen in erythematous, pruritic, ceruminous canine ear canal infections.",
        "topicId": "u2-t12",
        "subSection": "u2-s5",
        "diff": 1
      }
    ],
    "fib": [
      {
        "q": "Wooden tongue in cattle, characterized by chronic pyogranulomatous glossitis, is caused by Actinobacillus ______.",
        "a": [
          "lignieresii",
          "lignieresi"
        ],
        "a_display": "lignieresii",
        "e": "Actinobacillus lignieresii infects tongue tissue through abrasive plant wounds, producing induration.",
        "topicId": "u2-t01",
        "subSection": "u2-s1",
        "diff": 1
      },
      {
        "q": "Chronic rarefying osteomyelitis of the mandible in cattle (lumpy jaw) is caused by Actinomyces ______.",
        "a": [
          "bovis"
        ],
        "a_display": "bovis",
        "e": "Actinomyces bovis invades alveolar sockets, causing bone expansion and draining sinus tracts.",
        "topicId": "u2-t01",
        "subSection": "u2-s1",
        "diff": 1
      },
      {
        "q": "Grain overload rumenitis in feedlot cattle is pathogenetically initiated by excessive ruminal production of ______ acid.",
        "a": [
          "lactic"
        ],
        "a_display": "lactic",
        "e": "Fermentation of soluble carbohydrates by Streptococcus bovis yields lactic acid, driving pH below 5.0.",
        "topicId": "u2-t01",
        "subSection": "u2-s1",
        "diff": 1
      },
      {
        "q": "Telescoping of a proximal segment of intestine into the lumen of an immediately adjacent distal segment is called ______.",
        "a": [
          "intussusception"
        ],
        "a_display": "intussusception",
        "e": "Intussusception invaginates the intussusceptum into the intussuscipiens, causing venous obstruction.",
        "topicId": "u2-t01",
        "subSection": "u2-s1",
        "diff": 1
      },
      {
        "q": "Johne's disease in cattle and sheep is etiologically caused by Mycobacterium avium subspecies ______.",
        "a": [
          "paratuberculosis"
        ],
        "a_display": "paratuberculosis",
        "e": "MAP infects macrophages in gut-associated lymphoid tissue, causing chronic granulomatous enteritis.",
        "topicId": "u2-t01",
        "subSection": "u2-s1",
        "diff": 1
      },
      {
        "q": "Concentric, necrotic, button-like mucosal ulcers in the cecum and colon of swine are pathognomonic for Classical Swine ______.",
        "a": [
          "fever",
          "fever (hog cholera)",
          "cholera"
        ],
        "a_display": "Fever (Hog Cholera)",
        "e": "Classical Swine Fever virus induces follicular infarction resulting in classic button ulcers.",
        "topicId": "u2-t01",
        "subSection": "u2-s1",
        "diff": 1
      },
      {
        "q": "In pre-hepatic (hemolytic) jaundice, the major form of bilirubin markedly elevated in circulation is ______ bilirubin.",
        "a": [
          "unconjugated",
          "indirect",
          "free"
        ],
        "a_display": "unconjugated",
        "e": "Excessive hemolysis generates lipophilic unconjugated bilirubin that exceeds hepatic uptake and conjugation.",
        "topicId": "u2-t01",
        "subSection": "u2-s1",
        "diff": 2
      },
      {
        "q": "In obstructive (post-hepatic) jaundice, the absence of bile pigments in the intestine produces pale, clay-colored stools termed ______ feces.",
        "a": [
          "acholic",
          "clay-colored",
          "clay colored"
        ],
        "a_display": "acholic",
        "e": "Obstruction of the common bile duct prevents stercobilin formation, leaving stools clay-colored (acholic).",
        "topicId": "u2-t01",
        "subSection": "u2-s1",
        "diff": 2
      },
      {
        "q": "Chronic Fasciola hepatica infection in ruminants causes extensive periductal fibrosis and calcification of bile ducts, colloquially termed ______ liver.",
        "a": [
          "pipestem",
          "pipe-stem",
          "pipe stem"
        ],
        "a_display": "pipestem",
        "e": "Pipestem liver shows thickened, cord-like, protruding calcified bile ducts on the visceral surface.",
        "topicId": "u2-t01",
        "subSection": "u2-s1",
        "diff": 1
      },
      {
        "q": "In bovine shipping fever, Mannheimia haemolytica leukotoxin destroys bovine leukocytes, giving them an elongated ______ appearance on histology.",
        "a": [
          "oat cell",
          "oat-cell",
          "oat shaped",
          "oat"
        ],
        "a_display": "oat-shaped",
        "e": "Degenerate neutrophils and macrophages stretched into streaming 'oat cells' are pathognomonic.",
        "topicId": "u2-t02",
        "subSection": "u2-s2",
        "diff": 2
      },
      {
        "q": "Suppurative bronchopneumonia in domestic animals characteristically consolidates the ______ lobes of the lungs.",
        "a": [
          "cranioventral",
          "apical",
          "anterior ventral"
        ],
        "a_display": "cranioventral",
        "e": "Airborne exudate gravitates into the cranioventral (apical and cardiac) lung lobes.",
        "topicId": "u2-t02",
        "subSection": "u2-s2",
        "diff": 1
      },
      {
        "q": "Incomplete expansion of neonatal lungs or collapse of previously aerated lung parenchyma is termed ______.",
        "a": [
          "atelectasis"
        ],
        "a_display": "atelectasis",
        "e": "Atelectasis produces dark red, depressed, rubbery lung tissue devoid of alveolar air.",
        "topicId": "u2-t02",
        "subSection": "u2-s2",
        "diff": 1
      },
      {
        "q": "Traumatic reticulopericarditis in cattle typically produces a shaggy, fibrinous exudate colloquially known as ______ and butter pericarditis.",
        "a": [
          "bread"
        ],
        "a_display": "bread",
        "e": "Fibrin strands torn between epicardium and pericardium resemble slices of buttered bread pulled apart.",
        "topicId": "u2-t04",
        "subSection": "u2-s2",
        "diff": 1
      },
      {
        "q": "Chronic myxomatous valvular degeneration (endocardiosis) in old dogs most frequently affects the ______ atrioventricular valve.",
        "a": [
          "mitral",
          "left",
          "left atrioventricular",
          "bicuspid"
        ],
        "a_display": "mitral (left AV)",
        "e": "Mitral endocardiosis is the leading cause of congestive heart failure in small-breed senior dogs.",
        "topicId": "u2-t04",
        "subSection": "u2-s2",
        "diff": 1
      },
      {
        "q": "Mulberry heart disease in swine is a nutritional cardiomyopathy etiologically caused by a deficiency of Vitamin E and/or ______.",
        "a": [
          "selenium",
          "se"
        ],
        "a_display": "Selenium",
        "e": "Selenium and Vitamin E deficiency allows lipid peroxidation, inducing extensive myocardial and vascular necrosis.",
        "topicId": "u2-t04",
        "subSection": "u2-s2",
        "diff": 1
      },
      {
        "q": "The adult heartworm parasite that lives within the pulmonary arteries and right ventricle of dogs is Dirofilaria ______.",
        "a": [
          "immitis"
        ],
        "a_display": "immitis",
        "e": "Dirofilaria immitis causes mechanical trauma and villous endarteritis, leading to pulmonary hypertension.",
        "topicId": "u2-t04",
        "subSection": "u2-s2",
        "diff": 1
      },
      {
        "q": "The accumulation of purulent suppurative exudate within the pleural cavity is called pyothorax or ______.",
        "a": [
          "empyema"
        ],
        "a_display": "empyema",
        "e": "Empyema (pyothorax) is purulent inflammation within the pleural sac.",
        "topicId": "u2-t02",
        "subSection": "u2-s2",
        "diff": 1
      },
      {
        "q": "Progressive, non-neoplastic thinning and localized dilation of all three tunics of an arterial wall is a true ______.",
        "a": [
          "aneurysm"
        ],
        "a_display": "aneurysm",
        "e": "True aneurysms involve all three layers; false aneurysms (pseudoaneurysms) involve extravasation contained by adventitia.",
        "topicId": "u2-t04",
        "subSection": "u2-s2",
        "diff": 2
      },
      {
        "q": "Glomerular damage resulting in heavy proteinuria, hypoalbuminaemia, and generalized edema is known as ______ syndrome.",
        "a": [
          "nephrotic"
        ],
        "a_display": "nephrotic",
        "e": "Nephrotic syndrome is the clinical tetrad of proteinuria, hypoalbuminaemia, edema, and hyperlipidemia.",
        "topicId": "u2-t07",
        "subSection": "u2-s3",
        "diff": 1
      },
      {
        "q": "Ascending suppurative pyelonephritis in cattle is classically caused by Corynebacterium ______.",
        "a": [
          "renale"
        ],
        "a_display": "renale",
        "e": "Corynebacterium renale adheres via fimbriae to urothelium and hydrolyzes urea, damaging mucosa.",
        "topicId": "u2-t07",
        "subSection": "u2-s3",
        "diff": 1
      },
      {
        "q": "Dilation of the renal pelvis with progressive pressure atrophy of renal parenchyma secondary to urinary obstruction is ______.",
        "a": [
          "hydronephrosis"
        ],
        "a_display": "hydronephrosis",
        "e": "Urinary outflow obstruction creates retrograde hydrostatic pressure, flattening calyces and cortex.",
        "topicId": "u2-t07",
        "subSection": "u2-s3",
        "diff": 1
      },
      {
        "q": "In rams and wethers, uroliths most frequently lodge and cause obstructive rupture at the ______ process of the urethra.",
        "a": [
          "urethral",
          "vermiform"
        ],
        "a_display": "urethral (vermiform)",
        "e": "The vermiform appendage at the tip of the ram's penis is the narrowest point of the ovine urinary tract.",
        "topicId": "u2-t07",
        "subSection": "u2-s3",
        "diff": 1
      },
      {
        "q": "In steers and bullocks, urethral calculus obstruction most commonly occurs at the ______ flexure of the penis.",
        "a": [
          "sigmoid"
        ],
        "a_display": "sigmoid",
        "e": "The distal bend of the S-shaped sigmoid flexure is the classic anatomical site of urolith impaction in cattle.",
        "topicId": "u2-t07",
        "subSection": "u2-s3",
        "diff": 1
      },
      {
        "q": "The development of pyometra in the intact bitch is primed by the hormone ______ during diestrus.",
        "a": [
          "progesterone"
        ],
        "a_display": "progesterone",
        "e": "Progesterone promotes endometrial glandular secretion and inhibits myometrial contraction.",
        "topicId": "u2-t08",
        "subSection": "u2-s3",
        "diff": 1
      },
      {
        "q": "Brucella abortus infection in pregnant cattle produces characteristic leathery thickening of the ______ chorioallantois.",
        "a": [
          "intercotyledonary",
          "inter-cotyledonary"
        ],
        "a_display": "intercotyledonary",
        "e": "Necrotizing placentitis with leathery intercotyledonary thickening is typical of bovine brucellosis.",
        "topicId": "u2-t08",
        "subSection": "u2-s3",
        "diff": 2
      },
      {
        "q": "Summer mastitis in dry cows and heifers is transmitted by the sheep headfly, Hydrotaea ______.",
        "a": [
          "irritans"
        ],
        "a_display": "irritans",
        "e": "Hydrotaea irritans carries Trueperella pyogenes and inoculates teat canals during summer months.",
        "topicId": "u2-t08",
        "subSection": "u2-s3",
        "diff": 2
      },
      {
        "q": "A sterile female calf born co-twin with a male calf as a result of placental vascular anastomoses is called a ______.",
        "a": [
          "freemartin"
        ],
        "a_display": "freemartin",
        "e": "Freemartin heifers have hypoplastic, modified reproductive tracts due to male anti-Müllerian hormone.",
        "topicId": "u2-t08",
        "subSection": "u2-s3",
        "diff": 1
      },
      {
        "q": "Polioencephalomalacia in ruminants is etiologically linked to a deficiency of ______ (Vitamin B1).",
        "a": [
          "thiamine",
          "thiamin",
          "vitamin b1"
        ],
        "a_display": "thiamine",
        "e": "Thiamine deficiency impairs neuronal energy production, causing laminar cerebrocortical necrosis.",
        "topicId": "u2-t09",
        "subSection": "u2-s4",
        "diff": 1
      },
      {
        "q": "The diagnostic eosinophilic intracytoplasmic inclusion bodies found in neurons of animals infected with Rabies are called ______ bodies.",
        "a": [
          "negri"
        ],
        "a_display": "Negri",
        "e": "Negri bodies are viral ribonucleoprotein aggregates in the cytoplasm of Ammon's horn and Purkinje cells.",
        "topicId": "u2-t09",
        "subSection": "u2-s4",
        "diff": 1
      },
      {
        "q": "Listeria monocytogenes infection in ruminants characteristically causes ______ in the medulla and pons of the brainstem.",
        "a": [
          "microabscesses",
          "micro-abscesses",
          "abscesses"
        ],
        "a_display": "microabscesses",
        "e": "Listeria forms microabscesses with microglial clusters and perivascular lymphocytic cuffs in the brainstem.",
        "topicId": "u2-t09",
        "subSection": "u2-s4",
        "diff": 2
      },
      {
        "q": "Defective mineralization of cartilaginous growth plates in young growing animals is termed ______.",
        "a": [
          "rickets"
        ],
        "a_display": "rickets",
        "e": "Rickets results from Vitamin D or phosphorus deficiency, leading to widened, irregular physes.",
        "topicId": "u2-t03",
        "subSection": "u2-s4",
        "diff": 1
      },
      {
        "q": "Defective mineralization of remodeled bone osteoid in adult animals with closed physes is termed ______.",
        "a": [
          "osteomalacia"
        ],
        "a_display": "osteomalacia",
        "e": "Osteomalacia causes soft, uncalcified bone matrix in adults, leading to deformities and fractures.",
        "topicId": "u2-t03",
        "subSection": "u2-s4",
        "diff": 1
      },
      {
        "q": "Excessive secretion of parathyroid hormone (PTH) causes bone resorption with fibrous replacement, termed fibrous ______.",
        "a": [
          "osteodystrophy",
          "osteodystrophia fibrosa"
        ],
        "a_display": "osteodystrophy",
        "e": "Fibrous osteodystrophy ('rubber jaw') replaces mineralized trabeculae with fibrovascular tissue.",
        "topicId": "u2-t03",
        "subSection": "u2-s4",
        "diff": 2
      },
      {
        "q": "An inherited disorder where defective osteoclasts fail to resorb primary spongiosa, creating dense solid bones, is ______.",
        "a": [
          "osteopetrosis"
        ],
        "a_display": "osteopetrosis",
        "e": "Osteopetrosis ('marble bone disease') leaves the medullary cavity filled with calcified cartilage.",
        "topicId": "u2-t03",
        "subSection": "u2-s4",
        "diff": 2
      },
      {
        "q": "Non-neoplastic, non-inflammatory enlargement of the thyroid gland resulting from compensatory hyperplasia is called ______.",
        "a": [
          "goitre",
          "goiter"
        ],
        "a_display": "goitre",
        "e": "Goitre is thyroid enlargement driven by elevated TSH, usually triggered by iodine deficiency.",
        "topicId": "u2-t10",
        "subSection": "u2-s4",
        "diff": 1
      },
      {
        "q": "Pituitary-dependent hyperadrenocorticism in dogs is commonly referred to as ______ disease.",
        "a": [
          "cushing's",
          "cushings",
          "cushing"
        ],
        "a_display": "Cushing's",
        "e": "Cushing's disease is ACTH-secreting pituitary adenoma driving bilateral adrenal cortical hyperplasia.",
        "topicId": "u2-t10",
        "subSection": "u2-s4",
        "diff": 1
      },
      {
        "q": "Bone marrow failure leading to profound pancytopenia and replacement of hematopoietic tissue by fat is ______ anaemia.",
        "a": [
          "aplastic"
        ],
        "a_display": "aplastic",
        "e": "Aplastic anaemia shows hypoplastic bone marrow with loss of all three hematopoietic cell lines.",
        "topicId": "u2-t05",
        "subSection": "u2-s5",
        "diff": 1
      },
      {
        "q": "The abnormal retention of pyknotic nuclei within the stratum corneum scales of the epidermis is termed ______.",
        "a": [
          "parakeratosis"
        ],
        "a_display": "parakeratosis",
        "e": "Parakeratosis is classic in swine zinc deficiency, leading to crusty skin fissures.",
        "topicId": "u2-t11",
        "subSection": "u2-s5",
        "diff": 1
      },
      {
        "q": "Loss of intercellular desmosomal attachments between epidermal keratinocytes resulting in intraepidermal clefts is ______.",
        "a": [
          "acantholysis"
        ],
        "a_display": "acantholysis",
        "e": "Acantholysis is the primary lesion in pemphigus diseases due to anti-desmoglein antibodies.",
        "topicId": "u2-t11",
        "subSection": "u2-s5",
        "diff": 2
      },
      {
        "q": "The pathognomonic diamond-shaped skin lesions in swine are caused by the bacterium Erysipelothrix ______.",
        "a": [
          "rhusiopathiae"
        ],
        "a_display": "rhusiopathiae",
        "e": "Erysipelothrix rhusiopathiae produces microvascular thrombosis yielding rhomboid cutaneous infarcts.",
        "topicId": "u2-t11",
        "subSection": "u2-s5",
        "diff": 1
      },
      {
        "q": "Greasy pig disease (exudative epidermitis) in piglets is etiologically caused by Staphylococcus ______.",
        "a": [
          "hyicus"
        ],
        "a_display": "hyicus",
        "e": "Staphylococcus hyicus exfoliative toxin causes subcorneal splitting and greasy brown sebaceous exudate.",
        "topicId": "u2-t11",
        "subSection": "u2-s5",
        "diff": 1
      },
      {
        "q": "The parasitic mite that burrows inside hair follicles and sebaceous glands of dogs is ______ canis.",
        "a": [
          "demodex"
        ],
        "a_display": "Demodex",
        "e": "Demodex canis resides inside hair follicles, causing follicular hyperkeratosis and alopecia.",
        "topicId": "u2-t11",
        "subSection": "u2-s5",
        "diff": 1
      },
      {
        "q": "Any loss of optical transparency or opacity developing within the crystalline lens of the eye is a ______.",
        "a": [
          "cataract"
        ],
        "a_display": "cataract",
        "e": "Cataracts result from lens protein denaturation, causing clouding and visual impairment.",
        "topicId": "u2-t12",
        "subSection": "u2-s5",
        "diff": 1
      },
      {
        "q": "Infectious Bovine Keratoconjunctivitis (pink eye) in cattle is primarily caused by Moraxella ______.",
        "a": [
          "bovis"
        ],
        "a_display": "bovis",
        "e": "Moraxella bovis adheres to corneal epithelium via pili and produces central corneal ulceration.",
        "topicId": "u2-t12",
        "subSection": "u2-s5",
        "diff": 1
      },
      {
        "q": "The common lipophilic yeast implicated as a secondary pathogen in canine otitis externa is Malassezia ______.",
        "a": [
          "pachydermatis"
        ],
        "a_display": "pachydermatis",
        "e": "Malassezia pachydermatis is a bowling-pin shaped yeast flourishing in inflamed, waxy canine ear canals.",
        "topicId": "u2-t12",
        "subSection": "u2-s5",
        "diff": 1
      }
    ]
  },
  "unit-3": {
    "mcq": [
      {
        "q": "Neoplasia was defined by Sir Rupert Willis as an abnormal mass of tissue, the growth of which:",
        "o": [
          "Exceeds and is uncoordinated with that of normal tissues, persisting after cessation of stimuli",
          "Is completely reversible once the initiating irritant is removed",
          "Is strictly non-clonal in origin",
          "Always develops metastases to distant organs"
        ],
        "a": 0,
        "e": "Willis' classic definition emphasizes autonomy, uncoordinated growth, and persistence after stimulus removal.",
        "topicId": "u3-t01",
        "subSection": "u3-s1",
        "diff": 1
      },
      {
        "q": "Anaplasia, the fundamental microscopic hallmark of malignant neoplasms, is characterized by all EXCEPT:",
        "o": [
          "Strict maintenance of uniform cell size and normal nuclear-to-cytoplasmic ratio",
          "Pleomorphism (variation in size and shape of cells and nuclei)",
          "Hyperchromatism with prominent coarse nucleoli",
          "Atypical, bizarre mitotic figures"
        ],
        "a": 0,
        "e": "Anaplasia implies dedifferentiation with loss of uniformity, pleomorphism, and elevated N:C ratio.",
        "topicId": "u3-t01",
        "subSection": "u3-s1",
        "diff": 1
      },
      {
        "q": "Benign tumours are clinically and microscopically distinguished from malignant tumours by:",
        "o": [
          "Slow, expansile, encapsulated growth with no invasion or metastasis",
          "Infiltrative borders with frequent vascular permeation",
          "Presence of widespread regional lymph node metastases",
          "Marked nuclear atypia and tripolar mitoses"
        ],
        "a": 0,
        "e": "Benign tumours remain localized, grow by expansion, are usually encapsulated, and do not metastasize.",
        "topicId": "u3-t02",
        "subSection": "u3-s1",
        "diff": 1
      },
      {
        "q": "Carcinomas (malignant epithelial tumours) predominantly disseminate early via which route?",
        "o": [
          "Lymphatic vessels to regional lymph nodes",
          "Hematogenous route directly to liver and lungs",
          "Perineural invasion only",
          "Direct transcoelomic seeding exclusively"
        ],
        "a": 0,
        "e": "Carcinomas typically spread first through lymphatics; sarcomas predominantly spread hematogenously.",
        "topicId": "u3-t04",
        "subSection": "u3-s1",
        "diff": 1
      },
      {
        "q": "Sarcomas (malignant mesenchymal tumours) typically prefer which primary route of distant metastasis?",
        "o": [
          "Hematogenous route via thin-walled veins to lungs",
          "Lymphatic vessels to superficial nodes",
          "Trans-synovial migration",
          "Retrograde cerebrospinal fluid flow"
        ],
        "a": 0,
        "e": "Sarcoma cells invade thin-walled capillaries and venules, shedding directly into venous return to lodge in the lungs.",
        "topicId": "u3-t04",
        "subSection": "u3-s1",
        "diff": 1
      },
      {
        "q": "The chemical carcinogenesis process follows which sequential multistep paradigm?",
        "o": [
          "Initiation -> Promotion -> Progression",
          "Progression -> Promotion -> Initiation",
          "Transformation -> Angiogenesis -> Necrosis",
          "Invasion -> Extravasation -> Dormancy"
        ],
        "a": 0,
        "e": "Chemical carcinogenesis starts with irreversible initiation (DNA damage), followed by promotion (proliferation), and progression (malignancy).",
        "topicId": "u3-t03",
        "subSection": "u3-s1",
        "diff": 1
      },
      {
        "q": "Enzootic bovine hematuria and urinary bladder carcinomas in cattle are etiologically caused by grazing:",
        "o": [
          "Bracken fern (Pteridium aquilinum) containing ptaquiloside, synergistic with BPV-2",
          "Lantana camara",
          "Senecio jacobaea",
          "Crotalaria spectabilis"
        ],
        "a": 0,
        "e": "Ptaquiloside from bracken fern induces bladder urothelial carcinomas in concert with Bovine Papillomavirus-2.",
        "topicId": "u3-t03",
        "subSection": "u3-s1",
        "diff": 2
      },
      {
        "q": "Which tumour suppressor gene is known as the 'Guardian of the Genome' and is most frequently mutated in animal cancers?",
        "o": [
          "p53 (TP53)",
          "HER2/neu",
          "RAS",
          "c-MYC"
        ],
        "a": 0,
        "e": "p53 arrests the cell cycle at G1/S upon DNA damage or induces apoptosis if repair fails.",
        "topicId": "u3-t03",
        "subSection": "u3-s1",
        "diff": 1
      },
      {
        "q": "The TNM system for clinical cancer staging evaluates which three parameters?",
        "o": [
          "Tumour size/depth (T), Regional lymph Node involvement (N), Distant Metastasis (M)",
          "Time of onset (T), Necrosis score (N), Mitotic count (M)",
          "Toxic grade (T), Nuclear grade (N), Margin clearance (M)",
          "Thickness (T), Neutrophil density (N), Morphology (M)"
        ],
        "a": 0,
        "e": "TNM is the international standard staging system assessing local primary tumor, node status, and distant metastasis.",
        "topicId": "u3-t05",
        "subSection": "u3-s1",
        "diff": 1
      },
      {
        "q": "Tumour grading, unlike clinical staging, is determined by:",
        "o": [
          "Histopathological degree of anaplasia, mitotic rate, and tissue differentiation under the microscope",
          "Physical palpation and CT scan measurement of tumor size",
          "Presence of lung metastases on radiographs",
          "Duration of clinical signs reported by the owner"
        ],
        "a": 0,
        "e": "Grading is a histological assessment performed by a pathologist; staging is clinical assessment of anatomical spread.",
        "topicId": "u3-t05",
        "subSection": "u3-s1",
        "diff": 2
      },
      {
        "q": "Cancer cachexia (progressive wasting in cancer patients) is primarily driven by pro-inflammatory cytokines such as:",
        "o": [
          "TNF-alpha (cachectin), IL-1, and IL-6",
          "Insulin-like growth factor-1",
          "Epidermal growth factor",
          "Histamine and serotonin"
        ],
        "a": 0,
        "e": "TNF-alpha and IL-1 mobilize adipose and skeletal muscle protein, inducing anorexia, hypermetabolism, and wasting.",
        "topicId": "u3-t05",
        "subSection": "u3-s1",
        "diff": 2
      },
      {
        "q": "Hypercalcaemia of malignancy in dogs with apocrine gland anal sac adenocarcinoma or lymphoma is caused by tumour secretion of:",
        "o": [
          "Parathyroid Hormone-related Protein (PTHrP)",
          "Thyrocalcitonin",
          "Aldosterone",
          "Erythropoietin"
        ],
        "a": 0,
        "e": "PTHrP binds to PTH receptors on osteoclasts, stimulating massive bone resorption and humoral hypercalcaemia.",
        "topicId": "u3-t05",
        "subSection": "u3-s1",
        "diff": 2
      },
      {
        "q": "A choristoma is pathologically defined as:",
        "o": [
          "A mass of histologically normal tissue in an abnormal anatomical location (heterotopic rest)",
          "A disorganized focal overgrowth of mature normal tissue native to that organ",
          "A malignant teratoma with tri-germinal differentiation",
          "A benign glandular neoplasm"
        ],
        "a": 0,
        "e": "Choristoma is normal tissue in the wrong place (e.g., corneal dermoid with hair follicles on the eye).",
        "topicId": "u3-t01",
        "subSection": "u3-s1",
        "diff": 2
      },
      {
        "q": "A hamartoma is defined as:",
        "o": [
          "A benign, focal, disorganized overgrowth of mature cells and tissues normally present at that site",
          "A metastatic focus of adenocarcinoma",
          "A congenital cystic remnant of the thyroglossal duct",
          "A malignant mesenchymal tumour of blood vessels"
        ],
        "a": 0,
        "e": "Hamartomas are developmental anomalies native to the organ (e.g., vascular hamartoma, pulmonary chondroid hamartoma).",
        "topicId": "u3-t01",
        "subSection": "u3-s1",
        "diff": 2
      },
      {
        "q": "Tumour-associated neoangiogenesis is critically mediated by which endothelial mitogen secreted by hypoxic tumor cells?",
        "o": [
          "Vascular Endothelial Growth Factor (VEGF)",
          "Platelet-Derived Growth Factor only",
          "Interferon-gamma",
          "Tumour Necrosis Factor-beta"
        ],
        "a": 0,
        "e": "Hypoxia triggers HIF-1-alpha, driving VEGF secretion to sprout new, leaky capillaries to feed expanding tumours.",
        "topicId": "u3-t04",
        "subSection": "u3-s1",
        "diff": 2
      },
      {
        "q": "Malignant tumours degrade extracellular matrix and basement membranes to invade tissue using which family of enzymes?",
        "o": [
          "Matrix Metalloproteinases (MMPs, e.g. gelatinases, collagenases)",
          "Lysozyme",
          "Amylase",
          "Lipoprotein lipase"
        ],
        "a": 0,
        "e": "MMP-2 and MMP-9 (gelatinases) digest Type IV collagen of basement membranes, permitting tumor cell invasion.",
        "topicId": "u3-t04",
        "subSection": "u3-s1",
        "diff": 2
      },
      {
        "q": "Which retrovirus causes multicentric lymphosarcoma in young domestic cattle?",
        "o": [
          "Bovine Leukemia Virus (BLV)",
          "Bovine Viral Diarrhea Virus",
          "Bovine Syncytial Virus",
          "Bovine Immunodeficiency Virus"
        ],
        "a": 0,
        "e": "BLV is an oncogenic retrovirus (deltaretrovirus) causing enzootic bovine leukosis in adult cattle.",
        "topicId": "u3-t03",
        "subSection": "u3-s1",
        "diff": 1
      },
      {
        "q": "A benign tumour arising from stratified squamous epithelium forming finger-like projections is a:",
        "o": [
          "Papilloma",
          "Adenoma",
          "Polyp",
          "Fibroma"
        ],
        "a": 0,
        "e": "Papillomas are benign epithelial projections with a vascular connective tissue core covered by stratified squamous epithelium.",
        "topicId": "u3-t01",
        "subSection": "u3-s1",
        "diff": 1
      },
      {
        "q": "Squamous cell carcinoma (SCC) is histopathologically recognized by the diagnostic presence of:",
        "o": [
          "Keratin pearls (epithelial pearls) and intercellular bridges (desmosomes)",
          "Intracellular mucin droplets displacing the nucleus",
          "Whorls of mature spindle-shaped fibrocytes",
          "Sheets of round cells with metachromatic granules"
        ],
        "a": 0,
        "e": "Concentric lamellae of eosinophilic keratin (keratin pearls) and intercellular bridges confirm squamous differentiation.",
        "topicId": "u3-t06",
        "subSection": "u3-s2",
        "diff": 1
      },
      {
        "q": "Bovine ocular squamous cell carcinoma ('cancer eye') occurs most frequently in which cattle breed due to periocular unpigmented skin?",
        "o": [
          "Hereford",
          "Jersey",
          "Holstein-Friesian",
          "Sahiwal"
        ],
        "a": 0,
        "e": "Hereford cattle lack periocular pigment, leaving conjunctiva vulnerable to solar UV-B carcinogenesis.",
        "topicId": "u3-t06",
        "subSection": "u3-s2",
        "diff": 1
      },
      {
        "q": "Canine Transmissible Venereal Tumour (CTVT) cells possess a characteristic karyotype containing:",
        "o": [
          "57 to 59 chromosomes (normal dog karyotype is 78)",
          "78 normal chromosomes",
          "38 chromosomes",
          "102 chromosomes"
        ],
        "a": 0,
        "e": "CTVT is a naturally transmitted cellular allograft with 57-59 chromosomes bearing an LINE-1 insertion near the c-myc oncogene.",
        "topicId": "u3-t08",
        "subSection": "u3-s2",
        "diff": 2
      },
      {
        "q": "Cytologically, CTVT round cells are classically described as having:",
        "o": [
          "Centrally located round nuclei with prominent nucleoli and pale blue cytoplasm containing distinct clear vacuoles",
          "Spindle-shaped nuclei with abundant pink collagen bundles",
          "Deeply basophilic cytoplasm with dark metachromatic granules",
          "Multinucleated syncytia with nuclear moulding"
        ],
        "a": 0,
        "e": "CTVT round cells have crisp margins, pale blue cytoplasm, and distinctive lipid-like clear vacuoles.",
        "topicId": "u3-t08",
        "subSection": "u3-s2",
        "diff": 2
      },
      {
        "q": "Mast cell tumours (MCT) in dogs are identified histochemically by staining their cytoplasmic granules purple with:",
        "o": [
          "Toluidine Blue or Giemsa (metachromatic staining)",
          "Periodic Acid-Schiff",
          "Prussian Blue",
          "Congo Red"
        ],
        "a": 0,
        "e": "Heparin in mast cell granules stains metachromatically (purple-red) with toluidine blue or Romanowsky stains.",
        "topicId": "u3-t08",
        "subSection": "u3-s2",
        "diff": 1
      },
      {
        "q": "The degranulation of canine mast cell tumours releases histamine, predisposing the dog to which gastrointestinal complication?",
        "o": [
          "Gastroduodenal ulceration",
          "Megacolon",
          "Intussusception",
          "Salivary mucocele"
        ],
        "a": 0,
        "e": "Systemic histamine binds gastric H2 receptors, stimulating massive HCl secretion and resulting in severe peptic ulceration.",
        "topicId": "u3-t08",
        "subSection": "u3-s2",
        "diff": 2
      },
      {
        "q": "Fibrosarcoma is histologically characterized by neoplastic spindle cells arranged in:",
        "o": [
          "Interlacing bundles and a 'herringbone' pattern with abundant collagen",
          "Concentric perivascular whorls",
          "Solid sheets of round cells with eccentric nuclei",
          "Tubular glands lined by columnar epithelium"
        ],
        "a": 0,
        "e": "Malignant fibroblasts produce collagen fibrils and arrange in distinctive intersecting herringbone fascicles.",
        "topicId": "u3-t07",
        "subSection": "u3-s2",
        "diff": 2
      },
      {
        "q": "Haemangiosarcoma in dogs has the highest primary incidence in which two anatomical locations?",
        "o": [
          "Spleen and Right Atrium of the heart",
          "Lungs and Kidneys",
          "Skin and Subcutis of extremities",
          "Testis and Prostate"
        ],
        "a": 0,
        "e": "Canine haemangiosarcoma originates in splenic red pulp and right atrial auricle, predisposing to hemoperitoneum/hemopericardium.",
        "topicId": "u3-t07",
        "subSection": "u3-s2",
        "diff": 2
      },
      {
        "q": "Osteosarcoma in large and giant breed dogs occurs with highest frequency at which skeletal sites?",
        "o": [
          "'Away from the elbow, towards the knee' (proximal humerus, distal radius, distal femur, proximal tibia)",
          "Mid-diaphysis of the femur and humerus",
          "Cervical vertebrae and ribs",
          "Mandible and maxilla only"
        ],
        "a": 0,
        "e": "Canine osteosarcoma predilection sites: distal radius, proximal humerus, distal femur, and proximal tibia ('away from elbow, towards knee').",
        "topicId": "u3-t07",
        "subSection": "u3-s2",
        "diff": 2
      },
      {
        "q": "The definitive histopathological criterion for diagnosing osteosarcoma is:",
        "o": [
          "Production of unmineralized osteoid directly by malignant mesenchymal cells",
          "Presence of multinucleated osteoclasts",
          "Extensive cartilage matrix with lacunae",
          "Bone necrosis with reactive osteosclerosis"
        ],
        "a": 0,
        "e": "Malignant osteoblasts producing amorphous eosinophilic osteoid directly is the pathognomonic diagnostic criterion.",
        "topicId": "u3-t07",
        "subSection": "u3-s2",
        "diff": 2
      },
      {
        "q": "Melanocytic tumours in horses (melanoma) are extremely common in older animals with which coat color?",
        "o": [
          "Grey (especially around perineum, tail base, and parotid gland)",
          "Chestnut",
          "Bay",
          "Black"
        ],
        "a": 0,
        "e": "Over 80% of grey horses older than 15 years develop dermal melanocytic tumours at the perineum and tail base.",
        "topicId": "u3-t08",
        "subSection": "u3-s2",
        "diff": 1
      },
      {
        "q": "Which immunohistochemical marker is widely used as a specific intermediate filament marker for epithelial carcinomas?",
        "o": [
          "Cytokeratin",
          "Vimentin",
          "Desmin",
          "S-100"
        ],
        "a": 0,
        "e": "Cytokeratins identify epithelial cells/carcinomas; vimentin identifies mesenchymal cells/sarcomas.",
        "topicId": "u3-t06",
        "subSection": "u3-s2",
        "diff": 2
      },
      {
        "q": "Vimentin is the intermediate filament marker diagnostic for tumours of which histogenetic origin?",
        "o": [
          "Mesenchymal origin (sarcomas)",
          "Epithelial origin (carcinomas)",
          "Neural crest origin only",
          "Neuroendocrine origin"
        ],
        "a": 0,
        "e": "Vimentin intermediate filaments are expressed by mesenchymal cells and their malignant counterparts (sarcomas).",
        "topicId": "u3-t07",
        "subSection": "u3-s2",
        "diff": 2
      },
      {
        "q": "Enzootic bovine leukosis (bovine lymphosarcoma) predilection sites for tumor metastasis include all of the following EXCEPT:",
        "o": [
          "Brain parenchyma",
          "Abomasum (submucosa)",
          "Right atrium of the heart",
          "Uterus and retrobulbar space"
        ],
        "a": 0,
        "e": "BLV predilection sites (HAULS): Heart, Abomasum, Uterus, Lymph nodes, Spinal canal; brain parenchyma is rarely affected.",
        "topicId": "u3-t08",
        "subSection": "u3-s2",
        "diff": 2
      },
      {
        "q": "Sertoli cell tumours of the canine testicle frequently cause feminization of the male dog due to production of:",
        "o": [
          "Estrogens",
          "Testosterone",
          "Progesterone",
          "Cortisol"
        ],
        "a": 0,
        "e": "Neoplastic Sertoli cells secrete estrogens, causing gynecomastia, penile atrophy, pendulous prepuce, and symmetrical alopecia.",
        "topicId": "u3-t08",
        "subSection": "u3-s2",
        "diff": 2
      },
      {
        "q": "Adenocarcinomas of glandular organs often elicit a dense, hard, fibrous connective tissue stroma, a phenomenon termed:",
        "o": [
          "Desmoplasia (scirrhous reaction)",
          "Acantholysis",
          "Spongiosis",
          "Metaplasia"
        ],
        "a": 0,
        "e": "Desmoplasia is tumor-induced fibrous proliferation, giving scirrhous carcinomas their stony-hard consistency.",
        "topicId": "u3-t06",
        "subSection": "u3-s2",
        "diff": 2
      },
      {
        "q": "Equine sarcoid is a locally aggressive cutaneous fibroblastic tumour caused by infection with:",
        "o": [
          "Bovine Papillomavirus types 1 and 2 (BPV-1 and BPV-2)",
          "Equine Herpesvirus-1",
          "Equine Papillomavirus-1",
          "Equine Arteritis Virus"
        ],
        "a": 0,
        "e": "Cross-species infection of horses by Bovine Papillomavirus 1 or 2 drives the proliferation of dermal fibroblasts.",
        "topicId": "u3-t07",
        "subSection": "u3-s2",
        "diff": 2
      },
      {
        "q": "Lipomas in domestic animals are benign mesenchymal tumours composed of mature:",
        "o": [
          "Adipocytes containing a single large lipid droplet displacing the nucleus",
          "Chondrocytes with pericellular lacunae",
          "Endothelial cells forming blood channels",
          "Smooth muscle fibers in fascicles"
        ],
        "a": 0,
        "e": "Lipomas are circumscribed, soft, yellow masses of mature adult univacuolar adipocytes.",
        "topicId": "u3-t07",
        "subSection": "u3-s2",
        "diff": 1
      },
      {
        "q": "Which anticoagulant is the preferred agent for routine mammalian hematological analysis (CBC) and blood smears?",
        "o": [
          "EDTA (dipotassium or tripotassium)",
          "Sodium heparin",
          "Sodium citrate",
          "Sodium fluoride"
        ],
        "a": 0,
        "e": "EDTA chelates calcium, preserving cell morphology and staining characteristics without inducing cell clumping.",
        "topicId": "u3-t09",
        "subSection": "u3-s3",
        "diff": 1
      },
      {
        "q": "Sodium fluoride is specifically utilized as an anticoagulant/preservative tube for blood collection when testing for:",
        "o": [
          "Blood glucose (inhibits glycolysis by enolase)",
          "Prothrombin time (PT)",
          "Platelet count",
          "Total protein"
        ],
        "a": 0,
        "e": "Sodium fluoride inhibits enolase in the glycolytic pathway, preventing erythrocytes from consuming glucose in vitro.",
        "topicId": "u3-t09",
        "subSection": "u3-s3",
        "diff": 1
      },
      {
        "q": "Packed Cell Volume (PCV) is determined by microhaematocrit centrifugation and represents the:",
        "o": [
          "Percentage of total blood volume occupied by erythrocytes",
          "Ratio of hemoglobin to total serum protein",
          "Number of red cells per microliter of blood",
          "Weight of white cells in the buffy coat"
        ],
        "a": 0,
        "e": "PCV (hematocrit) is the volume fraction of whole blood made up of packed red blood cells.",
        "topicId": "u3-t10",
        "subSection": "u3-s3",
        "diff": 1
      },
      {
        "q": "Mean Corpuscular Volume (MCV) is calculated using which mathematical formula?",
        "o": [
          "(PCV (%) x 10) / TEC (millions/uL)",
          "(Hb (g/dL) x 10) / TEC (millions/uL)",
          "(Hb (g/dL) x 100) / PCV (%)",
          "PCV (%) / Hb (g/dL)"
        ],
        "a": 0,
        "e": "MCV (fL) = [PCV (%) × 10] / TEC (10^6/uL). Measures average individual erythrocyte volume.",
        "topicId": "u3-t10",
        "subSection": "u3-s3",
        "diff": 2
      },
      {
        "q": "Mean Corpuscular Hemoglobin Concentration (MCHC) is calculated by:",
        "o": [
          "(Hb (g/dL) x 100) / PCV (%)",
          "(PCV (%) x 10) / TEC",
          "(Hb (g/dL) x 10) / TEC",
          "Hb x PCV"
        ],
        "a": 0,
        "e": "MCHC (g/dL or %) = [Hb (g/dL) × 100] / PCV (%). Measures hemoglobin concentration per unit volume of packed red cells.",
        "topicId": "u3-t10",
        "subSection": "u3-s3",
        "diff": 2
      },
      {
        "q": "Macrocytic, hypochromic anaemia is typically characteristic of:",
        "o": [
          "Active, highly regenerative hemolytic or acute hemorrhagic anaemia",
          "Chronic iron deficiency anaemia",
          "Aplastic bone marrow failure",
          "Chronic renal disease with erythropoietin deficiency"
        ],
        "a": 0,
        "e": "Regenerating marrow releases young reticulocytes that are larger (high MCV) and have incomplete hemoglobin filling (low MCHC).",
        "topicId": "u3-t10",
        "subSection": "u3-s3",
        "diff": 2
      },
      {
        "q": "Microcytic, hypochromic anaemia is the classic hallmark of chronic:",
        "o": [
          "Iron deficiency anaemia",
          "Vitamin B12 deficiency",
          "Aplastic anaemia",
          "Acute massive haemorrhage"
        ],
        "a": 0,
        "e": "Iron deficiency limits heme synthesis, forcing extra cell divisions in normoblasts, creating small, pale RBCs (low MCV, low MCHC).",
        "topicId": "u3-t10",
        "subSection": "u3-s3",
        "diff": 1
      },
      {
        "q": "The buffy coat layer seen between packed red blood cells and plasma in a centrifuged hematocrit tube contains:",
        "o": [
          "Leukocytes and platelets",
          "Pure reticulocytes",
          "Dissolved hemoglobin",
          "Fibrin and clotting factors"
        ],
        "a": 0,
        "e": "The buffy coat is a whitish layer composed of white blood cells and platelets.",
        "topicId": "u3-t10",
        "subSection": "u3-s3",
        "diff": 1
      },
      {
        "q": "A 'degenerative left shift' in canine haematology is defined as:",
        "o": [
          "Presence of immature band neutrophils exceeding the number of mature segmented neutrophils, with normal or low total leukocyte count",
          "Leukocytosis with increased segmented neutrophils only",
          "Eosinophilia with basophilia",
          "Elevated lymphocyte count during viral infections"
        ],
        "a": 0,
        "e": "Degenerative left shift indicates overwhelming tissue consumption exceeding bone marrow production, signifying a grave prognosis.",
        "topicId": "u3-t11",
        "subSection": "u3-s3",
        "diff": 2
      },
      {
        "q": "Erythrocyte Sedimentation Rate (ESR) is naturally very rapid in which domestic species due to pronounced normal rouleaux formation?",
        "o": [
          "Horse",
          "Cattle",
          "Dog",
          "Sheep"
        ],
        "a": 0,
        "e": "Equine erythrocytes have strong surface attraction, forming heavy rouleaux that settle extremely fast in vertical tubes.",
        "topicId": "u3-t11",
        "subSection": "u3-s3",
        "diff": 2
      },
      {
        "q": "Howell-Jolly bodies observed inside erythrocytes represent:",
        "o": [
          "Small, round, dark purple nuclear chromatin remnants",
          "Precipitated oxidized hemoglobin granules",
          "Iron storage particles",
          "Intracellular protozoan trophozoites"
        ],
        "a": 0,
        "e": "Howell-Jolly bodies are nuclear fragments retained in young erythrocytes, increased in regenerative anemia or splenectomy.",
        "topicId": "u3-t12",
        "subSection": "u3-s3",
        "diff": 2
      },
      {
        "q": "Heinz bodies are intraerythrocytic inclusions formed by the oxidative denaturation of:",
        "o": [
          "Hemoglobin",
          "Nuclear DNA",
          "Mitochondrial membranes",
          "Ribosomal RNA"
        ],
        "a": 0,
        "e": "Oxidants (onion, paracetamol in cats, copper in sheep) cross-link hemoglobin sulfhydryl groups, precipitating Heinz bodies.",
        "topicId": "u3-t12",
        "subSection": "u3-s3",
        "diff": 2
      },
      {
        "q": "Urine specific gravity is clinically measured using an optical instrument called a:",
        "o": [
          "Refractometer",
          "Spectrophotometer",
          "Centrifuge",
          "Hemocytometer"
        ],
        "a": 0,
        "e": "A veterinary optical refractometer accurately measures urine refractive index, which correlates with specific gravity.",
        "topicId": "u3-t13",
        "subSection": "u3-s3",
        "diff": 1
      },
      {
        "q": "Isosthenuria refers to the excretion of urine with a fixed specific gravity identical to that of glomerular filtrate, which is:",
        "o": [
          "1.008 to 1.012",
          "1.025 to 1.040",
          "1.001 to 1.005",
          "1.050 to 1.065"
        ],
        "a": 0,
        "e": "Fixed isosthenuria (1.008-1.012) indicates that renal tubules are neither concentrating nor diluting the glomerular filtrate.",
        "topicId": "u3-t13",
        "subSection": "u3-s3",
        "diff": 2
      },
      {
        "q": "Normal urine of healthy adult herbivorous cattle and horses is characteristically:",
        "o": [
          "Alkaline (pH 7.5 to 8.5)",
          "Highly acidic (pH 5.0 to 6.0)",
          "Strictly neutral (pH 7.0) at all times",
          "Strongly acidic (pH 4.0)"
        ],
        "a": 0,
        "e": "Herbivore diets generate carbonate catabolites, resulting in normally alkaline urine (pH 7.5-8.5).",
        "topicId": "u3-t13",
        "subSection": "u3-s3",
        "diff": 1
      },
      {
        "q": "Calcium carbonate crystals resembling 'dumbbells' or radiating spheres are normally abundant in the urine of which species?",
        "o": [
          "Horse",
          "Dog",
          "Cat",
          "Pig"
        ],
        "a": 0,
        "e": "Equine urine normally contains large quantities of calcium carbonate crystals and mucus, giving it a turbid appearance.",
        "topicId": "u3-t13",
        "subSection": "u3-s3",
        "diff": 1
      },
      {
        "q": "Struvite (triple phosphate) urinary crystals exhibit which classic microscopic shape?",
        "o": [
          "'Coffin-lid' prismatic crystals",
          "Envelope-shaped octahedrons",
          "Dumbbell-shaped spheres",
          "Hexagonal plates"
        ],
        "a": 0,
        "e": "Magnesium ammonium phosphate (struvite) crystals precipitate in alkaline urine, resembling 3D coffin-lids.",
        "topicId": "u3-t13",
        "subSection": "u3-s3",
        "diff": 1
      },
      {
        "q": "Cellular casts in urine sediments are formed within the lumen of which nephron segments?",
        "o": [
          "Distal convoluted tubules and collecting ducts",
          "Bowman's space of glomeruli",
          "Proximal convoluted tubules only",
          "Urinary bladder and ureters"
        ],
        "a": 0,
        "e": "Tamm-Horsfall mucoprotein precipitates in distal tubules and collecting ducts, trapping tubular cells, RBCs, or WBCs.",
        "topicId": "u3-t13",
        "subSection": "u3-s3",
        "diff": 2
      },
      {
        "q": "Fine Needle Aspiration Cytology (FNAC) is preferred for initial clinical diagnostic workup because it is:",
        "o": [
          "Rapid, minimally invasive, cost-effective, and provides immediate cellular orientation",
          "Superior to histopathology in grading and staging margins",
          "Capable of replacing surgical excision biopsies completely in all cases",
          "A sterile surgical technique performed under general anaesthesia only"
        ],
        "a": 0,
        "e": "FNAC allows rapid aspiration of cells for immediate Romanowsky staining and diagnostic evaluation.",
        "topicId": "u3-t14",
        "subSection": "u3-s4",
        "diff": 1
      },
      {
        "q": "Which needle gauge is most standard and appropriate for routine FNAC of peripheral lymph nodes and masses in dogs?",
        "o": [
          "21 to 23 Gauge",
          "14 to 16 Gauge",
          "27 to 30 Gauge",
          "18 Gauge only"
        ],
        "a": 0,
        "e": "21-23G needles minimize blood contamination while preserving cellular architecture.",
        "topicId": "u3-t14",
        "subSection": "u3-s4",
        "diff": 1
      },
      {
        "q": "In diagnostic cytology, epithelial neoplasms typically exfoliate in:",
        "o": [
          "Cohesive clusters, sheets, or acinar structures with distinct cell borders",
          "Loose, individualized single cells with eccentric nuclei",
          "Dispersed spindle cells in faint pink matrix",
          "Pure multinucleated giant cells"
        ],
        "a": 0,
        "e": "Epithelial cells retain intercellular junctions (desmosomes), exfoliating in cohesive clusters, sheets, or glandular balls.",
        "topicId": "u3-t14",
        "subSection": "u3-s4",
        "diff": 2
      },
      {
        "q": "Mesenchymal (spindle cell) neoplasms in cytology characteristically exhibit:",
        "o": [
          "Poor exfoliation, with individual or clustered spindle-to-fusiform cells with indistinct borders",
          "High exfoliation of tight glandular sheets",
          "Dense sheets of round cells with halo borders",
          "Abundant floating nuclear chromatin without cytoplasm"
        ],
        "a": 0,
        "e": "Mesenchymal cells embed in extracellular matrix, exfoliating poorly into oval or spindle cells with wispy tails.",
        "topicId": "u3-t14",
        "subSection": "u3-s4",
        "diff": 2
      },
      {
        "q": "Round cell tumours of dogs include all of the following classic neoplasms EXCEPT:",
        "o": [
          "Fibrosarcoma",
          "Mast cell tumour",
          "Lymphoma",
          "Canine Transmissible Venereal Tumour (CTVT)"
        ],
        "a": 0,
        "e": "Fibrosarcoma is a mesenchymal spindle-cell tumor; the round cell group comprises Mast cell, Lymphoma, CTVT, Histiocytoma, and Plasmacytoma.",
        "topicId": "u3-t14",
        "subSection": "u3-s4",
        "diff": 1
      },
      {
        "q": "The general cytologic criterion of malignancy that describes marked variation in nuclear size among cells of the same type is:",
        "o": [
          "Anisokaryosis",
          "Anisocytosis",
          "Macronucleoli",
          "Hyperchromasia"
        ],
        "a": 0,
        "e": "Anisokaryosis is variation in nuclear size; anisocytosis is variation in overall cell size.",
        "topicId": "u3-t14",
        "subSection": "u3-s4",
        "diff": 1
      },
      {
        "q": "Which Romanowsky-type rapid stain is most widely used in veterinary clinical cytology practices?",
        "o": [
          "Diff-Quik (or Leishman / Giemsa)",
          "Papanicolaou stain",
          "Hematoxylin and Eosin (wet-fixed)",
          "Mucicarmine"
        ],
        "a": 0,
        "e": "Diff-Quik is a rapid 3-step Romanowsky stain providing excellent nuclear, cytoplasmic, and infectious agent detail on air-dried smears.",
        "topicId": "u3-t14",
        "subSection": "u3-s4",
        "diff": 1
      },
      {
        "q": "The gold-standard tissue fixative for routine diagnostic histopathology is:",
        "o": [
          "10% Neutral Buffered Formalin (NBF)",
          "Absolute alcohol (100% ethanol)",
          "Bouin's fluid",
          "Glutaraldehyde (2.5%)"
        ],
        "a": 0,
        "e": "10% NBF (approx 4% formaldehyde) maintains neutral pH, penetrates rapidly, cross-links proteins, and prevents formalin pigment formation.",
        "topicId": "u3-t14",
        "subSection": "u3-s4",
        "diff": 1
      },
      {
        "q": "The recommended volumetric ratio of 10% neutral buffered formalin to tissue specimen for adequate fixation is:",
        "o": [
          "10 : 1 to 20 : 1 (formalin volume to tissue volume)",
          "1 : 1",
          "2 : 1",
          "50 : 1"
        ],
        "a": 0,
        "e": "Adequate fixation requires at least 10 to 20 times the volume of formalin relative to the tissue sample volume.",
        "topicId": "u3-t14",
        "subSection": "u3-s4",
        "diff": 1
      },
      {
        "q": "To ensure adequate fixative penetration, solid parenchymal organ tissue slices should not exceed what thickness?",
        "o": [
          "0.5 to 1.0 cm (5 to 10 mm)",
          "3.0 to 4.0 cm",
          "Whole intact organ",
          "2 inches"
        ],
        "a": 0,
        "e": "Formalin penetrates tissue at approximately 1 mm per hour; thick specimens (> 1 cm) suffer central autolysis before fixation.",
        "topicId": "u3-t14",
        "subSection": "u3-s4",
        "diff": 1
      },
      {
        "q": "An incisional biopsy differs from an excisional biopsy in that an incisional biopsy removes:",
        "o": [
          "Only a representative portion or wedge of a mass for diagnosis",
          "The entire tumor mass along with a wide margin of normal tissue",
          "A core of tissue using a fine 23-gauge needle",
          "Surface cells collected by scraping"
        ],
        "a": 0,
        "e": "Incisional biopsy samples a portion of a lesion; excisional biopsy removes the entire lesion for curative and diagnostic intent.",
        "topicId": "u3-t14",
        "subSection": "u3-s4",
        "diff": 1
      },
      {
        "q": "Punch biopsy instruments are most commonly utilized in veterinary medicine for obtaining full-thickness biopsies of:",
        "o": [
          "Skin and superficial cutaneous lesions",
          "Liver and spleen",
          "Bone marrow cores",
          "Cerebral cortex"
        ],
        "a": 0,
        "e": "Circular dermal biopsy punches (4-8 mm) yield clean, full-thickness cylindrical samples of epidermis, dermis, and subcutis.",
        "topicId": "u3-t14",
        "subSection": "u3-s4",
        "diff": 1
      },
      {
        "q": "Exfoliative cytology of the canine vagina during estrus is dominated by which epithelial cell type (> 90%)?",
        "o": [
          "Superficial (cornified) anuclear or pyknotic squames",
          "Parabasal cells",
          "Small intermediate cells",
          "Erythrocytes only"
        ],
        "a": 0,
        "e": "High estrogen levels during proestrus/estrus drive vaginal epithelial cornification; estrus shows > 90% cornified superficial cells.",
        "topicId": "u3-t14",
        "subSection": "u3-s4",
        "diff": 2
      },
      {
        "q": "Impression smear (touch prep) of an ulcerated tissue biopsy should always be preceded by:",
        "o": [
          "Blotting the tissue on clean filter paper to remove excess blood and surface exudate",
          "Washing the tissue vigorously in hot tap water",
          "Scraping the tissue vigorously with a dull scalpel",
          "Fixing the tissue in formalin before touching the slide"
        ],
        "a": 0,
        "e": "Blotting away blood and fluid allows cells to adhere directly to the glass slide rather than floating in a thick blood film.",
        "topicId": "u3-t14",
        "subSection": "u3-s4",
        "diff": 2
      },
      {
        "q": "Bouin's fixative contains picric acid, formalin, and acetic acid, and is the preferred fixative for preserving:",
        "o": [
          "Testicular tissue, eye, and delicate endocrine structures",
          "Whole brains for BSE testing",
          "Routine bone specimens",
          "Frozen sections for Oil Red O"
        ],
        "a": 0,
        "e": "Bouin's fluid preserves delicate nuclear morphology and prevents shrinkage in testicular and retinal biopsies.",
        "topicId": "u3-t14",
        "subSection": "u3-s4",
        "diff": 2
      },
      {
        "q": "Glutaraldehyde (2.5%) is the specialized primary fixative required for:",
        "o": [
          "Transmission and scanning electron microscopy",
          "Routine light microscopy (H&E)",
          "Cytogenetic karyotyping",
          "Polymerase chain reaction (PCR)"
        ],
        "a": 0,
        "e": "Glutaraldehyde creates extensive protein cross-links, preserving ultrastructure for electron microscopy.",
        "topicId": "u3-t14",
        "subSection": "u3-s4",
        "diff": 2
      },
      {
        "q": "Crush artifact on diagnostic cytology slides is avoided by:",
        "o": [
          "Gently drawing a second slide across the droplet without applying downward compressive pressure",
          "Vigorously pressing the slides together with thumbs",
          "Heating the slide rapidly over a Bunsen flame",
          "Air-drying the smear inside an incubator"
        ],
        "a": 0,
        "e": "Light parallel sliding technique smears cells intact; downward pressure ruptures fragile nuclei into bare 'basket cells'.",
        "topicId": "u3-t14",
        "subSection": "u3-s4",
        "diff": 1
      },
      {
        "q": "The presence of phagocytosed red blood cells (erythrophagocytosis) within macrophages in a body cavity fluid indicates:",
        "o": [
          "True antemortem hemorrhage rather than iatrogenic vessel puncture during paracentesis",
          "Recent vessel laceration by the aspirating needle",
          "Primary bacterial peritonitis",
          "Severe hypoproteinemic transudation"
        ],
        "a": 0,
        "e": "Macrophages require several hours to engulf RBCs; erythrophagocytosis or hemosiderin confirms prior in vivo bleeding.",
        "topicId": "u3-t14",
        "subSection": "u3-s4",
        "diff": 2
      },
      {
        "q": "Before commencing any post-mortem examination, the prosector MUST first thoroughly verify:",
        "o": [
          "Complete clinical history, owner identity, animal tag/marks, and that the animal is truly dead",
          "That histological fixative has already been injected into the brain",
          "That the body has undergone complete putrefactive autolysis",
          "That an embalming fluid has been perfused"
        ],
        "a": 0,
        "e": "Verification of animal identity, owner consent, history, and irreversible death (loss of corneal reflex, heartbeat) is mandatory.",
        "topicId": "u3-t15",
        "subSection": "u3-s5",
        "diff": 1
      },
      {
        "q": "If Anthrax (Bacillus anthracis) is suspected in a dead ruminant, the necropsy procedure MUST:",
        "o": [
          "NOT be performed; the carcass must not be opened, and a peripheral blood smear from an ear vein should be examined",
          "Be performed immediately in an open field",
          "Involve rapid boiling of all internal organs",
          "Be restricted to opening only the thoracic cavity"
        ],
        "a": 0,
        "e": "Opening an anthrax carcass exposes vegetative bacilli to atmospheric oxygen, inducing virulent, persistent spore formation.",
        "topicId": "u3-t15",
        "subSection": "u3-s5",
        "diff": 1
      },
      {
        "q": "During ruminant necropsy, the carcass is conventionally placed in which recumbency?",
        "o": [
          "Left lateral recumbency (so the massive rumen lies underneath on the left side)",
          "Right lateral recumbency",
          "Dorsal recumbency",
          "Sternal recumbency"
        ],
        "a": 0,
        "e": "Placing cattle/sheep on the left side keeps the rumen on the table, allowing clean view of intestines, liver, and right kidney.",
        "topicId": "u3-t16",
        "subSection": "u3-s5",
        "diff": 1
      },
      {
        "q": "Equine necropsy is conventionally performed with the horse placed in:",
        "o": [
          "Right lateral recumbency (so the massive cecum and right colon lie downward initially)",
          "Left lateral recumbency only",
          "Dorsal recumbency suspended by hooves",
          "Ventral sternal position"
        ],
        "a": 0,
        "e": "Right recumbency in horses exposes the spleen and left double colon; small animal carcasses are placed in dorsal recumbency.",
        "topicId": "u3-t16",
        "subSection": "u3-s5",
        "diff": 2
      },
      {
        "q": "Canine, feline, and small animal necropsies are standardly executed in which recumbency?",
        "o": [
          "Dorsal recumbency",
          "Left lateral recumbency",
          "Right lateral recumbency",
          "Sternal recumbency"
        ],
        "a": 0,
        "e": "Small animals are placed in dorsal recumbency; limbs are reflected laterally after skin reflection for bilateral symmetry.",
        "topicId": "u3-t16",
        "subSection": "u3-s5",
        "diff": 1
      },
      {
        "q": "Post-mortem bile imbibition is recognized grossly as:",
        "o": [
          "Greenish-yellow discoloration of tissues adjacent to the gall bladder (liver, duodenum)",
          "Bright red staining of the endocardium by lysed erythrocytes",
          "Chalky white spots in peripancreatic fat",
          "Dark black staining of the abdominal wall"
        ],
        "a": 0,
        "e": "Autolysis of the gall bladder wall allows bile salts and pigments to diffuse into adjacent liver parenchyma and intestine.",
        "topicId": "u3-t17",
        "subSection": "u3-s5",
        "diff": 1
      },
      {
        "q": "Post-mortem hemoglobin imbibition is recognized by:",
        "o": [
          "Diffuse reddish-pink staining of the vascular intima, endocardium, and tissues due to erythrocyte lysis",
          "Greenish discoloration of the intestines",
          "Black streaks on the diaphragmatic surface",
          "White chalky deposits in the myocardium"
        ],
        "a": 0,
        "e": "Hemolyzed RBCs release hemoglobin, which diffuses through autolyzed vessel walls, staining the intima and endocardium pinkish-red.",
        "topicId": "u3-t17",
        "subSection": "u3-s5",
        "diff": 1
      },
      {
        "q": "For bacteriological isolation from post-mortem morbid tissue, samples should be collected:",
        "o": [
          "Aseptically using sterile instruments and searing the organ surface with a heated spatula before stabbing",
          "After washing the organ thoroughly under running tap water",
          "From advanced putrefied tissues with high gas production",
          "By dipping the whole carcass into formalin"
        ],
        "a": 0,
        "e": "Searing the capsule sterilizes surface contaminants, allowing sterile swabs or instruments to sample the parenchymal interior.",
        "topicId": "u3-t18",
        "subSection": "u3-s5",
        "diff": 2
      },
      {
        "q": "Morbid specimens intended for viral isolation should be preserved and dispatched in:",
        "o": [
          "50% sterile buffered glycerin-saline (pH 7.4) or transported on dry ice at -70°C",
          "10% neutral buffered formalin",
          "Absolute ethanol",
          "Concentrated sodium chloride brine"
        ],
        "a": 0,
        "e": "Glycerin-saline preserves viral infectivity; formalin and alcohol kill viruses and cross-link nucleic acids.",
        "topicId": "u3-t18",
        "subSection": "u3-s5",
        "diff": 2
      },
      {
        "q": "For toxicology testing in suspected malicious poisoning, which visceral organ is the most critical to submit in generous quantities?",
        "o": [
          "Stomach/rumen contents and Liver (at least 500 g to 1 kg)",
          "Trachea and thyroid gland",
          "Pancreas and adrenal gland",
          "Spleen alone"
        ],
        "a": 0,
        "e": "Liver is the metabolic clearing organ, and stomach contents contain unabsorbed toxins, making them primary toxicological specimens.",
        "topicId": "u3-t18",
        "subSection": "u3-s5",
        "diff": 1
      },
      {
        "q": "In a veterolegal necropsy report, the professional prosector must strictly distinguish between:",
        "o": [
          "Factual, objective description of lesions (findings) and the interpretive diagnosis/opinion",
          "The age of the animal and its breed",
          "The time of necropsy and sunrise",
          "Internal lesions and external lesions only"
        ],
        "a": 0,
        "e": "Objective physical descriptions must be separated from diagnostic interpretations to withstand scrutiny in a court of law.",
        "topicId": "u3-t19",
        "subSection": "u3-s5",
        "diff": 2
      },
      {
        "q": "An antemortem wound is conclusively distinguished from a post-mortem wound in veterolegal pathology by the presence of:",
        "o": [
          "A vital reaction (fibrin deposition, hemorrhage with thrombi, active hyperaemia, and neutrophilic infiltration)",
          "Sharp edges without any cellular reaction",
          "Absence of clotting or hemorrhage",
          "Gravitational hypostatic pooling only"
        ],
        "a": 0,
        "e": "Vital reaction (active clotting, tissue retraction, cellular inflammation) proves the animal was alive when the wound occurred.",
        "topicId": "u3-t20",
        "subSection": "u3-s5",
        "diff": 1
      },
      {
        "q": "In gunshot wound pathology, the entrance wound typically differs from the exit wound in that the entrance wound:",
        "o": [
          "Is smaller, rounded, with inverted margins, a collar of abrasion, and possible soot/tattooing",
          "Is larger, irregular, with everted margins and no abrasion collar",
          "Always exhibits massive tissue evisceration",
          "Is completely free of any epidermal defect"
        ],
        "a": 0,
        "e": "Entrance wounds feature an abrasion ring and inverted margins; exit wounds are larger, stellate, and everted.",
        "topicId": "u3-t20",
        "subSection": "u3-s5",
        "diff": 2
      },
      {
        "q": "An incised wound produced by a sharp cutting weapon is characterized by:",
        "o": [
          "Clean-cut linear edges without tissue bridges and length greater than depth",
          "Irregular torn edges with intact bridging strands of vessels and nerves",
          "A narrow, deep channel whose depth far exceeds its length",
          "Crushed, bruised skin with irregular lacerations"
        ],
        "a": 0,
        "e": "Sharp weapons slice vessels cleanly without tissue bridging; blunt force tears tissues leaving tissue bridges (lacerations).",
        "topicId": "u3-t20",
        "subSection": "u3-s5",
        "diff": 2
      },
      {
        "q": "A lacerated wound is caused by blunt mechanical force and is characterized by:",
        "o": [
          "Irregular, torn, ragged edges with intact tissue bridging across the wound depth and surrounding contusion",
          "Smooth, cleanly sliced margins with no tissue bridging",
          "Pinpoint puncture holes extending into deep joints",
          "Charred skin margins with entrance tattooing"
        ],
        "a": 0,
        "e": "Lacerations show tissue bridges (intact vessels and nerve filaments traversing the tear) and abraded/bruised margins.",
        "topicId": "u3-t20",
        "subSection": "u3-s5",
        "diff": 2
      },
      {
        "q": "A contusion (bruise) in veterolegal pathology is defined as:",
        "o": [
          "An injury produced by blunt trauma causing rupture of subcutaneous blood vessels with extravasation, while the overlying skin remains intact",
          "A break or breach in the continuity of the skin",
          "A scrape or denudation of the superficial epidermis",
          "A deep penetrating stab into a body cavity"
        ],
        "a": 0,
        "e": "Contusion is closed blunt injury causing internal microvascular rupture and interstitial hematoma without skin tearing.",
        "topicId": "u3-t20",
        "subSection": "u3-s5",
        "diff": 1
      },
      {
        "q": "The post-mortem cooling of a dead animal body towards ambient environmental temperature is called:",
        "o": [
          "Algor mortis",
          "Rigor mortis",
          "Livor mortis",
          "Autolysis"
        ],
        "a": 0,
        "e": "Algor mortis is post-mortem cooling; livor mortis is hypostatic settling; rigor mortis is post-mortem stiffening.",
        "topicId": "u3-t17",
        "subSection": "u3-s5",
        "diff": 1
      },
      {
        "q": "To confirm lightning strike as the cause of sudden death in pastured cattle, the prosector searches for pathognomonic:",
        "o": [
          "Arborescent, branching 'tree-like' singeing burns on the skin (Lichtenberg figures) and singed hair",
          "Massive caseous necrosis in mesenteric lymph nodes",
          "Extensive fibrinous pleuropneumonia",
          "Bilateral symmetrical cerebellar hypoplasia"
        ],
        "a": 0,
        "e": "Lichtenberg figures are cutaneous arborizing burn patterns produced by electrical arcing over moist skin.",
        "topicId": "u3-t20",
        "subSection": "u3-s5",
        "diff": 2
      }
    ],
    "tf": [
      {
        "q": "Neoplasia is defined as autonomous, unregulated, purposeless cellular proliferation that persists after the initiating stimulus is withdrawn.",
        "a": true,
        "e": "Unlike hyperplasia, neoplastic transformation alters the genome so growth continues indefinitely without external signals.",
        "topicId": "u3-t01",
        "subSection": "u3-s1",
        "diff": 1
      },
      {
        "q": "Benign tumours characteristically infiltrate into adjacent tissues and form distant hematogenous metastases.",
        "a": false,
        "e": "Benign tumours grow by expansion, are usually encapsulated, and never metastasize.",
        "topicId": "u3-t02",
        "subSection": "u3-s1",
        "diff": 1
      },
      {
        "q": "Carcinomas are malignant tumours derived from embryonic mesenchymal connective tissues.",
        "a": false,
        "e": "Carcinomas arise from epithelial tissues (ectoderm, endoderm, mesothelium); sarcomas arise from mesenchymal tissues.",
        "topicId": "u3-t01",
        "subSection": "u3-s1",
        "diff": 1
      },
      {
        "q": "Sarcomas typically disseminate through lymphatic vessels to regional lymph nodes before entering the bloodstream.",
        "a": false,
        "e": "Sarcomas invade blood capillaries and disseminate early via the hematogenous route to the lungs.",
        "topicId": "u3-t04",
        "subSection": "u3-s1",
        "diff": 1
      },
      {
        "q": "Chemical carcinogenesis involves an irreversible genetic mutation during the initiation phase.",
        "a": true,
        "e": "Initiation alters cellular DNA irreversibly; subsequent promotion stimulates clonal expansion of initiated cells.",
        "topicId": "u3-t03",
        "subSection": "u3-s1",
        "diff": 2
      },
      {
        "q": "Ptaquiloside from bracken fern acts synergistically with Bovine Papillomavirus-2 to induce bovine bladder cancer.",
        "a": true,
        "e": "This synergy produces chronic enzootic bovine hematuria and invasive urothelial carcinomas.",
        "topicId": "u3-t03",
        "subSection": "u3-s1",
        "diff": 2
      },
      {
        "q": "Tumour grading is a clinical evaluation of tumor size and distant metastasis performed by the attending clinician.",
        "a": false,
        "e": "Grading is histological examination of anaplasia and mitoses by a pathologist; staging is clinical assessment of anatomical spread.",
        "topicId": "u3-t05",
        "subSection": "u3-s1",
        "diff": 1
      },
      {
        "q": "Humoral hypercalcaemia of malignancy in dogs is most commonly caused by tumour secretion of PTH-related protein (PTHrP).",
        "a": true,
        "e": "Lymphoma and anal sac carcinomas secrete PTHrP, which mimics parathyroid hormone to induce severe hypercalcaemia.",
        "topicId": "u3-t05",
        "subSection": "u3-s1",
        "diff": 2
      },
      {
        "q": "A choristoma is a malignant teratoma containing disorganized elements of all three germ layers.",
        "a": false,
        "e": "A choristoma is a non-neoplastic, benign heterotopic rest of normal tissue in an abnormal anatomical site (e.g. corneal dermoid).",
        "topicId": "u3-t01",
        "subSection": "u3-s1",
        "diff": 2
      },
      {
        "q": "Keratin pearls (epithelial pearls) and intercellular bridges are diagnostic histological features of squamous cell carcinoma.",
        "a": true,
        "e": "Concentric whorls of laminated keratin and prominent desmosomes confirm squamous epithelial differentiation.",
        "topicId": "u3-t06",
        "subSection": "u3-s2",
        "diff": 1
      },
      {
        "q": "Canine Transmissible Venereal Tumour (CTVT) is transmitted naturally by transplantation of intact, viable neoplastic cells during coitus.",
        "a": true,
        "e": "CTVT is a contagious, parasitic clonal cellular allograft transmitted by physical transfer of live cells.",
        "topicId": "u3-t08",
        "subSection": "u3-s2",
        "diff": 1
      },
      {
        "q": "CTVT cells possess the normal canine somatic complement of 78 chromosomes.",
        "a": false,
        "e": "CTVT has an abnormal, stable aneuploid karyotype containing 57 to 59 chromosomes.",
        "topicId": "u3-t08",
        "subSection": "u3-s2",
        "diff": 2
      },
      {
        "q": "Mast cell tumour granules in dogs stain metachromatically purple with toluidine blue due to their heparin content.",
        "a": true,
        "e": "Sulfated glycosaminoglycans (heparin) in mast cell granules induce metachromatic shift in cationic dyes.",
        "topicId": "u3-t08",
        "subSection": "u3-s2",
        "diff": 1
      },
      {
        "q": "Canine osteosarcoma characteristically metastasizes to the regional lymph nodes while sparing the pulmonary parenchyma.",
        "a": false,
        "e": "Osteosarcoma has early hematogenous dissemination to the lungs; over 90% of dogs have micrometastases at presentation.",
        "topicId": "u3-t07",
        "subSection": "u3-s2",
        "diff": 1
      },
      {
        "q": "Equine sarcoids are locally aggressive, non-metastasizing fibroblastic skin tumours associated with Bovine Papillomavirus types 1 and 2.",
        "a": true,
        "e": "BPV-1 and BPV-2 cross-species infection drives the transformation of equine dermal fibroblasts into sarcoids.",
        "topicId": "u3-t07",
        "subSection": "u3-s2",
        "diff": 1
      },
      {
        "q": "Bovine ocular squamous cell carcinoma ('cancer eye') is particularly prevalent in breeds with heavily pigmented eyelids.",
        "a": false,
        "e": "Unpigmented eyelids and conjunctiva (as in Hereford cattle) lack protective melanin against UV radiation.",
        "topicId": "u3-t06",
        "subSection": "u3-s2",
        "diff": 1
      },
      {
        "q": "Malignant melanomas in grey horses are most commonly found in the perineal region, ventrum of the tail, and parotid gland.",
        "a": true,
        "e": "Grey horses older than 15 years have an extremely high incidence of melanomas at these anatomical predilection sites.",
        "topicId": "u3-t08",
        "subSection": "u3-s2",
        "diff": 1
      },
      {
        "q": "Desmoplasia refers to the extensive proliferation of fibrous stroma induced by invasive carcinoma cells.",
        "a": true,
        "e": "Tumour cells secrete PDGF and TGF-beta, recruiting fibroblasts and producing stony-hard scirrhous tumours.",
        "topicId": "u3-t06",
        "subSection": "u3-s2",
        "diff": 2
      },
      {
        "q": "EDTA is the preferred anticoagulant for routine complete blood counts because it preserves cellular morphology.",
        "a": true,
        "e": "EDTA prevents clotting via calcium chelation and prevents platelet clumping without altering leukocyte morphology.",
        "topicId": "u3-t09",
        "subSection": "u3-s3",
        "diff": 1
      },
      {
        "q": "Sodium fluoride is added to blood collection tubes to prevent glycolysis by inhibiting the enzyme enolase.",
        "a": true,
        "e": "Sodium fluoride stabilizes blood glucose for accurate biochemical measurement by arresting RBC metabolism.",
        "topicId": "u3-t09",
        "subSection": "u3-s3",
        "diff": 1
      },
      {
        "q": "A macrocytic, hypochromic anaemia is typically indicative of non-regenerative bone marrow aplasia.",
        "a": false,
        "e": "Macrocytic hypochromic anaemia is classic for active regenerative anaemia (reticulocytes are larger and incompletely filled with Hb).",
        "topicId": "u3-t10",
        "subSection": "u3-s3",
        "diff": 2
      },
      {
        "q": "Microcytic, hypochromic anaemia is the classic haematological profile of chronic iron deficiency anaemia.",
        "a": true,
        "e": "Insufficient iron delays hemoglobinization, resulting in extra cell divisions and small, pale red cells.",
        "topicId": "u3-t10",
        "subSection": "u3-s3",
        "diff": 1
      },
      {
        "q": "Horses normally exhibit a very rapid erythrocyte sedimentation rate (ESR) due to prominent physiological rouleaux formation.",
        "a": true,
        "e": "Equine RBCs adhere naturally into coin-like stacks (rouleaux), which rapidly sediment out of suspension.",
        "topicId": "u3-t11",
        "subSection": "u3-s3",
        "diff": 1
      },
      {
        "q": "Heinz bodies are precipitated remnants of ribosomal RNA inside immature reticulocytes.",
        "a": false,
        "e": "Heinz bodies are clumps of denatured, oxidized hemoglobin; ribosomal RNA aggregates are reticulin / basophilic stippling.",
        "topicId": "u3-t12",
        "subSection": "u3-s3",
        "diff": 2
      },
      {
        "q": "Isosthenuria (urine specific gravity 1.008 to 1.012) indicates that the renal tubules are functioning normally with maximal concentrating ability.",
        "a": false,
        "e": "Isosthenuria indicates loss of tubular capacity to concentrate or dilute urine, classic for chronic renal failure.",
        "topicId": "u3-t13",
        "subSection": "u3-s3",
        "diff": 2
      },
      {
        "q": "Urine of healthy adult cattle and horses is characteristically alkaline, typically with a pH between 7.5 and 8.5.",
        "a": true,
        "e": "Plant-based herbivore diets are rich in alkaline mineral ash, producing normally alkaline urine.",
        "topicId": "u3-t13",
        "subSection": "u3-s3",
        "diff": 1
      },
      {
        "q": "Struvite (triple phosphate) crystals typically resemble 'coffin-lids' and precipitate readily in acidic urine.",
        "a": false,
        "e": "Struvite crystals are coffin-lid prisms but they precipitate in alkaline (not acidic) urine.",
        "topicId": "u3-t13",
        "subSection": "u3-s3",
        "diff": 2
      },
      {
        "q": "Fine needle aspiration cytology (FNAC) using 21-23 gauge needles avoids significant hemodilution of the sample.",
        "a": true,
        "e": "Narrow gauge needles cut and aspirate cohesive cells with minimal trauma to surrounding capillary vessels.",
        "topicId": "u3-t14",
        "subSection": "u3-s4",
        "diff": 1
      },
      {
        "q": "Epithelial neoplasms characteristically exfoliate as individualized single round cells with complete loss of cohesion.",
        "a": false,
        "e": "Epithelial cells retain cell junctions and exfoliate in cohesive clusters, sheets, or glandular acini.",
        "topicId": "u3-t14",
        "subSection": "u3-s4",
        "diff": 1
      },
      {
        "q": "Anisokaryosis refers to significant variation in the size of nuclei among cells of the same lineage.",
        "a": true,
        "e": "Anisokaryosis is a major cytologic criterion of malignancy indicating aberrant nuclear growth control.",
        "topicId": "u3-t14",
        "subSection": "u3-s4",
        "diff": 1
      },
      {
        "q": "The optimal fixative-to-tissue volume ratio for 10% neutral buffered formalin is at least 10:1 to 20:1.",
        "a": true,
        "e": "Large excess of formalin is required to ensure complete penetration and prevent consumption of buffer salts.",
        "topicId": "u3-t14",
        "subSection": "u3-s4",
        "diff": 1
      },
      {
        "q": "Solid organ tissue slices for routine histopathology should ideally be 3 to 4 cm thick to prevent drying out.",
        "a": false,
        "e": "Tissues must not exceed 0.5 to 1.0 cm thickness; formalin penetrates slowly (1 mm/hr), and thick slices undergo central autolysis.",
        "topicId": "u3-t14",
        "subSection": "u3-s4",
        "diff": 1
      },
      {
        "q": "Vaginal cytology during canine estrus is dominated (> 90%) by cornified, superficial epithelial squames.",
        "a": true,
        "e": "Peak estrogen drives maximal proliferation and cornification of the vaginal mucosal epithelium during estrus.",
        "topicId": "u3-t14",
        "subSection": "u3-s4",
        "diff": 1
      },
      {
        "q": "Impression smears of biopsy specimens should be made directly from freshly severed bloody tissue without blotting.",
        "a": false,
        "e": "Bloody specimens must be blotted on filter paper first; otherwise, blood covers the slide and prevents cellular adherence.",
        "topicId": "u3-t14",
        "subSection": "u3-s4",
        "diff": 1
      },
      {
        "q": "Glutaraldehyde is the primary fixative of choice for specimens destined for transmission electron microscopy.",
        "a": true,
        "e": "Glutaraldehyde cross-links proteins tightly, preserving delicate subcellular organelles and membranes.",
        "topicId": "u3-t14",
        "subSection": "u3-s4",
        "diff": 1
      },
      {
        "q": "Erythrophagocytosis by macrophages in an abdominal effusion indicates true antemortem internal hemorrhage.",
        "a": true,
        "e": "Erythrophagocytosis requires hours of vital macrophage activity, distinguishing true hemorrhage from accidental needle puncture.",
        "topicId": "u3-t14",
        "subSection": "u3-s4",
        "diff": 2
      },
      {
        "q": "If Anthrax is suspected in a dead animal, the prosector must immediately perform a complete necropsy to confirm splenomegaly.",
        "a": false,
        "e": "The carcass must NOT be opened if anthrax is suspected, as opening exposes vegetative bacilli to air, triggering sporulation.",
        "topicId": "u3-t15",
        "subSection": "u3-s5",
        "diff": 1
      },
      {
        "q": "Ruminant necropsies are conventionally executed with the carcass in left lateral recumbency.",
        "a": true,
        "e": "Placing the animal on its left side keeps the massive rumen against the table, facilitating examination of abdominal organs on the right.",
        "topicId": "u3-t16",
        "subSection": "u3-s5",
        "diff": 1
      },
      {
        "q": "Post-mortem bile imbibition produces a bright red discoloration of the endocardium.",
        "a": false,
        "e": "Bile imbibition causes yellowish-green staining of liver/intestines; reddish endocardial staining is hemoglobin imbibition.",
        "topicId": "u3-t17",
        "subSection": "u3-s5",
        "diff": 1
      },
      {
        "q": "A vital reaction (such as fibrin deposition, thrombosis, and cellular infiltration) proves a wound was inflicted prior to death.",
        "a": true,
        "e": "Post-mortem wounds cannot generate an active inflammatory response, clotting, or hyperaemia.",
        "topicId": "u3-t20",
        "subSection": "u3-s5",
        "diff": 1
      },
      {
        "q": "A contusion (bruise) is characterized by mechanical tearing of the skin surface with open hemorrhage.",
        "a": false,
        "e": "A contusion is an injury to deeper tissues with subcutaneous extravasation while the overlying skin remains intact.",
        "topicId": "u3-t20",
        "subSection": "u3-s5",
        "diff": 1
      },
      {
        "q": "Lacerated wounds display tissue bridging (intact vessels and nerves crossing the wound depth) and ragged, abraded edges.",
        "a": true,
        "e": "Blunt tearing forces spare elastic vessels and nerve strands, which remain as bridges across the wound cavity.",
        "topicId": "u3-t20",
        "subSection": "u3-s5",
        "diff": 2
      },
      {
        "q": "Entrance gunshot wounds typically exhibit everted margins and are significantly larger than the corresponding exit wounds.",
        "a": false,
        "e": "Entrance wounds are smaller with inverted margins and an abrasion collar; exit wounds are larger and everted.",
        "topicId": "u3-t20",
        "subSection": "u3-s5",
        "diff": 2
      },
      {
        "q": "Algor mortis refers to the gravitational pooling of blood in dependent parts of the dead body.",
        "a": false,
        "e": "Cooling of the carcass is algor mortis; gravitational pooling of blood is livor mortis (hypostatic congestion).",
        "topicId": "u3-t17",
        "subSection": "u3-s5",
        "diff": 1
      },
      {
        "q": "Lichtenberg figures (arborescent tree-like singe marks on the skin) are pathognomonic evidence of death by lightning strike.",
        "a": true,
        "e": "Electrical arcing along the moist skin surface produces characteristic branching, fern-like cutaneous burn patterns.",
        "topicId": "u3-t20",
        "subSection": "u3-s5",
        "diff": 1
      }
    ],
    "fib": [
      {
        "q": "The loss of cellular structural and functional differentiation characteristic of malignant neoplasms is termed ______.",
        "a": [
          "anaplasia"
        ],
        "a_display": "anaplasia",
        "e": "Anaplasia is dedifferentiation, characterized by pleomorphism, hyperchromasia, and abnormal mitoses.",
        "topicId": "u3-t01",
        "subSection": "u3-s1",
        "diff": 1
      },
      {
        "q": "The critical tumour suppressor gene on chromosome 17 known as the 'Guardian of the Genome' is ______.",
        "a": [
          "p53",
          "tp53"
        ],
        "a_display": "p53",
        "e": "p53 arrests cells at the G1/S checkpoint to allow DNA repair or induces apoptosis if damage is irreparable.",
        "topicId": "u3-t03",
        "subSection": "u3-s1",
        "diff": 1
      },
      {
        "q": "Enzootic bovine hematuria and urinary bladder cancers in cattle are triggered by ptaquiloside present in ______ fern.",
        "a": [
          "bracken"
        ],
        "a_display": "bracken",
        "e": "Bracken fern (Pteridium aquilinum) contains the radiomimetic carcinogen ptaquiloside.",
        "topicId": "u3-t03",
        "subSection": "u3-s1",
        "diff": 1
      },
      {
        "q": "In the TNM clinical cancer staging system, 'N' stands for regional lymph ______ involvement.",
        "a": [
          "node",
          "nodes"
        ],
        "a_display": "node",
        "e": "TNM stages primary Tumor (T), regional Nodes (N), and distant Metastasis (M).",
        "topicId": "u3-t05",
        "subSection": "u3-s1",
        "diff": 1
      },
      {
        "q": "Severe progressive emaciation and muscle wasting in cancer patients driven by TNF-alpha is cancer ______.",
        "a": [
          "cachexia"
        ],
        "a_display": "cachexia",
        "e": "Cancer cachexia involves loss of both adipose tissue and lean skeletal muscle driven by cytokines.",
        "topicId": "u3-t05",
        "subSection": "u3-s1",
        "diff": 1
      },
      {
        "q": "A developmental malformation consisting of a localized, disorganized overgrowth of mature normal tissues native to that site is a ______.",
        "a": [
          "hamartoma"
        ],
        "a_display": "hamartoma",
        "e": "Hamartomas consist of indigenous tissue elements arranged aberrantly (e.g. vascular hamartoma).",
        "topicId": "u3-t01",
        "subSection": "u3-s1",
        "diff": 2
      },
      {
        "q": "A mass consisting of histologically normal mature tissue present in an abnormal anatomical location is a ______.",
        "a": [
          "choristoma"
        ],
        "a_display": "choristoma",
        "e": "Choristoma is heterotopic tissue rest, such as a corneal dermoid containing hair and sebaceous glands on the eye.",
        "topicId": "u3-t01",
        "subSection": "u3-s1",
        "diff": 2
      },
      {
        "q": "The primary cytokine secreted by hypoxic tumour cells that drives new vessel formation (angiogenesis) is ______.",
        "a": [
          "vegf",
          "vascular endothelial growth factor"
        ],
        "a_display": "VEGF",
        "e": "VEGF stimulates endothelial sprouting to supply oxygen and nutrients to the expanding neoplasm.",
        "topicId": "u3-t04",
        "subSection": "u3-s1",
        "diff": 2
      },
      {
        "q": "A benign tumour arising from surface epithelium that forms multiple microscopic or macroscopic finger-like projections is a ______.",
        "a": [
          "papilloma"
        ],
        "a_display": "papilloma",
        "e": "Papillomas are benign epithelial projections supported by a vascular connective tissue core.",
        "topicId": "u3-t01",
        "subSection": "u3-s1",
        "diff": 1
      },
      {
        "q": "The concentric whorls of laminated keratin seen histologically within squamous cell carcinomas are called keratin ______.",
        "a": [
          "pearls",
          "pearl"
        ],
        "a_display": "pearls",
        "e": "Keratin pearls (epithelial pearls) confirm squamous epithelial origin and keratinization.",
        "topicId": "u3-t06",
        "subSection": "u3-s2",
        "diff": 1
      },
      {
        "q": "Canine Transmissible Venereal Tumour (CTVT) cells possess an altered, stable karyotype containing ______ chromosomes.",
        "a": [
          "57 to 59",
          "57-59",
          "59",
          "57"
        ],
        "a_display": "57 to 59",
        "e": "Normal canine karyotype has 78 chromosomes; CTVT has 57-59 chromosomes.",
        "topicId": "u3-t08",
        "subSection": "u3-s2",
        "diff": 2
      },
      {
        "q": "Canine mast cell tumour cytoplasmic granules stain metachromatically purple with ______ blue stain.",
        "a": [
          "toluidine"
        ],
        "a_display": "toluidine",
        "e": "Toluidine blue stains mast cell heparin granules a striking metachromatic reddish-purple.",
        "topicId": "u3-t08",
        "subSection": "u3-s2",
        "diff": 1
      },
      {
        "q": "The definitive diagnostic microscopic criterion for osteosarcoma is the production of ______ directly by malignant mesenchymal cells.",
        "a": [
          "osteoid"
        ],
        "a_display": "osteoid",
        "e": "Malignant osteoblasts producing unmineralized osteoid directly confirms osteosarcoma.",
        "topicId": "u3-t07",
        "subSection": "u3-s2",
        "diff": 1
      },
      {
        "q": "The intermediate filament protein that serves as an immunohistochemical diagnostic marker for epithelial carcinomas is ______.",
        "a": [
          "cytokeratin",
          "keratin"
        ],
        "a_display": "cytokeratin",
        "e": "Cytokeratin intermediate filaments identify epithelial lineage, differentiating carcinomas from sarcomas.",
        "topicId": "u3-t06",
        "subSection": "u3-s2",
        "diff": 2
      },
      {
        "q": "The intermediate filament marker used in immunohistochemistry to identify tumours of mesenchymal origin (sarcomas) is ______.",
        "a": [
          "vimentin"
        ],
        "a_display": "vimentin",
        "e": "Vimentin is universally expressed by mesenchymal cells and mesenchymal neoplasms.",
        "topicId": "u3-t07",
        "subSection": "u3-s2",
        "diff": 2
      },
      {
        "q": "In the dog, primary haemangiosarcoma exhibits the highest incidence in the right atrium and the ______.",
        "a": [
          "spleen"
        ],
        "a_display": "spleen",
        "e": "Splenic and right atrial hemangiosarcomas are notorious for sudden rupture and fatal internal hemorrhage.",
        "topicId": "u3-t07",
        "subSection": "u3-s2",
        "diff": 1
      },
      {
        "q": "Feminization syndrome in male dogs with Sertoli cell tumours is driven by autonomous neoplastic secretion of ______.",
        "a": [
          "estrogens",
          "oestrogens",
          "estrogen",
          "oestrogen"
        ],
        "a_display": "estrogens",
        "e": "Estrogen secretion leads to gynecomastia, bilateral symmetrical alopecia, and penile atrophy.",
        "topicId": "u3-t08",
        "subSection": "u3-s2",
        "diff": 2
      },
      {
        "q": "Equine sarcoids are locally invasive skin tumours etiologically associated with Bovine ______ Virus types 1 and 2.",
        "a": [
          "papilloma",
          "papillomavirus",
          "bpv"
        ],
        "a_display": "Papillomavirus (BPV)",
        "e": "BPV-1 and BPV-2 DNA is present in equine sarcoids, inducing dermal fibroblastic transformation.",
        "topicId": "u3-t07",
        "subSection": "u3-s2",
        "diff": 2
      },
      {
        "q": "The percentage of whole blood volume occupied by packed erythrocytes upon centrifugation is the Packed Cell ______.",
        "a": [
          "volume",
          "pcv"
        ],
        "a_display": "Volume (PCV)",
        "e": "PCV (hematocrit) is the primary index of circulating erythrocyte mass.",
        "topicId": "u3-t10",
        "subSection": "u3-s3",
        "diff": 1
      },
      {
        "q": "The red blood cell index that quantifies average individual erythrocyte volume in femtoliters is Mean Corpuscular ______.",
        "a": [
          "volume",
          "mcv"
        ],
        "a_display": "Volume (MCV)",
        "e": "MCV = (PCV × 10) / TEC. Values categorize anemia as microcytic, normocytic, or macrocytic.",
        "topicId": "u3-t10",
        "subSection": "u3-s3",
        "diff": 1
      },
      {
        "q": "Small, round, dark purple nuclear chromatin remnants observed inside erythrocytes on Romanowsky smears are ______ bodies.",
        "a": [
          "howell-jolly",
          "howell jolly"
        ],
        "a_display": "Howell-Jolly",
        "e": "Howell-Jolly bodies represent micronuclei left behind during accelerated erythropoiesis.",
        "topicId": "u3-t12",
        "subSection": "u3-s3",
        "diff": 2
      },
      {
        "q": "Intraerythrocytic inclusions consisting of precipitated, denatured oxidized hemoglobin are called ______ bodies.",
        "a": [
          "heinz"
        ],
        "a_display": "Heinz",
        "e": "Heinz bodies result from oxidative damage and can be highlighted using New Methylene Blue stain.",
        "topicId": "u3-t12",
        "subSection": "u3-s3",
        "diff": 1
      },
      {
        "q": "The clinical optical instrument used to measure the specific gravity of urine is a ______.",
        "a": [
          "refractometer"
        ],
        "a_display": "refractometer",
        "e": "Refractometers measure refractive index, which is proportional to the total dissolved solids in urine.",
        "topicId": "u3-t13",
        "subSection": "u3-s3",
        "diff": 1
      },
      {
        "q": "A state of fixed urine specific gravity between 1.008 and 1.012, matching the glomerular filtrate, is called ______.",
        "a": [
          "isosthenuria"
        ],
        "a_display": "isosthenuria",
        "e": "Isosthenuria indicates that renal tubules have lost the ability to concentrate or dilute urine.",
        "topicId": "u3-t13",
        "subSection": "u3-s3",
        "diff": 2
      },
      {
        "q": "Struvite (triple phosphate) urinary crystals precipitate in alkaline urine and classically resemble '______' under the microscope.",
        "a": [
          "coffin lids",
          "coffin lid",
          "coffin-lids",
          "coffin-lid"
        ],
        "a_display": "coffin-lids",
        "e": "Struvite crystals form rectangular, prismatic shapes with beveled ends resembling coffin lids.",
        "topicId": "u3-t13",
        "subSection": "u3-s3",
        "diff": 1
      },
      {
        "q": "The thin, whitish intermediate layer containing white blood cells and platelets in a centrifuged microhematocrit tube is the ______ coat.",
        "a": [
          "buffy"
        ],
        "a_display": "buffy",
        "e": "The buffy coat sits directly atop the packed erythrocyte column.",
        "topicId": "u3-t10",
        "subSection": "u3-s3",
        "diff": 1
      },
      {
        "q": "Sodium ______ is the specialized tube additive that preserves blood glucose by inhibiting enolase.",
        "a": [
          "fluoride"
        ],
        "a_display": "fluoride",
        "e": "Sodium fluoride inhibits enolase in the glycolytic pathway to prevent in vitro glucose consumption.",
        "topicId": "u3-t09",
        "subSection": "u3-s3",
        "diff": 1
      },
      {
        "q": "The standard gold-standard chemical fixative used for routine diagnostic tissue histopathology is 10% Neutral Buffered ______.",
        "a": [
          "formalin"
        ],
        "a_display": "Formalin",
        "e": "10% NBF contains 4% formaldehyde buffered with phosphate salts to maintain neutral pH 7.0.",
        "topicId": "u3-t14",
        "subSection": "u3-s4",
        "diff": 1
      },
      {
        "q": "The recommended fixative-to-tissue volumetric ratio for proper tissue preservation is at least ______ to 1.",
        "a": [
          "10",
          "10:1",
          "10 to 1",
          "20"
        ],
        "a_display": "10:1",
        "e": "At least 10 to 20 parts fixative per 1 part tissue ensures uniform, complete cross-linking.",
        "topicId": "u3-t14",
        "subSection": "u3-s4",
        "diff": 1
      },
      {
        "q": "Marked variation in overall cellular size on a cytology smear is designated as ______.",
        "a": [
          "anisocytosis"
        ],
        "a_display": "anisocytosis",
        "e": "Anisocytosis describes variation in cell diameter; anisokaryosis describes variation in nuclear diameter.",
        "topicId": "u3-t14",
        "subSection": "u3-s4",
        "diff": 1
      },
      {
        "q": "Surgical removal of only a small, representative wedge or portion of a mass for diagnostic evaluation is an ______ biopsy.",
        "a": [
          "incisional"
        ],
        "a_display": "incisional",
        "e": "Incisional biopsy samples a portion of the lesion; excisional biopsy removes the entire mass.",
        "topicId": "u3-t14",
        "subSection": "u3-s4",
        "diff": 1
      },
      {
        "q": "The specialized dialdehyde fixative utilized to preserve cellular ultrastructure for electron microscopy is ______.",
        "a": [
          "glutaraldehyde"
        ],
        "a_display": "glutaraldehyde",
        "e": "Glutaraldehyde (2.5%) provides tight cross-linking, stabilizing membranes and organelles for EM.",
        "topicId": "u3-t14",
        "subSection": "u3-s4",
        "diff": 2
      },
      {
        "q": "During canine estrus, vaginal exfoliative cytology is dominated (> 90%) by cornified ______ epithelial cells.",
        "a": [
          "superficial",
          "squames"
        ],
        "a_display": "superficial",
        "e": "Cornified superficial cells have pyknotic nuclei or are completely anuclear squames.",
        "topicId": "u3-t14",
        "subSection": "u3-s4",
        "diff": 2
      },
      {
        "q": "The circular cutting instrument used to take full-thickness cylindrical biopsies of skin is a ______ biopsy punch.",
        "a": [
          "punch",
          "skin punch",
          "dermal punch"
        ],
        "a_display": "punch",
        "e": "Punch biopsies obtain intact cores of epidermis, dermis, and subcutaneous fat.",
        "topicId": "u3-t14",
        "subSection": "u3-s4",
        "diff": 1
      },
      {
        "q": "The presence of red blood cells engulfed inside macrophages in an effusion is termed ______.",
        "a": [
          "erythrophagocytosis"
        ],
        "a_display": "erythrophagocytosis",
        "e": "Erythrophagocytosis confirms that hemorrhage occurred in vivo prior to sample collection.",
        "topicId": "u3-t14",
        "subSection": "u3-s4",
        "diff": 2
      },
      {
        "q": "To prevent dilution of cells by blood, a freshly excised biopsy should be gently ______ on filter paper before making impression touch smears.",
        "a": [
          "blotted",
          "blot"
        ],
        "a_display": "blotted",
        "e": "Blotting removes fluid and blood, allowing parenchyma to deposit as a clean monolayer on the slide.",
        "topicId": "u3-t14",
        "subSection": "u3-s4",
        "diff": 1
      },
      {
        "q": "If ______ is suspected in a dead ruminant, the carcass must NOT be opened under any circumstances.",
        "a": [
          "anthrax"
        ],
        "a_display": "Anthrax",
        "e": "Opening an anthrax carcass exposes Bacillus anthracis to air, inducing sporulation and environmental contamination.",
        "topicId": "u3-t15",
        "subSection": "u3-s5",
        "diff": 1
      },
      {
        "q": "In ruminants, post-mortem examination is standardly conducted with the carcass placed in ______ lateral recumbency.",
        "a": [
          "left"
        ],
        "a_display": "left",
        "e": "Left recumbency positions the massive rumen on the table, leaving right-sided viscera accessible.",
        "topicId": "u3-t16",
        "subSection": "u3-s5",
        "diff": 1
      },
      {
        "q": "Greenish-yellow post-mortem staining of liver and intestine adjacent to the gall bladder is called bile ______.",
        "a": [
          "imbibition"
        ],
        "a_display": "imbibition",
        "e": "Autolysis of the gall bladder wall allows bile pigments to leak into adjacent parenchyma.",
        "topicId": "u3-t17",
        "subSection": "u3-s5",
        "diff": 1
      },
      {
        "q": "The post-mortem diffuse pinkish-red staining of arterial intima and endocardium by lysed erythrocytes is ______ imbibition.",
        "a": [
          "hemoglobin",
          "haemoglobin"
        ],
        "a_display": "hemoglobin",
        "e": "Erythrocyte lysis releases free hemoglobin, staining endocardium and vascular linings pinkish-red.",
        "topicId": "u3-t17",
        "subSection": "u3-s5",
        "diff": 1
      },
      {
        "q": "The progressive cooling of a dead animal body towards environmental temperature after death is called ______ mortis.",
        "a": [
          "algor"
        ],
        "a_display": "algor",
        "e": "Algor mortis reflects cessation of metabolic heat production and thermodynamic equilibration with the ambient air.",
        "topicId": "u3-t17",
        "subSection": "u3-s5",
        "diff": 1
      },
      {
        "q": "A closed blunt-force mechanical injury with intact skin and subcutaneous extravasation of blood is a ______ (bruise).",
        "a": [
          "contusion"
        ],
        "a_display": "contusion",
        "e": "Contusions result from blunt impact tearing capillary beds without disrupting epidermal continuity.",
        "topicId": "u3-t20",
        "subSection": "u3-s5",
        "diff": 1
      },
      {
        "q": "A wound produced by blunt tearing force displaying intact strands of vessels and nerves crossing the defect has tissue ______.",
        "a": [
          "bridging",
          "bridges"
        ],
        "a_display": "bridging",
        "e": "Tissue bridging is the definitive morphological feature that differentiates lacerations from sharp incised wounds.",
        "topicId": "u3-t20",
        "subSection": "u3-s5",
        "diff": 2
      },
      {
        "q": "The branching, fern-like cutaneous singe burns characteristic of fatal lightning strike in cattle are called ______ figures.",
        "a": [
          "lichtenberg"
        ],
        "a_display": "Lichtenberg",
        "e": "Lichtenberg figures are pathognomonic arborizing skin burns caused by massive electrical discharge.",
        "topicId": "u3-t20",
        "subSection": "u3-s5",
        "diff": 2
      },
      {
        "q": "Tissue samples intended for viral isolation should be collected and dispatched in 50% sterile buffered ______ saline.",
        "a": [
          "glycerin",
          "glycerol"
        ],
        "a_display": "glycerin",
        "e": "50% buffered glycerin-saline preserves viral viability during transit while suppressing bacterial overgrowth.",
        "topicId": "u3-t18",
        "subSection": "u3-s5",
        "diff": 2
      }
    ]
  },
  "unit-4": {
    "mcq": [
      {
        "q": "Foot-and-Mouth Disease (FMD) in young calves frequently causes fatal acute myocarditis producing which pathognomonic gross lesion?",
        "o": [
          "'Tiger heart' (tigroid appearance of myocardium)",
          "'Bread and butter' pericarditis",
          "'Mulberry heart'",
          "'Cor bovinum'"
        ],
        "a": 0,
        "e": "FMD virus causes non-suppurative myocarditis with greyish-yellow necrotic streaks alternating with normal muscle (tiger heart).",
        "topicId": "u4-t01",
        "subSection": "u4-s1",
        "diff": 1
      },
      {
        "q": "Rinderpest (Cattle Plague) is characterized pathologically by which hallmark mucosal alteration throughout the digestive tract?",
        "o": [
          "Necrotic erosions with 'zebra striping' of the rectum and colon",
          "Button ulcers in the cecum only",
          "Corrugated cerebriform folds of the ileum",
          "Diphtheritic casting of the rumen pillars"
        ],
        "a": 0,
        "e": "Rinderpest causes lymphoid necrosis and mucosal erosions; linear congested mucosal folds in the rectum form 'zebra striping'.",
        "topicId": "u4-t01",
        "subSection": "u4-s1",
        "diff": 2
      },
      {
        "q": "Malignant Catarrhal Fever (MCF) in cattle is histopathologically defined by:",
        "o": [
          "Generalized necrotizing lymphocytic vasculitis and perivascular cuffing in multiple organs",
          "Suppurative bronchopneumonia with oat cells",
          "Granulomatous enteritis with multinucleated giant cells",
          "Intracytoplasmic Negri bodies in Purkinje cells"
        ],
        "a": 0,
        "e": "Alcelaphine/Ovine herpesviruses induce systemic T-lymphocyte proliferation causing severe necrotizing arteritis and panophthalmitis.",
        "topicId": "u4-t01",
        "subSection": "u4-s1",
        "diff": 2
      },
      {
        "q": "Bluetongue in sheep is characterized by cyanosis of the tongue and pathognomonic focal necrosis/hemorrhage at the:",
        "o": [
          "Base of the pulmonary artery",
          "Apex of the left ventricle",
          "Renal cortico-medullary junction",
          "Coronary band only"
        ],
        "a": 0,
        "e": "Bluetongue orbivirus infects endothelial cells; hemorrhage and necrosis at the base of the pulmonary artery is pathognomonic.",
        "topicId": "u4-t02",
        "subSection": "u4-s1",
        "diff": 2
      },
      {
        "q": "Peste des Petits Ruminants (PPR) in goats produces which characteristic combination of lesions?",
        "o": [
          "Necrotic stomatitis, catarrhal/erosive enteritis, and bronchointerstitial pneumonia",
          "Severe fibrinous pleuropneumonia only",
          "Granulomatous mastitis with caseous lymph nodes",
          "Extensive vesicular eruptions on the coronary band"
        ],
        "a": 0,
        "e": "PPR (goat plague) produces lesions mirroring rinderpest: erosive stomatitis, enteritis, lymphoid depletion, plus bronchointerstitial pneumonia.",
        "topicId": "u4-t02",
        "subSection": "u4-s1",
        "diff": 1
      },
      {
        "q": "Infectious Bovine Rhinotracheitis (IBR, Bovine Herpesvirus-1) is characterized by:",
        "o": [
          "Fibrinonecrotic tracheitis with eosinophilic intranuclear inclusion bodies",
          "Intracytoplasmic inclusions in enterocytes",
          "Severe necrotizing splenitis with Negri bodies",
          "Suppurative osteomyelitis of the turbinates"
        ],
        "a": 0,
        "e": "BHV-1 causes necrotic 'red nose' rhinotracheitis with Cowdry type A intranuclear inclusions in respiratory epithelial cells.",
        "topicId": "u4-t02",
        "subSection": "u4-s1",
        "diff": 2
      },
      {
        "q": "Bovine Viral Diarrhea (BVD) - Mucosal Disease complex develops when a persistently infected (PI) animal is superinfected with:",
        "o": [
          "A cytopathic (CP) BVDV strain homologous to the persisting non-cytopathic (NCP) strain",
          "A heterologous rotavirus",
          "Bovine Coronavirus",
          "Bovine Herpesvirus-4"
        ],
        "a": 0,
        "e": "Calves infected in utero with non-cytopathic BVDV become immunotolerant (PI); mutation or superinfection with cytopathic virus causes fatal mucosal disease.",
        "topicId": "u4-t02",
        "subSection": "u4-s1",
        "diff": 3
      },
      {
        "q": "Maedi (visna) in sheep is a slow retroviral infection causing which pulmonary lesion?",
        "o": [
          "Chronic interstitial pneumonia with heavy, rubbery lungs that fail to collapse upon opening the thorax",
          "Acute fibrinous pleuropneumonia with oat cells",
          "Extensive caseous abscesses throughout apical lobes",
          "Suppurative bronchopneumonia with liquefaction"
        ],
        "a": 0,
        "e": "Maedi retrovirus causes progressive lymphoid hyperplasia, alveolar septal thickening, and smooth muscle hypertrophy; lungs are grey, heavy, and rubbery.",
        "topicId": "u4-t07",
        "subSection": "u4-s1",
        "diff": 2
      },
      {
        "q": "Jaagziekte (Ovine Pulmonary Adenocarcinoma) is caused by Jaagziekte Sheep Retrovirus (JSRV) and represents a neoplastic transformation of:",
        "o": [
          "Alveolar Type II pneumocytes and Clara (club) cells",
          "Vascular endothelial cells in pulmonary capillaries",
          "Bronchial smooth muscle myocytes",
          "Alveolar macrophages"
        ],
        "a": 0,
        "e": "JSRV envelope protein acts as an oncoprotein, driving malignant transformation of type II pneumocytes into papillary adenocarcinomas.",
        "topicId": "u4-t07",
        "subSection": "u4-s1",
        "diff": 2
      },
      {
        "q": "Sheep pox is the most severe poxvirus disease of livestock, characterized histologically by:",
        "o": [
          "'Cellules claveleuses' (sheep pox cells) with intracytoplasmic inclusion bodies",
          "Cowdry type A intranuclear inclusions in keratinocytes",
          "Fibrinoid necrosis of arterioles with Negri bodies",
          "Extensive intraepithelial microabscesses"
        ],
        "a": 0,
        "e": "Sheep pox lesions contain pathognomonic large vacuolated histiocytic 'Borrel cells' (cellules claveleuses) with eosinophilic inclusions.",
        "topicId": "u4-t08",
        "subSection": "u4-s1",
        "diff": 3
      },
      {
        "q": "Bovine papular stomatitis (Parapoxvirus) lesions are distinguished from FMD because papular stomatitis lesions are:",
        "o": [
          "Proliferative, raised reddish papules that expand into ring-like lesions without true vesiculation",
          "Fluid-filled blisters containing clear lymph",
          "Deep caseous ulcers leaving bony sequestra",
          "Pseudomembranous croupous casts"
        ],
        "a": 0,
        "e": "Parapoxviruses stimulate keratinocyte proliferation (ballooning and acanthosis) forming circular papules rather than fluid-filled vesicles.",
        "topicId": "u4-t08",
        "subSection": "u4-s1",
        "diff": 2
      },
      {
        "q": "Rotavirus and Coronavirus infections in neonatal calves cause profuse diarrhea primarily by destroying:",
        "o": [
          "Absorptive enterocytes on the tips of small intestinal villi, leading to villous blunting and atrophy",
          "Crypt progenitor cells in the crypts of Lieberkühn",
          "Vascular endothelium in the submucosa",
          "Peyer's patch lymphoid follicles exclusively"
        ],
        "a": 0,
        "e": "Rotavirus selectively infects and lyses mature villous tip enterocytes, causing malabsorptive/osmotic diarrhea.",
        "topicId": "u4-t10",
        "subSection": "u4-s1",
        "diff": 2
      },
      {
        "q": "Canine Distemper Virus (Morbillivirus) produces which diagnostic combination of inclusion bodies?",
        "o": [
          "Both intracytoplasmic and intranuclear eosinophilic inclusions in epithelial, lymphoid, and neural tissues",
          "Strictly intranuclear basophilic inclusions in hepatocytes only",
          "Strictly intracytoplasmic Negri bodies in neurons",
          "Intranuclear inclusions in vascular endothelium exclusively"
        ],
        "a": 0,
        "e": "Canine distemper is unique in producing both intranuclear and intracytoplasmic eosinophilic viral inclusions.",
        "topicId": "u4-t05",
        "subSection": "u4-s2",
        "diff": 2
      },
      {
        "q": "Hardpad disease in dogs is a chronic manifestation of Canine Distemper characterized by:",
        "o": [
          "Marked hyperkeratosis of the footpads and nasal planum",
          "Calcification of the digital flexor tendons",
          "Suppurative arthritis of the hock joints",
          "Gangrenous necrosis of the paw tips"
        ],
        "a": 0,
        "e": "Persistent viral infection of digital and nasal keratinocytes drives profound orthokeratotic and parakeratotic hyperkeratosis.",
        "topicId": "u4-t05",
        "subSection": "u4-s2",
        "diff": 1
      },
      {
        "q": "Canine Parvovirus (CPV-2) and Feline Panleukopenia Virus (FPV) cause fatal enteritis by selectively targeting and destroying:",
        "o": [
          "Rapidly dividing crypt epithelial cells of the crypts of Lieberkühn",
          "Mature enterocytes on the tips of villi only",
          "Biliary ductular epithelium",
          "Brunner's glands in the duodenum"
        ],
        "a": 0,
        "e": "Parvoviruses require S-phase host DNA machinery, destroying intestinal crypts, collapsing mucosal architecture, and destroying bone marrow.",
        "topicId": "u4-t05",
        "subSection": "u4-s2",
        "diff": 2
      },
      {
        "q": "Infectious Canine Hepatitis (CAV-1) causes corneal edema colloquially termed 'blue eye' as a result of:",
        "o": [
          "Immune complex-mediated Type III hypersensitivity targeting corneal endothelium",
          "Direct bacterial infection of the sclera",
          "Glaucoma induced by pupillary block",
          "Metastatic calcification of the lens"
        ],
        "a": 0,
        "e": "Antigen-antibody complexes deposit in the anterior chamber during recovery, causing anterior uveitis, endothelial injury, and corneal edema.",
        "topicId": "u4-t05",
        "subSection": "u4-s2",
        "diff": 2
      },
      {
        "q": "Rabies virus travels from the site of a bite wound to the central nervous system via:",
        "o": [
          "Retrograde axoplasmic flow within peripheral motor and sensory nerves",
          "Hematogenous dissemination in circulating monocytes",
          "Cerebrospinal fluid circulation from the choroid plexus",
          "Lymphatic drainage to deep cervical lymph nodes"
        ],
        "a": 0,
        "e": "Rabies glycoprotein binds acetylcholine receptors at neuromuscular junctions and migrates centripetally along axoplasm to the spinal cord and brain.",
        "topicId": "u4-t05",
        "subSection": "u4-s2",
        "diff": 1
      },
      {
        "q": "Classical Swine Fever (Hog Cholera, Pestivirus) is characterized by pathognomonic renal lesions called:",
        "o": [
          "'Turkey egg kidney' (multifocal petechial and ecchymotic cortical hemorrhages)",
          "'White spotted kidney'",
          "'Large pale amyloid kidney'",
          "'Polycystic kidney'"
        ],
        "a": 0,
        "e": "Pestivirus-induced endothelial necrosis and thrombocytopenia produce petechiae scattered over the renal cortex like a turkey egg.",
        "topicId": "u4-t04",
        "subSection": "u4-s2",
        "diff": 1
      },
      {
        "q": "Splenic infarction in pigs characterized by dark, raised, wedge-shaped peripheral infarcts is diagnostic for:",
        "o": [
          "Classical Swine Fever (Hog Cholera)",
          "Swine Erysipelas",
          "Glasser's disease",
          "Porcine Parvovirus"
        ],
        "a": 0,
        "e": "Marginal splenic infarcts caused by viral microvascular thrombosis are virtually pathognomonic for hog cholera.",
        "topicId": "u4-t04",
        "subSection": "u4-s2",
        "diff": 2
      },
      {
        "q": "African Swine Fever (ASFV, Asfarviridae) differs pathologically from Classical Swine Fever by causing:",
        "o": [
          "Massive, profound lymphoid necrosis, friable dark splenomegaly, and severe hemorrhages in gastrohepatic lymph nodes",
          "Intracytoplasmic Negri bodies in Purkinje cells",
          "Non-suppurative periportal hepatitis without hemorrhage",
          "Pure demyelinating encephalitis"
        ],
        "a": 0,
        "e": "ASFV triggers massive macrophage destruction and cytokine storm, producing intense hemorrhage and giant congested friable spleens.",
        "topicId": "u4-t04",
        "subSection": "u4-s2",
        "diff": 2
      },
      {
        "q": "Equine Infectious Anaemia (EIA, Lentivirus) causes recurrent bouts of fever, thrombocytopenia, and hemolytic anemia mediated by:",
        "o": [
          "Complement-mediated immune destruction of erythrocytes and glomerulonephritis",
          "Direct viral replication inside mature red blood cells",
          "Bone marrow fat infiltration",
          "Splenic rupture"
        ],
        "a": 0,
        "e": "Antibodies and complement coat viral-antigen-adsorbed erythrocytes, which are cleared by splenic and Kupffer macrophages (erythrophagocytosis).",
        "topicId": "u4-t03",
        "subSection": "u4-s2",
        "diff": 2
      },
      {
        "q": "Equine Viral Arteritis (EVA) is characterized pathologically by:",
        "o": [
          "Necrotizing arteritis of small and medium arteries, edema of limbs and prepuce, and abortion",
          "Granulomatous pneumonia with Langhans giant cells",
          "Suppurative osteomyelitis of the splint bones",
          "Widespread intestinal button ulcers"
        ],
        "a": 0,
        "e": "EVA virus replicates in arterial medial smooth muscle cells, causing fibrinoid medial necrosis, edema, and petechiation.",
        "topicId": "u4-t03",
        "subSection": "u4-s2",
        "diff": 2
      },
      {
        "q": "Equine Herpesvirus-1 (EHV-1) causes late-term equine abortion by inducing:",
        "o": [
          "Severe fetal hypoxia secondary to necrotizing uterine vasculitis and fetal focal hepatic necrosis",
          "Ascending purulent vaginitis",
          "Direct mechanical rupture of the amniotic sac",
          "Maternal diabetes mellitus"
        ],
        "a": 0,
        "e": "Endotheliotropic EHV-1 causes uterine thrombosis and multifocal focal necrosis with intranuclear inclusions in fetal liver and lungs.",
        "topicId": "u4-t03",
        "subSection": "u4-s2",
        "diff": 2
      },
      {
        "q": "Feline Infectious Peritonitis (FIP) is caused by a mutated Feline Coronavirus and is characterized in its effusive form by:",
        "o": [
          "Pyogranulomatous vasculitis with sticky, straw-colored, protein-rich exudate that clots upon exposure to air",
          "Severe watery transudate with specific gravity < 1.010",
          "Massive hemorrhagic ascites from splenic rupture",
          "Pure neutrophilic abscessation of mesenteric lymph nodes"
        ],
        "a": 0,
        "e": "Mutant FCoV replicates in macrophages; immune complex deposition causes pyogranulomatous vasculitis and high-protein straw-colored effusion.",
        "topicId": "u4-t06",
        "subSection": "u4-s2",
        "diff": 2
      },
      {
        "q": "Bovine tuberculosis (Mycobacterium bovis) is microscopically characterized by the classic tubercle consisting of:",
        "o": [
          "Central caseous necrosis with mineralization, surrounded by epithelioid cells, Langhans giant cells, and a fibrous capsule",
          "Pure liquefactive suppuration with degenerate neutrophils",
          "Whorls of mature spindle fibroblasts with no necrosis",
          "Extensive fibrin deposition with oat-shaped cells"
        ],
        "a": 0,
        "e": "Tuberculous granulomas display central caseation and calcification rimmed by Langhans cells, lymphocytes, and fibrous capsule.",
        "topicId": "u4-t12",
        "subSection": "u4-s3",
        "diff": 1
      },
      {
        "q": "'Pearl disease' in cattle is a manifestation of bovine tuberculosis involving which anatomical site?",
        "o": [
          "Serosal surfaces of the pleura and peritoneum (tuberculous pleurisy/peritonitis)",
          "Endocardium of the left ventricle",
          "Medulla of the adrenal glands",
          "Synovial sheath of the digital flexor tendons"
        ],
        "a": 0,
        "e": "Tubercles studding the pleura and peritoneum resemble shiny white pearls, giving the historic name 'pearl disease'.",
        "topicId": "u4-t12",
        "subSection": "u4-s3",
        "diff": 2
      },
      {
        "q": "The acid-fast staining property of Mycobacterium species in the Ziehl-Neelsen (ZN) stain is due to high concentration of:",
        "o": [
          "Mycolic acids in the bacterial cell wall",
          "Peptidoglycan layers",
          "Lipopolysaccharide endotoxin",
          "Capsular poly-D-glutamic acid"
        ],
        "a": 0,
        "e": "Long-chain mycolic acids prevent destaining by acid-alcohol, retaining carbol fuchsin (red rods).",
        "topicId": "u4-t12",
        "subSection": "u4-s3",
        "diff": 1
      },
      {
        "q": "Anthrax (Bacillus anthracis) produces sudden death in cattle with which triad of cardinal necropsy findings?",
        "o": [
          "Absence of rigor mortis, incomplete clotting of dark tarry blood, and massive soft blackberry-jam splenomegaly",
          "Severe dry gangrene of limbs, intact rigor mortis, and shrunken pale spleen",
          "Corrugated cerebriform ileitis with button ulcers",
          "Generalized petechiae with clear fluid effusions"
        ],
        "a": 0,
        "e": "Anthrax toxin causes endothelial lysis and DIC, yielding failure of rigor mortis, dark uncoagulated blood from orifices, and soft splenomegaly.",
        "topicId": "u4-t14",
        "subSection": "u4-s3",
        "diff": 1
      },
      {
        "q": "Blackleg in cattle (Clostridium chauvoei) is characterized pathologically by necrotizing myositis with:",
        "o": [
          "Dark, dry, porous muscle smelling of rancid butter, with gas crepitation and serosanguinous exudate",
          "Pale, waxy Zenker's degeneration without gas",
          "Suppurative liquefaction of the entire limb musculature",
          "Caseous nodules with concentric laminations"
        ],
        "a": 0,
        "e": "Chauvoei toxins induce ischemic necrosis and ferment muscle glycogen into butyric acid ('rancid butter' odor) and gas bubbles.",
        "topicId": "u4-t15",
        "subSection": "u4-s3",
        "diff": 1
      },
      {
        "q": "Black disease (Infectious Necrotic Hepatitis) in sheep is caused by Clostridium novyi Type B multiplying in liver areas damaged by:",
        "o": [
          "Migrating immature flukes of Fasciola hepatica",
          "Echinococcus granulosus hydatid cysts",
          "Toxic ingestion of Lantana camara",
          "Heavy copper toxicity"
        ],
        "a": 0,
        "e": "Fluke migration creates anaerobic tracts allowing latent C. novyi spores to germinate, releasing alpha-toxin that causes necrotic hepatitis.",
        "topicId": "u4-t15",
        "subSection": "u4-s3",
        "diff": 2
      },
      {
        "q": "Pulpy kidney disease (Enterotoxaemia) in sheep is caused by Clostridium perfringens Type D producing which potent protoxin?",
        "o": [
          "Epsilon toxin (activated by trypsin in the small intestine)",
          "Alpha toxin",
          "Tetanospasmin",
          "Botulinum toxin"
        ],
        "a": 0,
        "e": "High grain intake sends starch into the ileum; C. perfringens Type D proliferates, producing epsilon protoxin activated by trypsin.",
        "topicId": "u4-t15",
        "subSection": "u4-s3",
        "diff": 2
      },
      {
        "q": "Pathognomonic necropsy lesions of enterotoxaemia in sheep include all of the following EXCEPT:",
        "o": [
          "Corrugated cerebriform transverse ridges in the ileum",
          "Rapid post-mortem renal cortical softening ('pulpy kidney')",
          "Hydropericardium with dense fibrin clot formation",
          "Focal symmetrical encephalomalacia in the brain"
        ],
        "a": 0,
        "e": "Corrugated ileitis is classic for Johne's disease; pulpy kidney features renal autolysis, hydropericardium with clot, and encephalomalacia.",
        "topicId": "u4-t15",
        "subSection": "u4-s3",
        "diff": 2
      },
      {
        "q": "Braxy in sheep is an acute, fatal abomasitis caused by Clostridium septicum typically occurring after:",
        "o": [
          "Ingestion of frozen, frosted pasture in winter",
          "Severe grazing on lush spring clover",
          "Excessive water intake during summer",
          "Prolonged feeding of dry cereal straw"
        ],
        "a": 0,
        "e": "Frosted feed injures the abomasal mucosa, allowing C. septicum to penetrate and induce hemorrhagic, emphysematous abomasitis.",
        "topicId": "u4-t15",
        "subSection": "u4-s3",
        "diff": 2
      },
      {
        "q": "Tetanus (Clostridium tetani) produces spastic paralysis and 'sawhorse' stance primarily through the action of tetanospasmin, which:",
        "o": [
          "Blocks the release of inhibitory neurotransmitters (GABA and glycine) from Renshaw interneurons in the spinal cord",
          "Blocks acetylcholine release at the neuromuscular junction",
          "Destroys upper motor neurons in the motor cortex",
          "Degenerates myelin sheaths of peripheral motor nerves"
        ],
        "a": 0,
        "e": "Tetanospasmin migrates retrograde into spinal inhibitory interneurons, blocking GABA/glycine release, resulting in unchecked motor excitation.",
        "topicId": "u4-t15",
        "subSection": "u4-s3",
        "diff": 2
      },
      {
        "q": "Botulism (Clostridium botulinum) causes flaccid paralysis (limberneck in waterfowl) because botulinum toxin:",
        "o": [
          "Cleaves SNARE proteins and prevents acetylcholine release at peripheral neuromuscular junctions",
          "Blocks glycine release in the spinal cord",
          "Destroys ventral horn motor neurons",
          "Causes severe muscle necrosis with myoglobinuria"
        ],
        "a": 0,
        "e": "Botulinum neurotoxin enters motor nerve terminals, cleaving SNARE proteins (SNAP-25/synaptobrevin) to halt acetylcholine release.",
        "topicId": "u4-t15",
        "subSection": "u4-s3",
        "diff": 2
      },
      {
        "q": "Johne's disease (Paratuberculosis) in cattle is microscopically characterized by diffuse infiltration of the intestinal mucosa by:",
        "o": [
          "Epithelioid macrophages packed with clumps of acid-fast bacilli",
          "Dense layers of neutrophils forming crypt abscesses",
          "Multinucleated Langhans giant cells with extensive caseous necrosis and calcification",
          "Eosinophils and Charcot-Leyden crystals"
        ],
        "a": 0,
        "e": "Unlike tuberculosis, bovine Johne's disease produces non-caseating, non-calcified granulomatous enteritis with acid-fast bacillary clumps.",
        "topicId": "u4-t12",
        "subSection": "u4-s3",
        "diff": 2
      },
      {
        "q": "Hemorrhagic Septicaemia (HS) in cattle and buffalo is caused by Pasteurella multocida (serotypes B:2 and E:2) and produces:",
        "o": [
          "Severe pharyngeal and submandibular edema with acute fibrinous pleuropneumonia and petechiation",
          "Chronic caseous lymphadenitis with onion-ring appearance",
          "Atrophic rhinitis with nasal septum deviation",
          "Suppurative arthritis without systemic signs"
        ],
        "a": 0,
        "e": "Endotoxin-induced microvascular damage causes massive throat/submandibular edema, petechiae, and fibrinous pleuropneumonia.",
        "topicId": "u4-t17",
        "subSection": "u4-s4",
        "diff": 1
      },
      {
        "q": "Glanders in horses (Burkholderia mallei) manifests in three anatomical forms, namely:",
        "o": [
          "Nasal, Pulmonary, and Cutaneous (Farcy)",
          "Intestinal, Ocular, and Articular",
          "Hepatic, Splenic, and Renal",
          "Cerebral, Spinal, and Peripheral"
        ],
        "a": 0,
        "e": "Glanders affects equines as: Nasal (stellate ulcers/scars), Pulmonary (nodules), and Cutaneous/Farcy (nodular lymphangitis).",
        "topicId": "u4-t17",
        "subSection": "u4-s4",
        "diff": 1
      },
      {
        "q": "In cutaneous glanders (Farcy), the characteristic lesion is:",
        "o": [
          "Enlarged, corded subcutaneous lymphatic vessels studded with nodules that rupture into craters",
          "Extensive vesicular eruptions on the coronary band",
          "Rhomboid diamond skin plaques with central necrosis",
          "Crusty circular alopecic patches on the face"
        ],
        "a": 0,
        "e": "Farcy involves subcutaneous lymphangitis ('farcy pipes') and suppurative ulcerated nodules ('farcy buds').",
        "topicId": "u4-t17",
        "subSection": "u4-s4",
        "diff": 2
      },
      {
        "q": "Strangles in equines is an acute contagious suppurative lymphadenitis caused by:",
        "o": [
          "Streptococcus equi subspecies equi",
          "Streptococcus dysgalactiae",
          "Corynebacterium pseudotuberculosis",
          "Rhodococcus equi"
        ],
        "a": 0,
        "e": "Strep. equi subsp. equi produces acute pharyngitis and suppurative abscessation of submandibular and retropharyngeal lymph nodes.",
        "topicId": "u4-t16",
        "subSection": "u4-s4",
        "diff": 1
      },
      {
        "q": "Bastard strangles in horses occurs when Streptococcus equi spreads hematogenously to cause:",
        "o": [
          "Metastatic abscesses in internal organs (mesenteric lymph nodes, spleen, brain)",
          "Necrotizing pneumonia with oat cells",
          "Chronic caseous granulomas with calcification in liver",
          "Severe laminitis with pedal bone rotation"
        ],
        "a": 0,
        "e": "Bastard strangles is metastatic dissemination producing abscesses in mesenteric nodes, lungs, spleen, or brain.",
        "topicId": "u4-t16",
        "subSection": "u4-s4",
        "diff": 2
      },
      {
        "q": "Bovine Brucellosis (Brucella abortus) in bulls produces which primary reproductive lesion?",
        "o": [
          "Necrotizing and granulomatous orchitis and epididymitis with testicular degeneration",
          "Preputial prolapse with papillomatosis",
          "Complete urethral calculus obstruction",
          "Transmissible venereal round cell tumors"
        ],
        "a": 0,
        "e": "Brucella abortus targets the male reproductive tract, causing severe necrotizing orchitis, seminal vesiculitis, and permanent sterility.",
        "topicId": "u4-t18",
        "subSection": "u4-s4",
        "diff": 2
      },
      {
        "q": "Caseous lymphadenitis (CLA) in sheep and goats is caused by Corynebacterium pseudotuberculosis, producing lymph nodes with:",
        "o": [
          "Concentric laminations of caseous necrotic debris resembling an 'onion ring' on cross-section",
          "Solid gray medullary hyperplasia with zero necrosis",
          "Pure watery serous cyst formation",
          "Complete diffuse liquefaction into watery pus"
        ],
        "a": 0,
        "e": "Repeated waves of bacterial necrosis, leukocyte influx, and fibrous encapsulation yield classic 'onion-ring' concentric rings.",
        "topicId": "u4-t19",
        "subSection": "u4-s4",
        "diff": 1
      },
      {
        "q": "Contagious Bovine Pleuropneumonia (CBPP) caused by Mycoplasma mycoides subsp. mycoides produces a diagnostic gross appearance called:",
        "o": [
          "'Marbled lung' (marbling of pulmonary parenchyma by widened, edematous interlobular septa and red/grey hepatization)",
          "'Nutmeg lung'",
          "'Bread and butter lung'",
          "'Honeycomb lung'"
        ],
        "a": 0,
        "e": "Stages of red hepatization, grey hepatization, and massive gelatinous interlobular edema create the pathognomonic marbled lung.",
        "topicId": "u4-t21",
        "subSection": "u4-s4",
        "diff": 1
      },
      {
        "q": "Rhodococcus equi infection in foals typically produces which life-threatening pathological lesion?",
        "o": [
          "Suppurative and pyogranulomatous bronchopneumonia with large lung abscesses and ulcerative enterocolitis",
          "Acute fibrinous pericarditis with cardiac tamponade",
          "Severe degenerative osteoarthritis of the stifle",
          "Widespread diamond skin infarcts"
        ],
        "a": 0,
        "e": "Rhodococcus equi is a facultative intracellular pathogen of macrophages, causing cavitary pyogranulomatous pulmonary abscesses.",
        "topicId": "u4-t19",
        "subSection": "u4-s4",
        "diff": 2
      },
      {
        "q": "Colibacillosis in neonatal calves manifesting as severe watery, yellowish diarrhea without mucosal ulceration is caused by:",
        "o": [
          "Enterotoxigenic E. coli (ETEC) producing heat-labile or heat-stable enterotoxins via K99/F5 fimbriae",
          "Enteropathogenic E. coli (EPEC)",
          "Enterohemorrhagic E. coli (EHEC)",
          "Septicemic E. coli (SEPEC)"
        ],
        "a": 0,
        "e": "ETEC adheres via K99 fimbriae and produces enterotoxins, stimulating chloride secretion without destroying enterocytes (secretory diarrhea).",
        "topicId": "u4-t20",
        "subSection": "u4-s4",
        "diff": 2
      },
      {
        "q": "Swine Erysipelas (Erysipelothrix rhusiopathiae) produces chronic arthritis characterized morphologically by:",
        "o": [
          "Proliferative non-suppurative synovitis with prominent villous synovial hypertrophy ('synovial fronds')",
          "Suppurative erosive arthritis with massive pus",
          "Extensive caseous necrosis of subchondral bone",
          "Complete ankylosis without synovial change"
        ],
        "a": 0,
        "e": "Chronic erysipelas stimulates intense synovial proliferation with villous fronds, lymphocytic infiltration, and pannus formation.",
        "topicId": "u4-t18",
        "subSection": "u4-s4",
        "diff": 2
      },
      {
        "q": "Leptospirosis in cattle and dogs typically causes which primary pathological lesions?",
        "o": [
          "Acute interstitial nephritis, hemolytic anemia, hemoglobinuria, and hepatic dysfunction",
          "Chronic caseous lymphadenitis of mesenteric nodes",
          "Granulomatous osteomyelitis of the facial bones",
          "Severe fibrinous pleuropneumonia with oat cells"
        ],
        "a": 0,
        "e": "Leptospires colonize renal proximal tubules and produce hemolysins, causing interstitial nephritis, hemolysis, and jaundice.",
        "topicId": "u4-t17",
        "subSection": "u4-s4",
        "diff": 2
      },
      {
        "q": "Aspergillosis in domestic animals (Aspergillus fumigatus) is characterized histologically by fungal hyphae that are:",
        "o": [
          "Dichotomously branching at 45-degree angles, uniform in width, and septate",
          "Broad, irregular, non-septate branching at 90-degree angles",
          "Budding yeast cells with thick mucopolysaccharide capsules",
          "Cigar-shaped pleomorphic intracellular yeast forms"
        ],
        "a": 0,
        "e": "Aspergillus hyphae are slender, septate, and branch acutely (45°); Mucor/Zygomycetes are broad, non-septate, and branch at 90°.",
        "topicId": "u4-t24",
        "subSection": "u4-s5",
        "diff": 2
      },
      {
        "q": "Rhinosporidiosis (Rhinosporidium seeberi) causes which characteristic lesions in the nasal cavities of cattle and dogs?",
        "o": [
          "Friable, bleeding, strawberry-like polypoid growths containing large thick-walled sporangia filled with endospores",
          "Deep caseous ulcers leaving nasal septal perforation",
          "Bilateral symmetrical necrosis of nasal turbinates",
          "Atrophic rhinitis without masses"
        ],
        "a": 0,
        "e": "Rhinosporidiosis forms vascular polyps containing giant mature sporangia (up to 300 µm) filled with thousands of endospores.",
        "topicId": "u4-t24",
        "subSection": "u4-s5",
        "diff": 2
      },
      {
        "q": "Aflatoxicosis in livestock is caused by ingestion of aflatoxins produced by Aspergillus flavus, with the primary target organ being the:",
        "o": [
          "Liver (causing fatty change, centrilobular necrosis, bile duct proliferation, and cirrhosis)",
          "Kidney collecting ducts",
          "Myocardium",
          "Lungs"
        ],
        "a": 0,
        "e": "Aflatoxin B1 is metabolized by liver CYP450 into reactive epoxides that alkylate DNA, causing severe hepatotoxicity and carcinoma.",
        "topicId": "u4-t25",
        "subSection": "u4-s5",
        "diff": 1
      },
      {
        "q": "Degnala disease in buffaloes and cattle in the Indian subcontinent is a mycotoxicosis associated with feeding moldy paddy straw containing:",
        "o": [
          "Fusarium toxins (producing dry gangrene of dependent extremities like tail, ears, and hooves)",
          "Aflatoxin B1",
          "Ochratoxin A",
          "Ergot alkaloids"
        ],
        "a": 0,
        "e": "Fusarium mycotoxins on wet paddy straw cause severe peripheral vasoconstriction and endothelial damage, causing gangrene of extremities.",
        "topicId": "u4-t25",
        "subSection": "u4-s5",
        "diff": 2
      },
      {
        "q": "Ergotism in livestock caused by Claviceps purpurea on cereal grasses produces dry gangrene of extremities due to:",
        "o": [
          "Persistent peripheral arteriolar vasoconstriction and endothelial damage induced by ergot alkaloids",
          "Suppurative necrotizing cellulitis",
          "Massive immune-complex mediated vasculitis",
          "Primary deficiency of Vitamin B12"
        ],
        "a": 0,
        "e": "Ergotamine/ergosine stimulate alpha-1 receptors on arterioles, inducing prolonged vasoconstriction, ischemia, and dry gangrenous sloughing.",
        "topicId": "u4-t25",
        "subSection": "u4-s5",
        "diff": 2
      },
      {
        "q": "Bovine Spongiform Encephalopathy (BSE, Mad Cow Disease) neuropathology is characterized by vacuolation localized predominantly in the:",
        "o": [
          "Solitary tract nucleus and spinal trigeminal nucleus of the brainstem medulla",
          "Cerebral white matter centrum semiovale",
          "Cerebellar molecular layer only",
          "Optic chiasm"
        ],
        "a": 0,
        "e": "The obex/medulla oblongata contains diagnostic intracytoplasmic neuronal vacuoles in the nucleus of the solitary tract and red nucleus.",
        "topicId": "u4-t11",
        "subSection": "u4-s5",
        "diff": 3
      },
      {
        "q": "Scrapie in sheep differs from BSE clinically and pathologically in that scrapie-affected sheep characteristically exhibit:",
        "o": [
          "Intense pruritus with compulsive rubbing and scraping of the fleece against fences",
          "Severe generalized muscular flaccid paralysis without itching",
          "Marked hydrocephalus with blindness",
          "Suppurative meningoencephalitis with microabscesses"
        ],
        "a": 0,
        "e": "Severe pruritus causing wool loss from rubbing against posts gave 'scrapie' its name; spongiform vacuoles develop in the obex.",
        "topicId": "u4-t11",
        "subSection": "u4-s5",
        "diff": 1
      },
      {
        "q": "Ochratoxicosis in swine and poultry caused by Aspergillus and Penicillium toxins is primarily a disease of the:",
        "o": [
          "Kidney (nephrotoxicosis with tubular degeneration, interstitial fibrosis, and pale kidneys)",
          "Rumen epithelium",
          "Bone marrow stem cells",
          "Adrenal medulla"
        ],
        "a": 0,
        "e": "Ochratoxin A is a potent nephrotoxin causing chronic proximal tubular atrophy, interstitial fibrosis, and glucosuria.",
        "topicId": "u4-t25",
        "subSection": "u4-s5",
        "diff": 2
      },
      {
        "q": "Cryptococcosis (Cryptococcus neoformans) is identified microscopically by yeast cells possessing a:",
        "o": [
          "Wide mucopolysaccharide capsule that stains positive with Mucicarmine and Alcian Blue",
          "Thick double-contoured wall without a capsule",
          "Multiple broad-based buds",
          "Hyphae with right-angle branching"
        ],
        "a": 0,
        "e": "Cryptococcus capsule is rich in glucuronoxylomannan, creating diagnostic halos on India ink and staining pink with mucicarmine.",
        "topicId": "u4-t24",
        "subSection": "u4-s5",
        "diff": 2
      },
      {
        "q": "Equine leukoencephalomalacia (moldy corn poisoning) is caused by fumonisin B1 from Fusarium verticillioides, causing:",
        "o": [
          "Massive liquefactive necrosis of the cerebral white matter (malacia)",
          "Severe fibrinous pleuropneumonia",
          "Acute hemorrhagic cystitis",
          "Spongiform encephalopathy in the brainstem"
        ],
        "a": 0,
        "e": "Fumonisin B1 inhibits ceramide synthase, disrupting sphingolipid metabolism and liquefying cerebral white matter.",
        "topicId": "u4-t25",
        "subSection": "u4-s5",
        "diff": 3
      },
      {
        "q": "Bovine Babesiosis ('Redwater' / Tick fever) caused by Babesia bigemina is characterized by intravascular hemolysis leading to:",
        "o": [
          "Hemoglobinuria, severe hemolytic jaundice, and a large, dark, congested 'blackberry jam' spleen",
          "Clay-colored feces without hemoglobinuria",
          "Massive caseous necrosis of mesenteric lymph nodes",
          "Severe non-regenerative bone marrow aplasia"
        ],
        "a": 0,
        "e": "Intraerythrocytic Babesia trophozoites lyse RBCs intravascularly, spilling free hemoglobin into plasma and urine (redwater).",
        "topicId": "u4-t26",
        "subSection": "u4-s6",
        "diff": 1
      },
      {
        "q": "Theileriosis (East Coast Fever / Bovine Theileriosis, Theileria annulata) produces pathognomonic lymphoid proliferative bodies called:",
        "o": [
          "Koch's blue bodies (schizonts in lymphocytes and lymph node impression smears)",
          "Negri bodies",
          "Guarnieri bodies",
          "Russell bodies"
        ],
        "a": 0,
        "e": "Theileria macroschizonts transform infected lymphocytes, appearing as clusters of tiny blue dots (Koch's blue bodies) on Giemsa stain.",
        "topicId": "u4-t26",
        "subSection": "u4-s6",
        "diff": 1
      },
      {
        "q": "In acute Theileria annulata infection in cattle, characteristic lesions on the abomasal mucosa consist of:",
        "o": [
          "Punched-out necrotic abomasal ulcers surrounded by a hemorrhagic halo",
          "Transverse corrugated folds that cannot be flattened",
          "Dense pseudomembranous casts",
          "Large pedunculated papillomas"
        ],
        "a": 0,
        "e": "Lymphoid infiltration followed by ischemic necrosis produces classic punched-out ulcers in the abomasal folds.",
        "topicId": "u4-t26",
        "subSection": "u4-s6",
        "diff": 2
      },
      {
        "q": "Trypanosoma evansi is the causative agent of 'Surra' in horses, camels, and cattle, and is transmitted biologically/mechanically by:",
        "o": [
          "Tabanid horse flies and Stomoxys biting flies",
          "Ixodid ticks (Rhipicephalus microplus)",
          "Culicoides midges",
          "Simulium blackflies"
        ],
        "a": 0,
        "e": "Surra is transmitted mechanically by biting tabanid and stable flies, causing progressive anemia, recurrent fever, and dependent edema.",
        "topicId": "u4-t26",
        "subSection": "u4-s6",
        "diff": 1
      },
      {
        "q": "Acute Fasciolosis in sheep occurs when thousands of immature Fasciola hepatica flukes migrate through:",
        "o": [
          "Hepatic parenchyma, causing traumatic hemorrhagic tracts and predisposing to Black disease",
          "Bile ducts, causing pipestem fibrosis",
          "Abomasal mucosa, producing cobble-stone appearance",
          "Splenic pulp, causing rupture"
        ],
        "a": 0,
        "e": "Massive parenchymal burrowing by young flukes causes traumatic hepatitis, hemoperitoneum, and germinates C. novyi spores.",
        "topicId": "u4-t27",
        "subSection": "u4-s6",
        "diff": 2
      },
      {
        "q": "Immature paramphistomes (Amphistomiasis) cause severe clinical disease in sheep and cattle when they embed and migrate within the:",
        "o": [
          "Duodenal and upper jejunal mucosa, causing severe catarrhal enteritis and hypoalbuminaemia",
          "Rumen pillars and reticulum",
          "Common bile duct",
          "Mesenteric arterial branches"
        ],
        "a": 0,
        "e": "Immature paramphistomes in duodenum cause severe catarrhal enteritis, protein-losing enteropathy, and submandibular edema (bottle jaw).",
        "topicId": "u4-t27",
        "subSection": "u4-s6",
        "diff": 2
      },
      {
        "q": "Haemonchosis (Haemonchus contortus / Barber's pole worm) in sheep causes severe pathology primarily by:",
        "o": [
          "Blood-sucking in the abomasum, causing severe anemia, hypoproteinemia, and submandibular edema ('bottle jaw')",
          "Penetrating the cranial mesenteric artery to form thrombi",
          "Forming fibrous cysts in the liver parenchyma",
          "Obstructing the common bile duct"
        ],
        "a": 0,
        "e": "Voracious abomasal blood feeding causes severe blood loss, hypoalbuminaemia, anasarca/bottle-jaw, with zero diarrhea.",
        "topicId": "u4-t28",
        "subSection": "u4-s6",
        "diff": 1
      },
      {
        "q": "Ostertagia ostertagi infection in cattle produces a characteristic gross appearance of the abomasal mucosa described as:",
        "o": [
          "'Morocco leather' or cobblestone appearance due to nodular mucosal hyperplasia",
          "Zebra-striped longitudinal ridges",
          "Transverse corrugated folds",
          "Smooth atrophic paper-thin mucosa"
        ],
        "a": 0,
        "e": "Larvae developing in gastric glands cause mucosal hyperplasia and loss of acid-producing parietal cells ('Morocco leather' abomasum).",
        "topicId": "u4-t28",
        "subSection": "u4-s6",
        "diff": 2
      },
      {
        "q": "Spirocerca lupi in dogs characteristically induces fibrous granulomas in the wall of the:",
        "o": [
          "Esophagus, which may undergo neoplastic transformation into fibrosarcoma or osteosarcoma",
          "Stomach pylorus, causing gastric dilation",
          "Pulmonary alveoli, causing emphysema",
          "Small intestine, causing intussusception"
        ],
        "a": 0,
        "e": "Spirocerca nodules in the distal esophagus incite severe chronic granulomatous inflammation, often transforming into malignant sarcomas.",
        "topicId": "u4-t28",
        "subSection": "u4-s6",
        "diff": 2
      },
      {
        "q": "Ancylostoma caninum (canine hookworm) causes disease primarily through:",
        "o": [
          "Lacerating intestinal mucosa and sucking blood, causing severe iron deficiency microcytic anemia",
          "Migrating into the cerebral cortex causing malacia",
          "Inducing gall bladder wall calcification",
          "Blocking lymphatic drainage causing chylothorax"
        ],
        "a": 0,
        "e": "Hookworms use buccal teeth to browse intestinal mucosa, shifting sites and leaving bleeding wounds that cause profound anemia.",
        "topicId": "u4-t28",
        "subSection": "u4-s6",
        "diff": 1
      },
      {
        "q": "Coenurosis ('Gid' / 'Sturdy') in sheep is caused by the larval stage (Coenurus cerebralis) of which tapeworm?",
        "o": [
          "Taenia multiceps (adult in dogs)",
          "Taenia hydatigena",
          "Echinococcus granulosus",
          "Dipylidium caninum"
        ],
        "a": 0,
        "e": "Coenurus cerebralis cysts lodge in the ovine brain, exerting pressure that produces circling, head tilting, and blindness.",
        "topicId": "u4-t29",
        "subSection": "u4-s6",
        "diff": 1
      },
      {
        "q": "Toxoplasma gondii infection in pregnant ewes typically produces which diagnostic placental lesion?",
        "o": [
          "Focal white necrosis and calcification confined to the cotyledons, with intercotyledonary areas normal",
          "Diffuse leathery thickening of the intercotyledonary chorioallantois",
          "Massive hemorrhagic detachment of the whole placenta",
          "Complete hydropic swelling of the amnion"
        ],
        "a": 0,
        "e": "Toxoplasma produces 'frosted strawberry' cotyledons (discrete white necrotic foci) while leaving intercotyledonary areas clean.",
        "topicId": "u4-t30",
        "subSection": "u4-s6",
        "diff": 2
      },
      {
        "q": "Parturient paresis (Milk Fever) in high-producing dairy cows is an acute metabolic disorder characterized by severe:",
        "o": [
          "Hypocalcaemia occurring at or near the onset of lactation",
          "Hypomagnesaemia with tetany",
          "Hypoglycemia with ketonuria",
          "Hyperphosphataemia with urolithiasis"
        ],
        "a": 0,
        "e": "Sudden calcium demand for colostrum synthesis exceeds homeostatic parathyroid mobilization, producing flaccid paresis.",
        "topicId": "u4-t33",
        "subSection": "u4-s7",
        "diff": 1
      },
      {
        "q": "Bovine ketosis (acetonaemia) in high-yielding cows occurs in early lactation when:",
        "o": [
          "Energy demand exceeds feed intake, forcing excessive adipose lipolysis and hepatic ketone body generation",
          "Calcium levels drop precipitously after calving",
          "Excess protein is fed causing rumen alkalosis",
          "Thiamine is degraded by bacterial thiaminases"
        ],
        "a": 0,
        "e": "Negative energy balance drives adipose lipolysis; incomplete oxidation of NEFA in hepatocytes generates acetoacetate and beta-hydroxybutyrate.",
        "topicId": "u4-t33",
        "subSection": "u4-s7",
        "diff": 1
      },
      {
        "q": "Pregnancy toxaemia in twin-bearing ewes in late gestation is pathologically characterized by:",
        "o": [
          "Severe hepatic lipidosis (swollen, greasy, pale yellow liver) and hypoglycemia",
          "Massive cardiac hypertrophy",
          "Pulmonary atelectasis with oat cells",
          "Epithelial hyperplasia of the abomasum"
        ],
        "a": 0,
        "e": "High fetal glucose drain in late twin gestation forces massive fat mobilization, resulting in severe hepatic steatosis and ketoacidosis.",
        "topicId": "u4-t33",
        "subSection": "u4-s7",
        "diff": 2
      },
      {
        "q": "Hypomagnesaemic tetany ('Grass tetany' / 'Grass staggers') in pastured cattle is provoked by grazing lush pastures:",
        "o": [
          "High in potassium and nitrogen, which competitively inhibit ruminal magnesium absorption",
          "High in calcium and low in phosphorus",
          "Contaminated with Clostridium novyi",
          "Deficient in sodium chloride alone"
        ],
        "a": 0,
        "e": "High dietary potassium depolarizes rumen apical membranes, blocking active magnesium transport and causing hypomagnesaemic tetany.",
        "topicId": "u4-t33",
        "subSection": "u4-s7",
        "diff": 2
      },
      {
        "q": "Post-parturient hemoglobinuria (PPH) in high-yielding dairy cows is etiologically associated with severe:",
        "o": [
          "Hypophosphataemia, which depletes erythrocyte ATP and compromises membrane deformability",
          "Hypocalcaemia causing tetany",
          "Hyperkalemia causing cardiac arrest",
          "Hypovitaminosis A"
        ],
        "a": 0,
        "e": "Low phosphorus impairs glycolysis and ATP generation in red blood cells, causing acute intravascular hemolysis and hemoglobinuria.",
        "topicId": "u4-t33",
        "subSection": "u4-s7",
        "diff": 2
      },
      {
        "q": "Swayback and Enzootic Ataxia in lambs are neurodegenerative disorders caused by maternal and fetal deficiency of:",
        "o": [
          "Copper (Cu)",
          "Zinc (Zn)",
          "Iron (Fe)",
          "Manganese (Mn)"
        ],
        "a": 0,
        "e": "Copper is a cofactor for cytochrome c oxidase and superoxide dismutase; deficiency impairs myelin synthesis, causing cerebral cavitation.",
        "topicId": "u4-t32",
        "subSection": "u4-s7",
        "diff": 2
      },
      {
        "q": "Exertional rhabdomyolysis ('Azoturia' / 'Monday morning disease') in working draft horses is characterized pathologically by:",
        "o": [
          "Massive acute myonecrosis of gluteal/lumbar muscles and severe myoglobinuria with dark red/brown urine",
          "Suppurative osteomyelitis of the third phalanx",
          "Rupture of the common digital extensor tendon",
          "Severe hydropericardium"
        ],
        "a": 0,
        "e": "Rest on full grain rations followed by sudden exercise produces excessive lactic acid accumulation, severe myonecrosis, and myoglobinuria.",
        "topicId": "u4-t33",
        "subSection": "u4-s7",
        "diff": 2
      },
      {
        "q": "Pica (depraved appetite, chewing bones and wood) in pastured cattle is classic evidence of dietary deficiency of:",
        "o": [
          "Phosphorus (osteophagia)",
          "Iron",
          "Vitamin E",
          "Magnesium"
        ],
        "a": 0,
        "e": "Phosphorus-deficient cattle chew bones (osteophagia), which frequently transmits Clostridium botulinum toxin from carrion.",
        "topicId": "u4-t32",
        "subSection": "u4-s7",
        "diff": 1
      },
      {
        "q": "Hypovitaminosis A in growing calves leads to blindness due to:",
        "o": [
          "Constriction of the optic nerve within the optic foramen due to defective bone remodeling of the sphenoid bone",
          "Cataract formation in the crystalline lens",
          "Detachment of the retina by fungal hyphae",
          "Suppurative keratitis caused by Moraxella"
        ],
        "a": 0,
        "e": "Failure of osteoclastic remodeling of the optic canal compresses and atrophies the optic nerve, causing permanent blindness.",
        "topicId": "u4-t32",
        "subSection": "u4-s7",
        "diff": 2
      },
      {
        "q": "White muscle disease in calves and lambs is characterized pathologically by:",
        "o": [
          "Bilateral symmetrical chalky white streaks of Zenker's hyaline necrosis and calcification in skeletal and cardiac muscle",
          "Suppurative cellulitis of the limb fascia",
          "Fatty infiltration of the liver without muscle lesions",
          "Multiple osteochondromas at physes"
        ],
        "a": 0,
        "e": "Vitamin E/Selenium deficiency deprives muscle of antioxidant protection, resulting in Zenker's necrosis and dystrophic calcification.",
        "topicId": "u4-t32",
        "subSection": "u4-s7",
        "diff": 1
      },
      {
        "q": "Acute arsenic poisoning in livestock is pathologically characterized by:",
        "o": [
          "Severe gastroenteritis with 'boiled rice' or shredded mucosal sloughing, and subendocardial hemorrhages",
          "Extensive dry gangrene of the tail and ears",
          "Massive pulmonary emphysema with bullae",
          "Polioencephalomalacia with autofluorescence"
        ],
        "a": 0,
        "e": "Arsenic binds sulfhydryl enzymes, producing profound splanchnic capillary damage, intense gastroenteritis, and dehydration.",
        "topicId": "u4-t34",
        "subSection": "u4-s8",
        "diff": 2
      },
      {
        "q": "Chronic copper toxicity in sheep manifests as a sudden 'hemolytic crisis' when copper stored in the liver is released, causing:",
        "o": [
          "Massive intravascular hemolysis, icterus, and pathognomonic dark 'gunmetal' kidneys",
          "Suppurative encephalomalacia",
          "Extensive osteopetrosis with dense bones",
          "Acute pancreatitis with fat saponification"
        ],
        "a": 0,
        "e": "Sudden release of hepatic copper into blood oxidizes red blood cells, causing acute intravascular hemolysis and black/gunmetal kidneys.",
        "topicId": "u4-t34",
        "subSection": "u4-s8",
        "diff": 2
      },
      {
        "q": "Chronic lead poisoning in cattle produces which characteristic neurological lesion?",
        "o": [
          "Laminar necrosis of cerebral cortical neurons (polioencephalomalacia)",
          "Hydrocephalus with cerebellar hypoplasia",
          "Suppurative microabscesses in the medulla",
          "Neuronal vacuolation in the obex"
        ],
        "a": 0,
        "e": "Lead damages capillary endothelium and astrocyte energy production, producing laminar cortical necrosis and edema in young cattle.",
        "topicId": "u4-t34",
        "subSection": "u4-s8",
        "diff": 2
      },
      {
        "q": "Nitrate/nitrite poisoning in cattle results in sudden death characterized by:",
        "o": [
          "Dark 'chocolate-brown' blood due to conversion of hemoglobin to methemoglobin",
          "Bright cherry-red blood and tissues",
          "Pale watery blood with high reticulocytosis",
          "Severe coagulative necrosis of the liver"
        ],
        "a": 0,
        "e": "Nitrite oxidizes ferrous iron (Fe2+) of hemoglobin to ferric iron (Fe3+), forming methemoglobin which cannot transport oxygen.",
        "topicId": "u4-t35",
        "subSection": "u4-s8",
        "diff": 1
      },
      {
        "q": "Hydrocyanic acid (HCN / Prussic acid) poisoning from ingestion of immature sorghum produces death with characteristic:",
        "o": [
          "Bright 'cherry-red' blood and tissues that do not darken upon exposure to air",
          "Dark chocolate-brown blood",
          "Severe jaundice with yellow sclera",
          "Massive subcutaneous edema"
        ],
        "a": 0,
        "e": "Cyanide blocks cytochrome c oxidase, preventing cellular oxygen utilization; venous blood remains fully oxygenated and bright cherry-red.",
        "topicId": "u4-t35",
        "subSection": "u4-s8",
        "diff": 1
      },
      {
        "q": "Chronic fluorosis in cattle ingesting high-fluoride rock phosphates is clinically identified by:",
        "o": [
          "Mottled, chalky, pitted, and rapidly worn incisor teeth, along with painful periosteal exostoses",
          "Extensive dry gangrene of the ear tips",
          "Severe chronic glomerulonephritis",
          "Laminar cortical brain necrosis"
        ],
        "a": 0,
        "e": "Fluoride substitutes for hydroxyl groups forming brittle fluorapatite, causing dental enamel mottling and skeletal exostoses.",
        "topicId": "u4-t35",
        "subSection": "u4-s8",
        "diff": 2
      },
      {
        "q": "Organophosphate and carbamate insecticide poisoning in domestic animals causes death by:",
        "o": [
          "Irreversibly inhibiting acetylcholinesterase, producing toxic accumulation of acetylcholine and SLUD signs",
          "Blocking voltage-gated sodium channels in the heart",
          "Uncoupling oxidative phosphorylation",
          "Directly lysing erythrocyte membranes"
        ],
        "a": 0,
        "e": "Inhibition of AChE produces excessive parasympathetic stimulation: Salivation, Lacrimation, Urination, Defecation, and respiratory failure.",
        "topicId": "u4-t36",
        "subSection": "u4-s8",
        "diff": 1
      },
      {
        "q": "Lantana camara poisoning in grazing cattle is characterized pathologically by:",
        "o": [
          "Severe hepatogenous (secondary) photosensitization and severe cholestatic jaundice with swollen yellow-orange liver",
          "Primary photosensitization without liver injury",
          "Acute hemorrhagic cystitis with hematuria",
          "Severe spastic paralysis like tetanus"
        ],
        "a": 0,
        "e": "Lantadene A and B cause biliary canalicular paralysis; phylloerythrin retention leads to secondary photosensitization and icterus.",
        "topicId": "u4-t37",
        "subSection": "u4-s8",
        "diff": 1
      },
      {
        "q": "Chronic bracken fern (Pteridium aquilinum) toxicity in cattle produces enzootic hematuria characterized by:",
        "o": [
          "Multiple hemangiomas, hemangiosarcomas, and urothelial carcinomas in the urinary bladder wall",
          "Polioencephalomalacia from thiaminase activity",
          "Severe osteomalacia of the pelvic girdle",
          "Suppurative pyelonephritis"
        ],
        "a": 0,
        "e": "In cattle, ptaquiloside induces vascular and epithelial tumors in the bladder mucosa; in horses, bracken fern causes thiamine deficiency.",
        "topicId": "u4-t37",
        "subSection": "u4-s8",
        "diff": 2
      },
      {
        "q": "Gossypol poisoning in swine and calves resulting from feeding raw cottonseed meal produces:",
        "o": [
          "Congestive heart failure with dilated cardiomyopathy, myocardial degeneration, and centrilobular liver necrosis",
          "Severe acute nephritis with oxaluria",
          "Dry gangrene of the tail",
          "Enzootic calcinosis of the aorta"
        ],
        "a": 0,
        "e": "Gossypol is a toxic polyphenolic binaphthyl that damages cardiac myocytes, resulting in acute cardiac failure and pulmonary edema.",
        "topicId": "u4-t37",
        "subSection": "u4-s8",
        "diff": 2
      }
    ],
    "tf": [
      {
        "q": "Foot-and-Mouth Disease (FMD) causes characteristic 'tiger heart' myocarditis in adult cattle.",
        "a": false,
        "e": "Tiger heart myocarditis occurs primarily in young suckling calves/lambs; adults typically survive with vesicular lesions.",
        "topicId": "u4-t01",
        "subSection": "u4-s1",
        "diff": 1
      },
      {
        "q": "Rinderpest produces pathognomonic longitudinal linear mucosal congestion in the rectum termed 'zebra striping'.",
        "a": true,
        "e": "Zebra striping of the rectum and colon reflects intense vascular engorgement along longitudinal mucosal ridges.",
        "topicId": "u4-t01",
        "subSection": "u4-s1",
        "diff": 1
      },
      {
        "q": "Malignant Catarrhal Fever is characterized histopathologically by necrotizing lymphocytic vasculitis in multiple organs.",
        "a": true,
        "e": "Uncontrolled cytotoxic T-lymphocyte proliferation damages vascular walls, causing adventitial cuffs and tissue necrosis.",
        "topicId": "u4-t01",
        "subSection": "u4-s1",
        "diff": 1
      },
      {
        "q": "Infectious Bovine Rhinotracheitis (BHV-1) produces diagnostic intracytoplasmic Negri bodies in tracheal epithelium.",
        "a": false,
        "e": "BHV-1 is a herpesvirus and produces eosinophilic intranuclear (Cowdry A) inclusion bodies, not intracytoplasmic inclusions.",
        "topicId": "u4-t02",
        "subSection": "u4-s1",
        "diff": 1
      },
      {
        "q": "Maedi-visna virus in sheep causes chronic progressive interstitial pneumonia with heavy, non-collapsing rubbery lungs.",
        "a": true,
        "e": "Lentiviral replication in alveolar macrophages drives massive lymphoid hyperplasia and smooth muscle proliferation in septa.",
        "topicId": "u4-t07",
        "subSection": "u4-s1",
        "diff": 1
      },
      {
        "q": "Rotaviruses cause neonatal diarrhea by selectively infecting and lysing mitotic crypt stem cells in the small intestine.",
        "a": false,
        "e": "Rotaviruses destroy mature absorptive enterocytes on villous tips; parvoviruses target crypt stem cells.",
        "topicId": "u4-t10",
        "subSection": "u4-s1",
        "diff": 2
      },
      {
        "q": "Canine distemper virus produces both intranuclear and intracytoplasmic eosinophilic inclusion bodies.",
        "a": true,
        "e": "Morbilliviruses uniquely form viral inclusions in both nucleus and cytoplasm of epithelial, lymphoid, and neural cells.",
        "topicId": "u4-t05",
        "subSection": "u4-s2",
        "diff": 1
      },
      {
        "q": "Canine Parvovirus-2 destroys intestinal crypt epithelial cells, resulting in severe villous collapse and necrohemorrhagic enteritis.",
        "a": true,
        "e": "Destruction of the regenerative crypt compartment leads to mucosal denudation and foul-smelling hemorrhagic diarrhea.",
        "topicId": "u4-t05",
        "subSection": "u4-s2",
        "diff": 1
      },
      {
        "q": "Classical Swine Fever typically causes marginal, dark, wedge-shaped hemorrhagic infarcts along the edges of the spleen.",
        "a": true,
        "e": "Pestivirus-mediated endothelial necrosis causes focal thrombosis, creating pathognomonic peripheral splenic infarcts.",
        "topicId": "u4-t04",
        "subSection": "u4-s2",
        "diff": 1
      },
      {
        "q": "The 'blue eye' lesion seen in Infectious Canine Hepatitis is caused by a Type I anaphylactic hypersensitivity reaction.",
        "a": false,
        "e": "Blue eye (corneal edema) is mediated by Type III immune-complex deposition in the anterior chamber uveal tract.",
        "topicId": "u4-t05",
        "subSection": "u4-s2",
        "diff": 2
      },
      {
        "q": "Rabies virus travels from the bite site to the CNS through peripheral nerve axoplasm via retrograde transport.",
        "a": true,
        "e": "Centripetal axoplasmic flow moves the virion along sensory or motor axons into the spinal cord at ~3 mm per hour.",
        "topicId": "u4-t05",
        "subSection": "u4-s2",
        "diff": 1
      },
      {
        "q": "Effusive Feline Infectious Peritonitis (FIP) produces a watery, low-protein transudate in the abdominal cavity.",
        "a": false,
        "e": "FIP effusion is an exudate rich in protein and fibrin (often > 5 g/dL) that spontaneously clots when exposed to air.",
        "topicId": "u4-t06",
        "subSection": "u4-s2",
        "diff": 1
      },
      {
        "q": "Mycobacterium bovis tubercles in cattle classically display central caseous necrosis with dystrophic calcification.",
        "a": true,
        "e": "Bovine tuberculous lesions feature central cheesy necrosis that readily undergoes dystrophic mineralization.",
        "topicId": "u4-t12",
        "subSection": "u4-s3",
        "diff": 1
      },
      {
        "q": "A dead animal suspected of having Anthrax should be fully opened to collect internal tissue specimens.",
        "a": false,
        "e": "Opening the carcass exposes vegetative bacilli to air, causing sporulation and long-term soil contamination.",
        "topicId": "u4-t14",
        "subSection": "u4-s3",
        "diff": 1
      },
      {
        "q": "Blackleg in cattle (Clostridium chauvoei) is characterized by dry, dark, porous muscle smelling of rancid butter.",
        "a": true,
        "e": "Butyric acid produced during bacterial carbohydrate fermentation gives blackleg muscle its rancid butter odor.",
        "topicId": "u4-t15",
        "subSection": "u4-s3",
        "diff": 1
      },
      {
        "q": "Black disease in sheep is initiated by Clostridium novyi germinating in liver areas damaged by migrating Fasciola flukes.",
        "a": true,
        "e": "Tissue necrosis and anaerobic tracks created by immature liver flukes trigger germination of latent novyi spores.",
        "topicId": "u4-t15",
        "subSection": "u4-s3",
        "diff": 1
      },
      {
        "q": "Tetanospasmin causes spastic muscle paralysis by blocking the release of acetylcholine at motor end plates.",
        "a": false,
        "e": "Tetanospasmin blocks inhibitory neurotransmitters (glycine and GABA) in the spinal cord; botulinum blocks acetylcholine.",
        "topicId": "u4-t15",
        "subSection": "u4-s3",
        "diff": 2
      },
      {
        "q": "Johne's disease in cattle is characterized by extensive caseous necrosis and marked mineralization of the mesenteric nodes.",
        "a": false,
        "e": "Johne's disease in cattle is non-caseating and non-calcifying, consisting purely of epithelioid macrophage sheets.",
        "topicId": "u4-t12",
        "subSection": "u4-s3",
        "diff": 2
      },
      {
        "q": "Hemorrhagic Septicaemia in cattle and buffaloes is caused by specific serotypes of Pasteurella multocida.",
        "a": true,
        "e": "Pasteurella multocida serotypes B:2 (Asia) and E:2 (Africa) cause peracute septicemia and massive submandibular edema.",
        "topicId": "u4-t17",
        "subSection": "u4-s4",
        "diff": 1
      },
      {
        "q": "In equines, 'Farcy' refers specifically to the cutaneous lymphangitic form of Glanders.",
        "a": true,
        "e": "Cutaneous glanders manifests as thickened, corded lymphatics ('farcy pipes') and ulcerated nodules ('farcy buds').",
        "topicId": "u4-t17",
        "subSection": "u4-s4",
        "diff": 1
      },
      {
        "q": "Bastard strangles in horses involves metastatic abscessation of Streptococcus equi to internal lymph nodes and organs.",
        "a": true,
        "e": "Dissemination of Strep. equi to mesenteric nodes, spleen, or brain causes chronic wasting or fatal internal rupture.",
        "topicId": "u4-t16",
        "subSection": "u4-s4",
        "diff": 1
      },
      {
        "q": "Caseous lymphadenitis in sheep produces characteristic concentric 'onion-ring' laminated caseous lymph node abscesses.",
        "a": true,
        "e": "Corynebacterium pseudotuberculosis induces cyclical necrosis and fibrous capsule formation, forming concentric rings.",
        "topicId": "u4-t19",
        "subSection": "u4-s4",
        "diff": 1
      },
      {
        "q": "Contagious Bovine Pleuropneumonia (CBPP) produces a pathognomonic 'marbled' appearance of the lung parenchyma.",
        "a": true,
        "e": "Interlobular septal edema alternating with stages of red and grey hepatization produces the classic marbled pattern.",
        "topicId": "u4-t21",
        "subSection": "u4-s4",
        "diff": 1
      },
      {
        "q": "Enterotoxigenic E. coli (ETEC) causes calf scours by producing extensive mucosal ulceration and bloody diarrhea.",
        "a": false,
        "e": "ETEC causes non-inflammatory secretory diarrhea via enterotoxins without causing mucosal necrosis or blood in stool.",
        "topicId": "u4-t20",
        "subSection": "u4-s4",
        "diff": 2
      },
      {
        "q": "Aspergillus fumigatus hyphae in tissues are septate and branch dichotomously at 45-degree angles.",
        "a": true,
        "e": "Acute-angle (45°) branching and regular septation distinguish Aspergillus from Zygomycetes (Mucor/Rhizopus).",
        "topicId": "u4-t24",
        "subSection": "u4-s5",
        "diff": 1
      },
      {
        "q": "Aflatoxin B1 primarily targets the renal collecting ducts, leaving liver parenchyma unaffected.",
        "a": false,
        "e": "Aflatoxin B1 is a hepatotoxin and hepatocarcinogen, causing fatty liver, biliary proliferation, and cirrhosis.",
        "topicId": "u4-t25",
        "subSection": "u4-s5",
        "diff": 1
      },
      {
        "q": "Degnala disease in cattle and buffaloes is characterized by dry gangrene of dependent extremities like the tail, ears, and hooves.",
        "a": true,
        "e": "Fusarium mycotoxins in moldy paddy straw cause severe peripheral vasoconstriction and ischemic gangrene.",
        "topicId": "u4-t25",
        "subSection": "u4-s5",
        "diff": 1
      },
      {
        "q": "Bovine Spongiform Encephalopathy (BSE) causes marked suppurative inflammation in the cerebral cortex.",
        "a": false,
        "e": "BSE is a prion disease characterized by spongiform vacuolation of neurons and neuropil with zero inflammation.",
        "topicId": "u4-t11",
        "subSection": "u4-s5",
        "diff": 1
      },
      {
        "q": "Rhinosporidium seeberi forms large thick-walled sporangia filled with thousands of endospores in nasal polyps.",
        "a": true,
        "e": "Mature sporangia reach 300 µm in diameter and release endospores through an apical pore.",
        "topicId": "u4-t24",
        "subSection": "u4-s5",
        "diff": 1
      },
      {
        "q": "Babesia bigemina infection in cattle causes acute intravascular hemolysis resulting in hemoglobinuria ('redwater').",
        "a": true,
        "e": "Massive erythrocyte lysis by multiplying piroplasms spills free hemoglobin into urine.",
        "topicId": "u4-t26",
        "subSection": "u4-s6",
        "diff": 1
      },
      {
        "q": "Koch's blue bodies are the schizont stage of Theileria annulata found within transformed lymphocytes.",
        "a": true,
        "e": "Macroschizonts appear as diagnostic circular clusters of dark blue granules inside lymphocytes on Giemsa smears.",
        "topicId": "u4-t26",
        "subSection": "u4-s6",
        "diff": 1
      },
      {
        "q": "Haemonchus contortus adults reside in the small intestine and cause disease by mechanical obstruction.",
        "a": false,
        "e": "Haemonchus resides in the abomasum and causes severe anemia by voracious blood-sucking.",
        "topicId": "u4-t28",
        "subSection": "u4-s6",
        "diff": 1
      },
      {
        "q": "Ostertagia ostertagi larvae in cattle abomasal glands produce a characteristic 'Morocco leather' cobblestone appearance.",
        "a": true,
        "e": "Gastric gland hyperplasia and loss of acid-secreting parietal cells create the nodular Morocco leather surface.",
        "topicId": "u4-t28",
        "subSection": "u4-s6",
        "diff": 1
      },
      {
        "q": "Spirocerca lupi granulomas in the canine esophagus have the potential to transform into malignant osteosarcomas or fibrosarcomas.",
        "a": true,
        "e": "Chronic irritation by adult Spirocerca worms in esophageal nodules can induce sarcomatous transformation.",
        "topicId": "u4-t28",
        "subSection": "u4-s6",
        "diff": 2
      },
      {
        "q": "Toxoplasma gondii abortion in ewes produces discrete white necrotic foci confined exclusively to the placental cotyledons.",
        "a": true,
        "e": "The 'frosted strawberry' cotyledon appearance with normal intercotyledonary areas is diagnostic for ovine toxoplasmosis.",
        "topicId": "u4-t30",
        "subSection": "u4-s6",
        "diff": 2
      },
      {
        "q": "Parturient paresis (Milk Fever) in dairy cows is an acute flaccid paralysis caused by hypomagnesaemia.",
        "a": false,
        "e": "Milk fever is caused by severe acute hypocalcaemia; hypomagnesaemia causes spastic tetany (grass staggers).",
        "topicId": "u4-t33",
        "subSection": "u4-s7",
        "diff": 1
      },
      {
        "q": "Pregnancy toxaemia in twin-bearing ewes is characterized pathologically by profound hepatic lipidosis (fatty liver).",
        "a": true,
        "e": "Fetal glucose demand triggers massive lipolysis, overwhelming liver oxidation and resulting in yellow greasy liver.",
        "topicId": "u4-t33",
        "subSection": "u4-s7",
        "diff": 1
      },
      {
        "q": "Post-parturient hemoglobinuria in dairy cows is etiologically linked to severe hypophosphataemia.",
        "a": true,
        "e": "Phosphorus depletion starves erythrocytes of ATP, rendering them rigid and vulnerable to intravascular hemolysis.",
        "topicId": "u4-t33",
        "subSection": "u4-s7",
        "diff": 1
      },
      {
        "q": "Swayback in lambs is caused by maternal and fetal deficiency of dietary zinc.",
        "a": false,
        "e": "Swayback (enzootic ataxia) is caused by copper deficiency, leading to cerebral demyelination and cavitation.",
        "topicId": "u4-t32",
        "subSection": "u4-s7",
        "diff": 1
      },
      {
        "q": "Azoturia (Monday morning disease) in horses is characterized by massive acute skeletal muscle necrosis and myoglobinuria.",
        "a": true,
        "e": "Sudden exercise following rest on full grain feed causes acute exertional rhabdomyolysis and dark coffee-colored urine.",
        "topicId": "u4-t33",
        "subSection": "u4-s7",
        "diff": 1
      },
      {
        "q": "Chronic copper poisoning in sheep leads to sudden massive hemolysis producing pathognomonic dark 'gunmetal' kidneys.",
        "a": true,
        "e": "Massive hemoglobinuria and tubular necrosis stain renal cortex and medulla an intense dark gunmetal color.",
        "topicId": "u4-t34",
        "subSection": "u4-s8",
        "diff": 1
      },
      {
        "q": "Nitrite poisoning causes sudden death in cattle characterized by bright cherry-red blood and tissues.",
        "a": false,
        "e": "Nitrite causes chocolate-brown blood due to methemoglobin; cyanide (HCN) causes bright cherry-red blood.",
        "topicId": "u4-t35",
        "subSection": "u4-s8",
        "diff": 1
      },
      {
        "q": "Hydrocyanic acid (HCN) poisoning inhibits cytochrome c oxidase, preventing tissues from utilizing oxygen.",
        "a": true,
        "e": "Histotoxic anoxia leaves venous blood saturated with oxygen, producing characteristic bright cherry-red blood.",
        "topicId": "u4-t35",
        "subSection": "u4-s8",
        "diff": 1
      },
      {
        "q": "Chronic fluorosis in cattle causes dental mottling, accelerated tooth wear, and painful periosteal exostoses on long bones.",
        "a": true,
        "e": "Fluoride replaces hydroxyl ions to form brittle fluorapatite, damaging ameloblasts and producing hyperostosis.",
        "topicId": "u4-t35",
        "subSection": "u4-s8",
        "diff": 1
      },
      {
        "q": "Lantana camara ingestion by cattle causes primary photosensitization without any involvement of the liver.",
        "a": false,
        "e": "Lantadene A causes severe cholestatic liver injury, blocking phylloerythrin excretion and causing secondary photosensitization.",
        "topicId": "u4-t37",
        "subSection": "u4-s8",
        "diff": 1
      }
    ],
    "fib": [
      {
        "q": "The myocardial necrosis in young calves dying of Foot-and-Mouth Disease is described grossly as ______ heart.",
        "a": [
          "tiger",
          "tigroid"
        ],
        "a_display": "tiger",
        "e": "Pale grey-yellow necrotic stripes alternating with normal myocardium resemble a tiger's skin.",
        "topicId": "u4-t01",
        "subSection": "u4-s1",
        "diff": 1
      },
      {
        "q": "In Rinderpest, longitudinal bands of congested rectal mucosa producing a striped appearance are called ______ striping.",
        "a": [
          "zebra"
        ],
        "a_display": "zebra",
        "e": "Zebra striping is caused by mucosal congestion and necrosis along longitudinal mucosal folds.",
        "topicId": "u4-t01",
        "subSection": "u4-s1",
        "diff": 1
      },
      {
        "q": "Infectious Bovine Rhinotracheitis (BHV-1) produces diagnostic eosinophilic ______ inclusion bodies in respiratory epithelial cells.",
        "a": [
          "intranuclear",
          "cowdry a",
          "cowdry type a"
        ],
        "a_display": "intranuclear",
        "e": "BHV-1 herpesvirus forms Cowdry type A intranuclear inclusions with surrounding halos.",
        "topicId": "u4-t02",
        "subSection": "u4-s1",
        "diff": 1
      },
      {
        "q": "The pulmonary adenocarcinoma of sheep caused by a retrovirus transforming Type II pneumocytes is termed ______ (Ovine Pulmonary Adenocarcinoma).",
        "a": [
          "jaagziekte"
        ],
        "a_display": "Jaagziekte",
        "e": "Jaagziekte retrovirus induces neoplastic transformation of alveolar type II cells and Clara cells.",
        "topicId": "u4-t07",
        "subSection": "u4-s1",
        "diff": 2
      },
      {
        "q": "In sheep pox lesions, the characteristic large vacuolated cells containing intracytoplasmic inclusions are called ______ cells (cellules claveleuses).",
        "a": [
          "borrel",
          "sheep pox"
        ],
        "a_display": "Borrel",
        "e": "Borrel cells are transformed histiocytes with abundant pale cytoplasm containing poxviral inclusions.",
        "topicId": "u4-t08",
        "subSection": "u4-s1",
        "diff": 2
      },
      {
        "q": "Bluetongue virus infection in sheep characteristically produces petechiae and focal necrosis at the base of the ______ artery.",
        "a": [
          "pulmonary"
        ],
        "a_display": "pulmonary",
        "e": "Hemorrhage and necrosis at the base of the pulmonary artery is a pathognomonic necropsy finding in ovine bluetongue.",
        "topicId": "u4-t02",
        "subSection": "u4-s1",
        "diff": 2
      },
      {
        "q": "Canine distemper virus produces characteristic eosinophilic inclusion bodies in both the nucleus and the ______.",
        "a": [
          "cytoplasm"
        ],
        "a_display": "cytoplasm",
        "e": "Presence of both intranuclear and intracytoplasmic inclusions is characteristic of morbillivirus infections.",
        "topicId": "u4-t05",
        "subSection": "u4-s2",
        "diff": 1
      },
      {
        "q": "Canine Parvovirus-2 destroys rapidly dividing epithelial cells located in the crypts of ______ in the small intestine.",
        "a": [
          "lieberkuhn",
          "lieberkühn"
        ],
        "a_display": "Lieberkühn",
        "e": "Crypt necrosis prevents mucosal regeneration, leading to villous collapse and hemorrhagic enteritis.",
        "topicId": "u4-t05",
        "subSection": "u4-s2",
        "diff": 1
      },
      {
        "q": "Classical Swine Fever (Hog Cholera) produces widespread petechiae on the renal cortex, described as a '______ egg kidney'.",
        "a": [
          "turkey"
        ],
        "a_display": "turkey",
        "e": "Turkey egg kidney displays fine petechial hemorrhages scattered densely across pale cortical parenchyma.",
        "topicId": "u4-t04",
        "subSection": "u4-s2",
        "diff": 1
      },
      {
        "q": "In dogs recovering from Infectious Canine Hepatitis, corneal edema producing '______ eye' is caused by immune complex deposition.",
        "a": [
          "blue"
        ],
        "a_display": "blue",
        "e": "Blue eye results from anterior uveitis and corneal endothelial edema driven by viral-antibody complexes.",
        "topicId": "u4-t05",
        "subSection": "u4-s2",
        "diff": 1
      },
      {
        "q": "Rabies virus enters peripheral nerves and travels toward the spinal cord via retrograde ______ transport.",
        "a": [
          "axonal",
          "axoplasmic"
        ],
        "a_display": "axonal (axoplasmic)",
        "e": "Retrograde axoplasmic transport carries rabies virions along motor and sensory nerves to the CNS.",
        "topicId": "u4-t05",
        "subSection": "u4-s2",
        "diff": 1
      },
      {
        "q": "In pigs with Classical Swine Fever, ischemic thrombosis of marginal splenic arterioles produces pathognomonic splenic ______.",
        "a": [
          "infarctions",
          "infarcts",
          "infarct"
        ],
        "a_display": "infarcts",
        "e": "Raised, dark, wedge-shaped marginal infarcts of the spleen are pathognomonic for hog cholera.",
        "topicId": "u4-t04",
        "subSection": "u4-s2",
        "diff": 2
      },
      {
        "q": "The central cheesy amorphous dead material characteristic of tuberculous granulomas is ______ necrosis.",
        "a": [
          "caseous"
        ],
        "a_display": "caseous",
        "e": "Caseous necrosis in tuberculosis results from macrophage death and lipid-rich mycobacterial cell walls.",
        "topicId": "u4-t12",
        "subSection": "u4-s3",
        "diff": 1
      },
      {
        "q": "Mycobacteria retain carbol fuchsin stain despite acid-alcohol washing because their cell walls contain high concentrations of ______ acids.",
        "a": [
          "mycolic"
        ],
        "a_display": "mycolic",
        "e": "High lipid/mycolic acid content confers acid-fastness in the Ziehl-Neelsen stain.",
        "topicId": "u4-t12",
        "subSection": "u4-s3",
        "diff": 1
      },
      {
        "q": "In cattle dying of anthrax, the spleen is massively enlarged, dark, and soft, colloquially described as a 'blackberry ______' spleen.",
        "a": [
          "jam"
        ],
        "a_display": "jam",
        "e": "Blackberry jam spleen in anthrax displays soft, diffluent, liquefied pulp that pours out when incised.",
        "topicId": "u4-t14",
        "subSection": "u4-s3",
        "diff": 1
      },
      {
        "q": "Blackleg in cattle caused by Clostridium chauvoei produces myonecrosis with a characteristic odor of rancid ______.",
        "a": [
          "butter"
        ],
        "a_display": "butter",
        "e": "Fermentation of muscle glycogen produces butyric acid, yielding the rancid butter odor.",
        "topicId": "u4-t15",
        "subSection": "u4-s3",
        "diff": 1
      },
      {
        "q": "Black disease in sheep is caused by the multiplication of Clostridium novyi Type B in liver areas damaged by migrating ______ hepatica.",
        "a": [
          "fasciola"
        ],
        "a_display": "Fasciola",
        "e": "Fasciola hepatica fluke migration tracks provide anaerobic conditions for C. novyi spore germination.",
        "topicId": "u4-t15",
        "subSection": "u4-s3",
        "diff": 1
      },
      {
        "q": "Clostridium tetani produces the potent neurotoxin ______ which blocks inhibitory neurotransmitter release.",
        "a": [
          "tetanospasmin"
        ],
        "a_display": "tetanospasmin",
        "e": "Tetanospasmin blocks glycine and GABA release from spinal inhibitory interneurons, causing spastic paralysis.",
        "topicId": "u4-t15",
        "subSection": "u4-s3",
        "diff": 1
      },
      {
        "q": "Hemorrhagic Septicaemia in cattle and buffaloes is caused by Pasteurella ______.",
        "a": [
          "multocida"
        ],
        "a_display": "multocida",
        "e": "Pasteurella multocida serotypes B:2 and E:2 produce peracute endotoxemia and pharyngeal edema.",
        "topicId": "u4-t17",
        "subSection": "u4-s4",
        "diff": 1
      },
      {
        "q": "The cutaneous lymphangitic form of equine glanders characterized by corded lymphatics and ulcerated nodules is called ______.",
        "a": [
          "farcy"
        ],
        "a_display": "farcy",
        "e": "Farcy is cutaneous Burkholderia mallei infection showing subcutaneous lymphangitis ('farcy pipes').",
        "topicId": "u4-t17",
        "subSection": "u4-s4",
        "diff": 1
      },
      {
        "q": "Contagious equine strangles is caused by Streptococcus equi subspecies ______.",
        "a": [
          "equi"
        ],
        "a_display": "equi",
        "e": "Streptococcus equi subsp. equi produces acute suppurative lymphadenitis of head and neck lymph nodes.",
        "topicId": "u4-t16",
        "subSection": "u4-s4",
        "diff": 1
      },
      {
        "q": "Caseous lymphadenitis in sheep and goats is caused by Corynebacterium ______.",
        "a": [
          "pseudotuberculosis"
        ],
        "a_display": "pseudotuberculosis",
        "e": "Corynebacterium pseudotuberculosis produces phospholipase D and classic onion-ring caseous lymph node abscesses.",
        "topicId": "u4-t19",
        "subSection": "u4-s4",
        "diff": 1
      },
      {
        "q": "Contagious Bovine Pleuropneumonia (CBPP) is caused by Mycoplasma mycoides subspecies ______.",
        "a": [
          "mycoides"
        ],
        "a_display": "mycoides",
        "e": "CBPP produces pathognomonic pulmonary marbling and thick serofibrinous pleural exudate.",
        "topicId": "u4-t21",
        "subSection": "u4-s4",
        "diff": 1
      },
      {
        "q": "Diamond skin lesions in swine are produced by arteriolar thrombosis caused by Erysipelothrix ______.",
        "a": [
          "rhusiopathiae"
        ],
        "a_display": "rhusiopathiae",
        "e": "Erysipelothrix rhusiopathiae produces rhomboid skin infarcts and vegetative valvular endocarditis.",
        "topicId": "u4-t18",
        "subSection": "u4-s4",
        "diff": 1
      },
      {
        "q": "Aspergillus fumigatus hyphae in tissues branch dichotomously at an angle of ______ degrees.",
        "a": [
          "45",
          "45 degree",
          "45 degrees"
        ],
        "a_display": "45 degrees",
        "e": "45-degree acute-angle branching and uniform septation are diagnostic for Aspergillus species.",
        "topicId": "u4-t24",
        "subSection": "u4-s5",
        "diff": 1
      },
      {
        "q": "Bleeding, strawberry-like polypoid growths in the nasal cavities of cattle and dogs are diagnostic for ______ (Rhinosporidium seeberi).",
        "a": [
          "rhinosporidiosis"
        ],
        "a_display": "rhinosporidiosis",
        "e": "Rhinosporidiosis forms vascular polyps studded with white dots representing mature sporangia.",
        "topicId": "u4-t24",
        "subSection": "u4-s5",
        "diff": 1
      },
      {
        "q": "Aflatoxins are toxic fungal secondary metabolites produced primarily by the mold Aspergillus ______.",
        "a": [
          "flavus",
          "parasiticus"
        ],
        "a_display": "flavus",
        "e": "Aspergillus flavus and A. parasiticus produce hepatotoxic and carcinogenic aflatoxins in stored feeds.",
        "topicId": "u4-t25",
        "subSection": "u4-s5",
        "diff": 1
      },
      {
        "q": "The mycotoxicosis of cattle and buffaloes in India caused by feeding moldy paddy straw leading to gangrene of extremities is ______ disease.",
        "a": [
          "degnala"
        ],
        "a_display": "Degnala",
        "e": "Degnala disease is a Fusarium mycotoxicosis causing ischemic gangrene of tail, ears, and hooves.",
        "topicId": "u4-t25",
        "subSection": "u4-s5",
        "diff": 1
      },
      {
        "q": "Ergotism in livestock is caused by ingestion of alkaloids produced by the fungus Claviceps ______.",
        "a": [
          "purpurea"
        ],
        "a_display": "purpurea",
        "e": "Claviceps purpurea sclerotia on rye and grasses contain ergotamine, causing peripheral vasoconstriction and dry gangrene.",
        "topicId": "u4-t25",
        "subSection": "u4-s5",
        "diff": 1
      },
      {
        "q": "Bovine babesiosis caused by Babesia bigemina is colloquially known as ______ fever because of severe hemoglobinuria.",
        "a": [
          "redwater",
          "red water",
          "tick"
        ],
        "a_display": "redwater",
        "e": "Intravascular hemolysis releases free hemoglobin into urine, producing red-to-dark-brown urine.",
        "topicId": "u4-t26",
        "subSection": "u4-s6",
        "diff": 1
      },
      {
        "q": "The diagnostic schizont stage of Theileria annulata found within transformed lymphocytes is known as Koch's ______ bodies.",
        "a": [
          "blue"
        ],
        "a_display": "blue",
        "e": "Koch's blue bodies are pathognomonic macroschizonts appearing as blue cytoplasmic inclusions on Giemsa stain.",
        "topicId": "u4-t26",
        "subSection": "u4-s6",
        "diff": 1
      },
      {
        "q": "Trypanosoma evansi is the flagellated protozoan parasite responsible for the disease ______ in horses and camels.",
        "a": [
          "surra"
        ],
        "a_display": "Surra",
        "e": "Surra is transmitted mechanically by tabanid flies, causing progressive wasting and intermittent fever.",
        "topicId": "u4-t26",
        "subSection": "u4-s6",
        "diff": 1
      },
      {
        "q": "The abomasal blood-sucking parasite of sheep commonly called the 'barber's pole worm' is Haemonchus ______.",
        "a": [
          "contortus"
        ],
        "a_display": "contortus",
        "e": "Haemonchus contortus has red intestines spiraled around white ovaries, resembling a barber's pole.",
        "topicId": "u4-t28",
        "subSection": "u4-s6",
        "diff": 1
      },
      {
        "q": "Ostertagia ostertagi larvae in cattle abomasal glands produce a nodular mucosal surface described as ______ leather.",
        "a": [
          "morocco"
        ],
        "a_display": "Morocco",
        "e": "Morocco leather appearance results from diffuse abomasal glandular hyperplasia and loss of parietal cells.",
        "topicId": "u4-t28",
        "subSection": "u4-s6",
        "diff": 1
      },
      {
        "q": "Canine esophageal granulomas that can transform into sarcomas are induced by the nematode Spirocerca ______.",
        "a": [
          "lupi"
        ],
        "a_display": "lupi",
        "e": "Spirocerca lupi adults live in esophageal nodules that can undergo neoplastic transformation to osteo/fibrosarcomas.",
        "topicId": "u4-t28",
        "subSection": "u4-s6",
        "diff": 1
      },
      {
        "q": "Parturient paresis (Milk Fever) in high-producing dairy cattle is an acute metabolic disorder caused by severe ______.",
        "a": [
          "hypocalcaemia",
          "hypocalcemia"
        ],
        "a_display": "hypocalcaemia",
        "e": "Sudden calcium loss in colostrum causes acute flaccid paresis and sternal recumbency in dairy cows.",
        "topicId": "u4-t33",
        "subSection": "u4-s7",
        "diff": 1
      },
      {
        "q": "Pregnancy toxaemia in twin-bearing ewes during late gestation produces massive yellow, greasy hepatic ______.",
        "a": [
          "lipidosis",
          "steatosis"
        ],
        "a_display": "lipidosis (fatty liver)",
        "e": "Massive adipose lipolysis to meet fetal glucose demand overwhelms hepatic oxidation, causing hepatic lipidosis.",
        "topicId": "u4-t33",
        "subSection": "u4-s7",
        "diff": 1
      },
      {
        "q": "Post-parturient hemoglobinuria in dairy cattle is etiologically linked to a severe deficiency of circulating ______.",
        "a": [
          "phosphorus",
          "phosphate"
        ],
        "a_display": "phosphorus",
        "e": "Hypophosphataemia depletes RBC ATP, predisposing erythrocytes to intravascular hemolysis.",
        "topicId": "u4-t33",
        "subSection": "u4-s7",
        "diff": 1
      },
      {
        "q": "Swayback in newborn lambs is caused by a nutritional deficiency of the trace mineral ______.",
        "a": [
          "copper",
          "cu"
        ],
        "a_display": "copper",
        "e": "Copper deficiency impairs cytochrome c oxidase, leading to defective myelination and cerebral cavitation.",
        "topicId": "u4-t32",
        "subSection": "u4-s7",
        "diff": 1
      },
      {
        "q": "Exertional rhabdomyolysis in horses ('Monday morning disease') produces dark coffee-colored urine due to the presence of ______.",
        "a": [
          "myoglobin"
        ],
        "a_display": "myoglobin",
        "e": "Severe muscle necrosis releases myoglobin into circulation, which is filtered into urine as myoglobinuria.",
        "topicId": "u4-t33",
        "subSection": "u4-s7",
        "diff": 1
      },
      {
        "q": "In chronic copper poisoning of sheep, sudden massive hemolysis stains the renal cortex a characteristic dark ______ color.",
        "a": [
          "gunmetal",
          "gun metal",
          "gun-metal"
        ],
        "a_display": "gunmetal",
        "e": "Gunmetal kidneys result from acute hemoglobinemic nephrosis and copper excretion.",
        "topicId": "u4-t34",
        "subSection": "u4-s8",
        "diff": 1
      },
      {
        "q": "Nitrite toxicity in cattle oxidizes hemoglobin into methemoglobin, turning the blood a characteristic chocolate ______ color.",
        "a": [
          "brown"
        ],
        "a_display": "brown",
        "e": "Methemoglobin cannot bind oxygen, turning blood and mucous membranes chocolate brown.",
        "topicId": "u4-t35",
        "subSection": "u4-s8",
        "diff": 1
      },
      {
        "q": "Hydrocyanic acid (HCN / prussic acid) poisoning results in bright cherry-______ blood that fails to darken.",
        "a": [
          "red"
        ],
        "a_display": "red",
        "e": "Inhibition of cytochrome oxidase prevents tissue oxygen extraction, leaving venous blood bright cherry-red.",
        "topicId": "u4-t35",
        "subSection": "u4-s8",
        "diff": 1
      },
      {
        "q": "Chronic ingestion of the toxic plant Lantana camara in cattle induces severe secondary (hepatogenous) ______.",
        "a": [
          "photosensitization"
        ],
        "a_display": "photosensitization",
        "e": "Lantadene-induced cholestasis prevents phylloerythrin biliary excretion, causing light-induced skin necrosis.",
        "topicId": "u4-t37",
        "subSection": "u4-s8",
        "diff": 1
      },
      {
        "q": "Organophosphate insecticide toxicity causes acute poisoning by inhibiting the enzyme acetylcholinesterase, causing excess accumulation of ______.",
        "a": [
          "acetylcholine",
          "ach"
        ],
        "a_display": "acetylcholine",
        "e": "ACh accumulation at muscarinic and nicotinic receptors causes profuse SLUD signs and respiratory arrest.",
        "topicId": "u4-t36",
        "subSection": "u4-s8",
        "diff": 1
      }
    ]
  },
  "unit-5": {
    "mcq": [
      {
        "q": "Which specific gross lesion at the proventricular-gizzard junction is classic for velogenic Newcastle Disease (Ranikhet)?",
        "o": [
          "Hemorrhagic ulcers on mucosal tips of proventricular papillae",
          "Diffuse fibrinous pseudomembrane with ulceration",
          "Muscular hypertrophy with hyperkeratosis",
          "Caseous core occlusion with diphtheritic casts"
        ],
        "a": 0,
        "e": "Petechial hemorrhages and necrotic ulcers at the tips of proventricular papillae and peyer's patches are pathognomonic for velogenic viscerotropic Newcastle Disease (VVND).",
        "topicId": "u5-t1",
        "subSection": "u5-s1",
        "diff": 1
      },
      {
        "q": "Newcastle disease virus belongs to which viral family and genus?",
        "o": [
          "Paramyxoviridae, Avulavirus",
          "Orthomyxoviridae, Influenzavirus",
          "Herpesviridae, Mardivirus",
          "Coronaviridae, Gammacoronavirus"
        ],
        "a": 0,
        "e": "Newcastle Disease virus (NDV) is an avian paramyxovirus-1 (APMV-1) belonging to family Paramyxoviridae, genus Orthoavulavirus.",
        "topicId": "u5-t1",
        "subSection": "u5-s1",
        "diff": 1
      },
      {
        "q": "Pathognomonic hemorrhagic and necrotic lesions on cecal tonsils are typically seen in:",
        "o": [
          "Infectious Bronchitis",
          "Velogenic Newcastle Disease",
          "Infectious Coryza",
          "Mycoplasmosis"
        ],
        "a": 1,
        "e": "Necrotic, hemorrhagic, button-like ulcers on the cecal tonsils and intestinal lymphoid patches are characteristic of velogenic ND.",
        "topicId": "u5-t1",
        "subSection": "u5-s1",
        "diff": 1
      },
      {
        "q": "Infectious Laryngotracheitis (ILT) is caused by which viral agent?",
        "o": [
          "Gallid alphaherpesvirus 1",
          "Gallid alphaherpesvirus 2",
          "Avian reovirus",
          "Avian birnavirus"
        ],
        "a": 0,
        "e": "ILT is caused by Gallid alphaherpesvirus 1 (family Herpesviridae, subfamily Alphaherpesvirinae).",
        "topicId": "u5-t1",
        "subSection": "u5-s1",
        "diff": 2
      },
      {
        "q": "Which microscopic inclusion bodies are diagnostic for Infectious Laryngotracheitis (ILT)?",
        "o": [
          "Intracytoplasmic Bollinger bodies",
          "Intranuclear eosinophilic (Cowdry type A) inclusion bodies in tracheal epithelial syncytia",
          "Intracytoplasmic Negri bodies",
          "Intranuclear basophilic inclusions in hepatocytes"
        ],
        "a": 1,
        "e": "ILT virus forms syncytial giant cells with pathognomonic eosinophilic Cowdry type A intranuclear inclusion bodies in respiratory epithelium.",
        "topicId": "u5-t1",
        "subSection": "u5-s1",
        "diff": 2
      },
      {
        "q": "Tracheal casts consisting of blood, mucus, and necrotic caseous exudate leading to suffocation is typical of:",
        "o": [
          "Infectious Laryngotracheitis (severe epizootic form)",
          "Infectious Bronchitis",
          "Infectious Coryza",
          "Nutritional roup"
        ],
        "a": 0,
        "e": "Epizootic ILT causes severe hemorrhagic to diphtheritic tracheitis with bloody casts that occlude the tracheal lumen causing gasping and death.",
        "topicId": "u5-t1",
        "subSection": "u5-s1",
        "diff": 2
      },
      {
        "q": "Infectious Bronchitis (IB) virus in poultry belongs to the family:",
        "o": [
          "Coronaviridae",
          "Paramyxoviridae",
          "Adenoviridae",
          "Birnaviridae"
        ],
        "a": 0,
        "e": "IBV is a Gammacoronavirus within the Coronaviridae family that causes acute respiratory, reproductive, and nephropathogenic disease.",
        "topicId": "u5-t1",
        "subSection": "u5-s1",
        "diff": 1
      },
      {
        "q": "Misshapen, thin-shelled, rough eggs with watery albumen ('watery whites') are classic consequences of:",
        "o": [
          "Infectious Bronchitis Virus infection in layers",
          "Infectious Bursal Disease",
          "Fowl Cholera",
          "Pullorum Disease"
        ],
        "a": 0,
        "e": "IBV damages the oviduct magnum and shell gland, leading to permanent loss of egg quality, watery albumin, and corrugated shells.",
        "topicId": "u5-t1",
        "subSection": "u5-s1",
        "diff": 2
      },
      {
        "q": "Nephropathogenic strains of Infectious Bronchitis Virus cause which gross kidney lesion?",
        "o": [
          "Swollen, pale kidneys with tubules and ureters distended with white urates ('painted kidney')",
          "Renal cell carcinoma",
          "Polycystic kidney degeneration",
          "Hydronephrosis from stones"
        ],
        "a": 0,
        "e": "Nephropathogenic IBV strains (e.g., Australian T, QX) produce interstitial nephritis with urate impaction in renal tubules and ureters.",
        "topicId": "u5-t1",
        "subSection": "u5-s1",
        "diff": 2
      },
      {
        "q": "Avian Pox in the diphtheritic form predominantly affects:",
        "o": [
          "Featherless skin of comb and wattle",
          "Mucous membranes of mouth, pharynx, larynx, and esophagus ('canker')",
          "Bursa of Fabricius",
          "Cecal mucosa"
        ],
        "a": 1,
        "e": "The wet or diphtheritic form of Avian Pox produces yellowish pseudomembranous canker lesions on upper digestive and respiratory mucosa.",
        "topicId": "u5-t1",
        "subSection": "u5-s1",
        "diff": 1
      },
      {
        "q": "Bollinger bodies in cutaneous Fowl Pox are:",
        "o": [
          "Large intracytoplasmic eosinophilic inclusion bodies containing Borrel bodies",
          "Intranuclear eosinophilic inclusion bodies",
          "Intranuclear basophilic inclusions",
          "Mitochondrial degeneration granules"
        ],
        "a": 0,
        "e": "Bollinger bodies are large intracytoplasmic eosinophilic inclusion bodies in epithelial cells packed with elementary viral particles (Borrel bodies).",
        "topicId": "u5-t1",
        "subSection": "u5-s1",
        "diff": 2
      },
      {
        "q": "Highly Pathogenic Avian Influenza (HPAI) is characterized grossly by cyanosis and edema of which tissues?",
        "o": [
          "Comb and wattles with petechial hemorrhages on shanks/feet",
          "Solely feather follicle cystic dilation",
          "Thickened gall bladder wall",
          "Stricture of muscular gizzard"
        ],
        "a": 0,
        "e": "HPAI causes severe systemic vascular endothelial damage producing cyanosis, edema, and petechiae on combs, wattles, and unfeathered shanks.",
        "topicId": "u5-t1",
        "subSection": "u5-s1",
        "diff": 2
      },
      {
        "q": "Cleavage of the hemagglutinin (HA) precursor molecule by ubiquitous intracellular proteases like furin is the molecular determinant of virulence for:",
        "o": [
          "Highly Pathogenic Avian Influenza virus",
          "Fowl Pox virus",
          "Infectious Bursal Disease virus",
          "Avian Encephalomyelitis virus"
        ],
        "a": 0,
        "e": "HPAI viruses contain a multi-basic cleavage site in HA recognized by ubiquitous furin, enabling fatal systemic pantropic replication.",
        "topicId": "u5-t1",
        "subSection": "u5-s1",
        "diff": 3
      },
      {
        "q": "Caseous exudate plugs at the tracheal bifurcation (syrinx) causing asphyxiation in young chicks is typical of:",
        "o": [
          "Infectious Bronchitis",
          "Ranikhet Disease",
          "Infectious Bursal Disease",
          "Marek's Disease"
        ],
        "a": 0,
        "e": "In chicks under 2 weeks of age, IBV produces a caseous plug at the carina/syrinx causing death from suffocation.",
        "topicId": "u5-t1",
        "subSection": "u5-s1",
        "diff": 2
      },
      {
        "q": "Which transmission vector is primarily responsible for transmitting the cutaneous form of Fowl Pox in flocks?",
        "o": [
          "Culex mosquitoes and biting diptera",
          "Red mites only",
          "Beetles exclusively",
          "Aerosol droplets only"
        ],
        "a": 0,
        "e": "Mosquitoes (Culex species) act as mechanical vectors carrying Fowl Pox virus to unfeathered head parts (comb, wattles, eyelids).",
        "topicId": "u5-t1",
        "subSection": "u5-s1",
        "diff": 1
      },
      {
        "q": "Torticolis, circling, head tremors, and backward stumbling in chickens are neurological signs of which form of ND?",
        "o": [
          "Neurotropic velogenic Newcastle Disease (Beach's form)",
          "Mesogenic ND only",
          "Lentogenic ND",
          "Asymptomatic enteric ND"
        ],
        "a": 0,
        "e": "Neurotropic velogenic ND produces non-purulent encephalomyelitis with neuronal chromatolysis and perivascular cuffing.",
        "topicId": "u5-t1",
        "subSection": "u5-s1",
        "diff": 2
      },
      {
        "q": "In Avian Influenza, histopathological hallmark in multiple visceral organs is:",
        "o": [
          "Multifocal necrosis and microthrombosis secondary to endothelial destruction",
          "Purulent abscess formation",
          "Diffuse granuloma with caseation",
          "Eosinophilic granuloma"
        ],
        "a": 0,
        "e": "Pan-endothelial tropism of HPAI leads to disseminated intravascular coagulation (DIC), microvascular thrombosis, and multifocal ischemic necrosis.",
        "topicId": "u5-t1",
        "subSection": "u5-s1",
        "diff": 3
      },
      {
        "q": "The standard diagnostic laboratory test to identify hemagglutinating avian viruses like NDV and AIV is:",
        "o": [
          "Hemagglutination (HA) and Hemagglutination Inhibition (HI) test",
          "Complement fixation test",
          "Rose Bengal plate test",
          "Direct agglutination on slides"
        ],
        "a": 0,
        "e": "Both NDV and AIV agglutinate chicken erythrocytes (HA positive), and specific antisera in HI test differentiate them definitively.",
        "topicId": "u5-t1",
        "subSection": "u5-s1",
        "diff": 1
      },
      {
        "q": "Infectious Bursal Disease (IBD / Gumboro) virus has a specific cytopathic tropism for:",
        "o": [
          "Actively dividing IgM+ B-lymphocytes in the Bursa of Fabricius",
          "Mature T-lymphocytes in the thymus",
          "Erythrocytes in bone marrow",
          "Macrophage precursors in spleen"
        ],
        "a": 0,
        "e": "IBDV targets actively replicating immature B-lymphocytes (surface IgM+) in the follicular medulla of the Bursa of Fabricius.",
        "topicId": "u5-t2",
        "subSection": "u5-s2",
        "diff": 1
      },
      {
        "q": "A gelatinous yellowish transudate surrounding a swollen, edematous, hyperemic bursa on day 3-4 followed by rapid atrophy by day 8 is pathognomonic of:",
        "o": [
          "Infectious Bursal Disease",
          "Chicken Infectious Anemia",
          "Marek's Disease",
          "Avian Tuberculosis"
        ],
        "a": 0,
        "e": "IBD produces marked bursal edema with a gelatinous peribursal serosal transudate, progressing to severe follicular depletion and atrophy.",
        "topicId": "u5-t2",
        "subSection": "u5-s2",
        "diff": 2
      },
      {
        "q": "Infectious Bursal Disease virus is classified under which viral family?",
        "o": [
          "Birnaviridae",
          "Parvoviridae",
          "Adenoviridae",
          "Retroviridae"
        ],
        "a": 0,
        "e": "IBDV is a non-enveloped, double-stranded bi-segmented RNA virus of the family Birnaviridae, genus Avibirnavirus.",
        "topicId": "u5-t2",
        "subSection": "u5-s2",
        "diff": 1
      },
      {
        "q": "Which viral disease causes aplastic bone marrow (pale/yellow/fatty) and generalized lymphoid depletion in young broiler chicks?",
        "o": [
          "Chicken Infectious Anemia (Gyrovirus)",
          "Marek's Disease",
          "Avian Pox",
          "Infectious Bronchitis"
        ],
        "a": 0,
        "e": "Chicken Infectious Anemia Virus (CIAV, Anelloviridae) destroys hemocytoblasts in bone marrow and T-lymphoblast precursors in the thymus.",
        "topicId": "u5-t2",
        "subSection": "u5-s2",
        "diff": 2
      },
      {
        "q": "Marek's Disease is caused by which herpesvirus?",
        "o": [
          "Gallid alphaherpesvirus 2",
          "Gallid alphaherpesvirus 1",
          "Meleagrid herpesvirus 1",
          "Gallid herpesvirus 3"
        ],
        "a": 0,
        "e": "Marek's Disease is caused by Gallid alphaherpesvirus 2 (MDV-1), an oncogenic alphaherpesvirus.",
        "topicId": "u5-t2",
        "subSection": "u5-s2",
        "diff": 2
      },
      {
        "q": "A characteristic clinical posture in classic neural Marek's disease is:",
        "o": [
          "One leg stretched forward and the other backward ('split-leg paralysis')",
          "Persistent stargazing and head retraction",
          "Complete flaccid paralysis of the neck ('limberneck')",
          "Spastic opisthotonos with lockjaw"
        ],
        "a": 0,
        "e": "Unilateral or bilateral asymmetric sciatic nerve infiltration leads to paralysis where one leg is extended forward and the other backward.",
        "topicId": "u5-t2",
        "subSection": "u5-s2",
        "diff": 1
      },
      {
        "q": "In Marek's disease, the gross appearance of affected peripheral nerves (sciatic, brachial) shows:",
        "o": [
          "Enlargement (2-3x normal), loss of cross-striations, and gray translucent edematous appearance",
          "Calcified hard nodules",
          "Shrinkage with fibrous cord formation",
          "Hemorrhagic liquefaction"
        ],
        "a": 0,
        "e": "Infiltration of pleomorphic neoplastic lymphocytes causes diffuse or localized nerve swelling and obliteration of normal glistening transverse striations.",
        "topicId": "u5-t2",
        "subSection": "u5-s2",
        "diff": 2
      },
      {
        "q": "Which ocular condition leading to irregular, constricted pupil and graying of the iris ('gray eye' / pearl eye) is caused by Marek's disease?",
        "o": [
          "Lymphoid infiltration of the iris (ocular lymphomatosis)",
          "Cataract due to vitamin A deficiency",
          "Chorioretinitis due to toxoplasmosis",
          "Corneal ulceration from ammonia fumes"
        ],
        "a": 0,
        "e": "Ocular form of MD involves lymphomatous infiltration of the iris, causing depigmentation (gray eye) and an irregular, pinpoint pupil.",
        "topicId": "u5-t2",
        "subSection": "u5-s2",
        "diff": 2
      },
      {
        "q": "What is the primary histological difference between lymphomas in Marek's Disease versus Avian Leukosis?",
        "o": [
          "MD tumors consist of pleomorphic lymphocytes (T-cells, lymphoblasts, plasma cells); Leukosis tumors are uniform/monomorphic B-lymphoblasts",
          "MD tumors are monomorphic B-cells; Leukosis tumors are mixed T-cells",
          "MD tumors contain giant cells; Leukosis lacks all lymphoid elements",
          "Leukosis always produces intracytoplasmic inclusion bodies"
        ],
        "a": 0,
        "e": "Marek's is a T-cell lymphoma composed of heterogeneous/pleomorphic lymphoid cells; Avian Leukosis is a B-cell clonal malignancy composed of uniform large lymphoblasts.",
        "topicId": "u5-t2",
        "subSection": "u5-s2",
        "diff": 3
      },
      {
        "q": "In Avian Leukosis (Lymphoid Leukosis), bursal tumors characteristically develop as:",
        "o": [
          "Intrafollicular nodular tumors within the bursa",
          "Diffuse non-follicular bursal atrophy without nodules",
          "Bursal perforation with peritonitis",
          "Fibrous bursal cysts"
        ],
        "a": 0,
        "e": "Lymphoid leukosis originates as nodular, intrafollicular transformed lymphoid centers in the bursa of Fabricius, which later enlarge into gross nodular tumors.",
        "topicId": "u5-t2",
        "subSection": "u5-s2",
        "diff": 2
      },
      {
        "q": "Hydropericardium Syndrome (HPS / Leechi Disease) in 3-5 week broilers is caused by:",
        "o": [
          "Fowl Aviadenovirus serotype 4 (FAdV-4)",
          "Avian Reovirus",
          "Avian Birnavirus",
          "Circovirus"
        ],
        "a": 0,
        "e": "HPS (Leechi disease) is caused by Group 1 Fowl Adenovirus serotype 4 (FAdV-4), often exacerbated by immunosuppressive agents like CIAV or IBDV.",
        "topicId": "u5-t2",
        "subSection": "u5-s2",
        "diff": 2
      },
      {
        "q": "The classic post-mortem finding in Hydropericardium Syndrome (HPS) is:",
        "o": [
          "Pericardial sac distended with 10-20 mL of clear straw-colored fluid ('leechi heart')",
          "Fibrinous pericarditis with adhesion to sternum",
          "Suppurative epicardial abscess",
          "Myocardial ossification"
        ],
        "a": 0,
        "e": "HPS exhibits massive clear or amber fluid accumulation in the pericardial sac, giving the heart a floating appearance inside a peeled litchi-like sac.",
        "topicId": "u5-t2",
        "subSection": "u5-s2",
        "diff": 1
      },
      {
        "q": "Egg Drop Syndrome 1976 (EDS-76) is caused by an adenovirus that causes which hallmark clinical presentation?",
        "o": [
          "Sudden drop in egg production with thin-shelled, soft-shelled, or shell-less eggs in healthy layers",
          "Severe bloody diarrhea with high mortality",
          "Facial subcutaneous edema with blindness",
          "Paralysis of legs and wings"
        ],
        "a": 0,
        "e": "Atadenovirus (EDS-76 virus) replicates in the pouch shell gland, causing defective calcification leading to soft, rugose, or completely shell-less eggs.",
        "topicId": "u5-t2",
        "subSection": "u5-s2",
        "diff": 2
      },
      {
        "q": "Inclusion Body Hepatitis (IBH) in poultry is characterized histologically by:",
        "o": [
          "Large, round, basophilic or eosinophilic intranuclear inclusion bodies in hepatocytes",
          "Intracytoplasmic Bollinger bodies in hepatocytes",
          "Negri bodies in Kupffer cells",
          "Extensive amyloid deposition in sinusoidal spaces"
        ],
        "a": 0,
        "e": "IBH (caused by Fowl Adenoviruses) exhibits severe hepatic necrosis with large basophilic or eosinophilic intranuclear inclusions inside hepatocyte nuclei.",
        "topicId": "u5-t2",
        "subSection": "u5-s2",
        "diff": 2
      },
      {
        "q": "Enlarged, pale feather follicles producing the condition commonly called 'skin leukosis' is an expression of:",
        "o": [
          "Cutaneous form of Marek's Disease",
          "Avian Pox dry form",
          "Erysipelas in poultry",
          "Scaly leg mite infestation"
        ],
        "a": 0,
        "e": "Aggregates of pleomorphic neoplastic T-lymphocytes around feather follicles produce raised white nodules seen at processing, termed cutaneous Marek's disease.",
        "topicId": "u5-t2",
        "subSection": "u5-s2",
        "diff": 2
      },
      {
        "q": "Marek's disease virus matures into fully infectious cell-free enveloped virions exclusively in:",
        "o": [
          "Feather follicle epithelium",
          "Bursal follicular dendritic cells",
          "Renal tubular epithelium",
          "Splenic sinusoidal lining cells"
        ],
        "a": 0,
        "e": "Fully enveloped, cell-free infectious MD virions are produced solely in the cornified feather follicle epithelium and shed into dander and poultry dust.",
        "topicId": "u5-t2",
        "subSection": "u5-s2",
        "diff": 3
      },
      {
        "q": "Blue wing disease in young broiler chicks is an alternative clinical designation for:",
        "o": [
          "Chicken Infectious Anemia (with secondary gangrenous dermatitis)",
          "Fowl Cholera",
          "Avian Encephalomyelitis",
          "Turkey Rhinotracheitis"
        ],
        "a": 0,
        "e": "Chicken Infectious Anemia combined with clostridial or staphylococcal infection produces necrotizing hemorrhages of the wings termed 'blue wing disease'.",
        "topicId": "u5-t2",
        "subSection": "u5-s2",
        "diff": 2
      },
      {
        "q": "Reticuloendotheliosis virus (REV) in turkeys and chickens causes:",
        "o": [
          "Runting-stunting syndrome, bursal/thymic atrophy, and chronic lymphoid/reticular cell tumors",
          "Acute catastrophic catarrhal enteritis only",
          "Myocardial infarction without neoplasia",
          "Selective aplasia of thyroid glands"
        ],
        "a": 0,
        "e": "REV (Retroviridae) produces runting syndrome, peripheral nerve enlargement, and multi-organ lymphoreticular neoplasms.",
        "topicId": "u5-t2",
        "subSection": "u5-s2",
        "diff": 2
      },
      {
        "q": "The classical gross pathological triad of Avian Colisepticemia (E. coli infection) includes:",
        "o": [
          "Fibrinous pericarditis, perihepatitis, and air sacculitis",
          "Ulcerative enteritis, orchitis, and keratitis",
          "Pancreatitis, splenomegaly, and nephritis",
          "Tracheitis, proventriculitis, and bursitis"
        ],
        "a": 0,
        "e": "Colisepticemia in broilers is recognized by a thick layer of whitish-yellow fibrinous exudate over the heart (pericarditis), liver capsule (perihepatitis), and clouded air sacs.",
        "topicId": "u5-t3",
        "subSection": "u5-s3",
        "diff": 1
      },
      {
        "q": "Fowl Cholera is caused by which bacterial organism?",
        "o": [
          "Pasteurella multocida",
          "Avibacterium paragallinarum",
          "Gallibacterium anatis",
          "Salmonella enterica"
        ],
        "a": 0,
        "e": "Fowl Cholera is caused by Pasteurella multocida (commonly serotypes A:1, A:3, A:4), producing acute septicemia or chronic localized lesions.",
        "topicId": "u5-t3",
        "subSection": "u5-s3",
        "diff": 1
      },
      {
        "q": "Petechial hemorrhages on epicardium, congested liver with multifocal pinpoint necrotic foci, and cheesy exudate in wattles indicate:",
        "o": [
          "Fowl Cholera (Pasteurellosis)",
          "Infectious Bronchitis",
          "Ranikhet Disease",
          "Coccidiosis"
        ],
        "a": 0,
        "e": "Acute fowl cholera produces epicardial petechiae and liver necrosis; chronic fowl cholera causes localized fibrino-caseous lesions in wattles and joints.",
        "topicId": "u5-t3",
        "subSection": "u5-s3",
        "diff": 2
      },
      {
        "q": "Pullorum Disease in young chicks is caused by which host-adapted Salmonella serotype?",
        "o": [
          "Salmonella enterica subsp. enterica serovar Gallinarum biovar Pullorum",
          "Salmonella Typhimurium",
          "Salmonella Enteritidis",
          "Salmonella Heidelberg"
        ],
        "a": 0,
        "e": "Pullorum disease ('bacillary white diarrhea') is caused by Salmonella enterica serovar Gallinarum biovar Pullorum.",
        "topicId": "u5-t3",
        "subSection": "u5-s3",
        "diff": 2
      },
      {
        "q": "A classic autopsy lesion of Pullorum Disease in young chicks surviving the acute septicemia is:",
        "o": [
          "Grayish-white necrotic nodules in myocardium, lungs, gizzard, and liver",
          "Massive pericardial fluid with no nodules",
          "Diffuse hemorrhagic tracheitis with casts",
          "Bursal follicular cysts"
        ],
        "a": 0,
        "e": "Subacute/chronic Pullorum produces distinct focal granulomatous white nodules throughout heart muscle, lungs, gizzard wall, and liver.",
        "topicId": "u5-t3",
        "subSection": "u5-s3",
        "diff": 2
      },
      {
        "q": "In adult carrier hens, Pullorum disease and Fowl Typhoid characteristically produce which ovarian lesion?",
        "o": [
          "Pedunculated, misshapen, discolored (greenish-brown), cysts or ova with oily yolk exudate",
          "Complete agenesis of left ovary",
          "Ovarian fibroma with granulosa hyperplasia",
          "Bilateral luteal cysts"
        ],
        "a": 0,
        "e": "Chronic carrier hens have shriveled, misshapen, cystic ova containing caseous or coagulated yolk material on elongated stalk-like pedicles.",
        "topicId": "u5-t3",
        "subSection": "u5-s3",
        "diff": 2
      },
      {
        "q": "A characteristic gross lesion of Fowl Typhoid (caused by Salmonella Gallinarum) in adult birds is:",
        "o": [
          "Enlarged, friable liver with a distinctive bronze/greenish sheen",
          "Stove-pipe trachea filled with blood",
          "Thickened rugose proventricular lining",
          "Hard subcutaneous neoplastic masses"
        ],
        "a": 0,
        "e": "Salmonella Gallinarum causes bacteremia resulting in massive hepatomegaly with a pathognomonic greenish-bronze iridescent discoloration on exposure to air.",
        "topicId": "u5-t3",
        "subSection": "u5-s3",
        "diff": 2
      },
      {
        "q": "Infectious Coryza is an acute respiratory infection of chickens caused by:",
        "o": [
          "Avibacterium paragallinarum",
          "Ornithobacterium rhinotracheale",
          "Bordetella avium",
          "Pasteurella multocida"
        ],
        "a": 0,
        "e": "Infectious Coryza is caused by Avibacterium (formerly Haemophilus) paragallinarum, a fastidious V-factor (NAD) dependent bacterium.",
        "topicId": "u5-t3",
        "subSection": "u5-s3",
        "diff": 1
      },
      {
        "q": "The defining clinical presentation of Infectious Coryza in a poultry flock is:",
        "o": [
          "Severe facial edema, swollen infraorbital sinuses, foul-smelling nasal discharge, and conjunctivitis",
          "Bloody diarrhea with high mortality",
          "Flaccid paralysis of wings and legs",
          "Shedding of cloacal lining"
        ],
        "a": 0,
        "e": "Coryza causes acute catarrhal inflammation of upper nasal passages and infraorbital sinuses, creating swollen puffy eyes and foul nasal exudate.",
        "topicId": "u5-t3",
        "subSection": "u5-s3",
        "diff": 1
      },
      {
        "q": "Chronic Respiratory Disease (CRD) in chickens is primarily initiated by:",
        "o": [
          "Mycoplasma gallisepticum (MG)",
          "Mycoplasma synoviae (MS)",
          "Mycoplasma meleagridis",
          "Mycoplasma iowae"
        ],
        "a": 0,
        "e": "CRD is caused by Mycoplasma gallisepticum (MG), which destroys ciliated tracheal epithelium and synergizes with E. coli and NDV/IBV.",
        "topicId": "u5-t3",
        "subSection": "u5-s3",
        "diff": 1
      },
      {
        "q": "When Mycoplasma gallisepticum infection is complicated with E. coli, the resulting syndrome is termed:",
        "o": [
          "Complicated Chronic Respiratory Disease (CCRD)",
          "Avian Spirochetosis",
          "Turkey coryza",
          "Swollen head syndrome"
        ],
        "a": 0,
        "e": "CCRD represents severe synergistic respiratory disease with extensive fibrinous polyserositis, severe air sacculitis, and high mortality.",
        "topicId": "u5-t3",
        "subSection": "u5-s3",
        "diff": 1
      },
      {
        "q": "Infectious Synovitis in growing chickens and turkeys is caused by:",
        "o": [
          "Mycoplasma synoviae (MS)",
          "Mycoplasma gallisepticum",
          "Staphylococcus aureus exclusively",
          "Salmonella Pullorum"
        ],
        "a": 0,
        "e": "Mycoplasma synoviae causes infectious synovitis characterized by tenosynovitis, breast blisters (sternal bursitis), and swollen hock joints.",
        "topicId": "u5-t3",
        "subSection": "u5-s3",
        "diff": 2
      },
      {
        "q": "Ulcerative Enteritis (Quail disease) is caused by which spore-forming anaerobic bacterium?",
        "o": [
          "Clostridium colinum",
          "Clostridium perfringens type A",
          "Clostridium septicum",
          "Clostridium botulinum"
        ],
        "a": 0,
        "e": "Clostridium colinum causes ulcerative enteritis in quails, pheasants, and young chickens, characterized by deep, round mucosal ulcers in the intestine.",
        "topicId": "u5-t3",
        "subSection": "u5-s3",
        "diff": 2
      },
      {
        "q": "Necrotic Enteritis in broiler chickens produces a pathognomonic 'Turkish towel' appearance of intestinal mucosa caused by:",
        "o": [
          "Clostridium perfringens (types A and C)",
          "Escherichia coli",
          "Eimeria tenella",
          "Campylobacter jejuni"
        ],
        "a": 0,
        "e": "Alpha and NetB toxins of Clostridium perfringens induce widespread mucosal necrosis, creating a brown-yellow diphtheritic membrane resembling a Turkish towel.",
        "topicId": "u5-t3",
        "subSection": "u5-s3",
        "diff": 2
      },
      {
        "q": "Avian Spirochetosis is an acute tick-borne septicemia caused by Borrelia anserina and transmitted by:",
        "o": [
          "Argas persicus (fowl tick)",
          "Dermanyssus gallinae",
          "Ornithonyssus sylviarum",
          "Menacanthus stramineus"
        ],
        "a": 0,
        "e": "Borrelia anserina is transmitted through the bites of soft ticks (Argas persicus), causing green diarrhea, marked splenomegaly with mottled appearance, and anemia.",
        "topicId": "u5-t3",
        "subSection": "u5-s3",
        "diff": 2
      },
      {
        "q": "Omphalitis (yolk sac infection / mushy chick disease) is characterized post-mortem by:",
        "o": [
          "Unabsorbed, putrid, foul-smelling yolk with inflamed, edematous navel",
          "Complete absence of yolk sac at hatch",
          "Ossification of umbilical ring",
          "Pericardial sac rupture"
        ],
        "a": 0,
        "e": "Bacterial contamination (E. coli, Proteus, Staph) of the open navel prevents yolk absorption, leading to liquefaction, putrid odor, and friable belly wall.",
        "topicId": "u5-t3",
        "subSection": "u5-s3",
        "diff": 1
      },
      {
        "q": "Avian Tuberculosis is caused by Mycobacterium avium and is grossly distinguished by:",
        "o": [
          "Nodular granulomas in liver, spleen, and intestines without calcification",
          "Extensive pulmonary caseation with calcification as seen in cattle",
          "Granulomas restricted entirely to the brain",
          "Purely suppurative liquefactive abscesses"
        ],
        "a": 0,
        "e": "Avian TB exhibits hard yellowish-white tubercles in abdominal viscera (liver, spleen, gut). Notably, avian granulomas rarely undergo calcification.",
        "topicId": "u5-t3",
        "subSection": "u5-s3",
        "diff": 2
      },
      {
        "q": "Infectious Stunting Syndrome (Runting Stunting Syndrome) in broilers is associated with enteritis, pale intestines, and characteristic atrophy of which abdominal organ?",
        "o": [
          "Pancreas",
          "Spleen",
          "Thyroid",
          "Crop"
        ],
        "a": 0,
        "e": "Runting Stunting Syndrome (RSS) features marked pancreatic atrophy and vacuolation, causing severe maldigestion and stunted growth.",
        "topicId": "u5-t3",
        "subSection": "u5-s3",
        "diff": 2
      },
      {
        "q": "Aspergillosis in hatchery chicks is commonly referred to as:",
        "o": [
          "Brooder pneumonia",
          "Thrush",
          "Limberneck",
          "Crop mycosis"
        ],
        "a": 0,
        "e": "Inhaled Aspergillus fumigatus spores in contaminated incubators produce acute nodular mycotic pneumonia in young chicks, termed brooder pneumonia.",
        "topicId": "u5-t4",
        "subSection": "u5-s4",
        "diff": 1
      },
      {
        "q": "Gross lesions of Aspergillosis in lungs and air sacs appear as:",
        "o": [
          "Yellowish-green/white button-like plaques or fuzzy fungal mycelial colonies lining air sacs",
          "Bloody mucosal pseudomembrane strictly in trachea",
          "Clear gelatinous cysts",
          "Hyperplastic mucosal papillomas"
        ],
        "a": 0,
        "e": "Aspergillus forms focal granulomatous yellow nodules in lung parenchyma and flat, circular disc-like plaques covered by green-gray aerial hyphae in air sacs.",
        "topicId": "u5-t4",
        "subSection": "u5-s4",
        "diff": 1
      },
      {
        "q": "Candidiasis (Moniliasis / Thrush) in poultry affects which digestive organ most prominently?",
        "o": [
          "Crop",
          "Duodenum",
          "Cecum",
          "Gizzard"
        ],
        "a": 0,
        "e": "Candida albicans proliferates on upper digestive mucosa, especially the crop, creating a whitish, curd-like, wrinkled pseudomembrane ('Turkish towel' crop lining).",
        "topicId": "u5-t4",
        "subSection": "u5-s4",
        "diff": 1
      },
      {
        "q": "Aflatoxins produced by Aspergillus flavus primarily damage which target organ in poultry?",
        "o": [
          "Liver",
          "Kidney",
          "Proventriculus",
          "Heart"
        ],
        "a": 0,
        "e": "Aflatoxin B1 is metabolized by liver cytochrome P450 into reactive epoxides, causing acute centrilobular necrosis, fatty degeneration, and bile duct hyperplasia.",
        "topicId": "u5-t4",
        "subSection": "u5-s4",
        "diff": 1
      },
      {
        "q": "The microscopic hallmark of subacute to chronic Aflatoxicosis in chicken liver is:",
        "o": [
          "Marked bile duct proliferation / hyperplasia and microvesicular hepatic lipidosis",
          "Intranuclear viral inclusions",
          "Suppurative portal abscesses",
          "Diffuse amyloid fibril replacement"
        ],
        "a": 0,
        "e": "Bile duct hyperplasia (tubular proliferation of biliary epithelial cells in portal triads) accompanied by lipidosis is the definitive histologic sign of aflatoxicosis.",
        "topicId": "u5-t4",
        "subSection": "u5-s4",
        "diff": 2
      },
      {
        "q": "Ochratoxin A primarily causes pathology in which avian organ system?",
        "o": [
          "Kidneys (producing severe nephrosis and tubular degeneration)",
          "Musculoskeletal system",
          "Infundibulum of oviduct",
          "Eyes and conjunctiva"
        ],
        "a": 0,
        "e": "Ochratoxin A is a potent nephrotoxin in poultry, causing pale, markedly swollen kidneys, destruction of proximal convoluted tubules, and visceral gout.",
        "topicId": "u5-t4",
        "subSection": "u5-s4",
        "diff": 2
      },
      {
        "q": "Fusarium mycotoxin T-2 toxin induces which characteristic lesions in chickens?",
        "o": [
          "Severe oral crusts, necrotic stomatitis, and ulcers at edges of beak, tongue, and palate",
          "Selective destruction of feather calamus",
          "Biliary carcinoma",
          "Hydropericardium exclusively"
        ],
        "a": 0,
        "e": "T-2 toxin (a trichothecene) has direct caustic radiomimetic properties, causing contact necrotic ulcers on oral mucosa, tongue, and gizzard lining.",
        "topicId": "u5-t4",
        "subSection": "u5-s4",
        "diff": 2
      },
      {
        "q": "Which Eimeria species is responsible for severe, fatal hemorrhagic cecal coccidiosis in chickens?",
        "o": [
          "Eimeria tenella",
          "Eimeria acervulina",
          "Eimeria maxima",
          "Eimeria necatrix"
        ],
        "a": 0,
        "e": "Eimeria tenella invades the deep mucosal glands of the ceca, causing massive mucosal sloughing, severe hemorrhage, and distension with clotted blood.",
        "topicId": "u5-t4",
        "subSection": "u5-s4",
        "diff": 1
      },
      {
        "q": "Transverse ladder-like white bands or streaks in the duodenal mucosa are characteristic of which coccidial species?",
        "o": [
          "Eimeria acervulina",
          "Eimeria tenella",
          "Eimeria brunetti",
          "Eimeria mitis"
        ],
        "a": 0,
        "e": "Eimeria acervulina produces superficial mucosal colonies in the duodenum that appear grossly as white or grayish transverse ladder-like streaks.",
        "topicId": "u5-t4",
        "subSection": "u5-s4",
        "diff": 2
      },
      {
        "q": "Severe mucohemorrhagic enteritis with 'ballooning' of the mid-gut (jejunum) is caused by which highly pathogenic coccidium?",
        "o": [
          "Eimeria necatrix",
          "Eimeria acervulina",
          "Eimeria praecox",
          "Eimeria tenella"
        ],
        "a": 0,
        "e": "Eimeria necatrix second-generation schizonts deep in the middle small intestine cause extreme intestinal ballooning, petechial and white spotted serosa, and blood.",
        "topicId": "u5-t4",
        "subSection": "u5-s4",
        "diff": 2
      },
      {
        "q": "Histomoniasis (Blackhead / Enterohepatitis) is caused by the protozoan:",
        "o": [
          "Histomonas meleagridis",
          "Trichomonas gallinae",
          "Hexamita meleagridis",
          "Giardia lamblia"
        ],
        "a": 0,
        "e": "Histomonas meleagridis is a flagellated protozoan causing severe enterohepatitis, especially fatal in turkeys.",
        "topicId": "u5-t4",
        "subSection": "u5-s4",
        "diff": 1
      },
      {
        "q": "Which pair of pathognomonic autopsy lesions confirms Histomoniasis in turkeys?",
        "o": [
          "Depressed circular 'target-like' / saucer-shaped liver necrotic craters and cheesy cecal cores",
          "Hemorrhagic tracheitis and cloudy air sacs",
          "Bursal necrosis and pale bone marrow",
          "Renal urate stasis and splenomegaly"
        ],
        "a": 0,
        "e": "Histomoniasis produces severe typhlitis with laminated fibrinonecrotic cecal plugs and round, sunken hepatic necrotic areas with raised yellowish borders.",
        "topicId": "u5-t4",
        "subSection": "u5-s4",
        "diff": 2
      },
      {
        "q": "The transmission of Histomonas meleagridis to susceptible poultry occurs via eggs of which nematode?",
        "o": [
          "Heterakis gallinarum",
          "Ascaridia galli",
          "Capillaria annulata",
          "Syngamus trachea"
        ],
        "a": 0,
        "e": "Histomonas survives within the resistant ova of the cecal worm Heterakis gallinarum, which acts as the primary transport host.",
        "topicId": "u5-t4",
        "subSection": "u5-s4",
        "diff": 1
      },
      {
        "q": "Trichomoniasis in pigeons (canker) and raptors (frounce) affects which anatomical location?",
        "o": [
          "Upper digestive tract: crop, pharynx, and esophagus",
          "Lower small intestine",
          "Ceca exclusively",
          "Lungs and air sacs"
        ],
        "a": 0,
        "e": "Trichomonas gallinae colonizes the oral cavity, esophagus, and crop, forming large, caseous yellowish necrotic masses (canker).",
        "topicId": "u5-t4",
        "subSection": "u5-s4",
        "diff": 2
      },
      {
        "q": "Syngamus trachea ('gapeworm') infestation in gamebirds and domestic fowl results in:",
        "o": [
          "Permanent 'Y'-shaped copulating red worms in trachea causing head shaking and gasping ('gapes')",
          "Worms in proventriculus causing vomiting",
          "Blind cecal pouch perforation",
          "Parasites in anterior chamber of eye"
        ],
        "a": 0,
        "e": "Adult Syngamus trachea worms remain joined in permanent copula (Y-shape) attached to tracheal mucosa, causing hemorrhagic tracheitis and gasping.",
        "topicId": "u5-t4",
        "subSection": "u5-s4",
        "diff": 1
      },
      {
        "q": "Heavy infestation with Ascaridia galli in young chickens leads to:",
        "o": [
          "Intestinal obstruction, impaction, and mucosal catarrhal inflammation",
          "Biliary duct lithiasis",
          "Tracheal suffocation",
          "Peritoneal calcification"
        ],
        "a": 0,
        "e": "Ascaridia galli is the large avian roundworm; massive numbers mechanically plug the small intestinal lumen, stunting growth and causing anemia.",
        "topicId": "u5-t4",
        "subSection": "u5-s4",
        "diff": 1
      },
      {
        "q": "Dermanyssus gallinae (red mite) affects poultry flocks by:",
        "o": [
          "Nocturnal blood-feeding on birds causing severe anemia, restlessness, and drop in production",
          "Living permanently inside feather shafts",
          "Burrowing into deep subcutaneous muscle",
          "Invading air sac cavities"
        ],
        "a": 0,
        "e": "Dermanyssus gallinae hides in crevices of the poultry house during daylight and feeds on avian blood at night, leading to anemia and weakness.",
        "topicId": "u5-t4",
        "subSection": "u5-s4",
        "diff": 1
      },
      {
        "q": "Knemidocoptes mutans causes which condition in backyard chickens?",
        "o": [
          "Scaly leg disease (crusty hyperkeratotic lesions on non-feathered legs)",
          "Depluming itch",
          "Air sac mite disease",
          "Cerebral coenurosis"
        ],
        "a": 0,
        "e": "Knemidocoptes mutans burrows under epidermal scales of the shanks and feet, producing severe proliferative hyperkeratosis, crusting, and lameness.",
        "topicId": "u5-t4",
        "subSection": "u5-s4",
        "diff": 1
      },
      {
        "q": "Visceral gout in poultry is caused by deposition of which crystalline compound on serosal surfaces?",
        "o": [
          "Monosodium urate crystals",
          "Calcium oxalate crystals",
          "Cholesterol monohydrate crystals",
          "Calcium carbonate crystals"
        ],
        "a": 0,
        "e": "Birds are uricotelic; renal failure or dehydration prevents uric acid excretion, causing hyperuricemia and white chalky monosodium urate precipitation on serosa.",
        "topicId": "u5-t5",
        "subSection": "u5-s5",
        "diff": 1
      },
      {
        "q": "Gross autopsy showing pericardium, liver capsule, and air sacs coated with white chalk-like powder is diagnostic for:",
        "o": [
          "Visceral Gout",
          "Articular Gout",
          "Avian Tuberculosis",
          "Colibacillosis"
        ],
        "a": 0,
        "e": "White frosty coating of uric acid crystals across visceral serosa ('chalk dust' appearance) is pathognomonic for visceral gout.",
        "topicId": "u5-t5",
        "subSection": "u5-s5",
        "diff": 1
      },
      {
        "q": "Articular gout in poultry typically involves painful periarticular periosteal swelling of:",
        "o": [
          "Metatarsophalangeal and interphalangeal joints of feet",
          "Humeroradial joint only",
          "Costochondral junctions",
          "Cervical vertebrae"
        ],
        "a": 0,
        "e": "Articular gout produces tophi (white crystalline masses of urates surrounded by granulomatous reaction) in synovial joints and tendon sheaths of toes and hocks.",
        "topicId": "u5-t5",
        "subSection": "u5-s5",
        "diff": 2
      },
      {
        "q": "Ascites Syndrome (Water Belly / Pulmonary Hypertension Syndrome) in fast-growing broilers is primarily initiated by:",
        "o": [
          "Increased pulmonary arterial pressure driven by high oxygen demand and rapid growth, leading to right ventricular dilation and failure",
          "Primary hepatic cirrhosis from plant toxins",
          "Hypoproteinemia due to protein-losing nephropathy",
          "Rupture of thoracic duct"
        ],
        "a": 0,
        "e": "Modern broilers have high metabolic rates; insufficient lung vascular capacity leads to pulmonary hypertension, right ventricular hypertrophy, transudation, and ascites.",
        "topicId": "u5-t5",
        "subSection": "u5-s5",
        "diff": 2
      },
      {
        "q": "At necropsy, a broiler with Ascites Syndrome typically shows:",
        "o": [
          "Distended abdomen containing amber transudate, right ventricular hypertrophy, and congested 'nutmeg' liver with capsular gelatinous coat",
          "Aplastic bone marrow and empty crop",
          "Proventricular papillomas with stones",
          "Severe cerebral softening with petechiae"
        ],
        "a": 0,
        "e": "Right ventricular failure elevates venous hydrostatic pressure, causing passive liver congestion, transudate leakage across Glisson's capsule, and abdominal hydroperitoneum.",
        "topicId": "u5-t5",
        "subSection": "u5-s5",
        "diff": 2
      },
      {
        "q": "Perosis (Slipped Tendon) in growing poultry is primarily caused by deficiency of which trace mineral?",
        "o": [
          "Manganese (Mn)",
          "Zinc (Zn)",
          "Copper (Cu)",
          "Selenium (Se)"
        ],
        "a": 0,
        "e": "Manganese deficiency (and/or choline/biotin deficiency) disrupts epiphyseal cartilage matrix synthesis, causing flattening of tibial condyles and gastrocnemius tendon displacement.",
        "topicId": "u5-t5",
        "subSection": "u5-s5",
        "diff": 1
      },
      {
        "q": "The anatomical defect in Perosis involves the slipping of which tendon from its condylar groove?",
        "o": [
          "Gastrocnemius tendon",
          "Flexor perforans tendon",
          "Extensor digitorum communis tendon",
          "Peroneus longus tendon"
        ],
        "a": 0,
        "e": "Flattened intercondylar groove of the distal tibiotarsus permits the thick gastrocnemius (Achilles) tendon to slip laterally, causing crippling lameness.",
        "topicId": "u5-t5",
        "subSection": "u5-s5",
        "diff": 2
      },
      {
        "q": "Nutritional encephalomalacia ('Crazy Chick Disease') in growing birds is caused by deficiency of:",
        "o": [
          "Vitamin E (alpha-tocopherol)",
          "Vitamin A",
          "Vitamin D3",
          "Vitamin K"
        ],
        "a": 0,
        "e": "Deficiency of Vitamin E (especially when diets contain oxidized polyunsaturated fats) results in cerebellar lipid peroxidation, ischemic necrosis, ataxia, and retropulsion.",
        "topicId": "u5-t5",
        "subSection": "u5-s5",
        "diff": 1
      },
      {
        "q": "Which specific area of the brain undergoes hemorrhage, edema, and softening in Vitamin E deficiency in chicks?",
        "o": [
          "Cerebellar folia",
          "Optic chiasma",
          "Olfactory bulbs",
          "Corpus striatum"
        ],
        "a": 0,
        "e": "Cerebellar cortex folia swell with petechiae and greenish-brown discoloration due to ischemic necrosis of Purkinje cells and capillary thrombosis.",
        "topicId": "u5-t5",
        "subSection": "u5-s5",
        "diff": 2
      },
      {
        "q": "Exudative Diathesis in chicks characterized by bluish-green subcutaneous gelatinous edema on breast and abdomen is caused by combined deficiency of:",
        "o": [
          "Vitamin E and Selenium",
          "Vitamin A and Zinc",
          "Calcium and Phosphorus",
          "Biotin and Pantothenic acid"
        ],
        "a": 0,
        "e": "Deficiency of Vitamin E and Selenium impairs glutathione peroxidase activity, leading to capillary endothelial damage and generalized plasma transudation under the skin.",
        "topicId": "u5-t5",
        "subSection": "u5-s5",
        "diff": 2
      },
      {
        "q": "Nutritional Muscular Dystrophy ('white muscle disease' / Zenker's degeneration in chicks) primarily involves which muscle group?",
        "o": [
          "Pectoral (breast) and thigh muscles",
          "Digital extensor muscles only",
          "Diaphragm muscle",
          "Esophageal muscularis"
        ],
        "a": 0,
        "e": "Vit E and sulfur amino acid deficiency causes prominent white longitudinal striations of coagulative necrosis in breast (pectoralis major) muscles.",
        "topicId": "u5-t5",
        "subSection": "u5-s5",
        "diff": 2
      },
      {
        "q": "Squamous metaplasia of esophageal mucous glands producing pustule-like nodules ('nutritional roup') is caused by deficiency of:",
        "o": [
          "Vitamin A",
          "Vitamin D3",
          "Vitamin B12",
          "Ascorbic acid"
        ],
        "a": 0,
        "e": "Hypovitaminosis A causes squamous metaplasia and keratinization of mucosal glands in the esophagus and upper respiratory tract, creating small round raised nodules.",
        "topicId": "u5-t5",
        "subSection": "u5-s5",
        "diff": 1
      },
      {
        "q": "Curled Toe Paralysis in growing chicks is pathognomonic for deficiency of which vitamin?",
        "o": [
          "Vitamin B2 (Riboflavin)",
          "Vitamin B1 (Thiamine)",
          "Vitamin B6 (Pyridoxine)",
          "Niacin"
        ],
        "a": 0,
        "e": "Riboflavin deficiency produces sciatic nerve myelin sheath degeneration and Schwann cell swelling, forcing chicks to walk on their hocks with toes curled inward.",
        "topicId": "u5-t5",
        "subSection": "u5-s5",
        "diff": 1
      },
      {
        "q": "'Star-gazing' posture with extreme head retraction (opisthotonos) in chicks is due to deficiency of:",
        "o": [
          "Vitamin B1 (Thiamine)",
          "Riboflavin",
          "Vitamin C",
          "Folic acid"
        ],
        "a": 0,
        "e": "Thiamine deficiency halts carbohydrate metabolism in central neurons, causing polyneuritis characterized by retraction of the head over the back (star-gazing).",
        "topicId": "u5-t5",
        "subSection": "u5-s5",
        "diff": 1
      },
      {
        "q": "Cage Layer Fatigue (Osteoporosis in high-producing caged hens) is caused by depletion of calcium from which bone source?",
        "o": [
          "Medullary bone and cortical bone matrix",
          "Purely cartilage plates",
          "Mandibular condyles",
          "Skull calvarium only"
        ],
        "a": 0,
        "e": "Intense calcium draw for eggshell formation depletes structural medullary bone and cortical bone, causing soft, pliable bones, rib beading, and sternal indentation.",
        "topicId": "u5-t5",
        "subSection": "u5-s5",
        "diff": 2
      },
      {
        "q": "Rickets in young poultry is characterized pathologically by:",
        "o": [
          "Enlarged parathyroid glands, soft rubbery beak and bones, and widening of the epiphyseal growth plate",
          "Brittle hard bones with excess calcification",
          "Aplastic bone marrow without skeletal changes",
          "Generalized articular amyloidosis"
        ],
        "a": 0,
        "e": "Deficiency of Vitamin D3, Ca, or P causes failure of osteoid calcification, resulting in flexible rubbery long bones, beaded ribs ('rachitic rosary'), and enlarged parathyroids.",
        "topicId": "u5-t5",
        "subSection": "u5-s5",
        "diff": 2
      },
      {
        "q": "Fatty Liver Hemorrhagic Syndrome (FLHS) in caged layers is triggered by:",
        "o": [
          "High-energy low-protein diet, cage confinement, and estrogen excess leading to massive hepatic lipidosis and fatal hematoma rupture",
          "Excessive outdoor exercise and fasting",
          "Acute bacterial septicemia",
          "Infectious Bursal Disease"
        ],
        "a": 0,
        "e": "FLHS affects overfed caged laying hens; fragile, pale-yellow fat-laden livers develop subcapsular hemorrhages and fatal massive exsanguination into the coelom.",
        "topicId": "u5-t5",
        "subSection": "u5-s5",
        "diff": 2
      },
      {
        "q": "Severe vent pecking and cannibalism in commercial poultry houses is exacerbated by:",
        "o": [
          "Overcrowding, high light intensity, salt deficiency, and prolapse of oviduct",
          "Low dietary protein and dark housing",
          "Excess calcium supplementation",
          "Routine debeaking"
        ],
        "a": 0,
        "e": "Cannibalism is a serious vice driven by environmental stressors (excessive illumination, tight density) and visual stimulation from red, exposed prolapsed oviduct mucosa.",
        "topicId": "u5-t5",
        "subSection": "u5-s5",
        "diff": 1
      }
    ],
    "tf": [
      {
        "q": "Velogenic Newcastle Disease virus strains can produce 100% mortality in fully susceptible poultry flocks.",
        "a": true,
        "e": "Velogenic strains (viscerotropic and neurotropic) are highly virulent and cause up to 100% mortality with severe hemorrhages or nervous signs.",
        "topicId": "u5-t1",
        "subSection": "u5-s1",
        "diff": 1
      },
      {
        "q": "Ranikhet Disease virus belongs to the family Coronaviridae.",
        "a": false,
        "e": "NDV belongs to the family Paramyxoviridae (genus Orthoavulavirus); Coronaviridae causes Infectious Bronchitis.",
        "topicId": "u5-t1",
        "subSection": "u5-s1",
        "diff": 1
      },
      {
        "q": "Infectious Laryngotracheitis is characterized histopathologically by intranuclear inclusion bodies in tracheal epithelial cells.",
        "a": true,
        "e": "Gallid herpesvirus 1 creates pathognomonic Cowdry type A eosinophilic intranuclear inclusion bodies in syncytial cells.",
        "topicId": "u5-t1",
        "subSection": "u5-s1",
        "diff": 2
      },
      {
        "q": "Infectious Bronchitis Virus causes permanent structural damage to the oviduct, resulting in misshapen, thin-shelled eggs.",
        "a": true,
        "e": "IBV infection in young pullets or active layers damages magnum and shell gland epithelial cells, leading to lifelong defects in egg quality.",
        "topicId": "u5-t1",
        "subSection": "u5-s1",
        "diff": 2
      },
      {
        "q": "Fowl Pox virus produces only a cutaneous dry form and never affects the oral or pharyngeal mucous membranes.",
        "a": false,
        "e": "Fowl Pox exhibits two distinct clinical forms: the dry (cutaneous) form and the wet (diphtheritic) form affecting oral/pharyngeal mucosa.",
        "topicId": "u5-t1",
        "subSection": "u5-s1",
        "diff": 1
      },
      {
        "q": "Bollinger bodies in fowl pox contain elementary viral particles called Borrel bodies.",
        "a": true,
        "e": "Bollinger bodies are large intracytoplasmic inclusions packed with elementary virions named Borrel bodies.",
        "topicId": "u5-t1",
        "subSection": "u5-s1",
        "diff": 2
      },
      {
        "q": "Highly Pathogenic Avian Influenza (HPAI) strains belong strictly to subtypes H1 and H2.",
        "a": false,
        "e": "Almost all HPAI epizootics are caused by viruses of the H5 and H7 subtypes.",
        "topicId": "u5-t1",
        "subSection": "u5-s1",
        "diff": 2
      },
      {
        "q": "Avian Influenza virus induces disseminated endothelial cell necrosis leading to widespread microvascular thrombosis.",
        "a": true,
        "e": "Pan-endothelial replication triggers microthrombosis, edema, cyanosis, and extensive petechial hemorrhage across organs.",
        "topicId": "u5-t1",
        "subSection": "u5-s1",
        "diff": 2
      },
      {
        "q": "A key lesion differentiating velogenic ND from other respiratory diseases is hemorrhagic ulcers on mucosal tips of proventricular papillae.",
        "a": true,
        "e": "Proventricular papillar petechiae and cecal tonsil necrosis are cardinal hallmarks of velogenic Newcastle Disease.",
        "topicId": "u5-t1",
        "subSection": "u5-s1",
        "diff": 1
      },
      {
        "q": "Infectious Bursal Disease virus preferentially infects and destroys actively dividing B-lymphocytes in the Bursa of Fabricius.",
        "a": true,
        "e": "IBDV has high affinity for immature IgM+ B-cells in the bursa, causing rapid bursal necrosis and profound humoral immunosuppression.",
        "topicId": "u5-t2",
        "subSection": "u5-s2",
        "diff": 1
      },
      {
        "q": "In IBD, the bursa of Fabricius becomes permanently enlarged and hyperplastic throughout the bird's lifetime.",
        "a": false,
        "e": "The bursa is swollen for the first 3-4 days post-infection, but rapidly atrophies by day 8 to one-third of its normal size.",
        "topicId": "u5-t2",
        "subSection": "u5-s2",
        "diff": 2
      },
      {
        "q": "Chicken Infectious Anemia Virus induces aplastic anemia by destroying hemocytoblasts in bone marrow.",
        "a": true,
        "e": "CIAV causes severe destruction of erythroid and myeloid progenitor cells, resulting in pale, fatty, yellow bone marrow and severe anemia.",
        "topicId": "u5-t2",
        "subSection": "u5-s2",
        "diff": 2
      },
      {
        "q": "Marek's Disease is a B-cell lymphoma caused by an oncogenic retrovirus.",
        "a": false,
        "e": "Marek's Disease is a T-cell lymphoma caused by Gallid alphaherpesvirus 2 (MDV-1); Avian Leukosis is the retroviral B-cell malignancy.",
        "topicId": "u5-t2",
        "subSection": "u5-s2",
        "diff": 2
      },
      {
        "q": "Loss of transverse striations and asymmetric enlargement of sciatic and brachial nerves is pathognomonic for Marek's Disease.",
        "a": true,
        "e": "Neoplastic T-cell infiltration into peripheral nerves causes nerve swelling, edema, and loss of normal cross-striations.",
        "topicId": "u5-t2",
        "subSection": "u5-s2",
        "diff": 1
      },
      {
        "q": "In Avian Leukosis, bursal tumors originate as focal intrafollicular transformations of transformed B-cells.",
        "a": true,
        "e": "Avian Leukosis produces discrete nodular intrafollicular bursal tumors composed of uniform, monomorphic lymphoblasts.",
        "topicId": "u5-t2",
        "subSection": "u5-s2",
        "diff": 2
      },
      {
        "q": "Hydropericardium Syndrome (Leechi disease) is caused by Fowl Adenovirus serotype 4 (FAdV-4).",
        "a": true,
        "e": "FAdV-4 is the established causative agent of hydropericardium syndrome, characterized by massive pericardial transudate in 3-5 week broilers.",
        "topicId": "u5-t2",
        "subSection": "u5-s2",
        "diff": 1
      },
      {
        "q": "Inclusion Body Hepatitis is characterized microscopically by large intracytoplasmic Negri bodies in hepatocytes.",
        "a": false,
        "e": "IBH is an adenoviral disease characterized by large basophilic or eosinophilic intranuclear inclusion bodies in hepatocytes, not Negri bodies.",
        "topicId": "u5-t2",
        "subSection": "u5-s2",
        "diff": 2
      },
      {
        "q": "Egg Drop Syndrome 1976 (EDS-76) causes severe mortality and fibrinous pericarditis in commercial laying hens.",
        "a": false,
        "e": "EDS-76 causes negligible mortality; its hallmark is sudden production of soft-shelled, shell-less, or deformed eggs in otherwise healthy-looking hens.",
        "topicId": "u5-t2",
        "subSection": "u5-s2",
        "diff": 2
      },
      {
        "q": "The gross lesion triad of avian colisepticemia comprises fibrinous pericarditis, perihepatitis, and air sacculitis.",
        "a": true,
        "e": "Systemic E. coli invasion induces widespread polyserositis with thick yellow fibrinous exudate over the heart, liver, and inside air sacs.",
        "topicId": "u5-t3",
        "subSection": "u5-s3",
        "diff": 1
      },
      {
        "q": "Fowl Cholera is caused by Avibacterium paragallinarum.",
        "a": false,
        "e": "Fowl Cholera is caused by Pasteurella multocida; Avibacterium paragallinarum causes Infectious Coryza.",
        "topicId": "u5-t3",
        "subSection": "u5-s3",
        "diff": 1
      },
      {
        "q": "In acute Fowl Cholera, the liver characteristically displays multifocal pinpoint necrotic foci and petechiae.",
        "a": true,
        "e": "Pasteurella multocida bacteremia leads to acute hepatic microabscesses/necrosis presenting as multiple tiny white-yellow foci.",
        "topicId": "u5-t3",
        "subSection": "u5-s3",
        "diff": 2
      },
      {
        "q": "Pullorum disease causes grayish-white necrotic nodules in the lungs, myocardium, and gizzard wall of chicks.",
        "a": true,
        "e": "Subacute and chronic Salmonella Pullorum infection produces prominent focal granulomatous nodules in visceral organs.",
        "topicId": "u5-t3",
        "subSection": "u5-s3",
        "diff": 2
      },
      {
        "q": "Salmonella Gallinarum produces a characteristic bronze or greenish iridescent sheen on the liver of affected birds.",
        "a": true,
        "e": "The enlarged, friable liver in Fowl Typhoid rapidly oxidizes to a bronze-green sheen when exposed to air during necropsy.",
        "topicId": "u5-t3",
        "subSection": "u5-s3",
        "diff": 2
      },
      {
        "q": "Infectious Coryza is characterized by acute facial edema, infraorbital sinus swelling, and foul-smelling nasal discharge.",
        "a": true,
        "e": "Avibacterium paragallinarum triggers severe catarrhal sinusitis producing puffy facial swelling and characteristic pungent nasal exudate.",
        "topicId": "u5-t3",
        "subSection": "u5-s3",
        "diff": 1
      },
      {
        "q": "Mycoplasma gallisepticum possesses a thick peptidoglycan cell wall making it susceptible to penicillin.",
        "a": false,
        "e": "Mycoplasmas completely lack a cell wall, making them inherently resistant to beta-lactam antibiotics like penicillin.",
        "topicId": "u5-t3",
        "subSection": "u5-s3",
        "diff": 2
      },
      {
        "q": "Necrotic Enteritis in broilers caused by Clostridium perfringens creates a 'Turkish towel' appearance on the jejunal mucosa.",
        "a": true,
        "e": "Severe mucosal coagulative necrosis with attached diphtheritic pseudomembrane produces the classic yellow-brown Turkish towel texture.",
        "topicId": "u5-t3",
        "subSection": "u5-s3",
        "diff": 1
      },
      {
        "q": "Avian tuberculosis granulomas in liver and spleen undergo extensive dystrophic calcification identical to bovine tuberculosis.",
        "a": false,
        "e": "Unlike mammalian TB lesions, tubercles in avian tuberculosis (Mycobacterium avium) rarely calcify.",
        "topicId": "u5-t3",
        "subSection": "u5-s3",
        "diff": 2
      },
      {
        "q": "Brooder pneumonia in newly hatched chicks is caused by Aspergillus fumigatus.",
        "a": true,
        "e": "Inhaled Aspergillus fumigatus conidia from contaminated hatchery equipment or bedding cause acute nodular pulmonary aspergillosis.",
        "topicId": "u5-t4",
        "subSection": "u5-s4",
        "diff": 1
      },
      {
        "q": "Candida albicans infection in chickens predominantly causes pseudomembranous lesions in the crop.",
        "a": true,
        "e": "Crop moniliasis/thrush produces a thickened, velvety, curd-like white pseudomembrane lining the crop lumen.",
        "topicId": "u5-t4",
        "subSection": "u5-s4",
        "diff": 1
      },
      {
        "q": "Bile duct hyperplasia and fatty degeneration in the liver are characteristic microscopic lesions of Aflatoxicosis.",
        "a": true,
        "e": "Aflatoxin B1 metabolites induce marked biliary ductular proliferation and hepatic steatosis.",
        "topicId": "u5-t4",
        "subSection": "u5-s4",
        "diff": 2
      },
      {
        "q": "Ochratoxin A primarily causes pathology in the avian proventriculus and crop.",
        "a": false,
        "e": "Ochratoxin A is primarily nephrotoxic in poultry, inducing tubular degeneration, renal swelling, and visceral gout.",
        "topicId": "u5-t4",
        "subSection": "u5-s4",
        "diff": 2
      },
      {
        "q": "Eimeria tenella is the causative agent of severe hemorrhagic cecal coccidiosis in chickens.",
        "a": true,
        "e": "E. tenella develops in the cecal mucosa and submucosa, producing massive hemorrhage and clotted cecal casts.",
        "topicId": "u5-t4",
        "subSection": "u5-s4",
        "diff": 1
      },
      {
        "q": "Eimeria acervulina produces transverse white ladder-like bands in the cecal pouches.",
        "a": false,
        "e": "Eimeria acervulina affects the duodenum and upper jejunum, producing ladder-like streaks, whereas cecal coccidiosis is caused by E. tenella.",
        "topicId": "u5-t4",
        "subSection": "u5-s4",
        "diff": 2
      },
      {
        "q": "Histomoniasis produces circular, depressed, saucer-shaped necrotic lesions in the liver of turkeys.",
        "a": true,
        "e": "Liver lesions in blackhead (Histomonas meleagridis) are pathognomonic depressed craters with yellowish raised margins.",
        "topicId": "u5-t4",
        "subSection": "u5-s4",
        "diff": 1
      },
      {
        "q": "Histomonas meleagridis is transmitted inside the eggs of the cecal nematode Heterakis gallinarum.",
        "a": true,
        "e": "The fragile protozoan is protected and transmitted environmentally within the thick shell of Heterakis gallinarum ova.",
        "topicId": "u5-t4",
        "subSection": "u5-s4",
        "diff": 1
      },
      {
        "q": "Syngamus trachea adult worms are found in the ceca of infected birds.",
        "a": false,
        "e": "Syngamus trachea resides firmly attached to the mucosa of the trachea, causing gasping ('gapes').",
        "topicId": "u5-t4",
        "subSection": "u5-s4",
        "diff": 1
      },
      {
        "q": "Visceral gout in poultry is caused by deposition of monosodium urate crystals on visceral serosa.",
        "a": true,
        "e": "Elevated plasma uric acid leads to precipitation of chalky white urate crystals on pericardium, liver, and peritoneum.",
        "topicId": "u5-t5",
        "subSection": "u5-s5",
        "diff": 1
      },
      {
        "q": "Articular gout involves chalky urate tophi within and around the joints of the wings and feet.",
        "a": true,
        "e": "Chronic articular gout produces periarticular tophi and granulomatous inflammation around digital and hock joints.",
        "topicId": "u5-t5",
        "subSection": "u5-s5",
        "diff": 1
      },
      {
        "q": "Ascites syndrome in fast-growing broilers is initiated by right ventricular hypertrophy secondary to pulmonary arterial hypertension.",
        "a": true,
        "e": "High metabolic oxygen demand forces increased cardiac output through a non-expandable pulmonary vascular bed, leading to right heart failure.",
        "topicId": "u5-t5",
        "subSection": "u5-s5",
        "diff": 2
      },
      {
        "q": "Perosis (slipped tendon) in chickens is caused by manganese deficiency causing medial displacement of the sciatic nerve.",
        "a": false,
        "e": "Perosis involves lateral slippage of the gastrocnemius (Achilles) tendon from the flattened distal tibial condyle, not nerve displacement.",
        "topicId": "u5-t5",
        "subSection": "u5-s5",
        "diff": 2
      },
      {
        "q": "Nutritional encephalomalacia ('Crazy Chick Disease') is caused by deficiency of Vitamin E.",
        "a": true,
        "e": "Vit E deficiency allows membrane lipid peroxidation in cerebellar capillaries, causing cerebellar malacia and neurological deficits.",
        "topicId": "u5-t5",
        "subSection": "u5-s5",
        "diff": 1
      },
      {
        "q": "Riboflavin (Vitamin B2) deficiency in chicks results in Curled Toe Paralysis due to sciatic nerve degeneration.",
        "a": true,
        "e": "Degeneration of myelin in the sciatic nerve trunk forces chicks to walk on their hocks with inwards-curled toes.",
        "topicId": "u5-t5",
        "subSection": "u5-s5",
        "diff": 1
      },
      {
        "q": "Hypovitaminosis A in poultry causes squamous metaplasia and pustule-like lesions in the esophageal mucous glands.",
        "a": true,
        "e": "Loss of normal columnar mucus-secreting epithelium causes hyperkeratotic squamous metaplasia termed 'nutritional roup'.",
        "topicId": "u5-t5",
        "subSection": "u5-s5",
        "diff": 1
      },
      {
        "q": "Fatty Liver Hemorrhagic Syndrome occurs almost exclusively in free-range meat-type roosters.",
        "a": false,
        "e": "FLHS occurs in overfed, high-producing caged laying hens, driven by excessive hepatic lipogenesis and high estrogen levels.",
        "topicId": "u5-t5",
        "subSection": "u5-s5",
        "diff": 2
      },
      {
        "q": "Rickets in young poultry produces soft, pliable, rubbery bones and beading of the costochondral junctions ('rachitic rosary').",
        "a": true,
        "e": "Deficient mineralization of osteoid leaves bones soft and flexible, with enlargement of rib growth plates.",
        "topicId": "u5-t5",
        "subSection": "u5-s5",
        "diff": 1
      }
    ],
    "fib": [
      {
        "q": "Petechial hemorrhages and necrotic ulcers at the tips of proventricular papillae are pathognomonic for velogenic _____ Disease.",
        "a": [
          "Newcastle",
          "newcastle",
          "Ranikhet",
          "ranikhet",
          "ND"
        ],
        "a_display": "Newcastle (Ranikhet)",
        "e": "Proventricular mucosal papilla hemorrhages are classic for velogenic viscerotropic Newcastle Disease (VVND).",
        "topicId": "u5-t1",
        "subSection": "u5-s1",
        "diff": 1
      },
      {
        "q": "Infectious Laryngotracheitis is characterized by eosinophilic intranuclear inclusion bodies classified as Cowdry type _____ inclusions.",
        "a": [
          "A",
          "a"
        ],
        "a_display": "A",
        "e": "Gallid herpesvirus 1 creates pathognomonic Cowdry type A eosinophilic intranuclear inclusion bodies in tracheal epithelial syncytia.",
        "topicId": "u5-t1",
        "subSection": "u5-s1",
        "diff": 2
      },
      {
        "q": "Infectious Bronchitis in poultry is caused by a virus belonging to the genus _____coronavirus.",
        "a": [
          "Gamma",
          "gamma",
          "Gammacoronavirus",
          "gammacoronavirus"
        ],
        "a_display": "Gammacoronavirus",
        "e": "Infectious Bronchitis virus (IBV) is classified as a Gammacoronavirus within the Coronaviridae family.",
        "topicId": "u5-t1",
        "subSection": "u5-s1",
        "diff": 2
      },
      {
        "q": "Large intracytoplasmic eosinophilic inclusion bodies found in Fowl Pox epithelial lesions are termed _____ bodies.",
        "a": [
          "Bollinger",
          "bollinger"
        ],
        "a_display": "Bollinger",
        "e": "Bollinger bodies are the diagnostic intracytoplasmic inclusions containing elementary viral Borrel bodies in avian pox.",
        "topicId": "u5-t1",
        "subSection": "u5-s1",
        "diff": 1
      },
      {
        "q": "The diphtheritic or wet form of Avian Pox produces pseudomembranous necrotic plaques commonly called _____ in the mouth and pharynx.",
        "a": [
          "canker",
          "Canker"
        ],
        "a_display": "canker",
        "e": "Diphtheritic fowl pox produces yellowish caseous patches on upper digestive mucous membranes, termed canker.",
        "topicId": "u5-t1",
        "subSection": "u5-s1",
        "diff": 1
      },
      {
        "q": "Highly Pathogenic Avian Influenza (HPAI) strains belong almost exclusively to the H5 and _____ hemagglutinin subtypes.",
        "a": [
          "H7",
          "h7",
          "7"
        ],
        "a_display": "H7",
        "e": "HPAI panzootics are restricted almost exclusively to H5 and H7 subtypes containing multibasic cleavage sites.",
        "topicId": "u5-t1",
        "subSection": "u5-s1",
        "diff": 2
      },
      {
        "q": "In young chicks, Infectious Bronchitis virus can produce suffocation by creating a caseous plug at the tracheal bifurcation, known as the _____.",
        "a": [
          "syrinx",
          "carina",
          "Syrinx"
        ],
        "a_display": "syrinx (carina)",
        "e": "Caseous exudate plugs lodge in the syrinx/carina of chicks under 2 weeks old, leading to fatal asphyxiation.",
        "topicId": "u5-t1",
        "subSection": "u5-s1",
        "diff": 2
      },
      {
        "q": "The primary biting insect vector transmitting the cutaneous form of Fowl Pox between birds is the _____ mosquito.",
        "a": [
          "Culex",
          "culex",
          "mosquito"
        ],
        "a_display": "Culex",
        "e": "Culex mosquitoes harbor and mechanically transmit Fowl Pox virus to unfeathered head structures.",
        "topicId": "u5-t1",
        "subSection": "u5-s1",
        "diff": 1
      },
      {
        "q": "Swollen, pale kidneys with tubules and ureters distended with white urates ('painted kidney') are caused by _____ strains of IBV.",
        "a": [
          "nephropathogenic",
          "Nephropathogenic"
        ],
        "a_display": "nephropathogenic",
        "e": "Nephropathogenic strains of IBV cause acute tubulointerstitial nephritis and massive urate impaction.",
        "topicId": "u5-t1",
        "subSection": "u5-s1",
        "diff": 2
      },
      {
        "q": "Infectious Bursal Disease virus specifically targets and destroys IgM-bearing _____ lymphocytes in the bursa.",
        "a": [
          "B",
          "b",
          "B-cells",
          "B cells"
        ],
        "a_display": "B",
        "e": "IBDV selectively destroys immature B-lymphocytes within bursal lymphoid follicles.",
        "topicId": "u5-t2",
        "subSection": "u5-s2",
        "diff": 1
      },
      {
        "q": "The classic clinical posture in neural Marek's disease is asymmetric paralysis with one leg stretched forward and the other _____.",
        "a": [
          "backward",
          "backwards",
          "behind",
          "back"
        ],
        "a_display": "backward",
        "e": "Unilateral sciatic nerve lymphomatous infiltration leads to the pathognomonic 'split-leg' paralysis posture.",
        "topicId": "u5-t2",
        "subSection": "u5-s2",
        "diff": 1
      },
      {
        "q": "Marek's Disease is a neoplastic disease composed primarily of malignant _____ lymphocytes.",
        "a": [
          "T",
          "t",
          "T-cells",
          "T cells"
        ],
        "a_display": "T",
        "e": "Marek's disease induces T-cell lymphomas, whereas Avian Leukosis is a clonal B-cell malignancy.",
        "topicId": "u5-t2",
        "subSection": "u5-s2",
        "diff": 2
      },
      {
        "q": "In Marek's disease, lymphoid infiltration into the iris causes depigmentation and blindness, commonly termed _____ eye.",
        "a": [
          "gray",
          "grey",
          "pearl",
          "Gray",
          "Grey"
        ],
        "a_display": "gray (pearl)",
        "e": "Ocular lymphomatosis causes loss of iris pigmentation (gray eye) and an eccentric pinpoint pupil.",
        "topicId": "u5-t2",
        "subSection": "u5-s2",
        "diff": 2
      },
      {
        "q": "Hydropericardium syndrome in broilers, colloquially called Leechi disease, is caused by Fowl _____ serotype 4.",
        "a": [
          "adenovirus",
          "Adenovirus",
          "Aviadenovirus",
          "FAdV-4"
        ],
        "a_display": "adenovirus (FAdV-4)",
        "e": "Fowl Adenovirus serotype 4 causes massive pericardial transudate accumulation surrounding the myocardium.",
        "topicId": "u5-t2",
        "subSection": "u5-s2",
        "diff": 2
      },
      {
        "q": "Chicken Infectious Anemia virus causes yellow/fatty aplasia of the bone marrow and severe atrophy of the _____ gland.",
        "a": [
          "thymus",
          "Thymus"
        ],
        "a_display": "thymus",
        "e": "CIAV destroys cortical T-lymphoblast precursors in the thymus and hematopoietic cells in bone marrow.",
        "topicId": "u5-t2",
        "subSection": "u5-s2",
        "diff": 2
      },
      {
        "q": "Marek's disease virus matures into fully infectious enveloped cell-free virions exclusively in the _____ follicle epithelium.",
        "a": [
          "feather",
          "Feather"
        ],
        "a_display": "feather",
        "e": "Fully enveloped, contagious MDV is shed into the environment via dander from the feather follicle epithelium.",
        "topicId": "u5-t2",
        "subSection": "u5-s2",
        "diff": 2
      },
      {
        "q": "Egg Drop Syndrome 1976 is caused by an adenovirus belonging to the genus _____adenovirus.",
        "a": [
          "Atadenovirus",
          "atadenovirus"
        ],
        "a_display": "Atadenovirus",
        "e": "EDS-76 virus is classified within the genus Atadenovirus.",
        "topicId": "u5-t2",
        "subSection": "u5-s2",
        "diff": 3
      },
      {
        "q": "Microscopic examination of liver in Inclusion Body Hepatitis reveals large basophilic or eosinophilic _____ inclusion bodies.",
        "a": [
          "intranuclear",
          "Intranuclear"
        ],
        "a_display": "intranuclear",
        "e": "IBH is an adenoviral infection characterized by large intranuclear hepatocyte inclusions.",
        "topicId": "u5-t2",
        "subSection": "u5-s2",
        "diff": 2
      },
      {
        "q": "The typical gross lesion triad of avian colisepticemia comprises fibrinous pericarditis, perihepatitis, and air _____.",
        "a": [
          "sacculitis",
          "Sacculitis"
        ],
        "a_display": "sacculitis",
        "e": "Air sacculitis, alongside pericarditis and perihepatitis, forms the cardinal triad of E. coli septicemia.",
        "topicId": "u5-t3",
        "subSection": "u5-s3",
        "diff": 1
      },
      {
        "q": "Fowl Cholera is caused by the bipolar-staining bacterium _____ multocida.",
        "a": [
          "Pasteurella",
          "pasteurella"
        ],
        "a_display": "Pasteurella",
        "e": "Pasteurella multocida is a Gram-negative bipolar coccobacillus causing fowl cholera.",
        "topicId": "u5-t3",
        "subSection": "u5-s3",
        "diff": 1
      },
      {
        "q": "Pullorum disease in baby chicks is caused by Salmonella enterica serovar Gallinarum biovar _____.",
        "a": [
          "Pullorum",
          "pullorum"
        ],
        "a_display": "Pullorum",
        "e": "Salmonella Pullorum produces bacillary white diarrhea and focal necrotizing granulomas in chicks.",
        "topicId": "u5-t3",
        "subSection": "u5-s3",
        "diff": 1
      },
      {
        "q": "In Fowl Typhoid, exposure of the enlarged friable liver to air produces a pathognomonic bronze or _____ sheen.",
        "a": [
          "green",
          "greenish",
          "bronze-green",
          "Green"
        ],
        "a_display": "greenish / bronze",
        "e": "Bile pigment oxidation on Salmonella Gallinarum infected liver creates a distinct greenish-bronze color.",
        "topicId": "u5-t3",
        "subSection": "u5-s3",
        "diff": 2
      },
      {
        "q": "Infectious Coryza is caused by Avibacterium _____.",
        "a": [
          "paragallinarum",
          "Paragallinarum"
        ],
        "a_display": "paragallinarum",
        "e": "Avibacterium paragallinarum (formerly Haemophilus paragallinarum) causes acute infectious coryza.",
        "topicId": "u5-t3",
        "subSection": "u5-s3",
        "diff": 2
      },
      {
        "q": "Chronic Respiratory Disease (CRD) in poultry is caused by Mycoplasma _____.",
        "a": [
          "gallisepticum",
          "Gallisepticum",
          "MG"
        ],
        "a_display": "gallisepticum",
        "e": "Mycoplasma gallisepticum (MG) initiates primary respiratory damage and predisposes to secondary E. coli invasion.",
        "topicId": "u5-t3",
        "subSection": "u5-s3",
        "diff": 1
      },
      {
        "q": "Necrotic Enteritis in broilers produces a mucosal texture resembling a '_____ towel', caused by Clostridium perfringens.",
        "a": [
          "Turkish",
          "turkish"
        ],
        "a_display": "Turkish",
        "e": "Severe mucosal necrosis with attached yellow diphtheritic membrane imparts a classic 'Turkish towel' appearance.",
        "topicId": "u5-t3",
        "subSection": "u5-s3",
        "diff": 1
      },
      {
        "q": "Avian Spirochetosis is transmitted to poultry flocks by the soft tick _____ persicus.",
        "a": [
          "Argas",
          "argas"
        ],
        "a_display": "Argas",
        "e": "Argas persicus (fowl tick) acts as biological vector for Borrelia anserina.",
        "topicId": "u5-t3",
        "subSection": "u5-s3",
        "diff": 2
      },
      {
        "q": "Ulcerative Enteritis, especially severe in quails and pheasants, is caused by Clostridium _____.",
        "a": [
          "colinum",
          "Colinum"
        ],
        "a_display": "colinum",
        "e": "Clostridium colinum produces deep intestinal ulcers and hepatic necrosis in quails (quail disease).",
        "topicId": "u5-t3",
        "subSection": "u5-s3",
        "diff": 2
      },
      {
        "q": "Brooder pneumonia in chicks is caused by the fungal pathogen _____ fumigatus.",
        "a": [
          "Aspergillus",
          "aspergillus"
        ],
        "a_display": "Aspergillus",
        "e": "Aspergillus fumigatus produces nodular granulomas in the lungs and air sacs of newly hatched chicks.",
        "topicId": "u5-t4",
        "subSection": "u5-s4",
        "diff": 1
      },
      {
        "q": "Crop mycosis (thrush / moniliasis) in chickens is caused by the opportunistic yeast _____ albicans.",
        "a": [
          "Candida",
          "candida"
        ],
        "a_display": "Candida",
        "e": "Candida albicans overgrows on the crop epithelium producing a curd-like pseudomembrane.",
        "topicId": "u5-t4",
        "subSection": "u5-s4",
        "diff": 1
      },
      {
        "q": "The primary organ damaged by Aflatoxin B1 in poultry is the _____.",
        "a": [
          "liver",
          "Liver"
        ],
        "a_display": "liver",
        "e": "Hepatic bioactivation of aflatoxin results in centrilobular necrosis, lipidosis, and bile duct hyperplasia.",
        "topicId": "u5-t4",
        "subSection": "u5-s4",
        "diff": 1
      },
      {
        "q": "Severe hemorrhagic cecal coccidiosis in domestic chickens is caused by Eimeria _____.",
        "a": [
          "tenella",
          "Tenella"
        ],
        "a_display": "tenella",
        "e": "Eimeria tenella invades deep cecal crypts causing extensive bloody sloughing and cecal distension.",
        "topicId": "u5-t4",
        "subSection": "u5-s4",
        "diff": 1
      },
      {
        "q": "Eimeria _____ causes superficial duodenal lesions presenting as transverse white ladder-like streaks.",
        "a": [
          "acervulina",
          "Acervulina"
        ],
        "a_display": "acervulina",
        "e": "Eimeria acervulina affects the duodenal loop and displays characteristic ladder-like white streaks.",
        "topicId": "u5-t4",
        "subSection": "u5-s4",
        "diff": 2
      },
      {
        "q": "Blackhead disease in turkeys is caused by the protozoan parasite Histomonas _____.",
        "a": [
          "meleagridis",
          "Meleagridis"
        ],
        "a_display": "meleagridis",
        "e": "Histomonas meleagridis causes infectious enterohepatitis with circular depressed liver craters.",
        "topicId": "u5-t4",
        "subSection": "u5-s4",
        "diff": 1
      },
      {
        "q": "The cecal worm acting as vector for Histomonas meleagridis ova is _____ gallinarum.",
        "a": [
          "Heterakis",
          "heterakis"
        ],
        "a_display": "Heterakis",
        "e": "Heterakis gallinarum ova protect Histomonas protozoa in the poultry farm environment.",
        "topicId": "u5-t4",
        "subSection": "u5-s4",
        "diff": 1
      },
      {
        "q": "The gapeworm of poultry, which lives in permanent copula forming a 'Y' shape in the trachea, is _____ trachea.",
        "a": [
          "Syngamus",
          "syngamus"
        ],
        "a_display": "Syngamus",
        "e": "Syngamus trachea adults attach to tracheal mucosa causing dyspnea and gasping ('gapes').",
        "topicId": "u5-t4",
        "subSection": "u5-s4",
        "diff": 1
      },
      {
        "q": "Scaly leg disease in backyard poultry is caused by the burrowing mite Knemidocoptes _____.",
        "a": [
          "mutans",
          "Mutans"
        ],
        "a_display": "mutans",
        "e": "Knemidocoptes mutans burrows under scales of feet and shanks, causing crusty hyperkeratotic encrustations.",
        "topicId": "u5-t4",
        "subSection": "u5-s4",
        "diff": 2
      },
      {
        "q": "Visceral gout in birds results from hyperuricemia and precipitation of _____ urate crystals on visceral serosa.",
        "a": [
          "monosodium",
          "Monosodium",
          "sodium",
          "urate"
        ],
        "a_display": "monosodium",
        "e": "Monosodium urate crystals deposit as white chalky dust on pericardium, liver, and abdominal air sacs.",
        "topicId": "u5-t5",
        "subSection": "u5-s5",
        "diff": 1
      },
      {
        "q": "Ascites syndrome in meat-type broilers is also termed Pulmonary _____ Syndrome.",
        "a": [
          "Hypertension",
          "hypertension",
          "PHS"
        ],
        "a_display": "Hypertension",
        "e": "Pulmonary Hypertension Syndrome (PHS) leads to right ventricular hypertrophy and transudative ascites.",
        "topicId": "u5-t5",
        "subSection": "u5-s5",
        "diff": 2
      },
      {
        "q": "Perosis (slipped tendon) in chickens is caused primarily by deficiency of the trace element _____.",
        "a": [
          "manganese",
          "Manganese",
          "Mn"
        ],
        "a_display": "manganese (Mn)",
        "e": "Manganese deficiency causes deformation of distal tibial condyles and slippage of the gastrocnemius tendon.",
        "topicId": "u5-t5",
        "subSection": "u5-s5",
        "diff": 1
      },
      {
        "q": "Nutritional encephalomalacia ('Crazy Chick Disease') is caused by deficiency of Vitamin _____.",
        "a": [
          "E",
          "e"
        ],
        "a_display": "E",
        "e": "Vitamin E deficiency causes lipid peroxidation and ischemic liquefactive necrosis in cerebellar folia.",
        "topicId": "u5-t5",
        "subSection": "u5-s5",
        "diff": 1
      },
      {
        "q": "Curled Toe Paralysis in growing chicks is caused by deficiency of Vitamin B2, also known as _____.",
        "a": [
          "riboflavin",
          "Riboflavin"
        ],
        "a_display": "riboflavin",
        "e": "Riboflavin deficiency triggers myelin degeneration in the sciatic nerve trunk causing curled toes.",
        "topicId": "u5-t5",
        "subSection": "u5-s5",
        "diff": 1
      },
      {
        "q": "Vitamin A deficiency induces squamous _____ of mucosal glands in the esophagus, producing pustule-like nodules.",
        "a": [
          "metaplasia",
          "Metaplasia"
        ],
        "a_display": "metaplasia",
        "e": "Squamous metaplasia and keratinization of mucosal glands ('nutritional roup') is classic for hypovitaminosis A.",
        "topicId": "u5-t5",
        "subSection": "u5-s5",
        "diff": 2
      },
      {
        "q": "Opisthotonos and extreme star-gazing posture in chicks is caused by deficiency of Vitamin B1, also called _____.",
        "a": [
          "thiamine",
          "Thiamine",
          "thiamin"
        ],
        "a_display": "thiamine",
        "e": "Thiamine deficiency leads to acute neuronal energy failure and classic 'star-gazing' polyneuritis.",
        "topicId": "u5-t5",
        "subSection": "u5-s5",
        "diff": 1
      },
      {
        "q": "The beaded appearance of costochondral junctions in rachitic chicks is commonly termed the rachitic _____.",
        "a": [
          "rosary",
          "Rosary"
        ],
        "a_display": "rosary",
        "e": "Enlargement of unmineralized osteoid at rib costochondral junctions produces the classic 'rachitic rosary'.",
        "topicId": "u5-t5",
        "subSection": "u5-s5",
        "diff": 1
      },
      {
        "q": "Fatty Liver Hemorrhagic Syndrome in caged layers culminates in fatal intra-abdominal bleeding due to rupture of the _____ capsule.",
        "a": [
          "liver",
          "hepatic",
          "Liver",
          "Hepatic"
        ],
        "a_display": "liver",
        "e": "Subcapsular hepatic hematomas in friable fat-infiltrated livers rupture through the capsule causing exsanguination.",
        "topicId": "u5-t5",
        "subSection": "u5-s5",
        "diff": 2
      }
    ]
  },
  "unit-6": {
    "mcq": [
      {
        "q": "Tyzzer's disease in laboratory rodents is caused by which intracellular bacterium?",
        "o": [
          "Clostridium piliforme",
          "Corynebacterium kutscheri",
          "Streptobacillus moniliformis",
          "Citrobacter rodentium"
        ],
        "a": 0,
        "e": "Tyzzer's disease is caused by Clostridium piliforme (formerly Bacillus piliformis), an obligate intracellular, spore-forming, Gram-negative filamentous rod.",
        "topicId": "u6-t1",
        "subSection": "u6-s1",
        "diff": 1
      },
      {
        "q": "Which histological special stain is essential to demonstrate bundles of Clostridium piliforme in necrotic hepatocytes?",
        "o": [
          "Warthin-Starry or Giemsa stain",
          "Periodic acid-Schiff (PAS) stain only",
          "Prussian blue stain",
          "Von Kossa stain"
        ],
        "a": 0,
        "e": "Clostridium piliforme stains poorly with H&E and Gram stain, but is readily visualized as sheaves/bundles of filamentous rods with silver stains (Warthin-Starry) or Giemsa.",
        "topicId": "u6-t1",
        "subSection": "u6-s1",
        "diff": 2
      },
      {
        "q": "The classic gross pathological triad of Tyzzer's disease in laboratory mice comprises:",
        "o": [
          "Necrotizing hepatitis, typhlocolitis, and myocarditis",
          "Bronchopneumonia, pleuritis, and rhinitis",
          "Glomerulonephritis, splenomegaly, and orchitis",
          "Encephalomalacia, pancreatitis, and otitis"
        ],
        "a": 0,
        "e": "Tyzzer's disease characteristically produces focal necrotizing hepatitis (miliary pale foci), necrotizing typhlocolitis, and focal myocardial necrosis.",
        "topicId": "u6-t1",
        "subSection": "u6-s1",
        "diff": 2
      },
      {
        "q": "Ectromelia virus (Mousepox) in laboratory mice belongs to which virus family?",
        "o": [
          "Poxviridae (genus Orthopoxvirus)",
          "Parvoviridae",
          "Paramyxoviridae",
          "Adenoviridae"
        ],
        "a": 0,
        "e": "Ectromelia virus is a member of the genus Orthopoxvirus, family Poxviridae, producing acute fatal systemic disease or chronic limb/tail amputation (ectromelia).",
        "topicId": "u6-t1",
        "subSection": "u6-s1",
        "diff": 1
      },
      {
        "q": "Marchal bodies found in epithelial cells of mice infected with Ectromelia virus are:",
        "o": [
          "Large, eosinophilic, round intracytoplasmic inclusion bodies (type A inclusions)",
          "Basophilic intranuclear inclusions",
          "Cowdry type A inclusions",
          "Perivascular amyloid aggregates"
        ],
        "a": 0,
        "e": "Ectromelia infection produces pathognomonic acidophilic, proteinaceous intracytoplasmic type A inclusion bodies called Marchal bodies.",
        "topicId": "u6-t1",
        "subSection": "u6-s1",
        "diff": 2
      },
      {
        "q": "Sialodacryoadenitis virus (SDAV) in laboratory rats has a marked predilection for:",
        "o": [
          "Submandibular salivary glands, parotid salivary glands, and Harderian/lacrimal glands",
          "Pancreatic islets and bile ducts",
          "Thyroid and parathyroid glands",
          "Adrenal cortex only"
        ],
        "a": 0,
        "e": "SDAV (a rat coronavirus) causes acute necrotizing sialoadenitis and dacryoadenitis, resulting in swollen submandibular neck region and 'red tears' (chromodacryorrhea).",
        "topicId": "u6-t1",
        "subSection": "u6-s1",
        "diff": 2
      },
      {
        "q": "'Red tears' (chromodacryorrhea) in rats with SDAV or environmental stress are caused by excess secretion of which pigment?",
        "o": [
          "Porphyrin from the Harderian gland",
          "Hemoglobin from conjunctival ulcers",
          "Bilirubin from hepatic failure",
          "Melanin from retinal pigment epithelium"
        ],
        "a": 0,
        "e": "The Harderian gland produces iron-free porphyrin rings; under stress, disease, or SDAV infection, excessive reddish crusty discharge stains eyes and nares.",
        "topicId": "u6-t1",
        "subSection": "u6-s1",
        "diff": 1
      },
      {
        "q": "Sendai virus infection in laboratory mice causes which primary lesion?",
        "o": [
          "Bronchointerstitial pneumonia with syncytia formation",
          "Focal necrotizing hepatitis",
          "Acute necrotizing glomerulonephritis",
          "Proliferative enteropathy"
        ],
        "a": 0,
        "e": "Sendai virus (Murine respirovirus, Paramyxoviridae) replicates in respiratory epithelium, causing necrotizing bronchiolitis and bronchointerstitial pneumonia with syncytial cells.",
        "topicId": "u6-t1",
        "subSection": "u6-s1",
        "diff": 2
      },
      {
        "q": "Murine Respiratory Mycoplasmosis (MRM) in laboratory rats and mice is caused by:",
        "o": [
          "Mycoplasma pulmonis",
          "Mycoplasma arthritidis",
          "Mycoplasma gallisepticum",
          "Mycoplasma bovis"
        ],
        "a": 0,
        "e": "Mycoplasma pulmonis attaches to respiratory cilia, inducing chronic suppurative bronchopneumonia, bronchiectasis ('cobblestone lung'), and otitis media.",
        "topicId": "u6-t1",
        "subSection": "u6-s1",
        "diff": 1
      },
      {
        "q": "A classic autopsy lesion of advanced Mycoplasma pulmonis infection in aged rats is:",
        "o": [
          "Bronchiectasis with multiple yellowish nodules containing thick caseous pus on lung surface ('cobblestone' lung)",
          "Diffuse pulmonary anthracosis",
          "Cerebral infarction",
          "Gastric adenoma"
        ],
        "a": 0,
        "e": "Chronic MRM results in severe airway dilation (bronchiectasis) filled with purulent exudate, creating a distinctive nodular cobblestone appearance.",
        "topicId": "u6-t1",
        "subSection": "u6-s1",
        "diff": 2
      },
      {
        "q": "Lymphocytic Choriomeningitis (LCM) in mice is caused by an Arenavirus and is clinically significant because:",
        "o": [
          "It is an important zoonosis causing aseptic meningitis in humans",
          "It causes 100% mortality in adult pet dogs",
          "It produces cutaneous horn growths",
          "It is an obligate vector-borne malaria"
        ],
        "a": 0,
        "e": "LCMV is carried asymptomatically by wild Mus musculus and transmits to humans via urine/feces aerosol, causing flu-like illness or lymphocytic meningitis.",
        "topicId": "u6-t1",
        "subSection": "u6-s1",
        "diff": 2
      },
      {
        "q": "Transmissible Colonic Hyperplasia in laboratory mice is caused by:",
        "o": [
          "Citrobacter rodentium",
          "Escherichia coli O157:H7",
          "Salmonella Enteritidis",
          "Helicobacter bilis"
        ],
        "a": 0,
        "e": "Citrobacter rodentium attaches via attaching and effacing (A/E) lesions, stimulating profound crypt cell mitosis and severe colonic mucosal hyperplasia.",
        "topicId": "u6-t1",
        "subSection": "u6-s1",
        "diff": 2
      },
      {
        "q": "Helicobacter hepaticus infection in susceptible strains of mice (e.g., A/JCr) is associated with:",
        "o": [
          "Chronic active hepatitis, hepatic necrosis, and hepatocellular carcinoma",
          "Primary cardiomyopathy",
          "Renal tubular agenesis",
          "Corneal clouding"
        ],
        "a": 0,
        "e": "Helicobacter hepaticus colonizes the cecum, colon, and liver canaliculi, causing chronic active hepatitis and progressing to liver cancer.",
        "topicId": "u6-t1",
        "subSection": "u6-s1",
        "diff": 2
      },
      {
        "q": "Mouse Hepatitis Virus (MHV), a murine coronavirus, occurs in two distinct organ-specific pathotypes:",
        "o": [
          "Respiratory (enterotropic) and polytropic (neurotropic/hepatotropic)",
          "Cutaneous and ocular",
          "Renal and genital",
          "Endocrine and exocrine"
        ],
        "a": 0,
        "e": "MHV strains are classified into polytropic (which infect vascular endothelium causing hepatitis and encephalitis) and enterotropic (targeting intestinal enterocytes).",
        "topicId": "u6-t1",
        "subSection": "u6-s1",
        "diff": 2
      },
      {
        "q": "Pseudotuberculosis in laboratory guinea pigs and rodents is caused by:",
        "o": [
          "Yersinia pseudotuberculosis",
          "Corynebacterium kutscheri",
          "Mycobacterium tuberculosis",
          "Listeria monocytogenes"
        ],
        "a": 0,
        "e": "Yersinia pseudotuberculosis causes chronic mesenteric lymphadenitis and focal caseous/nodular abscesses in liver and spleen.",
        "topicId": "u6-t1",
        "subSection": "u6-s1",
        "diff": 1
      },
      {
        "q": "The murine pinworm Syphacia obvelata deposits eggs in which anatomical region of mice?",
        "o": [
          "Perianal skin (demonstrated via perianal tape test)",
          "Deep mucosal crypts of cecum only",
          "Biliary duct lumina",
          "Bladder mucosa"
        ],
        "a": 0,
        "e": "Gravid female Syphacia obvelata migrate to perianal skin to deposit banana-shaped asymmetrical ova, diagnosed by clear cellophane tape test.",
        "topicId": "u6-t1",
        "subSection": "u6-s1",
        "diff": 2
      },
      {
        "q": "Aspiculuris tetraptera differs from Syphacia obvelata in that Aspiculuris:",
        "o": [
          "Deposits symmetrical ova inside the fecal pellet in the proximal colon/cecum",
          "Lays eggs only on the pinna",
          "Invades hepatic parenchyma",
          "Has an indirect life cycle requiring beetles"
        ],
        "a": 0,
        "e": "Unlike Syphacia, Aspiculuris tetraptera sheds symmetrical ellipsoidal eggs within the lumen of the large intestine, detectable by fecal flotation.",
        "topicId": "u6-t1",
        "subSection": "u6-s1",
        "diff": 2
      },
      {
        "q": "Wet tail in Syrian hamsters (Proliferative Ileitis) is caused by which microaerophilic bacterium?",
        "o": [
          "Lawsonia intracellularis",
          "Clostridium perfringens",
          "Brachyspira hyodysenteriae",
          "Salmonella Typhimurium"
        ],
        "a": 0,
        "e": "Lawsonia intracellularis invades enterocyte apical cytoplasm, causing marked proliferation of crypt enterocytes, thickened muscular ileum, and foul watery diarrhea ('wet tail').",
        "topicId": "u6-t1",
        "subSection": "u6-s1",
        "diff": 1
      },
      {
        "q": "Corynebacterium kutscheri in mice and rats causes which pathology?",
        "o": [
          "Murine pseudotuberculosis (caseous embolopurulent abscesses in lungs, liver, and kidneys)",
          "Cutaneous papillomatosis",
          "Ulcerative stomatitis",
          "Severe hemolytic anemia"
        ],
        "a": 0,
        "e": "C. kutscheri causes latent or opportunistic suppurative pneumonia and miliary cheese-like abscesses throughout thoracic and abdominal viscera.",
        "topicId": "u6-t1",
        "subSection": "u6-s1",
        "diff": 2
      },
      {
        "q": "Ringtail condition in suckling laboratory rats and mice is caused by:",
        "o": [
          "Low environmental relative humidity (<40%) combined with high ambient temperature",
          "Genetic chromosomal translocation",
          "Deficiency of Vitamin K",
          "Ringworm fungal infection"
        ],
        "a": 0,
        "e": "Low relative humidity dries the stratum corneum of unfeathered/hairless tail skin, causing annular constrictions, ischemic necrosis, and dry gangrene of the tail.",
        "topicId": "u6-t1",
        "subSection": "u6-s1",
        "diff": 1
      },
      {
        "q": "Rat bite fever in humans is a zoonosis transmitted from the normal oral flora of healthy rats caused by:",
        "o": [
          "Streptobacillus moniliformis",
          "Yersinia pestis",
          "Francisella tularensis",
          "Coxiella burnetii"
        ],
        "a": 0,
        "e": "Streptobacillus moniliformis is a commensal in the rodent nasopharynx; bites transmit rat-bite fever (Haverhill fever) with fever, polyarthritis, and rash in humans.",
        "topicId": "u6-t1",
        "subSection": "u6-s1",
        "diff": 2
      },
      {
        "q": "Spontaneous mammary fibroadenoma in Sprague-Dawley rats is distinguished by:",
        "o": [
          "Benign nature, encapsulated expansive growth, and extensive distribution due to wide anatomical distribution of mammary tissue",
          "Rapid invasive metastatic spread to lungs",
          "Pure sarcoma with osteoid formation",
          "Hormonal independence from prolactin"
        ],
        "a": 0,
        "e": "Mammary fibroadenomas are extremely common benign tumors in aged female rats; mammary tissue extends from neck to inguinal regions.",
        "topicId": "u6-t1",
        "subSection": "u6-s1",
        "diff": 2
      },
      {
        "q": "Chronic Progressive Nephropathy (CPN / glomerulosclerosis) in aged Sprague-Dawley rats is characterized histologically by:",
        "o": [
          "Basophilic regenerated tubules with hyaline proteinaceous casts, glomerulosclerosis, and interstitial fibrosis",
          "Acute suppurative pyelonephritis with stones",
          "Renal cortical amyloidosis without casts",
          "Polycystic congenital aplasia"
        ],
        "a": 0,
        "e": "CPN is the leading non-neoplastic cause of death in aged laboratory rats, showing thickened basement membranes, eosinophilic casts, and tubular atrophy.",
        "topicId": "u6-t1",
        "subSection": "u6-s1",
        "diff": 2
      },
      {
        "q": "Rabbit Hemorrhagic Disease (RHD) is caused by a virus belonging to the family:",
        "o": [
          "Caliciviridae",
          "Flaviviridae",
          "Parvoviridae",
          "Herpesviridae"
        ],
        "a": 0,
        "e": "RHD is caused by Rabbit hemorrhagic disease virus (RHDV-1 and RHDV-2 / lagovirus), family Caliciviridae, causing acute fatal hepatic necrosis and DIC.",
        "topicId": "u6-t2",
        "subSection": "u6-s2",
        "diff": 1
      },
      {
        "q": "The cardinal post-mortem lesion of acute Rabbit Hemorrhagic Disease is:",
        "o": [
          "Massive acute hepatic necrosis, splenomegaly, and widespread pulmonary hemorrhage/infarctions with bloody epistaxis",
          "Generalized cutaneous papillomas",
          "Severe ulcerative keratitis",
          "Atrophy of cerebellum"
        ],
        "a": 0,
        "e": "RHDV targets hepatocytes, leading to severe disseminated intravascular coagulation (DIC), epistaxis, liver necrosis, and hemorrhagic lungs.",
        "topicId": "u6-t2",
        "subSection": "u6-s2",
        "diff": 1
      },
      {
        "q": "Myxomatosis in European rabbits (Oryctolagus cuniculus) is caused by a leporipoxvirus and characterized by:",
        "o": [
          "Gelatinous subcutaneous myxoid tumors, severe blepharoconjunctivitis, and 'lion-head' facial edema",
          "Purely skeletal ossification",
          "Acute paralytic myelitis without edema",
          "Bloody diarrhea without skin signs"
        ],
        "a": 0,
        "e": "Myxoma virus induces mucinous mesenchymal proliferation (myxomas) around eyes, nose, ears, and genitalia, creating a classic swollen 'lion face'.",
        "topicId": "u6-t2",
        "subSection": "u6-s2",
        "diff": 1
      },
      {
        "q": "Snuffles in domestic rabbits is a chronic upper respiratory disease caused by:",
        "o": [
          "Pasteurella multocida",
          "Bordetella bronchiseptica",
          "Mycoplasma pulmonis",
          "Pseudomonas aeruginosa"
        ],
        "a": 0,
        "e": "Pasteurella multocida causes purulent rhinosinusitis ('snuffles'), front paw matting (from wiping nose), pleuropneumonia, and otitis media in rabbits.",
        "topicId": "u6-t2",
        "subSection": "u6-s2",
        "diff": 1
      },
      {
        "q": "Hepatic coccidiosis in rabbits is caused by which protozoan parasite?",
        "o": [
          "Eimeria stiedae",
          "Eimeria intestinalis",
          "Eimeria magna",
          "Cryptosporidium cuniculus"
        ],
        "a": 0,
        "e": "Eimeria stiedae targets the bile duct epithelium, inducing marked papillary hyperplasia and yellow-white nodular or cord-like lesions across the liver.",
        "topicId": "u6-t2",
        "subSection": "u6-s2",
        "diff": 1
      },
      {
        "q": "Gross examination of liver in Eimeria stiedae infection reveals:",
        "o": [
          "Linear yellowish-white branching cords and circumscribed nodules containing coccidial oocysts in creamy exudate",
          "Miliary caseous tubercles in parenchyma only",
          "Severe nutmeg liver without bile duct involvement",
          "Large fluid hydatid cysts"
        ],
        "a": 0,
        "e": "E. stiedae causes marked biliary tree dilation and adenomatous papillary proliferation appearing as serpentine, branching yellow-white cords.",
        "topicId": "u6-t2",
        "subSection": "u6-s2",
        "diff": 2
      },
      {
        "q": "Encephalitozoon cuniculi in pet and laboratory rabbits causes which clinical syndrome?",
        "o": [
          "Head tilt (torticollis), ataxia, cataracts/uveitis, and chronic interstitial nephritis with cortical pitted depressions",
          "Acute pulmonary hemorrhage with epistaxis",
          "Proliferative enteritis only",
          "Aplastic bone marrow anemia"
        ],
        "a": 0,
        "e": "E. cuniculi (a microsporidium) infects brain and kidneys, causing non-purulent granulomatous meningoencephalitis (head tilt) and pitted renal scars.",
        "topicId": "u6-t2",
        "subSection": "u6-s2",
        "diff": 2
      },
      {
        "q": "Which histological stain demonstrates the polar spore and Gram-positive wall of Encephalitozoon cuniculi spores?",
        "o": [
          "Gram stain (Gram-positive) and modified Ziehl-Neelsen (carbolfuchsin)",
          "Sudan IV",
          "Alcian blue at pH 1.0",
          "Prussian blue"
        ],
        "a": 0,
        "e": "E. cuniculi microsporidian spores are 1.5-2.5 um, strongly Gram-positive and acid-fast positive on modified ZN staining.",
        "topicId": "u6-t2",
        "subSection": "u6-s2",
        "diff": 2
      },
      {
        "q": "Mucoid enteropathy in young commercial rabbits is characterized at necropsy by:",
        "o": [
          "Distension of the cecum and colon with copious, gelatinous, clear or translucent mucus and dry hard cecal impaction",
          "Severe mucosal ulceration with fibrin casts",
          "Diffuse villous atrophy with blood",
          "Perforation of stomach wall"
        ],
        "a": 0,
        "e": "Rabbit mucoid enteropathy involves cecal dysbiosis, hypersecretion of goblet cells, and accumulation of clear jelly-like mucus in colon and cecum.",
        "topicId": "u6-t2",
        "subSection": "u6-s2",
        "diff": 2
      },
      {
        "q": "Why are guinea pigs uniquely susceptible to Scurvy (Hypovitaminosis C)?",
        "o": [
          "They lack the functional enzyme L-gulonolactone oxidase required for ascorbic acid synthesis",
          "They degrade dietary ascorbic acid in the rumen",
          "Their intestinal mucosa cannot absorb water-soluble vitamins",
          "Their kidneys rapidly excrete vitamin C via active pumps"
        ],
        "a": 0,
        "e": "Guinea pigs (like primates and bats) lack L-gulonolactone oxidase due to a gene mutation, making dietary vitamin C indispensable.",
        "topicId": "u6-t2",
        "subSection": "u6-s2",
        "diff": 1
      },
      {
        "q": "The classic pathological manifestations of Scurvy in guinea pigs include:",
        "o": [
          "Subperiosteal hemorrhages around stifle joints, loose incisors, bleeding gums, and costochondral junction disorganization",
          "Severe epidermal hyperkeratosis only",
          "Acute liver necrosis with jaundice",
          "Calcification of aorta and coronary arteries"
        ],
        "a": 0,
        "e": "Defective collagen cross-linking leads to capillary fragility, resulting in extensive periarticular and intramuscular hemorrhages, gingival bleeding, and joint swelling.",
        "topicId": "u6-t2",
        "subSection": "u6-s2",
        "diff": 1
      },
      {
        "q": "Bordetella bronchiseptica is a common commensal in rabbits but causes fatal epizootic bronchointerstitial pneumonia in which co-housed species?",
        "o": [
          "Guinea pigs (Cavia porcellus)",
          "Mice",
          "Hamsters",
          "Gerbils"
        ],
        "a": 0,
        "e": "Rabbits are asymptomatic carriers of Bordetella bronchiseptica; when housed with guinea pigs, cross-infection causes fatal acute suppurative bronchopneumonia.",
        "topicId": "u6-t2",
        "subSection": "u6-s2",
        "diff": 2
      },
      {
        "q": "Cervical lymphadenitis ('Lumps') in guinea pigs is caused by which pyogenic pathogen?",
        "o": [
          "Streptococcus equi subsp. zooepidemicus",
          "Pasteurella multocida",
          "Staphylococcus aureus",
          "Corynebacterium pseudotuberculosis"
        ],
        "a": 0,
        "e": "Coarse roughage causes minor abrasions in the oral cavity, allowing Strep. zooepidemicus to invade and cause massive purulent abscessation of cervical lymph nodes.",
        "topicId": "u6-t2",
        "subSection": "u6-s2",
        "diff": 2
      },
      {
        "q": "The most common spontaneous malignant neoplasm of female domestic rabbits over 3 years of age is:",
        "o": [
          "Uterine adenocarcinoma",
          "Mammary gland carcinoma",
          "Renal cell carcinoma",
          "Osteosarcoma"
        ],
        "a": 0,
        "e": "Uterine adenocarcinoma affects up to 60-80% of intact female domestic rabbits over 4 years old, presenting with hematuria and multiple pulmonary metastases.",
        "topicId": "u6-t2",
        "subSection": "u6-s2",
        "diff": 1
      },
      {
        "q": "Psoroptes cuniculi causes which prominent clinical disease in domestic rabbits?",
        "o": [
          "Rabbit ear canker (crusty, brown, painful exudate filling the external ear canal)",
          "Severe mange of feet and legs",
          "Nasal dermatitis",
          "Alopecia of the tail"
        ],
        "a": 0,
        "e": "Psoroptes cuniculi non-burrowing ear mites pierce epidermal layers, producing massive layers of foul, brown, cornflake-like scabs inside the ear pinna.",
        "topicId": "u6-t2",
        "subSection": "u6-s2",
        "diff": 1
      },
      {
        "q": "Malocclusion ('Slobbers') in rabbits and guinea pigs results from:",
        "o": [
          "Overgrowth of open-rooted hypsodont elodont teeth due to inadequate abrasive fibrous forage",
          "Primary dental enamel hypoplasia",
          "Autoimmune destruction of periodontal ligament",
          "Severe fluorosis"
        ],
        "a": 0,
        "e": "Rabbit and guinea pig incisors and cheek teeth continuously grow; lack of fibrous hay prevents dental wear, forming sharp spurs that lacerate tongue and cheeks ('slobbers').",
        "topicId": "u6-t2",
        "subSection": "u6-s2",
        "diff": 1
      },
      {
        "q": "Kurloff cells are unique mononuclear leukocytes containing large proteoglycan inclusions found specifically in:",
        "o": [
          "Guinea pigs (Cavia porcellus)",
          "Laboratory mice",
          "Chinchillas",
          "Syrian hamsters"
        ],
        "a": 0,
        "e": "Kurloff cells are killer-cell-like mononuclear leukocytes with large intracytoplasmic mucopolysaccharide Kurloff bodies, elevated in pregnant female guinea pigs.",
        "topicId": "u6-t2",
        "subSection": "u6-s2",
        "diff": 2
      },
      {
        "q": "Why are penicillins, cephalosporins, and macrolides highly lethal in guinea pigs and rabbits?",
        "o": [
          "They eradicate Gram-positive beneficial microflora, triggering fatal overgrowth of Clostridium difficile / Clostridium spiroforme (enterotoxemia)",
          "They cause acute idiosyncratic hepatic failure",
          "They precipitate within renal tubules causing anuria",
          "They trigger acute anaphylactic shock in all rodents"
        ],
        "a": 0,
        "e": "Antibiotics with Gram-positive spectrum disrupt the delicate cecal ecology, allowing toxin-producing Clostridium spiroforme/difficile to proliferate and cause fatal enterotoxemia.",
        "topicId": "u6-t2",
        "subSection": "u6-s2",
        "diff": 2
      },
      {
        "q": "Pregnancy toxemia in guinea pigs occurs in two forms: fasting ketosis and:",
        "o": [
          "Circulatory / pre-eclamptic form due to uterine compression of aorta and iliac vessels",
          "Immune-mediated glomerulonephritis",
          "Hypocalcemic tetany",
          "Acute fatty liver syndrome only"
        ],
        "a": 0,
        "e": "The toxic or circulatory form results from heavy uteroplacental mass compressing uterine blood flow, causing uteroplacental ischemia, DIC, and maternal death.",
        "topicId": "u6-t2",
        "subSection": "u6-s2",
        "diff": 2
      },
      {
        "q": "Treponema paraluiscuniculi causes which specific infection in rabbits?",
        "o": [
          "Rabbit syphilis (Vent disease / spirochetosis)",
          "Ulcerative stomatitis",
          "Tyzzer's disease",
          "Infectious pododermatitis"
        ],
        "a": 0,
        "e": "Rabbit syphilis (vent disease) produces crusty, ulcerative, vesiculopustular lesions on the mucocutaneous junctions of the vulva, prepuce, nose, and lips.",
        "topicId": "u6-t2",
        "subSection": "u6-s2",
        "diff": 2
      },
      {
        "q": "Trichobezoars (hairballs) in rabbits are primarily caused by:",
        "o": [
          "Excess grooming, low dietary indigestible fiber, and reduced gastrointestinal motility (gut stasis)",
          "Primary hyperchlorhydria",
          "Gastric lymphoma",
          "Helminthic stimulation of gastric mucosa"
        ],
        "a": 0,
        "e": "Rabbits cannot vomit; inadequate dietary fiber causes cecal and gastric hypomotility, allowing ingested hair to aggregate into an obstructive mass.",
        "topicId": "u6-t2",
        "subSection": "u6-s2",
        "diff": 1
      },
      {
        "q": "Ulcerative Pododermatitis ('Sore hocks') in caged rabbits is characterized by:",
        "o": [
          "Chronic pressure necrosis, hyperkeratosis, and secondary Staph aureus ulceration of plantar metatarsal surfaces",
          "Congenital absence of digital flexor tendons",
          "Acute osteosarcoma of phalanges",
          "Trench foot due to viral infection"
        ],
        "a": 0,
        "e": "Wire-bottom cages without rest boards cause avascular necrosis of pressure-bearing plantar surfaces, secondarily colonized by Staphylococcus aureus.",
        "topicId": "u6-t2",
        "subSection": "u6-s2",
        "diff": 1
      },
      {
        "q": "Metastatic calcification in guinea pigs is characterized by widespread calcium mineralization of heart, aorta, and kidneys, often exacerbated by:",
        "o": [
          "High dietary phosphorus and calcium with deficient magnesium, or excess Vitamin D",
          "Complete deficiency of dietary calcium",
          "High dietary protein only",
          "Inactivity"
        ],
        "a": 0,
        "e": "Imbalanced Ca:P ratio or excessive Vitamin D induces extensive soft-tissue mineral deposition in aorta, stomach, and renal tubules.",
        "topicId": "u6-t2",
        "subSection": "u6-s2",
        "diff": 2
      },
      {
        "q": "Canine Distemper Virus (CDV) infection in wild carnivores (lions, tigers, African wild dogs) produces:",
        "o": [
          "Fatal encephalomyelitis, bronchointerstitial pneumonia, and hyperkeratosis of footpads",
          "Hemorrhagic enteritis strictly restricted to colon",
          "Primary renal amyloidosis",
          "Benign skin papillomas"
        ],
        "a": 0,
        "e": "CDV (Morbillivirus) crosses host boundaries to large felids and canids, causing fatal bronchointerstitial pneumonia, demyelinating encephalitis, and high mortality.",
        "topicId": "u6-t3",
        "subSection": "u6-s3",
        "diff": 1
      },
      {
        "q": "Anthrax in free-ranging wildlife (elephants, rhinos, deer) is characterized at post-mortem by:",
        "o": [
          "Failure of rigor mortis, dark unclotted blood oozing from natural orifices, and extreme splenomegaly",
          "Firm pale rigor mortis with rapid organ calcification",
          "Extensive pericardial exudate without splenomegaly",
          "Caseous necrosis of cerebral hemispheres"
        ],
        "a": 0,
        "e": "Bacillus anthracis toxins damage vascular endothelium and inhibit coagulation, causing unclotted tarry blood, absence of rigor, and pulpy enlarged spleen.",
        "topicId": "u6-t3",
        "subSection": "u6-s3",
        "diff": 1
      },
      {
        "q": "Why is post-mortem opening of a wild animal carcass suspected of Anthrax strictly prohibited?",
        "o": [
          "Vegetative bacilli sporulate on exposure to atmospheric oxygen, forming highly resistant spores that contaminate soil for decades",
          "It causes immediate aerosol explosion of anthrax gas",
          "The meat decomposes too fast for sampling",
          "It attracts wild scavengers"
        ],
        "a": 0,
        "e": "Inside the unopened carcass, vegetative cells die due to putrefaction; atmospheric oxygen exposure triggers sporulation into long-surviving spores.",
        "topicId": "u6-t3",
        "subSection": "u6-s3",
        "diff": 1
      },
      {
        "q": "Bovine Tuberculosis in free-ranging wildlife (e.g., African buffalo, spotted hyenas) is caused by:",
        "o": [
          "Mycobacterium bovis",
          "Mycobacterium avium",
          "Mycobacterium lepraemurium",
          "Mycobacterium microti"
        ],
        "a": 0,
        "e": "Mycobacterium bovis produces classic chronic granulomatous lesions (tubercles with caseation and Langhans giant cells) in lungs and retropharyngeal lymph nodes.",
        "topicId": "u6-t3",
        "subSection": "u6-s3",
        "diff": 1
      },
      {
        "q": "Kyasanur Forest Disease (KFD / Monkey disease) in India is a tick-borne flavivirus infection causing high mortality in:",
        "o": [
          "Black-faced langurs (Semnopithecus entellus) and bonnet macaques (Macaca radiata)",
          "Wild tigers and leopards",
          "Indian wild pigs",
          "Nilgai antelopes"
        ],
        "a": 0,
        "e": "KFD is transmitted by Haemaphysalis spinigera ticks, causing severe hemorrhagic fever and fatal visceral hemorrhages in langurs and bonnet macaques.",
        "topicId": "u6-t3",
        "subSection": "u6-s3",
        "diff": 2
      },
      {
        "q": "Elephant Endotheliotropic Herpesvirus (EEHV) causes high mortality in young Asian elephants (Elephas maximus) primarily by:",
        "o": [
          "Widespread capillary endothelial destruction leading to lethal acute hemorrhagic diathesis and myocardial failure",
          "Severe proliferative pulmonary neoplasia",
          "Progressive cerebral demyelination over years",
          "Stricture of the digestive tract"
        ],
        "a": 0,
        "e": "EEHV infects endothelial cells of microvessels, causing sudden extensive internal hemorrhage, cyanotic swollen tongue, and death within 24-48 hours.",
        "topicId": "u6-t3",
        "subSection": "u6-s3",
        "diff": 2
      },
      {
        "q": "Avian Botulism (Type C) causes massive mortality in wild aquatic birds ('limberneck') via which mechanism?",
        "o": [
          "Ingestion of Clostridium botulinum type C neurotoxin blocking acetylcholine release at neuromuscular junctions, causing flaccid paralysis",
          "Endotoxin-induced septicemic shock",
          "Direct enterocyte lysis in cecum",
          "Primary fungal mycelial colonization of syrinx"
        ],
        "a": 0,
        "e": "Botulinum toxin blocks presynaptic acetylcholine release, causing progressive flaccid paralysis of wings, legs, and neck ('limberneck'), leading to drowning.",
        "topicId": "u6-t3",
        "subSection": "u6-s3",
        "diff": 1
      },
      {
        "q": "Rabies virus in wildlife reservoir hosts (e.g., foxes, raccoons, skunks, bats) travels centripetally to the CNS via:",
        "o": [
          "Retrograde axoplasmic transport along peripheral motor and sensory nerves",
          "Hematogenous spread in erythrocytes",
          "Lymphatic drainage into thoracic duct",
          "Direct migration through peritoneal cavity"
        ],
        "a": 0,
        "e": "Rabies virus binds nicotinic acetylcholine receptors at neuromuscular junctions and is transported retrograde along axoplasm to the spinal cord and brain.",
        "topicId": "u6-t3",
        "subSection": "u6-s3",
        "diff": 1
      },
      {
        "q": "Pathognomonic histopathological lesions of Rabies in wildlife brain are:",
        "o": [
          "Negri bodies (eosinophilic intracytoplasmic inclusions) in Purkinje cells of cerebellum and pyramidal neurons of Ammon's horn",
          "Cowdry type A intranuclear inclusions in astrocytes",
          "Marchal bodies in ependymal lining",
          "Bollinger bodies in choroid plexus"
        ],
        "a": 0,
        "e": "Negri bodies are sharp, eosinophilic, round-to-oval intracytoplasmic inclusions containing viral nucleocapsids, prominently found in Purkinje and hippocampal neurons.",
        "topicId": "u6-t3",
        "subSection": "u6-s3",
        "diff": 1
      },
      {
        "q": "Foot and Mouth Disease (FMD) in wild cervids (spotted deer, sambar) is characterized clinically and pathologically by:",
        "o": [
          "Vesicles and erosions on tongue, dental pad, interdigital cleft, and coronary bands, with 'tiger heart' in young fawns",
          "Caseous nodules across liver",
          "Nodular pulmonary adenocarcinoma",
          "Severe purulent mastitis only"
        ],
        "a": 0,
        "e": "Aphthovirus produces epithelial vesicles in oral and hoof mucosa; in young wild ungulates, acute myocarditis produces yellow-striped myocardial necrosis ('tiger heart').",
        "topicId": "u6-t3",
        "subSection": "u6-s3",
        "diff": 2
      },
      {
        "q": "Duck Viral Enteritis (Duck Plague) in wild waterfowl is caused by an Anatid herpesvirus that produces:",
        "o": [
          "Hemorrhagic lesions throughout the digestive tract, annular bands in intestine, and cloacal diptheritic plaques",
          "Aplastic anemia without digestive lesions",
          "Encephalomyelitis without mucosal lesions",
          "Cutaneous warts on beak"
        ],
        "a": 0,
        "e": "Duck plague induces vascular endothelial injury, producing bloody intestine, annular necrotic rings, and cheese-like diphtheritic cloacal plaques.",
        "topicId": "u6-t3",
        "subSection": "u6-s3",
        "diff": 2
      },
      {
        "q": "White-Nose Syndrome in hibernating wild bats is caused by which cold-loving (psychrophilic) fungus?",
        "o": [
          "Pseudogymnoascus destructans",
          "Aspergillus fumigatus",
          "Histoplasma capsulatum",
          "Cryptococcus neoformans"
        ],
        "a": 0,
        "e": "Pseudogymnoascus destructans invades the skin and wing membranes of hibernating bats, causing wing damage, abnormal winter arousal, and starvation.",
        "topicId": "u6-t3",
        "subSection": "u6-s3",
        "diff": 2
      },
      {
        "q": "Chytridiomycosis, responsible for global amphibian population collapses, is caused by:",
        "o": [
          "Batrachochytrium dendrobatidis",
          "Saprolegnia parasitica",
          "Ichthyophthirius multifiliis",
          "Ranavirus"
        ],
        "a": 0,
        "e": "Batrachochytrium dendrobatidis infects keratinized epidermis of frogs and salamanders, impairing cutaneous osmoregulation and causing cardiac arrest.",
        "topicId": "u6-t3",
        "subSection": "u6-s3",
        "diff": 2
      },
      {
        "q": "Rinderpest and Peste des petits ruminants (PPR) in wild ungulates produce:",
        "o": [
          "Necrotic stomatitis, 'zebra striping' in colon/rectum, and severe lymphoid depletion",
          "Severe muscular dystrophy only",
          "Fibropapillomatosis of antler velvet",
          "Aplastic bone marrow with jaundice"
        ],
        "a": 0,
        "e": "Morbilliviruses target mucosal epithelium and lymphoid tissue, causing linear hemorrhagic erosions in the colon ('zebra stripes') and lymphoid destruction.",
        "topicId": "u6-t3",
        "subSection": "u6-s3",
        "diff": 2
      },
      {
        "q": "Chronic Wasting Disease (CWD) in free-ranging cervids (mule deer, elk) is classified as a:",
        "o": [
          "Transmissible Spongiform Encephalopathy (prion disease)",
          "Paramyxoviral infection",
          "Chlamydial disease",
          "Spirochetal infection"
        ],
        "a": 0,
        "e": "CWD is a fatal prion disease producing spongiform encephalopathy, neuronal vacuolation, emaciation, and behavioral changes in cervids.",
        "topicId": "u6-t3",
        "subSection": "u6-s3",
        "diff": 1
      },
      {
        "q": "Which wild rodent species serves as the primary sylvatic reservoir for Yersinia pestis (Plague)?",
        "o": [
          "Prairie dogs, ground squirrels, and wild gerbils",
          "Fruit bats only",
          "Spotted deer",
          "Tree shrews"
        ],
        "a": 0,
        "e": "Wild burrowing rodents (prairie dogs, ground squirrels) maintain sylvatic plague, transmitted by Xenopsylla fleas.",
        "topicId": "u6-t3",
        "subSection": "u6-s3",
        "diff": 2
      },
      {
        "q": "Avian Cholera (Pasteurella multocida serotype 1) causes catastrophic mass die-offs in wild waterfowl characterized post-mortem by:",
        "o": [
          "Acute septicemia with petechiae on epicardium, gizzard fat, and pinpoint white necrotic foci on congested liver",
          "Marked hypertrophy of proventricular muscle",
          "Aplastic bone marrow without hemorrhages",
          "Ossification of lung parenchyma"
        ],
        "a": 0,
        "e": "Avian cholera in wild wetlands causes sudden death with severe vascular damage, epicardial petechiae, and multifocal liver necrosis.",
        "topicId": "u6-t3",
        "subSection": "u6-s3",
        "diff": 2
      },
      {
        "q": "Ranavirus infection in wild amphibians and reptiles characteristically produces:",
        "o": [
          "Systemic hemorrhages, edema, and multifocal necrosis of liver, kidney, and spleen with intracytoplasmic viral inclusions",
          "Purely localized cutaneous papillomas",
          "Lens cataracts without organ lesions",
          "Hypercalcemic nephrosis"
        ],
        "a": 0,
        "e": "Ranavirus (family Iridoviridae) causes acute systemic hemorrhagic disease and massive mortality events in larval amphibians.",
        "topicId": "u6-t3",
        "subSection": "u6-s3",
        "diff": 2
      },
      {
        "q": "Fibropapillomatosis in wild marine green turtles (Chelonia mydas) is associated with which pathogen?",
        "o": [
          "Chelonid alphaherpesvirus 5 (ChHV5)",
          "Papillomavirus type 1",
          "Poxvirus",
          "Adenovirus"
        ],
        "a": 0,
        "e": "ChHV5 is strongly associated with benign fibroepithelial tumors (fibropapillomas) on skin, eyes, and internal organs of marine turtles.",
        "topicId": "u6-t3",
        "subSection": "u6-s3",
        "diff": 2
      },
      {
        "q": "Malignant Catarrhal Fever (MCF) in wild and domestic ruminants is pathologically distinguished by:",
        "o": [
          "Generalized necrotizing lymphocytic vasculitis, perivascular lymphoid cuffing, and corneal opacity ('blue eye')",
          "Severe suppurative bronchopneumonia without vasculitis",
          "Spongiform encephalopathy without inflammation",
          "Biliary carcinoma"
        ],
        "a": 0,
        "e": "Alcelaphine gammaherpesvirus 1 (wildebeest-associated) or Ovine herpesvirus 2 induces widespread T-lymphocyte proliferation and destructive necrotizing vasculitis.",
        "topicId": "u6-t3",
        "subSection": "u6-s3",
        "diff": 2
      },
      {
        "q": "Feline Panleukopenia / Parvovirus in wild felids (tigers, leopards) produces which hallmark autopsy lesions?",
        "o": [
          "Panleukopenia, aplastic bone marrow, and severe necrotizing enteritis with shortening and blunting of intestinal villi",
          "Focal necrotizing hepatitis only",
          "Purely pulmonary emphysema",
          "Hard fibromas on footpads"
        ],
        "a": 0,
        "e": "Parvovirus infects rapidly dividing crypt enterocytes and bone marrow precursors, leading to villous collapse, hemorrhagic enteritis, and profound leukopenia.",
        "topicId": "u6-t3",
        "subSection": "u6-s3",
        "diff": 2
      },
      {
        "q": "Sylvatic rabies cycles in North American wildlife are primarily maintained by which major carnivore hosts?",
        "o": [
          "Raccoons, skunks, and red/gray foxes",
          "White-tailed deer and moose",
          "Beavers and muskrats",
          "Bison and pronghorn"
        ],
        "a": 0,
        "e": "Raccoons, striped skunks, and red/gray foxes maintain geographic-specific terrestrial rabies virus variants.",
        "topicId": "u6-t3",
        "subSection": "u6-s3",
        "diff": 1
      },
      {
        "q": "Capture Myopathy (Exertional Rhabdomyolysis / Stress myopathy) in captured wild ungulates (antelopes, deer) is initiated by:",
        "o": [
          "Severe physical exertion and terror during chemical or physical restraint triggering massive lactic acidosis and muscle ischemia",
          "High dietary protein toxicity",
          "Organophosphate poison exposure",
          "Primary genetic glycogen storage disease"
        ],
        "a": 0,
        "e": "Intense fear, panic, and chase lead to sympathetic hyperactivity, extreme muscular anaerobic glycolysis, severe lactic acidosis, and extensive muscle necrosis.",
        "topicId": "u6-t4",
        "subSection": "u6-s4",
        "diff": 1
      },
      {
        "q": "Grossly, skeletal muscles of a wild animal dying of acute Capture Myopathy appear:",
        "o": [
          "Pale, dry, friable, cooked/boiled in appearance with white streaks of Zenker's degeneration",
          "Deep black, liquefied, and gaseous",
          "Calcified into hard bony plates",
          "Normal in color with no macroscopic lesions"
        ],
        "a": 0,
        "e": "Severe coagulative necrosis (Zenker's necrosis) of major thigh and back muscles produces a pale, parboiled fish-meat appearance.",
        "topicId": "u6-t4",
        "subSection": "u6-s4",
        "diff": 1
      },
      {
        "q": "The primary cause of renal failure in wildlife surviving acute capture myopathy is:",
        "o": [
          "Myoglobinuric nephrosis (myoglobin casts causing acute tubular necrosis)",
          "Immune complex glomerulonephritis",
          "Renal amyloidosis",
          "Hydronephrosis due to stone formation"
        ],
        "a": 0,
        "e": "Massive release of muscle myoglobin into circulation leads to myoglobinuria; myoglobin precipitates in distal tubules causing toxic acute tubular necrosis.",
        "topicId": "u6-t4",
        "subSection": "u6-s4",
        "diff": 2
      },
      {
        "q": "Trypanosoma evansi infection (Surra) in wild tigers and captive leopards causes:",
        "o": [
          "Severe progressive anemia, intermittent fever, facial edema, emaciation, and terminal nervous signs",
          "Acute proliferative papillomatosis",
          "Dry gangrene of the ear tip only",
          "Selective bone marrow hyperplasia without anemia"
        ],
        "a": 0,
        "e": "T. evansi causes recurrent parasitemia, erythrophagocytosis, progressive extravascular hemolytic anemia, and severe emaciation in wild carnivores.",
        "topicId": "u6-t4",
        "subSection": "u6-s4",
        "diff": 2
      },
      {
        "q": "Theileriosis in wild African buffalo (Syncerus caffer) is caused by Theileria parva and is distinguished by:",
        "o": [
          "Corridor disease: severe pulmonary edema, froth in airways, and widespread lymphoid hyperplasia without high parasitemia",
          "Chronic cutaneous nodules",
          "Severe encephalomalacia without lung changes",
          "Hepatic cirrhosis"
        ],
        "a": 0,
        "e": "In African buffalo, T. parva causes asymptomatic carrier states, but transmits to domestic cattle or naive wildlife causing fatal lymphoproliferation and asphyxiating lung edema.",
        "topicId": "u6-t4",
        "subSection": "u6-s4",
        "diff": 2
      },
      {
        "q": "Hydatid disease in wild herbivores and carnivores involves which parasite combination?",
        "o": [
          "Intermediate metacestode cyst (Echinococcus granulosus) in wild herbivores, adult tapeworm in wild canids",
          "Adult tapeworm in herbivores, cyst in wild felids",
          "Free-living water cercariae",
          "Direct fecal-oral nematode cycle"
        ],
        "a": 0,
        "e": "Wild herbivores (deer, zebras) act as intermediate hosts carrying large fluid-filled hydatid cysts in lungs/liver; wild canids (wolves, jackals) harbor adult Echinococcus tapeworms.",
        "topicId": "u6-t4",
        "subSection": "u6-s4",
        "diff": 1
      },
      {
        "q": "Coenurosis ('Gid / Sturdy') in wild sheep and antelopes is caused by the larval stage of:",
        "o": [
          "Taenia multiceps (Coenurus cerebralis)",
          "Taenia hydatigena (Cysticercus tenuicollis)",
          "Taenia ovis (Cysticercus ovis)",
          "Taenia solium (Cysticercus cellulosae)"
        ],
        "a": 0,
        "e": "Coenurus cerebralis forms large multi-scolex cysts in the brain or spinal cord, causing pressure atrophy, skull bone thinning, circling, and blindness.",
        "topicId": "u6-t4",
        "subSection": "u6-s4",
        "diff": 1
      },
      {
        "q": "The catastrophic decline of Gyps vultures in South Asia was caused by renal failure and visceral gout induced by:",
        "o": [
          "Diclofenac (non-steroidal anti-inflammatory drug residues in livestock carcasses)",
          "Organophosphate insecticide spraying",
          "Lead ammunition ingestion",
          "Severe Vitamin A deficiency"
        ],
        "a": 0,
        "e": "Diclofenac residue in livestock carcasses selectively inhibits renal uric acid transport and prostaglandins in Gyps vultures, causing fatal visceral gout and acute renal failure.",
        "topicId": "u6-t4",
        "subSection": "u6-s4",
        "diff": 1
      },
      {
        "q": "Gross lesions in vultures dying of Diclofenac toxicity show:",
        "o": [
          "Extensive white chalk-like coating of uric acid crystals across visceral organs (pericardium, liver, spleen)",
          "Massive pulmonary hemorrhages without urates",
          "Severe osteosarcoma of wing bones",
          "Aplastic bone marrow anemia"
        ],
        "a": 0,
        "e": "Severe hyperuricemia causes monosodium urate precipitation on pericardial, hepatic, and serosal membranes, identical to visceral gout.",
        "topicId": "u6-t4",
        "subSection": "u6-s4",
        "diff": 1
      },
      {
        "q": "Lead poisoning in scavenging raptors (eagles, condors) and waterfowl results from:",
        "o": [
          "Ingestion of spent lead ammunition fragments in gut piles or lead shot in wetlands",
          "Direct cutaneous absorption from soil",
          "Genetic hyperabsorption of dietary metals",
          "Metabolic bone calcium displacement only"
        ],
        "a": 0,
        "e": "Lead shot/ammunition fragments dissolve in the acidic stomach/gizzard, leading to high blood lead, demyelination, proventricular impaction, and green bile staining.",
        "topicId": "u6-t4",
        "subSection": "u6-s4",
        "diff": 1
      },
      {
        "q": "Post-mortem finding of bright green bile staining of the gizzard lining, proventriculus, and vent in waterfowl is characteristic of:",
        "o": [
          "Lead toxicity",
          "Aflatoxicosis",
          "Vitamin E deficiency",
          "Botulism type C"
        ],
        "a": 0,
        "e": "Lead-induced autonomic neuropathy impairs gastrointestinal motility, causing severe biliary reflux, gall bladder distension, and dark green staining of gizzard and cloaca.",
        "topicId": "u6-t4",
        "subSection": "u6-s4",
        "diff": 2
      },
      {
        "q": "Steatitis (Yellow Fat Disease / Pansteatitis) in wild captive crocodilians and felids is caused by:",
        "o": [
          "Feeding rancid fish or poultry diets high in polyunsaturated fatty acids deficient in Vitamin E",
          "Severe chronic bacterial septicemia",
          "Excess dietary Vitamin C",
          "Biliary obstruction from flukes"
        ],
        "a": 0,
        "e": "Oxidation of polyunsaturated fats without sufficient antioxidant Vitamin E causes adipose tissue peroxidation, ceroid pigment accumulation, and firm yellow-brown necrotic fat.",
        "topicId": "u6-t4",
        "subSection": "u6-s4",
        "diff": 2
      },
      {
        "q": "Sarcoptic mange in free-ranging wild carnivores (e.g., red foxes, coyotes) is caused by Sarcoptes scabiei and manifests as:",
        "o": [
          "Severe pruritus, diffuse hyperkeratosis, thick grayish-white crusts, alopecia, and emaciation",
          "Non-pruritic localized hair loss on tail only",
          "Benign subcutaneous nodules without crusting",
          "Severe hemorrhagic pneumonia"
        ],
        "a": 0,
        "e": "Mites burrow into the stratum corneum, producing intense hypersensitivity, massive proliferative hyperkeratosis, lichenification, and secondary bacterial pyoderma.",
        "topicId": "u6-t4",
        "subSection": "u6-s4",
        "diff": 1
      },
      {
        "q": "Snakebite by a Russell's viper (Daboia russelii) in rescued wild mammals induces death primarily through:",
        "o": [
          "Procoagulant venom enzymes triggering disseminated intravascular coagulation (DIC), severe consumptive coagulopathy, and renal failure",
          "Pure presynaptic neuromuscular blockade without bleeding",
          "Acute hyperthermia from hypothalamic necrosis",
          "Cardiac arrest within 30 seconds"
        ],
        "a": 0,
        "e": "Viper venom activates Factor X and prothrombin, producing widespread intravascular fibrin deposition, fatal microthrombosis, consumption coagulopathy, and acute cortical necrosis.",
        "topicId": "u6-t4",
        "subSection": "u6-s4",
        "diff": 2
      },
      {
        "q": "Elapid snake envenomation (e.g., Indian Cobra, Krait) primarily causes pathology through:",
        "o": [
          "Post-synaptic or pre-synaptic neurotoxins blocking neuromuscular transmission, causing flaccid paralysis and respiratory failure",
          "Severe local tissue necrosis and gangrene only",
          "Massive hemorrhagic ascites",
          "Primary splenic rupture"
        ],
        "a": 0,
        "e": "Elapid venoms contain potent neurotoxins that bind acetylcholine receptors, causing progressive ascending paralysis of skeletal muscles and fatal asphyxia.",
        "topicId": "u6-t4",
        "subSection": "u6-s4",
        "diff": 2
      },
      {
        "q": "Organophosphate and carbamate pesticide poisoning in wild birds causes death through:",
        "o": [
          "Inhibition of acetylcholinesterase, leading to acetylcholine accumulation, muscarinic/nicotinic overstimulation, and respiratory failure",
          "Inhibition of vitamin K epoxide reductase",
          "Direct destruction of hepatic cytochrome P450",
          "Coagulative necrosis of pancreas"
        ],
        "a": 0,
        "e": "Cholinesterase inhibition leads to excessive parasympathetic discharge: salivation, lacrimation, bronchial constriction, muscle fasciculations, and asphyxiation.",
        "topicId": "u6-t4",
        "subSection": "u6-s4",
        "diff": 1
      },
      {
        "q": "Anticoagulant rodenticide poisoning (e.g., Brodifacoum) in non-target predatory raptors and carnivores produces:",
        "o": [
          "Inhibition of Vitamin K epoxide reductase, leading to fatal systemic hemorrhage, hemothorax, and hematomas",
          "Severe acute pancreatitis with fat necrosis",
          "Generalized osteosclerosis",
          "Primary brain demyelination"
        ],
        "a": 0,
        "e": "Second-generation anticoagulant rodenticides block vitamin K recycling, depleting clotting factors II, VII, IX, and X, leading to fatal massive internal bleeding.",
        "topicId": "u6-t4",
        "subSection": "u6-s4",
        "diff": 1
      },
      {
        "q": "Metabolic Bone Disease (Nutritional Secondary Hyperparathyroidism) in captive wild reptiles is triggered by:",
        "o": [
          "Low dietary calcium, excessive phosphorus, or deficiency of UVB illumination required for Vitamin D3 synthesis",
          "Excess dietary Vitamin D3 supplementation",
          "Primary parathyroid adenoma",
          "Severe hypernatremia"
        ],
        "a": 0,
        "e": "Lack of UVB light (290-320 nm) prevents cutaneous cholecalciferol synthesis, resulting in hypocalcemia, secondary parathyroid hyperplasia, fibrous osteodystrophy ('rubber jaw').",
        "topicId": "u6-t4",
        "subSection": "u6-s4",
        "diff": 1
      },
      {
        "q": "Pneumonic linguatulosis in wild carnivores and reptiles is caused by pentastomes, which are:",
        "o": [
          "Worm-like blood-sucking crustacean-related arthropods (tongue worms) residing in respiratory air passages",
          "True ciliated protozoa",
          "Obligate fungal mycelia",
          "Trematode flatworms of bile ducts"
        ],
        "a": 0,
        "e": "Pentastomids (e.g., Linguatula serrata) are highly adapted parasitic arthropods that attach via hooks inside the nasal cavity, trachea, and lungs.",
        "topicId": "u6-t4",
        "subSection": "u6-s4",
        "diff": 2
      },
      {
        "q": "Sparganosis in wild carnivores and amphibians is caused by the plerocercoid larvae of which cestode genus?",
        "o": [
          "Spirometra",
          "Diphyllobothrium",
          "Moniezia",
          "Dipylidium"
        ],
        "a": 0,
        "e": "Plerocercoid larvae (spargana) of Spirometra species migrate through subcutaneous tissue, muscles, and viscera, causing eosinophilic granulomas.",
        "topicId": "u6-t4",
        "subSection": "u6-s4",
        "diff": 2
      },
      {
        "q": "Elephant pox is caused by an Orthopoxvirus that causes which lesions in captive and wild Asian elephants?",
        "o": [
          "Cutaneous papules and ulcers on trunk, face, feet, and oral mucosa",
          "Severe encephalomalacia",
          "Purely pulmonary caseation",
          "Loss of tusk enamel without skin changes"
        ],
        "a": 0,
        "e": "Cowpox-related orthopoxviruses produce painful cutaneous vesicles, pustules, and deep necrotizing ulcers on the trunk and feet of elephants.",
        "topicId": "u6-t4",
        "subSection": "u6-s4",
        "diff": 2
      },
      {
        "q": "Severe electrocution pathology in wild monkeys and elephants traversing power lines includes:",
        "o": [
          "Current entry and exit burn marks, deep tissue charring, vascular thrombosis, and catastrophic cardiac ventricular fibrillation",
          "Generalized amyloidosis",
          "Acute hepatic lipidosis",
          "Diffuse pulmonary fibrosis without burns"
        ],
        "a": 0,
        "e": "High-voltage current passage generates Joule heat resulting in severe electrical entry/exit burns, arc burns, coagulation necrosis of muscles, and fatal arrhythmia.",
        "topicId": "u6-t4",
        "subSection": "u6-s4",
        "diff": 1
      }
    ],
    "tf": [
      {
        "q": "Clostridium piliforme, the causative agent of Tyzzer's disease, is an obligate intracellular bacterium that stains poorly with ordinary H&E stain.",
        "a": true,
        "e": "C. piliforme cannot be cultured on cell-free media and requires silver (Warthin-Starry) or Giemsa staining to be seen in necrotic cells.",
        "topicId": "u6-t1",
        "subSection": "u6-s1",
        "diff": 1
      },
      {
        "q": "The pathological triad of Tyzzer's disease includes focal necrotizing hepatitis, typhlocolitis, and myocarditis.",
        "a": true,
        "e": "These three hallmark lesions define acute Tyzzer's disease across laboratory rodents.",
        "topicId": "u6-t1",
        "subSection": "u6-s1",
        "diff": 1
      },
      {
        "q": "Marchal bodies in mice infected with Ectromelia virus (Mousepox) are intranuclear basophilic inclusion bodies.",
        "a": false,
        "e": "Marchal bodies are prominent intracytoplasmic, acidophilic (eosinophilic) type A inclusion bodies found in epithelial cells.",
        "topicId": "u6-t1",
        "subSection": "u6-s1",
        "diff": 2
      },
      {
        "q": "Sialodacryoadenitis virus (SDAV) in rats produces swelling of salivary glands and porphyrin-pigmented crusts around the eyes ('red tears').",
        "a": true,
        "e": "SDAV targets submandibular and Harderian glands, causing chromodacryorrhea ('red tears') rich in porphyrin pigment.",
        "topicId": "u6-t1",
        "subSection": "u6-s1",
        "diff": 1
      },
      {
        "q": "Mycoplasma pulmonis causes severe suppurative bronchopneumonia, bronchiectasis ('cobblestone lung'), and purulent otitis media in rats.",
        "a": true,
        "e": "Chronic Murine Respiratory Mycoplasmosis produces extensive purulent airway dilation resulting in a nodular cobblestone appearance.",
        "topicId": "u6-t1",
        "subSection": "u6-s1",
        "diff": 1
      },
      {
        "q": "Lymphocytic Choriomeningitis Virus (LCMV) in mice has no zoonotic potential for humans.",
        "a": false,
        "e": "LCMV is a dangerous zoonotic arenavirus capable of causing aseptic meningitis and severe flu-like illness in humans.",
        "topicId": "u6-t1",
        "subSection": "u6-s1",
        "diff": 1
      },
      {
        "q": "Citrobacter rodentium causes severe mucosal hyperplasia and thickening of the descending colon in laboratory mice.",
        "a": true,
        "e": "C. rodentium induces transmissible murine colonic hyperplasia via attaching and effacing epithelial lesions.",
        "topicId": "u6-t1",
        "subSection": "u6-s1",
        "diff": 2
      },
      {
        "q": "Syphacia obvelata eggs can be readily diagnosed by microscopic examination of a perianal cellophane tape impression.",
        "a": true,
        "e": "Female Syphacia pinworms migrate to perianal skin to deposit eggs, which adhere to clear tape for easy diagnosis.",
        "topicId": "u6-t1",
        "subSection": "u6-s1",
        "diff": 1
      },
      {
        "q": "Wet tail in Syrian hamsters is caused by Lawsonia intracellularis invading crypt enterocytes of the ileum.",
        "a": true,
        "e": "Lawsonia intracellularis produces proliferative ileitis with thickened, corrugated ileal wall and watery diarrhea in hamsters.",
        "topicId": "u6-t1",
        "subSection": "u6-s1",
        "diff": 1
      },
      {
        "q": "Ringtail in suckling laboratory rats is caused by high environmental relative humidity (>80%).",
        "a": false,
        "e": "Ringtail is caused by low relative humidity (<40%), which dehydrates tail skin causing annular ischemic necrosis and sloughing.",
        "topicId": "u6-t1",
        "subSection": "u6-s1",
        "diff": 1
      },
      {
        "q": "Spontaneous mammary fibroadenomas in female Sprague-Dawley rats are malignant tumors that rapidly metastasize to the liver.",
        "a": false,
        "e": "Rat mammary fibroadenomas are benign, expansive, encapsulated tumors that do not metastasize, although they can grow very large.",
        "topicId": "u6-t1",
        "subSection": "u6-s1",
        "diff": 2
      },
      {
        "q": "Rabbit Hemorrhagic Disease (RHD) virus causes acute massive hepatic necrosis and severe disseminated intravascular coagulation (DIC).",
        "a": true,
        "e": "RHD is a calicivirus that destroys hepatocytes, leading to consumptive coagulopathy, pulmonary hemorrhages, and epistaxis.",
        "topicId": "u6-t2",
        "subSection": "u6-s2",
        "diff": 1
      },
      {
        "q": "Myxoma virus produces mucinous subcutaneous gelatinous swellings and severe facial edema ('lion head') in European rabbits.",
        "a": true,
        "e": "Leporipoxvirus infection triggers extensive proliferation of myxoid mesenchymal tissue in eyelids, ears, and genitalia.",
        "topicId": "u6-t2",
        "subSection": "u6-s2",
        "diff": 1
      },
      {
        "q": "Snuffles in rabbits is caused by Bordetella bronchiseptica alone.",
        "a": false,
        "e": "Snuffles is primarily caused by Pasteurella multocida, producing chronic purulent rhinitis, sinusitis, and pleuropneumonia.",
        "topicId": "u6-t2",
        "subSection": "u6-s2",
        "diff": 1
      },
      {
        "q": "Eimeria stiedae infects the bile duct epithelium of rabbits, causing adenomatous papillary hyperplasia and white liver nodules.",
        "a": true,
        "e": "Hepatic coccidiosis in rabbits is localized within biliary duct epithelium, forming dilated cords and yellowish-white nodules.",
        "topicId": "u6-t2",
        "subSection": "u6-s2",
        "diff": 1
      },
      {
        "q": "Encephalitozoon cuniculi spores stain strongly Gram-positive and acid-fast positive on modified Ziehl-Neelsen staining.",
        "a": true,
        "e": "Microsporidian spores of E. cuniculi are characteristic small, oval Gram-positive and carbolfuchsin-retaining structures.",
        "topicId": "u6-t2",
        "subSection": "u6-s2",
        "diff": 2
      },
      {
        "q": "Guinea pigs synthesize their own Vitamin C in the liver from glucose.",
        "a": false,
        "e": "Guinea pigs lack the active enzyme L-gulonolactone oxidase and cannot synthesize ascorbic acid, requiring dietary vitamin C.",
        "topicId": "u6-t2",
        "subSection": "u6-s2",
        "diff": 1
      },
      {
        "q": "Scurvy in guinea pigs causes periarticular hemorrhages, loose incisors, and disorganization of costochondral junctions.",
        "a": true,
        "e": "Defective collagen cross-linking weakens capillary walls and connective tissue, resulting in massive joint hemorrhages.",
        "topicId": "u6-t2",
        "subSection": "u6-s2",
        "diff": 1
      },
      {
        "q": "Bordetella bronchiseptica carried asymptomatically by rabbits can cause fatal pneumonia if transmitted to guinea pigs.",
        "a": true,
        "e": "Co-housing rabbits and guinea pigs is contraindicated because rabbit Bordetella triggers fatal epizootic pneumonia in guinea pigs.",
        "topicId": "u6-t2",
        "subSection": "u6-s2",
        "diff": 1
      },
      {
        "q": "Uterine adenocarcinoma is the most prevalent spontaneous neoplasm in intact female domestic rabbits over 3-4 years old.",
        "a": true,
        "e": "Endometrial adenocarcinoma occurs in up to 60-80% of unspayed doe rabbits past 4 years of age.",
        "topicId": "u6-t2",
        "subSection": "u6-s2",
        "diff": 1
      },
      {
        "q": "Administration of oral penicillin or ampicillin to rabbits and guinea pigs is completely harmless.",
        "a": false,
        "e": "Gram-positive antibiotics wipe out normal intestinal flora, triggering fatal clostridial enterotoxemia (dysbiosis).",
        "topicId": "u6-t2",
        "subSection": "u6-s2",
        "diff": 1
      },
      {
        "q": "Psoroptes cuniculi ear mites cause deep burrowing tracts throughout the cranial bones of rabbits.",
        "a": false,
        "e": "Psoroptes cuniculi is a non-burrowing mite that feeds on epidermal scales in the external auditory meatus, creating heavy crusts.",
        "topicId": "u6-t2",
        "subSection": "u6-s2",
        "diff": 1
      },
      {
        "q": "Canine Distemper Virus (CDV) can cause fatal pneumonia and encephalitis in wild non-canid carnivores like African lions and tigers.",
        "a": true,
        "e": "CDV readily crosses species barriers, causing high mortality epizootics in wild felids with severe neurological and pulmonary signs.",
        "topicId": "u6-t3",
        "subSection": "u6-s3",
        "diff": 1
      },
      {
        "q": "Necropsy of a wild animal suspected of Anthrax should be performed immediately in the open field to confirm diagnosis.",
        "a": false,
        "e": "Opening an anthrax carcass exposes vegetative cells to atmospheric oxygen, prompting sporulation and long-term soil contamination.",
        "topicId": "u6-t3",
        "subSection": "u6-s3",
        "diff": 1
      },
      {
        "q": "Kyasanur Forest Disease (KFD) is a mosquito-borne alphavirus causing disease strictly in cattle.",
        "a": false,
        "e": "KFD is a tick-borne Flavivirus (transmitted by Haemaphysalis spinigera) that causes fatal hemorrhagic fever in wild monkeys.",
        "topicId": "u6-t3",
        "subSection": "u6-s3",
        "diff": 2
      },
      {
        "q": "Elephant Endotheliotropic Herpesvirus (EEHV) kills young Asian elephants by destroying microvascular endothelial cells causing massive hemorrhages.",
        "a": true,
        "e": "EEHV targets microvascular endothelium, producing catastrophic pan-endothelial lysis, facial edema, cyanotic tongue, and sudden death.",
        "topicId": "u6-t3",
        "subSection": "u6-s3",
        "diff": 2
      },
      {
        "q": "Avian botulism (Type C) causes flaccid paralysis in wild waterfowl by blocking acetylcholine release at motor endplates.",
        "a": true,
        "e": "Botulinum neurotoxin cleaves SNARE proteins at presynaptic terminals, causing loss of muscle tone and drowning ('limberneck').",
        "topicId": "u6-t3",
        "subSection": "u6-s3",
        "diff": 1
      },
      {
        "q": "Rabies virus produces Negri bodies, which are eosinophilic intracytoplasmic inclusions found in neurons.",
        "a": true,
        "e": "Negri bodies are diagnostic viral inclusion bodies located within the cytoplasm of Purkinje cells and pyramidal neurons.",
        "topicId": "u6-t3",
        "subSection": "u6-s3",
        "diff": 1
      },
      {
        "q": "Pseudogymnoascus destructans causes White-Nose Syndrome in bats during summer breeding roosts.",
        "a": false,
        "e": "P. destructans is a psychrophilic (cold-tolerant) fungus that infects bats during winter hibernation in cold caves (4-15°C).",
        "topicId": "u6-t3",
        "subSection": "u6-s3",
        "diff": 2
      },
      {
        "q": "Chytridiomycosis in amphibians damages keratinized skin, disrupting cutaneous respiration and electrolyte transport leading to cardiac arrest.",
        "a": true,
        "e": "Batrachochytrium dendrobatidis destroys skin transport mechanisms, causing fatal hypokalemia and cardiac arrest.",
        "topicId": "u6-t3",
        "subSection": "u6-s3",
        "diff": 2
      },
      {
        "q": "Chronic Wasting Disease (CWD) in cervids is caused by an oncogenic retrovirus.",
        "a": false,
        "e": "CWD is a transmissible spongiform encephalopathy (prion disease) caused by misfolded infectious prion protein (PrPSc).",
        "topicId": "u6-t3",
        "subSection": "u6-s3",
        "diff": 1
      },
      {
        "q": "Malignant Catarrhal Fever (MCF) causes necrotizing lymphocytic vasculitis and bilateral corneal opacity ('blue eye') in ungulates.",
        "a": true,
        "e": "MCF is characterized by pan-systemic lymphoproliferative arteritis and marked centrifugal corneal edema.",
        "topicId": "u6-t3",
        "subSection": "u6-s3",
        "diff": 2
      },
      {
        "q": "Duck Viral Enteritis (Duck Plague) is caused by an Avipoxvirus.",
        "a": false,
        "e": "Duck plague is caused by Anatid herpesvirus 1 (family Herpesviridae), producing hemorrhagic enteritis and cloacal plaques.",
        "topicId": "u6-t3",
        "subSection": "u6-s3",
        "diff": 2
      },
      {
        "q": "Capture myopathy in wild ungulates is triggered by intense muscular exertion, panic, and severe lactic acidosis.",
        "a": true,
        "e": "Severe anaerobic glycolysis during chase produces hyperthermia, lactic acidosis, and extensive skeletal/cardiac muscle necrosis.",
        "topicId": "u6-t4",
        "subSection": "u6-s4",
        "diff": 1
      },
      {
        "q": "Skeletal muscles of ungulates dying from capture myopathy display pale parboiled fish-flesh appearance due to Zenker's degeneration.",
        "a": true,
        "e": "Coagulative necrosis of heavy locomotion muscles (gluteal, semimembranosus) gives a cooked pale appearance.",
        "topicId": "u6-t4",
        "subSection": "u6-s4",
        "diff": 1
      },
      {
        "q": "Myoglobin released from necrosed muscle fibers in capture myopathy causes fatal myoglobinuric nephrosis in the kidneys.",
        "a": true,
        "e": "Massive myoglobinuria under acidic conditions precipitates inside renal tubules, causing acute tubular necrosis and renal failure.",
        "topicId": "u6-t4",
        "subSection": "u6-s4",
        "diff": 2
      },
      {
        "q": "Surra in wild tigers is caused by Trypanosoma evansi transmitted mechanically by tabanid horseflies.",
        "a": true,
        "e": "T. evansi produces severe progressive anemia, fever, and wasting, transmitted via bites of tabanid flies.",
        "topicId": "u6-t4",
        "subSection": "u6-s4",
        "diff": 1
      },
      {
        "q": "Coenurus cerebralis cysts in wild sheep brain contain only a single invaginated scolex.",
        "a": false,
        "e": "Coenurus cysts are multi-scolex larval bladders of Taenia multiceps containing dozens of invaginated scolices.",
        "topicId": "u6-t4",
        "subSection": "u6-s4",
        "diff": 2
      },
      {
        "q": "Diclofenac residues in livestock carcasses were the primary cause of acute renal failure and visceral gout in Gyps vultures.",
        "a": true,
        "e": "Diclofenac selectively induces hyperuricemia and visceral gout in Gyps vultures, causing over 99% decline in wild populations.",
        "topicId": "u6-t4",
        "subSection": "u6-s4",
        "diff": 1
      },
      {
        "q": "Lead poisoning in raptors causes bright red staining of the gizzard and proventriculus.",
        "a": false,
        "e": "Lead-induced gastrointestinal atony results in severe bile stasis and dark emerald green staining of the gizzard and feces.",
        "topicId": "u6-t4",
        "subSection": "u6-s4",
        "diff": 2
      },
      {
        "q": "Steatitis (Yellow Fat Disease) in wild carnivores and reptiles is caused by feeding rancid fish high in oxidized polyunsaturated fatty acids lacking Vitamin E.",
        "a": true,
        "e": "Lipid peroxidation leads to ceroid accumulation, inflammation, and firm yellowish-brown discoloration of adipose tissues.",
        "topicId": "u6-t4",
        "subSection": "u6-s4",
        "diff": 2
      },
      {
        "q": "Russell's viper venom causes death predominantly by activating clotting factors, resulting in disseminated intravascular coagulation (DIC).",
        "a": true,
        "e": "Daboia russelii venom is procoagulant, triggering widespread microvascular thrombosis and fatal consumption coagulopathy.",
        "topicId": "u6-t4",
        "subSection": "u6-s4",
        "diff": 2
      },
      {
        "q": "Second-generation anticoagulant rodenticides kill non-target wild predators by blocking Vitamin K epoxide reductase.",
        "a": true,
        "e": "Depletion of active Vitamin K stops carboxylation of clotting factors II, VII, IX, and X, causing massive internal hemorrhages.",
        "topicId": "u6-t4",
        "subSection": "u6-s4",
        "diff": 1
      },
      {
        "q": "Nutritional secondary hyperparathyroidism in captive reptiles causes fibrous osteodystrophy and softening of bones ('rubber jaw').",
        "a": true,
        "e": "Lack of UVB light or dietary calcium causes chronic hypocalcemia, secondary parathyroid hyperplasia, and bone resorption.",
        "topicId": "u6-t4",
        "subSection": "u6-s4",
        "diff": 1
      },
      {
        "q": "Pentastomids (tongue worms) are parasitic roundworms closely related to ascarids.",
        "a": false,
        "e": "Pentastomids are highly specialized, aberrant crustacean-related arthropods, not true nematodes.",
        "topicId": "u6-t4",
        "subSection": "u6-s4",
        "diff": 2
      }
    ],
    "fib": [
      {
        "q": "Tyzzer's disease in laboratory mice and gerbils is caused by the intracellular bacterium Clostridium _____.",
        "a": [
          "piliforme",
          "Piliforme"
        ],
        "a_display": "piliforme",
        "e": "Clostridium piliforme is an obligate intracellular filamentous sporeformer causing hepatic and colonic necrosis.",
        "topicId": "u6-t1",
        "subSection": "u6-s1",
        "diff": 1
      },
      {
        "q": "Bundles of Clostridium piliforme in necrotic liver tissue are best demonstrated using the Warthin-_____ silver stain.",
        "a": [
          "Starry",
          "starry"
        ],
        "a_display": "Starry",
        "e": "Warthin-Starry silver impregnation demonstrates filamentous sheaves of C. piliforme.",
        "topicId": "u6-t1",
        "subSection": "u6-s1",
        "diff": 2
      },
      {
        "q": "The intracytoplasmic eosinophilic inclusion bodies found in epithelial cells of mice with Mousepox are called _____ bodies.",
        "a": [
          "Marchal",
          "marchal"
        ],
        "a_display": "Marchal",
        "e": "Marchal bodies are large acidophilic type A inclusions diagnostic for Ectromelia virus.",
        "topicId": "u6-t1",
        "subSection": "u6-s1",
        "diff": 2
      },
      {
        "q": "The reddish crusts around the eyes and nose of stressed rats are termed chromodacryorrhea, caused by secretion of _____ pigment.",
        "a": [
          "porphyrin",
          "Porphyrin"
        ],
        "a_display": "porphyrin",
        "e": "Harderian gland secretions contain porphyrin, which dries as red tears ('bloody tears').",
        "topicId": "u6-t1",
        "subSection": "u6-s1",
        "diff": 1
      },
      {
        "q": "Murine Respiratory Mycoplasmosis in laboratory rats is caused by Mycoplasma _____.",
        "a": [
          "pulmonis",
          "Pulmonis"
        ],
        "a_display": "pulmonis",
        "e": "Mycoplasma pulmonis attaches to respiratory cilia, inducing chronic suppurative bronchiectasis.",
        "topicId": "u6-t1",
        "subSection": "u6-s1",
        "diff": 1
      },
      {
        "q": "Transmissible colonic hyperplasia in laboratory mice is caused by the bacterium Citrobacter _____.",
        "a": [
          "rodentium",
          "Rodentium"
        ],
        "a_display": "rodentium",
        "e": "Citrobacter rodentium induces attaching and effacing lesions stimulating marked colonic crypt hyperplasia.",
        "topicId": "u6-t1",
        "subSection": "u6-s1",
        "diff": 2
      },
      {
        "q": "The common mouse pinworm that deposits banana-shaped eggs on the perianal skin is _____ obvelata.",
        "a": [
          "Syphacia",
          "syphacia"
        ],
        "a_display": "Syphacia",
        "e": "Syphacia obvelata lays asymmetric eggs detected via the perianal cellophane tape test.",
        "topicId": "u6-t1",
        "subSection": "u6-s1",
        "diff": 2
      },
      {
        "q": "Wet tail (proliferative ileitis) in young Syrian hamsters is caused by the intracellular bacterium Lawsonia _____.",
        "a": [
          "intracellularis",
          "Intracellularis"
        ],
        "a_display": "intracellularis",
        "e": "Lawsonia intracellularis invades ileal crypt cells, causing mucosal proliferation and fatal diarrhea.",
        "topicId": "u6-t1",
        "subSection": "u6-s1",
        "diff": 1
      },
      {
        "q": "Annular tail constrictions and dry gangrene in suckling rats, known as ringtail, are triggered by low environmental _____.",
        "a": [
          "humidity",
          "relative humidity",
          "Humidity"
        ],
        "a_display": "humidity (<40%)",
        "e": "Relative humidity below 40% dries tail stratum corneum, causing constricting bands and necrosis.",
        "topicId": "u6-t1",
        "subSection": "u6-s1",
        "diff": 1
      },
      {
        "q": "Rat-bite fever in humans is caused by the rodent oral commensal bacterium Streptobacillus _____.",
        "a": [
          "moniliformis",
          "Moniliformis"
        ],
        "a_display": "moniliformis",
        "e": "Streptobacillus moniliformis transmits from rat saliva causing fever, arthritis, and rash in humans.",
        "topicId": "u6-t1",
        "subSection": "u6-s1",
        "diff": 2
      },
      {
        "q": "The most common spontaneous benign mammary tumor in aged female Sprague-Dawley rats is mammary _____.",
        "a": [
          "fibroadenoma",
          "Fibroadenoma"
        ],
        "a_display": "fibroadenoma",
        "e": "Mammary fibroadenomas are benign, expansive encapsulated tumors common in aged rats.",
        "topicId": "u6-t1",
        "subSection": "u6-s1",
        "diff": 2
      },
      {
        "q": "Rabbit Hemorrhagic Disease is caused by a virus belonging to the family _____viridae.",
        "a": [
          "Calici",
          "Caliciviridae",
          "caliciviridae",
          "calici"
        ],
        "a_display": "Caliciviridae",
        "e": "RHD is caused by a Lagovirus in the family Caliciviridae, causing liver necrosis and DIC.",
        "topicId": "u6-t2",
        "subSection": "u6-s2",
        "diff": 2
      },
      {
        "q": "Myxomatosis in European rabbits produces dramatic gelatinous facial swelling commonly described as '_____ head'.",
        "a": [
          "lion",
          "Lion"
        ],
        "a_display": "lion",
        "e": "Myxoma virus induces mucinous tumors around eyelids, ears, and snout, producing the 'lion head' appearance.",
        "topicId": "u6-t2",
        "subSection": "u6-s2",
        "diff": 1
      },
      {
        "q": "Snuffles in domestic rabbits is primarily caused by Pasteurella _____.",
        "a": [
          "multocida",
          "Multocida"
        ],
        "a_display": "multocida",
        "e": "Pasteurella multocida induces mucopurulent rhinosinusitis and pleuropneumonia in rabbits.",
        "topicId": "u6-t2",
        "subSection": "u6-s2",
        "diff": 1
      },
      {
        "q": "Hepatic coccidiosis in rabbits, causing white serpentine cords in the liver, is caused by Eimeria _____.",
        "a": [
          "stiedae",
          "Stiedae"
        ],
        "a_display": "stiedae",
        "e": "Eimeria stiedae colonizes bile duct epithelium, causing papillary hyperplasia and nodular cords.",
        "topicId": "u6-t2",
        "subSection": "u6-s2",
        "diff": 1
      },
      {
        "q": "Encephalitozoon cuniculi spores in rabbit tissues retain carbolfuchsin and are therefore acid-_____.",
        "a": [
          "fast",
          "Fast"
        ],
        "a_display": "fast",
        "e": "E. cuniculi spores are Gram-positive and acid-fast on modified Ziehl-Neelsen stain.",
        "topicId": "u6-t2",
        "subSection": "u6-s2",
        "diff": 2
      },
      {
        "q": "Guinea pigs cannot synthesize Vitamin C due to a genetic lack of the enzyme L-_____ oxidase.",
        "a": [
          "gulonolactone",
          "Gulonolactone"
        ],
        "a_display": "gulonolactone",
        "e": "L-gulonolactone oxidase catalyzes the final step in ascorbic acid biosynthesis.",
        "topicId": "u6-t2",
        "subSection": "u6-s2",
        "diff": 2
      },
      {
        "q": "Subperiosteal and periarticular hemorrhages around stifle joints in guinea pigs are diagnostic of _____ (Hypovitaminosis C).",
        "a": [
          "scurvy",
          "Scurvy"
        ],
        "a_display": "scurvy",
        "e": "Scurvy impairs collagen synthesis in blood vessels, producing extensive periarticular bleeding.",
        "topicId": "u6-t2",
        "subSection": "u6-s2",
        "diff": 1
      },
      {
        "q": "Rabbits are asymptomatic carriers of Bordetella _____, which can cause fatal pneumonia in co-housed guinea pigs.",
        "a": [
          "bronchiseptica",
          "Bronchiseptica"
        ],
        "a_display": "bronchiseptica",
        "e": "Bordetella bronchiseptica is harmless in rabbits but causes fatal necrotizing pneumonia in guinea pigs.",
        "topicId": "u6-t2",
        "subSection": "u6-s2",
        "diff": 1
      },
      {
        "q": "The most common spontaneous malignant neoplasm of aged intact female rabbits is uterine _____.",
        "a": [
          "adenocarcinoma",
          "Adenocarcinoma"
        ],
        "a_display": "adenocarcinoma",
        "e": "Uterine adenocarcinoma affects up to 80% of aged female rabbits, causing hematuria and metastasis.",
        "topicId": "u6-t2",
        "subSection": "u6-s2",
        "diff": 1
      },
      {
        "q": "Psoroptes _____ is the non-burrowing ear canker mite that produces crusty scabs in rabbit ears.",
        "a": [
          "cuniculi",
          "Cuniculi"
        ],
        "a_display": "cuniculi",
        "e": "Psoroptes cuniculi infests the pinna and ear canal, producing thick brown cornflake-like crusts.",
        "topicId": "u6-t2",
        "subSection": "u6-s2",
        "diff": 1
      },
      {
        "q": "Severe drooling and wet fur on the chin of rabbits with dental malocclusion is colloquially called _____.",
        "a": [
          "slobbers",
          "Slobbers"
        ],
        "a_display": "slobbers",
        "e": "Overgrown cheek teeth lacerate oral tissues, leading to dysphagia, pain, and constant drooling ('slobbers').",
        "topicId": "u6-t2",
        "subSection": "u6-s2",
        "diff": 1
      },
      {
        "q": "Canine Distemper Virus belongs to the genus _____ within the family Paramyxoviridae.",
        "a": [
          "Morbillivirus",
          "morbillivirus"
        ],
        "a_display": "Morbillivirus",
        "e": "CDV is a Morbillivirus capable of infecting wild felids, canids, mustelids, and procyonids.",
        "topicId": "u6-t3",
        "subSection": "u6-s3",
        "diff": 2
      },
      {
        "q": "Anthrax carcasses fail to develop rigor mortis and exude dark unclotted blood from natural orifices, caused by Bacillus _____.",
        "a": [
          "anthracis",
          "Anthracis"
        ],
        "a_display": "anthracis",
        "e": "Bacillus anthracis toxins disable coagulation, producing dark tarry unclotted blood and splenomegaly.",
        "topicId": "u6-t3",
        "subSection": "u6-s3",
        "diff": 1
      },
      {
        "q": "Kyasanur Forest Disease virus is transmitted to wild monkeys in South India by the hard tick Haemaphysalis _____.",
        "a": [
          "spinigera",
          "Spinigera"
        ],
        "a_display": "spinigera",
        "e": "Haemaphysalis spinigera ticks transmit KFD flavivirus causing fatal hemorrhagic fever in langurs.",
        "topicId": "u6-t3",
        "subSection": "u6-s3",
        "diff": 2
      },
      {
        "q": "Elephant Endotheliotropic Herpesvirus is abbreviated as _____.",
        "a": [
          "EEHV",
          "eehv"
        ],
        "a_display": "EEHV",
        "e": "EEHV causes rapid endothelial necrosis, edema, and fatal internal hemorrhages in young Asian elephants.",
        "topicId": "u6-t3",
        "subSection": "u6-s3",
        "diff": 1
      },
      {
        "q": "Flaccid neck paralysis in waterfowl with type C botulism is colloquially known as _____.",
        "a": [
          "limberneck",
          "Limberneck"
        ],
        "a_display": "limberneck",
        "e": "Loss of neuromuscular tone prevents birds from holding up their head, causing 'limberneck' and drowning.",
        "topicId": "u6-t3",
        "subSection": "u6-s3",
        "diff": 1
      },
      {
        "q": "The pathognomonic intracytoplasmic inclusions found in neurons of animals dying of Rabies are termed _____ bodies.",
        "a": [
          "Negri",
          "negri"
        ],
        "a_display": "Negri",
        "e": "Negri bodies are eosinophilic aggregates of rabies viral nucleocapsids in Purkinje and hippocampal cells.",
        "topicId": "u6-t3",
        "subSection": "u6-s3",
        "diff": 1
      },
      {
        "q": "White-Nose Syndrome in hibernating bats is caused by the psychrophilic fungus Pseudogymnoascus _____.",
        "a": [
          "destructans",
          "Destructans"
        ],
        "a_display": "destructans",
        "e": "Pseudogymnoascus destructans grows at cave temperatures, eroding bat wing epidermis and causing winter mortality.",
        "topicId": "u6-t3",
        "subSection": "u6-s3",
        "diff": 2
      },
      {
        "q": "Amphibian chytridiomycosis is caused by the fungal pathogen Batrachochytrium _____.",
        "a": [
          "dendrobatidis",
          "Dendrobatidis",
          "Bd",
          "BD"
        ],
        "a_display": "dendrobatidis (Bd)",
        "e": "Batrachochytrium dendrobatidis infects keratinized frog skin, impairing electrolyte transport.",
        "topicId": "u6-t3",
        "subSection": "u6-s3",
        "diff": 2
      },
      {
        "q": "Chronic Wasting Disease (CWD) in wild deer and elk is caused by an infectious, misfolded _____ protein.",
        "a": [
          "prion",
          "Prion",
          "PrPSc"
        ],
        "a_display": "prion",
        "e": "CWD is a transmissible spongiform encephalopathy driven by prions inducing neuronal vacuolation.",
        "topicId": "u6-t3",
        "subSection": "u6-s3",
        "diff": 1
      },
      {
        "q": "Malignant Catarrhal Fever produces severe bilateral corneal edema in affected wild ruminants, known as _____ eye.",
        "a": [
          "blue",
          "Blue"
        ],
        "a_display": "blue",
        "e": "Centripetal corneal edema and vasculitis impart an opaque whitish-blue appearance ('blue eye').",
        "topicId": "u6-t3",
        "subSection": "u6-s3",
        "diff": 2
      },
      {
        "q": "Duck Viral Enteritis (Duck Plague) produces pathognomonic cheesy diphtheritic plaques on the mucosal lining of the _____.",
        "a": [
          "cloaca",
          "Cloaca"
        ],
        "a_display": "cloaca",
        "e": "Anatid herpesvirus causes hemorrhagic enteritis with green-yellow fibrinous plaques in the cloaca.",
        "topicId": "u6-t3",
        "subSection": "u6-s3",
        "diff": 2
      },
      {
        "q": "Capture myopathy in wild ungulates is characterized by severe muscular coagulative necrosis, also called _____ necrosis.",
        "a": [
          "Zenker's",
          "zenker's",
          "Zenkers",
          "zenkers"
        ],
        "a_display": "Zenker's",
        "e": "Severe exertion and lactic acidosis induce Zenker's hyaline/coagulative necrosis of heavy skeletal muscles.",
        "topicId": "u6-t4",
        "subSection": "u6-s4",
        "diff": 1
      },
      {
        "q": "In capture myopathy, myoglobin released from necrosed skeletal muscle precipitates in renal tubules causing _____ nephrosis.",
        "a": [
          "myoglobinuric",
          "Myoglobinuric",
          "myoglobin",
          "Myoglobin"
        ],
        "a_display": "myoglobinuric",
        "e": "Myoglobin casts obstruct and damage tubular epithelium, causing acute myoglobinuric kidney failure.",
        "topicId": "u6-t4",
        "subSection": "u6-s4",
        "diff": 2
      },
      {
        "q": "Surra in wild tigers and captive leopards is caused by the flagellated hemoprotozoan Trypanosoma _____.",
        "a": [
          "evansi",
          "Evansi"
        ],
        "a_display": "evansi",
        "e": "Trypanosoma evansi is transmitted by Tabanus flies, causing progressive anemia and death in big cats.",
        "topicId": "u6-t4",
        "subSection": "u6-s4",
        "diff": 1
      },
      {
        "q": "The disease 'Gid' or 'Sturdy' in wild sheep is caused by the larval stage Coenurus cerebralis of the tapeworm Taenia _____.",
        "a": [
          "multiceps",
          "Multiceps"
        ],
        "a_display": "multiceps",
        "e": "Taenia multiceps larval bladders develop inside the brain, causing cerebral pressure atrophy and circling.",
        "topicId": "u6-t4",
        "subSection": "u6-s4",
        "diff": 1
      },
      {
        "q": "The catastrophic demise of Asian Gyps vultures was caused by renal toxicity and visceral gout from the veterinary drug _____.",
        "a": [
          "diclofenac",
          "Diclofenac"
        ],
        "a_display": "diclofenac",
        "e": "Diclofenac residue in livestock carcasses causes acute tubular necrosis and hyperuricemia in vultures.",
        "topicId": "u6-t4",
        "subSection": "u6-s4",
        "diff": 1
      },
      {
        "q": "Lead toxicity in wild waterfowl impairs gastrointestinal motility, causing dark _____ staining of the gizzard and vent.",
        "a": [
          "green",
          "Green",
          "emerald green"
        ],
        "a_display": "green",
        "e": "Biliary stasis and gastrointestinal reflux produce characteristic bright green bile staining.",
        "topicId": "u6-t4",
        "subSection": "u6-s4",
        "diff": 2
      },
      {
        "q": "Steatitis (yellow fat disease) is caused by feeding diets rich in oxidized polyunsaturated fatty acids deficient in Vitamin _____.",
        "a": [
          "E",
          "e"
        ],
        "a_display": "E",
        "e": "Vitamin E deficiency allows unchecked lipid peroxidation of adipose tissue, resulting in ceroid deposition.",
        "topicId": "u6-t4",
        "subSection": "u6-s4",
        "diff": 2
      },
      {
        "q": "Russell's viper venom contains powerful procoagulant enzymes that trigger Disseminated _____ Coagulation (DIC).",
        "a": [
          "Intravascular",
          "intravascular"
        ],
        "a_display": "Intravascular",
        "e": "Factor X and prothrombin activators induce widespread microvascular thrombosis and consumption coagulopathy.",
        "topicId": "u6-t4",
        "subSection": "u6-s4",
        "diff": 2
      },
      {
        "q": "Organophosphate poisoning in wild birds causes death through the irreversible inhibition of the enzyme acetylcholinesterase, leading to excess _____.",
        "a": [
          "acetylcholine",
          "ACh",
          "Acetylcholine"
        ],
        "a_display": "acetylcholine",
        "e": "Accumulated acetylcholine overstimulates muscarinic and nicotinic receptors, causing fatal respiratory failure.",
        "topicId": "u6-t4",
        "subSection": "u6-s4",
        "diff": 2
      },
      {
        "q": "Anticoagulant rodenticides cause fatal internal hemorrhaging by blocking the recycling of Vitamin _____.",
        "a": [
          "K",
          "k"
        ],
        "a_display": "K",
        "e": "Inhibition of Vitamin K epoxide reductase depletes active clotting factors II, VII, IX, and X.",
        "topicId": "u6-t4",
        "subSection": "u6-s4",
        "diff": 1
      },
      {
        "q": "Metabolic Bone Disease in captive reptiles is exacerbated by the absence of _____ radiation needed for Vitamin D synthesis.",
        "a": [
          "UVB",
          "uvb",
          "ultraviolet B",
          "UV"
        ],
        "a_display": "UVB",
        "e": "Reptiles require UVB (290-320 nm) light to photochemically synthesize cholecalciferol in their skin.",
        "topicId": "u6-t4",
        "subSection": "u6-s4",
        "diff": 1
      },
      {
        "q": "Tongue worms (Linguatula serrata) found in the nasal and respiratory passages of wild carnivores belong to the group _____.",
        "a": [
          "Pentastomida",
          "pentastomida",
          "pentastomes",
          "Pentastomes"
        ],
        "a_display": "Pentastomida (pentastomes)",
        "e": "Pentastomes are specialized parasitic arthropods residing in the respiratory cavities of vertebrates.",
        "topicId": "u6-t4",
        "subSection": "u6-s4",
        "diff": 2
      }
    ]
  },
  "prac-unit-1": {
    "mcq": [],
    "tf": [],
    "fib": []
  },
  "prac-unit-2": {
    "mcq": [],
    "tf": [],
    "fib": []
  },
  "prac-unit-3": {
    "mcq": [],
    "tf": [],
    "fib": []
  },
  "prac-unit-4": {
    "mcq": [],
    "tf": [],
    "fib": []
  },
  "prac-unit-5": {
    "mcq": [],
    "tf": [],
    "fib": []
  },
  "prac-unit-6": {
    "mcq": [],
    "tf": [],
    "fib": []
  }
};
