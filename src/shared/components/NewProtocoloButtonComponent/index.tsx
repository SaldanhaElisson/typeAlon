import React from "react";

import './style.css'


const NewProtocoloButton = () => {
    return(
        <>
            <button className="NewProtocoloButton" type="button" onClick={() => console.log("mudando de pagina")}> FAZER PROTCOLO</button>
        </>
    )
}

export default NewProtocoloButton