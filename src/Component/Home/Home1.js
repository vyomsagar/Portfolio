import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../img/home-main.svg";
import Particle from "../Particle";
import Type from "./Type";
import { Home2 } from "./Home2";
import { Home3 } from "./Home3";


export const Home = () => {
  return (
    <section className="bg-black">
      <Container fluid className=" text-white z-10" id="home">
        <Particle />
        <Container className="flex flex-row mt-[10%]">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> VYOM SAGAR </strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} className="">
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
      <Home3 />
    </section>
  );
}
