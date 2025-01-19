import React, { useState } from "react";
import "../Header.css";
import { Navbar, Nav, Form, FormControl, Button, Modal } from "react-bootstrap";

const Header = () => {
  const [showModal, setShowModal] = useState(false);
  const [isLogin, setIsLogin] = useState(true); // Toggle between Login and Register forms

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);
  const toggleForm = () => setIsLogin(!isLogin);

  return (
    <header>
      <Navbar bg="light" expand="lg" className="shadow-sm">
        <Navbar.Brand href="/">ShopEasy</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto"> {/* Moves navigation items to the right */}
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/products">Products</Nav.Link>
            <Nav.Link href="/about">About Us</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
          <Form className="d-flex ms-3">
            <FormControl
              type="search"
              placeholder="Search products..."
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          <Nav className="ms-3">
            <Nav.Link href="/cart" className="d-flex align-items-center">
              <i className="fas fa-shopping-cart"></i>
              <span className="ms-2">Cart</span>
            </Nav.Link>
            <Nav.Link
              onClick={handleShow} // Opens the modal
              className="d-flex align-items-center"
              style={{ cursor: "pointer" }}
            >
              <i className="fas fa-user"></i>
              <span className="ms-2">Login</span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      {/* Modal for Login and Register */}
      <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>{isLogin ? "Login" : "Register"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {isLogin ? (
            <Form>
              <Form.Group className="mb-3" controlId="formLoginEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formLoginPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter your password"
                  required
                />
              </Form.Group>
              <Button variant="primary" type="submit" className="w-100">
                Login
              </Button>
            </Form>
          ) : (
            <Form>
              <Form.Group className="mb-3" controlId="formRegisterEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formRegisterPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Create your password"
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formRegisterConfirmPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Confirm your password"
                  required
                />
              </Form.Group>
              <Button variant="primary" type="submit" className="w-100">
                Register
              </Button>
            </Form>
          )}
        </Modal.Body>
        <Modal.Footer>
          <div className="w-100 text-center">
            {isLogin ? (
              <small>
                Don't have an account?{" "}
                <span
                  onClick={toggleForm}
                  style={{ color: "blue", cursor: "pointer" }}
                >
                  Register
                </span>
              </small>
            ) : (
              <small>
                Already have an account?{" "}
                <span
                  onClick={toggleForm}
                  style={{ color: "blue", cursor: "pointer" }}
                >
                  Login
                </span>
              </small>
            )}
          </div>
        </Modal.Footer>
      </Modal>
    </header>
  );
};

export default Header;
