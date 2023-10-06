import React, { useState } from "react";


function Todoitem(props){

    const[state , setstate] = useState(false);


    function handleClick(){
        setstate(prevStae => !prevStae)
        return props.deleteItem(props.id);
    }

    return(
        <li onClick={handleClick}>{props.text}</li>
    )
}

export default Todoitem;