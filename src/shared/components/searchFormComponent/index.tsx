import { Formik, Form, Field, ErrorMessage } from "formik"
import { useNavigate } from 'react-router-dom'
import { useEffect } from "react"

import GreenSearchButton from '../SearchButtonComponent/index'
import NewProtocoloButton from "../NewProtocoloButtonComponent"
import getData from "../../utils/getData"

import './style.css'
import SearchIcon from '../../assets/img/SerachImgIcon.svg'

const SearchFormComponent = () => {
    const navigate = useNavigate()

    useEffect(() => {
        localStorage.removeItem('data')
    }, [])  

    return (
        <>
            <Formik
                initialValues={{
                    Search: ''
                }
                }

                onSubmit={
                    () => { 
                        getData() 
                        navigate('search')
                    }
                }
            >
                <Form className="FormBox">
                    <div className="SearchBox">

                        <Field id="HomePageInpu" name="Search" placeholder="Email, matricula ou n° de protocolo..." className="SearchInput" />

                        <div className="boxSearchIcon">
                            <img src={SearchIcon} alt="icone de lupa" />
                        </div>

                    </div>

                    < GreenSearchButton />

                    < NewProtocoloButton />
                </Form>
            </Formik>
        </>

    )
}


export default SearchFormComponent