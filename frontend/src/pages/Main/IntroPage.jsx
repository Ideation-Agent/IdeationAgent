import styled from "@emotion/styled";
import BasicBorderInput from "components/global/BasicBorderInput";
import TextArea from "components/global/TextArea";
import {
  InnerOption,
  InnerOptionValue,
  InnerTitle,
} from "components/global/Texts";
import AllFullColumn from "components/utils/AllFullColumn";
import Block from "components/utils/Block";
import ImageLoader from "components/utils/ImageLoader";
import Row from "components/utils/Row";
import SizedBox from "components/utils/SizedBox";
import { LayerAlign } from "components/utils/WidgetUtils";
import { COLORS } from "styles/global/globalColors";

const Wrapper = styled.div`
  width: max-content;
  height: max-content;

  border: 1px solid ${COLORS.black};
`;

function IntroPage({
  userData,
  addressChecked,
  address,
  setAddress,
  interest,
  setInterest,
}) {
  return (
    <>
      <InnerTitle>Let us get to know you:</InnerTitle>

      <Block h={40} />
      <AllFullColumn cross={LayerAlign.center}>
        <InnerOption>
          1. Connect your LinkedIn to tailor opportunities to your background.
        </InnerOption>

        <Block h={25} />
        <SizedBox w={680} h={40}>
          {addressChecked ? (
            <Row fullWidth cross={LayerAlign.center}>
              {/* <Wrapper>
                <ImageLoader w={60} h={60} src={userData.img} />
              </Wrapper> */}

              {/* <Block w={22} /> */}
              {console.log(userData)}
              <InnerOptionValue>{userData.username}</InnerOptionValue>
            </Row>
          ) : (
            <BasicBorderInput value={address} setValue={setAddress} />
          )}
        </SizedBox>

        <Block h={52} />
        <InnerOption>
          2. What industry or sector are you interested in?
        </InnerOption>

        <Block h={25} />
        <SizedBox w={680} h={140}>
          <TextArea value={interest} setValue={setInterest} />
        </SizedBox>
      </AllFullColumn>
    </>
  );
}

export default IntroPage;
