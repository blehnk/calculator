/*HERE ARE ALL THE INITIALIZATIONS*/
let num1;
let num2;
let op;
let num;
let displayVal = '';

const keys = document.querySelector('#keys');
const equalBtn = document.createElement('button');
const display = document.querySelector('#display');
const key = document.querySelectorAll('.key');


/*HERE ARE ALL THE FUNCTIONS*/ 
function add(num1, num2){
    return num1 + num2;
}
function subtract(num1, num2){
    return num1 - num2;

}
function multiply(num1, num2){
    return num1 * num2;

}
function divide(num1, num2){
    return num1 / num2;

}

function operate(num1, num2, op){
    if(op === '+'){
        add(num1, num2);
    }

    else if(op === '-'){
        subtract(num1, num2);
    }

    else if(op === '*'){
        multiply(num1, num2);
    }

    else if(op === '/'){
        divide(num1, num2);
    }
}

function input(num){
    displayVal = displayVal.concat(num); 
    return displayVal;
}

function addValue(e){
    display.setAttribute('value', input(e.target.textContent));
}


/*Here is the DOM Manipulation */
equalBtn.textContent = 'CLR';
equalBtn.classList = "key clr"
keys.insertBefore(equalBtn, keys.children[3]);


//event to access the keys
key.forEach(() => addEventListener('click', addValue));