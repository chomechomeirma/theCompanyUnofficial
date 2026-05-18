/* twine-user-script #51: "definePerks.js" */
// Define perks for The Pit

const PERKS = {
    "Oral Fixation": {
        name: "Oral Fixation",
        perkReq: "none", traitReq: "none",
        sexReq: [1,10], wlpReq: [0,10], ltyReq: [0,10],
        skillReq: ["oral", 1],
        value: 1500
    },
    "Oral Expert": {
        name: "Oral Expert",
        perkReq: "Oral Fixation", traitReq: "none",
        sexReq: [2,10], wlpReq: [0,10], ltyReq: [0,10],
        skillReq: ["oral", 3],
        value: 4500
    },
    "Oral Lover": {
        name: "Oral Lover",
        perkReq: "Oral Expert", traitReq: "none",
        sexReq: [4,10], wlpReq: [0,10], ltyReq: [0,10],
        skillReq: ["oral", 5],
        value: 9000
    },
    "Oral Obsession": {
        name: "Oral Obsession",
        perkReq: "Oral Lover", traitReq: "none",
        sexReq: [6,10], wlpReq: [0,10], ltyReq: [0,10],
        skillReq: ["oral", 10],
        value: 18000
    },
    "Anal Fixation": {
        name: "Anal Fixation",
        perkReq: "none", traitReq: "none",
        sexReq: [1,10], wlpReq: [0,10], ltyReq: [0,10],
        skillReq: ["anal", 1],
        value: 1500
    },
    "Anal Expert": {
        name: "Anal Expert",
        perkReq: "Anal Fixation", traitReq: "none",
        sexReq: [3,10], wlpReq: [0,10], ltyReq: [0,10],
        skillReq: ["anal", 3],
        value: 4500
    },
    "Nipple Fixation": {
        name: "Nipple Fixation",
        perkReq: "none", traitReq: "none",
        sexReq: [1,10], wlpReq: [0,10], ltyReq: [0,10],
        skillReq: ["breasts", 1],
        value: 1500
    },
    "Breeding Kink": {
        name: "Breeding Kink",
        perkReq: "none", traitReq: "none",
        sexReq: [2,10], wlpReq: [0,8], ltyReq: [0,10],
        skillReq: ["pussy", 1],
        value: 4500,
        bonusPerk: "Submissive", bonusValue: 10000
    },
    "Nymphomaniac": {
        name: "Nymphomaniac",
        perkReq: "none", traitReq: "none", traitNeg: "Frigid",
        sexReq: [8,10], wlpReq: [0,10], ltyReq: [0,10],
        skillReq: ["none"],
        value: 15000
    },
    "Dominant": {
        name: "Dominant",
        perkReq: "none", traitReq: "none",
        sexReq: [0,10], wlpReq: [4,10], ltyReq: [0,10],
        skillReq: ["dom", 1],
        value: 4500
    },
    "Sadistic": {
        name: "Sadistic",
        perkReq: "Dominant", traitReq: "none",
        sexReq: [4,10], wlpReq: [6,10], ltyReq: [2,10],
        skillReq: ["dom", 3],
        value: 4500
    },
    "Cruel": {
        name: "Cruel",
        perkReq: "Sadistic", traitReq: "none",
        sexReq: [2,10], wlpReq: [8,10], ltyReq: [0,10],
        skillReq: ["dom", 5],
        value: 7500
    },
    "Evil": {
        name: "Evil",
        perkReq: "Cruel", traitReq: "none",
        sexReq: [0,10], wlpReq: [10,10], ltyReq: [0,10],
        skillReq: ["dom", 10],
        value: 15000
    },
    "Submissive": {
        name: "Submissive",
        perkReq: "none", traitReq: "none",
        sexReq: [0,10], wlpReq: [0,2], ltyReq: [4,10],
        skillReq: ["sub", 1],
        value: 1500,
        bonusPerk: "Breeding Kink", bonusValue: 10000
    },
    "Masochistic": {
        name: "Masochistic",
        perkReq: "Submissive", traitReq: "none",
        sexReq: [4,10], wlpReq: [0,4], ltyReq: [6,10],
        skillReq: ["sub", 3],
        value: 4500
    },
    "Subservient": {
        name: "Subservient",
        perkReq: "Masochistic", traitReq: "none",
        sexReq: [2,10], wlpReq: [0,4], ltyReq: [8,10],
        skillReq: ["sub", 5],
        value: 7500
    },
    "Willing Slave": {
        name: "Willing Slave",
        perkReq: "Subservient", traitReq: "none",
        sexReq: [0,10], wlpReq: [0,1], ltyReq: [10,10],
        skillReq: ["sub", 10],
        value: 15000
    },
    "Pet": {
        name: "Pet",
        perkReq: "none", traitReq: "none",
        sexReq: [2,10], wlpReq: [0,8], ltyReq: [2,10],
        skillReq: ["pet", 1],
        value: 3000
    },
    "Submissive Pet": {
        name: "Submissive Pet",
        perkReq: "Pet", traitReq: "none",
        sexReq: [2,10], wlpReq: [0,8], ltyReq: [4,10],
        skillReq: ["sub", 3],
        value: 4500,
        bonusPerk: "Submissive", bonusValue: 10000
    },
    "Mute": {
        name: "Mute",
        perkReq: "none", traitReq: "Special",
        value: 4500,
        bonusPerk: "Submissive", bonusValue: 20000
    },
    "Clipped Heels": {
        name: "Clipped Heels",
        perkReq: "none", traitReq: "Special",
        value: 4500,
        bonusPerk: "Nymphomaniac", bonusValue: 20000
    },
    "Permanent Makeup": {
        name: "Permanent Makeup",
        perkReq: "none", traitReq: "Special",
        value: 4500,
        bonusPerk: "Nymphomaniac", bonusValue: 20000
    },
    "Augmented Breasts": {
        name: "Augmented Breasts",
        perkReq: "none", traitReq: "Special",
        value: 9000,
        bonusPerk: "Nymphomaniac", bonusValue: 20000
    },
    "Small Breasts": {
        name: "Small Breasts",
        perkReq: "none", traitReq: "Special",
        value: 3000
    },
    "Large Breasts": {
        name: "Large Breasts",
        perkReq: "none", traitReq: "Special",
        value: 3000,
        bonusPerk: "Nymphomaniac", bonusValue: 20000
    },
    "Feminized Voice": {
        name: "Feminized Voice",
        perkReq: "none", traitReq: "Special",
        value: 4500
    },
    "Castrated": {
        name: "Castrated",
        perkReq: "none", traitReq: "Special",
        value: 7500
    },
    "Feminized": {
        name: "Feminized",
        perkReq: "none", traitReq: "Special",
        value: 15000,
        bonusPerk: "Castrated", bonusValue: 30000
    },
    "Pulled Heels": {
        name: "Pulled Heels",
        perkReq: "none", traitReq: "Special",
        value: 13500,
        bonusPerk: "Submissive", bonusValue: 20000
    },
    "Animal Ears": {
        name: "Animal Ears",
        perkReq: "none", traitReq: "Special",
        value: 15000,
        bonusPerk: "Pet", bonusValue: 20000
    },
    "Room Slave": {
        name: "Room Slave",
        perkReq: "none", traitReq: "Special",
        value: 0,
    },
    "Get Pussy": {
        name: "Get Pussy",
        perkReq: "none", traitReq: "Special",
        value: 50000,
    },
};

