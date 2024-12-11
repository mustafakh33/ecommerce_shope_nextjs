"use client";
import { Product } from "@/app/types/interfaces";
import React, { useEffect, useState } from "react";
import ProductCard from './ProductCard';
import { Loader } from "lucide-react";
import { getAllProduct } from "@/app/Api/api";


const Products = () => {
  const [products, setProducts] = useState<Product[] | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try{
        const products:Product[] = await getAllProduct();
        setProducts(products)
      } catch (error){
        console.log(error);
      } finally {
        setLoading(false)
      }
    }
    getData()
  }, []);
  return <div className="pt-16 pb-12">
    <h1 className="text-center font-bold text-2xl">All Products</h1>
    {loading?(
      <div className="flex justify-center items-center mt-16"> 
        <Loader size={32} className="animate-spin"/>
      </div>
    ):(
      <div className="w-4/5 mx-auto mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
        {products?.map((product)=>{
          return <ProductCard key={product.id} product={product} />
        })}
      </div>
    )}
  </div>;
};

export default Products;
