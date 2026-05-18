/* twine-user-script #10: "genderFunctions.js" */
// Hair Check
// Returns true if hair length is greater than or equal to supplied value. Set second argument to false to check single length
// Ex:
//	<<if hair(1)>>			- Returns true if hair length is 1 or greater
//	<<if hair(2,false)>>	- Returns true if hair length is exactly 2
window.hair = function (length = 0, OrLonger = false, OrShorter = false) {
    var player = getPlayer();
    if (OrShorter == true) {
        return (player.hairLength <= length);
    } else if (OrLonger == true) {
        return (player.hairLength >= length);
    } else {
        return (player.hairLength == length);
    };
};

// Returns hair length as integer
window.getHair = function (actor = getPlayer()) {
    if (actor.hairLength !== undefined) {return actor.hairLength};
};

// Gender Checks
// Used to check if player's gender matches any given value
// Ex:	<<if gender('male')>>			- Returns true if the player is male
// Ex:	<<if gender('female','trans')>>	- Returns true if the player is female or trans
// Ex:	<<if not gender('sissy')>>		- Returns true if the player is any gender other than sissy
window.gender = function (player = getPlayer()) {
    // Assign gender value from total arguments, assigning default value if not defined
    var value = [];
    if (arguments.length > 0) {
        value = arguments;
    } else {
        return false;
    };

    // Assign player value for easier reference, then check for applicable gender states
    var genders = [], i = 0;

    if (isMale()) {genders.push('male')};
    if (isTrans()) {genders.push('trans','trans-woman')};
    if (isFemale()) {genders.push('female')};
    if (isMale(player,'sissy')) {genders.push('sissy')};
    if (isFemale(player,'bimbo')) {genders.push('bimbo')};
    if (isTrans(player,'sissy')) {genders.push('trans-sissy')};
    if (isTrans(player,'bimbo')) {genders.push('trans-bimbo')};
    if (isTrans(player,'sissy-bimbo')) {genders.push('trans-sissy-bimbo')};

    // Return true if genders contains any defined values
    for (i = 0; i < value.length; i++) {
        var v = value[i].toLowerCase();
        if (genders.includes(v)) {
            return true;
        };
    };
};

// Return primary gender
window.getPrimaryGender = function () {
    if (isMale()) {
        return 'male';
    } else if (isFemale()) {
        return 'female';
    } else if (isTrans()) {
        return 'trans';
    };
};

// Return anatomy tier
window.getTier = function (size) {
    var sizeTiers = setup.sizeTiers;
	if (size >= 0 && size < sizeTiers[1][1]) {return 0};
	if (size >= sizeTiers[1][1] && size < sizeTiers[2][1]) {return 1};
	if (size >= sizeTiers[2][1] && size < sizeTiers[3][1]) {return 2};
	if (size >= sizeTiers[3][1] && size < sizeTiers[4][1]) {return 3};
	if (size >= sizeTiers[4][1] && size < sizeTiers[5][1]) {return 4};
	if (size >= sizeTiers[5][1]) {return 5};
};

// Identify base gender
window.baseGender = (g) => variables().player.baseGender == g;

// Specific gender returns by base gender:
// Ex: <<if isMale()>> 					- Returns True is player is Male
window.isMale = () => baseGender('male');
window.isTrans = () => baseGender('ts');
window.isFemale = () => baseGender('female');
window.isBimbo = () => variables().player.isBimbo || permanentTF('bimbo');
window.isSissy = () => variables().player.isSissy;

// Anatomy checks returns true or false if anatomy exists.
// Ex:	<<if hasPenis()>>		- Returns True if player has a penis
window.hasPenis = () => baseGender('male') || baseGender('ts');
window.hasPussy = () => baseGender('female');
window.hasBreasts = () => bSize();

// Functionality Checks - Return if the player is capable of an action
window.canFuck = () => hasStrapon() || hasWorkingPenis();
window.hasWorkingPenis = () => hasPenis() && !isSissy() && !isChastity();

// Anatomy modifications
window.modPenis = (s=3,player=getPlayer()) => player.penisSize = Math.clamp(player.penisSize += s,1,100);
window.modPussy = (s=3,player=getPlayer()) => player.pussySize = Math.clamp(player.pussySize += s,0,100);
window.modBreasts = (s=3,player=getPlayer()) => player.breastSize = Math.clamp(player.breastSize += s,0,100);
window.modAss = (s=3,player=getPlayer()) => player.assSize = Math.clamp(player.assSize += s,0,100);

// This returns the tier number (None, Tiny, Small, Medium, Large, Massive) of an asset as an integer.
// Ex:	<<set _penisTier to pTier()>>		- Would set _penisTier to "3" if the Player had a medium penis
// Ex:  <<if pTier() > 3>>                  - Would return true if penis is bigger than medium
window.pTier = (actor=getPlayer()) => hasPenis() ? getTier(actor.penisSize) : 0;
window.vTier = (actor=getPlayer()) => hasPussy() ? getTier(actor.pussySize) : 0;
window.bTier = (actor=getPlayer()) => getTier(actor.breastSize);
window.aTier = (actor=getPlayer()) => getTier(actor.assSize);

