/* twine-user-script #55: "defineTraits.js" */
// Variables and functions to define traits for the Pit

const TRAITS = {
    "none": {
        name: "None",
        sex: 0, wlp: 0, lty: 0
    },
    "frigid": {
        name: "Frigid",
        sex: -3, wlp: -1, lty: 0,
        oral: -5, anal: -5, pussy: -5,
        value: -5000
    },
    "bratty": {
        name: "Bratty",
        sex: 2, wlp: 3, lty: -3,
        value: -2000
    },
    "stubborn": {
        name: "Stubborn",
        sex: 0, wlp: 3, lty: -3,
        value: -1000
    },
    "violent": {
        name: "Violent",
        sex: -2, wlp: 5, lty: -5,
        dom: 5, sub: -5,
        value: -2500
    },
    "timid": {
        name: "Timid",
        sex: -3, wlp: -3, lty: 1,
        dom: -5, sub: 5,
        value: -1000
    },
    "inexperienced": {
        name: "Inexperienced",
        sex: -2, wlp: 2, lty: -2,
        oral: -1, anal: -1, pussy: -1,
        value: 0
    },
    "hypersexual": {
        name: "Hypersexual",
        sex: 3, wlp: -2, lty: -4,
        oral: 2, anal: 2, pussy: 2,
        value: 10000
    },
    "peoplepleaser": {
        name: "People Pleaser",
        sex: -2, wlp: -3, lty: 3,
        oral: 2, breasts: 2,
        value: 5000
    },
    "oraladdict": {
        name: "Oral Addict",
        sex: 1, wlp: -2, lty: 0,
        oral: 5, pussy: -3,
        value: 10000
    },
    "analaddict": {
        name: "Anal Addict",
        sex: 3, wlp: -2, lty: 0,
        anal: 5, pussy: -3,
        value: 10000
    },
    "oralaversion": {
        name: "Oral Aversion",
        oral: -5,
        value: -2000
    },
    "analaversion": {
        name: "Anal Aversion",
        anal: -5,
        value: -2000
    }
};

function processTraits(s) {
    // Put the slave's trait in a variable for easier access
    var t = s.trait;

    // If the slave has a trait, apply the trait's effects
    if (t !== undefined || t !== "none") {
        s.traitName = t.name;
        s.sex += (t.sex == undefined ? 0 : t.sex);
        s.wlp += (t.wlp == undefined ? 0 : t.wlp);
        s.lty += (t.lty == undefined ? 0 : t.lty);
        if (t.oral !== undefined) {s.skills.oral += t.oral};
        if (t.anal !== undefined) {s.skills.anal += t.anal};
        if (t.breasts !== undefined) {s.skills.breasts += t.breasts};
        if (t.pussy !== undefined) {s.skills.pussy += t.pussy};
        if (t.value !== undefined) {s.value += t.value};
        s.startValue = s.value * 2;
    };
};
