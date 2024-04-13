import React from 'react'
import AboutSection from '../components/AboutSection'
import FooterHome from '../components/FooterHome'
import TopNavbar from '../components/TopNavbar'
import AnimatedPage from '../components/ui/animations/AnimatedPage'

const About = () => {
  return (
    <AnimatedPage>
    <div>
     <TopNavbar />
     <AboutSection />
     <FooterHome />
    </div>
    </AnimatedPage>
  )
}

export default About
