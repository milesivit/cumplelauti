export function Asistencia() {
  return (
    <section className="py-10 text-center bg-[#8B5CF6] ">

      <h2
        className="text-4xl md:text-3xl mb-4 mt-6"
        style={{ fontFamily: "'Montserrat', sans-serif", color: "#ffffff" }}
      >
        CONFIRMÁ TU ASISTENCIA
      </h2>

      {/* linea */}
      <div className="w-24 h-[1px] bg-white mx-auto mb-12" />

      <p
        className="text-xl text-white max-w-md mx-auto leading-relaxed"
        style={{ fontFamily: "'Roboto Flex', sans-serif" }}
      >
        Por favor <span className="font-semibold">confirma tu asistencia</span> 
        <br />
        antes del <span className="font-semibold">20 de julio.</span>
      </p>
  
      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLSc4KMg4oK9QS_tHfwd_fi_peOY1aQ2PAJL49JbBKLFHoDDevA/viewform"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-flex items-center gap-2 px-6 py-2 rounded-full border border-[#1b4568] bg-[#FAF7F2] text-[#1b4568] shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300"
        style={{ fontFamily: "'Roboto Flex', sans-serif" }}
      >
        Confirmar asistencia
      </a>

    </section>
  );
}