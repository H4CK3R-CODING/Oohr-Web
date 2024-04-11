import React from 'react'

const TeamMembers = ({member}) => {
  return (
    <div >
      <div className="relative rounded-xl m-10 max-w-[300px] flex" data-aos="zoom-in-down">
        <img className="aspect-square rounded-xl w-fit h-fit" src={`${member.img}`} alt="team_member" />
        <div className="bg-white overflow-hidden p-2 w-[80%] drop-shadow-2xl rounded-2xl text-center absolute top-full left-1/2 translate-y-[-50%] translate-x-[-50%]">
          <h1 className="text-[#626e7a] font-semibold text-lg">{member.name}</h1>
          <p className="text-[#a7abb1] font-semibold">{member.position}</p>
          <p className="text-[#a7abb1] font-semibold">{member.email}</p>
        </div>
      </div>
    </div>
  )
}

export default TeamMembers
