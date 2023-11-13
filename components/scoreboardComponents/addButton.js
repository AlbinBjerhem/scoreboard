export default function AddButton(playerName, index) {
  const button = document.createElement("button");

  button.innerText = "+1 " + playerName;
  button.id = index + "Add"

  return button;
}