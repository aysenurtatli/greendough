import React from 'react'

function TextContent({
    title,
    text,
    titleSize = "2xl",
    titleColor = "text-[#00805F]",
    textColor = "text-[#1f1f1f]",
    textSize = "sm",
}) {
    return (
        <div>
            <h3 className={`text-${titleSize} font-medium ${titleColor}`} style={{ fontFamily: "DynaPuff" }}>{title}</h3>
            <p className={`text-${textSize} ${textColor}  md:text-md lg:text-lg`}>{text}</p>
        </div>
    )
}

export default TextContent