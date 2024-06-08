import { Link } from "react-router-dom";
import BookCard from "../components/BookCard";

const Bookshelf = () => {
  let books = window.localStorage.getItem("books");
  if (books) {
    books = JSON.parse(books);
  } else {
    books = [];
  }
  return (
    <div>
      <div className="navbar">
        <Link to={"/"}>HomePage</Link>
      </div>
      <div className="bookContainer">
        {books.map((book, index) => {
          return <BookCard key={index} book={book} />;
        })}
      </div>
    </div>
  );
};

export default Bookshelf;
