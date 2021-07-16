import React from "react";
import styled from "styled-components";
import { Section } from "./parts/Section";

interface CardProps {
  left?: any;
  onClick?: () => void;
}

export const Card = ({
  left,
  children,
  onClick,
}: React.PropsWithChildren<CardProps>) => {
  return (
    <StyledCard {...(onClick ? { onClick, $clickable: true } : {})}>
      {left && <ImageContainer>{left}</ImageContainer>}
      <InfoContainer>{children}</InfoContainer>
    </StyledCard>
  );
};

Card.Section = Section;

const StyledCard = styled.article<{ $clickable?: boolean }>`
  display: flex;
  flex: 0 1 380px;
  overflow: hidden;
  background: rgb(60, 62, 68) none repeat scroll 0% 0%;
  border-radius: 0.5rem;
  margin: 0.75rem;
  transition: all 0.2s;

  ${(props) =>
    props.$clickable &&
    `
  &:hover {
    cursor: pointer;
    transform: scale(1.05);
  }
  `}
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
