import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import React from "react";

function Cardd({ title, color }) {
  return (
    <>
      <div>
        <Card
          bg={color}
          text="white"
          style={{
            width: "300px",
            height: "250px",
          }}
        >
          <Card.Body
            style={{
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
            }}
          >
            <Card.Title className="fs-3"> {title}</Card.Title>
          </Card.Body>
        </Card>
        <br></br>
      </div>
    </>
  );
}

export default Cardd;
