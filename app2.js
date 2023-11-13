let currentPlayerCount = 1;
const playerCount = document.querySelector("#playerCount")

playerCount.addEventListener("change", updatePlayerCount)

// Function to create player input boxes
function createPlayerInput(id) {
  const label = document.createElement('label');
  label.innerText = `Player ${id}: `;

  const input = document.createElement('input');
  input.type = 'text';
  input.className = 'player-input';
  input.id = `player${id}`;
  input.placeholder = `Enter name for Player ${id}`;

  const playerDiv = document.createElement('div');
  playerDiv.appendChild(label);
  playerDiv.appendChild(input);

  return playerDiv;
}

// Function to add player input boxes to the container based on current player count
function createPlayerRows() {
  const playerContainer = document.getElementById('playerContainer');

  // Clear existing playerContainer content
  playerContainer.innerHTML = '';

  for (let i = 1; i <= currentPlayerCount; i++) {
    const playerRow = createPlayerInput(i);
    playerContainer.appendChild(playerRow);
  }
}

// Function to update the displayed player count and recreate the player rows
function updatePlayerCount() {
  currentPlayerCount = parseInt(document.getElementById('playerCount').value, 10);
  createPlayerRows();
}

// Call the function initially to create the player rows with default player count
createPlayerRows();