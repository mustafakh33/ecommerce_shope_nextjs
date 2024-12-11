import Category from "@/app/_components/category/Category";
import Hero from "@/app/_components/Hero/Hero";
import React from "react";
import Products from "./_components/products/Products";


const HomePage = () => {
  return (
    <div className="">
      <Hero />
      <Category/>
      <Products/>
    </div>
  );
};

export default HomePage;
