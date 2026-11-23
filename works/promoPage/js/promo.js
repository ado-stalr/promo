window.addEventListener('load', function() {
    setBodyLoaded();
});

function setBodyLoaded() {
    var body = document.getElementsByTagName('body')[0];
    body.classList.add('loaded');
}

function initMobileMenu() {
    let $menuButton = $('#menu_button');

    function toggleMenuClasses() {
        $menuButton.toggleClass('active');
        $('#top_menu').toggleClass('active');
        $('#header').toggleClass('active');
    }

    $menuButton.click(toggleMenuClasses);
    $('.top_nav_item a').click(toggleMenuClasses);
}

initMobileMenu();