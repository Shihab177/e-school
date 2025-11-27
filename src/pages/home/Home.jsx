import React from 'react';
import Hero from '../../components/Hero/Hero';
import StatsSection from '../../components/StatsSection/StatsSection';
import OnlineCourses from '../../components/OnlineCourses/OnlineCourses';

const Home = () => {
    return (
        <div>
         <Hero/>
         <StatsSection/>
         <OnlineCourses/>
        </div>
    );
};

export default Home;