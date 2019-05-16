//form id
const form = document.getElementById("create-task-form");
// ul for my new tasks
const tasks = document.getElementById("tasks");

// form submit eventListener
form.addEventListener('submit', addTask);

//delete eventListener
tasks.addEventListener('click', removeTask);


// add task to form function
function addTask(event){
  event.preventDefault();
// new li
const li = document.createElement('li');
// find id of our form
const newTask = document.getElementById("new-task-description");
// add text to the li by setting li with form's return value
li.innerText = newTask.value;
// since we need to add a delete button to our list at the same time, we need to create it as well
const deleteButton = document.createElement('button');
// create className so we can identify later
deleteButton.className = 'delete-btn';
//create text for node
deleteButton.appendChild(document.createTextNode('delete'));
// add button to the li
li.appendChild(deleteButton)
// Finally we add our new li to our list called tasks
tasks.appendChild(li);
}

// remove task function
function removeTask(event){
  //conditional that targets our delete button by asking for class list contains 'delete-btn', class list returns everything in our delete node
  if(event.target.classList.contains('delete-btn')){
    // console.log(1)
    // confirm box that asks if you're sure
    if(confirm('Are you sure?'))
    // setting li equal to the event target parentElement which is our specific li
       li = event.target.parentElement;
       //then we remove this child (li) from our ul 'tasks'
      tasks.removeChild(li);
  }
}
