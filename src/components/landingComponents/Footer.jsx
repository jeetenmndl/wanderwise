import React, { useEffect, useState } from 'react'

const Footer = () => {

    const [first, setfirst] = useState(1);

    useEffect(() => {
      console.log("Footer component mounted");
    }, [first])
    
  return (
    <footer className='flex items-center justify-between px-60 py-20 bg-gray-50'>
        {/* left part  */}
        <div>
            <div className='mb-10' onClick={()=>{setfirst(first+1)}}>
                <h2 className='text-4xl font-bold mb-2'>WanderWise</h2>
                <p className='text-lg text-gray-700'>Enjoy the trip with no worries.</p>
            </div>
            <div className='text-lg'>
                <p>Clove I.T. Private Limited</p>
                <p>Mahendra Chowk, Biratnagar, Nepal</p> 
                <p>+977 9812345678</p>
            </div>
        </div>

        {/* right part  */}
        <div className='flex items-center gap-20'>
            <div className='flex flex-col gap-2 text-lg font-medium text-gray-700'>
                <h4 className='text-black text-xl'>Features</h4>
                <a href="#">Your Trips</a>
                <a href="#">Itineraries</a>
                <a href="#">Packaging List</a>
                <a href="#">Collaborate</a>
            </div>
            <div className='flex flex-col gap-2 text-lg font-medium text-gray-700'>
                <h4 className='text-black text-xl'>Useful Links</h4>
                <a href="#">About Us</a>
                <a href="#">Contact Us</a>
                <a href="#">Privacy Policy</a>
                <a href="#">Terms and Conditions</a>
            </div>
        </div>
    </footer>
  )
}

export default Footer