document.addEventListener('DOMContentLoaded', (event) => {
    let count = 0;
    const addButton = document.getElementById('countButton');
    const minusButton = document.getElementById('minusButton');
    const display = document.getElementById('countDisplay');

    addButton.onclick = function() {
        count++;
        display.innerText = count;
    };

    minusButton.onclick = function() {
        count--;
        display.innerText = count;
    };
});
