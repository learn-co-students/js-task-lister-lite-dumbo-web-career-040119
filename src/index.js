/// Set up form
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById('create-task-form')
  form.addEventListener("submit", newTask);
});

/// Add task to list
function newTask(event) {
  // prevents submit button from actually submitting
  event.preventDefault();

  const userInput = document.getElementById('new-task-description')
  const newLi = document.createElement('li')
  const taskListUl = document.getElementById('tasks')
  // create remove button
  const deleteButton = document.createElement('button')
  deleteButton.innerText = ("remove")
  // create priority selector
  const prioritySelect = document.createElement('select')
  prioritySelect.appendChild(new Option ("Set Priority", 0))
  prioritySelect.appendChild(new Option ("High", 1))
  prioritySelect.appendChild(new Option ("Medium", 2))
  prioritySelect.appendChild(new Option ("Low", 3))
  // deleteButton.appendChild(document.createTextNode("remove"))

  // add text to the list item
  newLi.innerText = userInput.value
  //add remove button and add event listener
  newLi.appendChild(deleteButton)
  deleteButton.addEventListener("click", removeTask)
  // add priority select and add event listener
  newLi.appendChild(prioritySelect)
  prioritySelect.addEventListener("change", setPriority)
  // add new task to the tasks ul
  taskListUl.appendChild(newLi)
}

/// Remove task from list
function removeTask(event) {
  // find parent element of delete button, and remove
  event.target.parentElement.remove()
}

// Set priority of a task in list
function setPriority(event){
  liToUpdate = event.target.parentElement
  priorityText = event.target.value
  console.log(priorityText)

  if (priorityText === '1') {
  liToUpdate.style.color = ('red')
  }
  else if (priorityText === '2') {
    liToUpdate.style.color = ('orange')
  }
  else if (priorityText === '3') {
    liToUpdate.style.color = ('green')
  }
  else {
    liToUpdate.style.color = ('black')
  }
}
