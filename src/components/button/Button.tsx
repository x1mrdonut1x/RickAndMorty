import React from "react";
import styled from "styled-components";

export const Button = React.memo(
  (props: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
    return <StyledButton {...props} />;
  }
);

const StyledButton = styled.button`
  background: rgb(60, 62, 68) none repeat scroll 0% 0%;
  color: white;
  border-radius: 0.5rem;
  border: none;
  font-size: 1.2rem;
  padding: 12px 16px;
  transition: 0.2s all;

  :hover {
    cursor: pointer;
    background: rgb(94, 97, 105) none repeat scroll 0% 0%;
  }
`;
