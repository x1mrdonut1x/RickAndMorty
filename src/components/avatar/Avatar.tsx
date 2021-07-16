import styled from "styled-components";

export const Avatar = (props: React.ImgHTMLAttributes<HTMLImageElement>) => {
  return <StyledAvatar {...props} />;
};

const StyledAvatar = styled.img`
  width: 100%;
  height: 100%;
  margin: 0px;
  opacity: 1;
  object-fit: cover;
  object-position: center center;
  transition: opacity 0.5s ease 0s;
`;
