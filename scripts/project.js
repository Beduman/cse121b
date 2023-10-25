const monstersElement = document.getElementById('monsters');
let monsterList = [];

function reset(element) {
    element.innerHTML = '';
}

function displayMonsters(monsters) {
    monsters.forEach((element) => {
        const article = document.createElement('article');
        const h3 = document.createElement('h3');
        h3.textContent = element.slug;
        const p = document.createElement('p');
        p.textContent = element.type;
        const s = document.createElement('p');
        s.textContent = element.size;
        const description = document.createElement('p');
        description.textContent = element.desc
        article.appendChild(h3);
        article.appendChild(p);
        article.appendChild(s);
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
    const monsterSearch = document.getElementById('search').value;
    reset(monstersElement);

    console.log('do we even get to this point?');
    displayMonsters(monsters.filter(monsters => monsters.slug.includes(monsterSearch)));
    console.log(monsterSearch);
}


document.getElementById('search').addEventListener('change', () => { search(monsterList)});

getMonsters();
