import React from 'react'
import { productInfos } from './productInfos'
import Button from '../Button'
import { Link } from 'react-router'
function Product() {

    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
            {productInfos.map((product) => (
                <div className='flex flex-col items-center justify-center'>
                    <Link>
                        <div className='max-w-xs bg-white rounded-4xl'>
                            <img src={product.imageSrc} alt={product.name} className='w-full' />
                        </div>
                    </Link>
                    <div className='my-4'>
                        <Link className='text-xs lg:text-sm hover:text-[#FF9D67] duration-200'>GreenDough Oyun hamuru - {product.name}</Link>
                        <div className='flex items-center justify-center gap-3 my-2'>
                            <span>74.90 TL</span>
                            <Button children="Sepete Ekle" type='button' size='sm' variant='primary' />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Product