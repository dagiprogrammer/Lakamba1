export interface SectorInfo {
  id: string;
  name: string;
  nameAm: string;
  category: string;
  tagline: string;
  taglineAm: string;
  description: string;
  descriptionAm: string;
  iconType: 'construction' | 'mining' | 'agriculture' | 'industry' | 'hospitality' | 'logistics';
  keyHoldings: string[];
  metrics: { label: string; labelAm: string; value: string }[];
  capabilities: string[];
  operationalFocus: string;
}

export interface Milestone {
  yearEc: string;
  yearGc: string;
  title: string;
  titleAm: string;
  description: string;
  descriptionAm: string;
  leader: string;
  pillar: string;
}

export interface ExpansionCorridor {
  id: string;
  title: string;
  titleAm: string;
  corridor: string;
  scope: string;
  scopeAm: string;
  strategicImpact: string;
  status: string;
}

export interface ProjectAsset {
  id: string;
  title: string;
  titleAm: string;
  sector: string;
  location: string;
  status: string;
  description: string;
  descriptionAm: string;
  metric: string;
  year: string;
}

export const GROUP_HERITAGE = {
  name: "Lakamba Group",
  nameAm: "ለኻምባ ግሩፕ",
  fullName: "Lakamba Investment Group",
  fullNameAm: "ለኻምባ ኢንቨስትመንት ግሩፕ",
  founder: "Kahsay Abraha",
  founderAm: "ካሕሳይ አብርሃ",
  foundedYearEc: "1962 ዓ.ም.",
  foundedYearGc: "1970 G.C.",
  nextGenLeader: "Milkiyas Kahsay",
  nextGenLeaderAm: "ሚልኪያስ ካሕሳይ",
  leadershipRole: "Next-Generation Leadership / Executive Management",
  leadershipRoleAm: "ቀጣይ-ትውልድ ዋና ስራ አስፈፃሚ አመራር",
  headquarters: "African Union area (AU around), Addis Ababa, Ethiopia",
  headquartersAm: "በአፍሪካ ህብረት አካባቢ (AU ዙሪያ)፣ አዲስ አበባ፣ ኢትዮጵያ",
  phones: ["+251 942 101 090", "+251 948 887 756"],
  emails: ["info@lakambagroup.com", "executive@lakambagroup.com"],
};

