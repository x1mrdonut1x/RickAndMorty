import { useLocations, useEpisodes, useCharacter } from "../../hooks";
import { Character } from "../../interfaces/Character";
import { getLocationId } from "../../utils";
import { Episodes } from "./parts/Episodes";
import { Location } from "./parts/Location";
import { useHistory, useLocation, useParams } from "react-router-dom";
import { Button } from "../../components";
import { Grid, Row, Col } from "react-flexbox-grid";
import { CharacterCard } from "../../components/character-card/CharacterCard";

export const CharacterProfile = () => {
  const { state: characterFromState } = useLocation<Character>();
  const { characterId } = useParams<{ characterId: string }>();
  const history = useHistory();

  const characterQuery = useCharacter(
    characterFromState ? undefined : characterId
  );

  const character = characterFromState || characterQuery.data;

  const { originId, locationId } = getCharacterLocationIds(character);

  const episodes = useEpisodes(character?.episode);
  const locations = useLocations([originId, locationId]);

  const handleGoBack = () => {
    history.push("");
  };

  return (
    <Grid fluid style={{ margin: "0.75rem 0" }}>
      <Row center="xs" middle="xs" style={{ height: "100vh" }}>
        <Col xs={16} md={12} lg={10} xl={8}>
          <Row start="xs">
            <Col xs={16} md={8}>
              <Row>
                <Col xs={12}>
                  <CharacterCard
                    data={character}
                    style={{ margin: "0 0 0.75rem 0" }}
                  />
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
                  <Button
                    onClick={handleGoBack}
                    style={{ marginBottom: "0.75rem" }}
                  >
                    Back
                  </Button>
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
  const originId = getLocationId(character?.origin?.url);
  const locationId = getLocationId(character?.location?.url);

  return { originId, locationId };
}
