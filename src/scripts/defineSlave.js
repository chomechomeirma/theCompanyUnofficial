/* twine-user-script #52: "defineSlave.js" */
class pitSlave {
    constructor(name,img,gender,gen,hairColor,hairLength,breastSize) {
        // Global values
        this.name = name.charAt(0).toUpperCase() + name.slice(1);   // Slave name set to proper case
        this.id = name.charAt(0).toLowerCase() + name.slice(1);     // Slave ID, lowercase version of name
        this.img = img;                 // Slave image (pics/pit/slaves/img.jpg)
        this.imgIndex = 0;              // Slave image index (pics/pit/slaves/img-1.jpg)
        this.profile = img + "-pro";    // Slave profile (pics/pit/slaves/img-pro.jpg)

        // Slave core values
        this.gender = gender;                   // Starting gender
        this.gen = gen;                         // Gender tag for images (male, female, ts)
        this.perks = [];                        // Array for slave's perks
        this.operations = 0;                    // Number of operations performed
        this.value = 25000;                     // Set a current sale value
        this.startValue = 25000;                // Set a starting sale value
        this.traitName = "";                    // Slave's trait name
        this.trait = randomObject(TRAITS,["none"]);

        // Slave stats
        this.sex = 5;       // Sexuality (desire for sex)
        this.wlp = 5;       // Willpower (desire to resist)
        this.lty = 5;       // Loyalty (desire to stay)
        this.xp = 0;        // Slave's experience points
        this.level = 0;     // Slave's starting level
        this.sexMod = 0;    // Sexuality modifier
        this.wlpMod = 0;    // Willpower modifier
        this.ltyMod = 0;    // Loyalty modifier
        this.xpMod = 0;     // Experience modifier

        // Slave skills
        this.skills = {
            "anal": 0,
            "oral": 0,
            "breasts": 0,
            "pussy": 0,
            "dom": 0,
            "sub": 0,
            "pet": 0,
            "fem": 0,
        };

        this.skillTier = function(skill) {
            if (this.skills[skill] < 0) {
                return 0;
            } else if (this.skills[skill] < 5) {
                return 1;
            } else if (this.skills[skill] < 10) {
                return 2;
            } else if (this.skills[skill] < 15) {
                return 3;
            } else if (this.skills[skill] < 20) {
                return 4;
            } else {
                return 5;
            }
        };

        this.skillDlg = function(skill, hates, unskilled, novice, skilled, talented, expert) {
            switch (this.skillTier(skill)) {
                case 0: return `@@.bd;${hates}@@ `;
                case 1: return `@@.bd;${unskilled}@@ `;
                case 2: return `@@.sf;${novice}@@ `;
                case 3: return `@@.sf;${skilled}@@ `;
                case 4: return `@@.gd;${talented}@@ `;
                case 5: return `@@.gd;${expert}@@ `;
            }
        };
        
        // Slave base qualities
        this.hairColor = hairColor;
        this.hairLength = hairLength;
        this.breastSize = breastSize;
        this.hasBreasts = false;
        this.hasPenis = false;
        this.hasBalls = false;
        this.hasPussy = false;

        // Slave extended qualities
        this.animal = "none";
        this.ears = "normal";
        this.limbs = "normal";
        this.voice = "normal";
        this.eyesight = "normal";
        this.hearing = "normal";

        // Slave personality
        this.background = "slave";
        this.age = "teen";
        this.history = "";

        // Slave pronouns
        this.he = "", this.He = "";
        this.his = "", this.His = "";
        this.him = "", this.Him = "";
        this.hiss = "", this.Hiss = "";
        this.boy = "", this.Boy = "";
        this.gID = "";

        this.getPenisSize = function () {
            if (this.hasPenis == true) {
                switch (Math.floor(this.penisSize)) {
                    case 0: return "microscopic";
                    case 1: return "tiny";
                    case 2: return "small";
                    case 3: return "average";
                    case 4: return "large";
                    case 5: return "huge";
                };
            } else {
                return "";
            };
        };
        this.getBallSize = function () {
            if (this.hasBalls == true) {
                switch (Math.floor(this.ballSize)) {
                    case 0: return "microscopic";
                    case 1: return "tiny";
                    case 2: return "small";
                    case 3: return "average";
                    case 4: return "large";
                    case 5: return "huge";
                };
            } else {
                return "";
            };
        };
        this.getBreastSize = function () {
            if (this.hasBreasts == true) {
                switch (Math.floor(this.breastSize)) {
                    case 0: return "flat";
                    case 1: return "tiny";
                    case 2: return "small";
                    case 3: return "average";
                    case 4: return "large";
                    case 5: return "huge";
                };
            } else {
                return "flat";
            };
        };        
        this.getHairLength = function () {
            switch (Math.floor(this.hairLength)) {
                case 0: return "bald";
                case 1: return "short";
                case 2: return "medium length";
                case 3: return "shoulder length";
                case 4: return "long";
                case 5: return "very long";
                default: return "bald";
            };
        };
        this.getHole = function (suffix = "") {
            if (this.hasPussy) {
                return "pussy";
            } else {
                return "ass" + suffix;
            };
        };
        this.wet = function () {
            if (this.hasPenis) {
                if (this.hasBalls) {
                    return "hard";
                } else { return "twitching" };
            } else {
                return "wet";
            };
        };
        this.getAge = function () {
            switch (this.age) {
                case "Teen": return "a teen";
                case "Young Adult": return "a young, adult";
                case "Adult": return "an adult";
                case "Mature": return "a mature";
            };
        }
        this.noise = function (mood) {
            switch (mood) {
                case "tired":
                    switch (this.animal) {
                        case "dog": return "whimper";
                        case "cat": return "mewl";
                        case "cow": return "moo";
                    };
                case "speak":
                    switch (this.animal) {
                        case "dog": return "Woof!";
                        case "cat": return "Meow!";
                        case "cow": return "Moooo...";
                    };
                case "howl":
                    switch (this.animal) {
                        case "dog": return "Aroooooo!!!";
                        case "cat": return "Mrooowww!!!";
                        case "cow": return "MOOooooo!!!";
                    };
                case "paw":
                    switch (this.animal) {
                        case "dog": return "paw";
                        case "cat": return "paw";
                        case "cow": return "hoof";
                    };
                case undefined:
                    switch (this.animal) {
                        case "dog": return "bark";
                        case "cat": return "moew";
                        case "cow": return "moo";
                    };
            };
        };

        // Boolean return functions
        this.isAnimal = function () {
            return (this.hasAnimalVoice && this.hasAnimalLimbs && this.hasTail && this.ears !== "normal");
        };

        // Change functions
        this.changeBreastSize = function (v) {
            this.breastSize = Math.clamp(this.breastSize += v, 1, 5);
        };
        this.changePenisSize = function (v) {
            this.penisSize = Math.clamp(this.penisSize += v, 1, 5);
        };
        this.changeBallSize = function (v) {
            this.ballSize = Math.clamp(this.ballSize += v, 1, 5);
        };
        this.changeHairLength = function (v) {
            this.hairLength = Math.clamp(this.hairLength += v, 1, 5);
        };
        this.changeSex = function (v) {
            v += this.sexMod;
            this.sex = Math.clamp(this.sex += v, 1, 10);
        };
        this.changeWlp = function (v) {
            v += this.wlpMod;
            this.wlp = Math.clamp(this.wlp += v, 1, 10);
        };
        this.changeLty = function (v) {
            v += this.ltyMod;
            this.lty = Math.clamp(this.lty += v, 1, 10);
        };
        this.changeXP = function (v, PitValueMod) {
            v += this.xpMod;
            this.xp = Math.clamp(this.xp += v, 0, 5);
            this.value += v * PitValueMod;
        };
        this.changeLevel = function (v, PitValueMod) {
            this.level = Math.clamp(this.level += v, 1, 10);
            this.value += v * PitValueMod * 10;
        };

        this.updatePronouns = function(g) {
            // Set pronouns based on gender (will be overwritten if assignPitSlavePronouns() is called later)
            if (g == "masculine") {
                this.he = "he", this.He = "He";
                this.his = "his", this.His = "His";
                this.him = "him", this.Him = "Him";
                this.hiss = "his", this.Hiss = "His";
                this.boy = "boy", this.Boy = "Boy";
                this.gID = "masculine";
            } else {
                this.he = "she", this.He = "She";
                this.his = "her", this.His = "Her";
                this.him = "her", this.Him = "Her";
                this.hiss = "hers", this.Hiss = "Hers";
                this.boy = "girl", this.Boy = "Girl";
                this.gID = "feminine";
            };
        };

        this.updateValue = function (value) {
            this.value += value;
        };
    };
};

