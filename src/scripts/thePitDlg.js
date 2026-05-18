/* twine-user-script #57: "thePitDlg.js" */
window.psGetOral = function(s) {
    // Initialize empty dialog string
    var [name,he,He,his,His,him,Him,hiss,Hiss,boy,Boy,gen] = getSlavePronouns(s);
    var dlg = '';

    // Update for pit assistant
    if (!hasWorkingPenis() && !hasPussy()) {
        var useAssist = true;
        dlg += `Since you are unable to train ${s.name} in this area yourself, you call over your training assistant to help you out. `;
    };

    // Generate scene dialog
    if (useAssist) {
        dlg += `You direct ${s.name} over to your assistant's cock, allowing it to hover over ${s.his} face for a moment. `;
    } else {
        dlg += `You direct ${s.name} over to your <<pSize>>, allowing it to hover over ${s.his} face for a moment. `;
    };
    
    if (hasPerk(s, "Clipped Heels")) {
	    dlg += `@@.sf;Since ${name} can't walk on ${his} own do to their heels being clipped, they're already kneeling in place waiting.@@ `;
	    if (hasPerk(s,"Nymphomaniac")) {
	    	dlg += `@@.xxx;While kneeling, you can see ${name} is already ${s.wet()} with excitement@@. `;
    	};
    } else if (hasPerk(s,"Nymphomaniac")) {
	    dlg += `@@.xxx;As ${he} approaches, you can see ${name} is already ${s.wet()} with excitement@@. `;
    };

	if (s.trait.name == "Oral Addict") {
		dlg += `@@.xxx;${name}'s breathing starts to intensify. The thought of getting to wrapping their mouth around a stiff cock has them salivating.@@ `;
	};
	
	if (hasPerk(s, "Oral Expert")) {
		dlg += `@@.sf;${name} starts to salivate at the thought of getting to servive a thick, hard cock. ${his} eyes are full of unabashed lust and need.@@ `;
	} else if (hasPerk(s, "Oral Fixation")) {
        dlg += `@@.sf;${s.He} licks ${s.his} lips, eager to get started.@@ `;
    } else if (s.wlp >= 4) {
        dlg += `${s.He} sneers at you, but you can see ${s.his} eyes are wide with lust. `;
    } else {
        dlg += `${s.He} licks ${s.his} lips, knowing what you're wanting from ${s.him} and happy to give it to you. `;
    };

    dlg += `\n\n`;

    if (useAssist) {
        dlg += `You order ${s.him} to open ${s.his} mouth, and ${s.he} does so. Your assistant guides his cock into ${s.his} mouth, and ${s.he} begins to suck on it. `;
    } else {
        dlg += `You order ${s.him} to open ${s.his} mouth, and ${s.he} does so. You guide your <<StraponOrCock size>> into ${s.his} mouth, and ${s.he} begins to suck on it. `;
    };

    dlg += `\n\n`;
    
    if (useAssist) {
        dlg += `<<pic $action "${s.gen}-suck-male">>\n`;
    } else {
        dlg += `<<pic $action "${s.gen}-suck-player">>\n`;
    };

    if (useAssist) {
        dlg += s.skillDlg("oral",
            `${s.name} clearly dislikes having your assistant's cock in ${s.his} mouth, choking and gagging through the barely subpar blowjob.`,
            `${s.name} doesn't quite know how to please a cock yet, and struggles to take the length of the shaft.`,
            `${s.name} slides your assistant's cock along ${s.his} tongue, taking care to keep ${s.his} teeth away from it.`,
            `${s.name} takes your assistant's cock easily into his ${s.his} throat, gagging occassionally but otherwise handling him quite nicely.`,
            `${s.name} eagerly takes your assistant's cock down ${s.his} throat, an expression of pure joy across ${s.his} lustful face.`,
            `${s.name} hungrily takes the entirety of your assistant's cock down ${s.his} throat, you can see your assistant ready to orgasm almost immediately as ${s.he} bobs up and down on his member.`
        );
    } else {
        dlg += s.skillDlg("oral",
            `${s.name} clearly dislikes having your <<StraponOrCock>> in ${s.his} mouth, choking and gagging through the barely subpar blowjob.`,
            `${s.name} doesn't quite know how to please a cock yet, and struggles to take the length of the shaft.`,
            `${s.name} slides your <<StraponOrCock size>> along ${s.his} tongue, taking care to keep ${s.his} teeth away from it.`,
            `${s.name} takes your <<StraponOrCock size>> easily into his ${s.his} throat, gagging occassionally but otherwise handling you quite nicely.`,
            `${s.name} eagerly takes your <<StraponOrCock size>> down ${s.his} throat, an expression of pure joy across ${s.his} lustful face.`,
            `${s.name} hungrily takes the entirety of your <<StraponOrCock size>> down ${s.his} throat, you can feel yourself ready to orgasm almost immediately as ${s.he} bobs up and down on your member.`
        );
    };
    
    if (hasPerk(s,"Oral Expert")) {
	    dlg += `As an @@.xxx;expert in oral pleasure@@, it's really no surprise how amazing ${name}'s skills are. ` 
    } else if (hasPerk(s, "Oral Fixation")) {
	    dlg += `Given ${his} @@.sf;oral fixation@@, there's no hiding how much ${he} enjoyed this session. `;
    }

    if (useAssist || hasPenis()) {
        dlg += `\n\n`;

        dlg += `<<pic $action "${s.gen}-oral-creampie">>`
    };

    s.skills.oral += 1;
    s.skills.sub += 0.5;
    return dlg;
};

window.psGetAnal = function(s) {
    // Initialize empty dialog string and easier pronoun variables
    var [name,he,He,his,His,him,Him,hiss,Hiss,boy,Boy,gen] = getSlavePronouns(s);
    var dlg = '';

    // Update for pit assistant
    if (!hasWorkingPenis() && !hasPussy()) {
        var useAssist = true;
        dlg += `Since you are unable to train ${s.name} in this area yourself, you call over your training assistant to help you out. `;
    };

    // Generate scene dialog
    if (useAssist) {
        dlg += `You direct ${name} over to your assistant's cock, allowing it to hover over ${his} face for a moment before instructing ${him} to turn around and present ${his} ass to him. `;
    } else {
        dlg += `You direct ${name} over to your <<pSize>>, allowing it to hover over ${his} face for a moment before instructing ${him} to turn around and present ${his} ass to you. `;
    };
    
    if (hasPerk(s, "Clipped Heels")) {
	    dlg += `@@.sf;Since ${name} can't walk on ${his} own do to their heels being clipped, they're already on their hands and knees waiting.@@ `;
	    if (hasPerk(s,"Nymphomaniac")) {
	    	dlg += `@@.xxx;While on all fours, you can see ${name} is already ${s.wet()} with excitement@@. `;
    	};
    } else if (hasPerk(s,"Nymphomaniac")) {
	    dlg += `@@.xxx;As ${he} approaches, you can see ${name} is already ${s.wet()} with excitement@@. `;
    };

    if (s.trait.name == "Anal Addict") {
        dlg += `@@.xxx;With ${his} innate addiction to anal sex, ${name} is beyond excited to get ${his} ass pounded today.@@ `;
    } else if (hasPerk(s, "Masochist")) {
        dlg += `@@.sf;As a masochist, ${name} is excited at the thought of getting brutally sodomized.@@ `;
    } else if (hasPerk(s, "Submissive")) {
        dlg += `@@.sf;As a submissive slave, ${name} is eager to get started and please ${his} partner.@@ `;
    };

    if (useAssist) {
        if (s.trait.name == "Anal Aversion") {
            dlg += `@@.bd;Having ${his} ass exposed like this has ${him} feeling incredibly uncomfortable.@@ `;
        } else if (hasPerk(s, "Anal Fixation") || s.trait.name == "Anal Addict") {
            dlg += `@@.gd;${He} shakes ${his} ass in the air, eager to be penetrated.@@ `;
        } else if (s.wlp >= 4) {
            dlg += `${He} sighs heavily, unhappy with what's about to happen, but knowing ${he} can't do anything to prevent it. `;
        } else {
            dlg += `${He} obediently gets into position, bending over on ${his} elbows and raising ${his} ass into the air. `;
        };
    } else {
        if (s.trait.name == "Anal Aversion") {
            dlg += `@@.bd;Having ${his} ass exposed to you like this has ${him} feeling incredibly uncomfortable.@@ `;
        } else if (hasPerk(s, "Anal Fixation")) {
            dlg += `@@.gd;${He} shakes ${his} ass in the air, eager to have you penetrate ${him}.@@ `;
        } else if (s.wlp >= 4) {
            dlg += `${He} sighs heavily, unhappy with what's about to happen, but knowing ${he} can't do anything to prevent it. `;
        } else {
            dlg += `${He} obediently gets into position, bending over on ${his} elbows and raising ${his} ass into the air. `;
        };
    };

    dlg += `\n\n`;

    if (useAssist) {
        dlg += `To ensure ${name} knows ${his} place, you instruct ${him} to apply ${his} own lube, before reaching back to grab your assistant's cock and guide it in ${him}self. `;

        if (hasPerk(s, "Anal Fixation") || s.trait.name == "Anal Addict") {
            dlg += `@@.gd;${name} happily complies, using maybe a little less lubricant than ${he} should have before eagerly grabbing hold of your assistant's member and sliding it inside.@@ `;
        };

        dlg += `\n\n`;

        if (s.hasPussy) {
            dlg += `<<pic $action "male-assfuck-female-doggy">>\n`;
        } else {
            dlg += `<<pic $action "male-fuck-${gen}">>\n`;
        };
        
        dlg += s.skillDlg("anal",
            `${name} can't hide the pain and disgust on ${his} face as your assistant slides their cock into ${his} asshole. It doesn't matter, as your assistant uses their tight hole for however long it takes to reach orgasm, then a little bit longer for good measure. `,
            `${name} does their best to take your assistant's cock into their asshole, whining and moaning as he stretches them out. He doesn't relent, using their tight hole as long as it takes him to achieve orgasm, then a little longer, before finally pulling out. `,
            `${name}'s tight asshole manages to accept your assistant's cock without too much resistance. ${He} moans and winces a little as your assistant pounds ${his} hole for as long as it takes him to cum. `,
            `${name}'s asshole easily accepts your assistant's cock, allowing him to almost immediately settle into a steady rhythm. He pounds ${his} hole for a good while before finally cumming. `,
            `${name} easily takes your assistant's cock into ${his} asshole, pressing back against him with every thrust. It's not long at all before ${his} tight hole brings him to an intense orgasm. `,
            `${name}'s amazing asshole seems to almost suck your assistant's cock inside. ${He} looks back at him as ${he} matches your rhythm, moaning like a slut as ${his} expert hold brings him to a near instant orgasm. `
        );
    } else {
        dlg += `To ensure ${name} knows ${his} place, you instruct ${him} to apply ${his} own lube, before reaching back to grab your <<StraponOrCock size>> and guide it in ${him}self. `;

        if (hasPerk(s, "Anal Fixation") || s.trait.name == "Anal Addict") {
            dlg += `@@.gd;${name} happily complies, using maybe a little less lubricant than ${he} should have before eagerly grabbing hold of your member and sliding it inside.@@ `;
        };

        dlg += `\n\n`;

        if (s.hasPussy) {
            dlg += `<<pic $action "player-assfuck-female-doggy">>\n`;
        } else {
            dlg += `<<pic $action "player-fuck-${gen}">>\n`;
        };
    
        dlg += s.skillDlg("anal",
            `${name} can't hide the pain and disgust on ${his} face as you slide your <<StraponOrCock size>> into their asshole. It doesn't matter to you, using their tight hole for however long it takes to reach orgasm, then a little bit longer for good measure. `,
            `${name} does their best to take your <<StraponOrCock size>> into their asshole, whining and moaning as you stretch them out. You don't relent, using their tight hole as long as it takes you to achieve orgasm, then a little longer, before finally pulling out. `,
            `${name}'s tight asshole manages to accept your <<StraponOrCock size>> without too much resistance. ${He} moans and winces a little as your pound ${his} hole for as long as it takes you to cum. `,
            `${name}'s asshole easily accepts your <<StraponOrCock size>>, allowing you to almost immediately settle into a steady rhythm. You pound ${his} hole for a good while before finally cumming. `,
            `${name} easily takes your <<StraponOrCock size>> into ${his} asshole, pressing back against you with every thrust. It's not long at all before ${his} tight hole brings you to an intense orgasm. `,
            `${name}'s amazing asshole seems to almost suck your <<StraponOrCock size>> inside. ${He} looks back at you as ${he} matches your rhythm, moaning like a slut as ${his} expert hold brings you to a near instant orgasm. `
        );
    };

    if (hasPerk(s, "Muted")) {
        dlg += `@@.sf;Despite whatever ${name} is currently feeling, only airy gasps escape ${his} mouth as a result of having ${his} vocal cords removed.@@ `;
    }
    
    dlg += `\n\n`;

    if (useAssist) {
        dlg += `Your assistant shoots their hot, thick load deep into ${name}'s asshole, holding ${him} in place for as long as it takes him to completely empty his balls. `;
    } else if (hasPenis()) {
        dlg += `You shoot your hot, thick load deep into ${name}'s asshole, holding ${him} in place for as long as it takes you to completely empty your balls. `;
    } else {
        dlg += `You bury your strapon deep into ${name}'s asshole, the friction from the strap sending you into an intense, wet orgasm. You hold ${him} in place for as long as it takes you to come down from your climax. `
    }

    s.skills.anal += 1;
    s.skills.sub += 0.5;
    return dlg;
};

