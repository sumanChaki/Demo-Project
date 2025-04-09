import React from 'react'
import loginBg from "../../assets/sign-up-bg.jpg";
import logo from "../../assets/logo.jpg";

function Login() {
  return (
    <section class="signup-container p-0">
      <div class="signup-left">
        <figure class="signup-left-bg">
          <img src={loginBg} alt="" />
        </figure>
        <div class="signup-left-content">
          <a href="#" class="signup-logo">
            <img src={logo} alt="" />
          </a>
          <div class="signup-left-info">
            <h1>Facilisis sed orci amet ac eque Habitasse.</h1>
            <p>
              Mollis sit parturient amet tortor sit netus commodo. Felis ornare
              in sagittis praesent et tortor lorem leo mauris.
            </p>
          </div>
        </div>
      </div>
      <div class="signup-right">
        <div class="signup-right-content">
          <div class="mobile-logo">
            <a href="#">
              <img src={logo} alt="" />
            </a>
          </div>
          <div class="heading-component-2">
            <h2>Login</h2>
            <p>Condimentum eget gravida a urna in adipiscing suspendiss</p>
          </div>
          <form>
            <div class="row">
              <div class="col-lg-12">
                <div class="form-group input-email-icon">
                  <input
                    type="email"
                    class="form-control"
                    id=""
                    placeholder="siliconmotors@gmail.com"
                  />
                </div>
              </div>

              <div class="col-lg-12">
                <div class="form-group input-password-icon">
                  <input
                    type="password"
                    class="form-control"
                    placeholder="Password"
                  />
                </div>
              </div>

              <div class="col-12">
                <div class="form-group d-flex align-items-center justify-content-between">
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="inlineCheckbox1"
                      value="option1"
                    />
                    <label class="form-check-label" for="inlineCheckbox1">
                      Remember Me
                    </label>
                  </div>
                  <a href="forget-password.php" class="forget-pass-link">
                    Forgot Password?
                  </a>
                </div>
              </div>

              <div class="col-lg-12">
                <div class="form-group">
                  <a
                    href="account-settings-test-drive.php"
                    class="btn btn-big w-100"
                  >
                    Login
                  </a>
                </div>
              </div>

              <div class="col-lg-12">
                <p class="login-text">
                  Not registered yet?{" "}
                  <strong>
                    <a href="sign-up.php">Create an Account</a>
                  </strong>
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Login
