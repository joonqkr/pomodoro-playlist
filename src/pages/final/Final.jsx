import { useEffect, useState } from "react";
import Logout from "../../components/logout/Logout";
import Playlist from "../../components/playlist/Playlist";
import axios from "axios";
import "./final.css"

export default function Final({ playlist }) {
    /* User token. */
    const token = window.localStorage.getItem("token");

    const [user, setUser] = useState('');
    const [pomodoro, setPomodoro] = useState([]);
    const [tracks, setTracks] = useState([]);
    const [newPlaylist, setNewPlaylist] = useState('');

    /* Given a list of songs (and their duration), a desired total duration, 
     * and allowed margin, generate a list of songs and their track IDs that are 
     * around the given duration time. */
    const generateSongList = (songs, duration, margin) => {
        let songSet = new Set();
        let length = 0;
        while (length < duration + margin) {
            let ranNum = Math.floor(Math.random() * tracks.length);
            while (ranNum in songSet) {
                ranNum = Math.floor(Math.random() * tracks.length);
            }
            songSet.add(ranNum);
            setPomodoro([
                ...pomodoro,
                songs[ranNum].track.uri
            ])
            length += songs[ranNum].track.duration_ms * 1000;
        }
    };

    useEffect(() => {
        /* Get user's id. */
        const getUser = async () => {
            const {data} = axios.get("https://api.spotify.com/v1/me", {
                headers: {
                    'Authorization': `Bearer ${token}`,
                }
            });
            setUser(data.id);
        }

        getUser();
    }, [token]);

    /* Get user's playlists. */
    useEffect(() => {
        /* Create pomodoro playlist. */
        const createPomodoro = async (playlist) => {
            /* Get songs of playlist. */
            const {data} = axios.get(`https://api.spotify.com/v1/playlists/${playlist.id}/tracks`, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
            });
            setTracks(data.items);
            generateSongList(tracks, 25, 5);
        };
        createPomodoro(playlist);

    }, [playlist, token]);

    useEffect(() => {
        /* Make playlist. */
        const createPlaylist = async (userID) => {
            /* Create empty playlist. */
            const {data} = axios.post(`https://api.spotify.com/v1/users/${userID}/playlists`, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
                data: {
                    "name": "New Playlist",
                    "description": "New playlist description",
                    "public": false
                }
            });

            setNewPlaylist(data.id);
        };
        createPlaylist(user);
    }, [user]);

    useEffect(() => {
        /* Add songs to playlist. */ 
        const addSongs = async (playlistID, songList) => {
            axios.post(`https://api.spotify.com/v1/playlists/${playlistID}/tracks`, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
                data: {
                    "uris": songList,
                }
            });
        };
        addSongs(newPlaylist, tracks);

    }, [newPlaylist]);

    return (
        <div className="final">
            <Logout/>
            <Playlist key={playlist.id} playlist={playlist}/>
        </div>
    );
}