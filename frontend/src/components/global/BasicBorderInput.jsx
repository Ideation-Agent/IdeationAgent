import styled from "@emotion/styled";
import { COLORS } from "styles/global/globalColors";

const Backboard = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;
  background-color: ${COLORS.white};
  border: 2px solid ${COLORS.black};

  box-sizing: border-box;

  transition: all 0.2s ease-in-out;

  border: 2px solid ${COLORS.black};
`;

const Input = styled.input`
  border-radius: 50px;

  width: 100%;
  height: 100%;

  padding: 0 16px;

  color: ${COLORS.black};

  &::placeholder {
    color: ${COLORS.gray_1};
  }
`;

function BasicBorderInput({
  type = "text",
  value,
  setValue,
  placeholder = "Input",
}) {
  const onChangeHandler = (e) => {
    setValue(e.target.value);
  };

  return (
    <Backboard>
      <Input
        value={value}
        type={type}
        onChange={onChangeHandler}
        placeholder={placeholder}
      />
    </Backboard>
  );
}

export default BasicBorderInput;
