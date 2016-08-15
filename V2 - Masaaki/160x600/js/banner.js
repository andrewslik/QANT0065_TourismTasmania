// JavaScript Document


var tl;


$(document).ready(function () {

  var i = [
    "logos-partners.svg",
    "logos-qantas.svg",
    "red-shape-base.svg",
    "shape-blue.svg",
    "shape-mask.svg",
    "shape-red-end-frame.svg",
    "shape-red-end-frame2.svg",
    "shape-red.svg",
    "shape-white.svg",
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
    TweenLite.set($("#blue-shape"), {alpha: .9, rotation: 10, scaleX: 0.3, scaleY: 0.3, x: 76, y: 85, overwrite: "none", force3D: false});
    TweenLite.set($("#red-shape"), {alpha: .9, rotation: -20, scaleX: 0.2, scaleY: 0.2, x: 160, y: 93, overwrite: "none", force3D: false});
    TweenLite.set($("#mask-shape"), {rotation: 30, scaleX: 0.27, scaleY: 0.27, x: -2235, y: -1300, overwrite: "none", force3D: false});
    TweenLite.set($(".shapes"), {rotation: 200, transformOrigin: "50% 50%", overwrite: "none", force3D: false});

    TweenLite.set($("#red-shape-end-frame"), {scaleX: .1, x: 20, y: 310, overwrite: "none", force3D: false});
    TweenLite.set($("#red-shape-end-frame2"), {autoAlpha:0, rotation:100, x:100, y:0, scaleX:.3, scaleY:.5});

    TweenLite.set($("#red-shape-base"), {rotation:94}) //alpha:.82
    TweenLite.set($("#white-shape"), {alpha: 1, scaleX: 1, scaleY: 1, x: 0, y: 140, overwrite: "none", force3D: false});

    TweenLite.set($("#fd-logo"), {alpha:0})

}


function adjustCopyLayout() {

    // RE-POSITION TEXT ELEMENTS DEPENDING ON WHAT VALUES ARE ENTERED IN THE HTML

    // IF THE DESTINATION TEXT IS TOO LONG TO FIT ON ONE LINE, WE REDUCE THE FONT SIZE
    if($("#destination").text().length > 14){
        $("#destination").css("fontSize","24px");
    }

    var f3height = $("#f3-copy").outerHeight(true)
    var btnOffset = 64 + f3height + 20
    $(".button").css('top',btnOffset + 'px')

}


// MAIN ANIMATION --------------------------------------------------------------------
function startAnimation() {

    // HIDES PRE-LOADER CIRCLE AND SHOWS BANNER
    $(".container").show();
    $(".loader").hide();


    // WE USE GREENSOCK ANIMATION PLATFORM, SEE THIS FOR MORE INFO > http://greensock.com/timelinelite

    tl = new TimelineLite();

    var shapes = $(".shapes"),
        redShape = $("#red-shape"),
        maskShape = $("#mask-shape"),
        blueShape = $("#blue-shape"),
        redShapeBase = $("#red-shape-base"),
        f1Copy = $("#f1-copy"),
        logoDivider = $(".logo-divider"),
        f1Copy = $("#f1-copy"),
        f2Copy = $("#f2-copy"),
        f2aCopy = $("#f2a-copy"),
        bgImage01 = $(".bg-image-01"),
        f2aCopy = $("#f2a-copy"),
        whiteShape = $("#white-shape"),
        logosQantas = $(".logos-qantas"),
        logosPartners = $(".logos-partners"),
        terms = $(".terms-wrapper"),
        f3Copy = $("#f3-copy"),
        ctaBtn = $(".button"),
        redShapeEndFrame02 = $("#red-shape-end-frame2"),
        baseImage01 = $("#base-image-01"),
        baseImage02 = $("#base-image-02");

    tl.to(shapes, 2, {rotation: -10, transformOrigin: "50% 50%", force3D:true}, "0")
    .from(redShape, .5, {alpha:1, transformOrigin: "50% 50%", x: 135, y: 85, ease: Back.easeOut, force3D:true}, "0")
    tl.add(playVideo, "0")

    .to(maskShape, 1.5, {rotation: 20, scaleX: 1.3, scaleY: 1.3, x: -2100, y: -1245,  ease: Sine.easeInOut, force3D:true}, "0")
    .to(redShape, 1, {rotation: -10, scaleX: 1.4, scaleY: 1.4, x: 180, y: 30, ease: Sine.easeInOut, force3D:true}, ".3")
    .to(blueShape, 1, {rotation: 0, scaleX: 1, scaleY: 1, x: 13, y: 117, ease: Sine.easeInOut, force3D:true}, ".3")

    .to(maskShape, .7, {rotation: 0, scaleX: 4, scaleY: 5, x: -1870, y: -1315, ease: Expo.easeIn, force3D:true}, ".8")
    .to(blueShape, .7, {rotation: -120, scaleX: 2, scaleY: 2, x: -60, y: 520, ease: Sine.easeInOut, force3D:true}, "1.1")
    .to(redShape, .7, {rotation: 40, scaleX: 6, scaleY: 6, x: 280, y: -320, ease: Sine.easeInOut, force3D:true}, "1.1")

    tl.from(whiteShape, 2.3, {y:200, ease: Sine.easeOut, force3D:true}, ".2")
    tl.from(".logos-qantas", 1, {alpha:0, y:20, ease: Sine.easeOut, force3D:true}, ".9")

    //Frame 01
    // tl.from("#f1-copy", 1.5, {alpha:0, ease: Sine.easeOut}, "1.2")
    tl.from("#f1-copy", 1.5, {alpha: 0, y:10, ease: Sine.easeOut}, "1")


    //Frame 02
    tl.to("#f1-copy", .5, {alpha: 0, ease: Sine.easeIn}, "5")
    tl.from("#f2-copy", 1.5, {alpha: 0, ease: Sine.easeOut}, "5.6")

    tl.to("#f2-copy", .5, {alpha: 0, ease: Sine.easeIn}, "11.7")
    // .to(redShapeBase, .5, {alpha:0, ease:Sine.easeInOut, force3D:true}, "11.7")
    tl.from(["#f2-1-copy", "#f2-1-subtext"], 1.5, {alpha: 0, ease: Sine.easeOut}, "12.2")
    tl.to("#video-container", 1, {alpha:0, ease:Sine.easeOut},"12.2")


    tl.to(["#f2-1-copy", "#f2-1-subtext"], .5, {alpha: 0, ease: Sine.easeIn}, "15.7")
    tl.from("#f3-copy", 1.5, {alpha: 0, ease: Sine.easeOut}, "16.2")




    // tl.to("#f4-copy", .5, {alpha: 0, ease: Sine.easeIn}, "16.7")
    // tl.from("#f5-copy", 1.5, {alpha: 0, ease: Sine.easeOut}, "17.2")
    tl.from(ctaBtn, 1.7, {alpha: 0, scaleX: .5, scaleY: .5, ease: Expo.easeOut, force3D:true}, "17.7")

    tl.to("#white-shape", 1.4, {alpha:1, y: 30, scaleX:1, scaleY:1, ease: Sine.easeInOut, force3D:false}, "16.7")
    tl.to(".logos-qantas", 1.3, {y:-66, scaleX:1, scaleY:1, ease: Sine.easeInOut, force3D:true}, "16.7")
    tl.from(".logos-partners", .7, {alpha: 0, y:30, transformOrigin: "50% 50%", scaleX:.8, scaleY:.8, ease: Sine.easeOut, force3D:true}, "17.7")
    tl.from(".terms-wrapper", 1, {alpha: 0, ease: Sine.easeOut, force3D:true}, "17.7")


    tl.to("#red-shape-end-frame2", 2.5, {autoAlpha:.4, rotation:-20, scaleX: 1.3, scaleY: 1.3, x:40, y:-150, ease: Sine.easeOut, force3D:true}, "13")

    tl.to("#red-shape-end-frame", 2, {autoAlpha:.4, scaleX: .7, scaleY: .7, x: 453, y: 87, rotation:0, ease: Sine.easeOut, force3D:true}, "16.5")
    tl.to("#red-shape-end-frame2", 3, {autoAlpha:.3, rotation:20, scaleX: .43, scaleY: .43, x:-6, y:7, ease: Sine.easeInOut, force3D:true}, "15.7")


    // TESTING - goto specific time of animation
    // tl.seek(10);
    // tl.pause(13)
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
