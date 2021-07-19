import { StatusType } from "interfaces/Character";
import React from "react";
import styled from "styled-components";

interface StatusIconProps {
  status: StatusType;
}

export const StatusIcon = React.memo(({ status }: StatusIconProps) => {
  return <Icon $color={getStatusColor(status)} />;
});

const Icon = styled.span<{ $color: string }>`
  height: 0.5rem;
  width: 0.5rem;
  margin-right: 0.375rem;
  background: ${(props) => props.$color};
  border-radius: 50%;
  margin-top: 2px;
`;

const getStatusColor = (status: StatusType) => {
  if (status === "Dead") return "rgb(214, 61, 46)";
  if (status === "Alive") return "rgb(85, 204, 68)";
  return "rgb(224, 184, 72)";
};
