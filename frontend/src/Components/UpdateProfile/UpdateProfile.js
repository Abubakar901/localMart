import React, { useEffect, useState } from "react";
import {
  ModalHeading,
  UpdateProfileForm,
  SidebySide,
  UpdateLoadin,
} from "../CommonStyling";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, updateProfile, loadUser } from "../../Actions/UserAction";
import { useAlert } from "react-alert";
import { UPDATE_PROFILE_RESET } from "../../Constants/UserConstants";
import Metadata from "../../Layout/Metadata";

const UpdateProfile = ({ user, handleFirstClose }) => {
  const dispatch = useDispatch();
  const alert = useAlert();

  const { error, isUpdated, loading } = useSelector(
    (state) => state.updateProfile
  );

  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [avatar, setAvatar] = useState("");
  const [avatarPreview, setAvatarPreview] = useState("./assests/Profile.png");

  const updateProfileSubmit = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("firstName", fName);
    myForm.set("lastName", lName);
    myForm.set("phone", phoneNumber);
    myForm.set("email", emailAddress);
    myForm.set("avatar", avatar);
    dispatch(updateProfile(myForm));
  };

  const updateProfileDataChange = (e) => {
    const reader = new FileReader();

    reader.onload = () => {
      if (reader.readyState === 2) {
        setAvatarPreview(reader.result);
        setAvatar(reader.result);
      }
    };

    reader.readAsDataURL(e.target.files[0]);
  };

  useEffect(() => {
    if (user) {
      setFName(user.firstName);
      setLName(user.lastName);
      setPhoneNumber(user.phone);
      setEmailAddress(user.email);
      setAvatarPreview(user.avatar.url);
    }

    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (isUpdated) {
      alert.success("Profile Updated Successfully");
      dispatch(loadUser());

      dispatch({
        type: UPDATE_PROFILE_RESET,
      });

      handleFirstClose();
    }
  }, [dispatch, error, alert, user, isUpdated, handleFirstClose]);

  return (
    <>
      {loading ? (
        <UpdateLoadin>
          <h5>Updating Profile...</h5>
        </UpdateLoadin>
      ) : (
        <>
          <ModalHeading>Update Profile</ModalHeading>
          <Metadata title="localMart - Update Profile" />
          <UpdateProfileForm
            encType="multipart/form-data"
            onSubmit={updateProfileSubmit}
          >
            <label>First Name</label>
            <input
              type="text"
              placeholder="First Name"
              required
              name="fName"
              value={fName}
              onChange={(e) => setFName(e.target.value)}
            />

            <label>Last Name</label>
            <input
              type="text"
              placeholder="Last Name"
              required
              name="lName"
              value={lName}
              onChange={(e) => setLName(e.target.value)}
            />

            <label>Phone Number</label>
            <input
              type="text"
              placeholder="Enter Phone Number"
              required
              name="phoneNumber"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />

            <label>Email</label>
            <input
              type="email"
              placeholder="Email"
              required
              name="emailAddress"
              value={emailAddress}
              onChange={(e) => setEmailAddress(e.target.value)}
            />

            <label>Avatar:</label>
            <SidebySide>
              <img src={avatarPreview} alt="Avatar Preview" />
              <input
                type="file"
                name="avatar"
                accept="image/*"
                onChange={updateProfileDataChange}
              />
            </SidebySide>

            <button type="submit" value="Update">
              Update Profile
            </button>
          </UpdateProfileForm>
        </>
      )}
    </>
  );
};

export default UpdateProfile;
