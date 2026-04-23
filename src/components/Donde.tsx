import { motion } from "framer-motion";
import { useState } from "react";

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
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4430.678683828601!2d-62.8791295!3d-33.5591006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95cf2c7af9f51c75%3A0x87c0fa75c1ab3d03!2sSociedad%20Rural!5e0!3m2!1sen!2sar",
  };

  return (
    <section className="py-12 text-center bg-[#8B5CF6]">

      <div className="mt-6 w-20 h-20 md:w-24 md:h-24 mx-auto rounded-full overflow-hidden bg-white flex items-center justify-center shadow-md">
        <img
          src="/location.gif"
          className="w-16 md:w-20 object-cover"
        />
      </div>

      <h2
        className="text-xl md:text-2xl mt-4 mb-3 px-4"
        style={{ fontFamily: "'Montserrat', sans-serif", color: "#ffffff" }}
      >
        ¿DONDE?
      </h2>

      <h2
        className="text-xl md:text-2xl mt-4 mb-3 px-4"
        style={{ fontFamily: "'Montserrat', sans-serif", color: "#ffffff" }}
      >
        Sociedad Rural (Salón)
      </h2>

      <button
            onClick={() => setOpenMap("fiesta")}
            className="mt-3 inline-flex items-center gap-2 bg-[#ffffff] px-4 py-2 rounded-full shadow-sm hover:shadow-md transition"
          >
            <span className="text-[#8B5CF6] flex items-center gap-2 text-sm">
              <LocationIcon />
              Cómo llegar
            </span>
          </button>


      <div className="w-16 h-[2px] bg-[#8B5CF6] mx-auto mb-4 rounded-full" />

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