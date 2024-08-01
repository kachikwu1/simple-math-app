function performCalculation() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const operation = document.getElementById('operation').value;
    const num2 = parseFloat(document.getElementById('num2').value);
    let result;

    if (isNaN(num1) || (isNaN(num2) && operation !== 'sqrt')) {
        result = 'Please enter valid numbers.';
    } else {
        switch (operation) {
            case 'add':
                result = num1 + num2;
                break;
            case 'subtract':
                result = num1 - num2;
                break;
            case 'multiply':
                result = num1 * num2;
                break;
            case 'divide':
                result = num2 !== 0 ? num1 / num2 : 'Cannot divide by zero';
                break;
            case 'sqrt':
                result = Math.sqrt(num1);
                break;
            case 'power':
                result = Math.pow(num1, num2);
                break;
            default:
                result = 'Unknown operation';
        }
    }

    document.getElementById('result').textContent = `Result: ${result}`;
    addToHistory(num1, operation, num2, result);
}

function addToHistory(num1, operation, num2, result) {
    const historyList = document.getElementById('history-list');
    const operationSymbol = {
        'add': '+',
        'subtract': '-',
        'multiply': '*',
        'divide': '/',
        'sqrt': '√',
        'power': '^'
    }[operation] || '';
    const historyItem = document.createElement('li');
    if (operation === 'sqrt') {
        historyItem.textContent = `√${num1} = ${result}`;
    } else {
        historyItem.textContent = `${num1} ${operationSymbol} ${num2} = ${result}`;
    }
    historyList.appendChild(historyItem);
}
