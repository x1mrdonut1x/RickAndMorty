import { useQuery } from "react-query";
import { Location } from "interfaces/Location";

export const useLocations = (locations?: (number | null)[]) => {
  const locationIds = locations?.filter(
    (item, pos) => locations.indexOf(item) === pos
  );

  const locationsQuery = useQuery<Location[]>(
    ["locations", locationIds],
    () =>
      fetch(
        `https://rickandmortyapi.com/api/location/${locationIds?.join(",")}`
      ).then((res) => res.json()),
    {
      refetchInterval: false,
      refetchOnWindowFocus: false,
      enabled: (locationIds?.length || []) > 0,
    }
  );

  let data = locationsQuery.data || [];
  if (!Array.isArray(locationsQuery.data) && locationsQuery.data != null)
    data = [locationsQuery.data];

  return {
    ...locationsQuery,
    data,
    isLoading: locationsQuery.isLoading || locationsQuery.isIdle,
  };
};
