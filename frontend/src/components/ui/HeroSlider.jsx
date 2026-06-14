import { useState, useEffect, useRef } from "react";

const slides = [
  {
    src: "/src/assets/slide-hoodie.png",
    alt: "Sudadera personalizada con retrato de mascota",
  },
  {
    src: "/src/assets/slide-tshirt.png",
    alt: "Camiseta personalizada con retrato de mascota",
  },
  {
    src: "/src/assets/slide-mug.png",
    alt: "Taza personalizada con retrato de mascota",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [fading, setFading] = useState(false);
  const intervalRef = useRef(null);

  const goTo = (index) => {
    setFading(true);
    setTimeout(() => {
      setCurrent(index);
      setFading(false);
    }, 400);
  };

  const next = () => {
    goTo((current + 1) % slides.length);
  };

  const startInterval = () => {
    intervalRef.current = setInterval(next, 6000);
  };

  const stopInterval = () => {
    clearInterval(intervalRef.current);
  };

  useEffect(() => {
    startInterval();
    return () => stopInterval();
  }, [current]);

  return (
    <div
      className="relative w-full h-full"
      onMouseEnter={stopInterval}
      onMouseLeave={startInterval}
    >
      {/* Imagen */}
      <img
        src={slides[current].src}
        alt={slides[current].alt}
        className="w-full h-full object-cover object-center"
        style={{
          opacity: fading ? 0 : 1,
          transition: "opacity 800ms ease-in-out",
        }}
      />

      {/* Puntos de navegación */}
      <div className="absolute bottom-6 right-6 flex items-center gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goTo(index)}
            className="w-1.5 h-1.5 rounded-full transition-opacity duration-300"
            style={{
              backgroundColor: "white",
              opacity: index === current ? 1 : 0.4,
            }}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}