import { Card } from "../../../components";
import { Episode } from "../../../interfaces/Episode";

export const Episodes = ({ data }: { data?: Episode[] | Episode }) => {
  const episodeList = Array.isArray(data) ? data : data != null ? [data] : [];

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {episodeList?.map((episode) => (
        <Card key={episode.id}>
          <div style={{ display: "flex" }}>
            <Card.Section title="Episode">{episode.episode}</Card.Section>
            <Card.Section title="Name" style={{ flex: "3 1 0" }}>
              {episode.name}
            </Card.Section>
          </div>
          <Card.Section title="Air Date">{episode.air_date}</Card.Section>
        </Card>
      ))}
    </div>
  );
};
