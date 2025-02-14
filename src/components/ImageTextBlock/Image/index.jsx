import React from 'react'

function Image({ imageSrc, altText, rounded = "xl" }) {
    return (
        <img src={imageSrc} alt={altText} className={`w-full rounded-${rounded} `} />
    )
}

export default Image