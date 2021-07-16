export const getEpisodeIds = (episodes: string[]) => {
  const result = episodes.map((episode) => +episode.split("episode/")[1]);

  return result.sort((a, b) => a - b);
};

export const getLocationIds = (locations: string[]) => {
  const result: number[] = [];

  locations.forEach((location) => {
    const locationId = +location.split("location/")[1];
    if (!result.includes(locationId)) result.push(locationId);
  });

  return result.sort((a, b) => a - b);
};

export const getLocationId = (location: string) => {
  return +location.split("location/")[1];
};
