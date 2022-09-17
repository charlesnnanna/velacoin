import React from 'react';
import '../../../styles/home.css'


function Card(props) {

    const {image , title, description} = props
    return (
        <div id = "card" className=' sm:mx-4 my-7 sm:w-96 sm:h-96 max-w-xs flex flex-col py-2 px-4 items-center justify-center text-center rounded-3xl'>
            <img className='w-24 sm:w-16' src={image} alt = 'card-image'/>
            <h2 className='text-4xl sm:text-2xl font-semibold py-4'>{title}</h2>
            <p className='text-sm'>{description}</p>
        </div>
    );
}

export default Card;