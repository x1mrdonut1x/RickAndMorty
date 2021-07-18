import { useLocations, useEpisodes, useCharacter } from "hooks";
import { Character } from "interfaces/Character";
import { getLocationId } from "utils";
import { Episodes } from "./parts/Episodes";
import { Location } from "./parts/Location";
import { useLocation, useParams } from "react-router-dom";
import { Grid, Row, Col } from "react-flexbox-grid";
import { Card, CharacterCard } from "components";
import { Navigation } from "./parts/Navigation";

export const CharacterProfile = () => {
  const { state: characterFromState } = useLocation<Character | undefined>();
  const { characterId } = useParams<{ characterId: string }>();

  const characterQuery = useCharacter(
    characterFromState ? undefined : characterId
  );

  const character = characterFromState || characterQuery.data;

  const { originId, locationId } = character
    ? getCharacterLocationIds(character)
    : { originId: null, locationId: null };

  const episodes = useEpisodes(character?.episode);
  const locations = useLocations([originId, locationId]);

  return (
    <Grid fluid>
      <Row center="xs" middle="xs" style={{ height: "100vh" }}>
        <Col xs={16} md={12} lg={10} xl={8}>
          <Row start="xs">
            <Col xs={16} md={8}>
              <Row>
                <Col xs={12}>
                  {character == null ? (
                    <Card
                      style={{ margin: 0, maxHeight: 260 }}
                      height="260px"
                      isLoading
                    />
                  ) : (
                    <CharacterCard
                      size="large"
                      data={character}
                      style={{ margin: 0, maxHeight: 260 }}
                    >
                      <Card.Section title="# Episodes">
                        {character?.episode?.length || 0}
                      </Card.Section>
                      {character?.type && (
                        <Card.Section title="Type">
                          {character?.type}
                        </Card.Section>
                      )}
                    </CharacterCard>
                  )}
                </Col>
                <Col xs={12} md={6}>
                  <Location
                    isLoading={locations.isLoading}
                    title="Last seen"
                    data={locations.data?.find((x) => x.id === originId)}
                  />
                </Col>
                <Col xs={12} md={6}>
                  <Location
                    isLoading={locations.isLoading}
                    title="Origin"
                    data={locations.data?.find((x) => x.id === originId)}
                  />
                </Col>
                <Col xs={12} first="xs" last="md">
                  <Navigation />
                </Col>
              </Row>
            </Col>
            <Col xs={12} md={4}>
              <Episodes isLoading={episodes.isLoading} data={episodes.data} />
            </Col>
          </Row>
        </Col>
      </Row>
    </Grid>
  );
};

function getCharacterLocationIds(character: Character) {
  const originId = getLocationId(character.origin.url);
  const locationId = getLocationId(character.location.url);

  return { originId, locationId };
}
