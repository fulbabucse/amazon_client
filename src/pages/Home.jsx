import React from "react";
import Hero from "../components/Hero";
import History from "../components/History";
import NewArrival from "../components/NewArrival";
import Popular from "../components/Popular";
import PopularSmallDevice from "../components/PopularSmallColumn";
import PopularSmallGrid from "../components/PopularSmallGrid";
import SmallSpinner from "../components/shared/SmallSpinner";
import {
  useGetAllProductsQuery,
  useGetBooksQuery,
  useGetProductByDepartmentQuery,
  useGetProductsByCategoryQuery,
} from "../features/products/productsApi";
import Helmet from "helmet";

const Home = () => {
  const { data, isLoading } = useGetAllProductsQuery();
  const { data: toys } = useGetProductsByCategoryQuery("toys");
  const { data: womensShoes } = useGetProductsByCategoryQuery("womens-shoes");
  const { data: camera } = useGetProductsByCategoryQuery("camera-photo");
  const { data: computers } = useGetProductByDepartmentQuery("computers");
  const { data: electronics } = useGetProductByDepartmentQuery("electronics");
  const { data: decoration } = useGetProductByDepartmentQuery("decoration");
  const { data: cosmetics } = useGetProductByDepartmentQuery("cosmetics");
  const { data: booksData } = useGetBooksQuery();

  if (isLoading) {
    return <SmallSpinner />;
  }

  return (
    <div className="space-y-3">
      <Hero />

      <Helmet>
        <title>Cart - Shopper's Delight</title>
      </Helmet>

      {/* Large Device Home page design and development */}
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
          data={computers}
          id={"wireless"}
          title="Popular products in Wireless internationally"
        />
        <Popular
          data={cosmetics}
          id={"beauty"}
          title="Popular products in Beauty internationally"
        />
        <NewArrival />
        <Popular
          data={decoration}
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
          data={toys}
          id={"top_toys"}
          title="Top Sellers in Toys for you"
        />
      </div>

      {/* Small Device Home page design and development */}
      <div className="lg:hidden space-y-3">
        <History />

        <PopularSmallDevice
          data={data}
          cardTitle="Popular Item in this Session"
        />
        <PopularSmallGrid
          data={womensShoes}
          cardTitle="Women's fashion sneakers"
        />

        <PopularSmallDevice
          data={computers}
          cardTitle="Popular products in wireless internationally"
        />
        <PopularSmallGrid data={electronics} cardTitle="Discount Electronics" />
        <PopularSmallGrid data={data} cardTitle="Tablets under $100" />
        <PopularSmallGrid
          data={electronics}
          cardTitle="Best Seller in Electronics"
        />
        <PopularSmallGrid data={camera} cardTitle="Popular gifts in Camera" />
        <PopularSmallGrid data={toys} cardTitle="Our favorite Toys" />

        <PopularSmallDevice data={data} cardTitle="International top sellers" />
        <PopularSmallGrid data={data} cardTitle="Must have Baby products" />
        <PopularSmallDevice
          data={data}
          cardTitle="Popular products in Beauty internationally"
        />
        <PopularSmallGrid
          data={cosmetics}
          cardTitle="Girl's everyday essentials"
        />

        <PopularSmallDevice
          data={computers}
          cardTitle="Popular products in PC internationally"
        />
        <PopularSmallDevice
          data={decoration}
          cardTitle="International top seller in Kitchen"
        />
      </div>

      <a
        href="#"
        className="h-12 text-white w-full bg-[#37475A] hover:bg-opacity-95 transition-opacity duration-300 ease-in-out flex justify-center items-center cursor-pointer text-sm"
      >
        Back to Top
      </a>
    </div>
  );
};

export default Home;
