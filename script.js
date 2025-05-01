function nightMode() {
    var element = document.body;
    var bgElement = document.getElementsByClassName("background2")[0];
    var bgElement2 = document.getElementsByClassName("background2")[1];
    element.classList.toggle("dark-mode");
    bgElement.classList.toggle("background2-dark-mode");
    bgElement2.classList.toggle("background2-dark-mode");
    var iconInverts = document.getElementsByClassName("invertIcon");
    for(var i = 0; i < iconInverts.length; i++){
        iconInverts[i].classList.toggle("invert");
    }
    var borderInverts = document.getElementsByClassName("invertBorder");
    for(var y = 0; y < borderInverts.length; y++){
        borderInverts[y].classList.toggle("borderInvert");
    }
}