window.psGetPussy = function(s) {
    // Initialize empty dialog string and easier pronoun variables
    var [name,he,He,his,His,him,Him,hiss,Hiss,boy,Boy,gen] = getSlavePronouns(s);
    var dlg = '';

    // Update for pit assistant
    if (!hasWorkingPenis() && !hasPussy()) {
        var useAssist = true;
        dlg += `Since you are unable to train ${s.name} in this area yourself, you call over your training assistant to help you out. `;
    };

    // Generate scene dialog
    if (useAssist) {
        dlg += `You direct ${name} over to your assistant's cock, allowing it to hover over ${his} face for a moment before instructing ${him} to turn around and present ${his} bare pussy to him. `;
    } else {
        dlg += `You direct ${name} over to your <<pSize>>, allowing it to hover over ${his} face for a moment before instructing ${him} to turn around and present ${his} bare pussy to you. `;
    };
    
    if (hasPerk(s, "Clipped Heels")) {
	    dlg += `@@.sf;Since ${name} can't walk on ${his} own do to their heels being clipped, they're already on their hands and knees waiting.@@ `;
	    if (hasPerk(s,"Nymphomaniac")) {
	    	dlg += `@@.xxx;While on all fours, you can see ${name} is already ${s.wet()} with excitement@@. `;
    	};
    } else if (hasPerk(s,"Nymphomaniac")) {
	    dlg += `@@.xxx;As ${he} approaches, you can see ${name} is already ${s.wet()} with excitement@@. `;
    };

    if (s.trait.name == "Breeding Kink") {
        dlg += `@@.xxx;With ${his} innate addiction to getting bred, ${name} is beyond excited to get ${his} pussy filled with cum today.@@ `;
    } else if (hasPerk(s, "Masochist")) {
        dlg += `@@.sf;As a masochist, ${name} is excited at the thought of getting brutally fucked and used.@@ `;
    } else if (hasPerk(s, "Submissive")) {
        dlg += `@@.sf;As a submissive slave, ${name} is eager to get started and please ${his} partner.@@ `;
    };

    if (useAssist) {
        if (s.trait.name == "Frigid") {
            dlg += `@@.bd;Due to ${his} frigid nature, having ${his} hole exposed like this has ${him} feeling incredibly uncomfortable.@@ `;
            if (hasPerk(s, "Nymphomaniac")) {
                dlg += `@@.xxx;Despite this, having become a Nymphomaniac through repeated training@@ has resulted in ${him} feeling more than a little excited for what's to come. `
            };
        } else if (hasPerks(s, ["Breeding Kink","Nymphomaniac"])) {
            dlg += `@@.gd;${He} shakes ${his} ass in the air, eager to have your assistant penetrate ${him} and fill ${him} with cum.@@ `;
        } else if (s.wlp >= 4) {
            dlg += `${He} sighs heavily, unhappy with what's about to happen, but knowing ${he} can't do anything to prevent it. `;
        } else {
            dlg += `${He} obediently gets into position, bending over on ${his} elbows and raising ${his} ass into the air. ${His} pussy is wet and ready for your assistant. `;
        };
    } else {
        if (s.trait.name == "Frigid") {
            dlg += `@@.bd;Due to ${his} frigid nature, having ${his} hole exposed to you like this has ${him} feeling incredibly uncomfortable.@@ `;
            if (hasPerk(s, "Nymphomaniac")) {
                dlg += `@@.xxx;Despite this, having become a Nymphomaniac through repeated training@@ has resulted in ${him} feeling more than a little excited for what's to come. `
            };
        } else if (hasPerks(s, ["Breeding Kink","Nymphomaniac"])) {
            if (hasPenis()) {
                dlg += `@@.gd;${He} shakes ${his} ass in the air, eager to have you penetrate ${him} and fill ${him} with cum.@@ `;
            } else {
                dlg += `@@.gd;${He} shakes ${his} ass in the air, eager to have you penetrate ${him} despite you being unable to impregnate ${him}.@@ `;
            };
        } else if (s.wlp >= 4) {
            dlg += `${He} sighs heavily, unhappy with what's about to happen, but knowing ${he} can't do anything to prevent it. `;
        } else {
            dlg += `${He} obediently gets into position, bending over on ${his} elbows and raising ${his} ass into the air. ${His} pussy is wet and ready for you. `;
        };
    };

    dlg += `\n\n`;

    if (useAssist) {
        dlg += `To ensure ${name} knows ${his} place, you instruct ${him} to apply ${his} own lube, before reaching back to grab your assistant's cock and guide it in ${him}self. `;

        if (hasPerk(s, "Breeding Kink") || s.trait.name == "Hypersexual") {
            dlg += `@@.gd;${name} happily complies, using maybe a little less lubricant than ${he} should have before eagerly grabbing hold of your assistant's member and sliding it inside.@@ `;
        };

        dlg += `\n\n`;

        dlg += `<<pic $action "male-fuck-${gen}">>\n`;

        dlg += s.skillDlg("pussy",
            `${name} can't hide the pain and disgust on ${his} face as your assistant slides his cock into their pussy. It doesn't matter to him, using their tight hole for however long it takes to reach orgasm, then a little bit longer for good measure. `,
            `${name} does their best to take your assistant's cock into their pussy, whining and moaning as he stretches them out. He doesn't relent, using their tight hole as long as it takes him to achieve orgasm, then a little longer, before finally pulling out. `,
            `${name}'s tight pussy manages to accept your assistant's cock without too much resistance. ${He} moans and winces a little as your pound ${his} hole for as long as it takes him to cum. `,
            `${name}'s pussy easily accepts your assistant's cock, allowing him to almost immediately settle into a steady rhythm. He pounds ${his} hole for a good while before finally cumming. `,
            `${name} easily takes your assistant's cock into ${his} pussy, pressing back against him with every thrust. It's not long at all before ${his} tight hole brings your assistant to an intense orgasm. `,
            `${name}'s amazing pussy seems to almost suck your assistant's cock inside. ${He} looks back at him as ${he} matches his rhythm, moaning like a slut as ${his} expert hold brings your assistant to a near instant orgasm. `
        );
    } else {
        dlg += `To ensure ${name} knows ${his} place, you instruct ${him} to apply ${his} own lube, before reaching back to grab your <<StraponOrCock size>> and guide it in ${him}self. `;

        if (hasPerk(s, "Breeding Kink") || s.trait.name == "Hypersexual") {
            dlg += `@@.gd;${name} happily complies, using maybe a little less lubricant than ${he} should have before eagerly grabbing hold of your member and sliding it inside.@@ `;
        };

        dlg += `\n\n`;

        dlg += `<<pic $action "player-fuck-female-doggy">>\n`;

        dlg += s.skillDlg("pussy",
            `${name} can't hide the pain and disgust on ${his} face as you slide your <<StraponOrCock size>> into their pussy. It doesn't matter to you, using their tight hole for however long it takes to reach orgasm, then a little bit longer for good measure. `,
            `${name} does their best to take your <<StraponOrCock size>> into their pussy, whining and moaning as you stretch them out. You don't relent, using their tight hole as long as it takes you to achieve orgasm, then a little longer, before finally pulling out. `,
            `${name}'s tight pussy manages to accept your <<StraponOrCock size>> without too much resistance. ${He} moans and winces a little as your pound ${his} hole for as long as it takes you to cum. `,
            `${name}'s pussy easily accepts your <<StraponOrCock size>>, allowing you to almost immediately settle into a steady rhythm. You pound ${his} hole for a good while before finally cumming. `,
            `${name} easily takes your <<StraponOrCock size>> into ${his} pussy, pressing back against you with every thrust. It's not long at all before ${his} tight hole brings you to an intense orgasm. `,
            `${name}'s amazing pussy seems to almost suck your <<StraponOrCock size>> inside. ${He} looks back at you as ${he} matches your rhythm, moaning like a slut as ${his} expert hold brings you to a near instant orgasm. `
        );
    };
    
    dlg += `\n\n`;

    if (useAssist) {
        dlg += `<<pic $action "${gen}-creampie">>\n`;
        
        dlg += `Your assistant shoots his hot, thick load deep into ${name}'s pussy, holding ${him} in place for as long as it takes him to completely empty his balls. `;
        
        if (hasPerk(s, "Breeding Kink")) {
            dlg += `@@.gd;The feeling of having their womb fill with hot cum is enough to send ${name} into another round of intense orgasms.@@ `
        };
    } else if (hasPenis()) {
        dlg += `<<pic $action "${gen}-creampie">>\n`;

        dlg += `You shoot your hot, thick load deep into ${name}'s pussy, holding ${him} in place for as long as it takes you to completely empty your balls. `;

        if (hasPerk(s, "Breeding Kink")) {
            dlg += `@@.gd;The feeling of having their womb fill with your cum is enough to send ${name} into another round of intense orgasms.@@ `
        };
    } else {
        dlg += `You bury your strapon deep into ${name}'s pussy, the friction from the strap sending you into an intense, wet orgasm. You hold ${him} in place for as long as it takes you to come down from your climax. `
    }

    s.skills.pussy += 1;
    s.skills.sub += 0.5;
    return dlg;
};

