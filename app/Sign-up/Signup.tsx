'use client'
import React, { useState } from 'react';
import img1 from '@/assets/pexels-heyhicham-28858556.jpg';
import Image from 'next/image';
import { auth } from '@/firebase/Config';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const Signup = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      console.log('User created successfully:', res.user);
      setEmail('');
      setPassword('');
    } catch (err: any) {
      setError(err.message || 'An error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative h-screen">
      <Image className="h-full w-full object-cover" src={img1} alt="Signup background" />
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-60 text-white">
        <form
          onSubmit={handleSubmit}
          className="rounded-lg shadow-lg backdrop-blur-sm bg-black/40 px-7 py-8 flex flex-col gap-5 w-full max-w-md"
        >
          <div className="text-center">
            <h2 className="text-3xl font-bold">SIGN UP</h2>
            <p>Please fill in the information appropriately</p>
          </div>

          <fieldset className="flex flex-col">
            <label htmlFor="email" className="font-semibold">
              Email
            </label>
            <input
              id="email"
              className="p-3 w-full bg-white/40 outline-none rounded-md"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </fieldset>

          <fieldset className="flex flex-col">
            <label htmlFor="password" className="font-semibold">
              Password
            </label>
            <input
              id="password"
              className="p-3 w-full bg-white/40 outline-none rounded-md"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </fieldset>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button
            type="submit"
            className={`p-3 rounded-lg w-full font-semibold ${
              isLoading ? 'bg-gray-500 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
            }`}
            disabled={isLoading}
          >
            {isLoading ? 'Submitting...' : 'Submit'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
