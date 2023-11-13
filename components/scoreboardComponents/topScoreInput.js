export default function TopScoreDisplay(topScore) {
  const topScoreDisplay = document.createElement("input");

  topScoreDisplay.type = "number";
  topScoreDisplay.id = "topScore";
  topScoreDisplay.value = topScore;

  return topScoreDisplay;
}