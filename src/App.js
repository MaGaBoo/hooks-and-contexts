import { Routes, Route } from "react-router";
import Home from "./views/home/Home";
import Photos from "./views/photos/Photos";
import Comments from "./views/comments/Comments"
import Navbar from "./components/misc/Navbar";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Photos" element={<Photos />} />
        <Route path="/Comments" element={<Comments />} />
      </Routes>
    </div>
  );
}

export default App;
