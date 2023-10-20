import React from 'react'
import "./Header.css"

export default function Header(){
  return (
    <>
    <nav>
      <ul className='hero__navbar'>
      <li><a href="">Sobre mí</a></li>
      <li><a href="">Proyectos</a></li>
      <li><a href="">Contacto</a></li>
        <li className='cvdownload' ><a href="">Descargar CV</a></li>
        </ul>
    </nav>
    </>
  )
}
