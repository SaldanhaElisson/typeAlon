import React from "react";


import SearchIcon from '../../assets/img/SerachImgIcon.svg'
import './style.css'

const SearchInput = () => {
    return (
        <div className="SearchBox">
            
            <input 
                type="text" 
                name="HomePageSearchField" 
                id="HomePageSearchField"  
                className="SearchInput" 
                placeholder="Email, matrícula ou n° protocolo..."
            />

            <div className="boxSearchIcon">
                <img src={SearchIcon} alt="icone de lupa"/>
            </div>
        </div>
    )
}

export default SearchInput