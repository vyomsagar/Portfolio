import React, { useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
// import gsap from "gsap";
import Particle from "../Particle";
import Type from "./Type";
import { Home2 } from "./Home2";
import { Home3 } from "./Home3";
import "@google/model-viewer";

export const Home = () => {


  const nameRef = useRef([]);
  nameRef.current = [];

  const name = "VYOM SAGAR".split("");

  // const handleHoverIn = () => {
  //   gsap.to(nameRef.current, {
  //     x: () => gsap.utils.random(-20, 20),
  //     y: -20,
  //     duration: 0.5,
  //     stagger: 0.05,
  //     ease: "power2.out",
  //   });
  // };

  // const handleHoverOut = () => {
  //   gsap.to(nameRef.current, {
  //     x: 0,
  //     y: 0,
  //     duration: 0.5,
  //     stagger: 0.05,
  //     ease: "power2.out",
  //   });
  // };

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

              <h1
                // onMouseEnter={handleHoverIn}
                // onMouseLeave={handleHoverOut}
                className="heading-name"
              >
                I'M{" "}
                <strong className="main-name ml-2">
                  {name.map((char, i) => (
                    <span
                      key={i}
                      ref={(el) => (nameRef.current[i] = el)}
                      className="inline-block"
                    >
                      {char === " " ? "\u00A0" : char}
                    </span>
                  ))}
                </strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} className="chat-bot">
              <div className="flex justify-center items-center h-[600px]">
                <div className="w-[50vw] h-[100%] shadow-lg rounded-xl overflow-hidden">
                  <iframe
                  title="chatbot"
                    src="https://cdn.botpress.cloud/webchat/v3.2/shareable.html?configUrl=https://files.bpcontent.cloud/2025/08/19/20/20250819200244-ML6VEGB5.json"
                    style={{
                      width: "100%",
                      height: "100%",
                      border: "none",
                    }}
                    allow="microphone"
                  ></iframe>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
      <Home3 />
    </section>
  );
};
