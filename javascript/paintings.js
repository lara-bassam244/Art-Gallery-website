$(document).ready(function () {
    $.getJSON('paintings.json', function (data) {
        $.each(data, function (index, painting) {
            let paintingHTML = `
                <div class="painting">
                    <div class="img-container">
                    <img src="${painting.image}" alt="${painting.name}">
                    </div>
                    <p>${painting.year}</p>
                    <h2>${painting.name}</h2>
                </div>
            `;
            $('#paintings').append(paintingHTML);

            $('.painting').eq(index).click(function () {
                let detailURL = `paintingdetails.html?id=${encodeURIComponent(painting.id)}`;
                window.location.href = detailURL;
            });
        });
    });
    
});