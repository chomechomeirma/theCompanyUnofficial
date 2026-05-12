/* twine-user-script #12: "settings.js" */
Setting.addHeader(
    "Image Controls",
    "Use these toggles to enable or disable graphical features in The Company"
);
Setting.addToggle("useImages", {
    label: "Show Images",
    desc: "Enable or disable images in the game",
    default: true,
    onInit: toggleImages,
    onChange: toggleImages
});
Setting.addToggle("usePaperDoll", {
    label: "Use Paper Doll",
    desc: "Choose whether to use the layered paper doll system for the MC",
    default: false,
    onInit: togglePaperDoll,
    onChange: togglePaperDoll
});

function toggleImages() {
    if (settings.useImages) {
        variables().ShowImages = true;
        variables().ShowWeather = true;
    } else {
        variables().ShowImages = false;
        variables().ShowWeather = false;
    }
};
function togglePaperDoll() {
    if (settings.usePaperDoll) {
        variables().UsePics = true;
    } else {
        variables().UsePics = false;
    }
};