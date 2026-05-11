import { motion } from "framer-motion";

export function FraseDos() {
  return (
    <section className="py-12 bg-white flex items-center justify-center">
      <div className="flex flex-col items-center gap-4 w-full max-w-2xl px-6">
        
      <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-4"
        >
        {/* línea arriba */}
        <div className="w-24 md:w-40 h-[1px] bg-blue-800" />

        {/* texto */}
        <h2
          className="text-lg md:text-2xl text-center leading-relaxed"
          style={{ fontFamily: "'Montserrat', sans-serif", color: "#1E3A8A" }}
        >
          ¡Tu compañía hará la aventura perfecta!
        </h2>

        {/* línea abajo */}
        <div className="w-24 md:w-40 h-[1px] bg-blue-800" />

        </motion.div>

      </div>
    </section>
  );
}