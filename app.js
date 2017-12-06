document.addEventListener("DOMContentLoaded",function() {
    alert("DOM fully loaded and parsed.\nYou may proceed to page itself.")
});


function welcome() {
    alert("Vítejte!\nNajeďte myší na text.");
};

function pictureRemoval() {
    document.getElementsByClassName("toHide")[0].style.display = "none";
    document.getElementsByClassName("toShow")[0].style.display = "block";
    welcome();
}
//function showPicture() {
    //document.getElementsByTagName("IMG").style.display = "inline-block";
//}
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