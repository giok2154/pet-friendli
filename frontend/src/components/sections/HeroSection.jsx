export default function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="mb-8">
        <span className="inline-block bg-gray-100 text-gray-500 text-xs font-medium tracking-widest uppercase px-4 py-2 rounded-full">
          Para quienes saben lo que significa querer a una mascota
        </span>
      </div>
      <h1 className="text-4xl md:text-6xl font-black text-gray-900 text-center leading-tight tracking-tight max-w-3xl mb-6">
        Convierte a tu mejor amigo en algo que llevarás contigo para siempre.
      </h1>
      <p className="text-lg md:text-xl text-gray-500 text-center leading-relaxed max-w-xl mb-12">
        Una foto. Una historia. Un objeto que querrás conservar para siempre.
      </p>
      <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
        <button className="w-full sm:w-auto bg-gray-900 text-white text-base font-semibold px-8 py-4 rounded-full hover:bg-gray-700 transition-colors duration-200">
          Crear mi diseño
        </button>
        <button className="w-full sm:w-auto text-gray-900 text-base font-medium px-8 py-4 rounded-full border border-gray-200 hover:border-gray-400 transition-colors duration-200">
          Descubrir Pet Friendli
        </button>
      </div>
    </section>
  );
}
