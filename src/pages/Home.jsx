import React from "react";
import Hero from "../components/Hero";
import NewArrival from "../components/NewArrival";
import Popular from "../components/Popular";
import { useGetProductsQuery } from "../features/products/productsApi";

const Home = () => {
  const { data } = useGetProductsQuery();

  return (
    <div className="space-y-5">
      <Hero />
      <Popular
        data={data}
        id={"products"}
        title="Popular products in internationally"
      />
      <Popular data={data} id={"books"} title="Top Sellers in Books for you" />

      <NewArrival />
      <Popular
        data={data}
        id={"wireless"}
        title="Popular products in Wireless internationally"
      />
      <Popular
        data={data}
        id={"beauty"}
        title="Popular products in Beauty internationally"
      />
      <NewArrival />
      <Popular
        data={data}
        id={"home_improvement"}
        title="International top sellers in Home Improvement"
      />
      <Popular
        data={data}
        id={"international_top_seller"}
        title="International top sellers"
      />
      <NewArrival />
      <Popular
        data={data}
        id={"top_toys"}
        title="Top Sellers in Toys for you"
      />

      <a
        href="#"
        className="h-12 text-white w-full bg-primary hover:bg-opacity-95 transition-opacity duration-300 ease-in-out flex justify-center items-center cursor-pointer text-sm"
      >
        Back to Top
      </a>
    </div>
  );
};

export default Home;
