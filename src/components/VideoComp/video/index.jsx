import React from 'react'
import tanıtım from '../../VideoComp/tanıtım.mp4'
function Video() {

    return (
        <div className='border-5 border-white rounded-4xl w-fit h-fit shadow-lg shadow-[#436661]'>
            <video width={1000} autoPlay muted loop className='rounded-3xl'>
                <source src={tanıtım} type='video/mp4' />
            </video>
        </div>
    )
}

export default Video