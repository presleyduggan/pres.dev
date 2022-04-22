import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../styles/Projects.css";
import pres from "../images/home/GitHub.svg";

function Construction() {
  useEffect(() => {
    document.title = "pres.dev";
  }, []);

  return (
    <div style={{ backgroundColor: "beige" }}>
      <div className="temp2">
        <Container>
          <Row>
            <Col className="linkbadge2">
              <a href="https://www.github.com/presleyduggan">
                <img
                  src={pres}
                  alt="me!"
                  height="500"
                  link="https://www.google.com"
                />
              </a>
            </Col>
            <Col></Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Construction;
