import { Button } from '@/components/ui/button';
import useApi from '@/hooks/useApi';
import { Plus } from 'lucide-react';
import React from 'react'
import { useParams } from 'react-router-dom'

const ItinerariesDetails = () => {
    const {id} = useParams();

    const {data, error, loading} = useApi(`/${id}/itineraries`);

    if(loading) return <div>loading</div>
  return (
    <section className='px-20 py-8'>
        <div className='flex items-center justify-between'>
        <h1 className='text-3xl font-bold'>Your Itineraries</h1>

        <a href="/itineraries/add">
          <Button>
            <Plus />
            Add Itinerary
          </Button>
        </a>
      </div>

    </section>
  )
}

export default ItinerariesDetails