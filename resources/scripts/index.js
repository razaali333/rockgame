// Constants for element handlers
const welcomeScreen = document.getElementById('welcome-screen');
const gameScreen = document.getElementById('game-screen');
const startGameButton = document.getElementById('start-game-button');
const userName = document.getElementById('username');
const userSelection = document.getElementById('user-selection');
const goButton = document.getElementById('go-button');
const scoreParagraph = document.getElementById('score');
const gameHistoryParagraph = document.getElementById('game-history');

// Hide the gameScreen initially
gameScreen.classList.add('d-none');

// Declare a variable for the game object (not initializing it here)
let game;

// Event listener for start-game-button
startGameButton.addEventListener('click', () => {
	// alert()
    // Get the username from the input field
    const username = userName.value;

    // Instantiate the game object
    game = new RockPaperScissors(username);

    // Hide the welcome screen
    welcomeScreen.classList.add('d-none');

    // Display the game screen
    gameScreen.classList.remove('d-none');
});

// Function to update the score paragraph
function updateScoreTallyUI() {
    if (game) {
        const { username, score } = game;
        scoreParagraph.textContent = `${username}: ${score.user} v CPU: ${score.cpu}`;
    }
}

// Function to update the game history paragraph
function updateGameHistoryUI() {
    if (game) {
        gameHistoryParagraph.textContent = game.gameHistoryLog.join('\n');
    }
}

// Event listener for go-button
goButton.addEventListener('click', () => {
    if (game) {
        // Get the user's selection from the select element
        const userSelectionValue = userSelection.value;

        // Call the play method of the game object
        game.play(userSelectionValue);

        // Update the score paragraph
        updateScoreTallyUI();

        // Update the game history paragraph
        updateGameHistoryUI();
    }
});
