import './style.css'
import greeDocument from '../../assets/img/greenDocumentIcon.svg'
import arrowDown from '../../assets/img/ArrowDownIcon.svg'

const RowDataComponent = () => {
    return (

        <>

            <div className="dataRow">
                <p className='Protocolo'>20930290392032</p>
                <p className='Status'>Deferido</p>

                <img src={greeDocument} alt=" documento verde" className='' />


                <a data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                    <img src={arrowDown} alt="seta para baixo" className='arrowDown' />
                </a>

            </div>

            <div className="collapse" id="collapseExample">
                    <div className="card card-body">
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                    </div>
                </div>

        </>

    )
}

export default RowDataComponent


{/* <p>
                <a className="btn btn-primary" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                    Link with href
                </a>
                </p>
          */}