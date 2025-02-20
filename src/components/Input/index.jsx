import React from 'react'

function Input({ type, placeholder, onChange, variant = "primary" }) {

    const baseStyles = "rounded-md font-medium bg-white";
    const variantStyles = {
        primary: "bg-white text-stone-500 focus:outline-none p-3 w-full",
        outline: "border border-stone-200 text-stone-300"
    }
    return (
        <input type={type} placeholder={placeholder} onChange={onChange} className={`${baseStyles} ${variantStyles[variant]}`} />
    )
}

export default Input