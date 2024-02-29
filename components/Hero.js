"use client"
import React from 'react'
import { CustomButton } from '../index'
import Image from 'next/image'


const Hero = () => {

    const handleScroll = () => {
    }

    return (
        <div className='hero'>
            <div className='flex-1 pt-36 px-2'>
                <h1 className='hero__title text-[#2b59ff]'>
                    Find, book, rent a car quick and super easy!
                </h1>

                <p className='hero__subtitle'>
                    Streamline your car rental experience with our effortless booking
                    process.
                </p>

                <CustomButton title="Explore Cars" 
                containerStyles="bg-primary-blue text-white rounded-full mt-10"
                handleClick={handleScroll}
                />
            </div>
            <div className='hero__image-container'>
              <div className='hero-image'>
                <Image src='/hero.png' alt='car' className='object-contain' width={700} height={590} priority/>
                <div className='hero__image-overlay'></div>
              </div>
            </div>
        </div>
    )
}

export default Hero
