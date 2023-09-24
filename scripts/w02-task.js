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




/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;



/* Step 5 - Array */
let favFood = ['Fettuccini Alfredo',' Biscuits and Gravy', ' Eggs in all forms'];
foodElement.innerHTML = `<strong>${favFood}</strong>`;




