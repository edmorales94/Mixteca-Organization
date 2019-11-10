$(document).ready(function(){
    let window = $(window);

    function preloader() {
    let loader = document.getElementById("status");
    let loaderContainer = document.getElementById("preloader");
    loader.classList.forEach(function (el) {
        console.log(el)
    });
    if (loader.className.indexOf('fade-in-out')!==1){
       loader.classList.add('fade-in-out');
    }
    setTimeout(function () {
        loaderContainer.remove()
    }, 1000);
}

    function countDown(){
        let deadline = new Date("may 07, 2020 19:00:00").getTime();
        let time = setInterval(function () {
            let now = new Date().getTime();
            let remaining = deadline - now;

            //conversion from milliseconds to months
            let milliseconds = 1000;
            let _minute = milliseconds *60;
            let _hour = _minute * 60;
            let _day = _hour * 24;
            let _month = _day * 30;

            if (remaining < 0){
                clearInterval(time);
                $("#month").html("0");
                $("#day").html("0");
                $("#hour").html("0");
                $("#minute").html("0");
                $("#clock-message").html("Sorry, you missed the party :(");
            }
            else{
                let months = Math.floor(remaining/_month);
                let days = Math.floor((remaining%_month)/_day);
                let hours = Math.floor((remaining%_day)/_hour);
                let minutes = Math.floor((remaining%(1000 * 60 * 60))/(1000*60));
                $("#month").html(months);
                $("#day").html(days);
                $("#hour").html(hours);
                $("#minute").html(minutes);
            }
        }, 1000);
    }

    function check_if_in_view() {
        let animation_elements = $(".about-animation");
        let window_height = window.height();
        let window_top_position = window.scrollTop();
        let window_bottom_position = (window_top_position + window_height);

        $.each(animation_elements, function () {
            let element = $(this);
            let element_height = element.outerHeight();
            let element_top_position = element.offset().top;
            let element_bottom_position = (element_top_position + element_height);

            if((element_bottom_position >= window_top_position) && (element_top_position <= window_bottom_position)){
                element.addClass('in-view');
            }
            else{
                element.removeClass('in-view');
            }
        });
    }

    function ticketsButtons(){
        let rsvp = $("#rsvp");
        rsvp.click(function () {
            rsvp.fadeOut(1100);
            $("#eventbrite-widget-container-79932912493").fadeIn(1050);
            $("#hide-tickets").fadeIn(1100);
        });

        let closeTickets = $("#hide-tickets");
        closeTickets.click(function () {
            $("#eventbrite-widget-container-79932912493").fadeOut(1100);
            closeTickets.fadeOut(1100);
            $("#rsvp").fadeIn(1200);
        });
    }


    //preloader();

    window.scroll(function () {
        if(window.scrollTop() > 550){
            document.getElementById("navbar-main").style.background = "linear-gradient(to left, #c4499c, #ffe11d)";
            $("#navbar-main").fadeIn(3000);
        }
        else{
            document.getElementById("navbar-main").style.background = "rgba(0, 0, 0, 0.1)";
            $("#navbar-main").fadeIn(3000);
        }
    });

    countDown();
    window.on('scroll resize', check_if_in_view);
    window.trigger('scroll');
    ticketsButtons();

    let exampleCallback = function() {
        console.log('Order complete!');
    };

    window.EBWidgets.createWidget({
        // Required
        widgetType: 'checkout',
        eventId: '79932912493',
        iframeContainerId: 'eventbrite-widget-container-79932912493',

        // Optional
        iframeContainerHeight: 425,  // Widget height in pixels. Defaults to a minimum of 425px if not provided
        onOrderComplete: exampleCallback  // Method called when an order has successfully completed
    });
});