window.createSlave = function (
    name,
    img = "random",
    gender = randomItem(variables().PitSlaveGenders),
    hairColor = randomItem(["black","brown","blonde","red","white","grey","blue","green","purple","orange"]),
    hairLength = Math.floor(Math.random() * 5) + 1,
    breastSize = Math.floor(Math.random() * 4) + 1,
    penisSize = Math.floor(Math.random() * 5) + 1,
    ballSize = Math.floor(Math.random() * 5) + 1,
    age = "random",
    uniqueSlave = false
) {
    // Confirm pitSlaves object exists, if not create it
    if (!variables().pitSlaves) { variables().pitSlaves = {} };

    // Gen truncated gender for image references
    var gen = gender;
    if (gender == "trans") { gen = "ts" };

    // Change provided name to lowercase if needed
    name = name.toLowerCase();

    // Only trigger if the slave does not currently exist
    if (!variables().pitSlaves[name]) {

        // Create new slave and assign slave to easier variable
        variables().pitSlaves[name] = new pitSlave(
            name,
            img,
            gender,
            gen,
            hairColor,
            hairLength,
            breastSize
        );

        // Assign new slave to a variable for easier access
        var slave = variables().pitSlaves[name];

        // Assign a new slave ID based on name + guid
        slave.id = slave.id + "-" + generateGuid();

        // Take up a slot in the pit
        variables().PitSlots += 1;

        // Select anatomy based on gender
        if (gender == "trans" || gender == "male") {
            slave.hasPenis = true;
            slave.hasPussy = false;
            slave.hasBalls = true;
            slave.penisSize = penisSize;
            slave.ballSize = ballSize;
        } else {
            slave.hasPussy = true;
            slave.hasPenis = false;
            slave.hasBalls = false;            
        };
        if (gender !== "male") {
            slave.hasBreasts = true;
        };

        // Make special considerations for unique slaves
        if (slave.id.contains("lauren")) {
            elog(`Lauren is a unique slave`);
            uniqueSlave = true;
            slave.hasPussy = true;
            slave.hasPenis = false;
            slave.hasBalls = false;
            slave.hasBreasts = true;
            slave.breastSize = 3;
            slave.penisSize = 0;
            slave.ballSize = 0;
            slave.hairLength = 4;
            slave.hairColor = "red";
            slave.img = "lauren";
            slave.imgIndex = 0;
            slave.gender = "female";
        };
        if (slave.id.contains("elsa")) {
            elog(`Elsa is a unique slave`);
            uniqueSlave = true;
            slave.hasPussy = true;
            slave.hasPenis = false;
            slave.hasBalls = false;
            slave.hasBreasts = true;
            slave.breastSize = 2;
            slave.penisSize = 0;
            slave.ballSize = 0;
            slave.hairLength = 2;
            slave.hairColor = "blonde";
            slave.img = "elsa";
            slave.imgIndex = 0;
            slave.gender = "female";
        };
        if (slave.id.contains("sarina")) {
            elog(`Sarina is a unique slave`);
            uniqueSlave = true;
            slave.hasPussy = false;
            slave.hasPenis = true;
            slave.hasBalls = true;
            slave.hasBreasts = true;
            slave.breastSize = 5;
            slave.penisSize = 1;
            slave.ballSize = 1;
            slave.hairLength = 5;
            slave.hairColor = "platinum blonde";
            slave.img = "sarina";
            slave.imgIndex = 0;
            slave.gender = "transgirl";
            slave.gen = "ts";
        };

        // Process traits for new slave
        processTraits(slave);

        // Add age and background to slave
        setAge(slave, age);
        setBackground(slave);
        setDescription(slave);

        // Generate img if not provided
        if (img == "random" && !uniqueSlave) {
            slave.img = setImage(slave);
            slave.imgIndex = setImageIndex(slave);
        };

        // Set pronouns based on gender (will be overwritten if assignPitSlavePronouns() is called later)
        if (gender == "male") {
            assignPitSlavePronouns(slave, "masculine");
        } else {
            assignPitSlavePronouns(slave, "feminine");
        };
    };
};

