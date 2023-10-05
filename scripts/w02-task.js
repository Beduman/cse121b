/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = "Braden Hunsaker";
let currentYear = 2023;
let profilePicture = "images/brady.jpg";



/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = document.querySelector('img');



/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `Profile image of ${fullName}`);


/* Step 5 - Array */
let favFood = ['Fettuccini Alfredo',' Biscuits and Gravy', ' Eggs in all forms'];
foodElement.innerHTML = `<strong>${favFood}</strong>`;
let favoritefoods = ['Ice Cream', 'Burgers'];
favFood.push(favoritefoods);
foodElement.innerHTML += `<br>${favFood}`;
favFood.splice(0,1);
foodElement.innerHTML += `<br>${favFood}`;
favFood.pop();
foodElement.innerHTML += `<br>${favFood}`;




