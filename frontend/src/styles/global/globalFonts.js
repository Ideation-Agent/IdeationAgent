import { css } from "@emotion/react";
import { COLORS } from "./globalColors";

// 500  - Thin
// 600  - Regular
// 700  - Bold

function GlobalFont({ color, size, weight, height, align, lineB}) {
    return css`
      color: ${color ? color : COLORS.black};
      font-size: ${size}px;
      font-weight: ${weight ? weight : "normal"};
      line-height: ${height}px;
      text-align: ${align ? align : "start"};
      white-space: ${lineB};
    `;
}

export default GlobalFont;