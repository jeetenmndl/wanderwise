import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { Button } from '../ui/button'

const TripNavigations = ({trip}) => {
  return (
    <Card>
        <CardHeader>
            <CardTitle>Trip Navigations</CardTitle>
            <CardDescription>Manage trip related options.</CardDescription>
        </CardHeader>
        <CardContent>
            <a href={`/itineraries/${trip._id}`}>
                <Button variant='outline' className="w-full mb-2">Manage Itineraries</Button>
            </a>
             <a href={`/baggage/${trip._id}`}>
                <Button variant='outline' className="w-full">Manage Baggage</Button>
            </a>
        </CardContent>
    </Card>
  )
}

export default TripNavigations