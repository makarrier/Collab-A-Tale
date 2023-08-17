function centerBoxClicked() {
/*
    Fade out the left and right boxes first. Then animate the transition from the box fading out to the story section.
*/

}
function leftBoxClicked() {
/*
    Move left box to center position and fade out the other two boxes. After the box is in the center, 
    animate the transition from the box fading out to the story section.
*/
}
function rightBoxClicked() {
/*
    Move right box to center position and fade out the other two boxes. After the box is in the center, 
    animate the transition from the box fading out to the story section.
*/
}
function leftBoxHover() {
    //document.getElementById("leftText").style.visibility = "visible";
    document.getElementById("leftText").style.fontWeight = "bold";
    document.getElementById("leftText").style.transform =  "translateY(-10px)";
}
function leftBoxLeave() {
    //document.getElementById("leftText").style.visibility = "hidden";
    document.getElementById("leftText").style.fontWeight = "300"
    document.getElementById("leftText").style.transform =  "translateY(8px)";
}
function centerBoxHover() {
    //document.getElementById("centerText").style.visibility = "visible";
    document.getElementById("centerText").style.fontWeight = "bold";
    document.getElementById("centerText").style.transform =  "translateY(-10px)";
}
function centerBoxLeave() {
    //document.getElementById("centerText").style.visibility = "hidden";
    document.getElementById("centerText").style.fontWeight = "300"
    document.getElementById("centerText").style.transform =  "translateY(8px)";
}
function rightBoxHover() {
    //document.getElementById("rightText").style.visibility = "visible";
    document.getElementById("rightText").style.fontWeight = "bold";
    document.getElementById("rightText").style.transform =  "translateY(-10px)";
}
function rightBoxLeave() {
    //document.getElementById("rightText").style.visibility = "hidden";
    document.getElementById("rightText").style.fontWeight = "300"
    document.getElementById("rightText").style.transform =  "translateY(8px)";
}
function createLinkClicked() {
// Fade out boxes and preset story section
}
function resetBoxes() {
// Fade out story section and reset boxes
}