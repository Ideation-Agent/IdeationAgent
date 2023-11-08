import React from "react";
import { css } from "@emotion/react";
import { setVw } from "styles/global/globalScreen";
import styled from "@emotion/styled";

function ElasticSizedBox({ w = "max-content", h = "max-content", ...props }) {
    return (
        <Container w={w} h={h}>
            {props.children}
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    ${({ w, h }) => css`
        ${setVw("width", w)};
        ${setVw("height", h)};
    `}
`;

export default ElasticSizedBox;
