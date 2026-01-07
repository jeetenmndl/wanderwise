import React from 'react'
import CustomButton from '../common/CustomButton'
import { Button } from '../ui/button'

const Hero = () => {
  return (
    <section className='h-150 flex items-center justify-center px-52 relative overflow-hidden'>

        {/* content  */}
        <div className='flex flex-col items-center gap-10 text-white'>
            <h1 className='text-5xl font-bold'>Plan your trip with Wanderwise</h1>
            <p className='text-xl'>
                Discover the world with our travel planning tools and expert advice. Start your adventure today! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis nemo aspernatur ratione nihil. Quia id modi ipsa nesciunt accusamus et?
            </p>
            <CustomButton text="Get Started" />

        </div>

        {/* background image */}
        <div  className='absolute -z-10 left-0 top-0 w-full overflow-hidden'>
            <img className='w-full' src="https://images.unsplash.com/photo-1506260408121-e353d10b87c7?q=80&w=1228&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="wanderwise" />
        </div>

        {/* black overlay  */}
        <div className='absolute -z-5 left-0 top-0 w-full h-full bg-black opacity-60'></div>


    </section>
  )
}

export default Hero