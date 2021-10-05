import React from 'react'
import Formulario from '../Formulario/Formulario'

const FormContainer = (props) => {

    console.log('Formulario total:', props.total )
    return (
        <div>
            <Formulario total ={props.total}/>
        </div>
    )
}

export default FormContainer
