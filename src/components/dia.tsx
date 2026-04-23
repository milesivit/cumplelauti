
export function Dia() {
  return (
    <section className="py-12 text-center bg-[#ffffff]">

      <img
        src="/calendar.gif"
        className="mt-8 w-20 sm:w-25 md:w-30 mx-auto opacity-80"
      />

      <h2
        className="text-xl md:text-2xl mt-4 mb-3 px-4"
        style={{ fontFamily: "'Montserrat', sans-serif", color: "#8B5CF6" }}
      >
        ¿CUÁNDO?
      </h2>

      <h2
        className="text-xl md:text-2xl mt-4 mb-3 px-4"
        style={{ fontFamily: "'Montserrat', sans-serif", color: "#8B5CF6" }}
      >
        10 DE AGOSTO 2026
      </h2>

      <div className="w-16 h-[2px] bg-[#8B5CF6] mx-auto mb-4 rounded-full" />

    </section>
  );
}