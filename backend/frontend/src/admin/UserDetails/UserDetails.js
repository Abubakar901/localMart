import React, { useEffect } from "react";
import {
  MainContainer,
  TopContainer,
  BottomContainer,
} from "./UserDetailsStyle";
import { useParams } from "react-router-dom";
import { useAlert } from "react-alert";
import Loader from "../../Layout/Loader/Loader";
import Metadata from "../../Layout/Metadata";
import { useSelector, useDispatch} from 'react-redux';
import { getUserDetails, clearErrors } from "../../actions/userAction";

const UserDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const alert = useAlert();

  const { loading, error, user } = useSelector((state) => state.userDetails);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    dispatch(getUserDetails(id));
  }, [dispatch, id, error, alert]);

  console.log(user)
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <MainContainer>
            <Metadata title='localMart - User Deatils(Admin)' />
          <TopContainer>
            <h2>User Details</h2>
          </TopContainer>
          <BottomContainer>
            <h6>Name : {user?.firstName + " " + user?.lastName}</h6>
            <h6>Phone : {user?.phone}</h6>
            <h6>Email : {user?.email}</h6>
            <h6>Role : {user?.role}</h6>
            <h6>Joined Since : {user?.createdAt}</h6>
          </BottomContainer>
        </MainContainer>
      )}
    </>
  );
};

export default UserDetails;
