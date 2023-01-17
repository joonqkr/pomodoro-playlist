import { useEffect, useState } from "react";
import Logout from "../../components/logout/Logout";
import Playlist from "../../components/playlist/Playlist";
import axios from "axios";
import "./final.css"

export default function Final({ playlist }) {
    /* User token. */
    const token = window.localStorage.getItem("token");

    const [pomodoro, setPomodoro] = useState(null);

    /* Get user's playlists. */
    useEffect(() => {
        /* Create pomodoro playlist. */
        const createPomodoro = async (playlist) => {
            /* Get songs of playlist. */
            axios.get(`https://api.spotify.com/v1/playlists/${playlist.id}/tracks`, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
                params: {
                    fields: 'items(track(id, uri))'
                }
            })
            .then((response) => {
                console.log(response.data);
            }, (error) => {
                console.log(error);
            });

        };
        createPomodoro(playlist);

    }, [playlist, token]);

    return (
        <div className="final">
            <Logout/>
            <Playlist key={playlist.id} playlist={playlist}/>
        </div>
    );
}