import React from "react";

function Block({ w = 0, h = 0, children }) {
    return (
        <div
            style={{
                display: "flex",
                marginRight: `${typeof w === "number" ? `${w}px` : w}`,
                marginTop: `${typeof h === "number" ? `${h}px` : h}`,
            }}>
            {children}
        </div>
    );
}

export default Block;
