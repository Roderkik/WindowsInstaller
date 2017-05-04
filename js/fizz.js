// ids: ////
//        //
// Main   //
// loader //
// lower  //
// bottom //
//        //
////////////

function pulseBackground() {
    // every pulse has a length of 20000ms (pulseBackground starts at 30000ms load() lifetime)
    var repeatPulse = 3;
    for (var i = 0; i < repeatPulse; i++ ) {
        $(".row")
            .animate({backgroundColor: "#006495"}, 7000)
            .animate({backgroundColor: "#0081d1"}, 6000)
            .animate({backgroundColor: "#006ca3"}, 9000)
            .animate({backgroundColor: "#007ec6"}, 8000);
    }
}

function toggleFullScreen() {
    if ((document.fullScreenElement && document.fullScreenElement !== null) ||
        (!document.mozFullScreen && !document.webkitIsFullScreen)) {
        if (document.documentElement.requestFullScreen) {
            document.documentElement.requestFullScreen();
        } else if (document.documentElement.mozRequestFullScreen) {
            document.documentElement.mozRequestFullScreen();
        } else if (document.documentElement.webkitRequestFullScreen) {
            document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
        }
    } else {
        if (document.cancelFullScreen) {
            document.cancelFullScreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitCancelFullScreen) {
            document.webkitCancelFullScreen();
        }
    }
}

$(document).ready(function() {

    $("#main").append("<img src='img/logo.png' style='width:200px'>");

    $("#loader").append("<img  class='loader' src='img/loader_WHITE_ON_BLACK.gif'>");

    $("#title").empty().append("Getting ready");
    load();

    function load() {
        setTimeout(function() {
            $('#lower').empty()
                .append("Getting ready (0%)");
            $("#title").empty().append("Getting ready (0%)");
        }, 2000);
        setTimeout(function() {
            $('#lower').empty()
                .append("Getting ready (12%)");
            $("#title").empty().append("Getting ready (12%)");
        }, 3500);
        setTimeout(function() {
            $('#lower').empty()
                .append("Getting ready (33%)");
            $("#title").empty().append("Getting ready (33%)");
        }, 4000);
        setTimeout(function() {
            $('#lower').empty()
                .append("Getting ready (41%)");
            $("#title").empty().append("Getting ready (41%)");
        }, 5000);
        setTimeout(function() {
            $('#lower').empty()
                .append("Getting ready (58%)");
            $("#title").empty().append("Getting ready (58%)");
        }, 5900);
        setTimeout(function() {
            $('#lower').empty()
                .append("Getting ready (81%)");
            $("#title").empty().append("Getting ready (81%)");
        }, 7000);
        setTimeout(function() {
            $('#lower').empty()
                .append("Getting ready (100%)");
            $("#title").empty().append("Getting ready (100%)");
        }, 7300);
        setTimeout(function() {
            $('#main').empty();
            $("#loader").empty();
            $("#lower").empty();
            $("#bottom").empty();
        }, 11000);
        setTimeout(function () {
            $("#main").append("<h3>Getting Windows ready<br>Don’t turn off your computer</h3>").hide().fadeIn(500).delay(3500).fadeOut(500);
            $("#title").empty().append("Getting Windows ready");
        }, 12500);
        setTimeout(function () {
            $("#main").empty().append("Hi").hide().fadeIn(500).delay(4000).fadeOut(500);
            $("#title").empty().append("Hi");
        }, 21000);
        setTimeout(function () {
            $("#main").empty().append("We’re happy you’re here").hide().fadeIn(500).delay(4000).fadeOut(500);
            $("#title").empty().append("We’re happy you’re here");
        }, 27000);
        setTimeout(function () {
            $(".row").animate({backgroundColor: "#00a1f1"}, 1000);
        }, 28000);
        setTimeout(function () {
            pulseBackground();
        }, 30000);
        setTimeout(function () {
            $("#main").empty().append("Lots of great features to get excited about").hide().fadeIn(500).delay(19000).fadeOut(500);
            $("#title").empty().append("Lots of great features to get excited about");
        }, 33000);
        setTimeout(function () {
            $("#main").empty().append("Getting everything ready for you").hide().fadeIn(500).delay(29000).fadeOut(500);
            $("#title").empty().append("Getting everything ready for you");
        }, 53000);
        setTimeout(function () {
            $("#bottom").empty().append("Don’t turn off your PC").hide().fadeIn(500).delay(79000).fadeOut(500);//own timeline
        }, 60000);
        setTimeout(function () {
            $("#main").empty().append("Just a few more tweaks").hide().fadeIn(500).delay(29000).fadeOut(500);
            $("#title").empty().append("Just a few more tweaks");
        }, 83000);
        setTimeout(function () {
            $("#main").empty().append("We’ll be ready soon").hide().fadeIn(500).delay(26000).fadeOut(500);
            $("#title").empty().append("We’ll be ready soon");
        }, 113000);
        setTimeout(function () {
            $(".row").animate({backgroundColor: "#000"}, 500);
        }, 139500);
        setTimeout(function () {
            $('#le-big').empty().append("<video style='display: none' class='cena' src='img/Cena.mp4'></video>");
        },140000);
        setTimeout(function () {
            $('.cena').show().get(0).play();
        },141000);
        setTimeout(function () {
            $("#le-big").fadeOut(1000)
        }, 154000);
    }
});

//
//48 65 79 2C 20 54 68 61 74 27 73 20 70 72 65 74 74 79 20 67 6F 6F 64 2E -IdubbbzTV
//