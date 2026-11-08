import { useEffect, useState } from "react";
import { Marker, useMap } from "react-leaflet";
function MyLocationButton({ position }) {
  const map = useMap();

  function locateUser() {
    if (position) {
      map.setView(position, Math.max(map.getZoom(), 16));
    }
  }

  console.log(position);
  return (
    <>
      <div className="leaflet-bottom leaflet-right locate-control">
        <div className="leaflet-control">
          <button
            type="button"
            disabled={!position}
            onClick={() => map.setView(position, Math.max(map.getZoom(), 12))}
            aria-label="My location"
            title="My location"
          >
            {/* Replicating google's find my location logo */}
            <svg
              width="45"
              height="45"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="7" />
              <circle cx="12" cy="12" r="3" fill="currentColor" stroke="none" />
              <path d="M12 2v3m0 14v3M2 12h3m14 0h3" />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}

export default MyLocationButton;
