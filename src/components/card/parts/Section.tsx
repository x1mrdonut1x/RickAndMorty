import React from "react";
import styled from "styled-components";

interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
}

export const Section = ({
  title,
  children,
  ...rest
}: React.PropsWithChildren<SectionProps>) => {
  return (
    <StyledSection {...rest}>
      {title && <span className="title">{title}</span>}
      <span className="value">{children}</span>
    </StyledSection>
  );
};

const StyledSection = styled.div`
  flex: 1 1 0%;
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;

  span.title {
    color: rgb(158, 158, 158);
    font-size: 16px;
    font-weight: 500;
  }
  span.value {
    color: rgb(245, 245, 245);
  }
`;
