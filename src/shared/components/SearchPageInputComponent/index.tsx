import './style.css'
import SearchIcon from '../../assets/img/SerachImgIcon.svg'


const SearchPageInputComponent = () => {
    return (
        <div className="SearchBox pageSearch" >

            <input id="SearchPageInput" name="Search" placeholder="Email, matricula ou n° de protocolo..." className="SearchInput " />

            <div className="boxSearchIcon">
                <img src={SearchIcon} alt="icone de lupa" />
            </div>

        </div>

    )
}

export default SearchPageInputComponent