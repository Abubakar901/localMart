import React, { useEffect } from 'react'
import {useSelector, useDispatch } from "react-redux";
import { useAlert } from 'react-alert';
import { TableContainer, EditBtn, DeleteBtn } from '../DataListStyle';
import { getAdminProducts, deleteProduct} from '../../../actions/productAction';
import Loader from '../../../Layout/Loader/Loader';
import { DELETE_PRODUCT_RESET } from '../../../constant/keys';
import { useNavigate } from 'react-router-dom';

const DataListProduct = () => {
    const dispatch = useDispatch();
    const alert = useAlert();
    const navigate = useNavigate();

    const  { error, products, loading } = useSelector((state) => state.products)

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
        dispatch(getAdminProducts());
    }, [dispatch, error, alert, isDeleted, deleteError])

  
      const deleteProductHandler = (id) => {
        dispatch(deleteProduct(id))
      };
  

    const handleEditBtn = (id)  => {
      navigate(`/admin/user/${id}`)
    }

  return (
    <>
      { loading ? <Loader /> : 
      (
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
          {
            products && products.map((product) => (
              <tr key={product?._id}>
                <td>{product?.name}</td>
                <td>{product?.Stock}</td>
                <td><strong>₹</strong>{product?.price}</td>
                <td>{product?.shopName?.name}</td>
                <td>{product?.shopName?.city}</td>
                <td>
                  <EditBtn onClick={() => handleEditBtn(product?._id)}/>
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

export default DataListProduct