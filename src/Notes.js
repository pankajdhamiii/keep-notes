import React,{useState} from "react";
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

const Notes=(props)=>{

    const [expand,setExpand]=useState(false)

    const [note,setNote]=useState({
        title:"",
        content:""
    });

    const inputEvent=(event)=>{
        const value=event.target.value
        const name=event.target.name

        setNote((prevData)=>{
            return {
                ...prevData,
                [name]:value,
            };
        });
    }


const addEvent=()=>{
    props.passNote(note)
    setNote({
        title:"",
        content:""
    });
}

const expandIt=()=>{
    setExpand(true)
}

const backToNormal=()=>{
    setExpand(false)
}

    return(<>
    <div className="main_note" onDoubleClick={backToNormal}>
            <form>
            { expand ?
                <input 
                    type="text" 
                    value={note.title}  
                    name="title"
                    placeholder="Title" 
                    autoComplete="off"
                    onChange={inputEvent}
                />: null }<br/>
                <textarea 
                    rows="" 
                    column="" 
                    placeholder="write your note here...."
                    value={note.content}  
                    name="content"
                    onChange={inputEvent}
                    onClick={expandIt}
                    
                >
                </textarea>
                {  expand ?
                <Button  onClick={addEvent} className="btn1">
                    <AddIcon className="plus_sign"/>
                </Button> : null }
            </form>
        </div>
    </>)
}

export default Notes;
