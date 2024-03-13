import React from 'react'
// import background from "../src/assets/images/dark-blue-textured-stucco-wall-background.jpg"

import HeaderComponent from '../components/HeaderComponent';
// import NavigationComponent from '../components/NavigationComponent';
import FooterComponent from '../components/FooterComponent';

import { Card } from "react-bootstrap";

const Home = () => {
  return (
    <React.Fragment>
        <HeaderComponent />
        <Card>
            {/* <Card.Img src="https://images.unsplash.com/photo-1537498425277-c283d32ef9db?q=80&w=1756&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />  */}
            {/* <Card.Img src="https://images.unsplash.com/photo-1606327054536-e37e655d4f4a?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />  */}
            <Card.Img src="https://images.unsplash.com/photo-1515643395264-3f8c19a2dc77?q=80&w=1831&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" /> 
        </Card>
            {/* 
                Display other compononent here that I want on the home page (bootstrap or self made) Like section or content
            */}
        <FooterComponent />
    </React.Fragment>
    );
};

export default Home;
