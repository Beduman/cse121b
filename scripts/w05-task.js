/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.getElementById('#temples');
let templeList = [];

/* async displayTemples Function */
const displayTemples = (temples) => {
    temples.forEach((element) => {
        const article = document.createElement('article');
        const h3 = document.createElement('h3');
        h3.textContent = temple.templeName;
        const img = document.createElement('img');
        img.src = temple.imageUrl;
        article.appendChild(h3, img);
    
        templesElement.appendChild(article);
    });
}

/* async getTemples Function using fetch()*/
const getTemples = async () => {
    const response = await fetch ("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json")
    const templeList = await response.json
}

/* reset Function */
function reset() {
    templeList = []
}

/* sortBy Function */
function sortBy(temples) {
    document.getElementById('temples');
    reset();
    const filter = document.getElementById('sortBy');
    switch (filter) {
        case 'utah':
            displayTemples(temples.filter(temple => temple.location.includes('Utah')));
            break;
        case 'notutah':
            displayTemples(temples.filter(temple => !temple.location.includes('Utah')));
            break;
        case 'older':
            displayTemples(temples.filter(temple => new Date(temple.dedicatedDate) < new Date(1950, 0, 1)));
            break;
        case 'all':
            displayTemples(temples);
    }
}

/* Event Listener */
document.querySelector('sortby').addEventListener('change', () => {sortBy(templeList)});

getTemples();