import React from 'react'

const CustomButton = ({text, onClick}) => {
  return (
   <button className=' bg-purple-600 text-white rounded px-10 py-2 text-lg hover:bg-purple-500 cursor-pointer' onClick={onClick}>
    {text}
   </button>
  )
}

export default CustomButton