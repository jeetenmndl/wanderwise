import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { Button } from '../ui/button'
import { Input } from '../ui/input'

const AddExpense = ({trip}) => {
  return (
    <Card>
        <CardHeader>
            <CardTitle>Add Expense</CardTitle>
            <CardDescription>
                Add your expense amount below.
            </CardDescription>
        </CardHeader>
        <CardContent>
            <Input type='number' placeholder='100' className='mb-4'/>
            <Button className="w-full">Add Expense</Button>
        </CardContent>
    </Card>
  )
}

export default AddExpense