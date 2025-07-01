import { useState } from "react";
import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import simg1 from "../../img/simg1.svg";
import simg2 from "../../img/simg2.svg";
import simg3 from "../../img/simg3.svg";
import pp1 from "../../img/pp1.svg";
import sp1 from "../../img/sp1.svg";
import Textp1 from "../../img/textp1.svg";
// import pp1 from "../img/pp1.svg";
// import pp1 from "../img/pp1.svg";
// import pp1 from "../img/pp1.svg";

export const Home2 = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="my-[5%] w-full color-black-400 h-[50%] w-full bg-black">
      <Carousel activeIndex={index} onSelect={handleSelect} interval={1500} controls={false} indicators={false} pause={false} >
        <Carousel.Item >
          <Link to="/projects">
          <div className="flex flex-row">
          <img src={simg1} alt="First img" className="w-[50%] h-[50vh] object-cover"/>
          <img src={pp1} alt="First img" className="w-[40%] h-auto "/>
          </div> </Link>
          {/* <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item className="flex flex-row">
          <Link to="/resume">
          <div className="flex flex-row">
          <img src={simg2} alt="First img" className="w-[50%] h-[50vh] object-cover"/>
          <img src={Textp1} alt="First img" className="w-[40%] h-auto  "/>
          </div></Link>
          {/* <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item className="flex flex-row">
          <Link to="/skills">
          <div className="flex flex-row">
          <img src={simg3} alt="First img" className="w-[50%] h-[50vh] object-cover "/>
          <img src={sp1} alt="First img" className="w-[40%] h-auto  "/>
          </div></Link>
          {/* <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption> */}
        </Carousel.Item>
      </Carousel>
    </div>
  );
};
