import React from 'react'
import { useForm } from '../hook/useForm';
import Btn from './Btn'
import Input from './Input'


const Formulario = ({ handleUsuarios }) => 
{
    const [ form, handleInputChange, reset ] = useForm({ 
    
        firstName : "" ,
        lastName : "",
        email : ""
    
    });

    const { firstName, lastName, email } = form;

    const handleSubmit = ( e ) =>
    {
        e.preventDefault();

        if( !firstName || !lastName || !email ) return;

        handleUsuarios( form );

        reset();
    }

    return (
        
        <form onSubmit={ handleSubmit }>

          <Input label={ "1°" } name="firstName" placeholder="Nombre" value={ firstName } onChange={ handleInputChange }/>

          <Input label={ "2°" } name="lastName" placeholder="Apellido" value={ lastName } onChange={ handleInputChange }/>

          <Input label={ "3°" } type="email" name="email" placeholder="Correo Electronico" value={ email } onChange={ handleInputChange }/>

          <Btn>Enviar</Btn>
      
        </form>
    )
}

export default Formulario
