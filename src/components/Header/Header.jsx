import React from "react";
import { Fragment } from "react";
import {
  Container,
  Nav,
  Navbar,
  Button,
  Form,
  FormControl,
  NavDropdown,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { useRockets } from "../../contexts/RocketContext";

const Header = () => {
  const { handleLogout, user } = useAuth();

  console.log(user);

  return (
    <Fragment>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        className="custom-navbar"
      >
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto nav-list">
              <Nav.Link href="#b" className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </Nav.Link>
              <Nav.Link href="#a" className="nav-item">
                <Link className="nav-link" to="/catalog">
                  Rockets
                </Link>
              </Nav.Link>
              <Navbar.Brand href="#c" className="nav-item mx-0">
                <Link to="/" className="navbar-logo">
                  Planet Express
                </Link>
              </Navbar.Brand>
              <Nav.Link href="#d" className="nav-item">
                Destinations
              </Nav.Link>
              <Nav.Link href="#ggg">About</Nav.Link>
            </Nav>

            <div className="auth-block">
              {user ? (
                <Nav className="align-items-center">
                  <Nav.Link href="#">{user.displayName}</Nav.Link>
                  <Nav.Link href="#" onClick={handleLogout}>
                    <Button variant="dark" className="login-btn">
                      Logout
                    </Button>{" "}
                  </Nav.Link>
                </Nav>
              ) : (
                <Nav>
                  <Nav.Link href="#">
                    <Link to="/login">
                      <Button variant="dark" className="login-btn">
                        Login
                      </Button>{" "}
                    </Link>
                  </Nav.Link>
                </Nav>
              )}
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Fragment>
  );
};

export default Header;
