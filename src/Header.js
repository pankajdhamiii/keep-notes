import React from "react";
import image from "./images/logo.png";

const Header=()=>{
    return(<>
        <div className="header">
            <img  src={image} width="100"  alt="logo"/>
            <h1 className="heading">Keep Notes</h1>
        </div>
    </>)
}

export default Header;