// receive button inputs
const buttons = document.querySelectorAll('button');
Array.from(buttons).forEach(element => element.addEventListener('click', logButton));

const calculator = document.querySelector('.calculator');
const previousKeyType = document.querySelector('#prev');
let display = document.querySelector('.display');
let topDisplay = document.querySelector('.topDisplay');
let displayedNum = document.querySelector('.display').innerHTML;

//show input on display
function logButton(click){
    let input = click.target.id;
    // console.log(click.target.id);
    // console.log(click.target.classList.value);
    if(click.target.classList == 'number'){
            if(display.innerHTML == 0){
            display.innerHTML = input;
            topDisplay.innerHTML = topDisplay.innerHTML + input;
        }   else if(previousKeyType.classList == 'operator'){
            previousKeyType.classList.remove('operator');
            display.innerHTML = input;
            topDisplay.innerHTML = topDisplay.innerHTML + input;
        }   else{
            display.innerHTML = display.innerHTML + input;
            topDisplay.innerHTML = topDisplay.innerHTML + input;
        }   
    }   else if(click.target.classList == 'decimal'){
        display.innerHTML = display.innerHTML + '.';
        topDisplay.innerHTML = topDisplay.innerHTML + '.';
    }   else if(click.target.classList == 'operator'){
        calculator.dataset.firstValue = display.innerHTML;
        calculator.dataset.operator = click.target.id;
        // click.target.classList.add('pressed');  // need to remove 'pressed' class afterwards
        topDisplay.innerHTML = `${topDisplay.innerHTML}  ${click.target.innerHTML} `;
        previousKeyType.classList.add('operator');
    }   else if(click.target.classList == 'equals'){
        const num2 = display.innerHTML;
        const operation = calculator.dataset.operator;
        const num1 = calculator.dataset.firstValue;
        display.innerHTML = calculate(num1,operation,num2);
    }   else if(click.target.classList == 'clear'){
        display.innerHTML = '0';
        topDisplay.innerHTML = '';
        operation = '';
        num1 = '';
        num2 = '';
    }
}

function calculate(num1,operation,num2){
    let result = ''
    console.log(operation);
    console.log(num1);
    console.log(num2);
    if(operation == 'add'){
        result = parseFloat(num1) + parseFloat(num2);
        console.log(result);
    }   else if(operation === 'subtract'){
        result = parseFloat(num1) - parseFloat(num2)
    }   else if(operation === 'multiply'){
        result = parseFloat(num1) * parseFloat(num2)
    }   else if(operation === 'divide'){
        result = parseFloat(num1) / parseFloat(num2)
    }
    return result;
}

//receive keyboard inputs, need to assign keys

document.addEventListener('keydown', logKey);

function logKey(keydown){
    console.log(keydown.key)
}