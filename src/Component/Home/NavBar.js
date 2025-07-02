import Container from "react-bootstrap/Container";
import { Link, useLocation } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../../img/logo.svg";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { useEffect, useState } from "react";
import { CiLinkedin } from "react-icons/ci";

export const NavBar = () => {
  const [scroll, setScroll] = useState(false);
  const location = useLocation(); // track route for active link
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinkClass = (path) =>
    `relative group px-3 py-1 text-sm text-white  transition duration-300 ease-in-out 
    ${
      location.pathname === path
        ? "text-purple-400 font-bold after:scale-x-100"
        : "text-white opacity-70 hover:opacity-100"
    }
    after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-purple-400 after:scale-x-0 after:origin-left after:transition-transform after:duration-300 group-hover:after:scale-x-100`;

  return (
    <Navbar
      expanded={expanded}
      onToggle={(val) => setExpanded(val)}
      expand="lg"
      className={`fixed top-0 w-full z-50 bg-black bg-opacity-80 shadow-md ${
        scroll ? "backdrop-blur-sm" : ""
      }`}
    >
      <Container fluid className="px-4">
        <Navbar.Brand as={Link} to="/">
          <img src={Logo} alt="Vyom Sagar" className="h-10 w-auto" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="border-white"
        />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto gap-2 mt-2 mt-lg-0">
            <Nav.Link
              as={Link}
              to="/"
              onClick={() => setExpanded(false)}
              className={navLinkClass("/")}
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/skills"
              onClick={() => setExpanded(false)}
              className={navLinkClass("/skills")}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/projects"
              onClick={() => setExpanded(false)}
              className={navLinkClass("/projects")}
            >
              Projects
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/resume"
              onClick={() => setExpanded(false)}
              className={navLinkClass("/resume")}
            >
              Resume
            </Nav.Link>
          </Nav>

          <div className="flex flex-col sm:flex-row items-center gap-3 ml-auto mt-3 mt-sm-0">
            <div className="flex gap-3">
              <a
                href="https://github.com/dashboard"
                className="text-white hover:text-purple-400"
              >
                <AiFillGithub size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/vyom-sagar-606729213/"
                className="text-white hover:text-purple-400"
              >
                <CiLinkedin size={20} />
              </a>
              <a
                href="https://www.instagram.com/vyomsagar180/"
                className="text-white hover:text-purple-400"
              >
                <AiFillInstagram size={20} />
              </a>
            </div>
            <button
              className="border-2 border-purple-400 text-white px-3 py-1 rounded-md hover:bg-purple-400 hover:text-black transition"
              onClick={() => console.log("connect")}
            >
              Let's Connect
            </button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
