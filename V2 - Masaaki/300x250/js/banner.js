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
        "shape-red-end-frame2.svg",
        "video.mp4"
    ]
    preloadimages(i).done(function (images) {
        console.log("loaded");

        // ONCE IMAGES ARE PRE-LOADED BEGIN ANIMATION
        initCSS();
        startAnimation();
        adjustCopyLayout();

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
    TweenLite.set($("#blue-shape"), {alpha: .9, rotation: 50, scaleX: 0.4, scaleY: 0.4, x: 60, y: 80, overwrite: "none", force3D: false});
    TweenLite.set($("#red-shape"), {alpha: .8, rotation: -20, scaleX: 0.2, scaleY: 0.2, x: 140, y: 83, overwrite: "none", force3D: false});
    TweenLite.set($("#mask-shape"), {rotation: 30, scaleX: 0.3, scaleY: 0.3, x: -2235, y: -1270, overwrite: "none", force3D: false});
    TweenLite.set($(".shapes"), {rotation: 160, transformOrigin: "50% 50%", overwrite: "none", force3D: false});
    TweenLite.set($("#white-shape"), {alpha: .9, scaleX: 0.4, scaleY: 0.4, x: -180, y: 100, overwrite: "none", force3D: false});
    TweenLite.set($("#red-shape-end-frame"), {scaleX: .1, x: 20, y: 310, overwrite: "none", force3D: false});
    TweenLite.set($("#red-shape-end-frame2"), {autoAlpha:0, rotation:100, y:190, scaleX:.3, scaleY:.5, x: 250, y: -200});

    TweenLite.set($("#red-shape-base"), {rotation:196, alpha:.82, scale:1.2, x:-6, y:10})

}


function adjustCopyLayout() {

    // RE-POSITION TEXT ELEMENTS DEPENDING ON WHAT VALUES ARE ENTERED IN THE HTML

    // IF THE DESTINATION TEXT IS TOO LONG TO FIT ON ONE LINE, WE REDUCE THE FONT SIZE
    if($("#destination").text().length > 14){
        $("#destination").css("fontSize","24px");
    }

}


// MAIN ANIMATION --------------------------------------------------------------------


function startAnimation() {

    // HIDES PRE-LOADER CIRCLE AND SHOWS BANNER
    $(".container").show();
    $(".loader").hide();


    // WE USE GREENSOCK ANIMATION PLATFORM, SEE THIS FOR MORE INFO > http://greensock.com/timelinelite

    tl = new TimelineLite();

    //FRAME 01
    tl.from(".container", 1, {alpha:0, ease:Sine.easeOut}, "0")
    tl.to(".shapes", 2, {alpha:1, rotation: -9, transformOrigin: "50% 50%"}, "0")
    tl.from("#red-shape", .5, {alpha:1, transformOrigin: "50% 50%", x: 135, y: 85, ease: Back.easeOut}, "0")
    tl.add(playVideo, "0")

    tl.to("#mask-shape", 1.2, {rotation: 0, scaleX: 1.1, scaleY: 1.1, x: -2140, y: -1315,  ease: Sine.easeInOut}, "0")
    tl.to("#red-shape", 1, {rotation: -10, scaleX: 1, scaleY: 1, x: 211, y: 35, ease: Sine.easeInOut}, ".3")
    tl.to("#blue-shape", 1, {rotation: -90, scaleX: 1.1, scaleY: 1.1, x: 5, y: 130, ease: Sine.easeInOut}, ".3")

    tl.from("#f1-copy", 1.5, {alpha:0, ease: Sine.easeOut}, "1.2")
    tl.from("#red-shape-base", .4, {y:30, alpha:0, ease:Sine.easeOut}, "1.4")

    tl.to("#mask-shape", .5, {rotation: 0, scaleX: 2.3, scaleY: 2.3, x: -1950, y: -1315, ease: Back.easeIn}, "1.1")
    tl.to("#blue-shape", .4, {rotation: -180, scaleX: 1.3, scaleY: 1.3, x: -100, y: 240, ease: Sine.easeIn}, "1.4")
    tl.to("#red-shape", .4, {rotation: -20, scaleX: 2.5, scaleY: 2.5, x: 330, y: -95, ease: Sine.easeIn}, "1.4")

    //FRAME 02
    tl.to("#f1-copy", .5, {alpha: 0, ease: Sine.easeIn}, "5")
    tl.from("#f2-copy", 1.5, {alpha: 0, ease: Sine.easeOut}, "5.6")

    tl.to("#f2-copy", .5, {alpha: 0, ease: Sine.easeIn}, "11.7")
    tl.from(["#f2-1-copy", "#f2-1-subtext"], 1.5, {alpha: 0, ease: Sine.easeOut}, "12.2")
    tl.to("#video-container", 1, {alpha:0, ease:Sine.easeOut},"12.2")

    tl.to("#red-shape-end-frame2", 2, {autoAlpha:.4, rotation:170, scaleX: 1.5, scaleY: 1.1, x:150, y:-160, ease: Sine.easeOut}, "11.5")

    tl.from("#white-shape", 2.3, {y:400, ease: Sine.easeOut}, "11.5")
    tl.from(".logos-qantas", 1, {alpha: 0, y:20, ease: Sine.easeOut, force3D:false}, "13")

    tl.to(["#f2-1-copy", "#f2-1-subtext"], .5, {alpha: 0, ease: Sine.easeIn}, "15.7")
    tl.from("#f3-copy", 1.5, {alpha: 0, ease: Sine.easeOut}, "16.2")

    //FRAME 03
    tl.to("#white-shape", 1.3, {alpha:1, x:-80, y:147, scaleX:1, scaleY:1, ease: Sine.easeInOut, force3D:false}, "15.7")
    tl.to(".logos-qantas", 1.3, {y:-34, scaleX:1, scaleY:1, ease: Sine.easeInOut, force3D:false}, "15.7")
    tl.from(".logos-partners", 1, {alpha: 0, y:20, transformOrigin: "0% 50%", scaleX:.5, scaleY:.5, ease: Sine.easeOut}, "16")
    tl.from(".button", 1.7, {alpha: 0, scaleX: .5, scaleY: .5, ease: Expo.easeOut}, "16")
    tl.from(".logo-divider", .7, {"height":"0px", ease:Sine.easeOut},"16.3")
    tl.from(".terms-wrapper", 1, {alpha:0, ease:Sine.easeOut}, "16")

   tl.to("#red-shape-end-frame2", 2.7, {autoAlpha:.4, rotation:5, scaleX: 1.05, scaleY: 1.05, x:30, y:10, ease:Sine.easeOut}, "15")



    // TESTING - goto specific time of animation
    // tl.seek(11)
    // tl.pause(3)
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
