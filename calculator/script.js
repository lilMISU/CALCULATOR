var num1 = "0";
var num2 = "";
var operator = "";
var displayVal = "0";

const display = document.querySelector('.display');

const clear = document.querySelector('.clear_btn');
clear.addEventListener('click', () => {
    num1 = "0";
    num2 = "";
    operator = "";
    populateDisplay();
});

const deleteBtn = document.querySelector('.delete_btn');
deleteBtn.addEventListener('click', () => {
    if (operator === "")
        num1 = Math.floor(num1 / 10);
    else if (operator !== "" && num2 === "")
        operator = "";
    else if (operator !== "" && num2 !== ""){
        num2 = Math.floor(num2 / 10);
        if(num2 == 0)
        num2 = "";
    }
    populateDisplay();
});


populateDisplay();

const plus = document.querySelector('.plus');
plus.addEventListener('click', () => {
    operator = plus.innerHTML;
    populateDisplay();
})

const minus = document.querySelector('.minus');
minus.addEventListener('click', () => {
    operator = minus.innerHTML;
    populateDisplay();
})

const times = document.querySelector('.times');
times.addEventListener('click', () => {
    operator = times.innerHTML;
    populateDisplay();
})

const divider = document.querySelector('.divider');
divider.addEventListener('click', () => {
    operator = divider.innerHTML;
    populateDisplay();
})

const equal = document.querySelector('.equal');
equal.addEventListener('click', () => {
    if (num2 !== 0 && operator !== "") {
        displayVal = operate(operator, parseInt(num1), parseInt(num2));
        display.innerHTML = displayVal;
        num1 = displayVal;
        num2 = "";
        operator = "";
    }
})

const digits = document.querySelectorAll('.digit');

digits.forEach(button => {
    button.addEventListener('click', () => {
        if (operator === "") {
            if (num1 >= 0)
                num1 = (num1 * 10 + parseInt(button.innerHTML)).toString();
            else
                num1 = (num1 * 10 - parseInt(button.innerHTML)).toString();
        }
        else if (operator !== "") {
            num2 = (num2 * 10 + parseInt(button.innerHTML)).toString();
        }
        populateDisplay();
    });
});

function operate(operator, num1, num2) {
    let num;
    switch (operator) {
        case "+":
            num = add(num1, num2);
            break;
        case "-":
            num = subtract(num1, num2);
            break;
        case "×":
            num = multiply(num1, num2);
            break;
        case "÷":
            num = divide(num1, num2);
            break;
    }
    return num;
}

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return (a / b).toFixed(3);
}

function populateDisplay() {

    displayVal = num1 + " " + operator + " " + num2;
    display.innerHTML = displayVal;
}