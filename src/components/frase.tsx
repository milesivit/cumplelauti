export function Frase() {
  return (
    <section className="py-12 bg-white flex items-center justify-center">
      <div className="flex flex-col items-center gap-4 w-full max-w-2xl px-6">
        
        {/* línea arriba */}
        <div className="w-24 md:w-40 h-[1px] bg-violet-500" />

        {/* texto */}
        <h2
          className="text-lg md:text-2xl text-center leading-relaxed"
          style={{ fontFamily: "'Montserrat', sans-serif", color: "#8B5CF6" }}
        >
          Quiero que seas parte de una noche mágica e inolvidable.
        </h2>

        {/* línea abajo */}
        <div className="w-24 md:w-40 h-[1px] bg-violet-500" />

      </div>
    </section>
  );
}