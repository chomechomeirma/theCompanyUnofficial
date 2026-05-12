/* twine-user-script #1: "config.js" */
//////////////////////////////////////////////////////
// JAVASCRIPT CODE //////////////////////////////////
////////////////////////////////////////////////////

//#region - GAME CONFIG

// Configure game data //
Config.history.maxStates = 10;

// Import external datasets
importScripts('data/clothing/clOutfits.js');
importScripts('data/clothing/clUnderwear.js');
importScripts('data/clothing/clBra.js');
importScripts('data/clothing/clAccf.js');
importScripts('data/clothing/clAccb.js');
importScripts('data/clothing/clHats.js');

//#endregion
//#region - SETUP STRINGS

setup.strings = {};
setup.strings.breastSize = ["Flat", "Tiny", "Small", "Medium", "Large", "Massive"];
setup.strings.penisSize = ["None", "Tiny", "Small", "Medium", "Large", "Massive"];
setup.strings.assSize = setup.strings.pussySize = ["Virgin", "Tight", "Average", "Loose", "Stretched", "Gaping"];
setup.strings.memories = ["gender","outfit","breasts","penis","pussy","ass","genitals"];

//#endregion
//#region - SETUP CONSTANTS

	setup.sizeTiers = [[0,0],[1,1],[2,25],[3,50],[4,75],[5,90]];

	const V = variables();
	
	const XL = variables().XL = 99;
	const L = variables().L = 75;
	const M = variables().M = 50;
	const S = variables().S = 25;
	const XS = variables().XS = 1;

	const HATE = variables().HATE = 0;
	const DISLIKE = variables().DISLIKE = 20;
	const NEUTRAL = variables().NEUTRAL = 40;
	const LIKE = variables().LIKE = 60;
	const LOVE = variables().LOVE = 80;

	const EXPERT = variables().EXPERT = 5;
	const GREAT = variables().GREAT = 4;
	const GOOD = variables().GOOD = 3;
	const OKAY = variables().OKAY = 2;
	const NEW = variables().NEW = 1;
	const Characters = ['player','mom','sister','sophie','penny','diana','julia','tasha','john','lauren','james','sean','mick','jag','ash','veruca','lexi','siri','saya','chris','lisa','kagney','elsa'];
	const ActionCodex = {
		base: [
			"kiss.give","kiss.get",
			"suckCock.give","suckCock.get",
			"eatPussy.give","eatPussy.get",
			"analPlay.give","analPlay.get",
			"pussyPlay.give","pussyPlay.get",
			"analFuck.give","analFuck.get",
			"pussyFuck.give","pussyFuck.get",
			"rimjob.give","rimjob.get",
			"handjob.give","handjob.get",
			"trib.give","trib.get",
			"gangbang.give","gangbang.get",
			"sex.Men","sex.Women",
			"sex.Trans","sex.Family",
			"escorting",
			"titfuck.give","titfuck.get",
			"creampie.give","creampie.get",
			"cumEat.give","cumEat.get",
			"cumFace.give","cumFace.get",
			"cumBody.give","cumBody.get"],
		play: [
			"kiss.give","kiss.get",
			"analPlay.give","analPlay.get",
			"pussyPlay.give","pussyPlay.get",
			"titfuck.give","titfuck.get"],
		oral: [
			"suckCock.give","suckCock.get",
			"eatPussy.give","eatPussy.get",
			"rimjob.give","rimjob.get"],
		sex: [
			"analFuck.give","analFuck.get",
			"pussyFuck.give","pussyFuck.get",
			"trib.give","trib.get",
			"gangbang.give","gangbang.get"],
		sexWith: [
			"sex.Men","sex.Women",
			"sex.Trans","sex.Family"]
	};
	// Time Variables
	const TimesAbbr = {
		morning: 0, m: 0,
		latemorning: 1, lm: 1,
		noon: 2, n: 2,
		earlyafternoon: 3, ea: 3,
		afternoon: 4, an: 4, a: 4,
		evening: 5, e: 5,
		night: 6, n: 6
	};

	// Days on which story events occur: 901 = 9/01, 1004 = 10/04
	const EventDays = [
		20170901,20170904,20170905,20170906,20170907,20170908,20170918,20170919,20170920,20170921,20170922,20170925,20170926,20170927,20170928,20170929,
		20171002,20171004,20171005,20171006,20171009,20171010,20171012,20171016,20171018,20171020,20171023,20171025,20171027,20171030,20171031,
		20171106,20171108,20171110,20171113,20171114,20171117,20171120,20171121,20171122,20171123,20171124,20171127,20171130,
		20171205,20171206,20171207,20171208,20171213,20171221,20171224,
		20180109,20180111,20180126
	];

	const Days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
	const Times = ["Morning", "Late Morning", "Noon", "Early Afternoon", "Afternoon", "Evening", "Night"];
	const Months = [["",0],["January",31],["February",28],["March",31],["April",30],["May",31],["June",30],["July",31],["August",31],["September",30],["October",31],["November",30],["December",31]];

//#endregion
//#region - GENERAL FUNCTIONS
window.elog = function (msg) {
	if (variables().DebugMessages == true) {
		//console.log(msg);
	};
	console.log(msg);
};

// Function to roll a random number between 1 and 6 with a possible modifier
window.d6 = function (mod = 0) {
	return Math.floor(Math.random() * 6) + 1 + mod;
};

window.randomItem = function(array, excludeItems = []) {
	// Create a new array that excludes the items in the excludeItems array
	const filteredArray = array.filter(item => !excludeItems.includes(item));
  
	// Choose a random item index from the filtered array
	const randomIndex = Math.floor(Math.random() * filteredArray.length);
  
	// Return the randomly selected item
	return filteredArray[randomIndex];
  };

window.randomObject = function(obj, excludeKeys = []) {
	// Get an array of the object's keys
	const keys = Object.keys(obj).filter(key => !excludeKeys.includes(key));

	// Choose a random key index
	const randomIndex = Math.floor(Math.random() * keys.length);

	// Return the value associated with the random key
	return obj[keys[randomIndex]];
}

function getPlayer() {
    return State.variables.player;
};

window.isFreePlay = function () {
	return (variables().FreePlay == true);
};

window.isEventDay = function () {
	return (EventDays.includes(getTimeStamp()) && !isFreePlay());
};

// Uses visited() function to return true if this is the first time the player has visited a passage
window.firstVisit = function () {return (visited() == 1)};

// Checks through all items in $Tasks array and returns true if any are set to open
window.tasksOpen = function () {
	if (State.variables.Tasks !== undefined) {
		var tasks = variables().Tasks;
		for (var i = 0; i < tasks.length; i++) {
			if (tasks[i].open) {return true};
		};
	};
};

window.coins = function (player=getPlayer()) {return (player.wolf + player.ram + player.hart)};
window.serums = function (serum=variables().serum) {return (serum[1].qty+serum[2].qty+serum[3].qty)};

window.triggerEvent = function (cd = variables().EventCD, unlocked = variables().EventsEnabled) {
	let x = Math.floor((Math.random() * 100) + 1);
	return (cd === 0 && unlocked === true && x <= variables().EventChance);
};

function getChar(character) {
	if (character === undefined) {
		return State.variables.player;
	} else if (State.variables[character]) {
		return State.variables[character];
	} else {
		return undefined;
	};
};

/**
 * 
 * @returns {object} - Returns the variables object
 */
function generateGuid() {
	const hexDigits = '0123456789abcdef';
	let guid = '';
	for (let i = 0; i < 36; i++) {
	  if (i === 8 || i === 13 || i === 18 || i === 23) {
		guid += '-';
	  }
	  else if (i === 14) {
		guid += '4';
	  }
	  else {
		const randomDigit = Math.floor(Math.random() * hexDigits.length);
		const digit = hexDigits[randomDigit];
		guid += digit;
	  }
	}
	return guid;
  }
  

Number.prototype.between = function (a, b, inclusive) {
	var min = Math.min(a, b),
		max = Math.max(a, b);

	return inclusive ? this >= min && this <= max : this > min && this < max;
}

/**
 * 
 * @param {string} str - The string to be capitalized
 * @returns {string} - The capitalized string
 */
window.properCase = function (str) {
	const words = str.split(' ');
	const capitalizedWords = words.map(word => {
		return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
	});
	return capitalizedWords.join(' ');
};  

window.isString = function (x) {
	return (Object.prototype.toString.call(x) === "[object String]");
};

window.isObject = function(item) {
	return (typeof item === 'object');
};

window.chance = function(c,odds) {
	if (odds === undefined) {
		odds = Math.floor(Math.random() * 100) + 1;
	} else {
		odds = Math.floor(Math.random() * odds) + 1;
	};
	return (odds <= c);
};

