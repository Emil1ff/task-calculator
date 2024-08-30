const display = document.getElementById('display');

const appendDisplay = (input) => {
  display.value += input;
}

const clearDisplay = () => {
  display.value = '';
}

const calculate = () => {
    try {
        const result = new Function('return ' + display.value)();
        display.value = result;
    } catch (error) {
        display.value = 'Error';
    }
}


document.addEventListener('keydown', (event) => {
    const key = event.key;
    const operators = ['/', '*', '-', '+'];

    if (!isNaN(key) || operators.includes(key) || key === '.') {
        appendDisplay(key);
    } else if (key === 'Enter') {
        event.preventDefault();
        calculate();
    } else if (key === 'Backspace') {
        display.value = display.value.slice(0, -1);
    } else if (key === 'Escape') {
        clearDisplay();
    }
});