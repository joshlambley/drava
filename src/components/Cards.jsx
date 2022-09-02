import React from "react";
import Internet from '../assets/internet.png'
import Sketch from '../assets/sketch.png'
import Improvement from '../assets/improvement.png'
import Laptop from '../assets/design.jpg'
import Illustration from "../assets/illustration.png"

const Cards = () => {
    return (
        <><div className='text-white bg-gradient-to-b from-[#474bff] to-[#24278d]'>
            <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
                <h1 className='md:text-6xl sm:text-5xl text-4xl font-bold md:py-6 '>Services.</h1>
                {/* <p>Here at DRAVA. we offer a range of services, scroll to see what we can do for you.</p> */}
                <div className='w-full py-1 px-4'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 gap-5'>
                <img className='w-[400px] mx-auto my-2' src={Illustration} alt="/" />
                <div className='flex flex-col justify-center'>
                    <p className='font-bold'>Here at DRAVA. we offer many services.</p>
                    <h1 className='md:text-4xl sm:text-3xl text2-xl font-bold py-2'>What do we offer? </h1>
                    <p className=''>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                    Incidunt asperiores minima amet fugit, eligendi excepturi magni omnis esse placeat! Aliquid, consequuntur neque. 
                    Soluta doloremque perferendis porro amet modi in fugit?
                    </p>
                    
                </div>

            </div>
        </div>
            </div>
        </div>
        
       
        <div className='w-full py-[10rem] px-4 bg-white'>
                <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8 '>
                    <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 bg-white border'>
                        <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Internet} alt="/" />
                        <h2 className='text-2xl font-bold text-center py-8'>Web Development</h2>
                        <p className='text-center text-4xl font-bold'>Price</p>
                        <div className='text-center font-medium'>
                            <p className='py-2 border-b mx-8 mt-8'>Info</p>
                            <p className='py-2 border-b mx-8'>Info</p>
                            <p className='py-2 border-b mx-8'>Info</p>
                        </div>
                    </div>
                    <div className='w-full shadow-xl flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300 bg-white border'>
                        <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Sketch} alt="/" />
                        <h2 className='text-2xl font-bold text-center py-8'>Design</h2>
                        <p className='text-center text-4xl font-bold'>Price</p>
                        <div className='text-center font-medium'>
                            <p className='py-2 border-b mx-8 mt-8'>Info</p>
                            <p className='py-2 border-b mx-8'>Info</p>
                            <p className='py-2 border-b mx-8'>Info</p>
                        </div>
                    </div>
                    <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 bg-white border'>
                        <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Improvement} alt="/" />
                        <h2 className='text-2xl font-bold text-center py-8'>Analytics</h2>
                        <p className='text-center text-4xl font-bold'>Price</p>
                        <div className='text-center font-medium'>
                            <p className='py-2 border-b mx-8 mt-8'>Info</p>
                            <p className='py-2 border-b mx-8'>Info</p>
                            <p className='py-2 border-b mx-8'>Info</p>
                        </div>
                    </div>

                </div>

            </div></>

    )
}

export default Cards