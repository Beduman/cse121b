/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = { 
    name: 'Braden Hunsaker',
    photo: 'images/brady.jpg',
    favoritefoods: ['Fettuccini Alfredo',' Biscuits and Gravy', ' Eggs in all forms'],
    hobbies: ['hiking', 'gaming', 'reading', 'programming', 'building computers'],
    placesLived: [],

};


/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
    {
        place: ['Maricopa, AZ', 'Greenville, SC'],
        length: ['15 years', '2 years']
}
)



/* DOM Manipulation - Output */
/* Name */
document.querySelector('#name').textContent = myProfile.name;

/* Photo with attributes */
document.querySelector('#photo').setAttribute('src', myProfile.photo);
document.querySelector('#photo').setAttribute('alt', myProfile.name);

/* Favorite Foods List*/
myProfile.favoritefoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
});

/* Hobbies List */
myProfile.hobbies.forEach(food => {
    let ul = document.createElement('ul');
    ul.textContent = food;
    document.querySelector('#hobbies').appendChild(ul);
});

/* Places Lived DataList */
myProfile.placesLived.place.forEach(food => {
    let dt = document.createElement('dt');
    dt.textContent = food;
    document.querySelector('#places-lived').appendChild(dt);
});

myProfile.placesLived.length.forEach(food => {
    let dd = document.createElement('dd');
    dd.textContent = food;
    document.querySelector('#places-lived').appendChild(dd);
});