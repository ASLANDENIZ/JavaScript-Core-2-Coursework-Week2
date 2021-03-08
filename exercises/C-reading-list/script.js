





// - All of your HTML should go inside the`<div>` with the id ** "content" **.

function readingList(books) {

  let content = document.getElementById("content")
  let heading = document.createElement("h1");
  heading.innerHTML = "Book List";
  content.appendChild(heading);
  let ulEl = document.createElement("ul");
  content.appendChild(ulEl);
  // - Iterate through the list of books.
  for (let i = 0; i < books.length; i++) {
    // - For each book, create a`<p>` element with the book title and author and append it to the page.
    let pEl = document.createElement("p");
    pEl.innerHTML = books[i].title + "-" + books[i].author;
    // - Use a`<ul>` and`<li>` to display the books.
    let liEl = document.createElement("li");
    // - Add an`<img>` to each book that links to a URL of the book cover.
    let imgEl = document.createElement("img");
    imgEl.src = books[i].imageAddress;
    imgEl.setAttribute("height", "220");
    imgEl.setAttribute("width", "150");
    ulEl.appendChild(liEl);
    liEl.append(pEl, imgEl);
    // - Change the style of the book depending on whether you have read it(green) or not(red).
    if(books[i].alreadyRead) {
      liEl.style.backgroundColor = "green";
    } else {
      liEl.style.backgroundColor = "red";
    }
  }
  // Write your code here...
}






const books = [
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    alreadyRead: false,
    imageAddress: "https://images-na.ssl-images-amazon.com/images/I/410RTQezHYL._SX326_BO1,204,203,200_.jpg",
    alreadyRead : true
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true,
    imageAddress: "https://images-na.ssl-images-amazon.com/images/I/81A-mvlo+QL.jpg",
    alreadyRead: false
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    alreadyRead: true,
    imageAddress: "https://images-na.ssl-images-amazon.com/images/I/41as+WafrFL.jpg",
    alreadyRead: false
  }
];

readingList(books);