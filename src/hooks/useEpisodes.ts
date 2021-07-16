import { useQuery } from "react-query";
import { Episode } from "../interfaces/Episode";
import { getEpisodeIds } from "../utils";

export const useEpisodes = (data: string[]) => {
  const episodeIds = getEpisodeIds(data);

  const episodesQuery = useQuery<Episode[]>(
    ["episodes", episodeIds],
    () =>
      fetch(
        `https://rickandmortyapi.com/api/episode/${episodeIds.join(",")}`
      ).then((res) => res.json()),
    {
      refetchInterval: false,
      refetchOnWindowFocus: false,
    }
  );

  return episodesQuery;
};
