import React, { createContext, useContext, useState } from "react";
import RootModal from 'components/global/modals/RootModals';

export const ModalType = {
    Basic: "basic",
    Confirm: "confirm",
    Success: "success",
    Loading: "loading",
    Warning: "warning",
    Error: "error",
};

const ModalContext = createContext();

export function ModalProvider({ children }) {
    const [modal, setModal] = useState(false);
    const [typeData, setTypeData] = useState(ModalType.Basic);
    const [paramsData, setParamsData] = useState({});

    const openModal = ({ type, params }) => {
        setTypeData(type);
        setParamsData(params);
        setModal(true);
    };

    const closeModal = () => {
        setModal(false);
        setTypeData(ModalType.Basic);
        setParamsData({});
    };

    return (
        <ModalContext.Provider
            value={{
                isModalOpen: modal,
                openModal,
                closeModal,
                typeData,
                paramsData,
            }}>
            <RootModal />
            {children}
        </ModalContext.Provider>
    );
}

export function useModal() {
    const { isModalOpen, openModal, closeModal, typeData, paramsData } =
        useContext(ModalContext);
    return {
        isModalOpen,
        openModal: ({ type = ModalType.Basic, params = {} }) => {
            openModal({ type, params });
        },
        closeModal,
        type: typeData,
        params: paramsData,
    };
}
