document.addEventListener('DOMContentLoaded', (event) => {
    const display = document.getElementById('display');
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
            displayValue += e.target.innerText;
            display.value = displayValue;
        });
    });

    // for equals button
    equals.addEventListener('click', () => {
        try{
            displayValue = eval(displayValue);
            display.value = displayValue;
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
