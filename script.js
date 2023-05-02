const display = document.getElementById("display");

function clearDisplay() {
    display.value = "";
}

function backspace() {
    display.value = display.value.slice(0, -1);
}

function appendNumber(number) {
    display.value += number;
}

function appendOperator(operator) {
    const lastChar = display.value.slice(-1);
    if (display.value.length > 0 && !isNaN(lastChar) && lastChar !== '.') {
        display.value += operator;
    }
}

function calculateResult() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        alert("Invalid expression.");
        clearDisplay();
    }
}
const themeToggleButton = document.getElementById("theme-toggle");

let darkMode = false;

function toggleTheme() {
    const body = document.body;
    const themeToggle = document.getElementById('theme-toggle');
    const display = document.getElementById('display');

    body.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {
        themeToggle.innerText = 'Change to Light Mode';
        display.style.backgroundColor = '#333';
        display.style.color = '#fff';
    } else {
        themeToggle.innerText = 'Change to Dark Mode';
        display.style.backgroundColor = '#e6e6e6';
        display.style.color = '#444';
    }
}
