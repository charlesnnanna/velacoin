import React from 'react';
import '../../../styles/home.css';


function AboutSection(props) {
    return (
        <div className='flex flex-col max-w-screen bg-header sm:px-80 py-20 text-white justify-center items-center text-center'>
            <h2 className='text-2xl max-w-full py-4 px-2 sm:text-5xl font-bold'>Iaculis ultrices in velit tellus, netus nulla. Amet sed amet.</h2>
            <p className='max-w-full px-4'>Magna integer tellus, scelerisque diam neque. Nibh et turpis morbi semper suspendisse. Facilisis neque viverra velit pulvinar tortor sed mi.</p>
            <button id = "gradient-button" className=' font-semibold text-black rounded-lg px-7 sm:px-2 py-4 my-7'>About Velacoin</button>
        </div>
    );
}

export default AboutSection;