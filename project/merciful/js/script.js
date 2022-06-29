$(document).ready(function () {
    // Menu Mob
    $("#btnMenuMob").click(function () { 
        $("#menuMob").slideToggle();
    });
    // modal
    $("#btnOutline").click(function () { 
        $("#overlay, #imgVideo").fadeIn();
    });
    $("#overlay").click(function () { 
        $("#overlay, #imgVideo").fadeOut();
    });
});