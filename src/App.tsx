import Hero from "./components/Hero";
import { DressCode } from "./components/DressCode";
import { Itinerary } from "./components/Initerario";
import { Asistencia } from "./components/Asistencia";
import { Footer } from "./components/Footer";
import { Frase } from "./components/Frase";
import { Instagram } from "./components/Instagram";
import { Dia } from "./components/Dia";
import { Donde } from "./components/Donde";
import { Foto } from "./components/Foto";
import { FraseDos } from "./components/FraseDos";

function App() {
  return (
    <>
      <Hero />
      <Frase />
      <Instagram />
      <Dia />
      <Donde />
      <DressCode />
      <Itinerary />
      <Foto />
      <FraseDos />
      <Asistencia />
      <Footer />
    </>
  );
}

export default App;