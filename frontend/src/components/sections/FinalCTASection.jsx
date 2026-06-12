export default function FinalCTASection() {
  return (
    <section className="surface-dark px-6 py-24 md:py-32">
      <div className="text-container flex flex-col items-center text-center gap-6">

        <h2 className="heading-2" style={{ color: 'var(--color-inverse)' }}>
          Tu mejor amigo ya forma parte de tu historia.
        </h2>

        <p className="body-lg" style={{ color: 'var(--color-text-secondary-inverse)' }}>
          Ahora conviértelo en algo que puedas llevar contigo para siempre.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mt-6">
          <button className="w-full sm:w-auto bg-[var(--color-inverse)] text-[var(--color-primary)] text-base font-semibold px-8 py-4 rounded-full hover:opacity-90 transition-opacity duration-200">
            Crear mi diseño
          </button>
          <button className="w-full sm:w-auto text-[var(--color-inverse)] text-base font-medium px-8 py-4 rounded-full border border-[var(--color-text-secondary-inverse)] hover:border-[var(--color-inverse)] transition-colors duration-200">
            Ver productos
          </button>
        </div>

      </div>
    </section>
  );
}