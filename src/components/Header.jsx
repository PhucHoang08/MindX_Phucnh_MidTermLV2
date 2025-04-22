import React from 'react'

const Header = () => {
  return (
    <header className='w-full h-[50px] flex flex-row justify-between items-center bg-[#192026] px-20 py-10'>
        <h1 className='text-white font-bold text-[40px] cursor-pointer'>Anonime</h1>
        <h2 className='text-gray-500 text-[20px] cursor-pointer'>Home</h2>
        <h2 className='text-gray-500 text-[20px] cursor-pointer'>List anime</h2>
        <input 
        className=' w-[300px] bg-gray-600 text-white p-2 cursor-pointer rounded-[100px]'
        type="text" 
        placeholder='Search anime or movie'/>
    </header>
  )
}

export default Header
