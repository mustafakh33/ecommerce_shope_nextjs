import { getAllCategory } from "@/app/Api/api";
import React from "react";

const Category = async () => {
  const categories: string[] = await getAllCategory();

  return (
    <div className="pt-16 pb-12">
      <h1 className="text-center font-bold text-2xl capitalize">
        shop by category
      </h1>
      {/* Define grid */}
      <div className="mt-12 w-4/5 mx-auto grid grid-cols-2 lg:grid-cols-3 xl:grid-col-4 gap-8">
        {categories?.length > 0 ? (
          categories.map((category) => (
            <div
              key={category}
              className="p-6 rounded-lg cursor-pointer text-center hover:scale-110 transition-all duration-300 bg-gray-200 shadow-md"
            >
              <h1 className="text-sm sm:text-base md:text-lg capitalize font-bold">
                {category}
              </h1>
            </div>
          ))
        ) : (
          <p>No categories available</p>
        )}
      </div>
    </div>
  );
};

export default Category;
