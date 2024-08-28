const URL = 'https://api.thecatapi.com/v1/images/search';
async function getURL () {
    const response = await fetch(URL);
    const data = await response.json();
    const img = document.querySelector('img');
    img.src = data[0].url;
}

getURL();