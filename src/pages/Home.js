import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import BookCard from "../components/BookCard";
import useDebounce from "../hooks/useDebounce";
import Loading from "../components/Loading";

const Home = () => {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [books, setBooks] = useState([]);

  const debounceQuery = useDebounce(query, 1000);

  useEffect(() => {
    if (query) {
      fetchResult();
    }
  }, [debounceQuery]);

  const fetchResult = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://openlibrary.org/search.json?q=${debounceQuery}&limit=10&page=1`
      );
      setBooks(response.data.docs);
      console.log(response);
    } catch (error) {
      console.log(error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Navbar onQueryChange={(text) => setQuery(text)} queryValue={query} />
      {loading && <Loading />}
      {error && !loading && <p>Error Occure...</p>}
      {!loading && !error && (
        <div className="bookContainer">
          {books.map((book, index) => {
            return <BookCard key={index} book={book} />;
          })}
        </div>
      )}
    </div>
  );
};

export default Home;
