import React from 'react'
import { assets } from '../assets/assets'
import './Header.css'

const Header = () => {
  return (
    <div className='flex flex-col md:flex-row flex-wrap rounded-1g px-6 md:px-10 lg:px-20 header'>
        <div className='md:w-1/2 flex-col flex justify-center items-start text-white gap-4 py-10 m-auto md:py-[10vw] md;mb-[-30px]'>
            <p className='text-3xl md:text-4xl lg:text-5xl font-bold leading-tight md:leading-tight lg:leading-tight '>
                Book Appointment <br /> With Trusted Doctors
            </p>
            <div className='flex flex-col md:flex-row gap-4 items-center text-white text-sm font-light'>
                <img className='w-38'src={assets.group_profiles} alt='' />
                <p>Simply browse through our extensivr list of trusted Doctors <br className='hidden sm:block'/>schedule your appointment hassle-free</p> 
            </div>
            <a className='flex items-center gap-2 bg-white px-10 py-5 rounded-full text-gray-600 text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300'href='#speciality'>
                Book Appointment <img cla src={assets.arrow_icon} alt=''/>
            </a>
        </div>
        <div className='md:w-1/2 relative '>
            <img className='w-full md:absolute bottom-0 h-auto rounded-lg'src={assets.header_img} alt='' />
        </div>
    </div>
  )
}

export default Header