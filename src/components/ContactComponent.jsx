import { Container, Form, Card, Button } from "react-bootstrap";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsEnvelope } from "react-icons/bs";

export default function ContactComponent() {
  return (
    <Container>
      <Card className="p-3">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control placeholder="Enter name" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" />
          </Form.Group>
          <Button type="submit">Submit form</Button>
        </Form>
      </Card>
      <Card>
        <ul className="contact-links">
          <li className="contact-icons">
            <a
              href="https://www.linkedin.com/in/annachuapetcharasopon/"
              target="_blank"
              rel="noreferrer"
            >
              <BsLinkedin />
            </a>
          </li>
          <li className="contact-icons">
            <a
              href="https://github.com/ahgeak/"
              target="_blank"
              rel="noreferrer"
            >
              <BsGithub />
            </a>
          </li>
          <li className="contact-icons">
            <a
              href="mailto:annaedwardson@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <BsEnvelope />
            </a>
          </li>
        </ul>
      </Card>
    </Container>
  );
}
