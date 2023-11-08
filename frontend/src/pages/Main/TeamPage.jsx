import styled from "@emotion/styled";
import { Profile } from "components/global/Profile";
import {
  InnerOptionValue,
  InnerTitle,
  ProfileText,
} from "components/global/Texts";
import AllFullRow from "components/utils/AllFullRow";
import Block from "components/utils/Block";
import Column from "components/utils/Column";
import { LayerAlign } from "components/utils/WidgetUtils";
import { COLORS } from "styles/global/globalColors";
import GlobalFont from "styles/global/globalFonts";
import { ReactComponent as Pat } from "assets/icons/pat.svg";
import { ReactComponent as Lily } from "assets/icons/lily.svg";
import { ReactComponent as Steve } from "assets/icons/steve.svg";
import { ReactComponent as Casey } from "assets/icons/casey.svg";

const ProfileInfo = styled.div`
  ${GlobalFont({
    size: 16,
    align: LayerAlign.center,
  })}
`;

function TeamPage() {
  return (
    <>
      <InnerTitle>Meet our team of 4 A I panels:</InnerTitle>

      <InnerOptionValue>
        2 VCs, a technical expert, and a potential user, all ready to brainstorm
        with you.
      </InnerOptionValue>

      <Block h={72} />
      <AllFullRow main={LayerAlign.center}>
        <Block w={21} />
        <Column>
          <Profile color={COLORS.yellow_1}>
            <Pat />
          </Profile>
          <ProfileText>Pat</ProfileText>
          <ProfileInfo>
            A seasoned VC who's always on the lookout for the next big idea and
            can gauge its potential profitability.
          </ProfileInfo>
        </Column>

        <Block w={108} />
        <Column>
          <Profile color={COLORS.blue_1}>
            <Lily />
          </Profile>
          <ProfileText>Lily</ProfileText>
          <ProfileInfo>
            A strategic VC with a keen eye for innovative solutions and
            understanding of market gaps.
          </ProfileInfo>
        </Column>
        <Block w={108} />
        <Column>
          <Profile color={COLORS.red_1}>
            <Steve />
          </Profile>
          <ProfileText>Steve</ProfileText>
          <ProfileInfo>
            A tech-savvy genius with deep insights into the feasibility and
            scalability of technical solutions.
          </ProfileInfo>
        </Column>
        <Block w={108} />
        <Column>
          <Profile color={COLORS.purple_1}>
            <Casey />
          </Profile>
          <ProfileText>Casey</ProfileText>
          <ProfileInfo>
            A power consumer always trying new products, offering invaluable
            feedback on user experience and needs.
          </ProfileInfo>
        </Column>
      </AllFullRow>
    </>
  );
}

export default TeamPage;
