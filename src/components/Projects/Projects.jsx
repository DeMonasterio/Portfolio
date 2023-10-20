import { lazy, useState } from "react";
import "./Projects.css";
function Projects() {


    const [projectTitle, setProjectTitle] = useState("Introducción a la física")
    const [urlIframe, seturlIframe] = useState("https://demonasterio.github.io/ProyectoUTN/")
    const [count, setCount] = useState(0)


    if (urlIframe != "https://demonasterio.github.io/ProyectoUTN/" && count === 0) {
        seturlIframe("https://demonasterio.github.io/ProyectoUTN/")
        setProjectTitle("Introducción  a la física")
    } else if (urlIframe === "https://demonasterio.github.io/ProyectoUTN/" && count === 1) {
        seturlIframe("https://demonasterio.github.io/Encriptador/")
        setProjectTitle("Encriptador de texto")
    }

    const handleSliderLeft = (e) => {
        setCount(count - 1)
    }

    const handleSliderRight = (e) => {
        setCount(count + 1)
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


                <div className="projects">
                    <h2 className="projects__titles" >{projectTitle}</h2>

                    <section className="project__section">
                        <div className="slider__order">
                        <div onClick={handleSliderLeft} className="projects__slider">
                            <span className="project__arrow--left"></span>
                            <span className="project__arrow--left"></span>
                        </div>
                        <div onClick={handleSliderRight} className="projects__slider--right">
                            <span className="project__arrow--right"></span>
                            <span className="project__arrow--right"></span>
                        </div>
                        </div>
                        <iframe className="image__project" src={urlIframe} frameborder="0"></iframe>
                    </section>
                </div>


            </div>
        </>
    );
}

export default Projects;