export default function ProductsSection() {
  const products = [
    { name: "Camiseta personalizada", description: "Ponla y llévalo contigo a todas partes." },
    { name: "Sudadera personalizada", description: "Para los días en que lo echas de menos." },
    { name: "Taza personalizada", description: "Cada mañana, su cara. Tu momento." },
    { name: "Manta personalizada", description: "Como un abrazo que puedes guardar." },
    { name: "Collar personalizado", description: "Su nombre. Su historia. En cada paseo." },
    { name: "Placa personalizada", description: "Pequeña. Permanente. Tuya." },
  ];
  return (
    <section className="bg-gray-50 px-6 py-24 md:py-32">
      <div className="text-center max-w-2xl mx-auto mb-20">
        <h2 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tight mb-4">
          Elige cómo quieres llevarlo contigo
        </h2>
        <p className="text-lg text-gray-400 leading-relaxed">
          Cada pieza se crea a partir de vuestra historia. No hay dos iguales.
        </p>
      </div>
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.name} className="bg-white rounded-2xl px-8 py-10 flex flex-col">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{product.name}</h3>
            <p className="text-sm text-gray-400 leading-relaxed">{product.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
