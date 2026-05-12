/* twine-user-script #50: "defineName.js" */
const maleSlaveNames = [
    "Jack","Paul","William","Daniel","Michael","David","Joseph","Andrew","Matthew","Thomas","Jason","Kevin","Mark","Richard","Steven","Brian","Jeffrey","Scott","Christopher","Robert","Charles","Kenneth","Anthony","Timothy","Donald","Gary","Ronald","Edward","Stephen","George","Terry","Peter","Larry","Gregory","Frank","Patrick","Raymond","Jerry","Roger","Douglas","Ryan","Walter","Samuel","Harry","Philip","Ralph","Keith","Phil","Albert","Billy","Bruce","Willie","Eugene","Lawrence","Gerald","Dennis","Joe","Chris","Roy","Adam","Wayne","Bobby","Victor","Benjamin","Carl","Johnny","Arthur","Henry","Jackie","Louis","Frederick","Randy","Leonard","Doug","Leroy","Marvin","Mike","Russell","Clarence","Ernest","Ronnie","Lee","Leon","Gene","Gilbert","Franklin","Tony","Jim","Lloyd","Curtis","Norman","Melvin","Allen","Stanley","Dean","Calvin"
];
  
const femaleSlaveNames = [
    "Vannessa","Ashley","Jennifer","Linda","Patricia","Jessica","Sarah","Karen","Nancy","Lisa","Betty","Susan","Margaret","Dorothy","Megan","Kimberly","Angela","Melissa","Amy","Tracy","Christina","Rebecca","Sharon","Michelle","Samantha","Heather","Stephanie","Cynthia","Kathleen","Deborah","Carol","Helen","Donna","Lori","Catherine","Amanda","Frances","Ann","Julie","Martha","Virginia","Kelly","Tina","Brenda","Paula","Ruth","Diane","Rachel","Victoria","Janet","Carolyn","Christine","Emma","Debra","Jacqueline","Alice","Lillian","Laura","Judith","Rose","Doris","Teresa","Gloria","Marilyn","Beverly","Andrea","Kathryn","Madison","Grace","Joyce","Sara","Julia","Maria","Sandra","Hannah","Nicole","Tiffany","Olivia","Vicki","Anna","Sophia","Evelyn","Natalie","Abigail","Brooklyn","Zoe","Charlotte","Chloe","Lily","Alyssa","Addison","Emily","Isabella","Mia","Elizabeth","Ella","Avery","Sofia"
];
  
window.getSlaveName = function (gender) {
    let selectedName;
    if (gender === "male") {
        selectedName = randomItem(maleSlaveNames);
        maleSlaveNames.splice(maleSlaveNames.indexOf(selectedName), 1);
    } else {
        selectedName = randomItem(femaleSlaveNames);
        femaleSlaveNames.splice(femaleSlaveNames.indexOf(selectedName), 1);
    }
    return selectedName;
};
