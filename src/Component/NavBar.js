import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Logo from "../img/logo.svg";
import Instaicon from "../img/insta-icon.svg";
import Whatsappicon from "../img/whatsapp-icon.svg";
import Facebookicon from "../img/facebook-icon.svg";
import { useState, useEffect } from "react";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("Home");
  const [scroll, setscroll] = useState(false);
  useEffect(() => {
    const onscroll = () => {
      if (window.scroll > 50) {
        setscroll(true);
      } else {
        setscroll(false);
      }
    };

    window.addEventListener("scroll", onscroll);

    return () => window.addEventListener("scroll", onscroll);
  }, []);

  const onUpdateavtive = (value) => {
    setActiveLink(value);
  };

  return (
    <Navbar
      expand="lg"
      className={`text-white ${scroll ? "scroll" : ""} z-10`}
    >
      <Container>
        <Navbar.Brand href="#home">
          <img src={Logo} alt="Vyom Sgar" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggle-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              href="#home"
              className={`navbar-link text-white ${
                activeLink === "Home"
                  ? "font-bold underline"
                  : "opacity-70 hover:opacity-100"
              }`}
              onClick={() => onUpdateavtive("Home")}
            >
              Home
            </Nav.Link>

            <Nav.Link
              href="#Skills"
              className={`navbar-link text-white ${
                activeLink === "Skills"
                  ? "font-bold underline"
                  : "opacity-70 hover:opacity-100"
              }`}
              onClick={() => onUpdateavtive("Skills")}
            >
              Skills
            </Nav.Link>

            <Nav.Link
              href="#Projects"
              className={`navbar-link text-white ${
                activeLink === "Projects"
                  ? "font-bold underline"
                  : "opacity-70 hover:opacity-100"
              }`}
              onClick={() => onUpdateavtive("Projects")}
            >
              Projects
            </Nav.Link>
          </Nav>
          <span className="Navbar-text ml-[40%] flex flex-row justify-between">
            <div className="social-icon flex flex-row w-[40%] gap-4 mr-4">
              <a href="#">
                <div className="relative flex justify-center items-center w-[130%] h-[2vh] bg-purple-200 rounded-full ">
               <AiFillGithub /></div>
              </a>
              <a href="#">
                <div className="relative flex justify-center items-center w-[130%] h-[2vh] bg-purple-200 rounded-full">
              <AiOutlineTwitter/></div>
              </a>
              <a href="#">
                <div className="relative flex justify-center items-center w-[130%] h-[2vh] bg-purple-200 rounded-full">
                <AiFillInstagram /></div>
              </a>
            </div>
            <button className="vvd" onClick={() => console.log("connect")}>
              <span className="border-4 p-2">Let's Connect </span>
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
