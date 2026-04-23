export function DressCode() {
  return (
    <section className="py-10 text-center bg-white">
      <img
        src="/dress.gif"
        className="mt-8 w-20 sm:w-25 md:w-30 mx-auto opacity-80"
      />

      <h2
        className="text-4xl md:text-5xl mb-2 mt-3"
        style={{ fontFamily: "'Montserrat', sans-serif", color: "#8B5CF6" }}
      >
        DRESS CODE
      </h2>

      <p
        className="text-sm text-gray-600 max-w-md mx-auto leading-relaxed"
        style={{ fontFamily: "'Roboto Flex', sans-serif", color: "#1b4568" }}
      >
        <br />
        Te pedimos venir con un{" "}
        <span className="font-semibold">accesorio violeta</span>{" "}
        <br />
        (puede ser una corbata, pulsera, moño, cartera 
        <br />
        o lo que prefieras).
        <br /><br />
        ¡Dejá volar tu estilo y sumate a la temática!
      </p>
    </section>
  );
}