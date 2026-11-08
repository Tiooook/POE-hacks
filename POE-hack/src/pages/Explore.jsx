import Introduction from "../Components/Introduction.jsx";
import StudyMap from "../Components/StudyMap.jsx";
import SearchBar from "../Components/SearchBar.jsx";
import PreferencePopUp from "../Components/PreferencePopUp.jsx";
import StudySpotCard from "../Components/StudySpotCard.jsx";
import filterStudySpots from "../utils/studySpots.js";
import spots from "../data/SpotsList.json";
import { useState } from "react";

function Explore({ userPrefs, setUserPrefs }) {
  const [selectedSpot, setSelectedSpot] = useState(null);
  const [step, setStep] = useState("intro");
  const matchedSpots = filterStudySpots(spots, userPrefs);
  const requiredFeatures = [];

  if (userPrefs.stepFreeAccess === "Required") {
    requiredFeatures.push("Step-free access");
  }
  if (userPrefs.facilities?.includes("Board")) {
    requiredFeatures.push("Whiteboard");
  }
  if (userPrefs.facilities?.includes("TV/Projector")) {
    requiredFeatures.push("Projector");
  }

  return (
    <div className="explore-map">
      <div className="explore-map-layer" inert={step !== "map"}>
        <StudyMap
          spots={spots}
          matchedSpots={matchedSpots}
          selectedSpot={selectedSpot}
          onSelect={setSelectedSpot}
        />
      </div>

      {step === "intro" && <Introduction onStart={() => setStep("pref")} />}
      {step === "pref" && (
        <PreferencePopUp
          userPrefs={userPrefs}
          setUserPrefs={setUserPrefs}
          onDone={() => setStep("map")}
        />
      )}

      {step === "map" && (
        <>
          <SearchBar spots={matchedSpots} onSelect={setSelectedSpot} />
          {selectedSpot && (
            <StudySpotCard
              key={selectedSpot.id}
              spot={selectedSpot}
              onClose={() => setSelectedSpot(null)}
            />
          )}
          <details className="match-results" open>
            <summary className="match-toggle">
              <span>Matching study spots ({matchedSpots.length})</span>
              <span className="match-toggle-hide">Hide results</span>
              <span className="match-toggle-show">Show results</span>
            </summary>

            {matchedSpots.length === 0 && (
              <p>
                No spaces meet these requirements. Try changing a preference.
              </p>
            )}

            <div className="match-grid">
              {matchedSpots.map((spot) => {
                const room = spot.matchingRooms[0];

                return (
                  <button
                    key={spot.id}
                    type="button"
                    className="match-card"
                    aria-pressed={selectedSpot?.id === spot.id}
                    onClick={() => setSelectedSpot(spot)}
                  >
                    <strong className="match-room">{room.name}</strong>
                    <span className="match-building">{spot.name}</span>
                    <span className="match-tags">
                      {room.noiseLevels.map((level) => (
                        <span key={level}>{level}</span>
                      ))}
                    </span>
                    <strong className="match-reason">
                      {spot.matchKind === "match"
                        ? "Matches preferences"
                        : "Other eligible spots"}
                    </strong>

                    {requiredFeatures.length > 0 && (
                      <small>{requiredFeatures.join(" · ")}</small>
                    )}

                    {userPrefs.noiseLevel && userPrefs.noiseLevel !== "Any" && (
                      <small>
                        {room.matchesNoise
                          ? `Supports your ${userPrefs.noiseLevel.toLowerCase()} noise preference`
                          : `Room noise: ${room.noiseLevels.join(", ")}`}
                      </small>
                    )}
                    <span className="match-action">
                      Show on map <span aria-hidden="true">↗</span>
                    </span>
                  </button>
                );
              })}
            </div>
          </details>
          <button
            type="button"
            className="edit-preferences"
            onClick={() => setStep("pref")}
          >
            Edit preferences
          </button>
        </>
      )}
    </div>
  );
}

export default Explore;
