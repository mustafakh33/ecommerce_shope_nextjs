export const getAllCategory = async () => {
      const res = await fetch('https://fakestoreapi.com/products/categories');
      const CategoryRes = await res.json();
      return CategoryRes;
  };

  export const getAllProduct = async () => {
      const res = await fetch('https://fakestoreapi.com/products');
      const ProductsRes = await res.json();
      return ProductsRes;
  };

  export const getSingleProduct = async (id:string) => {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    const singleProductRes = await res.json();
    return singleProductRes;
};
export const getProductByCategory = async (category:string) => {
    const res = await fetch(`https://fakestoreapi.com/products/category/${category}`);
    const ProductByCategoryRes = await res.json();
    return ProductByCategoryRes;
};