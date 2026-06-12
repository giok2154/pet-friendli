export default function ProductsSection() {
  const products = [
    {
      name: "Camiseta personalizada",
      description: "Ponla y llévalo contigo a todas partes.",
    },
    {
      name: "Sudadera personalizada",
      description: "Para los días en que lo echas de menos.",
    },
    {
      name: "Taza personalizada",
      description: "Cada mañana, su cara. Tu momento.",
    },
    {
      name: "Manta personalizada",
      description: "Como un abrazo que puedes guardar.",
    },
    {
      name: "Collar personalizado",
      description: "Su nombre. Su historia. En cada paseo.",
    },
    {
      name: "Placa personalizada",
      description: "Pequeña. Permanente. Tuya.",
    },
  ];

  return (
    <section className="surface-alt px-6 py-24 md:py-32">

      {/* Título sección */}
      <div className="text-container text-center mb-20">
        <h2 className="heading-2 mb-4">
          Elige cómo quieres llevarlo contigo
        </h2>
        <p className="body-lg body-secondary">
          Cada pieza se crea a partir de vuestra historia. No hay dos iguales.
        </p>
      </div>

      {/* Grid productos */}
      <div className="content-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.name} className="surface rounded-2xl px-8 py-10 flex flex-col">
            <h3 className="heading-3 mb-2">
              {product.name}
            </h3>
            <p className="body-secondary text-sm leading-relaxed">
              {product.description}
            </p>
          </div>
        ))}
      </div>

    </section>
  );
}