import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";


function CallbackComponent() {
    const location = useLocation();
    const navigate = useNavigate();

    const exchangeForAccess = async (code) => {
        await axios.get(`http://127.0.0.1:8000/callback?code=${code}`).then(response => {
            console.log(response);
            if (response.data['access_token']) {
                localStorage.setItem('access_token', response.data['access_token']);
            }

            navigate("/");
        }).catch( error => {
            console.log(error);
        })
    }

    useEffect(() => {
        // Fetch the callback, and then exchange for access token by making a call to the API. Once succeeded, redirect
        const searchParams = new URLSearchParams(location.search);
        const accessToken = searchParams.get("code");

        exchangeForAccess(accessToken);
    }, [])

    return <>
        Loading......
    </>
}

export default CallbackComponent;