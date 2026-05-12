/* twine-user-script #2: "defineAchievements.js" */
variables().achievement = [];
variables().achievement[1] = {
	name: "Beginner Chemist",
	desc: "Congratulations on your first official serum created for The Company!",
	reward: true,
	rewardType: "serum",
	rewardText: "3x $serum[1].name",
	rewardQty: 3,
	rewardValue: 1,
	earned: false
	};
variables().achievement[2] = {
	name: "Intermediate Chemist",
	desc: "Your serums are getting more complicated, but the payoff is worth the effort!",
	reward: true,
	rewardType: "serum",
	rewardText: "3x $serum[2].name",
	rewardQty: 3,
	rewardValue: 2,
	earned: false
	};
variables().achievement[3] = {
	name: "Advanced Chemist",
	desc: "You've mastered the highest tier of mind control serums. Congratulations!",
	reward: true,
	rewardType: "serum",
	rewardText: "3x $serum[3].name",
	rewardQty: 3,
	rewardValue: 3,
	earned: false
	};
variables().achievement[4] = {
	name: "Bad Ender",
	desc: "It took a lot of time of effort, but you finally finished your first batch of the mysterious MCS-X serum! What ever are you planning on doing with it?",
	reward: true,
	rewardType: "money",
	rewardValue: 50000,
	rewardText: "$$50,000",
	earned: false
	};
variables().achievement[5] = {
	name: "Chapter One Completion",
	desc: "You completed Chapter 1 of the main story!",
	reward: true,
	rewardType: "wolf",
	rewardValue: 1,
	rewardText: "1x Wolf Coin",
	earned: false
	};
variables().achievement[6] = {
	name: "Chapter Two Completion",
	desc: "You completed Chapter 2 of the main story!",
	reward: true,
	rewardType: "wolf",
	rewardValue: 1,
	rewardText: "1x Wolf Coin",
	earned: false
	};
variables().achievement[7] = {
	name: "Commanding Serum",
	desc: "You really came through by crafting that CMD-1 before the deadline! $penny.name doesn't need to worry with a <<guy>> like you around.",
	reward: true,
	rewardType: "serum",
	rewardText: "10x $serum[1].name",
	rewardQty: 10,
	rewardValue: 1,
	earned: false
	};
variables().achievement[8] = {
	name: "Oedipus Complex",
	desc: "Time to start spending some quality time with $mom.name!",
	reward: true,
	rewardType: "hart",
	rewardValue: 1,
	rewardText: "1x Hart Coin",
	earned: false
	};
variables().achievement[9] = {
	name: "How Can My Little Sister Be This Cute?",
	desc: "Mind controlling your little <<sister>>? What kind of <<brother>> are you, anyway!?",
	reward: true,
	rewardType: "hart",
	rewardValue: 1,
	rewardText: "1x Hart Coin",
	earned: false
	};
variables().achievement[10] = {
	name: "Manic Pixie Dream Assistant",
	desc: "Your lab assistant? Seems a bit cliche, no?",
	reward: true,
	rewardType: "wolf",
	rewardValue: 1,
	rewardText: "1x Wolf Coin",
	earned: false
	};
variables().achievement[11] = {
	name: "Reigning In Tasha",
	desc: "Time to get those numbers up!",
	reward: true,
	rewardType: "wolf",
	rewardValue: 1,
	rewardText: "1x Wolf Coin",
	earned: false
	};
variables().achievement[12] = {
	name: "A Wonderful Woman",
	desc: "Careful you don't get tied up!",
	reward: true,
	rewardType: "wolf",
	rewardValue: 1,
	rewardText: "1x Wolf Coin",
	earned: false
	};
variables().achievement[13] = {
	name: "Johnny Be Good",
	desc: "He's really not a bad guy if you can look past... everything.",
	reward: true,
	rewardType: "wolf",
	rewardValue: 1,
	rewardText: "1x Wolf Coin",
	earned: false
	};
variables().achievement[14] = {
	name: "Johnny Be Bad",
	desc: "Uh-oh! How's that beer treating you?",
	reward: true,
	rewardType: "wolf",
	rewardValue: 1,
	rewardText: "1x Wolf Coin",
	earned: false
	};
