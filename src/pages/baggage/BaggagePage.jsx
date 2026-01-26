import { Button } from '@/components/ui/button'
import { Card, CardAction, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import useApi from '@/hooks/useApi'
import { formatDate } from '@/lib/utils'
import { ArrowUpRight } from 'lucide-react'
import React from 'react'

const BaggagePage = () => {

    const { loading, error, data } = useApi('/trips')

    if (loading) return <div>loading</div>
    return (
        <section className='py-8 px-20'>
            {/* heading */}
            <div className='flex items-center justify-between'>
                <h1 className='text-3xl font-bold'>Select Trip to Show Baggage</h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12'>

                {
                    data.length === 0 ? (
                        <div>No trips found. Please add a trip.</div>
                    )
                        :
                        data.map((trip) => {
                            return (
                                <Card key={trip._id}>
                                    <CardHeader>
                                        <CardTitle>
                                            {trip.title}
                                        </CardTitle>
                                        <CardDescription>
                                            {formatDate(trip.startDate)} - {formatDate(trip.endDate)}
                                        </CardDescription>
                                        <CardAction>
                                            <a href={`/baggage/${trip._id}`}>
                                            <Button>Baggage <ArrowUpRight /></Button>
                                            </a>
                                        </CardAction>

                                    </CardHeader>
                                </Card>
                            )
                        })
                }

            </div>
        </section>
    )
}

export default BaggagePage