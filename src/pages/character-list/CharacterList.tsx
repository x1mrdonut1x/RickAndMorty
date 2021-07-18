import { Character } from "../../interfaces/Character";
import { useQuery } from "react-query";
import { useHistory } from "react-router-dom";
import { CharacterCard } from "../../components";
import Placeholder from "../../assets/placeholder.jpeg";

interface CharacterResponse {
  info: any;
  results: Character[];
}

const placeholderCharacter: Character = {
  name: "-",
  id: 0,
  status: "unknown",
  species: "",
  type: "",
  gender: "unknown",
  origin: { name: "unknown", url: "" },
  location: { name: "unknown", url: "" },
  image: Placeholder,
  episode: [],
  url: "",
  created: "",
};

export function CharacterList() {
  const history = useHistory();

  const characterQuery = useQuery<CharacterResponse>("characters", () =>
    fetch("https://rickandmortyapi.com/api/character").then((res) => res.json())
  );

  const handleGoToCharacter = (character: Character) => {
    history.push({
      pathname: `characters/${character.id}`,
      state: character,
    });
  };

  return (
    <div
      style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
    >
      {characterQuery.isLoading
        ? [...Array(20).keys()].map((x) => (
            <CharacterCard
              isLoading
              key={x}
              data={placeholderCharacter}
              // onClick={() => handleGoToCharacter(character)}
              width="380px"
              height="184px"
            />
          ))
        : characterQuery.data?.results.map((character) => (
            <CharacterCard
              key={character.id}
              data={character}
              onClick={() => handleGoToCharacter(character)}
              width="380px"
            />
          ))}
    </div>
  );
}
