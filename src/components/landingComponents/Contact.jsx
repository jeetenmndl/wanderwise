import React, { useState } from 'react'
import CustomButton from '../common/CustomButton'

const Contact = () => {
    const [email, setEmail] = useState("");

    const handleSubmit = () => {
        console.log("Email submitted:", email);
    }

  return (
    <section className='bg-purple-500 text-white h-96'>
        <div className="px-80 py-20 space-y-8">
            <h2 className="text-4xl font-bold text-center mb-4">Contact Us</h2>
            <p className="text-center text-xl">Have questions or feedback? Reach out to us! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic aliquid adipisci ducimus! Perspiciatis, officia commodi. Perspiciatis enim dolores autem quis. Autem ab ad cum maxime!</p>
            <div className='flex items-center gap-4'>

                <input type="email" className='px-10 py-2 border border-gray-400 rounded-md w-full bg-white text-gray-800' placeholder='Enter your email' 
                value={email}
                onChange={
                    (e)=>{setEmail(e.target.value)}
                }
                />

                <CustomButton text="Submit" onClick={handleSubmit} />
            </div>
        </div>
    </section>
  )
}

export default Contact