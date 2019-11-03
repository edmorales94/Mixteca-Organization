$(document).ready(function(){
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

    //preloader();

    $(window).scroll(function () {
        if($(window).scrollTop() > 550){
            document.getElementById("navbar-main").style.background = "linear-gradient(to left, #c4499c, #ffe11d)";
            $("#navbar-main").fadeIn(3000);
        }
        else{
            document.getElementById("navbar-main").style.background = "rgba(0, 0, 0, 0.5)";
            $("#navbar-main").fadeIn(3000);
        }
    });

    let rsvp = document.getElementById("rsvp");
    rsvp.addEventListener("click", function (event) {
       let tickets = $("#eventbrite-widget-container-79932912493");
        tickets.fadeIn(1100);
        $("#hide-tickets").show();
        this.style.display = "none"
    });

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
    countDown();
});