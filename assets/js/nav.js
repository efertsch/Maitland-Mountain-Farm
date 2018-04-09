var navbarTogglerButton = $('button.navbar-toggler'),
    dropdownMenu = $('nav.navbar')


navbarTogglerButton.on('click', function(){
  dropdownMenu.toggleClass('opaqueBackground');
})

//Issue: navbar remains opaque if screen is expanded
