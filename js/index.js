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
    $(window).scroll(function () {
        if($(window).scrollTop() > 50){
            document.getElementById("navbar-main").style.background = "-webkit-linear-gradient(to left, #c4499c, #ffe11d)";
            console.log("worked");
        }
        else{
            //$('nav').classList.add("navbar-style");
            document.getElementById("navbar-main").style.background
        }
    });
    //preloader();
    //transparentNavbar();
});