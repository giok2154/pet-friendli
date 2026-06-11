export default function FAQSection() {
  const faqs = [
    { question: "¿Qué tipo de foto puedo subir?", answer: "Cualquier foto nítida de tu mascota. Cuanto mejor sea la calidad, más especial quedará el diseño." },
    { question: "¿Cuánto tarda la producción?", answer: "El plazo de producción y entrega se indicará en el momento del pedido." },
    { question: "¿Puedo elegir distintos productos?", answer: "Sí. Puedes aplicar el mismo diseño a diferentes productos del catálogo." },
    { question: "¿Cómo contribuye mi compra al impacto social?", answer: "Parte de cada venta se destina a proyectos de ayuda a mascotas. Puedes seguir el progreso en la sección de impacto." },
    { question: "¿Qué ocurre después de realizar el pedido?", answer: "Recibirás una confirmación y podrás seguir el estado de tu pedido en todo momento." },
  ];
  return (
    <section className="bg-white px-6 py-24 md:py-32">
      <div className="text-center max-w-2xl mx-auto mb-20">
        <h2 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tight mb-4">
          Preguntas frecuentes
        </h2>
        <p className="text-lg text-gray-400 leading-relaxed">
          Todo lo que necesitas saber antes de crear tu diseño.
        </p>
      </div>
      <div className="max-w-2xl mx-auto divide-y divide-gray-100">
        {faqs.map((faq) => (
          <div key={faq.question} className="py-8">
            <h3 className="text-base font-semibold text-gray-900 mb-3">{faq.question}</h3>
            <p className="text-base text-gray-400 leading-relaxed">{faq.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
