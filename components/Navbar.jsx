import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { CustomButton } from '..'

const Navbar = () => {
  return (
    <header className='w-full absolute z-10'>
      <nav className='max-w-[1440px] mx-auto flex justify-between items-center px-6 py-4'>
        <Link href="" className='flex justify-center items-center'>
          <img src="./logo.svg" alt="car logo" width={117} height={18} className='object-logo' />
        </Link>

        <CustomButton
         title="Sign in"
         type="button"
         containerStyles='text-primary-blue rounded-full bg-white min-w-[120px]'
        />
      </nav>
    </header>
  )
}

export default Navbar
