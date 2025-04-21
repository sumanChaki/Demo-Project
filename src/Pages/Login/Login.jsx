import React from 'react'
import loginBg from "../../assets/sign-up-bg.jpg";
import logo from "../../assets/logo.jpg";
import LoginForm from '../../Components/Auth/LoginForm';

function Login() {
  return (
    <section className="signup-container p-0">
      <div className="signup-left">
        <figure className="signup-left-bg">
          <img src={loginBg} alt="" />
        </figure>
        <div className="signup-left-content">
          <a href="#" className="signup-logo">
            <img src={logo} alt="" />
          </a>
          <div className="signup-left-info">
            <h1>Facilisis sed orci amet ac eque Habitasse.</h1>
            <p>
              Mollis sit parturient amet tortor sit netus commodo. Felis ornare
              in sagittis praesent et tortor lorem leo mauris.
            </p>
          </div>
        </div>
      </div>
      <div className="signup-right">
        <div className="signup-right-content">
          <div className="mobile-logo">
            <a href="#">
              <img src={logo} alt="" />
            </a>
          </div>
          <div className="heading-component-2">
            <h2>Login</h2>
            <p>Condimentum eget gravida a urna in adipiscing suspendiss</p>
          </div>
          <LoginForm />
        </div>
      </div>
    </section>
  );
}

export default Login