window.sellSlave = function(slave) {
    // Convert slave list to keys
    var slaves = Object.keys(variables().pitSlaves);

    // Remove slave from pitSlaves object
    for (var i = 0; i < slaves.length; i++) {
        if (variables().pitSlaves[slaves[i]].id == slave.id) {
            // Return slave's name to name pool
            if (slave.gender == 'male') {
                maleSlaveNames.push(slave.name);
            } else {
                femaleSlaveNames.push(slave.name);
            };
            delete variables().pitSlaves[slaves[i]];
        };
    };

    // Add slave value to Money
    variables().Money += slave.value;

    // Free up a slot in the pit
    variables().PitSlots -= 1;
};

window.assignPitSlavePronouns = function(slave, gID) {
    // Set pronouns based on gender (will be overwritten if assignPitSlavePronouns() is called later)
    if (gID == "masculine") {
        slave.he = "he", slave.He = "He";
        slave.his = "his", slave.His = "His";
        slave.him = "him", slave.Him = "Him";
        slave.hiss = "his", slave.Hiss = "His";
        slave.boy = "boy", slave.Boy = "Boy";
        slave.gID = "masculine";
    } else {
        slave.he = "she", slave.He = "She";
        slave.his = "her", slave.His = "Her";
        slave.him = "her", slave.Him = "Her";
        slave.hiss = "hers", slave.Hiss = "Hers";
        slave.boy = "girl", slave.Boy = "Girl";
        slave.gID = "feminine";
    };
};

