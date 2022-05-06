import React, { useEffect } from 'react'
import {useSelector, useDispatch } from "react-redux";
import { useAlert } from 'react-alert';
import { TableContainer, EditBtn, DeleteBtn } from '../DataListStyle';
import Loader from '../../../Layout/Loader/Loader';
import { getSellerProducts, deleteProduct } from '../../../actions/productAction';
import { DELETE_PRODUCT_RESET } from '../../../constant/keys';


const DataListShop = () => {
    const dispatch = useDispatch();
    const alert = useAlert();

    const { error, products, loading } = useSelector((state) => state.products)
    
    const {error:deleteError, isDeleted} = useSelector((state) => state.deleteProduct)

    useEffect(() => {
        if(error) {
          return alert.error(error);
        }
        
        if(deleteError) {
          return alert.error(error);
        }

        if(isDeleted) {
          alert.success('Product Deleted Successfully');
          dispatch({ type: DELETE_PRODUCT_RESET});
        }   

        dispatch(getSellerProducts());
      
      }, [dispatch, error, alert, isDeleted, deleteError])

      console.log(products)


    const deleteProductHandler = (id) => {
      dispatch(deleteProduct(id))
    };

  return (
    <>
      {
        loading ? <Loader /> :
        (
          <TableContainer>
            <thead>
              <tr>
                <th>Name</th>
                <th>Category</th>
                <th>Stock</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
            {
              products && products.map((product) => (
                <tr key={product._id}>
                  <td>{product?.name}</td>
                  <td>{product?.category}</td>
                  <td>{product?.Stock}</td>
                  <td>{product?.price}</td>
                  <td>
                    <EditBtn />
                    <DeleteBtn onClick={() => deleteProductHandler(product?._id)} />
                  </td>
                </tr>
              ))
            }
            </tbody>
          </TableContainer>
        )
      }
    </>
  )
}

export default DataListShop