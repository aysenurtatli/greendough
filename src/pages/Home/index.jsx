import React from 'react'
import styles from '../Home/home.module.css'
import Hero from '../../components/Hero'
function Home() {
    return (
        <>
            <div className={`${styles.background} my-10 md:my-0 h-[calc(100vh-122px-103px)]  overflow-hidden flex md:items-center justify-center px-3`}>
                <div className="container mx-auto">
                    <Hero />
                </div>
            </div>
        </>
    )
}

export default Home