window.psGetDom = function(s,s2) {
    // Initialize empty dialog string and easier pronoun variables
    var [name,he,He,his,His,him,Him,hiss,Hiss,boy,Boy,gen] = getSlavePronouns(s);
    var [name2,he2,He2,his2,His2,him2,Him2,hiss2,Hiss2,boy2,Boy2,gen2] = getSlavePronouns(s2);
    var dlg = '';
    var cock = (s.hasPenis ? "cock" : "strapon");

    // Generate scene dialog
    dlg += `You instruct ${name} to sit quietly and wait while you go and retrieve ${his} partner for this session`;

    if (hasAllPerks(s, ["Muted","Clipped Heels"])) {
        dlg += `, @@.sf;not that ${he} has the ability to speak or stand anymore, anyway.@@ `
    } else if (hasPerk(s, "Muted")) {
        dlg += `, @@.sf;not that ${he} has the ability to speak anymore, anyway.@@ `
    } else if (hasPerk(s, "Clipped Heels")) {
        dlg += `, @@.sf;not that ${he} has the ability to stand anymore, anyway.@@ `;
    } else {
        dlg += `. `;
    };
    
    dlg += `After a moment, you return with ${name2} and close the door behind you. As ${name} watches in silence, you have ${name2} get on ${his2} hands and knees, presenting ${his2} ass to ${name}. `;

    dlg += `\n\n`;
    
    dlg += `<<nm $player "${name}, today you'll be fucking ${name2} with the intent of making ${name2} submit to you completely. We'll finish once you've sufficiently broken ${him2}.">>\n\n`

    if (hasPerk(s, "Sadistic")) {
        dlg += `@@.gd;Due to ${his} sadistic personality, ${name} is beyond excited to exert ${him}self over ${name2}.@@ `;
    } else if (hasPerk(s, "Dominant")) {
        dlg += `@@.gd;Due to ${his} dominant personality, ${name} is more than happy to make ${name2} submit to ${him}, even if it's only for your pleasure.@@ `;
    } else if (s.trait.name == "People Pleaser") {
        dlg += `@@.gd;Due to ${his} people pleasing nature, ${name} appears eager to take on the dominant role with ${name2} today.@@ `;
    } else if (hasPerk(s, "Submissive")) {
        dlg += `@@.bd;Due to ${his} submissive personality, ${name} is visibly uncomfortable being made to dominate ${name2}@@`;
        if (hasPerk(s2, "Submissive")) {
            dlg += `@@.bd;, despite ${name2}'s eagerness to submit to ${him}.@@ `;
        } else if (hasPerk(s2,"Dominant")) {
            dlg += `@@.bd;, with the dominant ${name2} looking just as uncomfortable to be made to submit.@@ `;
        } else {
            dlg += `.`;
        }
    } else if (s.wlp >= 4) {
        dlg += `${He} shrugs, not particularly fond of taking orders from you, but more than happy to take those frustrations out on ${name2}. `;
    } else {
        dlg += `${He} obediently gets into position, ready to take on ${name2} as you command. `;
    };

    dlg += `\n\n`;

    if (s.hasPenis) {
        dlg += `You instruct ${name2} to turn around and start to service ${name}'s ${s.getPenisSize()} cock with ${his2} mouth. Once it's sufficiently wet and hard, you have ${him} return to ${his2} position on all fours. `;
    } else {
        dlg += `You instruct ${name2} to turn around and fasten a strapon cock around ${name}'s waist. `;
        if (hasPerk(s,"Dominant")) {
            dlg += `@@.gd;${name} instinctlively wraps ${his} hands around ${name2}'s head when ${he2}'s finished, guiding ${his2}'s mouth around the artificial cock and forcing ${him2} to lubricate it with ${his2} tongue.@@  Once it's sufficiently wet, you have ${him} return to ${his2} position on all fours. `;
        } else {
            dlg += `Once done, ${name} and ${name2} both await further orders. You instruct ${name2} to service ${name}'s strapon cock with ${his2} mouth. Once it's sufficiently wet, you have ${him} return to ${his2} position on all fours. `;
        };
    };

    dlg += `\n\n`;

    if (hasPerk(s,"Dominant")) {
        dlg += `@@.gd;To ensure ${name2} knows ${his2} place, ${name} instructs ${him2} to apply ${his2} own lube, before reaching back to grab ${name}'s ${cock} and guide it in ${him2}self.@@ `;
    } else {
        dlg += `You instruct ${name} to grab ${name2}'s hips and slide ${his} ${cock} into ${name2}'s ${s2.getHole('hole')}. `;
    };

    if (hasPerk(s2, "Breeding Kink") || s2.trait.name == "Hypersexual") {
        dlg += `@@.gd;${name2} happily complies, using maybe a little less lubricant than ${he2} should have before eagerly grabbing hold of ${name2}'s member and guiding it inside.@@ `;
    };

    dlg += `\n\n`;

    dlg += `<<pic $action "${gen}-fuck-${gen2}">>\n`;

    dlg += s.skillDlg("dom",
        `${name} does ${his} best to play the dominant role, despite ${his} clear aversion to it. `,
        `${name} tries ${his} best to dominate ${his} partner, despite clearly being uncomfortable in the role. Beyond some slightly more enthusiastic motions, it's really just a lot of awkward thrusting. `,
        `${name} puts on an adequate show, slowly picking up on ${his} partner's signals and changing ${his} pace and force accordingly. It's still not exactly what you would call a show of dominance, though. `,
        `${name} enthusiastically fucks ${name2} from behind, making sure to throw in a few ass slaps and deep thrusts to get ${his} point across. `,
        `${name} easily puts ${name2} in ${his2} place, fucking ${him2} hard and slapping ${his2} ass as ${he} pounds ${him2} towards orgasm. `,
        `Regardless of how ${name2} feels about it, ${name} is more than eager to fuck ${him2} into submission. ${name} slaps ${his2} ass and thrusts ${his} ${cock} deep inside of ${name}'s ${s2.getHole()}, all with a gleeful expression on ${his} face. `
    );

    dlg += s2.skillDlg("pussy",
        `${name2} can't hide the pain and disgust on ${his2} face as ${name} slides ${his} ${cock} into their pussy. It doesn't matter to ${name}, using their tight hole for however long it takes to reach orgasm, then a little bit longer for good measure. `,
        `${name2} does their best to take ${name}'s ${cock} into their pussy, whining and moaning as ${he} stretches them out. ${name} doesn't relent, using their tight hole as long as it takes ${him} to achieve orgasm, then a little longer, before finally pulling out. `,
        `${name2}'s tight pussy manages to accept ${name}'s ${cock} without too much resistance. ${He2} moans and winces a little as ${name} pounds ${his2} hole for as long as it takes ${him} to cum. `,
        `${name2}'s pussy easily accepts ${name}'s ${cock}, allowing ${him} to almost immediately settle into a steady rhythm. You pound ${his2} hole for a good while before finally cumming. `,
        `${name2} easily takes ${name}'s ${cock} into ${his2} pussy, pressing back against ${him} with every thrust. It's not long at all before ${his2} tight hole brings ${him} to an intense orgasm. `,
        `${name2}'s amazing pussy seems to almost suck ${name}'s ${cock} inside. ${He2} looks back at ${him} as ${he2} matches ${name}'s rhythm, moaning like a slut as ${his2} expert hold brings ${him} to a near instant orgasm. `
    );
    
    dlg += `\n\n`;

    if (s.hasPenis) {
        dlg += `${name} shoots ${his} hot, thick load deep into ${name2}'s ${s2.getHole()}, holding ${him2} in place for as long as it takes ${name} to completely empty ${his} balls. `;
        if (hasPerk(s, "Breeding Kink")) {
            dlg += `@@.gd;The feeling of having their womb filled with ${name}'s cum is enough to send ${name} into another round of intense orgasms.@@ `
        };
    } else {
        dlg += `${name} buries ${his} strapon deep into ${name2}'s ${s2.getHole()}, the friction from the strap sending ${him} into an intense, wet orgasm. ${name} holds ${name2} in place for as long as it takes ${him} to come down from ${his} climax. `
    }

    s.skills.dom += 1;
    s2.skills.sub += 1;
    if (s2.hasPussy) {s2.skills.pussy += 0.5} else {s2.skills.anal += 0.5};
    return dlg;
};

window.psGetSub = function(s,s2) {
    // Initialize empty dialog string and easier pronoun variables
    var [name,he,He,his,His,him,Him,hiss,Hiss,boy,Boy,gen] = getSlavePronouns(s);
    var [name2,he2,He2,his2,His2,him2,Him2,hiss2,Hiss2,boy2,Boy2,gen2] = getSlavePronouns(s2);
    var cock = (s.hasPenis ? "cock" : "pussy");
    var cock2 = (s2.hasPenis ? "cock" : "pussy");
    var dlg = '';

    // Generate scene dialog
    if (hasPerk(s2, "Clipped Heels")) {
        dlg += `You instruct ${name} to sit quietly and wait while you go and retrieve ${his} partner for this session. After a moment, you return with ${name2} and close the door behind you. As ${name} watches in silence, you walk ${name2} over on ${his2} hands and knees to the center of the room, @@.sf;as ${he2} is no longer able to walk on ${his2} own@@, instructing ${him2} to get on ${his2} back. `;
    } else {
        dlg += `You instruct ${name} to sit quietly and wait while you go and retrieve ${his} partner for this session. After a moment, you return with ${name2} and close the door behind you. As ${name} watches in silence, you have ${name2} stand in front of ${name} and guide ${him} down to ${his} knees. `;
    };

    dlg += `\n\n`;

    dlg += `<<nm $player "Today, you'll be servicing ${name2}'s ${cock2}.">>\n`

    if (hasPerk(s, "Oral Fixation") || s.trait.name == "Oral Addict") {
        dlg += `@@.gd;${name} can't help but lick ${his} lips as ${he} looks at ${name2}'s ${cock2}. ${He} eagerly leans forward and takes ${name2}'s ${cock2} into ${his} mouth, sucking and licking it with a passion.@@ `;
    } else if (s.trait.name == "Oral Aversion") {
        dlg += `@@.bd;${name} looks at ${name2}'s ${cock2} with a clear look of disgust on ${his} face. ${He} reluctantly leans forward and takes ${name2}'s ${cock2} into ${his} mouth, sucking and licking it with a clear lack of enthusiasm.@@ `;
    };

    if (s2.hasPenis) {
        dlg += `<<pic $action "${gen}-suck-${gen2}">>\n`;
    } else {
        dlg += `<<pic $action "${gen}-eat-pussy">>\n`;
    };

    if (s2.hasPussy) {
        dlg += s.skillDlg("oral",
            `${s.name} clearly dislikes having ${name2}'s pussy in ${s.his} mouth, barely making an attempt to find ${name2}'s sensative spots.`,
            `${s.name} doesn't quite know how to please a woman yet, and struggles to elicit a reaction from ${name2}.`,
            `${s.name} slides ${his} tongue along ${name2}'s glistening pussy, making it a point to stimulate ${him2} clit as well.`,
            `${s.name} gets right to work on ${name2}'s pussy, slurping and sucking and generally handling ${him2} quite nicely.`,
            `${s.name} eagerly takes ${name2}'s pussy into ${his} mouth, an expression of pure joy across ${s.his} lustful face.`,
            `${s.name} excitedly dives into ${name2}'s pussy, expertly licking and sucking it. You can see ${name2} ready to orgasm almost immediately as ${s.name} slides ${his} tongue up and down ${his2} slit.`
        );
    } else {
        dlg += s.skillDlg("oral",
            `${s.name} clearly dislikes having ${name2}'s cock in ${s.his} mouth, choking and gagging through the barely subpar blowjob.`,
            `${s.name} doesn't quite know how to please a cock yet, and struggles to take the length of the shaft.`,
            `${s.name} slides ${name2}'s cock along ${s.his} tongue, taking care to keep ${s.his} teeth away from it.`,
            `${s.name} takes ${name2}'s cock easily into his ${s.his} throat, gagging occassionally but otherwise handling him quite nicely.`,
            `${s.name} eagerly takes ${name2}'s cock down ${s.his} throat, an expression of pure joy across ${s.his} lustful face.`,
            `${s.name} hungrily takes the entirety of ${name2}'s cock down ${s.his} throat, you can see ${name2} ready to orgasm almost immediately as ${s.he} bobs up and down on his member.`
        );
    };

    s.skills.sub += 1;
    s2.skills.dom += 1;
    s.skills.oral += 1;
    return dlg;
};

