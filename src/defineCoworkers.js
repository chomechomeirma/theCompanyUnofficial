/* twine-user-script #15: "defineCoworkers.js" */
// SOPHIE
variables().sophie={
    name: "Ms. Dee", id: "sophie",
    default: "default",
    style: "sophie",
    pName: "<<Formal>>",
    convo: [], notes: [], control: {},
    isFemale: true,
    dose: 0,
    doseF: 0,
    doseS: 0,
    doseD: 0,
    femR: 0,
    doseCD: 0,
    convoCD: 0,
    eventCD: 0,
    status: "Normal",
    relationship: "Direct Report",
    hasShop: true,
    lust: 0,
    love: 1
};

// PENNY
variables().penny={
    name: "Penny", id: "penny",
    mcsx: {cd: 0},
    default: "default",
    style: "penny",
    mood: "nice",
    MaxOP: 100,
    CurOP: 10,
    tfmTimer: -1,
    tfmNotes: [],convo: [],notes: [], control: {}, flag: {},
    tfmNotesNew: false,
    newNotes: false,
    isMouse: false,
    isWhore: false,
    isDom: false,
    canRomance: true,
    isDating: false,
    dose: 0,
    doseCD: 0,
    dateCD: 0,
    dates: 0,
    convoCD: 0,
    peCounter: 1,
    daysWhore: -1,
    status: "Normal",
    relationship: "Co-worker",
    hasShop: true,
    matBonus: 20,
    lust: 0,
    love: 1
};
variables().penny.pref = {
    kiss: {give: LIKE, get: LIKE},
    analFuck: {give: LIKE, get: LIKE},
    pussyFuck: {give: HATE, get: LOVE},
    analPlay: {give: LIKE, get: LIKE},
    pussyPlay: {give: NEUTRAL, get: NEUTRAL},
    rimjob: {give: NEUTRAL, get: NEUTRAL},
    eatPussy: {give: LIKE, get: LOVE},
    suckCock: {give: LIKE, get: NEUTRAL},
    gangbang: {give: NEUTRAL, get: NEUTRAL},
    cock: {have: NEUTRAL, want: NEUTRAL},
    pussy: {have: NEUTRAL, want: NEUTRAL},
    breasts: {have: NEUTRAL, want: NEUTRAL},
    bigBreasts: {have: NEUTRAL, want: NEUTRAL},
    smallBreasts: {have: NEUTRAL, want: NEUTRAL}
};
variables().penny.act = [
    "analFuck.get",
    "pussyFuck.get",
    "eatPussy.get", "eatPussy.give",
    "suckCock.give"
];

// DIANA
variables().diana={
    name: "Diana", id: "diana",
    default: "default",
    style: "diana",
    convo: [], notes: [], control: {}, flag: {},
    mcsx: {cd: 0},
    isFemale: true,
    dose: 0,
    doseCD: 0,
    sexCD: 0,
    convoCD: 0,
    peCounter: 1,
    peDecline: false,
    status: "Normal",
    relationship: "Co-worker",
    hasShop: true,
    lust: 0,
    love: 1
};
variables().diana.pref = {
    kiss: {give: LIKE, get: LIKE},
    analFuck: {give: LOVE, get: DISLIKE},
    pussyFuck: {give: LOVE, get: LIKE},
    analPlay: {give: LOVE, get: LIKE},
    pussyPlay: {give: LOVE, get: LIKE},
    rimjob: {give: HATE, get: LOVE},
    eatPussy: {give: LIKE, get: LOVE},
    suckCock: {give: LIKE, get: LOVE},
    cumEat: {give: LOVE, get: DISLIKE},
    gangbang: {give: NEUTRAL, get: NEUTRAL},
    cock: {have: NEUTRAL, want: NEUTRAL},
    pussy: {have: NEUTRAL, want: NEUTRAL},
    breasts: {have: NEUTRAL, want: NEUTRAL},
    bigBreasts: {have: NEUTRAL, want: NEUTRAL},
    smallBreasts: {have: NEUTRAL, want: NEUTRAL}
};

