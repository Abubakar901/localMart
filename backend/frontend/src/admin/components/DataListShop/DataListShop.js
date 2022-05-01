import React, { useEffect } from 'react'
import {useSelector, useDispatch } from "react-redux";
import {  getAdminShops } from '../../../actions/shopActions';
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
            <thead>
              <tr>
                <th>Name</th>
                <th>City</th>
                <th>State</th>
                <th>Contact</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
            {
              shops && shops.map((shop) => (
                <tr key={shop?._id}>
                  <td>{shop?.name}</td>
                  <td>{shop?.city}</td>
                  <td>{shop?.state}</td>
                  <td>{shop?.contact}</td>
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