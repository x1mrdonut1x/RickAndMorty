import { getEpisodeIds, getLocationId, getLocationIds } from ".";

describe("getEpisodeIds", () => {
  it("get basic ids", () => {
    const episodeList = [
      "https://rickandmortyapi.com/api/episode/1",
      "https://rickandmortyapi.com/api/episode/2",
    ];

    const result = getEpisodeIds(episodeList);

    expect(result).toMatchObject([1, 2]);
  });

  it("sort ids", () => {
    const episodeList = [
      "https://rickandmortyapi.com/api/episode/2",
      "https://rickandmortyapi.com/api/episode/2",
      "https://rickandmortyapi.com/api/episode/1",
    ];

    const result = getEpisodeIds(episodeList);

    expect(result).toMatchObject([1, 2, 2]);
  });
});

describe("getLocationId", () => {
  it("returns location id", () => {
    const location = "https://rickandmortyapi.com/api/location/1";

    const result = getLocationId(location);

    expect(result).toBe(1);
  });
});

describe("getLocationIds", () => {
  it("get basic ids", () => {
    const locationsList = [
      "https://rickandmortyapi.com/api/location/1",
      "https://rickandmortyapi.com/api/location/2",
    ];

    const result = getLocationIds(locationsList);

    expect(result).toMatchObject([1, 2]);
  });

  it("sort ids", () => {
    const locationsList = [
      "https://rickandmortyapi.com/api/location/3",
      "https://rickandmortyapi.com/api/location/2",
      "https://rickandmortyapi.com/api/location/1",
    ];

    const result = getLocationIds(locationsList);

    expect(result).toMatchObject([1, 2, 3]);
  });

  it("deduplicate ids", () => {
    const locationsList = [
      "https://rickandmortyapi.com/api/location/1",
      "https://rickandmortyapi.com/api/location/1",
    ];

    const result = getLocationIds(locationsList);

    expect(result).toMatchObject([1]);
  });
});
