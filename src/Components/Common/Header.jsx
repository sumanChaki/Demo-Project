import { Nav, Navbar, NavDropdown, Container } from "react-bootstrap";
import { Link, useNavigate, NavLink } from "react-router-dom";
import { FaCaretDown } from "react-icons/fa";
import mainlogo from "../../assets/logo.jpg";
import { useState } from "react";
import {useDispatch, useSelector} from 'react-redux';
import userImage from "../../assets/user-img.png";
import { setLogout } from "../Redux/Auth/AuthReducer";
import { persistor } from "../Redux/Store";

function BasicExample() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDropdownClose = () => {
    setShowDropdown(false);
  };

  const handleLoginClose = () => {
    setShowLogin(false)
  }

const logoutHandler = async (e) => {
  e.preventDefault();
  try {
    setShowLogin(false);

    // Dispatch logout actions
    dispatch(setLogout());
    dispatch({ type: "RESET_STORE" }); // 💥 Clear all Redux slices

    await persistor.purge(); // Clean persisted storage

    // Navigate away
    navigate("/login");
  } catch (error) {
    console.log("Logout error >>>", error);
  }
};

  const user = useSelector((state) => state.auth?.user?.token);
  const cartLength = useSelector((state) => state.carts?.recipes);


  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Link to="/home" className="logo-item">
          <img src={mainlogo} alt="" />
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <div className="nav-item">
              <NavLink to="/home">Home</NavLink>
            </div>

            <div
              className="nav-item dropdown"
              onMouseEnter={() => setShowDropdown(true)}
              onMouseLeave={() => setShowDropdown(false)}
            >
              <NavLink to="/about" className="nav-link">
                About <FaCaretDown className="dropdown-icon" />
              </NavLink>

              {showDropdown && (
                <div className="dropdown-menu show">
                  <Link
                    to="/about/board-of-directors"
                    className="dropdown-item"
                    onClick={handleDropdownClose}
                  >
                    Board of Directors
                  </Link>
                  <Link
                    to="/about/awards"
                    className="dropdown-item"
                    onClick={handleDropdownClose}
                  >
                    Awards
                  </Link>
                </div>
              )}
            </div>

            <div className="nav-item">
              <NavLink to="/products">Products</NavLink>
            </div>

            <div className="nav-item">
              <NavLink to="/recipes">Recipes</NavLink>
            </div>

            <div className="nav-item">
              <NavLink to="/comments">Comments</NavLink>
            </div>

            <div className="nav-item">
              <NavLink to="/quotes">Quotes</NavLink>
            </div>

            <div className="nav-item">
              <NavLink to="/posts">Posts</NavLink>
            </div>

            <div className="nav-item">
              <NavLink to="/contact-us">Contact</NavLink>
            </div>
          </Nav>
        </Navbar.Collapse>

        <div className="nav-btn-group">
          {user !== undefined ? (
            <div
              className="after-login-wrapper"
              onClick={handleLoginClose}
              onMouseEnter={() => setShowLogin(true)}
              onMouseLeave={() => setShowLogin(false)}
            >
              <div className="btn after-login">
                <div className="profile-image">
                  <img src={userImage} alt="#" />
                </div>
                <div className="profile-text">Hi Suman</div>
              </div>

              {showLogin && (
                <div className="dropdown-menu show">
                  <Link
                    to="/my-profile"
                    className="dropdown-item"
                    onClick={handleLoginClose}
                  >
                    My Profile
                  </Link>
                  <Link
                    to="/"
                    className="dropdown-item"
                    onClick={handleLoginClose}
                  >
                    Orders
                  </Link>
                  <Link
                    to="/login"
                    className="dropdown-item"
                    onClick={logoutHandler}
                  >
                    Logout
                  </Link>
                </div>
              )}
            </div>
          ) : (
            <Link to="/login" className="btn">
              Login
            </Link>
          )}

          {user !== undefined && (
            <Link to="/cart" className="btn add-cart">
              <div className="cart-length">{cartLength?.length}</div>
            </Link>
          )}
        </div>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