window.psGetPetPlay = function(s) {
    // Initialize empty dialog string and easier pronoun variables
    var [name,he,He,his,His,him,Him,hiss,Hiss,boy,Boy,gen] = getSlavePronouns(s);
    var dlg = '';

    // Generate scene dialog
    dlg += `You walk ${name} around the room on a leash like a dog, instructing ${him} to sit and stay on command, as well as bark and make other animal noises. `;

    dlg += `\n\n`;

    dlg += `<<nm $player "Awe, who's my good ${boy}! Who's my good ${boy}...">>\n\n`;

    dlg += s.skillDlg("pet",
        `${name} is visibly uncomfortable being treated this way. `,
        `${name} complies with your commands, but clearly has no idea what ${he} is doing. `,
        `${name} is starting to get the hang of this, and is able to follow your commands with a bit of coaxing. `,
        `${name} is starting to enjoy this, and follows your commands with a smile on ${his} face. `,
        `${name} is clearly enjoying this, and follows your commands with a smile on ${his} face. `,
        `${name} is clearly enjoying this, and follows your commands with a smile on ${his} face. ${He} even starts to bark and make other animal noises on ${his} own. `
    );

    if (s.skills.pet > 2) {
        dlg += `\n\n`;

        dlg += `<<nm $player "Oh, what's wrong? Looks like puppy needs to go outside...">>\n\n`;

        dlg += `You walk ${name} around on ${his} leash for a bit before taking ${him} over to a corner of the room and instructing ${him} to relieve ${him}self on the ground. `;

        if (hasPerk(s, "Submissive Pet")) {
            dlg += `@@.xxx;Eager to prove ${him}self as a perfect pet, ${name} happily lifts a leg like a dog and pees on the floor.@@ `;

            dlg += `\n\n`;

            dlg += `<<nm $player "Good ${boy}! Such a good ${boy}!">>\n\n`;
            
            s.lty += 1;
        } else if (s.wlp < 4 || s.lty > 6) {
            dlg += `@@.gd;While not thrilled about the idea, ${name} does as ${he} is told,@@ lifting a leg like a dog and peeing on the floor. `;
        } else {
            dlg += `@@.bd;${name} looks at you with a look of disgust on ${his} face,@@ refusing to pee on the floor.@@ `;

            dlg += `\n\n`;

            dlg += `@@SMACK!@@\n\n`;

            dlg += `<<nm $player "Bad dog! You'll do as you're told!">>\n\n`;

            dlg += `You spank ${name} a few times before taking ${him} back to the corner and instructing ${him} to relieve ${him}self on the ground. `;

            dlg += `@@.gd;While not thrilled about the idea, ${name} does as ${he} is told,@@ lifting a leg like a dog and peeing on the floor.@@.bd; You make a mental note to punish ${him} later for disobeying you. `;
        };
        s.skills.pet += 0.5;
        s.skills.sub += 1;
    };

    s.skills.pet += 1;
    s.skills.sub += 0.5;
    return dlg;
};

window.psGetNippleTraining = function(s) {
    // Initialize empty dialog string and easier pronoun variables
    var [name,he,He,his,His,him,Him,hiss,Hiss,boy,Boy,gen] = getSlavePronouns(s);
    var dlg = '';

    // Generate scene dialog
    dlg += `You tie ${name} down to a table and begin to clamp and pinch ${his} nipples, working to make them more sensitive. `;

    if (hasPerk(s, "Nympomaniac")) {
        dlg += `@@.xxx;As a full on nymphomaniac, ${name} is already very sensitive, and this activity only serves to make ${him} even more so.@@ `;
    };

    if (hasPerk(s, "Nipple Fixation")) {
        dlg += `@@.gd;${name} seems to enjoy having ${his} nipples played with, moaning and squirming as you work on ${his} nipples.@@ `;
    } else {
        dlg += `@@.bd;${name} is visibly uncomfortable being treated this way.@@ `;
    }

    dlg += `\n\n`;

    dlg += `<<nm $player "There we go, just a little more...">>\n\n`;

    dlg += s.skillDlg("breasts",
        `${name} squirms and moans as you work on ${his} nipples, but you can tell ${he} is not enjoying it.`,
        `${name} doesn't quite know what to do with ${him}self as you work on ${his} nipples, but ${he} doesn't seem to be enjoying it.`,
        `${name} squirms and moans as you work on ${his} nipples, and you can tell ${he} is starting to enjoy it.`,
        `${name} squirms and moans as you work on ${his} nipples, and you can tell ${he} is enjoying it.`,
        `${name} squirms and moans as you work on ${his} nipples, and you can tell ${he} is really enjoying it.`,
        `${name} squirms and moans as you work on ${his} nipples, and you can tell ${he} is really enjoying it. ${He} even starts to beg you to play with ${his} nipples more.`
    );

    dlg += `\n\n`;

    dlg += `<<nm $player "There we go, all done.">>\n\n`;

    dlg += `You unbind ${name} and let ${him} get up, ${his} nipples now much more sensitive than before. `;

    s.skills.breasts += 1;
    s.skills.sub += 0.5;
    return dlg;
};

window.psGetHeelsClipped = function(s) {
    // Initialize empty dialog string and easier pronoun variables
    var [name,he,He,his,His,him,Him,hiss,Hiss,boy,Boy,gen] = getSlavePronouns(s);
    var dlg = '';

    // Generate scene dialog
    dlg += `You take ${name} to the new surgical facility with the intention of clipping ${his} heels, preventing him from walking on ${his} feet anymore. `;

    if (s.skills.pet >= 5 || hasPerk(s, "Pet")) {
        dlg += `@@.gd;${name} actually seems to be somewhat excited about the procedure, knowing it will force ${him} to spend more time on ${his} hands and knees like a pet.@@ `;
    } else if (hasPerk(s, "Dominant")) {
        dlg += `@@.bd;${name} is visibly upset by the idea of being forced to walk on ${his} hands and knees due to ${his} dominant nature, but ${he} doesn't dare to resist.@@ `;
    } else if (hasPerk(s, "Submissive")) {
        dlg += `@@.gd;${name} is visibly excited by the idea of being forced to walk on ${his} hands and knees due to ${his} submissive nature.@@ `;
    }

    dlg += `\n\n`;

    dlg += `You help ${name} onto the operating table as the hired surgeon prepares the equipment. After a few minutes, the surgeon is ready to begin. `;

    if (hasPerk(s, "Pet")) {
        dlg += `@@.gd;${name} looks up at you as the anesthetic is administered, a look of excitement and trust on ${his} face.@@ `;
    } else if (s.skills.sub >= 5 || hasPerk(s, "Submissive")) {
        dlg += `@@.gd;${name} looks up at you as the anesthetic is administered, a look of trust on ${his} face.@@ `;
    } else {
        dlg += `@@.bd;${name} looks up at you as the anesthetic is administered, a look of fear on ${his} face.@@ `;
    };

    dlg += `After ${he} is unconscious, the surgeon begins the procedure, cutting through the tendons in ${his} heels, preventing ${him} from walking on ${his} feet anymore. `;

    s.skills.pet += 0.5;
    s.skills.sub += 1;
    s.operations += 1;
    setPerk(s, "Clipped Heels");

    return dlg;
};

window.psGetMuted = function(s) {
    // Initialize empty dialog string and easier pronoun variables
    var [name,he,He,his,His,him,Him,hiss,Hiss,boy,Boy,gen] = getSlavePronouns(s);
    var dlg = '';

    // Generate scene dialog
    dlg += `You take ${name} to the new surgical facility with the intention of removing ${his} vocal cords, preventing him from speaking anymore. `;

    if (s.skills.sub >= 10 || hasPerk(s, "Masochist")) {
        dlg += `@@.gd;${name} actually doesn't seem to mind the idea of losing ${his} ability to speak, rather choosing to embrace you and your decisions for ${him} as a slave.@@ `;
    } else if (hasPerk(s, "Dominant")) {
        dlg += `@@.bd;${name} is visibly upset by the idea of having ${his} voice taken from ${him} due to ${his} dominant nature, but ${he} doesn't dare to resist.@@ `;
    } else if (hasPerk(s, "Submissive")) {
        dlg += `@@.gd;${name} is nervous about having ${his} voice taken from ${him}, however ${he} quickly comes to terms with the idea due to ${his} submissive nature.@@ `;
    } else {
        dlg += `@@.bd;${name} is visibly upset by the idea of having ${his} voice taken from ${him}, but ${he} doesn't dare to resist.@@ `;
    };

    dlg += `\n\n`;

    dlg += `You help ${name} onto the operating table as the hired surgeon prepares the equipment. After a few minutes, the surgeon is ready to begin. `;

    if (hasPerk(s, "Masochist")) {
        dlg += `@@.gd;${name} looks up at you as the anesthetic is administered, a look of excitement and trust on ${his} face.@@ `;
    } else if (s.skills.sub >= 5 || hasPerk(s, "Submissive")) {
        dlg += `@@.gd;${name} looks up at you as the anesthetic is administered, a look of trust on ${his} face.@@ `;
    } else {
        dlg += `@@.bd;${name} looks up at you as the anesthetic is administered, a look of fear on ${his} face.@@ `;
    };

    dlg += `After ${he} is unconscious, the surgeon begins the procedure, removing the vocal cords from ${his} throat, preventing ${him} from speaking anymore. `;

    s.skills.pet += 0.25;
    s.skills.sub += 2;
    s.operations += 1;
    setPerk(s, "Mute");

    return dlg;
};

window.psGetPermanentMakeup = function(s) {
    // Initialize empty dialog string and easier pronoun variables
    var [name,he,He,his,His,him,Him,hiss,Hiss,boy,Boy,gen] = getSlavePronouns(s);
    var dlg = '';

    // Generate scene dialog
    dlg += `You take ${name} to the new surgical facility with the intention of applying permanent makeup to ${his} face, ensuring ${he} will always look slutty and available. `;

    if (hasPerk(s, "Nymphomaniac")) {
        dlg += `@@.xxx;As a nymphomaniac, ${name} is beyond excited at the prospect of have slutty makeup permanently tattood to ${his} face, letting ${him} look ${his} sexiest at all times.@@ `;
    } else if (s.skills.sub >= 5 || hasPerk(s, "Submissive")) {
        dlg += `@@.gd;${name} actually doesn't seem to mind the idea of having makeup permanently tattood to ${his} face, rather choosing to embrace you and your decisions for ${him} as a slave.@@ `;
    } else if (hasPerk(s, "Dominant")) {
        dlg += `@@.bd;${name} is visibly upset by the idea of having makeup permanently tattood to ${his} face due to ${his} dominant nature, but ${he} doesn't dare to resist.@@ `;
    } else if (hasPerk(s, "Submissive")) {
        dlg += `@@.gd;${name} is nervous about having makeup permanently tattood to ${his} face, however ${he} quickly comes to terms with the idea due to ${his} submissive nature.@@ `;
    } else {
        dlg += `@@.bd;${name} is visibly upset by the idea of having makeup permanently tattood to ${his} face, but ${he} doesn't dare to resist.@@ `;
    };

    dlg += `\n\n`;

    dlg += `You help ${name} onto the operating table as the hired surgeon prepares the equipment. After a few minutes, the surgeon is ready to begin. `;

    if (hasPerks(s, ["Masochist", "Nymphomaniac"])) {
        dlg += `@@.gd;${name} looks up at you as the anesthetic is administered, a look of excitement and trust on ${his} face.@@ `;
    } else if (s.skills.sub >= 5 || hasPerk(s, "Submissive")) {
        dlg += `@@.gd;${name} looks up at you as the anesthetic is administered, a look of trust on ${his} face.@@ `;
    } else {
        dlg += `@@.bd;${name} looks up at you as the anesthetic is administered, a look of fear on ${his} face.@@ `;
    };

    dlg += `After ${he} is unconscious, the surgeon begins the procedure, using a small tattoo gun to apply permanent makeup to ${name}'s face. `;

    s.skills.pet += 0.25;
    s.skills.sub += 2;
    s.operations += 1;
    s.sexMod += 0.5;
    setPerk(s, "Permanent Makeup");

    return dlg;
};

