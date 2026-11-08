import { useState } from "react";

function SearchBar({ spots = [], onSelect }) {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const term = query.trim().toLowerCase();

  // Find matches
  const matches = term
    ? spots.filter((spot) =>
        [spot.name, spot.type, spot.address].some((field) =>
          field?.toLowerCase().includes(term),
        ),
      )
    : [];

  function selectSpot(spot) {
    setQuery(spot.name);
    setIsOpen(false);
    onSelect(spot);
  }

  return (
    <div
      className="place-search"
      // Escape search bar focus
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          setIsOpen(false);
        }
      }}
      // Typing dectecting
      onKeyDown={(event) => {
        if (event.key === "Escape") setIsOpen(false);
      }}
    >
      <input
        type="search"
        aria-label="Search study spots"
        placeholder="Search by spot, building, or address"
        value={query}
        onFocus={() => setIsOpen(true)}
        onChange={(event) => {
          setQuery(event.target.value);
          setIsOpen(true);
        }}
      />

      {/* If the user is still focus on the bar and typed in insomething */}
      {isOpen && term && (
        <div className="place-search-results">
          {matches.length === 0 ? (
            <p role="status">No matching study spots.</p>
          ) : (
            // Return a dropdown list of 5 matches
            <ul>
              {matches.slice(0, 5).map((spot) => (
                <li key={spot.id}>
                  <button type="button" onClick={() => selectSpot(spot)}>
                    {spot.name}
                    {spot.building && <small>{spot.building}</small>}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}

export default SearchBar;
