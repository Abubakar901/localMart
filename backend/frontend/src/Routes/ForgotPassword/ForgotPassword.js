import React, { useState, useEffect } from "react";
import { FPMain, FPTop, FPForm, SubmitButton } from "./ForgotPasswordStyle";
import Loader from "../../Layout/Loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, forgotPassword } from "../../Actions/UserAction";
import { useAlert } from "react-alert";
import Metadata from "../../Layout/Metadata";

const ForgotPassword = () => {
  const dispatch = useDispatch();
  const alert = useAlert();

  const { error, message, loading } = useSelector(
    (state) => state.forgotPassword
  );

  const [email, setEmail] = useState("");

  const forgotPasswordSubmit = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("email", email);
    dispatch(forgotPassword(myForm));
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (message) {
      alert.success(message);
    }
  }, [dispatch, error, alert, message]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <FPMain>
          <Metadata title="localMart - Forgot Password" />
          <FPTop>
            <h4>Forgot Password?</h4>
          </FPTop>
          <FPForm onSubmit={forgotPasswordSubmit}>
            <label>Email:</label>
            <input
              type="email"
              placeholder="Enter Email Address"
              required
              autoComplete="off"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <SubmitButton type="submit" value="Send">
              Send Mail
            </SubmitButton>
          </FPForm>
        </FPMain>
      )}
    </>
  );
};

export default ForgotPassword;
