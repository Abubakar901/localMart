import React, { useEffect } from 'react'
import {useSelector, useDispatch } from "react-redux";
import { TableContainer, EditBtn, DeleteBtn, AdvancedLink } from '../DataListStyle';
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
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
          {
            users && users.map((user) => (
              <tr key={user?._id}>
                <td>
                  <AdvancedLink to={`/admin/user/${user?._id}`}>
                    {user?.firstName}  {user?.lastName}
                  </AdvancedLink>
                </td>
                <td>
                  <AdvancedLink to={`/admin/user/${user?._id}`}>
                    {user?.email}
                  </AdvancedLink>
                </td>
                <td>
                  <AdvancedLink to={`/admin/user/${user?._id}`}>
                    {user?.role}
                  </AdvancedLink>
                </td>
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