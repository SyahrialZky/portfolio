import React from 'react'
import NavList from './navlist'

const MenuOverlay = ({navLinks}) => {
  return (
    <ul className = "flex flex-col gap-48 py-4 items-center justify-center min-h-screen">
       {
        navLinks.map((link, index) => (
          <li key = {index}>
            <NavList href={link.path} title={link.title} />
          </li>
        ))
       }
    </ul>
  )
}

export default MenuOverlay