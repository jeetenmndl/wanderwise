import React from 'react'
import CustomButton from '../common/CustomButton'
import useAuth from '@/hooks/useAuth'

const AppNavbar = () => {
    const { logout } = useAuth();

    return (
        <header className='flex justify-between items-center px-20 py-5 border-b border-gray-200 shadow-md'>
            {/* left navbar  */}
            <div className='flex items-center gap-4'>
                <img src="/logo.png" alt="WanderWise Logo" className='w-12 h-12 rounded-full' />
                <h2 className='text-3xl font-bold'>WanderWise</h2>
            </div>

            {/* right navbar  */}
            <div className='flex items-center gap-16'>
                <nav className='flex items-center gap-8 [&>a]:text-gray-800 font-medium [&>a]:hover:text-purple-600 [&>a]:hover:underline'>
                    <a href="/dashboard">Dashboard</a>
                    <a href="/trips">Trips</a>
                    <a href="/itineraries">Itineraries</a>
                    <a href="/baggage">Baggage</a>
                </nav>
                <div>
                    <CustomButton text="Log out" onClick={logout} />
                </div>
            </div>
        </header>
    )
}

export default AppNavbar