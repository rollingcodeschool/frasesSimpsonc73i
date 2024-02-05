import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./assets/logosimpson.png";
import { Button, Container } from "react-bootstrap";
import Frase from "./components/Frase";
import { useEffect, useState } from "react";

function App() {
const [personaje, setPersonaje] = useState({});

useEffect(()=>{
  consultarAPI();
}, []);

const consultarAPI = async()=>{
  //hacer una peticion get a la api
  const respuesta = await fetch("https://thesimpsonsquoteapi.glitch.me/quotes");
  const datos = await respuesta.json();
  console.log(datos[0]);
  setPersonaje(datos[0])
}

  return (
    <>
      <Container className="text-center my-5">
        <img src={logo} alt="Logo de los simpson" className="w-50" />
        <Frase personaje={personaje}></Frase>
        <Button variant="warning">Obtener frase</Button>
      </Container>
    </>
  );
}

export default App;
