import React from 'react'

function TextContent({
    title,
    text,
    titleSize = { lg: "3xl", md: "2xl", sm: "xl" },
    titleColor = "text-[#00805F]",
    textColor = "text-[#1f1f1f]",
    textSize = "sm",
}) {
    return (
        <div>
            <h3 className={`sm:text-${titleSize.sm} md:text-${titleSize.md} lg:text-${titleSize.lg} font-medium ${titleColor}`} style={{ fontFamily: "DynaPuff" }}>{title}</h3>
            <p className={`text-${textSize} ${textColor}  md:text-md lg:text-lg`}>{text}</p>
        </div>
    )
}

export default TextContent