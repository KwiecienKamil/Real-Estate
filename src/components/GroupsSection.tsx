import React from 'react'
import GroupCard from './ui/GroupCard'
import groupLogo1 from "../assets/group1.png"
import groupLogo2 from "../assets/group2.png"
import groupLogo3 from "../assets/group3.png"
import groupLogo4 from "../assets/group4.png"

const GroupsSection = () => {
  return (
    <div className='flex items-center justify-center py-4'>
       <div className="w-[1600px] flex items-center justify-between">
       <GroupCard groupLogo={groupLogo1} title="Lodha Group" experience='35+ years of experience' projectsDone='270+' alternativeText='Lodha Group'/>
        <GroupCard groupLogo={groupLogo2} title="Prestige Group" experience='40+ years of experience' projectsDone='170+' alternativeText='Lodha Group'/>
        <GroupCard groupLogo={groupLogo3} title="Brigade Group" experience='30+ years of experience' projectsDone='120+' alternativeText='Lodha Group'/>
        <GroupCard groupLogo={groupLogo4} title="Sobha Limit" experience='35+ years of experience' projectsDone='210+' alternativeText='Lodha Group'/>
       </div>
      
    </div>
  )
}

export default GroupsSection
