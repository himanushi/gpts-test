document.addEventListener('DOMContentLoaded', (event) => {
    let count = 0;
    const button = document.getElementById('countButton');
    const display = document.getElementById('countDisplay');

    button.onclick = function() {
        count++;
        display.innerText = count;
    };
});
