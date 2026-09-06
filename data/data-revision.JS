/* ============================================================
   data-revision.JS  —  RAPID REVISION SHEETS (app copy)
   ------------------------------------------------------------
   *** GENERATED FILE — DO NOT EDIT BY HAND. ***

   The content lives in  revision/unit-1.html … unit-6.html,
   which are also the printable A4 sheets. After editing any of
   those, regenerate this file by double-clicking
       tools/rebuild-revision.bat
   (or running  python tools/build-revision-data.py).

   Shape:
     revisionData[unitId] = {
       id, no, title, paper, icon, pages, pageTitles, sheet,
       boxes: [ { id, n, page, tone, title, stars, kinds[], html } ],
       drill: [ { id, html } ]          // <u>…</u> marks the answer
     }
   tone t1..t6 = blue, teal, purple, amber, coral, sage
   ============================================================ */

var revisionData = {};

revisionData["unit-1"] = {
 "id": "unit-1",
 "no": 1,
 "title": "General Veterinary Pathology",
 "paper": "paper-1",
 "icon": "cell",
 "pages": 4,
 "pageTitles": [
  "General Veterinary Pathology",
  "Thrombosis → Infarction · Cell Injury · Necrosis",
  "Pigments · Calcification · Growth · Inflammation",
  "Mediators · Exudates · Healing · Immunopathology"
 ],
 "sheet": "revision/unit-1.html",
 "boxes": [
  {
   "id": "unit-1-b01",
   "n": 1,
   "page": 1,
   "tone": "t1",
   "title": "Words you are marked on",
   "stars": 0,
   "kinds": [
    "trap"
   ],
   "html": "<dl class=\"dl\">\n          <dt>Aetiology</dt><dd>the CAUSE</dd>\n          <dt>Pathogenesis</dt><dd>the MECHANISM: cause → lesion</dd>\n          <dt>Sequelae</dt><dd>what follows</dd>\n          <dt>Idiopathic</dt><dd>cause unknown</dd>\n          <dt>Iatrogenic</dt><dd>caused by the vet</dd>\n          <dt>Nosocomial</dt><dd>hospital-acquired</dd>\n          <dt>Pathognomonic</dt><dd>lesion diagnostic of ONE disease</dd>\n          <dt>Morbidity</dt><dd>% affected &nbsp;|&nbsp; <b>Mortality</b> % dying of total</dd>\n          <dt>Case fatality</dt><dd>% dying <i>of those affected</i></dd>\n        </dl>\n        <div class=\"trap\"><span class=\"lbl\">Names always asked</span>\n          <b>Virchow</b> — father of <b>modern/cellular</b> pathology; added <b>functio laesa</b>. <b>Celsus</b> — first <b>4</b> cardinal signs. <b>Morgagni</b> — organ pathology. <b>Bichat</b> — tissue. <b>Hippocrates</b> — humoral.</div>"
  },
  {
   "id": "unit-1-b02",
   "n": 2,
   "page": 1,
   "tone": "t2",
   "title": "Causes of disease",
   "stars": 0,
   "kinds": [
    "fact"
   ],
   "html": "<b class=\"k\">INTRINSIC</b> — genetic (lethal/sub-lethal genes, freemartin 60,XX/XY chimera); immunological; age · sex · species · breed.<br>\n        <b class=\"r\">EXTRINSIC</b> — physical (trauma, heat, cold, radiation, electricity, pressure); chemical (poisons, drugs, metals); nutritional (deficiency, excess, imbalance); biological (virus, bacteria, fungi, protozoa, helminth, arthropod, prion).\n        <div class=\"fact\"><span class=\"lbl\">One-liner</span> A <b>predisposing</b> factor makes disease likely; the <b>determining/specific</b> cause produces it.</div>"
  },
  {
   "id": "unit-1-b03",
   "n": 3,
   "page": 1,
   "tone": "t1",
   "title": "Branches &amp; course of disease",
   "stars": 0,
   "kinds": [
    "table",
    "fact"
   ],
   "html": "<b class=\"k\">Branches</b> — <b>General</b> (basic processes) · <b>Systemic/Special</b> (organ-wise) · <b>Clinical</b> (blood, urine, cytology) · <b>Surgical</b> (biopsy) · <b>Experimental</b> · <b>Comparative</b> · <b>Forensic/veterolegal</b>.\n        <table>\n          <tr><th>Course</th><th>Meaning</th><th>Course</th><th>Meaning</th></tr>\n          <tr><td><b>Peracute</b></td><td>Hours, often found dead</td><td><b>Subacute</b></td><td>Days–weeks</td></tr>\n          <tr><td><b>Acute</b></td><td>Sudden, short, severe</td><td><b>Chronic</b></td><td>Weeks–months, insidious</td></tr>\n        </table>\n        <b>Incubation</b> = infection → first sign · <b>Prodromal</b> = vague early signs · <b>Syndrome</b> = group of signs occurring together · <b>Lesion</b> = structural change · <b>Symptom</b> (felt) vs <b>Sign</b> (observed — all veterinary findings are signs).\n        <div class=\"fact\"><span class=\"lbl\">Diagnosis ladder</span> <b>Morphological</b> dx (e.g. \"acute diffuse fibrinous pneumonia\") → <b>Aetiological</b> dx (e.g. \"pasteurellosis\") → <b>Disease</b> dx (\"haemorrhagic septicaemia\").</div>"
  },
  {
   "id": "unit-1-b04",
   "n": 4,
   "page": 1,
   "tone": "t6",
   "title": "THE MASTER CHART — cell under stress",
   "stars": 0,
   "kinds": [
    "flow",
    "mem"
   ],
   "html": "<div class=\"flow grn\">\n          <div class=\"n\"><b>NORMAL CELL</b> — steady state</div>\n          <div class=\"ar\">↓ <span>increased demand / mild persistent stress</span></div>\n          <div class=\"n\"><b>ADAPTATION</b> — hypertrophy · hyperplasia · atrophy · metaplasia (<i>reversible, the cell is still alive and working</i>)</div>\n          <div class=\"ar\">↓ <span>stress exceeds adaptive capacity</span></div>\n          <div class=\"n\"><b>REVERSIBLE INJURY</b> — cloudy swelling, hydropic and fatty change (<i>remove the cause and the cell recovers</i>)</div>\n          <div class=\"ar\">↓ <span>severe or persistent: membrane + mitochondrial failure</span></div>\n          <div class=\"n\"><b>IRREVERSIBLE INJURY → CELL DEATH</b></div>\n          <div class=\"ar\">↓</div>\n          <div class=\"n\"><b>NECROSIS</b> (groups of cells, inflammation) &nbsp;·&nbsp; <b>APOPTOSIS</b> (single cells, no inflammation)</div>\n        </div>\n        <div class=\"mem\"><span class=\"lbl\">Six causes of cell injury</span> <b>Hypoxia / ischaemia (the commonest)</b> · physical agents · chemicals and drugs · infectious agents · immunological reactions · genetic and nutritional derangements.</div>\n        <b>Hypoxia</b> = low oxygen but blood is still flowing. <b>Ischaemia</b> = loss of blood supply, so oxygen <b>and</b> substrate are cut off and waste accumulates — therefore <b>ischaemia injures faster than hypoxia</b>."
  },
  {
   "id": "unit-1-b05",
   "n": 5,
   "page": 1,
   "tone": "t5",
   "title": "Hyperaemia vs Congestion",
   "stars": 0,
   "kinds": [
    "table",
    "trap"
   ],
   "html": "<table class=\"tc\">\n          <tr><th></th><th>Hyperaemia</th><th>Congestion</th></tr>\n          <tr><td>Nature</td><td class=\"c\"><b>ACTIVE</b></td><td class=\"c\"><b>PASSIVE</b></td></tr>\n          <tr><td>Mechanism</td><td>Arteriolar <b>dilation</b>, ↑inflow</td><td>Impaired venous <b>outflow</b></td></tr>\n          <tr><td>Blood / colour</td><td>Oxygenated, bright red</td><td>Deoxygenated, dark blue-red</td></tr>\n          <tr><td>Temperature</td><td>Warm</td><td>Cool</td></tr>\n          <tr><td>Example</td><td>Inflammation, exercise</td><td>Heart failure, torsion, hypostatic</td></tr>\n        </table>\n        <div class=\"trap\"><span class=\"lbl\">Chronic passive congestion</span>\n          <b>Liver = \"nutmeg liver\"</b> (centrilobular congestion + necrosis). <b>Lung = \"brown induration\"</b> with <b>heart-failure cells</b> = haemosiderin-laden alveolar macrophages, <b>Perls' positive</b>. Spleen = cyanotic induration.</div>"
  },
  {
   "id": "unit-1-b06",
   "n": 6,
   "page": 1,
   "tone": "t5",
   "title": "Haemorrhage",
   "stars": 0,
   "kinds": [
    "table"
   ],
   "html": "<table class=\"tc\">\n          <tr><th>Term</th><th>Size</th><th>Term</th><th>Meaning</th></tr>\n          <tr><td><b>Petechiae</b></td><td>&lt;3 mm</td><td><b>Suffusion</b></td><td>Diffuse sheet</td></tr>\n          <tr><td><b>Purpura</b></td><td>3 mm–1 cm</td><td><b>Haematoma</b></td><td>Confined mass</td></tr>\n          <tr><td><b>Ecchymosis</b></td><td>&gt;1 cm</td><td><b>Apoplexy</b></td><td>Massive, into organ</td></tr>\n        </table>\n        <b class=\"k\">Mechanism — only two:</b> <b>per rhexis</b> = actual <b>rupture</b>; <b>per diapedesis</b> = RBCs through an <b>intact</b> wall.\n        <div class=\"chips\">\n          <span class=\"chip\"><b>Epistaxis</b> nose</span><span class=\"chip\"><b>Haemoptysis</b> coughed</span>\n          <span class=\"chip\"><b>Haematemesis</b> vomited</span><span class=\"chip\"><b>Melena</b> black digested</span>\n          <span class=\"chip\"><b>Haematochezia</b> fresh</span><span class=\"chip\"><b>Haematuria</b></span>\n          <span class=\"chip\"><b>Haemo-</b>thorax/pericardium/peritoneum</span><span class=\"chip\"><b>Metrorrhagia</b> uterus</span>\n        </div>"
  },
  {
   "id": "unit-1-b07",
   "n": 7,
   "page": 1,
   "tone": "t5",
   "title": "Why an animal bleeds · what follows",
   "stars": 0,
   "kinds": [
    "table",
    "trap"
   ],
   "html": "<b class=\"k\">Haemorrhagic diathesis — 4 groups</b>\n        <table class=\"tc\">\n          <tr><th>Group</th><th>Examples</th></tr>\n          <tr><td><b>Vessel wall</b></td><td>Vitamin C deficiency, endotoxaemia, <b>anthrax</b>, <b>classical swine fever</b>, viral vasculitis, purpura haemorrhagica</td></tr>\n          <tr><td><b>Platelets</b></td><td>Thrombocytopenia — <b>ehrlichiosis</b>, <b>bracken fern</b>, immune-mediated, DIC</td></tr>\n          <tr><td><b>Clotting factors</b></td><td><b>Sweet clover (dicoumarol)</b>, warfarin rodenticide, <b>vitamin K deficiency</b>, liver failure, haemophilia A (factor VIII)</td></tr>\n          <tr><td><b>Combination</b></td><td><b>DIC</b>, snake envenomation, <b>aflatoxicosis</b></td></tr>\n        </table>\n        <b class=\"r\">Effects</b> depend on <b>rate, volume and site</b>. Rapid loss of <b>more than one-third of blood volume</b> is fatal; the same loss slowly is tolerated. A small bleed into the <b>brain stem or pericardium</b> kills, a large one into muscle does not.<br>\n        <b class=\"g\">Fate of shed blood</b> — RBC lysis → haemoglobin → <b>haemosiderin (iron+, Perls blue)</b> and <b>haematoidin (iron-free, golden)</b>. Colour march of a bruise: red → blue → green → yellow-brown.\n        <div class=\"trap\"><span class=\"lbl\">PM artefacts that mimic haemorrhage</span> <b>Hypostatic congestion</b> — blood settles in the down side, uniform, gravity-dependent, no swelling. <b>Haemoglobin imbibition</b> — red staining of intima and endocardium after death. Neither is an antemortem lesion.</div>"
  },
  {
   "id": "unit-1-b08",
   "n": 8,
   "page": 1,
   "tone": "t3",
   "title": "Oedema — the 5 mechanisms",
   "stars": 0,
   "kinds": [
    "table",
    "fact"
   ],
   "html": "<table class=\"tp\">\n          <tr><th>Mechanism</th><th>Classic cause</th></tr>\n          <tr><td><b>1 ↑ Hydrostatic pressure</b></td><td>CHF, portal hypertension, venous obstruction</td></tr>\n          <tr><td><b>2 ↓ Oncotic pressure</b> (hypoalbuminaemia)</td><td>Liver failure, protein-losing nephropathy/enteropathy, parasitism, starvation</td></tr>\n          <tr><td><b>3 Lymphatic obstruction</b></td><td>Lymphangitis, tumour, filariasis</td></tr>\n          <tr><td><b>4 ↑ Permeability</b></td><td>Inflammation, toxins, anaphylaxis</td></tr>\n          <tr><td><b>5 Na<sup>+</sup>/water retention</b></td><td>Renal disease, aldosterone</td></tr>\n        </table>\n        <div class=\"chips\">\n          <span class=\"chip\"><b>Anasarca</b> generalised SC</span><span class=\"chip\"><b>Ascites</b> peritoneum</span>\n          <span class=\"chip\"><b>Hydrothorax</b></span><span class=\"chip\"><b>Hydropericardium</b></span>\n          <span class=\"chip\"><b>Bottle jaw</b> submandibular</span>\n        </div>\n        <div class=\"fact\"><span class=\"lbl\">India</span> <b>Bottle jaw</b> = hypoalbuminaemic oedema of <b>haemonchosis</b> &amp; <b>fasciolosis</b>.</div>"
  },
  {
   "id": "unit-1-b09",
   "n": 9,
   "page": 1,
   "tone": "t3",
   "title": "Oedema — what you actually see",
   "stars": 0,
   "kinds": [
    "trap"
   ],
   "html": "<ul class=\"sm\">\n          <li><b>Gross:</b> tissue swollen and doughy, <b>pits on pressure</b>; cut surface <b>wet, glistening, drips clear straw fluid</b>; subcutis gelatinous</li>\n          <li><b>Micro:</b> pale <b>eosinophilic homogeneous</b> fluid separating fibres, widened interstitium, dilated lymphatics</li>\n          <li><b>Pulmonary oedema</b> — heavy wet lungs, <b>froth in trachea and bronchi</b>, alveoli filled with pink fluid; the animal drowns in its own plasma</li>\n          <li><b>Cerebral oedema</b> — flattened gyri, narrowed sulci, <b>coning of the cerebellum</b> into the foramen magnum</li>\n        </ul>\n        <div class=\"trap\"><span class=\"lbl\">The distinction that answers most questions</span> <b>Inflammatory oedema = EXUDATE</b> (high protein, cells, clots, Rivalta +). <b>Non-inflammatory oedema = TRANSUDATE</b> (low protein, no clot, Rivalta −).</div>"
  },
  {
   "id": "unit-1-b10",
   "n": 10,
   "page": 1,
   "tone": "t4",
   "title": "TRANSUDATE vs EXUDATE",
   "stars": 3,
   "kinds": [
    "table",
    "trap"
   ],
   "html": "<table class=\"ta\">\n          <tr><th>Feature</th><th>Transudate</th><th>Exudate</th></tr>\n          <tr><td>Cause</td><td>Haemodynamic</td><td><b>Inflammatory</b></td></tr>\n          <tr><td><b>Specific gravity</b></td><td><b>&lt; 1.012</b></td><td><b>&gt; 1.018</b></td></tr>\n          <tr><td><b>Protein</b></td><td>&lt; 2.5 g/dl</td><td>&gt; 3.0 g/dl</td></tr>\n          <tr><td>Nucleated cells</td><td>&lt; 1000/µl</td><td>&gt; 5000/µl</td></tr>\n          <tr><td>Look</td><td>Clear, watery, straw</td><td>Turbid, may be purulent</td></tr>\n          <tr><td><b>Clotting</b></td><td><b>Does NOT clot</b> (no fibrinogen)</td><td><b>Clots</b></td></tr>\n          <tr><td><b>Rivalta test</b></td><td>Negative</td><td><b>Positive</b></td></tr>\n        </table>\n        <div class=\"trap\"><span class=\"lbl\">Trap</span> A <b>modified transudate</b> lies between (SG 1.012–1.025) — classic in <b>right-sided heart failure</b> and hepatic disease.</div>"
  },
  {
   "id": "unit-1-b11",
   "n": 11,
   "page": 1,
   "tone": "t5",
   "title": "SHOCK — circulatory collapse",
   "stars": 0,
   "kinds": [
    "table",
    "flow"
   ],
   "html": "<table class=\"tc\">\n          <tr><th>Type</th><th>Mechanism</th><th>Example</th></tr>\n          <tr><td><b>Hypovolaemic</b></td><td>↓ blood volume</td><td>Haemorrhage, burns, severe diarrhoea, dehydration</td></tr>\n          <tr><td><b>Cardiogenic</b></td><td>Pump failure</td><td>Myocarditis, tamponade, arrhythmia</td></tr>\n          <tr><td><b>Distributive</b></td><td>Massive vasodilation</td><td><b>Septic / endotoxic</b> (Gram-negative LPS), <b>anaphylactic</b>, neurogenic</td></tr>\n        </table>\n        <div class=\"chain red\"><span class=\"s\"><b>1 Non-progressive</b><br>compensated: tachycardia, vasoconstriction</span><span class=\"a2\">→</span>\n          <span class=\"s\"><b>2 Progressive</b><br>hypoperfusion, lactic acidosis</span><span class=\"a2\">→</span>\n          <span class=\"s\"><b>3 Irreversible</b><br>DIC, multi-organ failure, death</span></div>\n        <b>Shock lesions at PM:</b> pulmonary oedema &amp; congestion, \"<b>shock kidney</b>\" (acute tubular necrosis), gut mucosal congestion/necrosis, adrenal cortical depletion, DIC microthrombi."
  },
  {
   "id": "unit-1-b12",
   "n": 12,
   "page": 1,
   "tone": "t5",
   "title": "DIC — \"consumption coagulopathy\"",
   "stars": 0,
   "kinds": [
    "flow"
   ],
   "html": "<div class=\"chain red\"><span class=\"s\">Trigger: endotoxin, sepsis, heat stroke, snake bite, neoplasia, severe trauma</span><span class=\"a2\">→</span>\n          <span class=\"s\"><b>Widespread microthrombi</b></span><span class=\"a2\">→</span>\n          <span class=\"s\"><b>Consumption</b> of platelets &amp; clotting factors</span><span class=\"a2\">→</span>\n          <span class=\"s\"><b>Paradoxical BLEEDING</b></span></div>\n        <b>Lab:</b> ↓platelets · ↑PT &amp; APTT · ↓fibrinogen · <b>↑FDPs / D-dimer</b> · <b>schistocytes</b> (fragmented RBCs) on smear. <b>PM:</b> petechiae/ecchymoses everywhere + fibrin microthrombi in glomeruli, lung, liver."
  },
  {
   "id": "unit-1-b13",
   "n": 13,
   "page": 2,
   "tone": "t5",
   "title": "Thrombosis — VIRCHOW'S TRIAD",
   "stars": 0,
   "kinds": [
    "flow"
   ],
   "html": "<div class=\"chain red\">\n          <span class=\"s\"><b>1</b> Endothelial injury</span><span class=\"a2\">+</span>\n          <span class=\"s\"><b>2</b> Altered flow<br>stasis / turbulence</span><span class=\"a2\">+</span>\n          <span class=\"s\"><b>3</b> Hyper-coagulability</span>\n        </div>\n        <b>Endothelial injury</b> = the single most important factor (heart, arteries); <b>stasis</b> dominates in <b>veins</b>.<br>\n        <b class=\"r\">Fate (4):</b> propagation · embolisation · dissolution (plasmin) · <b>organisation &amp; recanalisation</b>."
  },
  {
   "id": "unit-1-b14",
   "n": 14,
   "page": 2,
   "tone": "t5",
   "title": "Naming a thrombus",
   "stars": 0,
   "kinds": [
    "table"
   ],
   "html": "<table class=\"tc\">\n          <tr><th>By site</th><th>By composition</th></tr>\n          <tr><td><b>Mural</b> — on a heart or large-vessel wall<br><b>Valvular</b> — vegetative endocarditis<br><b>Occlusive</b> — blocks the lumen<br><b>Saddle</b> — straddles a bifurcation<br><b>Cardiac / arterial / venous / capillary</b></td><td><b>Pale (white)</b> — platelet + fibrin, arterial, fast flow<br><b>Red</b> — RBC-rich, venous, slow flow<br><b>Mixed (laminated)</b> — commonest, shows <b>lines of Zahn</b><br><b>Hyaline</b> — capillary, in DIC</td></tr>\n        </table>\n        <b>Effects:</b> ischaemia → <b>infarction</b> · congestion and oedema behind a venous thrombus · embolism · <b>septic</b> spread from an infected thrombus."
  },
  {
   "id": "unit-1-b15",
   "n": 15,
   "page": 2,
   "tone": "t5",
   "title": "Thrombus vs Post-mortem clot",
   "stars": 3,
   "kinds": [
    "table",
    "fact"
   ],
   "html": "<table class=\"tc\">\n          <tr><th></th><th>Thrombus (antemortem)</th><th>PM clot</th></tr>\n          <tr><td>Surface</td><td><b>Dull, dry, granular</b></td><td><b>Shiny, moist</b></td></tr>\n          <tr><td>Feel</td><td>Firm, friable</td><td>Rubbery, gelatinous</td></tr>\n          <tr><td>Attachment</td><td><b>Firmly attached</b></td><td>Lifts out freely</td></tr>\n          <tr><td>Shape</td><td>Does <b>not</b> fit vessel</td><td>Perfect <b>cast</b> of vessel</td></tr>\n          <tr><td><b>Lines of Zahn</b></td><td><b>PRESENT</b></td><td>Absent</td></tr>\n          <tr><td>Layers</td><td>—</td><td>\"<b>Chicken fat</b>\" over \"<b>currant jelly</b>\"</td></tr>\n        </table>\n        <div class=\"fact\"><span class=\"lbl\">Define</span> <b>Lines of Zahn</b> = alternating pale platelet-fibrin and dark RBC layers — proof the clot formed in <b>flowing blood</b>, i.e. during life.</div>"
  },
  {
   "id": "unit-1-b16",
   "n": 16,
   "page": 2,
   "tone": "t4",
   "title": "Embolism",
   "stars": 0,
   "kinds": [
    "trap"
   ],
   "html": "<b>Thromboembolism</b> ~99% · <b>fat</b> (long-bone fracture) · <b>air/gas</b> (IV injection, bends) · <b>septic</b> (valvular endocarditis → embolic nephritis) · <b>parasitic</b> (<i>Strongylus vulgaris</i> — cranial mesenteric a. of horse) · neoplastic · amniotic fluid · foreign body.\n        <div class=\"trap\"><span class=\"lbl\">Direction rule</span> <b>Venous</b> emboli lodge in the <b>LUNG</b>. <b>Arterial/left-heart</b> emboli go to brain, kidney, spleen, limbs. <b>Paradoxical</b> embolus crosses a septal defect. <b>Saddle thrombus</b> at the aortic trifurcation = classic <b>cat</b> with HCM.</div>"
  },
  {
   "id": "unit-1-b17",
   "n": 17,
   "page": 2,
   "tone": "t5",
   "title": "Infarct — RED vs WHITE",
   "stars": 0,
   "kinds": [
    "table"
   ],
   "html": "<table class=\"tc\">\n          <tr><th></th><th>Red (haemorrhagic)</th><th>White (pale/anaemic)</th></tr>\n          <tr><td>Tissue</td><td><b>Loose</b>, spongy</td><td><b>Solid, compact</b></td></tr>\n          <tr><td>Supply</td><td><b>Dual</b> circulation</td><td><b>End-arterial</b></td></tr>\n          <tr><td>Occlusion</td><td>Often <b>venous</b></td><td>Arterial</td></tr>\n          <tr><td>Organs</td><td><b>Lung, intestine, testis</b></td><td><b>Kidney, heart, spleen</b></td></tr>\n        </table>\n        Shape = <b>wedge/cone, apex toward the occluded vessel</b>, base at capsule. Necrosis = <b>coagulative</b>, <b>except the BRAIN which liquefies</b>. Old infarct = pale depressed <b>scar</b>."
  },
  {
   "id": "unit-1-b18",
   "n": 18,
   "page": 2,
   "tone": "t5",
   "title": "What decides whether an infarct forms",
   "stars": 0,
   "kinds": [
    "fact"
   ],
   "html": "<ul class=\"num sm\">\n          <li><b>Type of blood supply</b> — a <b>dual</b> supply (lung, liver) protects; an <b>end-artery</b> (kidney, spleen, retina) does not</li>\n          <li><b>Rate of occlusion</b> — slow occlusion lets <b>collaterals</b> open, so no infarct forms</li>\n          <li><b>Vulnerability to hypoxia</b> — <b>neuron 3–5 min</b> &lt; myocardium 20–30 min &lt; fibroblast hours</li>\n          <li><b>Oxygen content of the blood</b> — anaemia and heart failure make infarction more likely</li>\n        </ul>\n        <div class=\"fact\"><span class=\"lbl\">Timeline of a white infarct</span> 0–24 h pale, swollen, with a <b>red hyperaemic rim</b> → 2–4 days yellow-white, sharply demarcated, leucocytes at the margin → 1–2 weeks granulation tissue moves in → weeks to months a <b>depressed pale fibrous scar</b>.</div>"
  },
  {
   "id": "unit-1-b19",
   "n": 19,
   "page": 2,
   "tone": "t2",
   "title": "Reversible cell injury",
   "stars": 0,
   "kinds": [
    "flow",
    "trap"
   ],
   "html": "<div class=\"chain grn\">\n          <span class=\"s\">Hypoxia</span><span class=\"a2\">→</span><span class=\"s\">↓ATP</span><span class=\"a2\">→</span>\n          <span class=\"s\"><b>Na⁺/K⁺ ATPase fails</b></span><span class=\"a2\">→</span>\n          <span class=\"s\">Na⁺ + H₂O enter</span><span class=\"a2\">→</span><span class=\"s\"><b>Cell swelling</b></span>\n        </div>\n        <ul class=\"sm\">\n          <li><b>Cloudy swelling</b> — <b>earliest &amp; commonest</b>; organ pale, swollen, heavy, dull \"parboiled\", cut surface bulges</li>\n          <li><b>Hydropic/vacuolar</b> — larger clear vacuoles</li>\n          <li><b>Hyaline</b> — glassy pink homogeneous (Russell bodies, hyaline casts)</li>\n          <li><b>Zenker's (waxy)</b> — of <b>skeletal muscle</b>: white muscle disease, blackleg, capture myopathy</li>\n          <li><b>Mucoid/mucinous</b> degeneration</li>\n        </ul>\n        <div class=\"trap\"><span class=\"lbl\">Point of no return</span> <b>Membrane damage</b> + <b>mitochondrial permeability transition</b> + massive <b>Ca²⁺ influx</b>. Clinically = leaked enzymes (ALT, AST, CK, LDH).</div>"
  },
  {
   "id": "unit-1-b20",
   "n": 20,
   "page": 2,
   "tone": "t2",
   "title": "FATTY CHANGE &amp; GLYCOGEN",
   "stars": 1,
   "kinds": [
    "flow",
    "trap",
    "mem"
   ],
   "html": "<b class=\"k\">FATTY CHANGE (steatosis)</b> — abnormal <b>triglyceride</b> accumulation, chiefly in the <b>LIVER</b> (also heart, kidney).\n        <div class=\"chain amb\"><span class=\"s\">↑ FFA delivery</span><span class=\"a2\">·</span><span class=\"s\">↑ TG synthesis</span><span class=\"a2\">·</span>\n          <span class=\"s\">↓ Apoprotein / lipoprotein export</span><span class=\"a2\">·</span><span class=\"s\">↓ β-oxidation</span></div>\n        <ul class=\"sm\">\n          <li><b>Causes:</b> hypoxia · <b>ketosis of crossbred cows</b> · <b>pregnancy toxaemia</b> of ewes/does · <b>feline hepatic lipidosis</b> · <b>aflatoxin</b> · CCl₄, phosphorus · protein-energy malnutrition · diabetes mellitus · copper &amp; choline deficiency</li>\n          <li><b>Gross:</b> liver <b>enlarged, yellow, greasy, soft, rounded borders</b>, greasy knife; cut surface bulges; <b>FLOATS in water/formalin</b></li>\n          <li><b>Micro (H&amp;E):</b> sharply punched-out <b>clear round vacuoles</b> displacing the nucleus — the fat is <b>dissolved out</b> by paraffin processing</li>\n          <li><b>To prove it is fat:</b> <b>FROZEN section</b> + <b>Sudan III / IV</b> (orange-red), <b>Oil Red O</b> (red), <b>Osmium tetroxide</b> (black)</li>\n        </ul>\n        <div class=\"trap\"><span class=\"lbl\">Fatty change vs fatty infiltration</span> <b>Fatty change</b> = fat <b>inside parenchymal cells</b> (pathological). <b>Fatty infiltration</b> = mature <b>adipocytes between</b> cells (obesity, largely physiological).</div>\n        <div class=\"mem\"><span class=\"lbl\">Glycogen</span> Excess in <b>diabetes mellitus</b>, <b>hyperadrenocorticism/steroids</b> (\"steroid hepatopathy\" of the dog), glycogen storage disease. Stain <b>PAS → magenta</b>; confirm by <b>diastase digestion</b> — glycogen <b>disappears</b>, so PAS+ / diastase-labile. Fix in <b>alcohol or Carnoy's</b>, because aqueous fixatives dissolve glycogen.</div>"
  },
  {
   "id": "unit-1-b21",
   "n": 21,
   "page": 2,
   "tone": "t5",
   "title": "NECROSIS",
   "stars": 0,
   "kinds": [
    "table",
    "flow"
   ],
   "html": "<div class=\"chain red\">\n          <span class=\"s\"><b>Pyknosis</b><br>shrunken, dense</span><span class=\"a2\">→</span>\n          <span class=\"s\"><b>Karyorrhexis</b><br>fragmented</span><span class=\"a2\">→</span>\n          <span class=\"s\"><b>Karyolysis</b><br>faded away</span>\n        </div>\n        Earliest cytoplasmic sign = <b>increased eosinophilia</b> (loss of basophilic RNA).\n        <table class=\"tc\">\n          <tr><th>Type</th><th>Key point</th></tr>\n          <tr><td><b>Coagulative</b></td><td><b>Commonest</b>; ischaemia; protein denaturation; <b>architecture preserved</b>; kidney, heart, spleen</td></tr>\n          <tr><td><b>Liquefactive</b></td><td><b>BRAIN</b> + <b>pyogenic bacteria</b> → abscess</td></tr>\n          <tr><td><b>Caseous</b></td><td><b>Cheesy, dry, crumbly</b>; TB, caseous lymphadenitis; architecture <b>lost</b></td></tr>\n          <tr><td><b>Fat</b></td><td><b>Enzymatic</b> (pancreatic lipase) → chalky-white saponification; also traumatic; abdominal fat necrosis of cattle</td></tr>\n          <tr><td><b>Fibrinoid</b></td><td>Bright pink in <b>vessel walls</b>; immune-complex vasculitis</td></tr>\n        </table>"
  },
  {
   "id": "unit-1-b22",
   "n": 22,
   "page": 2,
   "tone": "t5",
   "title": "Fate of necrotic tissue",
   "stars": 0,
   "kinds": [
    "flow"
   ],
   "html": "<div class=\"chain red\"><span class=\"s\"><b>Lysis + phagocytosis</b><br>small focus removed completely</span><span class=\"a2\">·</span>\n          <span class=\"s\"><b>Regeneration</b><br>if framework and labile cells survive</span><span class=\"a2\">·</span>\n          <span class=\"s\"><b>Organisation → SCAR</b><br>the usual outcome</span></div>\n        <div class=\"chain red\"><span class=\"s\"><b>Encapsulation</b><br>fibrous wall, e.g. abscess</span><span class=\"a2\">·</span>\n          <span class=\"s\"><b>Dystrophic calcification</b><br>caseous TB</span><span class=\"a2\">·</span>\n          <span class=\"s\"><b>Sequestrum</b><br>dead bone walled off</span><span class=\"a2\">·</span>\n          <span class=\"s\"><b>Slough / ulcer / gangrene</b></span></div>\n        <b>Markers of necrosis in blood:</b> <b>ALT and SDH</b> liver · <b>AST and CK</b> muscle · <b>ALP and GGT</b> biliary · amylase and lipase pancreas · <b>troponin I</b> myocardium."
  },
  {
   "id": "unit-1-b23",
   "n": 23,
   "page": 2,
   "tone": "t6",
   "title": "APOPTOSIS vs NECROSIS",
   "stars": 3,
   "kinds": [
    "table",
    "fact"
   ],
   "html": "<table class=\"tg\">\n          <tr><th></th><th>Apoptosis</th><th>Necrosis</th></tr>\n          <tr><td>Nature</td><td><b>Programmed</b>, physiological</td><td>Pathological</td></tr>\n          <tr><td>Extent</td><td><b>Single scattered cells</b></td><td><b>Groups</b> of cells</td></tr>\n          <tr><td>Cell</td><td><b>Shrinks</b></td><td><b>Swells</b></td></tr>\n          <tr><td>Membrane</td><td><b>Intact</b> (blebs)</td><td><b>Ruptures</b></td></tr>\n          <tr><td>Energy</td><td><b>ATP required</b></td><td>ATP-independent</td></tr>\n          <tr><td>Inflammation</td><td><b>ABSENT</b></td><td><b>PRESENT</b></td></tr>\n          <tr><td>Enzymes</td><td><b>Caspases</b></td><td>Lysosomal hydrolases</td></tr>\n          <tr><td>DNA gel</td><td><b>LADDER</b> (180–200 bp)</td><td><b>SMEAR</b></td></tr>\n          <tr><td>Marker</td><td>Phosphatidylserine flip → <b>Annexin V</b>, TUNEL</td><td>Enzyme leakage</td></tr>\n        </table>\n        <div class=\"fact\"><span class=\"lbl\">Named body</span> <b>Councilman body</b> = apoptotic hepatocyte (infectious canine hepatitis, viral hepatitis).</div>"
  },
  {
   "id": "unit-1-b24",
   "n": 24,
   "page": 2,
   "tone": "t3",
   "title": "Necrosis vs PM AUTOLYSIS",
   "stars": 3,
   "kinds": [
    "table",
    "trap"
   ],
   "html": "<table class=\"tp\">\n          <tr><th></th><th>Necrosis</th><th>Autolysis</th></tr>\n          <tr><td>When</td><td><b>During life</b></td><td><b>After death</b></td></tr>\n          <tr><td>Distribution</td><td><b>Focal</b>, sharply limited</td><td><b>Diffuse, uniform</b>, whole body</td></tr>\n          <tr><td>Demarcation zone</td><td><b>Present</b></td><td><b>Absent</b></td></tr>\n          <tr><td>Inflammation</td><td><b>Present</b> (vital reaction)</td><td><b>Absent</b></td></tr>\n        </table>\n        <div class=\"trap\"><span class=\"lbl\">Field rule</span> <b>No vital reaction = the animal was already dead.</b> Autolysis is fastest in India's heat, and fastest in <b>gut mucosa, pancreas, adrenal medulla, gall bladder</b>.</div>"
  },
  {
   "id": "unit-1-b25",
   "n": 25,
   "page": 2,
   "tone": "t5",
   "title": "GANGRENE — 3 types",
   "stars": 0,
   "kinds": [
    "table"
   ],
   "html": "<table class=\"tc\">\n          <tr><th></th><th>Dry</th><th>Moist (wet)</th><th>Gas</th></tr>\n          <tr><td>Vessels</td><td><b>Artery</b> blocked, vein open</td><td><b>Both</b> blocked</td><td>Any + toxin</td></tr>\n          <tr><td>Tissue</td><td>Dry, shrunken, <b>mummified</b>, black</td><td>Swollen, soft, foul</td><td><b>Crepitant</b>, emphysematous</td></tr>\n          <tr><td>Demarcation</td><td><b>Clear</b></td><td><b>Absent</b></td><td>Absent</td></tr>\n          <tr><td>Site</td><td>Ear tip, tail, teat, foot</td><td>Lung, gut, udder, uterus</td><td>Muscle</td></tr>\n          <tr><td>Cause</td><td><b>Ergot</b>, fescue, frostbite, tight bandage</td><td>Aspiration pneumonia, gangrenous mastitis, torsion</td><td><b><i>Cl. chauvoei</i></b> (blackleg), <i>Cl. septicum</i>, <i>Cl. perfringens</i></td></tr>\n        </table>"
  },
  {
   "id": "unit-1-b26",
   "n": 26,
   "page": 3,
   "tone": "t4",
   "title": "PIGMENTS — the stain IS the answer",
   "stars": 0,
   "kinds": [
    "table"
   ],
   "html": "<b class=\"k\">EXOGENOUS</b> — <b>anthracosis</b> (carbon, lung + bronchial nodes) · silicosis · tattoo · <b>lead line</b> on gums · <b>carotenoid</b> yellow fat of <b>Jersey/Guernsey</b> (normal) · <b>tetracycline</b> yellow teeth, <b>UV-fluorescent</b>.\n        <table class=\"ta\">\n          <tr><th>Endogenous</th><th>Nature / Stain</th></tr>\n          <tr><td><b>Haemosiderin</b></td><td>Iron+, golden-brown; <b>Perls' Prussian blue</b> → <b>BLUE</b></td></tr>\n          <tr><td><b>Haematoidin</b></td><td><b>Iron-FREE</b>, golden crystals in centre of old haemorrhage; <b>Perls' NEGATIVE</b></td></tr>\n          <tr><td><b>Bilirubin</b></td><td>Icterus. van den Bergh <b>direct</b> = obstructive/hepatic; <b>indirect</b> = haemolytic</td></tr>\n          <tr><td><b>Formalin pigment</b><br>(acid haematin)</td><td><b>ARTEFACT</b> of <b>unbuffered</b> formalin; brown-black, <b>birefringent</b>. Prevented by <b>10% neutral buffered formalin</b></td></tr>\n          <tr><td><b>Parasitic haematin</b></td><td>Black liver in <b>fasciolosis</b></td></tr>\n          <tr><td><b>Melanin</b></td><td><b>Masson–Fontana</b> +, bleached by H₂O₂, <b>Perls' negative</b>. <b>Melanosis</b> = harmless congenital black spots in lung/meninges of calves &amp; pigs</td></tr>\n          <tr><td><b>Lipofuscin</b></td><td>\"<b>Wear-and-tear</b>\" ageing pigment → <b>brown atrophy</b> of heart/liver; PAS+, <b>acid-fast</b></td></tr>\n          <tr><td><b>Porphyrin</b></td><td>Congenital erythropoietic porphyria — \"<b>pink tooth</b>\", pink bone, <b>red UV fluorescence</b>; Holstein</td></tr>\n        </table>"
  },
  {
   "id": "unit-1-b27",
   "n": 27,
   "page": 3,
   "tone": "t4",
   "title": "ICTERUS (jaundice) — 3 types",
   "stars": 1,
   "kinds": [
    "table",
    "fact"
   ],
   "html": "<table class=\"ta\">\n          <tr><th></th><th>Pre-hepatic<br>(haemolytic)</th><th>Hepatic<br>(toxic)</th><th>Post-hepatic<br>(obstructive)</th></tr>\n          <tr><td><b>Bilirubin type</b></td><td><b>Indirect</b> (unconjugated)</td><td>Both</td><td><b>Direct</b> (conjugated)</td></tr>\n          <tr><td><b>van den Bergh</b></td><td>Indirect +</td><td>Biphasic</td><td>Direct +</td></tr>\n          <tr><td>Urine bilirubin</td><td><b>Absent</b> (water-insoluble)</td><td>Present</td><td><b>Present</b></td></tr>\n          <tr><td>Faeces</td><td>Dark</td><td>Normal/pale</td><td><b>Pale, clay-coloured</b></td></tr>\n          <tr><td>Example</td><td>Babesiosis, anaplasmosis, copper toxicity, neonatal isoerythrolysis</td><td>Aflatoxin, leptospirosis, CCl₄</td><td>Fasciolosis, gall stone, ascarid in bile duct, tumour</td></tr>\n        </table>\n        <div class=\"fact\"><span class=\"lbl\">India</span> Jaundice in a crossbred cow in the tick season = think <b>babesiosis / theileriosis</b> before liver disease.</div>"
  },
  {
   "id": "unit-1-b28",
   "n": 28,
   "page": 3,
   "tone": "t6",
   "title": "CALCIFICATION",
   "stars": 3,
   "kinds": [
    "table",
    "mem",
    "fact"
   ],
   "html": "<table class=\"tg\">\n          <tr><th></th><th>Dystrophic</th><th>Metastatic</th></tr>\n          <tr><td>Tissue</td><td><b>Dead / dying</b></td><td><b>Normal, living</b></td></tr>\n          <tr><td><b>Serum Ca</b></td><td><b>NORMAL</b></td><td><b>RAISED</b></td></tr>\n          <tr><td>Spread</td><td>Local</td><td>Widespread</td></tr>\n          <tr><td>Cause</td><td>Caseous TB, fat necrosis, old infarct, dead parasites, atheroma</td><td>Vitamin D toxicity, <b>enzootic calcinosis</b> (<i>Solanum malacoxylon</i>, <i>Trisetum</i>), hyperparathyroidism, CRF, bone lysis</td></tr>\n        </table>\n        <div class=\"fact\"><span class=\"lbl\">Metastatic sites</span> <b>Lung · Kidney · Gastric mucosa · Systemic arteries · Pleura</b> — the tissues that <b>lose acid</b> and are internally alkaline.</div>\n        <div class=\"mem\"><span class=\"lbl\">Stains</span> <b>von Kossa → BLACK</b> (detects phosphate). <b>Alizarin Red S → orange-red</b> (detects calcium itself).</div>\n        <b>Calcinosis circumscripta</b> — nodules on pressure points, large dogs. <b>Calcinosis cutis</b> — hyperadrenocorticism. <b>Gout</b> = urate, NOT calcification."
  },
  {
   "id": "unit-1-b29",
   "n": 29,
   "page": 3,
   "tone": "t3",
   "title": "AMYLOIDOSIS",
   "stars": 0,
   "kinds": [
    "mem"
   ],
   "html": "<ul class=\"sm\">\n          <li><b>β-pleated sheet</b>, non-branching fibrils <b>7.5–10 nm</b> + <b>P component</b></li>\n          <li><b>AA (secondary/reactive)</b> from <b>SAA</b> — <b>commonest in animals</b>; chronic suppuration, TB, hyperimmunised horses. <b>AL (primary)</b> = Ig <b>light chain</b></li>\n          <li>Order: <b>KIDNEY (glomerulus) first</b> → liver → spleen → adrenal. Renal amyloid → <b>protein-losing nephropathy</b></li>\n          <li><b>Sago spleen</b> = nodular/follicular · <b>Lardaceous (bacon) spleen</b> = diffuse red pulp</li>\n        </ul>\n        <div class=\"mem\"><span class=\"lbl\">Stains ★★★</span> <b>Congo red</b> → salmon-red in ordinary light, <b>APPLE-GREEN BIREFRINGENCE</b> in <b>polarised</b> light. <b>Methyl/crystal violet</b> → metachromatic pink-red. <b>Thioflavin T</b> → fluorescent. Gross: <b>Lugol's iodine + dilute H₂SO₄</b> → mahogany brown → blue-violet.</div>"
  },
  {
   "id": "unit-1-b30",
   "n": 30,
   "page": 3,
   "tone": "t4",
   "title": "PHOTOSENSITIZATION — 4 types",
   "stars": 0,
   "kinds": [
    "table",
    "trap"
   ],
   "html": "<table class=\"ta\">\n          <tr><th>Type</th><th>Mechanism &amp; agent</th></tr>\n          <tr><td><b>I Primary</b></td><td>Preformed agent eaten: <b>hypericin</b> (St John's wort), <b>fagopyrin</b> (buckwheat), phenothiazine</td></tr>\n          <tr><td><b>II</b></td><td>Aberrant <b>pigment metabolism</b> — congenital erythropoietic porphyria, bovine protoporphyria</td></tr>\n          <tr><td><b>III Hepatogenous</b></td><td><b>COMMONEST.</b> Liver damage → <b>phylloerythrin</b> (chlorophyll product) not excreted in bile. <b><i>Lantana camara</i> (lantadene A)</b>, <i>Tribulus</i>, <i>Panicum</i>, <b>sporidesmin</b> (facial eczema, <i>Pithomyces chartarum</i>)</td></tr>\n          <tr><td><b>IV</b></td><td>Idiopathic</td></tr>\n        </table>\n        <div class=\"trap\"><span class=\"lbl\">Lesion rule</span> Only <b>WHITE (unpigmented), hairless, sun-exposed</b> skin — muzzle, eyelid, ear, teat, perineum, coronet. Sunburn hits pigmented skin too; photosensitization does not.</div>"
  },
  {
   "id": "unit-1-b31",
   "n": 31,
   "page": 3,
   "tone": "t3",
   "title": "Disturbances of GROWTH",
   "stars": 0,
   "kinds": [
    "trap"
   ],
   "html": "<dl class=\"dl\">\n          <dt>Agenesis</dt><dd>primordium <b>never formed</b></dd>\n          <dt>Aplasia</dt><dd>primordium present, <b>no development</b></dd>\n          <dt>Hypoplasia</dt><dd><b>incomplete</b> development</dd>\n          <dt>Atrophy</dt><dd><b>shrinkage of a once-normal</b> organ</dd>\n          <dt>Hypertrophy</dt><dd>↑ cell <b>SIZE</b></dd>\n          <dt>Hyperplasia</dt><dd>↑ cell <b>NUMBER</b></dd>\n          <dt>Metaplasia</dt><dd><b>reversible</b> swap of one mature cell type for another</dd>\n          <dt>Dysplasia</dt><dd>disordered growth — <b>pre-neoplastic</b></dd>\n          <dt>Anaplasia</dt><dd><b>loss of differentiation</b> — malignancy</dd>\n        </dl>\n        <div class=\"trap\"><span class=\"lbl\">Traps</span> ① <b>Permanent</b> cells (cardiac, skeletal muscle, neuron) can only <b>hypertrophy</b>, never hyperplase. ② <b>Squamous metaplasia</b> = classic <b>vitamin A deficiency</b>. ③ Atrophy causes: <b>disuse, denervation, ischaemia, nutritional, pressure, loss of endocrine stimulus, ageing</b>. ④ <b>Serous atrophy of fat</b> — gelatinous coronary-groove &amp; marrow fat = cachexia.</div>"
  },
  {
   "id": "unit-1-b32",
   "n": 32,
   "page": 3,
   "tone": "t3",
   "title": "Adaptations — named examples",
   "stars": 0,
   "kinds": [
    "table",
    "fact"
   ],
   "html": "<table class=\"tp\">\n          <tr><th>Adaptation</th><th>Physiological</th><th>Pathological</th></tr>\n          <tr><td><b>Hypertrophy</b></td><td>Pregnant uterus, working muscle</td><td>Cardiac hypertrophy in valvular disease · <b>bladder wall</b> in urethral obstruction</td></tr>\n          <tr><td><b>Hyperplasia</b></td><td>Mammary gland in pregnancy, liver after partial resection</td><td><b>Goitre</b> (iodine deficiency) · endometrial and prostatic hyperplasia · skin callus</td></tr>\n          <tr><td><b>Atrophy</b></td><td>Thymus, involuting uterus</td><td>Disuse after fracture · <b>denervation</b> muscle atrophy · <b>hydronephrosis</b> (pressure) · starvation</td></tr>\n          <tr><td><b>Metaplasia</b></td><td>—</td><td><b>Squamous</b> metaplasia in <b>vitamin A deficiency</b> and chronic irritation · <b>osseous</b> metaplasia in old scars and lung · <b>myeloid</b> metaplasia of the spleen</td></tr>\n        </table>\n        <div class=\"fact\"><span class=\"lbl\">Direction of thinking</span> Adaptation is <b>reversible and purposeful</b> — remove the stimulus and the tissue returns. <b>Dysplasia</b> is where control begins to fail; <b>neoplasia</b> is where it is lost permanently.</div>"
  },
  {
   "id": "unit-1-b33",
   "n": 33,
   "page": 3,
   "tone": "t1",
   "title": "INFLAMMATION — signs &amp; vascular sequence",
   "stars": 0,
   "kinds": [
    "flow",
    "mem"
   ],
   "html": "<div class=\"chips\">\n          <span class=\"chip\"><b>Rubor</b> red</span><span class=\"chip\"><b>Calor</b> heat</span>\n          <span class=\"chip\"><b>Tumor</b> swelling</span><span class=\"chip\"><b>Dolor</b> pain</span>\n          <span class=\"chip\"><b>Functio laesa</b> loss of function</span>\n        </div>\n        <b>Celsus</b> gave the first four; <b>Virchow</b> added <i>functio laesa</i>.\n        <div class=\"chain\">\n          <span class=\"s\"><b>1</b> Transient vaso<b>CONSTRICTION</b> (seconds)</span><span class=\"a2\">→</span>\n          <span class=\"s\"><b>2</b> Vaso<b>DILATION</b><br>histamine, NO → rubor + calor</span><span class=\"a2\">→</span>\n          <span class=\"s\"><b>3</b> ↑<b>Permeability</b><br>endothelial contraction → tumor</span><span class=\"a2\">→</span>\n          <span class=\"s\"><b>4</b> <b>Stasis</b><br>↑viscosity</span><span class=\"a2\">→</span>\n          <span class=\"s\"><b>5</b> <b>Margination &amp;<br>pavementing</b></span><span class=\"a2\">→</span>\n          <span class=\"s\"><b>6 Rolling</b><br><i>SELECTINS</i> ↔ sialyl-Lewis X</span><span class=\"a2\">→</span>\n          <span class=\"s\"><b>7 Firm adhesion</b><br><i>INTEGRINS</i> ↔ ICAM-1, VCAM-1</span><span class=\"a2\">→</span>\n          <span class=\"s\"><b>8 Diapedesis</b><br><i>PECAM-1 / CD31</i></span><span class=\"a2\">→</span>\n          <span class=\"s\"><b>9 Chemotaxis</b> → <b>Phagocytosis</b></span>\n        </div>\n        <div class=\"mem\"><span class=\"lbl\">Learn as sets</span> <b>Chemotaxins:</b> C5a · LTB₄ · IL-8 · bacterial <i>N-formyl-methionyl</i> peptides. <b>Opsonins:</b> <b>IgG Fc</b> · <b>C3b</b> · collectins. <b>Killing:</b> the <b>MPO–H₂O₂–halide</b> system is the most efficient.</div>"
  },
  {
   "id": "unit-1-b34",
   "n": 34,
   "page": 3,
   "tone": "t1",
   "title": "PHAGOCYTOSIS and FEVER",
   "stars": 0,
   "kinds": [
    "flow",
    "trap"
   ],
   "html": "<div class=\"chain\"><span class=\"s\"><b>1 Recognition<br>+ attachment</b><br>via opsonins</span><span class=\"a2\">→</span>\n          <span class=\"s\"><b>2 Engulfment</b><br>pseudopodia → <b>phagosome</b></span><span class=\"a2\">→</span>\n          <span class=\"s\"><b>3 Fusion</b><br>+ lysosome = <b>phagolysosome</b></span><span class=\"a2\">→</span>\n          <span class=\"s\"><b>4 Killing and<br>degradation</b></span></div>\n        <b>Oxygen-dependent killing:</b> NADPH oxidase <b>respiratory burst</b> → O₂⁻ → H₂O₂ → <b>MPO–H₂O₂–halide → HOCl</b> (most potent). <b>Oxygen-independent:</b> lysozyme, lactoferrin, defensins.\n        <div class=\"chain amb\"><span class=\"s\">Exogenous pyrogen (<b>LPS</b>)</span><span class=\"a2\">→</span><span class=\"s\">Macrophage releases <b>IL-1, IL-6, TNF-α</b></span><span class=\"a2\">→</span>\n          <span class=\"s\"><b>PGE₂</b> in the hypothalamus</span><span class=\"a2\">→</span><span class=\"s\">Thermostat reset up = <b>FEVER</b></span></div>\n        <div class=\"trap\"><span class=\"lbl\">Defective phagocytosis</span> <b>Chédiak–Higashi</b> — faulty lysosomal fusion, <b>giant granules</b>. <b>BLAD</b> — CD18 integrin defect, so leucocytes cannot adhere: <b>marked neutrophilia but pus does not form</b>.</div>"
  },
  {
   "id": "unit-1-b35",
   "n": 35,
   "page": 3,
   "tone": "t2",
   "title": "Inflammatory cells",
   "stars": 0,
   "kinds": [
    "table",
    "fact"
   ],
   "html": "<table class=\"tt\">\n          <tr><th>Cell</th><th>Arrives</th><th>Signature</th></tr>\n          <tr><td><b>Neutrophil</b></td><td><b>FIRST</b> 6–24 h</td><td>Acute, pyogenic; forms <b>pus</b>. <b>Heterophil</b> in birds, reptiles, rabbits</td></tr>\n          <tr><td><b>Macrophage</b></td><td>24–48 h</td><td><b>Chronic</b>; from monocyte; antigen presentation; → <b>epithelioid</b> cell</td></tr>\n          <tr><td><b>Eosinophil</b></td><td>—</td><td><b>Parasites &amp; allergy</b>; major basic protein; IL-5</td></tr>\n          <tr><td><b>Mast/basophil</b></td><td>—</td><td>Histamine, heparin; <b>Type I</b>; metachromatic with <b>toluidine blue</b></td></tr>\n          <tr><td><b>Plasma cell</b></td><td>Late</td><td><b>Cartwheel</b> nucleus; <b>Russell bodies</b> = Ig globules; stuffed = <b>Mott cell</b></td></tr>\n        </table>\n        <div class=\"fact\"><span class=\"lbl\">Giant cells &amp; granuloma</span> <b>Langhans</b> — nuclei in a <b>horseshoe at the periphery</b> (TB). <b>Foreign-body</b> — nuclei <b>random</b>. <b>Touton</b> — ring of nuclei, foamy (fat). <b>Granuloma</b> = focal collection of <b>epithelioid macrophages</b> ± giant cells ± lymphocyte cuff ± caseation ± fibrous capsule.</div>"
  },
  {
   "id": "unit-1-b36",
   "n": 36,
   "page": 4,
   "tone": "t4",
   "title": "CHEMICAL MEDIATORS — by job",
   "stars": 0,
   "kinds": [
    "table",
    "flow",
    "trap"
   ],
   "html": "<table class=\"ta\">\n          <tr><th>Effect</th><th>Mediators</th></tr>\n          <tr><td><b>Vasodilation</b></td><td>Histamine, <b>PGI₂, PGD₂, PGE₂</b>, NO</td></tr>\n          <tr><td><b>↑ Permeability</b></td><td><b>Histamine</b> (first, immediate), serotonin, <b>bradykinin</b>, <b>C3a &amp; C5a</b> (anaphylatoxins), <b>LTC₄/D₄/E₄</b>, PAF, substance P</td></tr>\n          <tr><td><b>Chemotaxis</b></td><td><b>C5a, LTB₄, IL-8</b>, bacterial peptides</td></tr>\n          <tr><td><b>Fever</b></td><td><b>IL-1, IL-6, TNF-α</b> (endogenous pyrogens) → <b>PGE₂</b> at hypothalamus</td></tr>\n          <tr><td><b>Pain</b></td><td><b>Bradykinin</b>, PGE₂, substance P</td></tr>\n          <tr><td><b>Tissue damage</b></td><td>Lysosomal enzymes, ROS, NO</td></tr>\n        </table>\n        <div class=\"chain amb\">\n          <span class=\"s\">Membrane phospholipid</span><span class=\"a2\">→</span>\n          <span class=\"s\"><b>Phospholipase A₂</b></span><span class=\"a2\">→</span>\n          <span class=\"s\"><b>Arachidonic acid</b></span><span class=\"a2\">→</span>\n          <span class=\"s\"><b>COX</b>: PGs, <b>TXA₂</b> (vasoconstrict + aggregate) vs <b>PGI₂</b> (opposite)</span><span class=\"a2\">|</span>\n          <span class=\"s\"><b>LOX</b>: <b>LTB₄</b> chemotaxis, <b>LTC/D/E₄</b> = SRS-A, lipoxins = STOP</span>\n        </div>\n        <div class=\"trap\"><span class=\"lbl\">Drug trap</span> <b>NSAIDs block COX only. Corticosteroids block phospholipase A₂ — therefore BOTH pathways.</b></div>\n        <b>Complement:</b> <b>classical</b> = antigen–antibody (C1) · <b>alternative</b> = endotoxin (C3) · <b>lectin</b> = MBL. <b>C3a/C5a</b> anaphylatoxins · <b>C5a</b> chemotaxis · <b>C3b</b> opsonin · <b>C5b-9</b> = MAC."
  },
  {
   "id": "unit-1-b37",
   "n": 37,
   "page": 4,
   "tone": "t3",
   "title": "Outcomes of acute inflammation",
   "stars": 0,
   "kinds": [
    "flow"
   ],
   "html": "<div class=\"chain pur\"><span class=\"s\"><b>Complete resolution</b><br>little damage, labile tissue</span><span class=\"a2\">·</span>\n          <span class=\"s\"><b>Healing by fibrosis</b><br>much damage, or permanent cells</span><span class=\"a2\">·</span>\n          <span class=\"s\"><b>Abscess</b><br>pyogenic organisms</span><span class=\"a2\">·</span>\n          <span class=\"s\"><b>Chronic inflammation</b><br>the agent persists</span></div>\n        <b class=\"k\">Beneficial</b> — dilution of toxin, delivery of antibody and drugs, fibrin traps organisms, phagocytosis, immunity, framework for repair.<br>\n        <b class=\"r\">Harmful</b> — pain and loss of function, digestion of normal tissue, swelling inside a closed space (<b>brain, larynx, pericardium</b>), fibrosis and <b>adhesions</b>, hypersensitivity, chronic <b>amyloidosis</b>."
  },
  {
   "id": "unit-1-b38",
   "n": 38,
   "page": 4,
   "tone": "t3",
   "title": "Classification of inflammation",
   "stars": 0,
   "kinds": [
    "table",
    "trap"
   ],
   "html": "<table class=\"tp\">\n          <tr><th>By duration</th><th>By exudate</th><th>By distribution</th></tr>\n          <tr><td><b>Peracute</b> · <b>Acute</b> (neutrophil, vascular, days) · <b>Subacute</b> · <b>Chronic</b> (macrophage, lymphocyte, plasma cell, <b>fibrosis</b>, weeks+)</td><td>Serous · Catarrhal · <b>Fibrinous</b> · <b>Suppurative</b> · Haemorrhagic · Necrotising · <b>Granulomatous</b></td><td><b>Focal</b> · Multifocal · <b>Diffuse</b> · Locally extensive</td></tr>\n        </table>\n        <b class=\"k\">Chronic inflammation arises by:</b> persistence of the agent (TB, Johne's, foreign body) · repeated acute attacks · autoimmunity · low-grade toxicity.\n        <div class=\"trap\"><span class=\"lbl\">Granuloma vs Granulation tissue ★</span> <b>Granuloma</b> = a <b>chronic inflammatory nodule</b> of epithelioid macrophages. <b>Granulation tissue</b> = <b>new capillaries + fibroblasts</b> of <b>healing</b>. Examiners swap these deliberately.</div>\n        <b>Named chronic lesions:</b> <b>tubercle</b> (TB) · <b>gumma</b> · <b>abscess</b> (chronic, walled by pyogenic membrane) · <b>fistula</b> (two open ends) vs <b>sinus</b> (one blind end) · <b>ulcer</b> (loss of surface epithelium) vs <b>erosion</b> (partial thickness)."
  },
  {
   "id": "unit-1-b39",
   "n": 39,
   "page": 4,
   "tone": "t5",
   "title": "Types of EXUDATE + systemic effects",
   "stars": 0,
   "kinds": [
    "table",
    "fact"
   ],
   "html": "<table class=\"tc\">\n          <tr><th>Exudate</th><th>Classic example</th></tr>\n          <tr><td><b>Serous</b></td><td>Watery, low protein — blisters, early burns</td></tr>\n          <tr><td><b>Fibrinous</b></td><td>\"<b>Bread-and-butter</b>\" pericarditis. <b>Croupous</b> peels off easily; <b>diphtheritic</b> is adherent and leaves an ulcer</td></tr>\n          <tr><td><b>Suppurative</b></td><td>Pus = dead neutrophils. <b>Abscess</b> localised · <b>phlegmon/cellulitis</b> diffuse · <b>empyema</b> in a cavity</td></tr>\n          <tr><td><b>Catarrhal</b></td><td>Mucus-rich, mucous membranes</td></tr>\n          <tr><td><b>Haemorrhagic</b></td><td>Anthrax, HS, swine fever</td></tr>\n        </table>\n        <div class=\"fact\"><span class=\"lbl\">Systemic effects</span> Fever · <b>leucocytosis with LEFT SHIFT</b> — <b>regenerative</b> (mature &gt; immature) vs <b>DEGENERATIVE</b> (immature &gt; mature = <b>bad prognosis</b>) · leucopenia in viral disease &amp; overwhelming sepsis · <b>acute-phase proteins: CRP → dog, SAA → cat, haptoglobin → cattle, fibrinogen → horse</b> · ↑ESR · weight loss · amyloidosis if chronic.</div>"
  },
  {
   "id": "unit-1-b40",
   "n": 40,
   "page": 4,
   "tone": "t6",
   "title": "WOUND HEALING",
   "stars": 0,
   "kinds": [
    "table",
    "flow",
    "trap",
    "mem"
   ],
   "html": "<table class=\"tg\">\n          <tr><th></th><th>Primary (first) intention</th><th>Secondary intention</th></tr>\n          <tr><td>Wound</td><td>Clean, sutured, edges <b>apposed</b></td><td>Large, open, tissue lost</td></tr>\n          <tr><td>Granulation tissue</td><td><b>Scanty</b></td><td><b>Abundant</b></td></tr>\n          <tr><td>Contraction</td><td>Negligible</td><td><b>Marked — myofibroblasts</b></td></tr>\n          <tr><td>Scar</td><td>Thin, neat</td><td>Large, disfiguring</td></tr>\n        </table>\n        <div class=\"chain grn\">\n          <span class=\"s\"><b>1 Haemostasis</b><br>clot + scab</span><span class=\"a2\">→</span>\n          <span class=\"s\"><b>2 Inflammation</b><br>neutrophil 0–2 d → macrophage 2–3 d</span><span class=\"a2\">→</span>\n          <span class=\"s\"><b>3 Proliferation</b><br><b>granulation by day 3–5</b>; angiogenesis + fibroblast + <b>Type III collagen</b></span><span class=\"a2\">→</span>\n          <span class=\"s\"><b>4 Remodelling</b><br><b>Type III → Type I</b>, weeks–months</span>\n        </div>\n        <ul class=\"sm\">\n          <li><b>Granulation tissue</b> = new capillaries + fibroblasts + loose ECM + inflammatory cells. Red, granular, bleeds easily. <b>NOT the same as granuloma.</b></li>\n          <li><b>Tensile strength</b> ~10% at 1 week → <b>maximum only 70–80% by 3 months. Never 100%.</b></li>\n          <li><b>Vitamin C</b> — hydroxylation of proline &amp; lysine · <b>Zinc</b> — epithelialisation · <b>Copper</b> — lysyl oxidase</li>\n        </ul>\n        <div class=\"mem\"><span class=\"lbl\">Growth factors</span> <b>VEGF</b> = most potent <b>angiogenic</b>. <b>TGF-β</b> = most potent <b>fibrogenic</b> (↑collagen, ↓collagenase). <b>PDGF</b> = fibroblast &amp; smooth-muscle migration. <b>EGF/TGF-α</b> = epithelialisation.</div>\n        <div class=\"trap\"><span class=\"lbl\">Complications &amp; cell types</span> Dehiscence · keloid · <b>exuberant granulation tissue = \"PROUD FLESH\"</b>, classic on the <b>distal limb of the HORSE</b> · contracture · adhesions. Delayed by <b>infection (most important)</b>, foreign body, movement, poor blood supply, <b>corticosteroids</b>, protein/vit-C/zinc deficiency.<br>\n        <b>Labile</b> (skin, gut, marrow) always divide · <b>Stable</b> (liver, kidney, pancreas) divide on demand · <b>Permanent</b> (neuron, cardiac &amp; skeletal muscle) <b>heal by SCAR only</b>.</div>"
  },
  {
   "id": "unit-1-b41",
   "n": 41,
   "page": 4,
   "tone": "t2",
   "title": "Healing of special tissues",
   "stars": 0,
   "kinds": [
    "table"
   ],
   "html": "<table class=\"tt\">\n          <tr><th>Tissue</th><th>How it heals</th></tr>\n          <tr><td><b>Bone</b></td><td>Haematoma → <b>procallus</b> → <b>soft (fibrocartilaginous) callus</b> → <b>bony callus</b> → remodelling. The only tissue that heals by <b>true regeneration</b> with original tissue</td></tr>\n          <tr><td><b>Peripheral nerve</b></td><td><b>Wallerian degeneration</b> distal to the cut; axon regrows ~<b>1 mm/day</b> along the Schwann-cell tube; a blocked stump forms a <b>traumatic (amputation) neuroma</b></td></tr>\n          <tr><td><b>CNS</b></td><td><b>No regeneration.</b> Heals by <b>gliosis</b> (astrocytes) — the CNS \"scar\"</td></tr>\n          <tr><td><b>Liver</b></td><td>Excellent regeneration if the reticulin framework survives; if not → <b>cirrhosis</b> (regenerative nodules + fibrosis)</td></tr>\n          <tr><td><b>Cardiac muscle</b></td><td><b>Fibrous scar only</b> — no new myocytes</td></tr>\n        </table>"
  },
  {
   "id": "unit-1-b42",
   "n": 42,
   "page": 4,
   "tone": "t1",
   "title": "IMMUNOPATHOLOGY — Coombs &amp; Gell",
   "stars": 0,
   "kinds": [
    "table",
    "trap"
   ],
   "html": "<table>\n          <tr><th>Type</th><th>Mediator</th><th>Examples</th></tr>\n          <tr><td><b>I</b> Immediate / anaphylactic</td><td><b>IgE</b> on mast cells → histamine, <b>minutes</b></td><td>Anaphylaxis, atopy, flea-bite dermatitis, urticaria, milk allergy in Jersey cows</td></tr>\n          <tr><td><b>II</b> Cytotoxic</td><td><b>IgG/IgM</b> vs cell-surface antigen + complement / ADCC</td><td><b>Neonatal isoerythrolysis</b> (foal, piglet), AIHA, myasthenia gravis, pemphigus</td></tr>\n          <tr><td><b>III</b> Immune complex</td><td>Ag–Ab complexes → complement → neutrophils</td><td><b>Arthus</b> (local), <b>serum sickness</b> (systemic), glomerulonephritis, <b>\"blue eye\" of ICH</b>, purpura haemorrhagica, equine recurrent uveitis</td></tr>\n          <tr><td><b>IV</b> <b>Delayed</b> / cell-mediated</td><td><b>T lymphocytes</b> + macrophages, <b>24–72 h</b>, <b>no antibody</b></td><td><b>Tuberculin &amp; johnin test</b>, contact dermatitis, granuloma, graft rejection</td></tr>\n        </table>\n        <div class=\"trap\"><span class=\"lbl\">Shock organ ★</span> <b>Dog → LIVER</b> (hepatic veins) · <b>horse, pig, ruminant, cat → LUNG</b>.</div>\n        <b class=\"k\">Immunodeficiency — primary:</b> <b>SCID of Arabian foals</b> · <b>BLAD</b> (Holstein, CD18) · <b>Chédiak–Higashi</b> (Hereford cattle, Persian cat — giant granules) · selective IgA deficiency (German Shepherd).<br>\n        <b class=\"r\">Secondary (commoner):</b> <b>FAILURE OF PASSIVE TRANSFER</b> — the commonest of all; serum IgG <b>&lt; 400 mg/dl</b> in calf/foal · BVD, CDV, FeLV/FIV · malnutrition · corticosteroids and stress.<br>\n        <b class=\"p\">Autoimmunity:</b> SLE (<b>LE cell</b>, <b>ANA+</b>) · <b>pemphigus foliaceus</b> = commonest autoimmune skin disease of the dog, <b>acantholysis → acantholytic cells</b> · autoimmune thyroiditis · myasthenia gravis (anti-AChR)."
  },
  {
   "id": "unit-1-b43",
   "n": 43,
   "page": 4,
   "tone": "t2",
   "title": "Why autoimmunity happens",
   "stars": 0,
   "kinds": [
    "mem"
   ],
   "html": "<ul class=\"sm\">\n          <li><b>Release of sequestered antigen</b> — lens, sperm, thyroglobulin, CNS myelin never met the immune system in fetal life</li>\n          <li><b>Molecular mimicry</b> — a microbial antigen resembles a host antigen</li>\n          <li><b>Alteration of self antigen</b> by drug, virus or hapten</li>\n          <li><b>Loss of regulatory T-cell control</b> or polyclonal lymphocyte activation</li>\n          <li><b>Genetic predisposition</b> — MHC haplotype and breed</li>\n        </ul>\n        <div class=\"mem\"><span class=\"lbl\">Tests to remember</span> <b>Coombs test</b> — antibody on red cells, for <b>AIHA</b> and <b>neonatal isoerythrolysis</b>. <b>ANA</b> — for <b>SLE</b>. <b>LE cell</b> — a neutrophil that has engulfed a nucleus. <b>Direct immunofluorescence</b> of skin biopsy — for <b>pemphigus</b>. <b>Tuberculin / johnin</b> — Type IV delayed reaction.</div>"
  },
  {
   "id": "unit-1-b44",
   "n": 44,
   "page": 4,
   "tone": "t4",
   "title": "60-SECOND BLANK-FILL DRILL",
   "stars": 0,
   "kinds": [
    "drill"
   ],
   "html": "",
   "drill": true
  }
 ],
 "drill": [
  {
   "id": "unit-1-d001",
   "html": "Lines of Zahn prove the clot formed <u>during life</u>"
  },
  {
   "id": "unit-1-d002",
   "html": "Transudate SG is below <u>1.012</u>; Rivalta is positive for <u>exudate</u>"
  },
  {
   "id": "unit-1-d003",
   "html": "Heart-failure cells = <u>haemosiderin-laden alveolar macrophages</u>"
  },
  {
   "id": "unit-1-d004",
   "html": "Nutmeg appearance = <u>liver</u> in chronic passive congestion"
  },
  {
   "id": "unit-1-d005",
   "html": "Commonest necrosis <u>coagulative</u>; brain shows <u>liquefactive</u>"
  },
  {
   "id": "unit-1-d006",
   "html": "Nuclear sequence <u>pyknosis → karyorrhexis → karyolysis</u>"
  },
  {
   "id": "unit-1-d007",
   "html": "Apoptosis DNA = <u>ladder</u>; necrosis DNA = <u>smear</u>; enzymes = <u>caspases</u>"
  },
  {
   "id": "unit-1-d008",
   "html": "Blackleg gangrene organism = <u>Clostridium chauvoei</u>"
  },
  {
   "id": "unit-1-d009",
   "html": "Perls' stains <u>haemosiderin</u> blue; haematoidin is <u>iron-free</u>"
  },
  {
   "id": "unit-1-d010",
   "html": "Formalin pigment is avoided by <u>10% neutral buffered formalin</u>"
  },
  {
   "id": "unit-1-d011",
   "html": "von Kossa = <u>black</u>; alizarin red S = <u>orange-red</u>"
  },
  {
   "id": "unit-1-d012",
   "html": "Serum Ca is <u>normal</u> in dystrophic, <u>raised</u> in metastatic calcification"
  },
  {
   "id": "unit-1-d013",
   "html": "Hepatogenous photosensitization agent = <u>phylloerythrin</u>"
  },
  {
   "id": "unit-1-d014",
   "html": "Lantana toxin <u>lantadene A</u>; St John's wort <u>hypericin</u>"
  },
  {
   "id": "unit-1-d015",
   "html": "Squamous metaplasia = <u>vitamin A</u> deficiency"
  },
  {
   "id": "unit-1-d016",
   "html": "Functio laesa added by <u>Virchow</u>; first four by <u>Celsus</u>"
  },
  {
   "id": "unit-1-d017",
   "html": "First cell in acute inflammation = <u>neutrophil</u> (<u>heterophil</u> in birds)"
  },
  {
   "id": "unit-1-d018",
   "html": "Rolling uses <u>selectins</u>; firm adhesion uses <u>integrins</u>"
  },
  {
   "id": "unit-1-d019",
   "html": "Most potent angiogenic factor <u>VEGF</u>; most fibrogenic <u>TGF-β</u>"
  },
  {
   "id": "unit-1-d020",
   "html": "Corticosteroids inhibit <u>phospholipase A₂</u>; NSAIDs inhibit <u>COX</u>"
  },
  {
   "id": "unit-1-d021",
   "html": "Wound tensile strength peaks at <u>70–80%</u> by <u>3 months</u>"
  },
  {
   "id": "unit-1-d022",
   "html": "Proud flesh = <u>exuberant granulation tissue</u> of the <u>horse</u>"
  },
  {
   "id": "unit-1-d023",
   "html": "Amyloid = <u>apple-green birefringence</u>, Congo red, polarised light"
  },
  {
   "id": "unit-1-d024",
   "html": "Commonest animal amyloid <u>AA</u>, from <u>serum amyloid A</u>"
  },
  {
   "id": "unit-1-d025",
   "html": "Tuberculin test = type <u>IV</u> hypersensitivity"
  },
  {
   "id": "unit-1-d026",
   "html": "Shock organ: dog <u>liver</u>, horse <u>lung</u>"
  },
  {
   "id": "unit-1-d027",
   "html": "Commonest immunodeficiency in farm animals = <u>failure of passive transfer</u>"
  },
  {
   "id": "unit-1-d028",
   "html": "Fatty liver <u>floats</u> in water; fat is shown by <u>Sudan III / Oil red O</u> on a <u>frozen</u> section"
  },
  {
   "id": "unit-1-d029",
   "html": "Glycogen is <u>PAS positive</u> and removed by <u>diastase</u>; fix in <u>alcohol/Carnoy's</u>"
  },
  {
   "id": "unit-1-d030",
   "html": "Schistocytes and ↑ D-dimer indicate <u>DIC</u>"
  },
  {
   "id": "unit-1-d031",
   "html": "Obstructive jaundice gives <u>direct</u> (conjugated) bilirubin and <u>pale</u> faeces"
  },
  {
   "id": "unit-1-d032",
   "html": "Nerve axons regenerate at about <u>1 mm per day</u> after <u>Wallerian</u> degeneration"
  },
  {
   "id": "unit-1-d033",
   "html": "The CNS heals by <u>gliosis</u>, not by fibrosis"
  },
  {
   "id": "unit-1-d034",
   "html": "Bone heals through <u>procallus → soft callus → bony callus</u>"
  },
  {
   "id": "unit-1-d035",
   "html": "A tract with two open ends is a <u>fistula</u>; with one blind end a <u>sinus</u>"
  },
  {
   "id": "unit-1-d036",
   "html": "Langhans giant cell nuclei lie in a <u>horseshoe at the periphery</u>"
  },
  {
   "id": "unit-1-d037",
   "html": "Endotoxic shock is a <u>distributive</u> shock caused by Gram-<u>negative</u> LPS"
  },
  {
   "id": "unit-1-d038",
   "html": "A wedge-shaped infarct has its apex toward the <u>occluded vessel</u>"
  },
  {
   "id": "unit-1-d039",
   "html": "Neurons die of hypoxia in about <u>3–5 minutes</u>"
  },
  {
   "id": "unit-1-d040",
   "html": "Sweet clover poisoning bleeds through <u>dicoumarol</u>, a vitamin <u>K</u> antagonist"
  },
  {
   "id": "unit-1-d041",
   "html": "The respiratory burst enzyme is <u>NADPH oxidase</u>"
  },
  {
   "id": "unit-1-d042",
   "html": "BLAD cattle show neutrophilia but <u>cannot form pus</u> (CD18 defect)"
  },
  {
   "id": "unit-1-d043",
   "html": "Chédiak–Higashi leucocytes contain <u>giant granules</u>"
  },
  {
   "id": "unit-1-d044",
   "html": "Coombs test detects <u>antibody bound to red cells</u>; ANA is positive in <u>SLE</u>"
  },
  {
   "id": "unit-1-d045",
   "html": "Iodine-deficiency goitre is an example of <u>hyperplasia</u>"
  },
  {
   "id": "unit-1-d046",
   "html": "Hydronephrosis causes <u>pressure</u> atrophy of the kidney"
  },
  {
   "id": "unit-1-d047",
   "html": "Granuloma is a lesion of <u>chronic inflammation</u>; granulation tissue is a lesion of <u>healing</u>"
  }
 ]
};

revisionData["unit-2"] = {
 "id": "unit-2",
 "no": 2,
 "title": "Systemic Veterinary Pathology",
 "paper": "paper-1",
 "icon": "organs",
 "pages": 4,
 "pageTitles": [
  "Digestive &amp; Respiratory System",
  "Musculoskeletal · Cardiovascular · Haematopoietic",
  "Lymphoid · Urinary · Reproductive",
  "Nervous · Endocrine · Skin · Ear &amp; Eye"
 ],
 "sheet": "revision/unit-2.html",
 "boxes": [
  {
   "id": "unit-2-b01",
   "n": 1,
   "page": 1,
   "tone": "t1",
   "title": "How to answer any systemic question",
   "stars": 0,
   "kinds": [
    "flow",
    "mem"
   ],
   "html": "<div class=\"chain\"><span class=\"s\"><b>ORGAN</b></span><span class=\"a2\">→</span>\n          <span class=\"s\"><b>Gross lesion</b><br>size, colour, consistency, distribution</span><span class=\"a2\">→</span>\n          <span class=\"s\"><b>Micro lesion</b></span><span class=\"a2\">→</span>\n          <span class=\"s\"><b>Named disease</b></span></div>\n        <div class=\"mem\"><span class=\"lbl\">Distribution words — worth marks</span> <b>Focal</b> (one) · <b>Multifocal</b> (many separate) · <b>Locally extensive</b> · <b>Diffuse</b> (whole organ) · <b>Cranioventral</b> (bronchopneumonia) · <b>Random</b> (haematogenous/embolic) · <b>Centrilobular</b> (liver, hypoxia) · <b>Periacinar</b>.</div>"
  },
  {
   "id": "unit-2-b02",
   "n": 2,
   "page": 1,
   "tone": "t2",
   "title": "MOUTH — stomatitis by type",
   "stars": 1,
   "kinds": [
    "table",
    "trap"
   ],
   "html": "<table class=\"tt\">\n          <tr><th>Type</th><th>Diseases</th></tr>\n          <tr><td><b>Vesicular</b></td><td><b>FMD</b>, vesicular stomatitis, vesicular exanthema, swine vesicular disease — <b>the 4 look identical, only the lab separates them</b></td></tr>\n          <tr><td><b>Erosive / ulcerative</b></td><td><b>Rinderpest</b>, <b>BVD-MD</b>, <b>MCF</b>, <b>PPR</b>, uraemia, bluetongue</td></tr>\n          <tr><td><b>Papular</b></td><td>Pox, <b>contagious ecthyma (orf)</b> — proliferative scabby lips of sheep/goats</td></tr>\n          <tr><td><b>Necrotic</b></td><td><b>Calf diphtheria</b> — <i>Fusobacterium necrophorum</i>; foul odour, yellow-grey necrotic membrane</td></tr>\n          <tr><td><b>Mycotic</b></td><td><b>Thrush</b> — <i>Candida albicans</i>, white pseudomembrane</td></tr>\n        </table>\n        <div class=\"trap\"><span class=\"lbl\">Two jaws — never mix these ★★</span>\n          <b>WOODEN TONGUE</b> = <i>Actinobacillus lignieresii</i> → <b>SOFT tissue</b> (tongue), pyogranuloma with <b>club colonies / sulphur granules</b>.<br>\n          <b>LUMPY JAW</b> = <i>Actinomyces bovis</i> → <b>BONE</b> (mandible), rarefying + proliferative osteomyelitis. <br>\n          <i>Mnemonic:</i> Actinob<b>A</b>cillus = tongue is a b<b>A</b>g of muscle; Actino<b>MYCES</b> = <b>M</b>andible.</div>"
  },
  {
   "id": "unit-2-b03",
   "n": 3,
   "page": 1,
   "tone": "t2",
   "title": "FORESTOMACHS — the bovine set",
   "stars": 0,
   "kinds": [],
   "html": "<ul class=\"sm\">\n          <li><b>Ruminal tympany (bloat)</b> — <b>Primary/frothy</b>: legume &amp; lush green pasture, stable foam. <b>Secondary/free-gas</b>: eructation blocked (oesophageal obstruction, vagal indigestion).</li>\n          <li><b>Proof it was antemortem ★:</b> the <b>BLOAT LINE</b> — a sharp line in the cervical oesophagus, <b>congested below</b> the thoracic inlet and <b>pale above</b>, plus pale, bloodless head and forelimbs and a distended abdomen.</li>\n          <li><b>Rumenitis–liver abscess complex</b> — grain overload → <b>lactic acidosis</b> → ruminal ulcer → portal spread of <b><i>Fusobacterium necrophorum</i></b> → <b>liver abscess</b> → may rupture into the caudal vena cava.</li>\n          <li><b>Traumatic reticuloperitonitis (\"hardware disease\")</b> — wire through the reticulum → localised peritonitis; forward → <b>TRAUMATIC PERICARDITIS</b>: thick foul \"washing-water\" pus and fibrin, the classic bovine heart.</li>\n          <li><b>Parakeratosis of the rumen</b> — hard concentrate diet; dark, clumped, hardened papillae.</li>\n        </ul>"
  },
  {
   "id": "unit-2-b04",
   "n": 4,
   "page": 1,
   "tone": "t2",
   "title": "STOMACH · ABOMASUM · INTESTINE",
   "stars": 0,
   "kinds": [
    "table"
   ],
   "html": "<ul class=\"sm\">\n          <li><b>Ostertagiosis</b> — abomasal nodules give the <b>\"Morocco leather\"</b> appearance; ↑ abomasal pH, hypoproteinaemia, <b>bottle jaw</b></li>\n          <li><b>Abomasal displacement</b> (LDA/RDA) &amp; <b>torsion</b> — high-yielding dairy cows</li>\n          <li><b>Gastric ulcer</b> — pigs (pars oesophagea), stress, NSAIDs, uraemia, mast cell tumour in dogs</li>\n        </ul>\n        <table class=\"tt\">\n          <tr><th>Enteritis</th><th>Classic cause</th></tr>\n          <tr><td><b>Catarrhal</b></td><td>Mild viral, dietary</td></tr>\n          <tr><td><b>Haemorrhagic</b></td><td><b>Canine parvovirus</b>, coccidiosis, <b>enterotoxaemia</b>, anthrax</td></tr>\n          <tr><td><b>Fibrinous / diphtheritic</b></td><td><b>Salmonellosis</b>, classical swine fever (<b>button ulcers</b> in caecum/colon), rinderpest</td></tr>\n          <tr><td><b>Necrotic</b></td><td>Salmonellosis, clostridial</td></tr>\n          <tr><td><b>Granulomatous ★</b></td><td><b>JOHNE'S DISEASE</b> — <b>corrugated, rugose, thickened ileum that will not flatten</b>, <b>cording of lymphatics</b>, enlarged mesenteric nodes, <b>NO ulceration</b></td></tr>\n          <tr><td><b>Eosinophilic</b></td><td>Parasites, allergy</td></tr>\n        </table>\n        <b>Displacements:</b> <b>intussusception</b> (telescoping — invaginated segment is the intussusceptum) · volvulus · torsion · hernia · atresia ani."
  },
  {
   "id": "unit-2-b05",
   "n": 5,
   "page": 1,
   "tone": "t6",
   "title": "LIVER &amp; PANCREAS",
   "stars": 0,
   "kinds": [
    "fact"
   ],
   "html": "<ul class=\"sm\">\n          <li><b>Hepatitis</b> — necrotising (ICH, salmonellosis), suppurative (abscess), chronic (cirrhosis)</li>\n          <li><b>CIRRHOSIS</b> — <b>diffuse fibrosis + regenerative nodules + architectural distortion</b>; hard, shrunken, nodular liver. Causes: aflatoxin, pyrrolizidine alkaloids (<i>Crotalaria, Senecio</i>), copper, chronic fasciolosis, chronic passive congestion (cardiac cirrhosis)</li>\n          <li><b>\"Pipe-stem liver\"</b> — thick fibrotic, calcified bile ducts of chronic <b>fasciolosis</b> (cattle); <b>black pigment</b> = parasitic haematin</li>\n          <li><b>Telangiectasis</b> — dark blood-filled spaces in cattle liver, incidental</li>\n          <li><b>\"Sawdust liver\"</b> — pale foci of focal necrosis in feedlot cattle</li>\n          <li><b>Hepatosis dietetica</b> — pig, <b>vitamin E / selenium deficiency</b>; mosaic pattern of lobular necrosis</li>\n          <li><b>Nutmeg liver</b> — chronic passive congestion (right heart failure)</li>\n          <li><b>Pancreas</b> — acute <b>necrotising pancreatitis</b> with <b>chalky-white fat necrosis</b> (dog); pancreatic atrophy → EPI, steatorrhoea</li>\n        </ul>\n        <div class=\"fact\"><span class=\"lbl\">Icterus in India</span> Yellow carcass + dark urine + splenomegaly in a crossbred cow in tick season = <b>babesiosis/theileriosis</b>, not liver disease.</div>"
  },
  {
   "id": "unit-2-b06",
   "n": 6,
   "page": 1,
   "tone": "t3",
   "title": "RESPIRATORY — the 4 pneumonia patterns",
   "stars": 3,
   "kinds": [
    "table",
    "trap"
   ],
   "html": "<table class=\"tp\">\n          <tr><th>Pattern</th><th>Distribution</th><th>Route</th><th>Examples</th></tr>\n          <tr><td><b>Broncho-<br>pneumonia</b></td><td><b>CRANIOVENTRAL</b>, lobular, sharply demarcated</td><td><b>Aerogenous</b> (airway)</td><td><b>Suppurative/catarrhal</b> — <i>Pasteurella</i>, <i>Mannheimia</i>, mycoplasma.<br><b>Fibrinous (pleuropneumonia)</b> — <b>HS</b>, shipping fever, <b>CBPP</b></td></tr>\n          <tr><td><b>Interstitial</b></td><td><b>DIFFUSE</b>, whole lung, <b>rubbery, fails to collapse</b>, rib impressions</td><td>Aerogenous or <b>haematogenous</b></td><td>Viral (PPR, RD, IBR, CDV), toxic, <b>3-methylindole</b> atypical interstitial pneumonia (fog fever)</td></tr>\n          <tr><td><b>Embolic</b></td><td><b>MULTIFOCAL, RANDOM</b>, all lobes</td><td><b>Blood-borne</b></td><td>Ruptured liver abscess, vegetative endocarditis, navel ill</td></tr>\n          <tr><td><b>Granulomatous</b></td><td>Multifocal <b>nodules</b></td><td>Both</td><td><b>Tuberculosis</b>, mycoses, aspiration of foreign material</td></tr>\n        </table>\n        <div class=\"trap\"><span class=\"lbl\">Signature lung ★</span> <b>\"MARBLING\"</b> = massive <b>interlobular septal thickening</b> + hepatisation → <b>CBPP</b>. <b>Sequestra</b> in a marbled lung = chronic CBPP.</div>"
  },
  {
   "id": "unit-2-b07",
   "n": 7,
   "page": 1,
   "tone": "t3",
   "title": "Lung — the other terms",
   "stars": 0,
   "kinds": [
    "flow"
   ],
   "html": "<div class=\"chain pur\"><span class=\"s\"><b>1 Congestion</b><br>red, heavy</span><span class=\"a2\">→</span>\n          <span class=\"s\"><b>2 Red hepatisation</b><br>liver-like, RBC + fibrin</span><span class=\"a2\">→</span>\n          <span class=\"s\"><b>3 Grey hepatisation</b><br>neutrophils, greyish</span><span class=\"a2\">→</span>\n          <span class=\"s\"><b>4 Resolution</b></span></div>\n        <ul class=\"sm\">\n          <li><b>Atelectasis</b> — airless collapsed lung; <b>congenital/neonatal</b> (never breathed, sinks in water) vs <b>acquired</b> (compression / obstruction, absorption)</li>\n          <li><b>DOCIMASIA (flotation) test ★:</b> lung that has breathed <b>FLOATS</b>; unbreathed fetal lung <b>SINKS</b> — used in veterolegal stillbirth cases</li>\n          <li><b>Emphysema</b> — <b>alveolar</b> (destruction of septa) and <b>interstitial</b> (air in interlobular septa; classic in <b>cattle</b>, may track to the back as subcutaneous emphysema)</li>\n          <li><b>Atrophic rhinitis of pigs</b> — toxigenic <i>Pasteurella multocida</i> type D + <i>Bordetella bronchiseptica</i> → <b>turbinate atrophy, snout deviation</b></li>\n          <li><b>Verminous pneumonia</b> — <i>Dictyocaulus</i>, cranioventral wedge-shaped grey firm areas</li>\n          <li><b>Aspiration pneumonia</b> — right cranial/middle lobes, foul, gangrenous; drenching accident is the classic cause in India</li>\n        </ul>"
  },
  {
   "id": "unit-2-b08",
   "n": 8,
   "page": 2,
   "tone": "t5",
   "title": "MUSCLE",
   "stars": 0,
   "kinds": [
    "table",
    "trap"
   ],
   "html": "<table class=\"tc\">\n          <tr><th>Condition</th><th>Key lesion</th></tr>\n          <tr><td><b>White muscle disease</b><br>(nutritional muscular dystrophy)</td><td><b>Vitamin E / selenium deficiency</b>; calves, lambs. <b>Chalky white streaks</b> in skeletal muscle <b>and heart</b>; <b>Zenker's (hyaline) degeneration</b> + dystrophic calcification. ↑ <b>CK &amp; AST</b>. Bilaterally symmetrical</td></tr>\n          <tr><td><b>Blackleg</b></td><td><i>Cl. chauvoei</i>; <b>dark, dry, spongy, crepitant</b> muscle with a <b>rancid butter</b> odour; heavy muscle of young well-fed cattle</td></tr>\n          <tr><td><b>Malignant oedema</b></td><td><i>Cl. septicum</i>, <b>wound</b> entry, more oedematous and less emphysematous than blackleg</td></tr>\n          <tr><td><b>Azoturia</b> (exertional rhabdomyolysis)</td><td>Horse after rest on full grain then work; gluteal muscles hard &amp; painful, <b>coffee-coloured myoglobinuric urine</b></td></tr>\n          <tr><td><b>Capture myopathy</b></td><td>Wild animals after chase/restraint — Zenker's necrosis, myoglobinuria</td></tr>\n          <tr><td><b>Eosinophilic myositis</b></td><td><i>Sarcocystis</i>; green streaks in beef, a meat-inspection condemnation</td></tr>\n        </table>\n        <div class=\"trap\"><span class=\"lbl\">Myoglobin vs haemoglobin ★</span> <b>Myoglobinuria</b> — plasma stays <b>clear</b> (myoglobin is small, cleared fast). <b>Haemoglobinuria</b> — plasma is <b>pink/red</b>. This single point separates azoturia from babesiosis and post-parturient haemoglobinuria.</div>"
  },
  {
   "id": "unit-2-b09",
   "n": 9,
   "page": 2,
   "tone": "t6",
   "title": "BONE &amp; JOINT",
   "stars": 1,
   "kinds": [
    "table"
   ],
   "html": "<table class=\"tg\">\n          <tr><th>Disease</th><th>Cause &amp; lesion</th></tr>\n          <tr><td><b>Rickets</b></td><td><b>YOUNG, growing</b> animal. Vitamin D / phosphorus deficiency. <b>Failure of mineralisation of osteoid at the growth plate</b> → wide irregular physis, <b>enlarged costochondral junctions = \"rachitic rosary\"</b>, bowed limbs</td></tr>\n          <tr><td><b>Osteomalacia</b></td><td><b>ADULT</b> — same defect after the growth plates close; soft bones, pathological fracture, pica</td></tr>\n          <tr><td><b>Fibrous osteodystrophy</b></td><td><b>Nutritional secondary hyperparathyroidism</b> — <b>low Ca : high P</b> diet (bran, all-grain). Bone replaced by fibrous tissue → <b>\"big head\" of horses (bran disease)</b>; <b>\"rubber jaw\"</b> in renal secondary hyperparathyroidism of dogs</td></tr>\n          <tr><td><b>Osteoporosis</b></td><td>Normal mineralisation but <b>too little bone</b>; starvation, Ca deficiency, disuse</td></tr>\n          <tr><td><b>Osteomyelitis</b></td><td>Haematogenous in young; <b>sequestrum</b> (dead bone) + <b>involucrum</b> (new bone sheath)</td></tr>\n          <tr><td><b>Fluorosis</b></td><td>Mottled, pitted, chalky teeth; <b>exostoses</b> on mandible &amp; metatarsals; lameness</td></tr>\n        </table>\n        <b>Joints:</b> <b>suppurative arthritis</b> = joint-ill / navel-ill of calves and foals (<i>Streptococcus</i>, <i>E. coli</i>, from failure of passive transfer) · <b>degenerative joint disease/osteoarthritis</b> — cartilage erosion, eburnation, <b>osteophytes</b> · <b>osteochondrosis dissecans</b> — flap of cartilage in fast-growing large breeds."
  },
  {
   "id": "unit-2-b10",
   "n": 10,
   "page": 2,
   "tone": "t5",
   "title": "HEART — pericardium, myocardium, endocardium",
   "stars": 0,
   "kinds": [
    "table",
    "trap"
   ],
   "html": "<table class=\"tc\">\n          <tr><th>Layer</th><th>Lesion and the disease it names</th></tr>\n          <tr><td><b>Pericardium</b></td><td><b>Fibrinous pericarditis</b> = \"<b>bread-and-butter</b>\" heart. <b>Traumatic pericarditis</b> of cattle — foul \"washing-water\" pus + wire. <b>Hydropericardium</b> — <b>mulberry heart disease</b> of pigs (vit E/Se) and <b>hydropericardium syndrome</b> of broilers</td></tr>\n          <tr><td><b>Myocardium</b></td><td><b>\"TIGER HEART\" ★</b> — pale yellow-white streaks alternating with red on the papillary muscles: <b>FMD in calves</b> (also white muscle disease). Myocarditis in blackleg, trypanosomosis, CSF</td></tr>\n          <tr><td><b>Endocardium</b></td><td><b>Vegetative valvular endocarditis</b> — cauliflower-like friable masses. <b>Cattle: right AV (tricuspid)</b>; <b>pig: left AV (mitral)</b> with <b><i>Erysipelothrix</i></b> and <i>Streptococcus</i>. Source of <b>embolic</b> nephritis and pneumonia</td></tr>\n        </table>\n        <div class=\"trap\"><span class=\"lbl\">Hypertrophy type</span> <b>CONCENTRIC</b> — pressure overload, thick wall, <b>small</b> lumen (aortic/pulmonic stenosis). <b>ECCENTRIC</b> — volume overload, dilated chamber, wall relatively thin (valvular insufficiency). <b>Cor pulmonale</b> = right heart hypertrophy from lung disease; <b>brisket disease</b> = high-altitude cor pulmonale of cattle.</div>"
  },
  {
   "id": "unit-2-b11",
   "n": 11,
   "page": 2,
   "tone": "t5",
   "title": "BLOOD VESSELS",
   "stars": 0,
   "kinds": [],
   "html": "<ul class=\"sm\">\n          <li><b>Arteriosclerosis</b> — generic hardening; <b>atherosclerosis</b> (lipid plaque) is rare in animals but occurs in <b>hypothyroid dogs</b> and pigs</li>\n          <li><b>Verminous aneurysm ★</b> — <b><i>Strongylus vulgaris</i></b> in the <b>cranial mesenteric artery</b> of the horse → thrombosis → intestinal infarction and colic</li>\n          <li><b>Arteritis</b> — equine viral arteritis, malignant catarrhal fever, immune-complex (Type III) vasculitis</li>\n          <li><b>Lymphangitis</b> — epizootic lymphangitis (<i>Histoplasma farciminosum</i>) and glanders (<b>farcy</b>) in horses; corded lymphatics in <b>Johne's</b></li>\n        </ul>"
  },
  {
   "id": "unit-2-b12",
   "n": 12,
   "page": 2,
   "tone": "t4",
   "title": "ANAEMIA — classify it two ways",
   "stars": 2,
   "kinds": [
    "table",
    "trap"
   ],
   "html": "<table class=\"ta\">\n          <tr><th>By cause</th><th>Examples</th></tr>\n          <tr><td><b>Blood loss</b> (regenerative)</td><td><b>Haemonchosis</b>, ticks, lice, hookworm, trauma, ulcer</td></tr>\n          <tr><td><b>Haemolytic</b> (regenerative)</td><td><b>Babesiosis, theileriosis, anaplasmosis</b>, leptospirosis, copper toxicity, neonatal isoerythrolysis, AIHA</td></tr>\n          <tr><td><b>Reduced production</b> (<b>non-regenerative</b>)</td><td><b>Bracken fern</b>, radiation, chronic renal failure (↓erythropoietin), iron deficiency, chronic inflammation, <b>trichlorethylene-extracted soybean</b></td></tr>\n        </table>\n        <table class=\"ta\">\n          <tr><th>By RBC morphology</th><th>Meaning</th></tr>\n          <tr><td><b>Macrocytic hypochromic</b></td><td><b>Regenerative</b> — young cells released; reticulocytosis, polychromasia, anisocytosis, nucleated RBCs, Howell–Jolly bodies</td></tr>\n          <tr><td><b>Normocytic normochromic</b></td><td>Acute loss, anaemia of chronic disease, early stage</td></tr>\n          <tr><td><b>Microcytic hypochromic</b></td><td><b>IRON DEFICIENCY</b> — classically <b>baby-pig anaemia</b> and chronic blood loss</td></tr>\n        </table>\n        <div class=\"trap\"><span class=\"lbl\">Species trap</span> The <b>HORSE does NOT release reticulocytes</b> into blood, so equine anaemia cannot be called regenerative on a blood smear — you must examine <b>bone marrow</b>.</div>"
  },
  {
   "id": "unit-2-b13",
   "n": 13,
   "page": 2,
   "tone": "t4",
   "title": "Bone marrow &amp; white cells",
   "stars": 0,
   "kinds": [],
   "html": "<ul class=\"sm\">\n          <li><b>Aplastic anaemia / pancytopenia</b> — <b>bracken fern</b> (ptaquiloside), radiation, chloramphenicol, oestrogen toxicity in dogs, trichothecene mycotoxins</li>\n          <li><b>Myelophthisis</b> — marrow crowded out by tumour</li>\n          <li><b>Leukaemia</b> — neoplastic cells <b>in blood</b>; <b>lymphoma/lymphosarcoma</b> = solid tumour of lymphoid tissue, may be <b>aleukaemic</b></li>\n          <li><b>Polycythaemia</b> — relative (dehydration, the common one) vs absolute (primary or hypoxia-driven)</li>\n          <li><b>Leucopenia</b> — <b>viral</b> (CSF, BVD, IBD, panleukopenia, RD), overwhelming sepsis, endotoxaemia, radiation</li>\n        </ul>"
  },
  {
   "id": "unit-2-b14",
   "n": 14,
   "page": 3,
   "tone": "t3",
   "title": "LYMPH NODE, SPLEEN, THYMUS, BURSA",
   "stars": 0,
   "kinds": [
    "table",
    "trap"
   ],
   "html": "<ul class=\"sm\">\n          <li><b>Acute lymphadenitis</b> — enlarged, wet, bulging, red</li>\n          <li><b>Caseous lymphadenitis</b> — <b><i>Corynebacterium pseudotuberculosis</i></b>, sheep/goats; <b>concentric \"ONION-RING\"</b> laminated pus</li>\n          <li><b>Lymphoid atrophy/depletion</b> — <b>IBD (Gumboro)</b> in the bursa, BVD, CDV, stress and corticosteroid</li>\n        </ul>\n        <table class=\"tp\">\n          <tr><th>Spleen</th><th>Meaning</th></tr>\n          <tr><td><b>\"Blood spleen\" ★</b></td><td><b>ANTHRAX</b> — grossly enlarged, soft, dark, <b>blackberry-jam / tarry</b> pulp that oozes</td></tr>\n          <tr><td><b>Sago spleen</b></td><td>Nodular (follicular) <b>amyloidosis</b></td></tr>\n          <tr><td><b>Lardaceous spleen</b></td><td>Diffuse red-pulp amyloid</td></tr>\n          <tr><td><b>Splenic infarct</b></td><td>Classical swine fever — <b>marginal wedge-shaped dark infarcts</b> (near pathognomonic)</td></tr>\n          <tr><td><b>Siderotic plaques</b></td><td>Brown-yellow iron-calcium plaques on the capsule of old dogs, incidental</td></tr>\n        </table>\n        <div class=\"trap\"><span class=\"lbl\">Anthrax rule ★★★</span> A ruminant found dead with <b>tarry unclotted blood from body orifices</b>, <b>rigor mortis absent or incomplete</b>, and a huge soft spleen — <b>DO NOT OPEN THE CARCASS</b>. Take a <b>peripheral blood smear</b> (ear vein), stain with <b>polychrome methylene blue → McFadyean's reaction</b> (pink capsule around blue rods), and dispose by <b>deep burial with lime or incineration</b>.</div>"
  },
  {
   "id": "unit-2-b15",
   "n": 15,
   "page": 3,
   "tone": "t2",
   "title": "KIDNEY — where the lesion sits",
   "stars": 3,
   "kinds": [
    "table",
    "fact"
   ],
   "html": "<table class=\"tt\">\n          <tr><th>Disease</th><th>Site</th><th>Signature</th></tr>\n          <tr><td><b>Glomerulonephritis</b></td><td>Glomerulus</td><td><b>Immune complex</b> (Type III); proteinuria, <b>protein-losing nephropathy</b>, oedema/ascites</td></tr>\n          <tr><td><b>Interstitial nephritis</b></td><td>Interstitium</td><td><b>\"WHITE-SPOTTED KIDNEY\"</b> of calves — <b>leptospirosis</b>, <i>E. coli</i>; grey-white foci with lymphocyte cuffs</td></tr>\n          <tr><td><b>Embolic suppurative nephritis</b></td><td>Cortex, random</td><td>Multiple small abscesses from <b>valvular endocarditis</b> or navel-ill</td></tr>\n          <tr><td><b>Pyelonephritis</b></td><td>Pelvis → medulla, <b>ascending</b></td><td><b><i>Corynebacterium renale</i></b> in cattle; pus in the pelvis, radiating streaks in medulla</td></tr>\n          <tr><td><b>Nephrosis (tubular necrosis)</b></td><td>Tubules</td><td><b>Toxic</b> — oak/tannin, <b>oxalate</b>, aminoglycoside, <b>ethylene glycol</b> (birefringent calcium oxalate crystals), mercury, ochratoxin, sulphonamide</td></tr>\n          <tr><td><b>Amyloidosis</b></td><td>Glomerulus</td><td>Congo red, <b>apple-green birefringence</b>; pale, waxy, enlarged kidney</td></tr>\n          <tr><td><b>Hydronephrosis</b></td><td>Whole kidney</td><td>Obstruction → <b>pressure atrophy</b>, kidney becomes a thin-walled sac</td></tr>\n        </table>\n        <div class=\"fact\"><span class=\"lbl\">Uraemia — the lesions examiners want</span> <b>Ulcerative stomatitis &amp; glossitis</b> · <b>uraemic gastritis</b> with mucosal mineralisation · <b>fibrinous pericarditis</b> · pulmonary oedema (\"uraemic lung\") · <b>intercostal &amp; aortic mineralisation</b> · <b>rubber jaw</b> in dogs · ammoniacal breath.</div>"
  },
  {
   "id": "unit-2-b16",
   "n": 16,
   "page": 3,
   "tone": "t2",
   "title": "LOWER URINARY TRACT",
   "stars": 0,
   "kinds": [],
   "html": "<ul class=\"sm\">\n          <li><b>Urolithiasis</b> — <b>struvite</b> (Mg-ammonium-phosphate; concentrate-fed male sheep, goats and bullocks) · <b>silica</b> (range cattle) · <b>oxalate</b> · urate (Dalmatian). Obstruction at the <b>sigmoid flexure / urethral process</b> → <b>\"water belly\"</b> (urethral rupture, urine in subcutis) or bladder rupture and uroperitoneum</li>\n          <li><b>Cystitis</b> — ascending, commoner in females</li>\n          <li><b>ENZOOTIC HAEMATURIA ★</b> — chronic <b>bracken fern</b> feeding → bladder <b>haemangiomas and carcinomas</b>, persistent haematuria; often with <b>bovine papillomavirus</b> co-factor</li>\n        </ul>"
  },
  {
   "id": "unit-2-b17",
   "n": 17,
   "page": 3,
   "tone": "t5",
   "title": "FEMALE GENITALIA &amp; PLACENTA",
   "stars": 0,
   "kinds": [
    "mem"
   ],
   "html": "<ul class=\"sm\">\n          <li><b>Endometritis / metritis</b> — post-partum, retained placenta, dystocia; <i>Trueperella (Arcanobacterium) pyogenes</i>, <i>E. coli</i></li>\n          <li><b>PYOMETRA</b> — <b>cystic endometrial hyperplasia–pyometra complex</b> of the bitch, <b>progesterone</b>-driven, <b><i>E. coli</i></b>; <b>closed</b> cervix is the dangerous form (endotoxaemia, ↑ risk of rupture)</li>\n          <li><b>BRUCELLA placentitis ★</b> — <b>necrotic, yellow, leathery cotyledons</b> + <b>thickened intercotyledonary membrane</b> with a sticky exudate; fetal stomach content is the best sample</li>\n          <li><b>Mummification</b> (fetus dries, no bacteria, closed cervix) vs <b>maceration</b> (bacteria enter, soft tissues liquefy, bones remain)</li>\n          <li><b>Cystic ovarian disease</b> — follicular cyst (nymphomania) vs luteal cyst (anoestrus)</li>\n          <li><b>Hydrallantois / hydramnios</b>, <b>uterine torsion</b>, <b>prolapse</b></li>\n        </ul>\n        <div class=\"mem\"><span class=\"lbl\">Abortion causes to name</span> <b>Bacterial:</b> brucellosis, leptospirosis, listeriosis, campylobacteriosis, salmonellosis, <i>Chlamydia</i>. <b>Viral:</b> IBR, BVD, EHV-1 (rhinopneumonitis), bluetongue, PPR. <b>Fungal:</b> <i>Aspergillus</i> — raised leathery plaques on the placenta and <b>ringworm-like skin lesions on the fetus</b>. <b>Protozoal:</b> <i>Neospora</i>, <i>Toxoplasma</i> (sheep — <b>white necrotic foci on the cotyledons, \"strawberry jam\"</b>). <b>Toxic/plant:</b> nitrate, locoweed.</div>"
  },
  {
   "id": "unit-2-b18",
   "n": 18,
   "page": 3,
   "tone": "t5",
   "title": "MALE GENITALIA &amp; UDDER",
   "stars": 0,
   "kinds": [
    "table"
   ],
   "html": "<ul class=\"sm\">\n          <li><b>Orchitis</b> — <b><i>Brucella abortus</i></b> in bulls, <b><i>B. ovis</i> epididymitis</b> in rams (tail of the epididymis); leads to <b>testicular degeneration and sterility</b></li>\n          <li><b>Cryptorchidism</b> — retained testis; <b>higher risk of Sertoli cell tumour</b> and <b>seminoma</b>; spermatogenesis fails but Leydig cells still make testosterone</li>\n          <li><b>Balanoposthitis</b> — IBR/IPV, <i>Corynebacterium renale</i> (pizzle rot of wethers)</li>\n        </ul>\n        <table class=\"tc\">\n          <tr><th>Mastitis</th><th>Agent / lesion</th></tr>\n          <tr><td><b>Catarrhal / subclinical</b></td><td><i>Streptococcus agalactiae</i>; ↑ somatic cell count, <b>CMT positive</b></td></tr>\n          <tr><td><b>Suppurative</b></td><td><i>Staph. aureus</i>, <i>Str. dysgalactiae</i>; abscess, fibrosis, \"blind quarter\"</td></tr>\n          <tr><td><b>GANGRENOUS ★</b></td><td><b><i>Staph. aureus</i></b> (α-toxin) &amp; <i>Cl. perfringens</i>; udder <b>cold, blue-black, sloughs</b>; blood-tinged watery secretion</td></tr>\n          <tr><td><b>Summer mastitis</b></td><td><i>Trueperella pyogenes</i>, fly-borne, dry cows, foul thick pus</td></tr>\n          <tr><td><b>Granulomatous</b></td><td><b>Tuberculous mastitis</b> — a public-health hazard in India; also <i>Nocardia</i>, mycotic</td></tr>\n        </table>"
  },
  {
   "id": "unit-2-b19",
   "n": 19,
   "page": 4,
   "tone": "t3",
   "title": "NERVOUS SYSTEM — reaction patterns",
   "stars": 0,
   "kinds": [
    "table",
    "trap"
   ],
   "html": "<div class=\"chips\">\n          <span class=\"chip\"><b>Chromatolysis</b> Nissl loss, swollen neuron</span>\n          <span class=\"chip\"><b>Satellitosis</b> glia around a neuron</span>\n          <span class=\"chip\"><b>Neuronophagia</b> dead neuron eaten</span>\n          <span class=\"chip\"><b>Gliosis</b> the CNS scar</span>\n          <span class=\"chip\"><b>Perivascular cuffing</b> = <b>VIRAL</b></span>\n          <span class=\"chip\"><b>Status spongiosus</b> vacuolated neuropil</span>\n          <span class=\"chip\"><b>Wallerian degeneration</b></span>\n        </div>\n        <div class=\"trap\"><span class=\"lbl\">Naming the site</span> <b>Polio</b>encephalitis = <b>GREY</b> matter (rabies, RD, listeriosis) · <b>Leuko</b>encephalitis = <b>WHITE</b> matter (CDV, scrapie) · <b>-malacia</b> = softening/necrosis · <b>Meningitis</b> · <b>Myelitis</b> = spinal cord.</div>\n        <table class=\"tp\">\n          <tr><th>Named CNS disease</th><th>Cause &amp; lesion</th></tr>\n          <tr><td><b>Polioencephalomalacia (CCN)</b></td><td><b>Thiamine deficiency</b> / thiaminase, high grain, amprolium, high sulphur. Cortex soft, yellow, laminar necrosis; cut surface <b>AUTOFLUORESCES under UV</b>; opisthotonus, blindness</td></tr>\n          <tr><td><b>Leukoencephalomalacia</b></td><td><b>Mouldy maize</b>, <i>Fusarium moniliforme</i> <b>fumonisin</b>, <b>HORSES</b>; liquefactive cavities in cerebral white matter</td></tr>\n          <tr><td><b>Nigropallidal encephalomalacia</b></td><td>Yellow star thistle, horses — \"chewing disease\"</td></tr>\n          <tr><td><b>Rabies</b></td><td><b>NEGRI BODY</b> — <b>intraCYTOplasmic</b> eosinophilic inclusion in <b>hippocampal pyramidal neurons</b> and <b>cerebellar Purkinje cells</b>; non-suppurative polioencephalitis. Stain: <b>Seller's</b></td></tr>\n          <tr><td><b>Listeriosis</b></td><td><b>\"Circling disease\"</b>; <b>microabscesses in the BRAIN STEM (pons and medulla)</b>, unilateral cranial nerve signs; silage-fed</td></tr>\n          <tr><td><b>Sway back / enzootic ataxia</b></td><td><b>COPPER deficiency</b> in lambs — cerebral white-matter cavitation and spinal demyelination</td></tr>\n          <tr><td><b>Cerebellar hypoplasia</b></td><td><b>BVD</b> in calves, <b>feline panleukopenia</b> in kittens — in-utero infection</td></tr>\n          <tr><td><b>Hepatic encephalopathy</b></td><td>Status spongiosus + <b>Alzheimer type II astrocytes</b>; ammonia</td></tr>\n        </table>"
  },
  {
   "id": "unit-2-b20",
   "n": 20,
   "page": 4,
   "tone": "t4",
   "title": "ENDOCRINE",
   "stars": 0,
   "kinds": [
    "table",
    "trap"
   ],
   "html": "<table class=\"ta\">\n          <tr><th>Gland</th><th>Disorder</th></tr>\n          <tr><td><b>Thyroid</b></td><td><b>GOITRE</b> — <b>iodine deficiency</b> or <b>goitrogens</b> (brassicas, soybean, thiocyanate); <b>hyperplastic</b> (young, colloid-poor) vs <b>colloid</b> goitre. Newborns: <b>weak, hairless, stillborn with a swollen neck</b>. <b>Hyperthyroidism</b> — old <b>cats</b>, functional adenoma. <b>Hypothyroidism</b> — <b>dogs</b>, bilateral symmetric alopecia, \"tragic face\", obesity, atherosclerosis</td></tr>\n          <tr><td><b>Parathyroid</b></td><td><b>Secondary hyperparathyroidism</b>: <b>nutritional</b> (low Ca : high P, bran) → <b>big head</b>, and <b>renal</b> (chronic kidney disease) → <b>rubber jaw</b>. Both give <b>fibrous osteodystrophy</b></td></tr>\n          <tr><td><b>Adrenal</b></td><td><b>Hyperadrenocorticism (Cushing)</b> — dog, usually <b>pituitary-dependent</b>; pot belly, symmetric alopecia, thin skin, <b>calcinosis cutis</b>, hepatomegaly with steroid hepatopathy, <b>stress leucogram</b>. <b>Hypoadrenocorticism (Addison)</b> — collapse, <b>hyperkalaemia + hyponatraemia</b>, Na:K &lt; 27</td></tr>\n          <tr><td><b>Pancreatic islets</b></td><td><b>Diabetes mellitus</b> — hyperglycaemia + glucosuria, ketonuria, hepatic lipidosis, cataract in dogs; <b>islet amyloidosis</b> in cats. <b>Insulinoma</b> — hypoglycaemia, seizures</td></tr>\n          <tr><td><b>Pituitary</b></td><td>Adenoma → Cushing; <b>diabetes insipidus</b> (ADH) — huge volumes of dilute urine, SG ~1.005</td></tr>\n        </table>\n        <div class=\"trap\"><span class=\"lbl\">Stress leucogram ★</span> <b>Neutrophilia · lymphopenia · eosinopenia · monocytosis</b>. Remember it as the <b>steroid</b> pattern — the opposite of a parasitic pattern (eosinophilia).</div>"
  },
  {
   "id": "unit-2-b21",
   "n": 21,
   "page": 4,
   "tone": "t6",
   "title": "SKIN — the vocabulary is the exam",
   "stars": 0,
   "kinds": [
    "table"
   ],
   "html": "<table class=\"tg\">\n          <tr><th>Gross term</th><th>Meaning</th><th>Micro term</th><th>Meaning</th></tr>\n          <tr><td><b>Macule</b></td><td>Flat colour change</td><td><b>Hyperkeratosis</b></td><td>Thick <b>keratin</b> layer</td></tr>\n          <tr><td><b>Papule</b></td><td>Small solid raised</td><td><b>Parakeratosis</b></td><td><b>Nuclei retained</b> in keratin — <b>ZINC deficiency</b> in pigs</td></tr>\n          <tr><td><b>Vesicle / bulla</b></td><td>Fluid-filled</td><td><b>Acanthosis</b></td><td>Thick <b>stratum spinosum</b></td></tr>\n          <tr><td><b>Pustule</b></td><td>Pus-filled</td><td><b>Acantholysis</b></td><td>Cells fall apart — <b>PEMPHIGUS</b></td></tr>\n          <tr><td><b>Wheal</b></td><td>Oedematous, transient</td><td><b>Spongiosis</b></td><td>Intercellular oedema</td></tr>\n          <tr><td><b>Scale / crust</b></td><td>Keratin / dried exudate</td><td><b>Ballooning degeneration</b></td><td>Swollen keratinocytes — <b>POX</b> viruses</td></tr>\n        </table>\n        <b>Named skin lesions:</b> <b>ringworm</b> (circular scaly alopecia, KOH mount + Wood's lamp) · <b>mange</b> (<i>Sarcoptes</i> intense pruritus, <i>Demodex</i> non-pruritic, skin scraping) · <b>zinc-responsive parakeratosis</b> of pigs · <b>hyperkeratosis</b> of chlorinated naphthalene poisoning and vitamin A deficiency · <b>photosensitization</b> on white skin · <b>papillomatosis</b> (warts, bovine papillomavirus) · <b>dermatophilosis</b> (\"rain scald\", <b>\"railroad-track\" branching filaments</b>) · <b>lumpy skin disease</b> nodules."
  },
  {
   "id": "unit-2-b22",
   "n": 22,
   "page": 4,
   "tone": "t2",
   "title": "EAR &amp; EYE",
   "stars": 0,
   "kinds": [],
   "html": "<ul class=\"sm\">\n          <li><b>Otitis externa</b> — <i>Otodectes</i> ear mite, <i>Malassezia</i>, bacteria; long pendulous ears predispose</li>\n          <li><b>Aural haematoma</b> — blood between cartilage and perichondrium, from head shaking</li>\n          <li><b>Otitis media/interna</b> — head tilt, extension of pharyngeal infection through the Eustachian tube</li>\n          <li><b>IBK \"pinkeye\" ★</b> — <b><i>Moraxella bovis</i></b>, fly-spread; keratoconjunctivitis, corneal ulcer → opacity, possible perforation</li>\n          <li><b>\"BLUE EYE\" ★</b> — <b>anterior uveitis with corneal oedema</b> after <b>infectious canine hepatitis</b> (CAV-1) or its vaccine; a <b>Type III</b> immune-complex reaction</li>\n          <li><b>Equine recurrent uveitis (\"moon blindness\")</b> — immune-mediated, associated with <i>Leptospira</i>; leads to cataract, synechia and phthisis bulbi</li>\n          <li><b>Squamous cell carcinoma of the eye</b> — <b>Hereford</b> and other unpigmented-eyelid cattle, sunlight; commonest bovine eye tumour</li>\n          <li><b>Cataract</b> — lens opacity (diabetes, age, trauma) · <b>Glaucoma</b> — ↑ intraocular pressure, buphthalmos · <b>Exophthalmos</b> vs <b>enophthalmos</b></li>\n        </ul>"
  },
  {
   "id": "unit-2-b23",
   "n": 23,
   "page": 4,
   "tone": "t4",
   "title": "BLANK-FILL DRILL — Unit 2",
   "stars": 0,
   "kinds": [
    "drill"
   ],
   "html": "",
   "drill": true
  }
 ],
 "drill": [
  {
   "id": "unit-2-d001",
   "html": "Wooden tongue = <u>Actinobacillus lignieresii</u>; lumpy jaw = <u>Actinomyces bovis</u>"
  },
  {
   "id": "unit-2-d002",
   "html": "Antemortem bloat is proved by the <u>bloat line</u> in the oesophagus"
  },
  {
   "id": "unit-2-d003",
   "html": "Rumenitis–liver abscess complex organism = <u>Fusobacterium necrophorum</u>"
  },
  {
   "id": "unit-2-d004",
   "html": "Johne's disease gives a <u>corrugated/rugose</u> ileum with <u>no ulceration</u>"
  },
  {
   "id": "unit-2-d005",
   "html": "Button ulcers of the caecum occur in <u>classical swine fever</u>"
  },
  {
   "id": "unit-2-d006",
   "html": "Bronchopneumonia is <u>cranioventral</u>; interstitial pneumonia is <u>diffuse</u>"
  },
  {
   "id": "unit-2-d007",
   "html": "Marbling of the lung with sequestra = <u>CBPP</u>"
  },
  {
   "id": "unit-2-d008",
   "html": "Lung that has breathed <u>floats</u> in water — the <u>docimasia</u> test"
  },
  {
   "id": "unit-2-d009",
   "html": "Atrophic rhinitis of pigs is caused by <u>Bordetella bronchiseptica</u> + toxigenic <u>Pasteurella multocida</u> type D"
  },
  {
   "id": "unit-2-d010",
   "html": "White muscle disease is deficiency of <u>vitamin E and selenium</u>"
  },
  {
   "id": "unit-2-d011",
   "html": "In myoglobinuria the plasma stays <u>clear</u>; in haemoglobinuria it is <u>red</u>"
  },
  {
   "id": "unit-2-d012",
   "html": "Rickets affects the <u>young</u>; osteomalacia the <u>adult</u>"
  },
  {
   "id": "unit-2-d013",
   "html": "Big head of horses = <u>nutritional secondary hyperparathyroidism</u>; rubber jaw = <u>renal</u> secondary hyperparathyroidism"
  },
  {
   "id": "unit-2-d014",
   "html": "Tiger heart is classic of <u>FMD</u> in calves"
  },
  {
   "id": "unit-2-d015",
   "html": "Vegetative endocarditis affects the <u>right AV</u> valve in cattle and the <u>left AV (mitral)</u> valve in pigs"
  },
  {
   "id": "unit-2-d016",
   "html": "Verminous aneurysm of the horse is caused by <u>Strongylus vulgaris</u> in the <u>cranial mesenteric</u> artery"
  },
  {
   "id": "unit-2-d017",
   "html": "Microcytic hypochromic anaemia means <u>iron deficiency</u>"
  },
  {
   "id": "unit-2-d018",
   "html": "The <u>horse</u> does not release reticulocytes, so its anaemia cannot be graded on a smear"
  },
  {
   "id": "unit-2-d019",
   "html": "Onion-ring pus in a sheep lymph node = <u>Corynebacterium pseudotuberculosis</u>"
  },
  {
   "id": "unit-2-d020",
   "html": "Blackberry-jam spleen with unclotted tarry blood = <u>anthrax</u>; confirm with <u>McFadyean's</u> reaction"
  },
  {
   "id": "unit-2-d021",
   "html": "Marginal wedge-shaped splenic infarcts = <u>classical swine fever</u>"
  },
  {
   "id": "unit-2-d022",
   "html": "White-spotted kidney of calves = <u>interstitial nephritis</u>, often <u>leptospirosis</u>"
  },
  {
   "id": "unit-2-d023",
   "html": "Pyelonephritis in cattle is caused by <u>Corynebacterium renale</u>"
  },
  {
   "id": "unit-2-d024",
   "html": "Ethylene glycol poisoning deposits <u>calcium oxalate</u> crystals in tubules"
  },
  {
   "id": "unit-2-d025",
   "html": "Enzootic haematuria follows chronic feeding of <u>bracken fern</u>"
  },
  {
   "id": "unit-2-d026",
   "html": "Necrotic cotyledons with thick leathery intercotyledonary membrane = <u>brucellosis</u>"
  },
  {
   "id": "unit-2-d027",
   "html": "Pyometra of the bitch is driven by <u>progesterone</u> with <u>E. coli</u>"
  },
  {
   "id": "unit-2-d028",
   "html": "Gangrenous mastitis is usually caused by <u>Staphylococcus aureus</u>"
  },
  {
   "id": "unit-2-d029",
   "html": "Perivascular cuffing indicates a <u>viral</u> encephalitis"
  },
  {
   "id": "unit-2-d030",
   "html": "Negri bodies are <u>intracytoplasmic</u> and lie in <u>hippocampal</u> neurons and <u>Purkinje</u> cells"
  },
  {
   "id": "unit-2-d031",
   "html": "Polioencephalomalacia is due to <u>thiamine</u> deficiency and <u>autofluoresces</u> under UV light"
  },
  {
   "id": "unit-2-d032",
   "html": "Leukoencephalomalacia of horses follows <u>mouldy maize</u> (<u>fumonisin</u>)"
  },
  {
   "id": "unit-2-d033",
   "html": "Circling disease with brain-stem microabscesses = <u>listeriosis</u>"
  },
  {
   "id": "unit-2-d034",
   "html": "Sway back of lambs is <u>copper</u> deficiency"
  },
  {
   "id": "unit-2-d035",
   "html": "Cerebellar hypoplasia in calves follows in-utero <u>BVD</u> infection"
  },
  {
   "id": "unit-2-d036",
   "html": "The stress leucogram is <u>neutrophilia, lymphopenia, eosinopenia, monocytosis</u>"
  },
  {
   "id": "unit-2-d037",
   "html": "Parakeratosis in pigs indicates <u>zinc</u> deficiency"
  },
  {
   "id": "unit-2-d038",
   "html": "Acantholysis is the hallmark of <u>pemphigus</u>; ballooning degeneration of <u>pox</u>"
  },
  {
   "id": "unit-2-d039",
   "html": "Pinkeye of cattle is caused by <u>Moraxella bovis</u>"
  },
  {
   "id": "unit-2-d040",
   "html": "Blue eye after ICH vaccination is a type <u>III</u> hypersensitivity"
  }
 ]
};

revisionData["unit-3"] = {
 "id": "unit-3",
 "no": 3,
 "title": "Oncology, Clinical Pathology and Necropsy",
 "paper": "paper-1",
 "icon": "microscope",
 "pages": 5,
 "pageTitles": [
  "Neoplasia — Definitions, Behaviour, Carcinogenesis",
  "Spread · Immunity · Effects · Grading · Tumour Types",
  "Tumours of Domestic Animals · Clinical Pathology Begins",
  "Haematology · Blood Smear · Urinalysis · Cytology",
  "Urinalysis · Cytology · NECROPSY · Veterolegal · Drill"
 ],
 "sheet": "revision/unit-3.html",
 "boxes": [
  {
   "id": "unit-3-b01",
   "n": 1,
   "page": 1,
   "tone": "t1",
   "title": "Definitions &amp; structure",
   "stars": 0,
   "kinds": [
    "flow",
    "fact"
   ],
   "html": "<div class=\"fact\"><span class=\"lbl\">Willis' definition — learn it verbatim</span> \"A neoplasm is an <b>abnormal mass of tissue, the growth of which exceeds and is uncoordinated with that of the normal tissue, and persists in the same excessive manner after cessation of the stimulus which evoked the change.</b>\"</div>\n        <b>Two components of every tumour:</b>\n        <div class=\"chain\"><span class=\"s\"><b>PARENCHYMA</b><br>the neoplastic cells — they decide the <b>name and behaviour</b></span><span class=\"a2\">+</span>\n          <span class=\"s\"><b>STROMA</b><br><b>host-derived</b> connective tissue + blood vessels — decides the <b>growth and consistency</b></span></div>\n        <ul class=\"sm\">\n          <li><b>Desmoplasia / scirrhous</b> = abundant fibrous stroma → a <b>stony-hard</b> tumour</li>\n          <li><b>Medullary</b> = little stroma → soft, fleshy tumour</li>\n          <li><b>Oncology</b> = study of tumours · <b>cancer</b> = any malignant tumour</li>\n        </ul>"
  },
  {
   "id": "unit-3-b02",
   "n": 2,
   "page": 1,
   "tone": "t2",
   "title": "NOMENCLATURE",
   "stars": 2,
   "kinds": [
    "table",
    "trap",
    "mem"
   ],
   "html": "<table class=\"tt\">\n          <tr><th>Tissue of origin</th><th>Benign</th><th>Malignant</th></tr>\n          <tr><td>Surface epithelium</td><td><b>Papilloma</b></td><td><b>Squamous cell carcinoma</b></td></tr>\n          <tr><td>Glandular epithelium</td><td><b>Adenoma</b></td><td><b>Adenocarcinoma</b></td></tr>\n          <tr><td>Fibrous tissue</td><td>Fibroma</td><td>Fibro<b>sarcoma</b></td></tr>\n          <tr><td>Fat</td><td>Lipoma</td><td>Liposarcoma</td></tr>\n          <tr><td>Bone</td><td>Osteoma</td><td>Osteosarcoma</td></tr>\n          <tr><td>Cartilage</td><td>Chondroma</td><td>Chondrosarcoma</td></tr>\n          <tr><td>Blood vessel</td><td>Haemangioma</td><td>Haemangiosarcoma</td></tr>\n          <tr><td>Smooth muscle</td><td>Leiomyoma</td><td>Leiomyosarcoma</td></tr>\n          <tr><td>Skeletal muscle</td><td>Rhabdomyoma</td><td>Rhabdomyosarcoma</td></tr>\n          <tr><td>Melanocyte</td><td>Melanocytoma</td><td>Melanoma</td></tr>\n        </table>\n        <div class=\"trap\"><span class=\"lbl\">The \"-oma\" exceptions — MALIGNANT despite the name ★</span>\n          <b>Lymphoma · Melanoma · Seminoma · Mesothelioma · Hepatoma · Thymoma (locally invasive)</b>. Also remember the <b>non-neoplastic</b> \"-omas\": <b>haematoma, granuloma, hamartoma</b>.</div>\n        <div class=\"mem\"><span class=\"lbl\">Three look-alike terms</span> <b>Hamartoma</b> — a disorganised mass of <b>tissue native to the site</b>. <b>Choristoma</b> — <b>normal tissue in the WRONG place</b> (ectopic). <b>Teratoma</b> — from germ cells, contains <b>more than one germ layer</b> (hair, teeth, bone in an ovarian mass).</div>\n        <b>Rule:</b> malignant tumour of <b>epithelium = CARCINOMA</b>; of <b>mesenchyme = SARCOMA</b>. A <b>carcinosarcoma</b> has both."
  },
  {
   "id": "unit-3-b03",
   "n": 3,
   "page": 1,
   "tone": "t5",
   "title": "BENIGN vs MALIGNANT",
   "stars": 3,
   "kinds": [
    "table",
    "fact"
   ],
   "html": "<table class=\"tc\">\n          <tr><th>Feature</th><th>Benign</th><th>Malignant</th></tr>\n          <tr><td>Growth rate</td><td>Slow</td><td><b>Rapid</b></td></tr>\n          <tr><td>Mode of growth</td><td><b>Expansile</b>, pushes tissue aside</td><td><b>Infiltrative / invasive</b></td></tr>\n          <tr><td>Capsule</td><td><b>Present</b>, well demarcated</td><td><b>Absent</b>, ill-defined margin</td></tr>\n          <tr><td><b>Metastasis</b></td><td><b>NEVER</b></td><td><b>Characteristic</b></td></tr>\n          <tr><td>Differentiation</td><td>Well differentiated, resembles parent</td><td>Poor — <b>anaplasia</b></td></tr>\n          <tr><td>Mitoses</td><td>Few, normal</td><td>Many, <b>abnormal/tripolar</b></td></tr>\n          <tr><td>Nucleus</td><td>Normal, N:C ≈ 1:4–1:6</td><td><b>Hyperchromatic</b>, N:C → <b>1:1</b>, big nucleoli</td></tr>\n          <tr><td>Pleomorphism</td><td>Absent</td><td><b>Marked</b> (variable size &amp; shape)</td></tr>\n          <tr><td>Necrosis &amp; haemorrhage</td><td>Rare</td><td><b>Common</b> (outgrows blood supply)</td></tr>\n          <tr><td>Recurrence after removal</td><td>Rare</td><td>Frequent</td></tr>\n          <tr><td>Effect on host</td><td>Usually local (pressure)</td><td><b>Cachexia</b>, often fatal</td></tr>\n        </table>\n        <div class=\"fact\"><span class=\"lbl\">The single decisive criterion</span> <b>METASTASIS</b> — its presence proves malignancy. But <b>absence does not prove benignity</b>, because some malignant tumours (basal cell carcinoma, most brain tumours) rarely metastasise.</div>"
  },
  {
   "id": "unit-3-b04",
   "n": 4,
   "page": 1,
   "tone": "t3",
   "title": "ANAPLASIA — the microscopic checklist",
   "stars": 0,
   "kinds": [
    "mem"
   ],
   "html": "<ul class=\"sm\">\n          <li><b>Pleomorphism</b> — variation in cell and nuclear size and shape</li>\n          <li><b>Hyperchromasia</b> — dark nuclei from ↑ DNA</li>\n          <li><b>High nucleo-cytoplasmic ratio</b> — up to <b>1:1</b></li>\n          <li><b>Prominent, multiple, irregular nucleoli</b></li>\n          <li><b>Abnormal mitotic figures</b> — tripolar, quadripolar, ring; ↑ mitotic index</li>\n          <li><b>Tumour giant cells</b> with single huge or multiple nuclei</li>\n          <li><b>Loss of polarity</b> — disorderly, chaotic arrangement</li>\n          <li><b>Ischaemic necrosis</b> in the centre of the mass</li>\n        </ul>\n        <div class=\"mem\"><span class=\"lbl\">The precancer ladder</span> <b>Hyperplasia → Metaplasia → DYSPLASIA (reversible, pre-neoplastic) → Carcinoma <i>in situ</i> (full-thickness change, basement membrane INTACT) → Invasive carcinoma (basement membrane BREACHED)</b>.</div>"
  },
  {
   "id": "unit-3-b05",
   "n": 5,
   "page": 1,
   "tone": "t4",
   "title": "AETIOLOGY &amp; CARCINOGENESIS",
   "stars": 2,
   "kinds": [
    "table",
    "flow",
    "mem"
   ],
   "html": "<div class=\"chain amb\"><span class=\"s\"><b>1 INITIATION</b><br>irreversible <b>DNA mutation</b> by the initiator</span><span class=\"a2\">→</span>\n          <span class=\"s\"><b>2 PROMOTION</b><br>reversible, needs <b>repeated</b> exposure; promoter alone cannot cause cancer</span><span class=\"a2\">→</span>\n          <span class=\"s\"><b>3 PROGRESSION</b><br>further mutation, autonomy, invasion, metastasis</span></div>\n        <table class=\"ta\">\n          <tr><th>Class</th><th>Agents in veterinary practice</th></tr>\n          <tr><td><b>Chemical</b></td><td><b>Aflatoxin B₁</b> → <b>hepatocellular carcinoma</b> · <b>bracken fern (ptaquiloside)</b> → bladder and upper GI tumours · nitrosamines · tar, soot, benzpyrene · <b>cycad</b>, <b>ragwort</b></td></tr>\n          <tr><td><b>Physical</b></td><td><b>Ultraviolet light</b> → <b>SCC of eyelid and third eyelid in Hereford cattle</b>, ear tips of white cats · ionising radiation · chronic irritation</td></tr>\n          <tr><td><b>Viral (oncogenic) ★</b></td><td><b>Bovine papillomavirus</b> → warts, <b>equine sarcoid</b>, and with bracken fern → <b>enzootic haematuria</b><br><b>Marek's disease herpesvirus</b> → <b>T-cell lymphoma of chickens</b><br><b>Avian leukosis/sarcoma virus</b> → B-cell lymphoid leukosis; <b>Rous sarcoma virus</b> — the <b>first</b> tumour virus (Peyton Rous)<br><b>Bovine leukaemia virus</b> → <b>enzootic bovine leukosis</b> (adult multicentric)<br><b>FeLV</b> → feline lymphoma &amp; leukaemia · <b>Shope fibroma/papilloma</b> of rabbits</td></tr>\n          <tr><td><b>Hormonal</b></td><td>Oestrogen → mammary tumours of the bitch; testosterone → perianal (hepatoid) gland adenoma</td></tr>\n          <tr><td><b>Parasitic</b></td><td><b><i>Spirocerca lupi</i></b> → oesophageal <b>fibrosarcoma/osteosarcoma</b> in dogs</td></tr>\n        </table>\n        <div class=\"mem\"><span class=\"lbl\">Genes</span> <b>Oncogenes</b> (accelerator, gain of function) — <b><i>ras, myc, erbB, src</i></b>; the normal form is a <b>proto-oncogene</b>. <b>Tumour suppressor genes</b> (brake, loss of function) — <b><i>p53</i> \"guardian of the genome\"</b>, <b><i>Rb</i></b>. <b>Anti-apoptotic</b> — <b><i>bcl-2</i></b>. Plus <b>DNA-repair genes</b> and re-activated <b>telomerase</b>.</div>"
  },
  {
   "id": "unit-3-b06",
   "n": 6,
   "page": 2,
   "tone": "t5",
   "title": "SPREAD OF NEOPLASMS",
   "stars": 3,
   "kinds": [
    "table",
    "flow",
    "trap"
   ],
   "html": "<table class=\"tc\">\n          <tr><th>Route</th><th>Typical of</th></tr>\n          <tr><td><b>1 Direct / local invasion</b></td><td>All malignancies — the commonest</td></tr>\n          <tr><td><b>2 Lymphatic</b></td><td><b>CARCINOMAS</b> — to the regional lymph node first</td></tr>\n          <tr><td><b>3 Haematogenous (blood)</b></td><td><b>SARCOMAS</b> — veins are thin-walled; first filter is the <b>lung</b> (systemic veins) or <b>liver</b> (portal drainage)</td></tr>\n          <tr><td><b>4 Transcoelomic</b></td><td>Seeding across body cavities — ovarian and intestinal carcinoma → peritoneal carcinomatosis with ascites</td></tr>\n          <tr><td><b>5 Implantation / iatrogenic</b></td><td>Along a needle or surgical track</td></tr>\n          <tr><td><b>6 Transplantation ★</b></td><td><b>Canine transmissible venereal tumour (TVT)</b> — the <b>living tumour cell itself</b> is transferred at coitus; the cells carry <b>~59 chromosomes</b> instead of the normal canine <b>78</b>. Also devil facial tumour disease</td></tr>\n        </table>\n        <b class=\"k\">Metastatic cascade — the order matters</b>\n        <div class=\"chain red\"><span class=\"s\"><b>1</b> Detachment<br>↓ <b>E-cadherin</b></span><span class=\"a2\">→</span>\n          <span class=\"s\"><b>2</b> Attach + degrade<br><b>basement membrane</b> (type IV collagenase, MMPs)</span><span class=\"a2\">→</span>\n          <span class=\"s\"><b>3</b> Migration &amp; <b>intravasation</b></span><span class=\"a2\">→</span>\n          <span class=\"s\"><b>4</b> Survival in circulation (platelet cloak, evades NK cells)</span><span class=\"a2\">→</span>\n          <span class=\"s\"><b>5</b> Arrest &amp; <b>extravasation</b></span><span class=\"a2\">→</span>\n          <span class=\"s\"><b>6</b> <b>Angiogenesis (VEGF)</b> and growth of the secondary</span></div>\n        <div class=\"trap\"><span class=\"lbl\">Two facts examiners love</span> ① <b>Benign tumours never metastasise.</b> ② A tumour cannot grow beyond about <b>1–2 mm</b> without <b>angiogenesis</b>.</div>"
  },
  {
   "id": "unit-3-b07",
   "n": 7,
   "page": 2,
   "tone": "t6",
   "title": "Tumour immunity",
   "stars": 0,
   "kinds": [
    "fact"
   ],
   "html": "<ul class=\"sm\">\n          <li><b>Tumour-specific antigen (TSA)</b> — found only on tumour cells; <b>tumour-associated antigen (TAA)</b> — also on some normal cells</li>\n          <li><b>Effectors:</b> <b>cytotoxic T lymphocytes (CD8, the main one)</b> · <b>NK cells</b> (kill MHC-I-negative cells) · activated macrophages · antibody with ADCC</li>\n          <li><b>Immunosurveillance</b> — the immune system continuously removes transformed cells; tumours appear when it fails, hence more tumours in <b>immunosuppressed</b> animals</li>\n          <li><b>Escape mechanisms:</b> loss of MHC class I · antigen shedding &amp; <b>blocking antibody</b> · <b>T-reg</b> and TGF-β mediated suppression · tumour cells outgrow the response (sneaking through) · antigenic modulation</li>\n        </ul>\n        <div class=\"fact\"><span class=\"lbl\">Classic proof in veterinary science</span> <b>TVT regresses spontaneously</b> in an immunocompetent dog — the standard teaching example of effective tumour immunity.</div>"
  },
  {
   "id": "unit-3-b08",
   "n": 8,
   "page": 2,
   "tone": "t4",
   "title": "EFFECTS on the host &amp; paraneoplastic syndromes",
   "stars": 0,
   "kinds": [
    "table"
   ],
   "html": "<b class=\"k\">Local</b> — pressure atrophy, obstruction (gut, airway, urethra), ulceration and haemorrhage, secondary infection, pain, pathological fracture.<br>\n        <b class=\"r\">Systemic</b> — <b>CACHEXIA</b> (mediated largely by <b>TNF-α, \"cachectin\"</b>, plus IL-1 and IL-6), anaemia, fever, DIC, thrombo-embolism.\n        <table class=\"ta\">\n          <tr><th>Paraneoplastic syndrome</th><th>Tumour behind it</th></tr>\n          <tr><td><b>Hypercalcaemia of malignancy</b> (PTH-related protein)</td><td><b>Lymphoma</b> and <b>anal sac apocrine gland adenocarcinoma</b> of the dog</td></tr>\n          <tr><td><b>Feminisation</b> — gynaecomastia, symmetric alopecia, pendulous prepuce, <b>bone-marrow aplasia</b></td><td><b>SERTOLI CELL TUMOUR</b> (hyperoestrogenism), often in a <b>cryptorchid</b> testis</td></tr>\n          <tr><td><b>Hypoglycaemia</b></td><td><b>Insulinoma</b>, large hepatic tumours</td></tr>\n          <tr><td><b>Polycythaemia</b></td><td>Renal tumour (erythropoietin)</td></tr>\n          <tr><td><b>Hyperhistaminaemia → gastric ulcer</b></td><td><b>Mast cell tumour</b> of the dog</td></tr>\n        </table>"
  },
  {
   "id": "unit-3-b09",
   "n": 9,
   "page": 2,
   "tone": "t3",
   "title": "DIAGNOSIS · GRADING · STAGING",
   "stars": 2,
   "kinds": [
    "table",
    "trap"
   ],
   "html": "<b class=\"k\">Diagnostic methods</b> — clinical exam and imaging · <b>fine-needle aspiration cytology</b> (quick, cheap, no architecture) · <b>impression smear</b> · <b>BIOPSY + histopathology = the GOLD STANDARD</b> (incisional, excisional, needle-core, punch, endoscopic) · <b>immunohistochemistry</b> (cytokeratin → epithelial; vimentin → mesenchymal; CD3 → T cell; CD79a/CD20 → B cell) · electron microscopy · flow cytometry.\n        <table class=\"tp\">\n          <tr><th></th><th>GRADING</th><th>STAGING</th></tr>\n          <tr><td>Based on</td><td><b>MICROSCOPIC</b> appearance</td><td><b>CLINICAL / anatomical EXTENT</b></td></tr>\n          <tr><td>Criteria</td><td>Degree of <b>differentiation</b>, <b>mitotic index</b>, necrosis, pleomorphism, invasion</td><td><b>T</b> = size/extent of primary · <b>N</b> = regional lymph <b>N</b>odes · <b>M</b> = distant <b>M</b>etastasis</td></tr>\n          <tr><td>Scale</td><td>Grade <b>I</b> well differentiated → <b>III</b> poorly differentiated/anaplastic</td><td>Stage <b>0–IV</b></td></tr>\n          <tr><td>Value</td><td>Tells how the tumour <b>behaves</b></td><td>Better predictor of <b>survival</b>; guides therapy</td></tr>\n        </table>\n        <div class=\"trap\"><span class=\"lbl\">Remember by the words</span> <b>G</b>rading = <b>G</b>lass slide (microscope). <b>S</b>taging = <b>S</b>pread (how far it has gone).</div>"
  },
  {
   "id": "unit-3-b10",
   "n": 10,
   "page": 3,
   "tone": "t2",
   "title": "EPITHELIAL TUMOURS",
   "stars": 0,
   "kinds": [
    "table"
   ],
   "html": "<table class=\"tt\">\n          <tr><th>Tumour</th><th>Key point</th></tr>\n          <tr><td><b>Papilloma (warts)</b></td><td><b>Papillomavirus</b>, species-specific; cauliflower-like, fibrovascular core with hyperkeratotic epithelium; <b>usually regresses spontaneously</b>; teat and penile warts in cattle</td></tr>\n          <tr><td><b>Squamous cell carcinoma ★</b></td><td>Sunlight + unpigmented skin. <b>Cattle</b> — eye/third eyelid (<b>\"cancer eye\" of Hereford</b>); <b>cat</b> — ear tip and nose of white cats; <b>horse</b> — penis, vulva, eye; <b>dog</b> — nail bed. Micro: invading nests with <b>KERATIN (epithelial) PEARLS</b> and intercellular bridges</td></tr>\n          <tr><td><b>Basal cell tumour</b></td><td>Cat and dog, head and neck; locally invasive, rarely metastasises</td></tr>\n          <tr><td><b>Adenoma / adenocarcinoma</b></td><td>Perianal (hepatoid) gland adenoma — <b>entire male dog, testosterone-dependent</b>; thyroid, hepatic, renal, intestinal</td></tr>\n          <tr><td><b>Mammary tumours</b></td><td><b>Commonest tumour of the entire bitch</b>; <b>mixed mammary tumour</b> (epithelial + cartilage/bone) is characteristic of the dog; roughly <b>50% are malignant in the bitch, but ~85–90% in the queen</b>. Early spaying is strongly protective</td></tr>\n          <tr><td><b>Transitional cell carcinoma</b></td><td>Urinary bladder; trigone; associated with <b>bracken fern</b> in cattle</td></tr>\n        </table>"
  },
  {
   "id": "unit-3-b11",
   "n": 11,
   "page": 3,
   "tone": "t2",
   "title": "MESENCHYMAL &amp; ROUND CELL TUMOURS",
   "stars": 2,
   "kinds": [
    "table",
    "mem"
   ],
   "html": "<table class=\"tt\">\n          <tr><th>Tumour</th><th>Key point</th></tr>\n          <tr><td><b>Fibroma / fibrosarcoma</b></td><td>Fibrosarcoma at <b>vaccination sites in cats</b>; interlacing \"herring-bone\" bundles</td></tr>\n          <tr><td><b>Lipoma</b></td><td>Soft, well-encapsulated, yellow, greasy; <b>floats in formalin</b></td></tr>\n          <tr><td><b>OSTEOSARCOMA ★</b></td><td><b>Commonest primary bone tumour</b>; large-breed dogs, <b>metaphysis</b> of long bones — <b>\"away from the elbow, toward the knee\"</b> (distal radius, proximal humerus, distal femur, proximal tibia). Early <b>pulmonary metastasis</b>; produces <b>tumour osteoid</b></td></tr>\n          <tr><td><b>Haemangiosarcoma</b></td><td><b>SPLEEN</b> and right atrium of the dog (German Shepherd); ruptures → <b>haemoabdomen and sudden collapse</b></td></tr>\n          <tr><td><b>Equine sarcoid</b></td><td><b>Commonest skin tumour of the horse</b>; <b>bovine papillomavirus 1 &amp; 2</b>; locally aggressive, recurs, <b>does not metastasise</b></td></tr>\n          <tr><td><b>Melanoma</b></td><td><b>Grey horses</b> — perineum, tail base, parotid region; usually slow but may become malignant. In dogs, <b>oral melanoma is highly malignant</b>; skin melanoma often benign</td></tr>\n        </table>\n        <div class=\"mem\"><span class=\"lbl\">THE FIVE ROUND CELL TUMOURS — a favourite question</span>\n          <b>1 Lymphoma</b> · <b>2 Mast cell tumour</b> (metachromatic granules with <b>toluidine blue/Giemsa</b>; ↑ eosinophils) · <b>3 Histiocytoma</b> (young dog, \"button tumour\", <b>regresses on its own</b>) · <b>4 Plasmacytoma</b> · <b>5 Transmissible venereal tumour (TVT)</b> (external genitalia, <b>vacuolated cytoplasm</b>, transplanted cells).</div>\n        <b>Lymphosarcoma in cattle — 4 forms:</b> <b>adult/enzootic (BLV)</b> multicentric · <b>juvenile (calf)</b> · <b>thymic</b> (young adult) · <b>cutaneous</b>. The first is virus-associated; the other three are <b>sporadic</b> and not BLV-related.<br>\n        <b>Gonadal tumours:</b> <b>Sertoli cell tumour</b> → feminisation; <b>seminoma</b> → from germ cells; <b>interstitial (Leydig) cell tumour</b> → usually incidental; <b>granulosa cell tumour</b> of the ovary → persistent oestrus or anoestrus, may make inhibin."
  },
  {
   "id": "unit-3-b12",
   "n": 12,
   "page": 3,
   "tone": "t4",
   "title": "ANTICOAGULANTS (guaranteed question)",
   "stars": 3,
   "kinds": [
    "table",
    "trap"
   ],
   "html": "<table class=\"ta\">\n          <tr><th>Anticoagulant</th><th>Mechanism</th><th>Use — and the trap</th></tr>\n          <tr><td><b>EDTA</b><br>(di-potassium salt)</td><td><b>Chelates calcium</b></td><td><b>THE anticoagulant for HAEMATOLOGY</b> — best preservation of cell morphology. <b>~1–2 mg per ml of blood.</b> <b>Excess EDTA shrinks cells → falsely low PCV.</b> <b>Never</b> use for calcium estimation</td></tr>\n          <tr><td><b>Heparin</b><br>(lithium/sodium)</td><td>Activates <b>antithrombin III</b>, inhibits thrombin</td><td>Best for <b>plasma biochemistry, blood gas and osmotic fragility</b>. <b>~10–20 IU per ml.</b> <b>Poor for smears</b> — gives a blue background with Romanowsky stains and clumps leucocytes</td></tr>\n          <tr><td><b>Trisodium citrate</b></td><td>Chelates calcium, <b>reversible</b></td><td><b>1 part 3.2% citrate : 9 parts blood</b> for <b>coagulation tests (PT, APTT)</b> and for <b>blood transfusion</b>; <b>1 : 4</b> for <b>ESR (Westergren)</b></td></tr>\n          <tr><td><b>Double oxalate</b> (ammonium + potassium, Wintrobe's)</td><td>Precipitates calcium</td><td>PCV and ESR only; <b>crenates cells, unsuitable for smears</b></td></tr>\n          <tr><td><b>Sodium fluoride</b></td><td><b>Inhibits glycolysis</b> (enolase)</td><td><b>GLUCOSE estimation</b> — the only correct choice; usually combined with potassium oxalate</td></tr>\n        </table>\n        <div class=\"trap\"><span class=\"lbl\">Golden rule</span> The <b>blood smear must be made within minutes, ideally from FRESH blood without any anticoagulant</b>. If that is not possible, use EDTA and make the smear within <b>1 hour</b>.</div>"
  },
  {
   "id": "unit-3-b13",
   "n": 13,
   "page": 4,
   "tone": "t1",
   "title": "Hb, PCV, TEC and the three INDICES",
   "stars": 3,
   "kinds": [
    "table",
    "trap",
    "fact"
   ],
   "html": "<ul class=\"sm\">\n          <li><b>Haemoglobin</b> — <b>cyanmethaemoglobin (HiCN) method with Drabkin's solution is the international REFERENCE method</b>, read at <b>540 nm</b>. <b>Sahli's acid-haematin</b> is the visual, less accurate field method. Oxyhaemoglobin method is also used.</li>\n          <li><b>PCV / haematocrit</b> — <b>microhaematocrit</b> capillary spun at high speed for ~5 min (the routine method), or the <b>Wintrobe</b> tube. The <b>buffy coat</b> between plasma and red cells holds the leucocytes and platelets.</li>\n          <li><b>TEC and TLC</b> — <b>Neubauer counting chamber</b>. <b>RBC diluting fluid = Hayem's</b>; <b>WBC diluting fluid = Turk's</b> (glacial acetic acid <b>lyses the red cells</b>, gentian violet stains the leucocyte nuclei).</li>\n        </ul>\n        <table>\n          <tr><th>Index</th><th>Formula</th><th>Unit</th><th>Tells you</th></tr>\n          <tr><td><b>MCV</b></td><td><b>PCV (%) × 10 ÷ RBC (millions/µl)</b></td><td><b>fl</b></td><td>Cell <b>SIZE</b> — macro / normo / microcytic</td></tr>\n          <tr><td><b>MCH</b></td><td><b>Hb (g/dl) × 10 ÷ RBC (millions/µl)</b></td><td><b>pg</b></td><td>Hb <b>weight</b> per cell</td></tr>\n          <tr><td><b>MCHC</b></td><td><b>Hb (g/dl) × 100 ÷ PCV (%)</b></td><td><b>g/dl (%)</b></td><td>Hb <b>CONCENTRATION</b> — normo / hypochromic</td></tr>\n        </table>\n        <div class=\"trap\"><span class=\"lbl\">Which index needs which value ★</span> <b>MCV needs PCV and RBC.</b> <b>MCH needs Hb and RBC.</b> <b>MCHC needs Hb and PCV</b> — it is the <b>only index that does not use the red cell count</b>, so it is the most reliable when the counter is unreliable. Hypochromia is a <b>low MCHC</b>.</div>\n        <div class=\"fact\"><span class=\"lbl\">ESR</span> <b>Westergren</b> (200 mm tube, citrate 1:4) and <b>Wintrobe</b> (100 mm tube) methods. ESR is <b>fastest in the HORSE</b> (marked rouleaux) and <b>very slow in cattle, sheep and goats</b>. It rises with ↑ fibrinogen and globulin (inflammation, pregnancy) and falls with polycythaemia and dehydration.</div>"
  },
  {
   "id": "unit-3-b14",
   "n": 14,
   "page": 4,
   "tone": "t1",
   "title": "TLC, DLC and the leucogram",
   "stars": 0,
   "kinds": [
    "table",
    "fact"
   ],
   "html": "<div class=\"fact\"><span class=\"lbl\">Absolute count</span> <b>Absolute count = (percentage of that cell × TLC) ÷ 100.</b> Always interpret <b>absolute</b>, never percentage — a \"normal 30% lymphocytes\" can still be lymphopenia if the TLC is low.</div>\n        <table>\n          <tr><th>Species group</th><th>Predominant leucocyte</th></tr>\n          <tr><td><b>Dog, cat, horse</b></td><td><b>NEUTROPHIL</b></td></tr>\n          <tr><td><b>Cattle, sheep, goat</b></td><td><b>LYMPHOCYTE</b></td></tr>\n          <tr><td>Pig</td><td>Roughly equal / lymphocyte</td></tr>\n          <tr><td><b>Birds, reptiles, rabbits</b></td><td><b>HETEROPHIL</b> replaces the neutrophil (rod-shaped red granules); lymphocyte usually predominates in birds</td></tr>\n        </table>\n        <b>Stains</b> — the <b>Romanowsky</b> group: <b>Leishman, Giemsa, Wright, May-Grünwald</b> (methylene blue + eosin in methanol). Counting method: <b>battlement / cross-sectional</b>, <b>100 cells</b> in the body-and-tail of the smear.\n        <table>\n          <tr><th>Change</th><th>Meaning</th></tr>\n          <tr><td><b>Left shift, regenerative</b></td><td>Immature (band) cells present but <b>mature &gt; immature</b> — a good response</td></tr>\n          <tr><td><b>Left shift, DEGENERATIVE</b></td><td><b>Immature &gt; mature</b>, usually with leucopenia — <b>overwhelming infection, poor prognosis</b></td></tr>\n          <tr><td><b>Right shift</b></td><td><b>Hypersegmented</b> neutrophils — old cells, corticosteroid or chronic disease</td></tr>\n          <tr><td><b>Toxic change</b></td><td><b>Döhle bodies</b>, cytoplasmic basophilia, vacuolation, toxic granulation — severe bacterial toxaemia</td></tr>\n          <tr><td><b>Stress leucogram</b></td><td><b>Neutrophilia + lymphopenia + eosinopenia + monocytosis</b></td></tr>\n          <tr><td><b>Eosinophilia</b></td><td><b>Parasites and allergy</b></td></tr>\n          <tr><td><b>Leukaemoid reaction</b></td><td>Very high TLC that mimics leukaemia but is <b>reactive</b> — e.g. pyometra, abscess</td></tr>\n        </table>"
  },
  {
   "id": "unit-3-b15",
   "n": 15,
   "page": 4,
   "tone": "t5",
   "title": "BLOOD SMEAR — what you must recognise",
   "stars": 2,
   "kinds": [
    "table"
   ],
   "html": "<table class=\"tc\">\n          <tr><th>Finding</th><th>Interpretation</th></tr>\n          <tr><td><b>Polychromasia, anisocytosis, reticulocytes, nucleated RBC</b></td><td><b>REGENERATIVE</b> response — active bone marrow</td></tr>\n          <tr><td><b>Howell–Jolly body</b></td><td>Small round <b>nuclear remnant</b>; regeneration, or after splenectomy</td></tr>\n          <tr><td><b>HEINZ BODY ★</b></td><td><b>Denatured haemoglobin</b> at the cell margin; <b>oxidative injury</b> — onion/<i>Brassica</i>, kale, phenothiazine, <b>copper toxicity</b>, paracetamol in cats. Stain with <b>new methylene blue</b>; almost invisible on Giemsa</td></tr>\n          <tr><td><b>Basophilic stippling</b></td><td><b>LEAD POISONING</b> (with nucleated RBCs and no anaemia) — also normal regeneration in ruminants</td></tr>\n          <tr><td><b>Rouleaux</b></td><td>Stacked coins — <b>normal in the horse</b>, and in hyperglobulinaemia</td></tr>\n          <tr><td><b>Schistocytes</b></td><td>Fragmented cells — <b>DIC</b>, haemangiosarcoma</td></tr>\n          <tr><td><b>Spherocytes</b></td><td>Small, dark, no central pallor — <b>immune-mediated haemolysis</b> (best seen in the dog)</td></tr>\n        </table>\n        <table class=\"tc\">\n          <tr><th>Blood parasite</th><th>Appearance</th></tr>\n          <tr><td><b><i>Babesia bigemina</i></b></td><td><b>Large PEAR-SHAPED pairs at an acute angle</b> inside the RBC</td></tr>\n          <tr><td><b><i>Theileria</i></b></td><td><b>Koch's blue bodies (schizonts) in lymphocytes</b> of the node; small rod/comma piroplasms in RBCs</td></tr>\n          <tr><td><b><i>Anaplasma marginale</i></b></td><td>Small dense dot at the <b>MARGIN</b> of the RBC, no cytoplasm</td></tr>\n          <tr><td><b><i>Trypanosoma evansi</i></b></td><td><b>Extracellular</b> motile flagellate <b>between</b> the cells (surra)</td></tr>\n        </table>"
  },
  {
   "id": "unit-3-b16",
   "n": 16,
   "page": 5,
   "tone": "t2",
   "title": "URINALYSIS",
   "stars": 2,
   "kinds": [
    "table",
    "trap"
   ],
   "html": "<b class=\"k\">PHYSICAL</b> — volume, colour, transparency, odour, <b>specific gravity</b> (refractometer).\n        <div class=\"trap\"><span class=\"lbl\">The one urine number to memorise ★</span> <b>ISOSTHENURIA = USG 1.008–1.012</b>, the same as plasma ultrafiltrate. Persistent isosthenuria in an azotaemic animal means the kidney <b>has lost its concentrating ability</b> — chronic renal failure. Carnivores normally concentrate well above this (dog often &gt;1.025, cat higher still).</div>\n        <b class=\"r\">CHEMICAL</b>\n        <table class=\"tc\">\n          <tr><th>Test</th><th>Meaning</th></tr>\n          <tr><td><b>pH</b></td><td><b>Herbivores ALKALINE</b> (≈7.5–8.5) · <b>carnivores ACIDIC</b> (≈5.5–7.0). Milk-fed calves are acidic. Alkaline urine favours <b>struvite</b> stones</td></tr>\n          <tr><td><b>Protein</b></td><td>Glomerular damage, inflammation. Interpret with the <b>urine protein : creatinine ratio</b>; dipstick gives <b>false positives in alkaline urine</b></td></tr>\n          <tr><td><b>Glucose</b></td><td>Appears only above the <b>renal threshold</b> — diabetes mellitus, stress hyperglycaemia (especially <b>cats</b>), or tubular damage</td></tr>\n          <tr><td><b>Ketones</b></td><td><b>Bovine ketosis, ovine pregnancy toxaemia</b>, diabetic ketoacidosis, starvation. Rothera's test</td></tr>\n          <tr><td><b>Bilirubin</b></td><td>Only the <b>conjugated (direct)</b> form appears; small amounts are <b>normal in concentrated dog urine</b>, never normal in the cat</td></tr>\n          <tr><td><b>Blood / Hb / Mb</b></td><td><b>Haematuria</b> — intact RBCs, sediment shows red cells, spin down and the supernatant clears. <b>Haemoglobinuria</b> — supernatant stays red. <b>Myoglobinuria</b> — plasma stays clear</td></tr>\n        </table>\n        <b class=\"g\">MICROSCOPIC (sediment)</b>\n        <table class=\"tc\">\n          <tr><th>Structure</th><th>Meaning</th></tr>\n          <tr><td><b>Casts ★</b></td><td>Formed in the <b>distal tubule and collecting duct</b> from <b>Tamm–Horsfall protein</b>; they prove the lesion is <b>renal</b>. <b>Hyaline</b> = protein only, mild · <b>granular</b> = degenerating cells, tubular injury · <b>cellular</b> (RBC / WBC / epithelial) · <b>waxy</b> = chronic, long-standing · <b>fatty</b> = diabetes, cat</td></tr>\n          <tr><td><b>Struvite crystal</b></td><td>\"<b>Coffin lid</b>\" prism — alkaline urine</td></tr>\n          <tr><td><b>Calcium oxalate</b></td><td><b>Dihydrate = \"envelope\"</b>; <b>monohydrate = \"dumb-bell/picket fence\"</b> — <b>ethylene glycol poisoning</b></td></tr>\n          <tr><td><b>Ammonium biurate</b></td><td>\"<b>Thorn apple</b>\" — liver failure, portosystemic shunt</td></tr>\n          <tr><td><b>Cystine</b></td><td>Flat <b>hexagonal</b> plates — always abnormal</td></tr>\n        </table>"
  },
  {
   "id": "unit-3-b17",
   "n": 17,
   "page": 5,
   "tone": "t3",
   "title": "BIOPSY &amp; CYTOLOGY",
   "stars": 0,
   "kinds": [
    "trap"
   ],
   "html": "<ul class=\"sm\">\n          <li><b>Biopsy types:</b> <b>excisional</b> (whole lesion out — diagnosis + treatment) · <b>incisional/wedge</b> · <b>needle-core (Tru-cut)</b> · <b>punch</b> · endoscopic · bone-marrow aspirate</li>\n          <li><b>Cytology techniques:</b> <b>fine-needle aspiration</b> · impression (touch) smear · scraping · swab · <b>EXFOLIATIVE cytology</b> of fluids — pleural, peritoneal, CSF, tracheal wash, vaginal, urine</li>\n          <li><b>Fixation:</b> <b>air-dry</b> for Romanowsky stains; <b>wet-fix immediately in 95% ethanol</b> for <b>Papanicolaou</b> and H&amp;E</li>\n          <li><b>Cytological criteria of malignancy</b> — <b>anisocytosis and anisokaryosis</b>, high N:C ratio, multiple prominent angular nucleoli, coarse chromatin, abnormal mitoses, multinucleation, cannibalism</li>\n        </ul>\n        <div class=\"trap\"><span class=\"lbl\">Cytology vs histopathology</span> Cytology is <b>rapid, cheap, minimally invasive</b>, but it <b>cannot show tissue ARCHITECTURE and therefore cannot prove INVASION</b>. Histopathology remains the <b>gold standard</b> for the final diagnosis.</div>"
  },
  {
   "id": "unit-3-b18",
   "n": 18,
   "page": 5,
   "tone": "t6",
   "title": "NECROPSY — objectives &amp; procedure",
   "stars": 2,
   "kinds": [
    "table",
    "trap"
   ],
   "html": "<b class=\"k\">Objectives</b> — establish the <b>cause of death</b> · confirm or correct the clinical diagnosis · detect disease in the rest of the herd (surveillance) · <b>insurance and legal</b> requirements · check response to treatment · teaching and research.<br>\n        <b class=\"r\">Pre-necropsy rules</b> — obtain full <b>history</b> and <b>written owner consent</b> (in a veterolegal case, a police or magistrate <b>requisition</b> replaces it) · perform <b>as soon as possible after death</b>, in <b>daylight</b> · wear protective clothing, remember <b>zoonoses</b> (anthrax, rabies, brucellosis, TB, glanders, leptospirosis) · arrange disinfectant and safe carcass disposal.\n        <div class=\"trap\"><span class=\"lbl\">THE ANTHRAX RULE ★★★</span> <b>Never open a ruminant found suddenly dead with unclotted tarry blood at the orifices.</b> Take a <b>peripheral blood smear</b> first and stain with <b>polychrome methylene blue (McFadyean's reaction)</b>. Only if anthrax is excluded may the carcass be opened. Dispose by <b>deep burial with quicklime or incineration</b>.</div>\n        <table class=\"tg\">\n          <tr><th>Item</th><th>Standard practice</th></tr>\n          <tr><td><b>Position</b></td><td><b>Ruminants and horses — LEFT lateral recumbency</b> (left side down) so the rumen lies down and the right-side viscera are exposed. <b>Dog, cat, pig, poultry — DORSAL recumbency</b></td></tr>\n          <tr><td><b>Techniques</b></td><td><b>Virchow</b> — organs removed <b>one by one</b> · <b>Rokitansky</b> — dissected <b>in situ</b> · <b>Ghon</b> — removed <b>en bloc</b> by systems · <b>Letulle</b> — all viscera removed <b>en masse</b></td></tr>\n          <tr><td><b>Wild animals</b></td><td>Chemical immobilisation records, photograph everything, check for poaching wounds, collect samples for toxicology, follow forest-department protocol</td></tr>\n        </table>"
  },
  {
   "id": "unit-3-b19",
   "n": 19,
   "page": 5,
   "tone": "t5",
   "title": "POST-MORTEM CHANGES",
   "stars": 3,
   "kinds": [
    "table"
   ],
   "html": "<table class=\"tc\">\n          <tr><th>Change</th><th>What it is</th></tr>\n          <tr><td><b>Algor mortis</b></td><td>Cooling of the body — slower in a fat animal and in Indian summer heat</td></tr>\n          <tr><td><b>RIGOR MORTIS</b></td><td><b>ATP depletion</b> locks actin to myosin. Begins in ~<b>1–6 h</b>, complete by about <b>12 h</b>, passes off in <b>24–48 h</b> as autolysis proceeds; <b>faster onset and faster passing in hot weather</b>. Begins in the <b>heart and small muscles of the head</b>. <b>ABSENT or very poor after violent exertion, in anthrax and in septicaemia</b></td></tr>\n          <tr><td><b>Livor mortis / hypostatic congestion</b></td><td>Blood settles in the <b>down side</b>; uniform, gravity-dependent</td></tr>\n          <tr><td><b>Post-mortem clotting</b></td><td>\"<b>Chicken fat</b>\" and \"<b>currant jelly</b>\" clots — <b>shiny, rubbery, unattached, a cast of the vessel</b></td></tr>\n          <tr><td><b>Haemoglobin imbibition</b></td><td>Red staining of endocardium and intima</td></tr>\n          <tr><td><b>Bile imbibition</b></td><td>Green-yellow staining of tissue around the gall bladder</td></tr>\n          <tr><td><b>Pseudomelanosis</b></td><td><b>Blue-green to black</b> discolouration where gut bacteria make <b>H₂S</b> which combines with iron — abdominal wall and intestines</td></tr>\n          <tr><td><b>Post-mortem emphysema &amp; bloating</b></td><td>Gas from putrefactive bacteria; may rupture the stomach or diaphragm</td></tr>\n          <tr><td><b>Autolysis</b></td><td>Self-digestion — earliest in <b>gut mucosa, pancreas, adrenal medulla, gall bladder, brain</b></td></tr>\n          <tr><td><b>Corneal clouding, lens opacity</b></td><td>Useful rough guide to the time since death</td></tr>\n        </table>"
  },
  {
   "id": "unit-3-b20",
   "n": 20,
   "page": 5,
   "tone": "t4",
   "title": "SPECIMEN COLLECTION &amp; DISPATCH",
   "stars": 3,
   "kinds": [
    "table"
   ],
   "html": "<table class=\"ta\">\n          <tr><th>Purpose</th><th>Preservative &amp; rule</th></tr>\n          <tr><td><b>Histopathology</b></td><td><b>10% NEUTRAL BUFFERED FORMALIN</b>, fixative : tissue volume <b>10 : 1</b>, tissue slice <b>not thicker than about 0.5–1 cm</b>, include the <b>junction of normal and abnormal</b> tissue</td></tr>\n          <tr><td><b>Brain (rabies)</b></td><td><b>50% buffered glycerol saline</b> for transport, or chilled unpreserved for <b>FAT</b> (the standard test) and mouse inoculation; take <b>hippocampus (Ammon's horn), cerebellum and brain stem</b>. Half the brain in formalin for histology</td></tr>\n          <tr><td><b>Eye</b></td><td><b>Bouin's or Davidson's</b> fluid — plain formalin causes retinal detachment artefact</td></tr>\n          <tr><td><b>Bacteriology</b></td><td><b>Fresh, sterile, NO preservative</b>, chilled on ice, sent within 24 h; sear the surface before sampling</td></tr>\n          <tr><td><b>Virology</b></td><td>Fresh chilled or <b>50% glycerol saline</b>, transported on ice / dry ice</td></tr>\n          <tr><td><b>TOXICOLOGY ★</b></td><td><b>NO chemical preservative</b> — send <b>fresh or frozen</b>; if unavoidable, use <b>saturated salt solution</b> and send a control sample of the salt. Send <b>liver, kidney, stomach content, ingesta, suspect feed/water</b>, a generous quantity (about 100–500 g)</td></tr>\n          <tr><td><b>Parasitology</b></td><td>Helminths in <b>70% alcohol</b> or 10% formalin; faeces fresh and chilled</td></tr>\n          <tr><td><b>Blood parasites</b></td><td><b>Thin peripheral blood smear</b>, air-dried, from the <b>ear-tip capillary</b></td></tr>\n        </table>\n        <b>Packing:</b> leak-proof primary container → absorbent material → sturdy secondary container → outer box with ice packs; <b>label each container</b> and enclose a <b>forwarding letter with full history, treatment given, and the tests requested</b>."
  },
  {
   "id": "unit-3-b21",
   "n": 21,
   "page": 5,
   "tone": "t3",
   "title": "PM REPORT · VETEROLEGAL NECROPSY &amp; WOUNDS",
   "stars": 2,
   "kinds": [
    "table",
    "trap",
    "fact"
   ],
   "html": "<b class=\"k\">The post-mortem report — three parts</b>\n        <ul class=\"num sm\">\n          <li><b>Preliminary</b> — identification of the animal (species, breed, age, sex, marks, tag), owner, history, date, time and place of death and of the necropsy, condition of the carcass</li>\n          <li><b>Gross findings</b> — organ by organ, <b>DESCRIBE only</b>; state size, shape, colour, consistency, distribution. <b>Do not write a diagnosis in this section</b></li>\n          <li><b>Conclusion</b> — <b>morphological diagnosis</b>, <b>aetiological diagnosis</b>, <b>cause of death</b>, samples sent, remarks, signature with registration number</li>\n        </ul>\n        <div class=\"trap\"><span class=\"lbl\">Veterolegal necropsy — the rules</span> Carried out only on a <b>written requisition</b> from the police or a magistrate · establish the <b>identity</b> of the animal beyond doubt · <b>photograph</b> everything · perform in the presence of the investigating officer · samples are <b>sealed with the officer's seal</b> and the <b>chain of custody</b> is documented · write <b>in ink, no overwriting or erasure</b>, correct by scoring through and initialling · the report goes to the <b>requisitioning authority, not the owner</b> · retain a copy.</div>\n        <table class=\"tp\">\n          <tr><th>Wound</th><th>Distinguishing feature</th></tr>\n          <tr><td><b>Incised</b></td><td>Sharp edge; <b>LENGTH greater than DEPTH</b>; clean margins, bleeds freely</td></tr>\n          <tr><td><b>Stab / punctured</b></td><td><b>DEPTH greater than LENGTH</b>; small external opening</td></tr>\n          <tr><td><b>Lacerated</b></td><td>Blunt force; <b>irregular torn ragged margins</b>, tissue bridges, hair driven in</td></tr>\n          <tr><td><b>Contused (bruise)</b></td><td>Blunt force with <b>skin intact</b>; colour changes with age of the bruise</td></tr>\n          <tr><td><b>Abrasion</b></td><td>Superficial, loss of epidermis only</td></tr>\n          <tr><td><b>Firearm</b></td><td><b>Entry</b> — small, inverted, with a collar of abrasion and possibly scorching/tattooing. <b>Exit</b> — larger, everted, no scorching</td></tr>\n        </table>\n        <div class=\"fact\"><span class=\"lbl\">ANTEMORTEM vs POSTMORTEM WOUND ★★★</span> An <b>antemortem</b> wound shows a <b>VITAL REACTION</b> — free arterial <b>haemorrhage with clotting</b>, infiltration of blood into the surrounding tissue, <b>gaping and retraction of edges</b>, <b>inflammation</b>, and later signs of <b>healing</b>. A <b>postmortem</b> wound shows none of these — the edges do not gape, blood merely oozes and does not clot into the tissue.</div>"
  },
  {
   "id": "unit-3-b22",
   "n": 22,
   "page": 5,
   "tone": "t4",
   "title": "BLANK-FILL DRILL — Unit 3",
   "stars": 0,
   "kinds": [
    "drill"
   ],
   "html": "",
   "drill": true
  }
 ],
 "drill": [
  {
   "id": "unit-3-d001",
   "html": "The two components of a tumour are <u>parenchyma</u> and <u>stroma</u>"
  },
  {
   "id": "unit-3-d002",
   "html": "Abundant fibrous stroma makes a tumour <u>scirrhous</u> (desmoplastic)"
  },
  {
   "id": "unit-3-d003",
   "html": "Malignant tumour of epithelium is a <u>carcinoma</u>; of mesenchyme a <u>sarcoma</u>"
  },
  {
   "id": "unit-3-d004",
   "html": "Lymphoma, melanoma, seminoma and mesothelioma are <u>malignant</u> despite the \"-oma\""
  },
  {
   "id": "unit-3-d005",
   "html": "A teratoma contains more than one <u>germ layer</u>"
  },
  {
   "id": "unit-3-d006",
   "html": "The single criterion that proves malignancy is <u>metastasis</u>"
  },
  {
   "id": "unit-3-d007",
   "html": "Carcinomas spread mainly by <u>lymphatics</u>; sarcomas by <u>blood</u>"
  },
  {
   "id": "unit-3-d008",
   "html": "TVT spreads by <u>transplantation</u> of living tumour cells and has about <u>59</u> chromosomes"
  },
  {
   "id": "unit-3-d009",
   "html": "Loss of <u>E-cadherin</u> allows tumour cells to detach"
  },
  {
   "id": "unit-3-d010",
   "html": "A tumour cannot exceed <u>1–2 mm</u> without <u>angiogenesis</u>"
  },
  {
   "id": "unit-3-d011",
   "html": "p53 is called the <u>guardian of the genome</u>"
  },
  {
   "id": "unit-3-d012",
   "html": "Aflatoxin B₁ causes <u>hepatocellular carcinoma</u>"
  },
  {
   "id": "unit-3-d013",
   "html": "Marek's disease virus causes a <u>T-cell lymphoma</u> of chickens"
  },
  {
   "id": "unit-3-d014",
   "html": "The first tumour virus discovered was the <u>Rous sarcoma virus</u>"
  },
  {
   "id": "unit-3-d015",
   "html": "Cancer eye of Hereford cattle is a <u>squamous cell carcinoma</u> caused by <u>ultraviolet light</u>"
  },
  {
   "id": "unit-3-d016",
   "html": "Keratin (epithelial) pearls are seen in <u>squamous cell carcinoma</u>"
  },
  {
   "id": "unit-3-d017",
   "html": "Osteosarcoma occurs <u>away from the elbow and toward the knee</u>"
  },
  {
   "id": "unit-3-d018",
   "html": "Splenic haemangiosarcoma causes sudden <u>haemoabdomen</u>"
  },
  {
   "id": "unit-3-d019",
   "html": "Equine sarcoid is caused by <u>bovine papillomavirus</u> and does <u>not</u> metastasise"
  },
  {
   "id": "unit-3-d020",
   "html": "The five round cell tumours are lymphoma, <u>mast cell tumour</u>, histiocytoma, plasmacytoma and <u>TVT</u>"
  },
  {
   "id": "unit-3-d021",
   "html": "Sertoli cell tumour causes <u>feminisation</u> and bone-marrow <u>aplasia</u>"
  },
  {
   "id": "unit-3-d022",
   "html": "Hypercalcaemia of malignancy in dogs is classic of <u>lymphoma</u> and <u>anal sac adenocarcinoma</u>"
  },
  {
   "id": "unit-3-d023",
   "html": "Grading is <u>microscopic</u>; staging uses the <u>TNM</u> system"
  },
  {
   "id": "unit-3-d024",
   "html": "EDTA works by <u>chelating calcium</u> and is the anticoagulant of choice for <u>haematology</u>"
  },
  {
   "id": "unit-3-d025",
   "html": "Heparin acts through <u>antithrombin III</u> and is best for <u>plasma biochemistry</u>"
  },
  {
   "id": "unit-3-d026",
   "html": "Citrate is used at <u>1:9</u> for coagulation tests and <u>1:4</u> for ESR"
  },
  {
   "id": "unit-3-d027",
   "html": "Sodium fluoride is used for <u>glucose</u> estimation because it blocks <u>glycolysis</u>"
  },
  {
   "id": "unit-3-d028",
   "html": "The reference method for haemoglobin is <u>cyanmethaemoglobin</u>, read at <u>540</u> nm"
  },
  {
   "id": "unit-3-d029",
   "html": "WBC diluting fluid is <u>Turk's</u>; RBC diluting fluid is <u>Hayem's</u>"
  },
  {
   "id": "unit-3-d030",
   "html": "MCHC = Hb × 100 ÷ <u>PCV</u> — the only index that does not need the <u>red cell count</u>"
  },
  {
   "id": "unit-3-d031",
   "html": "ESR is fastest in the <u>horse</u> and slowest in <u>cattle</u>"
  },
  {
   "id": "unit-3-d032",
   "html": "Cattle and sheep normally have a predominance of <u>lymphocytes</u>"
  },
  {
   "id": "unit-3-d033",
   "html": "A degenerative left shift means <u>immature exceed mature</u> neutrophils and carries a <u>poor</u> prognosis"
  },
  {
   "id": "unit-3-d034",
   "html": "Heinz bodies indicate <u>oxidative</u> injury and are stained by <u>new methylene blue</u>"
  },
  {
   "id": "unit-3-d035",
   "html": "Basophilic stippling with nucleated RBCs suggests <u>lead</u> poisoning"
  },
  {
   "id": "unit-3-d036",
   "html": "Anaplasma appears at the <u>margin</u> of the red cell; Trypanosoma lies <u>outside</u> the cells"
  },
  {
   "id": "unit-3-d037",
   "html": "Koch's blue bodies are the schizonts of <u>Theileria</u> in <u>lymphocytes</u>"
  },
  {
   "id": "unit-3-d038",
   "html": "Isosthenuria is a urine specific gravity of <u>1.008–1.012</u>"
  },
  {
   "id": "unit-3-d039",
   "html": "Herbivore urine is normally <u>alkaline</u>; carnivore urine <u>acidic</u>"
  },
  {
   "id": "unit-3-d040",
   "html": "Urinary casts form in the <u>distal tubule and collecting duct</u> from <u>Tamm–Horsfall</u> protein"
  },
  {
   "id": "unit-3-d041",
   "html": "Coffin-lid crystals are <u>struvite</u>; envelope crystals are <u>calcium oxalate</u>"
  },
  {
   "id": "unit-3-d042",
   "html": "Ruminants are placed in <u>left</u> lateral recumbency for necropsy"
  },
  {
   "id": "unit-3-d043",
   "html": "Rigor mortis is due to depletion of <u>ATP</u> and is absent in <u>anthrax</u>"
  },
  {
   "id": "unit-3-d044",
   "html": "Pseudomelanosis is caused by <u>hydrogen sulphide</u> combining with iron"
  },
  {
   "id": "unit-3-d045",
   "html": "Toxicology samples must be sent with <u>no chemical preservative</u>"
  },
  {
   "id": "unit-3-d046",
   "html": "An antemortem wound is proved by the presence of a <u>vital reaction</u>"
  },
  {
   "id": "unit-3-d047",
   "html": "In an incised wound the <u>length</u> exceeds the depth; in a stab wound the <u>depth</u> exceeds the length"
  }
 ]
};

revisionData["unit-4"] = {
 "id": "unit-4",
 "no": 4,
 "title": "Pathology of Infectious and Non-infectious Diseases",
 "paper": "paper-2",
 "icon": "virus",
 "pages": 6,
 "pageTitles": [
  "Viral Diseases I — Ruminants",
  "Viral Diseases II — Equine · Swine · Canine · Feline · Ovine · Pox · Prions",
  "Bacterial Diseases",
  "Bacterial II · Mycoplasma · Chlamydia · Rickettsia",
  "Mycoses · Mycotoxicoses · Parasitic Diseases",
  "Nutritional · Metabolic · Toxic · Plant Poisoning · Drill"
 ],
 "sheet": "revision/unit-4.html",
 "boxes": [
  {
   "id": "unit-4-b01",
   "n": 1,
   "page": 1,
   "tone": "t1",
   "title": "INCLUSION BODIES — the master table",
   "stars": 3,
   "kinds": [
    "table",
    "mem"
   ],
   "html": "<table>\n          <tr><th>Named body</th><th>Site</th><th>Disease</th></tr>\n          <tr><td><b>Negri body</b></td><td><b>Intra-CYTOPLASMIC</b></td><td><b>RABIES</b> — hippocampal pyramidal cells &amp; cerebellar Purkinje cells</td></tr>\n          <tr><td><b>Cowdry type A</b></td><td><b>Intra-NUCLEAR</b></td><td><b>Herpesviruses</b> (IBR, EHV-1) and <b>adenovirus (ICH)</b></td></tr>\n          <tr><td><b>Bollinger body</b></td><td>Intra-cytoplasmic</td><td><b>FOWL POX</b> (contains Borrel bodies = elementary bodies)</td></tr>\n          <tr><td><b>Guarnieri body</b></td><td>Intra-cytoplasmic</td><td>Vaccinia / cowpox / buffalopox</td></tr>\n          <tr><td><b>Borrel body</b></td><td>Intra-cytoplasmic</td><td>Elementary bodies of pox viruses</td></tr>\n          <tr><td><b>CDV inclusions</b></td><td><b>BOTH nuclear AND cytoplasmic</b></td><td><b>Canine distemper</b> — epithelium, astrocytes, neurons, bladder</td></tr>\n          <tr><td><b>Marek's</b> — no inclusion</td><td>—</td><td>Lymphoproliferative, not inclusion-forming</td></tr>\n        </table>\n        <div class=\"mem\"><span class=\"lbl\">Rule of thumb</span> <b>DNA viruses replicate in the nucleus → INTRANUCLEAR</b> inclusions (herpes, adeno, parvo). <b>Exception: POXVIRUS is a DNA virus that replicates in the CYTOPLASM → intracytoplasmic.</b> <b>RNA viruses → intracytoplasmic</b> (rabies, distemper) — but paramyxoviruses (CDV, rinderpest) can give <b>both</b>.</div>"
  },
  {
   "id": "unit-4-b02",
   "n": 2,
   "page": 1,
   "tone": "t5",
   "title": "FOOT AND MOUTH DISEASE",
   "stars": 3,
   "kinds": [
    "trap"
   ],
   "html": "<ul class=\"sm\">\n          <li><b>Aphthovirus</b>, family <b>Picornaviridae</b>; ssRNA. <b>7 serotypes — O, A, C, SAT-1, SAT-2, SAT-3, Asia-1</b>. In India the circulating types are <b>O, A and Asia-1</b>. <b>No cross-protection between serotypes</b> — this is why vaccination fails when the type changes</li>\n          <li>Cloven-footed animals. <b>Very high morbidity (up to 100%), low mortality in adults</b> — but <b>high mortality in young</b> stock</li>\n          <li><b>Gross:</b> <b>vesicles (aphthae)</b> → ruptured, leaving red raw erosions, on the <b>tongue, dental pad, gums, muzzle, interdigital space, coronary band and teats</b>; profuse ropy salivation, lip-smacking, lameness</li>\n          <li><b>\"TIGER HEART\" ★</b> in calves — pale yellow-grey streaks of myocardial degeneration and necrosis alternating with red muscle; this is what kills the young</li>\n          <li><b>Micro:</b> <b>intra-epithelial vesicle</b> from <b>hydropic and ballooning degeneration of the stratum spinosum</b></li>\n          <li><b>NOTIFIABLE</b>. Sample: <b>vesicular fluid and epithelial flap in 50% glycerol-phosphate buffer, pH 7.2–7.6</b>, sent chilled</li>\n        </ul>\n        <div class=\"trap\"><span class=\"lbl\">The 4 vesicular diseases look IDENTICAL ★★</span>\n          <b>FMD</b> — cattle, sheep, goat, pig; <b>NOT horses</b>. <b>Vesicular stomatitis</b> — the only one that <b>DOES affect HORSES</b> (and is zoonotic). <b>Vesicular exanthema</b> and <b>swine vesicular disease</b> — <b>pigs only</b>. They can be separated only in the laboratory. <b>The horse is the field clue.</b></div>"
  },
  {
   "id": "unit-4-b03",
   "n": 3,
   "page": 1,
   "tone": "t5",
   "title": "Rinderpest · PPR · MCF",
   "stars": 0,
   "kinds": [
    "table"
   ],
   "html": "<table class=\"tc\">\n          <tr><th>Disease</th><th>Agent</th><th>Signature lesion</th></tr>\n          <tr><td><b>RINDERPEST</b><br>(cattle plague)</td><td><b>Morbillivirus</b>, Paramyxoviridae</td><td><b>\"ZEBRA STRIPING\"</b> — linear congestion and haemorrhage on the longitudinal folds of the <b>colon and rectum</b>. Necrotic erosive stomatitis, \"shooting\" diarrhoea, <b>Peyer's patch necrosis</b>, syncytial giant cells with <b>both nuclear and cytoplasmic inclusions</b>. <b>Globally eradicated (declared 2011); India declared free in 2006</b></td></tr>\n          <tr><td><b>PPR</b><br>(goat plague)</td><td><b>Morbillivirus</b></td><td><b>Stomatitis–pneumoenteritis</b> of <b>goats more than sheep</b>. Erosive stomatitis, mucopurulent oculo-nasal discharge, <b>zebra striping of colon</b>, <b>bronchointerstitial pneumonia</b>. Looks like rinderpest but in small ruminants</td></tr>\n          <tr><td><b>MALIGNANT CATARRHAL FEVER</b></td><td><b>Ovine herpesvirus-2</b> (sheep-associated, the Indian form) or <b>alcelaphine herpesvirus-1</b> (wildebeest-associated)</td><td><b>BILATERAL CORNEAL OPACITY spreading from the LIMBUS INWARD</b> — the classic \"head and eye\" form. Generalised <b>lymphadenopathy</b>, erosive stomatitis and rhinitis. <b>THE microscopic key: widespread lymphocytic NECROTISING VASCULITIS/ARTERITIS in every organ.</b> Sporadic, <b>almost always fatal</b>, cattle are dead-end hosts</td></tr>\n        </table>"
  },
  {
   "id": "unit-4-b04",
   "n": 4,
   "page": 1,
   "tone": "t4",
   "title": "Bluetongue · IBR · BVD-MD",
   "stars": 0,
   "kinds": [
    "table"
   ],
   "html": "<table class=\"ta\">\n          <tr><th>Disease</th><th>Agent &amp; key facts</th></tr>\n          <tr><td><b>BLUETONGUE</b></td><td><b>Orbivirus, Reoviridae</b>; transmitted by <b><i>Culicoides</i></b> midges, therefore <b>seasonal (rainy season) and non-contagious</b>. <b>SHEEP</b> are worst affected. Facial and submandibular <b>oedema</b>, <b>cyanotic swollen protruding tongue</b>, erosions of the buccal mucosa, <b>coronitis with a red-purple band at the coronary band</b> and later hoof separation, torticollis. <b>★ Haemorrhage at the BASE OF THE PULMONARY ARTERY is the characteristic post-mortem finding.</b> Skeletal muscle necrosis</td></tr>\n          <tr><td><b>IBR / IPV</b></td><td><b>Bovine herpesvirus-1</b>. <b>Respiratory form (\"red nose\")</b> — necrotic grey-white plaques on the nasal mucosa, laryngotracheitis with a fibrinonecrotic cast. <b>Genital form</b> — infectious pustular vulvovaginitis / balanoposthitis. <b>Abortion</b> — usually in the last trimester, <b>autolysed fetus with pinpoint necrotic foci in the liver</b>. Also conjunctivitis and calf encephalitis. <b>Cowdry type A intranuclear inclusions</b> early. Establishes <b>LATENCY in the trigeminal ganglion</b> and recrudesces with stress</td></tr>\n          <tr><td><b>BVD / MUCOSAL DISEASE ★</b></td><td><b>Pestivirus, Flaviviridae</b>. Two biotypes: <b>non-cytopathic (ncp)</b> and <b>cytopathic (cp)</b>.<br><b>The PI story — learn this:</b> infection of the dam with the <b>ncp</b> biotype at about <b>40–120 days of gestation</b>, before the fetal immune system matures, produces a calf that is <b>IMMUNOTOLERANT and PERSISTENTLY INFECTED (PI)</b>. That PI animal sheds virus for life and develops <b>fatal MUCOSAL DISEASE if it is later superinfected by the CYTOPATHIC biotype</b>.<br><b>Lesions:</b> <b>linear erosions/ulcers of the oesophagus</b> (highly suggestive), erosions from mouth to colon, <b>Peyer's patch necrosis</b>, interdigital erosions, lymphoid depletion. Infection at about <b>100–170 days</b> instead causes <b>CEREBELLAR HYPOPLASIA</b> and ocular defects</td></tr>\n        </table>"
  },
  {
   "id": "unit-4-b05",
   "n": 5,
   "page": 2,
   "tone": "t3",
   "title": "EQUINE viral diseases",
   "stars": 0,
   "kinds": [
    "table"
   ],
   "html": "<table class=\"tp\">\n          <tr><th>Disease</th><th>Agent &amp; lesion</th></tr>\n          <tr><td><b>Equine infectious anaemia</b> (\"swamp fever\")</td><td><b>Lentivirus, Retroviridae</b>; biting flies and contaminated needles. <b>Recurrent fever, progressive anaemia, ventral oedema, emaciation; LIFELONG CARRIER.</b> Pathogenesis is <b>immune-mediated</b>: repeated antigenic drift → immune complexes → <b>Type III glomerulonephritis</b> and Coombs-positive haemolysis. Micro: <b>SIDEROLEUKOCYTES</b> (haemosiderin-laden macrophages) in liver, spleen and bone marrow; lymphoid proliferation around vessels. <b>Diagnosis: Coggins test (AGID)</b> and cELISA</td></tr>\n          <tr><td><b>Equine influenza</b></td><td><b>Influenza A</b>, subtypes <b>H7N7 and H3N8</b>. Sudden <b>dry, harsh, hacking cough</b>, high fever, rapid spread; damage to the tracheal cilia predisposes to secondary bacterial pneumonia</td></tr>\n          <tr><td><b>Equine viral arteritis</b></td><td><b>Arterivirus</b>. Panvascular disease — <b>necrotising arteritis of small muscular arteries</b> → oedema of limbs, ventral abdomen and periorbital tissue (\"pink eye\"), <b>abortion</b> at any stage. <b>Stallions become long-term carriers and shed in semen</b></td></tr>\n          <tr><td><b>Equine rhinopneumonitis</b></td><td><b>EHV-1 and EHV-4</b>. <b>EHV-4</b> → mainly upper respiratory disease in foals. <b>EHV-1</b> → <b>abortion storms in the last trimester</b>; the aborted fetus is <b>FRESH (not autolysed)</b>, icteric, with pleural fluid and <b>pinpoint white necrotic foci in the liver with Cowdry type A intranuclear inclusions</b>; also <b>myeloencephalopathy</b> from vasculitis and thrombosis</td></tr>\n          <tr><td><b>Equine encephalomyelitis</b></td><td><b>Alphavirus (Togaviridae)</b> — <b>EEE, WEE, VEE</b>; mosquito-borne, birds are the reservoir, <b>zoonotic</b>. <b>Non-suppurative polioencephalomyelitis</b> — neuronal necrosis, neuronophagia, perivascular cuffing, gliosis, chiefly in <b>grey matter</b></td></tr>\n        </table>"
  },
  {
   "id": "unit-4-b06",
   "n": 6,
   "page": 2,
   "tone": "t5",
   "title": "SWINE viral diseases",
   "stars": 0,
   "kinds": [
    "trap"
   ],
   "html": "<div class=\"trap\"><span class=\"lbl\">CLASSICAL SWINE FEVER — the four-lesion set ★★★</span>\n          <b>Pestivirus</b> (same genus as BVD). Highly contagious, high mortality.<br>\n          <b>① \"BUTTON ULCERS\" (botryomycotic buttons)</b> — raised, laminated, concentric necrotic ulcers of the <b>caecum, colon and ileocaecal valve</b><br>\n          <b>② MARGINAL SPLENIC INFARCTS</b> — dark wedge-shaped infarcts on the splenic border (near pathognomonic)<br>\n          <b>③ \"TURKEY-EGG KIDNEY\"</b> — petechiae scattered over a pale renal cortex; petechiae also in bladder, larynx and skin<br>\n          <b>④ HAEMORRHAGIC (\"MARBLED\") LYMPH NODES</b> — haemorrhage at the periphery of the node<br>\n          Plus <b>non-suppurative encephalitis with perivascular cuffing</b>. Congenital infection → <b>cerebellar hypoplasia and congenital tremor</b></div>\n        <b>Swine influenza</b> — Influenza A, usually <b>H1N1</b>; explosive outbreak, high morbidity, low mortality; <b>cranioventral purple-red consolidation</b>, necrotising bronchiolitis; <b>zoonotic potential</b>."
  },
  {
   "id": "unit-4-b07",
   "n": 7,
   "page": 2,
   "tone": "t2",
   "title": "CANINE &amp; FELINE viral diseases",
   "stars": 2,
   "kinds": [
    "table"
   ],
   "html": "<table class=\"tt\">\n          <tr><th>Disease</th><th>Agent &amp; key lesion</th></tr>\n          <tr><td><b>RABIES</b></td><td><b>Lyssavirus, Rhabdoviridae</b>, <b>bullet-shaped</b>. Virus in <b>saliva</b> → <b>centripetal</b> spread along <b>peripheral nerves</b> to the CNS, then <b>centrifugal</b> spread to the <b>salivary glands</b> (that is why the bite is infective). Forms: <b>furious</b>, <b>dumb/paralytic</b>. <b>Gross lesions are minimal or absent</b> — foreign bodies in a dog's stomach are suggestive. <b>Micro: non-suppurative polioencephalitis + NEGRI BODIES</b> (intracytoplasmic, in <b>hippocampal pyramidal neurons</b> of carnivores and <b>cerebellar Purkinje cells</b> of herbivores); <b>Babes' nodules</b> = glial nodules.<br><b>Diagnosis: FAT on brain impression smear is the GOLD STANDARD</b>; also <b>Seller's stain</b> for Negri bodies, mouse inoculation, RT-PCR. Zoonosis — 100% fatal once signs appear</td></tr>\n          <tr><td><b>CANINE DISTEMPER</b></td><td><b>Morbillivirus</b>. Pantropic — respiratory, GI, skin, CNS. <b>Biphasic fever</b>, oculo-nasal discharge, <b>bronchointerstitial pneumonia</b>, <b>\"HARD PAD\" (nasodigital hyperkeratosis)</b>, <b>enamel hypoplasia (\"distemper teeth\")</b> if infected before teeth erupt, <b>demyelinating leukoencephalitis</b>, \"chewing-gum\" fits. <b>Inclusions are BOTH intranuclear and intracytoplasmic</b>, best seen in <b>bladder, gastric and bronchial epithelium and astrocytes</b>. Marked <b>lymphoid depletion → secondary infection</b></td></tr>\n          <tr><td><b>INFECTIOUS CANINE HEPATITIS</b></td><td><b>Canine adenovirus-1</b>. <b>Centrilobular hepatic necrosis</b> with <b>Cowdry type A intranuclear inclusions</b> in hepatocytes and <b>endothelium</b>; <b>OEDEMA OF THE GALL-BLADDER WALL is characteristic</b>; fibrin strands on the liver capsule; petechiae; <b>\"BLUE EYE\"</b> = corneal oedema and anterior uveitis, a <b>Type III immune-complex</b> reaction during recovery or after live vaccine</td></tr>\n          <tr><td><b>CANINE PARVOVIRUS (CPV-2)</b></td><td>Attacks <b>rapidly dividing cells</b>. <b>Intestinal CRYPT NECROSIS</b> (not the villus tip) → villus collapse, <b>haemorrhagic enteritis</b> with foul bloody diarrhoea and vomiting; <b>lymphoid depletion and marked leucopenia</b>; <b>myocarditis</b> in pups infected under about 8 weeks. Intranuclear inclusions</td></tr>\n          <tr><td><b>FELINE PANLEUKOPENIA</b></td><td>Feline parvovirus. <b>Severe panleukopenia</b>, crypt necrosis and enteritis, and <b>CEREBELLAR HYPOPLASIA</b> in kittens infected in utero or just after birth</td></tr>\n        </table>"
  },
  {
   "id": "unit-4-b08",
   "n": 8,
   "page": 2,
   "tone": "t6",
   "title": "Ovine retroviral lung disease · Rota &amp; Corona · PRIONS",
   "stars": 0,
   "kinds": [
    "table"
   ],
   "html": "<table class=\"tg\">\n          <tr><th>Disease</th><th>Key point</th></tr>\n          <tr><td><b>MAEDI (–visna)</b></td><td><b>Ovine lentivirus</b>. <b>Maedi</b> = chronic <b>progressive INTERSTITIAL pneumonia</b> — lungs heavy, grey-blue, <b>rubbery, DO NOT COLLAPSE</b>, with rib impressions and lymphoid follicle formation. <b>Visna</b> = <b>demyelinating meningoencephalitis</b>. Long incubation, <b>no fever, no cure</b></td></tr>\n          <tr><td><b>JAAGSIEKTE ★</b></td><td><b>Ovine pulmonary adenocarcinoma</b>, a <b>betaretrovirus</b> — a genuinely <b>CONTAGIOUS LUNG TUMOUR</b>. Firm grey-white nodules, later confluent; abundant fluid. <b>\"WHEELBARROW TEST\"</b> — lifting the hindquarters makes <b>copious frothy fluid pour from the nostrils</b></td></tr>\n          <tr><td><b>Rotavirus</b></td><td>Neonatal diarrhoea. Infects <b>MATURE enterocytes at the VILLUS TIP</b> → <b>villous atrophy and blunting</b> → <b>malabsorptive, osmotic diarrhoea</b>. Crypts are spared, so recovery is possible</td></tr>\n          <tr><td><b>Coronavirus</b></td><td><b>TGE of pigs</b> — very severe villous atrophy, near-100% mortality under 2 weeks. <b>Bovine coronavirus</b> — calf diarrhoea and <b>winter dysentery</b> in adults. Also feline coronavirus → <b>FIP</b> with pyogranulomatous vasculitis</td></tr>\n          <tr><td><b>PRION DISEASES ★</b></td><td>The agent is <b>PrP<sup>Sc</sup> — an abnormally folded PROTEIN with NO nucleic acid</b>. Therefore: <b>no inflammation, no immune response, no antibody, no fever</b>, and extreme resistance to <b>formalin, heat, UV and ordinary disinfectants</b>. Very long incubation, invariably fatal.<br><b>Common lesion: STATUS SPONGIOSUS</b> — vacuolation of neurons and neuropil in the grey matter, gliosis, neuronal loss, <b>amyloid plaques</b>.<br><b>SCRAPIE</b> (sheep, goats) — intense <b>pruritus</b>, wool loss, ataxia. <b>BSE</b> (cattle, \"mad cow\") — spread by feeding <b>meat-and-bone meal</b>; apprehension, hyperaesthesia, ataxia; linked to variant CJD in people. <b>FSE</b> in cats; <b>chronic wasting disease</b> in deer.<br><b>Diagnosis: histopathology of the brain stem (obex) + IMMUNOHISTOCHEMISTRY or Western blot for PrP</b></td></tr>\n        </table>"
  },
  {
   "id": "unit-4-b09",
   "n": 9,
   "page": 2,
   "tone": "t4",
   "title": "POX VIRUS DISEASES",
   "stars": 0,
   "kinds": [
    "flow"
   ],
   "html": "<div class=\"chain amb\"><span class=\"s\"><b>Macule</b></span><span class=\"a2\">→</span><span class=\"s\"><b>Papule</b></span><span class=\"a2\">→</span>\n          <span class=\"s\"><b>Vesicle</b></span><span class=\"a2\">→</span><span class=\"s\"><b>Pustule</b></span><span class=\"a2\">→</span><span class=\"s\"><b>Crust / scab</b></span><span class=\"a2\">→</span><span class=\"s\"><b>Scar</b></span></div>\n        <ul class=\"sm\">\n          <li><b>Poxviruses are large DNA viruses that replicate in the CYTOPLASM</b>, hence <b>intracytoplasmic inclusions</b>; micro shows <b>ballooning degeneration</b> of keratinocytes and epidermal hyperplasia</li>\n          <li><b>SHEEP POX</b> — the <b>most severe</b> pox of domestic animals (Capripoxvirus); generalised skin nodules, and <b>hard grey nodules in the LUNG</b> are characteristic; \"sheep-pox cells\" with vacuolated nuclei</li>\n          <li><b>GOAT POX</b> — similar, milder; <b>LUMPY SKIN DISEASE</b> (capripox, cattle) — multiple firm intradermal nodules over the whole body, \"sit-fast\" cores, lymphadenopathy, oedema of the limbs</li>\n          <li><b>Cowpox / BUFFALOPOX</b> — teat and udder lesions, <b>zoonotic</b>, important in Indian dairies (milkers' nodules)</li>\n          <li><b>ORF (contagious ecthyma / contagious pustular dermatitis)</b> — a <b>PARAPOXVIRUS</b> of sheep and goats; <b>proliferative, scabby, wart-like lesions on the lips, commissures and muzzle</b> of lambs; <b>zoonotic</b>; interferes with suckling</li>\n          <li><b>Swine pox</b> — usually spread by the <b>pig louse <i>Haematopinus suis</i></b>; <b>Fowl pox</b> — cutaneous (comb, wattle) and diphtheritic forms, <b>Bollinger bodies</b></li>\n        </ul>"
  },
  {
   "id": "unit-4-b10",
   "n": 10,
   "page": 3,
   "tone": "t5",
   "title": "TUBERCULOSIS &amp; JOHNE'S DISEASE",
   "stars": 3,
   "kinds": [
    "table"
   ],
   "html": "<table class=\"tc\">\n          <tr><th></th><th>Tuberculosis</th><th>Johne's disease</th></tr>\n          <tr><td>Agent</td><td><b><i>M. bovis</i></b> (cattle), <i>M. tuberculosis</i>, <i>M. avium</i></td><td><b><i>M. avium</i> subsp. <i>paratuberculosis</i></b></td></tr>\n          <tr><td>Reaction</td><td><b>Granuloma (tubercle) with CASEOUS necrosis</b> + epithelioid cells + <b>Langhans giant cells</b> + lymphocyte cuff + fibrous capsule; <b>calcification is prominent in cattle</b></td><td><b>DIFFUSE granulomatous enteritis — NO caseation, NO calcification, NO ulceration</b>; sheets of <b>epithelioid macrophages stuffed with acid-fast bacilli</b> in the lamina propria</td></tr>\n          <tr><td>Gross</td><td><b>Miliary</b> nodules; <b>\"PEARL DISEASE\"</b> = grape-like nodules on pleura and peritoneum; <b>Ghon (primary) complex</b> = the primary lung lesion + its regional lymph node</td><td><b>Thickened, CORRUGATED / rugose ileum that will not flatten</b>, <b>\"CORDING\" of the subserosal lymphatics</b>, enlarged oedematous mesenteric lymph nodes</td></tr>\n          <tr><td>Signs</td><td>Chronic wasting, cough</td><td><b>Chronic intractable diarrhoea with a normal appetite</b>, progressive emaciation, <b>bottle jaw</b>; adults, long incubation</td></tr>\n          <tr><td>Stain / test</td><td><b>Ziehl–Neelsen ACID-FAST</b>; <b>tuberculin test = Type IV</b> delayed hypersensitivity</td><td>ZN acid-fast in clumps; <b>johnin test</b>, faecal culture, ELISA, PCR</td></tr>\n        </table>"
  },
  {
   "id": "unit-4-b11",
   "n": 11,
   "page": 3,
   "tone": "t5",
   "title": "ANTHRAX &amp; the CLOSTRIDIA",
   "stars": 3,
   "kinds": [
    "table",
    "trap",
    "mem"
   ],
   "html": "<div class=\"trap\"><span class=\"lbl\">ANTHRAX</span> <b><i>Bacillus anthracis</i></b> — Gram-positive, <b>capsulated, spore-forming</b> rod; spores survive in soil for decades. <b>Peracute death</b> in ruminants. <b>Dark tarry blood that fails to clot oozes from the nostrils, mouth, anus and vulva; rigor mortis is absent or incomplete; the SPLEEN is huge, soft and blackberry-jam-like.</b> Widespread haemorrhage and oedema.<br>\n        <b>NEVER open the carcass.</b> Make a <b>peripheral blood smear</b> and stain with <b>polychrome methylene blue → McFADYEAN'S REACTION</b> (blue rods with a pink capsule). Dispose by <b>deep burial with quicklime or incineration</b>. Notifiable, zoonotic (malignant pustule, woolsorter's disease). In <b>pigs</b> it is usually a localised <b>pharyngeal/oedematous</b> form; in horses, colic and oedema.</div>\n        <table class=\"tc\">\n          <tr><th>Clostridial disease</th><th>Organism &amp; the fact that identifies it</th></tr>\n          <tr><td><b>BLACK QUARTER (blackleg)</b></td><td><b><i>Cl. chauvoei</i></b>. <b>ENDOGENOUS</b> — spores already in the muscle germinate after bruising, <b>no wound needed</b>. <b>Young, well-nourished cattle 6 months–2 years</b>. Heavy muscle becomes <b>dark red-black, dry, spongy, CREPITANT</b> with a <b>rancid-butter odour</b>; hot painful swelling that becomes cold and crackly. Prevented by vaccination before the rains</td></tr>\n          <tr><td><b>Malignant oedema</b></td><td><b><i>Cl. septicum</i></b> — <b>EXOGENOUS, needs a WOUND</b>; more <b>oedematous, less gassy</b> than blackleg</td></tr>\n          <tr><td><b>BLACK DISEASE</b><br>(infectious necrotic hepatitis)</td><td><b><i>Cl. novyi</i> type B</b> in sheep. <b>Requires liver damage by migrating immature <i>Fasciola</i></b> to create the anaerobic focus. <b>Large pale-yellow necrotic foci surrounded by a hyperaemic zone</b> in the liver; after death intense <b>subcutaneous venous congestion turns the skin dark</b> — hence the name</td></tr>\n          <tr><td><b>ENTEROTOXAEMIA</b></td><td><b><i>Cl. perfringens</i></b> types. <b>Type D = \"PULPY KIDNEY\" of lambs</b> — <b>epsilon toxin</b> after a sudden change to rich feed; <b>GLYCOSURIA</b> is a useful antemortem clue; kidneys soften rapidly after death; <b>focal symmetrical encephalomalacia</b>. <b>Type B = lamb dysentery</b>; <b>Type C = \"struck\"</b> and necrotic enteritis</td></tr>\n          <tr><td><b>BRAXY</b></td><td><b><i>Cl. septicum</i></b> — <b>ABOMASITIS</b> of sheep that eat <b>frosted/frozen grass</b>; haemorrhagic necrotic abomasal wall</td></tr>\n          <tr><td><b>BOTULISM</b></td><td><b><i>Cl. botulinum</i></b> — an <b>INTOXICATION</b>: the <b>preformed toxin is EATEN</b>. Toxin <b>blocks acetylcholine release</b> at the neuromuscular junction → <b>FLACCID paralysis</b>, tongue paralysis, \"limberneck\" in birds. <b>Type D in cattle follows PHOSPHORUS deficiency → osteophagia</b> (chewing carcass bones)</td></tr>\n          <tr><td><b>TETANUS</b></td><td><b><i>Cl. tetani</i></b> — enters through a <b>deep puncture wound</b>. <b>Tetanospasmin blocks the release of the inhibitory transmitters glycine and GABA</b> from the Renshaw cells → <b>SPASTIC paralysis</b>: lockjaw (trismus), <b>\"sawhorse\" stance</b>, erect ears, <b>protrusion of the third eyelid</b>, spasms triggered by noise or touch; <b>the animal remains conscious</b>. <b>Horses are the most susceptible</b>; there are <b>no diagnostic gross lesions</b></td></tr>\n        </table>\n        <div class=\"mem\"><span class=\"lbl\">Two toxins, opposite results</span> <b>BOTULISM = FLACCID</b> (ACh release blocked). <b>TETANUS = SPASTIC/RIGID</b> (inhibition blocked). Both are <b><i>Clostridium</i></b> neurotoxins.</div>"
  },
  {
   "id": "unit-4-b12",
   "n": 12,
   "page": 3,
   "tone": "t2",
   "title": "Actinomycosis · Streptococci · Staphylococci · Glanders",
   "stars": 0,
   "kinds": [],
   "html": "<ul class=\"sm\">\n          <li><b>ACTINOMYCOSIS — \"lumpy jaw\"</b>: <b><i>Actinomyces bovis</i></b>, a rarefying and proliferative <b>osteomyelitis of the MANDIBLE</b>; pyogranuloma containing <b>\"sulphur granules\" (club colonies)</b> with the <b>Splendore–Hoeppli</b> reaction</li>\n          <li><b>ACTINOBACILLOSIS — \"wooden tongue\"</b>: <b><i>Actinobacillus lignieresii</i></b>, in <b>SOFT tissue</b> — the tongue becomes hard and protrudes; same club colonies</li>\n          <li><b>STRANGLES</b>: <b><i>Streptococcus equi</i> subsp. <i>equi</i></b> in young horses — fever, nasal discharge and <b>abscessation of the submandibular and retropharyngeal lymph nodes</b> which rupture and discharge thick pus. <b>\"Bastard strangles\"</b> = metastatic abscesses in other organs. <b>PURPURA HAEMORRHAGICA</b> is the <b>Type III immune-complex</b> sequel — widespread petechiae and severe oedema</li>\n          <li><b>STAPHYLOCOCCOSIS</b>: <i>Staph. aureus</i> — abscess, <b>gangrenous mastitis</b>, tick pyaemia of lambs, <b>botryomycosis</b> (chronic granuloma with club colonies)</li>\n          <li><b>GLANDERS ★</b>: <b><i>Burkholderia mallei</i></b>, of <b>equines</b>, <b>zoonotic and notifiable in India</b>. <b>Nasal form</b> — ulcers on the septum that heal into a typical <b>stellate (star-shaped) scar</b>. <b>Pulmonary form</b> — miliary grey nodules. <b>Cutaneous form = \"FARCY\"</b> — <b>corded, thickened lymphatics studded with nodules (\"farcy buds\") that ulcerate</b>. Diagnosed by the <b>MALLEIN test</b> and complement fixation</li>\n        </ul>"
  },
  {
   "id": "unit-4-b13",
   "n": 13,
   "page": 4,
   "tone": "t5",
   "title": "PASTEURELLOSIS (top Indian topic)",
   "stars": 3,
   "kinds": [
    "table",
    "fact"
   ],
   "html": "<table class=\"tc\">\n          <tr><th></th><th>Haemorrhagic septicaemia</th><th>Shipping fever / pneumonic pasteurellosis</th></tr>\n          <tr><td>Agent</td><td><b><i>Pasteurella multocida</i> serotypes B:2 and E:2</b></td><td><b><i>Mannheimia (Pasteurella) haemolytica</i> A1</b></td></tr>\n          <tr><td>Species</td><td><b>Cattle and especially BUFFALO</b>; monsoon disease of India</td><td>Cattle, sheep after transport/stress</td></tr>\n          <tr><td>Course</td><td><b>Peracute septicaemia</b>, death in 6&ndash;24 h</td><td>Acute bronchopneumonia</td></tr>\n          <tr><td>Lesions</td><td><b>Hot painful SUBCUTANEOUS OEDEMA of the throat, brisket and dewlap</b> (the \"septicaemic/oedematous\" form); widespread <b>petechiae on serosae</b>; blood-tinged fluid in the body cavities; enlarged haemorrhagic lymph nodes; <b>fibrinous pneumonia</b> in the longer cases</td><td><b>CRANIOVENTRAL fibrinous bronchopneumonia with FIBRINOUS PLEURITIS</b>; interlobular oedema; the lung is red, firm and heavy with fibrin sheets on the pleura</td></tr>\n          <tr><td>Diagnosis</td><td><b>Bipolar organisms on a Leishman-stained blood smear</b>; culture from heart blood, spleen, oedema fluid</td><td>Culture from lung; history of transport</td></tr>\n        </table>\n        <div class=\"fact\"><span class=\"lbl\">Field rule</span> A buffalo that dies in <b>24 hours during the rains with a swollen throat</b> = <b>HS</b>. A buffalo found dead with <b>tarry unclotted blood and a huge soft spleen</b> = <b>ANTHRAX</b>. Do not confuse them &mdash; the second one you must not open.</div>"
  },
  {
   "id": "unit-4-b14",
   "n": 14,
   "page": 4,
   "tone": "t2",
   "title": "Leptospirosis · Listeriosis · Swine erysipelas · Brucellosis",
   "stars": 0,
   "kinds": [
    "table"
   ],
   "html": "<table class=\"tt\">\n          <tr><th>Disease</th><th>Agent &amp; lesions</th></tr>\n          <tr><td><b>LEPTOSPIROSIS</b></td><td><b><i>Leptospira interrogans</i></b> serovars &mdash; <i>pomona</i>, <i>hardjo</i>, <i>canicola</i>, <i>icterohaemorrhagiae</i>, <i>grippotyphosa</i>. Spread in <b>URINE</b>, enters through wet skin and mucosa; <b>rodents are the reservoir</b>. Acute in calves &mdash; <b>intravascular haemolysis with haemoglobinuria (\"REDWATER\"), jaundice and fever</b>. Chronic &mdash; <b>interstitial nephritis giving the \"WHITE-SPOTTED KIDNEY\"</b>, abortion, and <b>agalactia with flabby udder in cows</b>. In dogs, acute nephritis and hepatitis. Diagnosis: <b>dark-field microscopy of urine</b>, <b>MAT</b>, silver stain of kidney, PCR. <b>Important ZOONOSIS</b> (Weil's disease)</td></tr>\n          <tr><td><b>LISTERIOSIS</b></td><td><b><i>Listeria monocytogenes</i></b> &mdash; Gram-positive, grows at refrigeration temperature (<b>cold enrichment</b>) and multiplies in <b>poorly fermented SILAGE with pH above about 5.5</b>. Three syndromes: <b>① \"CIRCLING DISEASE\"</b> &mdash; ascends the <b>trigeminal nerve</b> to give <b>MICROABSCESSES IN THE BRAIN STEM (pons and medulla)</b> with <b>unilateral</b> cranial nerve deficits, drooping ear and lip, circling. <b>② Abortion</b> in the last trimester with focal hepatic necrosis in the fetus. <b>③ Septicaemia</b> with miliary hepatic necrosis in monogastrics and neonates. <b>Zoonotic</b></td></tr>\n          <tr><td><b>SWINE ERYSIPELAS</b></td><td><b><i>Erysipelothrix rhusiopathiae</i></b>. <b>Acute</b> &mdash; septicaemia with <b>DIAMOND-SHAPED (rhomboid) raised red-purple SKIN LESIONS</b>, pathognomonic. <b>Chronic</b> &mdash; <b>vegetative endocarditis of the LEFT AV (mitral) valve</b> and <b>proliferative non-suppurative arthritis</b>. Zoonotic (erysipeloid in fish handlers)</td></tr>\n          <tr><td><b>BRUCELLOSIS ★</b></td><td><b><i>Brucella abortus</i></b> (cattle), <b><i>B. melitensis</i></b> (goats, sheep &mdash; the most pathogenic for man), <b><i>B. suis</i></b>, <b><i>B. ovis</i></b> (rams). Facultative <b>intracellular</b>, survives in macrophages; has a predilection for the <b>placenta and fetal fluids because of ERYTHRITOL</b>.<br><b>Lesions:</b> <b>abortion in the LAST TRIMESTER</b>, retained placenta and metritis; <b>necrotic yellow leathery cotyledons with a THICKENED, OEDEMATOUS INTERCOTYLEDONARY MEMBRANE</b> covered in sticky exudate; fetal <b>bronchopneumonia</b>; in bulls <b>orchitis and epididymitis with testicular necrosis</b> and <b>seminal vesiculitis</b>; <b>carpal/knee hygroma</b> in Indian cattle.<br><b>Tests: RBPT (screening), STAT, milk ring test, CFT, ELISA</b>; culture of fetal <b>abomasal content</b> is the best sample. <b>Zoonosis &mdash; undulant/Malta fever</b></td></tr>\n        </table>"
  },
  {
   "id": "unit-4-b15",
   "n": 15,
   "page": 4,
   "tone": "t4",
   "title": "Corynebacterium · Campylobacter · Salmonella · Coli · Necrobacillosis",
   "stars": 0,
   "kinds": [
    "table"
   ],
   "html": "<table class=\"ta\">\n          <tr><th>Disease</th><th>Key point</th></tr>\n          <tr><td><b>Caseous lymphadenitis</b></td><td><b><i>Corynebacterium pseudotuberculosis</i></b>, sheep and goats; abscess of superficial nodes and lung with <b>concentric laminated \"ONION-RING\" pus</b></td></tr>\n          <tr><td><b>Bovine pyelonephritis</b></td><td><b><i>Corynebacterium renale</i></b> &mdash; <b>ascending</b> infection; pus in the renal pelvis with radiating pale streaks in the medulla; also <b>pizzle rot</b> of wethers</td></tr>\n          <tr><td><b>CAMPYLOBACTERIOSIS</b></td><td><b><i>Campylobacter fetus</i> subsp. <i>venerealis</i></b> &mdash; <b>bovine genital campylobacteriosis</b>: <b>venereal</b>, causes <b>early embryonic death, repeat breeding and infertility</b> rather than late abortion; mild endometritis. <b><i>C. jejuni</i></b> &mdash; enteritis and <b>ovine abortion</b>; a major <b>food-borne zoonosis</b></td></tr>\n          <tr><td><b>SALMONELLOSIS</b></td><td><b><i>S.</i> Dublin</b> and <b><i>S.</i> Typhimurium</b> in calves; <b><i>S.</i> Abortusequi</b> (equine abortion), <b><i>S.</i> Abortusovis</b>. <b>Lesions:</b> <b>fibrinonecrotic (\"diphtheritic\") enterocolitis</b> with a yellow-grey adherent pseudomembrane, <b>\"PARATYPHOID NODULES\"</b> = pinpoint pale foci of necrosis in the <b>liver</b>, cholecystitis with a thickened gall bladder, splenomegaly, septicaemia in the young. <b>Zoonosis</b></td></tr>\n          <tr><td><b>COLIBACILLOSIS</b></td><td><b><i>E. coli</i></b>. <b>① Enterotoxigenic (ETEC)</b> &mdash; fimbriae <b>K99 (F5) in calves and lambs, K88 (F4) and F18 in piglets</b>; enterotoxin causes <b>SECRETORY diarrhoea with a NORMAL villus</b> (no villous atrophy) &rarr; profuse watery white diarrhoea, dehydration, acidosis. <b>② Septicaemic</b> colibacillosis &mdash; follows <b>failure of passive transfer</b>; polyarthritis, meningitis, omphalitis. <b>③ OEDEMA DISEASE of pigs ★</b> &mdash; <b>Shiga toxin 2e</b> from F18 <i>E. coli</i> soon after <b>weaning</b>; <b>oedema of the EYELIDS, forehead, submucosa of the GASTRIC CARDIA and MESOCOLON</b>, hydrothorax and ascites; staggering, squealing voice, sudden death; angiopathy with fibrinoid necrosis. <b>④ Coliform mastitis</b></td></tr>\n          <tr><td><b>NECROBACILLOSIS</b></td><td><b><i>Fusobacterium necrophorum</i></b> &mdash; the common denominator of <b>calf diphtheria</b> (necrotic laryngitis and oral necrosis), <b>foot rot</b> (with <i>Dichelobacter nodosus</i>), <b>rumenitis&ndash;liver abscess complex</b>, and <b>necrotic rhinitis (bull nose) of pigs</b>. Foul odour and yellow-grey dry necrotic tissue</td></tr>\n        </table>"
  },
  {
   "id": "unit-4-b16",
   "n": 16,
   "page": 4,
   "tone": "t3",
   "title": "MYCOPLASMA · CHLAMYDIA · Q-FEVER · ANAPLASMA · EHRLICHIA",
   "stars": 2,
   "kinds": [
    "table",
    "trap"
   ],
   "html": "<table class=\"tp\">\n          <tr><th>Disease</th><th>Agent &amp; lesion</th></tr>\n          <tr><td><b>CBPP</b><br>Contagious bovine pleuropneumonia</td><td><b><i>Mycoplasma mycoides</i> subsp. <i>mycoides</i> (small colony type)</b>. <b>Notifiable.</b> <b>Unilateral fibrinous pleuropneumonia</b>: massive <b>thickening of the INTERLOBULAR SEPTA</b> with hepatisation of different ages gives the <b>classic \"MARBLED\" cut surface</b>; litres of <b>straw-coloured fluid with fibrin clots</b> in the pleural cavity; chronic cases form <b>SEQUESTRA</b> &mdash; encapsulated necrotic lung that keeps live organisms and makes carriers</td></tr>\n          <tr><td><b>CCPP</b><br>Contagious caprine pleuropneumonia</td><td><b><i>Mycoplasma capripneumoniae</i></b> in <b>goats</b>; acute fibrinous pleuropneumonia, usually <b>unilateral</b>, with pleural fluid; high mortality; <b>no marbling and no sequestra</b> as a rule</td></tr>\n          <tr><td><b>Porcine enzootic pneumonia</b></td><td><b><i>Mycoplasma hyopneumoniae</i></b>. <b>Cranioventral purple-red plum-coloured consolidation</b> with sharp demarcation; the histological hallmark is <b>\"CUFFING PNEUMONIA\"</b> &mdash; heavy <b>peribronchiolar and perivascular LYMPHOID hyperplasia</b>. High morbidity, low mortality, poor growth</td></tr>\n          <tr><td><b>Chlamydial diseases</b></td><td><b><i>Chlamydia abortus</i></b> &rarr; <b>enzootic abortion of ewes</b>, necrotic placentitis. <b><i>C. psittaci</i></b> &rarr; <b>psittacosis/ornithosis</b> in birds &mdash; fibrinous airsacculitis, pericarditis, hepatosplenomegaly; <b>zoonotic</b>. Also <b>polyarthritis, conjunctivitis, sporadic bovine encephalomyelitis</b>. Obligate intracellular; <b>elementary and reticulate bodies</b>, seen with Giemsa or Macchiavello stain</td></tr>\n          <tr><td><b>Q FEVER</b></td><td><b><i>Coxiella burnetii</i></b> &mdash; extremely resistant, spread by <b>aerosol</b> from birth fluids and by ticks; causes <b>abortion and placentitis</b> in ruminants (often subclinical) but <b>serious influenza-like disease and endocarditis in people</b>. A major occupational zoonosis of veterinarians</td></tr>\n          <tr><td><b>ANAPLASMOSIS ★</b></td><td><b><i>Anaplasma marginale</i></b> in the red cell, <b>tick-borne</b>. Causes <b>EXTRAVASCULAR haemolysis</b> &mdash; therefore <b>marked anaemia and JAUNDICE but NO haemoglobinuria</b>. Pale thin blood, enlarged spleen, distended gall bladder, icteric carcass. Seen as a <b>small dense dot at the MARGIN of the RBC</b></td></tr>\n          <tr><td><b>EHRLICHIOSIS</b></td><td><b><i>Ehrlichia canis</i></b> &rarr; <b>tropical canine pancytopenia</b>, spread by <b><i>Rhipicephalus sanguineus</i></b>. <b>Thrombocytopenia with epistaxis and petechiae</b>, anaemia, lymphadenopathy, splenomegaly; <b>MORULAE in monocytes</b>. Common in Indian dogs</td></tr>\n        </table>\n        <div class=\"trap\"><span class=\"lbl\">Haemoglobinuria &mdash; yes or no? ★★★</span> <b>BABESIOSIS &mdash; YES</b> (intravascular haemolysis, red urine). <b>ANAPLASMOSIS &mdash; NO</b> (extravascular haemolysis, jaundice only). <b>THEILERIOSIS &mdash; usually NO.</b> <b>Leptospirosis and post-parturient haemoglobinuria and chronic copper poisoning &mdash; YES.</b> This one line settles many objective questions.</div>"
  },
  {
   "id": "unit-4-b17",
   "n": 17,
   "page": 5,
   "tone": "t6",
   "title": "SUPERFICIAL &amp; DEEP MYCOSES",
   "stars": 0,
   "kinds": [
    "table"
   ],
   "html": "<table class=\"tg\">\n          <tr><th>Mycosis</th><th>Agent &amp; diagnostic feature</th></tr>\n          <tr><td><b>RINGWORM</b><br>(dermatophytosis)</td><td><b><i>Trichophyton verrucosum</i></b> &mdash; the usual cause in <b>CATTLE</b>, thick grey-white crusty circular plaques around the eyes and neck. <b><i>Microsporum canis</i></b> &mdash; dogs and cats, and the one that shows <b>apple-green FLUORESCENCE under WOOD'S (UV) LAMP</b>. <b><i>T. mentagrophytes</i></b>, <b><i>M. gypseum</i></b>. Lesion: <b>circular expanding alopecia with scaling and a healing centre</b>; hyphae and arthrospores confined to the <b>keratin and hair shaft</b>, folliculitis. <b>Diagnosis: 10&ndash;20% KOH mount of hair/scale, Wood's lamp, culture on DTM/Sabouraud</b>. <b>Zoonotic</b></td></tr>\n          <tr><td><b>ASPERGILLOSIS</b></td><td><b><i>Aspergillus fumigatus</i></b>; <b>septate, dichotomously branching hyphae at about 45&deg;</b>. <b>Bovine mycotic abortion ★</b> &mdash; <b>thickened leathery necrotic placenta with raised plaques</b>, and <b>discrete raised \"ringworm-like\" plaques on the SKIN of the aborted fetus</b>. <b>Guttural pouch mycosis</b> of horses &mdash; erodes the internal carotid &rarr; fatal epistaxis. <b>Brooder pneumonia</b> in chicks. Angioinvasive with infarction. Stain: <b>PAS or GMS</b></td></tr>\n          <tr><td><b>ZYGOMYCOSIS</b><br>(mucormycosis)</td><td><b><i>Rhizopus, Mucor, Absidia</i></b>. <b>Broad, irregular, NON-SEPTATE (sparsely septate) hyphae branching at wide angles</b>. Strongly <b>angioinvasive</b> &rarr; thrombosis and infarction; gastric and abomasal ulcers, lymph node granulomas, mycotic placentitis</td></tr>\n          <tr><td><b>HISTOPLASMOSIS</b></td><td><b><i>Histoplasma capsulatum</i></b> &mdash; small <b>intracellular yeasts inside macrophages</b>; granulomatous disease of the intestine, liver, spleen and lung of dogs. <b><i>H. farciminosum</i></b> causes <b>EPIZOOTIC LYMPHANGITIS</b> of horses &mdash; corded lymphatics with ulcerating nodules (must be told apart from glanders)</td></tr>\n          <tr><td><b>CRYPTOCOCCOSIS</b></td><td><b><i>Cryptococcus neoformans</i></b>, associated with <b>pigeon droppings</b>. Yeast with a <b>huge mucoid CAPSULE</b> that produces a gelatinous, \"soap-bubble\" appearance. <b>Nasal granuloma of the CAT (\"Roman nose\")</b>, meningitis. Capsule shown by <b>INDIA INK negative staining</b> and by <b>MUCICARMINE</b> (positive) &mdash; a favourite question</td></tr>\n          <tr><td><b>RHINOSPORIDIOSIS ★</b></td><td><b><i>Rhinosporidium seeberi</i></b> &mdash; <b>very common in INDIA</b> (cattle, buffalo, horses, dogs and man), linked to <b>stagnant water and mud</b>. <b>Pink, polypoid, friable nasal mass studded with white pinhead specks</b>, which are the <b>SPORANGIA packed with endospores</b>. Bleeds easily, recurs after removal</td></tr>\n          <tr><td><b>CANDIDIASIS</b></td><td><b><i>Candida albicans</i></b> &mdash; <b>\"THRUSH\"</b>, a white pseudomembrane on the tongue and oesophagus; <b>crop mycosis (sour crop)</b> in birds; follows prolonged antibiotic use and immunosuppression. Shows <b>budding yeasts, pseudohyphae and hyphae together</b></td></tr>\n        </table>"
  },
  {
   "id": "unit-4-b18",
   "n": 18,
   "page": 5,
   "tone": "t4",
   "title": "MYCOTOXICOSES",
   "stars": 3,
   "kinds": [
    "table",
    "mem"
   ],
   "html": "<table class=\"ta\">\n          <tr><th>Mycotoxicosis</th><th>Fungus, toxin, target</th></tr>\n          <tr><td><b>AFLATOXICOSIS</b></td><td><b><i>Aspergillus flavus</i> and <i>A. parasiticus</i></b> &rarr; <b>aflatoxin B<sub>1</sub></b>, the most toxic. On <b>groundnut cake, maize and cottonseed</b> stored damp &mdash; the classic Indian feed problem. <b>Target = LIVER; it is both hepatotoxic and HEPATOCARCINOGENIC.</b> <b>Acute:</b> centrilobular necrosis and haemorrhage, icterus, bleeding (↓ clotting factors). <b>Chronic:</b> firm pale fibrotic liver with <b>marked BILE DUCT (biliary) HYPERPLASIA</b>, <b>MEGALOCYTOSIS</b> of hepatocytes, and eventually <b>hepatocellular carcinoma</b>. <b>Ducklings are the most sensitive species</b>; also immunosuppression and poor growth. Aflatoxin M<sub>1</sub> is excreted in <b>milk</b></td></tr>\n          <tr><td><b>OCHRATOXICOSIS</b></td><td><b><i>Aspergillus ochraceus</i>, <i>Penicillium verrucosum</i></b> &rarr; <b>ochratoxin A</b>. <b>Target = KIDNEY (nephrotoxic)</b>. Pale, enlarged, mottled kidneys with <b>tubular degeneration and interstitial fibrosis</b> &mdash; \"mycotoxic porcine nephropathy\"; polyuria, poor growth. Immunosuppressive</td></tr>\n          <tr><td><b>TRICHOTHECOSIS</b></td><td><b><i>Fusarium</i></b> species &rarr; <b>T-2 toxin, deoxynivalenol (vomitoxin), diacetoxyscirpenol</b>. Trichothecenes are <b>protein-synthesis inhibitors and are RADIOMIMETIC</b>: <b>oral and gastrointestinal necrosis and ulceration</b>, feed refusal and vomiting, plus <b>necrosis of bone marrow and lymphoid tissue &rarr; pancytopenia and haemorrhage</b>. Also contact dermatitis of the muzzle</td></tr>\n          <tr><td><b>DEGNALA DISEASE ★</b></td><td>An <b>Indian condition of buffaloes and cattle in the northern states</b>, linked to feeding <b>mouldy PADDY (rice) STRAW</b> and its <i>Fusarium</i> toxins. Produces <b>DRY GANGRENE OF THE EXTREMITIES</b> &mdash; oedema then necrosis and sloughing of the <b>tail tip, ear tips, muzzle and coronary band/hoof</b>, with sharply demarcated dry black tissue. Not febrile; response is reported to <b>selenium plus vitamin E</b> and change of fodder</td></tr>\n          <tr><td><b>ERGOTISM</b></td><td><b><i>Claviceps purpurea</i></b> on rye and other grasses &rarr; <b>ergot alkaloids (ergotamine, ergotoxine)</b> which are powerful <b>VASOCONSTRICTORS</b> &rarr; <b>DRY GANGRENE of the ear tips, tail, teats and feet</b>, agalactia, abortion; a <b>convulsive/nervous form</b> also occurs. <b><i>Claviceps fusiformis</i> on BAJRA (pearl millet) in India causes AGALACTIA</b> in sows and buffaloes</td></tr>\n        </table>\n        <div class=\"mem\"><span class=\"lbl\">One-line targets</span> <b>Aflatoxin &rarr; LIVER. Ochratoxin &rarr; KIDNEY. Trichothecene &rarr; GUT + BONE MARROW. Fumonisin &rarr; BRAIN of the horse (leukoencephalomalacia). Zearalenone &rarr; OESTROGENIC (vulvar oedema, prolapse in gilts). Ergot &rarr; BLOOD VESSELS (gangrene).</b></div>"
  },
  {
   "id": "unit-4-b19",
   "n": 19,
   "page": 5,
   "tone": "t5",
   "title": "HAEMOPROTOZOA (highest yield in India)",
   "stars": 3,
   "kinds": [
    "table"
   ],
   "html": "<table class=\"tc\">\n          <tr><th></th><th>BABESIOSIS</th><th>THEILERIOSIS</th><th>TRYPANOSOMOSIS</th></tr>\n          <tr><td>Agent</td><td><b><i>Babesia bigemina</i>, <i>B. bovis</i></b>; <i>B. canis</i> in dogs</td><td><b><i>Theileria annulata</i></b> (tropical theileriosis of India), <i>T. parva</i> (East Coast fever)</td><td><b><i>Trypanosoma evansi</i></b> = <b>SURRA</b>; also <i>T. congolense</i>, <i>T. vivax</i></td></tr>\n          <tr><td>Vector</td><td><b><i>Rhipicephalus (Boophilus) microplus</i></b> tick; <b>transovarial</b></td><td><b><i>Hyalomma</i></b> tick; <b>transstadial</b></td><td><b>Biting flies (<i>Tabanus</i>) MECHANICALLY</b>; also iatrogenic needles</td></tr>\n          <tr><td>Where it lives</td><td><b>Inside the RBC</b> &mdash; large <b>PEAR-SHAPED PAIRS at an acute angle</b></td><td><b>Schizonts (KOCH'S BLUE BODIES) in LYMPHOCYTES</b>, then small piroplasms in RBCs</td><td><b>EXTRACELLULAR</b> flagellate in plasma</td></tr>\n          <tr><td>Key signs</td><td>High fever, <b>intravascular haemolysis &rarr; HAEMOGLOBINURIA (\"redwater\")</b>, jaundice, anaemia. <b><i>B. bovis</i> also causes CEREBRAL babesiosis</b> &mdash; parasitised cells sequester in brain capillaries, giving a <b>\"cherry-pink\" brain</b> and nervous signs</td><td><b>Marked enlargement of superficial lymph nodes first</b> (parotid node), fever, anaemia, jaundice, <b>petechiae, \"PUNCHED-OUT\" ABOMASAL ULCERS</b>, pulmonary oedema, <b>lymphoid proliferation then destruction</b>. Exotic breeds and crossbreds worst</td><td>Intermittent fever, progressive anaemia and <b>cachexia</b>, ventral oedema, <b>corneal opacity in dogs</b>, splenomegaly; nervous signs late. <b>Horses, camels and dogs are highly susceptible</b>; cattle and buffalo are often carriers</td></tr>\n          <tr><td>Diagnosis</td><td><b>Giemsa-stained peripheral blood smear from the EAR-TIP capillary</b></td><td><b>Lymph node biopsy/aspirate smear for Koch's blue bodies</b> + blood smear</td><td><b>Wet blood film for motile organisms</b>, Giemsa smear, <b>mouse inoculation</b>, CATT, PCR</td></tr>\n        </table>"
  },
  {
   "id": "unit-4-b20",
   "n": 20,
   "page": 5,
   "tone": "t2",
   "title": "FLUKES, WORMS, TAPEWORMS, COCCIDIA",
   "stars": 0,
   "kinds": [
    "table"
   ],
   "html": "<table class=\"tt\">\n          <tr><th>Parasite</th><th>Pathology</th></tr>\n          <tr><td><b>FASCIOLOSIS ★</b></td><td><b><i>Fasciola hepatica</i></b> and <b><i>F. gigantica</i></b> (the important one in India); snail host <b><i>Lymnaea</i></b>. <b>Acute:</b> immature flukes tunnel through the parenchyma &rarr; <b>haemorrhagic migratory tracts</b>, enlarged friable liver, fatal haemorrhage; also creates the anaerobic focus for <b>BLACK DISEASE</b>. <b>Chronic:</b> adults in the bile ducts &rarr; <b>cholangitis, marked biliary fibrosis and calcification = \"PIPE-STEM LIVER\"</b>, cirrhosis, <b>black parasitic haematin</b> pigment, <b>anaemia, hypoalbuminaemia and BOTTLE JAW</b></td></tr>\n          <tr><td><b>AMPHISTOMIASIS</b></td><td><b><i>Paramphistomum</i></b>. <b>The IMMATURE flukes are the killers</b> &mdash; they attach in the <b>duodenum</b> causing severe haemorrhagic <b>duodenitis</b>, oedema and death in young stock; the <b>ADULTS in the rumen are relatively harmless</b> (rumen papillae studded with pink flukes)</td></tr>\n          <tr><td><b>Ascariasis</b></td><td><b><i>Ascaris suum</i></b> in pigs &mdash; larval migration leaves <b>\"MILK SPOTS\" (white fibrotic foci) on the LIVER</b>, a condemnation lesion; larvae also cause verminous pneumonia. <b><i>Parascaris equorum</i></b> in foals &mdash; intestinal obstruction and rupture. <b><i>Toxocara canis</i></b> &mdash; zoonotic <b>visceral larva migrans</b></td></tr>\n          <tr><td><b>Strongylosis</b></td><td><b><i>Strongylus vulgaris</i></b> &mdash; larvae migrate in the <b>CRANIAL MESENTERIC ARTERY</b> &rarr; <b>verminous arteritis and aneurysm</b>, thrombosis, <b>intestinal infarction and fatal colic</b> in horses</td></tr>\n          <tr><td><b>HAEMONCHOSIS</b></td><td><b><i>Haemonchus contortus</i></b>, the <b>\"BARBER'S POLE WORM\"</b> of the <b>abomasum</b>. A <b>voracious blood-sucker</b> &rarr; severe <b>anaemia, hypoproteinaemia and BOTTLE JAW, usually WITHOUT diarrhoea</b>; pale watery carcass. Abomasal mucosa studded with worms and small bleeding points</td></tr>\n          <tr><td><b>SPIROCERCOSIS</b></td><td><b><i>Spirocerca lupi</i></b> in the <b>dog's OESOPHAGUS</b> (beetle intermediate host) &rarr; firm nodules with a central pore that may transform into <b>FIBROSARCOMA or OSTEOSARCOMA</b>; also <b>aortic scarring/aneurysm</b> and <b>spondylitis of the caudal thoracic vertebrae</b></td></tr>\n          <tr><td><b>Filariasis</b></td><td><b><i>Setaria</i></b> &mdash; harmless in the peritoneum but <b>aberrant migration into the spinal cord causes CEREBROSPINAL NEMATODIASIS (\"KUMRI\") in goats and horses in India</b> &mdash; sudden hind-limb weakness. <b><i>Dirofilaria immitis</i></b> &mdash; heartworm in the <b>right ventricle and pulmonary artery</b>, pulmonary endarteritis, <b>caval syndrome</b>. <b><i>Parafilaria bovicola</i></b> &mdash; \"summer bleeding\" nodules on cattle skin. <b><i>Onchocerca</i></b> &mdash; ligament and skin</td></tr>\n          <tr><td><b>Hookworm</b></td><td><b><i>Ancylostoma caninum</i></b> &mdash; severe <b>iron-deficiency anaemia and melena</b> in pups; percutaneous, transmammary and oral routes</td></tr>\n          <tr><td><b>Tapeworms</b></td><td><b><i>Cysticercus bovis</i></b> (<i>Taenia saginata</i>) in beef <b>muscle, heart and tongue</b> &mdash; \"measly beef\". <b><i>Cysticercus cellulosae</i></b> (<i>T. solium</i>) in pork &mdash; and <b>human neurocysticercosis</b>. <b><i>Echinococcus granulosus</i></b> &rarr; <b>HYDATID CYST</b> in the liver and lung of herbivores and man; the <b>dog is the definitive host</b>; the cyst has a laminated membrane and brood capsules with <b>hydatid sand</b>. <b><i>Coenurus cerebralis</i></b> (<i>T. multiceps</i>) &rarr; <b>\"GID\"/sturdy in sheep brain</b>. <i>Moniezia</i> in ruminants, usually mild</td></tr>\n          <tr><td><b>Coccidiosis</b></td><td><b><i>Eimeria zuernii</i> and <i>E. bovis</i></b> in calves &mdash; <b>haemorrhagic typhlocolitis</b>, bloody diarrhoea with <b>tenesmus and rectal prolapse</b>; the parasite destroys the epithelium of the caecum and colon</td></tr>\n          <tr><td><b>Toxoplasmosis</b></td><td><b><i>Toxoplasma gondii</i></b>; the <b>CAT is the only definitive host</b> (sheds oocysts). Causes <b>abortion in SHEEP with small WHITE NECROTIC FOCI scattered over the COTYLEDONS (\"strawberry jam\" placenta)</b>, fetal brain and liver necrosis; encephalitis and pneumonia in other species. <b>Zoonosis</b> &mdash; dangerous in pregnancy</td></tr>\n          <tr><td><b>Cryptosporidiosis</b></td><td><b><i>Cryptosporidium parvum</i></b> &mdash; a major cause of <b>calf diarrhoea at 1&ndash;3 weeks</b>; attaches to the microvillous border of the ileum &rarr; <b>villous atrophy and malabsorption</b>. Oocysts are <b>acid-fast (modified Ziehl&ndash;Neelsen)</b>; <b>water-borne ZOONOSIS, resistant to chlorine</b></td></tr>\n        </table>"
  },
  {
   "id": "unit-4-b21",
   "n": 21,
   "page": 6,
   "tone": "t6",
   "title": "NUTRITIONAL IMBALANCES",
   "stars": 2,
   "kinds": [
    "table"
   ],
   "html": "<b class=\"k\">Energy &amp; macronutrients</b> &mdash; <b>Carbohydrate excess</b> &rarr; <b>ruminal lactic acidosis</b> (grain overload) with rumenitis and liver abscess; <b>carbohydrate deficit</b> &rarr; <b>ketosis</b> and pregnancy toxaemia. <b>Protein deficiency</b> &rarr; hypoproteinaemic <b>oedema and ascites</b>, poor growth, immunosuppression. <b>Fat</b> &mdash; essential fatty acid deficiency gives scaly skin; <b>steatitis (\"yellow fat disease\")</b> occurs in cats fed oily fish with <b>vitamin E deficiency</b>.\n        <table class=\"tg\">\n          <tr><th>Mineral</th><th>Deficiency disease</th></tr>\n          <tr><td><b>Ca / P</b></td><td><b>Rickets</b> (young), <b>osteomalacia</b> (adult), <b>fibrous osteodystrophy</b> when Ca:P is wrong, <b>milk fever</b> (parturient hypocalcaemia)</td></tr>\n          <tr><td><b>Magnesium</b></td><td><b>HYPOMAGNESAEMIC TETANY</b> (\"grass tetany/staggers\") &mdash; lush spring grass, lactating cows; tetany, convulsions, sudden death</td></tr>\n          <tr><td><b>COPPER</b></td><td><b>SWAY BACK / enzootic ataxia</b> in lambs (cerebral white-matter cavitation, spinal demyelination) · <b>achromotrichia</b> &mdash; loss of coat colour with <b>\"SPECTACLE EYE\"</b> in cattle · anaemia · <b>\"falling disease\"</b> from myocardial fibrosis · poor wool crimp (\"steely wool\"). Made worse by <b>excess molybdenum</b> and sulphate</td></tr>\n          <tr><td><b>Cobalt</b></td><td>Needed for vitamin B<sub>12</sub> synthesis in the rumen &rarr; <b>\"pine\"/wasting</b>, and <b>WHITE LIVER DISEASE of lambs</b> (fatty liver)</td></tr>\n          <tr><td><b>Iodine</b></td><td><b>GOITRE</b> &mdash; enlarged thyroid; newborns <b>weak, HAIRLESS, stillborn with a swollen neck</b>; goitrogens in brassicas and soybean</td></tr>\n          <tr><td><b>SELENIUM (+ vit E)</b></td><td><b>WHITE MUSCLE DISEASE</b>, <b>hepatosis dietetica</b> of pigs, <b>MULBERRY HEART DISEASE</b> of pigs, exudative diathesis of chicks, retained placenta, poor immunity</td></tr>\n          <tr><td><b>Zinc</b></td><td><b>PARAKERATOSIS</b> of pigs &mdash; symmetrical crusty scaly skin; thymic atrophy, poor wound healing</td></tr>\n          <tr><td><b>Iron</b></td><td><b>Baby-pig anaemia</b> &mdash; microcytic hypochromic; the classic reason for iron injection at birth</td></tr>\n        </table>\n        <table class=\"tg\">\n          <tr><th>Vitamin</th><th>Deficiency lesion</th></tr>\n          <tr><td><b>A</b></td><td><b>Night blindness &rarr; xerophthalmia</b>, <b>SQUAMOUS METAPLASIA and keratinisation</b> of epithelium, <b>hydrocephalus and blindness from stenosis of the optic canal in calves</b>, pituitary cysts, poor immunity, papilloedema</td></tr>\n          <tr><td><b>D</b></td><td><b>Rickets and osteomalacia</b></td></tr>\n          <tr><td><b>E</b></td><td>See selenium; also <b>steatitis</b> and reproductive failure</td></tr>\n          <tr><td><b>K</b></td><td><b>Bleeding</b> &mdash; sweet clover (dicoumarol), warfarin, prolonged sulphonamide use</td></tr>\n          <tr><td><b>B<sub>1</sub> thiamine</b></td><td><b>POLIOENCEPHALOMALACIA</b> in ruminants (thiaminase, high grain, amprolium, bracken fern in horses); <b>\"Chastek paralysis\"</b> in fur animals and cats fed <b>raw fish thiaminase</b></td></tr>\n          <tr><td><b>B<sub>2</sub> riboflavin</b></td><td><b>\"CURLED-TOE PARALYSIS\"</b> of chicks &mdash; peripheral nerve demyelination</td></tr>\n          <tr><td><b>Niacin</b></td><td><b>\"BLACK TONGUE\"</b> of dogs, pellagra-like; maize-based diets</td></tr>\n          <tr><td><b>Choline / Manganese</b></td><td><b>PEROSIS (\"slipped tendon\")</b> in chicks</td></tr>\n          <tr><td><b>C</b></td><td><b>SCURVY</b> &mdash; only in <b>GUINEA PIGS, primates and fish</b>, which cannot synthesise it; haemorrhage, poor collagen, loose teeth</td></tr>\n        </table>"
  },
  {
   "id": "unit-4-b22",
   "n": 22,
   "page": 6,
   "tone": "t4",
   "title": "METABOLIC DISEASES",
   "stars": 2,
   "kinds": [
    "table"
   ],
   "html": "<table class=\"ta\">\n          <tr><th>Disease</th><th>Mechanism &amp; lesion</th></tr>\n          <tr><td><b>PREGNANCY TOXAEMIA</b></td><td><b>Ewes and does in LATE gestation carrying twins/triplets</b>; negative energy balance &rarr; fat mobilisation &rarr; <b>ketosis and severe FATTY LIVER</b> (huge, pale yellow, greasy, friable). Ketonuria, hypoglycaemia, blindness, recumbency. Also seen in fat queens</td></tr>\n          <tr><td><b>Ketosis of dairy cattle</b></td><td>Early lactation, high yield; ketone smell on breath and milk, fatty liver, low milk yield; <b>Rothera's test on urine/milk</b></td></tr>\n          <tr><td><b>POST-PARTURIENT HAEMOGLOBINURIA ★</b></td><td><b>HYPOPHOSPHATAEMIA</b> in high-yielding <b>buffaloes and cows within a few weeks of calving</b>, often on rice straw/berseem with low phosphorus. <b>Intravascular haemolysis &rarr; haemoglobinuria, severe anaemia, pale mucosae, jaundice, pale fatty liver.</b> Responds to <b>phosphorus</b> therapy. Distinguish from babesiosis (which has parasites on the smear and fever)</td></tr>\n          <tr><td><b>Hypomagnesaemic tetany</b></td><td>As above; <b>often no gross lesion</b> &mdash; diagnosis from serum/CSF magnesium and history</td></tr>\n          <tr><td><b>AZOTURIA</b></td><td><b>Exertional rhabdomyolysis</b> of horses: full grain ration during rest, then sudden work. <b>Hard, painful, swollen gluteal muscles</b>, sweating, reluctance to move, <b>coffee-coloured MYOGLOBINURIC urine</b>; pale streaked muscle at necropsy; ↑ CK and AST. <b>Plasma remains clear</b></td></tr>\n          <tr><td><b>SWAY BACK / enzootic ataxia</b></td><td><b>Copper</b> deficiency in lambs &mdash; congenital form present at birth, delayed form later; white-matter cavitation and demyelination</td></tr>\n          <tr><td><b>PICA</b></td><td>Depraved appetite from <b>phosphorus and mineral deficiency</b>; chewing bones and soil &rarr; leads to <b>BOTULISM</b> and foreign-body/hardware disease</td></tr>\n          <tr><td><b>Rheumatism-like syndrome</b></td><td>Stiffness, shifting lameness and joint pain without a single defined agent; polyarthritis, periarticular fibrosis</td></tr>\n        </table>"
  },
  {
   "id": "unit-4-b23",
   "n": 23,
   "page": 6,
   "tone": "t5",
   "title": "TOXICITIES",
   "stars": 3,
   "kinds": [
    "table"
   ],
   "html": "<table class=\"tc\">\n          <tr><th>Poison</th><th>The lesion / clue that names it</th></tr>\n          <tr><td><b>ARSENIC</b></td><td>Inorganic: severe <b>haemorrhagic gastroenteritis</b>, profuse <b>\"RICE-WATER\" diarrhoea</b>, <b>bright red velvety abomasal/gastric mucosa</b>, garlicky odour of the ingesta, fatty liver and tubular nephrosis. Organic phenylarsonic feed additives in pigs &rarr; <b>peripheral nerve demyelination, blindness and ataxia</b></td></tr>\n          <tr><td><b>COPPER (chronic)</b></td><td><b>SHEEP</b> are highly susceptible; copper accumulates in the liver, then a stressor triggers a sudden <b>HAEMOLYTIC CRISIS</b> &mdash; jaundice, haemoglobinuria, <b>enlarged friable yellow-orange liver</b> and dark <b>\"GUN-METAL\" KIDNEYS</b>. Confirm by liver and kidney copper assay</td></tr>\n          <tr><td><b>LEAD</b></td><td><b>Commonest in cattle and calves</b> &mdash; discarded batteries, paint, used engine oil. <b>Nervous disease: blindness, head-pressing, bellowing, convulsions, champing of jaws</b>; also anaemia. <b>Blood smear: BASOPHILIC STIPPLING with nucleated red cells</b>. <b>Acid-fast intranuclear inclusions in renal tubular epithelium.</b> Confirm on blood, liver and kidney lead</td></tr>\n          <tr><td><b>MERCURY</b></td><td><b>Organic</b> (mercury-treated <b>seed grain</b>) &rarr; neurological &mdash; ataxia, blindness, laminar cortical necrosis, peripheral neuropathy. <b>Inorganic</b> &rarr; corrosive gastroenteritis + <b>severe renal tubular necrosis</b></td></tr>\n          <tr><td><b>CADMIUM</b></td><td><b>Nephrotoxic</b> (proximal tubule), <b>testicular degeneration and necrosis</b>, anaemia, poor growth, interferes with zinc and copper</td></tr>\n          <tr><td><b>STRYCHNINE</b></td><td><b>Blocks the inhibitory transmitter GLYCINE in the spinal cord</b> &rarr; violent <b>TETANIC convulsions with extensor rigidity, \"sawhorse\" stance and risus sardonicus, TRIGGERED BY NOISE, LIGHT OR TOUCH</b>; the animal stays <b>conscious</b>; death from respiratory paralysis; <b>rigor mortis sets in very quickly</b>. Essentially <b>no gross lesions</b> &mdash; analyse stomach content</td></tr>\n          <tr><td><b>NITRATE / NITRITE ★</b></td><td>Nitrate in oat hay, sorghum, fertiliser and water is <b>reduced to NITRITE in the rumen</b>; nitrite converts haemoglobin to <b>METHAEMOGLOBIN</b>, which cannot carry oxygen. <b>Blood and tissues are CHOCOLATE-BROWN</b>, mucosae are muddy-brown/cyanotic, dyspnoea, rapid death; also abortion. <b>Antidote: METHYLENE BLUE</b> (and ascorbic acid)</td></tr>\n          <tr><td><b>HYDROCYANIC ACID ★</b></td><td><b>Cyanogenic glycosides</b> in <b>young, wilted, drought-stressed or frosted SORGHUM/Johnson grass and cassava</b>. Cyanide blocks <b>cytochrome oxidase</b>, so tissues cannot use oxygen. <b>Blood stays BRIGHT CHERRY-RED</b>, mucosae bright red, <b>bitter-almond odour</b> of the rumen contents, death in minutes. <b>Antidote: sodium nitrite followed by sodium thiosulphate</b></td></tr>\n          <tr><td><b>FLUORIDE</b></td><td><b>Dental fluorosis</b> &mdash; <b>mottled, chalky, pitted, brown-stained, rapidly worn teeth, but ONLY those teeth that were developing during exposure</b>; <b>exostoses (bony outgrowths) on the mandible and metatarsals</b>, stiffness and lameness. Sources: industrial fallout and high-fluoride bore-well water &mdash; endemic in parts of India</td></tr>\n          <tr><td><b>SELENIUM (excess)</b></td><td><b>\"ALKALI DISEASE\"</b> (chronic) &mdash; loss of hair from the <b>mane and tail</b>, and <b>deformed, sloughing hooves with a circular break at the coronet</b>. <b>\"BLIND STAGGERS\"</b> (subacute) &mdash; wandering, blindness, paralysis. From selenium-accumulating plants on seleniferous soil (Punjab/Haryana belt)</td></tr>\n          <tr><td><b>OXALATES</b></td><td>In <b><i>Oxalis</i>, <i>Setaria</i>, <i>Halogeton</i>, amaranthus, sugar beet tops</b>. Bind calcium &rarr; <b>acute hypocalcaemia and tetany</b>, and <b>calcium oxalate crystals in the renal tubules &rarr; NEPHROSIS and renal failure</b>. Chronic low intake with grass leads to bone changes</td></tr>\n          <tr><td><b>ORGANOPHOSPHATE / CARBAMATE</b></td><td><b>Inhibit acetylcholinesterase</b> &rarr; acetylcholine accumulates. <b>Muscarinic \"SLUD\"</b> &mdash; <b>S</b>alivation, <b>L</b>acrimation, <b>U</b>rination, <b>D</b>efecation, plus <b>miosis, bradycardia, bronchoconstriction and pulmonary oedema</b>; nicotinic &mdash; muscle tremor then paralysis; CNS &mdash; convulsions. Diagnosis: <b>low blood cholinesterase</b>. <b>Antidote: ATROPINE; add 2-PAM (pralidoxime) for organophosphates but NOT for carbamates</b></td></tr>\n          <tr><td><b>ORGANOCHLORINE</b></td><td>DDT, BHC/lindane, endosulfan &mdash; <b>CNS STIMULATION</b>: hyperexcitability, muscle tremors beginning at the head, exaggerated response to stimuli, convulsions. Highly <b>lipophilic and persistent &mdash; residues in fat and milk</b>. No specific antidote</td></tr>\n        </table>"
  },
  {
   "id": "unit-4-b24",
   "n": 24,
   "page": 6,
   "tone": "t3",
   "title": "PLANT POISONING",
   "stars": 3,
   "kinds": [
    "table"
   ],
   "html": "<table class=\"tp\">\n          <tr><th>Plant</th><th>Toxin &amp; pathology</th></tr>\n          <tr><td><b>BRACKEN FERN</b><br><i>Pteridium aquilinum</i></td><td>Toxin <b>PTAQUILOSIDE</b> (radiomimetic) plus <b>THIAMINASE</b>. Three quite different pictures &mdash; know all three:<br><b>CATTLE (acute)</b> &mdash; <b>bone marrow APLASIA &rarr; pancytopenia, thrombocytopenia and a haemorrhagic syndrome</b> with bleeding from all orifices and secondary infection.<br><b>CATTLE (chronic) &rarr; ENZOOTIC HAEMATURIA</b> &mdash; bladder <b>haemangiomas and carcinomas</b> with persistent haematuria (bovine papillomavirus acts as a co-factor).<br><b>HORSES</b> &mdash; <b>thiaminase &rarr; thiamine deficiency</b>, ataxia, \"bracken staggers\".<br><b>SHEEP</b> &mdash; <b>\"BRIGHT BLINDNESS\"</b> from progressive retinal degeneration</td></tr>\n          <tr><td><b>GOSSYPOL</b><br>(cottonseed cake)</td><td>A polyphenol in <b>cottonseed</b>; toxic to <b>monogastrics and young ruminants</b> (adult rumen binds it). <b>Cardiotoxic and hepatotoxic</b> &rarr; myocardial degeneration and heart failure, giving <b>generalised oedema: pulmonary oedema, hydrothorax, hydropericardium and ascites</b>; centrilobular hepatic necrosis; anaemia; <b>reduced fertility in males</b>; in layers, <b>olive-green/discoloured yolks and mottled eggs</b></td></tr>\n          <tr><td><b>RATTI</b><br><i>Abrus precatorius</i></td><td>The red-and-black \"crab's-eye\" seed. Toxin <b>ABRIN</b>, a <b>toxalbumin / ribosome-inactivating protein</b> (like ricin). In India the crushed seed paste is made into a <b>\"SUI\" (needle) and driven under the skin to poison cattle deliberately</b> &mdash; a <b>veterolegal</b> problem. Produces <b>local oedema and necrosis at the site</b>, then <b>severe haemorrhagic gastroenteritis, agglutination and haemolysis of red cells, hepatic and renal degeneration</b> and death in 1&ndash;3 days. At necropsy search the skin for the puncture and recover the needle</td></tr>\n          <tr><td><b>LANTANA</b><br><i>Lantana camara</i></td><td>Toxin <b>LANTADENE A (and B)</b> &mdash; the classic Indian hepatotoxin of cattle, buffalo and sheep browsing the weed. Causes <b>intrahepatic CHOLESTASIS and hepatocellular necrosis</b> &rarr; <b>jaundice</b>, <b>ruminal stasis and severe constipation</b>, and above all <b>HEPATOGENOUS (Type III) PHOTOSENSITIZATION</b> because <b>phylloerythrin</b> is no longer excreted: crusting, peeling and necrosis of <b>the muzzle (\"PINK NOSE\"), eyelids, ears and any unpigmented skin</b>. Also renal tubular damage. Liver is enlarged, yellow-orange and firm; gall bladder distended</td></tr>\n        </table>"
  },
  {
   "id": "unit-4-b25",
   "n": 25,
   "page": 6,
   "tone": "t4",
   "title": "BLANK-FILL DRILL — Unit 4",
   "stars": 0,
   "kinds": [
    "drill"
   ],
   "html": "",
   "drill": true
  }
 ],
 "drill": [
  {
   "id": "unit-4-d001",
   "html": "FMD virus is an <u>Aphthovirus</u> of family <u>Picornaviridae</u> with <u>7</u> serotypes"
  },
  {
   "id": "unit-4-d002",
   "html": "Serotypes of FMD circulating in India are <u>O, A and Asia-1</u>"
  },
  {
   "id": "unit-4-d003",
   "html": "Tiger heart in calves occurs in <u>FMD</u>"
  },
  {
   "id": "unit-4-d004",
   "html": "Of the vesicular diseases, only <u>vesicular stomatitis</u> affects horses"
  },
  {
   "id": "unit-4-d005",
   "html": "Zebra striping of the colon is seen in <u>rinderpest</u> and <u>PPR</u>"
  },
  {
   "id": "unit-4-d006",
   "html": "The microscopic hallmark of malignant catarrhal fever is <u>necrotising lymphocytic vasculitis</u>"
  },
  {
   "id": "unit-4-d007",
   "html": "Bluetongue is spread by <u>Culicoides</u> and shows haemorrhage at the base of the <u>pulmonary artery</u>"
  },
  {
   "id": "unit-4-d008",
   "html": "IBR virus becomes latent in the <u>trigeminal ganglion</u>"
  },
  {
   "id": "unit-4-d009",
   "html": "Persistently infected BVD calves arise from <u>non-cytopathic</u> infection at <u>40–120</u> days of gestation"
  },
  {
   "id": "unit-4-d010",
   "html": "Linear oesophageal erosions suggest <u>mucosal disease</u>"
  },
  {
   "id": "unit-4-d011",
   "html": "EIA is diagnosed by the <u>Coggins</u> test and shows <u>sideroleukocytes</u>"
  },
  {
   "id": "unit-4-d012",
   "html": "EHV-1 abortion produces a <u>fresh</u> (non-autolysed) fetus with hepatic <u>intranuclear</u> inclusions"
  },
  {
   "id": "unit-4-d013",
   "html": "Button ulcers, marginal splenic infarcts and turkey-egg kidney = <u>classical swine fever</u>"
  },
  {
   "id": "unit-4-d014",
   "html": "Rabies virus travels to the CNS <u>centripetally</u> along <u>peripheral nerves</u>"
  },
  {
   "id": "unit-4-d015",
   "html": "The gold-standard test for rabies is the <u>fluorescent antibody test</u> on brain"
  },
  {
   "id": "unit-4-d016",
   "html": "Hard pad and enamel hypoplasia occur in <u>canine distemper</u>"
  },
  {
   "id": "unit-4-d017",
   "html": "Gall-bladder wall oedema with Cowdry type A inclusions = <u>infectious canine hepatitis</u>"
  },
  {
   "id": "unit-4-d018",
   "html": "Canine parvovirus destroys the intestinal <u>crypts</u>; rotavirus destroys the <u>villus tips</u>"
  },
  {
   "id": "unit-4-d019",
   "html": "The wheelbarrow test is used for <u>jaagsiekte</u> (ovine pulmonary adenocarcinoma)"
  },
  {
   "id": "unit-4-d020",
   "html": "Prions consist of <u>protein</u> only and cause <u>status spongiosus</u> with <u>no</u> inflammation"
  },
  {
   "id": "unit-4-d021",
   "html": "Bollinger bodies occur in <u>fowl pox</u>; Guarnieri bodies in <u>vaccinia</u>"
  },
  {
   "id": "unit-4-d022",
   "html": "Orf is caused by a <u>parapoxvirus</u> and is <u>zoonotic</u>"
  },
  {
   "id": "unit-4-d023",
   "html": "Pearl disease refers to serosal <u>tuberculosis</u> in cattle"
  },
  {
   "id": "unit-4-d024",
   "html": "Johne's disease shows <u>no</u> caseation and <u>no</u> ulceration, unlike tuberculosis"
  },
  {
   "id": "unit-4-d025",
   "html": "Blackleg is <u>endogenous</u> and needs no wound; malignant oedema is <u>exogenous</u>"
  },
  {
   "id": "unit-4-d026",
   "html": "Black disease requires liver damage by immature <u>Fasciola</u>"
  },
  {
   "id": "unit-4-d027",
   "html": "Pulpy kidney of lambs is caused by <u>Clostridium perfringens type D</u> and its <u>epsilon</u> toxin"
  },
  {
   "id": "unit-4-d028",
   "html": "Botulism causes <u>flaccid</u> paralysis; tetanus causes <u>spastic</u> paralysis"
  },
  {
   "id": "unit-4-d029",
   "html": "Tetanospasmin blocks the release of <u>glycine and GABA</u>"
  },
  {
   "id": "unit-4-d030",
   "html": "Star-shaped nasal scars and farcy buds occur in <u>glanders</u>; test = <u>mallein</u>"
  },
  {
   "id": "unit-4-d031",
   "html": "Haemorrhagic septicaemia is caused by <u>Pasteurella multocida</u> serotypes <u>B:2 and E:2</u>"
  },
  {
   "id": "unit-4-d032",
   "html": "Shipping fever is caused by <u>Mannheimia haemolytica</u>"
  },
  {
   "id": "unit-4-d033",
   "html": "Diamond-shaped skin lesions = <u>swine erysipelas</u>"
  },
  {
   "id": "unit-4-d034",
   "html": "Brucella localises in the placenta because of <u>erythritol</u>; screening test = <u>RBPT</u>"
  },
  {
   "id": "unit-4-d035",
   "html": "Circling disease from brain-stem microabscesses = <u>listeriosis</u>, from feeding <u>silage</u>"
  },
  {
   "id": "unit-4-d036",
   "html": "Paratyphoid nodules in the liver indicate <u>salmonellosis</u>"
  },
  {
   "id": "unit-4-d037",
   "html": "Oedema disease of pigs is caused by <u>Shiga toxin 2e</u> and affects the <u>eyelids and gastric cardia</u>"
  },
  {
   "id": "unit-4-d038",
   "html": "Marbled lung with sequestra = <u>CBPP</u>; cuffing pneumonia = <u>Mycoplasma hyopneumoniae</u>"
  },
  {
   "id": "unit-4-d039",
   "html": "Anaplasmosis gives anaemia and jaundice but <u>no</u> haemoglobinuria"
  },
  {
   "id": "unit-4-d040",
   "html": "Morulae in monocytes indicate <u>Ehrlichia canis</u>"
  },
  {
   "id": "unit-4-d041",
   "html": "Microsporum canis fluoresces under the <u>Wood's lamp</u>"
  },
  {
   "id": "unit-4-d042",
   "html": "Aspergillus hyphae are <u>septate</u>; zygomycete hyphae are <u>non-septate</u>"
  },
  {
   "id": "unit-4-d043",
   "html": "Cryptococcus capsule is shown by <u>India ink</u> and stains with <u>mucicarmine</u>"
  },
  {
   "id": "unit-4-d044",
   "html": "Nasal polyps with sporangia = <u>rhinosporidiosis</u>"
  },
  {
   "id": "unit-4-d045",
   "html": "Aflatoxin targets the <u>liver</u>; ochratoxin the <u>kidney</u>; trichothecenes the <u>gut and bone marrow</u>"
  },
  {
   "id": "unit-4-d046",
   "html": "Chronic aflatoxicosis causes <u>bile duct hyperplasia</u> and <u>megalocytosis</u>"
  },
  {
   "id": "unit-4-d047",
   "html": "Degnala disease follows feeding mouldy <u>paddy straw</u> and causes <u>dry gangrene of the extremities</u>"
  },
  {
   "id": "unit-4-d048",
   "html": "Ergot alkaloids cause gangrene by <u>vasoconstriction</u>; Claviceps fusiformis on <u>bajra</u> causes agalactia"
  },
  {
   "id": "unit-4-d049",
   "html": "Babesia appears as <u>pear-shaped pairs</u>; Theileria schizonts are <u>Koch's blue bodies</u>"
  },
  {
   "id": "unit-4-d050",
   "html": "Theileria annulata is transmitted by <u>Hyalomma</u> ticks and causes <u>punched-out abomasal ulcers</u>"
  },
  {
   "id": "unit-4-d051",
   "html": "Surra is caused by <u>Trypanosoma evansi</u> spread <u>mechanically</u> by Tabanus flies"
  },
  {
   "id": "unit-4-d052",
   "html": "Pipe-stem liver is chronic <u>fasciolosis</u>; the snail host is <u>Lymnaea</u>"
  },
  {
   "id": "unit-4-d053",
   "html": "In amphistomiasis the <u>immature</u> flukes in the <u>duodenum</u> cause the fatal disease"
  },
  {
   "id": "unit-4-d054",
   "html": "Milk spots on the pig liver are caused by <u>Ascaris suum</u> larvae"
  },
  {
   "id": "unit-4-d055",
   "html": "Haemonchus contortus is the <u>barber's pole</u> worm of the <u>abomasum</u>"
  },
  {
   "id": "unit-4-d056",
   "html": "Spirocerca lupi nodules may become <u>fibrosarcoma</u> or <u>osteosarcoma</u>"
  },
  {
   "id": "unit-4-d057",
   "html": "Kumri in goats and horses is caused by aberrant <u>Setaria</u> larvae"
  },
  {
   "id": "unit-4-d058",
   "html": "The definitive host of Echinococcus granulosus is the <u>dog</u>; the cyst contains <u>hydatid sand</u>"
  },
  {
   "id": "unit-4-d059",
   "html": "Coenurus cerebralis causes <u>gid</u> in sheep"
  },
  {
   "id": "unit-4-d060",
   "html": "Toxoplasma abortion in sheep shows white necrotic foci on the <u>cotyledons</u>; definitive host = <u>cat</u>"
  },
  {
   "id": "unit-4-d061",
   "html": "Cryptosporidium oocysts are <u>acid-fast</u> and resistant to <u>chlorine</u>"
  },
  {
   "id": "unit-4-d062",
   "html": "Curled-toe paralysis in chicks = <u>riboflavin</u> deficiency; perosis = <u>manganese/choline</u>"
  },
  {
   "id": "unit-4-d063",
   "html": "Black tongue in dogs = <u>niacin</u> deficiency"
  },
  {
   "id": "unit-4-d064",
   "html": "Scurvy occurs only in <u>guinea pigs, primates and fish</u>"
  },
  {
   "id": "unit-4-d065",
   "html": "Spectacle eye in cattle indicates <u>copper</u> deficiency"
  },
  {
   "id": "unit-4-d066",
   "html": "White liver disease of lambs = <u>cobalt</u> deficiency"
  },
  {
   "id": "unit-4-d067",
   "html": "Post-parturient haemoglobinuria is caused by <u>hypophosphataemia</u>"
  },
  {
   "id": "unit-4-d068",
   "html": "Rice-water diarrhoea with a red velvety abomasum = <u>arsenic</u> poisoning"
  },
  {
   "id": "unit-4-d069",
   "html": "Gun-metal kidneys and a yellow friable liver in sheep = chronic <u>copper</u> poisoning"
  },
  {
   "id": "unit-4-d070",
   "html": "Basophilic stippling with nucleated RBCs in a blind, head-pressing calf = <u>lead</u> poisoning"
  },
  {
   "id": "unit-4-d071",
   "html": "Strychnine blocks <u>glycine</u>; convulsions are triggered by <u>noise, light or touch</u>"
  },
  {
   "id": "unit-4-d072",
   "html": "Nitrite poisoning gives <u>chocolate-brown</u> blood; antidote <u>methylene blue</u>"
  },
  {
   "id": "unit-4-d073",
   "html": "Cyanide poisoning gives <u>bright cherry-red</u> blood; antidote <u>sodium nitrite + sodium thiosulphate</u>"
  },
  {
   "id": "unit-4-d074",
   "html": "Alkali disease is chronic <u>selenium</u> poisoning with loss of <u>mane and tail</u> hair"
  },
  {
   "id": "unit-4-d075",
   "html": "Organophosphates inhibit <u>acetylcholinesterase</u>; antidote <u>atropine</u> plus <u>2-PAM</u>"
  },
  {
   "id": "unit-4-d076",
   "html": "Bracken fern toxin is <u>ptaquiloside</u>; it causes <u>bright blindness</u> in sheep"
  },
  {
   "id": "unit-4-d077",
   "html": "Gossypol comes from <u>cottonseed</u> and is <u>cardiotoxic</u>"
  },
  {
   "id": "unit-4-d078",
   "html": "Ratti seed toxin is <u>abrin</u>, used in the veterolegal <u>sui</u> (needle) method"
  },
  {
   "id": "unit-4-d079",
   "html": "Lantana toxin is <u>lantadene A</u> and causes <u>hepatogenous photosensitization</u>"
  }
 ]
};

revisionData["unit-5"] = {
 "id": "unit-5",
 "no": 5,
 "title": "Avian Pathology",
 "paper": "paper-2",
 "icon": "bird",
 "pages": 5,
 "pageTitles": [
  "Avian Inflammation &amp; Viral Diseases I",
  "Tumour Viruses &amp; Viral Diseases II",
  "Bacterial · Mycoplasmal · Chlamydial Diseases",
  "Mycoses · Mycotoxicoses · Parasites",
  "Nutritional Deficiencies · Miscellaneous Conditions · Vices · Drill"
 ],
 "sheet": "revision/unit-5.html",
 "boxes": [
  {
   "id": "unit-5-b01",
   "n": 1,
   "page": 1,
   "tone": "t1",
   "title": "WHY BIRDS ARE DIFFERENT",
   "stars": 3,
   "kinds": [
    "table",
    "trap"
   ],
   "html": "<div class=\"trap\"><span class=\"lbl\">The single most important avian fact</span> The bird's granulocyte is the <b>HETEROPHIL</b>, not the neutrophil. It has <b>rod- or spindle-shaped eosinophilic granules</b> and, critically, it <b>LACKS MYELOPEROXIDASE and lysozyme</b>. Therefore avian purulent inflammation <b>cannot liquefy the debris</b> and forms a <b>DRY, FIRM, CASEOUS (inspissated) mass instead of flowing pus</b>. This is why the \"abscess\" of a bird is always a <b>caseous nodule or plug</b> — in the trachea, air sac, or joint.</div>\n        <table>\n          <tr><th>Feature</th><th>Bird</th></tr>\n          <tr><td><b>Red cells</b></td><td><b>Nucleated and oval</b>; <b>THROMBOCYTES</b> replace platelets (also nucleated)</td></tr>\n          <tr><td><b>Lymph nodes</b></td><td><b>ABSENT in chickens</b>. Instead: <b>BURSA OF FABRICIUS (B cells)</b>, <b>THYMUS (T cells)</b>, caecal tonsils, Peyer's patches, Harderian gland, diffuse lymphoid aggregates</td></tr>\n          <tr><td><b>Nitrogen waste</b></td><td><b>URIC ACID (uricotelic)</b> — poorly soluble, so any renal failure or dehydration precipitates it as <b>GOUT</b></td></tr>\n          <tr><td><b>Kidney</b></td><td>Has a <b>RENAL PORTAL SYSTEM</b> — drugs injected in the leg reach the kidney first</td></tr>\n          <tr><td><b>Air sacs</b></td><td><b>Thin and almost avascular</b> — so inflammation there is poorly cleared and <b>airsacculitis persists</b> as caseous sheets</td></tr>\n          <tr><td><b>Other</b></td><td><b>No diaphragm</b>, no sweat glands (heat stress matters), medullary bone as a calcium store in layers</td></tr>\n        </table>"
  },
  {
   "id": "unit-5-b02",
   "n": 2,
   "page": 1,
   "tone": "t5",
   "title": "RANIKHET DISEASE (Newcastle disease)",
   "stars": 3,
   "kinds": [
    "trap"
   ],
   "html": "<ul class=\"sm\">\n          <li><b>Avian paramyxovirus-1 (APMV-1)</b>, Paramyxoviridae. <b>Notifiable</b>. The most important poultry disease of India</li>\n          <li><b>Pathotypes by virulence:</b> <b>LENTOGENIC</b> (mild — <b>F1, B1, LaSota</b> vaccine strains) · <b>MESOGENIC</b> (moderate — <b>R2B \"Mukteswar\"</b>, Komarov, used as boosters) · <b>VELOGENIC</b> (severe — <b>viscerotropic VVND</b> and <b>neurotropic</b>)</li>\n        </ul>\n        <div class=\"trap\"><span class=\"lbl\">The three lesions that name it ★</span>\n          <b>① HAEMORRHAGE / NECROTIC ULCERS ON THE TIPS OF THE PROVENTRICULAR GLANDS</b> — pinpoint red dots in a row at the base of the papillae<br>\n          <b>② NECROSIS AND ULCERATION OF THE CAECAL TONSILS AND PEYER'S PATCHES</b> — raised, \"boat-shaped\" or button-like ulcers along the intestine<br>\n          <b>③ HAEMORRHAGIC TRACHEITIS</b> and congestion of the whole respiratory tract</div>\n        <b>Also:</b> greenish watery diarrhoea, gasping, <b>NERVOUS SIGNS — torticollis (twisted neck), paralysis of legs and wings, opisthotonus</b>, sudden drop in egg production with <b>soft-shelled and depigmented eggs</b>, ovarian follicle haemorrhage and rupture (<b>yolk peritonitis</b>).<br>\n        <b>Micro:</b> non-suppurative encephalomyelitis — <b>perivascular cuffing, neuronal degeneration, gliosis</b>. <b>Diagnosis:</b> HA/HI test, virus isolation in embryonated eggs, RT-PCR."
  },
  {
   "id": "unit-5-b03",
   "n": 3,
   "page": 1,
   "tone": "t4",
   "title": "IBD (Gumboro) &amp; CHICKEN INFECTIOUS ANAEMIA",
   "stars": 2,
   "kinds": [
    "table"
   ],
   "html": "<table class=\"ta\">\n          <tr><th>Disease</th><th>Agent &amp; lesions</th></tr>\n          <tr><td><b>INFECTIOUS BURSAL DISEASE</b><br>(Gumboro)</td><td><b>Birnavirus</b> (double-stranded RNA, two segments); extremely <b>resistant in the environment</b>. Affects chicks of about <b>3–6 weeks</b>, when the bursa is at its largest.<br><b>Target = BURSA OF FABRICIUS:</b> first <b>swollen to 2–3× normal, oedematous, with a yellow gelatinous transudate on the serosa</b>, often <b>haemorrhagic (\"strawberry bursa\")</b>; then by about <b>day 8 it ATROPHIES</b> and becomes small and grey.<br><b>\"PAINT-BRUSH\" HAEMORRHAGES in the thigh and pectoral muscles</b> are the classic second lesion; also nephrosis with urate, and a dehydrated darkened carcass.<br><b>The real damage is IMMUNOSUPPRESSION</b> — B-cell destruction means <b>vaccination failures</b> against Ranikhet and other diseases</td></tr>\n          <tr><td><b>CHICKEN INFECTIOUS ANAEMIA</b></td><td><b>Gyrovirus</b>, family Circoviridae; vertically transmitted; young chicks about 2–4 weeks. Destroys <b>haemocytoblasts in the bone marrow and T-cell precursors in the thymus</b>.<br><b>APLASTIC ANAEMIA</b> — <b>pale, fatty, yellow-white bone marrow</b> (normally red), <b>PCV falls below about 27%</b>, pale carcass, <b>THYMIC ATROPHY</b>, haemorrhages in muscle and subcutis. With secondary <i>Clostridium</i> it produces <b>\"BLUE WING DISEASE\" / gangrenous dermatitis</b> of the wing tips. Strongly immunosuppressive</td></tr>\n        </table>"
  },
  {
   "id": "unit-5-b04",
   "n": 4,
   "page": 1,
   "tone": "t3",
   "title": "IB and ILT — the two respiratory viruses",
   "stars": 2,
   "kinds": [
    "table"
   ],
   "html": "<table class=\"tp\">\n          <tr><th></th><th>INFECTIOUS BRONCHITIS</th><th>INFECTIOUS LARYNGOTRACHEITIS</th></tr>\n          <tr><td>Agent</td><td><b>Coronavirus</b> (many serotypes, poor cross-protection)</td><td><b>Gallid herpesvirus-1</b></td></tr>\n          <tr><td>Severity of the cough</td><td>Gasping, sneezing, tracheal rales, watery eyes; <b>milder</b></td><td><b>SEVERE dyspnoea — the bird extends its neck and gasps, and COUGHS UP BLOOD-STAINED MUCUS</b></td></tr>\n          <tr><td>Trachea</td><td>Serous then <b>caseous plug</b> in trachea/bronchi</td><td><b>Haemorrhagic tracheitis with BLOOD-STAINED CASEOUS CASTS</b> that can suffocate the bird</td></tr>\n          <tr><td>Other systems</td><td><b>Nephropathogenic strains</b> → interstitial nephritis, swollen pale kidneys, <b>urate deposits and gout</b>. <b>Reproductive:</b> chicks infected in the first 2 weeks suffer <b>permanent oviduct damage → \"FALSE LAYER\"</b>; adults lay <b>misshapen, soft, wrinkled, rough-shelled eggs with WATERY ALBUMEN</b></td><td>Conjunctivitis, sinusitis; egg drop</td></tr>\n          <tr><td>Micro</td><td>Loss of cilia, epithelial deciliation and hyperplasia</td><td><b>SYNCYTIAL giant cells with COWDRY TYPE A INTRANUCLEAR inclusions</b> in the tracheal epithelium — diagnostic</td></tr>\n        </table>"
  },
  {
   "id": "unit-5-b05",
   "n": 5,
   "page": 1,
   "tone": "t5",
   "title": "FOWL POX &amp; AVIAN INFLUENZA",
   "stars": 0,
   "kinds": [
    "table"
   ],
   "html": "<table class=\"tc\">\n          <tr><th>Disease</th><th>Key facts</th></tr>\n          <tr><td><b>FOWL POX</b></td><td><b>Avipoxvirus</b>; spread by <b>MOSQUITOES</b> and through skin abrasions — hence seasonal.<br><b>CUTANEOUS (dry) form</b> — nodular wart-like scabs on the <b>comb, wattles, eyelids and other unfeathered skin</b>; usually mild, self-limiting.<br><b>DIPHTHERITIC (wet) form</b> — <b>yellow-white CASEOUS plaques firmly adherent to the mouth, pharynx, larynx and trachea</b>, which peel off leaving a bleeding ulcer; <b>this form kills by suffocation</b> and carries much higher mortality.<br><b>Micro:</b> epidermal hyperplasia with <b>ballooning degeneration</b> and large <b>INTRACYTOPLASMIC BOLLINGER BODIES</b> containing the elementary <b>Borrel bodies</b></td></tr>\n          <tr><td><b>AVIAN INFLUENZA</b></td><td><b>Influenza A</b>; <b>HPAI</b> strains such as <b>H5N1 and H5N8</b> — <b>notifiable and zoonotic</b>. Wild waterfowl are the reservoir.<br><b>Sudden very high mortality, often before signs are noticed.</b> <b>Cyanosis and oedema of the comb and wattles</b>, subcutaneous oedema of the head and neck, <b>haemorrhages on the shanks and feet (\"red hocks\")</b>, petechiae on the <b>proventriculus, epicardium and abdominal fat</b>, and <b>necrotic foci in the pancreas and spleen</b>. Severe egg drop.<br>Low-pathogenic strains cause only mild respiratory disease and egg drop</td></tr>\n        </table>"
  },
  {
   "id": "unit-5-b06",
   "n": 6,
   "page": 2,
   "tone": "t3",
   "title": "MAREK'S DISEASE vs LYMPHOID LEUKOSIS",
   "stars": 3,
   "kinds": [
    "table",
    "mem"
   ],
   "html": "<p class=\"sm\">This comparison is asked almost every year. Learn the table, not the paragraphs.</p>\n        <table class=\"tp\">\n          <tr><th></th><th>MAREK'S DISEASE</th><th>LYMPHOID LEUKOSIS</th></tr>\n          <tr><td><b>Virus</b></td><td><b>Gallid herpesvirus-2</b> (a <b>DNA</b> herpesvirus)</td><td><b>Avian leukosis virus</b> (an <b>RNA</b> retrovirus)</td></tr>\n          <tr><td><b>Cell type</b></td><td><b>T lymphocyte</b></td><td><b>B lymphocyte</b></td></tr>\n          <tr><td><b>Age</b></td><td><b>Younger — usually 6 weeks to 6 months</b>, can be earlier</td><td><b>Older — rarely before 16 weeks</b></td></tr>\n          <tr><td><b>PERIPHERAL NERVES</b></td><td><b>ENLARGED</b> — sciatic and brachial plexus become <b>2–3× thick, greyish-yellow, oedematous, with LOSS OF THE NORMAL CROSS-STRIATIONS; the enlargement is ASYMMETRICAL</b>. This is the single best gross criterion</td><td><b>NEVER involved</b></td></tr>\n          <tr><td><b>BURSA of Fabricius</b></td><td>Usually <b>atrophied</b>; diffuse infiltration if involved</td><td><b>ALWAYS involved — NODULAR tumour in the bursa</b>; the bursa is the site of origin</td></tr>\n          <tr><td><b>Eye</b></td><td><b>\"GREY EYE\" / ocular form</b> — depigmented iris and an <b>irregular, pinpoint, non-responsive pupil</b></td><td>Not affected</td></tr>\n          <tr><td><b>Skin</b></td><td><b>Cutaneous form</b> — enlarged <b>feather follicles</b>, the source of infectious dander</td><td>Not affected</td></tr>\n          <tr><td><b>Classic sign</b></td><td><b>\"RANGE PARALYSIS\"</b> — the bird sits with <b>one leg stretched forward and the other backward</b></td><td>Non-specific wasting, pale comb, distended abdomen</td></tr>\n          <tr><td><b>Spread</b></td><td><b>HORIZONTAL</b>, by inhaling <b>DANDER from the feather follicle epithelium</b> — the only site where fully infectious virus is produced. Highly contagious, dust survives for months</td><td>Mainly <b>VERTICAL</b> (through the egg) and by close contact; slow spread</td></tr>\n          <tr><td><b>Control</b></td><td><b>VACCINATION WORKS — HVT (turkey herpesvirus) given in ovo or at day old</b></td><td><b>No vaccine</b> — control by eradication of infected breeders</td></tr>\n        </table>\n        <div class=\"mem\"><span class=\"lbl\">One-line memory hook</span> <b>MAREK = M for Motor nerves and Marek's is the younger bird.</b> <b>LEUKOSIS = L for Later (16 weeks) and Liver/bursa Lumps, with nerves Left alone.</b></div>"
  },
  {
   "id": "unit-5-b07",
   "n": 7,
   "page": 2,
   "tone": "t2",
   "title": "Reticuloendotheliosis · Avian encephalomyelitis · Avian nephritis",
   "stars": 0,
   "kinds": [
    "table"
   ],
   "html": "<table class=\"tt\">\n          <tr><th>Disease</th><th>Key point</th></tr>\n          <tr><td><b>Reticuloendotheliosis</b></td><td><b>Retrovirus</b> (REV), unrelated to ALV. Produces a <b>runting–stunting syndrome</b> with abnormal feathering, plus <b>lymphoma of liver, spleen and other viscera</b>. Because it <b>can also enlarge peripheral nerves</b>, it is the one condition that genuinely mimics Marek's disease. Also a common contaminant of vaccines</td></tr>\n          <tr><td><b>AVIAN ENCEPHALOMYELITIS</b><br>(\"epidemic tremor\")</td><td><b>Picornavirus</b>, mainly <b>VERTICALLY transmitted</b>; affects chicks <b>under about 3 weeks</b>. <b>Ataxia, sitting on hocks, progressive paresis, and fine rapid TREMORS of the HEAD and NECK</b> — obvious when the bird is held. Adults show only a transient egg drop; survivors may develop <b>cataract</b>.<br><b>There are no useful gross lesions.</b> <b>Micro:</b> non-suppurative encephalomyelitis with <b>CENTRAL CHROMATOLYSIS of neurons</b>, perivascular cuffing, and <b>LYMPHOID NODULES IN THE MUSCULAR LAYER OF THE GIZZARD and proventriculus — this is the diagnostic histological lesion</b></td></tr>\n          <tr><td><b>Avian nephritis</b></td><td><b>Astrovirus</b>; young chicks. <b>Interstitial nephritis</b> with pale swollen kidneys, <b>urate deposition and visceral gout</b>, growth retardation and runting. Often subclinical but adds to other nephropathies</td></tr>\n        </table>"
  },
  {
   "id": "unit-5-b08",
   "n": 8,
   "page": 2,
   "tone": "t5",
   "title": "IBH and HYDROPERICARDIUM SYNDROME (major in India)",
   "stars": 2,
   "kinds": [
    "table",
    "fact"
   ],
   "html": "<table class=\"tc\">\n          <tr><th></th><th>INCLUSION BODY HEPATITIS</th><th>HYDROPERICARDIUM SYNDROME</th></tr>\n          <tr><td>Agent</td><td><b>Fowl adenovirus (group I)</b>, several serotypes</td><td><b>Fowl adenovirus serotype 4 (FAdV-4)</b></td></tr>\n          <tr><td>Other names</td><td>—</td><td><b>\"ANGARA DISEASE\"</b> (first described at Angara Goth, Karachi, 1987) and <b>\"LITCHI HEART\"</b></td></tr>\n          <tr><td>Age</td><td>Broilers about <b>3–7 weeks</b></td><td>Broilers about <b>3–6 weeks</b></td></tr>\n          <tr><td>Lesion</td><td><b>Liver enlarged, pale, \"yellow-ochre\", friable, with focal necrosis and haemorrhage</b>; <b>pale bone marrow and anaemia</b>; haemorrhage in muscles</td><td><b>The pericardial sac is distended with clear straw-coloured JELLY-LIKE fluid</b> (often 10–20 ml) and the heart is <b>flabby and pale</b>; plus a <b>swollen friable mottled liver with necrosis</b> and <b>swollen kidneys with urate</b></td></tr>\n          <tr><td>Micro</td><td colspan=\"2\"><b>Large BASOPHILIC (sometimes eosinophilic) INTRANUCLEAR INCLUSION BODIES in hepatocytes</b> — the common feature of both</td></tr>\n          <tr><td>Mortality</td><td>Usually 10–30%, peaks in a few days</td><td>Can be very high, commonly <b>20–60%</b> in an outbreak</td></tr>\n        </table>\n        <div class=\"fact\"><span class=\"lbl\">Predisposition</span> Both are made much worse by prior <b>immunosuppression from IBD or chicken infectious anaemia</b> or from <b>aflatoxin</b> in the feed — always look for the underlying cause.</div>"
  },
  {
   "id": "unit-5-b09",
   "n": 9,
   "page": 2,
   "tone": "t4",
   "title": "EGG DROP SYNDROME &amp; REOVIRUS",
   "stars": 1,
   "kinds": [
    "table"
   ],
   "html": "<table class=\"ta\">\n          <tr><th>Disease</th><th>Key facts</th></tr>\n          <tr><td><b>EGG DROP SYNDROME (EDS-76)</b></td><td>Caused by a <b>DUCK ADENOVIRUS (Atadenovirus)</b> — ducks and geese are the natural host and reservoir. <b>Vertically transmitted</b>, the virus stays latent until point of lay.<br><b>The classic picture: a sudden drop in egg production of 10–40% in apparently HEALTHY birds with NO other signs.</b> The eggs are <b>SHELL-LESS, thin-shelled, soft, rough or DEPIGMENTED (loss of brown colour)</b>, with watery albumen.<br><b>Lesion:</b> <b>oedema and inflammation of the SHELL GLAND (pouch) of the oviduct</b>, with <b>intranuclear inclusion bodies</b> in its epithelium; inactive ovaries and atrophic oviduct. Diagnosis by <b>HI test</b></td></tr>\n          <tr><td><b>REOVIRUS infections</b></td><td><b>① VIRAL ARTHRITIS / TENOSYNOVITIS</b> — the important one. Swelling above the <b>hock</b>, inflammation of the <b>gastrocnemius and digital flexor tendon sheaths</b> with oedema and later fibrosis; in chronic cases the <b>GASTROCNEMIUS TENDON RUPTURES</b>, giving a green-black bruise above the hock and permanent lameness.<br><b>② Malabsorption / runting–stunting (\"helicopter disease\")</b> — poor growth, abnormal feathering, pale, undigested feed in the droppings, brittle bones.<br>Also enteritis and hepatitis</td></tr>\n        </table>"
  },
  {
   "id": "unit-5-b10",
   "n": 10,
   "page": 3,
   "tone": "t2",
   "title": "AVIAN COLIBACILLOSIS",
   "stars": 3,
   "kinds": [
    "table",
    "trap"
   ],
   "html": "<div class=\"trap\"><span class=\"lbl\">THE TRIAD — the single most-asked avian gross picture</span> Colisepticaemia produces the classic trio of <b>fibrinous PERIHEPATITIS</b> (a dull white fibrin film peeling off the liver capsule), <b>fibrinous PERICARDITIS</b> (thick opaque pericardium adherent to the heart) and <b>fibrinous AIRSACCULITIS</b> (air sacs thickened, cloudy, with yellow caseous sheets). Any one of these three in a chicken should make you say <b><i>E. coli</i></b>.</div>\n        <table class=\"tt\">\n          <tr><th>Form</th><th>Description</th></tr>\n          <tr><td><b>Omphalitis / yolk sac infection</b></td><td><b>\"MUSHY CHICK\"</b> — wet, swollen, foul-smelling navel in the first week; unabsorbed, discoloured, foul yolk sac; from dirty hatchery or floor eggs</td></tr>\n          <tr><td><b>Colisepticaemia</b></td><td>The <b>triad</b> above, plus splenomegaly and congestion; usually follows <b>respiratory damage by Ranikhet virus, IB or mycoplasma</b> — <i>E. coli</i> is a <b>secondary invader</b></td></tr>\n          <tr><td><b>Coligranuloma (Hjärre's disease)</b></td><td>Firm yellow granulomas in the liver, caeca and mesentery — resembles tuberculosis but is <b>not acid-fast</b></td></tr>\n          <tr><td><b>Salpingitis / egg peritonitis</b></td><td>Oviduct distended with laminated caseous casts; a common cause of death in layers</td></tr>\n          <tr><td><b>Swollen head syndrome</b>, <b>coliform cellulitis</b></td><td>Subcutaneous oedema of head and periorbital tissue; yellow caseous plaques under the abdominal skin</td></tr>\n        </table>"
  },
  {
   "id": "unit-5-b11",
   "n": 11,
   "page": 3,
   "tone": "t5",
   "title": "Infectious coryza · Clostridial diseases",
   "stars": 0,
   "kinds": [],
   "html": "<ul class=\"sm\">\n          <li><b>INFECTIOUS CORYZA</b> — <b><i>Avibacterium (Haemophilus) paragallinarum</i></b>. <b>Marked swelling of the face and infraorbital sinus</b>, closed swollen eyes, and a <b>thick, sticky nasal discharge with a characteristic FOUL, OFFENSIVE ODOUR</b> — the odour is the field diagnosis. Conjunctivitis, wattle oedema, sharp drop in egg production. Morbidity is high but mortality low; carriers persist in the flock</li>\n          <li><b>NECROTIC ENTERITIS</b> — <b><i>Clostridium perfringens</i> type A (and C)</b>, following mucosal damage by <b>coccidiosis</b> or a sudden feed change. The <b>small intestine is ballooned, thin-walled and full of dark foul gas and fluid</b>; the mucosa is covered by a <b>loose, brown-green, friable diphtheritic pseudomembrane described as a \"TURKISH TOWEL\"</b>. Sudden deaths in the best-grown birds</li>\n          <li><b>ULCERATIVE ENTERITIS (\"quail disease\")</b> — <b><i>Clostridium colinum</i></b>; deep punched-out ulcers of intestine and caeca, with pale necrotic foci in the liver</li>\n          <li><b>GANGRENOUS DERMATITIS</b> — <b><i>Cl. septicum</i> and <i>Cl. perfringens</i></b> entering damaged skin in birds already immunosuppressed by <b>chicken infectious anaemia or IBD</b>; dark, wet, crepitant, gangrenous skin of the wing tip and thigh</li>\n          <li><b>BOTULISM (\"limberneck\")</b> — <b><i>Cl. botulinum</i> type C toxin</b>, eaten in maggots or rotting carcasses; <b>flaccid paralysis of the neck, wings and legs</b>; no gross lesion</li>\n        </ul>"
  },
  {
   "id": "unit-5-b12",
   "n": 12,
   "page": 3,
   "tone": "t4",
   "title": "SALMONELLA infections",
   "stars": 3,
   "kinds": [
    "table"
   ],
   "html": "<table class=\"ta\">\n          <tr><th></th><th>PULLORUM DISEASE</th><th>FOWL TYPHOID</th><th>PARATYPHOID</th></tr>\n          <tr><td>Organism</td><td><b><i>Salmonella</i> Pullorum</b></td><td><b><i>Salmonella</i> Gallinarum</b></td><td><b><i>S.</i> Typhimurium, <i>S.</i> Enteritidis</b> (motile)</td></tr>\n          <tr><td>Age</td><td><b>CHICKS — first 2–3 weeks</b></td><td><b>GROWERS and ADULTS</b></td><td>Any age, often young</td></tr>\n          <tr><td>Signs</td><td><b>Chalky WHITE DIARRHOEA that pastes and seals the VENT</b>, huddling, gasping, high mortality</td><td>Sudden drop in production, yellow-green diarrhoea, pale shrunken comb, deaths</td><td>Enteritis, septicaemia in young birds</td></tr>\n          <tr><td>Lesions</td><td><b>Unabsorbed retained yolk sac</b>; <b>grey-white NECROTIC NODULES in the HEART MUSCLE, liver, lung and GIZZARD</b> (nodules in the heart are highly suggestive); in surviving hens the <b>ovarian ova become misshapen, discoloured, pedunculated and cystic</b>, and these hens become the <b>egg-transmitting carriers</b></td><td><b>Liver enlarged with a striking BRONZE / GREENISH-BRONZE discolouration</b>, splenomegaly, miliary necrotic foci, regressed haemorrhagic ovary, catarrhal enteritis</td><td>Focal hepatic necrosis, enteritis, pericarditis; <b>the major EGG-BORNE ZOONOSIS</b> of public health importance</td></tr>\n          <tr><td>Spread</td><td colspan=\"2\"><b>Mainly VERTICAL through the egg</b> — hence eradication is by <b>testing breeders with the rapid whole-blood plate agglutination test and culling reactors</b></td><td>Horizontal and vertical</td></tr>\n        </table>"
  },
  {
   "id": "unit-5-b13",
   "n": 13,
   "page": 3,
   "tone": "t5",
   "title": "Fowl cholera · Avian TB · Spirochaetosis",
   "stars": 0,
   "kinds": [
    "table"
   ],
   "html": "<table class=\"tc\">\n          <tr><th>Disease</th><th>Key facts</th></tr>\n          <tr><td><b>FOWL CHOLERA</b></td><td><b><i>Pasteurella multocida</i></b>; <b>bipolar</b> organisms on a Leishman/Giemsa smear of heart blood or liver.<br><b>ACUTE (septicaemic):</b> <b>sudden death of the best birds</b>, often found dead on the floor; <b>cyanotic, dark purple comb and wattles</b>; <b>petechial and ecchymotic haemorrhages on the epicardium, serosa, abdominal fat and intestinal mucosa</b>; <b>the LIVER is swollen with countless PINPOINT GREY-WHITE NECROTIC FOCI</b>; pneumonia is prominent in turkeys.<br><b>CHRONIC:</b> localised infection — <b>swollen oedematous WATTLES</b>, arthritis and swollen joints, <b>torticollis from middle-ear and cranial infection</b>, conjunctivitis</td></tr>\n          <tr><td><b>AVIAN TUBERCULOSIS</b></td><td><b><i>Mycobacterium avium</i></b>; a disease of <b>older birds, backyard flocks and zoo birds</b> — rare in short-cycle broilers. Progressive <b>emaciation with a prominent keel despite a good appetite</b>, pale comb, lameness. <b>Irregular grey-white to yellow NODULES of varying size in the LIVER, SPLEEN and INTESTINE</b>, and often in the <b>bone marrow</b>; unlike mammalian TB there is <b>little or no calcification</b>. <b>Ziehl–Neelsen: abundant ACID-FAST bacilli</b>. Zoonotic risk to immunocompromised people</td></tr>\n          <tr><td><b>AVIAN SPIROCHAETOSIS</b></td><td><b><i>Borrelia anserina</i></b>, transmitted by the <b>FOWL TICK <i>Argas persicus</i></b> — so it follows tick infestation of housing. Fever, marked depression, <b>greenish diarrhoea</b>, progressive <b>anaemia and paralysis</b>. Post-mortem: <b>greatly enlarged, mottled spleen with white foci</b>, swollen mottled liver, pericardial effusion. Diagnosis: <b>motile spirochaetes in a wet or Giemsa-stained blood film during the febrile phase</b></td></tr>\n        </table>"
  },
  {
   "id": "unit-5-b14",
   "n": 14,
   "page": 3,
   "tone": "t6",
   "title": "MYCOPLASMOSIS &amp; CHLAMYDIOSIS",
   "stars": 2,
   "kinds": [
    "table"
   ],
   "html": "<table class=\"tg\">\n          <tr><th>Disease</th><th>Key facts</th></tr>\n          <tr><td><b><i>Mycoplasma gallisepticum</i></b><br>= <b>CHRONIC RESPIRATORY DISEASE (CRD)</b></td><td>Slow-spreading, <b>egg-transmitted</b>, and stress-triggered. <b>Coughing, sneezing, tracheal rales, nasal and ocular discharge, swollen infraorbital sinus (\"INFECTIOUS SINUSITIS\" in turkeys)</b>, poor growth and egg drop.<br><b>Lesions:</b> catarrhal exudate in nasal passages, sinuses and trachea; <b>thickened, cloudy air sacs with yellow caseous beads — AIRSACCULITIS</b>. <b>Micro: marked LYMPHOID FOLLICLE hyperplasia</b> in the mucosa.<br><b>\"COMPLICATED CRD\"</b> — when <i>E. coli</i> joins in, the <b>perihepatitis–pericarditis–airsacculitis triad</b> appears and mortality rises sharply. This is the commonest respiratory problem of Indian commercial layers</td></tr>\n          <tr><td><b><i>Mycoplasma synoviae</i></b></td><td><b>INFECTIOUS SYNOVITIS</b> — <b>swollen hock joints and foot pads</b>, lameness, breast blister, pale comb; joints and tendon sheaths contain a <b>viscous grey-yellow to creamy exudate</b> that later becomes caseous. Also causes a subclinical airsacculitis and eggshell apex abnormalities</td></tr>\n          <tr><td><b>CHLAMYDIOSIS</b><br>(psittacosis in parrots, ornithosis in other birds)</td><td><b><i>Chlamydia psittaci</i></b>, an obligate intracellular organism; <b>notifiable ZOONOSIS</b> that causes serious atypical pneumonia in people handling birds.<br><b>Lesions: fibrinous AIRSACCULITIS, PERICARDITIS and PERIHEPATITIS</b> (looks like colibacillosis), with <b>marked enlargement of the SPLEEN and LIVER</b> and focal necrosis; conjunctivitis and greenish diarrhoea in the live bird.<br><b>Diagnosis: elementary bodies in impression smears with Giemsa, Macchiavello or Gimenez stain</b>, plus antigen ELISA and PCR</td></tr>\n        </table>"
  },
  {
   "id": "unit-5-b15",
   "n": 15,
   "page": 4,
   "tone": "t6",
   "title": "AVIAN MYCOSES",
   "stars": 0,
   "kinds": [
    "table"
   ],
   "html": "<table class=\"tg\">\n          <tr><th>Disease</th><th>Key facts</th></tr>\n          <tr><td><b>ASPERGILLOSIS</b><br>(\"brooder pneumonia\")</td><td><b><i>Aspergillus fumigatus</i></b>, from <b>mouldy litter, damp feed and contaminated hatchery/setter</b> — the spores are inhaled in enormous numbers.<br><b>Acute form in chicks</b> — high mortality in the first two weeks, gasping without a rattle. <b>Lesions: multiple hard, yellow-white CASEOUS NODULES (1–5 mm) scattered through the LUNGS and studding the AIR SACS</b>; on an exposed air sac the fungus may grow visible <b>green-grey fuzzy sporulating colonies</b>, which is diagnostic on sight.<br><b>Micro:</b> granulomas with <b>septate, dichotomously branching hyphae at about 45°</b>, giant cells; stain with <b>PAS or Grocott's methenamine silver</b>. Ocular and brain forms also occur. <b>Not contagious bird-to-bird — it is an environmental disease, so the answer is always to correct the litter and feed storage</b></td></tr>\n          <tr><td><b>THRUSH / crop mycosis</b><br>(\"sour crop\")</td><td><b><i>Candida albicans</i></b>; follows <b>prolonged antibiotic use, poor hygiene and vitamin A deficiency</b>. The <b>crop mucosa is thickened and covered with a white-grey, raised, adherent pseudomembrane whose corrugated pattern is described as a \"TURKISH TOWEL\"</b>; also ulcers in the proventriculus. Birds are unthrifty with a doughy crop</td></tr>\n          <tr><td><b>FAVUS</b><br>(avian ringworm, \"white comb\")</td><td><b><i>Microsporum gallinae</i></b>; a superficial dermatophytosis of the <b>unfeathered skin of the comb and wattles</b>, producing <b>white, powdery, scaly, crusty patches</b> that may thicken into wrinkled masses; feather loss on the head and neck follows. Chronic, disfiguring, rarely fatal</td></tr>\n        </table>"
  },
  {
   "id": "unit-5-b16",
   "n": 16,
   "page": 4,
   "tone": "t4",
   "title": "AVIAN MYCOTOXICOSES",
   "stars": 2,
   "kinds": [
    "table"
   ],
   "html": "<table class=\"ta\">\n          <tr><th>Toxin</th><th>Target &amp; lesion in the bird</th></tr>\n          <tr><td><b>AFLATOXIN</b><br>(<i>Aspergillus flavus</i>)</td><td><b>Target = LIVER.</b> <b>DUCKLINGS are the most susceptible of all species</b>, followed by turkey poults; chickens are relatively more resistant. <b>Liver is enlarged, pale to yellow, firm and fatty</b>, with <b>marked BILE DUCT (biliary) HYPERPLASIA</b> in chronic cases; reduced growth and feed efficiency, <b>pale carcass with subcutaneous and muscular haemorrhage</b> (because clotting factors fall), poor pigmentation of shanks, drop in egg production and hatchability. <b>Profoundly IMMUNOSUPPRESSIVE — a common hidden reason for vaccine failure and for severe IBD, IBH or coccidiosis outbreaks in India.</b> Source: damp <b>groundnut cake and maize</b></td></tr>\n          <tr><td><b>OCHRATOXIN A</b></td><td><b>Target = KIDNEY</b> — and it is <b>more nephrotoxic to poultry than aflatoxin</b>. <b>Swollen, pale, mottled kidneys with distended ureters full of white urate</b>, and <b>VISCERAL GOUT</b>; polydipsia, wet litter, poor growth, poor shell quality. Also immunosuppressive</td></tr>\n          <tr><td><b>TRICHOTHECENES</b><br>(T-2 toxin, DON — <i>Fusarium</i>)</td><td><b>Direct contact necrosis wherever the toxin touches.</b> The classic lesion is <b>yellow-white caseous ORAL LESIONS at the COMMISSURE OF THE BEAK and on the HARD PALATE and TONGUE</b>. Also <b>feed refusal</b>, <b>gizzard erosion</b>, intestinal necrosis, and — because trichothecenes are <b>radiomimetic</b> — <b>necrosis of bone marrow and lymphoid tissue with haemorrhages</b>, abnormal feathering and neural signs</td></tr>\n        </table>"
  },
  {
   "id": "unit-5-b17",
   "n": 17,
   "page": 4,
   "tone": "t2",
   "title": "HELMINTHS of poultry",
   "stars": 0,
   "kinds": [
    "table"
   ],
   "html": "<table class=\"tt\">\n          <tr><th>Parasite</th><th>Site &amp; pathology</th></tr>\n          <tr><td><b><i>Ascaridia galli</i></b></td><td>Largest nematode of poultry, in the <b>small intestine</b>; heavy burdens cause <b>enteritis, intestinal obstruction and even rupture</b>, unthriftiness, and worms may migrate up the oviduct <b>into the egg</b></td></tr>\n          <tr><td><b><i>Heterakis gallinarum</i></b></td><td>In the <b>CAECA</b>; itself only mildly pathogenic, but it is <b>the vector that carries <i>Histomonas meleagridis</i> inside its egg</b> — this is its exam importance</td></tr>\n          <tr><td><b><i>Capillaria</i></b></td><td>Hair-like worms in crop, oesophagus and intestine; thickened mucosa, catarrhal or haemorrhagic enteritis, marked weight loss</td></tr>\n          <tr><td><b><i>Syngamus trachea</i></b><br>(\"gapeworm\")</td><td>Bright <b>red, permanently paired worms in a Y shape</b> in the <b>TRACHEA</b>; the bird <b>\"gapes\"</b>, stretches its neck and shakes its head; obstruction can suffocate young birds</td></tr>\n          <tr><td><b>Cestodes</b> (<i>Raillietina</i>, <i>Davainea</i>)</td><td>Attach to the small intestinal mucosa; nodular enteritis, poor growth, drop in production</td></tr>\n          <tr><td><b>Trematodes</b> (<i>Prosthogonimus</i>)</td><td>The <b>oviduct fluke</b> — salpingitis, thin- and soft-shelled eggs, egg peritonitis</td></tr>\n        </table>"
  },
  {
   "id": "unit-5-b18",
   "n": 18,
   "page": 4,
   "tone": "t5",
   "title": "COCCIDIOSIS &amp; HISTOMONIASIS",
   "stars": 3,
   "kinds": [
    "table",
    "trap"
   ],
   "html": "<table class=\"tc\">\n          <tr><th><i>Eimeria</i> species</th><th>Site &amp; lesion — the species is identified by WHERE it sits</th></tr>\n          <tr><td><b><i>E. tenella</i></b></td><td><b>CAECA.</b> The most acute and most fatal, especially at <b>3–6 weeks</b>. <b>Frank BLOODY DROPPINGS</b>; caeca are <b>distended, thickened and full of clotted blood, which later organises into hard laminated \"CAECAL CORES\"</b>. High mortality</td></tr>\n          <tr><td><b><i>E. necatrix</i></b></td><td><b>MID small intestine.</b> The most damaging of the intestinal species in growers; the gut is <b>ballooned and thickened</b> with white spots and <b>petechiae seen from the serosa giving a \"SALT AND PEPPER\" appearance</b></td></tr>\n          <tr><td><b><i>E. acervulina</i></b></td><td><b>DUODENUM.</b> The commonest species. <b>Transverse white bands or \"LADDER-LIKE\" white plaques</b> across the duodenal mucosa, best seen from the serosal side. Poor growth rather than death</td></tr>\n          <tr><td><b><i>E. maxima</i></b></td><td><b>MID intestine.</b> Thickened flaccid gut with <b>orange-pink mucus</b>; the <b>largest oocysts</b>; important because it damages absorption and predisposes to <b>necrotic enteritis</b></td></tr>\n          <tr><td><b><i>E. brunetti</i></b></td><td><b>LOWER intestine, rectum and cloaca.</b> Necrotic and haemorrhagic enteritis with a coagulated cast</td></tr>\n        </table>\n        <div class=\"trap\"><span class=\"lbl\">HISTOMONIASIS — \"BLACKHEAD\" ★★★</span> <b><i>Histomonas meleagridis</i></b>, a flagellate protozoan. <b>TURKEYS are highly susceptible (mortality can approach 100%); chickens are largely resistant carriers.</b> It is carried inside the egg of the caecal worm <b><i>Heterakis gallinarum</i></b>, and earthworms act as transport hosts — which is why the disease persists in the soil for years.<br>\n        <b>The two lesions, both required for the answer:</b><br>\n        <b>① CAECA</b> — thickened ulcerated wall containing a <b>hard, dry, laminated, yellow-white CAECAL CORE</b><br>\n        <b>② LIVER</b> — <b>circular, depressed, yellow-grey to green necrotic foci up to 1–2 cm with a raised rim, the classic \"TARGET\" or \"BULL'S-EYE\" lesion</b><br>\n        The name \"blackhead\" comes from cyanosis of the head, but this is <b>inconstant and NOT a reliable sign</b> — the liver lesion is.</div>"
  },
  {
   "id": "unit-5-b19",
   "n": 19,
   "page": 4,
   "tone": "t3",
   "title": "ECTOPARASITES of poultry",
   "stars": 0,
   "kinds": [
    "table"
   ],
   "html": "<table class=\"tp\">\n          <tr><th>Parasite</th><th>Effect</th></tr>\n          <tr><td><b>Lice</b> — <i>Menopon gallinae</i> (shaft louse), <i>Menacanthus stramineus</i> (body louse)</td><td><b>Chewing lice</b>, they feed on feather debris and scurf, not blood; cause intense <b>irritation, restlessness, feather damage, reduced growth and egg production</b>. Spend their <b>entire life on the bird</b></td></tr>\n          <tr><td><b>Red mite</b> — <i>Dermanyssus gallinae</i></td><td><b>Blood-sucking and NOCTURNAL</b> — it feeds at night and <b>hides in cracks of the house by day</b>, so the bird looks clean on daytime examination. Causes <b>severe anaemia (pale comb), restlessness, reduced production and even death</b>; also spreads spirochaetosis. Treat the <b>house</b>, not only the bird</td></tr>\n          <tr><td><b>Northern fowl mite</b> — <i>Ornithonyssus sylviarum</i></td><td>Blood-sucker that <b>lives on the bird permanently</b>, around the vent; blackened, matted, dirty vent feathers</td></tr>\n          <tr><td><b>Scaly leg mite</b> — <i>Knemidocoptes mutans</i></td><td>Burrows under the leg scales → the scales <b>lift, thicken and become crusty and deformed (\"scaly leg\")</b>, lameness</td></tr>\n          <tr><td><b>Depluming mite</b> — <i>Knemidocoptes gallinae</i></td><td>Burrows at the feather base → intense itching and <b>feather pulling and loss</b></td></tr>\n          <tr><td><b>Fowl tick</b> — <i>Argas persicus</i></td><td>Soft tick, nocturnal blood feeder hiding in cracks; anaemia, \"tick worry\", <b>tick paralysis</b>, and it is the <b>vector of <i>Borrelia anserina</i></b></td></tr>\n          <tr><td><b>Sticktight flea</b> — <i>Echidnophaga gallinacea</i></td><td>Attaches in clusters around the <b>eyes, comb and wattles</b>; ulceration and anaemia</td></tr>\n        </table>"
  },
  {
   "id": "unit-5-b20",
   "n": 20,
   "page": 5,
   "tone": "t6",
   "title": "AVIAN NUTRITIONAL DEFICIENCIES",
   "stars": 3,
   "kinds": [
    "table"
   ],
   "html": "<table class=\"tg\">\n          <tr><th>Nutrient</th><th>The named lesion</th></tr>\n          <tr><td><b>Vitamin A</b></td><td><b>\"NUTRITIONAL ROUP\"</b> — white pustular nodules in the <b>pharynx, oesophagus and nasal passages</b> (resembles wet fowl pox but has no Bollinger bodies); <b>xerophthalmia</b> with cheesy material under the eyelid; <b>urate deposits in the kidney and ureters</b>; squamous metaplasia of glandular epithelium; poor growth and hatchability</td></tr>\n          <tr><td><b>Vitamin D₃ / Ca / P</b></td><td><b>RICKETS</b> in chicks — <b>soft rubbery beak and bones, \"BEADED RIBS\" (rachitic rosary) at the costochondral junctions, bent keel, inability to stand</b>. In layers — <b>thin-shelled and shell-less eggs</b>, <b>osteomalacia</b> and drop in production</td></tr>\n          <tr><td><b>Vitamin E / Selenium ★</b></td><td>Three distinct syndromes, all worth marks:<br><b>① ENCEPHALOMALACIA (\"CRAZY CHICK DISEASE\")</b> — ataxia, backward somersaults, head retraction; <b>the CEREBELLUM is swollen, soft, haemorrhagic and yellow-green with necrosis</b><br><b>② EXUDATIVE DIATHESIS</b> — capillary leakage giving <b>greenish-blue gelatinous subcutaneous oedema over the BREAST and thighs</b><br><b>③ NUTRITIONAL MUSCULAR DYSTROPHY</b> — <b>white chalky streaks in the breast muscle and in the GIZZARD</b> (gizzard myopathy in turkeys)</td></tr>\n          <tr><td><b>Vitamin K</b></td><td><b>Haemorrhagic syndrome</b> — prolonged clotting, bleeding into muscle, subcutis and gut; worsened by sulpha drugs and mycotoxins</td></tr>\n          <tr><td><b>Riboflavin (B₂)</b></td><td><b>\"CURLED-TOE PARALYSIS\"</b> — the chick walks on its hocks with the <b>toes curled inward</b>; caused by <b>peripheral nerve demyelination of the sciatic nerve</b>, which becomes visibly swollen. Poor hatchability with clubbed down</td></tr>\n          <tr><td><b>Thiamine (B₁)</b></td><td><b>POLYNEURITIS</b> — <b>\"STAR-GAZING\" posture</b>, the head retracted over the back (opisthotonus), leg paralysis</td></tr>\n          <tr><td><b>Niacin</b></td><td><b>Bowed legs and enlarged hock joints</b> (resembles perosis but the Achilles tendon does not slip), inflamed mouth and tongue (\"black tongue\")</td></tr>\n          <tr><td><b>Manganese / Choline</b></td><td><b>PEROSIS (\"SLIPPED TENDON\")</b> — the hock enlarges and flattens and the <b>gastrocnemius tendon slips off the condyle</b>, twisting the leg outward; also chondrodystrophy and short thick bones. Manganese deficiency also causes <b>nutritional chondrodystrophy in the embryo</b></td></tr>\n          <tr><td><b>Biotin / Pantothenic acid</b></td><td><b>Dermatitis of the FOOT PADS and the CORNERS OF THE MOUTH and eyelids</b>, cracked scaly feet, poor feathering; biotin deficiency also gives <b>fatty liver and kidney syndrome</b></td></tr>\n          <tr><td><b>Zinc</b></td><td>Poor feathering with frizzled feathers, short thickened long bones, foot-pad dermatitis</td></tr>\n          <tr><td><b>Salt (excess)</b></td><td>Excess sodium → <b>ascites, subcutaneous oedema, wet litter</b>, kidney damage; deficiency → cannibalism</td></tr>\n        </table>"
  },
  {
   "id": "unit-5-b21",
   "n": 21,
   "page": 5,
   "tone": "t5",
   "title": "MISCELLANEOUS CONDITIONS",
   "stars": 3,
   "kinds": [
    "table"
   ],
   "html": "<table class=\"tc\">\n          <tr><th>Condition</th><th>What it is</th></tr>\n          <tr><td><b>Heat stroke</b></td><td>Indian summer, poor ventilation, high stocking. Panting, prostration, sudden death of the heaviest birds. PM: <b>generalised congestion, pulmonary congestion and oedema, rapid onset of rigor and rapid decomposition</b>; the carcass spoils quickly</td></tr>\n          <tr><td><b>Vent gleet (cloacitis)</b></td><td>Chronic inflammation of the cloaca with a <b>foul-smelling, pasty, yellow-white discharge</b> that soils and bares the vent feathers; associated with poor hygiene, and it predisposes to <b>vent pecking and cannibalism</b></td></tr>\n          <tr><td><b>INTERNAL LAYER</b></td><td>The ovum is ovulated but the <b>infundibulum fails to pick it up</b>, so the yolk drops <b>free into the abdominal cavity</b> → <b>EGG-YOLK PERITONITIS</b>: yellow, cheesy, foul yolk material plastered over the viscera, peritonitis, and death. Often follows Ranikhet disease, salpingitis or rough handling</td></tr>\n          <tr><td><b>FALSE LAYER ★</b></td><td>The bird <b>looks and behaves like a layer with a normal comb and pelvis, but never lays an egg</b>. It is caused by <b>permanent OVIDUCT damage, classically by infectious bronchitis virus infecting the chick in its first two weeks</b>. The ovary is active but the oviduct is blind, cystic and fluid-filled, so ovulated yolks fall into the abdomen</td></tr>\n          <tr><td><b>Pendulous crop</b></td><td>The crop becomes <b>atonic, dilated and impacted</b>, hanging as a heavy pendulous sac; sour smell; associated with fibrous feed, water deprivation followed by gorging, and <i>Candida</i></td></tr>\n          <tr><td><b>Breast blister (keel bursitis)</b></td><td>Inflammation of the <b>sternal bursa over the keel</b>, from wet caked litter, poor perches and any condition that makes the bird sit — leg weakness, synovitis. Starts as a clear fluid-filled swelling, becomes a hard caseous mass. <b>A major carcass-downgrading defect</b></td></tr>\n          <tr><td><b>ASCITES SYNDROME</b><br>(pulmonary hypertension syndrome)</td><td>A <b>metabolic disease of FAST-GROWING BROILERS</b>: oxygen demand outstrips the capacity of the lung, made worse by <b>cold, high altitude, poor ventilation and pellet feeding</b>. Pulmonary hypertension → <b>RIGHT VENTRICULAR HYPERTROPHY AND DILATATION → right heart failure</b>.<br><b>PM: abdomen distended with clear straw-coloured fluid plus YELLOW GELATINOUS FIBRIN CLOTS; a dilated flabby right ventricle; and a congested, firm, \"nutmeg\"/cardiac LIVER often coated with fibrin.</b> Hydropericardium may also be present</td></tr>\n          <tr><td><b>FATTY LIVER AND KIDNEY SYNDROME (FLKS)</b></td><td><b>BIOTIN deficiency</b> in <b>fast-growing broilers of about 2–4 weeks</b> on wheat-based low-biotin rations. Sudden death of apparently healthy chicks, often lying on the breast with the head thrown back. <b>The LIVER and KIDNEYS are pale, swollen and fatty</b>; <b>hypoglycaemia</b> is the fatal event; the heart is also pale</td></tr>\n          <tr><td><b>FATTY LIVER (haemorrhagic) SYNDROME</b></td><td>A quite different disease — of <b>OVERWEIGHT CAGED LAYERS</b> on a high-energy diet with no exercise. The <b>liver is grossly enlarged, yellow, greasy, soft and friable, and is easily torn</b>; large <b>subcapsular haemorrhages and blood clots</b> are present, and <b>fatal rupture with massive intra-abdominal haemorrhage</b> is the usual cause of death, together with a fall in egg production. Abundant abdominal fat</td></tr>\n          <tr><td><b>CAGE LAYER FATIGUE</b></td><td><b>Osteoporosis of high-producing caged layers</b> — calcium and phosphorus are drained for shell formation while the bird gets <b>no exercise</b>, so structural bone is resorbed. The hen is <b>found lying on her side in the cage, unable to stand, but bright and eating</b>; <b>bones (ribs, vertebrae, femur) are soft and fracture easily</b>, and collapse of a thoracic vertebra causes paralysis. Shells become thin</td></tr>\n          <tr><td><b>GOUT ★</b></td><td>Deposition of <b>URATES</b> because birds are <b>uricotelic</b> and any renal failure or dehydration precipitates them.<br><b>VISCERAL gout</b> — a chalky white \"frosting\" of urate crystals on the <b>pericardium, liver capsule, air sacs and peritoneum</b>; kidneys and ureters distended with white urate.<br><b>ARTICULAR gout</b> — soft white \"toothpaste-like\" urate <b>tophi in and around the joints and tendon sheaths</b> of the feet and hocks, causing lameness.<br><b>Causes:</b> nephrotoxic damage (<b>ochratoxin</b>, nephropathogenic <b>IB virus</b>, avian nephritis virus), excess dietary <b>protein and calcium</b>, <b>water deprivation</b>, sodium bicarbonate excess, vitamin A deficiency. Micro: needle-shaped urate crystals with a surrounding <b>granulomatous \"tophus\"</b> reaction</td></tr>\n          <tr><td><b>Haemorrhagic syndrome</b></td><td><b>Aplastic anaemia and thrombocytopenia</b> from mycotoxins (<b>trichothecenes, aflatoxin</b>), sulpha drugs or chicken infectious anaemia. <b>Pale, fatty, yellow bone marrow</b>; haemorrhages in muscle, subcutis, and viscera; pale carcass</td></tr>\n          <tr><td><b>Round heart disease</b></td><td>An idiopathic <b>cardiomyopathy</b> of turkeys and broilers; the heart is <b>globular, rounded, pale and flabby with a dilated thin-walled ventricle</b>; sudden death</td></tr>\n          <tr><td><b>Impaction of the oviduct · egg bound</b></td><td>A <b>retained egg or laminated caseous mass in the oviduct or cloaca</b>; the hen strains, and it may cause <b>cloacal or oviduct prolapse</b> and then <b>vent pecking</b>. Associated with the first large eggs of a young pullet, oversized eggs, hypocalcaemia and salpingitis</td></tr>\n          <tr><td><b>BUMBLE FOOT (pododermatitis)</b></td><td>Infection, usually <b><i>Staphylococcus aureus</i></b>, entering a wound on the plantar footpad from <b>rough perches, wire floors or wet caked litter</b>. The foot is <b>hot, swollen and painful, with a dark scab, and contains a firm CASEOUS CORE</b> (remember — birds cannot make liquid pus). Leads to lameness, arthritis and osteomyelitis</td></tr>\n        </table>"
  },
  {
   "id": "unit-5-b22",
   "n": 22,
   "page": 5,
   "tone": "t3",
   "title": "COMMON VICES",
   "stars": 0,
   "kinds": [],
   "html": "<b>Cannibalism</b> in its several forms — <b>toe picking</b> (chicks), <b>feather pecking</b> (growers), <b>vent picking</b> (layers, often after a prolapse — the most damaging), <b>head picking</b>, and <b>egg eating</b>.<br>\n        <b class=\"r\">Causes:</b> overcrowding and high stocking density · <b>excessively bright light</b> · high temperature and poor ventilation · <b>nutritional deficiency of protein, METHIONINE, salt or fibre</b> · boredom and lack of feeder/drinker space · prolapse, vent gleet or ectoparasites drawing attention to the vent · mixing birds of unequal size.<br>\n        <b class=\"g\">Control:</b> <b>beak trimming</b> · reduce light intensity or use <b>red light</b> · lower stocking density · balanced ration with adequate methionine and salt · provide roughage or pecking blocks · remove and treat injured birds at once."
  },
  {
   "id": "unit-5-b23",
   "n": 23,
   "page": 5,
   "tone": "t4",
   "title": "BLANK-FILL DRILL — Unit 5",
   "stars": 0,
   "kinds": [
    "drill"
   ],
   "html": "",
   "drill": true
  }
 ],
 "drill": [
  {
   "id": "unit-5-d001",
   "html": "The avian granulocyte is the <u>heterophil</u>, which lacks <u>myeloperoxidase</u>, so avian pus is <u>caseous</u>"
  },
  {
   "id": "unit-5-d002",
   "html": "Chickens have <u>no</u> lymph nodes; B cells mature in the <u>bursa of Fabricius</u>"
  },
  {
   "id": "unit-5-d003",
   "html": "Birds are <u>uricotelic</u>, which is why renal failure causes <u>gout</u>"
  },
  {
   "id": "unit-5-d004",
   "html": "Ranikhet disease is caused by <u>avian paramyxovirus-1</u>"
  },
  {
   "id": "unit-5-d005",
   "html": "R2B (Mukteswar) is a <u>mesogenic</u> strain; LaSota and F1 are <u>lentogenic</u>"
  },
  {
   "id": "unit-5-d006",
   "html": "Haemorrhages on the tips of the <u>proventricular glands</u> and necrosis of the <u>caecal tonsils</u> = Ranikhet disease"
  },
  {
   "id": "unit-5-d007",
   "html": "IBD virus is a <u>Birnavirus</u> and targets the <u>bursa of Fabricius</u>"
  },
  {
   "id": "unit-5-d008",
   "html": "Paint-brush haemorrhages in thigh and breast muscle occur in <u>IBD</u>"
  },
  {
   "id": "unit-5-d009",
   "html": "Chicken infectious anaemia gives <u>pale fatty (yellow)</u> bone marrow and <u>thymic</u> atrophy"
  },
  {
   "id": "unit-5-d010",
   "html": "Blue wing disease is <u>gangrenous dermatitis</u> with chicken infectious anaemia"
  },
  {
   "id": "unit-5-d011",
   "html": "Nephropathogenic strains of <u>infectious bronchitis</u> cause gout; early infection creates a <u>false layer</u>"
  },
  {
   "id": "unit-5-d012",
   "html": "Blood-stained tracheal casts with syncytia and <u>intranuclear</u> inclusions = <u>ILT</u>"
  },
  {
   "id": "unit-5-d013",
   "html": "Fowl pox inclusions are <u>Bollinger</u> bodies and are <u>intracytoplasmic</u>; spread is by <u>mosquitoes</u>"
  },
  {
   "id": "unit-5-d014",
   "html": "The diphtheritic form of fowl pox kills by <u>suffocation</u>"
  },
  {
   "id": "unit-5-d015",
   "html": "Marek's disease is caused by a <u>herpesvirus</u> and is a <u>T</u>-cell tumour; leukosis is a <u>retrovirus</u> and a <u>B</u>-cell tumour"
  },
  {
   "id": "unit-5-d016",
   "html": "Enlarged asymmetrical <u>sciatic</u> nerves occur in <u>Marek's</u> disease, never in leukosis"
  },
  {
   "id": "unit-5-d017",
   "html": "A nodular tumour in the bursa points to <u>lymphoid leukosis</u>"
  },
  {
   "id": "unit-5-d018",
   "html": "Marek's disease spreads by <u>feather follicle dander</u> and is prevented by the <u>HVT</u> vaccine"
  },
  {
   "id": "unit-5-d019",
   "html": "Lymphoid nodules in the <u>gizzard</u> muscle are diagnostic of <u>avian encephalomyelitis</u>"
  },
  {
   "id": "unit-5-d020",
   "html": "Hydropericardium syndrome is also called <u>Angara disease</u> and is caused by fowl adenovirus serotype <u>4</u>"
  },
  {
   "id": "unit-5-d021",
   "html": "Inclusion body hepatitis shows <u>basophilic intranuclear</u> inclusions in hepatocytes"
  },
  {
   "id": "unit-5-d022",
   "html": "EDS-76 is caused by a <u>duck adenovirus</u> and produces <u>shell-less and depigmented</u> eggs"
  },
  {
   "id": "unit-5-d023",
   "html": "Rupture of the <u>gastrocnemius</u> tendon follows <u>reovirus</u> arthritis"
  },
  {
   "id": "unit-5-d024",
   "html": "The colibacillosis triad is <u>perihepatitis, pericarditis and airsacculitis</u>"
  },
  {
   "id": "unit-5-d025",
   "html": "Mushy chick disease is <u>omphalitis / yolk sac infection</u>"
  },
  {
   "id": "unit-5-d026",
   "html": "Foul-smelling nasal discharge with facial swelling = <u>infectious coryza</u>"
  },
  {
   "id": "unit-5-d027",
   "html": "Turkish-towel pseudomembrane in the small intestine = <u>necrotic enteritis</u>, predisposed by <u>coccidiosis</u>"
  },
  {
   "id": "unit-5-d028",
   "html": "White diarrhoea with a pasted vent in chicks = <u>pullorum disease</u>"
  },
  {
   "id": "unit-5-d029",
   "html": "A <u>bronze</u>-coloured enlarged liver in an adult bird = <u>fowl typhoid</u>"
  },
  {
   "id": "unit-5-d030",
   "html": "Pullorum and fowl typhoid spread mainly <u>vertically</u> and are controlled by the <u>whole-blood plate agglutination</u> test"
  },
  {
   "id": "unit-5-d031",
   "html": "Sudden death with cyanotic wattles and pinpoint hepatic necrosis = <u>fowl cholera</u>; organism is <u>bipolar</u>"
  },
  {
   "id": "unit-5-d032",
   "html": "Avian tuberculosis shows <u>little or no calcification</u>, unlike mammalian TB"
  },
  {
   "id": "unit-5-d033",
   "html": "Avian spirochaetosis is caused by <u>Borrelia anserina</u>, transmitted by <u>Argas persicus</u>"
  },
  {
   "id": "unit-5-d034",
   "html": "Chronic respiratory disease is caused by <u>Mycoplasma gallisepticum</u>; infectious synovitis by <u>M. synoviae</u>"
  },
  {
   "id": "unit-5-d035",
   "html": "Chlamydia psittaci causes <u>psittacosis / ornithosis</u> and is a <u>zoonosis</u>"
  },
  {
   "id": "unit-5-d036",
   "html": "Brooder pneumonia is caused by <u>Aspergillus fumigatus</u>, whose hyphae are <u>septate</u>"
  },
  {
   "id": "unit-5-d037",
   "html": "White comb (favus) is caused by <u>Microsporum gallinae</u>"
  },
  {
   "id": "unit-5-d038",
   "html": "Ducklings are the most susceptible species to <u>aflatoxin</u>"
  },
  {
   "id": "unit-5-d039",
   "html": "Ochratoxin damages the <u>kidney</u> and causes <u>gout</u>; T-2 toxin causes <u>oral lesions</u> at the beak commissure"
  },
  {
   "id": "unit-5-d040",
   "html": "Heterakis gallinarum transmits <u>Histomonas meleagridis</u>"
  },
  {
   "id": "unit-5-d041",
   "html": "Syngamus trachea is the <u>gapeworm</u> and lives in the <u>trachea</u>"
  },
  {
   "id": "unit-5-d042",
   "html": "Eimeria tenella affects the <u>caeca</u> and forms <u>caecal cores</u>"
  },
  {
   "id": "unit-5-d043",
   "html": "Ladder-like white lesions in the duodenum = <u>Eimeria acervulina</u>"
  },
  {
   "id": "unit-5-d044",
   "html": "Salt-and-pepper petechiae in the mid intestine = <u>Eimeria necatrix</u>"
  },
  {
   "id": "unit-5-d045",
   "html": "Target or bull's-eye liver lesions with caecal cores = <u>histomoniasis (blackhead)</u>, worst in <u>turkeys</u>"
  },
  {
   "id": "unit-5-d046",
   "html": "Dermanyssus gallinae is the <u>red mite</u>, feeds at <u>night</u> and hides in <u>cracks</u>"
  },
  {
   "id": "unit-5-d047",
   "html": "Knemidocoptes mutans causes <u>scaly leg</u>"
  },
  {
   "id": "unit-5-d048",
   "html": "Nutritional roup is <u>vitamin A</u> deficiency"
  },
  {
   "id": "unit-5-d049",
   "html": "Crazy chick disease (encephalomalacia) affects the <u>cerebellum</u> and is <u>vitamin E</u> deficiency"
  },
  {
   "id": "unit-5-d050",
   "html": "Exudative diathesis gives <u>greenish-blue</u> subcutaneous oedema over the <u>breast</u>"
  },
  {
   "id": "unit-5-d051",
   "html": "Curled-toe paralysis = <u>riboflavin</u> deficiency; star-gazing = <u>thiamine</u> deficiency"
  },
  {
   "id": "unit-5-d052",
   "html": "Perosis (slipped tendon) = <u>manganese and choline</u> deficiency"
  },
  {
   "id": "unit-5-d053",
   "html": "A bird that looks like a layer but never lays is a <u>false layer</u>, usually caused by <u>infectious bronchitis</u>"
  },
  {
   "id": "unit-5-d054",
   "html": "Ascites syndrome of broilers is caused by <u>pulmonary hypertension</u> and gives <u>right ventricular</u> hypertrophy"
  },
  {
   "id": "unit-5-d055",
   "html": "Fatty liver and kidney syndrome is due to <u>biotin</u> deficiency and kills by <u>hypoglycaemia</u>"
  },
  {
   "id": "unit-5-d056",
   "html": "Fatty liver haemorrhagic syndrome occurs in <u>overweight caged layers</u> and kills by liver <u>rupture</u>"
  },
  {
   "id": "unit-5-d057",
   "html": "Cage layer fatigue is <u>osteoporosis</u> from calcium drain plus lack of <u>exercise</u>"
  },
  {
   "id": "unit-5-d058",
   "html": "Urate frosting on the pericardium and liver capsule = <u>visceral gout</u>"
  },
  {
   "id": "unit-5-d059",
   "html": "Bumble foot is usually caused by <u>Staphylococcus aureus</u> and contains a <u>caseous core</u>"
  },
  {
   "id": "unit-5-d060",
   "html": "Cannibalism is controlled by <u>beak trimming</u> and by reducing <u>light intensity</u>"
  }
 ]
};

revisionData["unit-6"] = {
 "id": "unit-6",
 "no": 6,
 "title": "Pathology of Diseases of Laboratory and Wild Animals",
 "paper": "paper-2",
 "icon": "paw",
 "pages": 4,
 "pageTitles": [
  "Diseases of Rats and Mice",
  "Diseases of Guinea Pigs and Rabbits",
  "Diseases of Wild Animals — Viral and Bacterial",
  "Parasitic &amp; Nutritional Disease of Wildlife · Necropsy · Drill"
 ],
 "sheet": "revision/unit-6.html",
 "boxes": [
  {
   "id": "unit-6-b01",
   "n": 1,
   "page": 1,
   "tone": "t1",
   "title": "Why this small unit is worth marks",
   "stars": 0,
   "kinds": [
    "mem"
   ],
   "html": "Unit 6 is short but is examined almost entirely through <b>\"which disease has this lesion\"</b> objective questions. Learn each disease as a triplet: <b>AGENT → SIGNATURE LESION → HOW IT IS DEMONSTRATED</b>. Most answers turn on one named organ, one named body, or one named stain.\n        <div class=\"mem\"><span class=\"lbl\">The stains that appear again and again in this unit</span> <b>Warthin–Starry silver</b> → <i>Clostridium piliforme</i> (Tyzzer's) and <b>Treponema</b> (rabbit syphilis). <b>Ziehl–Neelsen</b> → mycobacteria. <b>Giemsa</b> → blood parasites and <i>Clostridium piliforme</i>. <b>PAS</b> → fungi and glycogen.</div>"
  },
  {
   "id": "unit-6-b02",
   "n": 2,
   "page": 1,
   "tone": "t5",
   "title": "TYZZER'S DISEASE",
   "stars": 3,
   "kinds": [
    "trap",
    "fact"
   ],
   "html": "<ul class=\"sm\">\n          <li><b>Agent: <i>Clostridium piliforme</i></b> (formerly <i>Bacillus piliformis</i>) — a Gram-negative, <b>spore-forming, OBLIGATE INTRACELLULAR</b> rod. <b>It cannot be grown on ordinary cell-free media</b> — this fact alone is a favourite question</li>\n          <li><b>Hosts:</b> mice, rats, <b>gerbils (the most susceptible)</b>, hamsters, rabbits, and also <b>foals, dogs, cats and non-human primates</b>. Precipitated by <b>stress, overcrowding, poor sanitation and corticosteroids</b>; spread by <b>spores in soiled bedding, which survive for years</b></li>\n        </ul>\n        <div class=\"trap\"><span class=\"lbl\">THE CLASSIC TRIAD — always give all three organs</span>\n          <b>① LIVER</b> — multiple pinpoint to 2 mm <b>pale yellow-white foci of necrosis</b> scattered through the parenchyma (the commonest and most striking lesion)<br>\n          <b>② INTESTINE</b> — <b>necrotising ileitis, typhlitis and colitis</b>; watery diarrhoea, soiled perineum, sudden death<br>\n          <b>③ HEART</b> — pale streaks of <b>myocardial necrosis</b>, especially in the septum and left ventricle</div>\n        <div class=\"fact\"><span class=\"lbl\">Micro — the diagnostic picture ★</span> At the <b>margin of the necrotic focus</b>, inside surviving hepatocytes, lie <b>bundles of long, slender, filamentous bacilli arranged in a criss-cross or \"haystack/faggot\" pattern</b>. They are <b>poorly seen with H&amp;E and Gram</b>, and are demonstrated with <b>WARTHIN–STARRY SILVER stain (the method of choice)</b>, Giemsa or PAS.</div>"
  },
  {
   "id": "unit-6-b03",
   "n": 3,
   "page": 1,
   "tone": "t2",
   "title": "Pseudotuberculosis &amp; Salmonellosis of rodents",
   "stars": 0,
   "kinds": [
    "table"
   ],
   "html": "<table class=\"tt\">\n          <tr><th>Disease</th><th>Agent &amp; lesion</th></tr>\n          <tr><td><b>PSEUDOTUBERCULOSIS</b></td><td>Two organisms are described under this heading — know both:<br><b>① <i>Yersinia pseudotuberculosis</i></b> — acquired from <b>contaminated feed, water and wild rodents/birds</b>. Produces <b>caseous, yellow-white \"tubercle-like\" NODULES in the MESENTERIC LYMPH NODES, intestinal wall, LIVER and SPLEEN</b>, with enteritis and wasting. The nodules resemble tuberculosis but the organisms are <b>NOT acid-fast</b> — hence \"pseudo\". <b>Zoonotic</b><br><b>② <i>Corynebacterium kutscheri</i></b> — the classic <b>LATENT infection of rats and mice that becomes clinical only under STRESS, immunosuppression, irradiation or corticosteroids</b>. Produces <b>multiple caseous abscesses in the LUNGS, liver, kidneys, lymph nodes and joints</b>. It is the standard example of an opportunistic latent laboratory-animal infection</td></tr>\n          <tr><td><b>SALMONELLOSIS</b></td><td><b><i>Salmonella</i> Typhimurium and <i>S.</i> Enteritidis</b>, from contaminated feed, bedding or wild rodents. <b>Acute:</b> septicaemia and sudden death. <b>Subacute:</b> <b>catarrhal to necrotic enteritis with a distended, congested ileum and caecum</b>, watery diarrhoea, <b>marked SPLENOMEGALY</b>, and <b>multiple grey-white necrotic foci in the LIVER</b> with mesenteric lymphadenitis; abortion and mummification in pregnant animals. An important <b>ZOONOSIS</b> for animal-house staff and a serious contaminant of experimental results</td></tr>\n        </table>"
  },
  {
   "id": "unit-6-b04",
   "n": 4,
   "page": 1,
   "tone": "t5",
   "title": "INFECTIOUS ECTROMELIA (mousepox)",
   "stars": 2,
   "kinds": [
    "trap"
   ],
   "html": "<ul class=\"sm\">\n          <li><b>Ectromelia virus, an ORTHOPOXVIRUS</b> — the mouse equivalent of smallpox. Highly contagious in a colony; spreads through skin abrasions, and also by <b>contaminated tumour lines and biological materials</b>, which is why it is a dreaded laboratory contaminant</li>\n          <li><b>The name means \"missing limb\"</b> — from the amputation of extremities in the chronic form</li>\n        </ul>\n        <div class=\"trap\"><span class=\"lbl\">Two very different forms — the examiner picks one</span>\n          <b>ACUTE (visceral) form</b> — the mouse dies in a few days <b>WITHOUT any skin lesion</b>. Post-mortem shows <b>multiple pale foci of NECROSIS in the LIVER and SPLEEN</b> (splenic necrosis is very characteristic), and necrosis of Peyer's patches, lymph nodes and thymus. Mortality can approach 100% in susceptible strains.<br>\n          <b>CHRONIC (cutaneous) form</b> — in more resistant strains. A generalised rash of <b>papules that ulcerate and scab</b>, with <b>oedema, necrosis and finally SLOUGHING (self-amputation) of the FEET, TAIL and SNOUT — this is \"ectromelia\"</b>; survivors are deformed and remain carriers.</div>\n        <b>Micro:</b> epidermal <b>ballooning degeneration and hyperplasia</b> with <b>eosinophilic INTRACYTOPLASMIC inclusion bodies (MARCHAL bodies)</b> in the epithelial cells, and hepatocellular necrosis with intracytoplasmic inclusions."
  },
  {
   "id": "unit-6-b05",
   "n": 5,
   "page": 1,
   "tone": "t4",
   "title": "Infantile diarrhoea · Mouse hepatitis virus · LCM",
   "stars": 2,
   "kinds": [
    "table"
   ],
   "html": "<table class=\"ta\">\n          <tr><th>Disease</th><th>Agent &amp; key point</th></tr>\n          <tr><td><b>INFANTILE DIARRHOEA</b><br>(epizootic diarrhoea of infant mice, EDIM)</td><td><b>ROTAVIRUS</b>. Affects <b>suckling mice under about 2 weeks</b> only; adults are infected but show nothing. The virus destroys the <b>mature absorptive enterocytes at the VILLUS TIP</b>, sparing the crypts, so the result is <b>VILLOUS ATROPHY with a malabsorptive, osmotic diarrhoea</b>. Clinically: <b>yellow watery faeces, a soiled and pasted perineum (\"sticky/scaly tail\"), a stomach still distended with curdled milk, and runting</b>. <b>Morbidity is very high but mortality is low</b> — the main loss is stunting and disrupted breeding</td></tr>\n          <tr><td><b>MOUSE HEPATITIS VIRUS (MHV)</b></td><td><b>CORONAVIRUS</b> — probably the <b>most prevalent and most troublesome viral contaminant of mouse colonies worldwide</b>. Two groups of strains:<br><b>Enterotropic strains</b> — diarrhoea and death in sucklings; <b>SYNCYTIAL (multinucleated) giant cells in the intestinal epithelium</b>.<br><b>Polytropic (respiratory) strains</b> — spread from the nose to liver, brain and lymphoid tissue: <b>multifocal hepatic necrosis with characteristic SYNCYTIAL GIANT CELLS</b>, splenic and lymphoid necrosis, vasculitis, and in some strains <b>demyelinating encephalomyelitis</b>.<br><b>In immunodeficient (nude/SCID) mice it produces a fatal chronic wasting disease.</b> Its greatest importance is that it <b>alters immune responses and enzyme levels and so invalidates experiments</b></td></tr>\n          <tr><td><b>LYMPHOCYTIC CHORIOMENINGITIS (LCM) ★</b></td><td><b>ARENAVIRUS</b>; the <b>mouse is the natural reservoir and sheds virus in urine, saliva and nasal secretion for life</b>. The classic model of how <b>the age at infection decides the disease</b>:<br><b>① Infected in utero or as a neonate →</b> the mouse becomes <b>IMMUNOLOGICALLY TOLERANT and PERSISTENTLY INFECTED</b> with no acute illness; over months the circulating antigen–antibody complexes deposit in the kidney and cause a fatal <b>IMMUNE-COMPLEX (Type III) GLOMERULONEPHRITIS</b> and arteritis — \"late disease\"<br><b>② Infected as an adult →</b> an <b>immune-mediated (T-cell) ACUTE disease</b>: <b>lymphocytic infiltration of the MENINGES, CHOROID PLEXUS and EPENDYMA</b> with convulsions and death. The <b>lesion is produced by the animal's own cytotoxic T cells, not by the virus</b> — the standard demonstration that immunopathology can be the disease<br><b>ZOONOTIC</b> — causes aseptic meningitis in people, and is a recognised hazard of handling laboratory mice, hamsters and transplanted tumour lines</td></tr>\n        </table>"
  },
  {
   "id": "unit-6-b06",
   "n": 6,
   "page": 2,
   "tone": "t6",
   "title": "GUINEA PIG",
   "stars": 2,
   "kinds": [
    "table",
    "trap"
   ],
   "html": "<div class=\"trap\"><span class=\"lbl\">SCURVY — the one guinea-pig question you must not lose</span> The guinea pig, like primates, fish and fruit bats, <b>lacks the enzyme L-gulonolactone oxidase and therefore CANNOT SYNTHESISE VITAMIN C</b> — it must get ascorbic acid in the diet.<br>\n        Vitamin C is needed for the <b>hydroxylation of proline and lysine</b> in collagen synthesis, so deficiency gives <b>defective collagen, osteoid, dentine and capillary basement membrane</b>.<br>\n        <b>Lesions:</b> <b>haemorrhages into the joints, muscles, periosteum and gums</b>; <b>swollen, painful joints and a reluctance to move (\"scorbutic pose\")</b>; <b>enlarged, beaded costochondral junctions</b>; loose teeth and bleeding gums; <b>failure of wound healing</b>; anaemia; enlarged epiphyses with a widened, disorganised growth plate. Death from haemorrhage or secondary infection.</div>\n        <table class=\"tg\">\n          <tr><th>Condition</th><th>Key point</th></tr>\n          <tr><td><b>Cervical lymphadenitis (\"LUMPS\")</b></td><td><b><i>Streptococcus equi</i> subsp. <i>zooepidemicus</i></b> entering through abrasions of the oral mucosa from coarse hay; produces <b>large abscesses of the cervical (submandibular) lymph nodes</b> that may rupture and discharge thick pus; septicaemia in some</td></tr>\n          <tr><td><b>Pneumonia</b></td><td>The <b>commonest cause of death in guinea-pig colonies</b>. <b><i>Bordetella bronchiseptica</i></b> (often carried silently by rabbits and dogs housed nearby) and <b><i>Streptococcus pneumoniae</i></b>; cranioventral consolidation, fibrinous pleuritis, otitis media</td></tr>\n          <tr><td><b>ANTIBIOTIC-ASSOCIATED ENTEROTOXAEMIA ★</b></td><td>Guinea pigs have a <b>Gram-positive-dominated caecal flora</b>. Giving a narrow-spectrum antibiotic active against Gram-positives — <b>penicillin, ampicillin, lincomycin, clindamycin, erythromycin</b> — wipes it out and allows <b><i>Clostridium difficile</i></b> to overgrow. Result: <b>fatal haemorrhagic typhlocolitis</b> within a few days. The same principle applies to rabbits and hamsters</td></tr>\n          <tr><td><b>Pregnancy toxaemia</b></td><td>Two forms: a <b>metabolic (ketotic)</b> form in <b>obese sows in late pregnancy</b> — hypoglycaemia, ketonuria and a <b>large pale fatty liver</b>; and an <b>ischaemic</b> form from compression of the uterine vessels by the gravid uterus and fat</td></tr>\n          <tr><td><b>Metastatic calcification</b></td><td>In older males on diets with <b>low magnesium and a high phosphorus : calcium ratio</b>; gritty white deposits in the <b>kidney, aorta, stomach, lung and skeletal muscle</b></td></tr>\n          <tr><td><b>Malocclusion (\"slobbers\")</b></td><td>Overgrowth of the continuously growing <b>premolar and molar cheek teeth</b>, which trap the tongue; drooling wets the chin and dewlap → moist dermatitis, starvation</td></tr>\n          <tr><td><b>Ectoparasites</b></td><td><b><i>Trixacarus caviae</i></b> — a sarcoptid mange mite causing <b>intense pruritus, self-trauma and even seizures</b>; lice <i>Gliricola porcelli</i>; ringworm (<i>Trichophyton mentagrophytes</i>)</td></tr>\n        </table>"
  },
  {
   "id": "unit-6-b07",
   "n": 7,
   "page": 2,
   "tone": "t5",
   "title": "RABBIT — bacterial diseases",
   "stars": 2,
   "kinds": [
    "table"
   ],
   "html": "<table class=\"tc\">\n          <tr><th>Disease</th><th>Agent &amp; lesion</th></tr>\n          <tr><td><b>PASTEURELLOSIS (\"SNUFFLES\")</b></td><td><b><i>Pasteurella multocida</i></b> — <b>the single most important bacterial disease of rabbits</b>, carried subclinically in the nasopharynx and precipitated by <b>poor ventilation, ammonia build-up and stress</b>. It presents in several forms:<br><b>① Rhinitis \"snuffles\"</b> — sneezing and a <b>mucopurulent nasal discharge that mats the fur of the medial forepaws</b> where the rabbit wipes its nose (a diagnostic sign)<br><b>② Otitis media/interna → \"WRY NECK\" (TORTICOLLIS)</b> and loss of balance, with creamy pus in the tympanic bulla<br><b>③ Pneumonia and pleuritis</b> — cranioventral consolidation with abscesses<br><b>④ Subcutaneous abscesses</b> with <b>thick, white, toothpaste-like inspissated pus</b> (rabbit pus is characteristically caseous, not liquid)<br><b>⑤ Genital</b> — pyometra, orchitis; and <b>⑥ septicaemia</b> with sudden death</td></tr>\n          <tr><td><b>\"BLUE BREASTS\"</b><br>(acute septic mastitis)</td><td>Chiefly <b><i>Staphylococcus aureus</i></b>, also streptococci, entering through a damaged teat in a lactating doe. The mammary glands become <b>hot, hard, swollen and intensely painful, then progress to a dark blue-black CYANOTIC and GANGRENOUS colour — hence the name</b>. The doe is febrile and toxaemic; the <b>litter dies of starvation or of septicaemia acquired while nursing</b>. Abscesses and sloughing follow in survivors</td></tr>\n          <tr><td><b>TREPONEMATOSIS</b><br>(rabbit syphilis, \"vent disease\")</td><td><b><i>Treponema paraluiscuniculi</i></b> — a <b>VENEREALLY transmitted spirochaete</b>, also passed from doe to kit at birth. <b>It is NOT zoonotic and does NOT cause human syphilis, and it is rarely fatal</b> — both points are often tested.<br><b>Lesions:</b> begin as <b>erythema, oedema and small vesicles on the vulva, prepuce, scrotum and anus</b>, which become <b>dry, brown, crusted and scaly scabs that bleed when removed</b>. By self-inoculation while grooming, identical lesions appear on the <b>nose, lips and eyelids</b>. Causes infertility and metritis.<br><b>Diagnosis: SILVER (Warthin–Starry) stain or dark-field microscopy of a scraping</b>; the organism cannot be cultured</td></tr>\n          <tr><td><b>ENTEROTOXAEMIA</b></td><td><b><i>Clostridium spiroforme</i></b> and its <b>iota toxin</b>. Affects mainly <b>weanling rabbits of 4–8 weeks</b>, precipitated by a <b>low-fibre, high-carbohydrate diet</b>, sudden diet change, stress or <b>oral antibiotics</b>.<br><b>Lesions: the CAECUM is distended with dark, watery, foul-smelling fluid and gas</b>; the caecal and colonic mucosa shows <b>petechial and \"paint-brush\" haemorrhages</b>; serosal haemorrhages. Death is often sudden, in the best-grown rabbits</td></tr>\n        </table>"
  },
  {
   "id": "unit-6-b08",
   "n": 8,
   "page": 2,
   "tone": "t3",
   "title": "RABBIT — viral and parasitic diseases",
   "stars": 3,
   "kinds": [
    "table"
   ],
   "html": "<table class=\"tp\">\n          <tr><th>Disease</th><th>Agent &amp; lesion</th></tr>\n          <tr><td><b>RABBIT POX</b></td><td>An <b>ORTHOPOXVIRUS closely related to vaccinia</b>; essentially a disease of <b>laboratory rabbit colonies</b>, spread by aerosol and contact. Fever, then a generalised eruption of <b>macules and papules over the whole skin</b>, with <b>marked OEDEMA of the eyelids, face, lips and the anogenital region</b>, blepharoconjunctivitis with a purulent discharge, and enlarged lymph nodes. Internally there is <b>focal necrosis in the lung, liver, spleen and testis</b>. <b>Mortality is high.</b> Intracytoplasmic inclusions</td></tr>\n          <tr><td><b>INFECTIOUS MYXOMATOSIS ★★★</b></td><td><b>MYXOMA VIRUS, a LEPORIPOXVIRUS</b>. Transmitted <b>MECHANICALLY by biting arthropods — mosquitoes and the rabbit flea</b> (so outbreaks are seasonal). The natural host is the American cottontail, in which it causes only a benign fibroma; in the <b>EUROPEAN rabbit (<i>Oryctolagus</i>) it is devastating, with mortality approaching 100%</b> — this is the virus deliberately released in Australia to control rabbits.<br><b>Gross:</b> <b>severe gelatinous OEDEMA of the eyelids, base of the ears, nose, muzzle and the ANOGENITAL region</b>, producing the classic swollen, drooping <b>\"LION-HEAD\" appearance</b>; a <b>thick purulent blepharoconjunctivitis</b> glues the eyes shut; and multiple raised, rubbery, <b>gelatinous cutaneous tumour-like masses called \"MYXOMAS\"</b>, especially on the ears and face.<br><b>Micro:</b> the dermis is expanded by a loose, <b>mucinous (myxomatous) matrix</b> containing large stellate <b>\"MYXOMA CELLS\"</b>, with epidermal hyperplasia, ballooning degeneration and <b>eosinophilic INTRACYTOPLASMIC inclusion bodies</b></td></tr>\n          <tr><td><b>PAPILLOMATOSIS</b></td><td>Two distinct viruses:<br><b>① Shope (cottontail) papillomavirus</b> — <b>horny, keratinised, wart-like growths on the skin of the neck, shoulders and abdomen</b>; historically important because these papillomas can <b>progress to SQUAMOUS CELL CARCINOMA</b>, making this the first experimental model of viral carcinogenesis in a mammal.<br><b>② Rabbit oral papillomavirus</b> — small, grey-white, sessile <b>nodules on the UNDERSIDE OF THE TONGUE and floor of the mouth</b> of young rabbits; benign and self-limiting</td></tr>\n          <tr><td><b>COCCIDIOSIS ★</b></td><td><b>The commonest parasitic disease of rabbits.</b> Two forms — always answer both:<br><b>① HEPATIC coccidiosis — <i>Eimeria stiedae</i></b>, which is unique in parasitising the <b>EPITHELIUM OF THE BILE DUCTS</b>. The <b>liver is enlarged and studded with sharply outlined white to yellow nodules and cords that follow the course of the bile ducts</b>; the ducts are thick-walled and full of creamy material packed with oocysts. Micro: <b>marked bile-duct (biliary) epithelial HYPERPLASIA with papillary projections, and all stages of the parasite inside the epithelial cells</b>. Icterus, ascites, and death in young rabbits.<br><b>② INTESTINAL coccidiosis — <i>E. magna, E. irresidua, E. perforans, E. flavescens</i></b> — catarrhal to haemorrhagic enteritis, diarrhoea, dehydration and poor growth</td></tr>\n          <tr><td><b>MITE INFESTATION</b></td><td><b><i>Psoroptes cuniculi</i> — \"EAR CANKER\"</b>, by far the commonest. Thick, dry, greyish-brown, crumbly, flaky <b>crusts filling the ear canal and pinna</b>; intense irritation with head shaking and ear scratching; may extend to <b>otitis media/interna and torticollis</b>, or become secondarily infected.<br><b><i>Cheyletiella parasitovorax</i></b> — <b>\"WALKING DANDRUFF\"</b>, large surface-living mites causing scurf and mild alopecia over the shoulders and back; <b>ZOONOTIC</b>, giving an itchy rash on handlers.<br><b><i>Sarcoptes scabiei</i> and <i>Notoedres</i></b> — burrowing mange of nose, lips and feet with thick crusts and intense pruritus</td></tr>\n        </table>"
  },
  {
   "id": "unit-6-b09",
   "n": 9,
   "page": 3,
   "tone": "t5",
   "title": "VIRAL DISEASES OF WILD ANIMALS",
   "stars": 2,
   "kinds": [
    "table"
   ],
   "html": "<table class=\"tc\">\n          <tr><th>Disease</th><th>Agent &amp; pathology in wildlife</th></tr>\n          <tr><td><b>WEST NILE FEVER</b></td><td><b>FLAVIVIRUS</b>, transmitted by <b><i>Culex</i> mosquitoes</b>. <b>Wild BIRDS are the amplifying/reservoir hosts</b>; <b>corvids (crows, jays, magpies) die in large numbers</b> and a die-off of crows is the classic early warning of an outbreak. <b>Horses and humans are DEAD-END hosts</b> (they do not develop enough viraemia to infect a mosquito).<br><b>Lesions:</b> in birds — myocardial necrosis, splenomegaly, encephalitis, haemorrhage. In horses — <b>non-suppurative POLIOENCEPHALOMYELITIS concentrated in the GREY MATTER of the BRAIN STEM and SPINAL CORD</b>, with perivascular cuffing, gliosis, neuronal necrosis and microglial nodules; clinically ataxia, muscle fasciculation and recumbency. <b>Zoonotic</b></td></tr>\n          <tr><td><b>RABIES</b></td><td>Same <b>Lyssavirus</b>, but in wildlife the epidemiology differs: the reservoirs in India include the <b>jackal, fox, mongoose and stray dog</b>, and elsewhere <b>bats, raccoons and skunks</b>. Wild carnivores show the <b>furious form</b> — loss of fear of man, daytime activity, aggression, aimless wandering — and herbivores such as deer show the <b>dumb/paralytic form</b>. Same pathology: <b>non-suppurative polioencephalitis with NEGRI BODIES</b>; diagnosis by <b>FAT on brain</b>. Rabies in a wild animal that has bitten people is a public-health emergency</td></tr>\n          <tr><td><b>FOOT AND MOUTH DISEASE</b></td><td>Affects wild cloven-footed species — <b>gaur, deer (chital, sambar), blackbuck, nilgai, wild boar and Asian elephants</b>. Same lesions: <b>vesicles and erosions on the tongue, dental pad, interdigital cleft and coronary band</b>, lameness, and <b>\"TIGER HEART\" myocarditis in the young</b>, which causes the deaths. Outbreaks in national parks usually spill over from <b>infected livestock grazing at the forest fringe</b> — an important interface problem in India</td></tr>\n          <tr><td><b>POX</b></td><td><b>Camelpox</b> in camels; <b>buffalopox</b> (zoonotic, teat and udder lesions); <b>MONKEYPOX</b> in non-human primates and rodents, a serious <b>zoonosis</b>; elephant pox; and capripox in wild ruminants. All show the same sequence <b>macule → papule → vesicle → pustule → scab</b> with <b>ballooning degeneration and INTRACYTOPLASMIC inclusion bodies</b></td></tr>\n          <tr><td><b>KYASANUR FOREST DISEASE ★★</b><br>(\"monkey fever\")</td><td>A <b>FLAVIVIRUS</b> first recognised in <b>1957 in the Kyasanur forest of Shimoga district, KARNATAKA, INDIA</b> — so it is a favourite Indian question. Transmitted by the <b>hard tick <i>Haemaphysalis spinigera</i></b>; small forest rodents and shrews maintain it, and <b>monkeys — the black-faced langur and the red-faced bonnet macaque — die in large numbers</b>. A <b>monkey die-off in the forest precedes human cases</b>, so it is used as a sentinel.<br><b>Lesions:</b> a <b>haemorrhagic fever</b> — widespread <b>haemorrhages in the gut, lungs and serosae</b>, <b>focal necrosis of the liver and kidney</b>, interstitial pneumonia, and <b>erythrophagocytosis in the spleen, liver and lymph nodes</b>. In people it causes a severe haemorrhagic fever; forest workers and veterinarians are at risk</td></tr>\n          <tr><td><b>INFECTIOUS HEPATITIS VIRUS</b></td><td><b>Canine adenovirus-1</b> in wild carnivores — <b>foxes, wolves, jackals, coyotes and bears</b>. In addition to the usual <b>centrilobular hepatic necrosis with Cowdry type A intranuclear inclusions</b> and gall-bladder wall oedema, it characteristically produces <b>\"FOX ENCEPHALITIS\"</b> — <b>vasculitis of CNS vessels with haemorrhage and non-suppurative encephalitis</b>, giving convulsions and paralysis. Related canine adenovirus-2 causes kennel cough</td></tr>\n        </table>"
  },
  {
   "id": "unit-6-b10",
   "n": 10,
   "page": 3,
   "tone": "t2",
   "title": "BACTERIAL DISEASES OF WILD ANIMALS",
   "stars": 2,
   "kinds": [
    "table"
   ],
   "html": "<table class=\"tt\">\n          <tr><th>Disease</th><th>Pathology in wildlife</th></tr>\n          <tr><td><b>ANTHRAX</b></td><td><b>The classic cause of mass die-offs of wild herbivores</b> — grazing animals ingest spores concentrated at drying waterholes and on disturbed soil, especially at the end of a dry season. Vultures, hyaenas and flies then <b>spread the spores widely</b>.<br><b>Same rules as in livestock and they are always examined:</b> a wild herbivore found dead with <b>dark tarry unclotted blood from the natural orifices, absent or incomplete rigor mortis and a huge soft \"blackberry-jam\" spleen</b> must <b>NOT be opened in the field</b>. Take a <b>peripheral blood smear and stain by polychrome methylene blue for McFADYEAN'S reaction</b>. Dispose by <b>incineration or deep burial with quicklime</b>; the carcass site remains infective for decades. Carnivores are relatively resistant but may get the pharyngeal/intestinal form</td></tr>\n          <tr><td><b>TUBERCULOSIS</b></td><td><b><i>Mycobacterium bovis</i></b> in <b>deer, wild boar, bison and antelope</b> — often maintained in a wildlife reservoir that reinfects cattle. <b>Captive ELEPHANTS are important because they usually get <i>M. tuberculosis</i> FROM PEOPLE — a REVERSE zoonosis</b>, presenting as chronic weight loss with a trunk-wash-positive culture. Lesions are the usual <b>caseous granulomas with epithelioid and Langhans giant cells in lung and lymph nodes</b>, but <b>calcification is often minimal in deer, in which the lesions may be soft and abscess-like</b>. Confirmed by <b>Ziehl–Neelsen</b> and culture</td></tr>\n          <tr><td><b>COLIBACILLOSIS</b></td><td><b><i>E. coli</i></b> in hand-reared and captive-born neonates, almost always secondary to <b>FAILURE OF PASSIVE TRANSFER</b> when the young is separated from the dam or fed an unsuitable milk replacer. Produces <b>watery diarrhoea and dehydration</b>, and in the septicaemic form <b>omphalitis, polyarthritis, meningitis and fibrinous polyserositis</b>. A leading cause of death in zoo nurseries</td></tr>\n          <tr><td><b>CLOSTRIDIAL INFECTIONS</b></td><td><b>Enterotoxaemia (<i>Cl. perfringens</i>)</b> in captive and hand-reared ungulates after sudden access to rich concentrate — pulpy kidney, haemorrhagic enteritis. <b>Blackleg (<i>Cl. chauvoei</i>)</b> in wild bovids — dark crepitant muscle. <b>Tetanus</b> after wounds, snare injuries and darting. <b>BOTULISM (<i>Cl. botulinum</i> type C)</b> is the great one in wildlife — it causes <b>massive die-offs of WATERFOWL</b> at shallow, warm, drying wetlands, where the birds eat maggots from rotting carcasses; they show <b>flaccid paralysis of the neck (\"LIMBERNECK\"), wings and legs and drown</b>, and there are <b>no gross lesions</b></td></tr>\n        </table>"
  },
  {
   "id": "unit-6-b11",
   "n": 11,
   "page": 4,
   "tone": "t5",
   "title": "PARASITIC DISEASES OF WILD ANIMALS",
   "stars": 0,
   "kinds": [
    "table"
   ],
   "html": "<table class=\"tc\">\n          <tr><th>Disease</th><th>Key point in wildlife</th></tr>\n          <tr><td><b>TRYPANOSOMOSIS</b></td><td><b><i>Trypanosoma evansi</i> (surra)</b> is the important one in India — it affects <b>camels most severely</b>, and also <b>deer, tigers, leopards and elephants in captivity</b>, where infected buffalo or camels nearby act as the source and <b><i>Tabanus</i> flies transmit it MECHANICALLY</b>. Big cats often acquire it by <b>eating infected meat</b>. Signs: intermittent fever, progressive <b>anaemia and cachexia</b>, ventral oedema, dullness, and terminal <b>nervous signs</b>. Post-mortem: <b>splenomegaly, lymphadenopathy, serous atrophy of fat, pale carcass, hydropericardium and non-suppurative meningoencephalitis</b>. Diagnosis: <b>wet blood film for motile organisms, Giemsa-stained smear, mouse inoculation, PCR</b></td></tr>\n          <tr><td><b>BABESIOSIS</b></td><td><b><i>Babesia</i></b> species in wild bovids, deer and wild canids, transmitted by <b>ixodid ticks</b>. Free-living wildlife is usually in <b>endemic stability</b> and shows no disease, acting as a reservoir. Clinical disease appears in <b>stressed, translocated, captured or immunosuppressed animals</b> — <b>fever, intravascular haemolysis with HAEMOGLOBINURIA, jaundice, anaemia and splenomegaly</b>. Diagnosis: <b>pear-shaped paired piroplasms inside the red cells</b> on a Giemsa-stained smear</td></tr>\n          <tr><td><b>THEILERIOSIS</b></td><td><b><i>Theileria</i></b> species in wild bovids and deer, transmitted by <b><i>Hyalomma</i> and <i>Rhipicephalus</i></b> ticks. <b>Marked lymph node enlargement</b>, fever, anaemia and jaundice, <b>\"punched-out\" abomasal ulcers</b>, and pulmonary oedema. Diagnosis by <b>KOCH'S BLUE BODIES (schizonts) in lymphocytes</b> of a lymph-node aspirate. As with babesiosis, <b>wildlife often carries the parasite silently and infects introduced exotic or crossbred stock</b></td></tr>\n        </table>"
  },
  {
   "id": "unit-6-b12",
   "n": 12,
   "page": 4,
   "tone": "t6",
   "title": "NUTRITIONAL DEFICIENCY DISEASES OF WILD ANIMALS",
   "stars": 2,
   "kinds": [
    "table",
    "trap"
   ],
   "html": "<p class=\"sm\">Almost all of these are diseases of <b>CAPTIVITY</b> — a free-ranging animal selects a balanced diet, a caged or hand-reared one eats what it is given.</p>\n        <table class=\"tg\">\n          <tr><th>Deficiency</th><th>Disease produced</th></tr>\n          <tr><td><b>Calcium / phosphorus / vitamin D</b><br><b>(NUTRITIONAL SECONDARY HYPERPARATHYROIDISM) ★</b></td><td><b>The commonest and most important nutritional disease of captive wildlife.</b> Caused by an <b>ALL-MEAT diet in hand-reared carnivores</b> (muscle meat is very low in calcium and high in phosphorus, giving a badly inverted Ca : P ratio), and by lack of sunlight in indoor enclosures. Low ionised calcium → <b>sustained parathyroid hormone release → bone is resorbed and replaced by fibrous tissue = FIBROUS OSTEODYSTROPHY</b>.<br><b>Lesions:</b> <b>soft, thin, poorly mineralised bones with pathological folding fractures, bowed limbs, a rubbery mandible, collapsed vertebrae with paralysis</b>, reluctance to move, and tetany. Classic in hand-reared <b>tiger and leopard cubs, primates and captive reptiles</b>. Called <b>rickets</b> if the growth plates are still open, <b>osteomalacia</b> in adults</td></tr>\n          <tr><td><b>Vitamin A</b></td><td>Common in captive carnivores, primates and reptiles on poor diets: <b>night blindness and xerophthalmia</b>, <b>squamous metaplasia and keratinisation of glandular epithelium</b>, respiratory infection, poor growth, and in reptiles the classic <b>swollen closed eyelids from squamous metaplasia of the harderian gland</b>. Conversely, <b>hypervitaminosis A</b> from an all-liver diet causes <b>deforming cervical spondylosis</b> in captive cats</td></tr>\n          <tr><td><b>Vitamin E / selenium</b></td><td><b>WHITE MUSCLE DISEASE / nutritional muscular dystrophy</b> in captive ungulates, especially <b>deer, antelope and zoo-reared calves</b> on stored feed: <b>bilaterally symmetrical chalky white streaks in skeletal muscle and heart</b>, Zenker's degeneration, ↑ CK and AST. Also <b>steatitis (\"yellow fat disease\")</b> in fish-eating animals and captive felids</td></tr>\n          <tr><td><b>THIAMINE (B₁) ★</b></td><td>Occurs in animals fed <b>large amounts of RAW FISH, which contains THIAMINASE</b> — captive <b>fish-eating birds, otters, seals, dolphins, crocodiles and fur animals</b>. This is <b>\"CHASTEK PARALYSIS\"</b>: anorexia, ataxia, head tremor, <b>opisthotonus/star-gazing</b> and convulsions, and in ruminants <b>POLIOENCEPHALOMALACIA</b> with laminar cortical necrosis that <b>autofluoresces under UV light</b>. Prevented by cooking the fish or supplementing thiamine</td></tr>\n          <tr><td><b>Vitamin C</b></td><td><b>Scurvy</b> in captive <b>primates, guinea pigs, fruit bats and some fish</b>, which cannot synthesise ascorbic acid — haemorrhages, painful swollen joints, gum disease and failure of wound healing</td></tr>\n          <tr><td><b>Iodine · copper · cobalt · iron</b></td><td><b>Goitre</b> in captive ungulates and reptiles on goitrogenic diets; <b>copper deficiency</b> → ataxia, achromotrichia and anaemia in wild ruminants on deficient range; <b>iron deficiency</b> anaemia in hand-reared young</td></tr>\n          <tr><td><b>Protein–energy malnutrition</b></td><td>Free-ranging wildlife in drought or overstocked habitat: <b>emaciation, SEROUS ATROPHY OF FAT in the coronary groove, perirenal region and bone marrow</b> (the marrow becomes gelatinous and watery — the standard field indicator of starvation), hypoproteinaemic oedema and heavy parasite burdens</td></tr>\n        </table>\n        <div class=\"trap\"><span class=\"lbl\">Not nutritional, but the wildlife lesion you must know ★</span> <b>CAPTURE MYOPATHY (exertional rhabdomyolysis)</b> — follows the <b>chase, capture, restraint or transport</b> of a wild animal, especially deer, antelope, blackbuck and zebra. Extreme exertion with catecholamine release causes <b>lactic acidosis and Zenker's (coagulative) necrosis of skeletal and cardiac muscle</b>: <b>pale, dry, chalky-white streaked muscle</b>, <b>myoglobinuria with dark brown urine and renal tubular necrosis</b>, and death hours to days later. <b>Prevention — minimise chase time, use proper chemical immobilisation, avoid the heat of the day.</b></div>"
  },
  {
   "id": "unit-6-b13",
   "n": 13,
   "page": 4,
   "tone": "t3",
   "title": "Necropsy of laboratory and wild animals — the practical rules",
   "stars": 0,
   "kinds": [],
   "html": "<ul class=\"sm\">\n          <li><b>Legal position:</b> a wild animal necropsy needs the <b>authority of the Forest Department</b> under the Wild Life (Protection) Act; it is usually done <b>in the presence of forest officials</b>, and in a suspected poaching or poisoning case it is treated exactly like a <b>veterolegal</b> post-mortem — photographs, numbered samples, seals and a documented chain of custody</li>\n          <li><b>Always exclude ANTHRAX first</b> in any herbivore found dead — blood smear before the knife</li>\n          <li><b>Look for human interference:</b> snare and wire marks, bullet or pellet wounds (radiograph if possible), missing claws, teeth, horn, skin or gall bladder, and <b>evidence of deliberate poisoning of a carcass</b> — carnivore deaths in India are commonly due to <b>pesticide-laced baits</b>, so collect <b>stomach content, liver and kidney frozen, with NO preservative</b>, for toxicology</li>\n          <li><b>Decomposition is usually advanced</b> in field cases; interpret cautiously and separate post-mortem change from lesion</li>\n          <li><b>Laboratory animals:</b> the value of the necropsy is often to detect <b>subclinical colony infections that invalidate experiments</b> (MHV, LCM, <i>Corynebacterium kutscheri</i>). Perform under sterile conditions; sample for serology and PCR as well as histopathology, and remember that <b>LCM, salmonellosis, and <i>Cheyletiella</i> are ZOONOSES</b></li>\n        </ul>"
  },
  {
   "id": "unit-6-b14",
   "n": 14,
   "page": 4,
   "tone": "t4",
   "title": "BLANK-FILL DRILL — Unit 6",
   "stars": 0,
   "kinds": [
    "drill"
   ],
   "html": "",
   "drill": true
  }
 ],
 "drill": [
  {
   "id": "unit-6-d001",
   "html": "Tyzzer's disease is caused by <u>Clostridium piliforme</u>, which is an <u>obligate intracellular</u> organism"
  },
  {
   "id": "unit-6-d002",
   "html": "Tyzzer's disease affects the <u>liver, intestine and heart</u>"
  },
  {
   "id": "unit-6-d003",
   "html": "The bacilli of Tyzzer's disease lie in a <u>criss-cross</u> pattern and are shown by the <u>Warthin–Starry</u> silver stain"
  },
  {
   "id": "unit-6-d004",
   "html": "Gerbils are the <u>most susceptible</u> rodent to Tyzzer's disease"
  },
  {
   "id": "unit-6-d005",
   "html": "Pseudotuberculosis nodules are <u>not</u> acid-fast, unlike tuberculosis"
  },
  {
   "id": "unit-6-d006",
   "html": "Corynebacterium kutscheri causes a <u>latent</u> infection that flares under <u>stress</u>"
  },
  {
   "id": "unit-6-d007",
   "html": "Salmonellosis in rodents causes <u>splenomegaly</u> with hepatic <u>necrotic foci</u>"
  },
  {
   "id": "unit-6-d008",
   "html": "Infectious ectromelia is caused by an <u>orthopoxvirus</u> and the name means <u>missing limb</u>"
  },
  {
   "id": "unit-6-d009",
   "html": "The acute form of mousepox causes necrosis of the <u>liver and spleen</u> with <u>no</u> skin lesions"
  },
  {
   "id": "unit-6-d010",
   "html": "Mousepox inclusions are called <u>Marchal</u> bodies and are <u>intracytoplasmic</u>"
  },
  {
   "id": "unit-6-d011",
   "html": "Epizootic diarrhoea of infant mice is caused by <u>rotavirus</u> and gives <u>villous atrophy</u>"
  },
  {
   "id": "unit-6-d012",
   "html": "Mouse hepatitis virus is a <u>coronavirus</u> and produces <u>syncytial giant cells</u>"
  },
  {
   "id": "unit-6-d013",
   "html": "Lymphocytic choriomeningitis virus is an <u>arenavirus</u>; the natural reservoir is the <u>mouse</u>"
  },
  {
   "id": "unit-6-d014",
   "html": "Mice infected with LCM in utero become <u>immunologically tolerant</u> and develop <u>immune-complex glomerulonephritis</u>"
  },
  {
   "id": "unit-6-d015",
   "html": "In adult mice the LCM lesion is caused by the animal's own <u>cytotoxic T cells</u>"
  },
  {
   "id": "unit-6-d016",
   "html": "Guinea pigs cannot make vitamin C because they lack <u>L-gulonolactone oxidase</u>"
  },
  {
   "id": "unit-6-d017",
   "html": "Scurvy causes haemorrhage into the <u>joints and gums</u> and <u>beading</u> of the costochondral junctions"
  },
  {
   "id": "unit-6-d018",
   "html": "\"Lumps\" in guinea pigs is cervical lymphadenitis caused by <u>Streptococcus zooepidemicus</u>"
  },
  {
   "id": "unit-6-d019",
   "html": "Penicillin given to a guinea pig causes fatal enterotoxaemia due to <u>Clostridium difficile</u>"
  },
  {
   "id": "unit-6-d020",
   "html": "Snuffles in rabbits is caused by <u>Pasteurella multocida</u>; middle-ear spread gives <u>torticollis</u>"
  },
  {
   "id": "unit-6-d021",
   "html": "Rabbit pus is characteristically <u>thick and caseous</u>, not liquid"
  },
  {
   "id": "unit-6-d022",
   "html": "Blue breasts of rabbits is acute <u>mastitis</u>, usually caused by <u>Staphylococcus aureus</u>"
  },
  {
   "id": "unit-6-d023",
   "html": "Rabbit syphilis is caused by <u>Treponema paraluiscuniculi</u> and is <u>not</u> zoonotic"
  },
  {
   "id": "unit-6-d024",
   "html": "Rabbit enterotoxaemia is caused by <u>Clostridium spiroforme</u> and its <u>iota</u> toxin"
  },
  {
   "id": "unit-6-d025",
   "html": "Myxomatosis is caused by a <u>leporipoxvirus</u> spread <u>mechanically</u> by mosquitoes and fleas"
  },
  {
   "id": "unit-6-d026",
   "html": "Myxomatosis produces the <u>lion-head</u> appearance and stellate <u>myxoma cells</u> in a mucinous matrix"
  },
  {
   "id": "unit-6-d027",
   "html": "Shope papilloma of rabbits may progress to <u>squamous cell carcinoma</u>"
  },
  {
   "id": "unit-6-d028",
   "html": "Hepatic coccidiosis of rabbits is caused by <u>Eimeria stiedae</u>, which parasitises the <u>bile duct epithelium</u>"
  },
  {
   "id": "unit-6-d029",
   "html": "Ear canker in rabbits is caused by <u>Psoroptes cuniculi</u>"
  },
  {
   "id": "unit-6-d030",
   "html": "Cheyletiella parasitovorax causes <u>walking dandruff</u> and is <u>zoonotic</u>"
  },
  {
   "id": "unit-6-d031",
   "html": "West Nile virus is a <u>flavivirus</u> spread by <u>Culex</u> mosquitoes; <u>birds</u> are the amplifying hosts"
  },
  {
   "id": "unit-6-d032",
   "html": "Horses and humans are <u>dead-end</u> hosts for West Nile virus"
  },
  {
   "id": "unit-6-d033",
   "html": "Kyasanur forest disease was first recognised in <u>Karnataka</u> and is spread by <u>Haemaphysalis spinigera</u>"
  },
  {
   "id": "unit-6-d034",
   "html": "A die-off of <u>monkeys</u> precedes human cases of Kyasanur forest disease"
  },
  {
   "id": "unit-6-d035",
   "html": "Canine adenovirus-1 in foxes causes <u>fox encephalitis</u> with CNS <u>vasculitis</u>"
  },
  {
   "id": "unit-6-d036",
   "html": "Captive elephants usually acquire <u>Mycobacterium tuberculosis</u> from <u>humans</u> — a reverse zoonosis"
  },
  {
   "id": "unit-6-d037",
   "html": "Botulism causes mass mortality of <u>waterfowl</u> and produces <u>limberneck</u>"
  },
  {
   "id": "unit-6-d038",
   "html": "Surra in captive tigers is often acquired by eating <u>infected meat</u>"
  },
  {
   "id": "unit-6-d039",
   "html": "The commonest nutritional disease of hand-reared carnivores is <u>nutritional secondary hyperparathyroidism</u> from an <u>all-meat</u> diet"
  },
  {
   "id": "unit-6-d040",
   "html": "Feeding raw fish causes <u>thiamine</u> deficiency because fish contains <u>thiaminase</u>"
  },
  {
   "id": "unit-6-d041",
   "html": "Chastek paralysis is <u>thiamine</u> deficiency in fur-bearing and fish-eating animals"
  },
  {
   "id": "unit-6-d042",
   "html": "Gelatinous watery bone marrow indicates <u>serous atrophy of fat</u>, that is <u>starvation</u>"
  },
  {
   "id": "unit-6-d043",
   "html": "Capture myopathy produces <u>Zenker's necrosis</u> of muscle and <u>myoglobinuria</u>"
  },
  {
   "id": "unit-6-d044",
   "html": "Wildlife necropsy requires the authority of the <u>Forest Department</u> and toxicology samples must carry <u>no preservative</u>"
  }
 ]
};

/* Convenience list in unit order. Do not edit. */
var revisionUnits = Object.keys(revisionData).map(function (k) { return revisionData[k]; });
