'use client';

import { useState } from "react";

const images = [
  "https://www.91astrology.com/images/chat_banner.png",
  "https://www.91astrology.com/images/shop_now.png",
  "https://www.91astrology.com/images/chat_banner.png"
];

export default function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };


  return (
    <div className="w-full max-w-4xl mx-auto p-4 relative">
      <div className="overflow-hidden rounded-lg">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="w-full object-contain rounded-lg transition-transform duration-500"
        />
      </div>
  

      <div className="flex justify-center mt-4">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3.5 h-1.5 mx-1 cursor-pointer rounded-full ${
              index === currentIndex ? "bg-blue-500" : "bg-gray-300"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
}