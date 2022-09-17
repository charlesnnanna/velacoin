import React from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import AboutSection from './components/AboutSection';
import Card from './components/Card';
import GetStarted from './components/GetStarted';
import Hero from './components/Hero';



const cards = [
    {image : "card-image.png", title : "Secure", description : "Platea sit massa duis eget cursus enim pellentesque id. Imperdiet ut egestas id ut diam, erat in blandit facilisis. Mus pharetra."},
    {image : "card-image.png", title : "Incorruptible", description : "Platea sit massa duis eget cursus enim pellentesque id. Imperdiet ut egestas id ut diam, erat in blandit facilisis. Mus pharetra."},
    {image : "card-image.png", title : "Trusted", description : "Platea sit massa duis eget cursus enim pellentesque id. Imperdiet ut egestas id ut diam, erat in blandit facilisis. Mus pharetra."},
    {image : "card-image.png", title : "Node-validation Algorithm", description : "Platea sit massa duis eget cursus enim pellentesque id. Imperdiet ut egestas id ut diam, erat in blandit facilisis. Mus pharetra."},
]
function HomePage(props) {
    return (
        <>
            <div className='h-full'>
                <Header/>
                <Hero/>
                <div className='flex flex-rows flex-wrap justify-center sm:px-11 items-center'>
                    { 
                        cards.map(function(card, index) {
                            return <Card key={index} image = {card.image} title = {card.title} description = {card.description}/>
                        })
                    }   
                </div>
                <AboutSection/>
                <GetStarted/>
                <Footer/>
                
            </div>
        </>
    );
}

export default HomePage;