import { css } from "@emotion/react";
import styled from "@emotion/styled";
import {
  InnerOption,
  InnerOptionValue,
  InnerTitle,
  ProfileText,
} from "components/global/Texts";
import AllFullRow from "components/utils/AllFullRow";
import Block from "components/utils/Block";
import Column from "components/utils/Column";
import Divider from "components/utils/Divider";
import { LayerAlign } from "components/utils/WidgetUtils";
import { useEffect, useState } from "react";
import { COLORS } from "styles/global/globalColors";
import ChatInput from "./ChatInput";
import RoundBtn from "components/global/RoundBtn";
import { Profile } from "components/global/Profile";
import { sleep } from "utils/utilsFunctions";
import TypingAnimation from "components/global/TypingAnimation";
import ServerProvider from "networks/ServerProvider";
import { ReactComponent as Pat } from "assets/icons/pat.svg";
import { ReactComponent as Lily } from "assets/icons/lily.svg";
import { ReactComponent as Steve } from "assets/icons/steve.svg";
import { ReactComponent as Casey } from "assets/icons/casey.svg";

const ChatContainer = styled.div`
  position: relative;

  /* overflow-y: scroll; */
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;

  width: 100%;
  height: max-content;

  padding: 0px 6px;
`;

const UserLine = styled.div`
  position: absolute;
  left: ${({ margin }) => `${margin}px`};

  width: 1px;
  height: 100%;
  background-color: ${({ color }) => color};
`;

const UserChatBubble = styled.div`
  z-index: 1;
  width: 100%;

  border: 1px solid #000;
  background: #fff;

  padding: 24px 21px;
  margin-top: 35px;

  white-space: pre-wrap;
`;

const ChatBubble = styled.div`
  position: relative;
  left: ${({ margin }) => `${margin}px`};

  display: flex;
  align-items: center;
  justify-content: start;

  width: 450px;
  height: max-content;

  padding: 16px 21px;
  margin-top: 35px;

  word-break: break-all;

  ${({ backColor, borderColor }) => css`
    background-color: ${backColor};
    border: 1px solid ${borderColor};
  `}
`;

const colorIndex = [
  { backColor: COLORS.yellow_1, borderColor: COLORS.yellow_2 },
  { backColor: COLORS.blue_1, borderColor: COLORS.blue_2 },
  { backColor: COLORS.red_1, borderColor: COLORS.red_2 },
  { backColor: COLORS.purple_1, borderColor: COLORS.purple_2 },
];
const marginPixel = [0, 112, 386, 534];
const lineMarginPixel = [80, 340, 622, 924];

