import styled from "@emotion/styled";
import BasicLayout from "components/layouts/BasicLayout";
import InnerLayout from "components/layouts/InnerLayout";
import AllFullRow from "components/utils/AllFullRow";
import Block from "components/utils/Block";
import { LayerAlign } from "components/utils/WidgetUtils";
import { useState } from "react";
import { COLORS } from "styles/global/globalColors";
import GlobalFont from "styles/global/globalFonts";
import RoundBtn from "components/global/RoundBtn";
import BrainPage from "./BrainPage";
import TeamPage from "./TeamPage";
import IntroPage from "./IntroPage";
import PlanPage from "./PlanPage";
import PageTitle from "components/global/PageTitle";
import { ReactComponent as RightArrow } from "assets/icons/ic-right_arrow.svg";
import ServerProvider from "networks/ServerProvider";

const RightArrowIcon = styled(RightArrow)`
  width: 40px;
`;

const Title = styled.p`
  ${GlobalFont({
    size: 40,
    align: LayerAlign.center,
    weight: 600,
  })}
`;

const SubTitle = styled.p`
  ${GlobalFont({
    size: 30,
    align: LayerAlign.center,
    weight: 400,
  })}
`;

const BackBoard = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;

  width: 100%;
  height: max-content;
  border: 2px solid ${COLORS.orange};

  padding: 34px 75px;
  box-sizing: border-box;
`;

function MainPage() {
  const [pageIndex, setPageIndex] = useState(0);

  const [addressChecked, setAddressChecked] = useState(false);
  const [userData, setUserData] = useState({
    img: "",
    username: "",
    linked: "",
  });
  const [address, setAddress] = useState("");
  const [interest, setInterest] = useState("");

  const [ideas, setIdeas] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [brainPageIndex, setBrainPageIndex] = useState(0);

  const [conclusionData, setConclusionData] = useState(null);

  const api = new ServerProvider();

  const checkProfile = async () => {
    const result = await api.checkBio({
      url: address,
    });

    if (result) {
      if (address === "") return;

      // const img = result.profileImage;
      const username = result.profile_name;
      const linked = result.linkedin_summary;

      setUserData({
        // img,
        username,
        linked,
      });
      setAddressChecked(true);
    }
  };

  const generateIdeas = async () => {
    const result = await api.genInitIdea({
      sum: userData.linked,
      interests: interest,
    });

    const newIdeas = result.ideas;
    setIdeas([...newIdeas]);
  };

  return (
    <BasicLayout>
      <InnerLayout>
        <Title>ATZERO</Title>

        <Block h={30} />
        <SubTitle>
          We help you identify unmet customer needs to find a business
          opportunity.
        </SubTitle>

        <Block h={40} />
        <AllFullRow main="space-between" cross={LayerAlign.center}>
          <PageTitle isSelected={pageIndex === 0}>Our Team</PageTitle>
          <RightArrowIcon />

          <PageTitle isSelected={pageIndex === 1}>Your Intro</PageTitle>
          <RightArrowIcon />

          <PageTitle isSelected={pageIndex === 2}>Brainstorm</PageTitle>

          <RightArrowIcon />
          <PageTitle isSelected={pageIndex === 3}>Business Plan</PageTitle>
        </AllFullRow>

        <Block h={40} />
        <BackBoard>
          {(() => {
            switch (pageIndex) {
              case 0:
                return <TeamPage />;
              case 1:
                return (
                  <IntroPage
                    userData={userData}
                    addressChecked={addressChecked}
                    setAddressChecked={setAddressChecked}
                    address={address}
                    setAddress={setAddress}
                    interest={interest}
                    setInterest={setInterest}
                  />
                );
              case 2:
                return (
                  <BrainPage
                    ideas={ideas}
                    selectedIndex={selectedIndex}
                    setSelectedIndex={setSelectedIndex}
                    brainPageIndex={brainPageIndex}
                    parentIndex={pageIndex}
                    reGen={generateIdeas}
                    setConclusionData={setConclusionData}
                  />
                );
              case 3:
                return <PlanPage data={conclusionData}/>;
              default:
                return <>null</>;
            }
          })()}
        </BackBoard>

        <Block h={30} />
        <AllFullRow main={LayerAlign.end}>
          {pageIndex !== 0 ? (
            <RoundBtn
              onClick={() => {
                if (pageIndex > 0) {
                  setPageIndex(pageIndex - 1);
                }
              }}>
              Back
            </RoundBtn>
          ) : (
            <></>
          )}

          <Block w={12} />
          <RoundBtn
            onClick={async () => {
              switch (pageIndex) {
                case 0:
                  setPageIndex(pageIndex + 1);
                  break;
                case 1:
                  if (addressChecked) {
                    if (interest !== "") {
                      await generateIdeas();
                      setPageIndex(pageIndex + 1);
                    }
                  } else {
                    await checkProfile();
                    return;
                  }
                  break;
                case 2:
                  if (brainPageIndex === 0) {
                    setBrainPageIndex(brainPageIndex + 1);
                  } else {
                    setPageIndex(pageIndex + 1);
                  }
                  break;
                case 3:
                  break;
                default:
                  break;
              }
            }}>
            {(() => {
              switch (pageIndex) {
                case 0:
                  return "Next";
                case 1:
                  if (addressChecked) {
                    return "Next";
                  } else {
                    return "Check";
                  }
                case 2:
                  return "Next";
                case 3:
                  return "Finish";
                default:
                  return "Error";
              }
            })()}
          </RoundBtn>
        </AllFullRow>
        <Block h={135} />
      </InnerLayout>
    </BasicLayout>
  );
}

export default MainPage;
