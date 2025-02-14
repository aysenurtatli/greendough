import React from 'react'

function HeroImage({ imageSrc, altText }) {
    return (
        <img src={imageSrc} alt={altText} className='w-xs mx-auto md:w-full max-w-screen-sm' />
    )
}

export default HeroImage