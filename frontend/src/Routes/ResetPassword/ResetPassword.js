import React, { useEffect, useState } from "react";
import { RPMain, RPTop, RPForm, RPButton } from "./ResetPasswordStyle";
import Loader from "../../Layout/Loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, resetPassword } from "../../Actions/UserAction";
import Metadata from "../../Layout/Metadata";
import { useAlert } from "react-alert";
import { useNavigate, useParams } from "react-router-dom";

const ResetPassword = () => {
  const dispatch = useDispatch();
  const alert = useAlert();
  const navigate = useNavigate();
  const { token } = useParams();

  const { error, success, loading } = useSelector(
    (state) => state.forgotPassword
  );

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const resetPasswordSubmit = (e) => {
    e.preventDefault();
    console.log("click");

    const myForm = new FormData();

    myForm.set("password", password);
    myForm.set("confirmPassword", confirmPassword);

    dispatch(resetPassword(token, myForm));
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (success) {
      alert.success("Password Updated Successfully");
      navigate("/login");
    }
  }, [dispatch, error, alert, navigate, success]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <RPMain>
          <Metadata title="localMart - Reset Password" />
          <RPTop>
            <h4>Reset Password</h4>
          </RPTop>
          <RPForm onSubmit={resetPasswordSubmit}>
            <label>Password</label>
            <input
              type="password"
              placeholder="New Password"
              required
              autoComplete="off"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <label>Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm Password"
              required
              value={confirmPassword}
              autoComplete="off"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />

            <RPButton type="submit" value="Update">
              Reset Password
            </RPButton>
          </RPForm>
        </RPMain>
      )}
    </>
  );
};

export default ResetPassword;
