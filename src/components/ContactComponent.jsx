import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsEnvelope } from "react-icons/bs";

export default function ContactComponent() {
    return (
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
    );
}
