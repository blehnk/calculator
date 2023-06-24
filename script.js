/*HERE ARE ALL THE INITIALIZATIONS*/
let num1;
let num2;
let op;
let num;
let displayVal = '';
let arr = [];
let i = 0;
let opr = '';
let ans;
let operation;
let j;
let count = 0;
let eval;

const keys = document.querySelector('#keys');
const clrBtn = document.createElement('button');
const display = document.querySelector('#display');
const key = document.querySelectorAll('.key');


/*HERE ARE ALL THE FUNCTIONS*/ 
function add(num1, num2){
    console.log(num1);
    console.log(num2);
    ans = Number(num1) + Number(num2);
    arr.splice(0, 3, ans);
    return ans;
}
function subtract(num1, num2){
    console.log(num1);
    console.log(num2);
    ans = Number(num1) - Number(num2);
    arr.splice(0, 3, ans);
    return ans;
}
function multiply(num1, num2){
    console.log(num1);
    console.log(num2);
    ans = Number(num1) * Number(num2);
    arr.splice(0, 3, ans);
    return ans;
}
function divide(num1, num2){
    console.log(num1);
    console.log(num2);
    ans = Number(num1) / Number(num2);
    arr.splice(0, 3, ans);
    return ans;
}

function operate(arr, op){
    if(op === '+'){
        count = 1;
        return add(arr[0], arr[2]);
    }

    else if(op === '-'){
        count = 1;
        return subtract(arr[0], arr[2]);
    }

    else if(op === '*'){
        count = 1;
        return multiply(arr[0], arr[2]);
    }

    else if(op === '/'){
        count = 1;
        return divide(arr[0], arr[2]);
    }
} 

function input(num){
    displayVal = displayVal.concat(num); 
    return displayVal;
}

function addValue(e){
    num = e.target.textContent;
    if(num >= 0 && num <= 9){
        display.setAttribute('value', input(num));
    }
    else{
        arr.push(displayVal);  
        arr.push(num); 
        count++; 
        displayVal = '';
    }

    console.log(arr);
    if(count === 2){
        eval = operate(arr, arr[1]).toFixed(5);
        display.setAttribute('value', eval);
        if(num === '='){
            arr.splice(0, 2);
            count--;
            displayVal = eval;
        }
    }
    
}

/*Here is the DOM Manipulation */
clrBtn.textContent = 'CLR';
clrBtn.classList = "key clr"
keys.insertBefore(clrBtn, keys.children[3]);


//event to access the keys
key.forEach(() => addEventListener('click', addValue));

