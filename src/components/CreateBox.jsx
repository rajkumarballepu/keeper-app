import React, { useState } from "react";

function CreateBox(props) {

    const [note, setNote] = useState({});

    function handleChange(event) {
        const {name, value} = event.target;
        setNote((pre)=>{
            return {...pre, [name]: value};
        });
        console.log('====================================');
        console.log(note);
        console.log('====================================');
    }

    function handleClick(event) {
        props.addNote(note);
        event.preventDefault();
    }

    return (
        <div className="form">
            <form>
                <input name="title" type="text" className="form-control" id="title" placeholder="Title" value={note.title} onChange={handleChange} />
                <textarea name="content" className="form-control" cols="16" onChange={handleChange} rows="3" id="content" value={note.content} placeholder="Content"></textarea>
                <button type="submit" className="btn btn-primary" onClick={handleClick}>ADD</button>
            </form>
        </div>
    )
}

export default CreateBox;