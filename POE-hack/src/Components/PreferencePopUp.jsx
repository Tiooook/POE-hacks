import { useState } from "react";
import optionsLists from "../data/OptionsLists.json";

function PreferencePopUp({ userPrefs, setUserPrefs, onDone }) {
  const [noiseLevel, setNoiseLevel] = useState(userPrefs.noiseLevel);
  const [studyType, setStudyType] = useState(userPrefs.studyType);
  const [facilities, setFacilities] = useState(userPrefs.facilities);
  const [stepFreeAccess, setStepFreeAccess] = useState(userPrefs.stepFreeAccess);

  function optionsReturn(options) {
    return options.map((option) => (
      <option key={option} value={option}>
        {option}
      </option>
    ));
  }

  function confirmPreferences() {
    setUserPrefs({ noiseLevel, studyType, facilities, stepFreeAccess });
    onDone();
  }

  return (
    <div className="popup">
      <h2 className="popup-text">
        Tell Us Your Ideal <span>Lockin</span> Spot
      </h2>
      <div>
        <div className="popup-panel">
          <p className="popup-prompt">I’m looking for a</p>
          <div className="popup-dropdowns">
            <select
              id="1"
              value={noiseLevel ?? ""}
              onChange={(event) => setNoiseLevel(event.target.value)}
            >
              <option value="" disabled>
                Choose a noise level
              </option>
              {optionsReturn(optionsLists.noiseLevel)}
            </select>
            <select
              id="2"
              value={studyType ?? ""}
              onChange={(event) => setStudyType(event.target.value)}
            >
              <option value="" disabled>
                Individual/Group
              </option>
              {optionsReturn(optionsLists.studyType)}
            </select>
            <select
              id="3"
              value={facilities ?? ""}
              onChange={(event) => setFacilities(event.target.value)}
            >
              <option value="" disabled>
                Required facilities
              </option>
              {optionsReturn(optionsLists.facilities)}
            </select>
            <select
              aria-label="Step-free access"
              value={stepFreeAccess ?? ""}
              onChange={(event) => setStepFreeAccess(event.target.value)}
            >
              <option value="" disabled>
                Step-free access
              </option>
              {optionsReturn(optionsLists.stepFreeAccess)}
            </select>
          </div>
          <button
            type="button"
            className="prefs-confirm"
            onClick={confirmPreferences}
          >
            Match my StudySpot
          </button>
        </div>
      </div>
    </div>
  );
}

export default PreferencePopUp;
