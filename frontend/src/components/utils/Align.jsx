function Align({ margin, alignment, children }) {
    return (
        <div
            style={{
                display: "flex",
                width: "max-content",
                height: "max-content",
                margin: margin,
                alignSelf: alignment,
            }}>
            {children}
        </div>
    );
}

export default Align;
