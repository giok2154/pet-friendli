export default function ImpactSection() {
  return (
    <section className="surface px-6 py-24 md:py-32">

      {/* Título sección */}
      <div className="text-container text-center mb-20">
        <h2 className="heading-2 mb-4">
          Cada compra nos acerca a una meta real
        </h2>
        <p className="body-lg body-secondary">
          No compras solo un producto. Formas parte de algo más grande.
        </p>
      </div>

      {/* Bloque de progreso */}
      <div className="text-container flex flex-col gap-6">

        {/* Texto meta */}
        <p className="body-secondary text-sm font-medium">
          Próxima meta: Ayudar a financiar un proyecto para mascotas.
        </p>

        {/* Barra de progreso */}
        <div className="w-full h-2 rounded-full bg-[var(--color-border)]">
          <div className="h-2 rounded-full w-2/3 bg-[var(--color-primary)]" />
        </div>

        {/* Mensaje final */}
        <p className="body-secondary">
          Tu compra nos acerca a la siguiente meta.
        </p>

      </div>

    </section>
  );
}