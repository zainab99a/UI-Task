import React from 'react'
import { Link } from 'react-router-dom'
export default function ProjectsPage() {
  return (
    <div className='mt-40 mx-28'>
      
       <div className='flex justify-between mt-5'>
        <p className='dash text-white text-[1.2rem] mx-11'>Our Last Projects</p>
        <Link to="/details" className='flex items-center text-lg font-bold text-yellow-400'>
  View More
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#FBBF24" className="w-6 h-6 ml-1 text-yellow-500 transition-all">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"></path>
  </svg>
</Link>

       </div>
       <div className="grid grid-rows-4 lg:grid-rows-none lg:grid-cols-4 gap-4 mt-8">
  <div><img className="w-full h-full rounded-lg" src="https://codestudio.vercel.app/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1551650975-87deedd944c3%3Fixlib%3Drb-4.0.3%26ixid%3DMnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8%26auto%3Dformat%26fit%3Dcrop%26w%3D1974%26q%3D80&w=256&q=75" alt="" /></div>
  <div><img className="w-full h-full rounded-lg" src="https://codestudio.vercel.app/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1659482633371-c51d3a02bc81%3Fixlib%3Drb-4.0.3%26ixid%3DMnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8%26auto%3Dformat%26fit%3Dcrop%26w%3D1740%26q%3D80&w=256&q=75" alt="" /></div>
  <div><img className="w-full h-full rounded-lg" src="https://codestudio.vercel.app/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1635405076647-80cfa0f2effe%3Fixlib%3Drb-4.0.3%26ixid%3DMnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8%26auto%3Dformat%26fit%3Dcrop%26w%3D1932%26q%3D80&w=256&q=75" alt="" /></div>
  <div><img className="w-full h-full rounded-lg" src="https://codestudio.vercel.app/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1518770660439-4636190af475%3Fixlib%3Drb-4.0.3%26ixid%3DMnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8%26auto%3Dformat%26fit%3Dcrop%26w%3D1740%26q%3D80&w=256&q=75" alt="" /></div>
</div>

    </div>
  )
}
