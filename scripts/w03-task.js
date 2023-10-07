/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add (number1, number2){
    return number1 + number2
}

function addNumbers() {
    let addNumber1 = Number(document.querySelector('#add1').value);
    let addNumber2 = Number(document.querySelector('#add2').value);
    document.querySelector('#sum').value = (addNumber1 + addNumber2);

    console.log("First Number: ", addNumber1);
    console.log("Second Number: ", addNumber2);
    console.log("Sum: ", sum);
}
document.querySelector("#addNumbers").addEventListener('click', addNumbers);

/* Function Expression - Subtract Numbers */
const subtract = function (number1, number2){
    return number1 - number2
}

const subtractNumbers = function () {
    let subtractNumber1 = Number(document.querySelector('#subtract1').value);
    let subtractNumber2 = Number(document.querySelector('#subtract2').value);
    document.querySelector('#difference').value = (subtractNumber1 - subtractNumber2);

    console.log("First Number: ", subtractNumber1);
    console.log("Second Number: ", subtractNumber2);
    console.log("Difference: ", difference);
}
document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);

/* Arrow Function - Multiply Numbers */
const multiply = (factor1, factor2) =>  {
    product = factor1 * factor2
    return product;
}

function multiplyNumbers () {
    factorNumber1 = Number(document.querySelector('#factor1').value); 
    factorNumber2 = Number(document.querySelector('#factor2').value);
    product = multiply(factorNumber1, factorNumber2)
    document.querySelector('#product').value = (product);
}
document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);

/* Open Function Use - Divide Numbers */
function divide (dividend, divisor){
    return dividend + divisor
}

function divideNumbers () {
    let dividend = Number(document.querySelector('dividend').value);
    let divisor = Number(document.querySelector('divisor').value);
    quotient = divide(divided, divisor);
    document.querySelector('#quotient').value = (quotient);

    console.log("Dividend: ", dividend);
    console.log("Divisor: ", divisor);
    console.log("Quotient: ", quotient);
}
document.querySelector('#divideNumbers').addEventListener('click', divideNumbers)
/* Decision Structure */


/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];

/* Output Odds Only Array */

/* Output Evens Only Array */

/* Output Sum of Org. Array */

/* Output Multiplied by 2 Array */

/* Output Sum of Multiplied by 2 Array */
