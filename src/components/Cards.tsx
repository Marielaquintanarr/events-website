import React, { useState } from "react";
import Card from "./Card";
import event from "../assets/event.png";
import maluma from "../assets/maluma.jpg";
import rap from "../assets/rap.jpg";
import kpop from "../assets/kpop3.webp";
import marathon from "../assets/maraton.jpeg";

interface CardItem {
  id: number;
  title1: string;
  title2: string;
  image: string;
  date: string;
}

const cards: CardItem[] = [
  { id: 1, title1: "Alejandro", title2: "Fernandez", image: event, date: "Oct 12 2025" },
  { id: 2, title1: "Maluma", title2: "Concierto", image: maluma, date: "Mar 31 2026" },
  { id: 3, title1: "Rap", title2: "Night", image: rap, date: "Nov 08 2025" },
  { id: 4, title1: "Kpop", title2: "Concert", image: kpop, date: "Feb 15 2026" },
  { id: 5, title1: "Maratón", title2: "Zapopan", image: marathon, date: "Nov 03 2025" },
];

const CardCarousel: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const prevCard = () => {
    setCurrent((prev) => (prev - 1 + cards.length) % cards.length);
  };

  const nextCard = () => {
    setCurrent((prev) => (prev + 1) % cards.length);
  };

  return (
    <div className="relative flex justify-center items-center w-full h-[480px] overflow-hidden">
      {cards.map((item, index) => {
        // Calcula el offset entre la carta actual y el centro
        let offset = index - current;
        if (offset > Math.floor(cards.length / 2)) offset -= cards.length;
        if (offset < -Math.floor(cards.length / 2)) offset += cards.length;

        // Solo renderiza las 5 visibles (2 a la izquierda, 2 a la derecha y la del centro)
        if (Math.abs(offset) > 2) return null;

        const scale = 1 - Math.abs(offset) * 0.1; // más lejos = más pequeño
        const translateX = offset * 220; // separación horizontal
        const zIndex = 10 - Math.abs(offset);
        const opacity = 1 - Math.abs(offset) * 0.3; // más lejos = más transparente

        return (
          <div
            key={item.id}
            className="absolute transition-all duration-500 ease-in-out"
            style={{
              transform: `translateX(${translateX}px) scale(${scale})`,
              zIndex,
              opacity,
            }}
          >
            <Card item={item} />
          </div>
        );
      })}

      <button
        onClick={prevCard}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full shadow p-3 text-gray-700"
      >
        ◀
      </button>
      <button
        onClick={nextCard}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full shadow p-3 text-gray-700"
      >
        ▶
      </button>
    </div>
  );
};

export default CardCarousel;
