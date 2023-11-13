export default function PlayerScoreBox(playerName, id) {
  const p = document.createElement("p");
  const span1 = document.createElement("span1");
  const span2 = document.createElement("span2");

  span1.id = id + "Name";
  span2.id = id + "Score";

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