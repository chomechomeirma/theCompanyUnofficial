/* twine-user-script #6: "defineGameVars.js" */
variables().Location = "Title Screen";
variables().Chapter = 0;
variables().DaysPlayed = 0;
variables().CH4 = {};
variables().Money = 100;
variables().Paycheck = 750;
variables().BirthControl = 0;
variables().getCaught = 0;
variables().getCaughtChance = 34;
variables().StatRate = 0.5;
variables().g = {};
variables().DailyCD = {};
variables().CONVO = [];
variables().CONVOR = 0;
variables().SisterRoom = [1,2];
variables().MomRoom = [1,2];
variables().CanTF = true;
variables().ForceTF = true;
variables().PauseTF = false;
variables().TFMode = "classic";
variables().TFMilestone = 5;
variables().PermanentTF = 15;
variables().ShowPlayerPortrait = true;
variables().UseDoseCD = false;
variables().ShowImages = false;
variables().UsePics = false;
variables().ShowWeather = true;
variables().NewNotes = false;
variables().DebugImages = false;
variables().FreePlay = false;

variables().MCSXUnlockDate = 20180201;

variables().pitSlaves = {};
variables().SlavePrice = 35000;
variables().PrefSlaveGender = "female";

variables().EventCD = 0;
variables().EventChance = 65; // Likelihood that a random event can trigger. eg; 65 = 65% chance

/*variables().ConvoCD = 0;
variables().HomeConvoPool = ["Mom","Sister"];
variables().WorkConvoPool = ["Sophie","Diana","Penny","John","Julia","Tasha"];*/

variables().HomeEvents = [0,1,3,4,13,16,17,21,22], variables().HomeEventsCD = [];
variables().WorkEvents = [0,1,2,15,17,18,19,20], variables().WorkEventsCD = [];
variables().DreamEvents = [1], variables().DreamEventsCD = [];
variables().NightEvents = [0], variables().NightEventsCD = [];
variables().HomeEventsUnlocked = [];
variables().WorkEventsUnlocked = [];
variables().DreamEventsUnlocked = [];
variables().NightEventsUnlocked = [];

variables().time = {day: "",time: "",month: "November",calendarDay: "",dayCount: 1,cTime: 4,cDay: 4,cMonth: 11,cYear: 2017};

variables().story = {ch1:{},ch2:{},ch3:{},ch4:{},ch5:{}};

setup.loveMilestone = [10,50,100,200]
setup.lustMilestone = [10,50,100,200]

variables().LoveIncreaseRate = 1;   // Default: 1
variables().LustIncreaseRate = 1;   // Default: 1
variables().MaxDailyLove = 2;       // Default: 2
variables().MaxDailyLust = 2;       // Default: 2

variables().cheats = {
    "debug": false,
    "bimbo": false,
    "sissy": false,
    "fastpass": false,
    "fastlove": false,
    "fastlust": false,
    "unlockserums": false,
    "materials": false,
    "money": false,
    "birthcontrol": false,
    "outfits": false,
    "chanel": false,
    "naked": false,
};

// Add default shop inventories here
variables().Coinshop = {
    wolf: ["penny-fireside"],
    ram: [],
    hart: ["dakota-sporty"]
};

