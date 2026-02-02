import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import useApi from '@/hooks/useApi';
import { Plus } from 'lucide-react';
import React from 'react'
import { useParams } from 'react-router-dom'

const ItinerariesDetails = () => {
    const {id} = useParams();

    const {data:tripData, error: tripError, loading: tripLoading} = useApi(`/trips/${id}`);

    const totalDays = tripData ? Math.ceil((new Date(tripData.endDate) - new Date(tripData.startDate)) / (1000 * 60 * 60 * 24)) + 1 : 0;

   const daysArray = new Array(totalDays).fill(0);


    const {data, error, loading} = useApi(`/${id}/itineraries`);

    if(loading) return <div>loading</div>
  return (
    <section className='px-20 py-8'>
        <div className='flex items-center justify-between'>
        <h1 className='text-3xl font-bold'>Your Itineraries</h1>

        <a href={`/itineraries/${id}/add`}>
          <Button>
            <Plus />
            Add Itinerary
          </Button>
        </a>
      </div>

      <div className='space-y-4 mt-4'>
        {
          daysArray.map(( item, index)=>{
            return (
              <Card>
                hi
              </Card>
            )
          })
        }
      </div>

    </section>
  )
}

export default ItinerariesDetails