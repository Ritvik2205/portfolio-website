// loading the DOM Content
$(function(){
    $("#nav-placeholder").load("nav.html");
});

$(".navbar").on( "click", "a", function() {
    $(this).addClass('active').siblings().removeClass('active');
    });
