/* twine-user-script #14: "defineCharacters.js" */
// SAYA
variables().saya={
    name: "Saya", id: "saya",
    portrait: "Saya", isSimple: true,
    noOutfit: true,
    style: "saya",
    notes: [],
    isFuta: true,
    status: "Normal",
    relationship: "Spirit Guide",
    lust: 0,
    love: 0,
};

// CHRIS
variables().chris={
    name: "Chris", id: "chris",
    portrait: "chris-pro", useNPC: true,
    style: "chris",
    notes: [], flags: {kiss: false},
    isMale: true,
    hangoutCD: 0,
    convoCD: 0,
    eventCD: 0,
    event: 0,
    peCounter: 1,
    peDecline: false,
    status: "Normal",
    relationship: "Friend",
    lust: 0,
    love: 0,
};

// SEAN
variables().sean={
    name: "Sean", id: "sean",
    portrait: "sean-pro", useNPC: true,
    style: "tasha",
    notes: [],
    isTrans: true,
    status: "Normal",
    relationship: "Lab Rat",
    lust: 0,
    love: 0,
};

// LEXI
variables().lexi={
    name: "Lexi", id: "lexi",
    portrait: "lexi-pro", useNPC: true,
    style: "tasha",
    notes: [],
    isFemale: true,
    status: "Normal",
    relationship: "Women's Boutique Clerk",
    hasShop: true,
    lust: 1,
    love: 0,
};

// VERUCA
variables().veruca={
    name: "Veruca", id: "veruca",
    portrait: "veruca-pro", useNPC: true,
    style: "john",
    notes: [],
    isFemale: true,
    status: "Normal",
    relationship: "Men's Boutique Clerk",
    hasShop: true,
    lust: 1,
    love: 0,
};

// SIRI
variables().siri={
    name: "Siri", id: "siri",
    portrait: "siri-pro", useNPC: true,
    style: "penny",
    notes: [],
    isFemale: true,
    status: "Normal",
    relationship: "Intimate Apparel Clerk",
    hasShop: true,
    lust: 1,
    love: 0,
};

// ASH
variables().ash={
    name: "Ash", id: "ash",
    portrait: "ash-pro", useNPC: true,
    style: "sister",
    notes: [],
    isFemale: true,
    status: "Normal",
    relationship: "Adult Store Clerk",
    hasShop: true,
    lust: 1,
    love: 0,
};

// ELSA
variables().elsa={
    name: "Elsa", id: "elsa",
    portrait: "portrait",
    noOutfit: true,
    style: "penny",
    isFemale: true,
    status: "Normal",
    relationship: "Cousin",
    lust: 0, love: 0
};

// MICK
variables().mick={
    name: "Mick", id: "mick",
    portrait: "mick-pro", useNPC: true,
    style: "men",
    notes: [],
    isMale: true,
    status: "Normal",
    relationship: "Company Escort",
    lust: 0,
    love: 0,
};

// JAG
variables().jag={
    name: "Jag", id: "jag",
    portrait: "jag-pro", useNPC: true,
    style: "men",
    notes: [],
    isMale: true,
    status: "Normal",
    relationship: "Company Escort",
    lust: 0,
    love: 0,
};

// OTHER
variables().craig={name:"Craig",isSimple:true,portrait:"Unknown",style:"men",id:"craig",convo:[]};
variables().slave1={name:"Slave Girl",isSimple:true,portrait:"Slave Girl",style:"men"};
variables().tory={name:"Ms. L",id:"tory",portrait:"tory-pro",isHidden:true,useNPC:true,style:"men"};
variables().katie={name:"Katie",isSimple:true,portrait:"Katie",style:"men"};
variables().jessica={name:"Jessica",portrait:"jessica-pro",useNPC:true,style:"chris"};
variables().sam={name:"Samantha",portrait:"samantha-pro",useNPC:true,style:"tasha"};
variables().ron={name:"Ronnie",isSimple:true,portrait:"Unknown",style:"men"};
variables().girl={name:"Girl",isSimple:true,portrait:"UnknownF",style:"men"};
variables().man={name:"Man",isSimple:true,portrait:"Unknown",style:"men"};
variables().woman={name:"Woman",isSimple:true,portrait:"UnknownF",style:"men"};
variables().serverm={name:"Server",isSimple:true,portrait:"Unknown",style:"men"};
variables().serverf={name:"Server",isSimple:true,portrait:"UnknownF",style:"men"};
variables().westane={name:"Westane",isSimple:true,portrait:"Westane",style:"westane"};

variables().craig.convo[1] = {enabled: false, seen: false, id: 1, title: "Security Detail?"};