window.getPerk = function(s, debug = false) {
    // Define array to store valid perks
    var p = [];
    var debugPerks = [];

    // Check against perk requirements and add to array if valid
    // loop through the items in the PERKS object
    for (var i in PERKS) {
        let pr = PERKS[i];
        // Check against perk requirements
        if (!s.perks.includes(pr.name)) {
            if (s.perks.includes(pr.perkReq) || pr.perkReq == "none") {
                if (s.trait.name == pr.traitReq || pr.traitReq == "none") {
                    if (!pr.traitNeg || s.trait.name !== pr.traitNeg) {
                        if (
                            s.sex <= pr.sexReq[1] && s.sex >= pr.sexReq[0] &&
                            s.wlp <= pr.wlpReq[1] && s.wlp >= pr.wlpReq[0] &&
                            s.lty <= pr.ltyReq[1] && s.lty >= pr.ltyReq[0] &&
                            (pr.skillReq == "none" || s.skills[pr.skillReq[0]] >= pr.skillReq[1])
                        ) {
                            p.push(pr.name);
                            if (debug) {
                                if (i < PERKS.length) {
                                    debugPerks.push(pr.name + ", ");
                                } else {    
                                    debugPerks.push(pr.name);
                                };
                            };
                        };
                    };
                };
            };
        };
    };

    // Return a random perk from the array
    if (debug) {
        return debugPerks;
    } else if (p.length == 0) {
        return "none";
    } else {
        var returnPerk = p[Math.floor(Math.random() * p.length)];
        if (PERKS[returnPerk].value !== undefined) {
            s.value += PERKS[returnPerk].value;
        };
        if (PERKS[returnPerk].bonusPerk !== undefined) {
            if (hasPerk(s, PERKS[returnPerk].bonusPerk)) {
                s.value += PERKS[returnPerk].bonusValue;
            };
        };
        return returnPerk;
    };
};

// Set Perk: Like getPerk, but adds a specific perk to a slave
window.setPerk = function(slave, perk) {
    // Check if slave has perk
    if (!slave.perks.includes(perk)) {
        // Add perk
        slave.perks.push(perk);
        slave.value += PERKS[perk].value;

        // Add bonus value for combined perks
        if (PERKS[perk].bonusPerk !== undefined) {
            if (hasPerk(slave, PERKS[perk].bonusPerk)) {
                slave.value += PERKS[perk].bonusValue;
            };
        };
    };
};

window.hasPerk = function (slave, perk) {
    // Check if slave has perk
    return slave.perks.includes(perk);
};

window.hasPerks = function (slave, perks) {
    // Check if slave has perk
    for (let i = 0; i < perks.length; i++) {
        if (slave.perks.includes(perks[i])) {
            return true;
        }
    }
    return false;
};

window.hasAllPerks = function (slave, perks) {
    // Check if slave has perk
    for (let i = 0; i < perks.length; i++) {
        if (!slave.perks.includes(perks[i])) {
            return false;
        }
    }
    return true;
};
