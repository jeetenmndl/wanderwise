import { Button } from '@/components/ui/button';
import { Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import useApi from '@/hooks/useApi';
import { formatDate } from '@/lib/utils';
import { AlertTriangle, Plus } from 'lucide-react';
import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const ItinerariesDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const { data: tripData, error: tripError, loading: tripLoading } = useApi(`/trips/${id}`);

  const totalDays = tripData ? Math.ceil((new Date(tripData.endDate) - new Date(tripData.startDate)) / (1000 * 60 * 60 * 24)) + 1 : 0;

  const daysArray = new Array(totalDays).fill(0);


  const { data: itineraryData, error: itineraryError, loading: itineraryLoading } = useApi(`/${id}/itineraries`);

  if (itineraryLoading) return <div>loading</div>

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
          daysArray.map((item, index) => {

            const currentItinerary = itineraryData ? itineraryData.find(itinerary => {
              const itineraryDate = new Date(itinerary.date);
              const targetDate = new Date(tripData.startDate);
              targetDate.setDate(targetDate.getDate() + index);
              return itineraryDate.toDateString() === targetDate.toDateString();
            }) : null;

            const thisDate = new Date(tripData.startDate);
            thisDate.setDate(thisDate.getDate() + index);
            const displayDate = formatDate(thisDate.toISOString());

            if (!currentItinerary) {
              return (
                <Card key={index}>
                  <CardContent className="text-center py-4 space-y-2">
                    <AlertTriangle className='w-12 h-12 text-orange-600 mx-auto' />
                    <p className='text-lg font-semibold'>{displayDate}</p>
                    <p className='text-lg font-semibold text-gray-400'>No itinerary for this day</p>

                    <Button variant="outline" onClick={()=>{navigate(`/itineraries/${id}/add?date=${thisDate.toISOString().split("T")[0]}`)}}>
                      <Plus /> Add Itinerary
                    </Button>

                  </CardContent>
                </Card>
              )
            }
            return (
              <Card className={"bg-blue-50"}>
                <CardHeader className={'border-b'}>
                  <CardTitle>
                    {currentItinerary.title}
                  </CardTitle>
                  <CardDescription>
                    {currentItinerary.description}
                  </CardDescription>
                  <CardAction className="flex gap-2 items-center">
                    <span className='font-semibold'>{formatDate(currentItinerary.date)}</span>
                    <Button variant='outline' onClick={()=>{navigate(`/itineraries/${id}/edit/${currentItinerary._id}`)}}>Edit Itinerary</Button>
                  </CardAction>
                </CardHeader>
                <CardContent className={"grid grid-cols-2 gap-4"}>
                  {
                    currentItinerary.activities.map((activity, index) => {
                      return (
                        <Card key={index}>
                          <CardHeader className={"border-b"}>
                            <CardTitle>{activity.name}</CardTitle>
                            <CardDescription>Time: {activity.time}</CardDescription>
                          </CardHeader>
                          <CardContent>
                            <ul className='list-disc pl-5'>
                              {
                                activity.notes.map((note, noteIndex )=>{
                                  return (
                                    <li key={noteIndex}>{note}</li>
                                  )
                                })
                              }
                            </ul>
                          </CardContent>
                        </Card>
                      )
                    }
                    )
                  }

                </CardContent>
              </Card>
            )
          })
        }
      </div>

    </section>
  )
}

export default ItinerariesDetails