import React from "react";

import LogoHomePage from "../../components/LogoComponent";
import SearchInput from "../../components/SearchInputComponent";
import GreenSearchButton from "../../components/SearchButtonComponent";
import NewProtocoloButton from "../../components/NewProtocoloButtonComponent";
import FooterComponent from "../../components/FooterComponent";

import '../../assets/styles/global-styles.css'
import './style.css'


const HomePage = () => {
    return (
        <div className="boxHomePage">
            <LogoHomePage/> 

            <SearchInput></SearchInput>

            <GreenSearchButton Metodo = "função"></GreenSearchButton>

            <NewProtocoloButton></NewProtocoloButton>
            <FooterComponent/> 
        </div>
    )
}

export default HomePage