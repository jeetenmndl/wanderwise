import AddExpense from '@/components/trips/AddExpense';
import InviteCollaborator from '@/components/trips/InviteCollaborator';
import TripNavigations from '@/components/trips/TripNavigations';
import { Card } from '@/components/ui/card'
import useApi from '@/hooks/useApi';
import React, { useState } from 'react'
import { useParams } from 'react-router-dom';

const TripDetails = () => {
    const {id} = useParams();

    const [dependency, setDependency] = useState(0);

  const {loading, data, error} = useApi(`/trips/${id}`, {}, [dependency]);

  if(loading) return <div>loading</div>

  return (
    <section className='py-8 px-20 flex gap-4'>

         {/* trip information */}
        <div className='w-2/3'>
            <Card className={'w-full h-[80dvh]'}>

            </Card>
        </div>

        {/* trip actions */}
        <div className='w-1/3 space-y-4'>
            <TripNavigations trip={data} />
            <AddExpense trip={data} setDependency={setDependency} />
            <InviteCollaborator trip={data} setDependency={setDependency} />
        </div>

    </section>
  )
}

export default TripDetails