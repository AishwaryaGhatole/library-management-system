const totalBooks = Math.floor(Math.random() * 548);
const borrowedBooks = Math.floor(Math.random() * totalBooks) + 1;
const returnedBooks = totalBooks - borrowedBooks;

console.log(borrowedBooks, returnedBooks);

export const widgetData = [
  {
    id: 1,
    bookCount: borrowedBooks,
    widgetName: "Borrowed Books",
    widgetImage: "/icons/book-icon.svg",
  },
  {
    id: 2,
    bookCount: returnedBooks,
    widgetName: "Returned Books",
    widgetImage: "/icons/hourglass-icon.svg",
  },
  {
    id: 3,
    bookCount: totalBooks,
    widgetName: "Total Books",
    widgetImage: "/icons/books-icon.svg",
  },

  {
    id: 4,
    bookCount: 24,
    widgetName: "Total Members",
    widgetImage: "/icons/people-icon.svg",
  },
];
