$(document).ready(function () {
    $.getJSON('paintings.json', function (data) {
        $.each(data, function (index, painting) {
            let paintingHTML = `
                <div class="painting">
                    <h2>${painting.name}</h2>
                    <p>Year: ${painting.year}</p>
                    <img src="${painting.image}" alt="${painting.name}">
                </div>
            `;
            $('#paintings').append(paintingHTML);
        });
    });
});