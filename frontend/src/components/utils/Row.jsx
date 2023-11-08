import React from "react";
import { LayerAlign } from "./WidgetUtils";

function Row({
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
                flexDirection: "row",
                justifyContent: main,
                alignItems: cross,
                width: fullWidth ? "100%" : "max-content",
                height: fullHeight ? "100%" : "max-content",
            }}>
            {children}
        </div>
    );
}

export default Row;
