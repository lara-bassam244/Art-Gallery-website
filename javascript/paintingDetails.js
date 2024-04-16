let paintings = null;
fetch('paintings.json')
.then(response => response.json())
.then(data => {
    paintings = data;
    showDetails();
})

function showDetails(){
    let details = document.querySelector(".details");
    let paintingId = new URLSearchParams(window.location.search).get('id');
    let thisPainting = paintings.filter(value => {
        return value.id == paintingId;
    })[0];

    details.querySelector('img').src = thisPainting.image;
    details.querySelector('.name').innerHTML = thisPainting.name;
    details.querySelector('.year').innerHTML = thisPainting.year;
    details.querySelector('.description').innerHTML = thisPainting.description;
}