import React from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import GroupsSection from '../components/GroupsSection'

const Home = () => {
  return (
    <div className='bg-bg pb-4'>
      <Header />
      <Navbar />
      <GroupsSection />
    </div>
  )
}

export default Home
