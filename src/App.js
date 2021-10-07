import { useState } from "react";
import Card from "./components/Card";
import Container from "./components/Container";
import Formulario from "./components/Formulario";


const App = () => 
{
  
  const [ users, setUsers ] = useState([]);
  const handleUsuarios = ( user ) =>
  {
    setUsers([ ...users, user ])
  }


  return (
    
    <Container>
      
      <Card>
        
        <Formulario handleUsuarios={ handleUsuarios } />
      
      </Card>

      <Card>

        <ul>
          
          { 
            users.map( ( u, i ) => 
            
            <li key={i}>{`Nombre : ${u.firstName} ${u.lastName} || Email :  ${ u.email }`}</li> 

          )}
        
        </ul>

      </Card>

    </Container>
  )

}

export default App
