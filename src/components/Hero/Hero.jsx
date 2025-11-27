import React from 'react';
import heroImage from "../../assets/images/hero.png"
const Hero = () => {
    return (
       <section className='bg-[#F0FFF0] pt-17 pb-18'>
           <div className='max-w-7xl mx-auto  flex items-center justify-between'>
            {/* left */}
            <div className='max-w-[405px]'>
              <p className='text-[#FD511A] text-lg font-medium mb-[10px]'>Are you ready to Learn?</p>
              <h2 className='text-[#000000] text-5xl font-bold '>Learn With fun <span className='text-[#33B576]'>on any schedule</span></h2>
              <p className='text-[#6C6B6B] text-base font-normal mt-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius blandit facilisis quam netus.</p>
              <button className='text-[#FFFFFF] bg-[#21B573] hover:bg-[#1A955C] text-base font-normal px-9 py-3 rounded-3xl mt-[14px] ransition-colors duration-200'>Get Started</button>
            </div>
            {/* right */}
            <div className='mr-12 max-w-[554px] max-h-[346px]'>
                <img className='h-full w-full' src={heroImage} alt="hero image" />
            </div>
           </div>
       </section>
    );
};

export default Hero;