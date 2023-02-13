import React, { useState } from "react";
import { useEffect } from "react";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";

const Carousel = ({
  children: slides,
  autoSlide = false,
  slideDuration = 3000,
}) => {
  const [curr, setCurr] = useState(0);

  const prevSlide = () => {
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  };

  const nextSlide = () => {
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));
  };

  const goToSLide = (slideIndex) => {
    setCurr(slideIndex);
  };

  useEffect(() => {
    if (!autoSlide) return;

    const slideInterval = setInterval(nextSlide, slideDuration);
    return () => clearInterval(slideInterval);
  }, [autoSlide, slideDuration]);

  return (
    <div className="overflow-hidden relative w-full">
      <div
        className="flex transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {slides}
      </div>
      <div className="absolute inset-0 flex items-center justify-between p-3">
        <button
          onClick={prevSlide}
          className="p-1 rounded-full shadow bg-white/80 text-primary hover:bg-white hidden group-hover:block"
        >
          <BsChevronLeft size={15} />
        </button>
        <button
          onClick={nextSlide}
          className="p-1 rounded-full shadow bg-white/80 text-primary hover:bg-white hidden group-hover:block"
        >
          <BsChevronRight size={15} />
        </button>
      </div>
      <div className="absolute bottom-3 right-0 left-0 hidden group-hover:block">
        <div className="flex items-center justify-center gap-1">
          {slides?.map((_, index) => (
            <button
              onClick={() => goToSLide(index)}
              className={`transition-all w-2 h-2 bg-[#C9563C] rounded-full ${
                curr === index ? "p-1" : "bg-opacity-50"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
