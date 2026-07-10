import { createContext, useContext, useState } from "react";

//1. create a context: createContext() is a function that creates a context object.

export const ProductContext = createContext(); // empty tank

//2. provider: a supercomponent that will provide the context to all the components that are inside it.

export const ProductProvider = ({children}) => {
    // we send a request to an API endpoint that returns all the products in the database and we store it in a state.
    // we will keep the data that we want to share with all the components inside the provider.
    var response = [
        {id: 1, productname: "Greek Yogurt Parfait", qty: 5},
        {id: 2, productname: "1l Apple Cider Vinegar", qty: 3},
        {id: 3, productname: "1kg Blueberry", qty: 8},
    ];
    const [products, setProducts] = useState(response); // we keep the data that we want to share with all the components inside the provider.

    // Method to add a product
    const addProduct = (product) => {
        setProducts((prevProducts) => [...prevProducts, product]);
    };

    // Method to remove a product
    const removeProduct = (id) => {
        setProducts((prevProducts) => prevProducts.filter((product) => product.id !== id));
    };

    // Method to fetch all products
    const fetchProducts = () => products;

    return (
        <ProductContext.Provider value={{products, setProducts, addProduct, removeProduct, fetchProducts}}>
            {children}
        </ProductContext.Provider>
    )
}

// Custom hook to use the ProductContext
export const useProducts = () => useContext(ProductContext);
