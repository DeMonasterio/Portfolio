import React from 'react'
import "./Header.css"

export default function Header(){
  return (
    <>
    <nav>
      <ul className='hero__navbar'>
      <li className='list--item' ><a href="">Sobre mí</a></li>
      <li className='list--item' ><a href="">Proyectos</a></li>
      <li className='list--item' ><a href="">Contacto</a></li>
        <li className='cvdownload list--item' ><a href="">Descargar CV</a></li>
        </ul>
    </nav>
    </>
  )
}
