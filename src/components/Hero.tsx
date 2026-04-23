import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { CountdownBlock } from "./Countdown";

export default function Hero() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [started, setStarted] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    document.body.style.overflow = started ? "auto" : "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [started]);

  const toggleMute = () => {
    if (!audioRef.current) return;
    audioRef.current.muted = !audioRef.current.muted;
    setIsMuted(audioRef.current.muted);
  };

  const startExperience = () => {
    audioRef.current?.play();
    setStarted(true);
  };

  return (
    <>
      {/* PANTALLA INICIAL */}
      <div
        className={`fixed inset-0 bg-white z-50 flex items-center justify-center text-center px-4 transition-opacity duration-700 ${
          started ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <div>
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-4xl mb-4 mt-6 tracking-[0.2em]"
            style={{ fontFamily: "'Montserrat', sans-serif", color: "#8B5CF6" }}
          >
            MIS XV AMANDA 
          </motion.h2>

          <motion.h6
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg md:text-xl mb-6 max-w-xl mx-auto leading-relaxed"
            style={{ fontFamily: "'Roboto Flex', sans-serif", color: "#8B5CF6" }}
          >
            Celebrar es mejor juntos.
          </motion.h6>

          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            onClick={startExperience}
            className="px-8 py-3 rounded-full text-lg shadow-md hover:scale-105 transition"
            style={{ backgroundColor: "#8B5CF6", color: "white" }}
          >
            VER INVITACIÓN
          </motion.button>
        </div>
      </div>

      {/* HERO */}
      <section className="h-screen w-full flex items-center justify-center relative overflow-visible transition-all duration-700">
        
        {/* Fondo */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-all duration-700"
          style={{
            backgroundImage: "url('/chica2.jpeg')",
            filter: started ? "blur(0px)" : "blur(8px)",
            transform: started ? "scale(1)" : "scale(1.05)",
          }}
        />

        {/* Overlay */}
        <div
          className="absolute inset-0 transition-all duration-700"
          style={{
            backgroundColor: started
              ? "rgba(0,0,0,0.4)"
              : "rgba(0,0,0,0.7)",
          }}
        />

        <div className="relative z-10 flex flex-col items-center gap-2 text-center">
          <h1
            className="text-white text-4xl md:text-6xl"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            MIS 15
          </h1>

          <h1
            className="text-white text-7xl md:text-6xl"
            style={{ fontFamily: "'Great Vibes', cursive" }}
          >
            Amanda
          </h1>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: started ? 1 : 0 }}
          transition={{ delay: 2, duration: 0.8 }}
          className="absolute bottom-24 md:bottom-20 left-1/2 -translate-x-1/2 flex flex-col items-center cursor-pointer"
          onClick={() =>
            window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
          }
        >
          <span
            className="text-white text-sm mb-2"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Deslizá para ver más
          </span>

          <motion.svg
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.2 }}
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </motion.svg>
        </motion.div>

        <div className="absolute -bottom-6 md:-bottom-20 left-1/2 -translate-x-1/2 z-20">
          <CountdownBlock />
        </div>

        {/* Música */}
        <audio ref={audioRef} src="/cancion.mp3" />

        {/* Botón sonido */}
        <button
          onClick={toggleMute}
          className="fixed bottom-6 right-6 z-50 bg-white/80 backdrop-blur-md p-3 rounded-full shadow-md hover:scale-110 transition"
        >
          {isMuted ? "🔇" : "🔊"}
        </button>
      </section>
    </>
  );
}