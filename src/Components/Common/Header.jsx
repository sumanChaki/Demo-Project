import { Nav, Navbar, NavDropdown, Container } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { FaCaretDown } from "react-icons/fa";
import mainlogo from "../../assets/logo.jpg";
import { useState } from "react";

function BasicExample() {
  const [showDropdown, setShowDropdown] = useState(false);
  const handleDropdownClose = () => {
    setShowDropdown(false);
  };


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
              <NavLink to="/services">Services</NavLink>
            </div>

            <div className="nav-item">
              <NavLink to="/products">Products</NavLink>
            </div>

            <div className="nav-item">
              <NavLink to="/contact-us">Contact</NavLink>
            </div>
          </Nav>
        </Navbar.Collapse>

        <div className="nav-btn-group">
          <Link to="/login" className="btn">
            Login
          </Link>

          <Link to="/registration" className="btn">
            Registration
          </Link>

          <Link to="/cart" className="btn add-cart">
            Cart
          </Link>
        </div>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
