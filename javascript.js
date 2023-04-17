const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

const theHobbit = new Book('The Hobbit', 'J.R.R.Tolkein', 295, true);
const andAway = new Book('And Away...', 'Bob Mortimer', 324, true);
const dolphinJunction = new Book(
  'Dolphin Junction',
  'Mick Herron',
  266,
  false
);
const theSevenMoons = new Book(
  'The Seven Moons of Maali Almeida',
  'Shehan Karunatilaka',
  295,
  false
);

function addBookToLibrary(Book) {
  this.Book = Book;
  myLibrary.push(this.Book);
}

addBookToLibrary(theHobbit);
addBookToLibrary(andAway);
addBookToLibrary(dolphinJunction);
addBookToLibrary(theSevenMoons);

console.log(myLibrary);

function addBookToDisplay(title, author, pages, read) {
  const container = document.querySelector('.library');
  const newBook = document.createElement('div');
  const newBookTitle = document.createElement('div');
  const newBookAuthor = document.createElement('div');
  const newBookPages = document.createElement('div');
  const newBookRead = document.createElement('div');
  newBook.classList.add('book');
  newBookTitle.classList.add('title');
  newBookAuthor.classList.add('author');
  newBookPages.classList.add('pages');
  newBookRead.classList.add('read');
  newBookTitle.textContent = title;
  newBookAuthor.textContent = author;
  newBookPages.textContent = `${pages} pages`;
  if (read === true) {
    newBookRead.textContent = 'read';
  } else {
    newBookRead.textContent = 'not read';
  }

  newBook.appendChild(newBookTitle);
  newBook.appendChild(newBookAuthor);
  newBook.appendChild(newBookPages);
  newBook.appendChild(newBookRead);
  container.appendChild(newBook);
}

function createLibraryDisplay() {
  for (const item of myLibrary) {
    console.log(item.title);
    addBookToDisplay(item.title, item.author, item.pages, item.read);
  }
}

createLibraryDisplay();
