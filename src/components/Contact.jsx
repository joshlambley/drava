import React from "react";
import { Wrapper, Status } from "@googlemaps/react-wrapper";

const Contact = () => {
    return (
        <div className='text-white bg-gradient-to-b from-[#474bff] to-[#24278d]'>
            <div className='max-w-[1100px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
                <h1 className='md:text-6xl sm:text-5xl text-4xl font-bold md:py-6 '>Contact.</h1>
                
            <form className='m-4 flex flex-col p-3 w-200 rounded-md text-black' action="">
            <input className='m-4 flex p-3 w-200 rounded-md text-black' type="name" placeholder="Enter Name" />
            <input className='m-4 flex p-3 w-200 rounded-md text-black' type="email" placeholder="Enter Email" />
            <input className='m-4 flex p-3 w-200 rounded-md text-black' type="message" placeholder="Enter Message" />
            <button className='bg-[#00df9a] w-[200px] rounded-md font-medium ml-4 my-6 mx-auto py-3 px-6 text-black hover:bg-black hover:text-[#00df9a]' type="submit">Submit</button>
            </form>
             </div>

             
            

        </div>

    )
}

export default Contact