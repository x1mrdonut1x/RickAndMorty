import { Card } from "../../../components";
import { Episode } from "../../../interfaces/Episode";
import { Grid, Row, Col } from "react-flexbox-grid";
import styled from "styled-components";

interface EpisodesProps {
  data?: Episode[] | Episode;
  isLoading?: boolean;
}

export const Episodes = ({ data, isLoading }: EpisodesProps) => {
  const episodeList = Array.isArray(data) ? data : data != null ? [data] : [];

  if (isLoading)
    return (
      <>
        {[...Array(3).keys()].map((x) => (
          <Card
            key={x}
            isLoading
            height="124px"
            style={{ margin: "0 0 0.74rem 0" }}
          />
        ))}
      </>
    );

  return (
    <Grid fluid style={{ padding: 0 }}>
      <ScrollBox start="xs">
        {episodeList?.map((episode, index) => (
          <Col xs={12} key={episode.id}>
            <Card style={{ margin: "0 0 0.74rem 0" }}>
              <Card.Section title="Name" style={{ flex: "3 1 0" }}>
                {episode.name}
              </Card.Section>
              <Row>
                <Col xs={4}>
                  <Card.Section title="Episode">{episode.episode}</Card.Section>
                </Col>
                <Col>
                  <Card.Section title="Air Date">
                    {episode.air_date}
                  </Card.Section>
                </Col>
              </Row>
            </Card>
          </Col>
        ))}
      </ScrollBox>
    </Grid>
  );
};

const ScrollBox = styled(Row)`
  max-height: 80vh;
  overflow: auto;
  scrollbar-color: #c2c2c2 transparent;
`;
