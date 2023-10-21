import { useState } from "react";
import "./Projects.css";

import ecom from "../../assets/projects-images/ecom.png"
import encrip from "../../assets/projects-images/encrip.png"
import physics from "../../assets/projects-images/physics.png"
import arrow from "../../assets/projects-images/Itemarrow.png"


function Projects() {
    // const [projectTitle, setProjectTitle] = useState("Introducción a la física")
    // const [urlIframe, seturlIframe] = useState("https://demonasterio.github.io/ProyectoUTN/")
    // const [count, setCount] = useState(0)
    // if (urlIframe != "https://demonasterio.github.io/ProyectoUTN/" && count === 0) {
    //     seturlIframe("https://demonasterio.github.io/ProyectoUTN/")
    //     setProjectTitle("Introducción  a la física")
    // } else if (urlIframe === "https://demonasterio.github.io/ProyectoUTN/" && count === 1) {
    //     seturlIframe("https://demonasterio.github.io/Encriptador/")
    //     setProjectTitle("Encriptador de texto")
    // }
    // const handleSliderLeft = (e) => {
    //     setCount(count - 1)
    // }
    // const handleSliderRight = (e) => {
    //     setCount(count + 1)
    // }


    const [actualImage, setactualImage] = useState(physics)
    const [actualCaption, setactualCaption] = useState("")
    const handleLeft = () => {
        actualImage === physics ? setactualImage(encrip) :
            actualImage === encrip ? setactualImage(ecom) :
                actualImage === ecom ? setactualImage(physics) : setactualImage(physics);

        actualImage === physics ? setactualCaption("Encriptador de texto") :
            actualImage === encrip ? setactualCaption("E-Commerce") :
                actualImage === ecom ? setactualCaption("Introduccion a la física") : setactualCaption("Error 404")

    }
    const handleRight = () => {
        actualImage === physics ? setactualImage(ecom) :
            actualImage === ecom ? setactualImage(encrip) :
                actualImage === encrip ? setactualImage(physics) : setactualImage(physics)

        actualImage === physics ? setactualCaption("E-Commerce") :
            actualImage === encrip ? setactualCaption("Introduccion a la física") :
                actualImage === ecom ? setactualCaption("Encriptador de texto") : setactualCaption("Error 404")
    }

    return (
        <>
            <div className="projects__color">
                <div className="projects__section" >
                    <h2 className="projects__title" >Proyectos</h2>
                    <span className="projects__label"></span>
                </div>
                <p className="projects__para">
                    Explorar el mundo del código y la física me llevó a crear proyectos que
                    fusionan creatividad y conocimiento.
                    <br />
                    <br />
                    Uno de mis logros más gratificantes
                    fue la creación de una página introductoria a los conceptos esenciales
                    de la física.
                    <br />
                    <br />
                    Lo que hace que este proyecto sea aún más especial es que
                    logre mantenerme fiel a mi desafío de no utilizar JavaScript, demostrando que es posible brindar una experiencia interactiva puramente con html y css.
                    <br />
                    <br />
                    Esta página se convirtió en un espacio pedagógico donde las
                    ondas, las fuerzas y las energías cobran vida sin necesidad de scripts.
                    También realicé un encriptador de texto como proyecto aparte en donde se
                    destaca el responsive design.
                </p>



                <div className="projects--container">
                    <div className="project--slider" >
                        <img className="arrow arrow--left" onClick={handleLeft} src={arrow} alt="" />
                    </div>

                    <div className="container--project">
                        <div className="project-caption" >
                            <h3>{actualCaption}</h3>
                        </div>
                        <div className="hermano">
                            <img className="projects--images" src={actualImage} alt="" />
                        </div>
                            <div className="seemorebtn">
                                <button className="btn--sm">See more</button>
                            </div>
                    </div>

                    <div className="project--slider" >
                        <img className="arrow arrow--right" onClick={handleRight} src={arrow} alt="" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Projects;
