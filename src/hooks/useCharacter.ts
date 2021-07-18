import { useQuery } from "react-query";
import { Character } from "interfaces/Character";

export const useCharacter = (characterId?: number | string) => {
  const characterQuery = useQuery<Character>(
    ["character", characterId],
    () =>
      fetch(`https://rickandmortyapi.com/api/character/${characterId}`).then(
        (res) => res.json()
      ),
    { enabled: characterId != null }
  );

  return characterQuery;
};
