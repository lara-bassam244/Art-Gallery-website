$(document).ready(function() {
    $(".home-btn").click(()=>{
        window.location.href = "paintings.html";
    });
    $.getJSON('paintings.json', function(data){
        let featuredArt = data.filter(painting => {
            return painting.name === "The Persistence of Memory" ||
            painting.name === "The Sublime Moment" ||
            painting.name === "Swans Reflecting Elephants";  
        });
        $.each(featuredArt, function(index, painting) {
            let img = $('<img>');
            img.attr('src', painting.image);
            img.attr('alt', painting.name);

            img.click(function() {
                window.location.href = "paintings.html";
            });
            $('.art-pieces').append(img);
        });
    });
 });