import React from 'react'
import AboutSection from '../components/AboutSection'
import FooterHome from '../components/FooterHome'
import TopNavbar from '../components/TopNavbar'
import AnimatedPage from '../components/ui/animations/AnimatedPage'
import Location from '../components/Location'

const About = () => {
  return (
    <AnimatedPage>
    <div>
     <TopNavbar />
     <AboutSection />
     <Location />
     <FooterHome />
    </div>
    </AnimatedPage>
  )
}

export default About
