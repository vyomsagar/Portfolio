import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../img/avtar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

export const Home3 = () => {
  return (
    <Container
      fluid
      className="home-about-section bg-black text-white"
      id="about"
    >
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I’m a passionate developer who enjoys building practical and
              creative solutions for the web.
              <br />
              <br />I have a good understanding of
              <i>
                <b className="purple"> C, C++, Java, and JavaScript. </b>
              </i>
              <br />
              <br />
              My interests lie in developing modern &nbsp;
              <i>
                <b className="purple">web applications</b> 
              </i>
              <br />
              <br />I also explore backend development using{" "}
              <b className="purple">Node.js</b> and enjoy building UIs using
              modern libraries like
              <i>
                <b className="purple"> React.js and Tailwind CSS</b>.
              </i>
              <br />
              <br />
              I'm continuously learning and love contributing to projects when I
              can.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>

        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="flex justify-center pt-[15px] relative list-none inline-block">
              <li className="social-icons">
                <a
                  href="https://github.com/vyomsagar"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/vyom-sagar-606729213/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/vyom-sagar-606729213/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/vyomsagar180/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};
export default Home3;
