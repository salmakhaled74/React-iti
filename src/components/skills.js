import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import Progress from "./progress";
import ProgressBar from "react-bootstrap/ProgressBar";

function Skills() {
  return (
    <>
      <section className="bg-dark w-screen ">
        <div className="container mx-auto p-10 h-full flex flex-col  gap-y-5">
          <h1 className="text-center" style={{ color: "white" }}>
            My skills
          </h1>
          <div
            className="container text-center "
            style={{ color: "white", maxWidth: "900px" }}
          >
            <p className="mx-auto fs-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
              voluptatibus, beatae unde fugiat odit inventore hic aliquam labore
              cupiditate blanditiis dolor eveniet ducimus, natus veritatis iste?
              Enim ad consequuntur inventore. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Minus ex et laboriosam? Nisi aliquid
              ullam quam deleniti eligendi. Perferendis, labore? Sit et, dolore
              ratione laudantium fuga eveniet illum illo culpa?
            </p>
          </div>
        </div>
        <Row className="bg-dark">
          <Col md={6} className="pt-5" style={{ color: "white" }}>
            <div className="mb-4 text-center">
              <h2>My focus</h2>
              <hr className="w-[15rem] mx-auto border-t-2 border-Primary mt-3 " />
              <div className="flex flex-col fs-5 p-4">
                <p>Responsive Design</p>
                <p>Web Design</p>
                <p>Mobile App Design</p>
              </div>
            </div>
          </Col>
          <Col md={6} className="fs-4 text-center" style={{ color: "white" }}>
          <Progress text="HTML" width="90" /> 
          <Progress text="CSS" width="80" /> 
          <Progress text="Javascript" width="95" /> 
          <Progress text="Nodejs" width="95" /> 
          <Progress text="MongoDB" width="94" /> 
          <Progress text="Expressjs" width="93" /> 
          <Progress text="SQL" width="88" /> 
          <Progress text="C++" width="90" /> 
          </Col>
        </Row>
      </section>
    </>
  );
}

export default Skills;
