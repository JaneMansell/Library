let myLibrary = [];

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

function addBookToLibrary() {
  //code
}
