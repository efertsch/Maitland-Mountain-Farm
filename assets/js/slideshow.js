
$("#slideshow").vegas({
    timer: false,
    transitionDuration: 2000,
    slides: [
        { src: "assets/images/farm/pickles.png" },
        { src: "assets/images/farm/garlic.jpg" },
        { src: "assets/images/farm/squash.jpg" },
        { src: "assets/images/farm/tomatoes.jpg" }
    ],
    animation: 'kenburnsUp'
});

$("#aboutSlideshow").vegas({
    timer: false,
    transitionDuration: 3000,
    slides: [
        { src: "assets/images/family/family_window.jpg" },
        { src: "assets/images/family/holly_in_gh.jpg" },
        { src: "assets/images/family/jett_with_chickens.jpg" },
        { src: "assets/images/family/maitland_family.jpg" }
    ],
    animation: 'kenburnsUp'
});
