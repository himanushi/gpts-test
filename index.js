document.addEventListener('DOMContentLoaded', (event) => {
    const display = document.getElementById('display');
    const history = document.getElementById('history');
    const digits = Array.from(document.getElementsByClassName('digit'));
    const opers = Array.from(document.getElementsByClassName('oper'));
    const equals = document.getElementsByClassName('equals')[0];
    const clr = document.getElementsByClassName('clr')[0];
    let displayValue = '';

    // for numeric buttons
    digits.forEach(button => {
        button.addEventListener('click', (e) => {
            displayValue += e.target.innerText;
            display.value = displayValue;
        });
    });

    // for operator buttons
    opers.forEach(button => {
        button.addEventListener('click', (e) => {
            if (display.value == displayValue) {
                displayValue += ' ' + e.target.innerText + ' ';
            } else {
                displayValue = display.value + ' ' + e.target.innerText + ' ';
            }
            display.value = displayValue;
        });
    });

    // for equals button
    equals.addEventListener('click', () => {
        try {
            const calculation = displayValue;
            displayValue = eval(displayValue);
            const historyItem = document.createElement('p');
            historyItem.textContent = displayValue;
            historyItem.addEventListener('click', () => {
                display.value = historyItem.textContent;
                displayValue = display.value; // update displayValue
            });
            history.appendChild(historyItem);
            display.value = displayValue;
            displayValue = displayValue.toString();
        } catch {
            display.value = "Error";
            displayValue = '';
        }
    });

    // for clear button
    clr.addEventListener('click', () => {
        displayValue = '';
        display.value = '';
    });
});
