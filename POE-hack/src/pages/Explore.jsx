import StudyMap from "../Components/StudyMap.jsx";
import SearchBar from "../Components/SearchBar.jsx";
import spots from "../data/SpotsList.json";
import { useState } from "react";

function Explore() {
  const [selectedSpot, setSelectedSpot] = useState(null);

  return (
    <div className="explore-map">
      <SearchBar spots={spots} onSelect={setSelectedSpot} />
      <StudyMap selectedSpot={selectedSpot} />
    </div>
  );
}

export default Explore;
