import React, { useState } from "react";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";

const Carousel = ({ slides, slideWidth, slideHeight }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSLide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div
      className={`max-w-[${slideWidth}px] h-[${slideHeight}px] w-full m-auto relative group`}
    >
      <div
        style={{ backgroundImage: `url(${slides[currentIndex]})` }}
        className="w-full h-full rounded-t-md bg-center bg-cover duration-1000"
      >
        <img src={slides[currentIndex]} alt="Slides" />
      </div>

      <div className="absolute inset-0 flex items-center justify-between p-3">
        <button
          onClick={prevSlide}
          className="p-1 rounded-full shadow bg-white/80 text-primary hover:bg-white hidden group-hover:block cursor-pointer"
        >
          <BsChevronLeft size={15} />
        </button>
        <button
          onClick={nextSlide}
          className="p-1 rounded-full shadow bg-white/80 text-primary hover:bg-white hidden group-hover:block cursor-pointer"
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
                currentIndex === index ? "p-1" : "bg-opacity-50"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
