import { Container, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import resume from "../assets/images/Anna_Chuapetcharasopon_Resume.pdf";

export default function ResumeComponent() {
    return (
        <Container>
            <iframe src={resume} width="100%" height="500px" />
            {/* <Button> */}
                <Link to={ resume } className="d-flex justify-content-center" target="_blank" download>Click To Download Resume</Link>
            {/* </Button> */}
        </Container>
    )
}
