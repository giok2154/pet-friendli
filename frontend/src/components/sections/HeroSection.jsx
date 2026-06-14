import HeroSlider from '../ui/HeroSlider';

export default function HeroSection() {
  return (
    <section className="surface min-h-screen flex items-center overflow-hidden">

      {/* Layout desktop: texto izquierda + slider derecha */}
      {/* Layout mobile: texto arriba + slider abajo */}
      <div className="w-full flex flex-col md:flex-row min-h-screen">

        {/* Zona de texto — izquierda desktop, arriba mobile */}
        <div className="flex flex-col justify-center px-8 py-16 md:py-0 md:px-16 md:w-[40%] md:min-h-screen">

          {/* Supratítulo */}
          <p
            className="caption-label mb-8"
            style={{ color: 'var(--color-text-muted)' }}
          >
            Para quienes saben lo que significa querer a una mascota
          </p>

          {/* Headline */}
          <h1 className="heading-1 mb-6">
            Convierte el vínculo en algo que puedas tocar.
          </h1>

          {/* Subheadline */}
          <p className="body-lg body-secondary mb-12">
            Una foto. Una historia. Un objeto que querrás conservar para siempre.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-start gap-4">
            <button
              className="w-full sm:w-auto text-base font-semibold px-8 py-4 rounded-full transition-opacity duration-200 hover:opacity-80"
              style={{
                backgroundColor: 'var(--color-primary)',
                color: 'var(--color-inverse)',
              }}
            >
              Crear mi diseño
            </button>
            <button
              className="w-full sm:w-auto text-base font-medium px-8 py-4 rounded-full border transition-colors duration-200"
              style={{
                color: 'var(--color-text-primary)',
                borderColor: 'var(--color-border)',
              }}
            >
              Descubrir Pet Friendli
            </button>
          </div>

        </div>

        {/* Zona slider — derecha desktop, abajo mobile */}
        <div className="w-full md:w-[60%] h-[70vw] md:h-auto md:min-h-screen">
          <HeroSlider />
        </div>

      </div>

    </section>
  );
}