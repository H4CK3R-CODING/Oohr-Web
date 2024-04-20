import React from 'react'

const Card = ({data}) => {
  return (
    <div className=' w-[250px] flex flex-col items-center m-2 p-2 bg-[#f4f6f8] rounded-lg'>
      <h1 className='text-[#e05133] font-semibold text-center my-2'>{data.heading}</h1>
      <p className='text-[#8a8aa3] text-center'>{data.content}</p>
    </div>
  )
}

export default Card
