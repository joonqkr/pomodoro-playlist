import Logout from "../../components/logout/Logout";
import Playlist from "../../components/playlist/Playlist";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./selection.css"
import axios from "axios";

export default function Selection(props) {
    /* User token. */
    const token = window.localStorage.getItem("token");

    const [playlists, setPlaylists] = useState([])

    const [chosenPlaylist, setChosenPlaylist] = useState(null);

    /* Get user's playlists. */
    useEffect(() => {
        const getPlaylists = async () => {
            const {data} = await axios.get("https://api.spotify.com/v1/me/playlists", {
                headers: {
                    'Authorization': `Bearer ${token}`
                },
                params: {
                    'limit': '50',
                    'offset': '0'
                }
            });
    
            setPlaylists(data.items);
        };

        getPlaylists();
    }, [token]);
    
    return (
        <div className="selection">
            <Logout/>
            {playlists.map(p => (
                <div onClick={() => {props.onPlaylistSelect(p)}} key={p.id}>
                    <Playlist playlist={p} />
                </div>
            ))}
        </div>
    );
}