window.psGetFemVoice = function(s) {
    // Initialize empty dialog string and easier pronoun variables
    var [name,he,He,his,His,him,Him,hiss,Hiss,boy,Boy,gen] = getSlavePronouns(s);
    var dlg = '';

    // Generate scene dialog
    dlg += `You take ${name} to the new surgical facility with the intention of modifying ${his} voice, making ${him} sound more feminine. `;

    if (s.skills.fem > 0) {
        if (s.skills.fem > 5) {
            dlg += `@@.xxx;Since ${name} is already being actively feminized, the thought of getting ${his} voice raised has ${him} feeling very excited!@@ `;
        } else {
            dlg += `@@.xxx;Since ${name} is already being actively feminized, the thought of getting ${his} voice raised actually sounds somewhat appealing.@@ `;
        };
    } else if (s.skills.sub >= 5 || hasPerk(s, "Submissive")) {
        dlg += `@@.gd;${name} actually doesn't seem to mind the idea of having ${his} voice changed, rather choosing to embrace you and your decisions for ${him} as a slave.@@ `;
    } else if (hasPerk(s, "Dominant")) {
        dlg += `@@.bd;${name} is visibly upset by the idea of having ${his} voice changed due to ${his} dominant nature, but ${he} doesn't dare to resist.@@ `;
    } else if (hasPerk(s, "Submissive")) {
        dlg += `@@.gd;${name} is nervous about having ${his} voice changed, however ${he} quickly comes to terms with the idea due to ${his} submissive nature.@@ `;
    } else {
        dlg += `@@.bd;${name} is visibly upset by the idea of having ${his} voice changed, but ${he} doesn't dare to resist.@@ `;
    };

    dlg += `\n\n`;

    dlg += `You help ${name} onto the operating table as the hired surgeon prepares the equipment. After a few minutes, the surgeon is ready to begin. `;

    if (hasPerks(s, ["Masochist", "Nymphomaniac","Feminized"])) {
        dlg += `@@.gd;${name} looks up at you as the anesthetic is administered, a look of excitement and trust on ${his} face.@@ `;
    } else if (s.skills.sub >= 5 || hasPerks(s, ["Submissive","Feminized"])) {
        dlg += `@@.gd;${name} looks up at you as the anesthetic is administered, a look of trust on ${his} face.@@ `;
    } else {
        dlg += `@@.bd;${name} looks up at you as the anesthetic is administered, a look of fear on ${his} face.@@ `;
    };

    dlg += `After ${he} is unconscious, the surgeon begins the procedure, gently scraping ${name}'s vocal cords to raise ${his} voice. `;

    s.skills.fem += 2;
    s.skills.sub += 1;
    s.sexMod += 0.5;
    setPerk(s, "Feminized Voice");

    return dlg;
};

window.psGetSmallBreasts = function(s) {
    // Initialize empty dialog string and easier pronoun variables
    var [name,he,He,his,His,him,Him,hiss,Hiss,boy,Boy,gen] = getSlavePronouns(s);
    var dlg = '';

    // Generate scene dialog
    dlg += `You take ${name} to the new surgical facility with the intention of giving ${him} a small pair of breasts. `;

    if (s.skills.fem > 0) {
        if (s.skills.fem > 5) {
            dlg += `@@.xxx;Since ${name} is already being actively feminized, the thought of getting breast implants has ${him} extremely excited!@@ `;
        } else {
            dlg += `@@.xxx;Since ${name} is already being actively feminized, the thought of getting breast implants actually sounds somewhat appealing.@@ `;
        };
    } else if (s.skills.sub >= 5 || hasPerk(s, "Submissive")) {
        dlg += `@@.gd;${name} actually doesn't seem to mind the idea of getting small breast implants, rather choosing to embrace you and your decisions for ${him} as a slave.@@ `;
    } else if (hasPerk(s, "Dominant")) {
        dlg += `@@.bd;${name} is visibly upset by the idea of getting small breast implants due to ${his} dominant nature, but ${he} doesn't dare to resist.@@ `;
    } else if (hasPerk(s, "Submissive")) {
        dlg += `@@.gd;${name} is nervous about getting small breast implants, however ${he} quickly comes to terms with the idea due to ${his} submissive nature.@@ `;
    } else {
        dlg += `@@.bd;${name} is visibly upset by the idea of getting small breast implants, but ${he} doesn't dare to resist.@@ `;
    };

    dlg += `\n\n`;

    dlg += `You help ${name} onto the operating table as the hired surgeon prepares the equipment. After a few minutes, the surgeon is ready to begin. `;

    if (hasPerks(s, ["Masochist", "Nymphomaniac","Feminized"])) {
        dlg += `@@.gd;${name} looks up at you as the anesthetic is administered, a look of excitement and trust on ${his} face.@@ `;
    } else if (s.skills.sub >= 5 || hasPerks(s, ["Submissive","Feminized"])) {
        dlg += `@@.gd;${name} looks up at you as the anesthetic is administered, a look of trust on ${his} face.@@ `;
    } else {
        dlg += `@@.bd;${name} looks up at you as the anesthetic is administered, a look of fear on ${his} face.@@ `;
    };

    dlg += `After ${he} is unconscious, the surgeon begins the procedure, gently making incisions in ${name}'s chest and inserting the implants. `;

    s.skills.fem += 2;
    s.skills.sub += 1;
    s.sexMod += 0.5;
    setPerk(s, "Small Breasts");
    setPerk(s, "Augmented Breasts");
    if (s.gender == "male") {
        s.gen = "ts";
        s.gender = "transgirl";
        s.img = setImage(s);
    };
    s.hasBreasts = true;
    s.breastSize = 2;

    return dlg;
};

window.psGetBigBreasts = function(s) {
    // Initialize empty dialog string and easier pronoun variables
    var [name,he,He,his,His,him,Him,hiss,Hiss,boy,Boy,gen] = getSlavePronouns(s);
    var dlg = '';

    // Generate scene dialog
    dlg += `You take ${name} to the new surgical facility with the intention of giving ${him} a large pair of breasts. `;

    if (s.skills.fem > 0) {
        if (s.skills.fem > 5) {
            dlg += `@@.xxx;Since ${name} is already being actively feminized, the thought of getting breast implants has ${him} extremely excited!@@ `;
        } else {
            dlg += `@@.xxx;Since ${name} is already being actively feminized, the thought of getting breast implants actually sounds somewhat appealing.@@ `;
        };
    } else if (s.skills.sub >= 5 || hasPerk(s, "Submissive")) {
        dlg += `@@.gd;${name} actually doesn't seem to mind the idea of getting large breast implants, rather choosing to embrace you and your decisions for ${him} as a slave.@@ `;
    } else if (hasPerk(s, "Dominant")) {
        dlg += `@@.bd;${name} is visibly upset by the idea of getting large breast implants due to ${his} dominant nature, but ${he} doesn't dare to resist.@@ `;
    } else if (hasPerk(s, "Submissive")) {
        dlg += `@@.gd;${name} is nervous about getting large breast implants, however ${he} quickly comes to terms with the idea due to ${his} submissive nature.@@ `;
    } else {
        dlg += `@@.bd;${name} is visibly upset by the idea of getting large breast implants, but ${he} doesn't dare to resist.@@ `;
    };

    dlg += `\n\n`;

    dlg += `You help ${name} onto the operating table as the hired surgeon prepares the equipment. After a few minutes, the surgeon is ready to begin. `;

    if (hasPerks(s, ["Masochist", "Nymphomaniac","Feminized"])) {
        dlg += `@@.gd;${name} looks up at you as the anesthetic is administered, a look of excitement and trust on ${his} face.@@ `;
    } else if (s.skills.sub >= 5 || hasPerks(s, ["Submissive","Feminized"])) {
        dlg += `@@.gd;${name} looks up at you as the anesthetic is administered, a look of trust on ${his} face.@@ `;
    } else {
        dlg += `@@.bd;${name} looks up at you as the anesthetic is administered, a look of fear on ${his} face.@@ `;
    };

    dlg += `After ${he} is unconscious, the surgeon begins the procedure, gently making incisions in ${name}'s chest and inserting the implants. `;

    s.skills.fem += 2;
    s.skills.sub += 1;
    s.sexMod += 0.5;
    setPerk(s, "Large Breasts");
    setPerk(s, "Augmented Breasts");
    if (s.gender == "male") {
        s.gen = "ts";
        s.gender = "transgirl";
        s.img = setImage(s);
    };
    s.hasBreasts = true;
    s.breastSize = 5;

    return dlg;
};

window.psGetCastrated = function(s) {
    // Initialize empty dialog string and easier pronoun variables
    var [name,he,He,his,His,him,Him,hiss,Hiss,boy,Boy,gen] = getSlavePronouns(s);
    var dlg = '';

    // Generate scene dialog
    dlg += `You take ${name} to the new surgical facility with the intention of removing ${his} testicles. `;

    if (s.skills.fem > 0) {
        if (s.skills.fem > 5) {
            dlg += `@@.xxx;Since ${name} is already being actively feminized, the thought of having ${his} balls removed has ${him} extremely excited!@@ `;
        } else {
            dlg += `@@.xxx;Since ${name} is already being actively feminized, the thought of having ${his} balls removed actually sounds somewhat appealing.@@ `;
        };
    } else if (s.skills.sub >= 5 || hasPerk(s, "Submissive")) {
        dlg += `@@.gd;${name} actually doesn't seem to mind the idea of having ${his} balls removed, rather choosing to embrace you and your decisions for ${him} as a slave.@@ `;
    } else if (hasPerk(s, "Dominant")) {
        dlg += `@@.bd;${name} is visibly upset by the idea of having ${his} balls removed due to ${his} dominant nature, but ${he} doesn't dare to resist.@@ `;
    } else if (hasPerk(s, "Submissive")) {
        dlg += `@@.gd;${name} is nervous about having ${his} balls removed, however ${he} quickly comes to terms with the idea due to ${his} submissive nature.@@ `;
    } else {
        dlg += `@@.bd;${name} is visibly upset by the idea of having ${his} balls removed, but ${he} doesn't dare to resist.@@ `;
    };

    if (s.ballSize > 3) {
        dlg += `${name}'s ${s.getBallSize()} testicles were always a source of pride for ${him}, and losing them does make ${him} a little sad. `;
    };

    dlg += `\n\n`;

    dlg += `You help ${name} onto the operating table as the hired surgeon prepares the equipment. After a few minutes, the surgeon is ready to begin. `;

    if (hasPerks(s, ["Masochist", "Nymphomaniac","Feminized"])) {
        dlg += `@@.gd;${name} looks up at you as the anesthetic is administered, a look of excitement and trust on ${his} face.@@ `;
    } else if (s.skills.sub >= 5 || hasPerks(s, ["Submissive","Feminized"])) {
        dlg += `@@.gd;${name} looks up at you as the anesthetic is administered, a look of trust on ${his} face.@@ `;
    } else {
        dlg += `@@.bd;${name} looks up at you as the anesthetic is administered, a look of fear on ${his} face.@@ `;
    };

    dlg += `After ${he} is unconscious, the surgeon begins the procedure, gently making incisions in order to remove ${name}'s testicles. `;

    s.skills.fem += 2;
    s.skills.sub += 1;
    s.sexMod += 0.5;
    setPerk(s, "Castrated");
    s.hasBalls = false;

    return dlg;
};

