document.addEventListener('DOMContentLoaded', (event) => {
    let display = document.getElementById('display');
    let buttons = Array.from(document.getElementsByClassName('button'));
    let displayValue = '';

    buttons.map( button => {
        button.addEventListener('click', (e) => {
            let buttonText = e.target.innerText;
            if(button.innerText === 'C'){
                displayValue = '';
                display.innerText = '';
            } else if(buttonText === '=') {
                try{
                    displayValue = eval(displayValue);
                    display.innerText = displayValue;
                }
                catch{
                    display.innerText = "Error";
                    displayValue = '';
                }
            } else {
                displayValue += buttonText;
                display.innerText = displayValue;
            }
        });
    });
});
