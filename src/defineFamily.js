/* twine-user-script #16: "defineFamily.js" */
// Mom
variables().mom={
    name: "Mom", id: "mom",realName: "Ava",
    default: "default",
    style: "mom",
    convo:[], notes:[],
    isFemale: true,
    daysCollar: 0,
    dose: 0,
    nextSerum: 1,
    mcsx: {cd: 0,slut: 0},
    doseCD: 0,
    convoCD: 0,
    status: "Normal",
    relationship: "Mother",
    lust: 0,
    love: 1,
    hasShop: true,
    shop: "hart",
    morningTask: "oral",
    control: {}, flag: {}
};

// Sister
variables().sister={
    name: "Dakota", id: "sister",
    default: "default",
    style: "sister",
    convo: [],notes: [], rape: {},
    isFemale: true,
    pregnantBy: "",
    dose: 0,
    nextSerum: 1,
    mcsx: {cd: 0, pet: 0, porn: 0},
    doseCD: 0,
    convoCD: 0,
    status: "Normal",
    relationship: "Sister",
    lust: 0,
    love: 1,
    camStep: 1,
    hasShop: true,
    shop: "hart",
    control: {}, flag: {}, talk: {}
};

variables().mom.convo[1] = {enabled: true, seen: false, cd: 0, cdMax: 3, id: 1, title: "Talk About Moving In"};
variables().mom.convo[2] = {enabled: true, seen: false, cd: 0, cdMax: 3, id: 2, title: "Talk About Life"};
variables().mom.convo[3] = {enabled: false, seen: false, cd: 0, cdMax: 3, id: 3, title: "Thanks For The Coffee"};
variables().mom.convo[4] = {enabled: false, seen: false, cd: 0, cdMax: 3, id: 4, title: "Have You Been Okay?"};
variables().mom.convo[5] = {enabled: false, seen: false, cd: 0, cdMax: 3, id: 5, title: "You've Been Acting Stressed"};
variables().mom.convo[6] = {enabled: false, seen: false, cd: 0, cdMax: 3, id: 6, title: "Talk About Affection"};
variables().mom.convo[7] = {enabled: false, seen: false, cd: 0, cdMax: 3, id: 7, title: "Talk About <<Mom>>'s Penis"};
variables().mom.convo[8] = {enabled: false, seen: false, cd: 0, cdMax: 3, id: 8, title: "Comfortable Clothing"};
variables().mom.convo[9] = {enabled: false, seen: false, cd: 0, cdMax: 3, id: 9, title: "Tight Family"};
variables().mom.convo[10] = {enabled: false, seen: false, cd: 0, cdMax: 3, id: 10, title: "<<Mom>> is Happy"};
variables().mom.convo[11] = {enabled: false, seen: false, cd: 0, cdMax: 3, id: 11, title: "New Dad?"};
variables().mom.convo[12] = {enabled: false, seen: false, cd: 0, cdMax: 3, id: 12, title: "Lots of Fun"};
variables().mom.convo[13] = {enabled: false, seen: false, cd: 0, cdMax: 3, id: 13, title: "<<Mom>> Loves Master"};
variables().mom.convo[14] = {enabled: false, seen: false, cd: 0, cdMax: 3, id: 14, title: "Bridal Plans"};
variables().mom.convo[15] = {enabled: false, seen: false, cd: 0, cdMax: 3, id: 15, title: "<<Mom>> Gets Dark"};
variables().mom.convo[16] = {enabled: false, seen: false, cd: 0, cdMax: 3, id: 16, title: "<<Mom>> Gets Ideas"};
variables().mom.convo[17] = {enabled: false, seen: false, cd: 0, cdMax: 3, id: 17, title: "Married Life"};
variables().sister.convo[1] = {enabled: true, seen: false, id: 1, title: "Talk About School"};
variables().sister.convo[2] = {enabled: false, seen: false, id: 2, title: "Talk About School"};
variables().sister.convo[3] = {enabled: false, seen: false, id: 3, title: "Talk About School"};
variables().sister.convo[4] = {enabled: false, seen: false, id: 4, title: "Talk About School"};
variables().sister.convo[5] = {enabled: false, seen: false, id: 5, title: "New Guy at School"};
variables().sister.convo[6] = {enabled: false, seen: false, id: 6, title: "New Guy at School"};
variables().sister.convo[7] = {enabled: false, seen: false, id: 7, title: "New Guy at School"};
variables().sister.convo[8] = {enabled: false, seen: false, id: 8, title: "New Girl at School"};
variables().sister.convo[9] = {enabled: true, seen: false, id: 9, title: "Talk About <<Mom>>"};
variables().sister.convo[10] = {enabled: false, seen: false, id: 10, title: "Talk About <<Mom>>"};
variables().sister.convo[11] = {enabled: false, seen: false, id: 11, title: "<<Mom>>'s Bringing You COFFEE!?"};
variables().sister.convo[12] = {enabled: false, seen: false, id: 12, title: "<<Mom>> is Stressed"};
variables().sister.convo[13] = {enabled: false, seen: false, id: 13, title: "Teasing <<Sister>>"};
variables().sister.convo[14] = {enabled: false, seen: false, id: 14, title: "Sharing a Kiss with <<Sister>>"};
variables().sister.convo[15] = {enabled: false, seen: false, id: 15, title: "Frustrated with <<Mom>>'s Masturbating"};
variables().sister.convo[16] = {enabled: false, seen: false, id: 16, title: "Catch you Watching <<Mom>> in Shower"};
variables().sister.convo[17] = {enabled: false, seen: false, id: 17, title: "Tease you About <<Mom>> in Shower"};
variables().sister.convo[18] = {enabled: false, seen: false, id: 18, title: "<<Sister>> Puts on a Show"};
variables().sister.convo[19] = {enabled: true, seen: false, id: 19, title: "Talk About Movies"};
variables().sister.convo[20] = {enabled: false, seen: false, id: 20, title: "Had Fun at Theater"};
variables().sister.convo[21] = {enabled: false, seen: false, id: 21, title: "Talk About Porn"};
variables().sister.convo[22] = {enabled: false, seen: false, id: 22, title: "Watch Porn with <<Sister>>"};
variables().sister.convo[23] = {enabled: false, seen: false, id: 23, title: "On Having Sex"};
variables().sister.convo[24] = {enabled: false, seen: false, id: 24, title: "<<Mom>>'s Crazy"};
variables().sister.convo[25] = {enabled: false, seen: false, id: 25, title: "Thoughts on <<Mom>>"};
variables().sister.convo[26] = {enabled: false, seen: false, id: 26, title: "Is <<Mom>> Okay?"};
variables().sister.convo[27] = {enabled: false, seen: false, id: 27, title: "Pimping Out <<Mom>>!?"};
variables().sister.convo[28] = {enabled: false, seen: false, id: 28, title: "So Tired"};
variables().sister.convo[29] = {enabled: false, seen: false, id: 29, title: "<<Mom>>'s a Maid"};
variables().sister.convo[30] = {enabled: false, seen: false, id: 30, title: "It's Cute!"};
variables().sister.convo[31] = {enabled: false, seen: false, id: 31, title: "You Married $mom.name!?"};
variables().sister.convo[32] = {enabled: false, seen: false, id: 32, title: "Wrong Room"};