import React from 'react'
import { ImLinkedin } from "react-icons/im";
import { FaSquareFacebook } from "react-icons/fa6";

const Socail = () => {
  return (
    <div className="my-2 p-2">
        <h1 className="text-2xl font-semibold text-white">SOCIAL NETWORK</h1>
        <div className='flex'>
          <div className="text-3xl m-2 text-sky-500"><a target='_blank' href="https://www.linkedin.com/company/oohr-intellectual-research-llp/"><ImLinkedin /></a></div>
          <div className="text-3xl m-2 text-sky-500"><a target='_blank' href="https://www.facebook.com/oohrintellectualresearchllp"><FaSquareFacebook /></a></div>
        </div>
    </div>
  )
}

export default Socail
