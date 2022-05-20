import "./login.css";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Login() {
    const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
    const REDIRECT_URI = process.env.REACT_APP_REDIRECT_URI;
    const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
    const RESPONSE_TYPE = "token";

    const login = () => {
        const hash = window.location.hash;
        let tempToken = window.localStorage.getItem("token");

        if (!tempToken && hash) {
            tempToken = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1];

            window.location.hash = "";
            window.localStorage.setItem("token", tempToken);
            window.location.reload();
        }
    };

    return (
        <div className="login">
            <a onClick={login} href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>Login to Spotify</a>
        </div>
    );
}