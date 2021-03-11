// ## Part 2

// Just below the buttons, there's a form called **Register with us**.

// Continue working in `./js/main.js` to add the following functionality:

// When the submit button is pressed, it should check that all the form fields are valid:

// - The ** Your name **, ** Email ** and ** Describe yourself ** fields need to be non - empty(Hint: their`value` length has to be greater than zero)
//     - For the ** Email ** field also check if it contains the`@` character

// For all the fields that invalid, it should make their background color`red`.
// IF all the fields are valid, when you click ** Submit ** it should:

// - Display an alert to thank you for filling out the form
//     - Blank out(make empty) all the text fields

//         ** Important hint:** In your function that handles clicks on the`Submit` button you will need to call`event.preventDefault()` to stop the browser from refreshing the page.To read more on how to do this: https://developer.mozilla.org/en/docs/Web/API/Event/preventDefault

function changeColor() {
    // - When clicking ** blue ** it should change:
    //   - ** Jumbotron ** background color to`#588fbd`
    //     - ** Donate a bike ** button background color to`#ffa500`
    //        - ** Volunteer ** button background color to`black` and text color to`white`
    let blueBtnEl = document.getElementById("blueBtn");
    blueBtnEl.addEventListener("click", blueBtnFunction);
    function blueBtnFunction() {
        let JumbotronEl = document.querySelector(".jumbotron");
        JumbotronEl.style.backgroundColor = "5751fd";
        let donateBikeBt = document.querySelector(".buttons a.btn-primary");
        donateBikeBt.style.backgroundColor = "#ffa500";
        let volunteerBt = document.querySelector(".buttons a.btn-secondary");
        volunteerBt.style.backgroundColor = "black";
        volunteerBt.style.color = "white";
    }
    //- When clicking ** orange ** it should change:
    //  - ** Jumbotron ** background color to`#f0ad4e`
    //    - ** Donate a bike ** button background color to`#5751fd`
    //      - ** Volunteer ** button background color to`#31b0d5` and text color to`white`
    let orangeBtnEl = document.getElementById("orangeBtn");
    orangeBtnEl.addEventListener("click", orangeBtnFunction);
    function orangeBtnFunction() {
        let JumbotronEl = document.querySelector(".jumbotron");
        JumbotronEl.style.backgroundColor = "#f0ad4e";
        let donateBikeBt = document.querySelector(".buttons a.btn-primary");
        donateBikeBt.style.backgroundColor = "#5751fd";
        let volunteerBt = document.querySelector(".buttons a.btn-secondary");
        volunteerBt.style.backgroundColor = "#31b0d5";
        volunteerBt.style.color = "white";
    }
    // - When clicking ** green ** it should change:
    //   - ** Jumbotron ** background color to`#87ca8a`
    //     - ** Donate a bike ** button background color to`black`
    //        - ** Volunteer ** button background color to`#8c9c08`
    let greenBtnEl = document.getElementById("greenBtn");
    greenBtnEl.addEventListener("click", greenBtnFunction);
    function greenBtnFunction() {
        let JumbotronEl = document.querySelector(".jumbotron");
        JumbotronEl.style.backgroundColor = "#87ca8a";
        let donateBikeBt = document.querySelector(".buttons a.btn-primary");
        donateBikeBt.style.backgroundColor = "#black";
        let volunteerBt = document.querySelector(".buttons a.btn-secondary");
        volunteerBt.style.backgroundColor = "#8c9c08";
    }
    //part 2
    let summitBtn = document.querySelector("form button.btn.btn-primary");
    let emailBox = document.querySelector("#exampleInputEmail1");
    let nameBox = document.getElementById("example-text-input");
    let describeYourSelfBox = document.getElementById("exampleTextarea");
    summitBtn.addEventListener("click", checkBoxes);
    let arrayOfBoxes = [emailBox, nameBox, describeYourSelfBox];
    function checkBoxes() {
        if ((emailBox.value.length === 0 || emailBox.value.includes("@") === false) && nameBox.value.length === 0 && describeYourSelfBox.value.length === 0) {
            emailBox.style.backgroundColor = "red";
            nameBox.style.backgroundColor = "red";
            describeYourSelfBox.style.backgroundColor = "red";
        } else if ((emailBox.value.length === 0 || emailBox.value.includes("@") === false) && nameBox.value.length === 0) {
            emailBox.style.backgroundColor = "red";
            nameBox.style.backgroundColor = "red";
        } else if (emailBox.value.length === 0 || emailBox.value.includes("@") === false) {
            emailBox.style.backgroundColor = "red";
        } else if (nameBox.value.length === 0) {
            nameBox.style.backgroundColor = "red";
        } else if (describeYourSelfBox.value.length === 0) {
            describeYourSelfBox.style.backgroundColor = "red";
        } else {
            alert(" Thank you for filling out the form!");
            emailBox.value = "";
            nameBox.value = "";
            describeYourSelfBox.value = "";
            event.preventDefault();

        }
    }
}

//         for (let i = 0; i < arrayOfBoxes.length; i++) {
//             if (arrayOfBoxes[i].value.length === 0 || (arrayOfBoxes[i] === emailBox && !arrayOfBoxes[i].value.include("@"))) {
//                 arrayOfBoxes[i].style.backgroundColor = "red";
//             } else (arrayOfBoxes[i].value.length > 0 && (arrayOfBoxes[i] === emailBox && arrayOfBoxes[i].value.include("@"))) {
//                 alert(" Thank you for filling out the form!");
//                 emailBox.value = "";
//                 nameBox.value = "";
//                 describeYourSelfBox.value = "";
//                 event.preventDefault();
//             }
//         }
//     }
// }




changeColor();