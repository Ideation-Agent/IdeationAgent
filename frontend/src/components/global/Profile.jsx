import styled from "@emotion/styled";
import { COLORS } from "styles/global/globalColors";

export const Profile = styled.div`
  width: 150px;
  height: 150px;
  border: 1px solid ${({ color }) => color};
  background: ${COLORS.white};
  display: flex;
  justify-content: center;
  align-items: center;
`;
