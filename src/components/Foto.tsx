import { motion } from "framer-motion";

export function Foto() {
    return (
      <section className="py-12 bg-white flex items-center justify-center">
        <div className="flex flex-col items-center gap-4 w-full max-w-2xl px-6">
          
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-4"
        >
          <img
            src="/chica.jpg"
            alt="Foto"
            className="w-full h-auto object-cover"
          />
          </motion.div>
  
        </div>
      </section>
    );
  }