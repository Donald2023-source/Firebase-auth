'use client'
import React, { useState } from 'react'

const Signup = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

  return (
    <div>
      <form>
         <fieldset>
            <label>Email</label>
            <input className='p-3 w-72 rounded-md' type="text" />
         </fieldset>

         <fieldset>
            <label>Password</label>
            <input className='p-3 w-72 rounded-md' type="text" />
         </fieldset>
      </form>
    </div>
  )
}

export default Signup
