$(document).ready(function() {
    $(window).on('scroll', function() {
        let scrollPos = $(window).scrollTop();
        
        $('.section').each(function() {
            let top = $(this).offset().top - 150;
            let bottom = top + $(this).outerHeight();
            let id = $(this).attr('id');

            if (scrollPos >= top && scrollPos <= bottom) {
                $('.nav-menu a').removeClass('active');
                $('.nav-menu a[href="#' + id + '"]').addClass('active');
            }
        });
    });
});

$(document).ready(function() {
    // Aggiungiamo lo spotlight al body se non presente nell'HTML
    if ($('.spotlight').length === 0) {
        $('body').append('<div class="spotlight"></div>');
    }

    $(window).on('mousemove', function(e) {
        // Aggiorniamo le variabili CSS direttamente sull'elemento spotlight
        $('.spotlight').css({
            '--x': e.clientX + 'px',
            '--y': e.clientY + 'px'
        });
    });
});




