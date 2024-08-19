import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import ProductCard from "@/components/ProductCard";
import React from "react";

const productsRaw = [

  {
    title: "Iphone 15 Promax",
    price: 27000000,
    stock: 8,
    img: "https://cdnpro.eraspace.com/media/catalog/product/a/p/apple_iphone_15_pro_max_natural_titanium_1_1_2.jpg",
  },
  {
    title: "Iphone 11",
    price: 7000000,
    stock: 0,
    img: "https://cdnpro.eraspace.com/media/catalog/product/a/p/apple_iphone_11_white_new_1_1_1.jpg",
  },
  {
    title: "Iphone 14 Promax",
    price: 20000000,
    stock: 8,
    img: "https://cdnpro.eraspace.com/media/catalog/product/i/p/iphone_14_pro_deep_purple_3.jpg",
  },
];
const HomePage = () => {

  return (
    <>
      <main className="min-h-[80vh] max-w-screen-md mx-auto px-4 mt-8">
        <div className="pb-20 mx-auto  text-center flex flex-col  items-center max-w-3xl">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Become a trend-setter
          </h1>
          <p className="mt-6 text-lg max-w-prose leading-8 text-muted-foreground">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
            reprehenderit sequi, voluptatibus, laborum beatae at incidunt
          </p>
        </div>
        <div className="flex flex-wrap gap-8">
          {productsRaw.map((item) => {
            return <ProductCard key={item.title} {...item} />;
          })}
        </div>
      </main>
    </>
  );
};

export default HomePage;
