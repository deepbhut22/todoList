import Header from "./Header";
import List from "./List";
// import Note from "./Note";
// import notes from "../components/notes";

function App(){


    // const [not , setnot] = useState(notes);

    // function deleteNote(key){
    //     const newNote = not.filter((item)=>{
    //         return(
    //             item.key !== key
    //         )
    //     })
    //     setnot(newNote);
    // }


    return(
        <div>
            <Header/>
            {/* <div className="content">
                {notes.map(((note , index)=>{
                    return(
                        <Note
                            content={note.content}
                            id = {note.index}
                            key = {note.key}
                            deletee = {deleteNote}
                        />
                    )
                }))}
            </div> */}
            <h1 style={{textAlign:"center"}}>TODO-List</h1>
            <List/>

            
            
        </div>
    )
}

export default App;