import React from "react";
import styled from "styled-components";
import { Section } from "./Section";

interface CardProps {
  left?: any;
}

export const Card = ({
  left,
  children,
}: React.PropsWithChildren<CardProps>) => {
  return (
    <StyledCard>
      {left && <ImageContainer>{left}</ImageContainer>}
      <InfoContainer>{children}</InfoContainer>
    </StyledCard>
  );
};

Card.Section = Section;

const StyledCard = styled.article`
  width: 600px;
  height: 220px;
  display: flex;
  overflow: hidden;
  background: rgb(60, 62, 68) none repeat scroll 0% 0%;
  border-radius: 0.5rem;
  margin: 0.75rem;
`;

const ImageContainer = styled.div`
  flex: 2 1 0%;
  width: 100%;
`;

const InfoContainer = styled.div`
  flex: 3 1 0%;
  position: relative;
  padding: 0.75rem;
  color: rgb(255, 255, 255);
  display: flex;
  flex-direction: column;
`;
