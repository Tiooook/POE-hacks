import { CircleMarker, Tooltip } from "react-leaflet";

const markerStyles = {
  match: { color: "#8c2c2b", radius: 11, label: "Matches preferences" },
  alternative: { color: "#a46a22", radius: 9, label: "Other eligible spots" },
  ineligible: { color: "#687078", radius: 8, label: null },
};

export default function SpotMarker({ spot, matchKind, isSelected, onSelect }) {
  const style = markerStyles[matchKind];
  const { lat, long } = spot.coordinates;

  return (
    <CircleMarker
      center={[lat, long]}
      radius={style.radius}
      pathOptions={{
        fillColor: style.color,
        fillOpacity: 0.9,
        color: isSelected ? "#171211" : "#fff",
        weight: isSelected ? 3 : 1.5,
      }}
      eventHandlers={{ click: () => onSelect(spot) }}
    >
      <Tooltip
        key={matchKind}
        permanent={matchKind === "match"}
        direction="top"
        offset={[0, -style.radius]}
        className="building-label"
      >
        <strong>{spot.name}</strong>
        {style.label && <div className="m">{style.label}</div>}
      </Tooltip>
    </CircleMarker>
  );
}
