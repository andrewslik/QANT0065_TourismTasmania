// JavaScript Document


var tl;


$(document).ready(function () {
    var i = [
        "logos-qantas.svg",
        "logos-partners.svg",
        "shape-mask.svg",
        "shape-red.svg",
        "shape-white.svg",
        "shape-blue.svg",
        "shape-red-end-frame.svg",
        "shape-red-end-frame2.svg"
    ]

    preloadimages(i).done(function (images) {
        console.log("loaded");

        // ONCE IMAGES ARE PRE-LOADED BEGIN ANIMATION
        initCSS();
        startAnimation();

        setTimeout(function(){
          adjustCopyLayout();
        }, 500);

        // TERMS & CONDITIONS FUNCTIONALITY / COMMENT OUT IF NOT NEEDED
        $(".overlay-close").click(function () {
            $(".overlay").hide();
            $(".terms-wrapper").show();
        });

        $(".overlay-trigger").click(function () {
            $(".terms-wrapper").hide();
            $(".overlay").show();
        });

    })

});



function initCSS() {

    // SET STARTING POSITIONS FOR ELEMENTS

    TweenLite.set($("#blue-shape"), {alpha: .9, rotation: 10, scaleX: 0.3, scaleY: 0.3, x: 76, y: 65, overwrite: "none", force3D: false});
    TweenLite.set($("#red-shape"), {alpha: .9, rotation: -20, scaleX: 0.3, scaleY: 0.3, x: 130, y: 73, overwrite: "none", force3D: false});
    TweenLite.set($("#mask-shape"), {rotation: 30, scaleX: 0.2, scaleY: 0.2, x: -2235, y: -1275, overwrite: "none", force3D: false});
    TweenLite.set($(".shapes"), {rotation: 10, transformOrigin: "50% 50%", overwrite: "none", force3D: false});
    TweenLite.set($("#white-shape"), {alpha: 1, scaleX: 1, scaleY: 1, x: 587, y: 24, overwrite: "none", force3D: false});
    TweenLite.set($("#red-shape-base"), {scaleX:1.08})
    TweenLite.set($("#red-shape-end-frame2"), {autoAlpha:0, rotation:100, y:-200, scaleX:.3, scaleY:.5});
    TweenLite.set($("#red-shape-end-frame"), {scaleX: .1, x: 20, y: 310, overwrite: "none", force3D: false});

}


function adjustCopyLayout() {

    // RE-POSITION TEXT ELEMENTS DEPENDING ON WHAT VALUES ARE ENTERED IN THE HTML

    // IF THE DESTINATION TEXT IS TOO LONG TO FIT ON ONE LINE, WE REDUCE THE FONT SIZE
//    if($("#destination").text().length > 10){
//
//        if($("#destination").text().length > 25){
//            $("#destination").css("fontSize","16px");
//            $("#destination").css("lineHeight","16px");
//            $("#f3-copy").css("top","20px");
//        }
//        else{
//            $("#destination").css("fontSize","18px");
//            $("#destination").css("lineHeight","18px");
//            $("#f3-copy").css("top","20px");
//        }
//
//    }

//RE-POSITION CTA BUTTON DEPENDING ON HEIGHT OF TEXT LOCKUP
var f3CopyWidth = $('#f3-copy').outerWidth(true);
var ctaBtnOffset = 15 + f3CopyWidth + 20;
$(".button").css("left",ctaBtnOffset);

}



// MAIN ANIMATION --------------------------------------------------------------------