function BrainPage({
  ideas,
  selectedIndex,
  setSelectedIndex,
  brainPageIndex,
  setBrainPageIndex,
  parentIndex,
  reGen,
  setConclusionData,
}) {
  const [isTalking, setIsTalking] = useState(true);
  const [isTyping, setIsTyping] = useState(false);

  // 0: yellow, 1: blue, 2: red, 3: purple, -1: user
  const [messages, setMessages] = useState([]);
  const [selectedList, setSelectedList] = useState(Array(4).fill(false));

  const [chatting, setChatting] = useState("");

  const api = new ServerProvider();

  const getChatting = async ({ input = "" }) => {
    const dialog = [];

    messages.forEach((value) => {
      const newDialog = {};
      newDialog[value.user] = value.text;
      dialog.push(newDialog);
    });

    let speaker_list = [];
    selectedList.forEach((value, index) => {
      if (value) {
        speaker_list.push(index);
      }
    });

    console.log('speaker_list');
    console.log(speaker_list);
    const response = await api.dialog({
      log: {
        service_name: ideas[selectedIndex].service_name,
        problem: ideas[selectedIndex].problem,
        service_idea: ideas[selectedIndex].service_idea,
        dialog,
      },

      input,
      speaker: speaker_list,
    });

    const test = {
      "log": {
          "service_name": "AI Resume Builder",
          "problem": "Finding a job can be a daunting task, especially update their resumes to fit each job application.",
          "service_idea": "An AI-powered platform that automatically generate requirements, saving time and improving accuracy.",
          "dialog": [
               {"0": "I have some concerns about the AI-powered resume builder idea."}
          ]
        },
      "human_input": "",
      "speaker_list": []
    }

    if (response) {
      setIsTalking(true);
      setIsTyping(true);
      const message = { user: response.speaker, text: response.contents };
      let newMessages = [...messages];
      if (input !== "") {
        newMessages.push({ user: 4, text: input });
      } 
      newMessages.push(message);
      setMessages(newMessages);

      if (response.is_finished) {
        setIsTalking(false);
      }
    }
  };

  const getConclusion = async () => {
    const dialog = [];

    messages.forEach((value) => {
      const newDialog = {};
      newDialog[value.user] = value.text;
      dialog.push(newDialog);
    });

    const response = await api.conclusion({
      log: {
        service_name: ideas[selectedIndex].service_name,
        problem: ideas[selectedIndex].problem,
        service_idea: ideas[selectedIndex].solution,
        dialog,
      },
    });

    console.log(response)

    setConclusionData(response);
  };

  useEffect(() => {
    if (brainPageIndex === 1) {
      if (!isTyping) {
        if(isTalking) {
          console.log("Second");

          getChatting({ input: "" });
        }
      } else {
        if (messages[messages.length - 1].user === 4) {
          console.log("Third");
          getChatting({ input: chatting });
        }
      }
    }
  }, [isTyping]);

  useEffect(() => {
    if (brainPageIndex == 1) {
      console.log("First");
      getChatting({ input: "" });
    }
  }, [brainPageIndex]);

  useEffect(() => {
    if(parentIndex === 3) {
      getConclusion();
    }
  }, [parentIndex]);

  if (brainPageIndex === 0) {
    return (
      <>
        <InnerTitle>Ideas generated for your brainstorming session:</InnerTitle>

        <Block h={40} />
        {ideas.map((value, index) => {
          return (
            <div key={index}>
              <AllFullRow>
                <InnerOption>Service Name:</InnerOption>
                <Block w={10} />
                <InnerOptionValue>{value.service_name}</InnerOptionValue>
              </AllFullRow>
              <AllFullRow>
                <InnerOption>Problem:</InnerOption>
                <Block w={10} />
                <InnerOptionValue>{value.problem}</InnerOptionValue>
              </AllFullRow>
              <AllFullRow>
                <InnerOption>Service Idea:</InnerOption>
                <Block w={10} />
                <InnerOptionValue>{value.service_idea}</InnerOptionValue>
              </AllFullRow>

              <Block h={12} />
              <AllFullRow main={LayerAlign.end}>
                <RoundBtn
                  selected={selectedIndex === index}
                  onClick={() => {
                    setSelectedIndex(index);
                  }}>
                  Select
                </RoundBtn>
              </AllFullRow>
              <Block h={60} />
            </div>
          );
        })}
      </>
    );
  } else {
    return (
      <>
        <InnerTitle>Brainstorming session:</InnerTitle>

        <Block h={40} />
        <AllFullRow>
          <InnerOption>Service Name:</InnerOption>

          <Block w={4} />
          <InnerOptionValue>
            {ideas[selectedIndex].service_name}
          </InnerOptionValue>
        </AllFullRow>
        <AllFullRow>
          <InnerOption>Problem:</InnerOption>

          <Block w={4} />
          <InnerOptionValue>{ideas[selectedIndex].problem}</InnerOptionValue>
        </AllFullRow>
        <AllFullRow>
          <InnerOption>Service Idea:</InnerOption>

          <Block w={4} />
          <InnerOptionValue>
            {ideas[selectedIndex].service_idea}
          </InnerOptionValue>
        </AllFullRow>

        <Block h={63} />
        <Divider thick={2} c={COLORS.black} />

        <Block h={72} />
        <AllFullRow main={LayerAlign.center}>
          <Block w={21} />
          <Column>
            <Profile color={COLORS.yellow_1}>
                <Pat />
            </Profile>
            <ProfileText>Pat(VC)</ProfileText>
          </Column>

          <Block w={108} />
          <Column>
            <Profile color={COLORS.blue_1}>
                <Lily />
            </Profile>
            <ProfileText>Lily(VC)</ProfileText>
          </Column>
          <Block w={108} />
          <Column>
            <Profile color={COLORS.red_1}>
                <Steve />
            </Profile>
            <ProfileText>Steve(Tech Expert)</ProfileText>
          </Column>
          <Block w={108} />
          <Column>
            <Profile color={COLORS.purple_1}>
                <Casey />
            </Profile>
            <ProfileText>Casey(Consumer)</ProfileText>
          </Column>
        </AllFullRow>

        <Block h={40} />
        <ChatContainer>
          <UserLine color={COLORS.yellow_1} margin={lineMarginPixel[0]} />
          <UserLine color={COLORS.blue_1} margin={lineMarginPixel[1]} />
          <UserLine color={COLORS.red_1} margin={lineMarginPixel[2]} />
          <UserLine color={COLORS.purple_1} margin={lineMarginPixel[3]} />
          {messages.map((value, index) => {
            const user = value.user;
            const text = value.text;
            if (user !== 4) {
              return (
                <ChatBubble
                  key={index}
                  margin={marginPixel[user]}
                  backColor={colorIndex[user].backColor}
                  borderColor={colorIndex[user].borderColor}>
                  <TypingAnimation
                    message={text}
                    isT={isTyping}
                    setIsTyping={setIsTyping}
                  />
                </ChatBubble>
              );
            } else {
              return <UserChatBubble>{text}</UserChatBubble>;
            }
          })}

          <Block h={80} />
        </ChatContainer>

        {!isTalking ?
            <>
                <ChatInput
                chatting={chatting}
                setChatting={setChatting}
                seletedList={selectedList}
                setSelectedList={setSelectedList}
                onSubmit={async () => {
                    const message = { user: 4, text: chatting };
                    let newMessages = [...messages];
                    newMessages.push(message);
                    setMessages(newMessages);
        
                    console.log("Input GO");
        
                    await getChatting({ input: chatting });
                    setChatting("");
                    setSelectedList(Array(4).fill(false));
                }}
                />
                <Block h={15} />
                <div style={{ alignSelf: "end" }}>
                    <RoundBtn onClick={async () => {
                        await getChatting({ input: '' });
                    }}>skip my turn</RoundBtn>
                </div>
            </>
        : null }
      </>
    );
  }
}

export default BrainPage;
