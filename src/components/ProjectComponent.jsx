import { Container, Row, Col } from "react-bootstrap";
import { Button, Card } from "react-bootstrap";
import travelPlannerPicture from "../assets/images/PackingList_Screenshot.png";
import bookSearchPicture from "../assets/images/Screenshot_Book_Search_Engine.png";
import jatePicture from "../assets/images/jate_screenshot.png";
import weatherPicture from "../assets/images/WeatherDashboardScreenshot.png";
import projects from '../assets/projects.json'

export default function ProjectComponent() {
  
  return (
    <Container fluid className="project-section">
      <h1>Projects</h1>
      <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        {projects.map((project, index) => (
          <Col key={index} md={4} className="project-card">
            <Card>
              <Card.Img
                variant="top"
                src={project.image}
                alt={project.alt}
              />
              <Card.Body>
                <Card.Title>{project.projectName}</Card.Title>
                <Card.Text className="card-description">
                  {project.description} 
                </Card.Text>
                <hr />
                <Card.Text className="card-technology">
                  {project.technology}
                </Card.Text>
                <Container>
                  <Row>
                    <Button
                      variant="secondary"
                      href={project.github}
                      target="_blank"
                      className="github-link-button m-1"
                    >
                      GitHub Repo
                    </Button>
                    {project.deployed === '' ? '' : <Button
                      variant="secondary"
                      href={project.deployed}
                      target="_blank"
                      className="deployed-link-button m-1"
                    >
                      Deployed Link
                    </Button>}
                  </Row>
                </Container>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
