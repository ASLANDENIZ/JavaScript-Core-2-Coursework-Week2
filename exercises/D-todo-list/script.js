// * You should use an`<ul>` for the list and`<li>` tags for the contents.
// * Each todo should have an event listener for when they are clicked.
// * The event listener should add the line - through style to the todo.
// * The event listener should also remove the line - through style conditionally by checking if the style is already applied.
// * All of your HTML should go inside the`<div>` with the id ** "content" **.


function todoList(todos) {
  let contentEl = document.getElementById("content");
  let ulEl = document.createElement("ul");
  contentEl.appendChild(ulEl);

  for (let i = 0; i < todos.length; i++) {
    let liEl = document.createElement("li");
    liEl.innerHTML = todos[i].todo;
    ulEl.appendChild(liEl);
    liEl.addEventListener("click", addRemoveLine);
    function addRemoveLine() {
      liEl.classList.toggle("visible");
    }
   

  }

  // Write your code here...
}

const todos = [
  { todo: "wash the dishes" },
  { todo: "walk the dog" },
  { todo: "learn javascript" },
  { todo: "go shopping" }
];

todoList(todos);