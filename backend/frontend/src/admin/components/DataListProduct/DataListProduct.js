import React, { useEffect } from 'react'
import {useSelector, useDispatch } from "react-redux";
import { clearErrors, getAdminShops } from '../../../actions/productAction';
import { useAlert } from 'react-alert';
import { TableContainer, EditBtn, DeleteBtn } from '../DataListStyle';
import { getAdminProducts } from '../../../actions/productAction';
import Loader from '../../../Layout/Loader/Loader';

const DataListProduct = () => {
    const dispatch = useDispatch();
    const  { products, loading } = useSelector((state) => state.products)

    useEffect(() => {
        dispatch(getAdminProducts());
      }, [dispatch ])

  return (
    <>
      { loading ? <Loader /> : 
      (
        <TableContainer>
          <tr>
              <th>Name</th>
              <th>Stock</th>
              <th>Price</th>
              <th>Shop</th>
              <th>Action</th>
          </tr>
          {
            products && products.map((product) => (
              <tr>
                <td>{product.name}</td>
                <td>{product.Stock}</td>
                <td><strong>₹</strong>{product.price}</td>
                <td>{product.shopName.name}</td>
                <td>
                  <EditBtn />
                  <DeleteBtn />
                </td>
              </tr>
            ))
          }
        </TableContainer>
      )
      }
    </>
  )
}

export default DataListProduct