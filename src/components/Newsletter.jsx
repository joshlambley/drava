import React from "react";

const Newsletter = () => {
    return (
        <div className='w-full py-16 text-white px-4'>
            <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
                <div className='lg:col-span-2 my-4'>
                    <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Sign up to hear the latest from DRAVA.</h1>
                    <p className=''>Our weekly Newsletter has everything you need to know about our exciting new journey.</p>
                </div>
                  <div className='my-4'>
                      <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
                          <input className='p-3 w-full rounded-md text-black' type="email" placeholder="Enter Email" />
                          <button className='bg-[#00df9a] w-[200px] rounded-md font-medium ml-4 my-6 mx-auto py-3 px-6 text-black hover:text-[#FFF]'>Notify Me</button>
                      </div>  
                      <p>We care about about the protection of your data. Read our  <a className='text-[#00df9a]' href="/privacypolicy">Privacy Policy.</a></p>
                  </div>
                 

            </div>

        </div>
    )
}

export default Newsletter