import React, { useState } from "react";
import Header from "./Header";
import KeepNote from "./KeepNote";
import Notes from "./Notes";

const App=()=>{

    const [addData,setAddData]=useState([]);

    const addNote=(note)=>{
        setAddData((prevData)=>{
            return [...prevData,note]
        })
    }

    const onDelete=(id)=>{
        setAddData((oldData)=>
            oldData.filter((currdata,index)=>{
                return index !== id;
            })
        )
    }

    return(<>
        <Header/>
        <Notes passNote={addNote}/>
        {
            addData.map((val,index)=>{
                return(
                    <KeepNote
                        key={index}
                        id={index}
                        title={val.title}
                        content={val.content}
                        deleteItem={onDelete}
                    />
                )
            })
        }
    </>)
}

export default App;