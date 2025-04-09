import React from 'react'
import loginBg from "../../assets/sign-up-bg.jpg";
import logo from "../../assets/logo.jpg";

function Signup() {
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
                    <p>Mollis sit parturient amet tortor sit netus commodo. Felis ornare in sagittis praesent et tortor
                        lorem leo mauris.</p>
                </div>
            </div>
        </div>
        <div class="signup-right">
            <div class="signup-right-content">
                <div class="mobile-logo">
                    <a href="#"><img src={logo} alt="" /></a>
                </div>
                <div class="heading-component-2">
                    <h2>Create your account</h2>
                    <p>Orci gravida felis imperdiet amet id mauris</p>
                </div>
                <form>

                    <div class="row">

                        <div class="col-lg-12">
                            <div class="form-group form-input-text">
                                <label for="">Name <sup>*</sup> </label>
                                <input type="text" class="form-control" id="" placeholder="Esther Howard" />
                            </div>
                        </div>

                        <div class="col-lg-12">
                            <div class="form-group form-input-email">
                                <label for="">Email Address <sup>*</sup> </label>
                                <input type="email" class="form-control" id="" placeholder="siliconmotors@gmail.com" />
                            </div>
                        </div>

                        <div class="col-lg-6">
                            <div class="form-group">
                                <label for="myInput">Password <sup>*</sup> </label>
                                <input id="password-field" type="password" class="form-control"  placeholder="Password" />
                                <span toggle="#password-field" class="fa fa-eye toggle-password"></span>
                            </div>
                        </div>

                        <div class="col-lg-6">
                            <div class="form-group">
                                <label for="myInput">Confirm Password <sup>*</sup> </label>
                                <input id="password-field1" type="password" class="form-control"  placeholder="Confirm Password" />
                                <span toggle="#password-field1" class="fa fa-eye toggle-password"></span>
                            </div>
                        </div>


                        <div class="col-lg-12">
                            <div class="form-group">
                                <button type="submit" class="btn btn-big w-100">Signup</button>
                            </div>
                        </div>

                        <div class="col-lg-12">
                            <p class="login-text">Already have an account? <strong><a href="log-in.php">Login Here</a></strong></p>
                        </div>

                    </div>


                </form>
            </div>
        </div>
    </section>
  )
}

export default Signup