 const display = document.getElementById('display');
let expression = '';

function appendNumber(number) {
    expression += number;
    display.value = expression.replace(/\*/g, '×').replace(/\//g, '÷');
}

function appendOperator(operator) {
    const lastChar = expression.slice(-1);

    if(operator === '%' && lastChar !== '') {
        expression += '/100'; // % is treated as divide by 100
    } else if(['+', '-', '*', '/'].includes(lastChar)) {
        expression = expression.slice(0, -1) + operator;
    } else if(expression.length === 0 && (operator === '+' || operator === '-')) {
        expression = operator;
    } else {
        expression += operator;
    }

    display.value = expression.replace(/\*/g, '×').replace(/\//g, '÷');
}

function clearDisplay() {
    expression = '';
    display.value = '';
}

function allClear() {
    expression = '';
    display.value = '';
}

function calculateResult() {
    try {
        let result = eval(expression);
        display.value = result;
        expression = result.toString();
    } catch {
        display.value = 'Error';
        expression = '';
    }
}

// Keyboard support
document.addEventListener('keydown', (event) => {
    const key = event.key;
    if(!isNaN(key) || key === '.') appendNumber(key);
    if(['+', '-', '*', '/', '%'].includes(key)) appendOperator(key);
    if(key === 'Enter') calculateResult();
    if(key.toLowerCase() === 'c') clearDisplay();
});