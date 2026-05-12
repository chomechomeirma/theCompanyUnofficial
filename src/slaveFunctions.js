/* twine-user-script #56: "slaveFunctions.js" */
window.getSlaveByID = function(id, slaves = variables().pitSlaves) {
    for (var slave in slaves) {
        if (slaves[slave].id == id) {
            return slaves[slave];
        };
    };
};

window.assignSlaveToCubicles = function(slave) {
    // define cubeSlaves if it doesn't exist
    if (!variables().cubeSlaves) {
        variables().cubeSlaves = {};
    };
    if (!variables().WeeklySlavePay) {
        variables().WeeklySlavePay = 0;
    };
    elog(`----------------------------------`);
    elog(`Assigning ${slave.name} to a cubicle`);
    elog(`Current weekly pay is \$${variables().WeeklySlavePay}`);

    // Remove slave from pitSlaves object
    var slaves = Object.keys(variables().pitSlaves);

    for (var i = 0; i < slaves.length; i++) {
        if (variables().pitSlaves[slaves[i]].id == slave.id) {
            variables().cubeSlaves[slave.name.toLowerCase()] = slave;
            variables().WeeklySlavePay += slave.value * variables().WeeklySlavePayMod;
            delete variables().pitSlaves[slaves[i]];
            elog(`New weekly pay is \$${variables().WeeklySlavePay}`);
        };
    };

    // Free up a slot in the pit
    variables().PitSlots -= 1;
};

window.assignSlaveToRoom = function(slave) {
    // define roomSlave if it doesn't exist
    if (!variables().roomSlave) {
        variables().roomSlave = {};
    };

    // Remove slave from pitSlaves object
    var slaves = Object.keys(variables().pitSlaves);

    for (var i = 0; i < slaves.length; i++) {
        if (variables().pitSlaves[slaves[i]].id == slave.id) {
            setPerk(slave, "Room Slave");
            variables().roomSlave = slave;
            delete variables().pitSlaves[slaves[i]];
        };
    };

    // Free up a slot in the pit
    variables().PitSlots -= 1;
};

// Set the image of a slave based on their age and background
function setImage(slave, name) {
    elog(`----------------------------------`);
    elog(`Setting an image for ${slave.name}`);

    if (name !== undefined) {
        elog(`Image specified as ${name}`)
        return name;
    };

    var age = slave.age;
    var gender = slave.gen;
    var hair = slave.hairColor;
    elog(`${slave.name}'s Age:\t${age}`);
    elog(`${slave.name}'s Gender:\t${gender}`);
    elog(`${slave.name}'s Hair:\t${hair}`);
    
    if (age == "Young Adult") {age = "Adult"};
    age = age.toLowerCase();
    
    elog(`Chosen Image: ${gender}-${age}-${hair}`);
    return (`${gender}-${age}-${hair}`);
};

// Set the image index based on the slave's selected image
function setImageIndex(slave) {
    elog(`----------------------------------------`);
    elog(`Setting an image index for ${slave.name}`);
    // Put slaves and slave imgdb into variables
    var img = slave.img;
    if (setup.imgPitSlaves) {
        var pitSlaveImg = {img: setup.imgPitSlaves}
    } else {
        var pitSlaveImg = {img: setup.imgPitSlavesDefault}
    };

    var imgIndex = 0;
    //elog(`Image Pack:\t\t ${pitSlaveImg.img.name}`);
    elog(`Image Name:\t\t ${img}`);
    elog(`Image Line:\t\t ${pitSlaveImg.img[img]}`);

    // Return a random number based on the length of pitSlaveImg
    if (pitSlaveImg.img[img].length > 1) {
        elog(`Image Line Length:\t\t ${pitSlaveImg.img[img].length}`);
        imgIndex = Math.floor(Math.random() * pitSlaveImg.img[img].length);
    };

    elog(`Chosen Image Index:\t\t ${imgIndex}`);
    return imgIndex;
};
