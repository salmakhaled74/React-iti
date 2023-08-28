import React from "react";
import girl from "../images/girl2.jpg";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

function Header() {
  return (
    <>
      <div className="header-container" style={{height:"100vh"}}>
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <div className="header-content">
                <div className="text-center">
                  <h1>Salma Khaled</h1>
                </div>
                <div className="text-center">
                  <h2>Web Developer & Designer</h2>
                </div>
                <div className="text-center pt-4">
                  <Button size="lg" variant="dark">
                    Contact Me
                  </Button>
                </div>
              </div>
            </Col>
            <Col md={6}>
              <div className="header-image">
                <Image src={girl} fluid />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Header;
