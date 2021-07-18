import { useHistory, useParams } from "react-router-dom";
import { Button } from "../../../components";
import { Row, Col } from "react-flexbox-grid";

export const Navigation = () => {
  const { characterId } = useParams<{ characterId: string }>();
  const history = useHistory();

  const handleGoBack = () => {
    history.push("");
  };

  const handleGoToPrevCharacter = () => {
    history.push(`/characters/${+characterId - 1}`);
  };

  const handleGoToNextCharacter = () => {
    history.push(`/characters/${+characterId + 1}`);
  };

  return (
    <Row style={{ padding: "0 8px" }}>
      <Col>
        <Button
          onClick={handleGoBack}
          style={{ marginRight: "0.75rem", marginBottom: "0.75rem" }}
        >
          Back
        </Button>
      </Col>
      <Col>
        {+characterId > 1 && (
          <Button
            onClick={handleGoToPrevCharacter}
            style={{ marginRight: "0.75rem", marginBottom: "0.75rem" }}
          >
            Previous Character
          </Button>
        )}
      </Col>
      <Col>
        <Button
          onClick={handleGoToNextCharacter}
          style={{ marginRight: "0.75rem", marginBottom: "0.75rem" }}
        >
          Next Character
        </Button>
      </Col>
    </Row>
  );
};
