import React from "react";
import styled from "styled-components";
import { Character } from "../../interfaces/Character";
import { Avatar } from "../avatar/Avatar";
import { Card } from "../card/Card";
import { StatusIcon } from "../status-icon/StatusIcon";
import { CardProps } from "../card/Card";

interface CharacterCardProps extends CardProps {
  data?: Character;
}

export const CharacterCard = ({ data, ...props }: CharacterCardProps) => {
  if (data == null) return <Card {...props} height="200px" isLoading />;

  return (
    <Card
      key={data.id}
      left={<Avatar src={data.image} alt={data.name} />}
      {...props}
    >
      <Card.Section>
        <CharacterName>{data.name}</CharacterName>
        <CharacterStatus>
          <StatusIcon status={data.status} />
          {data.status} - {data.species}
        </CharacterStatus>
      </Card.Section>
      <Card.Section title="Species">{data.species}</Card.Section>
      <Card.Section title="Gender">{data.gender}</Card.Section>
    </Card>
  );
};

const CharacterStatus = styled.div`
  display: flex;
  align-items: center;
`;

const CharacterName = styled.h2`
  padding: 0;
  margin: 0;
`;