// Shop unlocks for each character
setup.mom={
    shop:"hart",shopName:"hartShop",
    loveUnlocks:["ava-whiteTop","ava-greenTop","ava-outdoorsy","ava-polkadots"],
    lustUnlocks:["ava-leather","ava-office","ava-corset","ava-nekkid"]
};
setup.sister={
    shop:"hart",shopName:"hartShop",
    loveUnlocks:["dakota-sporty","dakota-dress","dakota-stripes","dakota-red"],
    lustUnlocks:["dakota-corset","dakota-gift","dakota-tie","dakota-nekkid"]
};
setup.elsa={
    shop:"hart"
};
setup.sophie={
    shop:"wolf",shopName:"wolfShop",
    loveUnlocks:["sophie-orange","sophie-green","sophie-teacher","sophie-jeans"],
    lustUnlocks:["sophie-bikini","sophie-fishnet","sophie-military","sophie-nekkid"]
};
setup.diana={
    shop:"wolf",shopName:"wolfShop",
    loveUnlocks:["diana-dress","diana-tied","diana-leopard","diana-fancy"],
    lustUnlocks:["diana-bikini","diana-sexyLeopard","diana-lowcut","diana-nekkid"]
};
setup.tasha={
    shop:"wolf",shopName:"wolfShop",
    loveUnlocks:["tasha-pearlBlouse","tasha-denimSkirt","tasha-dress","tasha-pinkShorts"],
    lustUnlocks:["tasha-schoolSkirt","tasha-summerBikini","tasha-whiteStockings","tasha-nekkid"]
};
setup.john={
    shop:"wolf",shopName:"wolfShop",
    loveUnlocks:["john-buttonTop","john-dress","john-glasses","john-sportsBra"],
    lustUnlocks:["john-laceSuit","john-officeLingerie","john-latexMaid","john-nekkid"]
};
setup.kagney={
    shop:"wolf"
};
setup.julia={
    shop:"wolf",shopName:"wolfShop",
    loveUnlocks:["julia-shirt","julia-blue","julia-office","julia-kitchen"],
    lustUnlocks:["julia-open","julia-lace","julia-pink","julia-nekkid"]
};
setup.penny={
    shop:"wolf",shopName:"wolfShop",
    loveUnlocks:["penny-fireside","penny-lowcut","penny-pencil","penny-stealth"],
    lustUnlocks:["penny-mermaid","penny-fishnet","penny-nurse","penny-nekkid"]
};
setup.lauren={
    shop:"wolf",shopName:"wolfShop",
    loveUnlocks:["","","",""],
    lustUnlocks:["","","",""]
};
setup.chris={
    shop:"ram",shopName:"ramShop",
    loveUnlocks:["","","",""],
    lustUnlocks:["","","",""]
};
setup.ash={
    shop:"ram",shopName:"ramShop",
    loveUnlocks:["","","",""],
    lustUnlocks:["","","",""]
};
setup.veruca={
    shop:"ram",shopName:"ramShop",
    loveUnlocks:["","","",""],
    lustUnlocks:["","","",""]
};
setup.lexi={
    shop:"ram",shopName:"ramShop",
    loveUnlocks:["","","",""],
    lustUnlocks:["","","",""]
};
setup.siri={
    shop:"ram",shopName:"ramShop",
    loveUnlocks:["","","",""],
    lustUnlocks:["","","",""]
};
setup.saya={
    shop:"ram",shopName:"ramShop",
    loveUnlocks:["","","",""],
    lustUnlocks:["","","",""]
};

setup.DEFAULTACTIONS = [
    "suckCock.give",
    "suckCock.get",
    "eatPussy.give",
    "eatPussy.get",
    "analFuck.give",
    "analFuck.get",
    "pussyFuck.give",
    "pussyFuck.get"
];
setup.DEFAULTCODEX = [
    ["kiss","give"],
    ["kiss","get"],
    ["suckCock","give"],
    ["suckCock","get"],
    ["eatPussy","give"],
    ["eatPussy","get"],
    ["analFuck","give"],
    ["analFuck","get"],
    ["analPlay","give"],
    ["analPlay","get"],
    ["pussyFuck","give"],
    ["pussyFuck","get"]
];
setup.ACTIONSTIER1 = [
    ["kiss","give"],
    ["kiss","get"],
    ["handjob","give"],
    ["handjob","get"]
];
setup.ACTIONSTIER2 = [
    ["suckCock","give"],
    ["suckCock","get"],
    ["eatPussy","give"],
    ["eatPussy","get"],
    ["analPlay","give"],
    ["analPlay","get"]
];
setup.ACTIONSTIER3 = [
    ["analFuck","give"],
    ["analFuck","get"],
    ["pussyFuck","give"],
    ["pussyFuck","get"]
];
setup.ACTIONSTIER3 = [
    ["cumInside","give"],
    ["cumInside","get"],
    ["cumOutside","give"],
    ["cumOutside","get"]
];