import React from 'react'
import Formulario from '../Formulario/Formulario'
import './FormContainer.css'

const FormContainer = (props) => {

    return (
        <div className='formContainer'>
            <Formulario total ={props.total}/>
        </div>
    )
}

export default FormContainer
