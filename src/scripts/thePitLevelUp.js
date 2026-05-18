/* twine-user-script #58: "thePitLevelUp.js" */
// Functions to handle level up events and the level up screen

window.psLevelUp = function(s) {
    // Return unlocked perk from list of valid perks
    var perk = getPerk(s);

    // Add perk to slave's perk list
    s.perks.push(perk);

    // Display perk unlock message
    var dlg = `You've unlocked the @@.xxx;${perk}@@ perk!`;

    // Return dialog string
    return dlg;
}
