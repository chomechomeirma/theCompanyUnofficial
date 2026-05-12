/* twine-user-script #54: "defineTitles.js" */
// Functions used to generate titles for slaves based on accumulated perks
const TITLES = {
    "Oral Expert": {
        name: "Oral Expert",
        type: "oral",
    },
};

window.setSlaveTitle = function(slave) {
    // Set title
    var top = slave.skills.anal;
    var title = "anal";

    if (slave.skills.oral > top) {
        top = slave.skills.oral;
        title = "oral";
    };
    if (slave.skills.breasts > top) {
        top = slave.skills.breasts;
        title = "breasts";
    };
    if (slave.skills.pussy > top) {
        top = slave.skills.pussy;
        title = "pussy";
    };
    if (slave.skills.dom > top) {
        top = slave.skills.dom;
        title = "dom";
    };
    if (slave.skills.sub > top) {
        top = slave.skills.sub;
        title = "sub";
    };
    if (slave.skills.pet > top) {
        top = slave.skills.pet;
        title = "pet";
    };

    slave.title = title;
};
