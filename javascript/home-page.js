$(document).ready(function() {
    //home button
    $(".home-btn").click(()=>{
        window.location.href = "paintings.html";
    });
//fetch json file
    $.getJSON('paintings.json', function(data){
        let featuredArt = data.filter(painting => {
            return painting.name === "The Presistence of Memory" ||
            painting.name === "The Sublime Moment" ||
            painting.name === "Swans Reflecting Elephants";  
        });
        $.each(featuredArt, function(index, painting) {
            let img = $('<img>');
            img.attr('src', painting.image);
            img.attr('alt', painting.name);
            $('.art-pieces').append(img);
        });
    });
    });