window.psRemovePenis = function(s) {
    // Initialize empty dialog string and easier pronoun variables
    var [name,he,He,his,His,him,Him,hiss,Hiss,boy,Boy,gen] = getSlavePronouns(s);
    var dlg = '';

    // Generate scene dialog
    dlg += `You take ${name} to the new surgical facility with the intention of removing ${his} penis. `;

    if (s.skills.fem > 0) {
        if (s.skills.fem > 5) {
            dlg += `@@.xxx;Since ${name} is already being actively feminized, the thought of having ${his} cock removed has ${him} extremely excited!@@ `;
        } else {
            dlg += `@@.xxx;Since ${name} is already being actively feminized, the thought of having ${his} cock removed actually sounds somewhat appealing.@@ `;
        };
    } else if (s.skills.sub >= 5 || hasPerk(s, "Submissive")) {
        dlg += `@@.gd;${name} actually doesn't seem to mind the idea of having ${his} cock removed, rather choosing to embrace you and your decisions for ${him} as a slave.@@ `;
    } else if (hasPerk(s, "Dominant")) {
        dlg += `@@.bd;${name} is visibly upset by the idea of having ${his} cock removed due to ${his} dominant nature, but ${he} doesn't dare to resist.@@ `;
    } else if (hasPerk(s, "Submissive")) {
        dlg += `@@.gd;${name} is nervous about having ${his} cock removed, however ${he} quickly comes to terms with the idea due to ${his} submissive nature.@@ `;
    } else {
        dlg += `@@.bd;${name} is visibly upset by the idea of having ${his} cock removed, but ${he} doesn't dare to resist.@@ `;
    };

    if (s.penisSize > 3) {
        dlg += `${name}'s ${s.getPenisSize()} cock was always a source of pride for ${him}, and losing them does make ${him} a little sad. `;
    };

    dlg += `\n\n`;

    dlg += `You help ${name} onto the operating table as the hired surgeon prepares the equipment. After a few minutes, the surgeon is ready to begin. `;

    if (hasPerks(s, ["Masochist", "Nymphomaniac","Feminized"])) {
        dlg += `@@.gd;${name} looks up at you as the anesthetic is administered, a look of excitement and trust on ${his} face.@@ `;
    } else if (s.skills.sub >= 5 || hasPerks(s, ["Submissive","Feminized"])) {
        dlg += `@@.gd;${name} looks up at you as the anesthetic is administered, a look of trust on ${his} face.@@ `;
    } else {
        dlg += `@@.bd;${name} looks up at you as the anesthetic is administered, a look of fear on ${his} face.@@ `;
    };

    dlg += `After ${he} is unconscious, the surgeon begins the procedure, gently making incisions in order to remove ${name}'s penis. `;

    s.skills.fem += 10;
    s.skills.sub += 1;
    s.sexMod += 0.5;
    setPerk(s, "Feminized");
    s.hasPenis = false;

    return dlg;
};

window.psGetNewPussy = function(s) {
    // Initialize empty dialog string and easier pronoun variables
    var [name,he,He,his,His,him,Him,hiss,Hiss,boy,Boy,gen] = getSlavePronouns(s);
    var dlg = '';

    // Generate scene dialog
    dlg += `You take ${name} to the new surgical facility with the intention of giving ${him} a functional vagina. `;

    if (s.skills.fem > 0) {
        if (s.skills.fem > 5) {
            dlg += `@@.xxx;Since ${name} is already being actively feminized, the thought of being given a working pussy has ${him} extremely excited!@@ `;
        } else {
            dlg += `@@.xxx;Since ${name} is already being actively feminized, the thought of being given a working pussy actually sounds somewhat appealing.@@ `;
        };
    } else if (s.skills.sub >= 5 || hasPerk(s, "Submissive")) {
        dlg += `@@.gd;${name} actually doesn't seem to mind the idea of being given a working pussy, rather choosing to embrace you and your decisions for ${him} as a slave.@@ `;
    } else if (hasPerk(s, "Dominant")) {
        dlg += `@@.bd;${name} is visibly upset by the idea of being further modified due to ${his} dominant nature, but ${he} doesn't dare to resist.@@ `;
    } else if (hasPerk(s, "Submissive")) {
        dlg += `@@.gd;${name} is nervous about being given a vagina, however ${he} quickly comes to terms with the idea due to ${his} submissive nature.@@ `;
    } else {
        dlg += `@@.bd;${name} is visibly upset by the idea of being given a vagina, but ${he} doesn't dare to resist.@@ `;
    };

    dlg += `\n\n`;

    dlg += `You help ${name} onto the operating table as the hired surgeon prepares the equipment. After a few minutes, the surgeon is ready to begin. `;

    if (hasPerks(s, ["Masochist", "Nymphomaniac","Feminized"])) {
        dlg += `@@.gd;${name} looks up at you as the anesthetic is administered, a look of excitement and trust on ${his} face.@@ `;
    } else if (s.skills.sub >= 5 || hasPerks(s, ["Submissive","Feminized"])) {
        dlg += `@@.gd;${name} looks up at you as the anesthetic is administered, a look of trust on ${his} face.@@ `;
    } else {
        dlg += `@@.bd;${name} looks up at you as the anesthetic is administered, a look of fear on ${his} face.@@ `;
    };

    dlg += `After ${he} is unconscious, the surgeon begins the procedure, gently making incisions in order to give ${name} a vagina. `;

    s.skills.fem += 20;
    s.skills.sub += 5;
    s.sexMod += 0.5;
    setPerk(s, "Get Pussy");
    if (s.gender !== "female") {
        s.gen = "female";
        s.gender = "female";
        s.img = setImage(s);
    };
    s.hasPussy = true;

    return dlg;
};

window.psChangePronouns = function(s) {
    // Initialize empty dialog string and easier pronoun variables
    var [name,he,He,his,His,him,Him,hiss,Hiss,boy,Boy,gen] = getSlavePronouns(s);
    var dlg = '';

    // Generate scene dialog
    dlg += `${name} currently identifies as a @@.xxx;${s.gender}@@, using @@.sf;${He}@@ and @@.sf;${Him}@@ pronouns. `;

    if (hasPerk,(s,"Submissive")) {
        dlg += `@@.sf;As a complete submissive, ${he} has no preference for how ${he} is referred to. `;
    } else if (gen == 'male') {
        if (s.skills.fem > 0) {
            dlg += `${He} used to prefer being seen as a man, but with changes being made to ${his} body, ${he}'s not quite as sure anymore. `;
        } else {
            dlg += `${He} prefers others see ${him} as a ${boy}, and refer to ${him} as '${he}' and '${him}'. `;
        };
    } else {
        dlg += `${He} prefers others see ${him} as a female, and refer to ${him} as 'she' and 'her'. `;
    };

    return dlg;
};

window.psGetHeelsPulled = function(s) {
    // Initialize empty dialog string and easier pronoun variables
    var [name,he,He,his,His,him,Him,hiss,Hiss,boy,Boy,gen] = getSlavePronouns(s);
    var dlg = '';

    // Generate scene dialog
    dlg += `You take ${name} to the new surgical facility with the intention of pulling ${his} calves, preventing him from walking upright without wearing tall high heels. `;

    if (hasPerk(s, "Nymphomaniac")) {
        dlg += `@@.xxx;${name} actually seems to be excited about the procedure, knowing it will force ${him} to spend all ${his} time wearing slutty heels.@@ `;
    } else if (hasPerk(s, "Dominant")) {
        dlg += `@@.bd;${name} is visibly upset by the idea of being forced to walk around in slutty heels due to ${his} dominant nature, but ${he} doesn't dare to resist.@@ `;
    } else if (hasPerk(s, "Submissive")) {
        dlg += `@@.gd;${name} is visibly excited by the idea of being forced to walk around in slutty heels due to ${his} submissive nature.@@ `;
    }

    dlg += `\n\n`;

    dlg += `You help ${name} onto the operating table as the hired surgeon prepares the equipment. After a few minutes, the surgeon is ready to begin. `;

    if (hasPerk(s, "Pet")) {
        dlg += `@@.gd;${name} looks up at you as the anesthetic is administered, a look of excitement and trust on ${his} face.@@ `;
    } else if (s.skills.sub >= 5 || hasPerk(s, "Submissive")) {
        dlg += `@@.gd;${name} looks up at you as the anesthetic is administered, a look of trust on ${his} face.@@ `;
    } else {
        dlg += `@@.bd;${name} looks up at you as the anesthetic is administered, a look of fear on ${his} face.@@ `;
    };

    dlg += `After ${he} is unconscious, the surgeon begins the procedure, pulling the tendons in ${his} calves, preventing ${him} from walking upright without high heels. `;

    s.skills.sub += 2;
    s.operations += 1;
    setPerk(s, "Pulled Heels");

    return dlg;
};

window.psGetAnimalEars = function(s) {
    // Initialize empty dialog string and easier pronoun variables
    var [name,he,He,his,His,him,Him,hiss,Hiss,boy,Boy,gen] = getSlavePronouns(s);
    var animal = randomItem(["dog","cat","cow","fox","bunny"]);
    var dlg = '';

    // Generate scene dialog
    dlg += `You take ${name} to the new surgical facility with the intention of replacing ${his} ears with animal ears, and giving ${him} a tail. `;

    if (s.skills.pet >= 5 || hasPerk(s, "Pet")) {
        dlg += `@@.gd;${name} actually seems to be excited about the procedure, knowing it will give ${him} a more animal-like asthetic, and making ${him} a better pet.@@ `;
    } else if (hasPerk(s, "Dominant")) {
        dlg += `@@.bd;${name} is visibly upset by the idea of being turned into an animal ${boy} due to ${his} dominant nature, but ${he} doesn't dare to resist.@@ `;
    } else if (hasPerk(s, "Submissive")) {
        dlg += `@@.gd;${name} is visibly excited by the idea of being turned into an animal ${boy} due to ${his} submissive nature.@@ `;
    }

    dlg += `\n\n`;

    dlg += `You help ${name} onto the operating table as the hired surgeon prepares the equipment. After a few minutes, the surgeon is ready to begin. You can see materials for @@.sf;${animal}@@ ears and a tail laid out on a nearby table. `;

    if (hasPerk(s, "Pet")) {
        dlg += `@@.gd;${name} looks up at you as the anesthetic is administered, a look of excitement and trust on ${his} face.@@ `;
    } else if (s.skills.sub >= 5 || hasPerk(s, "Submissive")) {
        dlg += `@@.gd;${name} looks up at you as the anesthetic is administered, a look of trust on ${his} face.@@ `;
    } else {
        dlg += `@@.bd;${name} looks up at you as the anesthetic is administered, a look of fear on ${his} face.@@ `;
    };

    dlg += `After ${he} is unconscious, the surgeon begins the procedure... `;

    s.skills.pet += 2;
    s.skills.sub += 1;
    s.operations += 1;
    s.animal = animal;
    setPerk(s, "Animal Ears");

    return dlg;
};

