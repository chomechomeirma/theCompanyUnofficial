/* twine-user-script #59: "upgrades.js" */
// Define global updates to The Pit

variables().PitUpgrade = [];
variables().PitUpgrade[0] = {
    name: "Add +2 Trainer Points",
    cost: 7500,
    locked: true,
    type: "tp", value: 2,
    level: 1
};
variables().PitUpgrade[1] = {
    name: "Add +1 Cell Slot",
    cost: 10000,
    locked: true,
    type: "slot", value: 1,
    level: 1
};
variables().PitUpgrade[2] = {
    name: "Unlock Training Assistant",
    cost: 15000,
    locked: true,
    type: "flag", flag: "PitAssistant",
    level: 1
};
variables().PitUpgrade[3] = {
    name: "Add +2 Trainer Point",
    cost: 20000,
    locked: true,
    type: "tp", value: 2,
    level: 2
};
variables().PitUpgrade[4] = {
    name: "Add +1 Cell Slot",
    cost: 20000,
    locked: true,
    type: "slot", value: 1,
    level: 2
};
variables().PitUpgrade[5] = {
    name: "Unlock Basic Surgery",
    cost: 50000,
    locked: true,
    type: "flag", flag: "PitSurgery",
    level: 2
};
variables().PitUpgrade[6] = {
    name: "Slaves gain +1 XP",
    cost: 100000,
    locked: true,
    type: "stat", stat: "PitXPMod", value: 1,
    level: 3
};
variables().PitUpgrade[7] = {
    name: "Slaves gain or lose +1 Sexuality when trained",
    cost: 200000,
    locked: true,
    type: "stat", stat: "PitSEXMod", value: 1,
    level: 3
};
variables().PitUpgrade[8] = {
    name: "Slaves gain or lose +1 Willpower when trained",
    cost: 200000,
    locked: true,
    type: "stat", stat: "PitWLPMod", value: 1,
    level: 3
};
variables().PitUpgrade[9] = {
    name: "Slaves gain or lose +1 Loyalty when trained",
    cost: 200000,
    locked: true,
    type: "stat", stat: "PitLTYMod", value: 1,
    level: 3
};
variables().PitUpgrade[10] = {
    name: "Add +3 Trainer Points",
    cost: 100000,
    locked: true,
    type: "tp", value: 3,
    level: 4
};
variables().PitUpgrade[11] = {
    name: "Add +3 Cell Slot",
    cost: 100000,
    locked: true,
    type: "slot", value: 3,
    level: 4
};
variables().PitUpgrade[12] = {
    name: "Unlock Advanced Surgery",
    cost: 500000,
    locked: true,
    type: "flag", flag: "PitSurgery2",
    level: 4
};
variables().PitUpgrade[13] = {
    name: "Slaves gain 50% more Value from training",
    cost: 1000000,
    locked: true,
    type: "stat", stat: "PitValueMod", value: 50,
    level: 5
};
variables().PitUpgrade[14] = {
    name: "Slaves gain or lose +2 Sexuality when trained",
    cost: 500000,
    locked: true,
    type: "stat", stat: "PitSEXMod", value: 2,
    level: 5
};
variables().PitUpgrade[15] = {
    name: "Slaves gain or lose +2 Willpower when trained",
    cost: 500000,
    locked: true,
    type: "stat", stat: "PitWLPMod", value: 2,
    level: 5
};
variables().PitUpgrade[16] = {
    name: "Slaves gain or lose +2 Loyalty when trained",
    cost: 500000,
    locked: true,
    type: "stat", stat: "PitLTYMod", value: 2,
    level: 5
};
variables().PitUpgrade[17] = {
    name: "Add +3 Trainer Points",
    cost: 750000,
    locked: true,
    type: "tp", value: 3,
    level: 6
};
variables().PitUpgrade[18] = {
    name: "Add +3 Cell Slot",
    cost: 750000,
    locked: true,
    type: "slot", value: 3,
    level: 6
};
variables().PitUpgrade[19] = {
    name: "Unlock feminization surgery",
    cost: 400000,
    locked: true,
    type: "flag", flag: "PitFemSurgery",
    level: 3
};


window.upgradePit = function(upgrade) {
    var pg = variables().PitUpgrade[upgrade];

    if (pg.locked) {
        if (pg.type == "tp") {
            variables().TrainingPoints += pg.value;
            variables().MaxTrainingPoints += pg.value;
        } else if (pg.type == "slot") {
            variables().MaxPitSlots += pg.value;
        } else if (pg.type == "flag") {
            variables()[pg.flag] = true;
        } else if (pg.type == "stat") {
            variables()[pg.stat] += pg.value;
        };
    };

    pg.locked = false;
    variables().Money -= pg.cost;
};
