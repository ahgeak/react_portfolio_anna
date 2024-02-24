import { Container, Row, Col } from "react-bootstrap";
import { Button, Card } from "react-bootstrap";

export default function ProjectComponent() {
  return (
    <Container fluid className="project-section">
      <h1>Projects</h1>
      <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
          <Card>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Packing List Travel Planner</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button
                variant="primary"
                href="https://github.com/ahgeak/packing_list_travel_planner"
                target="_blank"
                className="github-link-button"
              >
                GitHub Link
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col className="project-card">
          <Card>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>GenZ Slang Translator</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button
                variant="primary"
                href="https://github.com/ahgeak/gen_z_slang_translator"
                target="_blank"
                className="github-link-button"
              >
                GitHub Link
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
