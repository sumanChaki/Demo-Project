import { Nav, Navbar, NavDropdown, Container } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import mainlogo from "../../assets/logo.svg";

function BasicExample() {
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

            <NavDropdown title="About" id="basic-nav-dropdown">
              <NavDropdown.Item to="/board-of-directors">
                Board of Director
              </NavDropdown.Item>

              <NavDropdown.Item to="/awards">Awards</NavDropdown.Item>
            </NavDropdown>

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
