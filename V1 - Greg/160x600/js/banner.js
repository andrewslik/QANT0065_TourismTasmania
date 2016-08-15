// JavaScript Document
var tl,
    clicktag,
    size = "160x600",
    imagesLoaded = false,
    backup = false,
    md = new MobileDetect(window.navigator.userAgent),
    // md = new MobileDetect("Mozilla/5.0 (iPhone; CPU iPhone OS 6_0 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Version/6.0 Mobile/10A5376e Safari/8536.25"),
    baseImage01,
    baseImage02;

function politeInit() {

    Enabler.setProfileId(1084594);
    var devDynamicContent = {};

    devDynamicContent.SFID00478QFAirlineTourism_Tas_SpringRed_PlanetJul16_Sheet1= [{}];
    devDynamicContent.SFID00478QFAirlineTourism_Tas_SpringRed_PlanetJul16_Sheet1[0]._id = 0;
    devDynamicContent.SFID00478QFAirlineTourism_Tas_SpringRed_PlanetJul16_Sheet1[0].id = 1;
    devDynamicContent.SFID00478QFAirlineTourism_Tas_SpringRed_PlanetJul16_Sheet1[0].reporting = "00478|QF|Airline|Tourism Tas Spring|Red Planet|Jul-16|SG1|DBM|Display|160x600|BNE-HBA";
    devDynamicContent.SFID00478QFAirlineTourism_Tas_SpringRed_PlanetJul16_Sheet1[0].city_pair = "BNE-HBA";
    devDynamicContent.SFID00478QFAirlineTourism_Tas_SpringRed_PlanetJul16_Sheet1[0].version = "Greg";
    devDynamicContent.SFID00478QFAirlineTourism_Tas_SpringRed_PlanetJul16_Sheet1[0].show_price = true;
    devDynamicContent.SFID00478QFAirlineTourism_Tas_SpringRed_PlanetJul16_Sheet1[0].is_default = false;
    devDynamicContent.SFID00478QFAirlineTourism_Tas_SpringRed_PlanetJul16_Sheet1[0].JSON = "https:\/\/qantasflightdeals.herokuapp.com\/api\/search?&dealTypeCode=A&cheapestDealPerDistinctAirportPair=true&travelClass=ECO&tripType=R&quantity=1&marketingRegionCode=au&departureAirportCodes=BNE&arrivalAirportCodes=HBA&callback=callbackFunction";
    devDynamicContent.SFID00478QFAirlineTourism_Tas_SpringRed_PlanetJul16_Sheet1[0].URL = {};
    devDynamicContent.SFID00478QFAirlineTourism_Tas_SpringRed_PlanetJul16_Sheet1[0].URL.Url = "https://www.qantas.com/travel/airlines/international-flight-specials/global/en?departureAirportCode=BNE&arrivalAirportCode=HBA&travelClass=ECO&alt_cam=au:rp:0:dis:dbm:tas:n:n:sg1:n";
    devDynamicContent.SFID00478QFAirlineTourism_Tas_SpringRed_PlanetJul16_Sheet1[0].image1_160x600 = {};
    devDynamicContent.SFID00478QFAirlineTourism_Tas_SpringRed_PlanetJul16_Sheet1[0].image1_160x600.Url = "https://s3-ap-southeast-2.amazonaws.com/qant0065/greg-01-160x600.jpg";
    devDynamicContent.SFID00478QFAirlineTourism_Tas_SpringRed_PlanetJul16_Sheet1[0].image2_160x600 = {};
    devDynamicContent.SFID00478QFAirlineTourism_Tas_SpringRed_PlanetJul16_Sheet1[0].image2_160x600.Url = "https://s3-ap-southeast-2.amazonaws.com/qant0065/greg-02-160x600.jpg";
    devDynamicContent.SFID00478QFAirlineTourism_Tas_SpringRed_PlanetJul16_Sheet1[0].video_160x600 = {};
    devDynamicContent.SFID00478QFAirlineTourism_Tas_SpringRed_PlanetJul16_Sheet1[0].video_160x600.Url = "https://s3-ap-southeast-2.amazonaws.com/qant0065/greg-160x600.mp4";
    devDynamicContent.SFID00478QFAirlineTourism_Tas_SpringRed_PlanetJul16_Sheet1[0].image1_300x250 = {};
    devDynamicContent.SFID00478QFAirlineTourism_Tas_SpringRed_PlanetJul16_Sheet1[0].image1_300x250.Url = "https://s3-ap-southeast-2.amazonaws.com/qant0065/greg-01-300x250.jpg";
    devDynamicContent.SFID00478QFAirlineTourism_Tas_SpringRed_PlanetJul16_Sheet1[0].image2_300x250 = {};
    devDynamicContent.SFID00478QFAirlineTourism_Tas_SpringRed_PlanetJul16_Sheet1[0].image2_300x250.Url = "https://s3-ap-southeast-2.amazonaws.com/qant0065/greg-02-300x250.jpg";
    devDynamicContent.SFID00478QFAirlineTourism_Tas_SpringRed_PlanetJul16_Sheet1[0].video_300x250 = {};
    devDynamicContent.SFID00478QFAirlineTourism_Tas_SpringRed_PlanetJul16_Sheet1[0].video_300x250.Url = "https://s3-ap-southeast-2.amazonaws.com/qant0065/greg-300x250.mp4";
    devDynamicContent.SFID00478QFAirlineTourism_Tas_SpringRed_PlanetJul16_Sheet1[0].image1_300x600 = {};
    devDynamicContent.SFID00478QFAirlineTourism_Tas_SpringRed_PlanetJul16_Sheet1[0].image1_300x600.Url = "https://s3-ap-southeast-2.amazonaws.com/qant0065/greg-01-300x600.jpg";
    devDynamicContent.SFID00478QFAirlineTourism_Tas_SpringRed_PlanetJul16_Sheet1[0].image2_300x600 = {};
    devDynamicContent.SFID00478QFAirlineTourism_Tas_SpringRed_PlanetJul16_Sheet1[0].image2_300x600.Url = "https://s3-ap-southeast-2.amazonaws.com/qant0065/greg-02-300x600.jpg";
    devDynamicContent.SFID00478QFAirlineTourism_Tas_SpringRed_PlanetJul16_Sheet1[0].video_300x600 = {};
    devDynamicContent.SFID00478QFAirlineTourism_Tas_SpringRed_PlanetJul16_Sheet1[0].video_300x600.Url = "https://s3-ap-southeast-2.amazonaws.com/qant0065/greg-300x600.mp4";
    devDynamicContent.SFID00478QFAirlineTourism_Tas_SpringRed_PlanetJul16_Sheet1[0].image1_728x90 = {};
    devDynamicContent.SFID00478QFAirlineTourism_Tas_SpringRed_PlanetJul16_Sheet1[0].image1_728x90.Url = "https://s3-ap-southeast-2.amazonaws.com/qant0065/greg-01-728x90.jpg";
    devDynamicContent.SFID00478QFAirlineTourism_Tas_SpringRed_PlanetJul16_Sheet1[0].image2_728x90 = {};
    devDynamicContent.SFID00478QFAirlineTourism_Tas_SpringRed_PlanetJul16_Sheet1[0].image2_728x90.Url = "https://s3-ap-southeast-2.amazonaws.com/qant0065/greg-02-728x90.jpg";
    devDynamicContent.SFID00478QFAirlineTourism_Tas_SpringRed_PlanetJul16_Sheet1[0].video_728x90 = {};
    devDynamicContent.SFID00478QFAirlineTourism_Tas_SpringRed_PlanetJul16_Sheet1[0].video_728x90.Url = "https://s3-ap-southeast-2.amazonaws.com/qant0065/greg-728x90.mp4";
    devDynamicContent.SFID00478QFAirlineTourism_Tas_SpringRed_PlanetJul16_Sheet1[0].frame1_text_160x600 = "Uncover<br>Tasmania's<br>breathtaking<br>beauty";
    // devDynamicContent.SFID00478QFAirlineTourism_Tas_SpringRed_PlanetJul16_Sheet1[0].frame1_text_160x600 = "Curious about Tasmania";
    devDynamicContent.SFID00478QFAirlineTourism_Tas_SpringRed_PlanetJul16_Sheet1[0].frame1_text_300x250 = "Curious about Tasmania";
    devDynamicContent.SFID00478QFAirlineTourism_Tas_SpringRed_PlanetJul16_Sheet1[0].frame1_text_300x600 = "Curious about Tasmania";
    devDynamicContent.SFID00478QFAirlineTourism_Tas_SpringRed_PlanetJul16_Sheet1[0].frame1_text_728x90 = "Curious about Tasmania";
    // devDynamicContent.SFID00478QFAirlineTourism_Tas_SpringRed_PlanetJul16_Sheet1[0].frame2_text_160x600 = "Expect the unexpected";
    devDynamicContent.SFID00478QFAirlineTourism_Tas_SpringRed_PlanetJul16_Sheet1[0].frame2_text_160x600 = "And<br>discover it's<br>colourful<br>characters";
    devDynamicContent.SFID00478QFAirlineTourism_Tas_SpringRed_PlanetJul16_Sheet1[0].frame2_text_300x250 = "Expect the unexpected";
    devDynamicContent.SFID00478QFAirlineTourism_Tas_SpringRed_PlanetJul16_Sheet1[0].frame2_text_300x600 = "Expect the unexpected";
    devDynamicContent.SFID00478QFAirlineTourism_Tas_SpringRed_PlanetJul16_Sheet1[0].frame2_text_728x90 = "Expect the unexpected";
    devDynamicContent.SFID00478QFAirlineTourism_Tas_SpringRed_PlanetJul16_Sheet1[0].frame2_tasmania_160x600 = "Tasmania on sale";
    devDynamicContent.SFID00478QFAirlineTourism_Tas_SpringRed_PlanetJul16_Sheet1[0].frame2_tasmania_300x250 = "Tasmania on sale";
    devDynamicContent.SFID00478QFAirlineTourism_Tas_SpringRed_PlanetJul16_Sheet1[0].frame2_tasmania_300x600 = "Tasmania on sale";
    devDynamicContent.SFID00478QFAirlineTourism_Tas_SpringRed_PlanetJul16_Sheet1[0].frame2_tasmania_728x90 = "Tasmania on sale";
    devDynamicContent.SFID00478QFAirlineTourism_Tas_SpringRed_PlanetJul16_Sheet1[0].frame3_text_160x600 = "Discover your curious side";
    devDynamicContent.SFID00478QFAirlineTourism_Tas_SpringRed_PlanetJul16_Sheet1[0].frame3_text_300x250 = "Discover your curious side";
    devDynamicContent.SFID00478QFAirlineTourism_Tas_SpringRed_PlanetJul16_Sheet1[0].frame3_text_300x600 = "Discover your curious side";
    devDynamicContent.SFID00478QFAirlineTourism_Tas_SpringRed_PlanetJul16_Sheet1[0].frame3_text_728x90 = "Discover your curious side";
    devDynamicContent.SFID00478QFAirlineTourism_Tas_SpringRed_PlanetJul16_Sheet1[0].cta = "See deals";
    devDynamicContent.SFID00478QFAirlineTourism_Tas_SpringRed_PlanetJul16_Sheet1[0].short_terms = "*Prices based on payment at qantas.com by BPAY or POLi. Sale ends 23:59 (AEST) 1 August 2016, unless sold out prior. Flights between Melbourne and Hobart are on QantasLink. Selected travel dates and conditions apply.";
    Enabler.setDevDynamicContent(devDynamicContent);

    clicktag = dynamicContent.SFID00478QFAirlineTourism_Tas_SpringRed_PlanetJul16_Sheet1[0].URL.Url;
    baseImage01 = dynamicContent.SFID00478QFAirlineTourism_Tas_SpringRed_PlanetJul16_Sheet1[0]['image1_' + size].Url;
    baseImage02 = dynamicContent.SFID00478QFAirlineTourism_Tas_SpringRed_PlanetJul16_Sheet1[0]['image2_' + size].Url;

    $("#f1-copy").html(dynamicContent.SFID00478QFAirlineTourism_Tas_SpringRed_PlanetJul16_Sheet1[0]['frame1_text_' + size])
    $("#f2-copy").html(dynamicContent.SFID00478QFAirlineTourism_Tas_SpringRed_PlanetJul16_Sheet1[0]['frame2_text_' + size])
    $("#f2-1-copy").html(dynamicContent.SFID00478QFAirlineTourism_Tas_SpringRed_PlanetJul16_Sheet1[0]['frame2_tasmania_' + size])
    $("#f2-1-subtext").html(dynamicContent.SFID00478QFAirlineTourism_Tas_SpringRed_PlanetJul16_Sheet1[0]['frame3_text_' + size])
    $(".terms").html(dynamicContent.SFID00478QFAirlineTourism_Tas_SpringRed_PlanetJul16_Sheet1[0].short_terms)
    $("#cta-text").html(dynamicContent.SFID00478QFAirlineTourism_Tas_SpringRed_PlanetJul16_Sheet1[0].cta)

    $('#video').hide();

    preloadAssets()


    if (dynamicContent.SFID00478QFAirlineTourism_Tas_SpringRed_PlanetJul16_Sheet1[0].is_default) {
       backupAnimation();
    } else {
       loadFeed();
    }
}

