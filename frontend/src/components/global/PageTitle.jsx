import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { COLORS } from "styles/global/globalColors";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 240px;
  height: 40px;

  ${({ isSelected }) => {
    return isSelected
      ? css`
          color: black;
          border: 2px solid #fda942;

          background: #fda942;
        `
      : css`
          color: ${COLORS.gray_1};
          border: 2px solid ${COLORS.gray_1};

          background: #fff;
        `;
  }}
`;

function PageTitle({ isSelected, children }) {
  return <Container isSelected={isSelected}>{children}</Container>;
}

export default PageTitle;
