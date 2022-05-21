import Logout from "../../components/logout/Logout";
import Playlist from "../../components/playlist/Playlist";
import "./final.css"

export default function Final({ playlist }) {
    /* Create pomodoro playlist. */
    const createPomodoro = () => {

    };

    return (
        <div className="final">
            <Logout/>
            <Playlist key={playlist.id} playlist={playlist}/>
        </div>
    );
}