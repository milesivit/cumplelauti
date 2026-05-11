import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function Hero() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [started, setStarted] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (!audioRef.current) return;

      if (document.hidden) {
        audioRef.current.pause();
      } else {
        if (started) {
          audioRef.current.play().catch(() => {});
        }
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener(
        "visibilitychange",
        handleVisibilityChange
      );
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
      <div
        className={`fixed inset-0 bg-white z-50 flex items-center justify-center text-center px-4 transition-opacity duration-700 ${
          started ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <div>
          {/* Título */}
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="
              text-5xl
              sm:text-4xl
              md:text-5xl
              lg:text-6xl
              font-extrabold
              tracking-widest
              mb-3
              px-2
            "
            style={{
              fontFamily: "'Montserrat', sans-serif",
              color: "#2563EB",
              textShadow: `
                0 0 4px rgba(255,255,255,0.9),
                0 0 12px rgba(37,99,235,0.45),
                0 4px 10px rgba(0,0,0,0.15)
              `,
            }}
          >
            BAUTISTA
          </motion.h2>

          {/* Subtítulo */}
          <motion.h6
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="
              text-xl
              md:text-xl
              mb-8
              max-w-xl
              mx-auto
              leading-relaxed
              px-4
            "
            style={{
              fontFamily: "'Roboto Flex', sans-serif",
              color: "#60A5FA",
              textShadow: "0 0 8px rgba(96,165,250,0.25)",
            }}
          >
            Prepárate para un cumpleaños a toda velocidad⚡
          </motion.h6>

          {/* Botón */}
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            onClick={startExperience}
            className="
              px-8
              py-4
              text-base
              sm:text-lg
              font-semibold
              rounded-full
              hover:scale-105
              active:scale-95
              transition
            "
            style={{
              background: "#1E3A8A",
              color: "white",
              boxShadow: `
                0 4px 15px rgba(30,58,138,0.35),
                0 0 18px rgba(59,130,246,0.45)
              `,
            }}
          >
            VER INVITACIÓN
          </motion.button>
        </div>
      </div>

      <section className="h-screen w-full flex items-center justify-center relative overflow-hidden transition-all duration-700">

        {/* Fondo */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-all duration-700"
          style={{
            backgroundImage: "url('/fondo.png')",
            filter: started ? "blur(0px)" : "blur(8px)",
            transform: started ? "scale(1)" : "scale(1.05)",
          }}
        />

        {/* Overlay */}
        <div
          className="absolute inset-0 transition-all duration-700"
          style={{
            backgroundColor: started
              ? "rgba(0,0,0,0.1)"
              : "rgba(0,0,0,0.2)",
          }}
        />

        {/* Scroll */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: started ? 1 : 0 }}
          transition={{ delay: 2, duration: 0.7 }}
          className="absolute bottom-24 md:bottom-20 left-1/2 -translate-x-1/2 flex flex-col items-center cursor-pointer"
          onClick={() =>
            window.scrollTo({
              top: window.innerHeight,
              behavior: "smooth",
            })
          }
        >
          <span
            className="text-white text-sm mb-2"
            style={{
              fontFamily: "'Montserrat', sans-serif",
            }}
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
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </motion.svg>
        </motion.div>

        {/* Música */}
        <audio ref={audioRef} src="/Sonic.mp3" />

        {/* Sonido */}
        <button
          onClick={toggleMute}
          className="
            fixed
            bottom-6
            right-6
            z-50
            bg-white/80
            backdrop-blur-md
            p-3
            rounded-full
            shadow-md
            hover:scale-110
            transition
          "
        >
          {isMuted ? "🔇" : "🔊"}
        </button>
      </section>
    </>
  );
}