import styled from "styled-components";
import { Character } from "interfaces/Character";
import { Avatar, Card, StatusIcon } from "components";
import { CardProps } from "components/card/Card";

interface CharacterCardProps extends CardProps {
  data: Character;
  size?: "default" | "large";
}

export const CharacterCard = ({
  data,
  size = "default",
  ...props
}: React.PropsWithChildren<CharacterCardProps>) => {
  return (
    <Card
      key={data.id}
      left={<Avatar src={data.image} alt={data.name} />}
      {...props}
    >
      <Card.Section>
        <CharacterName $fontSize={size === "default" ? 24 : 34}>
          {data.name}
        </CharacterName>
        <CharacterStatus>
          <StatusIcon status={data.status} />
          {data.status} - {data.species}
        </CharacterStatus>
      </Card.Section>
      <Card.Section title="Gender">{data.gender}</Card.Section>
      {props.children}
    </Card>
  );
};

const CharacterStatus = styled.div`
  display: flex;
  align-items: center;
`;

const CharacterName = styled.h2<{ $fontSize: number }>`
  padding: 0;
  margin: 0;
  font-size: ${(props) => props.$fontSize}px;
`;
