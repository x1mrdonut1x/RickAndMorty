import { Card } from "../../../components";
import { Location as LocationInterface } from "../../../interfaces/Location";

export const Location = ({ data }: { data?: LocationInterface }) => {
  return (
    <div style={{ display: "flex" }}>
      <Card>
        <Card.Section title="Name">{data?.name}</Card.Section>
        <Card.Section title="Type">{data?.type}</Card.Section>
        <Card.Section title="Dimension">{data?.dimension}</Card.Section>
        <Card.Section title="Residents">{data?.residents.length}</Card.Section>
      </Card>
    </div>
  );
};
