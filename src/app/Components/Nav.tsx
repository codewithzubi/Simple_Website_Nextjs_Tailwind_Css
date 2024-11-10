import React from 'react'

const Nav = () => {
  return (
    <div>
         <nav className="bg-yellow-400 shadow-md">
   <div className="container mx-auto px-4 py-2 flex justify-between items-center">
    <a className="text-2xl font-bold text-black hover:underline" href="/">
     WebDev
    </a>
    <div className="space-x-4">
     <a className="text-gray-600 hover:text-blue-600" href="/">
      Home
     </a>
     <a className="text-gray-600 hover:text-blue-600" href="/about">
      About
     </a>
     <a className="text-gray-600 hover:text-blue-600" href="/services">
      Services
     </a>
     <a className="text-gray-600 hover:text-blue-600" href="/contact">
      Contact
     </a>
    </div>
   </div>
  </nav>
      
    </div>
  )
}

export default Nav
