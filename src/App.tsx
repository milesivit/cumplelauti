import Hero from "./components/Hero";
// import { Countdown } from "./components/Countdown";
import { DressCode } from "./components/DressCode";
import { Honeymoon } from "./components/Honeymoon";
import { Itinerary } from "./components/Initerario";
import { Information } from "./components/Menu";
import { Asistencia } from "./components/Asistencia";
import { Footer } from "./components/Footer";
import { Frase } from "./components/frase";
import { Instagram } from "./components/Instagram";
import { Dia } from "./components/dia";
import { Donde } from "./components/Donde";

function App() {
  return (
    <>
      <Hero />
      {/* <Countdown /> */}
      <Frase />
      <Instagram />
      <Dia />
      <Donde />
      <DressCode />
      <Itinerary />
      <Information />
      <Honeymoon />
      <Asistencia />
      <Footer />
    </>
  );
}

export default App;