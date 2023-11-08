import { css } from "@emotion/react";

const initSetting = css`
    html {
        width: 100%;
        max-height: max-content;
        min-height: 100vh;
    }

    body {
        width: 100%;
        max-height: max-content;
        min-height: 100vh;
    }

    #root {
        width: 100%;
        max-height: max-content;
        min-height: 100vh;
    }

    * {
        box-sizing: border-box;
        transition: color 0.3s ease-in-out, background-color 0.3s ease-in-out;
    }
`;

export default initSetting;