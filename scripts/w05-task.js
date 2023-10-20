/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.getElementById('temples');
let templeList = [];

/* async displayTemples Function */
const displayTemples = (temples) => {
    temples.array.forEach(element => {
        let article = document.createElement('article');
        let h3 = document.createElement('article');
        let img = document.createElement('img');
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


/* sortBy Function */



getTemples();

/* Event Listener */
