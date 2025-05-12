import React, { useState } from "react";
import { signupUser } from "../../Utility/apiRequest";
import { Link, useNavigate } from "react-router-dom";

function SignupForm() {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    role: "user",
  });
  const navigate = useNavigate();

  const userDataHandler = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const signupHandler = async (e) => {
    e.preventDefault();

    console.log("SignUp data >>>", userData);
    // Basic client-side validation
    if (userData.password !== userData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const data = await signupUser(userData);
      if (data.success) {
        navigate("/login");

        console.log("SignUp data >>>", data);
      }
    } catch (error) {
      console.log("Registration error >>>", error.message);
    }
  };

  return (
    <form onSubmit={signupHandler}>
      <div className="row">
        <div className="col-lg-12">
          <div className="form-group form-input-text">
            <label htmlFor="name">
              Name <sup>*</sup>
            </label>
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Esther Howard"
              onChange={userDataHandler}
              value={userData.name}
            />
          </div>
        </div>

        <div className="col-lg-12">
          <div className="form-group form-input-email">
            <label htmlFor="email">
              Email Address <sup>*</sup>
            </label>
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="siliconmotors@gmail.com"
              onChange={userDataHandler}
              value={userData.email}
            />
          </div>
        </div>

        <div className="col-lg-12">
          <div className="form-group form-input-email">
            <label htmlFor="phone">
              Phone Number <sup>*</sup>
            </label>
            <input
              type="tel"
              name="phone"
              className="form-control"
              placeholder="**********"
              onChange={userDataHandler}
              value={userData.phone}
              autoComplete="phone"
            />
          </div>
        </div>

        <div className="col-lg-6">
          <div className="form-group">
            <label htmlFor="password">
              Password <sup>*</sup>
            </label>
            <input
              id="password-field"
              name="password"
              type="password"
              className="form-control"
              placeholder="Password"
              onChange={userDataHandler}
              value={userData.password}
              autoComplete="new-password"
            />
          </div>
        </div>

        <div className="col-lg-6">
          <div className="form-group">
            <label htmlFor="confirmPassword">
              Confirm Password <sup>*</sup>
            </label>
            <input
              id="password-field1"
              name="confirmPassword"
              type="password"
              className="form-control"
              placeholder="Confirm Password"
              onChange={userDataHandler}
              value={userData.confirmPassword}
              autoComplete="new-password"
            />
          </div>
        </div>

        <div className="col-lg-12">
          <div className="form-group">
            <button type="submit" className="btn btn-big w-100">
              Signup
            </button>
          </div>
        </div>

        <div className="col-lg-12">
          <p className="login-text">
            Already have an account?{" "}
            <strong>
              <Link to="/login">Login Here</Link>
            </strong>
          </p>
        </div>
      </div>
    </form>
  );
}

export default SignupForm;