function startAnimation() {

    // HIDES PRE-LOADER CIRCLE AND SHOWS BANNER
    $(".container").show();
    $(".loader").hide();


    // WE USE GREENSOCK ANIMATION PLATFORM, SEE THIS FOR MORE INFO > http://greensock.com/timelinelite

    tl = new TimelineLite();

    //FRAME 01
    tl.to(".shapes", 2, {rotation: -160, transformOrigin: "50% 50%"}, "0")
    tl.from("#red-shape", .5, {rotation: 200, transformOrigin: "50% 50%", x: 135, y: 85, ease: Back.easeOut}, "0")
    tl.add(playVideo, "0")

    tl.to("#mask-shape", 1.5, {rotation: 0, scaleX: 1.3, scaleY: 1.3, x: -2100, y: -1315,  ease: Sine.easeInOut}, "0")
    tl.to("#red-shape", 1, {rotation: -80, scaleX: 1.5, scaleY: 1.5, x: 231, y: 55, ease: Sine.easeInOut}, ".3")
    tl.to("#blue-shape", 1, {rotation: -140, scaleX: 1, scaleY: 1, x: -4, y: 117, ease: Sine.easeInOut}, ".3")

    tl.from("#f1-copy", 1.5, {alpha: 0, ease: Sine.easeOut}, "1.2")
    tl.from(".bg-image", 2, {alpha: 0, ease: Sine.easeOut}, "0")

    tl.to("#mask-shape", .7, {rotation: 0, scaleX: 4.2, scaleY: 4.2, x: -1650, y: -1315, ease: Back.easeIn}, "1.1")
    tl.to("#blue-shape", .7, {rotation: -230, scaleX: 1.5, scaleY: 1.5, x: -360, y: 120, ease: Sine.easeOut}, "1.45")
    tl.to("#red-shape", .7, {rotation: 0, scaleX: 4, scaleY: 4, x: 565, y: 75, ease: Sine.easeInOut}, "1.45")

    tl.from(".logos-qantas", 1, {alpha: 0, y:10, ease: Sine.easeOut}, "1.9")
    tl.from("#white-shape", 2.3, {y: 200, ease: Sine.easeOut}, ".4")

    tl.to("#f1-copy", .5, {alpha: 0, ease: Sine.easeIn}, "5")
    tl.from("#f2-copy", 1.5, {alpha: 0, ease: Sine.easeOut}, "5.6")

    tl.to("#f2-copy", .5, {alpha: 0, ease: Sine.easeIn}, "11.2")
    tl.from(["#f2-1-copy", "#f2-1-subtext"], 1.5, {alpha: 0, ease: Sine.easeOut}, "12.2")
    tl.to("#red-shape-end-frame2", 2.3, {autoAlpha:.4, rotation:0, scaleX: 1, scaleY: 1, x:-70, y:-164, ease: Sine.easeOut}, "11.5")

    tl.to("#video-container", 1, {alpha:0, ease:Sine.easeOut},"12.2")

    tl.to(["#f2-1-copy", "#f2-1-subtext"], .5, {alpha: 0, ease: Sine.easeIn}, "15.7")

    tl.from("#f3-copy", 1.5, {alpha: 0, ease: Sine.easeOut}, "16.2")
    tl.to("#red-shape-end-frame", 3, {autoAlpha:.3, scaleX: .8, scaleY: .8, x: 240, y: 560, rotation:-120, ease: Sine.easeOut}, "15")
    tl.to("#red-shape-end-frame2", 3, {autoAlpha:.4, rotation:50, scaleX: 1.5, scaleY: 1.5, x:130, y:-10, ease: Sine.easeOut}, "15.5")



    //FRAME 02
    tl.to("#red-shape", .7, {x: 895, y: 75, ease: Sine.easeIn}, "6.7")


    //FRAME 03


    tl.to("#white-shape", 2, {alpha:1, rotation:-17, x:600, y: -60, scaleX:1, scaleY:1, ease: Sine.easeInOut, force3D:false}, "16.1")
    tl.to(".logos-qantas", 1.3, {x:0, y:0, scaleX:1, scaleY:1, ease: Sine.easeInOut}, "16.1")
    tl.from(".logos-partners", 2, {alpha: 0, y:20, transformOrigin: "100% 50%", scaleX:.5, scaleY:.5, ease: Sine.easeOut}, "16.6")



    tl.from(".logos", 1, {alpha: 0, ease: Sine.easeOut}, "12.2")
    tl.from(".terms-wrapper", 1, {alpha: 0, ease: Sine.easeOut}, "17.2")
    tl.from(".button", 1.7, {alpha: 0, scaleX: .5, scaleY: .5, ease: Expo.easeOut}, "17")


    // TESTING - goto specific time of animation
    // tl.seek(3);
    // tl.pause(15)
}

function playVideo() {
	document.getElementById('video-container').play();
}

// PRE-LOAD IMAGES FUNCTIONALITY ------------------------------------------------------------


function preloadimages(arr) {

    var newimages = [],
        loadedimages = 0
    var postaction = function () {}
    var arr = (typeof arr != "object") ? [arr] : arr

    function imageloadpost() {
        loadedimages++
        if (loadedimages == arr.length) {
            postaction(newimages) //call postaction and pass in newimages array as parameter
        }
    }
    for (var i = 0; i < arr.length; i++) {
        newimages[i] = new Image()
        newimages[i].src = arr[i]
        newimages[i].onload = function () {
            imageloadpost()
        }
        newimages[i].onerror = function () {
            imageloadpost()
        }
    }
    return { //return blank object with done() method
        done: function (f) {
            postaction = f || postaction //remember user defined callback functions to be called when images load
        }
    }
}
