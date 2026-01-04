import React from 'react'

const FeaturesCard = ({title, description, icon: Icon}) => {
  return (
    <div className='border border-gray-200 shadow-sm rounded-md p-4 flex flex-col items-center'>
        <Icon className='w-12 h-12 text-purple-600 my-4' />
        <h3 className='text-2xl font-semibold mb-2'>{title}</h3>
        <p className='text-gray-600 text-center m-2'>{description}</p>
    </div>
  )
}

export default FeaturesCard