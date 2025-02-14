import React from 'react'
import styles from '../HeroText/herotext.module.css'
function HeroText({ mainText, highlightText, }) {
    return (
        <div className='flex flex-col justify-center items-center md:items-start gap-5'>
            <h1 className='flex flex-col gap-4 font-bold text-3xl sm:text-4xl md:text-5xl xl:text-6xl text-center md:text-left  text-yellow-900'>
                {mainText} <br />
                <span className={styles.gradient}>{highlightText}</span>
            </h1>
            <div className='w-[250px]'>
                <h2 className='text-xl md:text-2xl font-medium text-center'>
                    Tohuma dönüşen
                    <span className='block bg-[#9DCE4B] rounded-xl'>%100 doğal</span>
                    Oyun hamurları
                </h2>
            </div>
        </div>
    )
}

export default HeroText