import { createContext, useContext, useState } from 'react';

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([
    { id: 1, productname: 'Greek Yogurt Parfait', qty: 5 },
    { id: 2, productname: '1l Apple Cider Vinegar', qty: 3 },
    { id: 3, productname: '1kg Blueberry', qty: 8 },
  ]);

  // a method that adds a new product to the products state.
  const addProduct = (product) => {
    setProducts((prevProducts) => [...prevProducts, product]);
  };
// method that remove 
  const removeProduct = (id) => {
    setProducts((prevProducts) => prevProducts.filter((product) => product.id !== id));
  };

  const fetchProducts = () => products; // a method fetching all products.

  return (
    <ProductContext.Provider value={{ products, addProduct, removeProduct, fetchProducts }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => useContext(ProductContext);
