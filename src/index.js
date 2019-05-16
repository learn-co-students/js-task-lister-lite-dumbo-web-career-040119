document.addEventListener("DOMContentLoaded", everything);

function everything(){
  const newTaskForm = document.getElementById('create-task-form');
  //gets id for entire form

  const allTasks = document.getElementById('tasks');
  //gets element of "id =tasks"

  newTaskForm.addEventListener("submit", createNewTask);
  //when the submit button for the form is "submitted", callback createNewTask
}

function createNewTask(event){
  event.preventDefault();
  //in this case, doesnt allow submit button to refresh
  const newTaskDescription = document.getElementById('new-task-description');
  //getting the element "new-task description" box inside form element
  const newLi = document.createElement('li')
  //allows you to create the new li when submit is clicked

  newLi.innerText = newTaskDescription.value;
  //allows you to input things into description box

  appendNewTask(newLi);
  //calls function appendNewTask, takes in argument of li created
  event.target.reset();
  //resets the form
}

const appendNewTask = task => {
  const tasks = document.getElementById('tasks')
  //gets element of 'tasks'
  tasks.appendChild(task)
  //prints everything to the DOM
}

// const name of function = argument => ()


//const someFunction = () => 5
