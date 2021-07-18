import styled from "styled-components";
import { Card } from "components";
import { Location as LocationInterface } from "interfaces/Location";

interface LocationProps {
  data?: LocationInterface;
  title: string;
  isLoading?: boolean;
}

export const Location = ({ data, title, isLoading }: LocationProps) => {
  return (
    <Card style={{ margin: "0.75rem 0 0 0" }} isLoading={isLoading}>
      {title && <CharacterName>{title}</CharacterName>}
      {data == null ? (
        <Card.Section>Unknown</Card.Section>
      ) : (
        <>
          <Card.Section title="Name">{data?.name}</Card.Section>
          <Card.Section title="Type">{data?.type}</Card.Section>
          <Card.Section title="Dimension">{data?.dimension}</Card.Section>
          <Card.Section title="Residents">
            {data?.residents.length}
          </Card.Section>
        </>
      )}
    </Card>
  );
};

const CharacterName = styled.h2`
  padding: 0;
  margin: 0;
`;