export const CORE_SECTORS: SectorInfo[] = [
  {
    id: "construction",
    name: "Construction",
    nameAm: "ኮንስትራክሽን",
    category: "Heavy Civil Works & Infrastructure",
    tagline: "Building resilient arterial roads and structural foundations across Ethiopia",
    taglineAm: "አገር አቀፍ የመንገድና የሲቪል መሰረተ-ልማት ግንባታዎችን ማከናወን",
    description: "Equipped with heavy civil machinery, asphalt plants, and engineering teams, Lakamba Construction undertakes arterial highways, urban bridges, earthworks, and commercial infrastructure projects across Ethiopia.",
    descriptionAm: "በከባድ የምድር ስራ ማሽነሪዎች እና የአስፋልት ፕላንቶች የተደራጀው የኮንስትራክሽን ዘርፍ ሀገር አቀፍ አውራ ጎዳናዎችንና ዘመናዊ የሲቪል ግንባታዎችን ይገነባል።",
    iconType: "construction",
    keyHoldings: ["Lakamba Heavy Infrastructure Ltd.", "Addis Civil Engineering", "Lakamba Asphalt & Aggregate Units"],
    metrics: [
      { label: "Highways & Arterials", labelAm: "የተገነቡ አውራ ጎዳናዎች", value: "320+ km" },
      { label: "Heavy Machinery Units", labelAm: "ከባድ ማሽነሪዎች", value: "115 Units" },
      { label: "Batching Output", labelAm: "የኮንክሪት ማምረት አቅም", value: "180 m³/hr" }
    ],
    capabilities: [
      "Highway grading and asphalt paving",
      "Reinforced concrete structural engineering",
      "Industrial park civil infrastructure",
      "Heavy earthmoving and deep excavation"
    ],
    operationalFocus: "Civil Infrastructure & Contracting"
  },
  {
    id: "mining",
    name: "Mining",
    nameAm: "ማዕድን",
    category: "Mineral Extraction & Dimension Stone",
    tagline: "Developing Ethiopia's geological assets with modern extraction and finishing",
    taglineAm: "የኢትዮጵያን የተፈጥሮ ድንጋይና ማዕድናት በዘመናዊ መንገድ ማውጣትና ማቀነባበር",
    description: "Operating certified natural stone quarries, industrial aggregate crushing lines, and dimension stone facilities supplying premium granite and marble for domestic projects and international exports.",
    descriptionAm: "የግራናይት፣ እምነበረድ እና የኢንዱስትሪ ማዕድናትን ከማውጫዎች በማምረት ለሀገር ውስጥ ግንባታዎችና ለውጭ ገበያ ያቀርባል።",
    iconType: "mining",
    keyHoldings: ["Lakamba Natural Stone Ltd.", "Horn Dimension Quarries", "Lakamba Industrial Aggregates"],
    metrics: [
      { label: "Quarry Production", labelAm: "የድንጋይ ማምረት አቅም", value: "450k Tons/yr" },
      { label: "Polished Slabs Output", labelAm: "የተጠናቀቁ የእምነበረድ ወለሎች", value: "60k m²/yr" },
      { label: "Active Concessions", labelAm: "ንቁ የማዕድን ይዞታዎች", value: "4 Sites" }
    ],
    capabilities: [
      "High-purity granite and marble extraction",
      "Automated diamond-wire stone sawing",
      "Industrial ballast and aggregate crushing",
      "Site environmental management"
    ],
    operationalFocus: "Natural Resources & Beneficiation"
  },
  {
    id: "agriculture",
    name: "Agriculture",
    nameAm: "ግብርና",
    category: "Commercial Farming & Agro-Processing",
    tagline: "Cultivating premium organic export crops and strengthening food security",
    taglineAm: "ተፈላጊ የውጭ ንግድ ምርቶችን ማልማት እና የምግብ ዋስትናን ማጠናከር",
    description: "Lakamba Agriculture manages commercial farmland dedicated to organic highland Arabica coffee, sesame, oilseeds, and pulses, integrated with modern cleaning, sorting, and export staging facilities.",
    descriptionAm: "ከፍተኛ ጥራት ያለው የቡና፣ የሰሊጥ፣ የቅባት እህሎች እርሻዎችን በማስተዳደር በዘመናዊ ቴክኖሎጂ አቀናብሮ ለዓለም አቀፍ ገበያ ያቀርባል።",
    iconType: "agriculture",
    keyHoldings: ["Lakamba Agro-Ventures", "Highland Specialty Coffee", "Horn Oilseeds Processing"],
    metrics: [
      { label: "Farmland Managed", labelAm: "የለማ የእርሻ መሬት", value: "12,000+ Ha" },
      { label: "Annual Coffee Export", labelAm: "ዓመታዊ የቡና ኤክስፖርት", value: "2,400+ Tons" },
      { label: "Outgrower Network", labelAm: "አብረው የሚሰሩ አርሶ አደሮች", value: "3,500+ Farmers" }
    ],
    capabilities: [
      "Specialty highland Arabica coffee cultivation",
      "Optical color-sorting and vacuum packaging",
      "Sustainable irrigation and soil conservation",
      "Organic export certification compliance"
    ],
    operationalFocus: "Primary Agro-Production & Exports"
  },
  {
    id: "industry",
    name: "Industry",
    nameAm: "ኢንዱስትሪ",
    category: "Manufacturing & Import Substitution",
    tagline: "Accelerating domestic fabrication and reducing imported material reliance",
    taglineAm: "የሀገር ውስጥ የማምረት አቅምን ማሳደግ እና ገቢ ምርቶችን መተካት",
    description: "Industrial operations focus on precast concrete components, structural steel fabrication, and building consumables designed to accelerate construction timelines and support national manufacturing independence.",
    descriptionAm: "የቅድመ-ግንባታ ኮንክሪት፣ የብረታ ብረት መዋቅሮች እና የግንባታ ማቴሪያሎችን በማምረት ሀገራዊ የገቢ ምርት ቅነሳን ያፋጥናል።",
    iconType: "industry",
    keyHoldings: ["Lakamba Precast Solutions", "National Steel Fabricators", "Lakamba Building Components"],
    metrics: [
      { label: "Precast Concrete Output", labelAm: "የቅድመ-ግንባታ ኮንክሪት", value: "85k m³/yr" },
      { label: "Structural Steel", labelAm: "የብረት መዋቅር አቅም", value: "12k Tons/yr" },
      { label: "Manufacturing Facilities", labelAm: "የማምረቻ ማዕከላት", value: "3 Hubs" }
    ],
    capabilities: [
      "Prestressed hollow-core slab casting",
      "Custom structural steel trusses and columns",
      "Automated rebar processing lines",
      "Modular architectural elements"
    ],
    operationalFocus: "Industrial Production & Processing"
  },
  {
    id: "hospitality",
    name: "Hospitality",
    nameAm: "ሆቴልና ቱሪዝም",
    category: "Business Accommodations & Conferences",
    tagline: "Premium hospitality blending authentic Ethiopian warmth with international standards",
    taglineAm: "የኢትዮጵያን ባህላዊ እንግዳ ተቀባይነት ከዓለም አቀፍ ደረጃ ጋር ማዋሃድ",
    description: "Developing and managing executive business accommodations, conference facilities, and hospitality venues tailored for international diplomatic delegations, regional trade missions, and business travelers.",
    descriptionAm: "ዓለም አቀፍ የዲፕሎማሲ ልዑካን እና የንግድ ተጓዦችን የሚያስተናግዱ ዘመናዊ ሆቴሎችና የስብሰባ ማዕከላትን ይገነባል፣ ያስተዳድራል።",
    iconType: "hospitality",
    keyHoldings: ["Lakamba Executive Suites", "Metropolitan Conference Centers", "Rift Valley Leisure Holdings"],
    metrics: [
      { label: "Executive Rooms & Keys", labelAm: "የእንግዳ ማረፊያ ክፍሎች", value: "240+ Keys" },
      { label: "Summit Capacity", labelAm: "የጉባኤ ማስተናገድ አቅም", value: "1,200 Seats" },
      { label: "Guest Satisfaction", labelAm: "የእንግዶች እርካታ", value: "96.4%" }
    ],
    capabilities: [
      "High-security executive lodging",
      "Bilingual conference and banquet halls",
      "Full corporate catering and logistics",
      "Airport transit and VIP concierge"
    ],
    operationalFocus: "Hospitality & Corporate Venues"
  },
  {
    id: "logistics",
    name: "Transport & Logistics",
    nameAm: "ትራንስፖርትና ሎጂስቲክስ",
    category: "Heavy Freight & Supply Chain Corridors",
    tagline: "Connecting Addis Ababa and regional hubs to international maritime gateways",
    taglineAm: "የአዲስ አበባን የንግድ ማዕከል ከአለም አቀፍ ወደቦች ጋር ማስተሳሰር",
    description: "Lakamba Transport operates a modern fleet of heavy-duty haulers, flatbeds for heavy machinery, refrigerated cargo containers, and bulk transports serving the vital Addis Ababa - Djibouti maritime trade artery and key regional dry ports.",
    descriptionAm: "ከአዲስ አበባ እስከ ጅቡቲ ወደብ እና ሌሎች የሀገር ውስጥ የደረቅ ወደቦች ድረስ የከባድ ጭነት እና የኮንቴነር ትራንስፖርት ያንቀሳቅሳል።",
    iconType: "logistics",
    keyHoldings: ["Lakamba Cross-Border Freight", "Corridor Express Haulage", "Lakamba Intermodal Terminals"],
    metrics: [
      { label: "Active Fleet Units", labelAm: "የከባድ ጭነት መኪኖች", value: "180+ Units" },
      { label: "Annual Cargo Volume", labelAm: "ዓመታዊ የተጓጓዘ ጭነት", value: "380k Tons" },
      { label: "Dispatch Reliability", labelAm: "የስራ አስተማማኝነት", value: "98.7%" }
    ],
    capabilities: [
      "Addis Ababa - Djibouti corridor bulk freight",
      "Heavy project cargo and machinery mobilization",
      "Refrigerated food and export logistics",
      "GPS telematics and 24/7 security monitoring"
    ],
    operationalFocus: "Corridor Freight & Intermodal Transport"
  }
];