window.getName = function (sex) {
	if (sex == "male") {
		var names = ['Alan','Bob','Carl','Dillon','Eric','Frank','Greg','Harold','Ian','Joe','Kyle','Larry','Mark','Nate','Owen','Peter','Quincy','Robert','Sam','Tom','Victor','William','Xander'];
	} else if (sex == "female") {
		var names = ['Amy','Allison','Angie','Becky','Brie','Briana','Cindy','Catherine','Christina','Dina','Daphne','Eileen','Erika','Erin','Francine','Gwen','Heidi','Heather','Haylee','Ingrid','Jenny','Jennifer','Jane','Kat','Kitty','Karen','Kathy','Mary','Marnie','Melissa','Maggie','Nancy','Patty','Phoebe','Rebecca','Rachel','Samantha','Sally','Vicky','Veronica','Winnie'];
	} else if (sex == "surname") {
		var names = ['Smith','Johnson','Williams','Brown','Jones','Miller','Davis','Wilson','Anderson','Thomas','Taylor','Moore','Jackson','Martin','Lee','Thompson','White','Harris','Clark','Lewis','Robinson','Walker','Young','Allen','King','Wright','Scott','Hill','Green','Adams','Nelson','Baker','Hall','Campbell','Mitchell','Carter','Roberts','Phillips','Evans','Turner','Parker','Edwards','Collins','Stewart','Morris','Murphy','Cook','Rogers','Morgan','Cooper','Peterson','Bailey','Reed','Kelly','Howard','Cox','Ward','Richardson','Watson','Brooks','Wood','James','Bennet','Grey','Hughes','Price','Myers','Long','Ross','Foster','Doe']
	} else {
		var names = ['Alan','Bob','Carl','Dillon','Eric','Frank','Greg','Harold','Ian','Joe','Kyle','Larry','Mark','Nate','Owen','Peter','Quincy','Robert','Sam','Tom','Victor','William','Xander','Amy','Allison','Angie','Becky','Brie','Briana','Cindy','Catherine','Christina','Dina','Daphne','Eileen','Erika','Erin','Francine','Gwen','Heidi','Heather','Haylee','Ingrid','Jenny','Jennifer','Jane','Kat','Kitty','Karen','Kathy','Mary','Marnie','Melissa','Maggie','Nancy','Patty','Phoebe','Rebecca','Rachel','Samantha','Sally','Vicky','Veronica','Winnie'];
	};

	return names[Math.floor(Math.random()*names.length)];
};

window.detectMobile = function () {
	return (navigator.userAgent.match(/Android/i) ||
		navigator.userAgent.match(/webOS/i) ||
		navigator.userAgent.match(/iPhone/i) ||
		navigator.userAgent.match(/iPad/i) ||
		navigator.userAgent.match(/iPod/i) ||
		navigator.userAgent.match(/BlackBerry/i) ||
		navigator.userAgent.match(/Windows Phone/i)
	);
};

// Function to determine if Ava or Dakota should be in the house
window.isHome = function (actor) {
	if (actor == "mom") {
		if (isWeekend() && isAfternoon() || (isNight() && variables().mom.isSlut)) {
            return false;
        } else {
            return true;
        };
	} else if (actor == "sister") {
		if (variables().sister.isPornstar) {
            return false;
        } else {
            if (isMonday() || isWednesday() || isThursday()) {
                if (isEvening()) {return false} else {return true};
            } else {
                return true;
            };
        };
	};
};

window.loadMenu = function(title,menu) {
	// Adding a title to the dialog.
	Dialog.setup(title);
	Dialog.wiki(Story.get(menu).processText());
	Dialog.open();
};

window.isBlood = function(mom = variables().mom, sister = variables().sister) {
	return (mom.isBlood || sister.isBlood);
}

// Checks to see if any applicable characters have an sms attribute that isn't null and returns true if ANY come back as true
window.smsResponse = function() {
	return (variables().mom.sms ||
			variables().sister.sms ||
			variables().sophie.sms ||
			variables().penny.sms ||
			variables().diana.sms ||
			variables().chris.sms ||
			variables().john.sms ||
			variables().tasha.sms)
};

window.smsHasResponse = function(actor) {
	return (actor.sms);
};

//#endregion
//#region - EVENT FUNCTIONS

/*
// Returns true if a conversation can trigger at home or work
window.convoReady = function (loc) {
	var convoCD = variables().ConvoCD;
	if (loc == 'home') {
		var convoPool = variables().HomeConvoPool;
		return (convoPool.length > 0 && chance(60) && convoCD === 0 && !isNight());
	} else if (loc == 'work') {
		var convoPool = variables().WorkConvoPool;
		return (convoPool.length > 0 && chance(60) && convoCD === 0 && !isNight() && !isEvening());
	};
};
*/

window.canTriggerHomeEvent = function () {
	if (V.HomeEvents.length > 0 &&
		(isWeekend() && !isNight()) ||
		(isTuesday() && isEvening()) &&
		!V.ElsaVisiting &&
		!V.BrokenHome) {
			return true;
		}
}

// Returns true if an event ID appears in the main event index or on cooldown
window.eventActive = function (type, id) {
	if (type == 'home') {
		var Event = variables().HomeEvents;
		var EventCD = variables().HomeEventsCD;
		var EventUnlocked = variables().HomeEventsUnlocked;
	} else if (type == 'work') {
		var Event = variables().WorkEvents;
		var EventCD = variables().WorkEventsCD;
		var EventUnlocked = variables().WorkEventsUnlocked;
	} else if (type == 'night') {
		var Event = variables().NightEvents;
		var EventCD = variables().NightEventsCD;
		var EventUnlocked = variables().NightEventsUnlocked;
	} else if (type == 'dream') {
		var Event = variables().DreamEvents;
		var EventCD = variables().DreamEventsCD;
		var EventUnlocked = variables().DreamEventsUnlocked;
	} else {
		return false;
	}

	if (Event.includes(id)) {
		EventUnlocked.push(id);
		return true;
	};
	for (var i = 0; i < EventCD.length; i++) {
		if (EventCD[i][0] == id) {
			EventUnlocked.push(id);
			return true;
		};
	};
};

// Returns a deduplicated version of an array
// USE: <<set $HomeEvents to removeDupes($HomeEvents)>>
window.removeDupes = function (data) {
	return data.filter((value, index) => data.indexOf(value) === index);
};

// Pull all events on cooldown into the active event pool
window.activateAllEvents = function () {
	var HomeEvents = variables().HomeEvents;
	var WorkEvents = variables().WorkEvents;
	var HomeEventsCD = variables().HomeEventsCD;
	var WorkEventsCD = variables().WorkEventsCD;
	var DreamEvents = variables().DreamEvents;
	var NightEvents = variables().NightEvents;
	var DreamEventsCD = variables().DreamEventsCD;
	var NightEventsCD = variables().NightEventsCD;

	for (var i = 0; i < HomeEventsCD.length; i++) {HomeEvents.push(HomeEventsCD[i][0])};
	for (var i = 0; i < WorkEventsCD.length; i++) {WorkEvents.push(HomeEventsCD[i][0])};
	for (var i = 0; i < DreamEventsCD.length; i++) {DreamEvents.push(HomeEventsCD[i][0])};
	for (var i = 0; i < NightEventsCD.length; i++) {NightEvents.push(HomeEventsCD[i][0])};

	removeDupes(HomeEvents);
	removeDupes(WorkEvents);
	removeDupes(DreamEvents);
	removeDupes(NightEvents);
}

// Checks to see if a conversation has been seen
window.seenConvo = (actor, id) => (actor?.convo[id]?.seen === true);
window.convoEnabled = (actor, id) => (actor?.convo[id]?.enabled === true);

//#endregion
//#region - TIME FUNCTIONS

