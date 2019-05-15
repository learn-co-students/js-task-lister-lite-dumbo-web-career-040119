document.addEventListener("DOMContentLoaded", () => {
  createTaskForm = document.getElementById('create-task-form')
  tasks = document.getElementById('tasks')

  const deleteListItem = event => {
    event.target.parentNode.remove()
  }

  const handleSubmit = event => {
    event.preventDefault()
    const newLi = document.createElement('li')
    newLi.innerText = event.target['new-task-description'].value

    // Create button
    const button = document.createElement('button')
    button.innerText = "X"
    // Add event to button
    button.addEventListener('click', deleteListItem)
    // append button to newLi
    newLi.appendChild(button)


    tasks.appendChild(newLi)

    createTaskForm.reset()
  }

  const addEventToForm = () => {
    createTaskForm.addEventListener('submit', handleSubmit)
  }


  addEventToForm()
  // End of DOMContentLoaded
});
