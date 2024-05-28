import React from 'react'
import Link from 'next/link'

const NavList = ({href, title}) => {
  return (
    <Link className='block py-2 px-4 text-gray-400 sm:text-lg rounded md:p-0 hover:text-white' href={href}>{title}</Link>
  )
}

export default NavList