

function shoppingList(arrayOfPeople) {
 let contentEl = document.getElementById("content");
 let unList = document.createElement("ul");
 contentEl.appendChild(unList);
 for( let i = 0 ; i < arrayOfPeople.length ; i++) {
   let liEl = document.createElement("li");
   liEl.innerHTML = arrayOfPeople[i];
   unList.appendChild(liEl);
 }

  
}

let shopping = ["Milk", "Bread", "Eggs", "A Dinosaur", "Cake", "Sugar", "Tea"];

shoppingList(shopping);
