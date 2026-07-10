import { useProducts } from "../context/ProductContext";

const Products = () => {
  const { products, removeProduct, fetchProducts } = useProducts();

  const handleDelete = (id) => {
    removeProduct(id);
  };

  const allProducts = fetchProducts();

  return (
    <div className="row products text-center">
      <div className="col-md-6 offset-md-3">
        <h3>Products Inventory </h3>
      </div>
      <div className="col-md-8 offset-md-2">
        <table className="table table-light">
          <thead>
            <tr>
              <th>S/N</th>
              <th>Product Name</th>
              <th>Quantity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {allProducts &&
              allProducts.length > 0 &&
              allProducts.map((product, index) => {
                return (
                  <tr key={product.id}>
                    <td>{index + 1}</td>
                    <td>{product.productname} </td>
                    <td>{product.qty}</td>
                    <td>
                      <button className="btn btn-danger btn-sm" onClick={() => handleDelete(product.id)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Products;
                    