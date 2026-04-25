import { useState } from "react";
import { motion } from "framer-motion";

type Question = {
  question: string;
  options: string[];
  correct: number;
};

const questions: Question[] = [
  {
    question: "¿Cuál es mi color favorito?",
    options: ["Violeta", "Rosa", "Negro", "Blanco"],
    correct: 2,
  },
  {
    question: "¿Qué comida me gusta más?",
    options: ["Pizza", "Hamburguesa", "Pasta", "Sushi"],
    correct: 1,
  },
  {
    question: "¿Qué prefiero?",
    options: ["Playa", "Montaña", "Ciudad", "Campo"],
    correct: 0,
  },
  {
    question: "¿Mi estación favorita?",
    options: ["Verano", "Invierno", "Otoño", "Primavera"],
    correct: 3,
  },
];

export function Trivia() {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [answers, setAnswers] = useState<number[]>([]);
  const [finished, setFinished] = useState(false);

  const handleNext = () => {
    if (selected === null) return;

    const newAnswers = [...answers, selected];
    setAnswers(newAnswers);
    setSelected(null);

    if (current + 1 < questions.length) {
      setCurrent(current + 1);
    } else {
      setFinished(true);
    }
  };

  const score = answers.filter(
    (ans, i) => ans === questions[i].correct
  ).length;

  return (
    <section className="py-16 bg-gray-800 flex items-center justify-center">
      <div className="w-full max-w-xl px-6 text-center">
        <h2
          className="text-lg md:text-2xl text-center leading-relaxed"
          style={{ fontFamily: "'Montserrat', sans-serif", color: "#ffffff" }}
        >
          ¿Qué tanto conocés a la cumpleañera?
        </h2>

        <br />

        {/* LINEA DECORATIVA */}
        <div className="w-16 h-[1px] bg-white/60 mx-auto mb-12" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >

          {!finished ? (
            <>
              {/* pregunta */}
              <h2
                className="text-xl md:text-xl mb-8"
                style={{ fontFamily: "'Roboto Flex', sans-serif", color: "#fff" }}
              >
                {questions[current].question}
              </h2>

              {/* opciones */}
              <div className="flex flex-col gap-4">
                {questions[current].options.map((opt, i) => (
                  <button
                    key={i}
                    onClick={() => setSelected(i)}
                    className={`py-3 px-4 rounded-xl border transition ${
                      selected === i
                        ? "bg-white text-black"
                        : "bg-transparent text-white border-white hover:bg-white hover:text-black"
                    }`}
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    {opt}
                  </button>
                ))}
              </div>

              {/* botón siguiente */}
              <button
                onClick={handleNext}
                className="mt-8 px-6 py-3 bg-white text-black rounded-xl"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Siguiente
              </button>
            </>
          ) : (
            <>
              {/* resultado */}
              <h2
                className="text-2xl mb-6 text-white"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Tu puntuación: {score} / {questions.length}
              </h2>
            </>
          )}
        </motion.div>
      </div>
    </section>
  );
}