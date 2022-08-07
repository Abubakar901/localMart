import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getAdminProducts,
  deleteProduct,
} from "../../../Actions/ProductAction";
import { useAlert } from "react-alert";
import { TableContainer, DeleteBtn, AdvancedLink } from "../DataListStyle";
import Loader from "../../../Layout/Loader/Loader";
import { DELETE_PRODUCT_RESET } from "../../../Constants/ProductsConstants";

const DataListProduct = () => {
  const dispatch = useDispatch();
  const alert = useAlert();

  const { error, products, loading } = useSelector((state) => state.products);

  const { error: deleteError, isDeleted } = useSelector(
    (state) => state.deleteProduct
  );

  useEffect(() => {
    if (error) {
      return alert.error(error);
    }

    if (deleteError) {
      return alert.error(error);
    }

    if (isDeleted) {
      alert.success("Product Deleted Successfully");
      dispatch({ type: DELETE_PRODUCT_RESET });
    }
    dispatch(getAdminProducts());
  }, [dispatch, error, alert, isDeleted, deleteError]);

  const deleteProductHandler = (id) => {
    dispatch(deleteProduct(id));
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <TableContainer>
          <thead>
            <tr>
              <th>Name</th>
              <th>Stock</th>
              <th>Price</th>
              <th>Shop</th>
              <th>City</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products &&
              products.map((product) => (
                <tr key={product?._id}>
                  <td>
                    <AdvancedLink to={`/product/${product?._id}`}>
                      {product?.name}
                    </AdvancedLink>
                  </td>
                  <td>
                    <AdvancedLink to={`/product/${product?._id}`}>
                      {product?.Stock}
                    </AdvancedLink>
                  </td>
                  <td>
                    <AdvancedLink to={`/product/${product?._id}`}>
                      <strong>₹</strong>
                      {product?.price}
                    </AdvancedLink>
                  </td>
                  <td>
                    <AdvancedLink to={`/product/${product?._id}`}>
                      {product?.shopName?.name}
                    </AdvancedLink>
                  </td>
                  <td>
                    <AdvancedLink to={`/product/${product?._id}`}>
                      {product?.shopName?.city}
                    </AdvancedLink>
                  </td>
                  <td>
                    <DeleteBtn
                      onClick={() => deleteProductHandler(product?._id)}
                    />
                  </td>
                </tr>
              ))}
          </tbody>
        </TableContainer>
      )}
    </>
  );
};

export default DataListProduct;
