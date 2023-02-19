import React, { useEffect, useState } from "react";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import watch from "../assets/img/apple-watch.png";
import laptop from "../assets/img/laptop.png";
import box from "../assets/img/box.png";
import headphone from "../assets/img/headphone.png";

const Hero = () => {
  const slides = [
    {
      id: 1,
      sub_heading: "Super power",
      heading: "The best phone in the world",
      body: "Now that's big. iPhone 14 Plus has a supersized Super Retina XDR display. ... OLED technology delivers incredible contrast for bright whites and",
      image:
        "https://www.apple.com/newsroom/images/product/iphone/standard/Apple-iPhone-14-iPhone-14-Plus-hero-220907_Full-Bleed-Image.jpg.large.jpg",
    },
    {
      id: 2,
      sub_heading: "Super power 2",
      heading: "The best phone in the world",
      body: "Now that's big. iPhone 14 Plus has a supersized Super Retina XDR display. ... OLED technology delivers incredible contrast for bright whites and",
      image:
        "https://img.freepik.com/free-photo/beautiful-curly-ginger-woman-with-red-lips-posing-outdoor-warm-spring-day_273443-331.jpg?w=740&t=st=1676182138~exp=1676182738~hmac=95be9b2f7bc7c54dd790087e872b185a14947b68e4ccc0eaa3712da6ec82e847",
    },
    {
      id: 3,
      sub_heading: "Super power 3",
      heading: "The best phone in the world",
      body: "Now that's big. iPhone 14 Plus has a supersized Super Retina XDR display. ... OLED technology delivers incredible contrast for bright whites and",
      image:
        "https://images.unsplash.com/photo-1676136645846-f8625f6da26b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80",
    },
    {
      id: 4,
      sub_heading: "Super power 4",
      heading: "The best phone in the world",
      body: "Now that's big. iPhone 14 Plus has a supersized Super Retina XDR display. ... OLED technology delivers incredible contrast for bright whites and",
      image:
        "https://images.unsplash.com/photo-1676107779594-7a23bd99e07c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    },
  ];

  const products = [
    {
      id: 1,
      sub_heading: "Super Apple Watch",
      heading: "Apple Watch and get credit",
      body: "Get credit toward a new Apple Watch. With Apple Trade In, just give us your eligible Apple Watch and get credit for a new one",
      image: watch,
    },
    {
      id: 2,
      sub_heading: "Best Sale",
      heading: "Shop latest Laptops",
      body: "Shop latest Laptops at the best price in BD in 2023",
      image: laptop,
    },
    {
      id: 3,
      sub_heading: "Super power 3",
      heading: "The best phone in the world",
      body: "Now that's big. iPhone 14 Plus has a supersized Super Retina XDR display. ... OLED technology delivers incredible contrast for bright whites and",
      image: box,
    },
    {
      id: 4,
      sub_heading: "Super power 4",
      heading: "The best phone in the world",
      body: "Now that's big. iPhone 14 Plus has a supersized Super Retina XDR display. ... OLED technology delivers incredible contrast for bright whites and",
      image: headphone,
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

  useEffect(() => {
    const startSlide = setInterval(nextSlide, 10000);
    return () => clearInterval(startSlide);
  }, []);

  return (
    <div className="lg:py-6 grid grid-cols-1 lg:grid-cols-2 gap-4 lg:px-4">
      <div className="max-w-[640px] h-[380px] w-full m-auto relative group">
        <div
          style={{ backgroundImage: `url(${slides[currentIndex].image})` }}
          className="w-full h-full lg:rounded-md bg-center bg-cover duration-1000"
        >
          <div className="space-y-6 px-6 py-10 text-primary text-center">
            {slides[currentIndex].sub_heading}
            <h1 className="text-3xl uppercase font-bold">
              {slides[currentIndex].heading}
            </h1>
            <p>{slides[currentIndex].body}</p>
            <button className="bg-primary hover:bg-secondary text-white font-medium font-radio-canada text-sm py-2 px-4 rounded-full focus:outline-none focus:shadow-outline">
              Shop Now
            </button>
          </div>
        </div>

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
        <div className="absolute bottom-3 right-0 left-0 hidden group-hover:block">
          <div className="flex items-center justify-center gap-1">
            {slides?.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSLide(index)}
                className={`transition-all w-2 h-2 bg-[#C9563C] rounded-full ${
                  currentIndex === index ? "p-1" : "bg-opacity-50"
                }`}
              ></button>
            ))}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-4">
        {products?.map((item) => (
          <div
            key={item.id}
            className="lg:rounded-md bg-white flex justify-between items-center"
          >
            <div className="px-3 py-6 space-y-2">
              <h4 className="text-red-500 text-xs">{item.sub_heading}</h4>
              <h1 className="text-primary text-lg font-bold leading-5">
                {item.heading}
              </h1>
              <p className="text-xs">{item.body.slice(0, 20)}</p>
            </div>
            <div className="w-32 h-1/2 pr-2">
              <img src={item.image} className="w-full h-full" alt="" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
