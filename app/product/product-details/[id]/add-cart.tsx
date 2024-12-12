"use client";
import { Product } from "@/app/types/interfaces";
import { Button } from "@/components/ui/button";
import { addItem } from "@/app/store/cartSlice";
import React from "react";
import { useDispatch } from "react-redux";



const AddToCart = ({ product }: {product:Product}) => {
  const dispatch = useDispatch();
  const addToCartHandler = () => {
    dispatch(addItem(product));
  };
  return (
    <Button
      onClick={() => {
        addToCartHandler();
      }}
      className="mt-6"
    >
      Add to Cart
    </Button>
  );
};

export default AddToCart;

