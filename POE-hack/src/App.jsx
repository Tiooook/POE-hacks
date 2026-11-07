import StudyMap from "./Components/StudyMap.jsx";
import Header from "./Components/Header.jsx";
import Explore from "./pages/Explore.jsx";
import Campus from "./pages/Campus.jsx";
import About from "./pages/About.jsx";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div>
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Explore />} />
          <Route path="/campus" element={<Campus />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
