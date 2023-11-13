export default function BtnBox(add, remove) {
  const btnBox = document.createElement("div")

  btnBox.classList.add("btnBox")

  btnBox.appendChild(add)
  btnBox.appendChild(remove)

  return btnBox;
} 