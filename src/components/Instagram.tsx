import { motion } from "framer-motion";

export function Instagram() {
  return (
    <section className="py-12 text-center bg-[#8B5CF6]">
      
      <div className="mt-6 w-20 h-20 md:w-24 md:h-24 mx-auto rounded-full overflow-hidden bg-white flex items-center justify-center shadow-md">
        <img
          src="/camera.gif"
          className="w-16 md:w-20 object-cover"
        />
      </div>

      <h2
        className="text-xl md:text-2xl mt-4 mb-3 px-4"
        style={{ fontFamily: "'Montserrat', sans-serif", color: "#ffffff" }}
      >
        Subí tus momentos y etiquetalos
      </h2>

      <div className="w-16 h-[2px] bg-[#ffffff] mx-auto mb-4 rounded-full" />

      <p
        className="text-base md:text-lg text-white max-w-sm mx-auto leading-relaxed px-4"
        style={{ fontFamily: "'Roboto Flex', sans-serif" }}
      >
        con mi hashtag: <span className="font-semibold">#amandamisxv</span>
      </p>

    </section>
  );
}