import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';

const KeepNote=(props)=>{

    const deleteNote =()=>{
        props.deleteItem(props.id)
    }


    return(<>
        <div className="note">
            <h1>{props.title}</h1><br/>
            <p>{props.content}</p><br/>
            <Button className="btn">
                <DeleteIcon className="deleteIcon" onClick={deleteNote}/>
            </Button>
        </div>
    </>)
}

export default KeepNote;