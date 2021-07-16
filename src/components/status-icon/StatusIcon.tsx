import styled from "styled-components";

export const StatusIcon = ({
  status,
}: {
  status: "Dead" | "Alive" | "unknown";
}) => {
  if (status === "unknown") return null;

  return <Icon $color={status === "Dead" ? "red" : "green"} />;
};

const Icon = styled.span<{ $color: "red" | "green" }>`
  height: 0.5rem;
  width: 0.5rem;
  margin-right: 0.375rem;
  background: ${(props) =>
      props.$color === "red" ? "rgb(214, 61, 46)" : "rgb(85, 204, 68)"}
    none repeat scroll 0% 0%;
  border-radius: 50%;
`;
