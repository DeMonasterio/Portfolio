import "./Contact.css"
import mailIcon from "./../../assets/Icons/mailIcon.png"
import githubIcon from "./../../assets/Icons/github.png"
import linkedinIcon from "./../../assets/Icons/linkedin.png"
import Curriculum from "../../assets/cv/deMonasterioCv.pdf"

function Contact() {
    return (
        <>
            <div className="contact__color">

                <div className="contact__container" id="contactSection" >
                    <ul className="contact--list">
                    <a href="#aboutMeSection"><li className="list--contact">Sobre mí</li></a>
                     <a href="#skillSection"><li className="list--contact">Habilidades</li></a>
                        <a href="#projectsSection"><li className="list--contact">Proyectos</li></a>
                        <a download="" href={Curriculum}><li className="list--contact">Descargar CV</li></a>
                    </ul>


                        <div className="images--container">
                            <a className="anchorcontact" target="_blank" href="mailto:juanmanueldemonasterio@gmail.com">
                                <img className="icon" src={mailIcon} alt="Mail icon" />
                            </a>
                            <a className="anchorcontact" target="_blank" href="https://github.com/DeMonasterio">
                                <img className="icon" src={githubIcon} alt="Github Icon" />
                            </a>
                            <a className="anchorcontact" href="https://www.linkedin.com/in/demonasterio/" target="_blank"  >
                                <img className="icon" src={linkedinIcon} alt="Linkedin icon" />
                            </a>
                        </div>
                </div>
            </div>
        </>
    )
}

export default Contact;