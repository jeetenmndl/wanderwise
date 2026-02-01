import React from 'react'
import {Card, CardTitle, CardDescription, CardHeader, CardContent} from "@/components/ui/card"
import TripForm from '@/components/trips/TripForm'
import { data, useParams } from 'react-router-dom'
import useApi from '@/hooks/useApi'
import ItinerariesForm from '@/components/itineraries/ItinerariesForm'

const EditItineraries = () => {
  const {tripId, itineraryId} = useParams();

  const {loading, data, error} = useApi(`/${tripId}/itineraries/${itineraryId}`);

  if(loading) return <div>loading</div>

  const formattedData = {
    ...data,
    date: data?.date.split("T")[0],
  }

  console.log(data);

  return (
    <section>
      <Card className="w-2/5 mx-auto my-8">
        <CardHeader>
          <CardTitle>Edit This Itinerary</CardTitle>
          <CardDescription>Update information of your itinerary.</CardDescription>
        </CardHeader>
        <CardContent>
          <ItinerariesForm type="edit" itineraryInfo={formattedData}/>
        </CardContent>
      </Card>
    </section>
  )
}

export default EditItineraries