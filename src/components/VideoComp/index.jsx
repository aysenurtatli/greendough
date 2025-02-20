import React from 'react'
import Video from './video'
function VideoComp() {
    return (
        <div className='bg-[#327E60] w-full p-2 h-[800px] flex items-center justify-center'>
            <div>
                <div className='text-center mb-6 bg-[#FDF5F0] rounded-full shadow-md p-4'>
                    <span className='text-[#327E60] text-lg md:text-2xl lg:text-4xl' style={{ fontFamily: "dynaPuff" }}>Oyunun bitince hamurunu toprağa ek, Ağaca dönüşsün !</span>
                </div>
                <Video />
            </div>
        </div>
    )
}

export default VideoComp