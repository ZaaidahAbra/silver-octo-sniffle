const generateButton = document.getElementById("generateButton");
const resetButton = document.getElementById("resetButton");
const spellArea = document.getElementById("spellArea");
const ingredients = document.querySelectorAll("#ingredientsList li");
let spellInterval;

// Function to generate random color
const getRandomColor = () => {
    return '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
};

// Function to get random spell text
const getRandomSpell = () => {
    const randomIngredient = ingredients[Math.floor(Math.random() * ingredients.length)].textContent;
    return `Behold! The spell of <span style="color:gold">🪄 ${randomIngredient} 🧪</span>`;
};

// Main spell generation function
async function generateSpell() {
    generateButton.disabled = true;
    
    if (spellInterval) clearInterval(spellInterval);
    
    // Countdown from 3 to 1
    for (let i = 3; i > 0; i--) {
        spellArea.innerHTML = `Casting spell in ${i}...`;
        await new Promise(resolve => setTimeout(resolve, 1000));
    }
    
    // Show first spell
    spellArea.innerHTML = getRandomSpell();
    spellArea.style.backgroundColor = getRandomColor();
    
    // Continue showing new spells every second
    spellInterval = setInterval(() => {
        spellArea.innerHTML = getRandomSpell();
        spellArea.style.backgroundColor = getRandomColor();
    }, 1000);
    
    generateButton.disabled = false;
}

// Reset function
function resetSpell() {
    clearInterval(spellInterval); 
    spellArea.innerHTML = "✨ Your magic awaits... ✨";
    spellArea.style.backgroundColor = "#3b4553";
}

// Event listeners
generateButton.addEventListener("click", generateSpell);
resetButton.addEventListener("click", resetSpell);