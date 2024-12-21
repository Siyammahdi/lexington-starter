import React from 'react';
import AboutTitle from './AboutTitle';
import Details from './Details';
import Contact from './Contact';

const About = () => {
    return (
        <div className='mt-40'>
            <AboutTitle />
            <Details />
            <Contact />
        </div>
    );
};

export default About;