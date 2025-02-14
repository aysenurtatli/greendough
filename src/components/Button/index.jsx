import React from 'react'

function Button({ children, onClick, type = "button", variant = "primary", size = "md" }) {
    const baseStyles = "rounded-md font-medium duration-200 cursor-pointer"
    const sizeStyles = {
        sm: "px-3 py-1 text-sm",
        md: "px-4 py-2",
        lg: "px-6 py-3 text-lg",
    }
    const variantStyles = {
        primary: "bg-[#FFBCA4] text-stone-800 hover:bg-[#FF9F7B]",
        outline: "border border-gray-600 text-gray-600 hover:bg-gray-100"
    }
    return (
        <button
            onClick={onClick}
            type={type}
            className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]}`}
        >{children}</button>
    )
}

export default Button