import { Card } from "../../components/card";
import { Character } from "../../interfaces/Character";
import { useQuery } from "react-query";
import data from "../../fixtures/characters.json";

interface CharacterResponse {
  info: any;
  results: Character[];
}

interface CharacterListProps {
  onGoToCharacter: (x: Character) => void;
}

export function CharacterList({ onGoToCharacter }: CharacterListProps) {
  const characterQuery = useQuery<CharacterResponse>("characters", () =>
    fetch("https://rickandmortyapi.com/api/character").then((res) => res.json())
  );

  return (
    <div>
      <header>Hello</header>
      {data?.results.map((character) => (
        <Card key={character.id} left={<img src={character.image} />}>
          <Card.Section title="Name">
            <span onClick={() => onGoToCharacter(character)}>
              {character.name}
            </span>
            , {character.gender}
          </Card.Section>
          <Card.Section title="Species">{character.species}</Card.Section>
        </Card>
      ))}
    </div>
  );
}
