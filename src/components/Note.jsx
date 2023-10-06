import React from "react";

function Note(props){

    function deletee(){
        return props.deletee;
    }

    return(
        <div className="div-note">
            <h1 onClick={deletee}>{props.content}</h1>
        </div>
    )
}

export default Note;