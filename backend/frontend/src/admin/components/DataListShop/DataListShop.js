import React, { useEffect } from 'react'
import {useSelector, useDispatch } from "react-redux";
import { clearErrors, getAdminShops } from '../../../actions/shopActions';
import { useAlert } from 'react-alert';
import { TableContainer, EditBtn, DeleteBtn } from '../DataListStyle';
import Loader from '../../../Layout/Loader/Loader';


const DataListShop = () => {
    const dispatch = useDispatch();
    const alert = useAlert();

    const { error, shops, loading } = useSelector((state) => state.shops)
    
    useEffect(() => {
        if(error) {
          return alert.error(error);
        }
        dispatch(getAdminShops());
      }, [dispatch, error, alert])

  return (
    <>
      {
        loading ? <Loader /> :
        (
          <TableContainer>
            <tr>
              <th>Name</th>
              <th>City</th>
              <th>State</th>
              <th>Contact</th>
              <th>Action</th>
            </tr>
            {
              shops && shops.map((shop) => (
                <tr>
                  <td>{shop.name}</td>
                  <td>{shop.city}</td>
                  <td>{shop.state}</td>
                  <td>{shop.contact}</td>
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

export default DataListShop