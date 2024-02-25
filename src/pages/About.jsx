import React from 'react'

import HeaderComponent from '../components/HeaderComponent';
import FooterComponent from '../components/FooterComponent';
import AboutComponent from '../components/AboutComponent'

const About = () => {
  return (
    <React.Fragment>
        <HeaderComponent />
            {/* 
                Display other compononent here that I want on the home page (bootstrap or self made) Like section or content
            */}
        <AboutComponent />
        <FooterComponent />
    </React.Fragment>
    );
};

export default About;
