// JavaScript Document


var tl;


$(document).ready(function () {
    var i = [
        "logos-qantas.svg",
        "logos-partners.svg",
        "shape-mask.svg",
        "shape-red.svg",
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
    TweenLite.set($("#red-shape-end-frame"), {scaleX: .1, x: 30, y: 310, overwrite: "none", force3D: false});
    TweenLite.set($("#red-shape-end-frame2"), {autoAlpha:0, rotation:100, x:450, y:350, scaleX:.3, scaleY:.5});
    TweenLite.set($("#blue-shape"), {alpha: .9, rotation: 0, scaleX: 0.4, scaleY: 0.4, x: 96, y: 65, overwrite: "none", force3D: false});
    TweenLite.set($("#red-shape"), {alpha: .9, rotation: -20, scaleX: 0.4, scaleY: 0.4, x: 160, y: 73, overwrite: "none", force3D: false});
    TweenLite.set($("#mask-shape"), {rotation: 30, scaleX: 0.4, scaleY: 0.4, x: -2235, y: -1300, overwrite: "none", force3D: false});
    TweenLite.set($(".shapes"), {rotation: 190, transformOrigin: "50% 50%", overwrite: "none", force3D: false});
    TweenLite.set($("#white-shape"), {alpha: 1, scaleX: 0.7, scaleY: 0.7, x: -175, y: 450, overwrite: "none", force3D: false});

    TweenLite.set($("#red-shape-base"), {rotation:80, alpha:.82})

}


function adjustCopyLayout() {

    // RE-POSITION TEXT ELEMENTS DEPENDING ON WHAT VALUES ARE ENTERED IN THE HTML

    // IF THE DESTINATION TEXT IS TOO LONG TO FIT ON ONE LINE, WE REDUCE THE FONT SIZE
    if($("#destination").text().length > 12){
        $("#destination").css("fontSize","40px");
        $("#destination").css("lineHeight","40px");
    }

    //RE-POSITION CTA BUTTON DEPENDING ON HEIGHT OF TEXT LOCKUP
    var f3CopyHeight = $('#f3-copy').outerHeight(true);
    var ctaBtnOffset = 64 + f3CopyHeight + 20;
    $(".button").css("top",ctaBtnOffset);
}



// MAIN ANIMATION --------------------------------------------------------------------


function startAnimation() {

    // HIDES PRE-LOADER CIRCLE AND SHOWS BANNER
    $(".container").show();
    $(".loader").hide();


    tl = new TimelineLite();


    //FRAME 01
    tl.to(".shapes", 2, {rotation: -10, transformOrigin: "50% 50%", force3D:true}, "0")
    tl.from("#red-shape", .5, {rotation: 200, transformOrigin: "50% 50%", x: 135, y: 85, ease: Back.easeOut, force3D:true}, "0")
    tl.add(playVideo, "0")

    tl.to("#mask-shape", 1.5, {rotation: 0, scaleX: 1.5, scaleY: 1.5, x: -2070, y: -1315,  ease: Sine.easeInOut, force3D:true}, "0")
    tl.to("#red-shape", 1, {rotation: -20, scaleX: 2, scaleY: 2, x: 211, y: -20, ease: Sine.easeInOut, force3D:true}, ".3")
    tl.to("#blue-shape", 1, {rotation: -10, scaleX: 1.5, scaleY: 1.5, x: 13, y: 177, ease: Sine.easeInOut, force3D:true}, ".3")

    tl.from("#f1-copy", 1.5, {alpha: 0, y:10, ease: Sine.easeOut}, "1")

    tl.to("#mask-shape", .7, {rotation: 0, scaleX: 3, scaleY: 5, x: -1850, y: -1315, ease: Back.easeIn, force3D:true}, "1.1")
    tl.to("#blue-shape", .6, {rotation: -70, scaleX: 3, scaleY: 3, x: -160, y: 485, ease: Sine.easeInOut, force3D:true}, "1.4")
    tl.to("#red-shape", .6, {rotation: -100, scaleX: 4, scaleY: 4.5, x: 340, y: -295, ease: Sine.easeInOut, force3D:true}, "1.4")

    tl.from(".logos-qantas", 1, {alpha: 0, y:20, ease: Sine.easeOut, force3D:false}, "1.9")
    tl.from("#white-shape", 2.3, {y: 600, ease: Sine.easeOut, force3D:true}, ".5")
    tl.from("#red-shape-base", 1, {y:10, ease:Sine.easeOut, force3D:true}, "1.4")

    //FRAME 02

    tl.to("#f1-copy", .5, {alpha: 0, ease: Sine.easeIn}, "5")
    tl.from("#f2-copy", 1.5, {alpha: 0, ease: Sine.easeOut}, "5.6")

    tl.to("#f2-copy", .5, {alpha: 0, ease: Sine.easeIn}, "11.7")
    // tl.to("#red-shape-base", .5, {alpha:0, ease:Sine.easeIn}, "7.7")
    tl.from(["#f2-1-copy", "#f2-1-subtext"], 1.5, {alpha: 0, ease: Sine.easeOut}, "12.2")

    tl.to("#video-container", 1, {alpha:0, ease:Sine.easeOut}, "12.2")
    tl.to("#red-shape-end-frame2", 2.5, {autoAlpha:.4, rotation:50, scaleX: 2, scaleY: 2, x:230, y:130, ease: Sine.easeOut}, "11.2")

    tl.to(["#f2-1-copy", "#f2-1-subtext"], .5, {alpha: 0, ease:Sine.easeIn}, "15.7")


    tl.from("#f3-copy", 1.5, {alpha: 0, ease: Sine.easeOut}, "16.2")

    tl.to("#red-shape-end-frame", 3, {autoAlpha:.5, scaleX: .6, scaleY: .6, x: -290, y: 10, rotation:-220, ease: Sine.easeOut}, "15.2")
    tl.to("#red-shape-end-frame2", 3, {autoAlpha:.4, rotation:100, scaleX: 1.4, scaleY: 1.4, x:20, y:160, ease: Sine.easeInOut}, "15.2")

    tl.to("#white-shape", 1.3, {alpha:1, rotation:-3, x:-80, y: 470, scaleX:1, scaleY:1, ease: Sine.easeInOut, force3D:false}, "15.7")
    tl.to(".logos-qantas", 1.3, {x:-4, y:-27, scaleX:.9, scaleY:.9, transformOrigin: "10% 50%", ease: Sine.easeInOut, force3D:false}, "15.7")
    tl.from(".logos-partners", 1, {alpha: 0, y:20, transformOrigin: "30% 50%", scaleX:.5, scaleY:.5, ease: Sine.easeOut}, "16.2")
    tl.from(".logo-divider", 1, {height:'1px', alpha:0, ease:Sine.easeOut}, "16.3")

    tl.from(".terms-wrapper", 1, {alpha: 0, ease: Sine.easeOut}, "16.9")
    tl.from(".button", 1.7, {alpha: 0, scaleX: .5, scaleY: .5, ease: Expo.easeOut}, "16.9")


    // TESTING - goto specific time of animation
    // tl.pause(3)
    // tl.seek(12)
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
