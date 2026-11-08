import StudyMap from "../Components/StudyMap.jsx";
import SearchBar from "../Components/SearchBar.jsx";
import spots from "../data/SpotsList.json";
import { useState } from "react";

function Explore() {
  const [selectedSpot, setSelectedSpot] = useState(null);

  return (
    <>
      <SearchBar spots={spots} onSelect={setSelectedSpot} />
      <StudyMap selectedSpot={selectedSpot} />
    </>
  );
}

export default Explore;
