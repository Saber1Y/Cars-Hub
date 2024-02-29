import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { footerLinks } from '../constants/data'


const Footer = () => {
  return (
    <footer className='flex flex-col mt-5 border-t border-gray-100 text-black'>
      <div className='flex max-md:flex-col flex-wrap justify-between gap-5 px-6 py-10'>
        <div className='flex flex-col items-start gap-6'>
          <Image src="/logo.svg" alt="cars hub logo" width={118} height={18} className='object-contain'/>
          <p className='text-gray-500 text-normal'>
            Car&apos; hub 2023 <br />
            All Rights Reserved &copy;
          </p>
        </div>
        <div className='footer__links'>
        {footerLinks.map((link) => (
          <div className='footer__link' key={link.title}>
            <h3 className='font-bold'>{link.title}</h3>
            {link.links.map((item) => (
              <Link key={item.title} href={item.url} className='text-black hover:text-blue-500'>
                {item.title}
              </Link>
            ))}
          </div>
        ))}
        </div>
        </div>

        
          <div className='footer__copyrights-link'>
            <Link href="/" className='tet-gray-500'>
              Privacy policy
            </Link>
            <Link href="/" className='tet-gray-500'>
              Terms Of Use
            </Link>
          </div>
    </footer>
  )
}

export default Footer
