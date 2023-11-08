import styled from "@emotion/styled";
import { COLORS } from "styles/global/globalColors";
import GlobalFont from "./../../styles/global/globalFonts";

const Container = styled.button`
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  width: max-content;
  padding: 8px 40px;

  background-color: ${({ selected }) =>
    selected ? COLORS.gray_1.withOpacity(0.2) : COLORS.white};
  border: 2px solid ${COLORS.black};
  border-radius: 30px;

  ${GlobalFont({
    size: 20,
    weight: 500,
  })}
`;

function RoundBtn({ selected, children, ...props }) {
  return (
    <Container selected={selected} {...props}>
      {children}
    </Container>
  );
}

export default RoundBtn;
