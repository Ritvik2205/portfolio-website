// loading the DOM Content
$(function(){
    $("#nav-placeholder").load("nav.html");
});


$(".home-img-clickable").on("click", function(e) {
    
    var currentTheme = $("html").attr("data-theme");
    if (currentTheme === "light") {
        $("html").attr("data-theme", "dark");
    } else {
        $("html").attr("data-theme", "light");
    }
    e.preventDefault();
});   