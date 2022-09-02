import React from "react";
import Laptop from '../assets/design.jpg'

const Analytics = () => {
    return (
        <div className='w-full bg-white py-16 px-4'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 '>
                <img className='w-[500px] mx-auto my-4' src={Laptop} alt="/" />
                <div className='flex flex-col justify-center'>
                    <p className='font-bold'>Making the impossible possible.</p>
                    <h1 className='md:text-4xl sm:text-3xl text2-xl font-bold py-2'>Simply Flawless. </h1>
                    <p className=''>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                    Incidunt asperiores minima amet fugit, eligendi excepturi magni omnis esse placeat! Aliquid, consequuntur neque. 
                    Soluta doloremque perferendis porro amet modi in fugit?
                    </p>
                    <a href="/services"><button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 text-black'>Services</button></a>
                </div>

            </div>
        </div>
    )
}

export default Analytics
