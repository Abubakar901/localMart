import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getAdminUsers,
  clearErrors,
  deleteUser,
} from "../../../Actions/UserAction";
import { useAlert } from "react-alert";
import {
  TableContainer,
  EditBtn,
  DeleteBtn,
  AdvancedLink,
} from "../DataListStyle";
import Loader from "../../../Layout/Loader/Loader";
import { DELETE_USER_RESET } from "../../../Constants/UserConstants";
import { useNavigate } from "react-router-dom";

const DataListUser = () => {
  const dispatch = useDispatch();
  const alert = useAlert();
  const Navigate = useNavigate();

  const { loading, error, users } = useSelector((state) => state.users);

  const { error: deleteError, isDeleted } = useSelector(
    (state) => state.updateProfile
  );
  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (deleteError) {
      alert.error(deleteError);
      dispatch(clearErrors());
    }

    if (isDeleted) {
      alert.success("User Deleted Successfully.");
      dispatch({ type: DELETE_USER_RESET });
    }

    dispatch(getAdminUsers());
  }, [dispatch, error, alert, isDeleted, deleteError]);

  const handleDeleteUser = (id) => {
    dispatch(deleteUser(id));
  };

  const handleRedirect = (id) => {
    Navigate(`/admin/user/${id}`);
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
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
            {users &&
              users.map((user) => (
                <tr key={user?._id}>
                  <td>
                    <AdvancedLink to={`/admin/user/${user?._id}`}>
                      {user?.firstName} {user?.lastName}
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
                    <EditBtn onClick={() => handleRedirect(user?._id)} />
                    <DeleteBtn onClick={() => handleDeleteUser(user?._id)} />
                  </td>
                </tr>
              ))}
          </tbody>
        </TableContainer>
      )}
    </>
  );
};

export default DataListUser;
