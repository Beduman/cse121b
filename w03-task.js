/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add (number1, number2){
    return number1 + number2
}

function addNumbers() {
    let addNumber1 = Number(Document.querySelector('#add1').value)
    let addNumber2 = Number(Document.querySelector('#add2').value)
    Document.querySelector('#sum').value = (addNumber1, addNumber2)

    console.log("First Number: ", firstNumber);
    console.log("Second Number: ", secondNumber);
    console.log("Sum: ", sum);
}

document.querySelector("#addNumbers").addEventListener('click', addNumbers)
/* Function Expression - Subtract Numbers */
function subtract (number1, number2){
    return number1 + number2
}

function subtractNumbers() {
    let subtractNumber1 = Number(Document.querySelector('#subtract1').value)
    let subtractNumber2 = Number(Document.querySelector('#subtract2').value)
    Document.querySelector('#sum').value = (subtractNumber1, subtractNumber2)

    console.log("First Number: ", firstNumber);
    console.log("Second Number: ", secondNumber);
    console.log("Sum: ", sum);
}

/* Arrow Function - Multiply Numbers */
const multiply = (factor1, factor2) => factor1 + factor2;


let factorNumber1 = Number(Document.querySelector('#factor1').value)
let factorNumber2 = Number(Document.querySelector('#factor2').value)
const multiplyNumbers = () => Document.querySelector('#product').value = (factorNumber1, factorNumber2)

/* Open Function Use - Divide Numbers */
function divide (dividend, divisor){
    return dividend + divisor
}

function divideNumbers () {
    let dividend = Number(Document.querySelector('dividend').value)
    let divisor = Number(Document.querySelector('divisor').value)
    Document.querySelector('#quotient').value = (dividend, divisor)

    console.log("Dividend: ", dividend);
    console.log("Divisor: ", divisor);
    console.log("Quotient: ", quotient);
}
/* Decision Structure */


/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];
Document.querySelector('array').value = array

/* Output Odds Only Array */

/* Output Evens Only Array */

/* Output Sum of Org. Array */

/* Output Multiplied by 2 Array */

/* Output Sum of Multiplied by 2 Array */
