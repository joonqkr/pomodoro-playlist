import { Link } from "react-router-dom";
import "./playlist.css";

export default function Playlist({ playlist }) {
    return (
        <div className="playlist">
            <Link to="/final">
                <div className="playlistTop">
                    <div className="playlistTitle">{playlist.name}</div>
                </div>
                <div className="playlistBottom"></div>
                {playlist.images ? <img src={playlist.images[0].url} alt=""/> : <div>No Image</div>}
            </Link>
        </div>
    );
}