// JOHN / CHANEL
variables().john={
    name: "John", id: "john",
    default: "default",
    oldName: "John",
    style: "john",
    convo: [], notes: [], flag: {},
    isMale: true,
    hasPenis: true,
    workReaction: false,
    dose: 0,
    doseCD: 0,
    convoCD: 0,
    sexCD: 0,
    tfCD: 3,
    status: "Normal",
    relationship: "Co-worker",
    hasShop: true,
    lust: 0,
    love: 1,
    cPenny: 0,
    cTasha: 0,
    cDiana: 0,
    cPlayer: 0
};
variables().john.pref = {
    kiss: {give: DISLIKE, get: DISLIKE},
    analFuck: {give: LOVE, get: HATE},
    pussyFuck: {give: LOVE, get: HATE},
    analPlay: {give: LIKE, get: HATE},
    pussyPlay: {give: LIKE, get: HATE},
    rimjob: {give: HATE, get: NEUTRAL},
    eatPussy: {give: DISLIKE, get: LOVE},
    suckCock: {give: HATE, get: LOVE},
    gangbang: {give: LOVE, get: HATE},
    cock: {have: LOVE, want: LOVE},
    pussy: {have: HATE, want: HATE},
    breasts: {have: HATE, want: HATE},
    bigBreasts: {have: HATE, want: HATE},
    smallBreasts: {have: HATE, want: HATE}
};

// TASHA
variables().tasha={
    name: "Tasha", id: "tasha",
    default: "default",
    style: "tasha",
    convo: [], notes: [], talk: {}, flag: {}, control: {},
    mcsx: {cd: 0},
    isTrans: true,
    genderReveal: false,
    hasPussy: false,
    dose: 0,
    doseCD: 0,
    convoCD: 0,
    sexCD: 0,
    status: "Normal",
    relationship: "Co-worker",
    hasShop: true,
    lust: 0,
    love: 1,
};

// JULIA
variables().julia={
    name: "Julia", id: "julia",
    default: "default",
    style: "julia",
    convo: [], notes: [], flag: {}, talk: {},
    isFemale: true,
    dose: 0,
    doseCD: 0,
    convoCD: 0,
    status: "Normal",
    relationship: "Co-worker",
    hasShop: true,
    lust: 0,
    love: 1,
};

// LISA
variables().lisa={
    name: "Ms. Ann", id: "lisa",
    firstName: "Lisa",
    default: "default",
    style: "lisa",
    pName: "<<Formal>>",
    convo: [], notes: [],
    isFemale: true,
    status: "Normal",
    relationship: "Company Executive",
    lust: 0,
    love: 0,
};

// LAUREN
variables().lauren={
    name: "Lauren", id: "lauren",
    portrait: "portrait",
    noOutfit: true,
    style: "lauren",
    convo: [], notes: [],
    isFemale: true,
    status: "Normal",
    relationship: "Co-worker",
    dose: 0,
    doseCD: 0,
    convoCD: 0,
    lust: 0,
    love: 1,
};

// JAMES
variables().james={
    name:"Dr. K", id: "james",
    portrait:"james-pro", useNPC: true,
    isHidden: true,
    style:"men",
    convo: [], notes: [],
    isMale: true,
    status: "Normal",
    relationship: "Head of Company R&D",
};

// ERIK
variables().erik={
    name:"Mr. G", id: "erik",
    isSimple: true,
    portrait:"Unknown",
    style:"men"
};

// KAGNEY
variables().kagney={
    name:"Kagney", id: "kagney",
    portrait:"portrait",
    noOutfit: true,
    default: "default",
    style:"sister",
    convo: [], notes: [],
    isFemale: true,
    dose: 0,
    doseCD: 0,
    convoCD: 0,
    status: "Normal",
    relationship: "Receptionist",
    lust: 0,
    love: 1,
};

