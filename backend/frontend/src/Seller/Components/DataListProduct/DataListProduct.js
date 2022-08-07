import React, { useEffect } from "react";
import {
  TableContainer,
  EditBtn,
  DeleteBtn,
  AdvancedLink,
} from "../DataListStyle";
import { useSelector, useDispatch } from "react-redux";
import {
  getSellerProducts,
  deleteProduct,
  clearErrors,
} from "../../../Actions/ProductAction";
import { DELETE_PRODUCT_RESET } from "../../../Constants/ProductsConstants";
import { useAlert } from "react-alert";
import Loader from "../../../Layout/Loader/Loader";
import { useNavigate } from "react-router-dom";

const DataListProduct = () => {
  const dispatch = useDispatch();
  const alert = useAlert();
  const navigate = useNavigate();

  const { error, products, loading } = useSelector((state) => state.products);

  const { error: deleteError, isDeleted } = useSelector(
    (state) => state.deleteProduct
  );

  const redirectToEditProduct = (id) => {
    navigate(`/seller/product/${id}`);
  };

  const deleteProductHandler = (id) => {
    dispatch(deleteProduct(id));
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors);
    }

    if (deleteError) {
      alert.error(error);
      dispatch(clearErrors);
    }

    if (isDeleted) {
      alert.success("Product Deleted Successfully");
      dispatch({ type: DELETE_PRODUCT_RESET });
    }

    dispatch(getSellerProducts());
  }, [dispatch, error, alert, isDeleted, deleteError]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <TableContainer>
          <thead>
            <tr>
              <th>Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Stock</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products &&
              products.map((product) => (
                <tr key={product._id}>
                  <td>
                    <AdvancedLink to={`/product/${product?._id}`}>
                      {product?.name}
                    </AdvancedLink>
                  </td>
                  <td>
                    <AdvancedLink to={`/product/${product?._id}`}>
                      {product?.category}
                    </AdvancedLink>
                  </td>
                  <td>
                    <AdvancedLink to={`/product/${product?._id}`}>
                      {product?.price}
                    </AdvancedLink>
                  </td>
                  <td>
                    <AdvancedLink to={`/product/${product?._id}`}>
                      {product?.Stock}
                    </AdvancedLink>
                  </td>

                  <td>
                    <EditBtn
                      onClick={() => redirectToEditProduct(product?._id)}
                    />
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
