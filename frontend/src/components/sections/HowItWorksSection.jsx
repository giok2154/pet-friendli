import IconCamera from '../ui/icons/IconCamera';
import IconSparkles from '../ui/icons/IconSparkles';
import IconPackageHeart from '../ui/icons/IconPackageHeart';

export default function HowItWorksSection() {
  const steps = [
    {
      number: "01",
      icon: IconCamera,
      title: "Sube una foto",
      description: "La mejor foto de tu mascota.",
    },
    {
      number: "02",
      icon: IconSparkles,
      title: "Creamos tu diseño",
      description: "Único, hecho para ti.",
    },
    {
      number: "03",
      icon: IconPackageHeart,
      title: "Recíbelo en casa",
      description: "Y ayuda a quien más lo necesita.",
    },
  ];

  return (
    <section className="surface px-6 py-24 md:py-32">

      <div className="text-container text-center mb-20">
        <h2 className="heading-2 mb-4">
          Crear un recuerdo único es más fácil de lo que imaginas
        </h2>
        <p className="body-lg body-secondary">
          Solo necesitas una foto. Nosotros nos encargamos del resto.
        </p>
      </div>

      <div className="content-container grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12">
        {steps.map((step) => {
          const Icon = step.icon;
          return (
            <div key={step.number} className="flex flex-col">

              {/* Cabecera de paso unificada: icono + número en misma línea */}
              <div className="flex items-center gap-3 mb-10">
                <Icon
                  className="w-5 h-5 flex-shrink-0"
                  style={{ color: 'var(--color-text-muted)' }}
                />
                <span
                  className="text-6xl font-black leading-none"
                  style={{ color: 'var(--color-text-muted)' }}
                >
                  {step.number}
                </span>
              </div>

              {/* Título */}
              <h3 className="heading-3 mb-2">
                {step.title}
              </h3>

              {/* Descripción */}
              <p className="body-secondary">
                {step.description}
              </p>

            </div>
          );
        })}
      </div>

    </section>
  );
}