window.psCubicleDuty = function(s) {
    // Initialize empty dialog string and easier pronoun variables
    var [name,he,He,his,His,him,Him,hiss,Hiss,boy,Boy,gen] = getSlavePronouns(s);
    var animal = s.animal !== "none" ? s.animal : "animal";
    var master = s.gender == "male" ? "master" : "mistress";
    var daddy = s.gender == "male" ? "daddy" : "mommy";
    var man = s.gender == "male" ? "man" : "woman";
    setSlaveTitle(s);
    var dlg = '';

    // Generate scene dialog
    dlg += `${name} is currently working the cubicles right now. `;

    switch (s.age) {
        case "Teen":
            if (s.title == "dom") {
                dlg += `Despite ${his} young age, other employees all happily refer to ${him} as ${master}, and even sometimes ${daddy}, due to ${his} @@.xxx;dominant@@ nature. `;
            } else if (s.title == "sub") {
                dlg += `As a @@.xxx;submissive@@ young ${boy}, ${he} is often dragged around from one desk to another, servicing the cocks and pussies of ${his} coworkers. `;
            } else if (s.title == "pet") {
                dlg += `Due to ${his} tendency to @@.xxx;act like a pet@@`;
                if (hasPerk(s, "Animal Ears")) {
                    dlg += `, not to mention the fact that ${he} has ${s.animal} ears and a tail, `;
                };
                dlg += `other employees often refer to ${him} as a good ${boy}, and ${he} is often walked around the office on a leash. `;
            } else {
                dlg += `As a sweet, young ${boy}, ${he} is quite popular around the office, and is often found servicing the cocks and pussies of ${his} coworkers. `;
            };
            break;
        case "Young Adult" || "Adult":
            if (s.title == "dom") {
                dlg += `As a result of ${his} dominant nature, other employees all happily refer to ${him} as ${master}, and even sometimes ${daddy}. `;
            } else if (s.title == "sub") {
                dlg += `As a submissive slave, ${he} is often dragged around from one desk to another, servicing the cocks and pussies of ${his} coworkers. `;
            } else if (s.title == "pet") {
                dlg += `Due to ${his} tendency to act like a pet`;
                if (hasPerk(s, "Animal Ears")) {
                    dlg += `, not to mention the fact that ${he} has ${s.animal} ears and a tail, `;
                };
                dlg += `other employees often refer to ${him} as a good ${boy}, and ${he} is often walked around the office on a leash. `;
            } else {
                dlg += `As a sweet, willing slave, ${he} is quite popular around the office, and is often found servicing the cocks and pussies of ${his} coworkers. `;
            };
            break;
        case "Mature":
            if (s.title == "dom") {
                dlg += `As a dominant, older ${man}, other employees all happily refer to ${him} as ${master}, and even sometimes ${daddy}. `;
            } else if (s.title == "sub") {
                dlg += `As an older, submissive ${man}, ${he} is often dragged around from one desk to another, servicing the cocks and pussies of ${his} coworkers. `;
            } else if (s.title == "pet") {
                dlg += `Due to ${his} tendency to act like a pet`;
                if (hasPerk(s, "Animal Ears")) {
                    dlg += `, not to mention the fact that ${he} has ${s.animal} ears and a tail, `;
                };
                dlg += `other employees often refer to ${him} as a good ${boy}, and ${he} is often walked around the office on a leash. `;
            } else {
                dlg += `As an older, more experienced slave, ${he} is quite popular around the office, and is often found servicing the cocks and pussies of ${his} coworkers. `;
            };
            break;
    };

    dlg += `\n\n`;

    switch (s.title) {
        case "anal":
            if (chance(50)) {
                if (s.hasPussy) {
                    dlg += `<<pic $action "male-assfuck-female-doggy">>\n`;
                } else {
                    dlg += `<<pic $action "male-fuck-${gen}">>\n`;
                };

                dlg += `${name} is currently bent over a desk while a group of men stand behind ${him} waiting for a turn to fuck ${him} in ${his} well-trained asshole. ${name}'s eyes roll back in pleasure as ${he} services one cock after another with ${his} mouth. `;

                dlg += `\n\n`;

                dlg += `<<pic $action "${gen}-suck-male">>\n`;
            } else {
                if (s.hasPussy) {
                    dlg += `<<pic $action "male-assfuck-female-doggy">>\n`;
                } else {
                    dlg += `<<pic $action "${gen}-ride-${randomItem(["male","ts","female"])}">>\n`;
                };

                dlg += `${name} is riding an office worker's cock in the corner of the room while others cheer ${him} on. Once the employee finally finishes with ${name}'s ass, ${he}'s passed off to the next hard cock waiting to use ${him}. `;
            }
            break;
        case "oral":
            dlg += `<<pic $action "${gen}-suck-male">>\n`;

            dlg += `${name} is on ${his} knees in the corner of the office, happily gagging on one cock after another. ${He} is made to wear nice office clothing to work every day, which the other employees take great pleasure in spraying with their cum.`;
            break;
        case "breasts":
            dlg += `${name} strokes the hair of two women currently sucking on ${his} ${s.getBreastSize()} breasts, a look of pure, lustful bliss across ${his} face.`;
            break;
        case "pussy":
            dlg += `<<pic $action "male-fuck-female-doggy">>\n`;

            dlg += `\n\n`;

            dlg += `${name} is currently bent over a desk while a group of men stand behind ${him} waiting for a turn to fuck ${him} in ${his} drenched pussy. ${name}'s eyes roll back in pleasure as ${he} services one cock after another with ${his} mouth. `;
            break;
        case "dom":
            dlg += `${name} has a smaller office worker on ${randomItem(["his","her"])} knees, `;

            if (s.hasPussy) {
                dlg += `licking ${his} soaking wet pussy while ${he} belittles them in front of their coworkers. `;
            } else {
                dlg += `sucking ${his} ${s.getPenisSize()} cock while ${he} belittles them in front of their coworkers. `;
            }
            break;
        case "sub":
            dlg += `${name} is scurrying around the cubicle area in a way-too-small maid outfit, while office workers make ridiculous and degrading demands of ${him}. Every time ${he} bends over to pick something up off the ground, someone will slide a pen or a finger into ${his} exposed ${s.getHole("hole")}. Often times the situation will escalate quickly, and ${name} will find ${him}self servicing multiple cocks and strapons at once. A look of blissful satisfaction extends across ${name}'s face. `;
            break;
        case "pet":
            dlg += `${name} is on ${his} hands and knees being walked around like a pet by other office workers who have fixed a leash and collar to ${him}, all the while forcing ${him} to make ${animal} noises. Once they've had their fun, ${name} is thrown to the ground and fucked relentlessly by one employee after another. `;
            break;
        default:
            dlg += `${name} is currently on ${his} knees in the cubicle, waiting for someone to come by and use ${him}. `;
            break;
    };

    return dlg;
};

window.psRoomSlaveOral = function(s) {
    // Initialize empty dialog string and easier pronoun variables
    var [name,he,He,his,His,him,Him,hiss,Hiss,boy,Boy,gen] = getSlavePronouns(s);
    var animal = s.animal !== "none" ? s.animal : "animal";
    var master = s.gender == "male" ? "master" : "mistress";
    var daddy = s.gender == "male" ? "daddy" : "mommy";
    var man = s.gender == "male" ? "man" : "woman";
    setSlaveTitle(s);
    var dlg = '';

    // Generate scene dialog
    dlg += `You move to the edge of your bed, instructing ${name} to remove your <<UnderwearOrPants>>. `;

    if (hasWorkingPenis()) {
        dlg += `Your <<pSize>> springs to life in front of ${his} face, `;
        if (hasPerk(s, "Oral Fixation") || s.trait.name == "Oral Addict") {
            dlg += `@@.gain;eliciting a look of lustful excitement from ${him}@@. After impatiently waiting for your permission, ${he} eagerly takes you into ${his} mouth, sucking and licking your shaft. `;
        } else if (s.trait.name == "Oral Aversion") {
            dlg += `@@.loss;eliciting a look of disgust from ${him}@@. Once you give ${him} permission, ${he} reluctantly takes you into ${his} mouth, sucking and licking your shaft. `;
        } else {
            dlg += `eliciting a look of surprise from ${him}. Once you give ${him} permission, ${he} takes you into ${his} mouth, sucking and licking your shaft. `;
        };

        dlg += `\n\n`;

        dlg += `<<pic $action "${gen}-suck-player">>\n`;

        if (hasPerk(s, "Oral Fixation") || s.trait.name == "Oral Addict") {
            dlg += `@@.gain;${name} excitedly bobs up and down the length of your cock, gagging ${him}self as ${he} takes you deeper and deeper. ${His} eyes roll back as ${he} loses ${him}self to the lust@@. `;
        } else if (s.trait.name == "Oral Aversion") {
            dlg += `@@.loss;${name} does ${his} best to look like ${he}'s enjoying ${him}self, clearly struggling to give an enjoyable blowjob@@. `;
        } else {
            dlg += `${name} dilligently bobs up and down the length of your cock, occassionally gagging but otherwise given an excellent blowjob! `;
        };

        dlg += `\n\n`;

        dlg += `<<nm $player "C-cumming!">>\n`

        dlg += `<<pic $action "${gen}-oral-creampie">>\n`

        if (hasPerk(s, "Oral Fixation") || s.trait.name == "Oral Addict") {
            dlg += `@@.gain;${name} moans in ecstasy as you shoot rope after rope of thick, hot cum down ${his} throat@@. ${He} rolls your load around in ${his} mouth for a moment before happily swallowing, kissing the tip of your cock when ${he}'s done. `;
        } else if (s.trait.name == "Oral Aversion") {
            dlg += `@@.loss;${name} tries and fails to keep ${his} composure as you release rope after rope of hot cum down ${his} throat@@. ${He}'s unable to swallow everything, allowing some to drip onto ${his} chest as you slide your softening cock out of ${his} mouth. `;
        } else {
            dlg += `${name} skillfully swallows your thick, hot load, making sure not to let any spill as you slide your wet cock out of ${his} mouth. `;
        };

        dlg += `\n\n`;

        dlg += `<<horny 0>>`
    } else if (hasPussy()) {
        dlg += `Your <<vSize>> glistens in front of ${his} face, `;
        if (hasPerk(s, "Oral Fixation") || s.trait.name == "Oral Addict") {
            dlg += `@@.gain;eliciting a look of lustful excitement from ${him}@@. After impatiently waiting for your permission, ${he} eagerly takes you into ${his} mouth, licking your folds and sucking on your clit. `;
        } else if (s.trait.name == "Oral Aversion") {
            dlg += `@@.loss;eliciting a look of disgust from ${him}@@. Once you give ${him} permission, ${he} reluctantly takes you into ${his} mouth, licking your folds and sucking on your clit. `;
        } else {
            dlg += `eliciting a look of surprise from ${him}. Once you give ${him} permission, ${he} takes you into ${his} mouth, licking your folds and sucking on your clit. `;
        };

        dlg += `\n\n`;

        dlg += `<<pic $action "${gen}-eat-pussy">>\n`;

        if (hasPerk(s, "Oral Fixation") || s.trait.name == "Oral Addict") {
            dlg += `@@.gain;${name} sucks on your twitching clit, occassionally breaking to plunge ${his} tongue into your drenched pussy. ${His} eyes roll back as ${he} loses ${him}self to the lust@@. `;
        } else if (s.trait.name == "Oral Aversion") {
            dlg += `@@.loss;${name} does ${his} best to look like ${he}'s enjoying ${him}self, clearly struggling to give provide you pleasure@@. `;
        } else {
            dlg += `${name} dilligently buries ${his} tongue into your drenched pussy, occassionally gagging but otherwise giving some excellent head! `;
        };

        dlg += `\n\n`;

        dlg += `<<nm $player "C-cumming!">>\n`

        dlg += `<<pic $action "female-squirt">>\n`

        if (hasPerk(s, "Oral Fixation") || s.trait.name == "Oral Addict") {
            dlg += `@@.gain;${name} moans in ecstasy as you spray wave after wave of thick, hot juices down ${his} throat@@. ${He} rolls your load around in ${his} mouth for a moment before happily swallowing, kissing the tip of your clit when ${he}'s done. `;
        } else if (s.trait.name == "Oral Aversion") {
            dlg += `@@.loss;${name} tries and fails to keep ${his} composure as you release wave after wave of hot squirt down ${his} throat@@. ${He}'s unable to swallow everything, allowing some to drip onto ${his} chest as you slowly allow ${him} to raise ${his} head. `;
        } else {
            dlg += `${name} skillfully swallows your thick, hot torrent of fluids, making sure not to let any spill as you slowly allow ${him} to raise ${his} head. `;
        };

        dlg += `\n\n`;

        dlg += `<<horny 0>>`
    };

    return dlg;
};

