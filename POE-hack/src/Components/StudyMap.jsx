import { useState } from "react";
import { mapKey, searchKey } from "../data/API.jsx";
import { MapContainer, TileLayer, useMap, ZoomControl } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "../styles/StudyMap.css";

function StudyMap() {
  return (
    <>
      <MapContainer
        style={{ height: "100%", width: "100%" }}
        center={[51.505, -0.09]}
        zoom={13}
        scrollWheelZoom={false}
        zoomControl={false}
      >
        <TileLayer
          url="https://api.thunderforest.com/atlas/{z}/{x}/{y}{r}.png?apikey={apikey}"
          attribution='&copy; <a href="http://www.thunderforest.com/">Thunderforest</a>, &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          apikey={mapKey}
          maxZoom={22}
        />

        <ZoomControl position="bottomright" />
      </MapContainer>
    </>
  );
}

export default StudyMap;
