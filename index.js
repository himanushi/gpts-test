document.addEventListener('DOMContentLoaded', (event) => {
    let count = 0;
    const addButton = document.getElementById('countButton');
    const minusButton = document.getElementById('minusButton');
    const resetButton = document.getElementById('resetButton');
    const display = document.getElementById('countDisplay');

    addButton.onclick = function() {
        if (count < 10) { // Set maximum count to 10
            count++;
            display.innerText = count;
        }
    };

    minusButton.onclick = function() {
        if (count > 0) {
            count--;
            display.innerText = count;
        }
    };
    
    resetButton.onclick = function() {
        count = 0; // Set the count back to 0
        display.innerText = count;
    };
});
