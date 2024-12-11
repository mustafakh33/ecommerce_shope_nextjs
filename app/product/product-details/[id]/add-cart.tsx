"use client";
import { Product } from "@/app/types/interfaces";
import { Button } from "@/components/ui/button";
import { addItem } from "@/app/store/cartSlice";
import React from "react";
import { useDispatch } from "react-redux";
import {  toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const AddToCart = ({ product }: {product:Product}) => {
  const dispatch = useDispatch();
  const addToCartHandler = () => {
    toast.success("Item Added to Cart");
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

