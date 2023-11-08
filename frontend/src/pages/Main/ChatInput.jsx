import styled from "@emotion/styled";
import { COLORS } from "styles/global/globalColors";
import { ReactComponent as EnterArrow } from "assets/icons/ic-enter_arrow.svg";
import { css } from "@emotion/react";
import Row from "components/utils/Row";
import Block from "components/utils/Block";
import ElasticTextArea from "components/global/ElasticTextArea";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: center;

  width: 100%;

  border: 1px solid ${COLORS.black};

  padding: 10px;
`;

const ColorPick = styled.div`
  cursor: pointer;

  width: 30px;
  height: 30px;

  border-radius: 100%;
  box-sizing: border-box;
  ${({ backColor, isSelected, borderColor }) => css`
    background-color: ${backColor};
    border: ${isSelected ? `1px solid ${borderColor}` : "none"};
    opacity: ${isSelected ? 1 : 0.3};
  `}
`;

const EnterArrowIcon = styled(EnterArrow)`
  cursor: pointer;

  width: 30px;
  height: 30px;
`;

const colorSet = [
  [COLORS.yellow_1, COLORS.yellow_2],
  [COLORS.blue_1, COLORS.blue_2],
  [COLORS.red_1, COLORS.red_2],
  [COLORS.purple_1, COLORS.purple_2],
];

function ChatInput({
  chatting,
  setChatting,
  onSubmit,
  seletedList,
  setSelectedList,
}) {
  return (
    <Container>
      <ElasticTextArea
        value={chatting}
        setValue={setChatting}
        min={40}
        max={160}
        placeholder="Input"
        width={"100%"}
        onSubmit={() => {
          if (chatting === "" || !chatting) {
            return;
          }
          onSubmit();
        }}
      />

      <Block h={10} />
      <Row>
        {colorSet.map((value, index) => {
          return (
            <>
              <ColorPick
                key={index}
                backColor={value[0]}
                isSelected={seletedList[index]}
                borderColor={value[1]}
                onClick={() => {
                  const newList = [...seletedList];
                  newList[index] = !newList[index];
                  setSelectedList(newList);
                }}
              />
              <Block w={10} />
            </>
          );
        })}
        <EnterArrowIcon
          onClick={() => {
            if (chatting === "" || !chatting) {
              return;
            }
            onSubmit();
          }}
        />
      </Row>
    </Container>
  );
}

export default ChatInput;
