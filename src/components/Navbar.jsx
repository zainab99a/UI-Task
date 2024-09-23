import React from 'react'

export default function Navbar() {
  return (
    <nav className='flex flex-row  justify-between mt-8 mx-28 items-center text-white  ' >
        <h1 className='text-2xl ' >Code<span className='text-yellow-400 font-bold'>Studio</span></h1>
        <ul className='flex space-x-4 justify-center items-center '>
            <li><a href="/">HOME</a></li>
            <li><a href="#about">ABOUT</a></li>
            <li><a href="#projects">PROJECTS</a></li>
            <li><a href="#services">SERVICES</a></li>
            <li><a className='bg-transparent border-2 rounded-2xl px-4 py-2  ' href='#contact'>CONTACT US</a></li>
        </ul>

    </nav>
  )
}
