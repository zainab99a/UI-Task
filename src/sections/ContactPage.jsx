import React from 'react'

export default function ContactPage() {
  return (
    <div className='mt-32 mx-32 grid grid-cols-2 '>
        <div className='w-[68%]'>
        <p className='dash text-white text-[1.2rem] mx-11'>Contact</p>
    <div className='my-3 text-gray-400 text-xl'>
    <div className='flex space-x-1'>
           <div>
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"></path></svg>
           </div>
            <p>1234 Main St, Anytown, CA 12345</p>
        </div>
        <div className='flex space-x-1 '>
            <div >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"></path></svg>
            </div>
            <p>(012) 345-6789</p>
        </div>
        <div className='flex space-x-1'>
           <div>
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"></path></svg>
           </div>
            <p>hello@codestudio.com</p>
        </div>
    </div>
        <p className='my-4  text-[1.2rem] text-white spac'>We look forward to hearing from you and helping you achieve your business goals.</p>
        <h1 className='text-2xl text-white  my8' >Code<span className='text-yellow-400 font-bold'>Studio</span></h1>
        </div>
        <div className='mb-12'>
        <form action="">
     
      <div className="relative mb-6">
        <label className="flex items-center mb-2 text-gray-600 text-sm font-medium">
          Name
          <svg width="7" height="7" className="ml-1" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.11222 6.04545L3.20668 3.94744L1.43679 5.08594L0.894886 4.14134L2.77415 3.18182L0.894886 2.2223L1.43679 1.2777L3.20668 2.41619L3.11222 0.318182H4.19105L4.09659 2.41619L5.86648 1.2777L6.40838 2.2223L4.52912 3.18182L6.40838 4.14134L5.86648 5.08594L4.09659 3.94744L4.19105 6.04545H3.11222Z" fill="#EF4444" />
          </svg>
        </label>
        <input
          type="text"
          id="name"
          className="block w-full h-11 px-5 py-2.5 leading-7 text-base font-normal shadow-xs text-gray-900 bg-[#0e052b78] border border-gray-300 rounded-full placeholder-gray-400 focus:outline-none"
          placeholder="Name"
          required
        />
      </div>

     
      <div className="relative mb-6">
        <label className="flex items-center mb-2 text-gray-600 text-sm font-medium">
          Email
          <svg width="7" height="7" className="ml-1" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.11222 6.04545L3.20668 3.94744L1.43679 5.08594L0.894886 4.14134L2.77415 3.18182L0.894886 2.2223L1.43679 1.2777L3.20668 2.41619L3.11222 0.318182H4.19105L4.09659 2.41619L5.86648 1.2777L6.40838 2.2223L4.52912 3.18182L6.40838 4.14134L5.86648 5.08594L4.09659 3.94744L4.19105 6.04545H3.11222Z" fill="#EF4444" />
          </svg>
        </label>
        <input
          type="email"
          id="email"
          className="block w-full h-11 px-5 py-2.5 leading-7 text-base font-normal shadow-xs text-gray-900 bg-[#0e052b78] border border-gray-300 rounded-full placeholder-gray-400 focus:outline-none"
          placeholder="name@pagedone.com"
          required
        />
      </div>

     
      <div className="relative mb-6">
        <label className="flex items-center mb-2 text-gray-600 text-sm font-medium">
          Message
          <svg width="7" height="7" className="ml-1" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.11222 6.04545L3.20668 3.94744L1.43679 5.08594L0.894886 4.14134L2.77415 3.18182L0.894886 2.2223L1.43679 1.2777L3.20668 2.41619L3.11222 0.318182H4.19105L4.09659 2.41619L5.86648 1.2777L6.40838 2.2223L4.52912 3.18182L6.40838 4.14134L5.86648 5.08594L4.09659 3.94744L4.19105 6.04545H3.11222Z" fill="#EF4444"></path>
          </svg>
        </label>
        <textarea
          className="block w-full h-40 px-4 py-2.5 text-base leading-7 font-normal shadow-xs text-gray-900 bg-[#0e052b78] border border-gray-300 rounded-2xl placeholder-gray-400 focus:outline-none resize-none"
          placeholder="Write a message..."
          required
        ></textarea>
      </div>

    
      <button className="w-full h-12 bg-transparent border hover:bg-[#0e052b78] transition-all duration-700 rounded-full shadow-xs text-white text-base font-semibold leading-6 mt-6">
        Send Message
      </button>
    </form>
    </div>
    </div>
  )
}
