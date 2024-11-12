const messages = [
    "May your day be filled with joy and laughter!",
    "Wishing you a year of amazing adventures ahead!",
    "Your presence makes the world a brighter place!",
    "May all your dreams and wishes come true!",
    "Here's to another year of creating beautiful memories!",
    "Happy Birthday to someone who brings so much joy to everyone!",
    "Celebrate your day with all the happiness you deserve!",
    "A birthday as special as you are!",
    "Hope your birthday is as sweet as cake!",
    "May today be the start of a wonderful year for you!"
];

const colors = ["#FF6F61", "#6B5B95", "#88B04B", "#F7CAC9", "#92A8D1", "#034F84", "#F7786B", "#DE7A22", "#79C753", "#4A90E2"];

function typeWriter(text, element, speed = 50, color) {
    let i = 0;
    element.style.color = color;
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

function displayMessages() {
    const container = document.getElementById('messageContainer');
    messages.forEach((message, index) => {
        setTimeout(() => {
            const messageElement = document.createElement('div');
            messageElement.classList.add('birthday-message');
            container.appendChild(messageElement);
            const randomColor = colors[Math.floor(Math.random() * colors.length)];
            typeWriter(message, messageElement, 50, randomColor);
            messageElement.style.animation = 'fadeInUp 1s ease forwards';
        }, index * 4000);
    });
}

function createConfetti() {
    const colors = ['#ff9a9e', '#fad0c4', '#ffecd2', '#fcb69f', '#ff8a80', '#ff80ab', '#ea80fc', '#b388ff'];
    const confettiCount = 100;

    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.left = `${Math.random() * 100}vw`;
        confetti.style.animationDelay = `${Math.random() * 5}s`;
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        document.body.appendChild(confetti);
    }
}

window.addEventListener('load', () => {
    displayMessages();
    createConfetti();
});
