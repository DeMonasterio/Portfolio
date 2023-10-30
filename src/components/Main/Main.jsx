import React from 'react'
import "./Main.css"
import Header from "../Header/Header.jsx"

function Main() {
  return (
    <>
    <div className='hero__title' id='mainSection'>
    <h1 className='first__title'>Juan Manuel de Monasterio</h1>
    <h2 className='hero__subtitle' >Full-Stack Web Developer</h2>
    </div>
    <div className='main__section'>
    <Header/>
      <p className='main__para'>¡Hola, soy Juan Manuel! Mi historia comenzó con la curiosidad 
        y los videojuegos.
        <br/>
        <br/>
         A medida que crecí fui aprendiendo y aquí te
         invito a explorar mi trayectoría, donde voy saltando entre los 
         videojuegos, mi amor por la física y como todo eso se relaciona 
         con la programación.</p>
    </div>
    </>
  )
}


export default Main;