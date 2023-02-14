import "./description.css";
import { useState } from "react";
import Logout from "../../components/logout/Logout";

export default function Description(props) {

    const handleSubmit = (event) => {
        event.preventDefault();
        const submission = {
            title: event.target.title.value,
            description: event.target.description.value,
            public: event.target.public.value === "public" ? true : false,
            collaborative: event.target.collaborative.value === "yes" ? true : false,
            allowRepeats: event.target.repeat.value === "yes" ? true : false,
            break: event.target.break.value === "5" ?  5 : 15,
        };
        props.onSubmission(submission);
    }

    return (
        <div className="description">
            <Logout/>
            <form onSubmit={handleSubmit}>
                <label>
                    Playlist Title:
                    <input
                        name="title"
                        type="text"/>
                </label>
                <br />
                <label>
                    Description:
                    <br/>
                    <textarea name="description" placeholder="Type your description..."/>
                </label>
                <br />
                <label>
                    Do you want this playlist to be public or private?
                    <br/>
                    <input 
                        name="public"
                        type="radio"
                        id="public"
                        value="public"/>
                    <label for="public">Public</label><br/>
                    <input 
                        name="public"
                        type="radio"
                        id="private"
                        value="private"/>
                    <label for="private">Private</label><br/>
                </label>
                <br />
                <label>
                    Do you want this playlist to be collaborative?
                    <br/>
                    <input 
                        name="collaborative"
                        type="radio"
                        id="yes"
                        value="yes"/>
                    <label for="yes">Yes</label><br/>
                    <input 
                        name="collaborative"
                        type="radio"
                        id="no"
                        value="no"/>
                    <label for="no">No</label><br/>
                </label>
                <label>
                    Do you want allow songs to repeat in this playlist?
                    <br/>
                    <input 
                        name="repeat"
                        type="radio"
                        id="yes"
                        value="yes"/>
                    <label for="yes">Yes</label><br/>
                    <input 
                        name="repeat"
                        type="radio"
                        id="no"
                        value="no"/>
                    <label for="no">No</label><br/>
                </label>
                <label>
                    Short or long break?
                    <br/>
                    <input 
                        name="break"
                        type="radio"
                        id="short"
                        value="5"/>
                    <label for="short">5 min</label><br/>
                    <input 
                        name="break"
                        type="radio"
                        id="long"
                        value="15"/>
                    <label for="long">15 min</label><br/>
                </label>
                <input type="submit" value="Submit"/>
            </form>
        </div>
    );
}