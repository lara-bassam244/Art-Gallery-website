//nav-bar for smol menu
$(document).ready(function() {
    console.log("menu icon clicked")
    $(".menu-icon").click(function() {
        $("nav").toggleClass("active");
        $(".menu-icon").toggleClass("active");
    });
});

