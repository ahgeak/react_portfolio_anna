import { Container, Row, Col } from "react-bootstrap";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsEnvelope } from "react-icons/bs";

export default function FooterComponent() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container className="sticky-bottom">
      <Row>
        <Col>
          <h3>Developed by Anna Chuapetcharasopon</h3>
        </Col>
        <Col>
          <h3>Copyright © {year} </h3>
        </Col>
        <Col>
            <ul className="contact-links">
                <li className="contact-icons">
                    <a href="https://www.linkedin.com/in/annachuapetcharasopon/" target="_blank" rel="noreferrer">
                        <BsLinkedin />
                    </a>
                </li>
                <li className="contact-icons">
                    <a href="https://github.com/ahgeak/" target="_blank" rel="noreferrer">
                        <BsGithub />
                    </a>
                </li>
                <li className="contact-icons">
                    <a href="mailto:annaedwardson@gmail.com" target="_blank" rel="noreferrer">
                        <BsEnvelope />
                    </a>
                </li>
            </ul>
        </Col>
      </Row>
    </Container>
  );
}
