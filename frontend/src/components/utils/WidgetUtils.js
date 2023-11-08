export const LayerAlign = {
    start: "start",
    center: "center",
    end: "end",
};

export const DirectionAlign = {
    top: "top",
    bottom: "bottom",
    left: "left",
    right: "right",
};

export class EdgeInset {
    trbl = (top, right, bottom, left) => {
        return `${top}px ${right}px ${bottom}px ${left}px`;
    };

    only = ({ top = 0, right = 0, bottom = 0, left = 0 }) => {
        return `${top}px ${right}px ${bottom}px ${left}px`;
    };

    all = ({ value }) => {
        return `${value}px`;
    };
}

export const STATE = {
    NONE: "none",
    DEFAULT: "default",
    ERROR: "error",
    WARNING: "warning",
    SUCCESS: "success",
    LOADING: "loading",
};

export const CSS_STATE = {
    NONE: "none",
    DEFAULT: "default",
    ACTIVE: "active",
    NONACTIVE: "nonactive",
    ABLE: "able",
    DISABLED: "disabled",
    HIDDEN: "hidden",
    VISIBLE: "visible",
    INVISIBLE: "invisible",
};
