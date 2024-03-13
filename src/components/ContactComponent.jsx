import { Container, Form, Card, Button } from "react-bootstrap";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsEnvelope } from "react-icons/bs";

export default function ContactComponent() {
  return (
    <Container>
      <Card className="p-3">
        <form target="_blank" action="https://formsubmit.co/annaedwardson@gmail.com" method="POST">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email"  name="email"/>
          </Form.Group>
          <Form.Group className="mb-3">
            <label>Name</label>
            <input type="text" placeholder="Enter name" name="name" />
          </Form.Group>
          <Form.Group className="mb-3">
            <label>Message</label>
            <textarea  name="message"></textarea>
          </Form.Group>
          <Button type="submit">Submit form</Button>
        </form>
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
