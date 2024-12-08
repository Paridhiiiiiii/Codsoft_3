// Calculator Functionality
let display = document.getElementById('display');
let buttons = Array.from(document.getElementsByClassName('btn'));

let currentInput = '';
let prevInput = '';
let operator = null;

buttons.forEach(button => {
    button.addEventListener('click', function() {
        let value = this.innerText;

        if (value === 'C') {
            currentInput = '';
            prevInput = '';
            operator = null;
            display.value = '';
        } else if (value === '=') {
            if (operator && prevInput) {
                currentInput = operate(prevInput, currentInput, operator);
                display.value = currentInput;
                prevInput = '';
                operator = null;
            }
        } else if (['+', '-', '*', '/'].includes(value)) {
            if (prevInput) {
                currentInput = operate(prevInput, currentInput, operator);
                display.value = currentInput;
            }
            operator = value;
            prevInput = currentInput;
            currentInput = '';
        } else {
            currentInput += value;
            display.value = currentInput;
        }
    });
});

function operate(a, b, operator) {
    a = parseFloat(a);
    b = parseFloat(b);
    switch (operator) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            return a / b;
        default:
            return b;
    }
}