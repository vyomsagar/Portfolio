import Particle from "../Particle";
import { Container, Row, Col, Button, Card } from "react-bootstrap";

export const Projects = () => {
  return (
    <div className="relative min-h-screen w-full bg-black text-white">
      <Particle />
      <Container className="pt-[10%]">
        <h1 className="text-3xl text-center mb-8 underline">My Projects</h1>
        <Row className="justify-content-center text-center">
          <Col md={4} className="my-4">
            <Card
              style={{
                width: "18rem",
                background: "transparent",
                border: "1px solid white",
                color: "white",
              }}
            >
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make
                  up the bulk of the card's content.
                </Card.Text>
                <Button className="mx-2" variant="primary">GitHub</Button>
                <Button className="mx-2" variant="primary">Demo</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} className="my-4">
            <Card
              style={{
                width: "18rem",
                background: "transparent",
                border: "1px solid white",
                color: "white",
              }}
            >
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make
                  up the bulk of the card's content.
                </Card.Text>
                <Button className="mx-2" variant="primary">GitHub</Button>
                <Button className="mx-2" variant="primary">Demo</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} className="my-4">
            <Card
              style={{
                width: "18rem",
                background: "transparent",
                border: "1px solid white",
                color: "white",
              }}
            >
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make
                  up the bulk of the card's content.
                </Card.Text>
                <Button className="mx-2" variant="primary">GitHub</Button>
                <Button className="mx-2" variant="primary">Demo</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="justify-content-center text-center">
          <Col md={4} className="my-4">
            <Card
              style={{
                width: "18rem",
                background: "transparent",
                border: "1px solid white",
                color: "white",
              }}
            >
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make
                  up the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} className="my-4">
            <Card
              style={{
                width: "18rem",
                background: "transparent",
                border: "1px solid white",
                color: "white",
              }}
            >
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make
                  up the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} className="my-4">
            <Card
              style={{
                width: "18rem",
                background: "transparent",
                border: "1px solid white",
                color: "white",
              }}
            >
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make
                  up the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
