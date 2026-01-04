import React from 'react'

const Banner = () => {
    return (
        <section className="border-b border-gray-300 py-20">
            <p className="text-sm text-center text-gray-500 mb-8">Trusted by 20,000+ travelers worldwide</p>
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale font-bold text-3xl tracking-tighter">
                <div>TRAVELER</div>
                <div>NOMAD</div>
                <div>WANDER</div>
                <div>VOYAGE</div>
            </div>
        </section>
    )
}

export default Banner