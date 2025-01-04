'use client'
import React, { useState } from 'react'
import img1 from '@/assets/pexels-heyhicham-28858556.jpg'
import Image from 'next/image'
const Signup = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

  return (
    <div>
        <Image className='h-full w-full' src={img1} alt='' />
      <div className='flex items-center justify-center text-white my-auto bg-black'>
        <form className='absolute top-0 rounded-lg shadow-lg backdrop-blur-sm  bg-black/40 mt-12 px-7 flex flex-col gap-7 py-32 justify-center items-center'>
            <span className='text-center'>
                <h2 className='text-white text-3xl font-bold'>SIGN UP</h2>
                <p>Please fill in the information appropriately</p>
            </span>

            <fieldset className='flex flex-col'>
                <label className='font-semibold'>Email</label>
                <input className='p-3 w-96 bg-white/40 outline-none rounded-md' type="email" />
            </fieldset>

            <fieldset className='flex flex-col'>
                <label className='font-semibold'>Password</label>
                <input className='p-3 outline-none bg-white/40 w-96 rounded-md' type="password" />
            </fieldset>
        </form>
      </div>
    </div>
  )
}

export default Signup
