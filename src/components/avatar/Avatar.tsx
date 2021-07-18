import { useState, memo } from "react";
import styled from "styled-components";
import Placeholder from "assets/placeholder.jpeg";
import { LoadingSpinner } from "components";

interface AvatarProps extends React.ImgHTMLAttributes<HTMLImageElement> {}

export const Avatar = memo(({ src, ...props }: AvatarProps) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <StyledAvatar
        {...props}
        onLoad={() => setIsLoading(false)}
        src={isLoading ? Placeholder : src}
      />
      {isLoading && <LoadingSpinner id="image-loader" />}
    </>
  );
});

const StyledAvatar = styled.img`
  width: 100%;
  height: 100%;
  margin: 0px;
  opacity: 1;
  object-fit: cover;
  object-position: center center;
  transition: opacity 0.5s ease 0s;
`;
