import React from 'react'

function Image({ imageSrc, altText, rounded = "xl" }) {
    return (
        <img src={imageSrc} alt={altText} className={`w-full shadow-lg shadow-[#e7dad2] rounded-3xl`} />
    )
}

export default Image