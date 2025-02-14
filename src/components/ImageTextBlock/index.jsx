import React from 'react'
import Image from './Image'
import TextContent from './TextContent'
function ImageTextBlock({ imageSrc, altText, title, text, reverse = false, rounded }) {
    return (
        <div className={`grid grid-cols-1 md:grid-cols-2 items-center gap-5 my-5`}>
            <div className={`flex justify-center ${reverse ? "md:order-2" : "md:order-1"}`}>
                <Image imageSrc={imageSrc} altText={altText} rounded={rounded} />
            </div>
            <div className={`flex justify-center ${reverse ? "md:order-1" : "md:order-2"}`}>
                <TextContent title={title} text={text} rounded={rounded} />
            </div>
        </div>
    )
}

export default ImageTextBlock