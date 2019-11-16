$(document).ready(function(){
    const navbar = document.getElementById("navbar-main");
    const header = document.getElementById("main-header");

    const sliders = document.querySelectorAll(".slide-in");

    const options = {
        rootMargin: "500px 0px 0px 0px"
    };

    const slideOptions = {
        threshold: .5
    };

    function preloader() {
    let loader = document.getElementById("status");
    let loaderContainer = document.getElementById("preloader");
    if (loader.className.indexOf('fade-in-out')!==1){
       loader.classList.add('fade-in-out');
    }
    setTimeout(function () {
        loaderContainer.remove();
    }, 1000);
}

    const aboutSectionObserver = new IntersectionObserver(function(entries){
        entries.forEach(function (entry) {
            if(!entry.isIntersecting){
                navbar.classList.remove("navbar-transparent-style");
                navbar.classList.add("navbar-style");
            }
            else{
                navbar.classList.remove("navbar-style");
                navbar.classList.add("navbar-transparent-style");
            }
        })
    },options);

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

    const slideOnScroll = new IntersectionObserver(function(entries, slideOnScroll){
        entries.forEach(function (entry) {
            if(!entry.isIntersecting){
                return;
            }
            else{
                entry.target.classList.add("appear");
                slideOnScroll.unobserve(entry.target);
            }
        });
    }, slideOptions);


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


    preloader();

    /*$(window).scroll(function () {
        if($(window).scrollTop() > 555){
            document.getElementById("navbar-main").classList.remove("navbar-transparent-style");
            document.getElementById("navbar-main").classList.add("navbar-style");

        }
        else{
            document.getElementById("navbar-main").classList.remove("navbar-style");
            document.getElementById("navbar-main").classList.add("navbar-transparent-style");
            $("#navbar-main").fadeIn(3000);
        }
    });*/

    aboutSectionObserver.observe(header);

    countDown();

    sliders.forEach(function (slider) {
        slideOnScroll.observe(slider);
    });

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