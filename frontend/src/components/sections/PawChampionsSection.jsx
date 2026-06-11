export default function PawChampionsSection() {
  const benefits = [
    { text: "Decides junto a otros qué causas apoyamos" },
    { text: "Ves en tiempo real el impacto que generamos" },
    { text: "Tu compra tiene nombre propio dentro de la comunidad" },
  ];
  return (
    <section className="bg-gray-50 px-6 py-24 md:py-32">
      <div className="text-center max-w-2xl mx-auto mb-20">
        <p className="text-sm font-medium tracking-widest uppercase text-gray-400 mb-4">
          Más que una compra
        </p>
        <h2 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tight mb-4">
          Paw Champions
        </h2>
        <p className="text-lg text-gray-400 leading-relaxed">
          No compramos solos. Cada pedido suma a algo más grande que cualquiera de nosotros.
        </p>
      </div>
      <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">
        {benefits.map((benefit) => (
          <div key={benefit.text} className="flex flex-col gap-3">
            <p className="text-lg font-semibold text-gray-900 leading-snug">{benefit.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
