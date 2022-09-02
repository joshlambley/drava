import React from "react";
import{
    FaGithubSquare,
    FaTwitterSquare,
    FaLinkedin,
    FaFacebookSquare,
    FaInstagramSquare

} from 'react-icons/fa'
const Footer = () => {
    return (
        <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
            <div>
              <h1 className='w-full text-3xl font-bold text-white'>DRAVA.</h1>
              <p className='py-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Reprehenderit quis in iure ipsa. Dolore veniam odit voluptatum ullam, 
                    ab non natus velit enim nihil reprehenderit obcaecati exercitationem at perspiciatis doloremque.
              </p>
                 <div className='flex justify-between md:w-[75%] my-6'>
                        <FaLinkedin size={30}/>
                        <FaTwitterSquare size={30}/>
                        <FaFacebookSquare size={30} />
                        <FaInstagramSquare size={30} />
                        <FaGithubSquare size={30}/>
                </div>
            </div>
            <div className='lg:col-span-2 flex justify-between mt-6'>
                <div>
                    <h6 className='font-medium text-gray-400'>Stuff</h6>
                    <ul>
                        <li className='py-2 text-sm'>Home</li>
                        <li className='py-2 text-sm'>Home</li>
                        <li className='py-2 text-sm'>Home</li>
                    </ul>
                </div>

                <div>
                    <h6 className='font-medium text-gray-400'>Stuff</h6>
                    <ul>
                        <li className='py-2 text-sm'>Home</li>
                        <li className='py-2 text-sm'>Home</li>
                        <li className='py-2 text-sm'>Home</li>
                    </ul>
                </div>

                <div>
                    <h6 className='font-medium text-gray-400'>Stuff</h6>
                    <ul>
                        <li className='py-2 text-sm'>Home</li>
                        <li className='py-2 text-sm'>Home</li>
                        <li className='py-2 text-sm'>Home</li>
                    </ul>
                </div>

                <div>
                    <h6 className='font-medium text-gray-400'>Stuff</h6>
                    <ul>
                        <li className='py-2 text-sm'>Home</li>
                        <li className='py-2 text-sm'>Home</li>
                        <li className='py-2 text-sm'>Home</li>
                    </ul>
                </div>

            </div>
           

        </div>
    )
}

export default Footer