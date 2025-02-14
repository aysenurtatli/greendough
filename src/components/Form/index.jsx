import React from 'react'
import Input from '../Input'
import Button from '../Button'

function Form() {
    return (
        <div>
            <form>
                <div className='flex flex-col gap-5 w-full md:w-md mx-auto'>
                    <Input type={"text"} placeholder={"Email"}></Input>
                    <textarea className='bg-white p-2 w-full rounded-md resize-y focus:outline-none h-40 text-stone-500'></textarea>
                    <Button type='submit' children={"Gönder"} />
                </div>
            </form>
        </div>
    )
}

export default Form