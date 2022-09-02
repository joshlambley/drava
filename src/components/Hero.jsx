import React from "react";
import Laptop from '../assets/design.jpg'
// import Typed from "react-typed"


const Hero = () => {
    return (
        <div className='text-white bg-gradient-to-b from-[#474bff] to-[#24278d]'>
            <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
                <p className='text-white font-bold lg:text-lg '>Welcome To DRAVA.</p>
                  <h1 className='md:text-8xl sm:text-6xl text-4xl font-bold md:py-6'>Making anything possible.</h1>
                    <div>
                      <p className='md:text-5xl sm:text-4xl text-xl font-bold'>Design experts.</p>
                    </div>
                    <a href="/services"><button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black hover:bg-black hover:text-[#00df9a]'>Get Started</button></a>
             </div>
             <div className='w-full bg-white py-16 px-4'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 '>
                <img className='w-[500px] mx-auto my-4' src={Laptop} alt="/" />
                <div className='flex flex-col justify-center'>
                    <p className='font-bold text-black'>Making the impossible possible.</p>
                    <h1 className='md:text-4xl sm:text-3xl text2-xl font-bold py-2 text-black'>Simply Flawless. </h1>
                    <p className='text-black'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                    Incidunt asperiores minima amet fugit, eligendi excepturi magni omnis esse placeat! Aliquid, consequuntur neque. 
                    Soluta doloremque perferendis porro amet modi in fugit?
                    </p>
                    <a href="/services"><button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 text-black hover:bg-black hover:text-[#00df9a]'>Services</button></a>
                </div>

            </div>
        </div> 
            
             
        </div>

        
        
    )
}

export default Hero