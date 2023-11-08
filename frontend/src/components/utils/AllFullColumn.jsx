import React from "react";
import { LayerAlign } from "./WidgetUtils";

function AllFullColumn({
    main = LayerAlign.start,
    cross = LayerAlign.start,
    backColor = "transparent",
    fontColor = "black",
    children,
    ...props
}) {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: main,
                alignItems: cross,
                width: "100%",
                height: "100%",
                backgroundColor: backColor,
                color: fontColor,
            }}
            {...props}>
            {children}
        </div>
    );
}

export default AllFullColumn;