function exit() {
    Enabler.exitOverride('clickthrough', clicktag);
}

function preloadAssets() {

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
        baseImage01,
        baseImage02
    ]
    preloadimages(i).done(function (images) {
        imagesLoaded = true;
    })
}

function backupAnimation() {
    backup = true;

    if (imagesLoaded) {
        initBanner();
    } else {
        si = setInterval(function() {
            if (imagesLoaded) {
                initBanner();
                clearInterval(si);
            }
        }, 250)
    }
}

function initBanner() {

    if (!Enabler.isVisible())
        Enabler.addEventListener(studio.events.StudioEvent.VISIBLE, initAnimation);
    else
        initAnimation();
}



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

    if(dynamicContent.SFID00478QFAirlineTourism_Tas_SpringRed_PlanetJul16_Sheet1[0].version === "Greg") {

    }else {
        $("#f1-copy").css("bottom", "98px")
        $("#f2-copy").css("bottom", "98px")
    }

}


function loadFeed() {
    $.ajax({
        type: 'GET',
        url: dynamicContent.SFID00478QFAirlineTourism_Tas_SpringRed_PlanetJul16_Sheet1[0].JSON,
        async: false,
        contentType: "application/json",
        dataType: 'json',
        success: function(json) {

            if (json.error) {
                backupAnimation();
                return;
            }

            deal = json.dealQueryResult.result.deals.deal;


            if (json.dealQueryResult.result.deals.numberOfDeals == "0") {
                backupAnimation();
                return;
            }

            var dest = deal.arrivalAirport.airport.displayName;

            $("#from").html("Fly from<br>" + deal.departureAirport.airport.displayName + " to");
            $("#destination").html(deal.arrivalAirport.airport.displayName);
            $("#price").html(deal.price.currencySymbol + deal.price.value + "<span id='asterix-char'>*</span>");

            if (dest.length > 25) {
                $("#destination").css("fontSize", "16px");
            }

            if (dest.indexOf("(") > -1) {

                if (dest.length > 22) {
                    $("#destination").css("fontSize", "20px");
                } else if (dest.indexOf("(") > -1 && dest.length > 22) {
                    $("#destination").css("fontSize", "20px");
                } else {
                    $("#destination").css("fontSize", "34px");
                }
            }

            var rightcopy = "";

            if (deal.travelClass.indexOf("ECO") > -1)
                rightcopy += "Economy<br>";

            if (deal.travelClass.indexOf("BUS") > -1)
                rightcopy += "Business<br>";

            if (deal.travelClass.indexOf("PRE") > -1)
                rightcopy += "Premium Economy<br>";

            if (deal.travelClass.indexOf("FIR") > -1)
                rightcopy += "First class<br>";

            if (deal.tripType.value == "O")
                rightcopy += "One-way";
            else
                rightcopy += "return";

            $("#price-right-copy").html(rightcopy);


            if (imagesLoaded) {
                initBanner();
            } else {
                si = setInterval(function() {
                    if (imagesLoaded) {
                        initBanner();
                        clearInterval(si);
                    }
                }, 250)
            }
        },
        error: function(e) {
            console.log("ERROR");
            console.log(e);
            backupAnimation();
        }

    });
}

