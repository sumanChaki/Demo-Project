import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { loginUser } from '../../Utility/apiRequest';
import { setLogin } from '../Redux/Auth/AuthReducer';

function LoginForm() {
  const dispatch = useDispatch();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const loginFormHandler = async (e) => {
    e.preventDefault();

    try {
      const data = await loginUser(username, password);
      dispatch(setLogin({user: data, token: data.token}))
      console.log("Loged in data >>>", data);
    } catch (error) {
      console.log("Login error >>>", error);
      
    }

  }



  return (
    <form onSubmit={loginFormHandler}>
      <div className="row">
        <div className="col-lg-12">
          <div className="form-group input-email-icon">
            <input
              type="email"
              className="form-control"
              id=""
              placeholder="siliconmotors@gmail.com"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
        </div>

        <div className="col-lg-12">
          <div className="form-group input-password-icon">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>

        <div className="col-12">
          <div className="form-group d-flex align-items-center justify-content-between">
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="checkbox"
                id="inlineCheckbox1"
                value="option1"
              />
              <label className="form-check-label" for="inlineCheckbox1">
                Remember Me
              </label>
            </div>
            <a href="forget-password.php" className="forget-pass-link">
              Forgot Password?
            </a>
          </div>
        </div>

        <div className="col-lg-12">
          <div className="form-group">
            <a href="account-settings-test-drive.php" className="btn btn-big w-100">
              Login
            </a>
          </div>
        </div>

        <div className="col-lg-12">
          <p className="login-text">
            Not registered yet?{" "}
            <strong>
              <a href="sign-up.php">Create an Account</a>
            </strong>
          </p>
        </div>
      </div>
    </form>
  );
}

export default LoginForm