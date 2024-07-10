
// loading the DOM Content   
$(function(e) {
    $(function(){
        $("#nav-placeholder").load("nav.html");
        console.log("Page reloaded");
    });

    var currentTheme = $("html").attr("data-theme");
    console.log(localStorage.getItem('theme'));
    if(localStorage.getItem('theme')){
        currentTheme = localStorage.getItem('theme');
        $("html").attr("data-theme", currentTheme);
    }
    
    
    $(".home-image img").on("click", function(e) {
        
        $(document).load("index.html");
        var currentTheme = $("html").attr("data-theme");
        console.log(localStorage.getItem('theme'));
        if(localStorage.getItem('theme')){
            currentTheme = localStorage.getItem('theme');
            $("html").attr("data-theme", currentTheme);
        }
        if (currentTheme === "light") {
            $("html").attr("data-theme", "dark");
            localStorage.setItem('theme', 'dark');
        } else {
            $("html").attr("data-theme", "light");
            localStorage.setItem('theme', 'light');
        }
        e.preventDefault();
    }); 

    var typed = new Typed(".text-effect", {
        strings: ["CS Student", "Artist", "Author"],
        typeSpeed: 100,
        backSpeed: 75,
        backDelay: 1000,
        loop: true
    })


});
 

// // adding event listener to navbar burger
// $(".navbar-burger").click(function() {
//     $(this).toggleClass("is-active");
//     var target = $(".navbar-menu");
//     if (target.hasClass('is-hidden')){
//         target.removeClass('is-hidden');
//         } else {
//             target.addClass('is-hidden')
//             };
// })





















