import React from "react";
import { LayerAlign } from "components/utils/WidgetUtils";
// import { useDarkModeValue } from "components/providers/DarkModeProvider";
import { COLORS } from "styles/global/globalColors";
import Block from "components/utils/Block";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

const Layout = styled.div`
    display: flex;
    flex-direction: column;

    width: 100%;
    min-height: 100vh;
    max-height: max-content;

    padding-top: 50px;

    transition: all 0.5s ease-in-out;

    ${({ main, cross, backColor }) => css`
        justify-content: ${main};
        align-items: ${cross};
        background-color: ${backColor};
    `}
`;

function BasicLayout({
    main = LayerAlign.start,
    cross = LayerAlign.center,
    children,
    ...props
}) {
    return (
        <Layout
            main={main}
            cross={cross}
            // backColor={useDarkModeValue(COLORS.blue_15, COLORS.dark_2)}
            backColor={COLORS.background}
            {...props}>
            {children}
        </Layout>
    );
}

export default BasicLayout;
