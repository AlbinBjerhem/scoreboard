import AddButton from "./components/scoreboardComponents/addButton.js";
import BtnBox from "./components/scoreboardComponents/btnbox.js";
import Player from "./classes/player.js";
// import PlayerScoreBox from "./components/scoreboardComponents/playerScoreBox.js";
import RemoveButton from "./components/scoreboardComponents/removeButton.js";
import TopScoreDisplay from "./components/scoreboardComponents/topScoreInput.js";

let gameOver = false;
let topScore = 5
const playerList = [];

export default function ScoreBoard(playerNames) {
  const scoreBoard = document.createElement("main")
  const scoreArea = document.createElement("section");
  const btnSection = document.createElement("section");
  const topScoreDisplay = TopScoreDisplay(topScore);

  topScoreDisplay.addEventListener("change", (event) => {
    topScore = event.target.value
    reset()
  })

  scoreArea.id = "scoreArea";
  btnSection.id = "btnSection";

  let index = 1;


  for (let name of playerNames) {
    const scoreBox = PlayerScoreBox(name, index);
    const addBtn = AddButton(name, index);
    const removeBtn = RemoveButton(name, index);

    scoreArea.appendChild(scoreBox);
    btnSection.appendChild(BtnBox(addBtn, removeBtn))

    createPlayer(scoreBox.lastChild, addBtn, removeBtn)

    index++;
  }

  // const resetBtn = document.createElement("button");
  // resetBtn.innerText = "Reset"
  // resetBtn.addEventListener("click", reset)

  // scoreBoard.appendChild(resetBtn)
  scoreBoard.appendChild(scoreArea)
  // scoreBoard.appendChild(topScoreDisplay)
  // scoreBoard.appendChild(btnSection)

  return scoreBoard;
}

function createPlayer(display, addBtn, removeBtn) {
  const newPlayer = new Player(display, addBtn, removeBtn)
  playerList.push(newPlayer)

  newPlayer.addBtn.addEventListener("click", () => {
    updateScore(newPlayer, playerList)
  })

  newPlayer.removeBtn.addEventListener("click", () => {
    decreaseScore(newPlayer, playerList)
  })
}
function PlayerScoreBox(playerName, id) {
  const p = document.createElement("p");
  const span1 = document.createElement("span1");
  const span2 = document.createElement("span2");

  span1.id = id + "Name";
  span2.id = id + "InputName";

  span1.innerText = fixName(playerName);
  span2.innerText = 0;



  span1.classList.add("playerName")
  span2.classList.add("playerScore")

  p.appendChild(span1)
  p.appendChild(span2)

  return p
}

function fixName(playerName) {
  if (playerName.length > 14) {
    playerName = playerName.slice(0, 12) + "...";
  }

  return playerName;
}