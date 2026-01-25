import { Button } from '@/components/ui/button'
import { Edit, MoreVertical, Plus, Trash2 } from 'lucide-react'
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
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '../ui/dropdown-menu'
import { useNavigate } from 'react-router-dom'
import api from '@/api/axios'
import { toast } from 'sonner'
import { de } from 'zod/v4/locales'

const TripCard = ({ trip, setDependency }) => {

    const navigate = useNavigate();

    const formatDate = (dateString) => {

        const options = { year: 'numeric', month: 'short', day: 'numeric' };

        return new Date(dateString).toLocaleDateString(undefined, options);
    }

    const deleteTrip = async () =>{
        try {
               const response = await api.delete(`/trips/${trip._id}`);
               console.log(response);
               if(response.status === 200){
                   toast.success("Trip deleted successfully.");
                    setDependency((prev) => prev + 1);
               }else{
                   toast.error("Error deleting trip. Please try again.");
               }
           } catch (error) {
               console.log(error);
               toast.error("Error deleting trip. Please try again.");
           }
    }

    console.log(trip);
    return (
        <Card>
            <CardHeader>
                <CardTitle>{trip.title}</CardTitle>
                <CardDescription>{formatDate(trip.startDate)} - {formatDate(trip.endDate)}</CardDescription>
                <CardAction>


                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant='outline' size='icon'>
                                <MoreVertical />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuItem
                                className={"flex items-end gap-2 text-blue-600"}
                                onClick={() => { navigate(`/trips/edit/${trip._id}`) }}
                            >
                                <Edit className='text-blue-600' /> Edit
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={deleteTrip} className={'text-red-600'}>
                                <Trash2 className='text-red-600' /> Delete
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </CardAction>
            </CardHeader>

            <CardContent>
                <div className='flex items-center justify-between'>
                    <span>
                        Budget:
                    </span>
                    <span className='text-xl font-bold text-primary'>
                        ${trip.budget.total}
                    </span>
                </div>

                <div>
                    <span className='font-bold mt-2'>Destinations: </span>
                    {
                        trip.destinations.map((destination, index) => {
                            return (
                                <span key={index}>
                                    {destination}, &nbsp;
                                </span>
                            )
                        })
                    }
                </div>

            </CardContent>

            <CardFooter>
                <a className='w-full' href={`/trips/${trip._id}`}>
                    <Button className="w-full">
                        Trip Details
                    </Button>
                </a>
            </CardFooter>
        </Card>
    )
}

export default TripCard