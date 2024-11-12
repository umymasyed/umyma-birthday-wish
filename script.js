const messages = [
    "May your day be filled with joy and laughter!",
    "Wishing you a year of amazing adventures ahead!",
    "Your presence makes the world a brighter place!",
    "May all your dreams and wishes come true!",
    "Here's to another year of creating beautiful memories!",
    "May your day be filled with joy and laughter!",
    "Wishing you a year of amazing adventures ahead!",
    "Your presence makes the world a brighter place!",
    "May all your dreams and wishes come true!",
    "Here's to another year of creating beautiful memories!",
    "Hope this special day brings you everything your heart desires!",
    "Cheers to a day as special and unique as you are!",
    "May your smile shine brighter today and always!",
    "Today is the beginning of another fantastic journey around the sun!",
    "You are loved today, tomorrow, and forever!",
    "Your birthday is the perfect time to say how much we care!",
    "Hope you have the happiest and most joyful birthday ever!",
    "You're not just older; you're wiser and even more amazing!",
    "Another year wiser, stronger, and more incredible!",
    "Keep shining and make this year your best one yet!",
    "Celebrate the past, embrace the present, and dream of the future!",
    "On your special day, know that you're appreciated and cherished!",
    "May this year be full of blessings, laughter, and adventures!",
    "Here's to more fun, more memories, and more cake!",
    "Let’s make your birthday one for the history books!",
    "Age is just a number, but love for you is limitless!",
    "Life is a journey, and today, we celebrate your continued adventure!",
    "To a day that’s as special and fabulous as you are!",
    "May every wish you make come true today and always!",
    "Wishing you all the happiness your heart can hold!",
    "You’re one of a kind, and today we celebrate everything that makes you, you!",
    "Hope your day is as wonderful and bright as your smile!",
    "May your year be filled with laughter, success, and love!",
    "Happy birthday to someone who is loved more than words can say!",
    "May you enjoy every moment of today and savor the joy it brings!",
    "Sending you a day filled with love, laughter, and all your favorite things!",
    "Today is all about you, and you deserve the very best!",
    "Wishing you endless joy and unforgettable memories on your special day!",
    "To the kindest soul I know, happy birthday and best wishes for the future!",
    "Here's to a year full of dreams coming true and new adventures!",
    "Every birthday marks a new beginning, so dream big and shine brightly!",
    "May you be surrounded by love, laughter, and all your favorite people!",
    "Another year older, another year more incredible. Keep being amazing!",
    "Life is better with you in it. Here's to celebrating you today and every day!",
    "Wishing you a birthday filled with love, laughter, and endless happiness!"
];


function typeWriter(text, element, speed = 50) {
    let i = 0;
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
            typeWriter(message, messageElement);
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
