import { css } from "@emotion/react";
import styled from "@emotion/styled";

const Container = styled.div`
    display: flex;
    width: 100%;

    ${({ c, thick, round }) => css`
        height: ${thick}px;
        background-color: ${c};
        border-radius: ${round};
    `}
`;

function Divider({ c, thick, round }) {
    // hr 같은거
    return <Container c={c} thick={thick} round={round} />;
}

export default Divider;
