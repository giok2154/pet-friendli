export default function ImpactSection() {
  return (
    <section className="bg-white px-6 py-24 md:py-32">
      <div className="text-center max-w-2xl mx-auto mb-20">
        <h2 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tight mb-4">
          Cada compra nos acerca a una meta real
        </h2>
        <p className="text-lg text-gray-400 leading-relaxed">
          No compras solo un producto. Formas parte de algo más grande.
        </p>
      </div>
      <div className="max-w-2xl mx-auto flex flex-col gap-6">
        <p className="text-sm font-medium text-gray-500 tracking-wide">
          Próxima meta: Ayudar a financiar un proyecto para mascotas.
        </p>
        <div className="w-full bg-gray-100 rounded-full h-2">
          <div className="bg-gray-900 h-2 rounded-full w-2/3" />
        </div>
        <p className="text-base text-gray-400 leading-relaxed">
          Tu compra nos acerca a la siguiente meta.
        </p>
      </div>
    </section>
  );
}
