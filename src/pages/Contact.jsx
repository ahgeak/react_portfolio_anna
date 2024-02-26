import React from 'react'

import HeaderComponent from '../components/HeaderComponent';
import FooterComponent from '../components/FooterComponent';
import ContactComponent from '../components/ContactComponent';

const Contact = () => {
  return (
    <React.Fragment>
        <HeaderComponent />
        <ContactComponent />
            {/* 
                Display other compononent here that I want on the home page (bootstrap or self made) Like section or content
            */}
        <FooterComponent />
    </React.Fragment>
    );
};

export default Contact;
