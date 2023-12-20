import React from 'react'
import Link from 'next/link'
import Image from 'next/image'


const Footer = () => {
  return (
    <footer className='flex flex-col mt-5 border-t border-gray-100 text-black'>
      <div className='flex max-md:flex-col flex-wrap justify-between gap-5 px-6 py-10'>
        <div className='flex flex-col items-start gap-6'>
          <Image src="/logo.svg" alt="cars hub logo" width={118} height={18} className='object-contain'/>
          <p className='text-gray-500 text-normal'>
            Car's hub 2023 <br />
            All Rights Reserved &copy;
          </p>

        </div>

      </div>
    </footer>
  )
}

export default Footer
