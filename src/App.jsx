import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./assets/logosimpson.png";
import { Button, Container, Spinner } from "react-bootstrap";
import Frase from "./components/Frase";
import { useEffect, useState } from "react";

function App() {
  const [personaje, setPersonaje] = useState({});
  const [mostrarSpinner, setMostrarSpinner] = useState(true);

  useEffect(() => {
    consultarAPI();
  }, []);

  const consultarAPI = async () => {
    try {
      //mostrar el spinner
      setMostrarSpinner(true);
      //hacer una peticion get a la api
      const respuesta = await fetch(
        "https://thesimpsonsquoteapi.glitch.me/quotes"
      );
      const datos = await respuesta.json();
      console.log(datos[0]);
      setPersonaje(datos[0]);
      //ocultar el spinner
      setMostrarSpinner(false);
    } catch (error){
      console.log(error);
      //agregar un mensaje para el usuario final
    }
  };

  const mostrarComponente = mostrarSpinner ? (
    <div className="my-4">
      <Spinner animation="border" variant="light"></Spinner>
    </div>
  ) : (
    <Frase personaje={personaje}></Frase>
  );

  return (
    <>
      <Container className="text-center my-5">
        <img src={logo} alt="Logo de los simpson" className="w-50" />
        {mostrarComponente}
        <Button variant="warning" onClick={consultarAPI}>
          Obtener frase
        </Button>
      </Container>
    </>
  );
}

export default App;
