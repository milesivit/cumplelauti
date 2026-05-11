import Hero from "./components/Hero";
import { Asistencia } from "./components/Asistencia";
import { Footer } from "./components/Footer";
import { Frase } from "./components/Frase";
import { Donde } from "./components/Donde";
import { FraseDos } from "./components/FraseDos";
import { Countdown } from "./components/Countdown";
import { Horario } from "./components/Horario";

function App() {
  return (
    <>
      <Hero />
      <Countdown />
      <Horario />
      <Frase />
      <Donde />
      <FraseDos />
      <Asistencia />
      <Footer />
    </>
  );
}

export default App;