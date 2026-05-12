import { useState } from "react";
import { motion } from "framer-motion";

const LocationIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.8}
    stroke="currentColor"
    className="w-4 h-4"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 21s7-4.5 7-11a7 7 0 10-14 0c0 6.5 7 11 7 11z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 10.5a2 2 0 100-4 2 2 0 000 4z"
    />
  </svg>
);

export function Donde() {
  type MapKey = "fiesta";

  const [openMap, setOpenMap] = useState<MapKey | null>(null);

  const maps = {  
    fiesta:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d831.1891285854924!2d-62.880105730449934!3d-33.55970199833418!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95cf2c792aa53d35%3A0xecbe4b3e818437ea!2sMoreno%20523%2C%20X2650%20Canals%2C%20C%C3%B3rdoba!5e0!3m2!1sen!2sar!4v1778609258850!5m2!1sen!2sar",
  };

  return (
    <section className="py-12 text-center bg-red-900">

      <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-4"
        >
      <div className="mt-6 w-20 h-20 md:w-24 md:h-24 mx-auto rounded-full overflow-hidden bg-white flex items-center justify-center shadow-md">
        <img
          src="/map.gif"
          className="w-16 md:w-20 object-cover"
        />
      </div>
      </motion.div>

      <h2
        className="text-xl md:text-4xl mt-4 mb-3 px-4"
        style={{ fontFamily: "'Montserrat', sans-serif", color: "#ffffff" }}
      >
        ¿DÓNDE?
      </h2>

    <div className="w-16 h-[1px] bg-white/60 mx-auto mb-12" />

      <h2
        className="text-xl md:text-1xl mt-4 mb-3 px-4"
        style={{ fontFamily: "'Roboto Flex', sans-serif", color: "#ffffff" }}
      >
        Moreno 563
      </h2>

      <button
        onClick={() => setOpenMap("fiesta")}
        className="
          mt-3
          inline-flex items-center gap-2
          px-5 py-2.5
          rounded-full
          border border-red-300/30
          bg-white
          backdrop-blur-sm
          shadow-md
          hover:bg-blue-100
          hover:shadow-lg
          transition-all duration-300
        "
      >
        <span className="text-red-700 flex items-center gap-2 text-sm font-medium tracking-wide">
          <LocationIcon />
          Cómo llegar
        </span>
      </button>

      {openMap && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">

          <div className="bg-white w-[90%] max-w-2xl rounded-xl overflow-hidden relative">

            {/* cerrar */}
            <button
              onClick={() => setOpenMap(null)}
              className="absolute top-3 right-3 bg-black text-white w-8 h-8 rounded-full"
            >
              ✕
            </button>

            {/* MAPA */}
            <iframe
              src={maps[openMap]}
              width="100%"
              height="450"
              style={{ border: 0 }}
              loading="lazy"
            />
          </div>
        </div>
      )}

    </section>
  );
}