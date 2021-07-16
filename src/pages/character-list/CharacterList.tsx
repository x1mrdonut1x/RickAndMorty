import { Avatar, Card, StatusIcon } from "../../components";
import { Character } from "../../interfaces/Character";
import { useQuery } from "react-query";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

interface CharacterResponse {
  info: any;
  results: Character[];
}

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
      {characterQuery.data?.results.map((character) => (
        <Card
          key={character.id}
          left={<Avatar src={character.image} alt={character.name} />}
          onClick={() => handleGoToCharacter(character)}
        >
          <Card.Section>
            <CharacterName>{character.name}</CharacterName>
            <CharacterStatus>
              <StatusIcon status={character.status} />
              {character.status} - {character.species}
            </CharacterStatus>
          </Card.Section>
          <Card.Section title="Species">{character.species}</Card.Section>
        </Card>
      ))}
    </div>
  );
}

const CharacterStatus = styled.div`
  display: flex;
  align-items: center;
`;

const CharacterName = styled.h2`
  padding: 0;
  margin: 0;
`;
