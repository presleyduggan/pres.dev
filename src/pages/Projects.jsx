import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../styles/Projects.css";
import ghub from "../images/home/GitHub.svg";
import stonk from "../images/home/stonk.png";

function Construction() {
  useEffect(() => {
    document.title = "pres.dev";
  }, []);

  return (
    <div className="temp2">
      <br />
      <br />
      <h1>My Projects</h1>
      <p>Click on a project to visit it.</p>
      <br />
      <br />
      <Container>
        <Row>
          <Col className="linkbadge2">
            <a href="/Stonks">
              <img src={stonk} alt="me!" height="330" />
            </a>
          </Col>
          <Col className="linkbadge2">
            <div>
              <h1>Stonks</h1>
              <p>
                A webpage that I created for my friends that keeps track of our
                yearly stock competition. More information can be found on the
                info page!
              </p>
            </div>
          </Col>
        </Row>
        <br />
        <br />
        <br />

        <Row>
          <Col className="linkbadge2">
            <iframe
              src="https://itch.io/embed/650975"
              frameborder="0"
              width="552"
              height="167"
            >
              <a href="https://presleyduggan.itch.io/kingscup">
                King&#039;s Cup by presleyduggan
              </a>
            </iframe>
          </Col>
          <Col className="linkbadge2">
            <div>
              <h1>King's Cup Game</h1>
              <p>
                A game I made in Unity that is the King's Cup drinking game, but
                virtual!
              </p>
            </div>
          </Col>
        </Row>
        <br />
        <br />

        <br />
        <Row>
          <Col className="linkbadge2">
            <iframe
              frameborder="0"
              src="https://itch.io/embed/1507180"
              width="552"
              height="167"
            >
              <a href="https://presleyduggan.itch.io/flappy-hound">
                Flappy Hound by presleyduggan
              </a>
            </iframe>
          </Col>
          <Col className="linkbadge2">
            <div>
              <h1>Flappy Hound</h1>
              <p>
                A game I made in Unity that is a clone of Flappy Bird, but is
                starring my friend's dog, Cosmo!
              </p>
            </div>
          </Col>
        </Row>
        <br />
        <br />
        <br />

        <Row>
          <Col className="linkbadge2">
            <a href="https://www.github.com/presleyduggan">
              <img src={ghub} alt="me!" height="296" />
            </a>
          </Col>
          <Col className="linkbadge2">
            <div>
              <h1>GitHub</h1>
              <p>
                My GitHub! Features code for a lot of projects I've done
                (including the ones above), and even this website!
              </p>
            </div>
          </Col>
        </Row>
        <br />
        <br />
        <br />
        <Row>
          <h1>And more.....</h1>
        </Row>
      </Container>
      <br />
      <br />
      <br />
    </div>
  );
}

export default Construction;
