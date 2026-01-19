import { Button } from '@/components/ui/button'
import { MoreVertical, Plus } from 'lucide-react'
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

const TripsPage = () => {
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

        <Card>
          <CardHeader>
            <CardTitle>Trip to France</CardTitle>
            <CardDescription>Feb 12 2026 - Feb 20 2026</CardDescription>
            <CardAction>
              <Button variant='outline' size='icon'>
                <MoreVertical />
              </Button>
            </CardAction>
          </CardHeader>

          <CardContent>
            <div className='flex items-center justify-between'>
              <span>
                Budget:
              </span>
              <span className='text-xl font-bold text-primary'>
                $200
              </span>
            </div>

            <div>
              <span className='font-bold mt-2'>Destinations: </span>
              Paris, Lyon, Marseille
            </div>

          </CardContent>

          <CardFooter>
            <Button className="w-full">
              Trip Details
            </Button>
          </CardFooter>
        </Card>

      </div>

    </section>
  )
}

export default TripsPage