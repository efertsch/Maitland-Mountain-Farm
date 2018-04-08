var navbarTogglerButton = $('button.navbar-toggler');
var dropdownMenu = $('nav.navbar');

navbarTogglerButton.on('click', function(){
  dropdownMenu.toggleClass('opaqueBackground');
})

//Issue: navbar remains opaque if screen is expanded
