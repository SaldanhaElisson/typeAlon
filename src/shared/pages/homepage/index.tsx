import React from "react";

import LogoHomePage from "../../components/LogoComponent";
import SearchFormComponent from "../../components/searchFormComponent";
import FooterComponent from "../../components/FooterComponent";

import '../../assets/styles/global-styles.css'
import './style.css'


const HomePage = () => {
    return (
        <div className="boxHomePage">
     
            <LogoHomePage/> 
            <SearchFormComponent/>
         
            <FooterComponent/> 
        </div>
    )
}

export default HomePage