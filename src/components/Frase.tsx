import { motion } from "framer-motion";

export function Frase() {
  return (
    <section className="py-1 bg-white flex items-center justify-center">
      <div className="flex flex-col items-center">

      <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-4"
        >

        <img
          src="/gifff.gif"
          className="
            mt-12
            w-[100%]          /* mobile */
            max-w-[460px]     /* mobile más grande */
            sm:max-w-[500px]
            md:max-w-[550px]
            lg:max-w-[650px]
            mx-auto
            opacity-80
          "
        />


        </motion.div>

      </div>
    </section>
  );
}