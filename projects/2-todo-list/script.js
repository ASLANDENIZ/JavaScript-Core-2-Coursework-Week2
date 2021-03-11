
// The`populateTodoList()` function should iterate over the list of todos that we are given at the start, it should create a < li > for the todo along with some other stuff that you can find in index.html and below.

// The items in the todo list are currently hard - coded into the HTML, refactor the code so that this function creates them and adds the following functionality to them:

// Each todo should have this HTML inside it:

// ```html
// <span class="badge bg-primary rounded-pill">
//   <i class="fa fa-check" aria-hidden="true"></i>
//   <i class="fa fa-trash" aria-hidden="true"></i>
// </span>
// ```

// The first`<i>` tag needs an event listener that applies a line - through text - decoration styling to the text of the todo.It should remove the styling if it is clicked again.

// The second`<i>` tag needs an event listener that deletes the parent`<li>` element from the`<ul>`.





function populateTodoList(todos) {
  let list = document.getElementById("todo-list");
  for (let i = 0; i < todos.length; i++) {
    let liEl = document.createElement("li");
    liEl.className = "list-group-item d-flex justify-content-between align-items-center";
    liEl.innerHTML = todos[i].task;
    list.appendChild(liEl);
    let spanEl = document.createElement("span");
    liEl.appendChild(spanEl);

    spanEl.className = "badge bg-primary rounded-pill"
    let iElOne = document.createElement("i");
    let iElTwo = document.createElement("i");
    iElOne.className = "fa fa-check"
    iElTwo.className = "fa fa-trash"
    iElOne.setAttribute("aria-hidden", "true");
    spanEl.append(iElOne, iElTwo);
    iElOne.addEventListener("click", lineThrough);
    function lineThrough() {
      if (liEl.style.textDecoration === "none") {
        liEl.style.textDecoration = "line-through";
        todos[i].completed = true;
      }
      else {
        liEl.style.textDecoration = "none";
        todos[i].completed = false;
      }

    }
    iElTwo.addEventListener("click", () => {
      liEl.remove();
    })
  }
  // Write your code to create todo list elements with completed and delete buttons here, all todos should display inside the "todo-list" element.
}

// These are the same todos that currently display in the HTML
// You will want to remove the ones in the current HTML after you have created them using JavaScript
let todos = [
  { task: "Wash the dishes", completed: false },
  { task: "Do the shopping", completed: false },
];




populateTodoList(todos);

// This function will take the value of the input field and add it as a new todo to the bottom of the todo list. These new todos will need the completed and delete buttons adding like normal.
function addNewTodo(event) {
  let todoInput = document.getElementById("todoInput");
  if(todoInput.value !== ""){
    let newToDo = {};
    let newArray = [];
    newToDo.task = todoInput.value;
    newToDo.completed = false;
    newArray.push(newToDo);
    populateTodoList(newArray);
    todoInput.value = "";
  }

  
  // The code below prevents the page from refreshing when we click the 'Add Todo' button.
  event.preventDefault();
  // Write your code here... and remember to reset the input field to be blank after creating a todo!
}



// Advanced challenge: Write a fucntion that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
function deleteAllCompletedTodos() {
  // Write your code here...
}
