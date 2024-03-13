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
        {projects.map((project) => (
          <Col md={4} className="project-card">
            <Card>
              <Card.Img
                variant="top"
                src={project.image}
                alt="Family Chore Screenshot"
              />
              <Card.Body>
                <Card.Title>Family Chore</Card.Title>
                <Card.Text className="card-description">
                  A full stack program that empowers parents and children alike
                  to effortlessly manage household chores and earnings. <hr />
                  Technologies used: MongoDB, Express, React, Node, JSON Web
                  Token, Apollo, Chakra
                </Card.Text>
                <Container>
                  <Row>
                    <Button
                      variant="secondary"
                      href="https://github.com/Four-Moons-Tech/Family-Chore-Planner"
                      target="_blank"
                      className="github-link-button m-1"
                    >
                      GitHub Repo
                    </Button>
                    {project.deployed === '' ? '' : <Button
                      variant="secondary"
                      href="https://family-chore-planner.onrender.com"
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
        {/* <Col md={4} className="project-card">
          <Card>
            <Card.Img variant="top" src="https://placehold.co/600x400" alt='Family Chore Screenshot' />
            <Card.Body>
              <Card.Title>Family Chore</Card.Title>
              <Card.Text>
              A full stack program that empowers parents and children alike to effortlessly manage household chores and earnings. <hr/>
              Technologies used: MongoDB, Express, React, Node, JSON Web Token, Apollo, Chakra
              </Card.Text>
              <Container>
                <Row>
                  <Button
                    variant="secondary"
                    href="https://github.com/Four-Moons-Tech/Family-Chore-Planner"
                    target="_blank"
                    className="github-link-button m-1"
                  >
                    GitHub Repo
                  </Button>
                  <Button
                    variant="secondary"
                    href="https://family-chore-planner.onrender.com"
                    target="_blank"
                    className="deployed-link-button m-1"
                  >
                    Deployed Link
                  </Button>
                </Row>
              </Container>
            </Card.Body>
          </Card>
        </Col> */}
        {/* <Col md={4} className="project-card">
          <Card>
            <Card.Img variant="top" src={travelPlannerPicture} alt='Travel Planner Screenshot' />
            <Card.Body>
              <Card.Title>Packing List Travel Planner</Card.Title>
              <Card.Text>
              A program to help you plan your upcoming trip by creating a packing list. <hr/>
                Technologies used: Node, Express, Handlebars.js, mySQL, Sequelize, Materialized, Figma, JawsDB, Bcrypt
              </Card.Text>
              <Container>
                <Row>
                  <Button
                    variant="secondary"
                    href="https://github.com/ahgeak/packing_list_travel_planner"
                    target="_blank"
                    className="github-link-button m-1"
                  >
                    GitHub Repo
                  </Button>
                  <Button
                    variant="secondary"
                    href="https://shielded-earth-91970-0db761988706.herokuapp.com/"
                    target="_blank"
                    className="deployed-link-button m-1"
                  >
                    Deployed Link
                  </Button>
                </Row>
              </Container>
            </Card.Body>
          </Card>
        </Col> */}
        {/* <Col md={4} className="project-card">
          <Card>
            <Card.Img variant="top" src={bookSearchPicture} alt='Book Search Screenshot' />
            <Card.Body>
              <Card.Title>Book Search Engine</Card.Title>
              <Card.Text>
                Google Books API search engine that allows users to search and save books.<hr/>
                Technologies used: MongoDB, Express, React, Node, GraphQL
              </Card.Text>
              <Container>
                <Row>
                  <Button
                    variant="secondary"
                    href="https://github.com/ahgeak/book_search_engine"
                    target="_blank"
                    className="github-link-button m-1"
                  >
                    GitHub Repo
                  </Button>
                  <Button
                    variant="secondary"
                    href=""
                    target="_blank"
                    className="deployed-link-button m-1"
                  >
                    Deployed Link
                  </Button>
                </Row>
              </Container>
            </Card.Body>
          </Card>
        </Col> */}
        {/* <Col md={4} className="project-card">
          <Card>
            <Card.Img variant="top" src={jatePicture} alt='Text Editor Screenshot' />
            <Card.Body>
              <Card.Title>Text Editor</Card.Title>
              <Card.Text>
              A Progressive Web Application text editor program that runs in the browser. <hr/>
              Technologies used: JavaScript, Webpack, Workbox, Render, IndexedDB
              </Card.Text>
              <Container>
                <Row>
                  <Button
                    variant="secondary"
                    href="https://github.com/ahgeak/text_editor_progressive_web_app"
                    target="_blank"
                    className="github-link-button m-1"
                  >
                    GitHub Repo
                  </Button>
                  <Button
                    variant="secondary"
                    href="https://text-editor-progressive-web-app.onrender.com"
                    target="_blank"
                    className="github-link-button m-1"
                  >
                    Deployed Link
                  </Button>
                </Row>
              </Container>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="project-card">
          <Card>
            <Card.Img variant="top" src={weatherPicture} alt='Weather Dashboard Screenshot' />
            <Card.Body>
              <Card.Title>Weather Dashboard Trip Planner</Card.Title>
              <Card.Text>
                Program to plan a trip based on the upcoming local weather of searched cities. <hr/>
                Technologies used: JavaScript, third party API, CSS, HTML
              </Card.Text>
              <Container>
                <Row>
                  <Button
                    variant="secondary"
                    href="https://github.com/ahgeak/weather-dashboard-trip-planner"
                    target="_blank"
                    className="github-link-button m-1"
                  >
                    GitHub Repo
                  </Button>
                  <Button
                    variant="secondary"
                    href="https://ahgeak.github.io/weather-dashboard-trip-planner/"
                    target="_blank"
                    className="deployed-link-button m-1"
                  >
                    Deployed Link
                  </Button>
                </Row>
              </Container>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="project-card">
          <Card>
            <Card.Img variant="top" src={weatherPicture} alt='Weather Dashboard Screenshot' />
            <Card.Body>
              <Card.Title>Weather Dashboard Trip Planner</Card.Title>
              <Card.Text>
                Technologies used:
              </Card.Text>
              <Container>
                <Row>
                  <Button
                    variant="secondary"
                    href="https://github.com/ahgeak/book_search_engine"
                    target="_blank"
                    className="github-link-button m-1"
                  >
                    GitHub Repo
                  </Button>
                  <Button
                    variant="secondary"
                    href=""
                    target="_blank"
                    className="deployed-link-button m-1"
                  >
                    Deployed Link
                  </Button>
                </Row>
              </Container>
            </Card.Body>
          </Card>
        </Col> */}
      </Row>
    </Container>
  );
}
