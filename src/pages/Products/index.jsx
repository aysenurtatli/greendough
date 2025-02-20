import React from 'react'
import Product from '../../components/Product'
function Products() {
    return (
        <div className='container mx-auto p-4 min-h-screen'>
            <h2 className='text-center text-xl sm:text-2xl md:text-3xl font-medium mb-10 text-[#327E60]' style={{ fontFamily: "dynaPuff" }}>TEKLİ OYUN HAMURLARI</h2>
            <Product />
        </div>
    )
}

export default Products