import {useState, useEffect} from 'react';
import styled from '@emotion/styled';
import Frase from './components/Frase';

const Contenedor = styled.div`
 display: flex; 
 align-items: center;
 @media (min-width: 1040px){
     padding-top: 5  rem;     
 }
 flex-direction: column;
`;

const Boton= styled.button`
 background: -webkit-linear-gradient(top left, #007d35 0%, #007d35 40%, #0f574e 100%);
 background-size: 300px;

 font-family: Arial, Helvetica, sans-serif;
 color: #fff;
 margin-top: 3rem;
 padding: 1rem 3rem;
 font-size: 2rem;
 margin-bottom: 5rem;
 border: 2px solid yellow;
 transition: background-size .8s ease;

 :hover {
     cursor:pointer;
     background-size: 400px;
 }

 @media (min-width: 1040px){
     margin-bottom: 0rem;
     border: 2px solid black;

 }
 `;

function App() {

    //state de frases
    const [frase, guardarFrase] = useState({});

    const consultarAPI = async () => {
        // 1er forma (sin async)
        // const api = fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes');
        // const frase = api.then(respuesta =>  respuesta.json());
        // frase.then(resultado => console.log(resultado));
        
        //2da forma (con async)
        const api = await fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes');
        const frase = await api.json()
        guardarFrase(frase[0]);

    }

    //cargar una frase
    useEffect(() => {
        consultarAPI()
    }, []);

    return (
        <Contenedor> 
            <Frase
                frase={frase}
            />
            <Boton
                onClick={ consultarAPI }
            >
                Obtener Frase
            </Boton>
        </Contenedor>
        );
}

export default App;
