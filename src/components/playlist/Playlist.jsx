import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./playlist.css";
import axios from "axios";

export default function Playlist({ playlist }) {
    /* User token. */
    const token = window.localStorage.getItem("token");

    const [tracks, setTracks] = useState([]);

    const apiRequest = playlist.tracks.href;
    
    /* Get user's playlists. */
    useEffect(() => {
        const getTracks = async () => {
            const {data} = await axios.get(apiRequest, {
                headers: {
                    'Authorization': `Bearer ${token}`
                },
                params: {
                    'limit': '50',
                    'offset': '0'
                }
            });
    
            setTracks(data.items);
        };

        getTracks();

        console.log(tracks);
    }, [token]);

    return (
        <div className="playlist">
            <Link to="/final">
                <div className="playlistTop">
                    <div className="playlistTitle">{playlist.name}</div>
                </div>
                <div className="playlistBottom">
                    {playlist.images ? <img src={playlist.images[0].url} alt=""/> : <div>No Image</div>}
                    <div class="tracks">
                        {tracks.map(t => (
                            <div class="track">
                                {t.track.name}
                            </div>
                        ))}
                    </div>
                </div>
            </Link>
        </div>
    );
}