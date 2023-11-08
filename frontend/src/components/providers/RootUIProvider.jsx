// import { DarkModeProvider } from "./DarkModeProvider";
// import { ModalProvider } from "./ModalProvider";
// import { SnackbarProvider } from "./SnackbarProvider";
// import { ToastProvider } from "./ToastProvider";

export default function RootUIProvider({ children }) {
    return (
        // <DarkModeProvider>
            // <ModalProvider>
                // <SnackbarProvider>
                    // <ToastProvider>
                        {children}
                    // </ToastProvider>
                // </SnackbarProvider>
            // </ModalProvider>
        // </DarkModeProvider>
    );
}
