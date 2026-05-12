export function Asistencia() {
  return (
    <section className="py-10 text-center bg-red-900 ">

      <h2
        className="text-4xl md:text-3xl mb-4 mt-6"
        style={{ fontFamily: "'Montserrat', sans-serif", color: "#ffffff" }}
      >
        ¿VENDRÁS A MI CUMPLEAÑOS?
      </h2>

      {/* linea */}
      <div className="w-24 h-[1px] bg-white mx-auto mb-12" />

      <a
        href="https://wa.me/543463440649"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-flex items-center gap-2 px-6 py-2 rounded-full border border-[#7F1D1D] bg-[#FAF7F2] text-[#7F1D1D] shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300"
        style={{ fontFamily: "'Roboto Flex', sans-serif" }}
      >
        Confirmar asistencia por WhatsApp
      </a>

    </section>
  );
}