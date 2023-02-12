import React, { useState } from "react";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

const Hero = () => {
  const slides = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1661956602868-6ae368943878?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1661956600684-97d3a4320e45?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1676136645846-f8625f6da26b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80",
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1676107779594-7a23bd99e07c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    },
  ];

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
    <div className="py-6 grid grid-cols-1 lg:grid-cols-2 gap-4 lg:px-20">
      <div className="max-w-[640px] h-[480px] w-full m-auto relative group">
        <div
          style={{ backgroundImage: `url(${slides[currentIndex].image})` }}
          className="w-full h-full rounded-md bg-center bg-cover duration-1000"
        ></div>

        <button
          onClick={prevSlide}
          className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[50%] left-5 text-2xl rounded-full p-2 bg-primary text-white cursor-pointer"
        >
          <BsChevronLeft size={20} />
        </button>
        <button
          onClick={nextSlide}
          className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[50%] right-5 text-2xl rounded-full p-2 bg-primary text-white cursor-pointer"
        >
          <BsChevronRight size={20} />
        </button>
        <div className="flex justify-center">
          <div className="absolute bottom-2 flex justify-center items-center py-2">
            {slides?.map((_, index) => (
              <button
                onClick={() => goToSLide(index)}
                className={`${
                  currentIndex === index ? "text-primary" : "text-white"
                }`}
                key={index}
              >
                <RxDotFilled size={30} />
              </button>
            ))}
          </div>
        </div>
      </div>
      <div>
        <h1>Another</h1>
      </div>
    </div>
  );
};

export default Hero;
