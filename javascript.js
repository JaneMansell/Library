const myLibrary = [];

class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
}

const castleShade = new Book('Castle Shade', 'Laurie R. King', 376, false);
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

addBookToLibrary(castleShade);
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

function createForm() {
  const form = document.createElement('form');
  form.action = 'https://httpbin.org/post';
  form.method = 'post';

  /* Title */
  const labelTitle = document.createElement('label');
  labelTitle.for = 'bookTitle';
  labelTitle.textContent = 'Title:';
  const inputTitle = document.createElement('input');
  inputTitle.type = 'text';
  inputTitle.id = 'bookTitle';
  inputTitle.name = 'bookTitle';
  form.appendChild(labelTitle);
  form.appendChild(inputTitle);

  /* Author */
  const labelAuthor = document.createElement('label');
  labelAuthor.for = 'bookAuthor';
  labelAuthor.textContent = 'Author:';
  const inputAuthor = document.createElement('input');
  inputAuthor.type = 'text';
  inputAuthor.id = 'bookAuthor';
  inputAuthor.name = 'bookAuthor';
  form.appendChild(labelAuthor);
  form.appendChild(inputAuthor);

  /* Number of pages */
  const labelPages = document.createElement('label');
  labelPages.for = 'bookPages';
  labelPages.textContent = 'Number of Pages:';
  const inputPages = document.createElement('input');
  inputPages.type = 'text';
  inputPages.id = 'bookPages';
  inputPages.name = 'bookPages';
  form.appendChild(labelPages);
  form.appendChild(inputPages);

  /* Read */
  const labelRead = document.createElement('label');
  labelRead.for = 'bookRead';
  labelRead.textContent = 'Have you read this book?:';
  const inputRead = document.createElement('input');
  inputRead.type = 'text';
  inputRead.id = 'bookRead';
  inputRead.placeholder = 'yes or no';
  inputRead.name = 'bookRead';
  form.appendChild(labelRead);
  form.appendChild(inputRead);

  // Submit button
  const submitButton = document.createElement('button');
  submitButton.id = 'submitButton';
  submitButton.type = 'button';
  submitButton.textContent = 'Submit';
  form.appendChild(submitButton);

  return form;
}

function displayForm() {
  const container = document.querySelector('.library');
  const books = document.querySelectorAll('.book');
  books.forEach((book) => {
    container.removeChild(book);
  });
  const form = createForm();
  container.appendChild(form);
  const submitButton = document.querySelector('#submitButton');
  submitButton.addEventListener('click', () => {
    event.preventDefault();
    const bookTitle = document.getElementById('bookTitle').value;
    const bookAuthor = document.getElementById('bookAuthor').value;
    const bookPages = document.getElementById('bookPages').value;
    const bookRead = document.getElementById('bookRead').value;
    const newBook = new Book(bookTitle, bookAuthor, bookPages, bookRead);
    addBookToLibrary(newBook);
    console.log('button clicked');
    console.log(bookTitle, bookAuthor, bookPages, bookRead);
    createLibraryDisplay();
  });
}

const newBookButton = document.querySelector('#addNewBookButton');
newBookButton.addEventListener('click', () => {
  console.log('button clicked');
  displayForm();
});