// Check months
// USE:
//	<<if isJanuary()>>				-	Returns true if January
//	<<if isMarch(5)>>				-	Returns true if March 5th
//	<<if isApril(13,'Morning')>>	-	Returns true if it's April 13th, in the morning
	window.isJanuary = function (d = 0, t = 0, time = variables().time) {
		return (time.cMonth == 1 && (time.dayCount == d || d === 0) && (time.time == t || t === 0) && (time.cYear == 2018));
	};
	window.isFebruary = function (d = 0, t = 0, time = variables().time) {
		return (time.cMonth == 2 && (time.dayCount == d || d === 0) && (time.time == t || t === 0) && (time.cYear == 2018));
	};
	window.isMarch = function (d = 0, t = 0, time = variables().time) {
		return (time.cMonth == 3 && (time.dayCount == d || d === 0) && (time.time == t || t === 0) && (time.cYear == 2018));
	};
	window.isApril = function (d = 0, t = 0, time = variables().time) {
		return (time.cMonth == 4 && (time.dayCount == d || d === 0) && (time.time == t || t === 0) && (time.cYear == 2018));
	};
	window.isMay = function (d = 0, t = 0, time = variables().time) {
		return (time.cMonth == 5 && (time.dayCount == d || d === 0) && (time.time == t || t === 0) && (time.cYear == 2018));
	};
	window.isJune = function (d = 0, t = 0, time = variables().time) {
		return (time.cMonth == 6 && (time.dayCount == d || d === 0) && (time.time == t || t === 0) && (time.cYear == 2018));
	};
	window.isJuly = function (d = 0, t = 0, time = variables().time) {
		return (time.cMonth == 7 && (time.dayCount == d || d === 0) && (time.time == t || t === 0) && (time.cYear == 2018));
	};
	window.isAugust = function (d = 0, t = 0, time = variables().time) {
		return (time.cMonth == 8 && (time.dayCount == d || d === 0) && (time.time == t || t === 0) && (time.cYear == 2018));
	};
	window.isSeptember = function (d = 0, t = 0, time = variables().time) {
		return (time.cMonth == 9 && (time.dayCount == d || d === 0) && (time.time == t || t === 0) && (time.cYear == 2017));
	};
	window.isOctober = function (d = 0, t = 0, time = variables().time) {
		return (time.cMonth == 10 && (time.dayCount == d || d === 0) && (time.time == t || t === 0) && (time.cYear == 2017));
	};
	window.isNovember = function (d = 0, t = 0, time = variables().time) {
		return (time.cMonth == 11 && (time.dayCount == d || d === 0) && (time.time == t || t === 0) && (time.cYear == 2017));
	};
	window.isDecember = function (d = 0, t = 0, time = variables().time) {
		return (time.cMonth == 12 && (time.dayCount == d || d === 0) && (time.time == t || t === 0) && (time.cYear == 2017));
	};

	// Check days
	// USE:
	//	<<if isMonday()>>				-	Returns true if Monday
	//	<<if isThursday('evening')>>	-	Returns true if Wednesday Evening
	window.isMonday = function (t = 'any', time = variables().time) {return (time.cDay === 1 && verifyTime(t))};
	window.isTuesday = function (t = 'any', time = variables().time) {return (time.cDay === 2 && verifyTime(t))};
	window.isWednesday = function (t = 'any', time = variables().time) {return (time.cDay === 3 && verifyTime(t))};
	window.isThursday = function (t = 'any', time = variables().time) {return (time.cDay === 4 && verifyTime(t))};
	window.isFriday = function (t = 'any', time = variables().time) {return (time.cDay === 5 && verifyTime(t))};
	window.isSaturday = function (t = 'any', time = variables().time) {return (time.cDay === 6 && verifyTime(t))};
	window.isSunday = function (t = 'any', time = variables().time) {return (time.cDay === 0 && verifyTime(t))};
	window.isWeekend = function (t = 'any', time = variables().time) {
		return ((time.cDay === 6 || time.cDay === 0) && verifyTime(t));
	};
	window.isWeekday = function (t = 'any', time = variables().time) {
		return (time.cDay !== 6 && time.cDay !== 0 && verifyTime(t));
	};

// Check times
// USE:
//	<<if isEvening()>>			-	Returns true if it's evening
	window.isMorning = function (time = variables().time) {return time.cTime === 0};
	window.isLateMorning = function (time = variables().time) {return time.cTime === 1};
	window.isNoon = function (time = variables().time) {return time.cTime === 2};
	window.isEarlyAfternoon = function (time = variables().time) {return time.cTime === 3};
	window.isAfternoon = function (time = variables().time) {return time.cTime === 4};
	window.isEvening = function (time = variables().time) {return time.cTime === 5};
	window.isNight = function (time = variables().time) {return time.cTime === 6};
	window.isDark = function () {return (isNight() || isEvening())};

// Used to check a specific month, day, time combination
// USE:
//	<<if checkTime('January',13,'Evening')>>		-	Returns true if it's January 13th, in the evening
//	<<if checkTime('March',0,'Morning')>>			-	Returns true if it's March and morning
window.checkTime = function (m,d,t,time = variables().time) {
	return ((time.month === m || m === 0) && (time.dayCount === d || d === 0) && (time.time === t || t === 0))
};

// Function to return strings based on integers for times, days, calendar days, and months
// USE:	<<run getTimeInfo()>>
window.getTimeInfo = function () {
	let time = variables().time;
	time.day = Days[time.cDay];
	time.time = Times[time.cTime];
	time.month = Months[time.cMonth][0];
	if (time.dayCount == 1 || time.dayCount == 21 || time.dayCount == 31) {
		time.calendarDay = time.dayCount + 'st';
	} else if (time.dayCount == 2 || time.dayCount == 22) {
		time.calendarDay = time.dayCount + 'nd';
	} else if (time.dayCount == 3 || time.dayCount == 23) {
		time.calendarDay = time.dayCount + 'rd';
	} else {
		time.calendarDay = time.dayCount + 'th';
	};
};

// Function used to generate a timestamp from the current year, month, and day
window.getTimeStamp = function () {
	let time = variables().time;

	// Convert year and month into usable information
	let y = time.cYear * 10000;
	let m = time.cMonth * 100;
	let d = time.dayCount;

	// Timestamp is the sum of y, m, and d. Ex: 20171109 = November 9th, 2017
	return (y + m + d);
};

// Functions to check if a time is after or before the current time using timestamps
// checkTime must be in YYYYMMDD format
// Ex: <<if timeIsAfter(20171001)>> returns true if the current timestamp is greater than October 1st, 2017
window.timeIsAfter = function (checkTime) {
	let currentTime = getTimeStamp();
	return (checkTime < currentTime);
}
window.timeIsBefore = function (checkTime) {
	let currentTime = getTimeStamp();
	return (checkTime > currentTime);
}

// Function to process time progression on a new day
window.newDay = function() {
	let time = variables().time;

	// Adds 1 to the day counter and sets time to morning
	time.dayCount += 1;
	time.cTime = 0;

	// If the day is Sunday, sets day to Monday, otherwise adds 1 to day
	if (time.cDay == 6) {
		time.cDay = 0;
	} else {
		time.cDay += 1;
	};

	// If the new day counter exceeds the days in the current month, change to the next month
	if (time.dayCount > Months[time.cMonth][1]) {
		time.cMonth += 1;
		time.dayCount = 1;
		if (time.cMonth > 12) {
			time.cMonth = 1;
			time.cYear += 1;
			time.month = Months[time.cMonth][0];
		};
	};

	// Update time strings and run daily resets
	getTimeInfo();
	newDayResets();
};

// Function to move time forward by a defined amount (1 by default)
window.passTime = function(h = 1) {
	let time = variables().time;
	time.cTime += h;
	if (variables().ConvoCD > 0) {
		variables().ConvoCD -= 1;
	};
	if (variables().player.horny >= 30) {
		if (isBimbo()) {
			variables().player.hornyMod -= 3;
		} else {
			variables().player.hornyMod += 5;
		};
	};
	if (variables().player.hasCollar && variables().player.dom > 0) {
		variables().player.dom -= 4;
	};
	if (time.cTime > 6) {newDay()};
};

//#endregion
//#region - STATS AND COOLDOWNS

// Returns a tier value from love or lust, from 0 to 5
// USE: <<if loveTier($tasha) > 4>>
window.loveTier = (actor) => {
	return Math.floor(actor?.love / 20);
}
window.lustTier = (actor) => {
	return Math.floor(actor?.lust / 20);
}

// Creates a new cooldown object to be tracked and reduced daily
// USE: <<set setDailyCD("myCD",5)>>\
window.setDailyCD = function (cd, val = 3) {
	// Confirms the $DailyCD object is defined, and defines it if not
	if (variables().DailyCD === undefined) {
		variables().DailyCD = {};
	};

	// Sets the timer of the CD to the defined value, or 3 if undefined
	variables().DailyCD[cd] = val;
};

// Removes a daily cooldown from memory
// USE:	<<run removeDailyCD("myCD")>>\
window.removeDailyCD = function (cd) {
	// Confirms the $DailyCD object is defined, and defines it if not
	if (variables().DailyCD === undefined) {
		variables().DailyCD = {};
	};

	// Confirms the cooldown exists and deletes it if it does
	if (variables().DailyCD[cd] !== undefined) {
		delete variables().DailyCD[cd];
	};
};

// Run through all defined daily cooldowns and reduce them by 1 if greater than 0
// USE: <<run countdownDailyCD()>>
window.countdownDailyCD = function () {
	// Confirms the $DailyCD object is defined, and defines it if not
	if (variables().DailyCD === undefined) {
		variables().DailyCD = {};
	};

	// Sets a local variable as the DailyCD object
	let dailyCD = variables().DailyCD;

	// Converts daily CD names into an array called cd
	let cd = Object.keys(dailyCD);

	// Run through all daily cooldowns and reduce them by 1 if it's greater than 0
	for (let i = 0;i < cd.length; i++) {
		if (dailyCD[cd[i]] !== undefined && dailyCD[cd[i]] > 0) {
			dailyCD[cd[i]]--;
		};
	};
};

