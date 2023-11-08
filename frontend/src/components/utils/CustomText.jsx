import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { COLORS } from "styles/global/globalColors";

const Text = styled.p`
    display: inline-block;
    text-align: center;
    width: max-content;
    height: max-content;
    ${({ color, size, weight, height }) => css`
        color: ${color ? color : COLORS.black};
        font-size: ${size ? size : "1rem"};
        font-weight: ${weight ? weight : "normal"};
        line-height: ${height ? height : "1.1rem"};
    `}
`;
function CustomText({ children, color, size, weight, height, ...props }) {
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

export default CustomText;
