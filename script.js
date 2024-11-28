// Function to handle the response when a button is clicked
function response(answer) {
    if (answer === 'yes') {
        alert('I\'m sorry for forcing you to say yes\n But if you don\'t want to, that\'s okay :( ');
    }
}

// Function to move the "No" button randomly
function moveNoButton() {
    const noButton = document.querySelector('.no-btn');
    const maxX = window.innerWidth - noButton.offsetWidth;
    const maxY = window.innerHeight - noButton.offsetHeight;

    // Generate random positions for X and Y
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noButton.style.position = 'absolute';
    noButton.style.left = randomX + 'px';
    noButton.style.top = randomY + 'px';
}
