import React from 'react'
import HeroSection from '../components/HomePage/HeroSection'
import MedicalServices from '../components/HomePage/MedicalServices'
import HealthcareHeader from '../components/HomePage/HealthcareHeader'
import SpecialistCard from '../components/HomePage/SpecialistCard'
import TeamSection from '../components/HomePage/TeamSection'
import Footer from '../components/Navbar/Footer'
import VideoHeader from '../components/HomePage/VideoHeader'


const HomePage = () => {
  return (
    <div>


<VideoHeader/>
<MedicalServices/>
<HealthcareHeader/>
<SpecialistCard/>
<TeamSection/>
<Footer/>




    </div>
  )
}

export default HomePage