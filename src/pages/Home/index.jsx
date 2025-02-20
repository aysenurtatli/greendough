import React from 'react'
import Hero from '../../components/Hero'
import VideoComp from '../../components/VideoComp'
function Home() {
    return (
        <>
            <div className="container mx-auto items-center justify-center flex p-2 h-screen">
                <Hero />
            </div>
            <VideoComp />
        </>
    )
}

export default Home