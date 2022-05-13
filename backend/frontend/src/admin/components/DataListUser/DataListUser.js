import React, { useEffect } from 'react'
import {useSelector, useDispatch } from "react-redux";
import { TableContainer, EditBtn, DeleteBtn } from '../DataListStyle';
import { getAdminUsers, clearErrors } from '../../../actions/userAction';
import { useAlert } from "react-alert";
import Loader from '../../../Layout/Loader/Loader';

const DataListUser = () => {
    const dispatch = useDispatch();
    const alert = useAlert();

    const { loading, error, users } = useSelector((state) => state.users)
    
    useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
      }
        dispatch(getAdminUsers());
      }, [dispatch, error, alert])
      
  return (
    <>
    {
      loading ? <Loader /> :
      (
        <TableContainer>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
          {
            users && users.map((user) => (
              <tr key={user?._id}>
                <td>{user?.firstName}</td>
                <td>{user?.lastName}</td>
                <td>{user?.email}</td>
                <td>{user?.role}</td>
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

export default DataListUser