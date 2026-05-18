/* twine-user-script #7: "defineLab.js" */
variables().mcsxCD = 3;
variables().matYield = 50;

variables().LabLevel = 0;
variables().LabMaxLevel = 10;
variables().LabUpgradeCost = 350;
variables().LabUpgradeCostIncrease = 150;
variables().YieldIncrease = 15;
variables().SerumYieldIncrease = 1;

setup.LabUpgrade = [
	"Install automatic pipet for small liquid transfers",
	"Install automatic glass ware cleaner and autoclave",
	"Install pressurized Nitrogen line",
	"Install high flow bench fume hoods",
	"Replace gas bunsen burners with ceramic heat plates with magnetic stirring base",
	"Install liquid chemical distribution system to work station",
	"Procure enclosed robotic work bench to handle health hazardous chemical",
	"Install syringe filling and pill creation work space",
	"Install stand-alone environmental controls for lab climate control",
	"Install high performance liquid chromatography with attached mass spectrometer"
	];

variables().chem=[];
variables().chem[0]={name: "Sodium Pentothal",qty: 0,note: "Opens user to subconscious suggestion"};
variables().chem[1]={name: "Flunitrazepam",qty: 0,note: "Impairs user's short term memory retention"};
variables().chem[2]={name: "Scopolamine", qty: 0,note: "Heavily sedates user"};
variables().chem[3]={name: "Testosterone", qty: 0,note: "Increases male hormone production"};
variables().chem[4]={name: "Estrogens", qty: 0,note: "Increases female hormone production"};
variables().chem[5]={name: "Diazepam", qty: 0,note: "Makes user compliant and easily influenced"};
variables().chem[6]={name: "Ketamine", qty: 0,note: "Inhibits user's cognitive facilities"};
variables().chem[7]={name: "Bremelanotide", qty: 0,note: "Induces increased and permanent arousal in user"};
variables().chem[8]={name: "Stabilized HGH", qty: 0,note: "Increases hormone production and physical aptitude"};

variables().serum=[];
variables().serum[1]={name: "MCS-1",qty: 0,cost: 150,cd: 2,unlocked: false,yield: 1,yieldIncreaseCost: 5000,mats: []};
variables().serum[1].mats=[0,1,2];
variables().serum[1].matsQty=[200,100,100];
variables().serum[1].unlockLevel=0;
variables().serum[1].unlockCost=0;

variables().serum[2]={name: "MCS-2",qty: 0,cost: 300,cd: 3,unlocked: false,yield: 1,yieldIncreaseCost: 10000,mats: []};
variables().serum[2].mats=[0,1,2];
variables().serum[2].matsQty=[300,200,200];
variables().serum[2].unlockLevel=1;
variables().serum[2].unlockCost=10000;

variables().serum[3]={name: "MCS-3",qty: 0,cost: 600,cd: 4,unlocked: false,yield: 1,yieldIncreaseCost: 20000,mats: []};
variables().serum[3].mats=[0,1,2];
variables().serum[3].matsQty=[500,400,400];
variables().serum[3].unlockLevel=3;
variables().serum[3].unlockCost=30000;

variables().serum[4]={name: "CMD-1",qty: 0,cost: 1200,cd: 1,unlocked: false,yield: 1,yieldIncreaseCost: 40000,mats: []};
variables().serum[4].mats=[0,1,2,5,6];
variables().serum[4].matsQty=[50,100,50,200,100];
variables().serum[4].unlockLevel=7;
variables().serum[4].unlockCost=40000;

variables().serum[5]={name: "BMB-1",qty: 0,cost: 1500,cd: 1,unlocked: false,yield: 1,yieldIncreaseCost: 35000,mats: []};
variables().serum[5].mats=[0,5,6,7];
variables().serum[5].matsQty=[100,100,200,250];
variables().serum[5].unlockLevel=5;
variables().serum[5].unlockCost=35000;

variables().serum[6]={name: "TFM-1",qty: 0,cost: 1750,cd: 1,unlocked: false,yield: 1,yieldIncreaseCost: 25000,mats: []};
variables().serum[6].mats=[2,3,4,7];
variables().serum[6].matsQty=[150,250,250,100];
variables().serum[6].unlockLevel=3;
variables().serum[6].unlockCost=40000;

variables().serum[7]={name: "MCS-X",qty: 0,cost: 2500,cd: 1,unlocked: false,yield: 1,yieldIncreaseCost: 100000,mats: []};
variables().serum[7].mats=[0,1,2,3,4,5,6,7];
variables().serum[7].matsQty=[300,300,300,300,300,300,300,300];
variables().serum[7].unlockLevel=9;
variables().serum[7].unlockCost=100000;

variables().serum[8]={name: "Stamina Increase I",qty: 0,cost: 2500,cd: 1,unlocked: false,yield: 1,yieldIncreaseCost: 100000,mats: []};
variables().serum[8].mats=[0,3,8];
variables().serum[8].matsQty=[100,50,200];

variables().serum[9]={name: "Stamina Increase II",qty: 0,cost: 2500,cd: 1,unlocked: false,yield: 1,yieldIncreaseCost: 100000,mats: []};
variables().serum[9].mats=[0,3,8];
variables().serum[9].matsQty=[200,250,500];

variables().serum[10]={name: "Genital Enhancement",qty: 0,cost: 2500,cd: 1,unlocked: false,yield: 1,yieldIncreaseCost: 100000,mats: []};
variables().serum[10].mats=[0,2,3];
variables().serum[10].matsQty=[50,150,250];

variables().serum[11]={name: "Genital Degenerator",qty: 0,cost: 2500,cd: 1,unlocked: false,yield: 1,yieldIncreaseCost: 100000,mats: []};
variables().serum[11].mats=[0,2,4];
variables().serum[11].matsQty=[50,150,250];

variables().serum[12]={name: "Breast Enhancement",qty: 0,cost: 2500,cd: 1,unlocked: false,yield: 1,yieldIncreaseCost: 100000,mats: []};
variables().serum[12].mats=[0,4,7];
variables().serum[12].matsQty=[50,200,200];

variables().serum[13]={name: "Breast Degenerator",qty: 0,cost: 2500,cd: 1,unlocked: false,yield: 1,yieldIncreaseCost: 100000,mats: []};
variables().serum[13].mats=[0,3,8];
variables().serum[13].matsQty=[50,200,200];

variables().serum[14]={name: "Follicle Infuser",qty: 0,cost: 2500,cd: 1,unlocked: false,yield: 1,yieldIncreaseCost: 100000,mats: []};
variables().serum[14].mats=[0,4,7];
variables().serum[14].matsQty=[75,75,75];

variables().serum[0]={name: "MCS-LULZ",qty: 0,cost: 999999,cd: 1,unlocked: false,yield: 99,yieldIncreaseCost: 999999999,mats: []};
variables().serum[0].mats=[0,1,2,3,4,5,6,7];
variables().serum[0].matsQty=[999,999,999,999,999,999,999,999];