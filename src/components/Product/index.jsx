import React from 'react'
import { productInfos } from './productInfos'
import { Link } from 'react-router'
function Product() {

    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
            {productInfos.map((product) => (
                <div>
                    <Link>
                        <div className=' bg-white shadow-lg shadow-[#e7dad2] rounded-4xl'>
                            <img src={product.imageSrc} alt={product.name} className='w-full duration-300 ease-in-out hover:rotate-10 hover:scale-110' />
                        </div>
                    </Link>
                    <div className='my-4 text-center'>
                        <Link className='text-xs lg:text-sm duration-200'>GreenDough Oyun hamuru - {product.name}</Link>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Product