import React from 'react'
import Navbar from '../components/landingComponents/Navbar'
import Hero from '../components/landingComponents/Hero'
import Features from '../components/landingComponents/Features'
import Contact from '../components/landingComponents/Contact'

const LandingPage = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <Features />

            <Contact />
        </>
    )
}

export default LandingPage