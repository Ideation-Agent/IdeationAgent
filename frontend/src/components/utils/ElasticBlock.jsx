import { css } from "@emotion/react";
import styled from "@emotion/styled";
import React from "react";
import { setVw } from "styles/global/globalScreen";

const Container = styled.div`
    display: flex;
    ${({ w, h }) => css`
        ${setVw("margin-left", w)}
        ${setVw("margin-top", h)}
    `}
`;

function ElasticBlock({ w = 0, h = 0, children }) {
    return (
        <Container w={w} h={h}>
            {children}
        </Container>
    );
}

export default ElasticBlock;
