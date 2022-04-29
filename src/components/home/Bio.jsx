import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import pres from "../../images/home/test.jpg";
import "../../styles/Home.css";

function Bio() {
  return (
    <div className="temp">
      <Container>
        <Row>
          <Col>
            <img src={pres} className="photocir" alt="me!" height="600" />
          </Col>
          <Col>
            <h3>Hello! I am Presley!</h3>
            <br />
            <h3>
              I am a Software Developer at Vanguard Integrity Professionals, and
              am currently finishing my master's degree in Computer Science. I
              am most interested in cryptography, authentication, and parallel
              computing.
            </h3>
            <br />
            <br />
            <h3>
              This site - written in ReactJS by me, so please excuse any bugs :)
              - is a place where I host some of my projects. You can view them
              by clicking <a href="/Projects">here</a>.
            </h3>
            <br />
            <div className="linkbadge">
              <div
                className="badge-base LI-profile-badge"
                data-locale="en_US"
                data-size="large"
                data-theme="light"
                data-type="VERTICAL"
                data-vanity="presleyduggan"
                data-version="v1"
              >
                <a
                  className="badge-base__link LI-simple-link"
                  href="https://www.linkedin.com/in/presleyduggan?trk=profile-badge"
                ></a>
              </div>
            </div>
            <p>Connect with me</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Bio;
