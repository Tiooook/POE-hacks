import { useState } from "react";

const days = {
  S: "Sunday",
  M: "Monday",
  T: "Tuesday",
  W: "Wednesday",
  Th: "Thursday",
  F: "Friday",
  Sa: "Saturday",
};

const amenityLabels = {
  wifi: "Wi-Fi",
  outlets: "Power outlets",
  stepFreeAccess: "Step-free access",
  projector: "Projector",
  whiteboard: "Whiteboard",
};

export default function StudySpotCard({ spot, onClose }) {
  const [view, setView] = useState("overview");

  const services = Object.entries(amenityLabels)
    .filter(([key]) => spot.amenities?.[key] === "y")
    .map(([, label]) => label);

  return (
    <aside className="spot-info" aria-labelledby="spot-info-title">
      <button
        type="button"
        className="spot-info-close"
        aria-label="Close location details"
        onClick={onClose}
      >
        ×
      </button>

      {/* Forgot to take pictures of the whole buildings... RIP */}
      {spot.imageUrl && (
        <img className="spot-info-photo" src={spot.imageUrl} alt={spot.name} />
      )}

      <div className="spot-info-body">
        <h2 id="spot-info-title">{spot.name}</h2>
        <p className="spot-info-address">{spot.address}</p>

        <div className="spot-info-views">
          <button
            type="button"
            aria-pressed={view === "overview"}
            onClick={() => setView("overview")}
          >
            Overview
          </button>
          <button
            type="button"
            aria-pressed={view === "spaces"}
            onClick={() => setView("spaces")}
          >
            Study spaces ({spot.studySpaces.length})
          </button>
        </div>

        {view === "overview" ? (
          <>
            <p>{spot.description}</p>

            <h3>Hours</h3>
            <dl className="spot-info-hours">
              {Object.entries(days).map(([key, day]) => (
                <div key={key}>
                  <dt>{day}</dt>
                  <dd>{spot.hours?.[key] || "Unknown"}</dd>
                </div>
              ))}
            </dl>

            <h3>Services</h3>
            <p>{services.join(" · ") || "No confirmed services listed."}</p>
          </>
        ) : (
          <ul className="spot-info-rooms">
            {spot.studySpaces.map((room) => {
              const amenities = Object.entries(amenityLabels)
                .filter(([key]) => room.amenities?.[key] === "y")
                .map(([, label]) => label);

              const status =
                {
                  y: "Available",
                  n: "Unavailable",
                  u: "Availability unknown",
                }[room.availability] ?? "Availability unknown";

              return (
                <li key={room.id} className="room-row">
                  {room.imageUrl && (
                    <img
                      className="room-photo"
                      src={room.imageUrl}
                      alt={room.name}
                    />
                  )}

                  <div className="room-details">
                    <h3>{room.name}</h3>
                    <p>{room.noiseLevels.join(" · ")}</p>
                    {amenities.length > 0 && <p>{amenities.join(" · ")}</p>}
                    <span
                      className="room-status"
                      data-status={room.availability}
                    >
                      {status} · Demo data
                    </span>
                  </div>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </aside>
  );
}