export const TIMELINE_MILESTONES: Milestone[] = [
  {
    yearEc: "1962 ዓ.ም.",
    yearGc: "1970 G.C.",
    title: "Enterprise Genesis & Founding",
    titleAm: "የድርጅቱ አጀማመር እና የመጀመሪያው መሰረት",
    description: "Kahsay Abraha establishes the foundation of what would evolve into the Lakamba Group, beginning with regional logistics and commodities transport across Ethiopia.",
    descriptionAm: "አቶ ካሕሳይ አብርሃ በጭነት ትራንስፖርት እና በንግድ ስራ ላይ በማተኮር የለኻምባ ግሩፕን የመሰረት ድንጋይ ጣሉ።",
    leader: "Kahsay Abraha (Founder)",
    pillar: "Enterprise Foundation"
  },
  {
    yearEc: "1978 ዓ.ም.",
    yearGc: "1986 G.C.",
    title: "Civil Earthworks & Infrastructure Expansion",
    titleAm: "ወደ ከባድ ሲቪል ስራዎችና የመንገድ ግንባታ መግባት",
    description: "Expansion into heavy civil engineering, acquiring initial earthmoving fleets to deliver regional road packages and structural foundations.",
    descriptionAm: "ወደ ከባድ የመንገድ ግንባታና የምድር ስራዎች በመግባት የመጀመሪያዎቹን የከባድ ማሽነሪዎች ይዞታ አጠናከረ።",
    leader: "Kahsay Abraha",
    pillar: "Heavy Infrastructure"
  },
  {
    yearEc: "1993 ዓ.ም.",
    yearGc: "2001 G.C.",
    title: "Formal Group Incorporation & Agro-Ventures",
    titleAm: "የግሩፑ ህጋዊ ውህደት እና የግብርና መስፋፋት",
    description: "Formalization of the Lakamba Group holding structure; acquisition of commercial farmland, specialty coffee export processing, and regional logistics depots.",
    descriptionAm: "ለኻምባ ግሩፕ በተደራጀ ኮርፖሬት መልክ ተዋቅሮ ወደ ቡና፣ ሰሊጥ እና ቅባት እህሎች ንግድ በስፋት ገባ።",
    leader: "Kahsay Abraha & Senior Directors",
    pillar: "Agro-Industrial Scale"
  },
  {
    yearEc: "2005 ዓ.ም.",
    yearGc: "2013 G.C.",
    title: "Mining, Quarrying & Manufacturing Hubs",
    titleAm: "የተፈጥሮ ማዕድን ማውጫዎችና የቅድመ-ግንባታ ኢንዱስትሪ",
    description: "Secured high-grade dimensional stone and granite concessions; launched industrial stone cutting and precast concrete manufacturing.",
    descriptionAm: "የእምነበረድ እና የግራናይት ማዕድን ማውጫዎችን በመክፈት የቅድመ-ግንባታ ኮንክሪት ማምረቻዎችን አቋቋመ።",
    leader: "Executive Board",
    pillar: "Industrial Integration"
  },
  {
    yearEc: "2014 ዓ.ም.",
    yearGc: "2021 G.C.",
    title: "Hospitality Venues & Modern Logistics Corridors",
    titleAm: "ዘመናዊ ሆቴሎች እና የጅቡቲ ኮሪደር ጭነት መስፋፋት",
    description: "Commissioned executive business hotel properties and modernized cross-border logistics fleets with telematics along the Djibouti maritime trade corridor.",
    descriptionAm: "ዘመናዊ የእንግዳ ማረፊያ ሆቴሎችን በመክፈት የጅቡቲ ኮሪደር የከባድ ጭነት መርከቦችን በዘመናዊ የክትትል ቴክኖሎጂ አሻሻለ።",
    leader: "Executive Committee",
    pillar: "Logistics & Hospitality"
  },
  {
    yearEc: "Present",
    yearGc: "Current Era",
    title: "Next-Generation Leadership: Diversification & Global Growth",
    titleAm: "ቀጣይ-ትውልድ አመራር፡ ብዝሃ-ኢንቨስትመንት እና አለም አቀፍ ዕድገት",
    description: "Milkiyas Kahsay spearheads executive management across core holdings, driving modernization, international trade partnerships, and multi-sector diversification.",
    descriptionAm: "በሚልኪያስ ካሕሳይ ዋና ስራ አስፈፃሚ አመራር ስር ቡድኑ ወደ አለም አቀፍ የንግድ አጋርነት፣ የቴክኖሎጂ ሽግግር እና ቀጣናዊ የንግድ መስመሮች በስፋት እየተስፋፋ ይገኛል።",
    leader: "Milkiyas Kahsay (Executive Management)",
    pillar: "Next-Gen Growth"
  }
];

