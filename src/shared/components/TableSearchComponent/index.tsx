import './style.css'
import TitleCollunsComponent from '../TitleCollunsComponent/index'
import RowDataComponent from '../RowDataComponent'


const TableSearchComponent = () => {
    return(
        <div className="boxTable">
            <TitleCollunsComponent/>
            <RowDataComponent />
        </div>
    )
}

export default TableSearchComponent