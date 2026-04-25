import { motion } from "framer-motion";

export function DressCode() {
  return (
    <section className="py-10 text-center bg-white">

      <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-4"
        >
      <img
        src="/suit.gif"
        className="mt-8 w-20 sm:w-25 md:w-30 mx-auto opacity-80"
      />
      </motion.div>

      <h2
        className="text-4xl md:text-5xl mb-2 mt-3"
        style={{ fontFamily: "'Montserrat', sans-serif", color: "#808080" }}
      >
        DRESS CODE
      </h2>

      <p
        className="text-kl text-black max-w-md mx-auto leading-relaxed"
        style={{ fontFamily: "'Roboto Flex', sans-serif", color: "#1b4568" }}
      >
        <br />
        Colores sugeridos para vestir:
      </p>

      <img
        src="/codigo.png"
        className="mt-8 w-20 sm:w-25 md:w-30 mx-auto opacity-80"
      />
    </section>
  );
}