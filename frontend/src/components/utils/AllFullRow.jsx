import React from "react";
import { LayerAlign } from "./WidgetUtils";

function AllFullRow({
    main = LayerAlign.start,
    cross = LayerAlign.start,
    children,
}) {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: main,
                alignItems: cross,
                width: "100%",
                height: "100%",
            }}>
            {children}
        </div>
    );
}

export default AllFullRow;
