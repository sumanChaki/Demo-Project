import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { loginUser } from '../../Utility/apiRequest';
import { setLogin } from '../Redux/Auth/AuthReducer';
import { Link, useNavigate } from 'react-router-dom';

function LoginForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginFormHandler = async (e) => {
    e.preventDefault();

    try {
      const data = await loginUser({ email, password });
      dispatch(
        setLogin({
          user: {
            id: data.user._id,
            token: data.token,
            name: data.user.name,
            email: data.user.email,
          },
        })
      );
      console.log("Loged in data >>>", data);
      navigate("/")
    } catch (error) {
      console.log("Login error >>>", error);
      navigate("/signup");
      
    }

  }



  return (
    <form onSubmit={loginFormHandler}>
      <div className="row">
        <div className="col-lg-12">
          <div className="form-group input-email-icon">
            <input
              type="text"
              className="form-control"
              id=""
              placeholder="siliconmotors@gmail.com"
              onChange={(e) => setEmail(e.target.value)}
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
            <button type="submit" className="btn btn-big w-100">
              Login
            </button>
          </div>
        </div>

        <div className="col-lg-12">
          <p className="login-text">
            Not registered yet?{" "}
            <strong>
              <Link to="/signup">Create an Account</Link>
            </strong>
          </p>
        </div>
      </div>
    </form>
  );
}

export default LoginForm