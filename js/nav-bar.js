window.onscroll = function() {
    var y = window.scrollY;
    console.log(y);

    let blackMenu = document.querySelector(".menu-container");

    let whiteMenu = document.querySelector(".menu-container--sticky");

    if ( y == 0 || y <= 15){
        blackMenu.style.display ="flex";

        whiteMenu.style.position = "relative";
    } else{
        blackMenu.style.display = "none";

        whiteMenu.style.position = "fixed";
    };

};