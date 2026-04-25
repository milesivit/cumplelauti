import Hero from "./components/Hero";
import { DressCode } from "./components/DressCode";
import { Itinerary } from "./components/Initerario";
import { Asistencia } from "./components/Asistencia";
import { Footer } from "./components/Footer";
import { Frase } from "./components/Frase";
import { Donde } from "./components/Donde";
import { FraseDos } from "./components/FraseDos";
import { Countdown } from "./components/Countdown";
import { Trivia } from "./components/Trivia";

function App() {
  return (
    <>
      <Hero />
      <Countdown />
      <Donde />
      <Frase />
      <Trivia />
      <DressCode />
      <Itinerary />
      <FraseDos />
      <Asistencia />
      <Footer />
    </>
  );
}

export default App;