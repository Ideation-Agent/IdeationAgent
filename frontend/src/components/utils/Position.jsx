function Position({ top, right, bottom, left, children }) {
    return (
        <div
            style={{
                position: "absolute",
                top: top,
                right: right,
                bottom: bottom,
                left: left,
            }}>
            {children}
        </div>
    );
}

export default Position;
