

/
function listOfColours(colours) {
  let contentEl = document.getElementById("content");
  // * Create a`<select>` element.
  let selectEl = document.createElement("select");
  contentEl.appendChild(selectEl);
  // * Create a`<p>` element.
  let pEl = document.createElement("p");
  contentEl.appendChild(pEl);
  // * Iterate through the array of colours.
  for (let i = 0; i < colours.length; i++) {
    let optionEl = document.createElement("option");
    optionEl.innerHTML= colours[i];
    selectEl.appendChild(optionEl);  
  }
  selectEl.addEventListener("click", function () {
    pEl.innerHTML = `You have selected: ${selectEl.value}`;
    pEl.style.color = selectEl.value;
  }
  )
}


const colours = ["red", "blue", "green", "yellow", "pink", "brown"];

listOfColours(colours);
