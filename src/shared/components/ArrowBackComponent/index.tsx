import { useNavigate } from 'react-router-dom'

import ArrowLeftCircle from '../../assets/img/ArrowLeftCircleFill.svg'

import './style.css'

const ArrowBackComponent = () => {
    const navigate = useNavigate();

    const backpage = () => {
        navigate('../');
    }
    
    return(
        <div className="boxArrowBack" onClick={() => backpage()     }>
            <img src = {ArrowLeftCircle} alt="seta de voltar" />
            <p className="back"> Voltar</p>
        </div>
          
    )
}

export default ArrowBackComponent