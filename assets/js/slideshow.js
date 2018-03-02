$(function() {
$('.slideshow img:gt(0)').hide();

setInterval(function () {
    $('.slideshow :first-child').fadeOut(3000)
                             .next('img')
                             .fadeIn(3000)
                             .end()
                             .appendTo('.slideshow');
}, 4000); // 4 seconds
});
