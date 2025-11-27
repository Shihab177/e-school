import React from 'react';
import Hero from '../../components/Hero/Hero';
import StatsSection from '../../components/StatsSection/StatsSection';
import OnlineCourses from '../../components/OnlineCourses/OnlineCourses';
import Testimonial from '../../components/Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
         <Hero/>
         <StatsSection/>
         <OnlineCourses/>
         <Testimonial/>
        </div>
    );
};

export default Home;