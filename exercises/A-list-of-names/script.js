

// For each object in the array:

// - Add a`<h1>` tag to the html containing the name of the person.
// - Add a`<h2>` tag to the html containing the job of the person.
// - All of your HTML should go inside the`<div>` with the id ** "content" **:

// ```html
// <div id="content">
//   <h1>{Name Here}</h1>
//   <h2>{Job Here}</h2>
//   .....
// </div>
// ```



function listOfNames(arrayOfPeople) {
  let content = document.querySelector("#content");
  let headingOne = document.createElement("h1");
  let headingTwo = document.createElement("h2");
  for(let i = 0 ; i < arrayOfPeople.length ; i++){
    headingOne[i].textContent = arrayOfPeople[i].name
    headingTwo[i].textContent = document.arrayOfPeople[i].job;
    content.appendChild(headingOne[i]);
    content.appendChild(headingTwo[i]);
  }
  
 
}

let people = [
  { name: "Chris", job: "Teacher" },
  { name: "Joanna", job: "Student" },
  { name: "Boris", job: "Prime Minister" },
];

listOfNames(people);


