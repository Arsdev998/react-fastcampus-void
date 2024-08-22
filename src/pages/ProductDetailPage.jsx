import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { axiosIstance } from "@/lib/axios";
import React, { useEffect, useState } from "react";
import { IoIosAdd, IoIosRemove } from "react-icons/io";
import { IoHeartOutline } from "react-icons/io5";
import { useParams } from "react-router-dom";
const ProductDetailPage = () => {
  const params = useParams();
  const [quantity, setQuantity] = useState(0);
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState([]);

  const fethById = async () => {
    try {
      const response = await axiosIstance.get(`/products/${params.id}`);
      console.log(response.data);
      setProduct(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fethById();
  }, [params.id]);
  return (
    <main className="min-h-screen max-w-screen-lg mx-auto px-4 mt-8">
      <div className="grid grid-cols-2 gap-8">
        {loading ? (
          <Skeleton className="h-[582px] w-full bg-gray-200" />
        ) : (
          <img src={product.img} alt={product?.title} className="w-full" />
        )}
        <div className="flex flex-col gap-1 justify-center">
          {loading ? (
            <Skeleton className="w-[200px] h-[32px] bg-gray-200" />
          ) : (
            <h1 className="text-xl">{product?.title}</h1>
          )}
          {loading ? (
            <Skeleton className="w-[200px] h-[32px] bg-gray-200" />
          ) : (
            <h3 className="text-2xl font-bold">
              Rp {product.price?.toLocaleString("id-ID")}
            </h3>
          )}
          <p className="text-sm text-muted-foreground mt-4">{product?.description}</p>
          <div className="flex items-center gap-8 mt-6">
            <Button
              size="icon"
              variant="ghost"
              className="cursor-pointer  rounded-full"
            >
              <IoIosRemove />
            </Button>
            <p>{quantity}</p>
            <Button
              variant="ghost"
              size="icon"
              className="cursor-pointer  rounded-full "
            >
              <IoIosAdd />
            </Button>
          </div>
          <div className="flex items-center mt-8 gap-4">
            <Button className="w-full" size="lg">
              Add to cart
            </Button>
            <Button size="icon" variant="ghost">
              <IoHeartOutline className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductDetailPage;