variables().achievement[15] = {
	name: "Chapter Three Completion",
	desc: "You completed Chapter 3 of the main story!",
	reward: true,
	rewardType: "wolf",
	rewardValue: 1,
	rewardText: "1x Wolf Coin",
	earned: false
	};
variables().achievement[16] = {
	name: "Who Made That Man A Gunner?",
	desc: "I knew it! I'm surrounded by Assholes!",
	reward: true,
	rewardType: "ram",
	rewardValue: 1,
	rewardText: "1x Ram Coin",
	earned: false
	};
variables().achievement[17] = {
	name: "Cunning Linguist",
	desc: "Rug Munching and Cock Gobbling Extraordinaire!",
	reward: true,
	rewardType: "hart",
	rewardValue: 1,
	rewardText: "1x Hart Coin",
	earned: false
	};
variables().achievement[18] = {
	name: "Mouth of Myth",
	desc: "Your new life goal is to become that girl from Pigeon Blood",
	reward: true,
	rewardType: "ram",
	rewardValue: 1,
	rewardText: "1x Ram Coin",
	earned: false
	};
variables().achievement[19] = {
	name: "Committed Airhead",
	desc: "Like, fancy a shag? Tee-hee, see? I can speak British!",
	reward: true,
	rewardType: "ram",
	rewardValue: 1,
	rewardText: "1x Ram Coin",
	earned: false
	};
variables().achievement[20] = {
	name: "Masculine Mystique",
	desc: "You're a sucker for a hard cock and a harder chest!",
	reward: true,
	rewardType: "hart",
	rewardValue: 1,
	rewardText: "1x Hart Coin",
	earned: false
	};
variables().achievement[21] = {
	name: "Feminine Wiles",
	desc: "Soft skin, soft lips, soft pillowy chest... What could be better?",
	reward: true,
	rewardType: "wolf",
	rewardValue: 1,
	rewardText: "1x Wolf Coin",
	earned: false
	};
variables().achievement[22] = {
	name: "Best of Everything",
	desc: "The best girls come with a little extra!",
	reward: true,
	rewardType: "ram",
	rewardValue: 1,
	rewardText: "1x Ram Coin",
	earned: false
	};
variables().achievement[23] = {
	name: "Johnny Come Early",
	desc: "Or, wait, is that how it goes?",
	reward: true,
	rewardType: "ram",
	rewardValue: 1,
	rewardText: "1x Ram Coin",
	earned: false
	};
variables().achievement[24] = {
	name: "FICSIT Certified",
	desc: "Remember Employee #2085241, efficiency first!",
	reward: true,
	rewardType: "ram",
	rewardValue: 1,
	rewardText: "1x Ram Coin",
	earned: false
	};
variables().achievement[25] = {
	name: "400 Babies",
	desc: "You've tried strawberry, now try RAWBERRY!",
	reward: true,
	rewardType: "ram",
	rewardValue: 1,
	rewardText: "1x Ram Coin",
	earned: false
	};
variables().achievement[26] = {
	name: "Family First",
	desc: "Blood is thicker than water, but so is semen, so...",
	reward: true,
	rewardType: "hart",
	rewardValue: 1,
	rewardText: "1x Hart Coin",
	earned: false
	};
variables().achievement[27] = {
	name: "Wild Horses",
	desc: "Helped Jag skip town",
	reward: true,
	rewardType: "ram",
	rewardValue: 1,
	rewardText: "1x Ram Coin",
	earned: false
	};
variables().achievement[28] = {
	name: "Gimme Shelter",
	desc: "Helped get Jag's stalkers off his back",
	reward: true,
	rewardType: "ram",
	rewardValue: 1,
	rewardText: "1x Ram Coin",
	earned: false
	};
variables().achievement[29] = {
	name: "Paint it Black",
	desc: "Turned Jag into a Pit Slave, you monster",
	reward: true,
	rewardType: "ram",
	rewardValue: 1,
	rewardText: "1x Ram Coin",
	earned: false
	};
variables().achievement[30] = {
	name: "Sympathy For The Devil",
	desc: "Failed to help Jag",
	reward: true,
	rewardType: "ram",
	rewardValue: 1,
	rewardText: "1x Ram Coin",
	earned: false
	};