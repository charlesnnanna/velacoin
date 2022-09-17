import React from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import AboutVelacoin from './components/AboutVelacoin';
import Content from './components/Content';

function AboutPage(props) {
    return (
        <div className=''>
            <Header/>
            <AboutVelacoin/>
            <Content/>
            <Footer/>
            
        </div>
    );
}

export default AboutPage;