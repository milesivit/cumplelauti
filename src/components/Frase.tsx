import { motion } from "framer-motion";

export function Frase() {
  return (
    <section className="py-4 bg-white">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="
          w-full
          flex
          items-center
          justify-center
        "
      >
        <img
          src="/gifff.gif"
          alt=""
          className="
            mt-8
            h-[160px]      /* mobile */
            sm:h-[200px]
            md:h-[240px]
            lg:h-[280px]
            xl:h-[320px]
            w-auto
            object-contain
            mx-auto
            opacity-80
          "
        />
      </motion.div>
    </section>
  );
}