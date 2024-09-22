import React from 'react'

export default function Navbar() {
  return (
    <nav className='flex flex-row  justify-between mt-8 mx-28 items-center text-white  ' >
        <h1 className='text-2xl ' >Code<span className='text-yellow-400 font-bold'>Studio</span></h1>
        <ul className='flex space-x-4 justify-center items-center '>
            <li>HOME</li>
            <li>ABOUT</li>
            <li>PROJECTS</li>
            <li>SERVICES</li>
            <li><button className='bg-transparent border-2 rounded-2xl px-4 py-1  '>CONTACT US</button></li>
        </ul>

    </nav>
  )
}
