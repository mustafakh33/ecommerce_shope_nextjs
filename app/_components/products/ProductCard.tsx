import { Product } from "@/app/types/interfaces";
import { Button } from "@/components/ui/button";
import { Heart, ShoppingBag, StarIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "@/app/store/cartSlice";

type Props = {
  product: Product;
};

const ProductCard = ({ product }: Props) => {
  const num = Math.round(product.rating.rate);
  const ratingArray = new Array(num).fill(0);

  const dispatch = useDispatch();
  
  const addToCartHandler = (product: Product) => {
    dispatch(addItem(product));
  };

  return (
    <div className="p-4  transform rounded-lg hover:scale-110 transition-all duration-300 bg-white shadow-md">
      {/* Image */}
      <div className="w-[200px] h-[150px]">
        <Image
          src={product.image}
          alt={product.title}
          width={100}
          height={100}
          className="w-[80%] h-[80%] object-contain"
        />
      </div>
      {/* category */}
      <p className="mt-5 text-xs capitalize text-gray-600">
        {product.category}
      </p>
      {/* Title */}
      <Link href={`/product/product-details/${product.id}`} legacyBehavior>
        <h1 className="text-lg cursor-pointer hover:text-blue-900 transition-all hover:underline w-60 sm:w-full sm:truncate mt-2 text-black font-semibold">
          {product.title}
        </h1>
      </Link>
      {/* Rating */}
      <div className="flex items-center">
        {ratingArray.map(() => {
          return (
            <StarIcon
              key={Math.random() * 1000}
              size={16}
              fill="yellow"
              className="text-yellow-500"
            />
          );
        })}
      </div>
      {/* pricing */}
      <div className="flex mt-2 items-center space-x-2">
        <p className="text-black text-base line-through font-semibold opacity-50">
          {`$${(product.price + 10).toFixed(2)}`}
        </p>
        <p className="text-black text-lg font-bold opacity-80">
          ${product.price}
        </p>
      </div>
      {/* Buttons */}
      <div className="mt-4 flex items-center space-x-2">
        <Button
          onClick={() => {
            addToCartHandler(product);
          }}
          size={"icon"}
        >
          <ShoppingBag size={18} />
        </Button>
        <Button size={"icon"} className="bg-red-500">
          <Heart size={18} />
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
