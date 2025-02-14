import React from 'react'
import { productInfos } from './productInfos'
import Button from '../Button'
function Product() {

    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
            {productInfos.map((product) => (
                <div className='flex flex-col items-center justify-center'>
                    <div className='max-w-sm bg-white rounded-4xl'>
                        <img src={product.imageSrc} alt={product.name} className='w-full' />
                    </div>
                    <div className='my-6'>
                        <div className='flex items-center justify-center gap-3'>
                            <span>74.90 TL</span>
                            <Button children="Sepete Ekle" type='button' size='sm' variant='primary' />
                        </div>
                        <span className='text-sm'>GreenDough Oyun hamuru - {product.name}</span>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Product