import ProductCard from "@/components/ProductCard";
import { axiosIstance } from "@/lib/axios";
import { useEffect, useState } from "react";

const HomePage = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const fetchProducts = async () => {
    setLoading(true);
    try {
      const response = await axiosIstance.get("/products");
      setData(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  // FETCH PRDUCTS DATA ONE, WHEN HOME PAGE MOUNT
  useEffect(() => {
    fetchProducts();
  }, []);

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
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="flex flex-wrap gap-8">
            {data.map((item) => {
              return <ProductCard key={item.title} {...item} />;
            })}
          </div>
        )}
      </main>
    </>
  );
};

export default HomePage;
