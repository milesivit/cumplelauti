import { motion } from "framer-motion";

export function Horario() {
  return (
    <section className="py-12 text-center bg-blue-800">

      <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-4"
        >
      <div className="mt-6 w-20 h-20 md:w-24 md:h-24 mx-auto rounded-full overflow-hidden bg-white flex items-center justify-center shadow-md">
        <img
          src="/reloj.gif"
          className="w-16 md:w-20 object-cover"
        />
      </div>
      </motion.div>

      <h2
        className="text-xl md:text-4xl mt-4 mb-3 px-4"
        style={{ fontFamily: "'Montserrat', sans-serif", color: "#ffffff" }}
      >
        HORARIO
      </h2>

    {/* LINEA DECORATIVA */}
    <div className="w-16 h-[1px] bg-white/60 mx-auto mb-12" />

      <h2
        className="text-xl md:text-1xl mt-4 mb-3 px-4"
        style={{ fontFamily: "'Roboto Flex', sans-serif", color: "#ffffff" }}
      >
        19:00hs a 21:30hs
      </h2>

    </section>
  );
}