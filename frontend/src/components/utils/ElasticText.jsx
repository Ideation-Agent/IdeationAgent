import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { COLORS } from "styles/global/globalColors";
import { setVw } from "styles/global/globalScreen";

const Text = styled.p`
    display: inline-block;
    text-align: center;
    width: max-content;
    height: max-content;
    ${({ color, size, weight, height }) => css`
        color: ${color ? color : COLORS.black};
        ${size ? setVw("font-size", size) : ""};
        font-weight: ${weight ? weight : "normal"};
        ${height ? setVw("line-height", height) : ""};
    `}
`;
function ElasticText({ children, color, size, weight, height, ...props }) {
    return (
        <Text
            color={color}
            size={size}
            weight={weight}
            height={height}
            {...props}>
            {children}
        </Text>
    );
}

export default ElasticText;