// Run through all defined daily cooldowns and reduce them by 1 if greater than 0
// Checks legacy cooldowns tied to specific actors as well as conversation cooldowns
// USE: <<run countdownActorCD()>>
window.countdownActorCD = function () {
	// Run through set of defined CDs for actors
	for (let i = 0; i < Characters.length; i++) {
		let cn = Characters[i];
		if (State.variables[cn] !== undefined) {
			let char = State.variables[cn];
			char.loveToday = 0;
			char.lustToday = 0;
			if (char.cum !== undefined && char.cum > 0) {char.cum -= 1};
			if (char.orgasm !== undefined && char.orgasm > 0) {char.orgasm -= 1};
			if (char.peDecline !== undefined && char.peDecline > 0) {char.peDecline -= 1};
			if (char.dateCD !== undefined && char.dateCD > 0) {char.dateCD -= 1};
			if (char.convoCD !== undefined && char.convoCD > 0) {char.convoCD -= 1};
			if (variables().ArtDemo) {
				if (char.doseCD !== undefined) {char.doseCD = 0};
			} else {
				if (char.doseCD !== undefined && char.doseCD > 0) {char.doseCD -= 1};
			};
			if (char.sexCD !== undefined && char.sexCD > 0) {char.sexCD -= 1};
			if (char.hasCollar !== undefined && char.hasCollar > 0) {char.daysCollar += 1};
			if (char.eventCD !== undefined && char.eventCD > 0) {char.eventCD -= 1};
			if (char.mcsx !== undefined && char.mcsx.cd > 0) {char.mcsx.cd -= 1};
			if (char.isDog !== undefined && char.isDog === true) {char.love = 60, char.lust = 60};
			if (char.convo !== undefined) {
				for (let c = 1; c < char.convo.length; c++) {
					if (char.convo[c].enabled === true && char.convo[c].cd > 0) {char.convo[c].cd -= 1};
				};
			};
		};
	};
};

// Used to check the value of a cooldown
// USE: <<if cd("PennyDose")>> returns true if $cd.PennyDose = 0
window.cd = function(cd, val = 0, isNew = false) {
	// Confirms the $DailyCD object is defined, and defines it if not
	if (variables().DailyCD === undefined) {
		variables().DailyCD = {};
	};

	// Sets a local variable as the DailyCD object
	let dailyCD = variables().DailyCD;

	// Creates as a new coodldown if 'isNew' is flagged as true
	if (isNew === true && dailyCD[cd] === undefined) {
		setDailyCD(cd,0);
	};

	// Returns true if cooldown is defined, and its value matches val, 0 by default
	return (dailyCD[cd] !== undefined && dailyCD[cd] === val);
};

// Debug function to retrieve a list of cooldowns
// USE: <<set _cdList to returnCDList()>>
window.returnCDList = function() {
	// Confirms the $DailyCD object is defined, and defines it if not
	if (variables().DailyCD === undefined) {
		variables().DailyCD = {};
	};

	// Sets a local variable as the DailyCD object, then returns the keys as an array
	let dailyCD = variables().DailyCD;
	return Object.keys(dailyCD);
};

// Checks milestone values for Lust (default), Love, and Mind, and uses them to generate a chance for a takeover to happen
// USE:	<<if takeover($tasha,"lust")>>
//			Returns true if the returned value is lower than Tasha's lust
window.check = function (stat,odds = 100) {
	if (stat !== undefined) {
		let c = Math.floor(Math.random() * odds) + 1;
		return (c < stat);
	};
};

window.getActorID = function (id = 999) {
	for (let i = 0; i < Characters.length; i++) {
		let c = getChar(Characters[i]);
		if (c.id && c.id === id) {
			return c;
		};
	};
	if (id === 999) {return undefined};
};

window.setMassStat = function (stat,val) {
	for (let c of Characters) {
		variables()[c][stat] = val;
	};
};

window.statReset = function (actor, stats) {
	if (actor) {
		for (let i = 0; i < stats.length; i++) {
			if (actor[stats[i]]) {
				actor[stats[i]] = actor[stats[i]].clamp(0, 100);
			} else {
				actor[stats[i]] = 0;
			};
		};
	};
};

// Runs through all ...EventsCD arrays and reduces index 1 by 1
// If Index 1 is 0 or less, add Index 0 to the ...Events array and remove the entire index from the CD array
window.eventCD = function () {
	// Bring story variables into local variables
	var HomeEvents = variables().HomeEvents;
	var WorkEvents = variables().WorkEvents;
	var HomeEventsUnlocked = variables().HomeEventsUnlocked;
	var WorkEventsUnlocked = variables().WorkEventsUnlocked;
	var HomeEventsCD = variables().HomeEventsCD;
	var WorkEventsCD = variables().WorkEventsCD;
	var DreamEvents = variables().DreamEvents;
	var NightEvents = variables().NightEvents;
	var DreamEventsUnlocked = variables().DreamEventsUnlocked;
	var NightEventsUnlocked = variables().NightEventsUnlocked;
	var DreamEventsCD = variables().DreamEventsCD;
	var NightEventsCD = variables().NightEventsCD;

	// Check HomeEvents
	for (var x = 0; x < HomeEventsCD.length; x++) {
		HomeEventsCD[x][1] -= 1;
		if (HomeEventsCD[x][1] <= 0) {
			let ev = HomeEventsCD[x][0];
			HomeEventsUnlocked.push(ev);
			HomeEvents.push(ev);
			delete HomeEventsCD[x];
		};
	};

	// Check WorkEvents
	for (var x = 0; x < WorkEventsCD.length; x++) {
		WorkEventsCD[x][1] -= 1;
		if (WorkEventsCD[x][1] <= 0) {
			let ev = WorkEventsCD[x][0];
			WorkEvents.push(ev);
			WorkEventsUnlocked.push(ev);
			delete WorkEventsCD[x];
		};
	};

	// Check DreamEvents
	for (var x = 0; x < DreamEventsCD.length; x++) {
		DreamEventsCD[x][1] -= 1;
		if (DreamEventsCD[x][1] <= 0) {
			let ev = DreamEventsCD[x][0];
			DreamEvents.push(ev);
			DreamEventsUnlocked.push(ev);
			delete DreamEventsCD[x];
		};
	};

	// Check NightEvents
	for (var x = 0; x < NightEventsCD.length; x++) {
		NightEventsCD[x][1] -= 1;
		if (NightEventsCD[x][1] <= 0) {
			let ev = NightEventsCD[x][0];
			NightEvents.push(ev);
			NightEventsUnlocked.push(ev);
			delete NightEventsCD[x];
		};
	};

	// Purge any undefined indices from EventCD arrays
	variables().HomeEventsCD = HomeEventsCD.filter(function(value){return value !== undefined;});
	variables().WorkEventsCD = WorkEventsCD.filter(function(value){return value !== undefined;});
	variables().DreamEventsCD = DreamEventsCD.filter(function(value){return value !== undefined;});
	variables().NightEventsCD = NightEventsCD.filter(function(value){return value !== undefined;});

	// Deduplicate all event arrays
	removeDupes(HomeEvents);
	removeDupes(WorkEvents);
	removeDupes(DreamEvents);
	removeDupes(NightEvents);
};

//#endregion
//#region - SERUM FUNCTIONS

// Sets a new dose property for an actor in the $actor.dose object
// USE:	<<set newDose($john,"NiceGuy")>>\
window.newDose = function (actor, nd) {
	if (actor) {
		if (actor.dosed === undefined) {actor.dosed = {}};
		actor.dosed[nd] = true;
	};
};

// Removed/disables a dose property for an actor from $actor.dose object
// USE:	<<run removeDose($john,"NiceGuy")>>\
window.removeDose = function (actor, d) {
	if (actor) {
		if (actor.dosed && actor.dosed[d]) {delete actor.dosed[d]};
	};
};

// Checks to see if a dose property exists and is true
// USE:	<<if dose($john,"NiceGuy")>>\
window.dose = function (actor, d) {
	if (actor) {return (actor.dosed && actor.dosed[d] === true)};
};

//#endregion
//#region - PROSTITUTION SYSTEM

