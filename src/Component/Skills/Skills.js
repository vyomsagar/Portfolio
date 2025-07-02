import Particle from "../Particle";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { skillsDataLanguage, skillsDataFrontend, skillsDataAdditional, skillsDataBackend, skillsDataDatabase } from "./skillsData.js";



export const Skills = () => {
  return (
    <div className="w-full h-auto text-white bg-black">
      <Particle />
      <div>
        <h1 className="my-[8%] ">Skills</h1>
        <div className="border-2 rounded border-white m-[3%]">
          <h2 className="underline text-white text-3xl font-bold">Language</h2>
          <div className="flex flex-wrap justify-center gap-6 px-4">
            {skillsDataLanguage.map((skill, index) => (
              <div key={index} className="w-full sm:w-[15rem]">
                <Card
                  className="text-white"
                  style={{ backgroundColor: "transparent", color: "white" }}
                >
                  <Card.Img variant="top" src={skill.img} />
                  <Card.Body>
                    <Card.Title>{skill.title}</Card.Title>
                    <Card.Text>{skill.desc}</Card.Text>
                  </Card.Body>
                  <ListGroup className="list-group-flush bg-transparent text-white">
                    <ListGroup.Item className="bg-transparent text-white">
                      {skill.level1}
                    </ListGroup.Item>
                    <ListGroup.Item className="bg-transparent text-white">
                      {skill.level2}
                    </ListGroup.Item>
                  </ListGroup>
                </Card>
              </div>
            ))}
          </div>
        </div>
        <div className="border-2 rounded border-white m-[3%]">
          <h2 className="underline text-white text-3xl font-bold mb-[2%]">
            Web_Development
          </h2>
          <div className="flex flex-col justify-center items-center">
            <div>
              <h3>Front-end</h3>
              <div className="flex flex-wrap justify-center gap-6 px-4">
                {skillsDataFrontend.map((skill, index) => (
                  <div key={index} className="w-full sm:w-[15rem]">
                    <Card
                      className="text-white"
                      style={{ backgroundColor: "transparent", color: "white" }}
                    >
                      <Card.Img variant="top" src={skill.img} />
                      <Card.Body>
                        <Card.Title>{skill.title}</Card.Title>
                        <Card.Text>{skill.desc}</Card.Text>
                      </Card.Body>
                      <ListGroup className="list-group-flush bg-transparent text-white">
                        <ListGroup.Item className="bg-transparent text-white">
                          {skill.level1}
                        </ListGroup.Item>
                        <ListGroup.Item className="bg-transparent text-white">
                          {skill.level2}
                        </ListGroup.Item>
                      </ListGroup>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3>Back-end</h3>
              <div className="flex flex-wrap justify-center gap-6 px-4">
            {skillsDataBackend.map((skill, index) => (
              <div key={index} className="w-full sm:w-[15rem]">
                <Card
                  className="text-white"
                  style={{ backgroundColor: "transparent", color: "white" }}
                >
                  <Card.Img variant="top" src={skill.img} />
                  <Card.Body>
                    <Card.Title>{skill.title}</Card.Title>
                    <Card.Text>{skill.desc}</Card.Text>
                  </Card.Body>
                  <ListGroup className="list-group-flush bg-transparent text-white">
                    <ListGroup.Item className="bg-transparent text-white">
                      {skill.level1}
                    </ListGroup.Item>
                    <ListGroup.Item className="bg-transparent text-white">
                      {skill.level2}
                    </ListGroup.Item>
                  </ListGroup>
                </Card>
              </div>
            ))}
          </div>
            </div>
            <div className="mt-[5%]">
              <h3>DataBase</h3>
              <div className="flex flex-wrap justify-center gap-6 px-4">
            {skillsDataDatabase.map((skill, index) => (
              <div key={index} className="w-full sm:w-[15rem]">
                <Card
                  className="text-white"
                  style={{ backgroundColor: "transparent", color: "white" }}
                >
                  <Card.Img variant="top" src={skill.img} />
                  <Card.Body>
                    <Card.Title>{skill.title}</Card.Title>
                    <Card.Text>{skill.desc}</Card.Text>
                  </Card.Body>
                  <ListGroup className="list-group-flush bg-transparent text-white">
                    <ListGroup.Item className="bg-transparent text-white">
                      {skill.level1}
                    </ListGroup.Item>
                    <ListGroup.Item className="bg-transparent text-white">
                      {skill.level2}
                    </ListGroup.Item>
                  </ListGroup>
                </Card>
              </div>
            ))}
          </div>
            </div>
            <div className="mt-[5%] ">
              <h3>Additional</h3>
              <div className="flex flex-wrap justify-center gap-6 px-4">
            {skillsDataAdditional.map((skill, index) => (
              <div key={index} className="w-full sm:w-[15rem]">
                <Card
                  className="text-white"
                  style={{ backgroundColor: "transparent", color: "white" }}
                >
                  <Card.Img variant="top" src={skill.img} />
                  <Card.Body>
                    <Card.Title>{skill.title}</Card.Title>
                    <Card.Text>{skill.desc}</Card.Text>
                  </Card.Body>
                  <ListGroup className="list-group-flush bg-transparent text-white">
                    <ListGroup.Item className="bg-transparent text-white">
                      {skill.level1}
                    </ListGroup.Item>
                    <ListGroup.Item className="bg-transparent text-white">
                      {skill.level2}
                    </ListGroup.Item>
                  </ListGroup>
                </Card>
              </div>
            ))}
          </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
