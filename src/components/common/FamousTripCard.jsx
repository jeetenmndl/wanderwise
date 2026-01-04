import { ChevronRight } from 'lucide-react'
import React from 'react'

const FamousTripCard = ({ trip }) => {
    console.log(trip)
    return (
        <div className="group cursor-pointer">
            <div className="relative aspect-4/3 rounded-2xl overflow-hidden mb-4 border border-gray-200">
                <img
                    src={trip.image}
                    alt={trip.name}
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-xs font-bold">
                    {trip.duration}
                </div>
            </div>
            <div className="flex justify-between items-center">
                <div>
                    <h3 className="text-xl font-bold">{trip.name}</h3>
                    <p className="text-muted-foreground text-sm mt-1">Avg. Cost: {trip.cost}</p>
                </div>
                <button className="p-2 mr-2 rounded-full bg-gray-200 text-gray-700 hover:bg-purple-500 hover:text-white">
                    <ChevronRight className="w-5 h-5" />
                </button>
            </div>
        </div>
    )
}

export default FamousTripCard