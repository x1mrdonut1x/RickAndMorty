import { useHistory, useParams } from "react-router-dom";
import { Button } from "components";
import { Row, Col } from "react-flexbox-grid";
import styled from "styled-components";
import React from "react";

export const Navigation = React.memo(() => {
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
    <Row style={{ padding: "0.75rem 8px 0 8px" }}>
      <Col>
        <StyledButton onClick={handleGoBack}>Back</StyledButton>
      </Col>
      <Col>
        {+characterId > 1 && (
          <StyledButton onClick={handleGoToPrevCharacter}>
            Previous Character
          </StyledButton>
        )}
      </Col>
      <Col>
        <StyledButton onClick={handleGoToNextCharacter}>
          Next Character
        </StyledButton>
      </Col>
    </Row>
  );
});

const StyledButton = styled(Button)`
  margin-right: 0.75rem;
  margin-bottom: 0.75rem;
`;
