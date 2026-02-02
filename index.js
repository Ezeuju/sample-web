const counterDisplay = document.getElementById('counter-display');
const clickBtn = document.getElementById('click-btn');
const resetBtn = document.getElementById('reset-btn');

let count = 0;

clickBtn.addEventListener('click', () => {
    count++;
    counterDisplay.innerText = count;
});

resetBtn.addEventListener('click', () => {
    count = 0;
    counterDisplay.innerText = count;
});