import styled from "@emotion/styled";
import { LayerAlign } from "components/utils/WidgetUtils";
import GlobalFont from "styles/global/globalFonts";

export const InnerTitle = styled.p`
  align-self: center;
  ${GlobalFont({
    size: 25,
    align: LayerAlign.center,
    weight: 600,
  })}
`;

export const InnerOption = styled.p`
  ${GlobalFont({
    size: 25,
    align: LayerAlign.start,
    weight: 500,
    height: 40,
    lineB: "nowrap",
  })}
`;

export const InnerOptionValue = styled.p`
  ${GlobalFont({
    size: 25,
    align: LayerAlign.start,
    weight: 300,
    height: 40,
  })}
`;

export const ProfileText = styled.div`
  margin-top: 21px;
  ${GlobalFont({
    size: 20,
    weight: 500,
    lineB: "nowrap",
  })}
`;