// Size returns. Use these in if statements:
// Ex:	<<if pSize($L)>>		- Returns true if player has a large or bigger penis
window.pSize = (size=1,actor=getPlayer()) => hasPenis() ? actor.penisSize >= size : 0;
window.vSize = (size=1,actor=getPlayer()) => hasPussy() ? actor.pussySize >= size : 0;
window.bSize = (size=1,actor=getPlayer()) => actor.breastSize >= size;
window.aSize = (size=1,actor=getPlayer()) => actor.assSize >= size;

// Transformation Functions
window.tfToMale = (player=getPlayer()) => {
    if (!variables().TFCheat) {
        resetGender();
        resetGenderState();
        player.wakeup = 'tf';
        player.tfChange = true;
    };
    player.breastSize = 0;
    player.baseGender = 'male';
    player.gender = 'Male';
    player.hairCD = 10;
    player.hairLength = (player.hairLength > 1) ? 1 : player.hairLength;
    player.penisSize = (player.penisSize > 1) ? player.penisSize : 25;
};

window.tfToFemale = (player=getPlayer()) => {
    player.isSissy = player.isTransDom = false;
    if (!variables().TFCheat) {
        resetGender();
        player.wakeup = 'tf';
        player.tfChange = true;
    };
    player.penisSize = 0;
    player.pussySize = (player.pussySize > 0) ? player.pussySize : 0;
    player.breastSize = 25;
    player.gender = 'Female';
    player.baseGender = 'female';
    player.hairCD = 10;
    player.hairLength = (player.hairLength < 4) ? 4 : player.hairLength;
};

window.tfToTrans = (player=getPlayer()) => {
    if (!variables().TFCheat) {
        resetGender();
        resetGenderState();
        player.wakeup = 'tf';
        player.tfChange = true;
    };
    player.gender = "Trans";
    player.baseGender = 'ts';
    player.hairCD = 10;
    if (player.wasFemale) {
        player.hairLength = (player.hairLength < 4) ? 4 : player.hairLength;
    } else if (player.wasMale) {
        player.hairLength = (player.hairLength > 1) ? player.hairLength : 1;
    };
    player.penisSize = (player.penisSize > 1) ? player.penisSize : 25;
    player.breastSize = (player.breastSize > 25) ? player.breastSize : 25;
};

window.tfToSissy = (player=getPlayer()) => {
    if (!variables().TFCheat) {
        resetGenderState();
        player.wakeup = 'tf';
        player.tfStateChange = true;
    };
    player.stateChange = 'isSissy';
    player.isSissy = true;
    player.hairCD = 10;
    player.hairLength = (player.hairLength < 5) ? player.hairLength + 1 : player.hairLength;
    modPenis(-25);
};

window.tfFromSissy = (player=getPlayer()) => {
    if (!variables().TFCheat) {
        resetGenderState();
        player.wakeup = 'tf';
        player.tfStateChange = true;
    };
    player.stateChange = 'isNotSissy';
    player.isSissy = false;
    modPenis(15);
};

window.tfToBimbo = (player=getPlayer()) => {
    if (!variables().TFCheat) {
        resetGenderState();
        player.wakeup = 'tf';
        player.tfStateChange = true;
    };
    player.stateChange = 'isBimbo';
    player.isBimbo = true;
    player.hairCD = 10;
    player.hairLength = 6;
    modBreasts(25);
};

window.tfFromBimbo = (player=getPlayer()) => {
    if (!variables().TFCheat) {
        resetGenderState();
        player.wakeup = 'tf';
        player.tfStateChange = true;
    };
    player.stateChange = 'isNotBimbo';
    player.isBimbo = false;
};

window.tfToTransDom = (player=getPlayer()) => {
    if (!variables().TFCheat) {
        player.wakeup = 'tf';
        player.tfStateChange = true;
    };
    player.stateChange = "isTSDom";
    player.isTransDom = true;
};

window.tfFromTransDom = (player=getPlayer()) => {
    if (!variables().TFCheat) {
        player.wakeup = 'tf';
        player.tfStateChange = true;
    };
    player.stateChange = "isNotTSDom";
    player.isTransDom = false;
};

window.permanentTF = function (check,player=getPlayer()) {
	if (State.variables.ForceTF) {
		if (check === 'sissy') {
			return (player.tfSissy >= variables().PermanentTF);
		} else if (check === 'bimbo') {
			return (player.tfBimbo >= variables().PermanentTF || player.BimboForever);
		};
	};
};

// Resets current gender states
window.resetGender = (player=getPlayer()) => {
    player.wasMale = (isMale()) ? true : false;
    player.wasFemale = (isFemale()) ? true : false;
    player.wasTrans = (isTrans()) ? true : false;
};

window.resetGenderState = (player=getPlayer()) => {
    player.wasSissy = (player.isSissy) ? true : false;
    player.wasBimbo = (player.isBimbo) ? true : false;
    player.isSissy = player.isBimbo = player.isTransDom = false;
}