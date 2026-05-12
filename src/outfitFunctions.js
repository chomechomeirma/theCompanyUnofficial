/* twine-user-script #11: "outfitFunctions.js" */
// Dressed Checks
// Returns true if any given values are found within the player's outfit properties
// Ex:	<<if dressed('slutty')>>			- Returns true if the player is dressed slutty
// Ex:	<<if dressed('formal','casual')>>	- Returns true if the player is dressed formal OR casual
window.dressed = function () {
    // Assign outfit value from total arguments, assigning default value if not defined
    var player = getPlayer();
    var value = [];
    if (arguments.length > 0) {
        value = arguments;
    } else {
        value = ['dressed'];
    };

    // Get states based on clothing values
    var o = [];
    var outfit = variables().Outfits[player.outfit];
    var underwear = variables().Underwear[player.underwear];
    var bra = variables().Bra[player.bra];
    var accf = variables().Accf[player.accf];

    // Push Primary Outfit
    o.push(getPrimaryOutfit());

    // Push outfit, underwear, accessory tags
    o = o.concat(outfit.tags, underwear.tags, accf.tags, bra.tags)

    // Parse tertiary outfit values for matches
    if (underwear.tags.includes('girly')) {o.push('girly-underwear')};
    if (underwear.tags.includes('manly')) {o.push('manly-underwear')};
    if (underwear.tags.includes('slutty') || bra.tags.includes('slutty')) {o.push('slutty-underwear')};
    if (outfit.tags.includes('girly') && isMale()) {o.push('crossdressed-male','crossdressed')};
    if (outfit.tags.includes('manly') && !isMale()) {o.push('crossdressed-female','crossdressed')};
    if (bra.id !== 'none') {o.push('bra')};
    if (underwear.id !== 'none') {o.push('underwear')};

    // Return true if outfit contains any defined values
    for (var i = 0; i < value.length; i++) {
        return (o.includes(value[i].toLowerCase()));
    };
};

// Function to return if a specific item is being worn
window.wearing = function (item) {
    var clothes = [variables().player.outfit,variables().player.underwear,variables().player.accf,variables().player.accb];
    return (clothes.includes(item));
};
// Function to return what would be considered the most notable outfit as a primary based on below priority
window.getPrimaryOutfit = function () {
    var outfit = variables().player.outfit;
    return variables().Outfits[outfit].main;
};

window.isWearingDress = function () {
    var outfit = variables().player.outfit;
    return (variables().Outfits[outfit].top == variables().Outfits[outfit].bottom);
};
window.isWearingUnderwear = function () {
    var und = variables().player.underwear;
    return (variables().Underwear[und].id !== 'none');
};
window.hasStrapon = function () {
    var acc = variables().player.accf;
    return (variables().Accf[acc].main === 'strapon');
};
window.isChastity = function (by) {
    var acc = variables().player.accf;
    if (by === undefined) {
        return (variables().Accf[acc].main === 'chastity');
    } else {
        var player = getPlayer();
        by = by.toLowerCase();
        return (variables().Accf[acc].main === 'chastity' && player.isChastityBy === by);
    };
};
window.analPlugged = function (item) {
    var acc = variables().player.accb;
    if (item === undefined) {
        return (variables().Accb[acc].id !== 'none');
    } else {
        return (variables().Accb[acc].id === item);
    };
};
window.frontPlugged = function (item) {
    var acc = variables().player.accf;
    if (item === undefined) {
        return (variables().Accf[acc].id !== 'none' && variables().Accf[acc].tags.includes('dildo'));
    } else {
        return (variables().Accf[acc].id === item && variables().Accf[acc].tags.includes('dildo'));
    };
};

// Makeup Check
// Returns true if makeup equals supplied value, defaulting to 'any'
// Ex:
//	<<if makeup()>>			- Returns true if player is wearing any makeup
//	<<if makeup(2)>>		- Returns true if player is wearing heavy makeup
//	<<if makeup('light')>>	- Returns true if player is wearing light makeup
window.makeup = function (m = 'any') {
    var player = getPlayer();

    if (m === 'any' && player.makeup > 0) {return true};
    if ((m === 'none' || m === 0) && player.makeup === 0) {return true};
    if ((m === 'light' || m === 1) && player.makeup === 1) {return true};
    if ((m === 'heavy' || m === 2) && player.makeup === 2) {return true};
};

// Returns makeup value as integer
window.getMakeup = function (actor = getPlayer()) {
    if (actor.makeup) {return actor.makeup} else {return 0};
};