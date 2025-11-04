import React, { useRef, useState } from "react";

interface Item {
    name: string;
    image: string;
  }
  
  interface CategoriesImageProps {
    items: Item[];
  }
  
const CategoriesImage: React.FC<CategoriesImageProps> = ({ items }) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (carouselRef.current?.offsetLeft || 0));
    setScrollLeft(carouselRef.current?.scrollLeft || 0);
  };

  const handleMouseLeave = () => setIsDragging(false);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !carouselRef.current) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 2; 
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX - (carouselRef.current?.offsetLeft || 0));
    setScrollLeft(carouselRef.current?.scrollLeft || 0);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !carouselRef.current) return;
    const x = e.touches[0].pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchEnd = () => setIsDragging(false);

  return (
    <div
        ref={carouselRef}
        className="flex overflow-x-auto scroll-smooth scrollbar-hide space-x-6 px-6 cursor-grab active:cursor-grabbing items-center"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        >
        {items?.map((item, index) => (
            <div
            key={index}
            className="flex flex-shrink-0 items-end justify-star w-30 h-30 rounded-2xl shadow-md"
            style={{ backgroundImage: `url(${item?.image})`, backgroundSize: "contain" }}
            >
            <span className="text-sm font-medium ml-3 mb-3">{item?.name}</span>
            </div>
        ))}
    </div>

    
  );
};

export default CategoriesImage;
