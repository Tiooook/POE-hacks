import StudyMap from "./Components/StudyMap.jsx";
import Header from "./Components/Header.jsx";
import Explore from "./pages/Explore.jsx";
import Campus from "./pages/Campus.jsx";
import About from "./pages/About.jsx";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  // I don't want to pass the Prefs to the whole app but could not think of a better way
  const [userPrefs, setUserPrefs] = useState({
    noiseLevel: null,
    studyType: null,
    facilities: null,
    stepFreeAccess: null,
  });

  return (
    <div>
      <Header />
      <main className="main-content">
        <Routes>
          <Route
            path="/"
            element={
              <Explore userPrefs={userPrefs} setUserPrefs={setUserPrefs} />
            }
          />
          <Route path="/campus" element={<Campus />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
