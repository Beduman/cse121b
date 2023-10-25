
const monstersElement = document.getElementById('monsters');
let monsterList = [];

function reset(element) {
    element.innerHTML = '';
}

async function displayMonsters(monsters) {
    reset(monstersElement);
    monsters.forEach((element) => {
        const article = document.createElement('article');
        const h3 = document.createElement('h3');
        h3.textContent = `${element.slug}`
        const p = document.createElement('p');
        p.textContent = `${element.type}`;
        const size = document.createElement('p');
        size.textContent = `${element.size}`;
        const description = document.createElement('p');
        description.textContent = `${element.desc}`;
        article.appendChild(h3);
        article.appendChild(p);
        article.appendChild(size);
        article.appendChild(description);
        monstersElement.appendChild(article);
    });
}


async function getMonsters () {
    const response = await fetch("https://run.mocky.io/v3/eb41f4f1-e5ea-4443-bb79-2e282188da65");
    monsterList = await response.json();
    displayMonsters(monsterList);
}

function search (monsters) {
    const monsterSearch = document.querySelector('[data-search]');

    console.log('do we even get to this point?');

    monsterSearch.addEventListener('input', e => {
        const value = e.target.value;
        console.log(value);
        newarray = monsters.filter(monsters => {return monsters.slug.includes(value)})
        console.log(newarray);
        displayMonsters(newarray);
    })



}


document.getElementById('search').addEventListener('input', () => { search(monsterList)});

getMonsters();
