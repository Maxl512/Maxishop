let blackMenu = document.querySelector(".menu-container");
let whiteMenu = document.querySelector(".menu-container--sticky");

let hidMenu = document.querySelector(".menu-container-hid");

function showUp(){
    hidMenu.style.right= "0";
};
function hideUp(){
    hidMenu.style.right= "-100%";
}
window.onscroll = function() {
    var y = window.scrollY;

    if ( y == 0 || y <= 15){
        blackMenu.style.display ="flex";

        whiteMenu.style.position = "relative";
    } else{
        blackMenu.style.display = "none";

        whiteMenu.style.position = "fixed";
    };

};