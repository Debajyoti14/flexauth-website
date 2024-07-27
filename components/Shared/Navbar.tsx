import React from 'react'

const Navbar = () => {
  return (
    <nav className='absolute mx-auto w-screen z-50 mt-5'>
        <div className='relative flex items-center px-10 border rounded-full py-2 mx-10'>
            <div className=' flex items-center gap-2'>
                <img src="/logo_dark.png" alt="" className='w-12' />
                <h1 className=' text-2xl font-semibold'>Flexauth </h1>
            </div>
        </div>
    </nav>
  )
}

export default Navbar