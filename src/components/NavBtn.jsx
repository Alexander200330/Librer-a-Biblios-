import React from 'react'
import { Link, useLocation } from 'react-router-dom'

function NavBtn({path, name, padding = 'pl-3'}) {
    const pathURL = '/' + path;

  return (
    <Link to={pathURL} className={`${useLocation().pathname === pathURL ? 'text-gray-100 bg-blue-800' : 'text-white'} ${padding} py-1 text-xl font-bold hover:text-blue-300 block`}>{name}</Link>
  )
}

export default NavBtn