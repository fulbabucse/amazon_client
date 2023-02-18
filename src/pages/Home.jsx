import React from "react";
import Hero from "../components/Hero";
import NewArrival from "../components/NewArrival";
import Popular from "../components/Popular";
import PopularSmallDevice from "../components/PopularSmallColumn";
import PopularSmallGrid from "../components/PopularSmallGrid";
import Spinner from "../components/shared/Spinner";
import {
  useGetAllProductsQuery,
  useGetBooksQuery,
} from "../features/products/productsApi";

const Home = () => {
  const { data, isLoading } = useGetAllProductsQuery();
  const { data: booksData } = useGetBooksQuery();

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="space-y-3">
      <Hero />
      <div className="hidden lg:block space-y-3">
        <Popular
          data={data}
          id={"products"}
          title="Popular products in internationally"
        />
        <Popular
          data={booksData}
          id={"books"}
          title="Top Sellers in Books for you"
        />

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
      </div>

      <div className="lg:hidden space-y-3">
        <PopularSmallDevice
          data={data}
          cardTitle="Popular Item in this Session"
        />
        <PopularSmallGrid data={data} cardTitle="Women's fashion sneakers" />

        <PopularSmallDevice
          data={data}
          cardTitle="Popular products in wireless internationally"
        />
        <PopularSmallGrid data={data} cardTitle="Discount Electronics" />
        <PopularSmallGrid data={data} cardTitle="Tablets under $100" />
        <PopularSmallGrid data={data} cardTitle="Best Seller in Electronics" />
        <PopularSmallGrid data={data} cardTitle="Popular gifts in Camera" />
        <PopularSmallGrid data={data} cardTitle="Our favorite Toys" />

        <PopularSmallDevice data={data} cardTitle="International top sellers" />
        <PopularSmallGrid data={data} cardTitle="Must have Baby products" />
        <PopularSmallDevice
          data={data}
          cardTitle="Popular products in Beauty internationally"
        />
        <PopularSmallGrid data={data} cardTitle="Girl's everyday essentials" />

        <PopularSmallDevice
          data={data}
          cardTitle="Popular products in PC internationally"
        />
        <PopularSmallDevice
          data={data}
          cardTitle="International top seller in Kitchen"
        />
      </div>

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
