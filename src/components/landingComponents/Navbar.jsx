import React from 'react'
import CustomButton from '../common/CustomButton'

const Navbar = () => {
    return (
        <header className='flex justify-between items-center px-20 py-5'>
            {/* left navbar  */}
            <div className='flex items-center gap-4'>
                <img src="/logo.png" alt="WanderWise Logo" className='w-12 h-12 rounded-full' />
                <h2 className='text-3xl font-bold'>WanderWise</h2>
            </div>

            {/* right navbar  */}
            <div className='flex items-center gap-16'>
                <nav className='flex items-center gap-8 [&>a]:text-gray-800 font-medium [&>a]:hover:text-purple-600 [&>a]:hover:underline'>
                    <a href="#">Features</a>
                    <a href="#">About</a>
                    <a href="#">Famous Trips</a>
                    <a href="#">Contact</a>
                </nav>
                <div>
                    <a href="/signin">
                        <CustomButton text="Sign in" />
                    </a>
                </div>
            </div>
        </header>
    )
}

export default Navbar