// Create Client for Player
window.createClient = function (Gender, Personality, Y) {
	// Initialize variables for function
	var StartList = [], ActionList = [], FinishList = [];
	if (Y === undefined) {
		var Pay = Math.floor(Math.random() * 4) + 1;
	} else {
		var Pay = Y;
	};

	// Get possible client wanted foreplay actions based on player state
	if (bTier() > 3 && Gender !== "female") {StartList.push("titfuck.give")};
	if (isChastity() || isSissy()) {
		StartList.push("rimjob.give");
		if (Gender == "female") {StartList.push("eatPussy.give")} else {StartList.push("suckCock.give")};
	} else if (canFuck()) {
		StartList.push("rimjob.give");
		if (Gender == "female") {StartList.push("eatPussy.give")} else {StartList.push("suckCock.give")};
		if ((Personality == "shy" || Gender == "female") && hasPenis()) {StartList.push("suckCock.get")};
	} else {
		StartList.push("rimjob.give","eatPussy.get");
		if (Gender == "female") {StartList.push("eatPussy.give")} else {StartList.push("suckCock.give")};
	};
	var Start = StartList[Math.floor(Math.random()*StartList.length)]

	// Get possible client wanted sex actions based on player state
	if (bTier() > 3 && Gender !== "female") {ActionList.push("titfuck.give")};
	if (Start == "suckCock.get") {ActionList.push("suckCock.get")};
	if (Start == "eatPussy.get") {ActionList.push("eatPussy.get")};
	if (isChastity() || isSissy()) {
		ActionList.push("analFuck.get");
		if (Gender == "female") {ActionList.push("eatPussy.give")} else {ActionList.push("suckCock.give")};
	} else if (canFuck()) {
		if (hasPussy()) {ActionList.push("pussyFuck.get")};
		if (Gender !== "female") {ActionList.push("analFuck.get")};
		if (Gender == "female") {ActionList.push("eatPussy.give","pussyFuck.give","analFuck.give")};
		if (Gender == "female") {ActionList.push("eatPussy.give")} else {ActionList.push("suckCock.give")};
		if (Personality == "shy" && Gender !== "female") {ActionList.push("analFuck.give")};
	} else {
		if (Gender !== "female") {ActionList.push("analFuck.get","pussyFuck.get")};
		if (Gender == "female") {ActionList.push("eatPussy.give")} else {ActionList.push("suckCock.give")};
	};
	var Action = ActionList[Math.floor(Math.random()*ActionList.length)]

	// Get possible client finishes
	if (Action == "suckCock.give" || Action == "eatPussy.give" || Action == "titfuck.give") {
		FinishList.push("cumEat.get","cumBody.get");
	} else if (Action == "suckCock.get" || Action == "eatPussy.get") {
		FinishList.push("cumEat.give","cumBody.give");
	} else if (Action == "pussyFuck.get" || Action == "analFuck.get") {
		if (Gender == "female") {
			FinishList.push("cumBody.get");
		} else {
			FinishList.push("cumBody.get","creampie.get");
		};
	} else if (Action == "pussyFuck.give" || Action == "analFuck.give") {
		FinishList.push("cumBody.give","creampie.give");
	};
	var Finish = FinishList[Math.floor(Math.random()*FinishList.length)]

	// Init Client Object
	var c = State.variables.client;

	// Define Client
	c.name = "Client";
	c.style = "sister";
	c.pic = Gender + "-" + Personality;
	c.portrait = "Client-" + Gender + "-" + Personality;
	c.gender = Gender;
	c.personality = Personality;
	c.basePay = Pay;
	c.wantedStart = Start;
	c.wantedAction = Action;
	c.wantedFinish = Finish;
	c.desc = [];
	c.descCounter = 0;
	c.isSimple = true;
};

//#endregion
//#region - IMAGE PACK IMPORTS

// Image Import Block
importScripts('data/img/imgCheck.js');
importScripts('data/img/imgPenny.js');
importScripts('data/img/imgDiana.js');
importScripts('data/img/imgTasha.js');
importScripts('data/img/imgTashaPussy.js');
importScripts('data/img/imgLauren.js');
importScripts('data/img/imgLisa.js');
importScripts('data/img/imgJulia.js');
importScripts('data/img/imgSophie.js');
importScripts('data/img/imgJohn.js');
importScripts('data/img/imgChanel.js');
importScripts('data/img/imgAva.js');
importScripts('data/img/imgDakota.js');
importScripts('data/img/imgEscorting.js');
importScripts('data/img/imgEvents.js');
importScripts('data/img/imgNPC.js');
importScripts('data/img/imgKagney.js');
importScripts('data/img/imgElsa.js');
importScripts('data/img/imgActions.js');
importScripts('data/img/imgPitSlaves.js');
importScripts('data/img/imgPlayerBimbo.js');
importScripts('data/img/imgPlayerFemale.js');
importScripts('data/img/imgPlayerMale.js');
importScripts('data/img/imgPlayerSissy.js');
importScripts('data/img/imgPlayerTrans.js');
importScripts('data/img/imgPlayerTransDom.js');

//#endregion
//#region - PREFERENCES AND TRAIT FUNCTIONS

window.pref = function (actor, action, val) {
	var act = action.split(".")[0];
	var direction = action.split(".")[1];

	if (actor) {
		prefValidate(actor, act, direction);
		if (val === undefined) {
			val = 50;
		};
		if (actor.pref[act][direction] >= val) {
			return true;
		};
	} else {
		return undefined;
	};
};
window.prefEdit = function (actor, action, val) {
	var act = action.split(".")[0];
	var direction = action.split(".")[1];

	if (actor) {
		prefValidate(actor, act, direction);
		if (val === undefined) {
			val = 1;
		};
		actor.pref[act][direction] = (actor.pref[act][direction] + val).clamp(0, 100);
	} else {
		return undefined;
	};
};
window.prefValidate = function (actor, act, direction, val=50) {
	if (actor) {
		if (!actor.pref) {
			actor.pref = {}
		};
		if (!actor.pref[act]) {
			actor.pref[act] = {}
		};
		if (!actor.pref[act][direction]) {
			actor.pref[act][direction] = val
		};
	} else {
		return undefined;
	};
};

window.prefChoose = function (actor, options, codex, usePrefix) {
	if (!options) {options = setup.DEFAULTACTIONS};
	if (!codex) {
		codex = setup.DEFAULTCODEX;
	} else {
		switch (codex) {
			case "a1":
				codex = setup.ACTIONSTIER1;
				break;
			case "a2":
				codex = setup.ACTIONSTIER2;
				break;
			case "a3":
				codex = setup.ACTIONSTIER3;
				break;
		};
	};
	if (usePrefix) {
		if (!actor.scenePrefix) {
			var prefix = "sex" + actor.name + "-";
		} else {
			var prefix = actor.scenePrefix;
		};
	} else {
		var prefix = "";
	};

	var maxAction = -1,
		action = "";
	var act, dir, id, strVal;
	for (id = 0; id < codex.length; id++) {
		if (codex[id]) {
			act = codex[id][0];
			dir = codex[id][1];
			strVal = act + "." + dir;
			prefValidate(actor, act, dir);
			if (actor.pref[act][dir] > maxAction) {
				if (options.includes(strVal)) {
					action = prefix + strVal;
					maxAction = actor.pref[act][dir];
				};
			};
		};
	};

	return action;
};

window.prefPool = function (actor,level,options,codex) {
	// prefPool - Generates an array of actions based on a baseline preference, then returns one at random.
	// Used to return a single action that a character likes, loves, hates, etc.
	// Ex. _action = prefPool($penny,$LOVE) will return a single action that Penny loves from the default codex

	// If no baseline level is defined, default to LIKE
	if (!level) {level = State.variables.LIKE};

	// If no options were defined, attempt to use the actor's defined actions array. If no actions array is defined, use the DEFAULTACTIONS array
	if (!options) {
		if (actor.actions === undefined) {
			options = setup.DEFAULTACTIONS;
		} else {
			options = actor.actions;
		}
	};

	// If no codex is defined, use the DEFAULTCODEX array
	if (!codex) {codex = setup.DEFAULTCODEX};

	// If the actor doesn't have a scene prefix defined, create one as 'sexActorName-'
	if (!actor.scenePrefix) {
		var prefix = "sex" + actor.name + "-";
	} else {
		var prefix = actor.scenePrefix;
	};

	// Define local variables for function
	var actionPool = [];
	var act, dir, id, strVal;

	// Check through options and remove any invalid actions based on player state
	if (hasPussy() == false) {
		options = options.filter(function(e) { return e !== 'eatPussy.give' && e !== 'pussyFuck.give' });
	};
	if (canFuck() == false) {
		options = options.filter(function(e) { return e !== 'analFuck.get' && e !== 'pussyFuck.get' && e !== 'titFuck.give' && e !== 'suckCock.give' });
	};

	// Loop until at least one entry has been added to the actionPool array
	while (actionPool.length < 1) {

		// Run through all possible actions and add them to the actionPool array if preference is above baseline
		for (id = 0; id < codex.length; id++) {
			if (codex[id]) {
				// Splice the codex entry. This feels dumb and I need to go through and see if there's a good reason I did it this way
				act = codex[id][0];
				dir = codex[id][1];
				strVal = act + "." + dir;
				prefValidate(actor, act, dir);
				// If the actor's preference is equal to or greater than the baseline, attempt to add it to the array
				if (actor.pref[act][dir] >= level) {
					// Before adding to the array, confirm it's a valid action for the actor to take by checking against the option array
					if (options.includes(strVal)) {
						// If it is, add the prefix to the string value, then push the result to the action pool array
						var newAction = prefix + strVal;
						actionPool.push(newAction);
						// Add a second entry for an action if the actor LOVES it
						if (actor.pref[act][dir] >= State.variables.LOVE) {actionPool.push(newAction)};
					};
				};
			};
		};

		// If after the above FOR loop, no actions have been added to the actionPool array, lower the
		// baseline preference by 10 points. If the level is already 0, break.
		if (actionPool.length < 1) {
			if (level <= 0) {
				break;
			} else {
				level -= 10;
			};
		};
	};

	// Return a random value from the action pool or default to error screen if no actions found
	if (actionPool.length > 0) {
		return actionPool.random();
	} else {
		return 'sexError';
	};
};

