import React from 'react';
import '../../../styles/home.css'

function Hero(props) {
    return (
        <>
            <div className='flex flex-col bg-header  py-20 sm:px-72 sm:py-40 text-white justify-center items-center text-center'>
                <h1 id = "home-heading" className='  leading-tight tracking-normal text-4xl sm:text-7xl font-bold'>The  cryptocurrency <br/> of <span id='gradient-text'>the future</span></h1>
                <p className=' py-4 px-4 sm:px-2 sm:py-7'>
                At pulvinar sed dignissim sit integer gravida integer. Quisque vitae rhoncus ultricies maecenas. Ornare euismod elit ut tincidunt orci.
                </p>
                <button id="gradient-button" className=' text-black rounded-lg px-7 py-4'>Get Started</button>
            </div>
        </>
    );
}

export default Hero;