import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function Itinerary() {
  const [openPrices, setOpenPrices] = useState(false);

  useEffect(() => {
    if (openPrices) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [openPrices]);
  
  return (
    <section className="py-20 bg-gray-800 flex justify-center px-4">

      {/* CONTENEDOR CON MARCO */}
      <div className="relative w-full max-w-md px-6 py-12">

        {/* RECTÁNGULO BORDE (decorativo) */}
        <div className="absolute inset-0 border border-white/60 rounded-3xl pointer-events-none" />

        {/* CONTENIDO */}
        <div className="relative z-10 text-center">

          {/* TITULO */}
          <h2
            className="text-3xl md:text-4xl mb-4 tracking-[0.2em]"
            style={{ fontFamily: "'Montserrat', sans-serif", color: "#ffffff" }}
          >
            INFORMACIÓN
          </h2>

          <p
            className="text-base md:text-base mb-12 opacity-90"
            style={{ fontFamily: "'Roboto Flex', sans-serif", color: "#ffffff" }}
          >
            Horarios y precios
          </p>

          {/* LINEA DECORATIVA */}
          <div className="w-16 h-[1px] bg-white/60 mx-auto mb-12" />

          {/* EVENTOS */}
          <div className="flex flex-col gap-12">

            {/* CENA */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col items-center gap-4"
            >
            <div className="-mt-4 w-20 h-20 md:w-24 md:h-24 mx-auto rounded-full overflow-hidden bg-white flex items-center justify-center shadow-md">
                <img
                  src="/dinner.gif"
                  className="w-16 md:w-20 object-cover"
                />
              </div>


              <p className="text-xs tracking-[0.4em] text-white mb-1">
                CENA
              </p>

              <p className="text-3xl text-white font-light">
                21:30
              </p>
            </motion.div>

            {/* divisor con punto */}
            <div className="flex items-center justify-center gap-2">
              <div className="w-10 h-[1px] bg-white/40" />
              <div className="w-2 h-2 rounded-full bg-white/60" />
              <div className="w-10 h-[1px] bg-white/40" />
            </div>

            {/* BRINDIS */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col items-center gap-4"
            >
            <div className="-mt-4 w-20 h-20 md:w-24 md:h-24 mx-auto rounded-full overflow-hidden bg-white flex items-center justify-center shadow-md">
              <img
                src="/alcohol.gif"
                className="w-16 md:w-20 object-cover"
              />
            </div>


              <p className="text-xs tracking-[0.4em] text-white mb-1">
                BRINDIS
              </p>


              <p className="text-3xl text-white font-light">
                01:30
              </p>

              <div className="mt-5 flex justify-center">
                <button
                  onClick={() => setOpenPrices(true)}
                  className="inline-flex items-center gap-2 bg-[#ffffff] px-5 py-2.5 rounded-full shadow-sm hover:shadow-md transition"
                >
                  <span className="text-gray-800 text-sm tracking-wide">
                    Ver precios
                  </span>
                </button>
              </div>

            </motion.div>

          </div>
        </div>
      </div>

      {openPrices && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 px-4">
          
          <div className="bg-white/90 backdrop-blur-md w-full max-w-md rounded-3xl p-8 relative text-center border border-white/40">

            {/* botón cerrar */}
            <button
              onClick={() => setOpenPrices(false)}
              className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 text-white hover:scale-110 transition"
            >
              ✕
            </button>

            {/* título */}
            <h3 className="text-2xl mb-6 text-[#gray-800] tracking-[0.3em] font-light">
              PRECIOS
            </h3>

            {/* línea decorativa */}
            <div className="w-16 h-[2px] bg-[#gray-800] mx-auto mb-6 opacity-60" />

            {/* contenido */}
            <div className="flex flex-col gap-8">

              {/* CENA */}
              <div className="space-y-3">
                <p className="text-xs tracking-[0.4em] text-gray-600">
                  CENA
                </p>

                <div className="bg-white rounded-xl py-4 border border-gray-100">
                  <p className="text-xs text-gray-400 tracking-widest">
                    ADULTOS
                  </p>
                  <p className="text-3xl font-light text-[#8B5CF6]">
                    $40.000
                  </p>
                </div>

                <div className="bg-white rounded-xl py-4 shadow-sm border border-gray-100">
                  <p className="text-xs text-gray-400 tracking-widest">
                    NIÑOS
                  </p>
                  <p className="text-3xl font-light text-[#8B5CF6]">
                    $22.000
                  </p>
                </div>
              </div>

              {/* BRINDIS */}
              <div className="space-y-3">
                <p className="text-xs tracking-[0.4em] text-gray-600">
                  BRINDIS
                </p>

                <div className="bg-gray-800 text-white rounded-xl py-5 shadow-md">
                  <p className="text-xs tracking-widest opacity-80">
                    VALOR
                  </p>
                  <p className="text-3xl font-light">
                    $25.000
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}