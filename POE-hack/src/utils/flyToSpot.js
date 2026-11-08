import { useEffect } from "react";
import { useMap } from "react-leaflet";

function FlyToSpot({ spot }) {
  const map = useMap();

  useEffect(() => {
    if (!spot) return;

    const { lat, long } = spot.coordinates;
    map.flyTo([lat, long], 16);
  }, [map, spot]);

  return null;
}

export default FlyToSpot;
