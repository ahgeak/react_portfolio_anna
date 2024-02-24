import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import picture from "../../src/assets/images/Photo_of_Anna.jpg";

export default function AboutComponent() {
    return (
        <Container fluid className="about-section">
            <Container>
                <Row style={{ justifyContent: "center", padding: "10px"}}>
                    <Col style={{ justifyContent: "center" }}>
                        <h1>About Me</h1>
                        <Card className="about-card">
                            <Card.Body>
                                <h3>
                                    Hi! My name is Anna.
                                </h3>
                                <p>
                                    I'm a passionate full stack developer.
                                </p>
                                <p>
                                    I am originally from Utqiagvik, Alaska, the northern most city in Alaska. I enjoy programming, playing board games, camping, and hiking with my partner and our pomeranian Rory. I have a Bachelor degree from Dartmouth College with a double major in Film & Media Studies and Native American Studies. I have also have a Master of Arts degree in Education focusing on Learning, Design, and Technology. I have worked for over ten years in the field of education.
                                </p>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <img src={picture} alt="picture of Anna" className="about-picture" />
                    </Col>
                </Row>
                <Row className="skills-wrapper">
                    <Col className="skills-wrapper">
                        {/* add skills icon bar */}
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}
