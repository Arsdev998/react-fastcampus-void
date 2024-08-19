import React, { useState } from "react";
import { Button } from "./ui/button";
import { IoIosAdd, IoIosRemove } from "react-icons/io";
const ProductCard = ({ img, price, stock, title }) => {
  const [quantity, setQuantity] = useState(0);

  const addToCart = (qty) => {
    if (quantity <= 0) {
      alert("Please select quantity");
    } else {
      setQuantity(0);
      alert(`Added to cart qty ` + qty);
    }
  };

  const inCrease = () => {
    if (stock <= stock) {
      setQuantity(quantity + 1);
    }
  };

  const decrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="p-4 border rounded-md md:max-w-96 flex flex-col gap-4 bg-neutral-300">
      <div className="aspect-square w-full overflow-hidden">
        <img className="w-[300px]" src={img} alt="product" />
      </div>
      <div className="">
        <p className="text-md">{title}</p>
        <p className="text-xl font-semibold">
          Rp {price.toLocaleString("id-ID")}
        </p>
        <p className="text-muted-foreground text-sm">In stock : {stock}</p>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex justify-between items-center mb-2">
          <Button
            size="icon"
            variant="ghost"
            disabled={quantity <= 0}
            onClick={decrement}
            className={`cursor-pointer bg-red-500 rounded-full text-white ${
              stock === 0 && "pointer-events-none bg-red-300"
            }`}
          >
            <IoIosRemove />
          </Button>
          <p>{quantity}</p>
          <Button
            variant="ghost"
            size="icon"
            disabled={quantity >= stock}
            onClick={inCrease}
            className={`cursor-pointer bg-green-500 rounded-full text-white ${
              stock == 0 && "pointer-events-none bg-green-300"
            }`}
          >
            <IoIosAdd />
          </Button>
        </div>
        <Button
          disabled={!Boolean(stock)}
          onClick={() => addToCart(quantity)}
          className="bg-primary w-full"
        >
         {stock == 0 ? "Out of stock" : "Add to cart"}
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
