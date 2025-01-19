import React from "react";
import "../Footer.css";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="bg-light text-dark py-4">
      <Container>
        <Row>
          {/* About Section */}
          <Col md={4} className="mb-3">
            <h5>About ShopEasy</h5>
            <p>
              ShopEasy is your one-stop destination for the latest fashion, 
              electronics, and more. We provide quality products at the best prices.
            </p>
          </Col>

          {/* Links Section */}
          <Col md={4} className="mb-3">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-dark text-decoration-none">Home</a></li>
              <li><a href="/products" className="text-dark text-decoration-none">Products</a></li>
              <li><a href="/about" className="text-dark text-decoration-none">About Us</a></li>
              <li><a href="/contact" className="text-dark text-decoration-none">Contact</a></li>
            </ul>
          </Col>

          {/* Contact Section */}
          <Col md={4} className="mb-3">
            <h5>Contact Us</h5>
            <p>
              <i className="fas fa-map-marker-alt me-2"></i>123 Street, City, Country
            </p>
            <p>
              <i className="fas fa-phone-alt me-2"></i>+123 456 7890
            </p>
            <p>
              <i className="fas fa-envelope me-2"></i>support@shopeasy.com
            </p>
          </Col>
        </Row>
        <hr className="border-dark" />
        <Row className="text-center">
          <Col>
            <p className="mb-0">&copy; {new Date().getFullYear()} ShopEasy. All Rights Reserved.</p>
            <div>
              <a href="https://facebook.com" className="text-dark me-3">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://twitter.com" className="text-dark me-3">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://instagram.com" className="text-dark">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

