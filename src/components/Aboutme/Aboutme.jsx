
import abtme from "../../assets/abtmeimg/abtme.png"


import "./Aboutme.css";



function Aboutme() {
  return (
    <>
      <div className="aboutme__color">
        <h2 className="aboutme__title" >Sobre mí</h2>
        <span className="aboutme__label"></span>
      </div>

      <div className="aboutme__section" >
        <p className="aboutme__para">
          Desde mis primeros pasos en el mundo de los bloques y la creatividad
          de Minecraft, una chispa se encendió en de mí.
          <br />
          <br />
          Me intrigaba entender cómo cada componente encajaba, cómo el código daba vida a mis
          creaciones.
          </p>
          <div className="aboutme__image">
            <p className="aboutme__para">
              Ese niño curioso que desentrañaba texturas para
              personalizar su experiencia sigue vivo en mí, impulsándome a explorar
              la intersección entre la programación, los videojuegos y la física.
            </p>
            <img className="aboutme__image--me" src={abtme} alt="" />
          </div>
          <p className="aboutme__para">
          Mi viaje es una
          búsqueda constante de conexiones, donde las líneas de código se
          entrelazan con mis experiencias y pasiones.
        </p>
      </div>
    </>
  );
}

export default Aboutme;