function initAnimation() {


    var isDesktop = true;

    if (md.phone() || md.tablet())
        isDesktop = false;

    var videoURL = dynamicContent.SFID00478QFAirlineTourism_Tas_SpringRed_PlanetJul16_Sheet1[0]['video_' + size].Url;

    // console.log("videoURL:"+videoURL);

    if (videoURL != "" && videoURL.indexOf('https://') > -1 && isDesktop) {
        videoSetup()
    } else {
        $('.bg-image-01').attr('src', baseImage01);
        $('.bg-image-02').attr('src', baseImage02);
        initCSS();
        startAnimation();
        adjustCopyLayout();
    }

    console.log(name);
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
    tl.from("#f1-copy", 1.5, {alpha: 0, y:10, ease: Sine.easeOut}, "1")


    //Frame 02
    tl.to("#f1-copy", .5, {alpha: 0, ease: Sine.easeIn}, "5.7")
    tl.from("#f2-copy", 1.5, {alpha: 0, ease: Sine.easeOut}, "6.2")
    tl.to(".bg-image-01", 1.5, {alpha:0, ease:Sine.easeOut}, "6.2")


    tl.to("#f2-copy", .5, {alpha: 0, ease: Sine.easeIn}, "11.7")
    tl.from(["#f2-1-copy", "#f2-1-subtext"], 1.5, {alpha: 0, ease: Sine.easeOut}, "12.2")
    tl.to("#video", 1, {alpha:0, ease:Sine.easeOut},"12.2")
    tl.to(".bg-image-02", 1, {alpha:0, ease:Sine.easeOut}, "12.2")




    if(backup) {

        $("#f3-copy").hide()
        tl.from(ctaBtn, 1.7, {alpha: 0, scaleX: .5, scaleY: .5, ease: Expo.easeOut, force3D:true}, "13.7")

        tl.to("#white-shape", 1.4, {alpha:1, y: 30, scaleX:1, scaleY:1, ease: Sine.easeInOut, force3D:false}, "12.7")
        tl.to(".logos-qantas", 1.3, {y:-66, scaleX:1, scaleY:1, ease: Sine.easeInOut, force3D:true}, "12.7")
        tl.from(".logos-partners", .7, {alpha: 0, y:30, transformOrigin: "50% 50%", scaleX:.8, scaleY:.8, ease: Sine.easeOut, force3D:true}, "13.7")
        tl.from(".terms-wrapper", 1, {alpha: 0, ease: Sine.easeOut, force3D:true}, "13.7")

        tl.to("#red-shape-end-frame", 2, {autoAlpha:.4, scaleX: .7, scaleY: .7, x: 453, y: 87, rotation:0, ease: Sine.easeOut, force3D:true}, "12.5")
        tl.to("#red-shape-end-frame2", 3, {autoAlpha:.3, rotation:20, scaleX: .43, scaleY: .43, x:-6, y:7, ease: Sine.easeInOut, force3D:true}, "11.7")

    } else {
        //Adjust CTA button position
        var f3height = $("#f3-copy").outerHeight(true)
        var btnOffset = 64 + f3height + 20
        $(".button").css('top',btnOffset + 'px')

        tl.to(["#f2-1-copy", "#f2-1-subtext"], .5, {alpha: 0, ease: Sine.easeIn}, "15.7")
        tl.from("#f3-copy", 1.5, {alpha: 0, ease: Sine.easeOut}, "16.2")
        tl.from(ctaBtn, 1.7, {alpha: 0, scaleX: .5, scaleY: .5, ease: Expo.easeOut, force3D:true}, "17.7")

        tl.to("#white-shape", 1.4, {alpha:1, y: 30, scaleX:1, scaleY:1, ease: Sine.easeInOut, force3D:false}, "16.7")
        tl.to(".logos-qantas", 1.3, {y:-66, scaleX:1, scaleY:1, ease: Sine.easeInOut, force3D:true}, "16.7")
        tl.from(".logos-partners", .7, {alpha: 0, y:30, transformOrigin: "50% 50%", scaleX:.8, scaleY:.8, ease: Sine.easeOut, force3D:true}, "17.7")
        tl.from(".terms-wrapper", 1, {alpha: 0, ease: Sine.easeOut, force3D:true}, "17.7")

        tl.to("#red-shape-end-frame2", 2.5, {autoAlpha:.4, rotation:-20, scaleX: 1.3, scaleY: 1.3, x:40, y:-150, ease: Sine.easeOut, force3D:true}, "13")

        tl.to("#red-shape-end-frame", 2, {autoAlpha:.4, scaleX: .7, scaleY: .7, x: 453, y: 87, rotation:0, ease: Sine.easeOut, force3D:true}, "16.5")
        tl.to("#red-shape-end-frame2", 3, {autoAlpha:.3, rotation:20, scaleX: .43, scaleY: .43, x:-6, y:7, ease: Sine.easeInOut, force3D:true}, "15.7")
    }

    // TESTING - goto specific time of animation
    // tl.seek(10);
    // tl.pause(8)
}

function playVideo() {
	$('#video video').get(0).play();
}

function videoSetup() {

    // console.log("video setuo")

    $('#video').show();

    var mp4 = dynamicContent.SFID00478QFAirlineTourism_Tas_SpringRed_PlanetJul16_Sheet1[0]['video_' + size].Url;
    var webm = mp4.split(".mp4")[0] + ".webm";

    var vid = document.getElementById('video-el');

    $('#video video > source:eq(0)').attr('src', mp4);
    $('#video video > source:eq(1)').attr('src', webm);

    $('#video video').load();
    $('#video video').bind('loadeddata', function (e) {

        if (vid.readyState == 3 || vid.readyState == 4) {
            initCSS();
            startAnimation();
            adjustCopyLayout();
        }

    });

    $('#video video').bind('error', function (e) {
        initCSS();
        startAnimation();
        adjustCopyLayout();
    });

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
