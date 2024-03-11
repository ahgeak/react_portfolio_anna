import React from 'react'
// import background from "../src/assets/images/dark-blue-textured-stucco-wall-background.jpg"

import HeaderComponent from '../components/HeaderComponent';
// import NavigationComponent from '../components/NavigationComponent';
import FooterComponent from '../components/FooterComponent';

const Home = () => {
  return (
    <React.Fragment>
        {/* <div style={{ backgroundImage: `url(${background})` }}></div> */}
        <HeaderComponent />
            {/* 
                Display other compononent here that I want on the home page (bootstrap or self made) Like section or content
            */}
        <FooterComponent />
    </React.Fragment>
    );
};

export default Home;
