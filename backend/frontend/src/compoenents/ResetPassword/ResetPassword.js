import React, { useEffect, useState } from "react";
import {
  ModalHeading,
  UpdateProfileForm,
  UpdateLoadin,
} from "../CommonStyling/UpdateProfileStyle";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, updatePassword } from "../../actions/userAction";
import { useAlert } from "react-alert";
import { UPDATE_PASSWORD_RESET } from "../../constant/keys";
import Metadata from "../../Layout/Metadata";

const ResetPassword = ({ handleSecondClose }) => {
  const dispatch = useDispatch();
  const alert = useAlert();

  const { error, isUpdated, loading } = useSelector(
    (state) => state.updateProfile
  );

  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const updatePasswordSubmit = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("oldPassword", oldPassword);
    myForm.set("newPassword", newPassword);
    myForm.set("confirmPassword", confirmPassword);

    dispatch(updatePassword(myForm));

    handleSecondClose();
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (isUpdated) {
      alert.success("Profile Updated Successfully");

      dispatch({
        type: UPDATE_PASSWORD_RESET,
      });
    }
  }, [dispatch, error, alert, isUpdated]);

  return (
    <>
      {loading ? (
        <UpdateLoadin>
          <h5>Updating Password...</h5>
        </UpdateLoadin>
      ) : (
        <>
          <ModalHeading>Update Profile</ModalHeading>
          <Metadata title="localMart - Update Password" />
          <UpdateProfileForm
            encType="multipart/form-data"
            onSubmit={updatePasswordSubmit}
          >
            <label>Old Password</label>
            <input
              type="password"
              placeholder="Old Password"
              required
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
            />

            <label>New Password</label>
            <input
              type="password"
              placeholder="New Password"
              required
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />

            <label>Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm Password"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />

            <button type="submit" value="Update">
              Update Password
            </button>
          </UpdateProfileForm>
        </>
      )}
    </>
  );
};

export default ResetPassword;
