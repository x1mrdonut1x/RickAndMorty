import { useQuery } from "react-query";
import { Location } from "../interfaces/Location";
import {  getLocationIds } from "../utils";

export const useLocations = (data: string[]) => {
  const locationIds = getLocationIds(data);

  const locationsQuery = useQuery<Location[]>(
    ["locations", locationIds],
    () =>
      fetch(
        `https://rickandmortyapi.com/api/locations/${locationIds.join(",")}`
      ).then((res) => res.json()),
    {
      refetchInterval: false,
      refetchOnWindowFocus: false,
    }
  );

  return locationsQuery;
};
