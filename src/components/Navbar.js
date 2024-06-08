import { Link } from "react-router-dom";

const Navbar = ({ onQueryChange, queryValue }) => {
  return (
    <div className="navbar">
      <input
        onChange={(e) => onQueryChange(e.target.value)}
        value={queryValue}
        placeholder="type name here.."
      />
      <Link to={'/bookshelf'}>My Bookshelf</Link>
    </div>
  );
};

export default Navbar;
