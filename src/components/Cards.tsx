import React, { useState } from "react";
import Card from "./Card";
interface CardItem {
  id: number;
  title: string;
  image: string;
}

interface CardCarouselProps {
  items: CardItem[];
}

const CardCarousel: React.FC<CardCarouselProps> = ({ items }) => {
  const [current, setCurrent] = useState(0);

  const prevCard = () => {
    setCurrent((prev) => (prev - 1 + items.length) % items.length);
  };

  const nextCard = () => {
    setCurrent((prev) => (prev + 1) % items.length);
  };

  return (
    <div className="relative flex justify-center items-center w-full h-[450px] overflow-hidden">
      {items.map((item, index) => {
        let offset = index - current;
        if (offset > Math.floor(items.length / 2)) offset -= items.length;
        if (offset < -Math.floor(items.length / 2)) offset += items.length;

        if (Math.abs(offset) > 2) return null;

        const scale = 1 - Math.abs(offset) * 0.1;
        const translateX = offset * 120; 
        const zIndex = 10 - Math.abs(offset);

        return (
          <div
            key={item.id}
            className="absolute transition-all duration-500 ease-in-out"
            style={{
              transform: `translateX(${translateX}px) scale(${scale})`,
              zIndex,
            }}
          >
            <Card />
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