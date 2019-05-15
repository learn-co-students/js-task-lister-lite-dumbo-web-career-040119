const getUl = document.querySelector(".task-list")
const mainButton = document.querySelector(".js-button")

const createButton = (string) => {
  let button = document.createElement("button")
  button.innerText = string
  button.className = string
  button.type = "submit"

  if (string === "edit") {
    button.addEventListener("click", editTask)
  } else {
    button.addEventListener("click", deleteTask)
  }

  return button
}

const createTask = (data) => {
  let newPic = document.createElement("img")
  newPic.src = data.message

  let newLi = document.createElement("li")
  newLi.innerText = document.getElementById("task").value

  let edit = createButton("edit")
  let remove = createButton("remove")

  getUl.appendChild(newLi)
  newLi.appendChild(edit)
  newLi.appendChild(remove)
  newLi.appendChild(newPic)
}

function getDogs() {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then(response => response.json())
    .then(createTask)
}

mainButton.addEventListener("click", getDogs)

const editTask = (event) => {
  let answer = prompt("Edit This Task")
  let parental = event.target.parentNode
  parental.innerText = answer

  let edit = createButton("edit")
  let remove = createButton("remove")

  parental.appendChild(edit)
  parental.appendChild(remove)
}

const deleteTask = (event) => {
  event.target.parentNode.remove()
}
