import React, { useState, useEffect } from "react";
import {
  MainContainer,
  TopContainer,
  BottomContainer,
  UpdateBtn,
} from "./UserDetailStyle";
import { useNavigate, useParams } from "react-router-dom";
import { useAlert } from "react-alert";
import Loader from "../../Layout/Loader/Loader";
import Metadata from "../../Layout/Metadata";
import { useSelector, useDispatch } from "react-redux";
import {
  getUserDetails,
  clearErrors,
  updateUserRole,
} from "../../Actions/UserAction";
import { UPDATE_USER_ROLE_RESET } from "../../Constants/UserConstants";

const UserDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const alert = useAlert();
  const [role, setRole] = useState();

  const { loading, error, user } = useSelector((state) => state.userDetails);

  const { error: updateError, isUpdated } = useSelector(
    (state) => state.updateProfile
  );

  const updateUserHandler = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("role", role);

    dispatch(updateUserRole(id, myForm));
  };

  useEffect(() => {
    if (user) {
      setRole(user?.role);
    }
  }, [user]);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (updateError) {
      alert.error(updateError);
      dispatch(clearErrors());
    }

    if (isUpdated) {
      alert.success("User Updated Successfully");
      navigate("/admin/users");
      dispatch({ type: UPDATE_USER_ROLE_RESET });
    }

    dispatch(getUserDetails(id));
  }, [dispatch, id, error, alert, isUpdated, updateError, navigate]);

  useEffect(() => {
    if (user) {
      setRole(user?.role);
    }
  }, [user]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <MainContainer>
          <Metadata title={`localMart - ${user?.firstName} Deatils(Admin)`} />
          <TopContainer>
            <h2>User Details</h2>
          </TopContainer>
          <BottomContainer>
            <h6>Name : {user?.firstName + " " + user?.lastName}</h6>
            <h6>Phone : {user?.phone}</h6>
            <h6>Email : {user?.email}</h6>
            <form onSubmit={updateUserHandler}>
              <label>Role : </label>
              <select value={role} onChange={(e) => setRole(e.target.value)}>
                <option value="">Choose Role</option>
                <option value="admin">Admin</option>
                <option value="seller">Seller</option>
                <option value="customer">Customer</option>
              </select>
              <UpdateBtn type="submit">Update Role</UpdateBtn>
            </form>
          </BottomContainer>
        </MainContainer>
      )}
    </>
  );
};

export default UserDetails;