window.psRoomSlaveFuckSlave = function(s) {
    // Initialize empty dialog string and easier pronoun variables
    var [name,he,He,his,His,him,Him,hiss,Hiss,boy,Boy,gen] = getSlavePronouns(s);
    var animal = s.animal !== "none" ? s.animal : "animal";
    var master = s.gender == "male" ? "master" : "mistress";
    var daddy = s.gender == "male" ? "daddy" : "mommy";
    var man = s.gender == "male" ? "man" : "woman";
    setSlaveTitle(s);
    var dlg = '';

    // Generate scene dialog
    if (hasPerk(s, "Clipped Heels")) {
        dlg += `You instruct ${name} to crawl around the floor for your amusement. Even if ${he} wanted to say no, ${his} clipped heels prevent ${him} from walking around upright anyway. `;
        if (hasPerk(s, "Pet")) {
            dlg += `@@.xxx;As a self-proclaimed house pet@@, ${he} is more than happy to put on this display for you`;
            if (animal !== "none") {
                dlg += `, a show made all the better as you watch ${name}'s ${animal} ears and tail flop around as ${he} does so. `;
            } else {dlg += `. `};
        };
    } else if (hasPerk(s, "Pulled Heels")) {
        dlg += `You instruct ${name} to walk around the room for your amusement. As ${he} does so, ${his} pulled heels cause ${him} to walk in extremely high stripper heels, forcing ${him} to sway ${his} hips back and forth as ${he} walks. `;
        if (hasPerk(s, "Nymphomaniac")) {
            dlg += `@@.xxx;As a nymphomaniac@@, ${he} is more than happy to put on this display for you`;
            if (animal !== "none") {
                dlg += `, a show made all the better as you watch ${name}'s ${animal} ears and tail flop around as ${he} does so. `;
            } else {dlg += `. `};
        };
    };

    dlg += `You watch ${name} for a moment, enjoying the view as ${he} moves around the room, before you decide to take things further, pulling ${him} into your bed. `;

    dlg += `\n\n`;

    dlg += `<<nm $player "Get on your hands and knees.">>\n`;

    dlg += `${name} ${hasPerk(s,'Dominant') ? 'reluctantly' : 'eagerly'} complies, getting on all fours in front of you. Once in position, you rest the tip of your <<StraponOrCock size>> against ${his} ${s.getHole('hole')} and push forward, sliding into ${him} with ease. `;

    dlg += `\n\n`;

    if (s.hasPussy) {
        dlg += `<<pic $action "player-fuck-female-doggy">>\n`;
    } else {
        dlg += `<<pic $action "player-fuck-${gen}">>\n`;
    };

    dlg += `You continue to rail ${name} into your mattress, fucking ${him} hard and deep enough that ${his} teeth dig into your pillow. `;

    if (hasPerk(s, "Dominant")) {
        dlg += `@@.sf;As a dominant slave@@, it's clear that ${name} would rather have the roles reversed, which only serves to increase your pleasure. `;
    } else if (hasPerk(s, "Submissive")) {
        dlg += `${hasPerk(s,'Nymphomaniac') ? `@@.xxx;As a nymphomaniac with an intense sex addiction@@` : `@@.sf;As a submissive slave who loves to be used by others@@`}, it's not long before ${name} has become a complete drooling mess, having given ${him}self over to entirely as your personal fuck puppet. `;
    } else {
        dlg += `${name} happily takes you inside of ${his} ${s.getHole('hole')}, finding great pleasure in allowing you to use ${him} as you like. `;
    };

    dlg += `\n\n`;

    dlg += `<<nm $player "C-cumming!">>\n`;

    if (hasPenis()) {
        dlg += `${name}'s thighs tighten up as you bury your <<pSize>> deep inside of ${him}, releasing rope after rope of hot, thick cum directly into ${his} ${s.hasPussy ? `womb` : `stomach`}. `;

        dlg += `\n\n`;

        dlg += `<<pic $action "creampie-${gen}">>\n`

        dlg += `After holding ${him} against you as you drain your balls, you finally let go, allowing ${him} to fall face-first into a pool of sweat and cum. `;        
    } else {
        dlg += `${name}'s thighs tighten up as you bury your <<accf>> deep inside of ${him}, spraying wave after wave of juices out from under the harness. After holding ${him} against you as you ride your orgasm to completion, you finally let go, allowing ${him} to fall face-first into a pool of sweat and cum. `;  
    };

    dlg += `\n\n`;

    dlg += `<<nm $player "That... was great. Anyway, time to go back for now!">>\n`;

    dlg += `You leash ${name}, dragging ${him} off the bed and walking ${him} back to your closet on ${his} hands and knees. `;

    dlg += `\n\n`;

    dlg += `<<horny 0>>`;

    return dlg;
};

window.psRoomSlaveFuckMC = function(s) {
    // Initialize empty dialog string and easier pronoun variables
    var [name,he,He,his,His,him,Him,hiss,Hiss,boy,Boy,gen] = getSlavePronouns(s);
    var animal = s.animal !== "none" ? s.animal : "animal";
    var master = s.gender == "male" ? "master" : "mistress";
    var daddy = s.gender == "male" ? "daddy" : "mommy";
    var man = s.gender == "male" ? "man" : "woman";
    setSlaveTitle(s);
    var dlg = '';

    // Generate scene dialog
    if (hasPerk(s, "Clipped Heels")) {
        dlg += `You instruct ${name} to crawl around the floor for your amusement. Even if ${he} wanted to say no, ${his} clipped heels prevent ${him} from walking around upright anyway. `;
        if (hasPerk(s, "Pet")) {
            dlg += `@@.xxx;As a self-proclaimed house pet@@, ${he} is more than happy to put on this display for you`;
            if (animal !== "none") {
                dlg += `, a show made all the better as you watch ${name}'s ${animal} ears and tail flop around as ${he} does so. `;
            } else {dlg += `. `};
        };
    } else if (hasPerk(s, "Pulled Heels")) {
        dlg += `You instruct ${name} to walk around the room for your amusement. As ${he} does so, ${his} pulled heels cause ${him} to walk in extremely high stripper heels, forcing ${him} to sway ${his} hips back and forth as ${he} walks. `;
        if (hasPerk(s, "Nymphomaniac")) {
            dlg += `@@.xxx;As a nymphomaniac@@, ${he} is more than happy to put on this display for you`;
            if (animal !== "none") {
                dlg += `, a show made all the better as you watch ${name}'s ${animal} ears and tail flop around as ${he} does so. `;
            } else {dlg += `. `};
        };
    };

    dlg += `You watch ${name} for a moment, enjoying the view as ${he} moves around the room, before you decide to take things further, pulling ${him} into your bed. `;

    dlg += `\n\n`;

    dlg += `<<nm $player "Today, you're gonna fuck me, so get on your knees at the edge of the bed.">>\n`;

    if (hasPerk(s, "Dominant")) {
        dlg += `@@.xxx;${name}'s eyes light up, knowing ${he} finally has a chance to exert some power over ${his} master@@, even if it's only an act. `;
    } else if (hasPerk(s, "Submissive")) {
        dlg += `${name} looks nervous, @@.sf;as a natural submissive, ${he}'s not sure ${he} can perform the task as expected@@. `;
    };

    if (s.hasPenis) {
        if (s.hasBalls) {
            dlg += `You play with ${name}'s ${s.getPenisSize()} cock for a little bit to get ${him} nice and hard for you, before taking your preferred position in front of ${him}. You guide ${his} lubricated cock to your <<AssOrPussy>> before tugging hard on the small leash you have around ${his} neck. `;

            dlg += `\n\n`;

            dlg += `<<pic $player "fucked-by-${gen}">>\n`;
        } else {
            dlg += `@@.sf;Since ${name} no longer has ${his} testicles, ${he}'s unable to achieve a usable erection@@. Having prepared for this, you fasten a large strap-on dildo around ${his} waist and over ${his} useless cock. The embarrassment in ${his} eyes is obvious and arousing. You guide ${his} lubricated \"cock\" to your <<AssOrPussy>> before tugging hard on the small leash you have around ${his} neck. `;

            dlg += `\n\n`;
        }

        dlg += `<<nm $player "Oooohhhh, yeahhh... There it is! You keep fucking until I cum, understand?">>\n`;

        if (hasPerk(s,"Muted")) {
            dlg += `${name} emphatically nods ${his} head, unable to speak a response. `;
        } else {
            dlg += `${name} confirms ${he} understands, picking up ${his} pace. `;
        };
    } else {
        dlg += `In preparation for this session, you fasten a large strap-on dildo around ${his} waist, half of which slides inside ${his} pussy. You guide ${his} lubricated \"cock\" to your <<AssOrPussy>> before tugging hard on the small leash you have around ${his} neck. `;

        dlg += `\n\n`;

        dlg += `<<nm $player "Oooohhhh, yeahhh... There it is! You keep fucking until I cum, understand?">>\n`;

        if (hasPerk(s,"Muted")) {
            dlg += `${name} emphatically nods ${his} head, unable to speak a response. `;
        } else {
            dlg += `${name} confirms ${he} understands, picking up ${his} pace. `;
        };

        dlg += `\n\n`;

        dlg += `<<pic $player "fucked-by-${gen}">>\n`;
    };

    dlg += `${name} ${hasPerk(s,'Dominant') ? 'enthusiastically' : 'diligently'} continues, fucking you deep and hard as you quickly work towards orgasm. It's not long before you can feel your climax welling up inside you. `;

    dlg += `\n\n`;

    dlg += `<<nm $player "C-cumming!">>\n`;
    
    dlg += `You continue to get railed into your mattress by ${name}, your hands gripping your sheets and your teeth digging into your pillow. `;

    if (hasPerk(s, "Dominant")) {
        dlg += `@@.xxx;As a dominant slave@@, it's clear that ${name} is deriving great pleasure from taking on this role. As you call out, ${he} buries himself deep into your <<AssOrPussy>>, finally sending you over the edge.`;
    } else if (hasPerk(s, "Submissive")) {
        dlg += `@@.sf;While still not comfortable in this role@@, ${name} works hard to fuck you to completion, breathing heavily and sweating through the process. `;
    } else {
        dlg += `${name} happily follows ${his} instructions, working hard to enthusiastically fuck you to completion. `;
    };

    dlg += `\n\n`;

    dlg += `<<nm $player "FFFUUUUCK!">>\n`;

    if (hasPenis()) {
        dlg += `With strong pressure applied to your prostate, rope after rope of hot cum spurts and shoots out of your dangling cock as ${name} holds you firmly in place. After a moment, you slide off of ${his} member and fall into your pillow. `;

        dlg += `\n\n`;

        dlg += `<<nm $player "That... you... g-good... good ${boy}...">>\n`
    } else {
        dlg += `With your <<vSize>> filled to the brim, wave after wave of thick juices spray out from between your thighs as ${name} holds you firmly in place. After a moment, you slide off of ${his} member and fall into your pillow. `;

        dlg += `\n\n`;

        dlg += `<<nm $player "That... you... g-good... good ${boy}...">>\n`
    };

    dlg += `${name} waits patiently as you get yourself back together. You leash ${name}, dragging ${him} off the bed and walking ${him} back to your closet on ${his} hands and knees. `;

    dlg += `\n\n`;

    dlg += `<<horny 0>>`;

    return dlg;
};
