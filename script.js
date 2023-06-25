/*HERE ARE ALL THE INITIALIZATIONS*/
let num1;
let num2;
let op;
let num;
let displayVal = '';
let arr = [];
let i = 0;
let ans;
let operation;
let j;
let count = 0;
let eval;
let flag = 0;

const keys = document.querySelector('#keys');
const clrBtn = document.createElement('button');
const display = document.querySelector('#display');
const key = document.querySelectorAll('.key');
const specialOpr = document.querySelector('#specialOpr');
const opr = document.querySelector('#opr');


/*HERE ARE ALL THE FUNCTIONS*/ 
function clear(){
    display.setAttribute('value', '');
    arr = [];
    displayVal = '';
    count = 0;
    flag = 0;
}

function del(){
    let temp = displayVal.split('');
    temp.splice(temp.length - 1, 1);
    displayVal = temp.join('');
    display.setAttribute('value', displayVal);
}

function calc(){
    eval = Math.round(operate(arr, arr[1]) * 100000) / 100000;
    display.setAttribute('value', eval);
    flag++;
    if(num === '='){
        arr.splice(0, 2);
        count--;
        flag--;
        displayVal = eval;
    }
}

//Update the array to continue calculations
function arrayUpdate(){
    arr.push(displayVal);  
    arr.push(num); 
    count++; 
    displayVal = '';
    flag++;
}

function add(num1, num2){
    ans = Number(num1) + Number(num2);
    arr.splice(0, 3, ans);
    return ans;
}
function subtract(num1, num2){
    ans = Number(num1) - Number(num2);
    arr.splice(0, 3, ans);
    return ans;
}
function multiply(num1, num2){
    ans = Number(num1) * Number(num2);
    arr.splice(0, 3, ans);
    return ans;
}
function divide(num1, num2){
    if(Number(num2) === 0){
        alert("You want to upset GOD?");
        return clear();     
    }
    ans = Number(num1) / Number(num2);
    arr.splice(0, 3, ans);
    return ans;
}

//function to select different operations based on the selected operator
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

//function to display the value on the display
function inputVal(num){
    displayVal = displayVal.concat(num); 
    return displayVal;
}

//function to perform action based on the key pressed
function keyPress(e){
    num = e.target.textContent;
    if(e.target.type === 'submit'){
        clear();
    }
    else if(num === 'del'){
        del();
    }

    else if(num >= 0 && num <= 9 || num === '.'){
        display.setAttribute('value', inputVal(num));
        flag = 0;
    }
    else{
        arrayUpdate();
    }

    console.log(arr);
    if(count === 2){
        calc();
    }

    if(flag > 2){
        clear();
    }
    
}

/*Here is the DOM Manipulation */
clrBtn.textContent = 'CLR';
clrBtn.classList = "key specialOpr"
specialOpr.insertBefore(clrBtn, specialOpr.children[0]);


//event to access the keys
key.forEach(() => addEventListener('click', keyPress));
