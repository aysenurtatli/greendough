import React from 'react'
import Input from '../Input'
import Button from '../Button'

function Form() {
    return (
        <div>
            <form>
                <div className='flex flex-col gap-5 w-full  mx-auto'>
                    <div className='flex gap-5'>
                        <Input type={"text"} placeholder={"Ad"}></Input>
                        <Input type={"text"} placeholder={"Soyad"}></Input>
                    </div>
                    <Input type={"text"} placeholder={"Email"}></Input>
                    <textarea className='bg-white p-3 w-full rounded-md resize-none focus:outline-none h-40 text-stone-500' placeholder='Mesaj'></textarea>
                    <Button type='submit' children={"Gönder"} />
                </div>
            </form>
        </div>
    )
}

export default Form