//#region - Conversations
variables().sophie.convo[1] = {enabled: true, seen: false, id: 1, title: "Talk About New Job"};
variables().sophie.convo[2] = {enabled: true, seen: false, id: 2, title: "Talk About Office Environment"};
variables().sophie.convo[3] = {enabled: false, seen: false, id: 3, title: "Thinking of Tory"};
variables().sophie.convo[4] = {enabled: false, seen: false, id: 4, title: "Thinking of Julia"};
variables().sophie.convo[5] = {enabled: false, seen: false, id: 5, title: "Thinking of Chanel"};
variables().sophie.convo[6] = {enabled: false, seen: false, id: 6, title: "Enjoying our Time Together"};
variables().sophie.convo[7] = {enabled: false, seen: false, id: 7, title: "Enjoying Sneaking Around"};
variables().sophie.convo[8] = {enabled: false, seen: false, id: 8, title: "Enjoying your Mouth"};
variables().sophie.convo[9] = {enabled: false, seen: false, id: 9, title: "Help for Kagney"};
variables().sophie.convo[10] = {enabled: false, seen: false, id: 10, title: "Driver's Worried"};
variables().sophie.convo[11] = {enabled: false, seen: false, id: 11, title: "Tasha's Happy"};
variables().sophie.convo[12] = {enabled: false, seen: false, id: 12, title: "What's Going on with Tasha"};
variables().sophie.convo[13] = {enabled: false, seen: false, id: 13, title: "Please Stop"};
variables().sophie.convo[14] = {enabled: false, seen: false, id: 14, title: "Concerning Rumors"};

variables().penny.convo[1] = {enabled: true, seen: false, id: 1, title: "Working Here Long?"};
variables().penny.convo[2] = {enabled: true, seen: false, id: 2, title: "Chemistry Education"};
variables().penny.convo[3] = {enabled: false, seen: false, id: 3, title: "Chemistry Education"};
variables().penny.convo[4] = {enabled: false, seen: false, id: 4, title: "Taste of Lenny"};
variables().penny.convo[5] = {enabled: false, seen: false, id: 5, title: "Thinking of Tory's Fate"};
variables().penny.convo[6] = {enabled: false, seen: false, id: 6, title: "Thinking of Tory"};
variables().penny.convo[7] = {enabled: false, seen: false, id: 7, title: "Thinking of Julia"};
variables().penny.convo[8] = {enabled: false, seen: false, id: 8, title: "Had a Great Time..."};
variables().penny.convo[9] = {enabled: false, seen: false, id: 9, title: "Meeting with John"};
variables().penny.convo[10] = {enabled: false, seen: false, id: 10, title: "Something on Your Face"};
variables().penny.convo[11] = {enabled: false, seen: false, id: 11, title: "Thinking of Chanel"};
variables().penny.convo[12] = {enabled: false, seen: false, id: 12, title: "Long Nights"};
variables().penny.convo[13] = {enabled: false, seen: false, id: 13, title: "Do I Make You Happy?"};
variables().penny.convo[14] = {enabled: false, seen: false, id: 14, title: "Selling Serums"};
variables().penny.convo[15] = {enabled: false, seen: false, id: 15, title: "Testing Serums"};
variables().penny.convo[16] = {enabled: false, seen: false, id: 16, title: "Serum Side Effects"};
variables().penny.convo[17] = {enabled: false, seen: false, id: 17, title: "Eating Julia"};
variables().penny.convo[18] = {enabled: false, seen: false, id: 18, title: "Keep Me Safe?"};
variables().penny.convo[19] = {enabled: false, seen: false, id: 19, title: "Weird Cravings..."};
variables().penny.convo[20] = {enabled: false, seen: false, id: 20, title: "Horny All the Time"};
variables().penny.convo[21] = {enabled: false, seen: false, id: 21, title: "New Wardrobe?"};
variables().penny.convo[22] = {enabled: false, seen: false, id: 22, title: "Paid for Fun"};
variables().penny.convo[23] = {enabled: false, seen: false, id: 23, title: "<<Daddy>>? Sorry. <<Daddy>>?"};
variables().penny.convo[24] = {enabled: false, seen: false, id: 24, title: "Looking Good"};
variables().penny.convo[25] = {enabled: false, seen: false, id: 25, title: "New Look"};
variables().penny.convo[26] = {enabled: false, seen: false, id: 26, title: "Explore Each Other"};
variables().penny.convo[27] = {enabled: false, seen: false, id: 27, title: "Fun With Diana"};
variables().penny.convo[28] = {enabled: false, seen: false, id: 28, title: "Be My Pet?"};
variables().penny.convo[29] = {enabled: false, seen: false, id: 29, title: "New Lesbian"};
variables().penny.convo[30] = {enabled: false, seen: false, id: 30, title: "What's Up With Tasha?"};
variables().penny.convo[31] = {enabled: false, seen: false, id: 31, title: "Tasha's so Hawt!"};
variables().penny.convo[32] = {enabled: false, seen: false, id: 32, title: "Rodent Life"};

