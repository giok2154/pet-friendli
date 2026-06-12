export default function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 py-16 bg-gradient-to-b from-[var(--color-surface)] to-[var(--color-surface-alt)]">

      {/* Badge */}
      <div className="mb-8">
        <span className="caption-label inline-block bg-[var(--color-surface-alt)] border border-[var(--color-border)] px-4 py-2 rounded-full">
          Para quienes saben lo que significa querer a una mascota
        </span>
      </div>

      {/* Headline */}
      <h1 className="heading-1 text-center max-w-3xl mb-6">
        Convierte a tu mejor amigo en algo que llevarás contigo para siempre.
      </h1>

      {/* Subheadline */}
      <p className="body-lg body-secondary text-center max-w-xl mb-12">
        Una foto. Una historia. Un objeto que querrás conservar para siempre.
      </p>

      {/* CTAs */}
      <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
        <button className="w-full sm:w-auto bg-[var(--color-primary)] text-[var(--color-inverse)] text-base font-semibold px-8 py-4 rounded-full hover:opacity-80 transition-opacity duration-200">
          Crear mi diseño
        </button>
        <button className="w-full sm:w-auto text-[var(--color-text-primary)] text-base font-medium px-8 py-4 rounded-full border border-[var(--color-border)] hover:border-[var(--color-secondary)] transition-colors duration-200">
          Descubrir Pet Friendli
        </button>
      </div>

    </section>
  );
}