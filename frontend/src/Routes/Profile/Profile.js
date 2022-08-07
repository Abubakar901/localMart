import React, { useState } from "react";
import {
  MainContainer,
  ProfileTopContainer,
  LeftContainer,
  RightContainer,
  ProfileBtn,
  ProfileBottomContainer,
  ProfileMidContainer,
} from "./ProfileStyle";
import Metadata from "../../Layout/Metadata";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import UpdateProfile from "../../Components/UpdateProfile/UpdateProfile";
import ResetPassword from "../../Components/ResetPassword/ResetPassword";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 300,
  bgcolor: "background.paper",
  border: "2px solid #000",
  textAlign: "center",
  boxShadow: 24,
  backgroundColor: "#cfe2f3",
};

const Profile = ({ user }) => {
  const navigate = useNavigate();
  const [firstOpen, setFirstOpen] = useState(false);
  const [secondOpen, setSecondOpen] = useState(false);

  const handleFirstOpen = () => setFirstOpen(true);
  const handleFirstClose = () => setFirstOpen(false);

  const handleSecondOpen = () => setSecondOpen(true);
  const handleSecondClose = () => setSecondOpen(false);

  const redirectoOrders = () => {
    navigate("/orders");
  };

  return (
    <MainContainer>
      <Metadata
        title={`localMart - ${user?.firstName + " " + user?.lastName}`}
      />
      <ProfileTopContainer>
        <h4>My Profile</h4>
      </ProfileTopContainer>
      <ProfileMidContainer>
        <LeftContainer>
          <img src={user?.avatar?.url} alt="./assests/Profile.png" />
        </LeftContainer>
        <RightContainer>
          <h3>
            Username : <span>{user?.firstName + " " + user?.lastName}</span>
          </h3>
          <h4>Phone Number : {user?.phone}</h4>
          <h5>Email : {user?.email}</h5>
          <h6>Joined On: {String(user?.createdAt).substr(0, 10)}</h6>
          <ProfileBtn onClick={redirectoOrders}>My Orders</ProfileBtn>
        </RightContainer>
      </ProfileMidContainer>
      <ProfileBottomContainer>
        <LeftContainer>
          <ProfileBtn onClick={handleFirstOpen}>Edit Profile</ProfileBtn>
          <Modal
            open={firstOpen}
            onClose={handleFirstClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <UpdateProfile user={user} handleFirstClose={handleFirstClose} />
            </Box>
          </Modal>
        </LeftContainer>
        <RightContainer>
          <ProfileBtn onClick={handleSecondOpen}>Reset Password</ProfileBtn>
          <Modal
            open={secondOpen}
            onClose={handleSecondClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <ResetPassword handleSecondClose={handleSecondClose} />
            </Box>
          </Modal>
        </RightContainer>
      </ProfileBottomContainer>
    </MainContainer>
  );
};

export default Profile;
