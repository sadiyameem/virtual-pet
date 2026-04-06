let hungry = parseFloat(localStorage.getItem('pet_hungry')) || 5;
let happy = parseFloat(localStorage.getItem('pet_happy')) || 5;
let energy = parseFloat(localStorage.getItem('pet_energy')) || 5;

const hungryBar = document.getElementById('hungryBar');
const happyBar = document.getElementById('happyBar');
const energyBar = document.getElementById('energyBar');
const messageEl = document.getElementById('message');
const petImageEl = document.getElementById('petImage');

function updateBar() {
    hungryBar.style.width = (hungry * 10) + '%';
    happyBar.style.width = (happy * 10) + '%';
    energyBar.style.width = (energy * 10) + '%';

    // save state
    localStorage.setItem('pet_hungry', hungry);
    localStorage.setItem('pet_happy', happy);
    localStorage.setItem('pet_energy', energy);

    // change background mood color
    if (happy >= 8) {
        document.body.style.background = 'linear-gradient(to bottom, #a9f527)';
        messageEl.innerHTML = "I'm super happy! ";
    } else if (hungry >= 8) {
        document.body.style.background = 'linear-gradient(to bottom, #f52727)';
        messageEl.innerHTML = "I'm starving! ";
    } else if (energy <= 2) {
        document.body.style.background = 'linear-gradient(to bottom, #2746f5)';
        messageEl.innerHTML = "I'm tired! ";
    } else {
        document.body.style.background = 'linear-gradient(to bottom, #f5f227)';
        messageEl.innerHTML = "I'm happy! ";
    }
}