function welcome () {
    alert("Vítejte!");
};
welcome();

function pictureRemoval() {
    document.getElementsByClassName("toHide")[0].style.display = "none";
    document.getElementsByClassName("toShow")[0].style.display = "block";
}
function showPicture0 () {
    document.getElementById("horiatiki").style.display = "block";
}
function showPicture1 () {
    document.getElementById("wings").style.display = "block";
}
function showPicture2 () {
    document.getElementById("pasta").style.display = "block";
}
function showPicture3 () {
    document.getElementById("gnocchi").style.display = "block";
}