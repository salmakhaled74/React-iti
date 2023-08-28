import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

function About() {
  return (
    <>
      <Container className="pb-5">
        <Row>
          <Col md={6}>
            <div className="text-center">
              <h1>About Me</h1>
            </div>
          </Col>
          <Col md={6}>
            <div className="fs-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
              voluptatibus, beatae unde fugiat odit inventore hic aliquam labore
              cupiditate blanditiis dolor eveniet ducimus, natus veritatis iste?
              Enim ad consequuntur inventore. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Minus ex et laboriosam? Nisi aliquid
              ullam quam deleniti eligendi. Perferendis, labore? Sit et, dolore
              ratione laudantium fuga eveniet illum illo culpa?
            </div>
            <div className="pt-4">
              <Button size="lg" variant="dark" className="">
                Download Resume
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default About;
