function welcome() {
    alert("Vítejte! Najeďte myší na text.");
};

function pictureRemoval() {
    document.getElementsByClassName("toHide")[0].style.display = "none";
    document.getElementsByClassName("toShow")[0].style.display = "block";
    welcome();
}
function showPicture0() {
    document.getElementById("horiatiki").style.display = "inline-block";
}
function showPicture1() {
    document.getElementById("wings").style.display = "inline-block";
}
function showPicture2() {
    document.getElementById("pasta").style.display = "inline-block";
}
function showPicture3() {
    document.getElementById("gnocchi").style.display = "inline-block";
}