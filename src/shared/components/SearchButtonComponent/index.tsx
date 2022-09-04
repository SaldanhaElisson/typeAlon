import React, { useContext } from "react";
import './style.css'
import { loadSearchedInfos } from "../../../contexts/ContextAPI/actions";
import { InfosContext } from "../../../contexts/ContextAPI/context";

const GreenSearchButton = (metodo: any) => {

    const searchContext = useContext(InfosContext);
    const {infoState, infoDispatch} = searchContext;
    
    const ToSearch = () => {
        const input = document.querySelector('.SearchInput') as HTMLInputElement;

        loadSearchedInfos(infoDispatch);
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