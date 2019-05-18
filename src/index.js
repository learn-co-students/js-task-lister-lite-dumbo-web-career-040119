const form = document.getElementById('create-task-form');
const editForm = document.getElementById('edit-task-form');
const list = document.getElementById('list');
const editTextField = document.querySelector('#edit-task-description');
const editSelectValue = document.querySelector('#selectEditChoices');
let selectedElement = null;

document.addEventListener("DOMContentLoaded", () => {
  // your code here
  form.addEventListener('submit',post)
  editForm.addEventListener('submit', updateElement)
});

function post(e){
  e.preventDefault();
  const textField = document.querySelector('form #new-task-description').value;
  const selectValue = document.querySelector('form #selectChoices').value;
  //console.log(selectValue);
  addToList(textField,selectValue);
  form.reset();
  
}
function dele(e){
  e.target.parentNode.remove();
}

function addToList(text,value){
  let newLi = document.createElement('li');
  let button = document.createElement('button');
  let update = document.createElement('button');
  let span = document.createElement('span');
  button.addEventListener('click', dele);
  update.addEventListener('click', edit);
  //assigns class type to element depending on choice value
  style(span,value);
  span.innerText = text;
  button.innerText = 'X';
  update.innerText = 'Update';
  newLi.appendChild(span);
  newLi.appendChild(button);
  newLi.appendChild(update);
  list.appendChild(newLi);
}

function edit(e){
  e.preventDefault();
  
  editTextField.value = e.target.parentNode.childNodes[0].innerText
  editSelectValue.value = e.target.parentNode.childNodes[0].className;
  //sets the selected element in the global scope
  selectedElement = e.target.parentNode.childNodes[0];

}

function updateElement(e){
  e.preventDefault();
  
  style(selectedElement,editSelectValue.value)
  selectedElement.innerText = editTextField.value
  //console.log(selectedElement);
  selectedElement = null;
  editForm.reset();
}

function style(element,value){
    if (value === "high"){
      // element.style.backgroundColor = "red";
      element.className = "high"
      return element;
    }
    else if (value === "middle"){
      // element.style.backgroundColor = "yellow";
      element.className = "middle";
      return element;
    }
    else {
      // element.style.backgroundColor = "green";
      element.className = "low";
      return element;
    }
}