window.prefValue = function (pref) {
	if (pref) {
		return pref;
	} else {
		return 0;
	};
};

window.updateArousal = function (actor, action, returnVal) {
	if (returnVal === undefined) {
		returnVal = false;
	};
	var act = action.split(".")[0];
	var direction = action.split(".")[1];
	var mod, pref, total, totalVal;
	if (actor) {
		prefValidate(actor, act, direction, 1);
		pref = Math.floor((actor.pref[act][direction]) / 10).clamp(1, 10);
		mod = (actor.CurOP * 0.1).clamp(0.5, 1.5);
		totalVal = (pref * mod).clamp(0, 15);
		if (returnVal == true) {
			return totalVal;
		} else {
			actor.CurOP += totalVal;
			actor.CurOP = Math.floor(actor.CurOP.clamp(0, 100));
		};
	};
};

//#endregion
//#region - TRACKING FUNCTIONS

window.tracked = function (actor, action, times) {
	// Tracks an action, returning true if the action's value is equal or greater than defined times. If times is not defined, default 1
	if (times === undefined) {times = 1};

	if (actor) {
		// Define tracking property if not defined
		if (!actor.tracking) {
			actor.tracking = {};
		};

		if (action) {
			// Remove dot naming
			action = action.replace(".","");
			action = action.replace("get","Get");
			action = action.replace("give","Give");
			if (actor.tracking[action]) {
				return (actor.tracking[action] >= times);
			} else {
				actor.tracking[action] = 0;
				return false;
			};
		} else {
			return false;
		};
	} else {
		return false;
	};
};

window.trackAction = function (action, actor) {
	// Simplify player tracking
	var player = State.variables.player;
	// Remove dot naming and assures correct casing
	// Ex: suckCock.get will convert to suckCockGet
	var act = action.replace(".","");
	act = act.replace("get","Get");
	act = act.replace("give","Give");

	// Player stat tracking
	if (player.tracking[act]) {
		player.tracking[act] += 1;
		prefEdit(player,action,1);
		if (ActionCodex.play.includes(action)) {
			if (player.tracking.play) {player.tracking.play += 1} else {player.tracking.play = 1};
		};
		if (ActionCodex.oral.includes(action)) {
			if (player.tracking.oral) {player.tracking.oral += 1} else {player.tracking.oral = 1};
		};
		if (ActionCodex.sex.includes(action)) {
			if (player.tracking.sex) {player.tracking.sex += 1} else {player.tracking.sex = 1};
		};
	} else {
		if (ActionCodex.base.includes(action)) {
			player.tracking[act] = 1;
			prefEdit(player,action,1);
		};
	};

	// Actor stat tracking if a target actor is included in the macro
	// Ex: <<trackAction "suckCock.give" $john>>
	if (actor) {
		// Create tracking property if none exists
		if (!actor.tracking) {actor.tracking = {}};

		// Flip get/give string after performing same string conversions as above
		// Ex: suckCock.give will convert to suckCockGet
		var actorAct = action.replace(".","");
		actorAct = actorAct.replace("get","Get");
		actorAct = actorAct.replace("give","Give");
		if (actorAct.contains("Get")) {
			actorAct = actorAct.replace("Get","Give");
		} else {
			actorAct = actorAct.replace("Give","Get");
		};

		if (actor.tracking[actorAct]) {
			// Increase explicit tracking stat
			actor.tracking[actorAct] += 1;
			prefEdit(actor,action,2);

			// Check for general tracking parameters and define/increase those where appropriate
			if (ActionCodex.play.includes(action)) {
				if (actor.tracking.play) {actor.tracking.play += 1} else {actor.tracking.play = 1};
			};
			if (ActionCodex.oral.includes(action)) {
				if (actor.tracking.oral) {actor.tracking.oral += 1} else {actor.tracking.oral = 1};
			};
			if (ActionCodex.sex.includes(action)) {
				if (actor.tracking.sex) {actor.tracking.sex += 1} else {actor.tracking.sex = 1};
			};
			// Check for gender-based sex tracking unless the sexTracking temp variable is currently active
			if (State.temporary.sexTracking === undefined) {
				if (actor.id == "mom" || actor.id == "sister") {
					if (player.tracking.sexFamily) {player.tracking.sexFamily += 1} else {player.tracking.sexFamily = 1};
				};
				if (actor.isMale) {
					if (player.tracking.sexMen) {player.tracking.sexMen += 1} else {player.tracking.sexMen = 1};
				};
				if (actor.isFemale) {
					if (player.tracking.sexWomen) {player.tracking.sexWomen += 1} else {player.tracking.sexWomen = 1};
				};
				if (actor.isTrans) {
					if (player.tracking.sexTrans) {player.tracking.sexTrans += 1} else {player.tracking.sexTrans = 1};
				};
			};
		} else {
			if (ActionCodex.base.includes(action)) {
				actor.tracking[actorAct] = 1;
				prefEdit(actor,action,2);
			};
		};
	};
};

// Shorthand function returning true if player is having or has had sex with actor
window.fucking = function (actor) {
	return (actor?.dosed?.sex ||
			actor?.tracking?.oral > 0 ||
			actor?.tracking?.sex > 0);
}

// Shorthand function returning true if actor is okay with incest
window.incest = function (actor) {
	return (actor?.dosed?.love ||
			actor?.dosed?.sex);
}

window.skill = function (actor = getChar(), act, lvl = 1) {
	// Returns a skill value as a string based on tracking data
	var tier = 1;
	if (tracked(actor,act,20)) {
		tier = 5;
	} else if (tracked(actor,act,13)) {
		tier = 4;
	} else if (tracked(actor,act,7)) {
		tier = 3;
	} else if (tracked(actor,act,3)) {
		tier = 2;
	} else {
		tier = 1;
	};
	return (tier >= lvl);
};

// Function to set a new flag assigned to an actor
// Ex. <<run setFlag($player,"MetPenny")>>
window.setFlag = (actor,flag,state) => {
	if (actor) {
		if (!actor.flag) {actor.flag = {}};
		flag = flag.toLowerCase();
		actor.flag[flag] = state;
	};
};

// Return whether or not a flag assigned to an actor is set to true
// Ex. <<if flag($player,"MetPenny")>>
window.flag = function (actor,flag) {
	if (actor) {
		flag = flag.toLowerCase();
		if (flag) {
			if (!actor.flag) {actor.flag = {}};
			if (actor.flag[flag] == true) {
				return true;
			};
		};
	};
};

window.serumStatus = function (actor) {
	// Check for actor validity before proceeding
	if (actor) {
		// If the actor doesn't have nextSerum and doseCD defined as properties, define them
		if (actor.nextSerum === undefined) {actor.nextSerum = 1};
		if (actor.doseCD === undefined) {actor.doseCD = 0};

		// Return a state to be used in <<switch>> statement in dose scene
		if (actor.nextSerum === 0) {
			return 'max dose';
		} else if (actor.doseCD > 0) {
			return 'on cooldown';
		} else if (actor.nextSerum !== 0) {
			if (State.variables.serum[actor.nextSerum].qty > 0) {
				return 'can dose';
			} else {
				return 'no serum';
			};
		} else {
			return 'error - invalid serum state';
		};
	} else {
		return 'error - invalid actor';
	};
};

window.ramCoinsPhase = function (phase) {
	let player = variables().player;

	switch (phase) {
		case 1:
			return (
				flag(player,"FindCoin")
			);
		case 2:
			return (
				flag(player,"GameCoin") &&
				flag(player,"SlackOffCoin")
			);
		case 3:
			return (
				flag(player,"KitchenCoin") &&
				flag(player,"DianaCommonsCoin") &&
				flag(player,"SisterDateCoin")
			);
		case 4:
			return (
				flag(player,"CommonsCoin") &&
				flag(player,"PitBuyCoin") &&
				flag(player,"BirthControlCoin") &&
				flag(player,"AdultStoreCoin")
			);
		case 5:
			return (
				flag(player,"VanityCoin") &&
				flag(player,"BathroomCoin") &&
				flag(player,"ChrisCoin") &&
				flag(player,"EscortCoin") &&
				flag(player,"SophieCoin")
			);
	};

	return false;
};

