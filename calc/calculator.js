// Use Math.js for mathematical operations
math.config({
    number: 'BigNumber',
    precision: 64 // Set precision as needed
});

let displayValue = '';

function appendToDisplay(value) {
    displayValue += value;
    document.getElementById('result').value = displayValue;
}

function clearDisplay() {
    displayValue = '';
    document.getElementById('result').value = displayValue;
}

function calculateResult() {
    try {
        const result = math.evaluate(displayValue);
        document.getElementById('result').value = result.toString();
        displayValue = result.toString();
    } catch (error) {
        document.getElementById('result').value = 'Error';
        displayValue = '';
    }
}

// Add event listeners to the buttons
const buttons = document.querySelectorAll('.buttons button');
buttons.forEach(button => {
    button.addEventListener('click', function () {
        const buttonValue = this.textContent;
        if (buttonValue === '=') {
            calculateResult();
        } else if (buttonValue === 'C') {
            clearDisplay();
        } else {
            appendToDisplay(buttonValue);
        }
    });
});
