import React from "react"

const Nav = () => {
  return (
    <div>
         <nav className="bg-yellow-400 shadow-md ">
   <div className="container mx-auto px-4 py-2 flex justify-between items-center ">
    <a className="text-2xl font-bold text-black hover:underline" href="/">
     Zubii....
    </a>
    <div className="space-x-4">
     <a className="text-black hover:underline font-bold hover:text-white transition duration-700 ease-in-out" href="/">
      Home
     </a>
     <a className="text-black hover:underline font-bold hover:text-white transition duration-700 ease-in-out" href="/About">
      About
     </a>
     <a className="text-black hover:underline font-bold hover:text-white transition duration-700 ease-in-out" href="/Services">
      Services
     </a>
     <a className="text-black hover:underline font-bold hover:text-white transition duration-700 ease-in-out" href="/Contact">
      Contact
     </a>
    </div>
   </div>
  </nav>
      
    </div>
  )
}

export default Nav
