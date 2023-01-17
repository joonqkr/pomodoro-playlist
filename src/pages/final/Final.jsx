import { useEffect, useState } from "react";
import Logout from "../../components/logout/Logout";
import Playlist from "../../components/playlist/Playlist";
import axios from "axios";
import "./final.css"

export default function Final({ playlist }) {
    /* User token. */
    const token = window.localStorage.getItem("token");

    const [pomodoro, setPomodoro] = useState(null);

    /* Given a list of songs (and their duration), a desired total duration, 
     * and allowed margin, generate a list of songs and their track IDs that are 
     * around the given duration time. */
    const generateSongList = (songs, duration, margin) => {
        
    };

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
                    fields: 'items(track(id))'
                }
            })
            .then((response) => {
                const songs = [];
                for (const item of response.data.items) {
                    songs.push(item.track.id);
                }

                const songList = generateSongList(songs, 25, 2);
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