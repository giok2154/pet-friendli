export default function FinalCTASection() {
  return (
    <section className="bg-gray-900 px-6 py-24 md:py-32">
      <div className="max-w-2xl mx-auto flex flex-col items-center text-center gap-6">
        <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight leading-tight">
          Tu mejor amigo ya forma parte de tu historia.
        </h2>
        <p className="text-lg text-gray-400 leading-relaxed">
          Ahora conviértelo en algo que puedas llevar contigo para siempre.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mt-6">
          <button className="w-full sm:w-auto bg-white text-gray-900 text-base font-semibold px-8 py-4 rounded-full hover:bg-gray-100 transition-colors duration-200">
            Crear mi diseño
          </button>
          <button className="w-full sm:w-auto text-white text-base font-medium px-8 py-4 rounded-full border border-gray-700 hover:border-gray-500 transition-colors duration-200">
            Ver productos
          </button>
        </div>
      </div>
    </section>
  );
}
