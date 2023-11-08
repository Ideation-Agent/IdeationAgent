import { Global, css } from "@emotion/react";
import reset from "styles/init/reset";
import initFont from "styles/init/initFont";
import initSetting from "styles/init/initSetting";

const initCss = css`
    ${reset}
    ${initFont}
    ${initSetting}
`;

const GlobalStyle = () => {
    return <Global styles={initCss} />;
};

export default GlobalStyle;
