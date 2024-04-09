import React from 'react'

type TeamMmberCardProps = {
    membertitle: string,
    memberPicture: string,
    memberPictureAlt: string,
    memberName: string,
}

const TeamMemberCard = ({memberPicture, memberPictureAlt, memberName, membertitle}:TeamMmberCardProps) => {
  return (
    <div className='w-[250px] h-[600px] flex flex-col rounded-xl pb-6 overflow-hidden'>
        <img src={memberPicture} alt={memberPictureAlt} />
        <div className="pl-4 py-4 bg-white rounded-b-xl">
            <h5 className='font-semibold'>{memberName}</h5>
            <p className='font-thin'>{membertitle}</p>
        </div>
      
    </div>
  )
}

export default TeamMemberCard