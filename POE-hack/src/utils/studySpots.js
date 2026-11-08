// Fully implemented by AI

const requiredAmenities = {
  Any: [],
  Board: ["whiteboard"],
  "TV/Projector": ["projector"],
  "Board + TV/Projector": ["whiteboard", "projector"],
};

export default function filterStudySpots(spots, userPrefs) {
  const noise = userPrefs.noiseLevel?.toLowerCase();
  const hasNoisePreference = Boolean(noise && noise !== "any");
  const studyType = userPrefs.studyType?.toLowerCase();
  const needsStepFreeAccess = userPrefs.stepFreeAccess === "Required";
  const facilities = requiredAmenities[userPrefs.facilities ?? "Any"];

  const results = [];

  for (const spot of spots) {
    if (
      studyType &&
      spot.studyTypes !== "both" &&
      spot.studyTypes !== studyType
    ) {
      continue;
    }

    const matchingRooms = spot.studySpaces
      .filter((room) => {
        if (needsStepFreeAccess && room.amenities?.stepFreeAccess !== "y") {
          return false;
        }

        return facilities.every((amenity) => room.amenities?.[amenity] === "y");
      })
      .map((room) => {
        const matchesNoise = Boolean(
          noise && noise !== "any" && room.noiseLevels?.includes(noise),
        );

        return { ...room, matchesNoise };
      })
      .sort((a, b) => Number(b.matchesNoise) - Number(a.matchesNoise));

    if (matchingRooms.length > 0) {
      const bestRoom = matchingRooms[0];
      const matchKind =
        hasNoisePreference && !bestRoom.matchesNoise ? "alternative" : "match";

      results.push({ ...spot, matchingRooms, matchKind });
    }
  }

  return results.sort(
    (a, b) =>
      Number(b.matchingRooms[0].matchesNoise) -
      Number(a.matchingRooms[0].matchesNoise),
  );
}
