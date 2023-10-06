import React, { useState } from "react";
import Todoitem from "./Todoitem";

function List(){

    const[text , settext] = useState("");
    const[list , setlist] = useState([]);
    
    function handleChange(event){
        settext(event.target.value);
    }

    function addToList(){
        setlist((prevValue)=>{
            return ([...prevValue,text]);
        })
        settext("");
    }

    function deleteItemfromList(id){
        setlist((prevValue)=>{
            return prevValue.filter((i , index)=>{
                return index !== id;
            })
        })
    }


    console.log(text);
    return(
        <div className="list">
            {/* <h3>TODO - List</h3> */}
            <input onChange={handleChange} type="text" placeholder="enter item" value={text}/>&nbsp;&nbsp;
            <button onClick={addToList}>Add</button>
            <div id="items">
                <ul>
                    {list.map((i,index)=>{
                        return(
                        <Todoitem 
                            text = {i}
                            id = {index}
                            key = {index}
                            deleteItem = {deleteItemfromList}
                        />
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

export default List;