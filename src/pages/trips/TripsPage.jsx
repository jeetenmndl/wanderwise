import { Button } from '@/components/ui/button'
import { MoreVertical, Plus } from 'lucide-react'
import React, { useState } from 'react'
import useApi from '@/hooks/useApi'
import TripCard from '@/components/trips/TripCard'

const TripsPage = () => {

  const [dependency, setDependency] = useState(0);

  const {data, error, loading} = useApi('/trips', {}, [dependency]);

  if(loading) return <div>loading</div>

  return (
    <section className='py-8 px-20'>
      {/* heading */}
      <div className='flex items-center justify-between'>
        <h1 className='text-3xl font-bold'>Your Trips</h1>

        <a href="/trips/add">
          <Button>
            <Plus />
            Add Trip
          </Button>
        </a>
      </div>

      {/* trips content */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12'>

        {
          data.length === 0 ? (
            <div>No trips found. Please add a trip.</div>
          )
          :
          data.map((trip)=>{
            return (
              <TripCard key={trip._id} trip={trip} setDependency={setDependency} />
            )
          })
        }

      </div>

    </section>
  )
}

export default TripsPage