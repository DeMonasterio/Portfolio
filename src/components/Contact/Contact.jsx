import "./Contact.css"
import mailIcon from "./../../assets/Icons/mailIcon.png"
import githubIcon from "./../../assets/Icons/github.png"
import linkedinIcon from "./../../assets/Icons/linkedin.png"
import cert from "../../assets/background/certificate.png"

function Contact() {
    return (
        <>
            <div className="contact__color">
                
                <div className="contact__container">
                        <ul className="contact--list">
                            <li className="list--contact">  Sobre mí</li>
                            <li className="list--contact">  Habilidades</li>
                            <li className="list--contact">   Proyectos</li>
                            <li className="list--contact">   Descargar CV</li>
                        </ul>
                        <div className="images--container">
                <a href="">
                    <img className="icon" src={mailIcon} alt="" />
                </a>
                <a href="">
                    <img className="icon" src={githubIcon} alt="" />
                </a>
                <a href="">
                    <img className="icon" src={linkedinIcon} alt="" />
                </a>
                        </div>
                </div>
            </div>
        </> 
    )
}

export default Contact;