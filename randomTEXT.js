function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const min = 1;
const max = 10;
const random = getRandomNumber(min, max);
if (random == 1) {
    document.getElementById("new_text_fool").innerHTML = "Schoolwork = SUCKS!";
}
if (random == 2) {
    document.getElementById("new_text_fool").innerHTML = "Best Game Website";
}
if (random == 3) {
    document.getElementById("new_text_fool").innerHTML = "BlooketHub is Heaven!";
}
if (random == 4) {
    document.getElementById("new_text_fool").innerHTML = "CAN'T GET BLOCKED!";
}
if (random == 5) {
    document.getElementById("new_text_fool").innerHTML = "Eaglercraft Is Minecraft :)";
}
if (random == 6) {
    document.getElementById("new_text_fool").innerHTML = "Imagine not reading this! :)";
}
if (random == 7) {
    document.getElementById("new_text_fool").innerHTML = "I have Android. :(";
}
if (random == 8) {
    document.getElementById("new_text_fool").innerHTML = "Homework = SUCKS!";
}
if (random == 9) {
    document.getElementById("new_text_fool").innerHTML = "Bookmarklets don't work anymore...";
}
if (random == 10) {
    document.getElementById("new_text_fool").innerHTML = "If you see this, thanks for everything! :D";
}
