import { useQuery } from "react-query";
import { Episode } from "interfaces/Episode";
import { getEpisodeIds, makeArray } from "utils";

export const useEpisodes = (episodes?: string[]) => {
  const episodeIds = getEpisodeIds(episodes);

  const episodesQuery = useQuery<Episode[]>(
    ["episodes", episodeIds],
    () =>
      fetch(
        `https://rickandmortyapi.com/api/episode/${episodeIds.join(",")}`
      ).then((res) => res.json()),
    {
      refetchInterval: false,
      refetchOnWindowFocus: false,
      enabled: (episodeIds?.length || []) > 0,
    }
  );

  // if value not array, return array
  const data = makeArray(episodesQuery.data);

  return {
    ...episodesQuery,
    data,
  };
};
