import { useQuery } from "react-query";
import { Episode } from "interfaces/Episode";
import { getEpisodeIds } from "utils";

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

  let data = episodesQuery.data || [];
  if (!Array.isArray(episodesQuery.data) && episodesQuery.data != null)
    data = [episodesQuery.data];

  return {
    ...episodesQuery,
    data,
    isLoading: episodesQuery.isLoading || episodesQuery.isIdle,
  };
};
