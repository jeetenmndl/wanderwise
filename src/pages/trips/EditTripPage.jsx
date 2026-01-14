import React from 'react'
import {Card, CardTitle, CardDescription, CardHeader, CardContent} from "@/components/ui/card"
import TripForm from '@/components/trips/TripForm'
import { useParams } from 'react-router-dom'
import useApi from '@/hooks/useApi'

const EditTripPage = () => {
  const {id} = useParams();

  const {loading, data, error} = useApi(`/trips/${id}`);

  if(loading) return <div>loading</div>
  console.log(data);
  return (
    <section>
      <Card className="w-2/5 mx-auto my-8">
        <CardHeader>
          <CardTitle>Edit This Trip</CardTitle>
          <CardDescription>Update information of your trip.</CardDescription>
        </CardHeader>
        <CardContent>
          <TripForm tripInfo={data}/>
        </CardContent>
      </Card>
    </section>
  )
}

export default EditTripPage