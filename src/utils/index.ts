import { Character } from "interfaces/Character";

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

export function getCharacterLocationIds(character?: Character) {
  if (!character) return { originId: null, locationId: null };

  const originId = getLocationId(character.origin.url);
  const locationId = getLocationId(character.location.url);

  return { originId, locationId };
}

export function makeArray<T>(data: T | T[] | undefined) {
  if (!Array.isArray(data) && data != null) return [data];
  if (Array.isArray(data)) return data;
  return [];
}
