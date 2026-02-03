const envelope = document.getElementById('envelope');
const card = document.getElementById('card');
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const flowersContainer = document.getElementById('flowersContainer');
const instructionText = document.getElementById('instructionText');
const question = document.getElementById('question');
const buttons = document.getElementById('buttons');

let isOpened = false;
let cardClicked = false;

// Open envelope on click
envelope.addEventListener('click', () => {
    if (!isOpened) {
        envelope.classList.add('opened');
        isOpened = true;
    }
});

// Show question when card is clicked
card.addEventListener('click', () => {
    if (isOpened && !cardClicked) {
        cardClicked = true;
        instructionText.style.display = 'none';
        question.style.display = 'block';
        buttons.style.display = 'flex';
        question.style.animation = 'fadeIn 0.8s ease both';
        buttons.style.animation = 'fadeIn 0.8s ease 0.3s both';
    }
});

// Yes button - create flower explosion with delay
yesBtn.addEventListener('click', () => {
    // Clear any existing animations
    flowersContainer.innerHTML = '';
    
    // Wait 1.5 seconds before showing flowers
    setTimeout(() => {
        createFlowerExplosion();
    }, 1500);
});

// No button - create sad emoji explosion with delay
noBtn.addEventListener('click', () => {
    // Clear any existing animations
    flowersContainer.innerHTML = '';
    
    // Wait 1.5 seconds before showing sad emojis
    setTimeout(() => {
        createSadEmojiExplosion();
    }, 1500);
});

function createFlowerExplosion() {
    const flowers = ['🌹', '🌷', '🌺', '🌸', '💐', '🌻', '🌼', '🏵️'];
    const numFlowers = 50;
    
    // Clear any existing flowers
    flowersContainer.innerHTML = '';
    
    for (let i = 0; i < numFlowers; i++) {
        const flower = document.createElement('div');
        flower.className = 'flower';
        flower.textContent = flowers[Math.floor(Math.random() * flowers.length)];
        
        // Random position around center
        const angle = (Math.PI * 2 * i) / numFlowers;
        const distance = 200 + Math.random() * 300;
        const tx = Math.cos(angle) * distance;
        const ty = Math.sin(angle) * distance;
        
        flower.style.left = '50%';
        flower.style.top = '50%';
        flower.style.setProperty('--tx', `${tx}px`);
        flower.style.setProperty('--ty', `${ty}px`);
        
        // Random delay for more natural explosion
        flower.style.animationDelay = `${Math.random() * 0.5}s`;
        
        flowersContainer.appendChild(flower);
    }
    
    // Remove flowers after animation
    setTimeout(() => {
        flowersContainer.innerHTML = '';
    }, 2500);
}

function createSadEmojiExplosion() {
    const sadEmojis = ['😢', '😭', '😔', '😞', '💔', '😰', '😓', '😟', '😕', '🙁'];
    const numEmojis = 50;
    
    // Clear any existing flowers or emojis
    flowersContainer.innerHTML = '';
    
    for (let i = 0; i < numEmojis; i++) {
        const emoji = document.createElement('div');
        emoji.className = 'flower';
        emoji.textContent = sadEmojis[Math.floor(Math.random() * sadEmojis.length)];
        
        // Random position around center
        const angle = (Math.PI * 2 * i) / numEmojis;
        const distance = 200 + Math.random() * 300;
        const tx = Math.cos(angle) * distance;
        const ty = Math.sin(angle) * distance;
        
        emoji.style.left = '50%';
        emoji.style.top = '50%';
        emoji.style.setProperty('--tx', `${tx}px`);
        emoji.style.setProperty('--ty', `${ty}px`);
        
        // Random delay for more natural explosion
        emoji.style.animationDelay = `${Math.random() * 0.5}s`;
        
        flowersContainer.appendChild(emoji);
    }
    
    // Remove emojis after animation
    setTimeout(() => {
        flowersContainer.innerHTML = '';
    }, 2500);
}

// Add bounce animation for sad emoji
const style = document.createElement('style');
style.textContent = `
    @keyframes bounce {
        0%, 100% {
            transform: translate(-50%, -50%) scale(1);
        }
        50% {
            transform: translate(-50%, -50%) scale(1.1);
        }
    }
`;
document.head.appendChild(style);

