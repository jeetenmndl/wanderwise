import TripForm from '@/components/trips/TripForm'
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

const AddTripPage = () => {
  return (
    <section>
      <Card className="w-2/5 mx-auto my-8">
        <CardHeader>
          <CardTitle>Add Your Trip</CardTitle>
          <CardDescription>Fill information of your trip.</CardDescription>
        </CardHeader>
        <CardContent>
          <TripForm />
        </CardContent>
      </Card>
    </section>
  )
}

export default AddTripPage