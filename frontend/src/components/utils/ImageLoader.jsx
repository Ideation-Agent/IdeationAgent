import { css } from "@emotion/react";
import styled from "@emotion/styled";
import React from "react";

const EmptyImg = styled.div`
    background-color: #e0e0e0;

    ${({ w, h, round }) => css`
        width: '${w}px';
        height: '${h}px';

        border-radius: ${round};
    `}
`;

function ImageLoader({ w, h, src, round }) {
    if (src === "" || src === undefined || src === null) {
        return <EmptyImg w={w} round={round} />;
    }
    return (
        <img style={{ width: w, height: h, borderRadius: round }} src={src} />
    );
}

export default ImageLoader;
