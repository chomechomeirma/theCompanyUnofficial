/* twine-user-script #53: "defineThePit.js" */
// Initialises the variables for the Pit
variables().PitSlots = 0;
variables().MaxPitSlots = 3;
variables().MaxSlaveXP = 5;
variables().MaxSlaveLevel = 3;
variables().TrainingPoints = 2;
variables().MaxTrainingPoints = 2;
variables().PitLevel = 1;
variables().PitMaxLevel = 6;
variables().PitXP = 0;
variables().PitXPMod = 0;
variables().PitXPReq = [0,10,20,30,40,50,60,70,80,90,100];
variables().PitSEXMod = 0;
variables().PitWLPMod = 0;
variables().PitLTYMod = 0;
variables().PitValueMod = 100;  // Value increases at 1 * PitValueMod
variables().WeeklySlavePay = 0;
variables().WeeklySlavePayMod = 0.2;

// Variables for cube slave functionality
variables().cubeSlaves = {};

// Variables for purchasing slaves
variables().PitSlaveGenders = ["female","female"];
variables().PitSlaveCost = 30000;
variables().BoughtSlave = false;

// Variables and functions for the daily slave purchase option
variables().PitDailySlaveGender = "female";
variables().PitDailySlaveName = "Anna";
variables().PitDailySlaveAge = "";
variables().PitDailySlaveHairColor = "";
variables().PitDailySlaveHairLength = Math.floor(Math.random() * 5) + 1;
variables().PitDailySlaveBreastSize = Math.floor(Math.random() * 5) + 1;
variables().PitDailySlavePenisSize = Math.floor(Math.random() * 5) + 1;
variables().PitDailySlaveBallSize = Math.floor(Math.random() * 5) + 1;
variables().PitDailySlaveDescriptionMale = "";
variables().PitDailySlaveDescriptionFemale = "";

variables().thepit = {img:[]} // Define thepit.img as an array
