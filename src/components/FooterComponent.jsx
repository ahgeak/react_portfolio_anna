import { Container, Row, Col, Button } from "react-bootstrap";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsEnvelope } from "react-icons/bs";

export default function FooterComponent() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container>
      <Row>
        <Col>
          <p>Developed by Anna Chuapetcharasopon</p>
        </Col>
        <Col>
          <p>Copyright © {year} </p>
        </Col>
        <Col>
          <Button variant="primary" href="https://www.linkedin.com/in/annachuapetcharasopon/" target="_blank" rel="noreferrer" className="m-2">
            <BsLinkedin />
          </Button>
          <Button variant="primary" href="https://github.com/ahgeak/" target="_blank" rel="noreferrer" className="m-2">
            <BsGithub />
          </Button>
          <Button variant="primary" href="mailto:annaedwardson@gmail.com" target="_blank" rel="noreferrer" className="m-2">
          <BsEnvelope />
          </Button>
        </Col>
      </Row>
    </Container>
  );
}
