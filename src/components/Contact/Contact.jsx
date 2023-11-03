import "./Contact.css"
import mailIcon from "./../../assets/Icons/mailIcon.png"
import githubIcon from "./../../assets/Icons/github.png"
import linkedinIcon from "./../../assets/Icons/linkedin.png"
import cert from "../../assets/background/certificate.png"

function Contact() {
    return (
        <>
            <div className="contact__color">

                <div className="contact__container" id="contactSection" >
                    <ul className="contact--list">
                    <a href="#aboutMeSection"><li className="list--contact">Sobre mí</li></a>
                        <li className="list--contact">  Habilidades</li>
                        <a href="#projectsSection"><li className="list--contact">Proyectos</li></a>
                        <li className="list--contact">Descargar CV</li>
                    </ul>


                        <div className="images--container">
                            <a className="anchorcontact" href="">
                                <img className="icon" src={mailIcon} alt="" />
                            </a>
                            <a className="anchorcontact" href="https://github.com/DeMonasterio?tab=repositories">
                                <img className="icon" src={githubIcon} alt="" />
                            </a>
                            <a className="anchorcontact" href="">
                                <img className="icon" src={linkedinIcon} alt="" />
                            </a>
                        </div>
                </div>
            </div>
        </>
    )
}

export default Contact;