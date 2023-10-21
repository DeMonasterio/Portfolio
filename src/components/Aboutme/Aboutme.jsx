
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
        <div>


        <p className="aboutme__para  mobileyes">
            Desde mis primeros pasos en el mundo de los bloques y la creatividad
            de Minecraft, una chispa se encendió en de mí.
            <br />
            <br />
            Me intrigaba entender cómo cada componente encajaba, cómo el código daba vida a mis
            creaciones.
          </p>


          <div className="aboutme__image">
            <div className="aboutme__imagediv">
          <p className="aboutme__para paranotmobile">
            Desde mis primeros pasos en el mundo de los bloques y la creatividad
            de Minecraft, una chispa se encendió en de mí.
            <br />
            <br />
            Me intrigaba entender cómo cada componente encajaba, cómo el código daba vida a mis
            creaciones.
          </p>
              <p className="aboutme__para">
                Ese niño curioso que desentrañaba texturas para
                personalizar su experiencia sigue vivo en mí, impulsándome a explorar
                la intersección entre la programación, los videojuegos y la física.
              </p>
              <p className="aboutme__para startline">
                Mi viaje es una
                búsqueda constante de conexiones, donde las líneas de código se
                entrelazan con mis experiencias y pasiones.
              </p>
            </div>
            <img className="aboutme__image--me" src={abtme} alt="" />
          </div>
          <p className="aboutme__para endline">
            Mi viaje es una
            búsqueda constante de conexiones, donde las líneas de código se
            entrelazan con mis experiencias y pasiones.
          </p>
        </div>
        <img className="aboutme__image--me image--2" src={abtme} alt="" />
      </div>
    </>
  );
}

export default Aboutme;
