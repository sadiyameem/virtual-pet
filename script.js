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
        document.body.style.background = 'linear-gradient(to bottom, #f527f5)';
        messageEl.innerHTML = "I'm starving! ";
    } else if (energy <= 2) {
        document.body.style.background = 'linear-gradient(to bottom, #2746f5)';
        messageEl.innerHTML = "I'm tired! ";
    } else {
        document.body.style.background = 'linear-gradient(to bottom, #f5f227)';
        messageEl.innerHTML = "I'm happy! ";
    }
}

function feedPet() {
    var sound = document.getElementById('eatSound');
    sound.currentTime = 0;
    sound.play();
    hungry = Math.max(0, hungry - 3);
    happy = Math.min(10, happy + 1);
    updateBar();
}

function playPet() {
    var sound = document.getElementById('playSound');
    sound.currentTime = 0;
    sound.play();
    if (energy >= 2) {
        happy = Math.min(10, happy + 2);
        hungry = Math.min(10, hungry + 1);
        energy = Math.max(0, energy - 2);
        updateBar();
    } else {
        messageEl.innerHTML = "i'm too tired to play!";
    }
}

function sleepPet() {
    var sound = document.getElementById('sleepSound');
    sound.currentTime = 0;
    sound.play();
    energy = Math.min(10, energy + 4);
    hungry = Math.min(10, hungry + 1);
    updateBar();
}

function autoDecay() {
    hungry = Math.min(10, hungry + 0.2);
    happy = Math.max(0, happy - 0.15);
    energy = Math.max(0, energy - 0.1);
    updateBar();
}

var factPlaceholder = document.getElementById("cat-fact");
var showFact = document.getElementById("show-fact");

var CatFacts = [
    "Milk Is Not Good For Cats! Most Cats Are Lactose Intolerant.",
    "There is a Cat Mayor: Stubbs the Cat has been the honorary mayor of Talkeetna in Alaska since July 1997.",
    "Some cats have extra toes.",
    "Cats have more bones than humans: A cat’s body contains about 230 bones, compared to 206 in the human body.",
    "Cats have a third eyelid.",
    "Every cat has a unique nose print."
]

var factNumber;

function randomFacts() {
    return CatFacts[factNumber];
}

showFact.addEventListener('click', function() {
    factNumber = Math.floor(Math.random() * 5);
    factPlaceholder.textContent = randomFacts();
})

// game loop
setInterval(autoDecay, 3000);

updateBar();