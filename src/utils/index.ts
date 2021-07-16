export const getEpisodeIds = (episodes?: string[]) => {
  if (!episodes) return [];
  const result = episodes.map((episode) => +episode.split("episode/")[1]);

  return result.sort((a, b) => a - b);
};

export const getLocationIds = (locations?: string[]) => {
  if (!locations) return [];
  const result: number[] = [];

  locations.forEach((location) => {
    if (!location) return;
    const locationId = +location.split("location/")[1];
    if (!result.includes(locationId)) result.push(locationId);
  });

  return result.sort((a, b) => a - b);
};

export const getLocationId = (location?: string) => {
  if (!location) return null;
  return +location.split("location/")[1];
};