variables().diana.convo[1] = {enabled: true, seen: false, id: 1, title: "Thoughts on Work"};
variables().diana.convo[2] = {enabled: true, seen: false, id: 2, title: "Spilling the Tea"};
variables().diana.convo[3] = {enabled: false, seen: false, id: 3, title: "Had a Great Time"};
variables().diana.convo[4] = {enabled: false, seen: false, id: 4, title: "Thinking of Julia"};
variables().diana.convo[5] = {enabled: false, seen: false, id: 5, title: "Thinking of John"};
variables().diana.convo[6] = {enabled: false, seen: false, id: 6, title: "Helping a Friend"};
variables().diana.convo[7] = {enabled: false, seen: false, id: 7, title: "Off the Books"};
variables().diana.convo[8] = {enabled: false, seen: false, id: 8, title: "Security Detail Order"};
variables().diana.convo[9] = {enabled: false, seen: false, id: 9, title: "No Secrets"};
variables().diana.convo[10] = {enabled: false, seen: false, id: 10, title: "The New Office Bunny"};
variables().diana.convo[11] = {enabled: false, seen: false, id: 11, title: "Feeling Frisky"};
variables().diana.convo[12] = {enabled: false, seen: false, id: 12, title: "You Taste Incredible"};
variables().diana.convo[13] = {enabled: false, seen: false, id: 13, title: "Regarding Sophie"};
variables().diana.convo[14] = {enabled: false, seen: false, id: 14, title: "Regarding My Coworkers"};
variables().diana.convo[15] = {enabled: false, seen: false, id: 15, title: "Feeling Sexy"};
variables().diana.convo[16] = {enabled: false, seen: false, id: 16, title: "Sharing Interests"};
variables().diana.convo[17] = {enabled: false, seen: false, id: 17, title: "This Has Been Fun"};
variables().diana.convo[18] = {enabled: false, seen: false, id: 18, title: "Feel Like I Can Open Up"};
variables().diana.convo[19] = {enabled: false, seen: false, id: 19, title: "Not So Bad Maybe"};
variables().diana.convo[20] = {enabled: false, seen: false, id: 20, title: "I've Had Other Pets"};
variables().diana.convo[21] = {enabled: false, seen: false, id: 21, title: "Don't You Just Love Being My Pet?"};
variables().diana.convo[22] = {enabled: false, seen: false, id: 22, title: "Such a Good Pet"};
variables().diana.convo[23] = {enabled: false, seen: false, id: 23, title: "I Think I'll Keep You"};
variables().diana.convo[24] = {enabled: false, seen: false, id: 24, title: "If I Did Take A Master"};
variables().diana.convo[25] = {enabled: false, seen: false, id: 25, title: "New Arrangement"};

