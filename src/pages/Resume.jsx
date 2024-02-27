import React from 'react'

import HeaderComponent from '../components/HeaderComponent';
import FooterComponent from '../components/FooterComponent';
import ResumeComponent from '../components/ResumeComponent';

const About = () => {
  return (
    <React.Fragment>
        <HeaderComponent />
        <ResumeComponent />
        <FooterComponent />
    </React.Fragment>
    );
};

export default About;
