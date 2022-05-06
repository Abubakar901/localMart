import React, { useEffect } from 'react'
import {useSelector, useDispatch } from "react-redux";
import {  getAdminShops,  deleteShop } from '../../../actions/shopActions';
import { useAlert } from 'react-alert';
import { TableContainer, EditBtn, DeleteBtn } from '../DataListStyle';
import Loader from '../../../Layout/Loader/Loader';
import { DELETE_SHOP_RESET } from '../../../constant/keys';


const DataListShop = () => {
    const dispatch = useDispatch();
    const alert = useAlert();

    const { error, shops, loading } = useSelector((state) => state.shops)

    const {error:deleteError, isDeleted} = useSelector((state) => state.deleteShop)
    
    useEffect(() => {
        if(error) {
          return alert.error(error);
        }
        if(deleteError) {
          return alert.error(error);
        }
        if(isDeleted) {
          alert.success('Shop Deleted Successfully');
          dispatch({ type: DELETE_SHOP_RESET});
        }
        dispatch(getAdminShops());
      }, [dispatch, error, alert, isDeleted, deleteError])

    const deleteShopHandler = (id) => {
      dispatch(deleteShop(id))
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
                  <td>{shop?.category}</td>
                  <td>{shop?.city}</td>
                  <td>{shop?.state}</td>
                  <td>{shop?.contact}</td>
                  <td>
                    <EditBtn />
                    <DeleteBtn onClick={() => deleteShopHandler(shop?._id)} />
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