export const STRATEGIC_CORRIDORS: ExpansionCorridor[] = [
  {
    id: "c1",
    title: "Djibouti - Addis Ababa Primary Trade Artery",
    titleAm: "የጅቡቲ - አዲስ አበባ የባህር ንግድ መስመር",
    corridor: "Djibouti Port ↔ Galafi ↔ Semera ↔ Mojo Dry Port ↔ Addis Ababa",
    scope: "Heavy freight transit, bonded customs clearance, and containerized industrial transport.",
    scopeAm: "የከባድ ጭነት ማመላለሻ፣ የጉምሩክ ክሊራንስ እና የኢንዱስትሪ እቃዎች ማስገቢያ።",
    strategicImpact: "Transports over 380,000 tons of key capital goods and export crops annually.",
    status: "Active Full Operations"
  },
  {
    id: "c2",
    title: "Berbera / Somaliland Trade Gateway",
    titleAm: "የበርበራ / የሶማሊላንድ የንግድ መስመር",
    corridor: "Berbera Port ↔ Tog Wajaale ↔ Jigjiga ↔ Eastern Logistics Hubs",
    scope: "Alternative maritime gateway for eastern agricultural exports and livestock corridors.",
    scopeAm: "ለቀጣናዊ የግብርና ምርቶች እና የቁም እንስሳት ኤክስፖርት አማራጭ የወደብ መተላለፊያ።",
    strategicImpact: "Broadens multimodal shipping flexibility and reduces single-corridor transit times.",
    status: "Expanding Corridor"
  },
  {
    id: "c3",
    title: "Red Sea & Gulf Investment Partnerships",
    titleAm: "የቀይ ባህር እና የባህረ ሰላጤው የንግድ አጋርነት",
    corridor: "Ethiopian Processing Hubs ↔ GCC & Middle Eastern Off-Takers",
    scope: "Commercial off-take agreements for specialty highland coffee, organic sesame, and processed stone.",
    scopeAm: "ከፍተኛ ጥራት ያለው የኢትዮጵያ ቡና፣ ሰሊጥ እና የተጠናቀቁ ማዕድናትን ወደ ባህረ-ሰላጤው ገበያ መላክ።",
    strategicImpact: "Generates sustained foreign currency and long-term institutional export contracts.",
    status: "Strategic Expansion"
  },
  {
    id: "c4",
    title: "Pan-African Free Trade Expansion (AfCFTA)",
    titleAm: "የአፍሪካ አህጉራዊ የነፃ ንግድ ቀጠና (AfCFTA)",
    corridor: "Ethiopia ↔ Kenya ↔ East African Community (EAC) Hubs",
    scope: "Cross-border building materials supply, engineered precast components, and regional trade.",
    scopeAm: "የአገር አቋራጭ የግንባታ ማቴሪያሎች አቅርቦት እና የቀጣናው የግብርና ምርቶች ስርጭት።",
    strategicImpact: "Positions Lakamba Group as a regional manufacturing and infrastructure partner.",
    status: "Market Development"
  }
];

