
import React from 'react'
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import ItinerariesForm from '@/components/itineraries/ItinerariesForm'

const AddItineraries = () => {
  return (
    <section>
      <Card className="w-2/5 mx-auto my-8">
        <CardHeader>
          <CardTitle>Add Itineraries</CardTitle>
          <CardDescription>Fill information of your activities.</CardDescription>
        </CardHeader>
        <CardContent>
            <ItinerariesForm type="add" />
        </CardContent>
      </Card>
    </section>
  )
}

export default AddItineraries