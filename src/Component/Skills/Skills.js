import Particle from "../Particle";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import javai from "../../img/java.svg";
import ci from "../../img/ci.svg";
import c from "../../img/c.svg";

export const Skills = () => {
  return (
    <div className="w-full h-auto text-white bg-black">
      <Particle />
      <div>
        <h1 className="my-[8%] ">Skills</h1>
        <div className="border-2 rounded border-white m-[3%]">
          <h2 className="underline text-white text-3xl font-bold">Language</h2>
          <div className="flex flex-row justify-center items-center">
            <div className="m-[6%]">
              <Card
                className="text-white"
                style={{
                  width: "15rem",
                  backgroundColor: "transparent",
                  // border: "1px solid white",
                  color: "white",
                }}
              >
                <Card.Img variant="top" src={javai} />
                <Card.Body>
                  <Card.Title>Java</Card.Title>
                  <Card.Text>
                    I have fundamental knowledge about java and also i practice
                    DSA questions using java language.
                  </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush bg-transparent text-white">
                  <ListGroup.Item className="bg-transparent text-white">
                    Advance Level
                  </ListGroup.Item>
                  <ListGroup.Item className="bg-transparent text-white">
                    Completed OOPs
                  </ListGroup.Item>
                </ListGroup>
              </Card>
            </div>
            <div className="m-[6%]">
              <Card
                className="text-white"
                style={{
                  width: "15rem",
                  backgroundColor: "transparent",
                  // border: "1px solid white",
                  color: "white",
                }}
              >
                <Card.Img variant="top" src={ci} />
                <Card.Body>
                  <Card.Title>Java</Card.Title>
                  <Card.Text>
                    I have fundamental knowledge about java and also i practice
                    DSA questions using java language.
                  </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush bg-transparent text-white">
                  <ListGroup.Item className="bg-transparent text-white">
                    Advance Level
                  </ListGroup.Item>
                  <ListGroup.Item className="bg-transparent text-white">
                    Completed OOPs
                  </ListGroup.Item>
                </ListGroup>
              </Card>
            </div>
            <div className="m-[6%]">
              <Card
                className="text-white"
                style={{
                  width: "15rem",
                  backgroundColor: "transparent",
                  // border: "1px solid white",
                  color: "white",
                }}
              >
                <Card.Img variant="top" src={c} />
                <Card.Body>
                  <Card.Title>Java</Card.Title>
                  <Card.Text>
                    I have fundamental knowledge about java and also i practice
                    DSA questions using java language.
                  </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush bg-transparent text-white">
                  <ListGroup.Item className="bg-transparent text-white">
                    Advance Level
                  </ListGroup.Item>
                  <ListGroup.Item className="bg-transparent text-white">
                    Completed OOPs
                  </ListGroup.Item>
                </ListGroup>
              </Card>
            </div>
            <div className="m-[6%]">
              <Card
                className="text-white"
                style={{
                  width: "15rem",
                  backgroundColor: "transparent",
                  // border: "1px solid white",
                  color: "white",
                }}
              >
                <Card.Img variant="top" src={javai} />
                <Card.Body>
                  <Card.Title>Java</Card.Title>
                  <Card.Text>
                    I have fundamental knowledge about java and also i practice
                    DSA questions using java language.
                  </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush bg-transparent text-white">
                  <ListGroup.Item className="bg-transparent text-white">
                    Advance Level
                  </ListGroup.Item>
                  <ListGroup.Item className="bg-transparent text-white">
                    Completed OOPs
                  </ListGroup.Item>
                </ListGroup>
              </Card>
            </div>
          </div>
        </div>
        <div className="border-2 rounded border-white m-[3%]">
          <h2 className="underline text-white text-3xl font-bold mb-[2%]">Web_Development</h2>
          <div className="flex flex-col justify-center items-center">
            <div>
              <h3>Front-end</h3>
              <div className="flex flex-row justify-center items-center">
                <div className="m-[6%]">
                  <Card
                    className="text-white"
                    style={{
                      width: "15rem",
                      backgroundColor: "transparent",
                      // border: "1px solid white",
                      color: "white",
                    }}
                  >
                    <Card.Img variant="top" src={javai} />
                    <Card.Body>
                      <Card.Title>HTML</Card.Title>
                      <Card.Text>
                        I have fundamental knowledge about java and also i
                        practice DSA questions using java language.
                      </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush bg-transparent text-white">
                      <ListGroup.Item className="bg-transparent text-white">
                        Advance Level
                      </ListGroup.Item>
                      <ListGroup.Item className="bg-transparent text-white">
                        Completed OOPs
                      </ListGroup.Item>
                    </ListGroup>
                  </Card>
                </div>
                <div className="m-[6%]">
                  <Card
                    className="text-white"
                    style={{
                      width: "15rem",
                      backgroundColor: "transparent",
                      // border: "1px solid white",
                      color: "white",
                    }}
                  >
                    <Card.Img variant="top" src={javai} />
                    <Card.Body>
                      <Card.Title>CSS</Card.Title>
                      <Card.Text>
                        I have fundamental knowledge about java and also i
                        practice DSA questions using java language.
                      </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush bg-transparent text-white">
                      <ListGroup.Item className="bg-transparent text-white">
                        Advance Level
                      </ListGroup.Item>
                      <ListGroup.Item className="bg-transparent text-white">
                        Completed OOPs
                      </ListGroup.Item>
                    </ListGroup>
                  </Card>
                </div>
                <div className="m-[6%]">
                  <Card
                    className="text-white"
                    style={{
                      width: "15rem",
                      backgroundColor: "transparent",
                      // border: "1px solid white",
                      color: "white",
                    }}
                  >
                    <Card.Img variant="top" src={javai} />
                    <Card.Body>
                      <Card.Title>JavaScript</Card.Title>
                      <Card.Text>
                        I have fundamental knowledge about java and also i
                        practice DSA questions using java language.
                      </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush bg-transparent text-white">
                      <ListGroup.Item className="bg-transparent text-white">
                        Advance Level
                      </ListGroup.Item>
                      <ListGroup.Item className="bg-transparent text-white">
                        Completed OOPs
                      </ListGroup.Item>
                    </ListGroup>
                  </Card>
                </div>
                <div className="m-[6%]">
                  <Card
                    className="text-white"
                    style={{
                      width: "15rem",
                      backgroundColor: "transparent",
                      // border: "1px solid white",
                      color: "white",
                    }}
                  >
                    <Card.Img variant="top" src={javai} />
                    <Card.Body>
                      <Card.Title>React</Card.Title>
                      <Card.Text>
                        I have fundamental knowledge about java and also i
                        practice DSA questions using java language.
                      </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush bg-transparent text-white">
                      <ListGroup.Item className="bg-transparent text-white">
                        Advance Level
                      </ListGroup.Item>
                      <ListGroup.Item className="bg-transparent text-white">
                        Completed OOPs
                      </ListGroup.Item>
                    </ListGroup>
                  </Card>
                </div>
              </div>
            </div>
            <div>
              <h3>Back-end</h3>
              <div>
                <Card
                  className="text-white"
                  style={{
                    width: "15rem",
                    backgroundColor: "transparent",
                    // border: "1px solid white",
                    color: "white",
                  }}
                >
                  <Card.Img variant="top" src={javai} />
                  <Card.Body>
                    <Card.Title>HTML</Card.Title>
                    <Card.Text>
                      I have fundamental knowledge about java and also i
                      practice DSA questions using java language.
                    </Card.Text>
                  </Card.Body>
                  <ListGroup className="list-group-flush bg-transparent text-white">
                    <ListGroup.Item className="bg-transparent text-white">
                      Advance Level
                    </ListGroup.Item>
                    <ListGroup.Item className="bg-transparent text-white">
                      Completed OOPs
                    </ListGroup.Item>
                  </ListGroup>
                </Card>
              </div>
            </div>
            <div className="mt-[5%]">
              <h3>DataBase</h3>
              <div className="flex flex-row justify-center items-center">
                <div className="m-[6%]">
                  <Card
                    className="text-white"
                    style={{
                      width: "15rem",
                      backgroundColor: "transparent",
                      // border: "1px solid white",
                      color: "white",
                    }}
                  >
                    <Card.Img variant="top" src={javai} />
                    <Card.Body>
                      <Card.Title>HTML</Card.Title>
                      <Card.Text>
                        I have fundamental knowledge about java and also i
                        practice DSA questions using java language.
                      </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush bg-transparent text-white">
                      <ListGroup.Item className="bg-transparent text-white">
                        Advance Level
                      </ListGroup.Item>
                      <ListGroup.Item className="bg-transparent text-white">
                        Completed OOPs
                      </ListGroup.Item>
                    </ListGroup>
                  </Card>
                </div>
                <div className="m-[6%]">
                  <Card
                    className="text-white"
                    style={{
                      width: "15rem",
                      backgroundColor: "transparent",
                      // border: "1px solid white",
                      color: "white",
                    }}
                  >
                    <Card.Img variant="top" src={javai} />
                    <Card.Body>
                      <Card.Title>CSS</Card.Title>
                      <Card.Text>
                        I have fundamental knowledge about java and also i
                        practice DSA questions using java language.
                      </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush bg-transparent text-white">
                      <ListGroup.Item className="bg-transparent text-white">
                        Advance Level
                      </ListGroup.Item>
                      <ListGroup.Item className="bg-transparent text-white">
                        Completed OOPs
                      </ListGroup.Item>
                    </ListGroup>
                  </Card>
                </div>
                <div className="m-[6%]">
                  <Card
                    className="text-white"
                    style={{
                      width: "15rem",
                      backgroundColor: "transparent",
                      // border: "1px solid white",
                      color: "white",
                    }}
                  >
                    <Card.Img variant="top" src={javai} />
                    <Card.Body>
                      <Card.Title>JavaScript</Card.Title>
                      <Card.Text>
                        I have fundamental knowledge about java and also i
                        practice DSA questions using java language.
                      </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush bg-transparent text-white">
                      <ListGroup.Item className="bg-transparent text-white">
                        Advance Level
                      </ListGroup.Item>
                      <ListGroup.Item className="bg-transparent text-white">
                        Completed OOPs
                      </ListGroup.Item>
                    </ListGroup>
                  </Card>
                </div>
                <div className="m-[6%]">
                  <Card
                    className="text-white"
                    style={{
                      width: "15rem",
                      backgroundColor: "transparent",
                      // border: "1px solid white",
                      color: "white",
                    }}
                  >
                    <Card.Img variant="top" src={javai} />
                    <Card.Body>
                      <Card.Title>React</Card.Title>
                      <Card.Text>
                        I have fundamental knowledge about java and also i
                        practice DSA questions using java language.
                      </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush bg-transparent text-white">
                      <ListGroup.Item className="bg-transparent text-white">
                        Advance Level
                      </ListGroup.Item>
                      <ListGroup.Item className="bg-transparent text-white">
                        Completed OOPs
                      </ListGroup.Item>
                    </ListGroup>
                  </Card>
                </div>
              </div>
            </div>
            <div className="mt-[5%] ">
              <h3>Additional</h3>
              <div className="flex flex-wrap flex-row justify-center items-center">
                <div className="m-[6%]">
                  <Card
                    className="text-white"
                    style={{
                      width: "15rem",
                      backgroundColor: "transparent",
                      // border: "1px solid white",
                      color: "white",
                    }}
                  >
                    <Card.Img variant="top" src={javai} />
                    <Card.Body>
                      <Card.Title>TailwindCss</Card.Title>
                      <Card.Text>
                        I have fundamental knowledge about java and also i
                        practice DSA questions using java language.
                      </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush bg-transparent text-white">
                      <ListGroup.Item className="bg-transparent text-white">
                        Advance Level
                      </ListGroup.Item>
                      <ListGroup.Item className="bg-transparent text-white">
                        Completed OOPs
                      </ListGroup.Item>
                    </ListGroup>
                  </Card>
                </div>
                <div className="m-[6%]">
                  <Card
                    className="text-white"
                    style={{
                      width: "15rem",
                      backgroundColor: "transparent",
                      // border: "1px solid white",
                      color: "white",
                    }}
                  >
                    <Card.Img variant="top" src={javai} />
                    <Card.Body>
                      <Card.Title>ReactBootstrap</Card.Title>
                      <Card.Text>
                        I have fundamental knowledge about java and also i
                        practice DSA questions using java language.
                      </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush bg-transparent text-white">
                      <ListGroup.Item className="bg-transparent text-white">
                        Advance Level
                      </ListGroup.Item>
                      <ListGroup.Item className="bg-transparent text-white">
                        Completed OOPs
                      </ListGroup.Item>
                    </ListGroup>
                  </Card>
                </div>
                <div className="m-[6%]">
                  <Card
                    className="text-white"
                    style={{
                      width: "15rem",
                      backgroundColor: "transparent",
                      // border: "1px solid white",
                      color: "white",
                    }}
                  >
                    <Card.Img variant="top" src={javai} />
                    <Card.Body>
                      <Card.Title>GSap</Card.Title>
                      <Card.Text>
                        I have fundamental knowledge about java and also i
                        practice DSA questions using java language.
                      </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush bg-transparent text-white">
                      <ListGroup.Item className="bg-transparent text-white">
                        Advance Level
                      </ListGroup.Item>
                      <ListGroup.Item className="bg-transparent text-white">
                        Completed OOPs
                      </ListGroup.Item>
                    </ListGroup>
                  </Card>
                </div>
                 <div className="m-[6%]">
                  <Card
                    className="text-white"
                    style={{
                      width: "15rem",
                      backgroundColor: "transparent",
                      // border: "1px solid white",
                      color: "white",
                    }}
                  >
                    <Card.Img variant="top" src={javai} />
                    <Card.Body>
                      <Card.Title>XAMPP</Card.Title>
                      <Card.Text>
                        I have fundamental knowledge about java and also i
                        practice DSA questions using java language.
                      </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush bg-transparent text-white">
                      <ListGroup.Item className="bg-transparent text-white">
                        Advance Level
                      </ListGroup.Item>
                      <ListGroup.Item className="bg-transparent text-white">
                        Completed OOPs
                      </ListGroup.Item>
                    </ListGroup>
                  </Card>
                </div>
                 <div className="m-[6%]">
                  <Card
                    className="text-white"
                    style={{
                      width: "15rem",
                      backgroundColor: "transparent",
                      // border: "1px solid white",
                      color: "white",
                    }}
                  >
                    <Card.Img variant="top" src={javai} />
                    <Card.Body>
                      <Card.Title>Wordpress</Card.Title>
                      <Card.Text>
                        I have fundamental knowledge about java and also i
                        practice DSA questions using java language.
                      </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush bg-transparent text-white">
                      <ListGroup.Item className="bg-transparent text-white">
                        Advance Level
                      </ListGroup.Item>
                      <ListGroup.Item className="bg-transparent text-white">
                        Completed OOPs
                      </ListGroup.Item>
                    </ListGroup>
                  </Card>
                </div>
                 <div className="m-[6%]">
                  <Card
                    className="text-white"
                    style={{
                      width: "15rem",
                      backgroundColor: "transparent",
                      // border: "1px solid white",
                      color: "white",
                    }}
                  >
                    <Card.Img variant="top" src={javai} />
                    <Card.Body>
                      <Card.Title>git</Card.Title>
                      <Card.Text>
                        I have fundamental knowledge about java and also i
                        practice DSA questions using java language.
                      </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush bg-transparent text-white">
                      <ListGroup.Item className="bg-transparent text-white">
                        Advance Level
                      </ListGroup.Item>
                      <ListGroup.Item className="bg-transparent text-white">
                        Completed OOPs
                      </ListGroup.Item>
                    </ListGroup>
                  </Card>
                </div>
                 <div className="m-[6%]">
                  <Card
                    className="text-white"
                    style={{
                      width: "15rem",
                      backgroundColor: "transparent",
                      // border: "1px solid white",
                      color: "white",
                    }}
                  >
                    <Card.Img variant="top" src={javai} />
                    <Card.Body>
                      <Card.Title>GitHub</Card.Title>
                      <Card.Text>
                        I have fundamental knowledge about java and also i
                        practice DSA questions using java language.
                      </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush bg-transparent text-white">
                      <ListGroup.Item className="bg-transparent text-white">
                        Advance Level
                      </ListGroup.Item>
                      <ListGroup.Item className="bg-transparent text-white">
                        Completed OOPs
                      </ListGroup.Item>
                    </ListGroup>
                  </Card>
                </div>
                
              </div>
            </div>
        
          </div>
        </div>
      </div>
    </div>
  );
};
