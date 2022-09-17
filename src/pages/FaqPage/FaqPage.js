import React from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import FaqHero from './components/FaqHero';
import FaqSection from './components/FaqSection';

function FaqPage(props) {
    return (
        <div className=''>
            <Header/>
            <FaqHero/>
            <FaqSection/>
            <Footer/>
            
        </div>
    );
}

export default FaqPage;