import React from 'react'
import CustomButton from '../common/CustomButton'

const Navbar = () => {
  return (
    <header className='flex justify-between items-center px-20 py-4'>
        {/* left navbar  */}
        <div>
            <h2 className='text-4xl font-bold'>WanderWise</h2>
        </div>

        {/* right navbar  */}
        <div className='flex items-center gap-16'>
            <nav className='flex items-center gap-6 [&>a]:text-gray-500 [&>a]:text-lg [&>a]:font-medium [&>a]:hover:text-purple-600'>
                <a href="#">Features</a>
                <a href="#">About</a>
                <a href="#">Famous Trips</a>
                <a href="#">Contact</a>
            </nav>
            <div>
                <CustomButton text="Sign in" />
            </div>
        </div>
    </header>
  )
}

export default Navbar