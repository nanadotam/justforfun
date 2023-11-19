document.addEventListener('DOMContentLoaded', function () {
    let appreciationCount = 0;
    const appreciateBtn = document.getElementById('appreciateBtn');
    const appreciationCountElement = document.getElementById('appreciationCount');
    const cuteMessageElement = document.getElementById('cuteMessage');

    appreciateBtn.addEventListener('click', function () {
        appreciationCount++;
        appreciationCountElement.textContent = `${appreciationCount} Appreciation${appreciationCount !== 1 ? 's' : ''}`;

        // Display a cute message
        const cuteMessages = [
            'You\'re amazing!, Maame Yaa',
            'You\'re doing great, Maame Yaa!',
            'You make the world better, Maame Yaa!',
            'Thanks for being awesome, Maame Yaa!',
            'You deserve all the appreciation, Maame Yaa!'
        ];

        const randomIndex = Math.floor(Math.random() * cuteMessages.length);
        const randomCuteMessage = cuteMessages[randomIndex];

        cuteMessageElement.textContent = randomCuteMessage;

        // Create a heart emoji element
        const heartEmoji = document.createElement('div');
        heartEmoji.className = 'heart-emoji';
        heartEmoji.innerHTML = '❤️';

        // Set random position
        const randomX = Math.random() * window.innerWidth;
        const randomY = Math.random() * window.innerHeight;

        heartEmoji.style.left = `${randomX}px`;
        heartEmoji.style.top = `${randomY}px`;

        // Append the heart emoji to the body
        document.body.appendChild(heartEmoji);

        // Remove the heart emoji after a short delay (e.g., 2 seconds)
        setTimeout(() => {
            heartEmoji.remove();
        }, 2000);
    });
});
