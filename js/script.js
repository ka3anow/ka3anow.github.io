$(document).ready(function() {

    var sync1 = $("#carousel");
    var sync2 = $("#carousel2");
    var slidesPerPage = 3; //globaly define number of elements per page
    var syncedSecondary = true;

    sync1.owlCarousel({
        slideSpeed: 2000,
        nav: false,
        center: true,
        autoplay: false, 
        dots: false,
        loop: true,
        responsiveRefreshRate: 200,
        responsive:{
                0:{
                    items:1
                },
                768:{
                    items:3
                },
                1920:{
                    items:3
                }
            },
    }).on('changed.owl.carousel', syncPosition);

    sync2.on('initialized.owl.carousel', function() {
            sync2.find(".owl-item").eq(0).addClass("current");
        }).owlCarousel({
            items: 5,
            dots: true,
            nav: true,
            smartSpeed: 200,
            slideSpeed: 500,
            margin: 10,
            slideBy: slidesPerPage, //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel
            responsiveRefreshRate: 100
        }).on('changed.owl.carousel', syncPosition2);

    function syncPosition(el) {
        //if you set loop to false, you have to restore this next line
        //var current = el.item.index;

        //if you disable loop you have to comment this block
        var count = el.item.count - 1;
        var current = Math.round(el.item.index - (el.item.count / 2) - .5);

        if (current < 0) {
            current = count;
        }
        if (current > count) {
            current = 0;
        }

        //end block

        sync2
            .find(".owl-item")
            .removeClass("current")
            .eq(current)
            .addClass("current");
        var onscreen = sync2.find('.owl-item.active').length - 1;
        var start = sync2.find('.owl-item.active').first().index();
        var end = sync2.find('.owl-item.active').last().index();

        if (current > end) {
            sync2.data('owl.carousel').to(current, 100, true);
        }
        if (current < start) {
            sync2.data('owl.carousel').to(current - onscreen, 100, true);
        }
    }

    function syncPosition2(el) {
        return false
        if (syncedSecondary) {
            var number = el.item.index;
            sync1.data('owl.carousel').to(number, 100, true);
        }
    }

    sync2.on("click", ".owl-item", function(e) {
        e.preventDefault();
        var number = $(this).index();
        sync1.data('owl.carousel').to(number, 300, true);
    });

});

