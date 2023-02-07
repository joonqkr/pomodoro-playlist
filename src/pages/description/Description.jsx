import "./description.css";

export default function Description() {

    const handleSubmit = (event) => {
        event.preventDefault();

    }

    return (
        <div className="description">
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
                    <textarea name="description">
                        Type your description... 
                    </textarea>
                </label>
                <br />
                <label>
                    <input name="public"></input>
                    <input name="public"></input>
                </label>
            </form>
        </div>
    );
}