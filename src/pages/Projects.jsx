import React from 'react'

import HeaderComponent from '../components/HeaderComponent';
import FooterComponent from '../components/FooterComponent';
import ProjectComponent from '../components/ProjectComponent';

const Home = () => {
  return (
    <React.Fragment>
        <HeaderComponent />
            {/* 
                Display other compononent here that I want on the home page (bootstrap or self made) Like section or content
            */}
        <ProjectComponent />
        <FooterComponent />
    </React.Fragment>
    );
};

export default Home;