export const EXECUTIVE_DETAILS = {
  name: "Milkiyas Kahsay",
  nameAm: "ሚልኪያስ ካሕሳይ",
  organization: "LAKAMBA Group (ለኻምባ ግሩፕ)",
  role: "Next-generation leadership / executive management",
  roleAm: "ቀጣይ-ትውልድ ዋና ስራ አስፈፃሚ አመራር",
  businessFocus: "Construction, mining, agriculture, industry, hospitality, and transport & logistics",
  businessFocusAm: "ኮንስትራክሽን፣ ማዕድን፣ ግብርና፣ ኢንዱስትሪ፣ ሆስፒታሊቲ እና ትራንስፖርትና ሎጂስቲክስ",
  expansionFocus: "Diversification and international growth",
  expansionFocusAm: "ብዝሃ-ኢንቨስትመንት እና ዓለም አቀፍ ዕድገት",
  lineage: "Family-owned Ethiopian enterprise established by Kahsay Abraha in 1962 E.C.",
  lineageAm: "በ1962 ዓ.ም. በአቶ ካሕሳይ አብርሃ የተመሰረተ የቤተሰብ ኢንተርፕራይዝ",
  operationalMandate: "Involved in operational management and strategic growth across Lakamba Group’s core holdings.",
  operationalMandateAm: "በለኻምባ ግሩፕ ስር ባሉ ዋና ዋና የስራ ዘርፎች ላይ የቀን ተቀን ኦፕሬሽን እና ስትራቴጂካዊ ዕድገትን በበላይነት ይመራሉ።",
  quote: "Our roots were planted in 1962 E.C. by Kahsay Abraha through resilience and commitment to Ethiopian industrial capability. Today, our mission as next-generation stewards is clear: modernize operations, diversify with institutional discipline, and build bridges of trade that connect Ethiopian excellence with regional and global markets.",
  quoteAm: "ታሪካችን በ1962 ዓ.ም. በአቶ ካሕሳይ አብርሃ የተገነባው በጽናት እና ለሀገራችን ኢንዱስትሪ በነበረ ታማኝነት ነው። ዛሬ የቀጣዩ ትውልድ ኃላፊነታችን ግልፅ ነው፡ አሰራራችንን ማዘመን፣ ስራዎቻችንን በስርዓት ማብዛት፣ እና የኢትዮጵያን ጥራት ከቀጣናዊና ከዓለም አቀፍ ገበያዎች ጋር የሚያስተሳስሩ የንግድ ድልድዮችን መገንባት ነው።",
  strategicPillars: [
    {
      title: "Operational Modernization",
      titleAm: "የአሰራርና ቴክኖሎጂ ዘመናዊነት",
      description: "Implementing digitized management systems, fleet telematics, and automated industrial processing across all group subsidiaries.",
      descriptionAm: "የከባድ መኪኖችን እንቅስቃሴ በዲጂታል ቴክኖሎጂ መከታተል፣ አውቶሜትድ የማምረቻ ስርዓቶችን እና ዘመናዊ የግብርና ቴክኖሎጂዎችን ማስረፅ።"
    },
    {
      title: "Diversification & Global Growth",
      titleAm: "ብዝሃ-ኢንቨስትመንትና ዓለም አቀፍ ዕድገት",
      description: "Expanding cross-sector synergies from raw commodities to value-added exports and international joint ventures.",
      descriptionAm: "ከጥሬ እቃዎች ይልቅ እሴት የተጨመረባቸውን ምርቶች በማምረት ወደ ዓለም አቀፍ የንግድ አጋርነት መስፋፋት።"
    },
    {
      title: "Infrastructure & Logistics Synergy",
      titleAm: "የመሰረተ-ልማትና የሎጂስቲክስ ውህደት",
      description: "Interlinking civil construction capacity with heavy transport haulage to deliver turn-key projects with maximum efficiency.",
      descriptionAm: "የኮንስትራክሽን እና የጭነት ትራንስፖርት አቅምን በማቀናጀት ትላልቅ ፕሮጀክቶችን በተሟላ ሁኔታ ማሳካት።"
    },
    {
      title: "Family Stewardship & Governance",
      titleAm: "የቤተሰብ እሴትና ተቋማዊ አስተዳደር",
      description: "Honoring founder Kahsay Abraha’s six-decade ethical legacy while building robust institutional frameworks for sustainable longevity.",
      descriptionAm: "የመሰረቱትን የአቶ ካሕሳይ አብርሃን ስነ-ምግባራዊ እሴቶች በመጠበቅ ዘመናዊ የኮርፖሬት አስተዳደርን ማረጋገጥ።"
    }
  ]
};

export const QUICK_STATS = [
  { value: "1962", label: "Year Founded (E.C.)", labelAm: "የተመሰረተበት ዓ.ም.", detail: "Established by Kahsay Abraha" },
  { value: "6", label: "Integrated Sectors", labelAm: "የተቀናጁ የስራ ዘርፎች", detail: "Construction to Logistics" },
  { value: "3,800+", label: "Workforce Ecosystem", labelAm: "ሰራተኞች እና አጋሮች", detail: "Direct & Indirect Impact" },
  { value: "180+", label: "Heavy Fleet Units", labelAm: "የከባድ ጭነት መርከቦች", detail: "Active Cross-Border Freight" },
  { value: "12,000+", label: "Hectares in Cultivation", labelAm: "የለማ የእርሻ መሬት (Ha)", detail: "Highland Arabica & Exports" }
];
