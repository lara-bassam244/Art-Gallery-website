$(document).ready(function() {
    $(".menu-icon").click(() => {
        $("nav").toggleClass("active");
        $(".menu-icon").toggleClass("active");
    });
});
//home button
$(document).ready(function(){
    $(".home-btn").click(()=>{
        window.location.href = "artwork.html";
    })
})