variables().john.convo[1] = {enabled: true, seen: false, id: 1, title: "Settling In"};
variables().john.convo[2] = {enabled: true, seen: false, id: 2, title: "Stressful Workplace"};
variables().john.convo[3] = {enabled: false, seen: false, id: 3, title: "Thinking of Tory"};
variables().john.convo[4] = {enabled: false, seen: false, id: 4, title: "Thinking of Julia"};
variables().john.convo[5] = {enabled: false, seen: false, id: 5, title: "Reflecting on New Self"};
variables().john.convo[6] = {enabled: false, seen: false, id: 6, title: "Fun with Penny"};
variables().john.convo[7] = {enabled: false, seen: false, id: 7, title: "Fun with You"};
variables().john.convo[8] = {enabled: false, seen: false, id: 8, title: "Improving"};
variables().john.convo[9] = {enabled: false, seen: false, id: 9, title: "New Numb"};
variables().john.convo[10] = {enabled: false, seen: false, id: 10, title: "Playing Nice"};
variables().john.convo[11] = {enabled: false, seen: false, id: 11, title: "Being a Friend"};
variables().john.convo[12] = {enabled: false, seen: false, id: 12, title: "People Are Nice"};
variables().john.convo[13] = {enabled: false, seen: false, id: 13, title: "Drinks Again?"};
variables().john.convo[14] = {enabled: false, seen: false, id: 14, title: "What's Up With Tasha?"};
variables().john.convo[15] = {enabled: false, seen: false, id: 15, title: "Love the New Tasha!"};

variables().tasha.convo[1] = {enabled: true, seen: false, id: 1, title: "Try to Visit"};
variables().tasha.convo[2] = {enabled: true, seen: false, id: 2, title: "Working with John"};
variables().tasha.convo[3] = {enabled: false, seen: false, id: 3, title: "Thinking of Tory"};
variables().tasha.convo[4] = {enabled: false, seen: false, id: 4, title: "Acceptance"};
variables().tasha.convo[5] = {enabled: false, seen: false, id: 5, title: "Fun Together"};
variables().tasha.convo[6] = {enabled: false, seen: false, id: 6, title: "Tasha's Secret's Out!"};
variables().tasha.convo[7] = {enabled: false, seen: false, id: 7, title: "Thinking of Julia"};
variables().tasha.convo[8] = {enabled: false, seen: false, id: 8, title: "Thinking of John"};
variables().tasha.convo[9] = {enabled: false, seen: false, id: 9, title: "Domming John"};
variables().tasha.convo[10] = {enabled: false, seen: false, id: 10, title: "Nice John"};
variables().tasha.convo[11] = {enabled: false, seen: false, id: 11, title: "Our Morning Visits"};
variables().tasha.convo[12] = {enabled: false, seen: false, id: 12, title: "Our Time Together"};
variables().tasha.convo[13] = {enabled: false, seen: false, id: 13, title: "Seeing Anyone?"};
variables().tasha.convo[14] = {enabled: false, seen: false, id: 14, title: "Anatomy of a Cock"};
variables().tasha.convo[15] = {enabled: false, seen: false, id: 15, title: "Working Relationship"};
variables().tasha.convo[16] = {enabled: false, seen: false, id: 16, title: "Your Place?"};
variables().tasha.convo[17] = {enabled: false, seen: false, id: 17, title: "Your Family"};
variables().tasha.convo[18] = {enabled: false, seen: false, id: 18, title: "Take Me Away"};
variables().tasha.convo[19] = {enabled: false, seen: false, id: 19, title: "How Exciting!"};
variables().tasha.convo[20] = {enabled: false, seen: false, id: 20, title: "It's Okay if it's You"};
variables().tasha.convo[21] = {enabled: false, seen: false, id: 21, title: "Strange Fantasies"};
variables().tasha.convo[22] = {enabled: false, seen: false, id: 22, title: "So This Place..."};
variables().tasha.convo[23] = {enabled: false, seen: false, id: 23, title: "So Much Fun!"};
variables().tasha.convo[24] = {enabled: false, seen: false, id: 24, title: "Weird Dreams"};
variables().tasha.convo[25] = {enabled: false, seen: false, id: 25, title: "New Gear"};
variables().tasha.convo[26] = {enabled: false, seen: false, id: 26, title: "Love Being the Office Bunny!"};
variables().tasha.convo[27] = {enabled: false, seen: false, id: 27, title: "Strange Noises"};

