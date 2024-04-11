import React,{useEffect} from 'react'
export default function TeamMember({data}) {
   
  return (
    <div className='md:flex my-4 p-4 text-black flex-row flex-wrap justify-center items-center max-w-full md:flex-nowrap'>
      <img src = {data.img} className='w-[200px] rounded-[100%] h-[180px] m-auto'/>
      <div className='flex flex-col px-2 mx-4'>
        <p className='text-black text-3xl text-bold font-[Oswald]'> {data.name}</p>
        <p className='text-brown-300 font-bold font-[OpenSans] text-[#bd8582e4]'>{data.position}</p>
        <p className='my-1 italic text-[#808080]'>{data.email}</p>
      </div>
    </div>
  )
}
