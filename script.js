/*HERE ARE ALL THE INITIALIZATIONS*/
let num1;
let num2;
let op;

const keys = document.querySelector('#keys');

//creating keys for the calc
for(let i = 0; i < 10; i++){
    const div = document.createElement('div');
    div.textContent = i;
    div.classList = "key";
    keys.insertBefore(div, keys.children[0]);
}

const equalBtn = document.createElement('button');


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


/*Here is the DOM Manipulation */
equalBtn.textContent = 'CLR';
equalBtn.classList = "key"
keys.appendChild(equalBtn);