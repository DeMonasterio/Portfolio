import React from 'react'
import "./Header.css"

export default function Header() {
  return (
    <>
      <nav>
        <ul className='hero__navbar'>
          <li className='list--item' ><a className='anchors' href="#aboutMeSection">Sobre mí</a></li>
          <li className='list--item' ><a className='anchors' href="#projectsSection">Proyectos</a></li>
          <li className='list--item' ><a className='anchors' href="#contactSection">Contacto</a></li>
          <li className='cvdownload list--item' ><a className='anchors' href="">Descargar CV</a></li>
        </ul>
      </nav>
    </>
  )
}
