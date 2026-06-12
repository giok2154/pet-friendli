export default function PawChampionsSection() {
  const benefits = [
    {
      text: "Decides junto a otros qué causas apoyamos",
    },
    {
      text: "Ves en tiempo real el impacto que generamos",
    },
    {
      text: "Tu compra tiene nombre propio dentro de la comunidad",
    },
  ];

  return (
    <section className="surface-alt px-6 py-24 md:py-32">

      {/* Título sección */}
      <div className="text-container text-center mb-20">
        <p className="caption-label mb-4">
          Más que una compra
        </p>
        <h2 className="heading-2 mb-4">
          Paw Champions
        </h2>
        <p className="body-lg body-secondary">
          No compramos solos. Cada pedido suma a algo más grande que cualquiera de nosotros.
        </p>
      </div>

      {/* Beneficios */}
      <div className="content-container grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 max-w-3xl">
        {benefits.map((benefit) => (
          <div key={benefit.text} className="flex flex-col gap-3">
            <p className="body-lg font-semibold leading-relaxed">
              {benefit.text}
            </p>
          </div>
        ))}
      </div>

    </section>
  );
}