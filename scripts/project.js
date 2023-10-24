const monsterselement = document.getElementById('monsters');
let monsterlist = [];

const displayTemples = (temples) => {
    temples.forEach((element) => {
        const article = document.createElement('article');
        const h3 = document.createElement('h3');
        h3.textContent = element.slug;
        const p = document.createElement('p');
        p.textContent = element.type;
        const img = document.createElement('img');
        img.src = element.imageUrl;
        article.appendChild(h3);
        article.appendChild(p);
        article.appendChild(img);
        monsterselement.appendChild(article);
    });
}