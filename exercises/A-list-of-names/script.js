



function listOfNames(arrayOfPeople) {
  let content = document.querySelector("#content");
  for (let i = 0 ; i < arrayOfPeople.length ; i++) {
    let headingOne = document.createElement("h1");
    let headingTwo = document.createElement("h2");
    headingOne.innerHTML = arrayOfPeople[i].name
    headingTwo.innerHTML = arrayOfPeople[i].job;
    content.append(headingOne, headingTwo);
  }


}

let people = [
  { name: "Chris", job: "Teacher" },
  { name: "Joanna", job: "Student" },
  { name: "Boris", job: "Prime Minister" },
];

listOfNames(people);


