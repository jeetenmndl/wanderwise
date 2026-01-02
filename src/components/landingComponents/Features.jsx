import React from 'react'
import FeaturesCard from '../common/FeaturesCard'
import { BanknoteArrowDown, History, Map, NotebookPen } from 'lucide-react'

const featuresData = [
    {
        title: "Personalized Itineraries",
        description: "Create customized travel plans based on your interests, budget, and schedule with our intelligent itinerary generator.",
        icon: Map
    },
    {
        title: "Real-time Updates",
        description: "Stay informed with real-time notifications about flight changes, and local events during your trip.",
        icon: History
    },
    {
        title: "Budget Management",
        description: "Easily track your travel expenses and manage your budget with our integrated financial tools.",
        icon: BanknoteArrowDown
    },
    {
        title: "Collaborative Planning",
        description: "Plan trips with friends and family by sharing itineraries and collaborating on activities and accommodations.",
        icon: NotebookPen
    }
]

const Features = () => {
  return (
    <section className='px-20 py-20'>
        {/* heading */}
        <div>
            <h2 className='text-4xl font-bold text-center mb-4'>Features</h2>
            <p className='text-center text-gray-600'>Discover the powerful features of Wanderwise that make travel planning effortless and enjoyable.</p>
        </div>

        {/* features  */}
        <div className='grid grid-cols-4 gap-6 mt-16'>
            {
                featuresData.map((feature, index)=>{
                    return(
                        <FeaturesCard key={index} title={feature.title} description={feature.description} icon={feature.icon} />
                    )
                })
            }
        </div>
    </section>
  )
}

export default Features