import { useEffect, useState } from "react";
import L from "leaflet";
import { mapKey, searchKey } from "../data/API.jsx";
import {
  MapContainer,
  Marker,
  TileLayer,
  useMap,
  ZoomControl,
  Circle,
  CircleMarker,
} from "react-leaflet";
import FlyToSpot from "../utils/flyToSpot.js";
import MyLocationButton from "./Locate.jsx";
import SpotMarker from "./SpotMarker.jsx";
import "leaflet/dist/leaflet.css";
import "../styles/StudyMap.css";
import userMarkerUrl from "../assets/userMarker.png";

const userMarker = new L.Icon({
  iconUrl: userMarkerUrl, // URL or imported asset
  iconSize: [40, 40], // Size of the icon [width, height]
  iconAnchor: [20, 20], // Point of the icon which will correspond to marker's location
  popupAnchor: [0, -38], // Point from which the popup should open relative to the iconAnchor
});

const options = {
  timeout: 5000, // Maximum time (ms) allowed to return a position
  maximumAge: 0, // Force the device to fetch a fresh position instead of a cached one
};

function StudyMap({ spots, matchedSpots, selectedSpot, onSelect }) {
  const [position, setPosition] = useState(null);
  const matchKindById = new Map(
    matchedSpots.map((spot) => [spot.id, spot.matchKind]),
  );

  // Get user location when it changes
  useEffect(() => {
    if (!navigator.geolocation) return;

    const watchId = navigator.geolocation.watchPosition(
      ({ coords }) => {
        setPosition([coords.latitude, coords.longitude]);
        console.log("Pos changed");
      },
      null,
      options,
    );
    return () => navigator.geolocation.clearWatch(watchId);
  }, []);

  return (
    <>
      <MapContainer
        style={{ height: "100%", width: "100%" }}
        center={[40.04617515239396, -76.31969351442275]}
        zoom={19}
        scrollWheelZoom={false}
        zoomControl={false}
      >
        <TileLayer
          url="https://api.thunderforest.com/atlas/{z}/{x}/{y}{r}.png?apikey={apikey}"
          attribution='&copy; <a href="http://www.thunderforest.com/">Thunderforest</a>, &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          apikey={mapKey}
          maxZoom={22}
        />

        {/* If selected a spot, the map will fly to that spot and show a description popup */}
        <FlyToSpot spot={selectedSpot} />
        {spots.map((spot) => (
          <SpotMarker
            key={spot.id}
            spot={spot}
            matchKind={matchKindById.get(spot.id) ?? "ineligible"}
            isSelected={selectedSpot?.id === spot.id}
            onSelect={onSelect}
          />
        ))}
        {position && (
          <>
            <CircleMarker
              center={position}
              radius={50}
              pathOptions={{
                stroke: false,
                fillColor: "#3f80e9",
                fillOpacity: 0.12,
              }}
              interactive={false}
            />
            <Marker position={position} icon={userMarker} interactive={false} />
          </>
        )}

        {/* Buttons */}
        <MyLocationButton position={position} />
        <ZoomControl position="bottomright" />

        <></>
      </MapContainer>
    </>
  );
}

export default StudyMap;
