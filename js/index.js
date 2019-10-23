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
    preloader();
    $(window).scroll(function () {
        if($(window).scrollTop() > 550){
            document.getElementById("navbar-main").style.background = "linear-gradient(to left, #c4499c, #ffe11d)";
            console.log("worked");
        }
        else{
            //$('nav').classList.add("navbar-style");
            document.getElementById("navbar-main").style.transition = "background 3s ease-out";
            document.getElementById("navbar-main").style.background = "rgba(0, 0, 0, 0.5)";
        }
    });

    //transparentNavbar();
});