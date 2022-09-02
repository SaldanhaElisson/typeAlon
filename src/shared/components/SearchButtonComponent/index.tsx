import React from "react";
import './style.css'

const GreenSearchButton = (metodo:any) => {
    
    const ToSearch = () => {
        console.log(`buscadando ${metodo}...`)
    }

    return (

        <>
            <button className="SearchGreenButton" onClick={() => ToSearch()}>
                PESQUISAR
            </button>
        </>

    )
}

export default GreenSearchButton