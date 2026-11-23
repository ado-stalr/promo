$(window).on('load', function(){
    initMobileMenu();
    initPopup();
    initScrollUpButton();
    smoothScrollFromTopMenu();
    validateSubscribeForm();
});

$(window).on('scroll', function() {
    toggleScrollUpButton();
});

function toggleScrollUpButton() {
    var TOP_OFFSET = 0;
    if ($('html').scrollTop() > $(window).height() - TOP_OFFSET) {
        $('#scrollUpArrow').addClass('visible');
    }
    else {
        $('#scrollUpArrow').removeClass('visible');
    }
}

function initMobileMenu() {
    $('#menuButton').on('click', function() {
        $('#menuButton').toggleClass('active');
        $('#menuContainer').toggleClass('active');
    });
}

function initPopup() {
    $('#subscribePopupButton').click(function() {
        $('#overlay').addClass('visible');
        $('#popupWindow').addClass('visible');
        $('#emailField').focus();
    });

    $('#closeButton').click(function() {
        $('#overlay').removeClass('visible');
        $('#popupWindow').removeClass('visible');
    });

    $('#popupWindow').click(function(event){
        if (event.target.id == 'popupWindow') {
            $('#overlay').removeClass('visible');
            $('#popupWindow').removeClass('visible');
        }
    });
}

function initScrollUpButton() {
    $('#scrollUpArrow').click(function() {
        var topOffset = $('#about').offset().top;   
        $('html').animate({
            scrollTop: 0
        }, 1000);
    });
}

function smoothScrollFromTopMenu() {
    $('.js_menu_link').each(function() {
        $(this).click(function() {
            let scrollTarget = $(this).attr('href');
            $(window).scrollTo($(scrollTarget), 500);
            closeMobileMenu();
        })
    })
}

function closeMobileMenu() {
    $('#menuButton').removeClass('active');
    $('#menuContainer').removeClass('active');
}

function validateSubscribeForm() {
    let $form = $('#subscribeForm');
    let $email = $('#emailField');

    $form.submit(function() {
        let re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/

        if ($email.val() == '' || !re.test($email.val())){
            event.preventDefault();
            $email.addClass('error');
            $('#errorMessage').removeClass('hidden');
        }
    });
    $email.focus(function() {
        $email.removeClass('error');
        $('#errorMessage').addClass('hidden');
    });
}