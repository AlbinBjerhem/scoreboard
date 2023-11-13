import AddButton from "./scoreboardComponents/addButton.js";
import BtnBox from "./scoreboardComponents/btnbox.js";
import Player from "../classes/player.js";
import PlayerScoreBox from "./scoreboardComponents/playerScoreBox.js";
import RemoveButton from "./scoreboardComponents/removeButton.js";
import TopScoreDisplay from "./scoreboardComponents/topScoreInput.js";

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

  const resetBtn = document.createElement("button");
  resetBtn.innerText = "Reset"
  resetBtn.addEventListener("click", reset)

  scoreBoard.appendChild(resetBtn)
  scoreBoard.appendChild(scoreArea)
  scoreBoard.appendChild(topScoreDisplay)
  scoreBoard.appendChild(btnSection)

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

function updateScore(player, opponents) {
  if (!gameOver) {
    player.score += 1;
    player.display.textContent = player.score;

    if (player.score >= topScore) {
      gameOver = true
      player.display.classList.add("won")

      for (const opponent of opponents) {
        if (opponent != player) {
          opponent.display.classList.add("lost")
        }
      }
    }
  }
}

function decreaseScore(player, opponents) {
  if (player.score > 0) {
    player.score -= 1;
    player.display.textContent = player.score;

    if (player.score < topScore) {
      gameOver = false
      player.display.classList.remove("won")
      for (const opponent of opponents) {
        if (opponent != player) {
          opponent.display.classList.remove("lost")
        }
      }
    }
  }
}

function reset() {
  gameOver = false
  for (let player of playerList) {
    player.score = 0
    player.display.textContent = player.score;
    player.display.classList.remove("won", "lost")
  }
}