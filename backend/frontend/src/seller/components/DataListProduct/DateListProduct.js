import React, { useEffect } from 'react'
import {useSelector, useDispatch } from "react-redux";
import { useAlert } from 'react-alert';
import { TableContainer, EditBtn, DeleteBtn } from '../DataListStyle';
import Loader from '../../../Layout/Loader/Loader';
import { getSellerProducts } from '../../../actions/productAction';


const DataListShop = () => {
    const dispatch = useDispatch();
    const alert = useAlert();

    const { error, products, loading } = useSelector((state) => state.products)
    
    useEffect(() => {
        if(error) {
          return alert.error(error);
        }
        dispatch(getSellerProducts());
      }, [dispatch, error, alert])

      console.log(products)
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
                    <DeleteBtn />
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