import React from 'react';
import '../../../styles/home.css'

function GetStarted(props) {
    
    const {image, title, description, button } = props

    return (
        <div className='flex flex-col sm:flex-row flex-wrap justify-around '>
            <div className=''>
                <img className=' w-40 sm:w-48 sm:w-52 sm:mt-32 ml-11  sm:ml-60' src="padlock.png" alt ="padlock" />
            </div>

            <div className='flex flex-col sm:items-start bg-header px-4 py-7 sm:py-20 sm:w-6/12 sm:px-6 sm:py-6 justify-center items-center text-center  text-white sm:text-left'>
                <h2 className='text-2xl my-2 sm:text-5xl font-bold'>Neque, aliquet elit tempus fermentum ornare massa ac. Eu.</h2>
                <p className='my-2'>At pulvinar sed dignissim sit integer gravida integer. Quisque vitae rhoncus ultricies maecenas. Ornare euismod elit ut tincidunt orci.</p>
                <button id = 'button'className=' font-semibold border my-4 border-white rounded-lg px-7 py-4'>Get Started</button>
            </div>
        </div>
    );
}

export default GetStarted;