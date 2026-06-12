export default function HowItWorksSection() {
  const steps = [
    {
      number: "01",
      title: "Sube una foto",
      description: "La mejor foto de tu mascota.",
    },
    {
      number: "02",
      title: "Creamos tu diseño",
      description: "Único, hecho para ti.",
    },
    {
      number: "03",
      title: "Recíbelo en casa",
      description: "Y ayuda a quien más lo necesita.",
    },
  ];

  return (
    <section className="surface px-6 py-24 md:py-32">

      {/* Título sección */}
      <div className="text-container text-center mb-20">
        <h2 className="heading-2 mb-4">
          Crear un recuerdo único es más fácil de lo que imaginas
        </h2>
        <p className="body-lg body-secondary">
          Solo necesitas una foto. Nosotros nos encargamos del resto.
        </p>
      </div>

      {/* Pasos */}
      <div className="content-container grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12">
        {steps.map((step) => (
          <div key={step.number} className="flex flex-col">
            <span className="caption-label text-8xl font-black mb-4 leading-none normal-case tracking-normal">
              {step.number}
            </span>
            <h3 className="heading-3 mb-2">
              {step.title}
            </h3>
            <p className="body-secondary">
              {step.description}
            </p>
          </div>
        ))}
      </div>

    </section>
  );
}