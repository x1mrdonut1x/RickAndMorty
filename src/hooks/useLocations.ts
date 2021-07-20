import { useQuery } from "react-query";
import { Location } from "interfaces/Location";
import { makeArray } from "utils";

export const useLocations = (locations?: (number | null)[]) => {
  // remove duplicated and empty values
  const locationIds = locations?.filter(
    (item, pos) => item && locations.indexOf(item) === pos
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

  // if value not array, return array
  const data = makeArray(locationsQuery.data);

  return {
    ...locationsQuery,
    data,
  };
};
