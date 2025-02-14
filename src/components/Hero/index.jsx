import React from 'react'
import HeroImage from './HeroImage'
import image from '../../assets/images/anasayfa.png'
import HeroText from './HeroText'

function Hero() {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-5'>
            <HeroText mainText="DOĞAYA TOHUM" highlightText="ÇOCUKLARA OYUN" />
            <HeroImage imageSrc={image} />
        </div>
    )
}

export default Hero