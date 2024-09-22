import React from 'react'

export default function HeroPage() {
    return (
        <div className='mt-20 mx-28'>
            <p className='text-lg font-bold text-yellow-400 uppercase'>A world-class digital agency</p>
            <div className='w-1/2'>
                <h1 className='text-white text-[4rem] mt-4 '>
                    We make amazing
                    digital products for
                    your business
                </h1>
            </div>
            <a href='#contact' className='flex  items-center justify-center bg-yellow-400 rounded-2xl px-2 py-2 w-48  text-indigo-950 font-semibold mt-5' >CONTACT US  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#1F2937" class="w-6 h-6 ml-1 text-yellow-500 transition-all"><path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"></path></svg></a>
        </div>
    )
}
