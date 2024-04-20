import React from 'react'
import Card from './Card'

const CoreValues = () => {
    const data = [
        {
            heading : 'QUALITY SERVICE',
            content : "We believe that doing little more than the client's expectation encourages us to deliver the best quality. Certified from International Trade Council for Quality Business.",
        },
        {
            heading : 'CONFIDENTIALITY AND PRIVACY',
            content : `Confidentiality is a virtue of the loyal, as loyalty is the virtue of faithfulness." We know the value of a client's work and its confidentiality`,
        },
        {
            heading : 'OPERATIONAL EXCELLENCE',
            content : "Working with excellence is not just our actions but it's our habit. And our team follows that.",
        },
        {
            heading : 'CHALLENGING STAFF',
            content : "We have knowledgeable and experienced staff to work in every situation and condition to provide the most suitable quality service.",
        },
        {
            heading : 'CONTINUOUS IMPROVEMENTS',
            content : "We believe to improve according to our challenges because we know that “Excellent firms don’t believe in excellence – only in constant improvement and constant change.”",
        },
        {
            heading : 'LONG-SIGHTEDNESS',
            content : "We are a company that offers design and build services for you from initial sketches to the final construction.",
        },
    ]
  return (
    <div className='my-6'>
        <h1 className='text-3xl font-serif text-center py-2'>OUR CORE VALUE</h1>
        <div className='flex justify-center flex-wrap '>
            {data.map((info, idx)=>{
                return <Card data={info} key={idx}/>
            })}
        </div>
    </div>
  )
}

export default CoreValues
