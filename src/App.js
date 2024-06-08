import { Route, Routes } from "react-router-dom";
import Bookshelf from "./pages/Bookshelf";
import Home from "./pages/Home";

const App = () => {
  return (
    <div className="appContainer">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bookshelf" element={<Bookshelf />} />
      </Routes>
    </div>
  );
};

export default App;