window.getSlavePronouns = function(slave) {
    return [slave.name,slave.he,slave.He,slave.his,slave.His,slave.him,slave.Him,slave.hiss,slave.Hiss,slave.boy,slave.Boy,slave.gen];
};

window.getSlaveValue = function(slave) {
    // Set initial value 'v' at 0
    var v = 0;

    // Set value based on gender plus bonus for current preferred gender
    if (slave.gender == "male") {
        v += 10000;
    } else if (slave.gender == "trans") {
        v += 12500;
    } else {
        v += 15000;
    };
    if (slave.gender == variables().PrefSlaveGender) {v += 10000};
    
    // Increase value based on physical traits
    if (slave.hasBreasts) {v += Math.floor(slave.breastSize * 2000)};
    if (slave.hasPenis) {v += Math.floor(slave.penisSize * 1500)};
    if (slave.hasBalls) {v += Math.floor(slave.ballSize * 500)};
    if (slave.hasPussy) {v += 2000};

    // Increase value based on character traits
    v += Math.floor(slave.fear * 250);
    v += Math.floor(slave.respect * 1000);
    v += Math.floor(slave.horny * 1200);
    v += Math.floor(slave.smart * 500);

    // Adjust value based on slave traits
    if (slave.traits.includes("bimbo")) {v += 5000};
    if (slave.traits.includes("castrated") && slave.penisSize < 2 && slave.hasPenis) {v += 45000};
    if (slave.traits.includes("heelsClipped")) {v += 1000};
    if (slave.traits.includes("heelsPulled")) {v += 15000};
    if (slave.hadPenis == true) {v += 35000};
    if (slave.isMute == true) {v += 5000};
    if (slave.hasAnimalLimbs == true) {v += 2500};
    if (slave.hasAnimalVoice == true) {v += 2500};
    if (slave.hasTail == true) {v += 2500};
    if (slave.ears !== "normal") {v += 2500};
    if (slave.isAnimal() == true) {v += 50000};
    
    slave.value = v;
};

// One time run function when adding new functionality to existing pit slaves
window.updatePitSlaveClass = function() {
    var slavePool = Object.keys(variables().pitSlaves);
    
    for (let i = 0;i < slavePool.length;i++) {
        var currentSlave = variables().pitSlaves[slavePool[i]];
        currentSlave.updatePronouns = function(g) {
            // Set pronouns based on gender (will be overwritten if assignPitSlavePronouns() is called later)
            if (g == "masculine") {
                this.he = "he", this.He = "He";
                this.his = "his", this.His = "His";
                this.him = "him", this.Him = "Him";
                this.hiss = "his", this.Hiss = "His";
                this.boy = "boy", this.Boy = "Boy";
                this.gID = "masculine";
            } else {
                this.he = "she", this.He = "She";
                this.his = "her", this.His = "Her";
                this.him = "her", this.Him = "Her";
                this.hiss = "hers", this.Hiss = "Hers";
                this.boy = "girl", this.Boy = "Girl";
                this.gID = "feminine";
            };
        };
    };
};
