import React from 'react'
import TeamMemberCard from './ui/TeamMemberCard'

import member1 from "../assets/member1.png"
import member2 from "../assets/member2.png"
import member3 from "../assets/member3.png"
import member4 from "../assets/member4.png"

const AboutSection = () => {
  return (
    <div className='py-4'> 
       <h3>Our Team</h3>
     <div className="flex items-center justify-center">
     <div className="w-[1600px] flex items-center justify-between">
        <TeamMemberCard memberName="Bhavik Jonathan" membertitle="Founder, CEO" memberPicture={member1} memberPictureAlt="Bhavik Jonathan"/>
        <TeamMemberCard memberName="Ali Michael Doe" membertitle="Co-Founde, CBO" memberPicture={member2} memberPictureAlt="Ali Michael Doe"/>
        <TeamMemberCard memberName="Avnish Hyuga" membertitle="Lead Dev, CTO" memberPicture={member3} memberPictureAlt="Avnish Hyuga"/>
        <TeamMemberCard memberName="Rahul Gami" membertitle="Designer" memberPicture={member4} memberPictureAlt="Rahul Gami"/>
      </div>
     </div>
    </div>
  )
}

export default AboutSection
