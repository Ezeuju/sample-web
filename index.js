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


const menuToggle = document.getElementById('mobile-menu');
const navList = document.getElementById('nav-list');
const navbar = document.querySelector('.navbar'); // Select the whole navbar

menuToggle.addEventListener('click', () => {
    navList.classList.toggle('active'); // Shows the menu links
    navbar.classList.toggle('active');  // Triggers the hamburger-to-X animation
});