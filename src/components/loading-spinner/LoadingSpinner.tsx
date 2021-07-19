import React from "react";
import styled from "styled-components";

interface LoadingSpinnerProps
  extends React.HtmlHTMLAttributes<HTMLDivElement> {}

export const LoadingSpinner = React.memo((props: LoadingSpinnerProps) => {
  return <Spinner {...props}></Spinner>;
});

const Spinner = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  height: 50px;
  width: 50px;
  margin: -25px 0 0 -25px;
  border: 4px rgba(0, 0, 0, 0.25) solid;
  border-top: 4px black solid;
  border-radius: 50%;
  animation: spin2 1s infinite linear;

  @-webkit-keyframes spin2 {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(359deg);
    }
  }
  @keyframes spin2 {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(359deg);
    }
  }
`;
