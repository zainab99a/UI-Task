import React from 'react'

export default function ServicesPage() {
  return (
    <div className='flex flex-col mx-28 mt-40 '>
           <div className='flex justify-between mt-5 mx-11 '>
        <p className= ' dash text-white text-[1.2rem] text-left '>Our Services</p>
       
       </div>
       <div className="grid grid-rows-4 lg:grid-rows-none lg:grid-cols-2 gap-4 mt-8 justify-center  items-center mx-auto text-white">
            <div className='h-72 w-[630px] p-10 bg-gradient-to-tr from-blue-900 to-blue-500 rounded-lg'>
                <h1 className='text-3xl font-bold mb-2' >Plan</h1>
                <p className='text-lg'>
                A project management tool for organizing workflow and tracking progress. Easily create tasks, assign team members, and set deadlines. Collaborate with your team and stay on top of deadlines.</p>
            </div>
            <div className='h-72 w-[630px] p-10 bg-gradient-to-tr from-green-900 to-green-500  rounded-lg'>
                <h1 className='text-3xl font-bold mb-2'>Design</h1>
                <p className='text-lg'>
           
                A design service for creating custom solutions for branding and marketing needs. Experienced designers create tailored designs that make a lasting impact. Latest design trends and techniques are used to craft stunning visuals that communicate your message.
                </p>
            </div>
            <div className='h-72 w-[630px] p-10 bg-gradient-to-tr from-yellow-900 to-yellow-500 rounded-lg'>
                <h1 className='text-3xl font-bold mb-2'>Develop</h1>
                <p className='text-lg'>
                A software development company for creating custom solutions for businesses. Experienced developers work closely with clients to create software tailored to their needs. Collaborative and transparent development process ensures the final product meets clients expectations.</p>
            </div>
            <div className='h-72 w-[630px] p-10 bg-gradient-to-tr from-purple-900 to-purple-500 rounded-lg'>
                <h1 className='text-3xl font-bold mb-2'>Deliver</h1>
                <p className='text-lg'>
                A reliable and efficient delivery service that helps businesses get their products to customers. Experienced delivery professionals use latest technology and industry best practices to ensure timely delivery. Flexible delivery options and exceptional customer service to exceed expectations.</p>
                
                </div>    
                 </div>

    </div>
  )
}