variables().julia.convo[1] = {enabled: true, seen: false, id: 1, title: "Staying Busy"};
variables().julia.convo[2] = {enabled: true, seen: false, id: 2, title: "Hard Work"};
variables().julia.convo[3] = {enabled: false, seen: false, id: 3, title: "Thinking of Tory"};
variables().julia.convo[4] = {enabled: false, seen: false, id: 4, title: "Thinking of Chanel"};
variables().julia.convo[5] = {enabled: false, seen: false, id: 5, title: "The New Julia"};
variables().julia.convo[6] = {enabled: true, seen: false, id: 6, title: "Birth Control PSA"};
variables().julia.convo[7] = {enabled: false, seen: false, id: 7, title: "Nice John"};
variables().julia.convo[8] = {enabled: false, seen: false, id: 8, title: "I Want to Taste It!"};
variables().julia.convo[9] = {enabled: false, seen: false, id: 9, title: "Tasha's a Lot..."};

variables().lauren.convo[1] = {enabled: true, seen: false, id: 1, title: "Getting Comfortable?"};
variables().lauren.convo[2] = {enabled: true, seen: false, id: 2, title: "About Tory"};
variables().lauren.convo[3] = {enabled: false, seen: false, id: 3, title: "About Julia"};

variables().kagney.convo[1] = {enabled: true, seen: false, id: 1, title: "Keeping Busy"};
variables().kagney.convo[2] = {enabled: false, seen: false, id: 2, title: "Looking Overworked"};
variables().kagney.convo[3] = {enabled: false, seen: false, id: 3, title: "Looking For Help"};
variables().kagney.convo[4] = {enabled: false, seen: false, id: 4, title: "Is It True?"};
variables().kagney.convo[5] = {enabled: false, seen: false, id: 5, title: "OMG Tasha!"};
//#endregion

/* Reference
variables().sophie.control={
    casual: false,
    flash: false,
    oralThink: false,
    phone: false,
    touch: false,
    oralSecret: false,
    lunch: false,
    grope: false,
    officeOral: false,
    date: false,
    giveOral: false,
    officeSex: false
    };
variables().penny.control={
    command: false,
    command2: false,
    makeSerums: false,
    sellSerums: false,
    testSerums: false,
    testTFM: false,
    slut: false,
    slut2: false,
    actDom: false,
    beDom: false,
    officeSlut: false,
    whore: false,
    materials: false,
    production: false
    };
variables().penny.flag={
    firstDate: false,
    secondDate: false,
    thirdDate: false,
    arcStart: false,
    arcEnd: false,
    canProgress: true,
    breakup: false,
    makeCMD1: false,
    unlockApartment: false,
    sex: false,
    oral: false,
    apartmentOral: false,
    increaseOutput: false,
    };
variables().diana.control={
    flirt: false,
    sophieInfo: false,
    oral: false,
    sex: false,
    usb: false
    };
variables().diana.flag={
    backRoom: false
    };
variables().john.flag={
    giveOral: false,
    slapDown: false,
    serumBackfire: false,
    bathroomOral1: false
    };
variables().tasha.talk={
    johnDefeat: false
    };
variables().tasha.flag={
    hadCoffee: false,
    caughtPegging: false,
    caughtMasturbating: false
    };
variables().tasha.control={
    coffee: false,
    morningMasturbate: false,
    coffeeKiss: false,
    johnDom: false,
    oral: false
    };
variables().julia.flag={
    seeLeaveLab: false,
    firstBody: false
    };
variables().julia.talk={
    johnHistory: false,
    birthControl: false
    };
*/