const form = document.querySelector('form');
const list = document.getElementById('list');

const BASE_URL = "https://api.tvmaze.com";

function createImage(imageUrl) {
    const image = document.createElement('img');
    image.setAttribute('src', imageUrl);
    return image;
}

async function fetchShows(searchText) {
    try {
        const res = await fetch(`${BASE_URL}/search/shows?q=${searchText}`);
        if (res.status !== 200) {
            return;
        }

        const data = await res.json();
        for (let item of data) {
            if (item.show.image) {
                const imageUrl = item.show.image.medium;
                const image = createImage(imageUrl);
                list.append(image);
            }
        }
    }
    catch (e) {
        
    }
}


function removeSearchResult() {
    while (list.firstChild) {
        list.firstChild.remove();
    }
}

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const searchText = e.target.elements[0].value;
    removeSearchResult();
    fetchShows(searchText);
    e.target.elements[0].value = "";
})