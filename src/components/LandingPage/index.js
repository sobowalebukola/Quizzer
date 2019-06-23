import React from "react";
import './index.css'

const here = ()=>{
    return(
        <div id = "test">
             <button id = "btn" onClick = {()=>window.location.assign("/home")}>Welcome</button>
             <div id = "example">
                        <span>🤓</span>
             </div>
        </div>
    )
}
export default here;