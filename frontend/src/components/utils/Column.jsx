import React from "react";
import { LayerAlign } from "./WidgetUtils";

function Column({
    main = LayerAlign.center,
    cross = LayerAlign.center,
    fullWidth,
    fullHeight,
    children,
}) {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: main,
                alignItems: cross,
                width: fullWidth ? "100%" : "max-content",
                height: fullHeight ? "100%" : "max-content",
            }}>
            {children}
        </div>
    );
}

export default Column;
