// =========================================================
// GLOSSARY — B.V.Sc UG-Level Tooltip Term Dictionary
// Veterinary Pathology Studio
// =========================================================
// Usage: glossary.decorate(rootElement) scans rendered HTML
// inside rootElement and wraps known terms with a hover-tooltip.
// Terms are matched longest-first to avoid partial overlap.
// =========================================================

const glossary = {
    // Category mapping for A-Z browsing & filtering
    categories: {
        "Cellular Injury & Death": [
            "necrosis", "apoptosis", "coagulative necrosis", "liquefactive necrosis", "caseous necrosis",
            "fat necrosis", "gangrenous necrosis", "gangrene", "dry gangrene", "moist gangrene",
            "gas gangrene", "fibrinoid necrosis", "pyknosis", "karyorrhexis", "karyolysis",
            "cloudy swelling", "hydropic degeneration", "ballooning degeneration", "fatty change",
            "hepatic lipidosis", "steatosis", "hyaline degeneration", "zenker's degeneration",
            "mucoid degeneration", "myxomatous degeneration", "amyloidosis", "amyloid",
            "dystrophic calcification", "metastatic calcification", "calcinosis circumscripta",
            "calcinosis cutis", "lipofuscin", "haemosiderin", "melanin", "icterus", "jaundice",
            "bilirubin", "biliverdin", "porphyria", "anthracosis", "siderosis"
        ],
        "Post-Mortem & Necropsy": [
            "autolysis", "putrefaction", "rigor mortis", "algor mortis", "livor mortis",
            "hypostatic congestion", "pseudomelanosis", "bile imbibition", "haemoglobin imbibition",
            "tympanites", "bloat", "post-mortem clot", "chicken fat clot", "currant jelly clot",
            "antemortem thrombus", "necropsy", "autopsy", "fixation", "neutral buffered formalin",
            "bouin's fluid", "zenker's fluid", "microtome", "haematoxylin and eosin", "prussian blue",
            "congo red"
        ],
        "Disturbances of Growth": [
            "atrophy", "hypertrophy", "hyperplasia", "metaplasia", "dysplasia",
            "aplasia", "hypoplasia", "agenesis", "atresia", "ectopia",
            "choristoma", "hamartoma", "anaplasia", "pleomorphism", "hyperchromasia",
            "desmoplasia", "cachexia", "paraneoplastic syndrome", "mitotic index", "atypia"
        ],
        "Hemodynamics & Shock": [
            "hyperaemia", "congestion", "nutmeg liver", "heart failure cells", "brown induration",
            "oedema", "transudate", "exudate", "anasarca", "ascites",
            "hydrothorax", "hydropericardium", "haemothorax", "haemoperitoneum", "haemopericardium",
            "cardiac tamponade", "thrombosis", "virchow's triad", "lines of zahn", "embolism",
            "thromboembolism", "infarction", "red infarct", "pale infarct", "ischaemia",
            "haemorrhage", "rhexis", "diapedesis", "petechiae", "purpura",
            "ecchymoses", "haematoma", "epistaxis", "haemoptysis", "haematemesis",
            "haematuria", "melaena", "shock", "hypovolaemic shock", "cardiogenic shock",
            "septic shock", "anaphylactic shock", "disseminated intravascular coagulation"
        ],
        "Inflammation & Repair": [
            "inflammation", "cardinal signs", "rubor", "calor", "tumor",
            "dolor", "functio laesa", "chemotaxis", "margination", "pavementing",
            "opsonization", "phagocytosis", "serous exudate", "fibrinous exudate", "catarrhal exudate",
            "purulent exudate", "suppuration", "pus", "abscess", "phlegmon",
            "empyema", "ulcer", "erosion", "fistula", "sinus",
            "granuloma", "epithelioid cell", "langhans giant cell", "foreign body giant cell", "touton giant cell",
            "granulation tissue", "angiogenesis", "fibrosis", "cicatrix", "proud flesh", "keloid"
        ],
        "Immunopathology": [
            "hypersensitivity", "anaphylaxis", "atopy", "arthus reaction", "serum sickness",
            "tuberculin reaction", "delayed type hypersensitivity", "autoimmunity", "systemic lupus erythematosus",
            "immune tolerance", "scid", "immune complex", "complement system", "mast cell", "histamine"
        ],
        "Oncology & Neoplasia": [
            "neoplasia", "benign tumor", "malignant tumor", "carcinoma", "sarcoma",
            "adenoma", "adenocarcinoma", "papilloma", "polyp", "fibroma",
            "fibrosarcoma", "lipoma", "liposarcoma", "osteoma", "osteosarcoma",
            "chondroma", "chondrosarcoma", "leiomyoma", "leiomyosarcoma", "rhabdomyoma",
            "rhabdomyosarcoma", "haemangioma", "haemangiosarcoma", "lymphoma", "lymphosarcoma",
            "melanoma", "mast cell tumor", "transmissible venereal tumor", "teratoma", "metastasis"
        ],
        "Systemic Pathology": [
            "endocarditis", "vegetative endocarditis", "myocarditis", "pericarditis", "bread and butter pericarditis",
            "traumatic reticulopericarditis", "hardware disease", "arteriosclerosis", "atherosclerosis", "aneurysm",
            "phlebitis", "rhinitis", "bronchitis", "bronchopneumonia", "lobar pneumonia",
            "interstitial pneumonia", "cuffing pneumonia", "atelectasis", "emphysema", "hepatization",
            "red hepatization", "grey hepatization", "pleuritis", "stomatitis", "ruminitis",
            "reticulitis", "omasitis", "abomasitis", "gastritis", "enteritis",
            "typhlitis", "colitis", "proctitis", "volvulus", "torsion",
            "intussusception", "hepatitis", "cirrhosis", "cholecystitis", "pancreatitis",
            "nephritis", "glomerulonephritis", "nephrosis", "pyelonephritis", "hydronephrosis",
            "urolithiasis", "cystitis", "orchitis", "epididymitis", "metritis",
            "endometritis", "pyometra", "mastitis", "encephalitis", "myelitis",
            "meningitis", "polioencephalomalacia", "leukoencephalomalacia", "hydrocephalus", "myositis",
            "osteomyelitis", "rickets", "osteomalacia", "osteodystrophia fibrosa"
        ],
        "Infectious & Avian Pathology": [
            "negri bodies", "cowdry type a", "cowdry type b", "guarnieri bodies", "bollinger bodies",
            "borrel bodies", "morula", "anthrax", "splenomegaly", "blackberry jam spleen",
            "blackleg", "malignant oedema", "enterotoxaemia", "pulpy kidney disease", "tuberculosis",
            "tubercle", "ghon focus", "pearly disease", "johne's disease", "corrugation",
            "glanders", "farcy", "strangles", "bastard strangles", "wooden tongue",
            "lumpy jaw", "swine erysipelas", "diamond skin disease", "button ulcers", "turkey egg kidney",
            "marek's disease", "lymphoid leukosis", "gumboro disease", "infectious bursal disease",
            "ranikhet disease", "newcastle disease", "fowl cholera", "pullorum disease", "blue comb disease",
            "waterbelly", "ascites syndrome", "tyzzer's disease"
        ]
    },

    // Term → plain-English UG-level definition for B.V.Sc 2nd Year
    terms: {
        // ---------- CELLULAR INJURY & DEATH ----------
        "necrosis": "Premature, irreversible cell death in living tissue characterised by cellular swelling, protein denaturation, and nuclear breakdown.",
        "apoptosis": "Programmed, energy-dependent single cell death ('cellular suicide') without surrounding inflammation, mediated by executioner caspases.",
        "coagulative necrosis": "Necrosis where basic cellular architecture is preserved for several days ('ghost cells') following denaturation of structural proteins; typical of ischaemic infarcts (except in the brain).",
        "liquefactive necrosis": "Necrosis characterised by enzymatic dissolution and liquefaction of dead tissue, typical of CNS malacia and bacterial abscesses.",
        "caseous necrosis": "Friable, cheese-like necrotic debris with loss of all tissue architecture; classic hallmark of tuberculosis, corynebacterial caseous lymphadenitis, and fungal granulomas.",
        "fat necrosis": "Focal enzymatic destruction of adipose tissue by pancreatic lipases into fatty acids that complex with calcium to form opaque white chalky soaps ('saponification').",
        "gangrenous necrosis": "Coagulative or liquefactive necrosis occurring in extremities or dependent organs following loss of vascular perfusion, divided into dry, moist, and gas gangrene.",
        "gangrene": "Massive necrosis of tissue followed by secondary invasion of saprophytic putrefactive bacteria or mummification.",
        "dry gangrene": "Coagulative necrosis of extremities with mummification and shriveling due to arterial occlusion with intact venous return; sharp line of demarcation is present.",
        "moist gangrene": "Severe, rapidly spreading liquefactive necrosis with foul putrefaction caused by bacterial invasion in tissues rich in moisture and blood (e.g. gangrenous mastitis, pneumonia).",
        "gas gangrene": "Acute, fatal myonecrosis accompanied by subcutaneous gas production and crepitation caused by gas-forming clostridial organisms (e.g., Clostridium chauvoei in blackleg).",
        "fibrinoid necrosis": "Vascular wall necrosis with deposition of antigen-antibody complexes and extravasated fibrin, giving a bright smudgy pink appearance in H&E sections.",
        "pyknosis": "Nuclear condensation and shrinkage with intense basophilia — an early hallmark of necrosis.",
        "karyorrhexis": "Fragmentation and disintegration of the condensed necrotic nucleus into chromatin granules.",
        "karyolysis": "Complete dissolution and loss of the cell nucleus due to hydrolytic digestion by DNases and RNases.",
        "cloudy swelling": "Early reversible cellular degeneration with cellular swelling and ground-glass cytoplasm due to failure of energy-dependent Na+/K+ ATPase pumps.",
        "hydropic degeneration": "Advanced intracellular water accumulation creating clear cytoplasmic vacuoles; classic in poxviral ballooning degeneration.",
        "ballooning degeneration": "Marked swelling and vacuolation of epidermal keratinocytes resulting from viral replication, classic in poxvirus and aphthovirus infections.",
        "fatty change": "Abnormal accumulation of triglycerides within parenchymal cells, particularly hepatocytes ('hepatic lipidosis').",
        "hepatic lipidosis": "Excessive accumulation of neutral triglycerides within hepatocytes, causing an enlarged, pale yellow, friable, greasy liver that floats in water.",
        "steatosis": "Intracellular accumulation of lipid droplets inside non-adipose cells such as hepatocytes and myocardial fibers.",
        "hyaline degeneration": "A descriptive histological term for any homogenous, glassy, amorphous pink extracellular or intracellular proteinaceous deposition.",
        "zenker's degeneration": "Severe hyaline coagulative necrosis of striated skeletal muscle fibers (e.g. Zenker's degeneration in vitamin E/selenium deficiency and stiff lamb disease).",
        "mucoid degeneration": "Excessive accumulation of mucin or glycosaminoglycans in epithelial or connective tissues, turning tissue into a gelatinous mass.",
        "myxomatous degeneration": "Gelatinous softening and accumulation of acid mucopolysaccharides in connective tissues, notably heart valves causing endocardiosis.",
        "amyloidosis": "Extracellular deposition of insoluble, pathologically folded fibrillar proteins with beta-pleated sheet conformation, staining pink with Congo Red and displaying apple-green birefringence under polarised light.",
        "amyloid": "Insoluble proteinaceous fibrillar substance deposited extracellularly with characteristic beta-pleated sheet architecture.",
        "dystrophic calcification": "Deposition of calcium phosphate crystals in degenerate or necrotic tissue occurring with normal serum calcium and phosphate levels.",
        "metastatic calcification": "Deposition of calcium in normal vital tissues (lungs, gastric mucosa, kidneys) resulting from hypercalcaemia or hyperphosphataemia.",
        "calcinosis circumscripta": "Localized nodular deposition of calcium salts in subcutaneous tissues over pressure points or past trauma, common in young large dogs.",
        "calcinosis cutis": "Widespread mineralisation of dermal collagen and elastic fibers, classically associated with hyperadrenocorticism (Cushing's disease).",
        "lipofuscin": "Insoluble golden-brown wear-and-tear pigment derived from free radical lipid peroxidation of polyunsaturated lipids within autophagic lysosomes.",
        "haemosiderin": "Golden-yellow to brown iron-storage pigment formed by aggregate ferritin, demonstrating Prussian blue positivity (Perls' reaction).",
        "melanin": "Endogenous brown-black pigment synthesized by melanocytes from tyrosine through tyrosinase, bleaching with hydrogen peroxide.",
        "icterus": "Yellowish discolouration of tissues and mucous membranes caused by hyperbilirubinaemia (pre-hepatic, hepatic, or post-hepatic).",
        "jaundice": "Clinical yellowing of sclera, skin, and serosa due to elevated serum bilirubin levels.",
        "bilirubin": "Yellow-orange tetrapyrrole pigment derived from the breakdown of heme in senescent red blood cells.",
        "biliverdin": "Green tetrapyrrolic bile pigment produced by heme catabolism, prominent in avian and reptile bile and bruises.",
        "porphyria": "Inborn error of porphyrin metabolism resulting in reddish-brown pigmentation of bones and teeth ('pink tooth') that fluoresces under ultraviolet light.",
        "anthracosis": "Exogenous accumulation of inhaled carbon particles in alveolar macrophages and tracheobronchial lymph nodes.",
        "siderosis": "Deposition of iron particles in tissues, either from systemic iron overload or inhaled occupational iron dust.",

        // ---------- POST-MORTEM & NECROPSY ----------
        "autolysis": "Self-digestion and post-mortem breakdown of tissues by endogenous cellular enzymes after somatic death.",
        "putrefaction": "Post-mortem decomposition of tissue caused by gas- and sulfide-producing saprophytic bacteria, producing green discolouration and foul odor.",
        "rigor mortis": "Post-mortem stiffening of skeletal and cardiac muscles due to lack of ATP preventing actin-myosin dissociation.",
        "algor mortis": "Gradual cooling of the carcass to ambient environmental temperature after somatic death.",
        "livor mortis": "Post-mortem settling of blood into dependent capillaries and venules under the influence of gravity (hypostatic congestion).",
        "hypostatic congestion": "Gravitational pooling of blood in dependent portions of the body and organs (e.g., lower lung lobe) after death or prolonged recumbency.",
        "pseudomelanosis": "Green-black post-mortem discolouration of abdominal viscera caused by hydrogen sulfide reacting with iron from lysed erythrocytes to produce iron sulfide.",
        "bile imbibition": "Yellowish-green staining of liver, gall bladder bed, and adjacent duodenum caused by post-mortem leakage of bile through autolyzed gall bladder walls.",
        "haemoglobin imbibition": "Pink-red staining of endocardium and vascular intima caused by leaching of hemoglobin from hemolyzed erythrocytes after death.",
        "tympanites": "Abnormal accumulation of fermentation gases in the digestive tract, seen antemortem as bloat or post-mortem as rapid abdominal distension.",
        "bloat": "Excessive accumulation of fermentation gases in the rumen, leading to respiratory compromise and 'bloat line' in the cervical esophagus.",
        "post-mortem clot": "Smooth, moist, elastic, unattached blood clot conforming to the vascular lumen without lines of Zahn; easily removed at necropsy.",
        "chicken fat clot": "Post-mortem clot in which erythrocytes have settled, leaving an upper layer of clear yellowish clotted plasma.",
        "currant jelly clot": "Dark red, jelly-like post-mortem clot formed when erythrocytes remain suspended uniformly before coagulation.",
        "antemortem thrombus": "Dry, friable, granular, unyielding intravascular plug firmly attached to the vessel wall, typically exhibiting microscopic lines of Zahn.",
        "necropsy": "Systemic, post-mortem pathological dissection and examination of an animal carcass to establish the cause of death.",
        "autopsy": "Post-mortem examination of a human corpse (literally 'to see for oneself').",
        "fixation": "Preservation of biological tissues from autolysis and putrefaction using chemical fixatives that cross-link structural proteins.",
        "neutral buffered formalin": "Standard 10% neutral buffered formalin (4% formaldehyde at pH 7.2–7.4), the gold-standard fixative for diagnostic histopathology.",
        "bouin's fluid": "Fixative containing picric acid, formalin, and acetic acid, preferred for delicate structures such as testes, GI biopsies, and embryos.",
        "zenker's fluid": "Fixative containing mercuric chloride and potassium dichromate, historically used for brilliant nuclear and Mallory trichrome staining.",
        "microtome": "Precision mechanical instrument used to cut paraffin-embedded tissue blocks into micro-thin sections (4–6 microns) for microscopic slide preparation.",
        "haematoxylin and eosin": "The fundamental diagnostic histopathology stain: haematoxylin stains nuclei blue-purple (basophilic), and eosin stains cytoplasm and connective tissue pink (eosinophilic).",
        "prussian blue": "Histochemical reaction (Perls' stain) that combines potassium ferrocyanide with ferric iron in hemosiderin to produce an intense blue pigment.",
        "congo red": "Histochemical dye that binds to amyloid fibrils, producing orange-red staining and diagnostic apple-green birefringence under cross-polarised light.",

        // ---------- DISTURBANCES OF GROWTH ----------
        "atrophy": "Reduction in the size of an organ or tissue resulting from a decrease in cell size and/or cell number.",
        "hypertrophy": "Increase in the volume and size of individual cells leading to an overall enlargement of the organ, without an increase in cell number.",
        "hyperplasia": "Increase in the number of parenchymal cells in an organ or tissue capable of cellular division.",
        "metaplasia": "Reversible transformation of one adult differentiated cell type into another adult cell type better suited to withstand chronic environmental irritation.",
        "dysplasia": "Disordered cellular development characterized by loss of architectural orientation, cellular pleomorphism, and hyperchromatism.",
        "aplasia": "Complete failure of an organ or tissue to develop, with only a rudimentary fibrous remnant or primordium present.",
        "hypoplasia": "Incomplete or defective development of an organ or tissue so that it never reaches normal adult size.",
        "agenesis": "Complete congenital absence of an organ along with its embryonic primordium.",
        "atresia": "Congenital closure or absence of a normal tubular body opening or canal (e.g. atresia ani, atresia coli).",
        "ectopia": "Congenital displacement or malposition of an organ or tissue from its normal anatomical location.",
        "choristoma": "Normal, mature histological tissue situated in an abnormal, ectopic anatomical position (heterotopia).",
        "hamartoma": "Benign, non-neoplastic, disorganized focal overgrowth of mature native tissues indigenous to that specific anatomical site.",
        "anaplasia": "Lack of structural and functional cellular differentiation, regarded as a definitive hallmark of high-grade malignancy.",
        "pleomorphism": "Marked variation in the size and shape of cells (cellular pleomorphism) and their nuclei (nuclear pleomorphism).",
        "hyperchromasia": "Deep, intense basophilic staining of nuclei due to an abundance of condensed chromatin and increased DNA content.",
        "desmoplasia": "Proliferation of dense, fibrous collagenous stroma induced by an invasive malignant neoplasm ('scirrhous response').",
        "cachexia": "Progressive wasting, loss of body fat, and lean muscle mass accompanied by profound weakness in cancer patients, driven by TNF-alpha and cytokines.",
        "paraneoplastic syndrome": "Symptom complex in cancer patients that cannot be explained by the local mass effect or distant metastasis of the tumor.",
        "mitotic index": "The proportion of cells within a tissue undergoing visible mitotic division, indicating growth fraction and aggressiveness.",
        "atypia": "Structural abnormality or deviation of a cell from its normal mature differentiated appearance.",

        // ---------- HEMODYNAMICS & SHOCK ----------
        "hyperaemia": "Active arteriolar dilation with increased blood inflow causing redness and warmth in vital organs (e.g. during acute inflammation).",
        "congestion": "Passive accumulation of venous blood in a vascular bed due to impaired venous outflow, appearing dark red to bluish-purple (cyanotic).",
        "nutmeg liver": "Chronic passive venous congestion of the liver characterized by dark red congested centrilobular zones contrasting with pale fatty periportal zones.",
        "heart failure cells": "Alveolar macrophages packed with golden-brown hemosiderin pigment resulting from phagocytosis of extravasated red blood cells in chronic pulmonary congestion.",
        "brown induration": "Fibrotic, firm, rust-brown lung parenchyma resulting from chronic passive pulmonary congestion with hemosiderin deposition and interstitial fibrosis.",
        "oedema": "Abnormal pathological accumulation of excessive fluid in the interstitial fluid compartment or body cavities.",
        "transudate": "Extravascular fluid with low protein content (<2.5 g/dL) and low specific gravity (<1.012) resulting from increased hydrostatic pressure or decreased oncotic pressure without vascular permeability changes.",
        "exudate": "Inflammatory extravascular fluid with high protein content (>3.0 g/dL) and high specific gravity (>1.018) caused by increased endothelial microvascular permeability.",
        "anasarca": "Severe, generalized subcutaneous oedema affecting the whole body.",
        "ascites": "Pathological accumulation of serous or transudative fluid inside the peritoneal cavity (hydroperitoneum).",
        "hydrothorax": "Accumulation of non-inflammatory serous fluid in one or both pleural cavities.",
        "hydropericardium": "Excess serous transudate within the pericardial sac ('mulberry heart' or congestive fluid).",
        "haemothorax": "Accumulation of whole blood inside the pleural cavity, typically from vascular rupture or trauma.",
        "haemoperitoneum": "Accumulation of whole blood inside the abdominal cavity, often following rupture of a congested liver, spleen, or hemangiosarcoma.",
        "haemopericardium": "Accumulation of whole blood within the pericardial sac, leading to fatal cardiac tamponade.",
        "cardiac tamponade": "Mechanical compression of the heart due to rapid fluid or blood accumulation in the non-distensible pericardial sac, preventing diastolic ventricular filling.",
        "thrombosis": "Inappropriate intravascular formation of a solid or semi-solid aggregate of platelets and fibrin within the living cardiovascular system.",
        "virchow's triad": "The three predisposing drivers of thrombosis: endothelial injury, alterations in normal laminar blood flow (stasis or turbulence), and hypercoagulability.",
        "lines of zahn": "Alternating macroscopic laminations of pale platelets/fibrin and dark red blood cells, indicating formation of a thrombus in flowing blood.",
        "embolism": "Detached intravascular physical mass (thrombus, fat, gas, tumour clump) carried by blood to a site distant from its origin, lodging in and occluding smaller vessels.",
        "thromboembolism": "An embolus derived from a dislodged pre-existing thrombus that travels downstream and occludes a distant vascular lumen.",
        "infarction": "Area of ischemic coagulative necrosis in a tissue or organ caused by sudden occlusion of either its arterial blood supply or venous drainage.",
        "red infarct": "Hemorrhagic infarct occurring in loose tissues or organs with dual blood supplies (lungs, intestines) where blood oozes into necrotic parenchyma.",
        "pale infarct": "Anemic, white infarct occurring in solid organs with end-arterial circulation (kidney, spleen, heart) due to total arterial occlusion.",
        "ischaemia": "Deficiency of arterial blood flow to a tissue or organ, causing hypoxia and deficiency of nutrients.",
        "haemorrhage": "Escape of blood from the cardiovascular lumen into surrounding tissues, body cavities, or outside the body.",
        "rhexis": "Rupture or tearing of the vascular wall or cardiac chamber causing catastrophic hemorrhage.",
        "diapedesis": "Active transmigration of erythrocytes or leukocytes across intact microvascular endothelial junctions into extravascular connective tissue.",
        "petechiae": "Pinpoint (1–2 mm) minute hemorrhages into skin, mucous membranes, or serosal surfaces.",
        "purpura": "Confluent patches of hemorrhage measuring 3 mm to 1 cm across mucous membranes and skin.",
        "ecchymoses": "Larger subcutaneous or subserosal hemorrhages (1 to 2 cm) usually termed bruises.",
        "haematoma": "Enclosed, discrete extravascular collection of blood within an organ, tissue space, or body cavity.",
        "epistaxis": "Bleeding originating from the nasal passages or upper respiratory tract.",
        "haemoptysis": "Coughing up blood or blood-stained sputum originating from the lungs or lower respiratory tree.",
        "haematemesis": "Vomiting of blood (either bright red or digested 'coffee ground' appearance).",
        "haematuria": "Presence of intact erythrocytes in the urine, giving it a smoky or red appearance.",
        "melaena": "Dark, black, tarry feces resulting from the passage of blood that has undergone enzymatic digestion in the upper gastrointestinal tract.",
        "shock": "Acute circulatory failure characterized by widespread systemic hypoperfusion of tissues leading to cellular hypoxia and multi-organ dysfunction.",
        "hypovolaemic shock": "Shock resulting from severe loss of circulating intravascular blood volume (massive hemorrhage, severe dehydration, or third-space fluid shifts).",
        "cardiogenic shock": "Shock caused by myocardial pump failure leading to inadequate cardiac output despite normal blood volume.",
        "septic shock": "Shock triggered by systemic release of endotoxins (LPS) and cytokines, resulting in widespread vasodilation, endothelial injury, and organ failure.",
        "anaphylactic shock": "Severe, sudden systemic Type I hypersensitivity reaction with massive histamine release, widespread vasodilation, and bronchoconstriction.",
        "disseminated intravascular coagulation": "Systemic thrombohemorrhagic disorder characterized by widespread microvascular microthrombi and consumption of platelets and clotting factors, causing uncontrollable bleeding.",

        // ---------- INFLAMMATION & REPAIR ----------
        "inflammation": "Complex protective vascular and cellular response of living vascularized tissue to injury, aimed at eliminating the harmful agent and repairing damaged tissue.",
        "cardinal signs": "The classic signs of acute inflammation: Rubor (redness), Calor (heat), Tumor (swelling), Dolor (pain), and Functio laesa (loss of function).",
        "rubor": "Redness of inflamed tissue caused by arteriolar dilation and active hyperaemia.",
        "calor": "Heat in inflamed tissue resulting from increased warm arteriolar blood flow to the superficial peripheral site.",
        "tumor": "Swelling in acute inflammation caused by the accumulation of exudative edema fluid and inflammatory leukocytes.",
        "dolor": "Pain in inflamed tissue induced by stretching of tissue endings and stimulation of nociceptors by bradykinin and prostaglandins.",
        "functio laesa": "Loss or impairment of function in inflamed organs due to structural destruction, pain, and mechanical swelling.",
        "chemotaxis": "Directed migration of leukocytes along a chemical concentration gradient toward the source of injury or chemoattractant.",
        "margination": "Accumulation and peripheral positioning of circulating leukocytes along the vascular endothelial surface due to slowing of blood flow (stasis).",
        "pavementing": "Flattening and close adherence of rolling leukocytes to activated endothelial cells prior to transmigration.",
        "opsonization": "Target coating of pathogens or necrotic debris by opsonins (IgG, C3b) to facilitate recognition and ingestion by phagocytes.",
        "phagocytosis": "Process by which phagocytes (neutrophils, macrophages) engulf and digest particulate matter, microorganisms, and cellular fragments.",
        "serous exudate": "Thin, watery, protein-poor inflammatory fluid with few cells, typical of early burn blisters and mild viral infections.",
        "fibrinous exudate": "Exudate containing large amounts of polymerized fibrin resulting from severe vascular permeability allowing large fibrinogen molecules to escape.",
        "catarrhal exudate": "Inflammatory exudate rich in mucus and desquamated epithelial cells, characteristic of inflamed respiratory and intestinal mucous membranes.",
        "purulent exudate": "Thick, viscous exudate composed of large numbers of dead and dying neutrophils, necrotic cell debris, and liquefied tissue (pus).",
        "suppuration": "Formation of pus containing necrotic tissue debris, dead neutrophils, and protein-rich exudative fluid.",
        "pus": "Viscous, creamy inflammatory exudate consisting of dead leukocytes, liquefactive necrotic tissue debris, and living or dead pyogenic bacteria.",
        "abscess": "Localized, circumscribed collection of purulent exudate (pus) within a newly formed necrotic cavity lined by a pyogenic membrane.",
        "phlegmon": "Diffuse, uncircumscribed spreading suppurative acute inflammation extending along loose fascial and tissue planes.",
        "empyema": "Accumulation of purulent exudate (pus) within a pre-existing, natural anatomical body cavity (such as the pleural cavity or guttural pouch).",
        "ulcer": "Local defect or excavation of the surface of an organ or tissue produced by the sloughing of inflamed necrotic tissue.",
        "erosion": "Superficial loss of the epithelial layer without breach of the underlying basement membrane, healing without scar formation.",
        "fistula": "Abnormal, pathological tubular communication connecting two epithelialized internal organs or leading from an internal organ to the body surface.",
        "sinus": "Blind-ended, infected tract or tract-like pouch leading from a deep purulent focus to an external epithelial surface.",
        "granuloma": "Focal microscopic nodular aggregation of activated epithelioid macrophages, often encircled by lymphocytes and multinucleated giant cells.",
        "epithelioid cell": "Activated macrophage with abundant pale pink cytoplasm, oval vesicular nucleus, and secretory morphology resembling epithelial cells.",
        "langhans giant cell": "Multinucleated giant cell with horseshoe-shaped peripheral arrangement of nuclei characteristic of tuberculosis and mycobacteriosis.",
        "foreign body giant cell": "Multinucleated giant cell with haphazardly clustered nuclei throughout the cytoplasm, formed around insoluble non-antigenic foreign material.",
        "touton giant cell": "Multinucleated giant cell with a central ring of nuclei surrounded by foamy lipid-rich cytoplasm, typical of xanthomas.",
        "granulation tissue": "Vascularized, immature fibrous repair tissue composed of proliferating capillaries (angiogenesis) and plump active fibroblasts in an edematous extracellular matrix.",
        "angiogenesis": "Formation of new blood vessels by budding from pre-existing capillaries during wound repair and neoplastic growth.",
        "fibrosis": "Deposition of collagen and extracellular matrix components by fibroblasts, representing permanent tissue scar formation.",
        "cicatrix": "Dense fibrous scar tissue marking the endpoint of wound repair and connective tissue remodeling.",
        "proud flesh": "Exuberant, excessive overgrowth of granulation tissue protruding above the skin margin, common in healing distal limb wounds of horses.",
        "keloid": "Exuberant, excessive overgrowth of dense collagenous scar tissue extending beyond the margins of the original wound.",

        // ---------- IMMUNOPATHOLOGY ----------
        "hypersensitivity": "Inappropriate, excessive, or damaging immune reaction mounted against an otherwise harmless antigen, causing tissue damage.",
        "anaphylaxis": "Rapid, severe, potentially fatal Type I systemic hypersensitivity reaction mediated by IgE and massive mast cell degranulation.",
        "atopy": "Genetically determined predisposition to develop localized Type I hypersensitivity (allergic dermatitis, asthma) upon environmental allergen exposure.",
        "arthus reaction": "Localized Type III hypersensitivity vasculitis caused by immune complex precipitation within dermal blood vessel walls.",
        "serum sickness": "Systemic Type III hypersensitivity syndrome resulting from circulating antigen-antibody complexes depositing in glomeruli, joints, and arteries.",
        "tuberculin reaction": "Classic localized Type IV delayed-type hypersensitivity reaction peaking at 48–72 hours following intradermal injection of mycobacterial PPD.",
        "delayed type hypersensitivity": "Cell-mediated (Type IV) immune reaction orchestrated by sensitized CD4+ Th1 lymphocytes and activated macrophages, taking 24–72 hours to develop.",
        "autoimmunity": "Breakdown of self-tolerance resulting in immune-mediated attack against the animal's own cells, tissues, or organs.",
        "systemic lupus erythematosus": "Multisystemic autoimmune disease characterized by antinuclear antibodies (ANA), immune complex glomerulonephritis, dermatitis, and polyarthritis.",
        "immune tolerance": "State of unresponsiveness of the immune system to substances or tissues that have the capacity to elicit an immune response.",
        "scid": "Severe Combined Immunodeficiency, an inherited defect in both B and T lymphocyte function, classically seen in Arabian foals.",
        "immune complex": "Antigen-antibody lattice whose deposition in microvessels triggers complement activation and severe tissue damage in Type III hypersensitivity.",
        "complement system": "Cascade of circulating plasma proteins that mediate opsonization, leukocyte recruitment, and cell lysis via the membrane attack complex (MAC).",
        "mast cell": "Granular tissue leukocyte packed with histamine and heparin, bearing surface high-affinity Fc receptors for IgE antibodies.",
        "histamine": "Vasoactive amine pre-formed in mast cell granules that triggers immediate arteriolar dilation and increased post-capillary venule permeability.",

        // ---------- ONCOLOGY & NEOPLASIA ----------
        "neoplasia": "Abnormal, uncontrolled, autonomous new growth of tissue whose proliferation exceeds and is uncoordinated with that of surrounding normal tissues.",
        "benign tumor": "Non-cancerous, localized neoplastic growth that does not invade surrounding tissue or metastasize to distant anatomical sites.",
        "malignant tumor": "Invasive, locally destructive neoplasm capable of anaplasia and metastasis to regional lymph nodes or distant organs (cancer).",
        "carcinoma": "Malignant neoplasm arising from epithelial tissue (ectoderm, endoderm, or mesothelium).",
        "sarcoma": "Malignant neoplasm derived from mesenchymal and connective tissue elements (bone, muscle, cartilage, blood vessels).",
        "adenoma": "Benign neoplasm originating from glandular epithelium or forming glandular microscopic structures.",
        "adenocarcinoma": "Malignant neoplasm originating from glandular epithelium or producing glandular architectural configurations.",
        "papilloma": "Benign epithelial neoplasm exhibiting finger-like, exophytic projections from a surface ('wart').",
        "polyp": "Macroscopic projection or fleshy growth arising from a mucous membrane surface into a lumen.",
        "fibroma": "Benign neoplasm of mature fibroblasts and abundant collagenous connective tissue.",
        "fibrosarcoma": "Malignant neoplasm derived from transformed fibroblasts, displaying interlacing herringbone patterns of atypical spindle cells.",
        "lipoma": "Benign, well-circumscribed tumor composed of mature adipocytes.",
        "liposarcoma": "Malignant mesenchymal neoplasm originating from primitive adipoblasts with pleomorphic lipoblasts and signet-ring cells.",
        "osteoma": "Benign slow-growing bone tumor composed of mature woven or lamellar bone.",
        "osteosarcoma": "Highly aggressive malignant bone tumor characterized by neoplastic osteoblasts producing osteoid matrix and early pulmonary metastasis.",
        "chondroma": "Benign neoplasm composed of mature hyaline cartilage.",
        "chondrosarcoma": "Malignant neoplasm characterized by the production of neoplastic cartilaginous matrix without direct osteoid formation.",
        "leiomyoma": "Benign tumor of smooth muscle, frequently found in the myometrium of the reproductive tract.",
        "leiomyosarcoma": "Malignant neoplasm arising from smooth muscle cells, displaying cellular atypia and frequent mitoses.",
        "rhabdomyoma": "Rare benign neoplasm composed of mature striated skeletal or cardiac muscle fibers.",
        "rhabdomyosarcoma": "Malignant tumor derived from skeletal muscle cells, featuring strap cells and diagnostic cross-striations.",
        "haemangioma": "Benign neoplasm composed of proliferated blood vessels filled with erythrocytes.",
        "haemangiosarcoma": "Highly malignant vascular neoplasm composed of atypical endothelial cells forming vascular channels, common in canine spleen and right atrium.",
        "lymphoma": "Malignant neoplasm arising from lymphocytes and their precursors, involving lymph nodes and visceral organs.",
        "lymphosarcoma": "Synonymous with malignant lymphoma, characterized by effacement of nodal architecture by neoplastic lymphoid cells.",
        "melanoma": "Malignant neoplasm derived from melanocytes, showing marked pleomorphism, variable melanin production, and high metastatic rate.",
        "mast cell tumor": "Cutaneous or systemic neoplasm of mast cells containing metachromatic cytoplasmic granules (staining with toluidine blue).",
        "transmissible venereal tumor": "Contagious, sexually transmitted round cell tumor of canines with a characteristic modal chromosome count of 59 (normal canine 78).",
        "teratoma": "Neoplasm composed of multiple parenchymal tissues derived from more than one germ cell layer (ectoderm, mesoderm, endoderm).",
        "metastasis": "Discontinuous spread of a neoplastic clone from its primary origin to anatomically distant secondary tissue sites.",

        // ---------- SYSTEMIC PATHOLOGY ----------
        "endocarditis": "Inflammation of the endocardium, particularly affecting cardiac valves with rough vegetative fibrinous thrombotic deposits.",
        "vegetative endocarditis": "Exuberant, cauliflower-like fibrinous and bacterial thrombotic vegetations firmly attached to cardiac valve leaflets.",
        "myocarditis": "Inflammation of the myocardial muscular wall of the heart, accompanied by myocardial degeneration or necrosis.",
        "pericarditis": "Inflammation of the pericardium, leading to accumulation of serous, fibrinous, or purulent exudate in the pericardial sac.",
        "bread and butter pericarditis": "Fibrinous pericarditis where rough, shaggy deposits of yellow fibrin on visceral and parietal pericardium resemble two buttered slices of bread pulled apart.",
        "traumatic reticulopericarditis": "Perforation of the bovine reticulum and pericardium by an ingested sharp metallic foreign body, causing severe septic fibrino-purulent pericarditis.",
        "hardware disease": "Colloquial veterinary term for bovine traumatic reticulitis or traumatic reticulopericarditis.",
        "arteriosclerosis": "Chronic thickening, hardening, and loss of elasticity of the arterial walls.",
        "atherosclerosis": "Form of arteriosclerosis characterised by intimal fibro-fatty plaques containing cholesterol esters, rare in domestic animals except hypothyroid dogs.",
        "aneurysm": "Localized, abnormal dilation of an artery or cardiac chamber resulting from structural weakness in the vessel wall.",
        "phlebitis": "Inflammation of the wall of a vein, frequently associated with thrombosis (thrombophlebitis).",
        "rhinitis": "Inflammation of the mucous membranes lining the nasal cavity.",
        "bronchitis": "Inflammation of the mucous membrane of the bronchial tubes.",
        "bronchopneumonia": "Pneumonia originating in the terminal bronchioles and spreading to contiguous alveolar spaces, producing cranioventral consolidation.",
        "lobar pneumonia": "Aggressive, widespread pneumonia involving an entire anatomical lung lobe uniformly, typical of bovine contagious pleuropneumonia.",
        "interstitial pneumonia": "Diffuse inflammation centered on the alveolar septa rather than the airways, producing elastic, rubbery, uncollapsed lungs.",
        "cuffing pneumonia": "Enzootic pneumonia of calves and pigs characterized by prominent peribronchiolar lymphoid hyperplasia forming thick cuffs around airways.",
        "atelectasis": "Incomplete expansion of the lungs at birth (fetal atelectasis) or collapse of previously inflated lung tissue.",
        "emphysema": "Abnormal, permanent enlargement of the air spaces distal to the terminal bronchiole, accompanied by destruction of alveolar walls.",
        "hepatization": "Transformation of spongy lung tissue into a dense, solid, liver-like consistency during the progression of acute fibrinous pneumonia.",
        "red hepatization": "Early phase of lobar pneumonia where congested capillaries, extravasated erythrocytes, and fibrin consolidate the lung into a red liver-like mass.",
        "grey hepatization": "Later phase of pneumonia where erythrocytes disintegrate and neutrophils/fibrin dominate, turning the firm consolidated lung greyish-brown.",
        "pleuritis": "Inflammation of the pleura, accompanied by friction rubs and accumulation of pleural exudate.",
        "stomatitis": "Inflammation of the mucous membranes of the mouth.",
        "ruminitis": "Inflammation of the rumen wall, classically caused by acute carbohydrate overload (grain engorgement) leading to lactic acidosis.",
        "reticulitis": "Inflammation of the honeycomb-patterned wall of the second forestomach (reticulum).",
        "omasitis": "Inflammation of the leaves and mucosal folds of the third forestomach (omasum).",
        "abomasitis": "Inflammation of the glandular true stomach (abomasum) of ruminants.",
        "gastritis": "Inflammation of the gastric mucosa of monogastric animals.",
        "enteritis": "Inflammation of the intestinal mucosa, typically affecting the small intestine.",
        "typhlitis": "Inflammation of the cecum (typhlon), classic in histomoniasis ('blackhead') in turkeys.",
        "colitis": "Inflammation of the large intestine (colon).",
        "proctitis": "Inflammation of the rectum and anal canal.",
        "volvulus": "Twisting of a loop of intestine around its mesenteric axis, causing sudden vascular strangulation and hemorrhagic infarction.",
        "torsion": "Rotation of an organ along its own long axis (e.g. abomasal torsion, uterine torsion).",
        "intussusception": "Invagination or telescoping of one segment of the intestine into the lumen of an immediately adjacent segment.",
        "hepatitis": "Inflammation of the liver parenchyma.",
        "cirrhosis": "End-stage diffuse hepatic disease characterized by bridging fibrosis, loss of normal lobular architecture, and nodular parenchymal regeneration.",
        "cholecystitis": "Inflammation of the gallbladder wall.",
        "pancreatitis": "Inflammation of the pancreas, accompanied by auto-digestion by prematurely activated proteolytic enzymes and peripancreatic fat necrosis.",
        "nephritis": "Inflammation of the kidney parenchyma.",
        "glomerulonephritis": "Inflammation primarily affecting the renal glomeruli, predominantly mediated by deposition of circulating immune complexes.",
        "nephrosis": "Degenerative and necrotic disease of the renal tubules without primary inflammatory infiltrates, causing acute renal failure.",
        "pyelonephritis": "Suppurative inflammation of the renal pelvis and kidney parenchyma, typically resulting from ascending bacterial infection from the lower urinary tract.",
        "hydronephrosis": "Cystic dilation of the renal pelvis and calyces with progressive pressure atrophy of renal parenchyma, caused by chronic urinary outflow obstruction.",
        "urolithiasis": "Formation of calculi (uroliths or stones) anywhere in the urinary tract, leading to painful obstruction and potential rupture of the bladder or urethra.",
        "cystitis": "Inflammation of the urinary bladder.",
        "orchitis": "Inflammation of one or both testes, frequently caused by Brucella abortus or Corynebacterium pseudotuberculosis.",
        "epididymitis": "Inflammation of the epididymis, often co-existing with orchitis.",
        "metritis": "Inflammation of the entire thickness of the uterine wall (endometrium, myometrium, and perimetrium).",
        "endometritis": "Inflammation limited to the inner mucosal lining (endometrium) of the uterus.",
        "pyometra": "Accumulation of purulent exudate (pus) inside the lumen of the uterus, accompanied by progesterone-primed cystic endometrial hyperplasia in bitches.",
        "mastitis": "Inflammation of the mammary gland (udder), causing economic losses in dairy herds.",
        "encephalitis": "Inflammation of the brain parenchyma.",
        "myelitis": "Inflammation of the spinal cord.",
        "meningitis": "Inflammation of the meninges covering the brain and spinal cord.",
        "polioencephalomalacia": "Cerebrocortical necrosis in ruminants characterized by laminar necrosis of cortical neurons and autofluorescence under UV light, linked to thiamine deficiency or excess sulfur.",
        "leukoencephalomalacia": "Liquefactive softening and necrosis of the white matter of the equine cerebrum caused by ingestion of corn contaminated with fumonisin B1 toxins.",
        "hydrocephalus": "Pathological accumulation of excessive cerebrospinal fluid (CSF) within the ventricular system of the brain, causing ventricular dilation and cortical thinning.",
        "myositis": "Inflammation of skeletal muscle fibers.",
        "osteomyelitis": "Inflammation of the bone and marrow cavity, typically caused by pyogenic bacterial or fungal infections.",
        "rickets": "Defective mineralization of growing bones in juvenile animals due to vitamin D or phosphorus deficiency, leading to wide, irregular epiphyseal growth plates.",
        "osteomalacia": "Defective mineralization of remodeled bone osteoid in mature adult animals with closed growth plates, producing weak, softened bones.",
        "osteodystrophia fibrosa": "Metabolic bone disease caused by primary or secondary hyperparathyroidism, characterized by extensive osteoclastic bone resorption and replacement with fibrocollagenous tissue ('big head disease').",

        // ---------- INFECTIOUS & AVIAN PATHOLOGY ----------
        "negri bodies": "Round or oval, sharply demarcated, eosinophilic intracytoplasmic inclusion bodies within neurons (Purkinje cells and hippocampus), pathognomonic for Rabies virus.",
        "cowdry type a": "Large, eosinophilic, intranuclear inclusion bodies surrounded by a clear halo, characteristic of Herpesviruses and Infectious Canine Hepatitis.",
        "cowdry type b": "Smaller, multiple intranuclear inclusion bodies without marked margination of chromatin, seen in Adenoviruses and Poliovirus.",
        "guarnieri bodies": "Intracytoplasmic eosinophilic viral inclusions found in epithelial cells during Poxvirus infections.",
        "bollinger bodies": "Large, eosinophilic intracytoplasmic inclusion bodies found in cutaneous and mucosal lesions of Fowl Pox.",
        "borrel bodies": "Minute, elementary viral particles found within Bollinger bodies in fowl pox.",
        "morula": "Intracytoplasmic basophilic clusters of microcolonies formed by Ehrlichia or Anaplasma species within circulating leukocytes or erythrocytes.",
        "anthrax": "Hyperacute zoonotic septicaemic disease caused by Bacillus anthracis, characterized by absence of rigor mortis, dark unclotted blood from natural orifices, and marked splenomegaly.",
        "splenomegaly": "Pathological enlargement of the spleen.",
        "blackberry jam spleen": "Soft, dark, liquefied, markedly enlarged spleen teeming with Bacillus anthracis, characteristic of acute bovine anthrax.",
        "blackleg": "Acute necrotizing myositis in cattle caused by Clostridium chauvoei, characterized by dry, dark, crepitant skeletal muscle with sweet rancid odor.",
        "malignant oedema": "Acute clostridial wound infection caused by Clostridium septicum, characterized by extensive gelatinous inflammatory edema and gas in subcutaneous and intermuscular tissues.",
        "enterotoxaemia": "Acute toxemic clostridial disease of sheep and goats caused by epsilon toxin of Clostridium perfringens Type D.",
        "pulpy kidney disease": "Common name for Clostridium perfringens Type D enterotoxemia in sheep, characterized by rapid post-mortem softening and pulpy degeneration of the kidneys.",
        "tuberculosis": "Chronic granulomatous zoonotic disease caused by Mycobacterium bovis, characterized by caseous necrosis, calcification, and Langhans giant cells.",
        "tubercle": "The classic macroscopic nodular granuloma of tuberculosis, consisting of a central caseous core surrounded by epithelioid cells, Langhans giant cells, and a fibrous capsule.",
        "ghon focus": "Primary calcified tuberculous subpleural lung granuloma with involvement of regional tracheobronchial lymph nodes ('primary complex').",
        "pearly disease": "Disseminated nodular tuberculous lesions studded along the serosal surfaces of the pleura and peritoneum ('pearls').",
        "johne's disease": "Chronic granulomatous enteritis of ruminants caused by Mycobacterium avium subsp. paratuberculosis, causing chronic corrugation of the intestinal mucosa and emaciation.",
        "corrugation": "Transverse thickening and permanent wrinkling of the ileal and colonic mucosa that cannot be flattened by stretching, pathognomonic for bovine paratuberculosis.",
        "glanders": "Contagious, zoonotic bacterial disease of equids caused by Burkholderia mallei, producing nodular ulcers in the nasal mucosa, lungs, and cutaneous lymphatic vessels.",
        "farcy": "The cutaneous form of equine glanders, characterized by nodular enlargements along subcutaneous lymph vessels ('farcy buds') and ulcerated cords ('farcy pipes').",
        "strangles": "Acute contagious disease of equids caused by Streptococcus equi subsp. equi, producing suppurative rhinitis and abscessation of mandibular and retropharyngeal lymph nodes.",
        "bastard strangles": "Complicated, metastatic form of equine strangles where Streptococcus equi abscesses disseminate to internal organs (mesenteric lymph nodes, lungs, brain).",
        "wooden tongue": "Chronic pyogranulomatous glossitis of cattle caused by Actinobacillus lignieresii, resulting in severe tongue induration and inability to prehend food.",
        "lumpy jaw": "Chronic osteomyelitis of the mandible and maxilla in cattle caused by Actinomyces bovis, characterized by honeycombed bone rarefaction and 'sulfur granules' in pus.",
        "swine erysipelas": "Bacterial disease of pigs caused by Erysipelothrix rhusiopathiae, causing diamond-shaped cutaneous infarcts, polyarthritis, and vegetative endocarditis.",
        "diamond skin disease": "Rhomboidal, firm, red-to-purple cutaneous infarcts in pigs caused by thrombotic vasculitis in acute swine erysipelas.",
        "button ulcers": "Well-circumscribed, necrotic, concentric ulcerated mucosal plaques in the cecum and colon of pigs, characteristic of Classical Swine Fever and salmonellosis.",
        "turkey egg kidney": "Multiple petechial hemorrhages scattered across the pale cortical surface of the kidney, characteristic of Classical Swine Fever in pigs.",
        "marek's disease": "Alphaherpesvirus infection in poultry causing peripheral nerve enlargement (sciatic, vagus), lymphoid tumors, and blindness ('grey eye').",
        "lymphoid leukosis": "Retroviral avian neoplasm causing nodular bursal and visceral lymphoma without peripheral nerve involvement.",
        "gumboro disease": "Infectious Bursal Disease (IBD) of young chicks caused by an avibirnavirus, characterized by swollen, gelatinous, or hemorrhagic bursa of Fabricius.",
        "infectious bursal disease": "Acute, highly contagious viral disease of young chickens targeting the bursa of Fabricius, causing severe lymphoid depletion and immunosuppression.",
        "ranikhet disease": "Newcastle Disease of poultry caused by virulent avian paramyxovirus-1, producing hemorrhagic ulcers in the proventricular glands and tracheitis.",
        "newcastle disease": "Paramyxoviral infection of poultry exhibiting neurotropic, viscerotropic, and respiratory signs with pinpoint hemorrhages on proventricular papillae.",
        "fowl cholera": "Septicaemic bacterial disease of poultry caused by Pasteurella multocida, characterized by petechiae on epicardium, congested liver with white necrotic foci, and cheesy exudate in waddles.",
        "pullorum disease": "Bacterial infection of chicks caused by Salmonella enterica serovar Pullorum, causing chalky white diarrhea ('bacillary white diarrhea') and greyish-white nodules in the myocardium and gizzard.",
        "blue comb disease": "Avian infectious enteritis characterized by cyanosis of the comb and wattles, severe dehydration, and mucous enteritis.",
        "waterbelly": "Colloquial term for broiler ascites syndrome, characterized by accumulation of straw-colored transudate in the peritoneal cavity due to right-sided heart failure.",
        "ascites syndrome": "Metabolic cardiopulmonary condition of rapidly growing broilers caused by pulmonary hypertension, right ventricular hypertrophy, and massive peritoneal ascites.",
        "tyzzer's disease": "Acute necrotizing hepatitis and enteritis in lab and wild animals caused by Clostridium piliforme (demonstrable with silver stains)."
    },

    // Return all terms as an array of objects: { term, def, category }
    getAll() {
        const out = [];
        const termToCat = {};
        for (const [catName, termList] of Object.entries(this.categories)) {
            for (const t of termList) {
                termToCat[t.toLowerCase()] = catName;
            }
        }

        for (const [term, def] of Object.entries(this.terms)) {
            out.push({
                term: term,
                def: def,
                category: termToCat[term.toLowerCase()] || "General Pathology"
            });
        }

        // Sort alphabetically by term
        return out.sort((a, b) => a.term.localeCompare(b.term));
    },

    _index: null,
    _regex: null,
    _lookup: null,
    _scrollHooked: false,

    _buildIndex() {
        this._lookup = {};
        const termKeys = Object.keys(this.terms);
        // Sort descending by string length to match multi-word expressions first
        termKeys.sort((a, b) => b.length - a.length);

        termKeys.forEach(t => {
            this._lookup[t.toLowerCase()] = this.terms[t];
        });

        // Safe regex escaping
        const escaped = termKeys.map(k => k.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
        this._regex = new RegExp(`\\b(${escaped.join('|')})\\b`, 'gi');
    },

    _positionTooltip(termSpan) {
        const rect = termSpan.getBoundingClientRect();
        const vw = window.innerWidth;
        const vh = window.innerHeight;
        const margin = 12;

        const ttWidth = Math.min(320, vw - margin * 2);
        let left = rect.left + rect.width / 2 - ttWidth / 2;
        let top = rect.bottom + 8;
        const ttEstHeight = 90;

        if (left + ttWidth > vw - margin) left = vw - ttWidth - margin;
        if (left < margin) left = margin;

        if (top + ttEstHeight > vh - margin) {
            const above = rect.top - ttEstHeight - 8;
            if (above >= margin) top = above;
        }

        termSpan.style.setProperty('--tt-left', left + 'px');
        termSpan.style.setProperty('--tt-top', top + 'px');
        termSpan.style.setProperty('--tt-width', ttWidth + 'px');
    },

    // Safely decorate text nodes without touching interactive or existing nodes
    decorate(root) {
        if (!root) return;
        if (!this._regex) this._buildIndex();
        if (!this._regex) return;

        const SKIP = new Set(['SCRIPT', 'STYLE', 'A', 'BUTTON', 'INPUT', 'TEXTAREA', 'CODE', 'PRE', 'SELECT']);
        const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
            acceptNode(node) {
                if (!node.textContent.trim()) return NodeFilter.FILTER_REJECT;
                let p = node.parentNode;
                while (p) {
                    if (!p.tagName) break;
                    if (SKIP.has(p.tagName)) return NodeFilter.FILTER_REJECT;
                    if (p.classList && p.classList.contains('gloss-term')) return NodeFilter.FILTER_REJECT;
                    p = p.parentNode;
                }
                return NodeFilter.FILTER_ACCEPT;
            }
        });

        const targets = [];
        let n;
        while ((n = walker.nextNode())) targets.push(n);

        targets.forEach((textNode) => {
            const text = textNode.textContent;
            if (!this._regex.test(text)) return;
            this._regex.lastIndex = 0;

            const frag = document.createDocumentFragment();
            let lastIdx = 0;
            let m;
            while ((m = this._regex.exec(text)) !== null) {
                if (m.index > lastIdx) {
                    frag.appendChild(document.createTextNode(text.slice(lastIdx, m.index)));
                }
                const span = document.createElement('span');
                span.className = 'gloss-term';
                span.textContent = m[0];
                const def = this._lookup[m[0].toLowerCase()] || '';
                span.dataset.def = def;
                span.setAttribute('tabindex', '0');
                span.setAttribute('role', 'button');
                span.setAttribute('aria-label', `Definition of ${m[0]}: ${def}`);

                const onShow = (e) => this._positionTooltip(e.currentTarget);
                span.addEventListener('mouseenter', onShow);
                span.addEventListener('focus', onShow);
                span.addEventListener('touchstart', onShow, { passive: true });

                // Double-click to pronounce aloud via SpeechSynthesis
                span.addEventListener('dblclick', (e) => {
                    e.preventDefault();
                    if (window.app && typeof window.app.speak === 'function') {
                        window.app.speak(e.currentTarget.textContent);
                    }
                });

                frag.appendChild(span);
                lastIdx = m.index + m[0].length;
            }

            if (lastIdx < text.length) {
                frag.appendChild(document.createTextNode(text.slice(lastIdx)));
            }

            textNode.parentNode.replaceChild(frag, textNode);
        });

        if (!this._scrollHooked) {
            this._scrollHooked = true;
            const reposition = () => {
                const active = document.querySelector('.gloss-term:hover, .gloss-term:focus');
                if (active) this._positionTooltip(active);
            };
            window.addEventListener('scroll', reposition, { passive: true, capture: true });
            window.addEventListener('resize', reposition, { passive: true });
        }
    },

    define(term) {
        if (!this._lookup) this._buildIndex();
        return this._lookup[term.toLowerCase()] || null;
    }
};

if (typeof window !== 'undefined') {
    window.glossary = glossary;
}
