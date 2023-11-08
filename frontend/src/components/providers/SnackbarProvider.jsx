import React, { createContext, useContext, useState } from "react";

export const SnackbarType = {
    Basic: "basic",
    Confirm: "confirm",
    Success: "success",
    Loading: "loading",
    Warning: "warning",
    Error: "error",
};

const SnackbarContext = createContext();

export function SnackbarProvider({ children }) {
    const [snackbar, setSnackbar] = useState(false);
    const [typeData, setTypeData] = useState(SnackbarType.Basic);
    const [paramsData, setParamsData] = useState({});

    const showSnackbar = (type, params) => {
        setTypeData(type);
        setParamsData(params);
        setSnackbar(true);
    };

    const closeSnackbar = () => {
        setSnackbar(false);
        setTypeData(SnackbarType.Basic);
        setParamsData({});
    };

    return (
        <SnackbarContext.Provider
            value={{
                isSnackbarShow: snackbar,
                showSnackbar,
                closeSnackbar,
                typeData,
                paramsData,
            }}>
            {children}
        </SnackbarContext.Provider>
    );
}

export function useSnackbar() {
    const { isSnackbarShow, showSnackbar, closeSnackbar, typeData, paramsData } =
        useContext(SnackbarContext);
    return {
        isSnackbarShow,
        showSnackbar: ({ type = SnackbarType.Basic, params = {} }) => {
            showSnackbar({ type, params });
        },
        closeSnackbar,
        type: typeData,
        params: paramsData,
    };
}
