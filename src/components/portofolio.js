import React from "react";
import girl from "../images/girl2.jpg";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import Cardd from "./card";

function Portofolio() {
  return (
    <>
      <Container className=" overflow-x-hidden pt-5 w-screen min-h-screen">
        <Col>
          <div >
            <h1>Portofolio</h1>
          </div>
        </Col>
        <Row xs={1} md={2} lg={3} className="text-center d-flex justify-center">
          <Cardd color={"secondary"} title="WEB DESIGN" />
          
          <Cardd color={"dark"} title="MOBILE DESIGN" />
          <Cardd color={"secondary"} title="LOGO DESIGN" />
          <Cardd color={"dark"} title="Web APPLICATION DEVELOPMENT" />
          <Cardd color={"secondary"} title="MOBILE APPLICATION DEVELOPMENT" />
          <Cardd color={"dark"} title="PWA DEVELOPMENT" />
        </Row>
      </Container>
    </>
  );
}

export default Portofolio;