//#endregion
//#region - TRANSFORMATION FUNCTIONS
	// Checks to see if player is being feminized based on various factors
	window.isFemme = () => {
		return (
			variables().sophie.flag?.feminizing == true
			);
	};

	window.triggerMaleTF = (player=getPlayer()) => {
		return (
			!isMale() && 
			player.genderv < (-20) && 
			!player.isPregnant &&
			player.tfMale >= variables().TFMilestone &&
			!player.isBride
		);
	};

	window.rangeMaleTF = (player=getPlayer()) => {
		if (variables().TFMode == 'classic') {
			return (
				!isMale() &&
				player.genderv < (-16)
			);
		} else {
			return (
				!isMale() &&
				player.genderv < (-16)
			);
		};
	};

	window.triggerFemaleTF = (player=getPlayer()) => {
		return (
			!isFemale() && 
			player.genderv > 20 &&
			player.tfFemale >= variables().TFMilestone
		);
	};

	window.rangeFemaleTF = (player=getPlayer()) => {
		if (variables().TFMode == 'classic') {
			return (
				!isFemale() && 
				player.genderv > 16
			);
		} else {
			return (
				!isFemale() &&
				player.genderv > 16
			);
		};
	};

	window.triggerTransTF = (player=getPlayer()) => {
		if (variables().TFMode == 'classic') {
			return (
				((player.genderv >= 0 && isMale()) || (player.genderv <= 0 && isFemale() && !player.isBride)) && 
				!isTrans() && 
				!player.isPregnant &&
				player.tfTrans >= variables().TFMilestone
			);
		} else {
			return (
				((player.genderv >= 0 && isMale()) || (player.genderv <= 0 && isFemale() && !player.isBride)) && 
				!isTrans() && 
				!player.isPregnant && 
				player.identity == 'trans' &&
				player.tfTrans >= variables().TFMilestone
			);
		};
	};

	window.rangeTransTF = (player=getPlayer()) => {
		if (variables().TFMode == 'classic') {
			return (
				!isTrans() &&
				((player.genderv >= (-10) && isMale()) || (player.genderv <= 10 && isFemale()))
			);
		} else {
			return (
				!isTrans() &&
				((player.genderv >= 0 && isMale()) || (player.genderv <= 0 && isFemale()))
			);
		};
	};

	window.triggerTransDomTF = (player=getPlayer()) => {
		return (
			isTrans() &&
			!isSissy() &&
			!isBimbo() &&
			!player.isTransDom &&
			bSize(50) &&
			pSize(50)
		);
	};

	window.triggerSissyTF = (player=getPlayer()) => {
		if (variables().TFMode == 'classic') {
			return (
				!isSissy() &&
				hasPenis() &&
				dressed('girly') &&
				player.dom <= 20 &&
				player.tfSissy >= variables().TFMilestone
			);
		} else {
			return (
				!isSissy() &&
				hasPenis() &&
				dressed('girly') &&
				makeup() &&
				!pSize(M) &&
				player.dom <= 20 &&
				player.tfSissy >= variables().TFMilestone
			);
		};
	};

	window.rangeSissyTF = (player=getPlayer()) => {
		if (variables().TFMode == 'classic') {
			return (
				hasPenis() &&
				player.dom <= 20
			);
		} else {
			return (
				hasPenis() &&
				dressed('girly') &&
				makeup() &&
				!pSize(M) &&
				player.dom <= 20
			);
		};
	};

	window.triggerBimboTF = (player=getPlayer()) => {
		if (variables().TFMode == 'classic') {
			return (
				!isBimbo() &&
				!hasPenis() &&
				player.horny >= 90 &&
				player.tfBimbo >= variables().TFMilestone
			);
		} else {
			return (
				!isBimbo() &&
				!hasPenis() &&
				dressed('slutty') &&
				makeup(2) &&
				bSize(L) &&
				player.horny >= 90 &&
				player.tfBimbo >= variables().TFMilestone
			);
		};
	};

	window.rangeBimboTF = (player=getPlayer()) => {
		if (variables().TFMode == 'classic') {
			return (
				!hasPenis() &&
				player.horny >= 90
			);
		} else {
			return (
				!hasPenis() &&
				dressed('slutty') &&
				makeup(2) &&
				bSize(L) &&
				player.horny >= 90
			);
		};
	};

	window.cancelTransDomTF = (player=getPlayer()) => {
		return (
			player.isTransDom &&
			player.breastSize <= 40 &&
			player.penisSize <= 40
		);
	};

	window.cancelSissyTF = (player=getPlayer()) => {
		return (
			isSissy() &&
			dressed('manly') &&
			!isChastity() &&
			player.dom >= 50 &&
			player.tfSissy <= 0
		);
	};

	window.cancelBimboTF = (player=getPlayer()) => {
		return (
			isBimbo() &&
			!dressed('slutty') &&
			player.makeup < 2 &&
			player.horny < 40 &&
			player.tfBimbo <= 0
		);
	};

//#endregion
//#region - RESET FUNCTIONS

window.newDayResets = function () {
	for (let i = 0; i < Characters.length; i++) {
		let char = variables()[Characters[i]];
		if (char.hasGreeted) {char.hasGreeted = false};
	};
};

// One time function to convert all game flags to lowercase strings
window.flagsToLowerCase = () => {
	for (let i = 0; i < Characters.length; i++) {
		var char = variables()[Characters[i]];
		if (char.flag) {
			var lFlags = Object.keys(char.flag);
			for (let f = 0; f < lFlags.length; f++) {
				var cFlag = lFlags[f];
				if (char.flag[cFlag] !== undefined) {
					var nFlag = cFlag.toLowerCase();
					char.flag[nFlag] = char.flag[cFlag];
					delete char.flag[cFlag];
				};
			};
		};
	};
};

//#endregion
//#region - TIME MANAGEMENT

	// Used to set the currect time to a specific time.
	//  Usage:
	//      <<set setTime('night')>> or <<run setTime('n')>>
	//      • Sets the time to Night
	//      • Use the times object for keys
	// --------------------------------------------------->
	window.setTime = function(t) {
		var time = variables().time;
		if (TimesAbbr[t]) {
			time.cTime = TimesAbbr[t];
		};
	};

	// Verifies current time matches t or 'any' and returns if so. Used for checking times within other functions
	// USE:	<<if isMonday('night')>>...if (verifyTime('night')) returns true if it's night
	window.verifyTime = function(t) {
		var time = variables().time;
		if (TimesAbbr[t] || t == 'any') {
			return (time.cTime == TimesAbbr[t] || t == 'any');
		};
	}

