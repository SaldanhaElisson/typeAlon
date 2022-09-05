import HeaderSearchPageCompenent from '../../components/HeaderSearchPageComponent/HearderSearchPageComponent'
import SearchPageInputComponent from '../../components/SearchPageInputComponent'
import TableSearchComponent from '../../components/TableSearchComponent'


import './style.css'
 const SearchPage = () => {
    return(
        <>
            <HeaderSearchPageCompenent />

            <SearchPageInputComponent/>

            <TableSearchComponent/>

        </>
       
    )
}

export default SearchPage