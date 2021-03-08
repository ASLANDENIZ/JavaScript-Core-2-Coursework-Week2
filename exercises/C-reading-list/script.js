
// - Iterate through the list of books.
// - For each book, create a`<p>` element with the book title and author and append it to the page.
// - Use a`<ul>` and`<li>` to display the books.
// - Add an`<img>` to each book that links to a URL of the book cover.
// - Change the style of the book depending on whether you have read it(green) or not(red).
// - All of your HTML should go inside the`<div>` with the id ** "content" **.

function readingList(books) {

let content = document.getElementById("content")
let ulEl = document.createElement("ul");
content.appendChild(ulEl);

  for (let i = 0 ; i < books.length ; i++){
    let pEl = document.createElement("p");
    pEl.innerHTML = books[i].title + " " + books[i].author;
    content.appendChild(pEl);
    let liEl = document.createElement("li");
    let imgEl = document.createElement("img");
    imgEl.src = "https://images-na.ssl-images-amazon.com/images/I/410RTQezHYL._SX326_BO1,204,203,200_.jpg";
    

  }
  // Write your code here...
}

const books = [
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    alreadyRead: false
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    alreadyRead: true
  }
];

readingList(books);