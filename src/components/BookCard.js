import { useState } from "react";

const BookCard = ({ book }) => {
  const [bookshelfBooks, setBookshelfBooks] = useState(
    JSON.parse(window.localStorage.getItem("books")) || []
  );

  let isBookPresent = bookshelfBooks?.some((item) => item.key === book.key);

  const addToBookshelf = () => {
    let preData = window.localStorage.getItem("books");
    if (preData) {
      preData = JSON.parse(preData);
    } else {
      preData = [];
    }
    localStorage.setItem("books", JSON.stringify([...preData, book]));
    setBookshelfBooks([...preData, book]);
  };

  return (
    <div className="bookCard">
      <p>Book Title : {book.title}</p>
      <p>Edition Count : {book.edition_count}</p>
      {!isBookPresent && (
        <button onClick={addToBookshelf}>Add To Bookshelf</button>
      )}
    </div>
  );
};

export default BookCard;
