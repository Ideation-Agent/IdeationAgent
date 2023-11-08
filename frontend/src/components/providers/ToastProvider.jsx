import RootToast from "components/global/toasts/RootToast";
import React, { createContext, useContext, useState } from "react";

export const ToastType = {
    Basic: "basic",
    Confirm: "confirm",
    Success: "success",
    Loading: "loading",
    Warning: "warning",
    Error: "error",
};

const ToastContext = createContext();

export function ToastProvider({ children }) {
    const [toast, setToast] = useState(false);
    const [typeData, setTypeData] = useState(ToastType.Basic);
    const [paramsData, setParamsData] = useState({});

    const showToast = ({ type, params }) => {
        setTypeData(type);
        setParamsData(params);
        setToast(true);
        const timer = setTimeout(() => {
            setToast(false);
        }, 6000);
        return () => clearTimeout(timer);
    };

    const closeToast = () => {
        setToast(false);
        setTypeData(ToastType.Basic);
        setParamsData({});
    };

    return (
        <ToastContext.Provider
            value={{
                isToastShow: toast,
                showToast,
                closeToast,
                typeData,
                paramsData,
            }}>
            <RootToast />
            {children}
        </ToastContext.Provider>
    );
}

export function useToast() {
    const { isToastShow, showToast, closeToast, typeData, paramsData } =
        useContext(ToastContext);
    return {
        isToastShow,
        showToast: ({ type = ToastType.Basic, params = {} }) => {
            showToast({ type, params });
        },
        closeToast,
        type: typeData,
        params: paramsData,
    };
}