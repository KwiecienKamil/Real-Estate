import React from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import GroupsSection from '../components/GroupsSection'
import ApartmentPreview from '../components/ui/ApartmentPreview'
import FooterHome from '../components/FooterHome'
import AnimatedPage from '../components/ui/animations/AnimatedPage'


const Home = () => {
  return (
    <AnimatedPage>
    <div className='bg-bg pb-4'>
      <Header />
      <Navbar />
      <GroupsSection />
      <ApartmentPreview />
      <FooterHome />
    </div>
    </AnimatedPage>
  )
}

export default Home
