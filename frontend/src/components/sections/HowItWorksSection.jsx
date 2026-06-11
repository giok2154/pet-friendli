export default function HowItWorksSection() {
  const steps = [
    { number: "01", title: "Sube una foto", description: "La mejor foto de tu mascota." },
    { number: "02", title: "Creamos tu diseño", description: "Único, hecho para ti." },
    { number: "03", title: "Recíbelo en casa", description: "Y ayuda a quien más lo necesita." },
  ];
  return (
    <section className="bg-white px-6 py-24 md:py-32">
      <div className="text-center max-w-2xl mx-auto mb-20">
        <h2 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tight mb-4">
          Crear un recuerdo único es más fácil de lo que imaginas
        </h2>
        <p className="text-lg text-gray-400 leading-relaxed">
          Solo necesitas una foto. Nosotros nos encargamos del resto.
        </p>
      </div>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12">
        {steps.map((step) => (
          <div key={step.number} className="flex flex-col">
            <span className="text-8xl font-black text-gray-100 mb-4 leading-none">{step.number}</span>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
            <p className="text-base text-gray-400">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
