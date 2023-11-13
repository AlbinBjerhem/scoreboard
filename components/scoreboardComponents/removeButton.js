export default function RemoveButton(playerName, index) {
  const button = document.createElement("button");

  button.innerText = "-1 " + playerName;
  button.id = index + "Remove"

  return button;
}