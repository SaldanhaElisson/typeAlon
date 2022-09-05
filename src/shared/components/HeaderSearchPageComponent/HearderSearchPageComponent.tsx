import LogoSearchPage from "../LogoSearchPageComponent"
import ArrowBackComponent from "../ArrowBackComponent"

import './style.css'

const HeaderSearchPageCompenent = () => {
    return (
        <div className="SearchPageHeader">
            <ArrowBackComponent />
            <LogoSearchPage />
        </div>
    )
}

export default HeaderSearchPageCompenent