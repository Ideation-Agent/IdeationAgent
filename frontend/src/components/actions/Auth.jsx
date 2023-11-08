import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function Checker({ page }) {
    const location = useLocation();
    const [isAuth, setIsAuth] = useState(false);

    async function checkAuth() {
        return true;
        // await sleep(2000); // Simulate Loading
        // const token = localStorage.getItem("token");

        // if (token) {
        //     return true;
        // } else {
        //     return false;
        // }
    }

    useEffect(() => {
        checkAuth()
            .then((result) => {
                setIsAuth(result);
                if (!result) {
                    window.location.href = "/";
                }
            })
            .catch((err) => {
                console.log(err);
                window.location.href = "/";
            });
    }, [location]);

    if (!isAuth) {
        // Set Loading Component
        return <div>LOADING...</div>;
    }

    return page;
}

export function Auth(page) {
    return <Checker page={page} />;
}