//#endregion
//#region - MEMORY FUNCTIONS

	// Commit attributes into longterm memory to recall if there was ever a match. RecallMemory checks against all longterm memories
	window.commitMemory = function (actor,value) {
		if (actor) {
			if (actor.memories === undefined) {actor.memories = []};
			if (!actor.memories.includes(value)) {actor.memories.push(value)};
		};
	};
	window.recallMemory = function (actor,value) {
		return (actor.memories !== undefined && actor.memories.includes(value));
	};

	// Recall function to check memories. Typically used for outfits, makeup, and gender
	// Ex:	<<if recallBreasts($john,$LARGE)>>
	//			- Returns true if John remembers the player having Large breasts
	window.recallBreasts = function (actor,value) {if (actor) {return (actor.rBreasts !== undefined && (actor.rBreasts === value || value === undefined))}};
	window.recallPenis = function (actor,value) {if (actor) {return (actor.rPenis !== undefined && (actor.rPenis === value || value === undefined))}};
	window.recallPussy = function (actor,value) {if (actor) {return (actor.rPussy !== undefined && (actor.rPussy === value || value === undefined))}};
	window.recallAss = function (actor,value) {if (actor) {return (actor.rAss !== undefined && (actor.rAss === value || value === undefined))}};
	window.recallOutfit = function (actor,value) {if (actor) {return (actor.rOutfit !== undefined && (actor.rOutfit === value || value === undefined))}};
	window.recallHair = function (actor,value) {if (actor) {return (actor.rHair !== undefined && (actor.rHair === value || value === undefined))}};
	window.recallMakeup = function (actor,value) {if (actor) {return (actor.rMakeup !== undefined && (actor.rMakeup === value || value === undefined))}};
	window.recallGender = function (actor,value) {if (actor) {return (actor.rGender !== undefined && (actor.rGender === value || value === undefined))}};
	window.recallChastity = function (actor) {if (actor) {return (actor.rChastity)}};

	// Memory functions to remember different articles
	window.rBreasts = function (actor,value = bTier()) {
		if (actor) {
			actor.rBreasts = value;
			if (hasBreasts()) {commitMemory(actor,'breasts')};
		};
	};
	window.rPenis = function (actor,value = pTier()) {
		if (actor) {
			actor.rPenis = value;
			if (hasPenis()) {commitMemory(actor,'penis')};
		};
	};
	window.rPussy = function (actor,value = vTier()) {
		if (actor) {
			actor.rPussy = value;
			if (hasPussy()) {commitMemory(actor,'pussy')};
		};
	};
	window.rAss = function (actor,value = aTier()) {
		if (actor) {
			actor.rAss = value;
			commitMemory(actor,'ass');
		};
	};
	window.rOutfit = function (actor,value = getPrimaryOutfit()) {
		if (actor) {actor.rOutfit = value};
	};
	window.rHair = function (actor,value = getHair()) {
		if (actor) {actor.rHair = value};
	};
	window.rMakeup = function (actor,value = getMakeup()) {
		if (actor) {actor.rMakeup = value};
	};
	window.rGender = function (actor,value = getPrimaryGender()) {
		if (actor) {
			actor.rGender = value;
			if (value) {commitMemory(actor,'gender')};
		};
	};
	window.rChastity = function (actor,value = isChastity()) {
		if (actor) {actor.rChastity = value};
	};

	// Memory functions to establish a baseline memory of a player based on outward appearances
	window.commitInitialMemory = function (actor) {
		if (actor !== undefined) {
			rBreasts(actor);
			rOutfit(actor);
			rHair(actor);
			rMakeup(actor);
			rGender(actor);
			rPussy(actor);
			if (isMale) {rPenis(actor)};
		};
	};

	// Memory functions to compare current traits to memorized ones
	window.breastsAreBigger = function (actor) {return (actor && actor.rBreasts !== undefined && bTier() > actor.rBreasts)};
	window.breastsAreSmaller = function (actor) {return (actor && actor.rBreasts !== undefined && bTier() < actor.rBreasts)};
	window.breastsAreNew = function (actor) {return (actor && !recallMemory(actor,'breasts'))};
	window.breastsAreBack = function (actor) {return (actor && recallMemory(actor,'breasts') && actor.rBreasts === 0)};
	window.breastsAreGone = function (actor) {return (actor && actor.rBreasts > 0 && bTier() === 0)};
	window.penisIsBigger = function (actor) {return (actor && hasPenis(actor) && actor.rPenis !== undefined && pTier() > actor.rPenis)};
	window.penisIsSmaller = function (actor) {return (actor && hasPenis(actor) && actor.rPenis !== undefined && pTier() < actor.rPenis)};
	window.penisIsNew = function (actor) {return (actor && hasPenis(actor) && !recallMemory(actor,'penis'))};
	window.penisIsBack = function (actor) {return (actor && hasPenis(actor) && recallMemory(actor,'penis') && actor.rPenis === 0)};
	window.penisIsGone = function (actor) {return (actor && !hasPenis(actor) && actor.rPenis > 0 && pTier() === 0)};
	window.pussyIsBigger = function (actor) {return (actor && actor.rPussy !== undefined && vTier() > actor.rPussy)};
	window.pussyIsSmaller = function (actor) {return (actor && actor.rPussy !== undefined && vTier() < actor.rPussy)};
	window.pussyIsNew = function (actor) {return (actor && !recallMemory(actor,'pussy'))};
	window.pussyIsBack = function (actor) {return (actor && recallMemory(actor,'pussy') && actor.rPussy === 0)};
	window.pussyIsGone = function (actor) {return (actor && actor.rPussy > 0 && pTier() === 0)};
	window.assIsBigger = function (actor) {return (actor && actor.rAss !== undefined && aTier() > actor.rAss)};
	window.assIsSmaller = function (actor) {return (actor && actor.rAss !== undefined && aTier() < actor.rAss)};
	window.hairIsLonger = function (actor) {return (actor && actor.rHair !== undefined && getHair() > actor.rHair)};
	window.hairIsShorter = function (actor) {return (actor && actor.rHair !== undefined && getHair() < actor.rHair)};

	// Memory functions to determine if something is worth noticing

	// Returns true if there's something new or different about the player's penis
	window.noticePenis = function (actor) {
		var player = getChar();
		if (actor) {
			if (penisIsNew(player) || penisIsSmaller(player) || penisIsBack(player) || penisIsBigger(player) || pussyIsGone(player)) {
				return true;
			} else if (hasPenis() && !isMale() && !recallMemory(actor, 'penis')) {
				return true;
			} else {
				return false;
			};
		};
	};
	
	// Returns true if there's something VISIBLY different about the player's vagina
	window.noticePussy = function (actor) {
		var player = getChar();
		if (actor) {
			if (pussyIsNew(player) || pussyIsBack(player) || penisIsGone(player)) {
				return true;
			} else if (hasPussy() && !isFemale() && !recallMemory(actor, 'pussy')) {
				return true;
			} else {
				return false;
			};
		};
	};
	
	// Returns true if there's something noticeably different when the actor is inside the player's vagina
	window.noticePussyInside = function (actor) {
		var player = getChar();
		if (actor) {
			if (pussyIsSmaller(player) || pussyIsBigger(player)) {
				return true;
			} else {
				return false;
			};
		};
	};
	
	// Returns true if there's something noticeably different when the actor is inside the player's ass
	window.noticeAss = function (actor) {
		var player = getChar();
		if (actor) {
			if (assIsSmaller(player) || assIsBigger(player)) {
				return true;
			} else {
				return false;
			};
		};
	};

	// Returns true if there's something new or different about the player's breasts
	window.noticeBreasts = function (actor) {
		var player = getChar();
		if (actor) {
			if (breastsAreNew(player) || breastsAreSmaller(player) || breastsAreBack(player) || breastsAreBigger(player) || breastsAreGone(player)) {
				return true;
			} else if (hasBreasts() && !isMale() && !recallMemory(actor, 'penis')) {
				return true;
			} else {
				return false;
			};
		};
	};

//#endregion
//#region - OTHER FUNCTIONS

if (!setup.formatNumber) {
	setup.formatNumber = function (number) {
		return new Intl.NumberFormat().format(number);
	};
}
predisplay["Menu Return"] = function (taskName) {
	if (!tags().contains("noreturn")) {
		State.variables.return = passage();
	}
};

// Macro Definitions
macros.showVideo = {
	handler: function (place, macroName, params, parser) {
		if (params[2]) {
			setTimeout(function () {
				var i = document.getElementById(params[2]);
				i.setAttribute('src', 'pics/' + params[0] + '/' + params[1]);
				i.className = 'videoFrame';
				i.setAttribute('autoplay', true);
			}, 1);
		} else {
			new Wikifier(place, '<video src="' + params[0] + '" class="videoFrame" autoplay="true" loop="true" muted="true"></video>');
		}
	}
};

Save.onSave.add((save, details) => {
	var ch = variables().Chapter;
	if (variables().FreePlay) {ch = "Free Play"};
	if (ch === 0) {ch = "Prologue"};
	var title = ch + " - ";
	title += variables().time.day + ", ";
	title += variables().time.month + " " + variables().time.calendarDay;
	switch (details.type) {
		case 'autosave':
			save.title = title;
			break;
		case 'disk':
		case 'serialize':
			save.title = prompt('Name this save or use default:', title);
			break;
		default: /* slots */
			// save.title = 'Chapter ' + State.variables.chapter + ' bookmark';
			save.title = prompt('Name this save or use default:', title);
			break;
	}
});

Save.onLoad.add((save) => {
	if (save.version < 5.090000) {
		/* Invalidate save versions that are too old */
		throw new Error("The save you're attempting to load is too old and incompatible with the current game. Please download the latest version.");
	}
	/*
	if (save.version < 0.060403) {
		save.state.history.forEach(function (moment) {
			moment.variables.NewNotes = false;
			moment.variables.game.Version = "6.0.404";
			moment.variables.game.release = "Dev Build";
		});
		save.version = 0.060404;
	}
	if (save.version >= 3.996) {
		// Invalidates saves outside of legal scope
		throw new Error("The save you're attempting to load is no longer compatible with the current game. Please download the latest version of The Company, or start a new game.");
	}
	*/
});

Macro.add('ScrollTo', {
	skipArgs: false,
	handler: function () {
		if (this.args.length > 0) {
			var Value = this.args[0];
			if (typeof Value === "string" || Value instanceof String) {
				var element = null,
					params = undefined;
				if (this.args.length > 1) {
					params = this.args[1];
				}
				// wait for element
				var elementWaitID = setInterval(function () {
					element = document.getElementById(Value);
					if (element != null) {
						// stop waiting and set scroll position
						clearInterval(elementWaitID);
						if (params != undefined) {
							element.scrollIntoView(params);
						} else {
							element.scrollIntoView();
						}
					}
				}, 100);
			}
		}
	}
});

//#endregion