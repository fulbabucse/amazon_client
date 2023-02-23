import React, { useEffect, useState } from "react";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import HeroProducts from "./HeroProducts";
import NewArrival from "./NewArrival";

const Hero = () => {
  const slides = [
    {
      id: 1,
      heading: "iPhone 14",
      image:
        "https://www.apple.com/newsroom/images/product/iphone/standard/Apple-iPhone-14-iPhone-14-Plus-hero-220907_Full-Bleed-Image.jpg.large.jpg",
    },
    {
      id: 2,
      heading: "Laptops",
      image:
        "https://venturebeat.com/wp-content/uploads/2021/06/HP-Pavilion-Aero-13-Laptop-PC-hero-image-of-all-four-colors.jpg?w=1200&strip=all",
    },
    {
      id: 3,
      heading: "women's Dresses",
      image:
        "https://img.freepik.com/free-photo/fashionable-woman-brown-coat-beige-hat-posing_273443-3774.jpg?w=740&t=st=1676914922~exp=1676915522~hmac=4c1228142e902219ea58e2b10116f5dd41deaed2e41e6c5d10bd6d1f82808925",
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

  useEffect(() => {
    const startSlide = setInterval(nextSlide, 10000);
    return () => clearInterval(startSlide);
  }, []);

  return (
    <div>
      <div className="hidden lg:block">
        <div className="relative">
          <div className="min-h-[105vh] w-full relative group">
            <div
              style={{
                backgroundImage: `linear-gradient(to bottom, rgba(245, 246, 252, 0), rgba(245, 246, 252, 0), rgba(243, 245, 242, 1)), url(${slides[currentIndex].image})`,
              }}
              className="w-full min-h-[100vh] lg:rounded-md bg-center bg-cover duration-1000"
            >
              <div className="space-y-6 px-6 pt-28 text-[#C9563C] ml-16">
                <h1 className="text-4xl uppercase font-playfair font-black">
                  {slides[currentIndex].heading}
                </h1>
                <button className="bg-[#C9563C] hover:bg-opacity-90 text-white font-medium font-radio-canada text-sm py-2 px-4 rounded-full focus:outline-none focus:shadow-outline">
                  Shop Now
                </button>
              </div>
            </div>

            <button
              onClick={prevSlide}
              className="hidden group-hover:block absolute top-0 -translate-x-0 left-0 rounded-md p-2 bg-transparent text-[#C9563C] h-[41.5vh] cursor-pointer focus:border-2 focus:border-[#C9563C]"
            >
              <BsChevronLeft size={50} />
            </button>
            <div>
              <button
                onClick={nextSlide}
                className="hidden group-hover:block absolute top-0 -translate-x-0 right-0 rounded-md p-2 bg-transparent text-[#C9563C] h-[41.5vh] cursor-pointer focus:border-2 focus:border-[#C9563C]"
              >
                <BsChevronRight size={50} />
              </button>
            </div>
          </div>
          <div className="absolute bottom-0">
            <NewArrival />
          </div>
        </div>
      </div>
      <div className="lg:hidden overflow-hidden">
        <div className="relative">
          <div className="w-full min-h-[350px] relative group">
            <div
              style={{
                backgroundImage: `linear-gradient(to bottom, rgba(245, 246, 252, 0), rgba(245, 246, 252, 0), rgba(243, 245, 242, 1)), url(${slides[currentIndex].image})`,
              }}
              className="w-full min-h-[350px] bg-center bg-cover duration-1000"
            >
              <div className="space-y-2 px-6 text-[#C9563C] ml-16 pt-4">
                <h1 className="text-xl uppercase font-playfair font-black">
                  {slides[currentIndex].heading}
                </h1>
                <button className="bg-[#C9563C] hover:bg-opacity-90 text-white font-medium font-radio-canada text-sm py-2 px-4 rounded-full focus:outline-none focus:shadow-outline">
                  Shop Now
                </button>
              </div>
            </div>

            <button
              onClick={prevSlide}
              className="hidden group-hover:block absolute top-4 -translate-x-0 left-0 rounded-md p-1 bg-transparent text-[#C9563C] h-[100px] cursor-pointer focus:border-2 focus:border-[#C9563C]"
            >
              <BsChevronLeft size={25} />
            </button>
            <div>
              <button
                onClick={nextSlide}
                className="hidden group-hover:block absolute top-4 -translate-x-0 right-0 rounded-md p-1 bg-transparent text-[#C9563C] h-[100px] cursor-pointer focus:border-2 focus:border-[#C9563C]"
              >
                <BsChevronRight size={25} />
              </button>
            </div>
          </div>
          <div className="absolute bottom-0 overflow-x-auto">
            <HeroProducts />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
