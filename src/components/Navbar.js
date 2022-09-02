import React, {useState} from "react";
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

const Navbar = () => {
  const [nav, setNav] = useState(false)

  const handleNav = () => {
      setNav(!nav)
  }

    return (
        <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
            <h1 className='w-full text-3xl font-bold text-white'>DRAVA.</h1>
            <ul className='hidden md:flex'>
                <a href="/"><li className='p-4 text-white hover:text-[#00df9a]'>Home</li></a>
                <a href=""><li className='p-4 text-white hover:text-[#00df9a]'>Company</li></a> 
                <a href="/services"><li className='p-4 text-white hover:text-[#00df9a]'>Services</li></a>
                <a href="/about"><li className='p-4 text-white hover:text-[#00df9a]'>About</li></a>
                <a href="/contact"><li className='p-4 text-black hover:bg-black hover:text-[#00df9a] bg-[#00df9a] rounded-md'>Contact</li></a>
            </ul>
            <div onClick={handleNav} className='block md:hidden cursor-pointer'>
                {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
             
            </div>
            <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'fixed left-[-100%]'}>
            <h1 className='w-full text-3xl font-bold text-white m-4' >DRAVA.</h1>

                <ul className='p-4 uppercase'>
                <a href="/"><li className='p-4 border-b border-gray-400 text-white hover:text-[#00df9a]'>Home</li></a>
                <a href=""><li className='p-4 border-b border-gray-400 text-white hover:text-[#00df9a]'>Company</li></a>
                <a href="/services"><li className='p-4 border-b border-gray-400 text-white hover:text-[#00df9a]'>Services</li></a>
                <a href="/about"><li className='p-4 border-b border-gray-400 text-white hover:text-[#00df9a]'>About</li></a>
                <a href="/contact"><li className='p-4 border-b border-gray-400 text-white hover:text-[#00df9a]'>Contact</li></a>
                </ul>
            </div>
        </div>
    )
}

export default Navbar