import React from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import GroupsSection from '../components/GroupsSection'
import ApartmentPreview from '../components/ui/ApartmentPreview'

const Home = () => {
  return (
    <div className='bg-bg pb-4'>
      <Header />
      <Navbar />
      <GroupsSection />
      <ApartmentPreview />
    </div>
  )
}

export default Home
