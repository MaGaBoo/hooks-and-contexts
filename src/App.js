import { Routes, Route } from "react-router";
import { useTheme } from "./contexts/ThemeContext";
import Home from "./views/home/Home";
import Photos from "./views/photos/Photos";
import Comments from "./views/comments/Comments";
import Navbar from "./components/misc/Navbar";
import "./App.css";

function App() {
  const { theme } = useTheme();

  return (
    <div className={`App bg-${theme}`}>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Photos" element={<Photos />} />
          <Route path="/Comments" element={<Comments />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
